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


(defn get-transaction [id]

  (let [
        transactions (d/q '[:find ?eid
                           :in $ ?eid
                           :where
                           [?eid]
                           ]
                         (d/db conn) id) 
        newtrans (map (fn [x] (ent x)) transactions)
         ;;newtrans (map  (fn [x] (nth x 0))  transactions)
         ;;positions (loop [tran transactions res {}]
	;;	     (when (> x 1)
	;;	       (println x)
	;;	       (recur (- x 2))))

	positions  transactions
    ]
    positions
  )
)

(defn trans-to-map [tran]

  (let [
        client (ent [[(:db/id (nth (nth tran 0) 1))]]  )
        ;security (ent [[(:db/id (nth (nth tran 1) 1))]]  )


        ;;:security (nth (nth security 0) 1)
        newtran {:client (nth (nth client 0) 1) :security (:db/id (nth (nth tran 1) 1))  :nominal (nth (nth tran 2) 1) :price (nth (nth tran 3) 1) :direction (nth (nth tran 4) 1) :valuedate (nth (nth tran 5) 1) :currency (nth (nth tran 6) 1) :comment (nth (nth tran 7) 1)}
        ]

    newtran
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
         newtrans2 (map (fn [x] (trans-to-map x)) newtrans)


	positions  newtrans2
    ]
    positions
  )
)
