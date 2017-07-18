(ns sberapi.db.position
  (:require [datomic.api :as d]
            [mount.core :refer [defstate]]
            [sberapi.db.core :refer [conn] ]
            [sberapi.config :refer [env]]
            [clj-time.core :as t]
            [clj-time.format :as f]
            [clj-time.local :as l]
            [clj-time.coerce :as c]
))


(def custom-formatter (f/formatter "dd/MM/yyyy"))


(defn ent [id]  (seq (d/entity (d/db conn) (ffirst id))) )

(defn get-fxrate-by-date [currency dt]
  (let [

    ;;tr1 (println (str "in get-fxrate-by-date " currency " date=" dt) )


    newdate dt ;(java.util.Date. (c/to-long (f/parse custom-formatter (f/unparse custom-formatter (c/from-long (c/to-long dt))))))


    
    security (ffirst (d/q '[:find ?e
                       :in $ ?sec
                       :where
                       [?e :security/acode ?sec]
                       ] (d/db conn) (if (= 0 (compare currency "GBX")) "GBP" currency))) 


    ;tr1 (println (str "security: " security) )
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


    newrate (if (= 0 (compare currency "GBX")) (/ (nth rate 1) 100.0) (nth rate 1))
    ]
    ;(nth rate 1) 
    newrate
  )
)
 

(defn trans-to-map [tran tranid]

  (let [
        ;tr1 (println tran)
        client (ent [[(:db/id (second (first (filter (fn [x] (if (= (first x) (keyword "transaction/client")) true false)) tran))))]]  )
        security (ent [[(:db/id (second (first (filter (fn [x] (if (= (first x) (keyword "transaction/security")) true false)) tran))))]]  )

        ;tr1 (println (str "client in map= " client) )
        currency (second (first (filter (fn [x] (if (= (first x) (keyword "transaction/currency")) true false)) tran)))   ;(second (first (filter (fn [x] (if (= (first x) (keyword "security/currency")) true false)) security)))

        ;:security (nth (nth security 0) 1)
        ;tr5 (println (str "tran: " tran  ))

        
        newcurrency (if (= "PTS" currency) (second (first (filter (fn [x] (if (= :security/currency (first x)) true false)) security))) currency)

        ;tr5 (println (str "newcurrency: " newcurrency))

        newtran {:client (nth (first (filter (fn [x] (if (= :client/code (first x)) true false)) client) ) 1) :security (:db/id (second (first (filter (fn [x] (if (= (first x) (keyword "transaction/security")) true false)) tran))) )  :nominal (second (first (filter (fn [x] (if (= (first x) (keyword "transaction/nominal")) true false)) tran))) :price (second (first (filter (fn [x] (if (= (first x) (keyword "transaction/price")) true false)) tran))) :direction (second (first (filter (fn [x] (if (= (first x) (keyword "transaction/direction")) true false)) tran)))  :valuedate (second (first (filter (fn [x] (if (= (first x) (keyword "transaction/valuedate")) true false)) tran))) :tradedate (second (first (filter (fn [x] (if (= (first x) (keyword "transaction/tradedate")) true false)) tran))) :currency newcurrency :comment (second (first (filter (fn [x] (if (= (first x) (keyword "transaction/comment")) true false)) tran))) :fx (if (or (= "RUR" newcurrency) (= "RUB" newcurrency))  1 (get-fxrate-by-date newcurrency (second (first (filter (fn [x] (if (= (first x) (keyword "transaction/tradedate")) true false)) tran)))))  :id (first tranid) }
        ]

    newtran
  )
)

(defn get-transactions-by-client [client]
  (let [
        transactions (into [] (d/q '[:find ?e
                                     :in $ ?code
                                     :where
                                     [?c :client/code ?code]
                                     [?e :transaction/client ?c]
                                    ]
                             (d/db conn) client)) 
         newtrans (map  (fn [x] (ent [x]))  transactions)
         newtrans2 (map (fn [x y] (trans-to-map x y)) newtrans transactions)
    ]
    newtrans2
  )
)


(defn get-transactions-by-client-security [client security]
  (let [
        transactions (into [] (d/q '[:find ?e
                                     :in $ ?code ?s
                                     :where
                                     [?c :client/code ?code]
                                     [?e :transaction/client ?c]
                                     [?e :transaction/security ?s]
                                    ]
                             (d/db conn) client security)) 
         newtrans (map  (fn [x] (ent [x]))  transactions)
         newtrans2 (map (fn [x y] (trans-to-map x y)) newtrans transactions)

    ]
    newtrans2
  )
)

(defn get-transactions-by-security [security]
  (let [
        transactions (into [] (d/q '[:find ?e
                                     :in $ ?s
                                     :where
                                     [?e :transaction/security ?s]
                                    ]
                             (d/db conn) security))
         newtrans (map  (fn [x] (ent [x]))  transactions)
         newtrans2 (map (fn [x y] (trans-to-map x y)) newtrans transactions)

    ]
    newtrans2
  )
)


