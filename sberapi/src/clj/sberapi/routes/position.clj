(ns sberapi.routes.position
  (:gen-class)
  (use dk.ative.docjure.spreadsheet)
  ;(use (incanter core charts excel))

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

            [sberapi.config :refer [env]]
))

(def custom-formatter (f/formatter "dd/MM/yyyy"))
(def build-in-basicdate-formatter (f/formatters :basic-date))
(def build-in-date-formatter (f/formatters :date))

;secs (secs/get-securities)

(def app-state (atom {}) )

(def client_state (atom {}))

(def sec_state (atom {}))

(defn sort-clients [client1 client2]
  (let [
        ;dtt1 (c/to-long (:tradedate tran1))
        ;dtt2 (c/to-long (:tradedate tran2))

        ]
    
    (if (or (< (compare (:code client1) (:code client2)) 0))
    true
    false)
  )
)

(defn sort-securities [sec1 sec2]
  (let [
        ;dtt1 (c/to-long (:tradedate tran1))
        ;dtt2 (c/to-long (:tradedate tran2))

        ]
    
    (if (or (< (compare (:acode sec1) (:acode sec2)) 0))
    true
    false)
  )
)


(defn sort-tran-from-db [tran1 tran2]
  (let [
        ;tr1 (println tran1)
        ;tr2 (println tran2)

        
        dtv1 (c/to-long (:valuedate tran1))
        dtv2 (c/to-long (:valuedate tran2))

        ;dtt1 (c/to-long (:tradedate tran1))
        ;dtt2 (c/to-long (:tradedate tran2))

        ]
    
    (if (or  (< dtv1  dtv2)
          ;(and (= dtv1 dtv2)(< dtt1 dtt2 ))
	  (and (= dtv1 dtv2) (< (compare (:id tran1) (:id tran2)) 0)))
    true
    false)
  )
)

(defn sort-trans-from-db [tran1 tran2]
  (let [
        ;tr1 (println tran1)
        ;tr2 (println tran2)

        
        dt1 (c/to-long (:valuedate tran1))
        dt2 (c/to-long (:valuedate tran2))

        ]
    
    (if (or  (< (compare (:client tran1) (:client tran2)) 0 ) 
             (and (= (compare (:client tran1) (:client tran2)) 0 ) (< dt1  dt2)) 
             (and (= (:client tran1) (:client tran2)) (= dt1 dt2)(< (:id tran1) (:id tran2))))
    true
    false)
  )
)


(defn retrievePositions [token client]
  (let [
    ;usercode (:iss (-> token str->jwt :claims)  ) 
    transactions (sort (comp sort-tran-from-db) (db/get-transactions client))
    ;tr1 (println (first transactions))
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

                        ;tr1 (if (nil? security )) (println (str "sec currency=" security " tran currency=" tran))
                        amnt (if (nil? (:amount ( (keyword sec) result ))) 0.0 (:amount ( (keyword sec) result ))) 
                        prevpr (if (nil? (:price ((keyword sec) result))) 0.0 (:price ((keyword sec) result)))                       

                        usdrate (db/get-fxrate-by-date "USD" (:valuedate tran))
                        seccurfxrate (db/get-fxrate-by-date currency (:valuedate tran))
                        trancurfxrate (db/get-fxrate-by-date (:currency tran) (:valuedate tran))
                        
                        rubprice (* (if (or (= 5 (:assettype security)) (= 15 (:assettype security)))  seccurfxrate (:fx tran) ) (:price tran))
                        usdprice (/ rubprice usdrate)
                        prevrubprice (:rubprice ((keyword sec) result))
                        tranamnt (if (= "B" (:direction tran)) (:nominal tran) (- 0.0 (:nominal tran)))
                        newamnt (if (nil? amnt ) tranamnt (+ amnt tranamnt) )
                        ;tr1 (println "step 3")
                        prevusdprice (:wapusd ((keyword sec) result))

                        seccurprice (* (:price tran) (if (or (= 5 (:assettype security)) (= 15 (:assettype security)))  1.0 (/ trancurfxrate seccurfxrate)))

                        wap (if (= 0.0 amnt ) seccurprice (if (> newamnt 0.0) (if (> amnt 0.0) (if (> tranamnt 0.0) (/ (+ (* prevpr amnt) (* seccurprice tranamnt)) newamnt)  prevpr) seccurprice) (if (< amnt 0.0) (if (< tranamnt 0.0) (/ (+ (* prevpr amnt) (* seccurprice tranamnt)) newamnt) prevpr) seccurprice)))
                        
                        waprub (if (= 0.0 amnt ) rubprice (if (> newamnt 0.0) (if (> amnt 0.0) (if (> tranamnt 0.0) (/ (+ (* prevrubprice amnt) (* rubprice tranamnt)) newamnt)  prevrubprice) rubprice) (if (< amnt 0.0) (if (< tranamnt 0.0) (/ (+ (* prevrubprice amnt) (* rubprice tranamnt)) newamnt) prevrubprice) rubprice)))
                         
                        wapusd (if (= 0.0 amnt ) usdprice (if (> newamnt 0.0) (if (> amnt 0.0) (if (> tranamnt 0.0) (/ (+ (* prevusdprice amnt) (* usdprice tranamnt)) newamnt)  prevusdprice) usdprice) (if (< amnt 0.0) (if (< tranamnt 0.0) (/ (+ (* prevusdprice amnt) (* usdprice tranamnt)) newamnt) prevusdprice) usdprice)))

                        ;tr1 (if (= (:id security) 17592186046065) (println (str "assettype=" (:assettype security) " amnt= " amnt " newamnt= " newamnt " wap= " wap " waprub= " waprub " wapusd= " wapusd " prevusdprice= " prevusdprice)))

                        ;;(if (= amnt 0.0) " amount 0" " amount not 0")
                        ;tr1 (println "step 6")
                        ]
                    (recur (assoc-in result [(keyword sec) ] {:amount newamnt :price wap :rubprice waprub :wapusd wapusd} )
                         (rest trans))
                  )
                  result)
                )


    result (filter (fn [x] (if (= 0.0 (:amount (second x))) false true)) positions)


    ;tr1 (println (str "client= " client))
    tr1 (swap! client_state assoc-in [(keyword client) :positions] result)
    ]
    result
    ;positions
    ;(first positions)
  )
)

