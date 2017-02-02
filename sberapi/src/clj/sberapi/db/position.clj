(ns sberapi.db.position
  (:require [datomic.api :as d]
            [mount.core :refer [defstate]]
            [sberapi.db.core :refer [conn] ]
            [sberapi.config :refer [env]]
            [clj-time.core :as t]
            [clj-time.format :as f]
            [clj-time.local :as l]
            [clj-time.coerce :as c]
))


(def custom-formatter (f/formatter "dd/MM/yyyy"))


(defn get-positions [client]
  (let [
        transactions (d/q '[:find ?e
			    :in $ ?code
			    :where
			    [?c :client/code ?code]
			    [?e :transaction/client ?c]
			   ]
                    (d/db conn) client)

         ;;positions (loop [tran transactions res {}]
	;;	     (when (> x 1)
	;;	       (println x)
	;;	       (recur (- x 2))))

	positions  transactions
    ]
    positions
  )
)