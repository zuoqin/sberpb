(ns user
  (:require [mount.core :as mount]
            sberstatic.core))

(defn start []
  (mount/start-without #'sberstatic.core/repl-server))

(defn stop []
  (mount/stop-except #'sberstatic.core/repl-server))

(defn restart []
  (stop)
  (start))


