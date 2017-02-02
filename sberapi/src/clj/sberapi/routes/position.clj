(ns sberapi.routes.position
  (:require [ring.util.http-response :refer :all]
            [compojure.api.sweet :refer :all]
            [schema.core :as s]
            

            [clj-jwt.core  :refer :all]
            [clj-jwt.key   :refer [private-key]]
            [clj-time.core :refer [now plus days]]

            [sberapi.db.position :as db]

            [clojure.string :as str]
))

(defn getPositions [token client]
  (let [
    usercode (:iss (-> token str->jwt :claims)  ) 
    result (into [] (db/get-positions client)   )         
    ]
    result
  )
 
)



