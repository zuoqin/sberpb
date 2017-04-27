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
            [sberapi.db.syssetting :as syssetting]
            [sberapi.db.position :as db]
            [sberapi.db.security :as secs]
            [sberapi.db.client :as clients]
            [postal.core :as postal]
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
                        security (first (filter (fn [x] (if (= (:security tran) (:id x)) true false)) securities))
                        currency (:currency security)
                        amnt (:amount ( (keyword sec) result ))
                        prevpr (if (nil? (:price ((keyword sec) result))) 0 (:price ((keyword sec) result)))
                        
                        rubprice (* (:fx tran) (:price tran))

                        usdrate (db/get-fxrate-by-date "USD" (:valuedate tran))
                        seccurfxrate (db/get-fxrate-by-date currency (:valuedate tran))
                        trancurfxrate (db/get-fxrate-by-date (:currency tran) (:valuedate tran))
                        usdprice (/ rubprice usdrate)

                        prevrubprice (:rubprice ((keyword sec) result))
                        tranamnt (if (= "B" (:direction tran)) (:nominal tran) (- 0 (:nominal tran)))
                        newamnt (if (nil? amnt ) tranamnt (+ amnt tranamnt) )
                        
                        prevusdprice (:wapusd ((keyword sec) result))

                        wap (if (nil? amnt ) (* (:price tran) (if (= 5 (:assettype security)) 1.0 (/ trancurfxrate seccurfxrate)))  (if (> newamnt 0) (if (> tranamnt 0) (/ (+ (* prevpr amnt) (* (:price tran) (if (= 5 (:assettype security)) 1.0 (/ trancurfxrate seccurfxrate)) tranamnt)) newamnt)  prevpr)  0))


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



(defn calcPortfolios [token security percentage]
  (let [
    ;usercode (:iss (-> token str->jwt :claims)  ) 
    transactions (into [] (db/get-transactions-by-security security)   )
    clients (clients/get-clients)
    

    ;tr1 (println (first transactions))
    securities (secs/get-securities)


    sec (first (filter (fn [x] (if (= security (:id x)) true false)) securities))
    secfxrate (db/get-fxrate-by-date (:currency sec) (java.util.Date.))
    lastprice (db/get-fxrate-by-date (:acode sec) (java.util.Date.))

    secrubprice (* secfxrate (if (nil? lastprice) 0 lastprice) )

    portfolios (loop [result {} trans transactions]
                (if (seq trans) 
                  (let [
                        tran (first trans)
                        client (:client tran)
                        

                        
                        currency (:currency (first (filter (fn [x] (if (= (:security tran) (:id x)) true false)) securities)))

                        ;tr1 (println (str "client= " client " tran= " tran))
                        amnt (:amount ( (keyword client) result ))
                        prevpr (:price ((keyword client) result))
                        
                        rubprice (* (:fx tran) (:price tran))

                        prevrubprice (:rubprice ((keyword client) result))
                        tranamnt (if (= "B" (:direction tran)) (:nominal tran) (- 0 (:nominal tran)))
                        newamnt (if (nil? amnt ) tranamnt (+ amnt tranamnt) )
                        wap (if (nil? amnt ) (:price tran) (if (> newamnt 0) (/ (+ (* prevpr amnt) (* (:price tran) tranamnt)) newamnt) 0))



                        ;tr1 (if (= "VADAF" client) (println (str "fx tran: " (:fx tran) " price: " (:price tran) " rubprice: " rubprice)))
                        waprub (if (nil? amnt ) rubprice (if (> newamnt 0) (/ (+ (* prevrubprice amnt) (* rubprice tranamnt)) newamnt) 0))
                        ]
                    (recur (assoc-in result [(keyword client) ] {:amount newamnt :price wap :rubprice waprub} )
                         (rest trans))
                  )                  
                  result)
                ) 


    filter_portfs (filter (fn [x] (if (> (:amount (second x)) 0) true false))  portfolios)


    
    calc_portfs (map (fn [client] (
      let [

           ;tr1 (println (filter (fn [x] (if (= :ZADNF (first x)) true false)) filter_portfs))
           usedlimit (second (first (filter (fn [x] (if (= (:code client) (name (first x))) true false)) filter_portfs)))

           seclastrubprice (if (= secrubprice 0.0) (if (nil? usedlimit) 0.0 (:rubprice usedlimit) ) secrubprice)

           calcusedlimit (if (nil? usedlimit) 0 (* (:amount usedlimit) seclastrubprice))

           usdrate (db/get-fxrate-by-date "USD" (java.util.Date.))
           eurrate (db/get-fxrate-by-date "EUR" (java.util.Date.))
           gbprate (db/get-fxrate-by-date "GBP" (java.util.Date.))

           fxrate (db/get-fxrate-by-date (str/upper-case (:currency client)) (java.util.Date.))

           clienttotalrub (+ (* (:usd client) usdrate) (* (:rub client) 1.0) (* (:eur client) eurrate) (* (:gbp client) gbprate))

           seclimitinrub (/ (* fxrate (:signedadvisory client)  (if (= (:assettype sec) 5) (* (:bondshare client) percentage) (* (:stockshare client) percentage)) ) 10000.0 )

           ;tr1 (println client)
           ;tr1 (println (str "fxrate: " fxrate " seclimitinrub: " seclimitinrub))

           ;tr1 (println (str "client: " client " sec last price: " seclastrubprice) " usedlimit: " usedlimit )
     ]
      {:client (:code client) :usd (:usd client) :rub (:rub client) :eur (:eur client) :gbp (:gbp client) :currency (:currency client) :shares (if (nil? usedlimit) 0 (:amount usedlimit)) :maxlimit (int (/ seclimitinrub (if (= 0.0 seclastrubprice) 1.0 seclastrubprice))) :freelimit (int (/ (- seclimitinrub calcusedlimit) (if (= 0.0 seclastrubprice) 1.0 seclastrubprice)))

 :maxusdshares (int (/ (if (> (* usdrate (:usd client))  (- seclimitinrub calcusedlimit)) (- seclimitinrub calcusedlimit) (* usdrate (:usd client))) (if (= 0.0 seclastrubprice) 1.0 seclastrubprice)))

 :maxrubshares (int (/ (if (> (* 1.0 (:rub client))  (- seclimitinrub calcusedlimit)) (- seclimitinrub calcusedlimit) (* 1.0 (:rub client))) (if (= 0.0 seclastrubprice) 1.0 seclastrubprice)))

 :maxeurshares (int (/ (if (> (* eurrate (:eur client))  (- seclimitinrub calcusedlimit)) (- seclimitinrub calcusedlimit) (* eurrate (:eur client))) (if (= 0.0 seclastrubprice) 1.0 seclastrubprice)))

 :maxgbpshares (int (/ (if (> (* gbprate (:gbp client))  (- seclimitinrub calcusedlimit)) (- seclimitinrub calcusedlimit) (* gbprate (:gbp client))) (if (= 0.0 seclastrubprice) 1.0 seclastrubprice)))
      }
      ))   clients)
    ]
    calc_portfs
  )
)



