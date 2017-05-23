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

                        ;tr1 (println "step 1")
                        amnt (if (nil? (:amount ( (keyword sec) result ))) 0.0 (:amount ( (keyword sec) result ))) 
                        prevpr (if (nil? (:price ((keyword sec) result))) 0.0 (:price ((keyword sec) result)))                       

                        usdrate (db/get-fxrate-by-date "USD" (:valuedate tran))
                        seccurfxrate (db/get-fxrate-by-date currency (:valuedate tran))
                        trancurfxrate (db/get-fxrate-by-date (:currency tran) (:valuedate tran))
                        
                        rubprice (* (if (= 5 (:assettype security)) seccurfxrate (:fx tran) ) (:price tran)) 
                        usdprice (/ rubprice usdrate)
                        prevrubprice (:rubprice ((keyword sec) result))
                        tranamnt (if (= "B" (:direction tran)) (:nominal tran) (- 0.0 (:nominal tran)))
                        newamnt (if (nil? amnt ) tranamnt (+ amnt tranamnt) )
                        ;tr1 (println "step 3")
                        prevusdprice (:wapusd ((keyword sec) result))

                        wap (if (= 0.0 amnt ) (* (:price tran) (if (= 5 (:assettype security)) 1.0 (/ trancurfxrate seccurfxrate)))  (if (> newamnt 0.0) (if (> tranamnt 0.0) (/ (+ (* prevpr amnt) (* (:price tran) (if (= 5 (:assettype security)) 1.0 (/ trancurfxrate seccurfxrate)) tranamnt)) newamnt)  prevpr)  0.0))

                        
                        waprub (if (= amnt 0.0)  rubprice (if (= "S" (:direction tran)) prevrubprice (if (> newamnt 0.0) (/ (+ (* prevrubprice amnt) (* rubprice tranamnt)) newamnt) 0.0)) )
                         
                        wapusd (if (= amnt 0.0) usdprice (if (= "S" (:direction tran)) prevusdprice (if (> newamnt 0.0) (/ (+ (* prevusdprice amnt) (* usdprice tranamnt)) newamnt) 0.0)))

                        ;tr1 (if (= (:id security) 17592186045631) (println (str "amnt= " amnt " newamnt= " newamnt " wap= " wap " waprub= " waprub " wapusd= " wapusd " prevusdprice= " prevusdprice)))

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
    ;(filter (fn [x] (if (= (keyword "17592186045777")  (first x)) true false)) positions)
    positions
    ;(first positions)
  )
)

(defn sort-deals [deal1 deal2]
  (let [
        ;tr1 (println tran1)
        ;tr2 (println tran2)
        ]
    
    (if (or  (< (:security deal1) (:security deal2))
	  (and (= (:security deal1) (:security deal2))(< (c/to-long (:valuedate deal1))  (c/to-long (:valuedate deal2)) )))
    true
    false)
  )
)


(defn getDeals [token client]
  (let [
    ;usercode (:iss (-> token str->jwt :claims)  ) 
    transactions (into [] (db/get-transactions-by-client client))
    newtransactions (sort (comp sort-deals) (map (fn [x]
                              (let [tran x
            
                                    newvaluedate (java.util.Date. (c/to-long (f/parse db/custom-formatter (f/unparse db/custom-formatter (c/from-long (c/to-long (:valuedate x)))))))  
                                    newtran (assoc tran :valuedate newvaluedate)
                                        ;tr1 (println (str newtran))
                                    ]
                                newtran
                                )
                              ) transactions))

    thecursec (first (filter (fn [x] (if (= (:security (first newtransactions)) (:id x)) true false)) (secs/get-securities)))
    thedirection (:direction (first newtransactions))
    


    ;tr1 (println (str (first newtransactions) " sec= " thecursec))
    theusdrate (db/get-fxrate-by-date "USD" (:valuedate (first newtransactions)))
    theseccurrate (db/get-fxrate-by-date (:currency thecursec) (:valuedate (first newtransactions)))
    ;tr1 (println (str "777777"))
    thetrancurrate (db/get-fxrate-by-date (:currency (first newtransactions)) (:valuedate (first newtransactions)))
    thecurdate (:valuedate (first newtransactions))
    ;tr1 (println (str "8888888888"))
    ;securities (distinct (map (fn [x] (:security x)) transactions))

    ;;tr1 (println (str "Total securities: " (count securities)))
    transbysecs (loop [result [] thetrans newtransactions cursec thecursec deals []  waprub 0 wapusd 0 wap 0 amnt 0.0 usdrate theusdrate trancurrrate thetrancurrate seccurrate theseccurrate curdate thecurdate direction thedirection]
      (if (seq thetrans)
        (let [
              tran (first thetrans)

              newcursec (if (= (:security tran) (:id cursec)) cursec (first (filter (fn [x] (if (= (:security tran) (:id x)) true false)) (secs/get-securities))))
              newamnt (if (and (= (:id cursec)  (:id newcursec))) amnt 0.0)

              trannominal (if (= "B" (:direction tran)) (:nominal tran) (- 0 (:nominal tran)))
              newnominal (if (and (= (:id cursec)  (:id newcursec)) (= curdate (:valuedate tran))) (+ trannominal newamnt) (:nominal tran)) 

              newseccurrate (if (and (= (:id cursec)  (:id newcursec)) (= curdate (:valuedate tran))) seccurrate (db/get-fxrate-by-date (:currency newcursec) (:valuedate tran)))
              newtrancurrate  (if (and (= (:id cursec)  (:id newcursec)) (= curdate (:valuedate tran))) trancurrrate (db/get-fxrate-by-date (:currency tran) (:valuedate tran)))

              rubprice (if (= 5 (:assettype newcursec)) (* newseccurrate (:price tran)) (* newtrancurrate (:price tran)))
              tr1 (if (= (:id newcursec) 17592186045465) (println (str " rubprice=" rubprice " tranprice=" (:price tran))))

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
              tr1 (if (= (:id newcursec) 17592186045465) (println (str  "deals count= " (count newdeals) " newcursec= " (:id newcursec) " cursec= " (:id cursec) " curdate= " curdate " valuedate= " (:valuedate tran) " newwaprub=" (:waprub theres) " wapusd=" (:wapusd theres) " wap=" (:wap theres) " newnominal=" newnominal " newtrancurrate=" newtrancurrate " trannominal=" trannominal " oldamnt=" amnt " newamnt= " newamnt " rubprice=" rubprice " tranprice=" (:price tran))))
              ;thedates (distinct (map (fn [x] (:valuedate x)) thetrans))
              
              
              ]
          (recur newresult (rest thetrans) newcursec newdeals (:waprub theres) (:wapusd theres) (:wap theres) newnominal newusdrate newtrancurrate newseccurrate (:valuedate tran) (:direction tran))
        )
        (conj result {:security (:id cursec)  :transactions (conj deals {:date (f/unparse db/custom-formatter (c/from-long (c/to-long curdate)))  :direction direction :nominal amnt :waprub waprub :wapusd wapusd :wap wap})})
        )
      )

    ;tr1 (println (str "Total deals: " (count transbysecs)))

    result (into [] transbysecs)
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
    usercode (:iss (-> token str->jwt :claims)  ) 
    transactions (into [] (db/get-transactions-by-security security)   )
    clients (clients/get-clients usercode)
    

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
