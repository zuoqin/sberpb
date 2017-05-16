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

    ;tr1 (println (str "in get-fxrate-by-date " currency) )
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
        client (ent [[(:db/id (nth (nth tran 0) 1))]]  )
        security (ent [[(:db/id (nth (nth tran 1) 1))]]  )

        ;tr1 (println (str "client in map= " client) )
        currency (nth (nth tran 6) 1)   ;(second (first (filter (fn [x] (if (= (first x) (keyword "security/currency")) true false)) security)))

        ;;:security (nth (nth security 0) 1)
        ;tr5 (println (str "tran: " tran  "currency: " currency " security: " security " first: "))

        
        newcurrency (if (= "PTS" currency) (second (first (filter (fn [x] (if (= :security/currency (first x)) true false)) security))) currency)

        ;tr5 (println (str "newcurrency: " newcurrency))

        newtran {:client (nth (first (filter (fn [x] (if (= :client/code (first x)) true false)) client) ) 1) :security (:db/id (nth (nth tran 1) 1))  :nominal (nth (nth tran 2) 1) :price (nth (nth tran 3) 1) :direction (nth (nth tran 4) 1) :valuedate (nth (nth tran 5) 1) :currency newcurrency :comment (nth (nth tran 7) 1) :fx (if (or (= "RUR" newcurrency) (= "RUB" newcurrency))  1 (get-fxrate-by-date newcurrency (nth (nth tran 5) 1)))  :id (first tranid) }
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
