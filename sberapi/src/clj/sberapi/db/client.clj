(ns sberapi.db.client
  (:require [datomic.api :as d]
            [mount.core :refer [defstate]]
            [sberapi.db.core :refer [conn] ]
            [sberapi.config :refer [env]]
            [clj-time.core :as t]
            [clj-time.format :as f]
            [clj-time.local :as l]
            [clj-time.coerce :as c]

            [clojure.string :as str]
            [base64-clj.core :as b64]

            [clojure.java.io :as io]
            [lock-key.core :refer [decrypt decrypt-as-str decrypt-from-base64
                                        encrypt encrypt-as-base64]]

            
))


(def custom-formatter (f/formatter "dd/MM/yyyy"))

(defn decodeemail [email]
  (let [
      email (first email)
      ;tr1 (println (str "email=" email))
      result (if (> (count email) 0) (String. (b64/decode email)) "")

;result (if (> (count email) 0) (String. (b64/decode (bytes (byte-array (map byte email))))) "") 
    ]
    result
  )
)

(defn get-client-advemails [client]
  (let [
         ;tr1 (println (str "client=" client))
         emails (d/q '[
          :find ?advmail
          :in $ ?clientcode
          :where
          [?e :client/code ?clientcode]
          [?e :client/advemail ?advmail]
          ]
        (d/db conn) client)
        result (str/join ";" (into [] (map decodeemail emails)))
    ]
    result
  )
)

(defn client-to-map [client]
  (let [
    name (try
     (b64/decode (decrypt-from-base64 (nth client 2) (str (-> env :password)) )) 
     (catch Exception e (nth client 2)))
    ;tr1 (println (nth client 12))
    newclient {:id (nth client 0) :code (nth client 1) :name name :currency (nth client 3) :usd (nth client 4) :rub (nth client 5) :eur (nth client 6) :gbp (nth client 7) :margin (nth client 12) :stockshare (nth client 8) :bondshare (nth client 9) :signedadvisory (nth client 10) :email (nth client 11) :advmail (get-client-advemails (nth client 1)) :stocklimit (nth client 13) :bondlimit (nth client 14)}
  ]
  newclient
  )
)

(defn get-clients [user]
  (let [
         clients (d/q '[:find ?e ?c ?n ?curr ?usd ?rub ?eur ?gbp ?ss ?bs ?sa ?mail ?m ?sl ?bl
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
                        [(get-else $ ?e :client/margin 0.0) ?m]
                        [?e :client/stockshare ?ss]
                        [?e :client/bondshare ?bs]
                        [?e :client/signedadvisory ?sa]
                        [?e :client/email ?mail]

                        [?u :user/code ?usercode]
                        [?e :client/advisors ?u]

                        [(get-else $ ?e :client/stocklimit 10.0) ?sl]
                        [(get-else $ ?e :client/bondlimit 10.0) ?bl]
                        ]
                      (d/db conn) user) 

    ]
    (map client-to-map clients) 
  )
)
