(ns sberapi.routes.position
  (:require [ring.util.http-response :refer :all]
            [compojure.api.sweet :refer :all]
            [schema.core :as s]
            

            [clj-jwt.core  :refer :all]
            [clj-jwt.key   :refer [private-key]]
            [clj-time.core :refer [now plus days]]

            [clj-time.format :as f]
            [clj-time.coerce :as c]
            [clj-time.core :as t]

            [sberapi.db.position :as db]
            [sberapi.db.security :as secs]

            [clojure.string :as str]
))

(defn sort-tran-from-db [tran1 tran2]
  (let [
        ;tr1 (println tran1)
        ;tr2 (println tran2)

        
        dt1 (c/to-long (:valuedate tran1))
        dt2 (c/to-long (:valuedate tran2))

        ]
    
    (if (or  (< dt1  dt2)
	  (and (= dt1 dt2)(< (:id tran1) (:id tran2))))
    true
    false)
  )
)

(defn getPositions [token client]
  (let [
    ;usercode (:iss (-> token str->jwt :claims)  ) 
    transactions (sort (comp sort-tran-from-db) (db/get-transactions client))
    newtrans (filter (fn [x] (if (or (nil? (:security x)) (= 0 (compare "MSTT" (:security x))) )  false true)) transactions)

        ;(into [] (db/get-transactions client)   )

    ;tr1 (println (first transactions))
    securities (secs/get-securities)
    positions (loop [result {} trans transactions]
                (if (seq trans) 
                  (let [
                        tran (first trans)
                        sec (str (:security tran))
                        currency (:currency (first (filter (fn [x] (if (= (:security tran) (:id x)) true false)) securities)))
                        amnt (:amount ( (keyword sec) result ))
                        prevpr (if (nil? (:price ((keyword sec) result))) 0 (:price ((keyword sec) result)))
                        
                        rubprice (* (:fx tran) (:price tran))

                        usdrate (db/get-fxrate-by-date "USD" (:valuedate tran))
                        usdprice (/ rubprice usdrate)

                        prevrubprice (:rubprice ((keyword sec) result))
                        tranamnt (if (= "B" (:direction tran)) (:nominal tran) (- 0 (:nominal tran)))
                        newamnt (if (nil? amnt ) tranamnt (+ amnt tranamnt) )
                        
                        prevusdprice (:wapusd ((keyword sec) result))

                        wap (if (nil? amnt ) (:price tran) (if (> newamnt 0) 
                                                           


                        (if (> tranamnt 0) (/ (+ (* prevpr amnt) (* (:price tran) tranamnt)) newamnt)  prevpr)  0))


                        waprub (if (nil? amnt ) rubprice (if (> newamnt 0) (/ (+ (* prevrubprice amnt) (* rubprice tranamnt)) newamnt) 0))

                        wapusd (if (nil? amnt ) usdprice (if (> newamnt 0) (/ (+ (* prevusdprice amnt) (* usdprice tranamnt)) newamnt) 0))
                        ]
                    (recur (assoc-in result [(keyword sec) ] {:amount newamnt :price wap :rubprice waprub :wapusd wapusd} )
                         (rest trans))
                  )                  
                  result)
                ) 


    ;result (map (fn [x] (let [y (name (first x))   z (if (< (second x) 0) 0 (second x)) ] [y z] ))  positions) 
    
    ]
    ;(filter (fn [x] (if (= (keyword "17592186045777")  (first x)) true false)) positions)
    positions
    ;(first positions)
  )
)


(defn getPostrans [token client security]
  (let [
    ;usercode (:iss (-> token str->jwt :claims)  ) 
    transactions (into [] (db/get-transactions-by-client-security client security)   )


    result transactions
    
    ]
    result
  )
 
)







(defn getPortfolios [token security]
  (let [
    ;usercode (:iss (-> token str->jwt :claims)  ) 
    transactions (into [] (db/get-transactions-by-security security)   )

    ;tr1 (println (first transactions))
    securities (secs/get-securities)
    portfolios (loop [result {} trans transactions]
                (if (seq trans) 
                  (let [
                        tran (first trans)
                        client (:client tran)
                        
                        currency (:currency (first (filter (fn [x] (if (= (:security tran) (:id x)) true false)) securities)))
                        amnt (:amount ( (keyword client) result ))
                        prevpr (:price ((keyword client) result))
                        
                        rubprice (* (:fx tran) (:price tran))

                        prevrubprice (:rubprice ((keyword client) result))
                        tranamnt (if (= "B" (:direction tran)) (:nominal tran) (- 0 (:nominal tran)))
                        newamnt (if (nil? amnt ) tranamnt (+ amnt tranamnt) )
                        wap (if (nil? amnt ) (:price tran) (if (> newamnt 0) (/ (+ (* prevpr amnt) (* (:price tran) tranamnt)) newamnt) 0))


                        waprub (if (nil? amnt ) rubprice (if (> newamnt 0) (/ (+ (* prevrubprice amnt) (* rubprice tranamnt)) newamnt) 0))
                        ]
                    (recur (assoc-in result [(keyword client) ] {:amount newamnt :price wap :rubprice waprub} )
                         (rest trans))
                  )                  
                  result)
                ) 


    filter_portfs (filter (fn [x] (if (> (:amount (second x)) 0) true false))  portfolios) 
    
    result (map (fn [x]
                  (let [
                        y (name (first x))
                        z (second x) 
                        ;tr1 (println (str "y: " y " z: " z))
                       ] {(keyword y) z}))  filter_portfs)

    ]
    (into {} result)
    ;filter_portfs
  )
)



(defn calcPortfolios [token security]
  (let [
    ;usercode (:iss (-> token str->jwt :claims)  ) 
    transactions (into [] (db/get-transactions-by-security security)   )

    ;tr1 (println (first transactions))
    securities (secs/get-securities)
    portfolios (loop [result {} trans transactions]
                (if (seq trans) 
                  (let [
                        tran (first trans)
                        client (:client tran)
                        
                        currency (:currency (first (filter (fn [x] (if (= (:security tran) (:id x)) true false)) securities)))
                        amnt (:amount ( (keyword client) result ))
                        prevpr (:price ((keyword client) result))
                        
                        rubprice (* (:fx tran) (:price tran))

                        prevrubprice (:rubprice ((keyword client) result))
                        tranamnt (if (= "B" (:direction tran)) (:nominal tran) (- 0 (:nominal tran)))
                        newamnt (if (nil? amnt ) tranamnt (+ amnt tranamnt) )
                        wap (if (nil? amnt ) (:price tran) (if (> newamnt 0) (/ (+ (* prevpr amnt) (* (:price tran) tranamnt)) newamnt) 0))


                        waprub (if (nil? amnt ) rubprice (if (> newamnt 0) (/ (+ (* prevrubprice amnt) (* rubprice tranamnt)) newamnt) 0))
                        ]
                    (recur (assoc-in result [(keyword client) ] {:amount newamnt :price wap :rubprice waprub} )
                         (rest trans))
                  )                  
                  result)
                ) 


    filter_portfs (filter (fn [x] (if (> (:amount (second x)) 0) true false))  portfolios)
    
    ;; result (map (fn [x]
    ;;               (let [
    ;;                     y (name (first x))
    ;;                     z (second x) 
    ;;                     ;tr1 (println (str "y: " y " z: " z))
    ;;                    ] {(keyword y) z}))  filter_portfs)

    ]
    (into {} result)
    ;filter_portfs
  )
)
