(ns sberapi.db.security
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



(defn get-last-fx [currency]
  (let [
    security (ffirst (d/q '[:find ?e
                       :in $ ?sec
                       :where
                       [?e :security/acode ?sec]
                       ] (d/db conn) (if (= 0 (compare currency "GBX")) "GBP" currency))) 

    rate (first (sort-by first #(> (c/to-long %1) (c/to-long %2))
           (d/q '[:find ?dt ?p
                  :in $ ?sec
                  :where
                  [?e :price/security ?sec]
                  [?e :price/valuedate ?dt]
                  [?e :price/lastprice ?p]
                  ]    
       (d/db conn) security)))
    newrate (if (= 0 (compare currency "GBX")) (/ (nth rate 1) 100.0) (nth rate 1))
    ]
    newrate 
  )
)

(defn security-to-map [security]
  (let [
    newsec {:id (nth security 0) :acode (nth security 1) :exchange (nth security 2) :isin (nth security 3) :price (get-last-fx (nth security 1)) :currency (nth security 4) :assettype (nth security 5)}
        
  ]
  newsec
  )
)

(defn get-securities []
  (let [
        securities (d/q '[:find ?e ?a ?x ?i ?c ?t
                          :where
                          [?e :security/acode]
                          [?e :security/acode ?a]
                          [?e :security/exchange ?x]
                          [?e :security/isin ?i]
                          [?e :security/currency ?c]
                          [?e :security/assettype ?t]
                          ]
                        (d/db conn)) 

    ]
    (map security-to-map securities) 
  )
)
