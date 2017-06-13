(ns sberstatic.routes.home
  (:require [sberstatic.layout :as layout]
            [compojure.core :refer [defroutes GET POST]]
            [ring.util.http-response :as response]
            [clojure.java.io :as io]))

(def imagepath "E:/DEV/clojure/sberpb/sberstatic/resources/public/img/tradeidea/")


(defn home-page []
  (layout/render
    "home.html" {:docs (-> "docs/docs.md" io/resource slurp)}))

(defn about-page []
  (layout/render "about.html"))


(defn copy-file [source-path dest-path]
  (io/copy (io/file source-path) (io/file dest-path)))


(defn on-upload-image [request]
  (let [;tr1 (println request)

      filepath (.getAbsolutePath (:tempfile (:file (:params request))))
      newfilename (:filename (:file (:params request)))
      ;tr1 (println (str "Path to file: " filepath " File name: " newfilename))

      tr1 (copy-file (.getAbsolutePath (:tempfile (:file (:params request)))) (str imagepath newfilename))

      tr1 (io/delete-file filepath)
    ]
    {:body { :location (str "/" newfilename)  }}
  )
)

(defn on-save-html [request]
  (let [tr1 (println request)


    ]
     (response/found "/")
  )
)
  

(defroutes home-routes
  (GET "/" [] (home-page))
  (GET "/about" [] (about-page))
  (POST "/imageupload" [] (fn [request] (on-upload-image request)) )

  (POST "/tradeidea" [] (fn [request] (on-save-html request)) )
)

