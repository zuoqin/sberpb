(ns sberapi.handler
  (:require [compojure.core :refer [routes wrap-routes]]
  
  	    [sberapi.routes.home :refer [home-routes]]
            [sberapi.routes.services :refer [service-routes]]


            [compojure.route :as route]
            [sberapi.env :refer [defaults]]
            [mount.core :as mount]
            [sberapi.middleware :as middleware]))

(mount/defstate init-app
                :start ((or (:init defaults) identity))
                :stop  ((or (:stop defaults) identity)))

(def app-routes
  (routes
    (-> #'home-routes
      ;(wrap-routes middleware/wrap-csrf)
      (wrap-routes middleware/wrap-formats))
    #'service-routes
    (route/not-found
      "page not found")))


(defn app [] (middleware/wrap-base #'app-routes))
