(ns sberstatic.routes.home
  (:require [sberstatic.layout :as layout]
            [compojure.core :refer [defroutes GET POST]]
            [ring.util.http-response :as response]
            [clj-http.client :as httpclient]
            [clojure.java.io :as io]))

(def imagepath "C:/DEV/clojure/sberpb/sberstatic/resources/public/img/tradeidea/")

(def apipath "http://localhost:3000/")

(defn tradeidea-page [token]
  (layout/render
    "tradeidea.html" {:docs (-> "docs/tradeidea.md" io/resource slurp) :original_idea "John"}))


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
  (let [;tr1 (println request)
        url (str apipath "api/syssetting")
        tr1 (httpclient/put url {:headers {"authorization" "Bearer TheBearer"} :content-type :json :body (str "{\"code\": \"TRADE_IDEA\", \"data\":" (:full_html (:params request)) "}")}) 

    ]
     (response/found "/tradeidea/1")
  )
)
  

(defroutes home-routes
  (GET "/" [] (home-page))
  (GET "/tradeidea/:token" [token] (tradeidea-page token))
  (GET "/about" [] (about-page))
  (POST "/imageupload" [] (fn [request] (on-upload-image request)) )

  (POST "/tradeidea" [token] (fn [request] (on-save-html request)) )
)

