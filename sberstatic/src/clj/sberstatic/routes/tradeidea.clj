(ns sberstatic.routes.tradeidea
  (:require ;;[sberstatic.layout :as layout]
            ;;[ring.util.http-response :as response]
            

            ;[clj-http.client :as client]
            [sberstatic.db.core :as db]
            ;;[clojure.java.io :as io]
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
