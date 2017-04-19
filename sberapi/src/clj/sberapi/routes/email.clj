(ns sberapi.routes.email
  (:require [ring.util.http-response :refer :all]
            [compojure.api.sweet :refer :all]
            [schema.core :as s]
            

            [clj-jwt.core  :refer :all]
            [clj-jwt.key   :refer [private-key]]
            [clj-time.core :refer [now plus days]]

            [clj-time.format :as f]
            [clj-time.coerce :as c]
            [clj-time.core :as t]

            [sberapi.db.position :as db]
            [sberapi.db.security :as secs]
            [sberapi.db.client :as clients]
            [postal.core :as postal]
            [clojure.string :as str]
))



(defn sendLetters [token tran] 
  (let [
        email (:email (first (filter (fn [x] (if (= (:code x) (:code tran)) true false)) (clients/get-clients))))


        body (str "Уважаемый клиент!\n" "По вашему счету " (:code tran) " сегодня выполнены следующие поручения:\n" "1. Покупка GAZP ISIN:45433445 Количество: 23456 Средневзвешенная цена: 123.8")
        ]
    (postal/send-message {:host "smtp.sberpb.com"
                            :user "alexey@sberpb.com"
                            :pass "password"}
                           {:from "alexey@sberpb.com"
                            :to email
                            :subject "Trade confirmation"
                            :body body})
    ;; (postal/send-message {:from "me@draines.com"
    ;;                         :to ["mom@example.com" "dad@example.com"]
    ;;                         :cc "bob@example.com"
    ;;                         :subject "Hi!"
    ;;                         :body "Test."
    ;;                         :X-Tra "Something else"})
    ;(println client)
    {:result 1}
  )
)
