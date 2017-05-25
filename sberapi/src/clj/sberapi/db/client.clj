(ns sberapi.db.client
  (:require [datomic.api :as d]
            [mount.core :refer [defstate]]
            [sberapi.db.core :refer [conn] ]
            [sberapi.config :refer [env]]
            [clj-time.core :as t]
            [clj-time.format :as f]
            [clj-time.local :as l]
            [clj-time.coerce :as c]
            [clojure.data.codec.base64 :as b64]
))


(def custom-formatter (f/formatter "dd/MM/yyyy"))



(defn client-to-map [client]
  (let [
    newclient {:id (nth client 0) :code (nth client 1) :name (nth client 2) :currency (nth client 3) :usd (nth client 4) :rub (nth client 5) :eur (nth client 6) :gbp (nth client 7) :stockshare (nth client 8) :bondshare (nth client 9) :signedadvisory (nth client 10) :email (nth client 11) :advmail (String. (b64/decode (bytes (byte-array (map byte (nth client 12)))))) }
  ]
  newclient
  )
)

(defn get-clients [user]
  (let [
         clients (d/q '[:find ?e ?c ?n ?curr ?usd ?rub ?eur ?gbp ?ss ?bs ?sa ?mail ?advmail
                        :in $ ?usercode
                        :where
                        [?e :client/code]
                        [?e :client/code ?c]
                        [?e :client/name ?n]
                        [?e :client/currency ?curr]
                        [?e :client/usd ?usd]
                        [?e :client/rub ?rub]
                        [?e :client/eur ?eur]
                        [?e :client/gbp ?gbp]
                        [?e :client/stockshare ?ss]
                        [?e :client/bondshare ?bs]
                        [?e :client/signedadvisory ?sa]
                        [?e :client/email ?mail]
                        [?e :client/advemail ?advmail]
                        [?u :user/code ?usercode]
                        [?e :client/advisors ?u]
                        ]
                      (d/db conn) user) 

    ]
    (map client-to-map clients) 
  )
)
