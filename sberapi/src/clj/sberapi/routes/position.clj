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

(defn getPositions [token client]
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

                        ;;tr1 (if (= (:id security) 17592186046065) (println (str tran)))
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

                        wap (if (= 0.0 amnt ) (* (:price tran) (if (or (= 5 (:assettype security)) (= 15 (:assettype security)))  1.0 (/ trancurfxrate seccurfxrate)))  (if (not= newamnt 0.0) (if (> tranamnt 0.0) (/ (+ (* prevpr amnt) (* (:price tran) (if (or (= 5 (:assettype security)) (= 15 (:assettype security)))  1.0 (/ trancurfxrate seccurfxrate)) tranamnt)) newamnt)  prevpr)  0.0))

                        
                        waprub (if (= amnt 0.0)  rubprice (if (= "S" (:direction tran)) prevrubprice (if (> newamnt 0.0) (/ (+ (* prevrubprice amnt) (* rubprice tranamnt)) newamnt) 0.0)) )
                         
                        wapusd (if (= amnt 0.0) usdprice (if (= "S" (:direction tran)) prevusdprice (if (> newamnt 0.0) (/ (+ (* prevusdprice amnt) (* usdprice tranamnt)) newamnt) 0.0)))

                        ;tr1 (if (= (:id security) 17592186046065) (println (str "assettype=" (:assettype security) " amnt= " amnt " newamnt= " newamnt " wap= " wap " waprub= " waprub " wapusd= " wapusd " prevusdprice= " prevusdprice)))

                        ;;(if (= amnt 0.0) " amount 0" " amount not 0")
                        ;tr1 (println "step 6")
                        ]
                    (recur (assoc-in result [(keyword sec) ] {:amount newamnt :price wap :rubprice waprub :wapusd wapusd} )
                         (rest trans))
                  )
                  result)
                )


    ;result (map (fn [x] (let [y (name (first x))   z (if (< (second x) 0) 0 (second x)) ] [y z] ))  positions) 
    
    ]
    (filter (fn [x] (if (= 0.0 (:amount (second x))) false true)) positions)
    ;positions
    ;(first positions)
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


(defn getDeals [token client page]
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

              rubprice (if (= 5 (:assettype newcursec)) (* newseccurrate (:price tran)) (* newtrancurrate (:price tran)))
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


              newresult (if (= (:id cursec)  (:security tran)) result (conj result {:security (:id cursec)  :transactions (conj deals {:date (f/unparse db/custom-formatter (c/from-long (c/to-long curdate)))  :direction direction :nominal amnt :waprub waprub :wapusd wapusd :wap wap})}))
              ;thetrans (filter (fn [x] (if (and (= (:security x) sec)) true false)) newtransactions)
              ;;tr1 (if (= (:id newcursec) 17592186045465) (println (str  "deals count= " (count newdeals) " newcursec= " (:id newcursec) " cursec= " (:id cursec) " curdate= " curdate " valuedate= " (:valuedate tran) " newwaprub=" (:waprub theres) " wapusd=" (:wapusd theres) " wap=" (:wap theres) " newnominal=" newnominal " newtrancurrate=" newtrancurrate " trannominal=" trannominal " oldamnt=" amnt " newamnt= " newamnt " rubprice=" rubprice " tranprice=" (:price tran))))
              ;thedates (distinct (map (fn [x] (:valuedate x)) thetrans))
              
              
              ]
          (recur newresult (rest thetrans) newcursec newdeals (:waprub theres) (:wapusd theres) (:wap theres) newnominal newusdrate newtrancurrate newseccurrate (:valuedate tran) (:direction tran))
        )
        (conj result {:security (:id cursec)  :transactions (conj deals {:date (f/unparse db/custom-formatter (c/from-long (c/to-long curdate)))  :direction direction :nominal amnt :waprub waprub :wapusd wapusd :wap wap})})
        )
      )

    ;tr1 (println (str "Total deals: " (count transbysecs)))

    result (if (> (count newtransactions) 0) (into [] transbysecs) []) 
    ;tr1 (println (str "deal1  " (first result)))
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