(defn sendLetter [security clientdata txtdata]
  (let [
    ;tr1 (println (str "sending text1: ") txtdata)
    ;tr1 (println (str clientdata))
    email (:advmail (first (filter (fn [x] (if (= (:code x) (:code clientdata)) true false)) (clients/get-clients))))

    sec (first (filter (fn [x] (if (= (:id x) security) true false)) (secs/get-securities)))
    seccode (:acode sec)
    isin (:isin sec)
    assettype (:assettype sec)
    texttosend (str "Прошу согласовать покупку " (if (= (:assettype sec) 1) "акций " "облигаций ") seccode " (ISIN: " isin ") для клиента " (:code clientdata) " в количестве " (:amount clientdata) " штук." "\r\n\r\n" txtdata)
    ;tr1 (println (str "sending email to: ") email)
    ;tr1 (println (str "sending text: ") texttosend)
    ]
    (postal/send-message {:host "psmtp.sberbank-cib.ru"} ;:user "alexey@sberpb.com" :pass "password"
      {:from "tradeidea@sberpb.com"
       :to email
       :cc ["Alexey_Zorchenkov@sberbank-pb.ru" "Rustam_Nazimanov@sberbank-pb.ru" "Alexey_Koshkin@sberbank-pb.ru"
         ]
       :subject (str "Trade idea: " seccode) 
       :body texttosend}
    )
    ;email
  )
)

(defn sendLetters [token security clients] 
  (let [
      recommendtext (:data (first (filter (fn [x] (if (= "TRADE_IDEA" (:code x)) true false)) (syssetting/get-settings))))
      ;tr1 (println clients)
    ]
    (doall (map (fn [x] (sendLetter security x recommendtext)) clients))
    ;; (postal/send-message {:from "me@draines.com"
    ;;                         :to ["mom@example.com" "dad@example.com"]
    ;;                         :cc "bob@example.com"
    ;;                         :subject "Hi!"
    ;;                         :body "Test."
    ;;                         :X-Tra "Something else"})
    ;(println (str clients))
  )
)
