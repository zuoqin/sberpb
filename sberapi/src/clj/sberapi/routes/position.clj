(ns sberapi.routes.position
  (:require [ring.util.http-response :refer :all]
            [compojure.api.sweet :refer :all]
            [schema.core :as s]
            

            [clj-jwt.core  :refer :all]
            [clj-jwt.key   :refer [private-key]]
            [clj-time.core :refer [now plus days]]

            [sberapi.db.position :as db]
            [sberapi.db.security :as secs]

            [clojure.string :as str]
))

(defn getPositions [token client]
  (let [
    ;usercode (:iss (-> token str->jwt :claims)  ) 
    transactions (into [] (db/get-transactions client)   )

    tr1 (println (first transactions))
    securities (secs/get-securities)
    positions (loop [result {} trans transactions]
                (if (seq trans) 
                  (let [
                        tran (first trans)
                        sec (str (:security tran))
                        currency (:currency (first (filter (fn [x] (if (= (:security tran) (:id x)) true false)) securities)))
                        amnt (:amount ( (keyword sec) result ))
                        prevpr (:price ((keyword sec) result))
                        
                        rubprice (* (:fx tran) (:price tran))

                        prevrubprice (:rubprice ((keyword sec) result))
                        tranamnt (if (= "B" (:direction tran)) (:nominal tran) (- 0 (:nominal tran)))
                        newamnt (if (nil? amnt ) tranamnt (+ amnt tranamnt) )
                        wap (if (nil? amnt ) (:price tran) (if (> newamnt 0) (/ (+ (* prevpr amnt) (* (:price tran) tranamnt)) newamnt) 0))


                        waprub (if (nil? amnt ) rubprice (if (> newamnt 0) (/ (+ (* prevrubprice amnt) (* rubprice tranamnt)) newamnt) 0))
                        ]
                    (recur (assoc-in result [(keyword sec) ] {:amount newamnt :price wap :rubprice waprub} )
                         (rest trans))
                  )                  
                  result)
                ) 


    ;result (map (fn [x] (let [y (name (first x))   z (if (< (second x) 0) 0 (second x)) ] [y z] ))  positions) 
    
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

