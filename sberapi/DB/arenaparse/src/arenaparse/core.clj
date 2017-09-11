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
            ;[ajax.core :refer [GET POST]]
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

        
        dtv1 (c/to-long (:valuedate tran1))
        dtv2 (c/to-long (:valuedate tran2))

        dtt1 (c/to-long (:valuedate tran1))
        dtt2 (c/to-long (:valuedate tran2))

        ]
    
    (if (or  (< dtt1  dtt2)
          (and (= dtt1 dtt2) (< dtv1 dtv2) )
	  (and (= dtt1 dtt2) (= dtv1 dtv2) (< (compare (:direction tran1) (:direction tran2)) 0) ))
    true
    false)
  )
)

(def custom-formatter (f/formatter "dd/MM/yyyy"))

(def built-in-formatter (f/formatters :date-hour-minute-second-fraction))
(def build-in-basicdate-formatter (f/formatters :basic-date))
(def build-in-date-formatter (f/formatters :date))


(defn append-position-to-file [client position dt]
  (let [
        ;;tr1 (println position)
        str1 (str client "," (name (first position)) "," (format "%.1f" (/ (:amount (second position)) (if (str/includes? (name (first position)) "LKOH=") 10.0 (if (str/includes? (name (first position)) "SBRF=") 100.0 1.0)))) "," (:price (second position)) "," (f/unparse build-in-basicdate-formatter (c/from-long (c/to-long dt)) ) "\n")
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

    newcurrency (if (= currency "GBX") "GBP" (if (= "PTS" currency) "RUB" (if (nil? currency) "RUB" (str/upper-case currency))))

 
    security (ffirst (d/q '[:find ?e
                       :in $ ?sec
                       :where
                       [?e :security/acode ?sec]
                       ] (d/db conn) newcurrency))

    ;tr2 (println (str "security=" security " currency=" newcurrency) )

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
    newrate (if (= currency "GBX") (/ (nth rate 1) 100.0) (nth rate 1))
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

    trid (ffirst (d/q '[:find ?e
                        :in $ ?cur ?dt
                        :where
                        [?s :security/acode ?cur]
                        [?e :price/security ?s]
                        [?e :price/valuedate ?dt]
                       ] (d/db conn) currency (:date rate)))

        ;tr1 (println rate)
    ]
    (if (nil? trid) (d/transact conn  [{ :price/security fxid, :price/lastprice (Double/parseDouble (str (:rate rate))),  :price/valuedate (:date rate), :price/targetprice (Double/parseDouble (str (:rate rate))), :price/analystrating 0.0, :price/yield 0.0, :price/dvddate #inst "1900-01-01T00:00:00.0000000Z", :price/duration 0.0, :price/putdate #inst "1900-01-01T00:00:00.0000000Z", :price/source "CBR", :price/comment (str "Import from CBR web site " (f/unparse cbr-date-formatter (c/from-long (c/to-long (java.util.Date.))) )), :db/id #db/id[:db.part/user -100001 ]}] ))
  )
  ;(println rate)
)

(defn readcbrrates [currency]
  (let [
      ;tr1 (println "in cbr rates")
      f (with-open [in-file (io/reader (str drive ":/DEV/clojure/sberpb/sberapi/DB/rates_" currency ".txt") )]
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
        currencies ["USD" "EUR" "CHF" "GBP" "HKD"]

        
  ]
  (doall (map (fn [x] (readcbrrates x)) currencies ))
  )
)


(defn addclient []
  (let [
     conn (d/connect uri)
     ]
    (d/transact-async conn [{ :security/acode "EURONAT19R", :security/isin "XS1605088928", :security/bcode "XS1605088928 Corp", :security/assettype 5, :security/multiple 1.0, :security/name "", :security/currency "USD", :db/id #db/id[:db.part/user -100754] }

{ :security/acode "RDC25", :security/isin "US779382AU43", :security/bcode "US779382AU43 Corp", :security/assettype 5, :security/multiple 1.0, :security/name "", :security/currency "USD", :db/id #db/id[:db.part/user -100755] }
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


         ;tr1 (println (str tran " clientid = " client) )


         ;; trans (d/q '[:find ?e
         ;;              :in $ ?client ?currency ?direction ?nominal ?price ?dt
         ;;              :where
         ;;              [?e :transaction/client ?c]
         ;;              [?c :client/code ?client]
         ;;              ;[?e :transaction/currency ?currency]
         ;;              [?e :transaction/direction ?direction]
         ;;              [?e :transaction/nominal ?nominal1]
         ;;              [?e :transaction/price ?price1]
         ;;              [?e :transaction/valuedate ?dt]
         ;;              [(* ?price 1.000001) ?p1]
         ;;              [(* ?price 0.999999) ?p2]
         ;;              [(* ?nominal 1.000001) ?n1]
         ;;              [(* ?nominal 0.999999) ?n2]
         ;;              [(< ?nominal1 ?n1)]
         ;;              [(> ?nominal1 ?n2)]
         ;;              [(< ?price1 ?p1)]
         ;;              [(> ?price1 ?p2)]
         ;;             ] (d/db conn) (second (first (filter (fn [x] (if (= (first x) :client/code) true false)) client)))  (:currency tran) (str (:direction tran))  (:nominal tran) (:price tran) (:valuedate tran))
        

         trans (d/q '[:find ?e
                      :in $ ?client ?refnum
                      :where
                      [?e :transaction/client ?c]
                      [?c :client/code ?client]
                      [?e :transaction/refnum ?refnum]
                     ] (d/db conn) (second (first (filter (fn [x] (if (= (first x) :client/code) true false)) client))) (:refnum tran))
    ]
    (count trans)
    ;(ent client)
  )
)

(defn client-to-map [client]
  (let [
    newclient {:id (nth client 0) :code (nth client 1) :name (nth client 2) :currency (nth client 3) :usd (nth client 4) :rub (nth client 5) :eur (nth client 6) :gbp (nth client 7) :stockshare (nth client 8) :bondshare (nth client 9) :signedadvisory (nth client 10)}
  ]
  newclient
  )
)

(defn get-clients []
  (let [
         conn (d/connect uri)
         clients (d/q '[:find  ?e ?c ?n ?curr ?usd ?rub ?eur ?gbp ?ss ?bs ?sa
                          :where
                          [?e :client/code]
                          [?e :client/code ?c]
                          [?e :client/name ?n]
                          [?e :client/signedadvisory ?sa]
                          [?e :client/currency ?curr]
                          [?e :client/usd ?usd]
                          [?e :client/rub ?rub]
                          [?e :client/eur ?eur]
                          [?e :client/gbp ?gbp]
                          [?e :client/stockshare ?ss]
                          [?e :client/bondshare ?bs]
                          ]
                        (d/db conn)) 

    ]
    (map client-to-map clients) 
  )
)

(defn clients-to-excel []
  (save-xls ["sheet1" (dataset [:code :name :signedadvisory :currency :stockshare :bondshare :usd :rub :eur "gbp"] (get-clients))] (str drive ":/DEV/Java/allclients.xlsx") )
)

(defn security-to-map [security]
  (let [
    newsec {:id (nth security 0) :acode (nth security 1) :exchange (nth security 2) :isin (nth security 3) :currency (nth security 4) :bcode (nth security 5) :assettype (nth security 6)}
        
  ]

  newsec
  )

)

(defn get-latest-trans-accounts []
  (let [
    dt1 (java.util.Date.)
    conn (d/connect uri)
    dt2 (java.util.Date. (c/to-long (f/parse custom-formatter (f/unparse custom-formatter (c/from-long (- (c/to-long dt1) (* 1000 24 3600 5)))))))

    ;dt3 (java.util.Date. (c/to-long (f/parse custom-formatter (f/unparse custom-formatter (c/from-long (+ (c/to-long dt1) (* 1000 24 3600 3)))))))
    
    clients (d/q '[:find ?client
        :in $ ?dt1 ?dt2
        :where
        [?e :transaction/client ?c]
        [?c :client/code ?client]
        [?e :transaction/valuedate ?dt]
        [?u :user/code "rustam"]
        [?c :client/advisors ?u]
        [(< ?dt ?dt1)]
        [(> ?dt ?dt2)]
      ] (d/db conn) dt1 dt2)
    ]
    (distinct (map (fn [x] (first x)) clients)) 
    ;(ent client)
  )
)



(defn get-securities []
  (let [
        conn (d/connect uri)
        securities (d/q '[:find ?e ?c ?x ?i ?currency ?bcode ?assettype
                          :where
                          [?e :security/acode]
                          [?e :security/acode ?c]
                          [(get-else $ ?e :security/exchange "") ?x]
                          [?e :security/isin ?i]
                          [?e :security/currency ?currency]
                          (or [?e :security/bcode ?bcode] [?e :security/bcode ?bcode])
                          [?e :security/assettype ?assettype]
                          ]
                        (d/db conn)) 

    ]
    (map security-to-map securities) 
  )
)

(defn securities-to-excel []
  (save-xls ["sheet1" (dataset [:acode :isin :bcode] (get-securities))] (str drive ":/DEV/Java/allsecurities.xlsx") )
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

    tr1 (println quote)
    price (double (:price quote))
    target (double (:target quote))
    anr (double (:anr quote))

    ;tr1 (:yield quote)
    yield (double (:yield quote))
    duration (double (:duration quote))

    dvddt (:dvddate quote)
    ;tr1 (println dvddt)    
    newdvddt (if (> (count dvddt) 0 ) (java.util.Date. (c/to-long (f/parse custom-formatter dvddt))) (java.util.Date. (c/to-long (f/parse custom-formatter "01/01/1900"))))

    newputdt (if (> (count (:putdate quote)) 0 ) (java.util.Date. (c/to-long (f/parse custom-formatter (:putdate quote)))) (java.util.Date. (c/to-long (f/parse custom-formatter "01/01/1900"))))
    secid (get-secid-by-isin (:isin quote))
    ;tr1 (println quote)
    tr2 (println secid)
    conn (d/connect uri)

    tr1 (ffirst (d/q '[:find ?e
                       :in $ ?sec
                       :where
                       [?e :price/security ?sec]
                      ] (d/db conn) secid))

    tr2 (if (not (nil? tr1)) (d/transact conn [[:db.fn/retractEntity tr1]])) 
        
  ]
  (d/transact-async conn  [{ :price/security secid :price/lastprice price :price/valuedate dt :price/targetprice target :price/analystrating anr :price/yield yield :price/dvddate newdvddt :price/putdate newputdt :price/duration duration :price/source "Excel import" :price/comment "Import from Bllomberg Excel output on 2017-03-10" :db/id #db/id[:db.part/user -100001 ]}]))
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
                   (select-columns {:A :isin :C :price :D :anr :E :target :F :yield :G :dvddate :H :duration :I :putdate})))

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


(defn get-secattr-by-isin [isin attr]
  (let [secs (get-securities)
        sec (first (filter (fn [x] (if (= (compare (:isin x) isin) 0) true false)) secs))
        ]
    ( (keyword attr) sec)
  )
)

;; (defn get-client-security-position [client security dt]
;;   (let [
;;     transactions (sort-by first #(> (c/to-long %1) (c/to-long %2))
;;            (d/q '[:find ?d ?n
;;              :in $ ?s ?c ?dt
;;              :where
;;              [?e :transaction/security ?s]
;;              [?e :transaction/client ?c]
;;              [?e :transaction/direction ?d]
;;              [?e :transaction/nominal ?n]
;;              [?e :transaction/valuedate ?d]
;;              [(<= ?d ?dt)]
;;              ]
;;            (d/db conn) security client newdate))
;;     amount (reduce (fn [x y]) 0 transactions)
;;     ;tr1 (if (nil? client) (println (str "Client " code " not found")))
;;     ]
;;     amount
;;   )
;; )


