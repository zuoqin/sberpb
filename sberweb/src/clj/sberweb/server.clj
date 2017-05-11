(ns sberweb.server
  (use (incanter core charts excel))
  (:require [clojure.java.io :as io]
            [compojure.core :refer [ANY GET PUT POST DELETE defroutes]]
            [compojure.route :refer [resources]]
            [ring.middleware.defaults :refer [wrap-defaults api-defaults]]
            [ring.middleware.gzip :refer [wrap-gzip]]
            [ring.middleware.logger :refer [wrap-with-logger]]
            [environ.core :refer [env]]
            [clj-http.client :as client]
            [clojure.data.json :as json]

            [clj-time.format :as f]
            [clj-time.coerce :as c]
            [clj-time.core :as t]

            [ring.adapter.jetty :refer [run-jetty]])
  (:gen-class))

(def custom-formatter (f/formatter "dd/MM/yyyy"))
;;(def apipath "http://10.20.35.21:3000/")
(def apipath "http://localhost:3000/")
(def xlsdir "c:/DEV/Java/")

(defn sort-portfs-by-name [portf1 portf2] 
  (let [
        name1 (first portf1)
        name2 (first portf2)
        ]
    
    (if (>  (compare name1  name2) 0)
    true
    false)
  )
)

(defn comp-positions [position1 position2]
  (let [
    ;tr1 (println (str "pos1= " position1 " pos2= " position2))
    ]
    (if (or
         (> (:assettype position1) (:assettype position2))
         (and (= (:assettype position1) (:assettype position2)) (> (compare (:currency position1) (:currency position2)) 0))
         (and (= (:assettype position1) (:assettype position2)) (= (:currency position1) (:currency position2)) (> (:usdvalue position1) (:usdvalue position2)))
      )        
        true
        false
    )
  )
)

