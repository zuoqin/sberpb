(ns sberapi.routes.security
  (:require [ring.util.http-response :refer :all]
            [compojure.api.sweet :refer :all]
            [schema.core :as s]
            

            [clj-jwt.core  :refer :all]
            [clj-jwt.key   :refer [private-key]]
            [clj-time.core :refer [now plus days]]

            [sberapi.db.security :as db]

            [clojure.string :as str]
))

(defn getSecurities [token]
  (let [
    ;usercode (:iss (-> token str->jwt :claims)  ) 
    securities (into [] (db/get-securities)   )


    result securities
    
    ]
    result
  )
 
)



