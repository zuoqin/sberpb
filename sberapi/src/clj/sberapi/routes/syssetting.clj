(ns sberapi.routes.syssetting
  (:require [ring.util.http-response :refer :all]
            [compojure.api.sweet :refer :all]
            [schema.core :as s]
            

            [clj-jwt.core  :refer :all]
            [clj-jwt.key   :refer [private-key]]
            [clj-time.core :refer [now plus days]]

            [sberapi.db.syssetting :as db]
            [clojure.string :as str]
))

(defn getSettings [token]
  (let [
    ;usercode (:iss (-> token str->jwt :claims)  ) 
    settings (into [] (db/get-settings)   )
    result settings
    ]
    result
  )
)



(defn createSetting [tokn code data]
  (let [
    ;;usercode (:iss (-> token str->jwt :claims)  ) 
    ;;; TO-DO: add check authorization to add 

    result (db/create-setting code data)
    succ {:res "Success"}
    err1 {:error  "Login exists "}
    err2 {:error "Login length should be more than 5"}
    ]
    
    ;;(db/create-user login password role)
    ;; TO-DO Add check successfull
    (if (< result 0)
      (if (= result -1)
        err1
        err2
      )
      succ
    )
  )
)



(defn updateSetting [token code data]
  (let [
    ;;usercode (:iss (-> token str->jwt :claims)  ) 
    ;;; TO-DO: add check authorization to add 

    result {:res "Success"}
    ]
    
    (db/update-setting code data)
    ;; TO-DO Add check successfull
    result
  )
)


(defn deleteSetting [token code]
  (let [
    ;; usercode (:iss (-> token str->jwt :claims)  ) 
    ;;; TO-DO: add check authorization to add 

    result {:res "Success"}
    ]
    
    (db/delete-setting code)
    ;; TO-DO Add check successfull
    result
  )
)