(defn get-client-by-code [code]
  (let [
        clients (get-clients)
        client (first (filter (fn [x] (if (= (:code x) code) true false)) clients)) 

        ;tr1 (if (nil? client) (println (str "Client " code " not found")))
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
        (let [tr1 (println (first (:content  (first (:content (nth tran num)  )  ))))]

          (if (< num 36)

            (case num
              1 (recur (assoc result :status (first (:content  (first (:content (nth tran num)  )  )))  ) (inc num))
              3 (recur (assoc result :client (first (:content  (first (:content (nth tran num)  )  )))  ) (inc num))
              6 (recur (assoc result :tradedate (java.util.Date. (c/to-long (f/parse built-in-formatter (first (:content  (first (:content (nth tran num)  )  ))) )))

      ) (inc num))
              9 (recur (assoc result :direction (if (str/includes? (str/lower-case (first (:content  (first (:content (nth tran num)  )  )))) "repo") "R"  (if (= "B" (subs (first (:content  (first (:content (nth tran num)  )  ))) 3 4 )) "S" "B"))   ) (inc num))
              10 (recur (assoc result :price (if (nil? (first (:content  (first (:content (nth tran num)  )  )))) 0 (Float/parseFloat (first (:content  (first (:content (nth tran num)  )  ))))))    (inc num)
                      )
              12 (recur (assoc result :nominal (Float/parseFloat (if (= (subs (first (:content  (first (:content (nth tran num)  )  ))) 0 1) "-") (subs (first (:content  (first (:content (nth tran num)  )  ))) 1)  (first (:content  (first (:content (nth tran num)  )  )))) )  ) (inc num))

              14 (recur (assoc result :currency (first (:content  (first (:content (nth tran num)  )  ))) ) (inc num))

              15 (recur (assoc result :valuedate (java.util.Date. (c/to-long (f/parse built-in-formatter (first (:content  (first (:content (nth tran num)  )  ))) )))) (inc num))

              ;16 (recur (assoc result :client (subs (first (:content  (first (:content (nth tran num)  )  ))) 1 )  ) (inc num))
              23 (recur (assoc result :security (get-isin-by-seccode (first (:content  (first (:content (nth tran num)  )  ))))  ) (inc num))
              24 result
              (recur result (inc num))
            )
            result
          )
        )

        )

  ]
    tranmap
  )
)

