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


(defn trans-to-map [tran tranid]

  (let [
        client (ent [[(:db/id (nth (nth tran 0) 1))]]  )
        ;security (ent [[(:db/id (nth (nth tran 1) 1))]]  )


        ;;:security (nth (nth security 0) 1)
        newtran {:client (nth (nth client 0) 1) :security (:db/id (nth (nth tran 1) 1))  :nominal (nth (nth tran 2) 1) :price (nth (nth tran 3) 1) :direction (nth (nth tran 4) 1) :valuedate (nth (nth tran 5) 1) :currency (nth (nth tran 6) 1) :comment (nth (nth tran 7) 1) :id (first tranid) }
        ]

    newtran
  )
)

(defn get-transactions-bysec [client security]
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
