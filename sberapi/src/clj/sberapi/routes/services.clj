(ns sberapi.routes.services
  (:require [ring.util.http-response :refer :all]
            [compojure.api.sweet :refer :all]
            [schema.core :as s]

            [clojure.string :as str]
            [clj-jwt.core  :refer :all]
            [clj-jwt.key   :refer [private-key]]
            [clj-time.core :refer [now plus days]]

            [sberapi.routes.dbservices :as dbservices]
            [sberapi.routes.user :as userapi]
            [sberapi.routes.position :as positionapi]
            [sberapi.routes.security :as securityapi]
            [sberapi.routes.client :as clientapi]
            ))

(defapi service-routes
  {:swagger {:ui "/swagger-ui"
             :spec "/swagger.json"
             :data {:info {:version "1.0.0"
                           :title "Trip Advisor API"
                           :description "Core Services"}}}}
  

  (context "/" []
    :tags ["authorization"]
    (POST "/token" []
      ;:return String
      :form-params [grant_type :- String, username :- String, password :- String]
      :summary     "login/password with form-parameters"
      (ok (if (dbservices/checkUser username password)
            {:access_token (-> (dbservices/claim username) jwt to-str) :expires_in 99999 :token_type "bearer"}
            ""
         )
      )
    )

  )

  (context "/api" []
    :tags ["user"]

    (GET "/user" []
      :header-params [authorization :- String]
      ;;:query-params [{messageid :- Long -1} ]
      :summary      "retrieve all users for current login"

      (ok  (userapi/getUsers (nth (str/split authorization #" ") 1))) 
    )

    (POST "/user" []
        :header-params [authorization :- String]
        :body-params [login :- String, password :- String, role :- String]
        :summary     "Create new user"

      (let [result (userapi/createUser (nth (str/split authorization #" ") 1) login password role )]
        ;;:return      Long
        (if (nil? (:error result)) (ok result) (bad-request result))
      )
    )

    (DELETE "/user" []
      ;;:return      Long
      :header-params [authorization :- String]
      :query-params [login :- String]
      :summary     "Delete user"
      (ok (userapi/deleteUser (nth (str/split authorization #" ") 1) login )))

    (PUT "/user" []
      ;;:return      Long
      :header-params [authorization :- String]
      :body-params [login :- String, password :- String, role :- String]
      :summary     "Delete user"
      (ok (userapi/updateUser (nth (str/split authorization #" ") 1) login password role)))


    (OPTIONS "/user" []
      :summary  "Allows OPTIONS requests"
      (ok "")
    )    
  )


  (context "/api" []
    :tags ["position"]

    (GET "/position" []
      :header-params [authorization :- String]
      :query-params [client :- String ]
      :summary      "retrieve all trips for given user"

      (ok  (positionapi/getPositions (nth (str/split authorization #" ") 1) client)))

    (OPTIONS "/position" []
      :summary  "Allows OPTIONS requests"
      (ok "")
    )    


  )



  (context "/api" []
    :tags ["postran"]

    (GET "/postran" []
      :header-params [authorization :- String]
      :query-params [client :- String, security :- Long]
      :summary      "retrieve all transactions for given security for a given client"

      (ok  (positionapi/getPostrans (nth (str/split authorization #" ") 1) client security)))

    (OPTIONS "/postran" []
      :summary  "Allows OPTIONS requests"
      (ok "")
    )    


  )



  (context "/api" []
    :tags ["security"]

    (GET "/security" []
      :header-params [authorization :- String]
      :summary      "retrieve all securoties"

      (ok  (securityapi/getSecurities (nth (str/split authorization #" ") 1))))

    (OPTIONS "/security" []
      :summary  "Allows OPTIONS requests"
      (ok "")
    )    


  )

  (context "/api" []
    :tags ["client"]

    (GET "/client" []
      :header-params [authorization :- String]
      :summary      "retrieve all clients"

      (ok  (clientapi/getClients (nth (str/split authorization #" ") 1))))

    (OPTIONS "/client" []
      :summary  "Allows OPTIONS requests"
      (ok "")
    )    


  )
)
