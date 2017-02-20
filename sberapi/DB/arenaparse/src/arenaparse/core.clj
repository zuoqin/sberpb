(ns arenaparse.core
  (:gen-class)
  (use dk.ative.docjure.spreadsheet)
  (:require [clojure.xml :as xml]
            [clojure.zip :as zip]
            [clj-time.format :as f]
            [clj-time.coerce :as c]
            [clj-time.core :as t]

            [clojure.string :as str]
            [datomic.api :as d]

            [clojure.data.csv :as csv]
            [clojure.java.io :as io]
            [dk.ative.docjure.spreadsheet]
  )
)

(def drive "e")

(def cbr-date-formatter (f/formatter "dd.MM.yyyy"))

(def day-of-week-formatter (f/formatter "EEE"))

(def uri "datomic:dev://localhost:4334/sberpb_dev")

;;(defn disconnect []  (d/release conn))

(def client "ELLQF" ) ;;"XGZQF" "TADFF" "PYUMF" "AANDF" "VADZF" "AANDF" "DACFF"


(def custom-formatter (f/formatter "dd/MM/yyyy"))

(def built-in-formatter (f/formatters :date-hour-minute-second-fraction))
(def build-in-basicdate-formatter (f/formatters :basic-date))


(defn append-position-to-file [position dt]
  (let [
        str1 (str client "," (name (first position)) "," (format "%.1f" (:amount (second position)))  "," (:price (second position)) "," (f/unparse build-in-basicdate-formatter (c/from-long (c/to-long dt)) ) "\n")
        ]
    ;;(println str1)
    (spit (str drive ":/DEV/clojure/sberpb/sberapi/DB/" client ".txt") str1 :append true)
  )
)

(defn get-fxrate-by-date [currency dt]
  (let [
    conn (d/connect uri)
    ;tr1 (println (str "in get-fxrate-by-date " currency " for date: " dt) )
    newdate (java.util.Date. (c/to-long (f/parse custom-formatter (f/unparse custom-formatter (c/from-long (c/to-long dt))))))


 
    security (ffirst (d/q '[:find ?e
                       :in $ ?sec
                       :where
                       [?e :security/acode ?sec]
                       ] (d/db conn) (if (= 0 (compare currency "GBX")) "GBP" currency)))

    ;tr2 (println security)

    rate (first (sort-by first #(> (c/to-long %1) (c/to-long %2))
           (d/q '[:find ?d ?p
                  :in $ ?sec ?dt
                  :where
                  [?e :price/security ?sec]
                  [?e :price/valuedate ?d]
                  [?e :price/lastprice ?p]
                  [(<= ?d ?dt)]
                  ]
                (d/db conn) security newdate)))


    ;tr3 (println rate)
    newrate (if (= 0 (compare currency "GBX")) (/ (nth rate 1) 100.0) (nth rate 1))
    ]
    newrate 
    ;rate
  )
)

(defn find-price [sec date]
  (let [
         conn (d/connect uri)
         price (d/q '[:find ?e
                      :in $ ?sec ?dt
                      :where
                      [?e :price/security ?sec]
                      [?e :price/valuedate ?dt]
                     ] (d/db conn) sec  date)
    ]
    (count price)
    ;(ent price)
  )
)

