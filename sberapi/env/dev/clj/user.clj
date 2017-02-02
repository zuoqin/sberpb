(ns user
  (:require [mount.core :as mount]
            sberapi.core))

(defn start []
  (mount/start-without #'sberapi.core/http-server
                       #'sberapi.core/repl-server))

(defn stop []
  (mount/stop-except #'sberapi.core/http-server
                     #'sberapi.core/repl-server))

(defn restart []
  (stop)
  (start))


