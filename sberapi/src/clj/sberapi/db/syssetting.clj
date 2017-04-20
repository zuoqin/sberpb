(ns sberapi.db.syssetting
  (:require [datomic.api :as d]
            [mount.core :refer [defstate]]
            [sberapi.db.core :refer [conn] ]
            [sberapi.config :refer [env]]
            [clj-time.core :as t]
            [clj-time.format :as f]
            [clj-time.local :as l]
            [clj-time.coerce :as c]
))


(defn find-setting [code]
  (let [settings (d/q '[:find ?code 
                      :in $ ?code
                      :where
                      [?u :setting/code ?code]
                     ]
                     (d/db conn) code)
    ]
    (if (not= settings #{} ) (first settings)  ["" ""]) 
  )
)

(defn setting-to-map [setting]
  (let [
    newsetting {:id (nth setting 0) :code (nth setting 1) :data (nth setting 2)}
  ]
  newsetting
  )
)

(defn get-settings []
  (let [
         settings (d/q '[:find ?e ?c ?d
                          :where
                          [?e :setting/code]
                          [?e :setting/code ?c]
                          [?e :setting/data ?d]
                          ]
                        (d/db conn))

    ]
    (map setting-to-map settings) 
  )
)


(defn update-setting [code data]
  (d/transact
   conn
   [{:setting/code code ;; this finds the existing entity
     :db/id #db/id [:db.part/user]  ;; will be replaced by exiting id
     :setting/data data
     }])
)

(defn create-setting [code data]
  (let [setting (first (find-setting code))
  		resinvalid {:tempids [[0 -2]]}
  		resexists {:tempids [[0 -1]]}
  		result  (if (= (count setting) 0)
			       (if (> (count code) 4)
					  (d/transact
					   conn
					   [{:db/id #db/id[:db.part/user -1000001] :setting/code code :setting/data data}]
					  )
					  resinvalid
			       )
			       resexists
                 )
  	]
        (if (nil? (second (first (:tempids result))) )
          (second (first (:tempids @result)))
          (second (first (:tempids result)))
        )
  ) 
)


(defn delete-setting [code]
   
  (let [id (first (first (d/q '[:find ?u
                            :in $ ?code
                            :where
                            [?u :setting/code ?code]
                            ]
                          (d/db conn) code) ))
        ]
  (d/transact
     conn
     [[:db.fn/retractEntity id]]
    )
  )
)
