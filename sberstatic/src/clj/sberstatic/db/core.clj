(ns sberstatic.db.core
  (:require [datomic.api :as d]
            [mount.core :refer [defstate]]
            [sberstatic.config :refer [env]]))

(defstate conn
          :start (-> env :database-url d/connect)
          :stop (-> conn .release))


(defn update-setting [code data]
  (d/transact
   conn
   [{:setting/code code ;; this finds the existing entity
     :db/id #db/id [:db.part/user]  ;; will be replaced by exiting id
     :setting/data data
     }])
)