(defn get-transactions [client]
  (let [
        transactions (into [] (d/q '[:find ?e
                                      :in $ ?code
                                      :where
                                      [?c :client/code ?code]
                                      [?e :transaction/client ?c]
                                      ]
                             (d/db conn) client)) 
         newtrans (map  (fn [x] (ent [x]))  transactions)
         newtrans2 (map (fn [x y] (trans-to-map x y)) newtrans transactions)


         positions  newtrans2
    ]
    positions
  )
)




(defn tran-to-map [tran]
  (let [
        ;tr0 (println tran)
        client (:db/id (second (first (filter (fn [x] (if (= (first x) (keyword "transaction/client")) true false)) tran))) ) ;(ent [[(:db/id (nth (nth tran 0) 1))]]  )
        
        security (ent [[(:db/id (second (first (filter (fn [x] (if (= (first x) (keyword "transaction/security")) true false)) tran))) )]] ) ;;(ent [[(:db/id (nth (nth tran 1) 1))]]  )

        acode (second (first (filter (fn [x] (if (= (first x) (keyword "security/acode")) true false)) security) ))
        ;; ;tr1 (println security)
       
        ;; security currency
        currency (second (first (filter (fn [x] (if (= (first x) (keyword "security/currency")) true false)) security)))


        fx_sec_currency  (if (or (= "RUR" currency) (= "RUB" currency))  1 (get-fxrate-by-date currency (second (first (filter (fn [x] (if (= (first x) (keyword "transaction/valuedate")) true false)) tran)))))


        fx_tran_currency (if (or (= "RUR" (second (first (filter (fn [x] (if (= (first x) (keyword "transaction/currency")) true false)) tran)))) (= "RUB" (second (first (filter (fn [x] (if (= (first x) (keyword "transaction/currency")) true false)) tran)))))  1 (get-fxrate-by-date (second (first (filter (fn [x] (if (= (first x) (keyword "transaction/currency")) true false)) tran))) (second (first (filter (fn [x] (if (= (first x) (keyword "transaction/valuedate")) true false)) tran)))))

        newprice (* (second (first (filter (fn [x] (if (= (first x) (keyword "transaction/price")) true false)) tran))) (/ fx_tran_currency fx_sec_currency) (if (= "GBX" currency) 1.0 1.0))

        ;tr1 (if (= acode "HGMLN") (println (str "fxtran=" fx_tran_currency " fxsec=" fx_sec_currency " price=" (nth (nth tran 3) 1))))
        ;;
        newtran {:client client :security acode  :nominal (second (first (filter (fn [x] (if (= (first x) (keyword "transaction/nominal")) true false)) tran))) :price newprice :direction (second (first (filter (fn [x] (if (= (first x) (keyword "transaction/direction")) true false)) tran))) :valuedate (second (first (filter (fn [x] (if (= (first x) (keyword "transaction/valuedate")) true false)) tran))) :currency currency :comment (if (> (count (second (first (filter (fn [x] (if (= (first x) (keyword "transaction/comment")) true false)) tran)))) 1) (second (first (filter (fn [x] (if (= (first x) (keyword "transaction/comment")) true false)) tran))) "")  :fx (/ fx_tran_currency fx_sec_currency) :id (second (first (filter (fn [x] (if (= (first x) (keyword "transaction/refnum")) true false)) tran)))}
        ;tr1 (if (= (compare acode "HMSGLI" ) 0) (println (str (nth (nth tran 6) 1) " fx1: " fx_tran_currency " " currency " fx2: " fx_sec_currency " fx: " (:fx newtran) " date: " (:valuedate newtran) "\n")) ) 
        ]
    newtran
  )
)

(defn get-transactions-from-db [client dt]
  (let [
        dt1 (java.util.Date. (c/to-long (f/parse custom-formatter (f/unparse custom-formatter (c/from-long (c/to-long #inst "2000-01-01T00:00:00.000-00:00" ))))))
        dt2 (java.util.Date. (c/to-long (f/parse custom-formatter (f/unparse custom-formatter (c/from-long (+ (c/to-long dt) (* 1000 24 3600)))))))


        ;tr1 (println (str client " " dt))
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

        ;tr2 (println (str client " " dt))
        newtrans  (map (fn [x] ( concat (ent [x]) [[:id (first x)]] ) ) trans)

        ;tr3 (println (str client " " dt))
        newtrans2 (map (fn [x] (tran-to-map x)) newtrans)


        ;tr5 (println newtrans2)
    ]
    ;(first newtrans2)
    ;(count newtrans2)
    newtrans2
  )
)
