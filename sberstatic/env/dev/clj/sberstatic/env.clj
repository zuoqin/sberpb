(ns sberstatic.env
  (:require [selmer.parser :as parser]
            [clojure.tools.logging :as log]
            [sberstatic.dev-middleware :refer [wrap-dev]]))

(def defaults
  {:init
   (fn []
     (parser/cache-off!)
     (log/info "\n-=[sberstatic started successfully using the development profile]=-"))
   :stop
   (fn []
     (log/info "\n-=[sberstatic has shut down successfully]=-"))
   :middleware wrap-dev})
