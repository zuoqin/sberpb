(ns sberapi.routes.home
  (:require [sberapi.layout :as layout]
            [compojure.core :refer [defroutes GET PUT POST DELETE]]
            [ring.util.http-response :as response]
            [clojure.java.io :as io]
            [sberapi.routes.tradeidea :as tradeidea]
  )
)

(defn home-page []
  (layout/render
    "home.html" {:docs (-> "docs/docs.md" io/resource slurp)}))

(defn about-page []
  (layout/render "about.html"))

(defroutes home-routes
  (GET "/" [] (home-page))
  (GET "/about" [] (about-page))

  (GET "/tradeidea/:token" [token] (tradeidea/tradeidea-page token))

  (POST "/imageupload" [] (fn [request] (tradeidea/on-upload-image request)) )

  (POST "/tradeidea" [token] (fn [request] (tradeidea/on-save-html request)) )
)

