(ns arenaparse.core
  (:gen-class)
  (use dk.ative.docjure.spreadsheet)
  (use (incanter core charts excel))
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

(def drive "c")

(def cbr-date-formatter (f/formatter "dd.MM.yyyy"))

(def day-of-week-formatter (f/formatter "EEE"))

(def uri "datomic:dev://localhost:4334/sberpb_dev")

;;(defn disconnect []  (d/release conn))

;(def client "RWVQF" ) ;;"PYUMF" "ELLQF" "XGZQF" "TADFF"  "AANDF" "VADZF" "AANDF" "DACFF"

(defn sort-tran-from-db [tran1 tran2]
  (let [
        ;tr1 (println tran1)
        ;tr2 (println tran2)

        
        dt1 (c/to-long (:valuedate tran1))
        dt2 (c/to-long (:valuedate tran2))

        ]
    
    (if (or  (< dt1  dt2)
	  (and (= dt1 dt2)(< (:id tran1) (:id tran2))))
    true
    false)
  )
)

(def custom-formatter (f/formatter "dd/MM/yyyy"))

(def built-in-formatter (f/formatters :date-hour-minute-second-fraction))
(def build-in-basicdate-formatter (f/formatters :basic-date))


(defn append-position-to-file [client position dt]
  (let [
        str1 (str client "," (name (first position)) "," (format "%.1f" (:amount (second position)))  "," (:price (second position)) "," (f/unparse build-in-basicdate-formatter (c/from-long (c/to-long dt)) ) "\n")
        ]
    ;;(println str1)
    (spit (str drive ":/DEV/output/" client ".txt") str1 :append true)
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
    (d/transact conn  [{ :price/security fxid, :price/lastprice (Double/parseDouble (str (:rate rate))),  :price/valuedate (:date rate), :price/targetprice (Double/parseDouble (str (:rate rate))), :price/analystrating 0.0, :price/source "CBR", :price/comment (str "Import from CBR web site " (f/unparse cbr-date-formatter (c/from-long (c/to-long (java.util.Date.))) )), :db/id #db/id[:db.part/user -100001 ]}] )
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

(defn readallcbrrates []
  (let [
        currencies ["USD" "EUR" "CHF" "GBP"]

        
  ]
  (doall (map (fn [x] (readcbrrates x)) currencies ))
  )
)


(defn addclient []
  (let [
     conn (d/connect uri)
     ]
    (d/transact-async conn [{ :client/code "XKTQF",  :client/name "Клиент XKTQF",  :db/id #db/id[:db.part/user -102057]}
]
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


(defn get-trans-count-for-day [client dt]
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
    newsec {:id (nth security 0) :acode (nth security 1) :exchange (nth security 2) :isin (nth security 3) :currency (nth security 4) :bcode (nth security 5)}
        
  ]

  newsec
  )

)


(defn get-securities []
  (let [
        conn (d/connect uri)
        securities (d/q '[:find ?e ?c ?x ?i ?currency ?bcode
                          :where
                          [?e :security/acode]
                          [?e :security/acode ?c]
                          [?e :security/exchange ?x]
                          [?e :security/isin ?i]
                          [?e :security/currency ?currency]
                          (or [?e :security/bcode ?bcode] [?e :security/bcode ?bcode]) 
                          ]
                        (d/db conn)) 

    ]
    (map security-to-map securities) 
  )
)

(defn get-secid-by-isin [isin]
  (let [secs (get-securities)
        sec (first (filter (fn [x] (if (= (compare (:isin x) isin) 0) true false)) secs))
        ]
    (:id sec)
  )
)



(defn excel-quote-to-db [quote]
  (let [
    dt (java.util.Date.)
    price (double (:price quote))
    target (double (:target quote))
    anr (double (:anr quote))
    secid (get-secid-by-isin (:isin quote))
    ;tr1 (println quote)
    ;tr2 (println secid)
    conn (d/connect uri)
  ]
 (d/transact-async conn  [{ :price/security secid :price/lastprice price :price/valuedate dt :price/targetprice target :price/analystrating anr  :price/source "Excel import" :price/comment "Import from Bllomberg Excel output on 2017-03-10" :db/id #db/id[:db.part/user -100001 ]}]))
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
    prices (drop 0 (->> (load-workbook (str drive ":/dev/java/quotes.xlsx") )
                                (select-sheet bcode)
                                (select-columns {:A :date, :B :price})))
    trans (doall (map (fn [x] (excel-quote-to-db x sec))  prices)) 
    ]
    "Success"
  )
)


(defn import-excel-quotes []
  (let [
    secs (drop 0 (->> (load-workbook (str drive ":/DEV/clojure/sberpb/sberapi/DB/quotes.xlsx") )
                   (select-sheet "Data")
                   (select-columns {:A :isin :C :price :D :anr :E :target})))

    ;newsecs (filter (fn [x] (if (= (compare (:isin x) "XS0493579238")  0) true false)) secs)
    trans (doall (map (fn [x] (excel-quote-to-db x))  secs )) 
    ]
    ;(count secs)
    ;newsecs
    "Success"
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

(defn get-sec-by-acode [acode]
  (let [secs (get-securities)
        sec (first (filter (fn [x] (if (= (:acode x) acode) true false)) secs)) 
        ]
    (:id sec)
  )
)


(defn get-secbcode-by-isin [isin]
  (let [secs (get-securities)
        sec (first (filter (fn [x] (if (= (compare (:isin x) isin) 0) true false)) secs))
        ]
    (:bcode sec)
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

(defn get-client-name-by-id [id]
  (let [
        clients (get-clients)
        client (first (filter (fn [x] (if (= (:id x) id) true false)) clients)) 
        ]
    (:code client)
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
        name (get-client-name-by-id (:client tran))
        newid (- 0 110001 id)
        str1 (str "{ :transaction/client #db/id[:db.part/user " (:client tran) "] :transaction/security #db/id[:db.part/user " (:security tran) "], :transaction/nominal " (str/replace (format "%.1f" (:nominal tran)) "," ".")  " :transaction/price " (:price tran) " :transaction/direction \"" (:direction tran) "\" :transaction/valuedate  #inst \"" (f/unparse built-in-formatter (c/from-long (c/to-long (:valuedate tran))) ) "0000Z\", :transaction/currency \"" (:currency tran) "\" :transaction/comment \"\", :db/id #db/id[:db.part/user " newid "]}\n")
        ]
    (if (= (find-transaction tran) 0)
      (spit (str drive ":/DEV/output/" name ".clj")  str1 :append true)
      (println tran)
    )
  )
)

(defn append-position-to-bfile [client position]
  (let [
        str1 (str client "," client "," (name (first position)) "," (:currency (second position)) "," (:amount (second position)) "," (:price (second position)) "," (f/unparse build-in-basicdate-formatter (c/from-long (c/to-long (java.util.Date.))) ) "\n")
        ]
    ;;(println str1)
    (spit (str drive ":/DEV/output/" client ".txt") str1 :append true)
  )
)


(defn get-positions-bloomberg [client]
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
       
        ;; security currency
        currency (second (first (filter (fn [x] (if (= (first x) (keyword "security/currency")) true false)) security)))
        fx_sec_currency  (if (or (= "RUR" currency) (= "RUB" currency))  1 (get-fxrate-by-date currency (nth (nth tran 5) 1)))


        fx_tran_currency (if (or (= "RUR" (nth (nth tran 5) 1)) (= "RUB" (nth (nth tran 5) 1)))  1 (get-fxrate-by-date (nth (nth tran 6) 1) (nth (nth tran 5) 1)))

        newtran {:client client :security acode  :nominal (nth (nth tran 2) 1) :price (nth (nth tran 3) 1) :direction (nth (nth tran 4) 1) :valuedate (nth (nth tran 5) 1) :currency currency :comment (if (> (count (nth tran 7)) 1) (nth (nth tran 7) 1) "")  :fx (/ fx_tran_currency fx_sec_currency) :id (nth (nth tran 8) 1)}
        ;tr1 (if (= (compare acode "HMSGLI" ) 0) (println (str (nth (nth tran 6) 1) " fx1: " fx_tran_currency " " currency " fx2: " fx_sec_currency " fx: " (:fx newtran) " date: " (:valuedate newtran) "\n")) ) 
        ]
    newtran
  )
)

(defn get-transactions-by-client-security [client security dt]
  (let [
    conn (d/connect uri)
    newdate (java.util.Date. (c/to-long (f/parse custom-formatter (f/unparse custom-formatter (c/from-long (c/to-long dt))))))


 
    ;; security (ffirst (d/q '[:find ?e
    ;;                    :in $ ?sec
    ;;                    :where
    ;;                    [?e :security/acode ?sec]
    ;;                    ] (d/db conn) (if (= 0 (compare currency "GBX")) "GBP" currency)))



    clientid (ffirst (d/q '[:find ?e
                       :in $ ?client
                       :where
                       [?e :client/code ?client]
                       ] (d/db conn) client))
    ;tr2 (println security)
    dt1 (java.util.Date. (c/to-long (f/parse custom-formatter (f/unparse custom-formatter (c/from-long (c/to-long #inst "2000-01-01T00:00:00.000-00:00" ))))))
        conn (d/connect uri)
    dt2 (java.util.Date. (c/to-long (f/parse custom-formatter (f/unparse custom-formatter (c/from-long (+ (c/to-long dt) (* 1000 24 3600)))))))
    trans (d/q '[:find ?e
                      :in $ ?client ?sec ?dt1 ?dt2
                      :where
                      [?e :transaction/client ?client]
                      [?e :transaction/security ?sec]
                      [?e :transaction/currency ?currency]
                      [?e :transaction/direction ?direction]
                      [?e :transaction/valuedate ?dt]
                      [(< ?dt ?dt2)]
                      [(> ?dt ?dt1)]
                     ] (d/db conn) clientid security dt1 dt2)
    newtrans  (map (fn [x] ( concat (ent [x]) [[:id (first x)]] ) ) trans)
    newtrans2 (sort (comp sort-tran-from-db)  (map (fn [x] (trans-to-map x)) newtrans)) 

    ]
    newtrans2
    ;rate
  )
)

(defn calc-wap-prices [client security dt] 
  (let [
        transactions (get-transactions-by-client-security client security dt)


        selltrans (filter (fn [x] (if (= (compare (:direction x) "S") 0) true false)) transactions)

        sellamount (reduce (fn [x y] {:nominal (+ (:nominal x) (:nominal y))}) selltrans)
    ]
    sellamount
  )
)

(defn get-transactions-from-db [client dt]
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
        newtrans  (map (fn [x] ( concat (ent [x]) [[:id (first x)]] ) ) trans)
        newtrans2 (map (fn [x] (trans-to-map x)) newtrans)


        ;tr5 (println newtrans2)
    ]
    ;(first newtrans2)
    ;(count newtrans2)
    newtrans2
  )
)


(defn get-transactions [client dt]
  (let [f (slurp (str drive ":/DEV/Java/" client ".xml"))
        x (parse f)
	
        trancnt (- (count (:content (nth   (:content (nth (:content x) 4) )  0 ) ) ) 1)  
        ;tr1 (println trancnt) 
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
                   (if (> (count item) 23) (not (str/includes? (str/lower-case  (if (nil? (first (:content  (first (:content (nth item 24)  )  )))) "" (first (:content  (first (:content (nth item 24)  )  ))))  ) "call")) true) 
                   (if (> (count item) 23) (not (str/includes? (str/lower-case  (if (nil? (first (:content  (first (:content (nth item 24)  )  )))) "" (first (:content  (first (:content (nth item 24)  )  ))))  ) "put")) true) 
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
    (filter (fn [x] (if (or 
                         (> (c/to-long (:valuedate x)) (c/to-long dt)) 
                         (not (str/includes? (str/lower-case (:status x)) "valid") ) 
                         (= "RUR" (:security x))
                         (= "GBP/RUR" (:security x))
                         (= "USD/RUR" (:security x))
                         (= "GBP/USD" (:security x))
                         (= "GBP/EUR" (:security x))
                         (= "EUR/USD" (:security x))
                         (= "EUR/RUR" (:security x))
                         (= "USD" (:security x))
                         (nil? (:client x))
                         (nil? (:currency x))
                         (= "R" (:direction x))
                         ) false true)) tranmap)
    ;tranmap
  )
)



(defn build-excel-positions [client]
  (let [
    transactions (sort (comp sort-tran-from-db) (get-transactions-from-db client (java.util.Date.))   )

    ;tr1 (println (first transactions))
    securities (get-securities)
    positions (loop [result {} trans transactions]
                (if (seq trans) 
                  (let [
                        tran (first trans)
                        
                        sec (str (:security tran)) ;;acode


                        currency (:currency (first (filter (fn [x] (if (= (:security tran) (:acode x)) true false)) securities)))

                        isin (:isin (first (filter (fn [x] (if (= (:security tran) (:acode x)) true false)) securities)))

                        ;tr8 ( println tran)  
                        
                        amnt (:amount ( (keyword isin) result ))

                        prevpr (if (nil? (:wapseccurr ((keyword isin) result))) 0 (:wapseccurr ((keyword isin) result)))
                        
                        rubprice (* (get-fxrate-by-date (:currency tran) (:valuedate tran)) (:price tran))

                        usdrate (get-fxrate-by-date "USD" (:valuedate tran))
                        ;seccurrrate (get-fxrate-by-date currency (:valuedate tran))

                        usdprice (/ rubprice usdrate)
                        seccurrprice (* (:fx tran) (:price tran))


                        ;tr3 (if (= (compare (:security tran) "HGMLN") 0) (println tran)) 
                        ;tr4 (if (= (compare (:security tran) "HGMLN") 0) (println (str "seccurrencyprice: " seccurrprice " rubprice: " rubprice))) 
                        prevrubprice (:waprub ((keyword isin) result))
                        prevusdprice (:wapusd ((keyword isin) result))

                        tranamnt (if (= "B" (:direction tran)) (:nominal tran) (- 0 (:nominal tran)))
                        newamnt (if (nil? amnt ) tranamnt (+ amnt tranamnt) )

                        wapseccurr (if (nil? amnt ) seccurrprice (if (> newamnt 0) (/ (+ (* prevpr amnt) (* seccurrprice tranamnt)) newamnt) 0))


                        waprub (if (nil? amnt ) rubprice (if (> newamnt 0) (/ (+ (* prevrubprice amnt) (* rubprice tranamnt)) newamnt) 0))


                        wapusd (if (nil? amnt ) usdprice (if (> newamnt 0) (/ (+ (* prevusdprice amnt) (* usdprice tranamnt)) newamnt) 0))
                        ]
                    (recur (assoc-in result [(keyword isin) ] {:amount newamnt :wapseccurr wapseccurr :waprub waprub :wapusd wapusd} )
                         (rest trans))
                  )
                  result)
                ) 


    result (filter (fn [x] (if (> (:amount (second x)) 0) true false))  positions) 
    
    ]
    result
    ;positions
  )
)


(defn sort-positions-by-isin [pos1 pos2] 
  (let [
        ;tr1 (println tran1)
        ;tr2 (println tran2)

        
        isin1 (name (first pos1))
        isin2 (name (first pos2))

        ]
    
    (if (>  (compare isin1  isin2) 0)
    true
    false)
  )
)

(def matrix-set-2 
         (dataset [:isin :amount :waprub :wapusd :wapcurr]
                         [[1 2 3] [4 5 6]]))
(defn save-to-excel []
  (save-xls ["sheet1" matrix-set-2] "c:/DEV/Java/yyy.xlsx")
)


(defn create-excel-report [client]
  (let [
    positions (sort (comp sort-positions-by-isin) (build-excel-positions client))
    newpositions (into [] (map (fn [x] [(get-secbcode-by-isin (name (first x)))   (:amount (second x)) (:waprub (second x)) (:wapusd (second x)) (:wapseccurr (second x))]) positions))
    ]
    (save-xls ["sheet1" (dataset [:isin :amount :waprub :wapusd :wapcurr] newpositions)] "c:/DEV/Java/yyy.xlsx")
    "Success"
  )
)

(defn get-positions [client dt]
  (let [

    ;; Retrieve transactions from original file
    ;;transactions (into [] (get-transactions dt))

    ;; Retrieve transactions from database
    transactions (sort (comp sort-tran-from-db) (get-transactions-from-db client dt))

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
                        prevpr (if (nil? (:price ((keyword sec) result))) 0 (:price ((keyword sec) result)))
                        
                        tranprice (* (:price tran) (:fx tran) )
                        
                        ;prevrubprice (:rubprice ((keyword sec) result))
                        tranamnt (if (= "B" (:direction tran)) (:nominal tran) (- 0 (:nominal tran)))
                        
                        
                        ;tr2 (println tran)
                        newamnt (if (nil? amnt ) tranamnt (+ amnt tranamnt) )


                        

                        wap (if (nil? amnt ) tranprice (if (> newamnt 0) 



                        (if (> tranamnt 0) (/ (+ (* prevpr amnt) (* tranprice tranamnt)) newamnt)  prevpr)  0))

                        ;tr5 (if (= (compare "XS0088543193" sec) 0) (println "tranprice: " tranprice " wap " wap))
                        ;tr1 (println sec) 
                        ]
                    (recur (assoc-in result [(keyword sec) ] {:amount newamnt :price wap} )
                         (rest trans))
                  )                  
                  result)
                ) 
    ;tr1 (println (first positions))
    newpositions (map (fn [x] [(name (first x)) {:amount (if (< (:amount (second x)) 0) 0 (:amount (second x))) :price (:price (second x))}]) positions)

    filterpos (filter (fn [x] (if (= 0.0 (:amount (second x)) ) false true)) newpositions)

    result (map (fn [x] (let [
                             assettype (second (first (filter (fn [y] (if (= (first y) :security/assettype) true false))(ent [[(get-secid-by-isin (first x))]]) ) ))
                             isrussian (if (and 

;; Check ISIN starts with RU
(= (compare (subs  (second (first (filter (fn [y] (if (= (first y) :security/isin) true false)) (ent [[(get-secid-by-isin (first x))]])) )) 0 2) "RU") 0 ) 
;; Check currency = RUB
(= (compare (subs  (second (first (filter (fn [y] (if (= (first y) :security/isin) true false)) (ent [[(get-secid-by-isin (first x))]])) )) 0 2) "RU") 0 ) 
)  true false)
                              ]
                          [(first x) {:amount (if (and (= assettype 5) (= isrussian true)) (* 1000 (:amount (second x))) (:amount (second x)))  :price (:price (second x)) }]
                          )) filterpos)
    ]
    result
  )
)


(defn save-positions-bloomberg [client positions dt]
  (spit (str drive ":/DEV/output/" client ".txt")  ",,,,\n" :append true)
  (doall (map (fn [x] (append-position-to-file client x dt)) positions))
)

(defn get-portf-by-num [client num]
  (let [
    newnum (+ 1325462399000 (* num 86400000) ) ;;1487807999000 1325462399000 1488412799000 1488412799000 1325462399000 1488412799000  1487116799000  1451692799000  1325462399000
    newdate (java.util.Date. newnum)
    ;tr1 (println newdate)
    day-of-week (f/unparse day-of-week-formatter (c/from-long (c/to-long newdate)))

    ;tr2 (println day-of-week)
    trancount (get-trans-count-for-day client newdate)

        
    positions (if (and (> trancount 0) (or (= 0 (compare "Mon" day-of-week)) 
                                               (= 0 (compare "Tue" day-of-week))
                                               (= 0 (compare "Wed" day-of-week))
                                               (= 0 (compare "Thu" day-of-week))
                                               (= 0 (compare "Fri" day-of-week))
                                               ) )  (filter (fn [x] (if (> (:amount (second x)) 0) true false)) (get-positions client newdate)) )
        ]    
    (if (not (nil? positions)) (save-positions-bloomberg client positions newdate) )
    "Success"
  )
)


(defn append-positions-to-excel [client]
  (let [
        dt (java.util.Date.)
        positions (get-positions client dt)
        secs (into [] (map (fn [position] [(first position)] ) positions))
        ]
    ;secs
    (with-open [out-file (io/writer (str "C:/DEV/output/" client ".csv") )] (csv/write-csv out-file secs))
                                        ;(doall (map (fn [position] (append-position-to-excel position)) positions))
    )
)

(defn get-all-secs []
  (let [
        dt (java.util.Date.)
        theportfs ["AANDF" "AKTOS" "AQLON1" "BBJSF" "BBKEF" "ELLQF" "INFLE" "KDBSF" "LABKS" "MADUN2" "PYUFF" "PYUMF" "RWVQF" "STHUF" "TADPF" "VADAF" "VADZF" "XFEQF" "XGNQF" "XKQQF" "BBJUF" "KDBRF"]

        secs (loop [result [] portfs theportfs]
                (if (seq portfs)
                  (let [
                        dt (java.util.Date.)
                        client (first portfs)
                        positions (get-positions client dt)

                        secs (into [] (map (fn [position] [(first position)] ) positions))
                        ]
                    (recur (into [] (concat result secs))
                         (rest portfs))
                  )
                  result)
                )
        ]
    (with-open [out-file (io/writer (str "C:/DEV/clojure/sberpb/sberapi/DB/out.csv") )] (csv/write-csv out-file secs))
    ;
  )
)

(defn addprice [isin price]
  (let [
     conn (d/connect uri)
     secid (get-secid-by-isin isin)
     ]
    (d/transact-async conn [{ :price/comment "First try with Excel import",  :price/lastprice price, :price/security secid, :price/valuedate (java.util.Date.) :price/source "Excel import 2017-03-02" :db/id #db/id[:db.part/user -102031]}]
    )
    ; To insert new entity:
    ;(d/transact conn [{ :transaction/client #db/id[:db.part/user 17592186045573] :transaction/security #db/id[:db.part/user 17592186065674], :transaction/nominal 108000.0 :transaction/price 100.0 :transaction/direction "S" :transaction/valuedate #inst "2014-04-22T00:00:00.0000000Z", :transaction/currency "RUB" :transaction/comment "", :db/id #db/id[:db.part/user -110002] }])
     ; To delete entity by id:
     ;(d/transact conn [[:db.fn/retractEntity 17592186045577]])
  )
)

(defn readsecprices []
  (let [
    theprices (with-open [in-file (io/reader "C:/Data/secprices.csv")] (doall (csv/read-csv in-file)))

    newprices (loop [result {} prices (drop 1 theprices) ]
                (if (seq prices)
                  (let [
                        secprice (str/split (first (first prices)) #";")
                        ]
                    (recur (assoc result (keyword (nth secprice 0)) (Double. (nth secprice 3))   ) (rest prices))
                  )
                  result)
   )
  ]
  (doall (map (fn [item] (addprice (name (first item)) (second item))) newprices))
  "Success"
  )
)

(defn generateportfs [client]
  (let [

    ;res1 (spit (str "C:/DEV/clojure/sberpb/sberapi/DB/" client ".txt")  ",,,,\n" :append false)
    res1 (spit (str drive ":/DEV/output/" client ".txt") (str "Portfolio Name,Security ID,Position/Quantity/Nominal,Cost Px asset Currency,Date\n")  :append false)
    days (map (fn [x] (get-portf-by-num client x)) (range 0 2500 1))
    ]
    (doall days)
    "Success"
  )
)


(defn save-transactions [client]
  (let [
          ;t1 (println (str "in save-transactions " client))
          tranmap (get-transactions client (java.util.Date.))

          newtran (map (fn [x] (let [

      
          sec (ent [[(get-sec-by-acode (:security x))]] )
          assettype (second (first (filter (fn [x] (if (= (first x) :security/assettype) true false)) sec)))
          seccurrency (second (first (filter (fn [security] (if (= (keyword "security/currency") (first security)) x)) sec)))

          secisin (second (first (filter (fn [security] (if (= (keyword "security/isin") (first security)) x)) sec)))


          ;tr2 (println (str (:security x) " isin = " secisin " seccurrency = " seccurrency " trancurrency = " (:currency x)) )
          


          rateseccurrency (get-fxrate-by-date seccurrency (:valuedate x))

          trancurrency (if (= 0 (compare "RUR" (:currency x)) ) "RUB" (:currency x))          
          ratetranscurrency (get-fxrate-by-date trancurrency (:valuedate x))

                                     
          newrate (if (= 5 assettype) 1 (/ ratetranscurrency rateseccurrency )) 


          ;tr3 (if (= (compare (:security x) "HGMLN" ) 0) (println (str (:currency x) " fx1: " ratetranscurrency  " " seccurrency  " fx2: " rateseccurrency " fx: " newrate  " date: " (:valuedate x) "\n")) )


          newprice (if (= seccurrency trancurrency) (:price x) (* (:price x) newrate))

          ;tr1 (println "rate1: " ratetranscurrency " rate2: " newrate)
          ]
          {:client (:client x) :valuedate (:valuedate x) :direction (:direction x) :price (* newrate (:price x))  :nominal (:nominal x) :currency seccurrency :security (get-sec-by-acode (:security x)) }

          ))  (filter (fn [x] (if (or (nil? (:security x)) (= 0 (compare "TNBP" (:security x))) (= 0 (compare "TNBPP" (:security x))))  false true))  tranmap))

          filtertran (filter (fn [x] (if (nil? (:security x)) false true))  newtran)
          cnt (count filtertran )
          t1 (spit (str drive ":/DEV/output/" client ".clj")  "[\n" :append false)
          t2 (doall (map append-tran-to-file  filtertran (range cnt)))
          t3 (spit (str drive ":/DEV/output/" client ".clj")  "]" :append true)
    ]

    ;;(spit "c:/DEV/clojure/sberpb/sberapi/DB/cl.clj" "\n]\n" :append true)
    ;;(first newtran)
    cnt
  )
)

(defn import-client-trans [client]
  (let [
        t1 (println (str "in import-client-trans " client))
        conn (d/connect uri)
        path (str drive ":/DEV/output/" client ".clj")
        t2 (println path)
        data-tx (read-string (slurp path)) 
        ]
    @(d/transact-async conn data-tx)
  )
)

(defn create-tran-files []
  (let [
        conn (d/connect uri)
        clients (d/q '[:find ?e
                       :in $ 
                       :where
                       [?e :client/name]
                       ] (d/db conn)) 

        t1 (doall (map (fn [x] (let [name (second (first (ent [x])))
                                     ]
                              (if (= (.exists (io/as-file (str drive ":/DEV/Java/" name ".xml"))) true) (save-transactions name)))) clients))


        t2 (doall (map (fn [x] (let [name (second (first (ent [x])))]
                              (if (= (.exists (io/as-file (str drive ":/DEV/output/" name ".clj"))) true) (import-client-trans name)))) clients))

        ;; t1 (spit (str drive ":/DEV/clojure/sberpb/sberapi/DB/cl.clj")  "[\n" :append false)
        ;; t2 (doall (map (fn [x] (spit (str drive ":/DEV/clojure/sberpb/sberapi/DB/cl.clj")  (str x) :append true)) (range 10)))
        ;; t3 (spit (str drive ":/DEV/clojure/sberpb/sberapi/DB/cl.clj")  "]" :append true)
  ])
)

(defn checktransec [tran]
  (let [
      secs (get-securities)
      sec (filter (fn [x] (if (= (:acode x) (:security tran)) true false)) secs) ]
    (if (> (count sec) 0) true false)

  )

)


(defn find-not-registered-secs [client]

  (let [trans (get-transactions client (java.util.Date.))
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

(defn append-sec-to-file [client sec id]
  (let [
        newid (+ 100322 id)
        str1 (str  "{ :security/acode \"" (:acode sec)  "\", :security/isin \"" (:isin sec) "\", :security/bcode \"" (:bcode sec) "\", :security/exchange \"" (:exchange sec) "\", :security/currency \"" (:currency sec) "\",   :db/id #db/id[:db.part/user -" newid "]}\n" ) 
        ]
    (spit (str drive ":/DEV/output/" client ".txt") str1 :append true)
  )
)

(defn import-new-secs [client]
  (let [
    secs (drop 0 (->> (load-workbook (str drive ":/dev/java/secs.xlsx") )
                   (select-sheet "Data")
                   (select-columns {:A :acode :B :isin :C :bcode :D :currency :E :exchange})))

    ;newsecs (filter (fn [x] (if (> (:isquote x) 0.0) true false)) secs)
    ;trans (map (fn [x] (import-price-for-sec (:code x)))  newsecs )
    ]
   (spit (str drive ":/DEV/output/" client ".txt") "[\n" :append false)
   (doall (map (fn [x y] (append-sec-to-file client x y)) secs (range (count secs)))) 
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