(defn tran-to-map [tran]
  (let [
    ;tr1 (println (str "Before"))
    ;tr1 (if (= (first (:content  (first (:content (nth tran 0)  )  ))) "EQU:16671407") (println tran))

    ;tr1 (if (= (first (:content  (first (:content (nth tran 0)  )  ))) "EQU:16579798") (println tran))

    ;tr1 (if (= (first (:content  (first (:content (nth tran 0)  )  )))"EQU:16671407") (println (first (:content  (first (:content (nth tran 15)  ) )))))


    strval1 (first (:content  (first (:content (nth tran 15) )  )))
    strval2 (first (:content  (first (:content (nth tran 6)  )  )))

    tradedate (java.util.Date. (c/to-long (f/parse built-in-formatter strval2)))

    val1 (if (or (nil? strval1) (= 0 (count strval1))) tradedate (java.util.Date. (c/to-long (f/parse built-in-formatter strval1 )))) 
    valuedate (if (< (c/to-long val1)  (c/to-long #inst "2000-01-01T00:00:00.000-00:00")) tradedate val1)

    ;tr1 (if (= (first (:content  (first (:content (nth tran 0)  )  ))) "EQU:16671407") (println (str "val1=" strval1 " val2=" strval2 " dt=" val1)))        
    ;;tr1 (println (str "Before tradedate=" tradedate  " valudate=" valuedate))
    tranmap {:refnum (first (:content  (first (:content (nth tran 0)  )  )))
             :status (first (:content  (first (:content (nth tran 1)  )  )))
             :client (get-client-by-code (first (:content  (first (:content (nth tran 3))))))
             :tradedate tradedate
             :direction (if (str/includes? (str/lower-case (first (:content  (first (:content (nth tran 9)))))) "repo") "R"  (if (= "B" (subs (first (:content  (first (:content (nth tran 9))))) 3 4 )) "S" "B"))
             :price (if (nil? (first (:content  (first (:content (nth tran 10)  )  )))) 0 (Float/parseFloat (first (:content  (first (:content (nth tran 10)))))))
             :nominal (Double/parseDouble (if (= (subs (first (:content  (first (:content (nth tran 12)  )  ))) 0 1) "-") (subs (first (:content  (first (:content (nth tran 12)  )  ))) 1)  (first (:content  (first (:content (nth tran 12)  )  )))) )
             :currency (first (:content  (first (:content (nth tran 14)  )  )))
             :valuedate valuedate
             :security (first (:content  (first (:content (nth tran 23)))))
             }

    ;tr1 (println (str "After refnum=" (first (:content  (first (:content (nth tran 0)  )  ))) " tradedate=" tradedate  " valudate=" valuedate))
    ;tr1 (println tranmap)

  ]
    tranmap
  )
)


(defn append-tran-to-file [tran id]
  (let [
        name (get-client-name-by-id (:client tran))
        newid (- 0 110001 id)
        ;tr1 (println (str "tran= " tran))
        
        str1 (str "{ :transaction/client #db/id[:db.part/user " (:client tran) "] :transaction/security #db/id[:db.part/user " (:security tran) "], :transaction/nominal " (str/replace (format "%.1f" (:nominal tran)) "," ".")  " :transaction/price " (:price tran) " :transaction/direction \"" (:direction tran) "\" :transaction/tradedate  #inst \"" (f/unparse built-in-formatter (c/from-long (c/to-long (:tradedate tran))) ) "0000Z\", :transaction/valuedate  #inst \"" (f/unparse built-in-formatter (c/from-long (c/to-long (:valuedate tran))) )  "0000Z\", :transaction/currency \"" (:currency tran) "\" :transaction/refnum \"" (:refnum tran) "\" :transaction/comment \"\", :db/id #db/id[:db.part/user " newid "]}\n")
        ;tr2 (println (str str1))
        ]
    ;(spit (str drive ":/DEV/output/" name ".clj")  str1 :append true)
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


       tr1 (println (first positions))
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

        assettype (second (first (filter (fn [x] (if (= (first x) (keyword "security/assettype")) true false)) security) ))


        trancurrency (second (first (filter (fn [x] (if (= (first x) (keyword "transaction/currency")) true false)) tran) ))

        tranvaluedate (second (first (filter (fn [x] (if (= (first x) (keyword "transaction/valuedate")) true false)) tran) ))

        trantradedate (second (first (filter (fn [x] (if (= (first x) (keyword "transaction/tradedate")) true false)) tran) ))

        tranprice (second (first (filter (fn [x] (if (= (first x) (keyword "transaction/price")) true false)) tran) ))

        nominal (second (first (filter (fn [x] (if (= (first x) (keyword "transaction/nominal")) true false)) tran) ))

        direction (second (first (filter (fn [x] (if (= (first x) (keyword "transaction/direction")) true false)) tran) ))

        comment (second (first (filter (fn [x] (if (= (first x) (keyword "transaction/comment")) true false)) tran) ))

        fx_sec_currency  (if (or (= "RUR" currency) (= "RUB" currency))  1 (get-fxrate-by-date currency tranvaluedate))


        fx_tran_currency (if (or (= "RUR" trancurrency) (= "RUB" trancurrency))  1.0 (get-fxrate-by-date trancurrency tranvaluedate))

        newprice (* tranprice (if (= assettype 5) 1.0 (/ fx_tran_currency fx_sec_currency))  (if (= "GBX" currency) 1.0 1.0))

        ;tr1 (if (= acode "AALLN") (println (str "fxtran=" fx_tran_currency " fxsec=" fx_sec_currency " price=" newprice)))
        ;;
        newtran {:client client :security acode  :nominal nominal :price newprice :direction direction :valuedate tranvaluedate :tradedate trantradedate :currency currency :comment (if (> (count comment) 1) comment "")  :fx (/ fx_tran_currency fx_sec_currency) :id (nth (nth tran 9) 1)}
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

(defn get-transactions-from-db [client dt & [in-currencies in-types]]
  (let [
        currencies (if (nil? in-currencies) ["USD" "EUR" "RUB" "GBP" "RUR" "GBX" "CHF" "HKD"] in-currencies)

        types (if (nil? in-types) [0 1 5 10 15] in-types)

        
        dt1 (java.util.Date. (c/to-long (f/parse custom-formatter (f/unparse custom-formatter (c/from-long (c/to-long #inst "2000-01-01T00:00:00.000-00:00" ))))))
        conn (d/connect uri)
        dt2 (java.util.Date. (c/to-long (f/parse custom-formatter (f/unparse custom-formatter (c/from-long (+ (c/to-long dt) (* 1000 24 3600)))))))


        ;;tr1 (println (str  "types= " types))

        trans (d/q '[:find ?e
                      :in $ ?client ?dt2 [?currency ...] [?type ...]
                      :where
                      [?e :transaction/client ?c]
                      [?c :client/code ?client]
                      [?e :transaction/valuedate ?dt]
                      [?e :transaction/security ?s]
                      [?s :security/currency ?currency]
                      [?s :security/assettype ?type]
                      [(< ?dt ?dt2)]
                     ] (d/db conn) client dt2 currencies types)

        ;tr2 (println (str "count trans= " (count trans)))
        newtrans  (map (fn [x] ( concat (ent [x]) [[:id (first x)]] ) ) trans)

        ;tr3 (println (str client " " dt))
        newtrans2 (map (fn [x] (trans-to-map x)) newtrans)


        ;tr5 (println newtrans2)
    ]
    ;(first newtrans2)
    ;(count newtrans2)
    newtrans2
  )
)

(defn set-future-tran [item parent]
  (let [newitem (map-indexed (fn [idx itm] (if (= 23 idx) {:content [ {:content [parent]}]} itm)) item)]
    newitem
  )
)

(defn get-transactions [client dt]
  (let [f (slurp (str drive ":/DEV/Java/" client ".xml"))
        x (parse f)
        trancnt (- (count (:content (nth   (:content (nth (:content x) 4) )  0 ) ) ) 1)  
        ;;tr1 (println (str "count= " trancnt))
        trans (loop [result [] num 0 parent "" ]
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
                (recur (conj result item ) (inc num) parent)
                (if (and
                   (= (:ss:StyleID (:attrs (nth item 0))) "s68" )
                   (or (= true (.contains (first (:content  (first (:content (nth item 0))))) "Instrument:")))
                )
                  (recur result (inc num) (subs (first (:content  (first (:content (nth item 0))))) 16))

                  (if (and
                    (= (:ss:StyleID (:attrs (nth item 0))) "s72" )
                    (or (= 0 (compare "We Sell" (first (:content  (first (:content (nth item 9)  )  ))))) 
                       (= 0 (compare "We Buy" (first (:content  (first (:content (nth item 9)  )  )))))
                    )
                    (or (str/includes? (str/lower-case (first (:content  (first (:content (nth item 4)  )  )))) "forts") (str/includes? (str/lower-case (first (:content  (first (:content (nth item 8)  )  )))) "options")) 
                    )
                    (recur (conj result (set-future-tran item parent)) (inc num) parent)
                    (recur result (inc num) parent)
                  )
                )
              )
              result
            )
          )
        )
        
        ;filtertran  (filter (fn [x] (if (nil? (:security x)) false true)) trans)

        ;tr1 (println "Starting tran-to-map")
        tranmap (map tran-to-map trans)
	;;tr2 (println (filter (fn [x] (if (= "UPRO" (:security x)) true false)) tranmap))
        ;tr5 (println (filter (fn [x] (if (= "GMST" (:security x)) true false)) tranmap ) )
        
    ]
    (filter (fn [x] (let [
      ;tr3 (println x)
      ] (if (or 
          (> (c/to-long (:tradedate x)) (c/to-long dt)) 
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
          ) false true)) ) tranmap)
  )
)


(defn build-excel-transactions [client & [currencies]]
  (let [
    transactions (sort (comp sort-tran-from-db) (get-transactions-from-db client (java.util.Date.) currencies [0 1 5 15]))

    ;tr1 (println (first transactions))
    securities (get-securities)
    
    newtransactions (loop
      [result [] amounts {} trans transactions]
      (if (seq trans)
        (let [
          
          tran (first trans)
          ;tr1 (println (str tran) )
          sec (first (filter (fn [y] (if (= (:security tran) (:acode y)) true false)) securities))

          ;tr1 (println (str "sec=" sec) )
          isin (:isin sec)
          assettype (:assettype sec)




          tranamnt (if (= "B" (:direction tran)) (:nominal tran) (- 0 (:nominal tran)))

          ;tr1 (println (str "tranamnt=" tranamnt) )
          amnt (:amount ( (keyword (:acode sec)) amounts ))

          ;tr1 (println (str "amnt=" amnt) )
          newamnt (if (nil? amnt ) tranamnt (+ amnt tranamnt) )
          
          ;tr1 (if (= isin "GB0032360173") (println (str "price= " (:price tran) "fullprice=" (:price tran) " fx=" (:fx tran)) )) 
      ]
      (recur (conj result {:portfolio client :isin isin :quantity (/ (:nominal tran) (if (str/includes? isin "LKOH=") 10.0 (if (str/includes? isin "SBRF=") 100.0 1.0)))  :price (:price tran) :date (f/unparse build-in-basicdate-formatter (c/from-long (c/to-long (:valuedate tran))) ) :type (if (> tranamnt 0) (if (> newamnt 0) "BUY LONG" "BUY TO COVER") (if (< newamnt 0) "SELL SHORT" "SELL LONG")) }) (assoc-in amounts [(keyword (:acode sec)) ] {:amount newamnt} ) (rest trans))
      )
      result)
    )

    newtrans (map (fn [x] (let [

       sec (ent [[(get-secid-by-isin (:isin x) )]])
       ;;tr1 (println (str x))
       assettype (second (first (filter (fn [y] (if (= (first y) :security/assettype) true false)) sec ) ))
       currency (second (first (filter (fn [y] (if (= (first y) :security/currency) true false)) sec ) ))

       multiple (if (nil? (second (first (filter (fn [y] (if (= (first y) :security/multiple) true false)) sec ) ))) 1.0 (second (first (filter (fn [y] (if (= (first y) :security/multiple) true false)) sec ) )))


       bcode (second (first (filter (fn [y] (if (= (first y) :security/bcode) true false)) sec ) ))
;;        isrussian (if (and 

;; ;; Check ISIN starts with RU
;; (= (compare (subs  (second (first (filter (fn [y] (if (= (first y) :security/isin) true false)) sec) )) 0 2) "RU") 0 ) 
;; ;; Check currency = RUB
;; (= (compare (subs  (second (first (filter (fn [y] (if (= (first y) :security/isin) true false)) sec) )) 0 2) "RU") 0 ) 
;; )  true false)
    ]
    {:portfolio (:portfolio x)  :bcode bcode :quantity (if (= assettype 5) (* multiple (:quantity x)) (:quantity x)) :price (:price x)  :date (:date x) :type (:type x)} 
)) newtransactions)


    ;; wb (create-workbook "transactions"
    ;;                       [["" "Price"]
    ;;                        ["Foo Widget" 100]
    ;;                        ["Bar Widget" 200]])
    ;;   sheet (select-sheet "Price List" wb)
    ;;   header-row (first (row-seq sheet)
    ]
    (save-xls ["sheet1" (dataset [:portfolio :bcode :quantity :price :date :type] newtrans)] (str drive ":/DEV/Java/" client "_trans.xlsx") )
    "Success"
  )
)



(defn build-excel-positions [client]
  (let [
    transactions (sort (comp sort-tran-from-db) (get-transactions-from-db client (java.util.Date.))   )

    ;tr1 (println (str "client=" client))
    securities (get-securities)
    positions (loop [result {} trans transactions]
                (if (seq trans) 
                  (let [
                        tran (first trans)
                        
                        sec (str (:security tran)) ;;acode
                        thesecurity (first (filter (fn [x] (if (= (:security tran) (:acode x)) true false)) securities))

                        currency (:currency thesecurity)

                        isin (:isin thesecurity)

                        ;tr8 ( println tran)  
                        
                        amnt (:amount ( (keyword isin) result ))

                        prevpr (if (nil? (:wapseccurr ((keyword isin) result))) 0 (:wapseccurr ((keyword isin) result)))
                        
                        seccurprice (if (= 15 (:assettype thesecurity)) (:price tran) (:price tran))


                        rubprice (* (get-fxrate-by-date currency (:valuedate tran)) (:price tran))

                        usdrate (get-fxrate-by-date "USD" (:valuedate tran))
                        ;seccurrrate (get-fxrate-by-date currency (:valuedate tran))

                        usdprice (/ rubprice usdrate)



                        ;tr4 (if (= (compare (:security tran) "HGMLN") 0) (println (str "seccurrencyprice: " seccurrprice " rubprice: " rubprice))) 
                        prevrubprice (:waprub ((keyword isin) result))
                        prevusdprice (:wapusd ((keyword isin) result))

                        tranamnt (if (= "B" (:direction tran)) (:nominal tran) (- 0 (:nominal tran)))
                        newamnt (if (nil? amnt ) tranamnt (+ amnt tranamnt) )

                        wapseccurr (if (or (nil? amnt) (= 0.0 amnt)) seccurprice (if (> newamnt 0.0) (if (> amnt 0.0) (if (> tranamnt 0.0) (/ (+ (* prevpr amnt) (* seccurprice tranamnt)) newamnt)  prevpr) seccurprice) (if (< amnt 0.0) (if (< tranamnt 0.0) (/ (+ (* prevpr amnt) (* seccurprice tranamnt)) newamnt) prevpr) seccurprice)))

                        waprub (if (or (nil? amnt) (= 0.0 amnt)) rubprice (if (> newamnt 0.0) (if (> amnt 0.0) (if (> tranamnt 0.0) (/ (+ (* prevrubprice amnt) (* rubprice tranamnt)) newamnt)  prevrubprice) rubprice) (if (< amnt 0.0) (if (< tranamnt 0.0) (/ (+ (* prevrubprice amnt) (* rubprice tranamnt)) newamnt) prevrubprice) rubprice)))

                        wapusd (if (or (nil? amnt) (= 0.0 amnt)) usdprice (if (> newamnt 0.0) (if (> amnt 0.0) (if (> tranamnt 0.0) (/ (+ (* prevusdprice amnt) (* usdprice tranamnt)) newamnt)  prevusdprice) usdprice) (if (< amnt 0.0) (if (< tranamnt 0.0) (/ (+ (* prevusdprice amnt) (* usdprice tranamnt)) newamnt) prevusdprice) usdprice)))
                        ;tr3 (if (= (compare (:security tran) "MFON") 0) (println (str "amnt= " amnt " tranamnt=" tranamnt " wapseccurr=" wapseccurr " wapusd=" wapusd " usdprice=" usdprice " rubprice=" rubprice " usdrate=" usdrate " pricetr=" (:price tran) " currencytr=" (:currency tran) " fxtran=" (:fx tran))))
                        ]
                    (recur (assoc-in result [(keyword isin) ] {:amount newamnt :wapseccurr wapseccurr :waprub waprub :wapusd wapusd} )
                         (rest trans))
                  )
                  result)
                ) 


    result (filter (fn [x] (if (= (:amount (second x)) 0.0) false true))  positions) 
    
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
    newpositions (into [] (map (fn [x] [client (get-secattr-by-isin (name (first x)) "isin") (get-secattr-by-isin (name (first x)) "acode") (:amount (second x)) (:waprub (second x)) (:wapusd (second x)) (:wapseccurr (second x))]) positions))
    ]
    (save-xls ["sheet1" (dataset [:client :isin :acode :amount :waprub :wapusd :wapcurr] newpositions)] "c:/DEV/Java/yyy.xlsx")
    "Success"
  )
)


(defn sort-portfs-to-excel [portf1 portf2]
  (let [
        ;tr1 (println tran1)
        ;tr2 (println tran2)

        
        dt1 1
        dt2 1

        ]
    
    (if (or  (< (compare (:client portf1) (:client portf2)) 0)
	  (and (= (compare (:client portf1) (:client portf2)) 0) (< (compare (:acode portf1) (:acode portf2)) 0) ))
    true
    false)
  )
)


(defn create-excel-reports []
  (let [
    theclients (filter (fn [y] (if (or (= y "AGGRESSIVE") (= y "BALANCED") (= y "CONSERVATIVE")) false true)) (map (fn [x] (:code x)) (get-clients)))
    positions (loop [result [] clients theclients]
            (if (seq clients) 
              (let [
                    client (first clients)
                    
                    tr1 (println (str client))
                    positions (sort (comp sort-positions-by-isin) (build-excel-positions client))
                    newpositions (map (fn [x] {:client client :isin (name (first x)) :acode (get-secattr-by-isin (name (first x)) "acode") :nominal (:amount (second x)) :waprub (:waprub (second x)) :wapusd (:wapusd (second x))} ) positions)                    
                    ]
                (recur (conj result newpositions) 
                     (rest clients))
              )                  
              result)
            )
    newpositions (sort (comp sort-portfs-to-excel) (flatten positions))
    ]
    ;
    (save-xls ["sheet1" (dataset [:client :isin :acode :nominal :waprub :wapusd] newpositions)] "c:/DEV/Java/yyy.xlsx")
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
                        thesecurity (first (filter (fn [x] (if (= (:security tran) (:acode x)) true false)) securities))
                        ;tr1 (println "transac: " tran)
                        sec (get-isin-by-seccode (str (:security tran))) 
                        currency (:currency thesecurity)

                        
                        amnt (case (:amount ( (keyword sec) result )) nil 0.0 (:amount ( (keyword sec) result ))) 
                        prevpr (if (nil? (:price ((keyword sec) result))) 0 (:price ((keyword sec) result)))
                        
                        tranprice (* (:price tran) (if (= 5 (:assettype thesecurity)) 1.0 (:fx tran))  )
                        
                        ;prevrubprice (:rubprice ((keyword sec) result))
                        tranamnt (if (= "B" (:direction tran)) (:nominal tran) (- 0 (:nominal tran)))
                        
                        
                        ;tr2 (println tran)
                        newamnt (+ amnt tranamnt) 


                        

                        wap (if (= amnt 0.0) tranprice (if (>= amnt 0.0)
                          (if (> tranamnt 0.0) (/ (+ (* prevpr amnt) (* tranprice tranamnt)) newamnt)  prevpr)
                          (if (> tranamnt 0.0) prevpr (/ (+ (* prevpr amnt) (* tranprice tranamnt)) newamnt))
                          )
                        )


                        ;;tr5 (if (= wap 0.0) (println (str "prevpr: " prevpr " amnt: " amnt " tranprice: " tranprice " newamnt: " newamnt " tranamnt:" tranamnt)))
                        ;;tr5 (if (= (compare "RU000A0JP5V6" sec) 0) (println "tranprice: " tranprice " wap " wap))
                        ;tr1 (println sec) 
                        ]
                    (recur (assoc-in result [(keyword sec) ] {:amount newamnt :price wap} )
                         (rest trans))
                  )                  
                  result)
                )
    ;tr1 (println (first positions))
    newpositions (map (fn [x] [(name (first x)) {:amount (:amount (second x)) :price (:price (second x))}]) positions)

    filterpos newpositions ;(filter (fn [x] (if (= 0.0 (:amount (second x)) ) false true)) newpositions)

    result (map (fn [x] (let [
                             sec (ent [[(get-secid-by-isin (first x))]])
                             assettype (second (first (filter (fn [y] (if (= (first y) :security/assettype) true false))  sec) ))
                             multiple (if (nil? (second (first (filter (fn [y] (if (= (first y) :security/multiple) true false)) sec) ))) 1.0 (second (first (filter (fn [y] (if (= (first y) :security/multiple) true false)) sec) ))) 
;;                              isrussian (if (and 

;; ;; Check ISIN starts with RU
;; (= (compare (subs  (second (first (filter (fn [y] (if (= (first y) :security/isin) true false)) (ent [[(get-secid-by-isin (first x))]])) )) 0 2) "RU") 0 ) 
;; ;; Check currency = RUB
;; (= (compare (subs  (second (first (filter (fn [y] (if (= (first y) :security/isin) true false)) (ent [[(get-secid-by-isin (first x))]])) )) 0 2) "RU") 0 ) 
;; )  true false)
                              ]
                          [(first x) {:amount (if (= assettype 5) (* multiple (:amount (second x))) (:amount (second x)))  :price (:price (second x)) }]
                          )) filterpos)
    ]
    result
  )
)



(defn update-client-cash [client currency amount]
  (let [
    conn (d/connect uri)
    ;tr1 (if (= currency "margin") (println (str "client=" client " amount=" amount))) 
    ]
    
    (d/transact-async conn [
      {(keyword (str "client/" currency)) amount,
       :client/code client ;; this finds the existing entity
       :db/id #db/id [:db.part/user]  ;; will be replaced by exiting id
      }
    ]
    )
  )
)

(defn import-cash-positions []
  (let [
    dt (java.util.Date.)
    f (clojure.java.io/file "R:/MIS_PB/Advisory")
    fs (file-seq f)
    filename (str "Deals, Operations, BalancesCurrency Advisory " (f/unparse build-in-date-formatter (c/from-long (+ (c/to-long dt) (* 0 24)) )))
    
    selectfile (first (filter (fn [x] (let [name (.getName x)] (if  (.contains name filename) true false))) fs))

    t1 (if (not (nil? selectfile))(println (str "found filename: " filename " date: " dt)))
    cash (drop 2 (if (not (nil? selectfile)) (->> (load-workbook (str "R:/MIS_PB/Advisory/" (.getName selectfile)))
                                             (select-sheet "Balances-Currency")
                                             (select-columns {:A :date, :B :code :C :currency :D :amount :F :usd :G :rub})) (println (str "file with cash balances not found for date: " (f/unparse build-in-date-formatter (c/from-long (+ (c/to-long dt) (* 0 24)) )))))) 

    ;t1 (println (nth cash 2))

    ;t1 (println (str/lower-case (if (= (:currency (nth cash 2)) "RUR") "RUB" (:currency (nth cash 2)))))
    ;result1 (reduce (fn [a b] {:usd (+ (:usd a) (:usd b))} ) (filter (fn [y] (if (= (:account y) "AAOHF") true false)) cash)   )


   ;;  cashbyclient (map (fn [x] (let [
   ;;    cashpos (filter (fn [y] (if (= (:account y) (:code x)) true false)) cash)
   ;;    ;tr1 (println cashpos)
   ;;   ]
   ;;   {:code (:code x) :cash (if (= (count cashpos) 0) 0.0 (if (= (:currency x) "USD") (:usd (reduce (fn [a b] {:usd (+ (:usd a) (:usd b))} ) cashpos)) (:usd (reduce (fn [a b] {:rub (+ (:rub a) (:rub b))} ) cashpos)))     )}
   ;; ) ) (get-clients) )

    nullcash (doall (map (fn [x] (let [
      tr1 (update-client-cash (:code x) "usd" 0.0)
      tr1 (update-client-cash (:code x) "rub" 0.0)
      tr1 (update-client-cash (:code x) "eur" 0.0)
      tr1 (update-client-cash (:code x) "gbp" 0.0)
      tr1 (update-client-cash (:code x) "margin" 0.0)
])) (get-clients)))


    cashbycurrency (if (not (nil? selectfile)) (doall (map (fn [x] (let [
      ;tr1 (println (str "x= " x))
] (if (not (nil? x)) (update-client-cash (:code x)  (str/lower-case (if (= (:currency x) "RUR") "RUB" (:currency x)))  (:amount x))) ) ) cash)))


    margin (drop 1 (if (not (nil? selectfile)) (->> (load-workbook (str "R:/MIS_PB/Advisory/" (.getName selectfile)))
                                             (select-sheet "Balances-Currency FORTS_GO")
                                             (select-columns {:A :date, :B :code :C :currency :D :amount :F :usd :G :margin})) (println (str "file with cash balances not found for date: " (f/unparse build-in-date-formatter (c/from-long (+ (c/to-long dt) (* 0 24)) )))))) 

    margintodb (if (not (nil? selectfile)) (doall (map (fn [x] (let [
      ;tr1 (println (str "x= " x))
] (if (not (nil? x)) (update-client-cash (:code x) "margin" (:amount x))) ) ) margin)))

    
    ]
    ;cashbyclient
    ;result1
    ;;(first margin)
    "Success"
  )
)


(defn save-positions-bloomberg [client positions dt]
  (let [
    f (clojure.java.io/file "R:/MIS_PB/Advisory")
    fs (file-seq f)
    filename (str "Deals, Operations, Balances Advisory for Zorchenkov Alexey " (f/unparse build-in-date-formatter (c/from-long (+ (c/to-long dt) (* 3600000 24)) )))
    
    selectfile (first (filter (fn [x] (let [name (.getName x)] (if  (.contains name filename) true false))) fs))

    t1 (if (not (nil? selectfile))(println (str "found filename: " filename " date: " dt)))
    cash (if (not (nil? selectfile)) (->> (load-workbook (str "R:/MIS_PB/Advisory/" (.getName selectfile)))
                 (select-sheet "Balances-Currency")
                 (select-columns {:A :date, :B :account :C :currency :D :amount})) (println (str "file with cash balances not found for date: " (f/unparse build-in-date-formatter (c/from-long (+ (c/to-long dt) (* 3600000 24)) )))))

    positions1 (map (fn [x] (let [
                             sec (ent [[(get-secid-by-isin (name (first x)) )]])
                             assettype (second (first (filter (fn [y] (if (= (first y) :security/assettype) true false)) sec ) ))
                             currency (second (first (filter (fn [y] (if (= (first y) :security/currency) true false)) sec ) ))
                             multiple (if (nil? (second (first (filter (fn [y] (if (= (first y) :security/multiple) true false)) sec ) ))) 1.0 (second (first (filter (fn [y] (if (= (first y) :security/multiple) true false)) sec ) )))

                             bcode (second (first (filter (fn [y] (if (= (first y) :security/bcode) true false)) sec ) ))



                              ;tr1 (if (= (name (first x)) "GB0032360173") (println (str "x=" x " currency=" currency ""))) 
                              ]
                          [bcode  {:amount (if (= assettype 5) (* multiple (:amount (second x))) (:amount (second x))) :price (:price (second x))}]
                          )) positions)


    ;tr1 (println (first (into [] positions)))
    newpositions (filter (fn [x] (if (not= (:amount (second x)) 0.0) true false )) (into [] positions1))

    ;tr1 (println (str (first newpositions)))
    ;changecurrencyprice (map (fn [x] [(first x) {:amount (:amount (second x)) ()}]) newpositions)


    t2 (spit (str drive ":/DEV/output/" client ".txt")  ",,,,\n" :append true)
    t3 (doall (map (fn [x] (append-position-to-file client x dt)) (if (> (count newpositions) 0) newpositions (into [] positions1))))
    ;; t4 (if (not (nil? selectfile)) (doall (map (fn [x] (let [
    ;;                                            str1 (str client "," (str (if (= "RUR" (:currency x)) "RUB" (:currency x))  " Curncy")  "," (format "%.2f" (:amount x))  ","  "," (f/unparse build-in-basicdate-formatter (c/from-long (+  (* 3600000 6) (c/to-long (:date x))) )) "\n")
    ;;                                            ]
    ;;                                        ;;(println str1)
    ;;                                        (spit (str drive ":/DEV/output/" client ".txt") str1 :append true)
    ;;                                        )) (filter (fn [y] (if (= client (:account y)) true false)) cash))))
    ]
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

(defn get-portf-by-num [client num]
  (let [
    newnum (+ 1451606399000 (* num 86400000) ) ;;1488412799000 1325462399000 1451606399000  for 2014: 1262304000000 1451606399000
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
                                               ) )  (filter (fn [x] (if (= (:amount (second x)) 0.0) false true)) (get-positions client newdate)) )
        ]    
    (if (not (nil? positions)) (save-positions-bloomberg client positions newdate))
    "Success"
  )
)

(defn generateportfs [client & [currencies]]
  (let [

    ;res1 (spit (str "C:/DEV/clojure/sberpb/sberapi/DB/" client ".txt")  ",,,,\n" :append false)
    transactions (sort (comp sort-tran-from-db) (get-transactions-from-db client (java.util.Date.) currencies [0 1 5 10 15]))
    res1 (spit (str drive ":/DEV/output/" client ".txt") (str "Portfolio Name,Security ID,Position/Quantity/Nominal,Cost Px asset Currency,Date\n")  :append false)
    securities (get-securities)

    ;tr1 (println (first transactions))
    lastpositions (loop
      [positions {} valuedate nil trans transactions]
      (if (seq trans)
        (let [
          
          tran (first trans)
          newvaluedate (java.util.Date. (c/to-long (f/parse custom-formatter (f/unparse custom-formatter (c/from-long (c/to-long (:valuedate tran)))))))
          tr1 (if (and (> (count positions) 0) (not= newvaluedate valuedate))  (save-positions-bloomberg client positions valuedate))
          ;tr1 (println (str tran) )           
          sec (first (filter (fn [y] (if (= (:security tran) (:acode y)) true false)) securities))

          ;tr1 (println (str "sec=" sec) )
          isin (:isin sec)
          acode (:acode sec)
          assettype (:assettype sec)

          tranamnt (if (= "B" (:direction tran)) (:nominal tran) (- 0 (:nominal tran)))

          ;tr1 (println (str "tranamnt=" tranamnt) )
          amnt (if (nil? (:amount ( (keyword isin) positions )) ) 0.0 (:amount ( (keyword isin) positions )))

          ;tr1 (println (str "amnt=" amnt) )
          newamnt (+ amnt tranamnt) 


          prevpr (if (nil? (:price ((keyword isin) positions))) 0 (:price ((keyword isin) positions)))
                        
          tranprice (* (:price tran) )

          ;tr1 (println (str "tran=" tran " tranprice=" tranprice " tranamnt=" tranamnt " prevpr=" prevpr " amnt=" amnt))
          wap (if (= amnt 0.0) tranprice (if (>= amnt 0.0)
            (if (> tranamnt 0.0) (/ (+ (* prevpr amnt) (* tranprice tranamnt)) newamnt)  prevpr)
            (if (> tranamnt 0.0) prevpr (/ (+ (* prevpr amnt) (* tranprice tranamnt)) newamnt))
            )
          )
          ;tr1 (println positions)
          ;tr1 (println (str "newamnt=" newamnt " seckey=" (keyword (:acode sec))) )
      ]
      (recur (assoc-in positions [(keyword isin) ] {:amount newamnt :price wap} ) newvaluedate (rest trans))
      )
      {:positions positions :lastdate valuedate} )
    )

    lastday (if (and (> (count lastpositions) 0))  (save-positions-bloomberg client (:positions lastpositions) (:lastdate lastpositions)))
    ;days (doall (map (fn [x] (get-portf-by-num client x)) (range 0 2500 1))) 
    ]
    
    "Success"
  )
)


(defn save-transactions [client]
  (let [
          ;t1 (println (str "in save-transactions " client))
          tranmap (get-transactions client (java.util.Date. (+ (* 1000 60 60 24) (.getTime (java.util.Date.)) )))

          ;tr4 (println (str tranmap))

          newtran (map (fn [x] (let [

      
          sec (ent [[(get-sec-by-acode (:security x))]] )
          assettype (second (first (filter (fn [x] (if (= (first x) :security/assettype) true false)) sec)))
          seccurrency (second (first (filter (fn [security] (if (= (keyword "security/currency") (first security)) x)) sec)))

          secisin (second (first (filter (fn [security] (if (= (keyword "security/isin") (first security)) x)) sec)))

          rateseccurrency (get-fxrate-by-date seccurrency (:valuedate x))

          trancurrency (if (= 0 (compare "RUR" (:currency x)) ) "RUB" (:currency x))          
          ratetranscurrency (get-fxrate-by-date trancurrency (:valuedate x))

          ;tr2 (println (str "trancurrency=" trancurrency " seccurrency = " seccurrency " ratetranscurrency=" ratetranscurrency " rateseccurrency=" rateseccurrency " refnum=" (:refnum x)) ) 
                                     
          newrate (if (= 5 assettype) 1 (/ ratetranscurrency rateseccurrency )) 


          ;tr3 (if (= (compare (:security x) "HGMLN" ) 0) (println (str (:currency x) " fx1: " ratetranscurrency  " " seccurrency  " fx2: " rateseccurrency " fx: " newrate  " date: " (:valuedate x) "\n")) )


          newprice (if (= seccurrency trancurrency) (:price x) (* (:price x) newrate))

          ;tr1 (println "rate1: " ratetranscurrency " rate2: " newrate)
          ]
          ;{:client (:client x) :valuedate (:valuedate x) :direction (:direction x) :price (* newrate (:price x))  :nominal (:nominal x) :currency seccurrency :security (get-sec-by-acode (:security x)) }

          {:client (:client x) :valuedate (:valuedate x) :tradedate (:tradedate x) :direction (:direction x) :price (:price x)  :nominal (:nominal x) :currency (:currency x) :security (get-sec-by-acode (:security x)) :refnum (:refnum x)}

          ))  (filter (fn [x] (if (or (nil? (:security x)) (= 0 (compare "TNBP" (:security x))) (= 0 (compare "TNBPP" (:security x))))  false true))  tranmap))


          ;;tr1 (println (str "count= " (count tranmap)) )
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

        t1 (doall (map (fn [x] (let [name (second (first (filter (fn [x] (if (= (first x) :client/code) true false)) (ent [x])) ))
                                     tr1 (println name)
                                     ]
                              (if (= (.exists (io/as-file (str drive ":/DEV/Java/" name ".xml"))) true) (save-transactions name)))) clients))

        ;t1 (println (first clients))

        t2 (doall (map (fn [x] (let [name (second (first (filter (fn [x] (if (= (first x) :client/code) true false)) (ent [x])) ))
          ;t1 (println (str "name = " name) )
          ]
                              (if (= (.exists (io/as-file (str drive ":/DEV/output/" name ".clj"))) true) (import-client-trans name)))) clients))


        ;; t1 (spit (str drive ":/DEV/clojure/sberpb/sberapi/DB/cl.clj")  "[\n" :append false)
        ;; t2 (doall (map (fn [x] (spit (str drive ":/DEV/clojure/sberpb/sberapi/DB/cl.clj")  (str x) :append true)) (range 10)))
        ;; t3 (spit (str drive ":/DEV/clojure/sberpb/sberapi/DB/cl.clj")  "]" :append true)
  ])
)



(defn build-total-portf []
  (let [
        conn (d/connect uri)
        dbclients (d/q '[:find ?e
                       :in $ 
                       :where
                       [?e :client/name]
                       ] (d/db conn))

        positions (loop [result {} clients (take 10 dbclients) ]
          (if (seq clients)
            (let [
                  client (first clients)
                  name (second (first (ent [client])))

                  tr1 (println (str "client: " name))
                  positions (get-positions name (java.util.Date.))

                  ;tr2 (println (str "total positions: " (count positions)))


                  ;tr3 (println result)
                  newres (loop [theres result portf positions]
                    (if (seq portf)
                      (let [
                        position (first portf)
                            ]
                        (recur (update theres (keyword (first position))  (fn [x y] (+ (if (nil? x) 0 x) (if (nil? y) 0 y))) (:amount (second position))) (rest portf))
                      )                      
                      theres
                    )
                  )

                  ;tr5 (println newres)
                  ]
              (recur newres (rest clients))
            )
            result
          )
        )
        t1 (spit (str drive ":/DEV/clojure/sberpb/sberapi/DB/total.txt")  "\n" :append false)
        t2 (doall (map (fn [x] (spit (str drive ":/DEV/clojure/sberpb/sberapi/DB/total.txt")  (str "TOTAL," (name (first x)) ",0.0," (second x) "\n") :append true)) positions))
        ;t3 (spit (str drive ":/DEV/clojure/sberpb/sberapi/DB/total.clj")  "]" :append true)        
  ]
  ;;positions
  "Success"
  )
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

;; (defn send-mail [data]
;;   (POST (str "https://api.sberpb.com/" "token") {:handler OnLogin
;;                                             :error-handler onLoginError
;;                                             :headers {:content-type "application/x-www-form-urlencoded"}
;;                                             :body (str "grant_type=password&username=" username "&password=" password) 
;;                                             })
;; )

(defn insert-new-transaction [client security nominal price direction tradedate valuedate currency comment refnum]
  (let [
        conn (d/connect uri)
    ]

    ;(println (str "Insert new transaction. Client: " client " security: " security " nominal: " nominal " price: " price " direction: " direction " valuedate: " valuedate " currency: " currency " comment: " comment) )
    (d/transact conn [{ :transaction/client client :transaction/security security, :transaction/nominal (Double/parseDouble (str nominal)) :transaction/price (Double/parseDouble (str price)) :transaction/direction direction :transaction/tradedate tradedate, :transaction/valuedate valuedate, :transaction/currency currency :transaction/comment comment, :transaction/refnum refnum :db/id #db/id[:db.part/user -110002] }])
  )
)

(defn insert-new-tran-to-db [tran]
  (let [
     ;tr2 (println "HHH")
     security (first (filter (fn [x] (if (= (:acode x) (:security tran)) true false)) (get-securities)))

     ;tr1 (println (str security))
     ;newindex (- -110002 index)
     ;tr1 (println (str "Found: " (find-transaction tran) " in database with security: " security))
     ]

    (if (and (= (find-transaction tran) 0) (not (nil? security)))
      ; To insert new entity:
      (insert-new-transaction (:client tran) (:id security) (:nominal tran) (:price tran) (:direction tran) (:tradedate tran) (:valuedate tran) (:currency tran) "" (:refnum tran))

      (if (and (nil? security))
        (println (str "Security does not exist: " (:security tran)))
        ;(println (str "Transaction already existed: " tran))        
      )            
    )
  )
)


(defn recent-deals-to-db-by-num [num]
  (let [
        filename (str drive ":/DEV/Java/" "recentdeals" (if (< (count (str num)) 2) "0") num ".xml")
        f (slurp filename)
        x (parse f)
	
        trancnt (- (count (:content (nth   (:content (nth (:content x) 4) )  0 ) ) ) 1)  
        tr1 (println "importing transactions from " filename)
        trans (loop [result [] num 0 parent ""]
          (let [item (if (<= num trancnt) (:content (nth (:content (nth (:content (nth (:content x) 4) )  0 ) )  num)))
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
                (recur (conj result item ) (inc num) parent)

                (if (and
                   (= (:ss:StyleID (:attrs (nth item 0))) "s68" )
                   (or (= true (.contains (first (:content  (first (:content (nth item 0))))) "Instrument:")))
                )
                  (recur result (inc num) (subs (first (:content  (first (:content (nth item 0))))) 16))

                  (if (and
                    (= (:ss:StyleID (:attrs (nth item 0))) "s72" )
                    (or (= 0 (compare "We Sell" (first (:content  (first (:content (nth item 9)  )  ))))) 
                       (= 0 (compare "We Buy" (first (:content  (first (:content (nth item 9)  )  )))))
                    )
                    (or (str/includes? (str/lower-case (first (:content  (first (:content (nth item 4)  )  )))) "forts") (str/includes? (str/lower-case (first (:content  (first (:content (nth item 8)  )  )))) "options")) 
                    )
                    (recur (conj result (set-future-tran item parent)) (inc num) parent)
                    (recur result (inc num) parent)
                  )
                )
                ;(recur result (inc num))
              )
              result
            )
          )
        )
        ;tr5 (println (first trans ) )
        ;filtertran  (filter (fn [x] (if (nil? (:security x)) false true)) trans)
        tranmap (map tran-to-map trans)
	;tr2 (println (nth tranmap 25))

        transactions (filter (fn [x] (if (or 
                         ;(> (c/to-long (:valuedate x)) (c/to-long dt)) 
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

        filtertran transactions
        cnt (count filtertran )
        ;t2 (doall (map insert-new-tran-to-db  filtertran (range cnt)))
        
    ]
    ;; (filter (fn [x] (if (and
    ;;                      (nil? (:client x))
    ;;                      )  true false)) tranmap)
    ;(count transactions) 
    ;res1
    ;transactions
    
    ;(first filtertran)
    ;(filter (fn [x] (if (= 110.75 (:price x)) true false)) filtertran)
    (doseq [trans filtertran] (insert-new-tran-to-db trans))
    ;(insert-new-tran-to-db (nth filtertran 15))
  )
)

(defn recent-deals-to-db []
  (let [
    files [9]
    trans (doall (map (fn [x] (recent-deals-to-db-by-num x))  files )) 
    ]
    ;(count secs)
    ;newsecs
    "Success"
  )
)

(defn get-recent-deals []
  (let [f (slurp (str drive ":/DEV/Java/" "todaydeals" ".xml"))
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

        transactions (filter (fn [x] (if (or 
                         ;(> (c/to-long (:valuedate x)) (c/to-long dt)) 
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

         selectedclients (distinct (map (fn [x] (:client x)) transactions)) 

         res1 (loop [result {} clients selectedclients]
                (if (seq clients) 
                  (let [
                        client (first clients)
                        todaydeals (filter (fn [x] (if (= (:client x) client) true false)) transactions)

                        selectedsecs (distinct (map (fn [x] (:security x)) todaydeals))


                        respos (loop [result {} secs selectedsecs]
                          (if (seq secs) 
                            (let [ 
                                  sec (first secs)
                                  todaysecdeals (filter (fn [x] (if (and (= (:client x) client) (= (:security x) sec) )  true false)) transactions)


                                  res3 (reduce (fn [x y] {:direction (:direction y) :price ( / (+  (* (:price x) (:amount x)) (* (:price y) (:nominal y) )  ) (+ (:amount x) (:nominal y))) :amount (+ (:amount x) (:nominal y))}) {:direction "B" :amount 0 :price 0} todaysecdeals)

                                  ;tr5 (println (str "client= " client " security=" sec " res3= " res3))
                                  ]
                              (recur (assoc-in result [(keyword sec) ] {:amount (:amount res3) :price (:price res3) :direction (:direction res3) } ) (rest secs))
                            )
                            result)
                          )
                        
                        ]
                    (recur (assoc-in result [client] respos) (rest clients))
                  )
                  result)
                )
         ;sendmail (doall (map (fn [x] (send-mail res1)) res1))
    ]
    ;; (filter (fn [x] (if (and
    ;;                      (nil? (:client x))
    ;;                      )  true false)) tranmap)
    ;transactions
    res1
  )
)

(defn export-securities []
  (let [
    secs (filter (fn [x] (if (= 5 (:assettype x)) true false)) (get-securities))
    ]
    (save-xls ["sheet1" (dataset [:bcode :isin] secs)] (str drive ":/DEV/Java/" "securiites.xlsx") )
  )
)


(defn deleteprice [isin]
  (let [
    conn (d/connect uri)

    dt (java.util.Date.)
    dttxt (f/unparse build-in-basicdate-formatter (c/from-long (c/to-long dt)))
    sec (first (filter (fn [x] (if (= (compare (:isin x) isin) 0) true false)) (get-securities)))   
    priceid (d/q '[:find ?e ;?t ?a ?y ?d ?p ?dur
             :in $ ?sec
             :where
             [?e :price/targetprice ?t]
             [?e :price/analystrating ?a]
             [?e :price/yield ?y]
             [?e :price/dvddate ?d]
             [?e :price/putdate ?p]
             [?e :price/duration ?dur]
             [?e :price/security ?sec]
             ] (d/db conn) (:id sec))
    price (ent priceid)


    target (second (first (filter (fn [x] (if (= (first x) (keyword "price/targetprice")) true false)) price) ))

    anr (second (first (filter (fn [x] (if (= (first x) (keyword "price/analystrating")) true false)) price) ))

    yield (second (first (filter (fn [x] (if (= (first x) (keyword "price/yield")) true false)) price) ))

    dvddate (second (first (filter (fn [x] (if (= (first x) (keyword "price/dvddate")) true false)) price) ))

    putdate (second (first (filter (fn [x] (if (= (first x) (keyword "price/putdate")) true false)) price) ))

    duration (second (first (filter (fn [x] (if (= (first x) (keyword "price/duration")) true false)) price) ))

    tr1 (println (str "priceid=" priceid))
    tr1 (if (nil? sec) (println (str "ISIN: " isin " not found")) (d/transact conn [[:db.fn/retractEntity (ffirst priceid)]]))
     ]
    ;;(d/transact-async conn [{ :security/acode "PLZL", :security/assettype 1, :security/multiple 1.0, :security/bcode "PLZL RX Equity", :security/isin "RU000A0JNAA8", :security/exchange "", :security/currency "RUB", :db/id #db/id[:db.part/user -100663] }])
    ; To insert new entity:
    ;(d/transact conn [{ :transaction/client #db/id[:db.part/user 17592186045573] :transaction/security #db/id[:db.part/user 17592186065674], :transaction/nominal 108000.0 :transaction/price 100.0 :transaction/direction "S" :transaction/valuedate #inst "2014-04-22T00:00:00.0000000Z", :transaction/currency "RUB" :transaction/comment "", :db/id #db/id[:db.part/user -110002] }])
     ; To delete entity by id:
     ;(d/transact conn [[:db.fn/retractEntity 17592186045577]])
  (d/transact-async conn  [{ :price/security (:id sec) :price/lastprice 20.51 :price/valuedate dt  :price/source "Excel import" :price/comment (str "Import from Bllomberg API output on " dttxt) :price/targetprice target :price/analystrating anr :price/yield yield :price/dvddate dvddate :price/putdate putdate :price/duration duration :db/id #db/id[:db.part/user -100001 ]}])
  )
)


(defn upload-to-bloomberg []
  (let [
    ;; portfs (->> (load-workbook (str  drive ":/DEV/Java/" "CheckNewTransactions.xlsx") )
    ;;   (select-sheet "bloomberg")
    ;;   (select-columns {:A :portf}))

      portfs (get-latest-trans-accounts)
      ;tr1 (println (first portfs))
    ]

    (doall (map (fn [x] (generateportfs x)) portfs ))
    (doall (map (fn [x] (build-excel-transactions x)) portfs ))
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
