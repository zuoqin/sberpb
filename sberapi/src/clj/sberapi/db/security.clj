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
           (d/q '[:find ?dt ?p ?a ?t ?y ?dvd ?put ?dur
                  :in $ ?sec
                  :where
                  [?e :price/security ?sec]
                  [?e :price/valuedate ?dt]
                  [?e :price/lastprice ?p]
                  [?e :price/analystrating ?a]
                  [?e :price/targetprice ?t]
                  [?e :price/yield ?y]
                  [?e :price/dvddate ?dvd]
                  [?e :price/putdate ?put]
                  [?e :price/duration ?dur]
                  ]    
       (d/db conn) security)))
    newrate (if (= 0 (compare currency "GBX")) (/ (nth rate 1) 100.0) (nth rate 1))
    ]
    [newrate (nth rate 2) (nth rate 3) (nth rate 4) (nth rate 5) (nth rate 6) (nth rate 7)]
  )
)

(defn security-to-map [security]
  (let [
    [price anr target yield dvddate putdate duration] (get-last-fx (nth security 1))

    ;tr1 (println security)
    newsec {:id (nth security 0) :acode (nth security 1) :exchange (nth security 2) :isin (nth security 3) :price price :anr anr :target target :yield yield :dvddate dvddate :putdate putdate :duration duration :currency (nth security 4) :assettype (nth security 5) :bcode (nth security 6) :multiple (nth security 7) :ismatured (nth security 8) :name (nth security 9)}
        
  ]
  newsec
  )
)

(defn get-securities []
  (let [
        securities (d/q '[:find ?e ?a ?x ?i ?c ?t ?b ?m ?ismatured ?n
                          :where
                          [?e :security/acode]
                          [?e :security/acode ?a]
                          [(get-else $ ?e :security/exchange "") ?x]
                          [?e :security/isin ?i]
                          [?e :security/currency ?c]
                          [?e :security/assettype ?t]
                          [?e :security/bcode ?b]
                          [(get-else $ ?e :security/multiple 1.0) ?m]
                          [(get-else $ ?e :security/ismatured false) ?ismatured]
                          [(get-else $ ?e :security/name "") ?n]
                          ]
                        (d/db conn)) 

    ]
    (map security-to-map securities) 
  )
)
