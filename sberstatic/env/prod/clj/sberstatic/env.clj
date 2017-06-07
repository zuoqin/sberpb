(ns sberstatic.env
  (:require [clojure.tools.logging :as log]))

(def defaults
  {:init
   (fn []
     (log/info "\n-=[sberstatic started successfully]=-"))
   :stop
   (fn []
     (log/info "\n-=[sberstatic has shut down successfully]=-"))
   :middleware identity})
