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
            [sberapi.routes.email :as emailapi]
            [sberapi.routes.syssetting :as syssettingapi]
            [sberapi.routes.security :as securityapi]
            [sberapi.routes.client :as clientapi]
            [sberapi.routes.price :as priceapi]
            ))

(s/defschema Transaction {:security s/Str
                          :direction s/Str
                          :amount s/Num
                          :price s/Num
                         })

(s/defschema ClientData {:code s/Str
                         :deals [Transaction]
                         })

(s/defschema ClientAmounts {:code s/Str :amount s/Num})


(defapi service-routes
  {:swagger {:ui "/swagger-ui"
             :spec "/swagger.json"
             :data {:info {:version "1.0.0"
                           :title "Sberbank Private Bank API"
                           :description "Core Services"}}}}
  

  (context "/" []
    :tags ["authorization"]
    (POST "/token" []
      ;:return String
      :form-params [grant_type :- String, username :- String, password :- String]
      :summary     "login/password with form-parameters"
      (ok (if (dbservices/checkUser (str/lower-case username) password)
            {:access_token (-> (dbservices/claim (str/lower-case username)) jwt to-str) :expires_in 99999 :token_type "bearer"}
            ""
         )
      )
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

  (context "/api" []
    :tags ["calcshares"]

    (GET "/calcshares" []
      :header-params [authorization :- String]
      :query-params [security :- Long, percentage :- Double]
      :summary      "retrieve all clients"

      (ok  (positionapi/calcPortfolios (nth (str/split authorization #" ") 1) security percentage)))

    (POST "/calcshares" []
      :header-params [authorization :- String]
      :query-params [security :- Long]
      :body [clients [ClientAmounts]]
      :summary      "retrieve all clients"

      (ok  (positionapi/sendLetters (nth (str/split authorization #" ") 1) security clients)))

    (OPTIONS "/calcshares" []
      :summary  "Allows OPTIONS requests"
      (ok "")
    )
  )


  (context "/api" []
    :tags ["deals"]

    (GET "/deals" []
      :header-params [authorization :- String]
      :query-params [client :- String]
      :summary      "retrieve all transactions for given client"

      (ok  (positionapi/getDeals (nth (str/split authorization #" ") 1) client)))

    (OPTIONS "/deals" []
      :summary  "Allows OPTIONS requests"
      (ok "")
    )
  )


  (context "/api" []
    :tags ["email"]

    (POST "/tradereport" []
      :header-params [authorization :- String]
      :query-params [security :- Long]
      :body [client ClientData]
      :summary      "retrieve all clients"

      (ok  (emailapi/sendLetters (nth (str/split authorization #" ") 1) client)))

    (OPTIONS "/email" []
      :summary  "Allows OPTIONS requests"
      (ok "")
    )
  )


  (context "/api" []
    :tags ["portfolios"]

    (GET "/portfolios" []
      :header-params [authorization :- String]
      :query-params [security :- Long ]
      :summary      "retrieve all portfolios for given security"

      (ok  (positionapi/getPortfolios (nth (str/split authorization #" ") 1) security)))

    (OPTIONS "/portfolios" []
      :summary  "Allows OPTIONS requests"
      (ok "")
    )    
  )


  (context "/api" []
    :tags ["position"]

    (GET "/position" []
      :header-params [authorization :- String]
      :query-params [client :- String ]
      :summary      "retrieve all positions for given user"

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
    :tags ["price"]

    (GET "/price" []
      :header-params [authorization :- String]
      ;;:query-params [{messageid :- Long -1} ]
      :summary  "retrieve all prices"

      (ok  (priceapi/getPrices (nth (str/split authorization #" ") 1))) 
    )

    (POST "/price" []
        :header-params [authorization :- String]
        :query-params [secid :- Long, price :- Double, target :- Double, anr :- Double, yield :- Double, duration :- Double, dvddate :- String, putdate :- String]
        :summary     "Create new system setting"

      (let [
        ;tr1 (println (str "secid=" secid " price=" price " target=" target " anr=" anr " yield=" yield " duration=" duration " dvddate=" dvddate " putdate=" putdate))
        result (priceapi/updatePrice (nth (str/split authorization #" ") 1) {:secid secid :price price :target target :anr anr :yield yield :duration duration :dvddate dvddate :putdate putdate} )]
        ;;:return      Long
        (if (nil? (:error result)) (ok result) (bad-request result))
      )
    )

    ;; (DELETE "/syssetting" []
    ;;   ;;:return      Long
    ;;   :header-params [authorization :- String]
    ;;   :query-params [code :- String]
    ;;   :summary     "Delete system setting"
    ;;   (ok (syssettingapi/deleteSetting (nth (str/split authorization #" ") 1) code )))

    ;; (PUT "/syssetting" []
    ;;   ;;:return      Long
    ;;   :header-params [authorization :- String]
    ;;   :body-params [code :- String, data :- String]
    ;;   :summary     "Update system setting"
    ;;   (ok (syssettingapi/updateSetting (nth (str/split authorization #" ") 1) code data)))


    (OPTIONS "/price" []
      :summary  "Allows OPTIONS requests"
      (ok "")
    )    
  )


  (context "/api" []
    :tags ["security"]

    (GET "/security" []
      :header-params [authorization :- String]
      :summary      "retrieve all securities"

      (ok  (securityapi/getSecurities (nth (str/split authorization #" ") 1))))

    (OPTIONS "/security" []
      :summary  "Allows OPTIONS requests"
      (ok "")
    )
  )


  (context "/api" []
    :tags ["syssetting"]

    (GET "/syssetting" []
      :header-params [authorization :- String]
      ;;:query-params [{messageid :- Long -1} ]
      :summary      "retrieve all system settings"

      (ok  (syssettingapi/getSettings (nth (str/split authorization #" ") 1))) 
    )

    (POST "/syssetting" []
        :header-params [authorization :- String]
        :body-params [code :- String, data :- String]
        :summary     "Create new system setting"

      (let [result (syssettingapi/createSetting (nth (str/split authorization #" ") 1) code data )]
        ;;:return      Long
        (if (nil? (:error result)) (ok result) (bad-request result))
      )
    )

    (DELETE "/syssetting" []
      ;;:return      Long
      :header-params [authorization :- String]
      :query-params [code :- String]
      :summary     "Delete system setting"
      (ok (syssettingapi/deleteSetting (nth (str/split authorization #" ") 1) code )))

    (PUT "/syssetting" []
      ;;:return      Long
      :header-params [authorization :- String]
      :body-params [code :- String, data :- String]
      :summary     "Update system setting"
      (ok (syssettingapi/updateSetting (nth (str/split authorization #" ") 1) code data)))


    (OPTIONS "/syssetting" []
      :summary  "Allows OPTIONS requests"
      (ok "")
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
)
