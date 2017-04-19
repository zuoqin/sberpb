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



(defn sendLetters [token data] 
  (let [
        email (:email (first (filter (fn [x] (if (= (:code x) (:code data)) true false)) (clients/get-clients))))
        
        ;;{:num (+ x 1) :security (:security y) :amount (:amount y) (:price (:price y))}
        enumerate (map (fn [x y] {:num (+ x 1) :security (:security y) :amount (:amount y) :price (:price y) :direction (:direction y)}) (range (count (:deals data)))  (:deals data))
        tranbody (reduce (fn [x y] (let [
            sec (first (filter (fn [x] (if (= (:acode x) (:security y)) true false)) (secs/get-securities)))
            isin (:isin sec)
            ;tr1 (println sec)
          ]
          (str x "\n" (:num y) ". " (if (= "B" (:direction y)) "Покупка " "Продажа ") (:security y) " ISIN: " isin " Количество: " (:amount y) " Цена: " (:price y))
)) "" enumerate)
        ;body (str "Уважаемый клиент!\n" "По вашему счету " (:code tran) " сегодня выполнены следующие поручения:\n" "1. Покупка GAZP ISIN:45433445 Количество: 23456 Средневзвешенная цена: 123.8")
        ]
    ;; (postal/send-message {:host "smtp.sberpb.com"
    ;;                         :user "alexey@sberpb.com"
    ;;                         :pass "password"}
    ;;                        {:from "alexey@sberpb.com"
    ;;                         :to email
    ;;                         :subject "Trade confirmation"
    ;;                         :body tranbody})


    ;; (postal/send-message {:from "me@draines.com"
    ;;                         :to ["mom@example.com" "dad@example.com"]
    ;;                         :cc "bob@example.com"
    ;;                         :subject "Hi!"
    ;;                         :body "Test."
    ;;                         :X-Tra "Something else"})
    (println tranbody)
    {:result 1}
    ;enumerate
  )
)
