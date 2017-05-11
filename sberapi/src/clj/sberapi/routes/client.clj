(ns sberapi.routes.client
  (:require [ring.util.http-response :refer :all]
            [compojure.api.sweet :refer :all]
            [schema.core :as s]
            

            [clj-jwt.core  :refer :all]
            [clj-jwt.key   :refer [private-key]]
            [clj-time.core :refer [now plus days]]

            [sberapi.db.client :as db]
            [clojure.string :as str]
))

(defn getClients [token]
  (let [
    usercode (:iss (-> token str->jwt :claims)  )
    ;;tr1 (println usercode) 
    clients (into [] (db/get-clients usercode)   )
    result clients
    ]
    result
  )
)



