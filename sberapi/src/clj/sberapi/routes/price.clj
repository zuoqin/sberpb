(ns sberapi.routes.price
  (:require [ring.util.http-response :refer :all]
            [compojure.api.sweet :refer :all]
            [schema.core :as s]
            

            [clj-jwt.core  :refer :all]
            [clj-jwt.key   :refer [private-key]]
            [clj-time.core :refer [now plus days]]

            [sberapi.db.price :as db]
            [clojure.string :as str]
))

(defn getPrices [token]
  (let [
    ;;usercode (:iss (-> token str->jwt :claims)  )
    ;;tr1 (println usercode) 
    prices (into [] (db/get-prices))
    result prices
    ]
    result
  )
)

(defn updatePrice [token quote]
  (let [
    ;;usercode (:iss (-> token str->jwt :claims)  )
    ;;tr1 (println usercode) 
    tr1 (db/update-price quote)
    result "OK"
    ]
    result
  )
)



