(ns sberapi.routes.tradeidea
  (:require [sberapi.layout :as layout]
    [ring.util.http-response :as response]
    [sberapi.config :refer [env]]
    ;[clj-http.client :as client]
    [sberapi.db.syssetting :as db]
    [clojure.java.io :as io]
  )
)


(defn imagepath []
  (str (-> env :drive) (-> env :imagepath) )
)

(defn tradeidea-page [token]
  (let [
    tradeidea (:data (first (filter (fn [x] (if (= "TRADE_IDEA" (:code x)) true false)) (db/get-settings))))
    ]
    (layout/render "tradeidea.html" {:docs (-> "docs/tradeidea.md" io/resource slurp) :original_idea tradeidea})
  )
)

(defn copy-file [source-path dest-path]
  (io/copy (io/file source-path) (io/file dest-path)))


(defn on-upload-image [request]
  (let [;tr1 (println request)

      filepath (.getAbsolutePath (:tempfile (:file (:params request))))
      newfilename (:filename (:file (:params request)))
      
      ;tr1 (println (str "Path to file: " filepath " File name: " (str (imagepath) newfilename)))

      tr1 (copy-file filepath (str (imagepath) newfilename))

      tr1 (io/delete-file filepath)
    ]
    {:body { :location (str "/" newfilename)  }}
  )
)

(defn on-save-html [request]
  (let [
    ;tr1 (println request)
    ;url (str apipath "api/syssetting")
    tr1 (db/update-setting "TRADE_IDEA" (:full_html (:params request)))
    ]
     (response/found "/tradeidea/1")
  )
)





(defn update-tradeidea [request]
  (let [;tr1 (println request)
        ;;url (str apipath "api/syssetting")
        ;;tr1 (httpclient/put url {:headers {"authorization" "Bearer TheBearer"} :content-type :json :body (str "{\"code\": \"TRADE_IDEA\", \"data\":" (:full_html (:params request)) "}")}) 
        tr1 (db/update-setting "TRADE_IDEA" (:full_html (:params request)))
    ]
    "Success"    
  )
)
