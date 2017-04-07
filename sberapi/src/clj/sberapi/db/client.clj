(ns sberapi.db.client
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



(defn client-to-map [client]
  (let [
    newclient {:id (nth client 0) :code (nth client 1) :name (nth client 2) :currency (nth client 3) :cash (nth client 4) :stockshare (nth client 5) :bondshare (nth client 6) :signedadvisory (nth client 7)}       
  ]

  newclient
  )
)

(defn get-clients []
  (let [
         clients (d/q '[:find ?e ?c ?n ?curr ?cash ?ss ?bs ?sa
                          :where
                          [?e :client/code]
                          [?e :client/code ?c]
                          [?e :client/name ?n]
                          [?e :client/currency ?curr]
                          [?e :client/cash ?cash]
                          [?e :client/stockshare ?ss]
                          [?e :client/bondshare ?bs]
                          [?e :client/signedadvisory ?sa]
                          ]
                        (d/db conn)) 

    ]
    (map client-to-map clients) 
  )
)
