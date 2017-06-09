(ns sberstatic.routes.home
  (:require [sberstatic.layout :as layout]
            [compojure.core :refer [defroutes GET POST]]
            [ring.util.http-response :as response]
            [clojure.java.io :as io]))

(defn home-page []
  (layout/render
    "home.html" {:docs (-> "docs/docs.md" io/resource slurp)}))

(defn about-page []
  (layout/render "about.html"))

(defn on-upload-image [request]
  (let [tr1 (println request)]
    {:body { :location "/img/20110616117.jpg" }}
  )
)
  

(defroutes home-routes
  (GET "/" [] (home-page))
  (GET "/about" [] (about-page))
  (POST "/imageupload" [] (fn [request] (on-upload-image request)) )
)