(defn excel-quote-to-db [quote sec]
  (let [
    dt (:date quote)
    price (:price quote)

    ;tr1 (println quote)
    ;tr2 (println sec)
    conn (d/connect uri)
  ]
  (if (or (nil? dt) (nil? price) (nil? sec) (> (find-price sec dt) 0) ) 1 (d/transact conn  [{ :price/security sec :price/lastprice price :price/valuedate dt :price/source "Excel import" :price/comment "Import from Bllomberg Excel output on 2017-02-13" :db/id #db/id[:db.part/user -100001 ]}] ) ) 
  )
)

(defn import-price-for-sec [bcode]
  (let [
    conn (d/connect uri)
    sec (ffirst (d/q '[:find ?e
                       :in $ ?bcode
                       :where
                       [?e :security/bcode ?bcode]
                       ] (d/db conn) bcode))

    ;tr1 (println (str sec " bcode: " bcode))
    prices (drop 6 (->> (load-workbook (str drive ":/dev/java/quotes.xlsx") )
                                (select-sheet bcode)
                                (select-columns {:A :date, :B :price})))
    trans (map (fn [x] (excel-quote-to-db x sec))  prices)
    ]
    (count trans)
  )
)


(defn import-excel-quotes []
  (let [
    secs (drop 0 (->> (load-workbook (str drive ":/dev/java/quotes.xlsx") )
                   (select-sheet "Content")
                   (select-columns {:B :code :C :isquote})))

    newsecs (filter (fn [x] (if (> (:isquote x) 0.0) true false)) secs)
    trans (map (fn [x] (import-price-for-sec (:code x)))  newsecs )
    ]
    (count trans)
  )
)

(defn save-rate-to-db [currency rate]
  (let [
    conn (d/connect uri)
    fxid  (ffirst (d/q '[:find ?e
                       :in $ ?sec
                       :where
                       [?e :security/acode ?sec]
                       ] (d/db conn) currency))


        ;tr1 (println rate)
    ]
    (d/transact conn  [{ :price/security fxid :price/lastprice (Double/parseDouble (str (:rate rate)))  :price/valuedate (:date rate) :price/source "CBR" :price/comment "Import from CBR web site 2017-02-14" :db/id #db/id[:db.part/user -100001 ]}] )
  )
  ;(println rate)
)

(defn readcbrrates [currency]
  (let [
      ;tr1 (println "in cbr rates")
      f (with-open [in-file (io/reader (str drive ":/dev/java/rates_" currency ".txt") )]
      (doall (csv/read-csv in-file)))


      ;tr2 (println (first f))
      r (map (fn [x] (let [s (first x)] {:date (java.util.Date. (c/to-long (f/parse cbr-date-formatter (subs s 0 10))) )   :rate (Float/parseFloat (subs s 13))}) ) f)
      ;tr3 (println (first r))
    ]
    (doall (map (fn [x] (save-rate-to-db currency x)) r ))
    (count r)

    ;(first f)
  )
)



(defn addclient []
  (let [
     conn (d/connect uri)
     ]
    (d/transact conn [{ :client/code "TADFF" :client/name "Клиент TADFF" :db/id #db/id[:db.part/user -102009]}]
    )
    ; To insert new entity:
    ;(d/transact conn [{ :transaction/client #db/id[:db.part/user 17592186045573] :transaction/security #db/id[:db.part/user 17592186065674], :transaction/nominal 108000.0 :transaction/price 100.0 :transaction/direction "S" :transaction/valuedate #inst "2014-04-22T00:00:00.0000000Z", :transaction/currency "RUB" :transaction/comment "", :db/id #db/id[:db.part/user -110002] }])
     ; To delete entity by id:
     ;(d/transact conn [[:db.fn/retractEntity 17592186045577]])
  )
)


(defn addsecs []
  ;(d/transact conn  [{:security/acode "RUR" :security/bcode "RUB Curncy" :security/exchange "MICEX" :security/isin "RUB ISIN" :db/id #db/id[:db.part/user -102005]}] )

)

(defn addtrans []

)

(defn ent [id]
  (let [
   conn (d/connect uri)
  ]
  (seq (d/entity (d/db conn) (ffirst id))) )
)


(defn get-trans-count-for-day [dt]
  (let [
        dt1 (java.util.Date. (c/to-long (f/parse custom-formatter (f/unparse custom-formatter (c/from-long (c/to-long dt))))))
        conn (d/connect uri)
        dt2 (java.util.Date. (c/to-long (f/parse custom-formatter (f/unparse custom-formatter (c/from-long (+ (c/to-long dt) (* 1000 24 3600)))))))
        trans (d/q '[:find ?e
                      :in $ ?client ?dt1 ?dt2
                      :where
                      [?e :transaction/client ?c]
                      [?c :client/code ?client]
                      [?e :transaction/currency ?currency]
                      [?e :transaction/direction ?direction]
                      [?e :transaction/valuedate ?dt]
                      [(< ?dt ?dt2)]
                      [(> ?dt ?dt1)]
                     ] (d/db conn) client dt1 dt2)
    ]
    (count trans) 
    ;(ent client)
  )

)

(defn find-transaction [tran]
  (let [
         conn (d/connect uri)
         client (ent (d/q '[:find ?eid
                          :in $ ?eid
                          :where
                          [?eid]
                          ] (d/db conn) (:client tran)))



         trans (d/q '[:find ?e
                      :in $ ?client ?currency ?direction ?nominal ?price ?dt
                      :where
                      [?e :transaction/client ?c]
                      [?c :client/code ?client]
                      [?e :transaction/currency ?currency]
                      [?e :transaction/direction ?direction]
                      [?e :transaction/nominal ?nominal1]
                      [?e :transaction/price ?price1]
                      [?e :transaction/valuedate ?dt]
                      [(* ?price 1.000001) ?p1]
                      [(* ?price 0.999999) ?p2]
                      [(* ?nominal 1.000001) ?n1]
                      [(* ?nominal 0.999999) ?n2]
                      [(< ?nominal1 ?n1)]
                      [(> ?nominal1 ?n2)]
                      [(< ?price1 ?p1)]
                      [(> ?price1 ?p2)]
                     ] (d/db conn) (second (first client))  (:currency tran) (str (:direction tran))  (:nominal tran) (:price tran) (:valuedate tran))
        

    ]
    (count trans) 
    ;(ent client)
  )

)

(defn client-to-map [client]
  (let [
    newclient {:id (nth client 0) :code (nth client 1) :name (nth client 2)}        
  ]

  newclient
  )

)

(defn get-clients []
  (let [
         conn (d/connect uri)
         clients (d/q '[:find ?e ?c ?n
                          :where
                          [?e :client/code]
                          [?e :client/code ?c]
                          [?e :client/name ?n]
                          ]
                        (d/db conn)) 

    ]
    (map client-to-map clients) 
  )
)


(defn security-to-map [security]
  (let [
    newsec {:id (nth security 0) :acode (nth security 1) :exchange (nth security 2) :isin (nth security 3)}
        
  ]

  newsec
  )

)


(defn get-securities []
  (let [
        conn (d/connect uri)
        securities (d/q '[:find ?e ?c ?x ?i
                          :where
                          [?e :security/acode]
                          [?e :security/acode ?c]
                          [?e :security/exchange ?x]
                          [?e :security/isin ?i]
                          ]
                        (d/db conn)) 

    ]
    (map security-to-map securities) 
  )
)



(defn parse [s]
   (clojure.xml/parse
     (java.io.ByteArrayInputStream. (.getBytes s))))


(defn get-isin-by-seccode [code]
  (let [secs (get-securities)
        sec (first (filter (fn [x] (if (= (:acode x) code) true false)) secs)) 
        ]
    (:isin sec)
  )
)

(defn get-sec-by-code [code]
  (let [secs (get-securities)
        sec (first (filter (fn [x] (if (= (:acode x) code) true false)) secs)) 
        ]
    (:id sec)
  )
)

(defn get-client-by-code [code]
  (let [
        clients (get-clients)
        client (first (filter (fn [x] (if (= (:code x) code) true false)) clients)) 
        ]
    (:id client)
  )
)


(defn tran-to-bmap [tran]
  (let [
    tranmap (
      loop [result {} num 0 ]
        (if (< num 36)

          (case num
            1 (recur (assoc result :status (first (:content  (first (:content (nth tran num)  )  )))  ) (inc num))
            3 (recur (assoc result :client (first (:content  (first (:content (nth tran num)  )  )))  ) (inc num))
            6 (recur (assoc result :valuedate (java.util.Date. (c/to-long (f/parse built-in-formatter (first (:content  (first (:content (nth tran num)  )  ))) )))

    ) (inc num)) 
            9 (recur (assoc result :direction (if (str/includes? (str/lower-case (first (:content  (first (:content (nth tran num)  )  )))) "repo") "R"  (if (= "B" (subs (first (:content  (first (:content (nth tran num)  )  ))) 3 4 )) "S" "B"))   ) (inc num))
            10 (recur (assoc result :price (if (nil? (first (:content  (first (:content (nth tran num)  )  )))) 0 (Float/parseFloat (first (:content  (first (:content (nth tran num)  )  ))))))    (inc num)
                    )
            12 (recur (assoc result :nominal (Float/parseFloat (if (= (subs (first (:content  (first (:content (nth tran num)  )  ))) 0 1) "-") (subs (first (:content  (first (:content (nth tran num)  )  ))) 1)  (first (:content  (first (:content (nth tran num)  )  )))) )  ) (inc num))
            14 (recur (assoc result :currency (first (:content  (first (:content (nth tran num)  )  ))) ) (inc num))
            ;16 (recur (assoc result :client (subs (first (:content  (first (:content (nth tran num)  )  ))) 1 )  ) (inc num))
            23 (recur (assoc result :security (get-isin-by-seccode (first (:content  (first (:content (nth tran num)  )  ))))  ) (inc num))
            24 result
            (recur result (inc num))
          )
          result
        )
        )

  ]
    tranmap
  )
)

(defn tran-to-map [tran]
  (let [
    tranmap (
      loop [result {} num 0 ]
        (if (< num 36)

          (case num
            1 (recur (assoc result :status (first (:content  (first (:content (nth tran num)  )  )))  ) (inc num))
            3 (recur (assoc result :client (get-client-by-code (first (:content  (first (:content (nth tran num)  )  ))))  ) (inc num))
            6 (recur (assoc result :valuedate (java.util.Date. (c/to-long (f/parse built-in-formatter (first (:content  (first (:content (nth tran num)  )  ))) )))

    ) (inc num)) 
            9 (recur (assoc result :direction (if (str/includes? (str/lower-case (first (:content  (first (:content (nth tran num)  )  )))) "repo") "R"  (if (= "B" (subs (first (:content  (first (:content (nth tran num)  )  ))) 3 4 )) "S" "B"))   ) (inc num))
            10 (recur (assoc result :price (if (nil? (first (:content  (first (:content (nth tran num)  )  )))) 0 (Float/parseFloat (first (:content  (first (:content (nth tran num)  )  ))))))    (inc num)
                    )
            12 (recur (assoc result :nominal (Float/parseFloat (if (= (subs (first (:content  (first (:content (nth tran num)  )  ))) 0 1) "-") (subs (first (:content  (first (:content (nth tran num)  )  ))) 1)  (first (:content  (first (:content (nth tran num)  )  )))) )  ) (inc num))
            14 (recur (assoc result :currency (first (:content  (first (:content (nth tran num)  )  ))) ) (inc num))
            ;16 (recur (assoc result :client (subs (first (:content  (first (:content (nth tran num)  )  ))) 1 )  ) (inc num))
            ;;23 (recur (assoc result :security (get-sec-by-code (first (:content  (first (:content (nth tran num)  )  ))))  ) (inc num))

            23 (recur (assoc result :security (first (:content  (first (:content (nth tran num)  )  )))  ) (inc num))
            24 result
            (recur result (inc num))
          )
          result
        )
        )

  ]
    tranmap
  )
)


(defn append-tran-to-file [tran id]
  (let [
        newid (- 0 110001 id)
        str1 (str "{ :transaction/client #db/id[:db.part/user " (:client tran) "] :transaction/security #db/id[:db.part/user " (:security tran) "], :transaction/nominal " (str/replace (format "%.1f" (:nominal tran)) "," ".")  " :transaction/price " (:price tran) " :transaction/direction \"" (:direction tran) "\" :transaction/valuedate  #inst \"" (f/unparse built-in-formatter (c/from-long (c/to-long (:valuedate tran))) ) "0000Z\", :transaction/currency \"" (:currency tran) "\" :transaction/comment \"\", :db/id #db/id[:db.part/user " newid "]}\n")
        ]
    (if (= (find-transaction tran) 0) 
      (spit (str drive ":/DEV/clojure/sberpb/sberapi/DB/cl.clj")  str1 :append true)
      (println tran)
    )
    
  )
)

(defn append-position-to-bfile [position]
  (let [
        str1 (str client "," client "," (name (first position)) "," (:currency (second position)) "," (:amount (second position)) "," (:price (second position)) "," (f/unparse build-in-basicdate-formatter (c/from-long (c/to-long (java.util.Date.))) ) "\n")
        ]
    ;;(println str1)
    (spit (str drive ":/DEV/clojure/sberpb/sberapi/DB/" client ".txt") str1 :append true)
  )
)


(defn get-positions-bloomberg []
  (let [f (slurp (str drive ":/DEV/Java/" client ".xml") )
        x (parse f)
        trancnt (- (count (:content (nth   (:content (nth (:content x) 4) )  0 ) ) ) 1)  
        trans (loop [result [] num 0 ]
          (let [item (:content (nth (:content (nth   (:content (nth (:content x) 4) )  0 ) )  num))]
            (if (< num trancnt)            
              
              (if (= (:ss:StyleID (:attrs (nth item 0))) "s72" )
                (recur (conj result item ) (inc num))
                (recur result (inc num))
              )              
              result
            )
          )
        )
        tranmap (map tran-to-bmap trans)

        newtrans (filter (fn [x] (if (or  (not (str/includes? (str/lower-case (:status x) ) "valid") )   (= "RUR" (:security x)) (= "USD" (:security x)) (nil? (:client x)) (nil? (:currency x))  (= "R" (:direction x))) false true)) tranmap)




        positions (loop [result {} trans newtrans]
                (if (seq trans) 
                  (let [
                        tran (first trans)
                        sec (str (:security tran))
                        amnt (:amount ( (keyword sec) result ))
                        prevpr (:price ((keyword sec) result))

                        tranamnt (if (= "B" (:direction tran)) (:nominal tran) (- 0 (:nominal tran)))
                        newamnt (if (nil? amnt ) tranamnt (+ amnt tranamnt) )
                        wap (if (nil? amnt ) (:price tran) (if (> newamnt 0) (/ (+ (* prevpr amnt) (* (:price tran) tranamnt)) newamnt) 0))
                        ]
                    (recur (assoc-in result [(keyword sec) ] {:amount newamnt :price wap :currency (:currency tran)} )
                         (rest trans))
                  )                  
                  result)
                ) 
    ]
    (filter (fn [x] (if (= 0.0 (:amount (second x) )) false true))  positions) 
  )
)

(defn trans-to-map [tran]
  (let [
        ;tr0 (println tran)
        client (:db/id (second (first (filter (fn [x] (if (= (first x) (keyword "transaction/client")) true false)) tran))) ) ;(ent [[(:db/id (nth (nth tran 0) 1))]]  )
        
        security (ent [[(:db/id (second (first (filter (fn [x] (if (= (first x) (keyword "transaction/security")) true false)) tran))) )]] ) ;;(ent [[(:db/id (nth (nth tran 1) 1))]]  )

        acode (second (first (filter (fn [x] (if (= (first x) (keyword "security/acode")) true false)) security) ))
        ;; ;tr1 (println security)
        currency (second (first (filter (fn [x] (if (= (first x) (keyword "security/currency")) true false)) security)))
        ;; ;;:security (nth (nth security 0) 1)


        newtran {:client client :security acode  :nominal (nth (nth tran 2) 1) :price (nth (nth tran 3) 1) :direction (nth (nth tran 4) 1) :valuedate (nth (nth tran 5) 1) :currency currency :comment (if (> (count (nth tran 7)) 1) (nth (nth tran 7) 1) "")  :fx (if (or (= "RUR" currency) (= "RUB" currency))  1 (get-fxrate-by-date currency (nth (nth tran 5) 1)))}
        ;tr1 (println newtran)
        ]
    newtran
  )
)


(defn get-transactions-from-db [dt]
  (let [
        dt1 (java.util.Date. (c/to-long (f/parse custom-formatter (f/unparse custom-formatter (c/from-long (c/to-long #inst "2000-01-01T00:00:00.000-00:00" ))))))
        conn (d/connect uri)
        dt2 (java.util.Date. (c/to-long (f/parse custom-formatter (f/unparse custom-formatter (c/from-long (+ (c/to-long dt) (* 1000 24 3600)))))))
        trans (d/q '[:find ?e
                      :in $ ?client ?dt1 ?dt2
                      :where
                      [?e :transaction/client ?c]
                      [?c :client/code ?client]
                      [?e :transaction/currency ?currency]
                      [?e :transaction/direction ?direction]
                      [?e :transaction/valuedate ?dt]
                      [(< ?dt ?dt2)]
                      [(> ?dt ?dt1)]
                     ] (d/db conn) client dt1 dt2)
        newtrans  (map (fn [x] (ent [x])) trans)
        newtrans2 (map (fn [x] (trans-to-map x)) newtrans)


        ;tr5 (println newtrans2)
    ]
    ;(first newtrans2)
    ;(count newtrans2)
    newtrans2
  )
)


(defn get-transactions [dt]
  (let [f (slurp (str drive ":/DEV/Java/" client ".xml"))
        x (parse f)
	
        trancnt (- (count (:content (nth   (:content (nth (:content x) 4) )  0 ) ) ) 1)  
        ;tr1 (println (nth (:content (nth   (:content (nth (:content x) 4) )  0 ) ) 101)) 
        trans (loop [result [] num 0 ]
          (let [item (if (<= num trancnt) (:content (nth (:content (nth   (:content (nth (:content x) 4) )  0 ) )  num)))  
            ]
            (if (<= num trancnt)            
              
              (if (and
                   (= (:ss:StyleID (:attrs (nth item 0))) "s72" )
                   (or (= 0 (compare "We Sell" (first (:content  (first (:content (nth item 9)  )  ))))) 
                       (= 0 (compare "We Buy" (first (:content  (first (:content (nth item 9)  )  )))))
                   )
                   (not (str/includes? (str/lower-case (first (:content  (first (:content (nth item 4)  )  )))) "forts"))
                )
                (recur (conj result item ) (inc num))
                (recur result (inc num))
              )
              result
            )
          )
        )
        ;tr5 (println (first trans ) )
        ;filtertran  (filter (fn [x] (if (nil? (:security x)) false true)) trans)
        tranmap (map tran-to-map trans)
	;tr2 (println (nth tranmap 25))
    ]
    (filter (fn [x] (if (or (> (c/to-long (:valuedate x)) (c/to-long dt)) (not (str/includes? (str/lower-case (:status x)) "valid") ) (= "RUR" (:security x)) (= "USD" (:security x)) (nil? (:client x)) (nil? (:currency x))  (= "R" (:direction x))) false true)) tranmap)
    ;;(first tranmap)
  )
)



(defn getPositions [dt]
  (let [

    ;; Retrieve transactions from original file
    ;;transactions (into [] (get-transactions dt))

    ;; Retrieve transactions from database
    transactions (get-transactions-from-db dt)

    newtrans (filter (fn [x] (if (or (nil? (:security x)) (= 0 (compare "MSTT" (:security x))) )  false true)) transactions)
    ;;tr1 (println (first transactions))
    securities (get-securities)
    positions (loop [result {} trans newtrans]
                (if (seq trans) 
                  (let [
                        tran (first trans)
                        sec (get-isin-by-seccode (str (:security tran))) 
                        currency (:currency (first (filter (fn [x] (if (= (:security tran) (:id x)) true false)) securities)))
                        amnt (:amount ( (keyword sec) result ))
                        prevpr (:price ((keyword sec) result))
                        
                        ;rubprice (* (:fx tran) (:price tran))

                        ;prevrubprice (:rubprice ((keyword sec) result))
                        tranamnt (if (= "B" (:direction tran)) (:nominal tran) (- 0 (:nominal tran)))
                        newamnt (if (nil? amnt ) tranamnt (+ amnt tranamnt) )
                        wap (if (nil? amnt ) (:price tran) (if (> newamnt 0) (/ (+ (* prevpr amnt) (* (:price tran) tranamnt)) newamnt) 0))

                        ;tr1 (println wap)
                        ]
                    (recur (assoc-in result [(keyword sec) ] {:amount newamnt :price wap} )
                         (rest trans))
                  )                  
                  result)
                ) 
    ;tr1 (println (first positions))
    newpositions (map (fn [x] [(name (first x)) {:amount (if (< (:amount (second x)) 0) 0 (:amount (second x))) :price (:price (second x))}  ]) positions)
    ;result (map (fn [x] (let [y (name (first x))   z (if (< (second x) 0) 0 (second x)) ] [y z] ))  positions) 
    
    ]
    (filter (fn [x] (if (= 0.0 (:amount (second x)) ) false true)) newpositions)
  )
)


(defn save-positions-bloomberg [positions dt]
  (spit (str drive ":/DEV/clojure/sberpb/sberapi/DB/" client ".txt")  ",,,,\n" :append true)
  (doall (map (fn [x] (append-position-to-file x dt)) positions))
)

(defn get-portf-by-num [num]
  (let [
    newnum (+ 1451692799000 (* num 86400000) ) ;;1487116799000  1451692799000  1325462399000
    newdate (java.util.Date. newnum)
    ;tr1 (println newdate)
    day-of-week (f/unparse day-of-week-formatter (c/from-long (c/to-long newdate)))

    ;tr2 (println day-of-week)
    trancount (get-trans-count-for-day newdate)

        
    positions (if (and (> trancount 0) (or (= 0 (compare "Mon" day-of-week)) 
                                               (= 0 (compare "Tue" day-of-week))
                                               (= 0 (compare "Wed" day-of-week))
                                               (= 0 (compare "Thu" day-of-week))
                                               (= 0 (compare "Fri" day-of-week))
                                               ) )  (filter (fn [x] (if (> (:amount (second x)) 0) true false)) (getPositions newdate)) )
        ]    
    (if (not (nil? positions)) (save-positions-bloomberg positions newdate) )
    "Success"
  )
)




(defn generateportfs []
  (let [

    ;res1 (spit (str "C:/DEV/clojure/sberpb/sberapi/DB/" client ".txt")  ",,,,\n" :append false)
    res1 (spit (str drive ":/DEV/clojure/sberpb/sberapi/DB/" client ".txt") (str "Portfolio Name,Security ID,Position/Quantity/Nominal,Cost Px asset Currency,Date\n")  :append false)
    days (map (fn [x] (get-portf-by-num x)) (range 0 500 1))
    ]
    (doall days)
    "Success"
  )
)


(defn save-transactions []
  (let [
          tranmap (get-transactions (java.util.Date.))

          newtran (map (fn [x] (let [

      
          sec (ent [[(get-sec-by-code (:security x))]] )

          seccurrency (second (first (filter (fn [security] (if (= (keyword "security/currency") (first security)) x)) sec)))

          ;tr2 (println x)
          rateseccurrency (get-fxrate-by-date seccurrency (:valuedate x))

          trancurrency (if (= 0 (compare "RUR" (:currency x)) ) "RUB" (:currency x))          
          ratetranscurrency (get-fxrate-by-date trancurrency (:valuedate x))

        
          newrate (/ ratetranscurrency rateseccurrency )
          newprice (if (= seccurrency trancurrency) (:price x) (* (:price x) newrate))

          ;tr1 (println "rate1: " ratetranscurrency " rate2: " newrate)
          ]
          {:client (:client x) :valuedate (:valuedate x) :direction (:direction x) :price (* newrate (:price x))  :nominal (:nominal x) :currency seccurrency :security (get-sec-by-code (:security x)) }

          ))  (filter (fn [x] (if (nil? (:security x)) false true))  tranmap))

          filtertran (filter (fn [x] (if (nil? (:security x)) false true))  newtran)
          cnt (count filtertran )
    ]
    (spit (str drive ":/DEV/clojure/sberpb/sberapi/DB/cl.clj")  "[\n" :append false)
    (doall (map append-tran-to-file  filtertran (range cnt))) 
    ;;(spit "c:/DEV/clojure/sberpb/sberapi/DB/cl.clj" "\n]\n" :append true)
    ;;(first newtran)
    cnt
  )
)

(defn checktransec [tran]
  (let [
      secs (get-securities)
      sec (filter (fn [x] (if (= (:acode x) (:security tran)) true false)) secs) ]
    (if (> (count sec) 0) true false)

  )

)


(defn find-not-registered-secs []

  (let [trans (get-transactions (java.util.Date.))
        secs (for [x trans
         :let [res (checktransec x)]
         :when (= res false)
         ]
        (:security x))
    ]
    ;(map (fn [x] (if (nil? x) 0 (ent [[x]]  ))) (distinct secs))  
    (distinct secs)
    ;trans
  )
)

(defn append-sec-to-file [sec id]
  (let [
        newid (+ 100138 id)
        str1 (str  "{ :security/acode \"" (:acode sec)  "\", :security/isin\"" (:isin sec) "\", :security/bcode \"" (:bcode sec) "\", :security/exchange \"" (:exchange sec) "\" :security/currency \"" (:currency sec) "\",   :db/id #db/id[:db.part/user -" newid "]}\n" ) 
        ]
    ;;(println str1)
    (spit (str drive ":/DEV/clojure/sberpb/sberapi/DB/" client ".txt") str1 :append true)
  )
)

(defn import-new-secs []
  (let [
    secs (drop 0 (->> (load-workbook (str drive ":/dev/java/secs.xlsx") )
                   (select-sheet client)
                   (select-columns {:A :acode :B :isin :C :bcode :D :currency :E :exchange})))

    ;newsecs (filter (fn [x] (if (> (:isquote x) 0.0) true false)) secs)
    ;trans (map (fn [x] (import-price-for-sec (:code x)))  newsecs )
    ]
   (spit (str drive ":/DEV/clojure/sberpb/sberapi/DB/" client ".txt") "[\n" :append false)
   (doall (map append-sec-to-file secs (range (count secs)))) 
   "Success"
  )
)

(defn -main 
  "I don't do a whole lot ... yet."
  [& args]
  ;(doall (map (fn [x] (println x)) (find-not-registered-secs)))
  ;(addclient)
  ;(readcbrrates "GBP")
  ;(import-new-secs)
  ;(save-transactions)
  ;(println (format "%.1f" 3000.0))
  ;(generateportfs)
  ;(import-new-secs)
  (println "Success")
)
