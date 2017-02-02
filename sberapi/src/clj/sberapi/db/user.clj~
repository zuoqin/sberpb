(ns tripadv.db.user
  (:require [datomic.api :as d]
            [mount.core :refer [defstate]]
            [tripadv.db.core :refer [conn] ]
            [tripadv.config :refer [env]]))


(defn find-user [login]
  (let [users (d/q '[:find ?login ?r
                      :in $ ?login
                      :where
                      [?u :user/code ?login]
                      [?u :user/role ?r]
                     ]
                     (d/db conn) login)
    ]
    (if (not= users #{} ) (first users)  ["" ""]) 
  )
)

(defn get-users [login]
  (let [
        user (find-user login)

        users (if ( = (nth user 1)  "user" ) 
                (set [[login "user" ""]] )
                (if (or ( = (nth user 1)  "admin" )  
                        ( = (nth user 1)  "manager" )
                        )
                  (d/q '[:find ?login ?role ?password
                               :where
                               [?u :user/code ?login]
                               [?u :user/role ?role]
                               [?u :user/password ?password]
                               ]
                        (d/db conn) login) #{})


                  )

    ]
    users
  )
)

(defn update-user [login password role]
  (d/transact
   conn
   [{:user/code login ;; this finds the existing entity
     :db/id #db/id [:db.part/user]  ;; will be replaced by exiting id
     :user/password password
     :user/role role
     }])
)


(defn create-user [login password role]
  (let [user (first (find-user login))
  		resinvalid {:tempids [[0 -2]]}
  		resexists {:tempids [[0 -1]]}
  		result  (if (= (count user) 0)
			       (if (> (count login) 4)
					  (d/transact
					   conn
					   [{:db/id #db/id[:db.part/user -1000001] :user/code login :user/password password :user/role role}]
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

(defn delete-user [login]
   
  (let [id (first (first (d/q '[:find ?u
                            :in $ ?login
                            :where
                            [?u :user/code ?login]
                            ]
                          (d/db conn) login) ))  

        ]
       

  (d/transact
     conn
     [[:db.fn/retractEntity id]]
    )
  )

)