(defn getPortfolios [token security]
  (let [
    ;usercode (:iss (-> token str->jwt :claims)  ) 
    transactions (sort (comp sort-trans-from-db) (db/get-transactions-by-security security))

    ;tr1 (println (first transactions))
    securities (secs/get-securities)
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
                        
                        wap (if (= 0.0 amnt ) seccurprice  (if (> newamnt 0.0) (if (> tranamnt 0.0) (/ (+ (* prevpr amnt) (* seccurprice tranamnt)) newamnt)  prevpr)  0.0))

                        waprub (if (= amnt 0.0)  rubprice (if (= "S" (:direction tran)) prevrubprice (if (> newamnt 0.0) (/ (+ (* prevrubprice amnt) (* rubprice tranamnt)) newamnt) 0.0)) )
                        wapusd (if (= amnt 0.0) usdprice (if (= "S" (:direction tran)) prevusdprice (if (> newamnt 0.0) (/ (+ (* prevusdprice amnt) (* usdprice tranamnt)) newamnt) 0.0)))
                        ]
                    (recur (assoc-in result [(keyword client) ] {:amount newamnt :price wap :rubprice waprub :wapusd wapusd} )
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
    usercode "zuoqin" ;(:iss (-> token str->jwt :claims)  ) 
    transactions (into [] (db/get-transactions-by-security security))
    clients (clients/get-clients usercode)
    

    ;tr1 (println (first transactions))
    securities (secs/get-securities)

        
    sec (first (filter (fn [x] (if (= security (:id x)) true false)) securities))

    multiple (:multiple sec)
    isbond (if (and (= 5 (:assettype sec))
                                   ;(= "RU" (subs (:isin security) 0 2))
                                   )  true false)
    secfxrate (db/get-fxrate-by-date (:currency sec) (java.util.Date.))
    lastprice (db/get-fxrate-by-date (:acode sec) (java.util.Date.))

    secrubprice (* secfxrate (if (nil? lastprice) 0 lastprice) )
    portfolios (loop [result {} trans transactions]
                (if (seq trans) 
                  (let [
                        tran (first trans)
                        client (:client tran)
                        

                        
                        currency (:currency sec)
                        amnt (if (nil? (:amount ( (keyword client) result ))) 0.0 (:amount ( (keyword client) result )))
                        prevpr (:price ((keyword client) result))
                        
                        usdrate (db/get-fxrate-by-date "USD" (:valuedate tran))
                        seccurfxrate (db/get-fxrate-by-date currency (:valuedate tran))
                        trancurfxrate (db/get-fxrate-by-date (:currency tran) (:valuedate tran))
                        rubprice (if (= 5 (:assettype sec)) (* seccurfxrate (:price tran)) (* trancurfxrate (:price tran))) 
                        usdprice (/ rubprice usdrate)
                        seccurprice (/ rubprice seccurfxrate)

                        
                        prevrubprice (:rubprice ((keyword client) result))
                        prevusdprice (:wapusd ((keyword client) result))

                        tranamnt (if (= "B" (:direction tran)) (:nominal tran) (- 0 (:nominal tran)))
                        newamnt (if (nil? amnt ) tranamnt (+ amnt tranamnt) )

                        ;tr1 (if (= (:client tran) "GBCJF") (println (str "secfx= " seccurfxrate " usdprice=" usdprice " rubprice=" rubprice " assetprice=" (:assettype thesecurity)))) 
                        ;tr1 (if (= client "PYUMF") (println (str "prevpr= " prevpr " amnt= " amnt " tranamnt= " tranamnt " newamnt= " newamnt))) 
                        
                        wap (if (= 0.0 amnt ) seccurprice  (if (> newamnt 0.0) (if (> tranamnt 0.0) (/ (+ (* prevpr amnt) (* seccurprice tranamnt)) newamnt)  prevpr)  0.0))

                        waprub (if (= amnt 0.0)  rubprice (if (= "S" (:direction tran)) prevrubprice (if (> newamnt 0.0) (/ (+ (* prevrubprice amnt) (* rubprice tranamnt)) newamnt) 0.0)) )
                        wapusd (if (= amnt 0.0) usdprice (if (= "S" (:direction tran)) prevusdprice (if (> newamnt 0.0) (/ (+ (* prevusdprice amnt) (* usdprice tranamnt)) newamnt) 0.0)))
                        ]
                    (recur (assoc-in result [(keyword client) ] {:amount newamnt :price wap :rubprice waprub :wapusd wapusd} )
                         (rest trans))
                  )                  
                  result)
                )     



    filter_portfs (filter (fn [x] (if (> (:amount (second x)) 0) true false))  portfolios)
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

           seclimitinrub (/ (* fxrate (:signedadvisory client)  (if (= (:assettype sec) 5) (* (:bondshare client) percentage) (* (:stockshare client) percentage)) ) 10000.0 )
           margin (:margin client)

           ;tr1 (println client)
           ;tr1 (if (= "MADUN2" (:code client)) (println (str "fxrate: " fxrate " seclimitinrub: " seclimitinrub " calcusedlimit=" calcusedlimit " usedlimit" usedlimit " seclastrubprice=" seclastrubprice))) 

           ;tr1 (if (= "MADUN2" (:code client)) (println (str "client: " client " sec last price: " seclastrubprice) " usedlimit: " usedlimit " secrubprice=" secrubprice)) 
     ]
      {:client (:code client) :usd (:usd client) :rub (:rub client) :eur (:eur client) :gbp (:gbp client) :currency (:currency client) :shares (if (nil? usedlimit) 0 (:amount usedlimit))

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
    calc_portfs
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
       :to email
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
        str1 (str client "," (name (first position)) "," (format "%.1f" (/ (:amount (second position)) (if (str/includes? (name (first position)) "LKOH=") 10.0 1.0))) "," (:price (second position)) "," (f/unparse build-in-basicdate-formatter (c/from-long (c/to-long dt)) ) "\n")
        ]
    ;;(println str1)
    (spit (str (-> env :drive) ":/DEV/output/" client ".txt") str1 :append true)
  )
)


