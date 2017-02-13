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

(def cbr-date-formatter (f/formatter "dd.MM.yyyy"))

(def uri "datomic:dev://localhost:4334/sberpb_dev")

(def conn (d/connect uri))

(defn disconnect []  (d/release conn))

(def client "PYUMF" ) ;;"VADZF" "AANDF" "DACFF"


(defn find-price [sec date]
  (let [
         price (d/q '[:find ?e
                      :in $ ?sec ?dt
                      :where
                      [?e :price/security ?sec]
                      [?e :price/valuedate ?dt]
                     ] (d/db conn) sec  date)
    ]
    (count price)
  )
)

(defn excel-quote-to-db [quote sec]
  (let [
    dt (:date quote)
    price (:price quote)

    ;tr1 (println quote)
    ;tr2 (println sec)
  ]
  (if (or (nil? dt) (nil? price) (nil? sec) (> (find-price sec dt) 0) ) (println quote) (d/transact conn  [{ :price/security sec :price/lastprice price :price/valuedate dt :price/source "Excel import" :price/comment "Import from Bllomberg Excel output on 2017-02-13" :db/id #db/id[:db.part/user -100001 ]}] ) ) 
  )
)

(defn import-price-for-sec [bcode]
  (let [
    sec (ffirst (d/q '[:find ?e
                       :in $ ?bcode
                       :where
                       [?e :security/bcode ?bcode]
                       ] (d/db conn) bcode))

    prices (drop 6 (->> (load-workbook "e:/dev/java/quotes.xlsx")
                   (select-sheet bcode)
                   (select-columns {:A :date, :B :price})))
    trans (map (fn [x] (excel-quote-to-db x sec))  prices)
    ]
    (count trans)
  )
)

(defn save-rate-to-db [rate]
  (let [
    fxid  (ffirst (d/q '[:find ?e
                       :in $ ?sec
                       :where
                       [?e :security/acode ?sec]
                       ] (d/db conn) "USD"))
    ]
    (d/transact conn  [{ :price/security fxid :price/lastprice (:rate rate) :price/valuedate (:date rate) :price/source "CBR" :price/comment "Import from CBR web site 2017-02-10" :db/id #db/id[:db.part/user -100001 ]}] )
  )
  ;(println rate)
)

(defn readusd []
  (let [
      f (with-open [in-file (io/reader "e:/dev/java/rates.txt")]
          (doall
           (csv/read-csv in-file)))

      r (map (fn [x] (let [s (first x)] {:date (java.util.Date. (c/to-long (f/parse cbr-date-formatter (subs s 0 10))) )   :rate (Float/parseFloat (subs s 13 20))}) ) f)

    ]
    (doall (map save-rate-to-db r))
    (count r)
  )
)



(defn addclient []
  ;(d/transact conn  [{ :client/code client :client/name "New client name" :db/id #db/id[:db.part/user -102005]}] )
     (d/transact
    conn
    [{:db/id 17592186045513
      :security/bcode "BANE RM Equity"
      }])
)


(defn addsecs []
  (d/transact conn  [{:security/acode "RUR" :security/bcode "RUB Curncy" :security/exchange "MICEX" :security/isin "RUB ISIN" :db/id #db/id[:db.part/user -102005]}] )

)

(defn addtrans []

)

(def built-in-formatter (f/formatters :date-hour-minute-second-fraction))
(def build-in-basicdate-formatter (f/formatters :basic-date))

(defn ent [id]  (seq (d/entity (d/db conn) (ffirst id))) )


(defn find-transaction [tran]
  (let [
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
        str1 (str "{ :transaction/client #db/id[:db.part/user " (:client tran) "] :transaction/security #db/id[:db.part/user " (:security tran) "], :transaction/nominal " (format "%.1f" (:nominal tran)) " :transaction/price " (:price tran) " :transaction/direction \"" (:direction tran) "\" :transaction/valuedate  #inst \"" (f/unparse built-in-formatter (c/from-long (c/to-long (:valuedate tran))) ) "0000Z\", :transaction/currency \"" (:currency tran) "\" :transaction/comment \"\", :db/id #db/id[:db.part/user " newid "]}\n")
        ]
    (if (= (find-transaction tran) 0) 
      (spit "E:/DEV/clojure/sberpb/sberapi/DB/cl.clj" str1 :append true)
      (println tran)
    )
    
  )
)

(defn append-position-to-file [position]
  (let [
        str1 (str client "," client "," (name (first position)) "," (:currency (second position)) "," (:amount (second position)) "," (:price (second position)) "," (f/unparse build-in-basicdate-formatter (c/from-long (c/to-long (java.util.Date.))) ) "\n")
        ]
    ;;(println str1)
    (spit (str "E:/DEV/clojure/sberpb/sberapi/DB/" client ".txt") str1 :append true)
  )
)


(defn get-positions-bloomberg []
  (let [f (slurp (str "E:/DEV/Java/" client ".xml") )
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

(defn get-transactions []
  (let [f (slurp (str "E:/DEV/Java/" client ".xml"))
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
        tranmap (map tran-to-map trans)
    ]
    (filter (fn [x] (if (or (not (str/includes? (str/lower-case (:status x)) "valid") ) (= "RUR" (:security x)) (= "USD" (:security x)) (nil? (:client x)) (nil? (:currency x))  (= "R" (:direction x))) false true)) tranmap)
    ;;(first tranmap)
  )
)

(defn save-transactions []
  (let [tranmap (get-transactions)
        newtran (map (fn [x] {:client (:client x) :valuedate (:valuedate x) :direction (:direction x) :price (:price x) :nominal (:nominal x) :currency (:currency x) :security (get-sec-by-code (:security x)) }) tranmap)
        cnt (count newtran )
    ]
    (spit "E:/DEV/clojure/sberpb/sberapi/DB/cl.clj" "[\n" :append false)
    (doall (map append-tran-to-file newtran (range cnt))) 
    ;;(spit "E:/DEV/clojure/sberpb/sberapi/DB/cl.clj" "\n]\n" :append true)
    ;;(first newtran)
    cnt
  )
)

(defn save-transactions-bloomberg []
  (let [positions (get-positions-bloomberg)
    ]
    (spit (str "E:/DEV/clojure/sberpb/sberapi/DB/" client ".txt")  ",,,,,,\n" :append false)
    (spit (str "E:/DEV/clojure/sberpb/sberapi/DB/" client ".txt") "Account/Customer-ID,Portfolio Name,Security ID,Security Currency,Position/Quantity/Nominal,Cost Px asset Currency,Date\n" :append true)
    (doall (map append-position-to-file positions )) 
    ;;(spit "E:/DEV/clojure/sberpb/sberapi/DB/cl.clj" "\n]\n" :append true)
    (count positions)
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

  (let [trans (get-transactions)
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

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  ;;(find-not-registered-secs)
  (let [trans (get-transactions)
    res (map (fn [x] (if (> (find-transaction x) 0) (println x) (println 0))) trans) 
        
   ]
   res
  )
)