(defn create-client-report [client]
  (let [

    url (str apipath "api/security")

    ;tr1 (println (str "Trying to get securities"))
    securities (json/read-str (:body (client/get url {:headers {"authorization" "Bearer TheBearer"} :proxy-host "10.20.30.41" :proxy-port 8080})))


    ;tr1 (println (str "security = " (first (filter (fn [z] (if (= "RUB" (get z "acode")) true false)) securities) )  " acode=" (get (first securities) "acode")) ) 
    url (str apipath "api/position?client=" client )
    positions (filter (fn [x] (if (> (get (second x) "amount") 0) true false)) (json/read-str (:body (client/get url {:headers {"authorization" "Bearer TheBearer"}})))) 

    newpositions (map (fn [x] (let [
      sec (first (filter (fn [sec] (if (= (get sec "id") (Long/parseLong (first x))) true false)) securities))
      isbond (if (and (= 5 (get sec "assettype"))
                                 ;(= "RU" (subs (:isin security) 0 2))
                                 )  true false)
      isrusbond (if (and (= 5 (get sec "assettype"))
                                 (= "RU" (subs (get sec "isin") 0 2))
                                 )  true false)
      usdrate (get (first (filter (fn [z] (if (= "USD" (get z "acode")) true false)) securities) ) "price")

      ;tr1 (println (str "usdrate " usdrate))

      seccurrency (get sec "currency")
      assettype (get sec "assettype")
      multiple (get sec "multiple")
      anr (get sec "anr")
      target (get sec "target")
      yield (get sec "yield")
      dvddate (if (.contains (f/unparse custom-formatter (c/from-long (c/to-long (get sec "dvddate")))) "1900") nil (f/unparse custom-formatter (c/from-long (c/to-long (get sec "dvddate")))))
      putdate (if (.contains (f/unparse custom-formatter (c/from-long (c/to-long (get sec "putdate")))) "1900") nil (f/unparse custom-formatter (c/from-long (c/to-long (get sec "putdate")))))

      duration (get sec "duration")

      ;tr1 (println (str "seccurrency " seccurrency))
      secprice (if (nil? (get sec "price")) 0.0 (get sec "price")) 
      ;tr1 (println (str "secprice " secprice))
      
      fxrate (get (first (filter (fn [z] (if (= (if (= seccurrency "GBX") "GBP" (if (= seccurrency "RUR") "RUB" seccurrency)) (get z "acode")) true false)) securities) ) "price")

      ;tr1 (println (str "fxrate " fxrate))
      newfxrate (if (= 0 (compare "GBX" seccurrency)) (/ fxrate 100.) fxrate)
      waprub (get (second x) "rubprice")
      wapusd (get (second x) "wapusd")


      ;tr1 (println (str "sec= " sec  "secprice= " secprice " newfxrate = " newfxrate " seccurrency=" seccurrency))
      currubprice (/ (* secprice newfxrate) 1.0)
      curusdprice (/ (* secprice newfxrate) usdrate)
      amount (get (second x) "amount")
      
      rubvalue (if (= isrusbond true) (/ (* 1000.0 currubprice amount)  100.0)  (if (= isbond true) (/ (* currubprice amount)  100.0)  (if (= assettype 15) (* multiple amount secprice (if (= seccurrency "USD") usdrate 1.0)) (* currubprice amount))))

      rubcosts (if (= isrusbond true) (/ (* 1000.0 waprub amount)  100.0)  (if (= isbond true) (/ (* waprub amount)  100.0)  (if (= assettype 15) (* multiple amount (if (= seccurrency "USD") wapusd (* usdrate waprub))) (* multiple waprub amount))))

      usdcosts (if (= isrusbond true) (/ (* 1000.0 wapusd amount)  100.0)  (if (= isbond true) (/ (* wapusd amount)  100.0)  (if (= assettype 15) (* multiple amount (if (= seccurrency "USD") wapusd (/  waprub usdrate))) (* multiple wapusd amount))))

      usdvalue (/ rubvalue usdrate)

] {:security (get sec "isin") :price (get sec "price") :wap (get (second x) "price") :amount amount :usdvalue usdvalue :rubvalue rubvalue :usdcosts usdcosts :rubcosts rubcosts :assettype assettype :currency seccurrency :anr anr :target target :duration duration :yield yield :dvddate dvddate :putdate putdate})) positions)
    ;positions (sort (comp sort-portfs-by-name) portfs)
    ;newpositions (into [] (map (fn [x] [(first x)   (get (second x) "amount") (get (second x) "price") (get (second x) "rubprice")]) positions))
    ]
    (save-xls ["sheet1" (dataset [:security :price :wap :amount :usdvalue :rubvalue :usdcosts :rubcosts :assettype :currency :anr :target :duration :yield :dvddate :putdate] (sort (comp comp-positions) newpositions))] (str xlsdir client ".xlsx"))
    "Success"
  )
)

(defn create-excel-report [sec]
  (let [
    url (str apipath "api/portfolios?security=" sec )
    portfs (json/read-str (:body (client/get url {:headers {"authorization" "Bearer TheBearer"}})))

    positions (sort (comp sort-portfs-by-name) portfs)
    newpositions (into [] (map (fn [x] [(first x)   (get (second x) "amount") (get (second x) "price") (get (second x) "rubprice")]) positions))
    ]
    (save-xls ["sheet1" (dataset [:portf :amount :price :rubprice] newpositions)] (str xlsdir sec ".xlsx"))
    "Success"
    ;(first newpositions)
  )
)


(defroutes routes
  (GET "/" _
    {:status 200
     :headers {"Content-Type" "text/html; charset=utf-8"}
     :body (io/input-stream (io/resource "public/index.html"))})
  (GET "/secexcel/:sec" [sec]
    (let [
          file (create-excel-report sec)
    ]
    {:status 200 :headers {"Content-Type" "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet; charset=utf-8"} :body (io/input-stream (str xlsdir sec ".xlsx") )}
    )
  )
  (GET "/clientexcel/:client" [client]
    (let [
          file (create-client-report client)
    ]
    {:status 200 :headers {"Content-Type" "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet; charset=utf-8"} :body (io/input-stream (str xlsdir client ".xlsx") )}
    )
  )
  (resources "/")
)


(def http-handler
  (-> routes
      (wrap-defaults api-defaults)
      wrap-with-logger
      wrap-gzip))

(defn -main [& [port]]
  (let [port (Integer. (or port (env :port) 10555))]
    (run-jetty http-handler {:port port :join? false})))