(defn get-secid-by-isin [isin]
  (let [secs (secs/get-securities)
        sec (first (filter (fn [x] (if (= (compare (:isin x) isin) 0) true false)) secs))
        ]
    (:id sec)
  )
)

(defn save-positions-bloomberg [client positions dt]
  (let [
    positions1 (map (fn [x]
      (let [
             sec (db/ent [[(get-secid-by-isin (name (first x)) )]])

             assettype (second (first (filter (fn [y] (if (= (first y) :security/assettype) true false)) sec ) ))
             currency (second (first (filter (fn [y] (if (= (first y) :security/currency) true false)) sec ) ))

             multiple (if (nil? (second (first (filter (fn [y] (if (= (first y) :security/multiple) true false)) sec) ))) 1.0 (second (first (filter (fn [y] (if (= (first y) :security/multiple) true false)) sec) )))

             ;tr1 (if (= (name (first x)) "GB0032360173") (println (str "x=" x " currency=" currency ""))) 
             ;tr1 (println (str "sec=" sec))
          ]
          [(name (first x)) {:amount (* multiple (:amount (second x))) :price (:price (second x))}]
      )
      ) positions)


    ;tr1 (println (first (into [] positions)))
    newpositions (filter (fn [x] (if (> (:amount (second x)) 0.0) true false )) (into [] positions1))

    ;tr1 (println (str (first newpositions)))
    ;changecurrencyprice (map (fn [x] [(first x) {:amount (:amount (second x)) ()}]) newpositions)


    t2 (spit (str (-> env :drive) ":/DEV/output/" client ".txt")  ",,,,\n" :append true)
    t3 (doall (map (fn [x] (append-position-to-file client x dt)) (if (> (count newpositions) 0) newpositions (into [] positions))))
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
    res1 (spit (str (-> env :drive) ":/DEV/output/" client ".txt") (str "Portfolio Name,Security ID,Position/Quantity/Nominal,Cost Px asset Currency,Date\n")  :append false)
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
    securities (secs/get-securities)
    
    newtransactions (loop
      [result [] amounts {} trans transactions]
      (if (seq trans)
        (let [
          
          tran (first trans)
          ;tr1 (println (str tran) )
          sec (first (filter (fn [y] (if (= (:security tran) (:acode y)) true false)) securities))

          ;tr1 (println (str "sec=" sec) )
          isin (:isin sec)
          assettype (:assettype sec)




          tranamnt (if (= "B" (:direction tran)) (:nominal tran) (- 0 (:nominal tran)))

          ;tr1 (println (str "tranamnt=" tranamnt) )
          amnt (:amount ( (keyword (:acode sec)) amounts ))

          ;tr1 (println (str "amnt=" amnt) )
          newamnt (if (nil? amnt ) tranamnt (+ amnt tranamnt) )
          
          ;tr1 (if (= isin "GB0032360173") (println (str "price= " (:price tran) "fullprice=" (:price tran) " fx=" (:fx tran)) )) 
      ]
      (recur (conj result {:portfolio client :isin isin :quantity (/ (:nominal tran) (if (str/includes? isin "LKOH=") 10.0 1.0))  :price (:price tran) :date (f/unparse build-in-basicdate-formatter (c/from-long (c/to-long (:valuedate tran))) ) :type (if (> tranamnt 0) (if (> newamnt 0) "BUY LONG" "BUY TO COVER") (if (< newamnt 0) "SELL SHORT" "SELL LONG")) }) (assoc-in amounts [(keyword (:acode sec)) ] {:amount newamnt} ) (rest trans))
      )
      result)
    )

    newtrans (map (fn [x] (let [

       sec (db/ent [[(get-secid-by-isin (:isin x) )]])
       ;;tr1 (println (str x))
       assettype (second (first (filter (fn [y] (if (= (first y) :security/assettype) true false)) sec ) ))
       currency (second (first (filter (fn [y] (if (= (first y) :security/currency) true false)) sec ) ))
       isrussian (if (and 

;; Check ISIN starts with RU
(= (compare (second (first (filter (fn [y] (if (= (first y) :security/currency) true false)) sec) )) "RUB") 0 ) 
;; Check currency = RUB
(= (compare (second (first (filter (fn [y] (if (= (first y) :security/currency) true false)) sec) )) "RUB") 0 ) 
)  true false)
    ]
    [(:portfolio x)  (:isin x) (if (and (= assettype 5) (= isrussian true)) (* 1000 (:quantity x)) (:quantity x)) (:price x)  (:date x) (:type x)] 
)) newtransactions)

    ;tr1 (println (str (nth newtrans 1)))
    wb (create-workbook "transactions" (reduce conj [["portfolio" "isin" "quantity" "price" "date" "type"]]  newtrans) )
    ]
    (do (save-workbook! (str (-> env :drive) ":/dev/java/" client ".xlsx")  wb))
    ;(save-xls ["sheet1" (dataset [:portfolio :isin :quantity :price :date :type] newtrans)] (str drive ":/DEV/Java/" client "_trans.xlsx") )
    "Success"
  )
)
