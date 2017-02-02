(ns sberapi.env
  (:require [selmer.parser :as parser]
            [clojure.tools.logging :as log]
            [sberapi.dev-middleware :refer [wrap-dev]]))

(def defaults
  {:init
   (fn []
     (parser/cache-off!)
     (log/info "\n-=[sberapi started successfully using the development profile]=-"))
   :stop
   (fn []
     (log/info "\n-=[sberapi has shut down successfully]=-"))
   :middleware wrap-dev})
