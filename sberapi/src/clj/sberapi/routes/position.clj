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
    ;usercode (:iss (-> token str->jwt :claims)  ) 
    transactions (into [] (db/get-transactions client)   )

    positions (loop [result {} trans transactions]

                
                (if (seq trans) 
                  (let [
                        sec (str (:security (first trans)))
                        amnt (get result sec )

                        tranamnt (if (= "B" (:direction (first trans))) (:nominal (first trans)) (- 0 (:nominal (first trans))))
                        newamnt (if (nil? amnt ) tranamnt (+ amnt tranamnt) )
                        ]

                    (recur (assoc result sec newamnt )
                         (rest trans))
                  )                  
                  result)


                ) 


    result (map (fn [x] (let [y (Long. (name (first x)))   z (second x)] [y z] ))  positions) 
    
    ]
    ;;result
    positions
  )
 
)


(defn getPostrans [token client security]
  (let [
    ;usercode (:iss (-> token str->jwt :claims)  ) 
    transactions (into [] (db/get-transactions-bysec client security)   )


    result transactions
    
    ]
    result
  )
 
)

