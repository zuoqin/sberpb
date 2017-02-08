(ns arenaparse.core
  (:gen-class)
  (:require [clojure.xml :as xml]
            [clojure.zip :as zip]
            [clj-time.format :as f]
            [clj-time.coerce :as c]



            [datomic.api :as d]
  )
)


(def uri "datomic:dev://localhost:4334/sberpb_dev")

(def conn (d/connect uri))


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

(def built-in-formatter (f/formatters :date-hour-minute-second-fraction))

(defn get-sec-by-code [code]
  (let [secs (get-securities)
        sec (first (filter (fn [x] (if (= (:acode x) code) true false)) secs)) 
        ]
    (:id sec)
  )
)

(defn get-client-by-code [code]
  (let [clients (get-clients)
        client (first (filter (fn [x] (if (= (:code x) code) true false)) clients)) 
        ]
    (:id client)
  )
)

(defn tran-to-map [tran]
  (let [
    tranmap (
      loop [result {} num 0 ]
        (if (< num 36)

          (case num
            3 (recur (assoc result :client (first (:content  (first (:content (nth tran num)  )  ))) ) (inc num)) 
            6 (recur (assoc result :valuedate (java.util.Date. (c/to-long (f/parse built-in-formatter (first (:content  (first (:content (nth tran num)  )  ))) )))

    ) (inc num)) 
            9 (recur (assoc result :direction (if (= "B" (subs (first (:content  (first (:content (nth tran num)  )  ))) 3 4 )) "S" "B")  ) (inc num))
            10 (recur (assoc result :price (Float/parseFloat (first (:content  (first (:content (nth tran num)  )  ))))  ) (inc num))
            12 (recur (assoc result :nominal (Float/parseFloat (if (= (subs (first (:content  (first (:content (nth tran num)  )  ))) 0 1) "-") (subs (first (:content  (first (:content (nth tran num)  )  ))) 1)  (first (:content  (first (:content (nth tran num)  )  )))) )  ) (inc num))
            14 (recur (assoc result :currency (first (:content  (first (:content (nth tran num)  )  ))) ) (inc num))
            ;16 (recur (assoc result :client (subs (first (:content  (first (:content (nth tran num)  )  ))) 1 )  ) (inc num))
            23 (recur (assoc result :security (first (:content  (first (:content (nth tran num)  )  ))) ) (inc num))
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

(defn tran-to-file-map [tran]
  (let [
    tranmap (
      loop [result {} num 0 ]
        (if (< num 36)

          (case num
            3 (recur (assoc result :client (get-client-by-code (first (:content  (first (:content (nth tran num)  )  ))))  ) (inc num)) 
            6 (recur (assoc result :valuedate (java.util.Date. (c/to-long (f/parse built-in-formatter (first (:content  (first (:content (nth tran num)  )  ))) )))

    ) (inc num)) 
            9 (recur (assoc result :direction (if (= "B" (subs (first (:content  (first (:content (nth tran num)  )  ))) 3 4 )) "S" "B")  ) (inc num))
            10 (recur (assoc result :price (Float/parseFloat (first (:content  (first (:content (nth tran num)  )  ))))  ) (inc num))
            12 (recur (assoc result :nominal (Float/parseFloat (if (= (subs (first (:content  (first (:content (nth tran num)  )  ))) 0 1) "-") (subs (first (:content  (first (:content (nth tran num)  )  ))) 1)  (first (:content  (first (:content (nth tran num)  )  )))) )  ) (inc num))
            14 (recur (assoc result :currency (first (:content  (first (:content (nth tran num)  )  ))) ) (inc num))
            ;16 (recur (assoc result :client (subs (first (:content  (first (:content (nth tran num)  )  ))) 1 )  ) (inc num))
            23 (recur (assoc result :security (get-sec-by-code (first (:content  (first (:content (nth tran num)  )  ))))  ) (inc num))
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
    )
    
  )
)

(defn get-transactions []
  (let [f (slurp "E:/DEV/Java/DACCF.xml")
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

        tranmap (map tran-to-file-map trans)




        ;tran (:content (nth (:content (nth   (:content (nth (:content x) 4) )  0 ) )  36))


        

      cnt (count tranmap ) 
      ;;tran (nth tranmap 0)
      ;(count (:content (nth   (:content (nth (:content x) 4) )  0 ) ) ) 
    ]
    ;;tranmap
     ;;(nth (:content (nth (:content (nth   (:content (nth (:content x) 4) )  0 ) )  36)) 29) 
    ;;(println (:content x) )
    (spit "E:/DEV/clojure/sberpb/sberapi/DB/cl.clj" "[\n" :append false)
    (doall (map append-tran-to-file tranmap (range cnt))) 
    (spit "E:/DEV/clojure/sberpb/sberapi/DB/cl.clj" "\n]\n" :append true)
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
    (distinct secs) 
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