(defn getPositions [token client]
  (let [
    result (if (nil? (:positions ((keyword client) @client_state))) (retrievePositions token client) (:positions ((keyword client) @client_state)))
    ]
    result
  )
)


(defn sort-deals [deal1 deal2]
  (let [
        ;tr1 (println tran1)
        ;tr2 (println tran2)
        ]
    
    (if (or  (< (:security deal1) (:security deal2))
	  (and (= (:security deal1) (:security deal2)) (< (c/to-long (:tradedate deal1))  (c/to-long (:tradedate deal2)) ))

         (and (= (:security deal1) (:security deal2)) (= (c/to-long (:tradedate deal1))  (c/to-long (:tradedate deal2)) ) (< (c/to-long (:valuedate deal1))  (c/to-long (:valuedate deal2)) ))
        )
    true
    false)
  )
)

(defn sort-dates [date1 date2]
  (let [
        ;tr1 (println date1)
        ;tr2 (println date2)
        ]
    
    (if (< (c/to-long date1) (c/to-long date2))
    false
    true
    )
  )
)


(defn retrieveDeals [token client page]
  (let [
    ;usercode (:iss (-> token str->jwt :claims)  ) 
    transactions (into [] (db/get-transactions-by-client client))
    thetransactions (sort (comp sort-deals) (map (fn [x]
        (let [tran x
              newvaluedate (java.util.Date. (c/to-long (f/parse db/custom-formatter (f/unparse db/custom-formatter (c/from-long (c/to-long (:valuedate x)))))))  
              newtran (assoc tran :valuedate newvaluedate)
              ;tr1 (println (str newtran))
             ]
             newtran
        )
      ) transactions))

    trandates (distinct (map (fn [x] (:valuedate x)) thetransactions))
    selecteddates (take 5 (drop (* page 5) (sort (comp sort-dates) trandates)))

    ;tr1 (println (str "dates count=" (count selecteddates)))
    newtransactions (filter (fn [x] (some #(= (:valuedate x) %) selecteddates)) thetransactions)


    thecursec (first (filter (fn [x] (if (= (:security (first newtransactions)) (:id x)) true false)) (secs/get-securities)))
    thedirection (:direction (first newtransactions))
    


    ;;tr1 (println (str "newtrans= "(first newtransactions)))
    theusdrate (db/get-fxrate-by-date "USD" (if (nil? (:valuedate (first newtransactions))) (java.util.Date.) (:valuedate (first newtransactions))))

    theseccurrate (if (nil? (:currency thecursec)) 1.0 (db/get-fxrate-by-date (:currency thecursec) (if (nil? (:valuedate (first newtransactions))) (java.util.Date.) (:valuedate (first newtransactions))))) 
    ;tr1 (println (str "777777"))
    thetrancurrate (if (nil? (:currency (first newtransactions))) 1.0 (db/get-fxrate-by-date (:currency (first newtransactions)) (if (nil? (:valuedate (first newtransactions))) (java.util.Date.) (:valuedate (first newtransactions)))))
    thecurdate (:valuedate (first newtransactions))
    ;tr1 (println (str "8888888888"))
    ;securities (distinct (map (fn [x] (:security x)) transactions))

    ;;tr1 (println (str "Total securities: " (count securities)))
    transbysecs (loop [result [] thetrans newtransactions cursec thecursec deals []  waprub 0 wapusd 0 wap 0 amnt 0.0 usdrate theusdrate trancurrrate thetrancurrate seccurrate theseccurrate curdate thecurdate direction thedirection]
      (if (seq thetrans)
        (let [
              tran (first thetrans)

              newcursec (if (= (:security tran) (:id cursec)) cursec (first (filter (fn [x] (if (= (:security tran) (:id x)) true false)) (secs/get-securities))))

              newamnt (if (and (= (:id cursec)  (:id newcursec))  (= curdate (:valuedate tran))) amnt 0.0)

              trannominal (if (= "B" (:direction tran)) (:nominal tran) (- 0 (:nominal tran)))

              newnominal (if (and (= (:id cursec)  (:id newcursec)) (= curdate (:valuedate tran))) (+ trannominal newamnt) trannominal) 

              newseccurrate (if (and (= (:id cursec)  (:id newcursec)) (= curdate (:valuedate tran))) seccurrate (db/get-fxrate-by-date (:currency newcursec) (:valuedate tran)))
              newtrancurrate  (if (and (= (:id cursec)  (:id newcursec)) (= curdate (:valuedate tran))) trancurrrate (db/get-fxrate-by-date (:currency tran) (:valuedate tran)))

              rubprice (if (or (= 5 (:assettype newcursec)) (= 15 (:assettype newcursec)))  (* newseccurrate (:price tran)) (* newtrancurrate (:price tran)))
              ;tr1 (if (= (:id newcursec) 17592186045512) (println (str " rubprice= " rubprice " tranprice= " (:price tran) " newnominal= " newnominal " trannominal= " trannominal)))

              newusdrate (if (= (:valuedate tran) curdate) usdrate (db/get-fxrate-by-date "USD" (:valuedate tran)))

              ;tr1 (println (str "9999999999999 sec= " cursec))
              
              

              
              ;tr1 (println (str "2222222222222"))
              usdprice (/ rubprice newusdrate)
              seccurprice (/ rubprice newseccurrate)
              ;tr1 (if (= (:id cursec) 17592186046015) (println (str tran))) 
              
              ;tr1 (println (str "000000000"))

              ;tttt (println (str "newnominal=" newnominal " amnt=" amnt " trannominal=" trannominal " cursec=" (:id cursec) " newsec=" (:id newcursec) " seccurprice= " seccurprice " price=" (:price tran) " rubprice=" rubprice  " amnt=" newnominal))
              ;;(if (= (:id newcursec) 17592186045484) )  " newwaprub=" (:waprub theres) " wapusd=" (:wapusd theres) " wap=" (:wap theres)


              theres (if (and (= (:valuedate tran) curdate) (= (:id cursec) (:id newcursec))) {:nominal newnominal :wap (case newnominal 0.0 seccurprice (/ (+ (* trannominal seccurprice) (* newamnt wap)) newnominal))   :wapusd (case newnominal 0.0 usdprice (/ (+ (* trannominal usdprice) (* newamnt wapusd)) newnominal))   :waprub (case newnominal 0.0 rubprice (/ (+ (* trannominal rubprice) (* newamnt waprub)) newnominal)) }  {:nominal newnominal :wap seccurprice  :wapusd usdprice  :waprub rubprice })



              newdeals (if (= (:id cursec) (:id newcursec))  (if (= (:valuedate tran) curdate) deals (conj deals {:date (f/unparse db/custom-formatter (c/from-long (c/to-long curdate)))  :direction direction :nominal amnt :waprub waprub :wapusd wapusd :wap wap}) ) [])


              newresult (if (or (= (:assettype cursec) 10) (= (:id cursec)  (:security tran))) result (conj result {:security (:id cursec)  :transactions (conj deals {:date (f/unparse db/custom-formatter (c/from-long (c/to-long curdate)))  :direction direction :nominal amnt :waprub waprub :wapusd wapusd :wap wap})}))
              ;thetrans (filter (fn [x] (if (and (= (:security x) sec)) true false)) newtransactions)
              ;;tr1 (if (= (:id newcursec) 17592186045465) (println (str  "deals count= " (count newdeals) " newcursec= " (:id newcursec) " cursec= " (:id cursec) " curdate= " curdate " valuedate= " (:valuedate tran) " newwaprub=" (:waprub theres) " wapusd=" (:wapusd theres) " wap=" (:wap theres) " newnominal=" newnominal " newtrancurrate=" newtrancurrate " trannominal=" trannominal " oldamnt=" amnt " newamnt= " newamnt " rubprice=" rubprice " tranprice=" (:price tran))))
              ;thedates (distinct (map (fn [x] (:valuedate x)) thetrans))
              
              
              ]
          (recur newresult (rest thetrans) newcursec newdeals (:waprub theres) (:wapusd theres) (:wap theres) newnominal newusdrate newtrancurrate newseccurrate (:valuedate tran) (:direction tran))
        )
        (if (= (:assettype cursec) 10) result (conj result {:security (:id cursec)  :transactions (conj deals {:date (f/unparse db/custom-formatter (c/from-long (c/to-long curdate)))  :direction direction :nominal amnt :waprub waprub :wapusd wapusd :wap wap})}))        
        )
      )

    ;tr1 (println (str "Total deals: " (count transbysecs)))

    
    result (if (> (count newtransactions) 0) (into [] transbysecs) [])

    tr1 (swap! client_state assoc-in [(keyword client) :deals (keyword (str page))] result)
    ;tr1 (println (str "deal1  " (first result)))
    ]
    result
  )
)

(defn getDeals [token client page]
  (let [
    result (if (nil? ((keyword (str page)) (:deals ((keyword client) @client_state)))) (retrieveDeals token client page) ((keyword (str page)) (:deals ((keyword client) @client_state))))
    ]
    result
  )
)

(defn getPostrans [token client security]
  (let [
    ;usercode (:iss (-> token str->jwt :claims))
    transactions (into [] (db/get-transactions-by-client-security client security))

    result transactions
    ]
    result
  )
)

(defn cacheSecurities []
  (let [
    secs (if (nil? (:secs @app-state)) (secs/get-securities) (:secs @app-state))
    tr1 (swap! app-state assoc-in [:secs] secs)
    ]
    secs
  )
)

(defn get_sharesbonds [client]
  (let [
    secs (cacheSecurities)
  ]
  (filter (fn [x] (let [
    sec (first (filter (fn[y] (if (= (name (first x)) (str (:id y)) ) true false)) secs))
    assettype (:assettype sec)
    ]
    (if (or (= 1 assettype) (= 5 assettype)) true false))) (:positions ((keyword client) @client_state)))
  )
)


(defn calc_cashusdvalue [client]
  (let [
    secs (cacheSecurities)
    usdrate (:price (first (filter (fn [x] (if (= "USD" (:acode x)) true false)) secs)))
    eurrate (:price (first (filter (fn [x] (if (= "EUR" (:acode x)) true false)) secs)))
    gbprate (:price (first (filter (fn [x] (if (= "GBP" (:acode x)) true false)) secs)))
    clients (clients/get-clients "zuoqin")

    cashusdvalue (+ (:usd (first (filter (fn [x] (if (= (:code x) client) true false)) clients))) (* eurrate (/ (:eur (first (filter (fn [x] (if (= (:code x) client) true false)) clients))) usdrate)) (* gbprate (/ (:gbp (first (filter (fn [x] (if (= (:code x) client) true false)) clients))) usdrate)) (* 1.0 (/ (:rub (first (filter (fn [x] (if (= (:code x) client) true false)) clients))) usdrate)))
        ]
    cashusdvalue
  )
)


(defn calc_portfusdvalue [client]
  (let [
    secs (cacheSecurities)
    usdrate (:price (first (filter (fn[y] (if (= "USD" (:acode y)) true false)) secs)))

    secsvalues (map (fn [x] (
      let [
         sec (first (filter (fn[y] (if (= (name (first x)) (str (:id y)) ) true false)) secs))
         currency (:currency sec)
         assettype (:assettype sec)
 
         seccurfxrate (db/get-fxrate-by-date currency (java.util.Date.))

         ;tr1 (println (str "multsec=" (:multiple sec) " fx=" seccurfxrate " price=" (:price sec) " currency=" (:currency sec)))

         rubprice (* (:multiple sec) seccurfxrate (if (= 5 assettype) 0.01 1.0 ) (if (nil? (:price sec)) 0.0 (:price sec)))

         ;tr1 (println sec)
         ;tr1 (println (str x))
         usdprice (/ rubprice usdrate)
      ]
      {:usdvalue (* (:amount (second x)) usdprice)}
      )
    ) (get_sharesbonds client))

    ;tr1 (println (str (first secsvalues)))
    
    secsusdvalue (if (nil? (:positions ((keyword client) @client_state))) 0.0
     (:usdvalue (reduce (fn [x y] {:usdvalue (+ (:usdvalue x) (:usdvalue y))})
       secsvalues)))
    cashusdvalue (calc_cashusdvalue client) 

    portfusdvalue (+ secsusdvalue cashusdvalue)
  ]
  portfusdvalue
  )
)


(defn retrievePortfolios [token security]
  (let [
    ;usercode (:iss (-> token str->jwt :claims)  ) 
    transactions (sort (comp sort-trans-from-db) (db/get-transactions-by-security security))

    ;tr1 (println (first transactions))
    securities (cacheSecurities)
    thesecurity (first (filter (fn [x] (if (= security (:id x)) true false)) securities))
    portfolios (loop [result {} trans transactions]
                (if (seq trans) 
                  (let [
                        tran (first trans)
                        client (:client tran)
                        

                        
                        currency (:currency thesecurity)
                        amnt (if (nil? (:amount ( (keyword client) result ))) 0.0 (:amount ( (keyword client) result )))
                        prevpr (:price ((keyword client) result))
                        
                        usdrate (db/get-fxrate-by-date "USD" (:valuedate tran))
                        seccurfxrate (db/get-fxrate-by-date currency (:valuedate tran))
                        trancurfxrate (db/get-fxrate-by-date (:currency tran) (:valuedate tran))
                        rubprice (if (= 5 (:assettype thesecurity)) (* seccurfxrate (:price tran)) (* trancurfxrate (:price tran))) 
                        usdprice (/ rubprice usdrate)
                        seccurprice (/ rubprice seccurfxrate)

                        
                        prevrubprice (:rubprice ((keyword client) result))
                        prevusdprice (:wapusd ((keyword client) result))

                        tranamnt (if (= "B" (:direction tran)) (:nominal tran) (- 0 (:nominal tran)))
                        newamnt (if (nil? amnt ) tranamnt (+ amnt tranamnt) )

                        ;tr1 (if (= (:client tran) "GBCJF") (println (str "secfx= " seccurfxrate " usdprice=" usdprice " rubprice=" rubprice " assetprice=" (:assettype thesecurity)))) 
                        ;tr1 (if (= client "PYUMF") (println (str "prevpr= " prevpr " amnt= " amnt " tranamnt= " tranamnt " newamnt= " newamnt))) 
                        
                        wap    (if (= 0.0 amnt ) seccurprice (if (> newamnt 0.0) (if (> amnt 0.0) (if (> tranamnt 0.0) (/ (+ (* prevpr amnt) (* seccurprice tranamnt)) newamnt)  prevpr) seccurprice)   (if (< amnt 0.0) (if (< tranamnt 0.0) (/ (+ (* prevpr amnt) (* seccurprice tranamnt)) newamnt)  prevpr) seccurprice) ))

                        waprub (if (= 0.0 amnt ) rubprice (if (> newamnt 0.0) (if (> amnt 0.0) (if (> tranamnt 0.0) (/ (+ (* prevrubprice amnt) (* rubprice tranamnt)) newamnt)  prevrubprice) rubprice)   (if (< amnt 0.0) (if (< tranamnt 0.0) (/ (+ (* prevrubprice amnt) (* rubprice tranamnt)) newamnt)  prevrubprice) rubprice))) 

                        wapusd (if (= amnt 0.0) usdprice (if (> newamnt 0.0) (if (> amnt 0.0) (if (> tranamnt 0.0) (/ (+ (* prevusdprice amnt) (* usdprice tranamnt)) newamnt)  prevusdprice) usdprice)   (if (< amnt 0.0) (if (< tranamnt 0.0) (/ (+ (* prevusdprice amnt) (* usdprice tranamnt)) newamnt)  prevusdprice) usdprice)))
                        ]
                    (recur (assoc-in result [(keyword client) ] {:amount newamnt :price wap :rubprice waprub :wapusd wapusd} )
                         (rest trans))
                  )                  
                  result)
                ) 


    filter_portfs (filter (fn [x] (if (not= (:amount (second x)) 0.0) true false))  portfolios) 
    usdrate (:price (first (filter (fn[y] (if (= "USD" (:acode y)) true false)) securities)))
    result (into {} (map (fn [x]
      (let [
            y (name (first x))
            z (second x)

            sec (first (filter (fn[y] (if (= security (:id y) ) true false)) securities))
            currency (:currency sec)
            assettype (:assettype sec)

            seccurfxrate (db/get-fxrate-by-date currency (java.util.Date.)) 
            ;tr1 (println (str "mult=" (:multiple sec) " seccur=" seccurfxrate " assettype=" assettype " price=" (:price sec)))
            rubprice (* (:multiple sec) seccurfxrate (if (= 5 assettype) 0.01 1.0 ) (if (nil? (:price sec)) 0.0 (:price sec)) )

            
            ;tr1 (println (str x))
            usdprice (/ rubprice usdrate)
            usdvalue (* (:amount (second x)) usdprice)
            portfval (calc_portfusdvalue y)
            newresult (assoc z :share (* 100.0 (/ usdvalue (if (< portfval 1.0) 1.0 portfval))) )
            ;tr1 (println (str "posval: " usdvalue " portf: " portfval))
      ] {(keyword y) newresult}))  filter_portfs))

    tr1 (swap! sec_state assoc-in [(keyword (str security)) :portfolios] result)
    ]
    result
    ;filter_portfs
  )
)

(defn retrieveAssets [token]
  (let [
    usercode (:iss (-> token str->jwt :claims))
    allclients (clients/get-clients "zuoqin")

    totalassets (loop
      [assets {} clients allclients]
      (if (seq clients)
        (let [
          
          client (first clients)


          thepositions (getPositions token (:code client))


          newassets (loop
            [allassets assets positions thepositions]
            (if (seq positions)
              (let [

                position (first positions)

                id (first position)

                amount (if (nil? (:amount (id assets))) 0.0 (:amount (id assets)))


                ;tr1 (println (str "position=" position " id=" id " amount=" amount))
                newamnt (+ amount (:amount (second position)))

                ;tr1 (println positions)
                ;tr1 (println (str "newamnt=" newamnt " seckey=" (keyword (:acode sec))) )
            ]
            (recur (assoc-in allassets [id] {:amount newamnt} ) (rest positions))
            )
            allassets)
          )

          ;tr1 (println positions)
          ;tr1 (println (str "newamnt=" newamnt " seckey=" (keyword (:acode sec))) )
      ]
      (recur newassets (rest clients))
      )
      assets)
    )
    
    result totalassets
    ]
    result
  )
)

(defn getAssets [token]
  (let [
      usercode (:iss (-> token str->jwt :claims))
      result (if (nil? ((keyword usercode) (:assets @sec_state))) (retrieveAssets token) ((keyword usercode) (:assets @sec_state)))
    ]
    result
  )
)

(defn getPortfolios [token security]
  (let [
      newsec (str security)
      result (if (nil? ((keyword newsec) @sec_state)) (retrievePortfolios token security) (:portfolios ((keyword newsec) @sec_state)))
    ]
    result
  )
)


(defn getCalcPortfolios [token security percentage]
  (let [
    ;; We need to calculate used limits for all portfolios, so use admin as user
    ;;usercode (:iss (-> token str->jwt :claims))
    tr1 (println (str "in getCalcPortfolios"))
    usercode "zuoqin" 
    ;transactions (into [] (db/get-transactions-by-security security))


    clients (clients/get-clients usercode)
    securities (secs/get-securities)

        
    sec (first (filter (fn [x] (if (= security (:id x)) true false)) securities))

    multiple (:multiple sec)
    isbond (if (and (= 5 (:assettype sec))
                                   ;(= "RU" (subs (:isin security) 0 2))
                                   )  true false)
    secfxrate (db/get-fxrate-by-date (:currency sec) (java.util.Date.))
    lastprice (db/get-fxrate-by-date (:acode sec) (java.util.Date.))

    secrubprice (* secfxrate (if (nil? lastprice) 0 lastprice) )

    filter_portfs (getPortfolios token security )
    ;;tr1 (println (first filter_portfs))

    
    calc_portfs (map (fn [client] (
      let [

           ;tr1 (println (filter (fn [x] (if (= :ZADNF (first x)) true false)) filter_portfs))

           usedlimit (second (first (filter (fn [x] (if (= (:code client) (name (first x))) true false)) filter_portfs)))

           seclastrubprice (if (= secrubprice 0.0) (if (nil? usedlimit) 0.0 (:rubprice usedlimit) ) secrubprice)

           calcusedlimit (if (nil? usedlimit) 0 (* (if isbond (* 0.01 multiple) 1.0) (:amount usedlimit) seclastrubprice))

           usdrate (db/get-fxrate-by-date "USD" (java.util.Date.))
           eurrate (db/get-fxrate-by-date "EUR" (java.util.Date.))
           gbprate (db/get-fxrate-by-date "GBP" (java.util.Date.))

           fxrate (db/get-fxrate-by-date (str/upper-case (:currency client)) (java.util.Date.))

           clienttotalrub (+ (* (:usd client) usdrate) (* (:rub client) 1.0) (* (:eur client) eurrate) (* (:gbp client) gbprate))

           seclimitinrub (/ (* fxrate (:signedadvisory client)  (if (= (:assettype sec) 5) (:bondshare client) (:stockshare client)) percentage) 10000.0 )
           margin (:margin client)

           ;tr1 (println client)
           ;tr1 (if (= "MADUN2" (:code client)) (println (str "fxrate: " fxrate " seclimitinrub: " seclimitinrub " calcusedlimit=" calcusedlimit " usedlimit" usedlimit " seclastrubprice=" seclastrubprice))) 

           ;tr1 (if (= "MADUN2" (:code client)) (println (str "client: " client " sec last price: " seclastrubprice) " usedlimit: " usedlimit " secrubprice=" secrubprice)) 
     ]
      {:client (:code client) :usd (:usd client) :rub (:rub client) :eur (:eur client) :gbp (:gbp client) :currency (:currency client) :shares (if (nil? usedlimit) 0 (:amount usedlimit)) :calcusedlimit calcusedlimit :seclimitinrub seclimitinrub

 ;; Максимальный лимит на ценную бумагу
 :maxlimit (long (/ seclimitinrub (* (if (= 0.0 seclastrubprice) 1.0 seclastrubprice) (if isbond (* multiple 0.01) 1.0))))

 ;; Свободный лимит на покупку ценных бумаг:
 ;; для иностранных облигаций - в номинале бумаги
 ;; для российских облигаций - в тысячах рублей номинала (как в Арене)
 ;; для акций - штук
 :freelimit (long (/ (- seclimitinrub calcusedlimit) (* (if (= 0.0 seclastrubprice) 1.0 seclastrubprice) (if isbond (* multiple 0.01) 1.0)))) 

 :maxusdshares (long (/ (if (> (* usdrate (:usd client))  (- seclimitinrub calcusedlimit)) (- seclimitinrub calcusedlimit) (* usdrate (:usd client))) (* (if (= 0.0 seclastrubprice) 1.0 seclastrubprice) (if isbond (* multiple 0.01) 1.0))))

 :maxrubshares (long (/ (if (> (- (:rub client) margin)  (- seclimitinrub calcusedlimit)) (- seclimitinrub calcusedlimit) (- (:rub client) margin)) (* (if (= 0.0 seclastrubprice) 1.0 seclastrubprice) (if isbond (* multiple 0.01) 1.0))))

 :maxeurshares (long (/ (if (> (* eurrate (:eur client))  (- seclimitinrub calcusedlimit)) (- seclimitinrub calcusedlimit) (* eurrate (:eur client))) (* (if (= 0.0 seclastrubprice) 1.0 seclastrubprice) (if isbond (* multiple 0.01) 1.0))))

 :maxgbpshares (long (/ (if (> (* gbprate (:gbp client))  (- seclimitinrub calcusedlimit)) (- seclimitinrub calcusedlimit) (* gbprate (:gbp client)))  (* (if (= 0.0 seclastrubprice) 1.0 seclastrubprice) (if isbond (* multiple 0.01) 1.0)))) 
      }
      ))   clients)
    ]
    (swap! sec_state assoc-in [(keyword (str security)) :calcportfs (keyword (str percentage))] calc_portfs)
    calc_portfs
  )
)


;; (defn map-cachedata [data newpercentage]
;;   (let [
;;     newdata (update data :freelimit (fn [x] (* newpercentage (/ x 10.0))))
;;     newdata (update newdata :maxlimit (fn [x] (* newpercentage (/ x 10.0))))
;;     ]
;;     newdata
;;   )
;; )

(defn calcPortfolios [token security percentage]
  (let [
    newsec (str security)
    ;tr1 (println (str "security=" newsec " percentage=" (str percentage))) 
    ;tr1 (println (nil? ((keyword (str percentage)) (:calcportfs ((keyword newsec) @sec_state)))))
    cachedata (if (nil? ((keyword (str percentage)) (:calcportfs ((keyword newsec) @sec_state)))) (getCalcPortfolios token security percentage) ((keyword (str percentage)) (:calcportfs ((keyword newsec) @sec_state))))
    ;;
    result cachedata ;;(map (fn [x] (map-cachedata x percentage)) cachedata)
    tr1 (println (str "Total records: " (count result)))
    ]
    result
  )
)

(defn parseAdvmail [mails]
  (let [

    emails (loop [result [] email mails]
                (if (> (count email) 0)  
                  (let [
                        thenext (if (= nil (str/index-of email ";")) (count email) (str/index-of email ";"))                         

                        ;tr1 (println (str "thenext=" thenext " next=" (drop (if (= nil (str/index-of email ";")) (count email) (+ 1 (str/index-of email ";")) ) email)))

                        ]
                    (recur (conj result (subs email 0 thenext)) (if (= nil (str/index-of email ";")) "" (subs email (+ 1 (str/index-of email ";"))) ))
                  )
                  result)
                )
    ]
    emails
  )
)

(defn sendLetter [usercode security clientdata txtdata]
  (let [
    ;tr1 (println (str "sending text1: ") txtdata)
    ;tr1 (println (str clientdata))
    email (:advmail (first (filter (fn [x] (if (= (:code x) (:code clientdata)) true false)) (clients/get-clients usercode))))

    sec (first (filter (fn [x] (if (= (:id x) security) true false)) (secs/get-securities)))
    seccode (:acode sec)
    isin (:isin sec)
    assettype (:assettype sec)
    texttosend (str "Прошу согласовать покупку " (if (= (:assettype sec) 1) "акций " "облигаций ") seccode " (ISIN: " isin ") для клиента " (:code clientdata) " в количестве " (:amount clientdata) " штук." "\r\n\r\n" txtdata)


    ;tr1 (println (str "sending email to: ") email)
    ;;tr1 (println (str "sending text: ") texttosend)
    ]
    (postal/send-message {:host "psmtp.sberbank-cib.ru"} ;:user "alexey@sberpb.com" :pass "password"
      {:from "tradeidea@sberpb.com"
       :to (parseAdvmail email)
       :cc ["Alexey_Zorchenkov@sberbank-pb.ru" "Rustam_Nazimanov@sberbank-pb.ru" "Alexey_Koshkin@sberbank-pb.ru"
         ]
       :subject (str "Trade idea: " seccode) 
       :body [{:type "text/html; charset=utf-8"
                 :content texttosend}] }
    )
    ;email
  )
)

(defn sendLetters [token security clients] 
  (let [
      usercode (:iss (-> token str->jwt :claims))
      recommendtext (:data (first (filter (fn [x] (if (= "TRADE_IDEA" (:code x)) true false)) (syssetting/get-settings))))
      ;tr1 (println clients)
    ]
    (doall (map (fn [x] (sendLetter usercode security x recommendtext)) clients))
    ;; (postal/send-message {:from "me@draines.com"
    ;;                         :to ["mom@example.com" "dad@example.com"]
    ;;                         :cc "bob@example.com"
    ;;                         :subject "Hi!"
    ;;                         :body "Test."
    ;;                         :X-Tra "Something else"})
    ;(println (str clients))
  )
)






(defn append-position-to-file [client position dt]
  (let [
        ;;tr1 (println position)
        str1 (str client "," (:bcode (second position)) "," (str/replace (format "%.1f" (/ (:amount (second position)) (if (str/includes? (name (first position)) "LKOH=") 10.0 (if (str/includes? (name (first position)) "SBRF=") 100.0 1.0)))) #"," ".") "," (:price (second position)) "," (f/unparse build-in-basicdate-formatter (c/from-long (c/to-long dt)) ) "," (if (nil? (db/get-price-for-day (nth position 2) dt)) "" (db/get-price-for-day (nth position 2) dt) ) "\n")
        ]
    ;;(println str1)
    (spit (str (-> env :drive) ":/DEV/output/" client ".txt") str1 :append true)
  )
)

(defn get-secid-by-isin [isin]
  (let [
        secs (cacheSecurities)
        sec (first (filter (fn [x] (if (= (compare (:isin x) isin) 0) true false)) secs))
        ]
    (:id sec)
  )
)

(defn save-positions-bloomberg [client positions dt]
  (let [
    positions1 (map (fn [x]
      (let [
             secid (get-secid-by-isin (name (first x)) )
             sec (db/ent [[secid]])

             assettype (second (first (filter (fn [y] (if (= (first y) :security/assettype) true false)) sec ) ))
             currency (second (first (filter (fn [y] (if (= (first y) :security/currency) true false)) sec ) ))

             multiple (if (nil? (second (first (filter (fn [y] (if (= (first y) :security/multiple) true false)) sec) ))) 1.0 (second (first (filter (fn [y] (if (= (first y) :security/multiple) true false)) sec) )))

             bcode (second (first (filter (fn [y] (if (= (first y) :security/bcode) true false)) sec) ))

             ;tr1 (if (= (name (first x)) "GB0032360173") (println (str "x=" x " currency=" currency ""))) 
             ;tr1 (println (str "sec=" sec))
          ]
          [(name (first x)) {:bcode bcode :amount (* (if (or (= assettype 15)) 1.0 multiple) (:amount (second x))) :price (:price (second x))} secid]
      )
      ) positions)


    ;tr1 (println (first (into [] positions)))
    newpositions (filter (fn [x] (if (not= (:amount (second x)) 0.0) true false )) (into [] positions1))

    ;tr1 (println (str (first newpositions)))
    ;changecurrencyprice (map (fn [x] [(first x) {:amount (:amount (second x)) ()}]) newpositions)


    t2 (spit (str (-> env :drive) ":/DEV/output/" client ".txt")  ",,,,\n" :append true)
    t3 (doall (map (fn [x] (append-position-to-file client x dt)) (if (> (count newpositions) 0) newpositions (into [] positions1))))
    ;; t4 (if (not (nil? selectfile)) (doall (map (fn [x] (let [
    ;;                                            str1 (str client "," (str (if (= "RUR" (:currency x)) "RUB" (:currency x))  " Curncy")  "," (format "%.2f" (:amount x))  ","  "," (f/unparse build-in-basicdate-formatter (c/from-long (+  (* 3600000 6) (c/to-long (:date x))) )) "\n")
    ;;                                            ]
    ;;                                        ;;(println str1)
    ;;                                        (spit (str drive ":/DEV/output/" client ".txt") str1 :append true)
    ;;                                        )) (filter (fn [y] (if (= client (:account y)) true false)) cash))))
    ]
  )
)


(defn sort-transactions-from-db [tran1 tran2]
  (let [
        ;tr1 (println tran1)
        ;tr2 (println tran2)

        
        dt1 (c/to-long (:valuedate tran1))
        dt2 (c/to-long (:valuedate tran2))

        ]
    
    (if (or  (< dt1  dt2)
	  (and (= dt1 dt2)(< (compare (:id tran1) (:id tran2)) 0 )))
    true
    false)
  )
)

(defn getBloombergPortfolio [token client]
  (let [

    ;res1 (spit (str "C:/DEV/clojure/sberpb/sberapi/DB/" client ".txt")  ",,,,\n" :append false)
    transactions (sort (comp sort-transactions-from-db) (db/get-transactions-from-db client (java.util.Date.)))
    res1 (spit (str (-> env :drive) ":/DEV/output/" client ".txt") (str "Portfolio Name,Security ID,Position/Quantity/Nominal,Cost Px asset Currency,Date,Market Price\n")  :append false)
    securities (secs/get-securities)
    lastpositions (loop
      [positions {} valuedate nil trans transactions]
      (if (seq trans)
        (let [
          
          tran (first trans)
          newvaluedate (java.util.Date. (c/to-long (f/parse custom-formatter (f/unparse custom-formatter (c/from-long (c/to-long (:valuedate tran)))))))
          tr1 (if (and (> (count positions) 0) (not= newvaluedate valuedate))  (save-positions-bloomberg client positions valuedate))
          ;tr1 (println (str tran) )           
          sec (first (filter (fn [y] (if (= (:security tran) (:acode y)) true false)) securities))

          ;tr1 (println (str "sec=" sec) )
          isin (:isin sec)
          acode (:acode sec)
          assettype (:assettype sec)

          tranamnt (if (= "B" (:direction tran)) (:nominal tran) (- 0 (:nominal tran)))

          ;tr1 (println (str "tranamnt=" tranamnt) )
          amnt (if (nil? (:amount ( (keyword isin) positions )) ) 0.0 (:amount ( (keyword isin) positions )))

          ;tr1 (println (str "amnt=" amnt) )
          newamnt (+ amnt tranamnt) 


          prevpr (if (nil? (:price ((keyword isin) positions))) 0 (:price ((keyword isin) positions)))
                        
          tranprice (* (:price tran) )

          ;tr1 (println (str "tran=" tran " tranprice=" tranprice " tranamnt=" tranamnt " prevpr=" prevpr " amnt=" amnt))
          wap (if (= amnt 0.0) tranprice (if (>= amnt 0.0)
            (if (> tranamnt 0.0) (/ (+ (* prevpr amnt) (* tranprice tranamnt)) newamnt)  prevpr)
            (if (> tranamnt 0.0) prevpr (/ (+ (* prevpr amnt) (* tranprice tranamnt)) newamnt))
            )
          )
          ;tr1 (println positions)
          ;tr1 (println (str "newamnt=" newamnt " seckey=" (keyword (:acode sec))) )
      ]
      (recur (assoc-in positions [(keyword isin) ] {:amount newamnt :price wap} ) newvaluedate (rest trans))
      )
      {:positions positions :lastdate valuedate} )
    )

    lastday (if (and (> (count lastpositions) 0))  (save-positions-bloomberg client (:positions lastpositions) (:lastdate lastpositions)))
    ;days (doall (map (fn [x] (get-portf-by-num client x)) (range 0 2500 1))) 
    ]
    
    "Success"
  )
)

(defn getBloombergTransactions [token client]
  (let [
    transactions (sort (comp sort-tran-from-db) (db/get-transactions-from-db client (java.util.Date.)))

    ;tr1 (println (first transactions))
    securities (if (nil? (:secs @app-state)) (cacheSecurities) (:secs @app-state))
    
    newtransactions (loop
      [result [] amounts {} trans transactions]
      (if (seq trans)
        (let [
          
          tran (first trans)
          ;tr1 (println (str tran) )
          sec (first (filter (fn [y] (if (= (:security tran) (:acode y)) true false)) securities))

          ;tr1 (println (str "sec=" sec) )
          bcode (:bcode sec)
          isin (:isin sec)

          assettype (:assettype sec)




          tranamnt (if (= "B" (:direction tran)) (:nominal tran) (- 0 (:nominal tran)))

          ;tr1 (println (str "tranamnt=" tranamnt) )
          amnt (:amount ( (keyword (:acode sec)) amounts ))

          ;tr1 (println (str "amnt=" amnt) )
          newamnt (if (nil? amnt ) tranamnt (+ amnt tranamnt) )
          
          ;tr1 (if (= isin "GB0032360173") (println (str "price= " (:price tran) "fullprice=" (:price tran) " fx=" (:fx tran)) )) 
      ]
      (recur (if (or (= assettype 10)) result (conj result {:portfolio client :isin isin :bcode bcode :quantity (/ (:nominal tran) (if (str/includes? isin "LKOH=") 10.0 (if (str/includes? isin "SBRF=") 100.0 1.0))) :price (:price tran) :date (f/unparse build-in-basicdate-formatter (c/from-long (c/to-long (:valuedate tran))) ) :type (if (> tranamnt 0) (if (> newamnt 0) "BUY LONG" "BUY TO COVER") (if (< newamnt 0) "SELL SHORT" "SELL LONG")) }))  (assoc-in amounts [(keyword (:acode sec)) ] {:amount newamnt} ) (rest trans))
      )
      result)
    )

    newtrans (map (fn [x] (let [

       sec (db/ent [[(get-secid-by-isin (:isin x) )]])
       ;tr1 (println (str sec))
       multiple (second (first (filter (fn [y] (if (= (first y) :security/multiple) true false)) sec )))
       multiple (if (nil? multiple) 1.0 multiple)
       assettype (second (first (filter (fn [y] (if (= (first y) :security/assettype) true false)) sec ) ))                                                   
       ;currency (second (first (filter (fn [y] (if (= (first y) :security/currency) true false)) sec )))

    ]
    [(:portfolio x)  (:bcode x) (* (:quantity x) (if (or (= assettype 15)) 1.0 multiple)) (:price x) (:date x) (:type x)]
)) newtransactions)

    ;tr1 (println (str (nth newtrans 1)))
    wb (create-workbook "transactions" (reduce conj [["portfolio" "bcode" "quantity" "price" "date" "type"]]  newtrans) )
    ]
    (do (save-workbook! (str (-> env :drive) ":/dev/java/" client "_trans.xlsx")  wb))
    ;(save-xls ["sheet1" (dataset [:portfolio :isin :quantity :price :date :type] newtrans)] (str drive ":/DEV/Java/" client "_trans.xlsx") )
    "Success"
    ;newtransactions
  )
)

(defn loadallpositions []
  (let [
    clients (sort (comp sort-clients) (clients/get-clients "zuoqin"))


    allsecs (sort (comp sort-securities) (secs/get-securities))
    secs (map (fn [x] (:isin x)) (drop 0 (->> (load-workbook (str (-> env :drive) ":/DEV/clojure/sberpb/sberapi/DB/quotes.xlsx") )
                               (select-sheet "Data")
                               (select-columns {:A :isin})))) 

    securities (filter (fn [x] (some  #(= (:isin x) %) secs)) allsecs)

    ]
    (doseq [client clients]
      (println (str "retrieving positions for portfolio: " (:code client)))
      (getPositions "" (:code client))
      (Thread/sleep 2000)
    )

    (doseq [client clients]
      (println (str "retrieving deals for portfolio: " (:code client)))
      (getDeals "" (:code client) 0)
      (Thread/sleep 2000)
    )

    (doseq [sec securities]
      (println (str "retrieving portfolios for security: " (:acode sec)))
      (getPortfolios "" (:id sec))
      (Thread/sleep 2000)
    )

    (doseq [sec securities]
      (println (str "calculating portfolios limits for security: " (:acode sec)))
      (calcPortfolios "" (:id sec) 10.0)
      (Thread/sleep 2000)
    )

    (println "Finished caching data")
    ;(first securities)
  )
)
