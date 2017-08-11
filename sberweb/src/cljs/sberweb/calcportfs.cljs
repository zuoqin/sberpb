(ns sberweb.calcportfs (:use [net.unit8.tower :only [t]])
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om-tools.dom :as dom :include-macros true]
            [om-tools.core :refer-macros [defcomponent]]
            [secretary.core :as sec :include-macros true]
            [sberweb.core :as sbercore]
            [ajax.core :refer [GET POST]]
            [sberweb.settings :as settings]
            [om-bootstrap.button :as b]

            [cljs.core.async :refer [put! dropping-buffer chan take! <!]]

            [cljs-time.format :as tf]
            [cljs-time.coerce :as tc]

            [clojure.string :as str]
            [goog.string :as gstring]
            [goog.string.format]
  )
  (:import goog.History)
)

(enable-console-print!)

(defonce app-state (atom  {:sort-list "usd"}))

(def custom-formatter (tf/formatter "dd/MM/yyyy"))

(def custom-formatter1 (tf/formatter "MMM dd yyyy hh:mm:ss"))

(def ch (chan (dropping-buffer 2)))

(defn abs [n] (max n (- n)))

(defn OnGetPortfolios [response]
  (swap! sbercore/app-state assoc-in [(keyword (:selectedsec @sbercore/app-state)) :calcportfs] response  )
  (sbercore/setCalcSecsDropDown)
  ;;(.log js/console (:client @app-state)) 
)

(defn OnSendLetter [response]
  (.log js/console "Successfully sent letters") 
)


(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "something bad happened: " status " " status-text))
)



(defn handle-sharebuy-change [e]
  (let [
        code (str/join (drop 9 (.. e -currentTarget -id)))
        letters (:letters @app-state)
        letter (first (filter (fn [x] (if (= code (:code x)) true false)) letters))

        amount (js/parseInt (.. e -currentTarget -value))  

        issend (if (nil? letter) false (:issend letter))
        delletter (remove (fn [letter] (if (= (:code letter) code ) true false  )) letters)
        addletter (into [] (conj delletter {:code code :amount amount :issend issend})) 
    ]
    (.stopPropagation e)
    (.stopImmediatePropagation (.. e -nativeEvent) )
    (swap! app-state assoc-in [:letters] addletter)
  )

  ;; (.log js/console (.. e -target -id) )  
  ;; (.log js/console "The change ....")
  ;; (swap! app-state assoc-in [:letter (keyword  (str/join (drop 9 (.. e -currentTarget -id)))   )] 
  ;;   (if (= true (.. e -currentTarget -checked)  ) 1 0)
  ;; )
)


(defn handle-chkbsend-change [e]
  (let [
        code (str/join (drop 9 (.. e -currentTarget -id)))
        
        letters (:letters @app-state)
        letter (first (filter (fn [x] (if (= code (:code x)) true false)) letters))

        client (first (filter (fn [x] (if (= code (:client x)) true false)) (:calcportfs ((keyword (str (:selectedsec @sbercore/app-state))) @sbercore/app-state))))

        amount1 (case (:selectedcurrency @sbercore/app-state) "all" (if (< (:freelimit client) 0.0) (:freelimit client) (if (< (:freelimit client) (+ (:maxusdshares client) (:maxrubshares client) (:maxeurshares client) (:maxgbpshares client))) (:freelimit client) (+ (:maxusdshares client) (:maxrubshares client) (:maxeurshares client) (:maxgbpshares client))))  ((keyword (str "max" (:selectedcurrency @sbercore/app-state) "shares") ) client))

        ;tr1 (.log js/console (str "amount1=" amount1 " client=" client))
        amount (if (nil? letter) amount1 (:amount letter))
        delletter (remove (fn [letter] (if (= (:code letter) code ) true false  )) letters)
        addletter (into [] (conj delletter {:code code :amount amount :issend (.. e -currentTarget -checked) }  )) 
    ]
    (.stopPropagation e)
    (.stopImmediatePropagation (.. e -nativeEvent) )
    (swap! app-state assoc-in [:letters] addletter)
  )
  ;;(if (= true (.. e -currentTarget -checked)  ) 1 0)
  ;(.log js/console (.. e -target -id) )  
  ;(.log js/console "The change ....")


  ;(CheckCalcLeave)
  ;(set! (.-checked (.. e -currentTarget)) false)
  ;(dominalib/remove-attr!  (.. e -currentTarget) :checked)
  ;;(dominalib/set-attr!  (.. e -currentTarget) :checked true)
)

;; (defn getPortfolios [] 
;;   (if (> (count (:calcportfs ((keyword (:selectedsec @sbercore/app-state)) @sbercore/app-state)) 0))
;;     (sbercore/setCalcSecsDropDown)
;;     (POST (str settings/apipath "api/calcshares?security=" (:selectedsec @sbercore/app-state) "&percentage=" (:percentage @sbercore/app-state)) {
;;       :handler OnGetPortfolios
;;       :error-handler error-handler
;;       :headers {
;;         :content-type "application/json"
;;         :Authorization (str "Bearer "  (:token (:token @sbercore/app-state))) }
;;     })
;;   )
;; )

(defn sendLetter []
  (let [
      clients (filter (fn [x] (if (= (:issend x) true) true false)) (:letters @app-state))
    ]

    (POST (str settings/apipath "api/calcshares?security=" (:selectedsec @sbercore/app-state)) {
      :handler OnSendLetter
      :error-handler error-handler
      :headers {
        :content-type "application/json"
        :Authorization (str "Bearer "  (:token (:token @sbercore/app-state))) }
      :body (.stringify js/JSON (clj->js (map (fn [x] {:code (:code x) :amount (:amount x)}) clients)))
    })
  )
)


(defn comp-portfs [portf1 portf2]
  (let [
        cash1 (case (:selectedcurrency @sbercore/app-state) "all" (sbercore/calc_cashusdvalue (:client portf1)) ((keyword (:selectedcurrency @sbercore/app-state)) portf1))
        cash2 (case (:selectedcurrency @sbercore/app-state) "all" (sbercore/calc_cashusdvalue (:client portf2)) ((keyword (:selectedcurrency @sbercore/app-state)) portf2))
    ]
    (case (:sort-list @app-state)
      "maxshares" (let [
        usdrate (:price (first (filter (fn [x] (if (= "USD" (:acode x)) true false)) (:securities @sbercore/app-state))))
        eurrate (:price (first (filter (fn [x] (if (= "EUR" (:acode x)) true false)) (:securities @sbercore/app-state))))
        gbprate (:price (first (filter (fn [x] (if (= "GBP" (:acode x)) true false)) (:securities @sbercore/app-state))))

        client1 (first (filter (fn [x] (if (= (:code x) (:client portf1)) true false)) (:clients @sbercore/app-state)))
        client2 (first (filter (fn [x] (if (= (:code x) (:client portf2)) true false)) (:clients @sbercore/app-state)))

        oldmaxusdshares1 (min (* usdrate (:usd client1))  (- (:seclimitinrub portf1) (:calcusedlimit portf1)))
        oldmaxeurshares1 (min (* eurrate (:eur client1))  (- (:seclimitinrub portf1) (:calcusedlimit portf1)))
        oldmaxgbpshares1 (min (* gbprate (:gbp client1))  (- (:seclimitinrub portf1) (:calcusedlimit portf1)))
        oldmaxrubshares1 (min (- (:rub client1) (:margin client1)) (- (:seclimitinrub portf1) (:calcusedlimit portf1)))

        oldmaxusdshares1 (if (> (abs oldmaxusdshares1) 0.001) oldmaxusdshares1 0.001)
        oldmaxeurshares1 (if (> (abs oldmaxeurshares1) 0.001) oldmaxeurshares1 0.001)
        oldmaxgbpshares1 (if (> (abs oldmaxgbpshares1) 0.001) oldmaxgbpshares1 0.001)
        oldmaxrubshares1 (if (> (abs oldmaxrubshares1) 0.001) oldmaxrubshares1 0.001)

        newseclimitinrub1 (* (/ (:seclimitinrub portf1) 10.0) (:percentage @sbercore/app-state))

        newmaxusdshares1 (* (/ (min (* usdrate (:usd client1)) (- newseclimitinrub1 (:calcusedlimit portf1))) oldmaxusdshares1) (:maxusdshares portf1))

        newmaxeurshares1 (* (/ (min (* eurrate (:eur client1))  (- newseclimitinrub1 (:calcusedlimit portf1))) oldmaxeurshares1) (:maxeurshares portf1))

        newmaxgbpshares1 (* (/ (min (* gbprate (:gbp client1))  (- newseclimitinrub1 (:calcusedlimit portf1))) oldmaxgbpshares1) (:maxgbpshares portf1))

        newmaxrubshares1 (* (/ (min (- (:rub client1) (:margin client1)) (- newseclimitinrub1 (:calcusedlimit portf1))) oldmaxrubshares1) (:maxrubshares portf1))

        newfreelimit1 (if (= 0 (:seclimitinrub portf1)) 0 (* (/ (- newseclimitinrub1 (:calcusedlimit portf1)) (- (:seclimitinrub portf1) (:calcusedlimit portf1))) (:freelimit portf1))) 

        sharestobuy1 (case (:selectedcurrency @sbercore/app-state) "all" (if (< newfreelimit1 0.0) newfreelimit1 (min newfreelimit1 (+ newmaxusdshares1 newmaxrubshares1 newmaxeurshares1 newmaxgbpshares1))) "usd" newmaxusdshares1 "eur" newmaxeurshares1 "gbp" newmaxgbpshares1 newmaxrubshares1)


        oldmaxusdshares2 (min (* usdrate (:usd client2))  (- (:seclimitinrub portf2) (:calcusedlimit portf2)))
        oldmaxeurshares2 (min (* eurrate (:eur client2))  (- (:seclimitinrub portf2) (:calcusedlimit portf2)))
        oldmaxgbpshares2 (min (* gbprate (:gbp client2))  (- (:seclimitinrub portf2) (:calcusedlimit portf2)))
        oldmaxrubshares2 (min (- (:rub client2) (:margin client2)) (- (:seclimitinrub portf2) (:calcusedlimit portf2)))

        oldmaxusdshares2 (if (> (abs oldmaxusdshares2) 0.001) oldmaxusdshares2 0.001)
        oldmaxeurshares2 (if (> (abs oldmaxeurshares2) 0.001) oldmaxeurshares2 0.001)
        oldmaxgbpshares2 (if (> (abs oldmaxgbpshares2) 0.001) oldmaxgbpshares2 0.001)
        oldmaxrubshares2 (if (> (abs oldmaxrubshares2) 0.001) oldmaxrubshares2 0.001)

        newseclimitinrub2 (* (/ (:seclimitinrub portf2) 10.0) (:percentage @sbercore/app-state))

        newmaxusdshares2 (* (/ (min (* usdrate (:usd client2))  (- newseclimitinrub2 (:calcusedlimit portf2))) oldmaxusdshares2) (:maxusdshares portf2))

        newmaxeurshares2 (* (/ (min (* eurrate (:eur client2))  (- newseclimitinrub2 (:calcusedlimit portf2))) oldmaxeurshares2) (:maxeurshares portf2))

        newmaxgbpshares2 (* (/ (min (* gbprate (:gbp client2))  (- newseclimitinrub2 (:calcusedlimit portf2))) oldmaxgbpshares2) (:maxgbpshares portf2))

        newmaxrubshares2 (* (/ (min (- (:rub client2) (:margin client2)) (- newseclimitinrub2 (:calcusedlimit portf2))) oldmaxrubshares2) (:maxrubshares portf2))

        newfreelimit2 (if (= 0 (:seclimitinrub portf2)) 0 (* (/ (- newseclimitinrub2 (:calcusedlimit portf2)) (- (:seclimitinrub portf2) (:calcusedlimit portf2))) (:freelimit portf2)))

        sharestobuy2 (case (:selectedcurrency @sbercore/app-state) "all" (if (< newfreelimit2 0.0) newfreelimit2 (min newfreelimit2 (+ newmaxusdshares2 newmaxrubshares2 newmaxeurshares2 newmaxgbpshares2))) "usd" newmaxusdshares2 "eur" newmaxeurshares2 "gbp" newmaxgbpshares2 newmaxrubshares2)

        ;tr1 (.log js/console (str "porf1=" (:client portf1) " sharetobuy1=" sharestobuy1 " portf2=" (:client portf2) " sharetobuy2=" sharestobuy2 ))
        ]
        (if (or (> sharestobuy1 sharestobuy2)  (and (= sharestobuy1 sharestobuy2) (< (compare (:client portf1)  (:client portf2)) 0))) 
                       true
                       false
                       )
      )

      (if (or (> cash1 cash2)  (and (= cash1 cash2) (> (:shares portf1)  (:shares portf2)) ) ) 
        true
        false
      )
    )
  )
)

(defcomponent showportfs-view [data owner]
  (render
    [_]
    (if (nil? (:selectedsec @data))
      (dom/div
        (dom/p {:style {:text-align "center"}}
          ;(dom/img {:src "images/loader.gif"})
        )
      )


      (let [
        ;tr1 (.log js/console (str "percentage=" (:percentage @data)))
        ]
        (if (> (count (:calcportfs ((keyword (str (:selectedsec @data))) @data))) 0)
          (dom/div {:className "list-group" :style {:display "block"}}
            (map (fn [item]
              (let [
                    client (first (filter (fn [x] (if (= (:code x) (:client item)) true false)) (:clients @data)))
                    sec (first (filter (fn[x] (if( = (:selectedsec @data) (:id x)) true false)) (:securities @data)))

                    price (:price  sec)
                    seccurrency (:currency sec)

                    isbond (if (and (= 5 (:assettype sec))) true false)

                    usdrate (:price (first (filter (fn [x] (if (= "USD" (:acode x)) true false)) (:securities @data))))
                    eurrate (:price (first (filter (fn [x] (if (= "EUR" (:acode x)) true false)) (:securities @data))))
                    gbprate (:price (first (filter (fn [x] (if (= "GBP" (:acode x)) true false)) (:securities @data))))

                    fxrate (if (or (= "RUB" seccurrency) (= "RUR" seccurrency)) 1 (:price (first (filter (fn[x] (if( = (:acode x) (if (= seccurrency "GBX") "GBP" seccurrency)) true false)) (:securities @data)))))
                    newfxrate (if (= 0 (compare "GBX" seccurrency)) (/ fxrate 100.) fxrate)
                    totalcash (sbercore/calc_cashusdvalue (:client item))
                    totalfreecash (- totalcash (if (nil? (:margin client)) 0.0 (/ (:margin client) usdrate)))

                    oldmaxusdshares (min (* usdrate (:usd client))  (- (:seclimitinrub item) (:calcusedlimit item)))
                    oldmaxeurshares (min (* eurrate (:eur client))  (- (:seclimitinrub item) (:calcusedlimit item)))
                    oldmaxgbpshares (min (* gbprate (:gbp client))  (- (:seclimitinrub item) (:calcusedlimit item)))
                    oldmaxrubshares (min (- (:rub client) (:margin client)) (- (:seclimitinrub item) (:calcusedlimit item)))

                    oldmaxusdshares (if (> (abs oldmaxusdshares) 0.001) oldmaxusdshares 0.001)
                    oldmaxeurshares (if (> (abs oldmaxeurshares) 0.001) oldmaxeurshares 0.001)
                    oldmaxgbpshares (if (> (abs oldmaxgbpshares) 0.001) oldmaxgbpshares 0.001)
                    oldmaxrubshares (if (> (abs oldmaxrubshares) 0.001) oldmaxrubshares 0.001)

                    newseclimitinrub (* (/ (:seclimitinrub item) 10.0) (:percentage @data))

                    newmaxusdshares (* (/ (min (* usdrate (:usd client))  (- newseclimitinrub (:calcusedlimit item))) oldmaxusdshares) (:maxusdshares item))

                    newmaxeurshares (* (/ (min (* eurrate (:eur client))  (- newseclimitinrub (:calcusedlimit item))) oldmaxeurshares) (:maxeurshares item))

                    newmaxgbpshares (* (/ (min (* gbprate (:gbp client))  (- newseclimitinrub (:calcusedlimit item))) oldmaxgbpshares) (:maxgbpshares item))

                    newmaxrubshares (* (/ (min (- (:rub client) (:margin client)) (- newseclimitinrub (:calcusedlimit item))) oldmaxrubshares) (:maxrubshares item))

                    newfreelimit (if (= 0 (:seclimitinrub item)) 0 (* (/ (- newseclimitinrub (:calcusedlimit item)) (- (:seclimitinrub item) (:calcusedlimit item))) (:freelimit item))) 

                    sharestobuy (gstring/format "%.0f" (case (:selectedcurrency @data) "all" (if (< newfreelimit 0.0) newfreelimit (min newfreelimit (+ newmaxusdshares newmaxrubshares newmaxeurshares newmaxgbpshares))) "usd" newmaxusdshares "eur" newmaxeurshares "gbp" newmaxgbpshares newmaxrubshares))

                    ;tr1 (.log js/console (str "newusd=" newmaxusdshares " neweur=" newmaxeurshares))
                   ]


                (dom/div {:className "row" :style {:margin-left "0px" :margin-right "0px"}} 

                  ;;Client code
                  (dom/div {:className "col-xs-1 col-md-1 clientcode" :style {:padding-left "0px" :padding-right "0px"}}
                    (dom/a {:className "list-group-item" :style {:padding-left "3px" :padding-right "3px" :text-align "left"} :href (str  "#/postrans/" (:id client)  "/" (:selectedsec @data)) }
                      (dom/h4 {:className "list-group-item-heading"} (:client item))
                      (dom/span {:className "clientinfo"} 
                        (dom/p (str "Всего активов в advisory: " (sbercore/split-thousands (gstring/format "%.0f" (:signedadvisory client))) " " (:currency client)))
                        (dom/p (str "Доля акций: " (gstring/format "%.0f" (:stockshare client)) "% Доля облигаций: " (:bondshare client) "%"))
                        (dom/p (str "Банкир: " ) (dom/a {:href (str "mailto:" (:advmail client) "?Subject=Trade%20idea") } (:advmail client)))
                      )
                    )
                  )

                  ;; Всего в управлении
                  ;; (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}            
                  ;;   (dom/a {:className "list-group-item" :style {:padding-left "3px" :padding-right "3px" :text-align "right"} :href (str  "#/postrans/" (:id item) "/" (:selectedsec @sbercore/app-state)) }
                  ;;     (dom/h4 {:className "list-group-item-heading"} (str (sbercore/split-thousands (str (:signedadvisory client))) " " (:currency item)))
                  ;;   )
                  ;; )

                  ;;Доля акций в портфеле
                  ;; (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}            
                  ;;   (dom/a {:className "list-group-item" :style {:padding-left "3px" :padding-right "3px" :text-align "right"} :href (str  "#/postrans/" (:id item) "/" (:selectedsec @sbercore/app-state)) }
                  ;;     (dom/h4 {:className "list-group-item-heading"} (sbercore/split-thousands (str (:stockshare client)))   )
                  ;;   )
                  ;; )


                  ;;Доля облигаций в портфеле
                  ;; (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}            
                  ;;   (dom/a {:className "list-group-item" :style {:padding-left "3px" :padding-right "3px" :text-align "right"} :href (str  "#/postrans/" (:id item) "/" (:selectedsec @sbercore/app-state)) }
                  ;;     (dom/h4 {:className "list-group-item-heading"} (sbercore/split-thousands (str (:bondshare client)))   )
                  ;;   )
                  ;; )


                  ;;Денежная позиция
                  (dom/div {:className "col-xs-3 col-md-3 clientcash" :style {:padding-left "0px" :padding-right "0px"}}            
                    (dom/a {:className "list-group-item" :style {:padding-left "3px" :padding-right "3px" :text-align "right"} :href (str  "#/postrans/" (:id item) "/" (:selectedsec @data)) }
                      (dom/h4 {:className "list-group-item-heading"} (sbercore/split-thousands (gstring/format "%.0f" (case (:selectedcurrency @data) "all" totalfreecash "rub" (- (:rub item) (:margin client)) ((keyword (:selectedcurrency @data)) item)))))

                      (dom/span {:className "cashinfo"} 
                        (dom/p (str "USD: " (sbercore/split-thousands (gstring/format "%.0f" (:usd item)))))
                        (dom/p (str "RUB: " (sbercore/split-thousands (gstring/format "%.0f" (:rub item) ))))
                        (if (> (:margin client) 1.0) (dom/p (str "Margin: " (sbercore/split-thousands (gstring/format "%.0f" (:margin client) ))))) 
                        (dom/p (str "EUR: " (sbercore/split-thousands (gstring/format "%.0f" (:eur item)))))
                        (dom/p (str "GBP: " (sbercore/split-thousands (gstring/format "%.0f" (:gbp item)))))
                      )
                    )
                  )

                  ;;RUB amount
                  ;; (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}            
                  ;;   (dom/a {:className "list-group-item" :style {:padding-left "3px" :padding-right "3px" :text-align "right"} :href (str  "#/postrans/" (:id item) "/" (:selectedsec @sbercore/app-state)) }
                  ;;     (dom/h4 {:className "list-group-item-heading"} (sbercore/split-thousands (gstring/format "%.0f" (:rub item))))
                  ;;   )            
                  ;; )


                  ;; ;;EUR amount
                  ;; (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}            
                  ;;   (dom/a {:className "list-group-item" :style {:padding-left "3px" :padding-right "3px" :text-align "right"} :href (str  "#/postrans/" (:id item) "/" (:selectedsec @sbercore/app-state)) }
                  ;;     (dom/h4 {:className "list-group-item-heading"} (sbercore/split-thousands (gstring/format "%.0f" (:eur item))))
                  ;;   )            
                  ;; )

                  ;; ;;GBP amount
                  ;; (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}            
                  ;;   (dom/a {:className "list-group-item" :style {:padding-left "3px" :padding-right "3px" :text-align "right"} :href (str  "#/postrans/" (:id item) "/" (:selectedsec @sbercore/app-state)) }
                  ;;     (dom/h4 {:className "list-group-item-heading"} (sbercore/split-thousands (gstring/format "%.0f" (:gbp item))))
                  ;;   )            
                  ;; )

                  ;;Total Limit
                  (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}            
                    (dom/a {:className "list-group-item" :style {:padding-left "3px" :padding-right "3px" :text-align "right"} :href (str  "#/postrans/" (:id item) "/" (:selectedsec @data)) }
                      (dom/h4 {:className "list-group-item-heading"} (sbercore/split-thousands (gstring/format "%.0f" (* (/ (:maxlimit item) 10.0) (:percentage @data)))))
                    )
                  )

                  ;;Bought Shares
                  (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}            
                    (dom/a {:className "list-group-item" :style {:padding-left "3px" :padding-right "3px" :text-align "right"} :href (str  "#/postrans/" (:id item) "/" (:selectedsec @data)) }
                      (dom/h4 {:className "list-group-item-heading"} (sbercore/split-thousands (str (:shares item))))
                    )            
                  )


                  ;; Free Limit
                  (dom/div {:className "col-xs-2 col-md-2" :style {:padding-left "0px" :padding-right "0px"}}            
                    (dom/a {:className "list-group-item" :style {:padding-left "3px" :padding-right "3px" :text-align "right"} :href (str  "#/postrans/" (:id item) "/" (:selectedsec @data)) }
                      (dom/h4 {:className "list-group-item-heading"} (sbercore/split-thousands (gstring/format "%.0f" newfreelimit)))
                    )
                  )


                  ;;Shares can buy in selected cash
                  (dom/div {:className "col-xs-2 col-md-2" :style {:padding-left "0px" :padding-right "0px"}}            
                    (dom/a {:className "list-group-item" :style {:padding-left "3px" :padding-right "3px" :text-align "right" :padding-top "12px"} :href (str  "#/postrans/" (:id item) "/" (:selectedsec @data)) }
                      (dom/h4 {:className "list-group-item-heading"} (sbercore/split-thousands (str sharestobuy)))
                    )
                  )


                  ;;Shares can buy in RUB
                  ;; (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}            
                  ;;   (dom/a {:className "list-group-item" :style {:padding-left "3px" :padding-right "3px" :text-align "right"} :href (str  "#/postrans/" (:id item) "/" (:selectedsec @sbercore/app-state)) }
                  ;;     (dom/h4 {:className "list-group-item-heading"} (sbercore/split-thousands (str (:maxrubshares item))))
                  ;;   )
                  ;; )

                  ;; ;;Shares can buy in EUR
                  ;; (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}            
                  ;;   (dom/a {:className "list-group-item" :style {:padding-left "3px" :padding-right "3px" :text-align "right"} :href (str  "#/postrans/" (:id item) "/" (:selectedsec @sbercore/app-state)) }
                  ;;     (dom/h4 {:className "list-group-item-heading"} (sbercore/split-thousands (str (:maxeurshares item))))
                  ;;   )
                  ;; )

                  ;; ;;Shares can buy in GBP
                  ;; (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}            
                  ;;   (dom/a {:className "list-group-item" :style {:padding-left "3px" :padding-right "3px" :text-align "right"} :href (str  "#/postrans/" (:id item) "/" (:selectedsec @sbercore/app-state)) }
                  ;;     (dom/h4 {:className "list-group-item-heading"} (sbercore/split-thousands (str (:maxgbpshares item))))
                  ;;   )
                  ;; )

                  ;;Купить бумаг
                  (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}
                    (dom/input {:type "text" :id (str "sharesbuy" (:client item)) :style {:height "36px" :width "100%" :font-size "14px" :font-weight 500 :margin-top "2px" :text-align "right"} :value (if (nil? (:amount (first (filter (fn [x] (if (= (:code x) (:client item)) true false)) (:letters @app-state))))) (str sharestobuy) (:amount (first (filter (fn [x] (if (= (:code x) (:client item)) true false)) (:letters @app-state))))) :onChange (fn [e] (handle-sharebuy-change e ))
      } )
                  )

                  ;;Отправить письмо
                  (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px" :text-align "center"}}
                    (dom/input {:id (str "checksend" (:client item))  :type "checkbox" :style {:height "32px" :width "70px" :margin-top "1px"} :defaultChecked (:issend (first (filter (fn [x] (if (= (:code x) (:client item)) true false)) (:letters @app-state)))) :onChange (fn [e] (handle-chkbsend-change e ))})
                  )
                )
              )
            )

               (sort (comp comp-portfs) (filter (fn [x] (let [
                   portfname (:code (first (filter (fn [y] (if (= (:client x) (:code y)) true false)) (:clients @data))))

                   ]
                   (if (or (nil? portfname ) (= false (str/includes? portfname (str/upper-case (:search @data)))) (and (= 1 (:noholders @data)) (> (:shares x) 0.0)))  false true)) ) (:calcportfs ((keyword (str (:selectedsec @data))) @data))))
            )
          )

          (dom/div
            (dom/p {:style {:text-align "center"}}
              (dom/img {:src "images/loader.gif"})
            )
          )
        )
      )
    )
  )
)


(defn onMount [data]
  ;(getPortfolios)
  (put! ch 42)
  (swap! sbercore/app-state assoc-in [:current] {:name "Portfolios" :text "Portfolios "} )
)


(defn setcontrols []
  (sbercore/setCalcSecsDropDown)
  (if (not (= nil (:selectedsec @sbercore/app-state)))
    (if (nil? (:calcportfs ((keyword (str (:selectedsec @sbercore/app-state))) @sbercore/app-state)))
      (sbercore/getCalcPortfolios)
    )
  )
  ;;(.log js/console "fieldcode"       )
)

(defn initqueue []
  (doseq [n (range 1000)]
    (go ;(while true)
      (take! ch(
        fn [v] (
           setcontrols
          )
        )
      )
    )
  )
)

(initqueue)


(defcomponent portfolios-view [data owner]
  (will-mount [_]
    (onMount data)
  )
  (render [_]
    (let [
      stylerow {:style {:margin-left "0px" :margin-right "0px"}}
      styleprimary {:style {:margin-top "70px" :margin-left "0px" :margin-right "0px"}}
      ]

      (dom/div
        (om/build sbercore/website-view data {})
        (dom/div  (assoc styleprimary  :className "panel panel-primary")
          (dom/div {:className "panel-heading"}

            (dom/div (assoc stylerow  :className "row" )
              (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center" :padding-top "12px"}} "Portfolio")
              ;; (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "Всего в управлении")
              ;(dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "Доля акций")
              ;(dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "Доля Облигаций")
              (dom/div {:className "col-xs-3 col-md-3" :style {:text-align "center"}} (b/button {:className "btn btn-primary colbtn" :onClick (fn [e] ((swap! app-state assoc-in [:sort-list] "cash") (sbercore/doswaps)))} "Денежная позиция"))

              ;; (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} (b/button {:className "btn btn-primary colbtn" :onClick (fn [e] ((swap! app-state assoc-in [:sort-list] "rub") (swap! sbercore/app-state assoc-in [:percentage] (+ (:percentage @sbercore/app-state) 0.0))))} "RUB"))

              ;; (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} (b/button {:className "btn btn-primary colbtn" :onClick (fn [e] ((swap! app-state assoc-in [:sort-list] "eur") (swap! sbercore/app-state assoc-in [:percentage] (+ (:percentage @sbercore/app-state) 0.0))))} "EUR"))

              ;; (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} (b/button {:className "btn btn-primary colbtn" :onClick (fn [e] ((swap! app-state assoc-in [:sort-list] "gbp") (swap! sbercore/app-state assoc-in [:percentage] (+ (:percentage @sbercore/app-state) 0.0))))} "GBP"))

              (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "Лимит клиента на бумагу, шт.")

              (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center" :padding-top "7px"}} "Куплено бумаг, шт.")
              
              (dom/div {:className "col-xs-2 col-md-2" :style {:text-align "center"}} "Свободный лимит на бумагу, шт.")

              (dom/div {:className "col-xs-2 col-md-2" :style {:text-align "center"}} (b/button {:className "btn btn-primary colbtn" :onClick (fn [e] ((swap! app-state assoc-in [:sort-list] "maxshares") (sbercore/doswaps)))} "Купить кол-во"))

              ;; (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} (b/button {:className "btn btn-primary colbtn" :onClick (fn [e] ((swap! app-state assoc-in [:sort-list] "maxrubshares") (swap! sbercore/app-state assoc-in [:percentage] (+ (:percentage @sbercore/app-state) 0.0))))} "₽ кол-во"))

              ;; (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} (b/button {:className "btn btn-primary colbtn" :onClick (fn [e] ((swap! app-state assoc-in [:sort-list] "maxeurshares") (swap! sbercore/app-state assoc-in [:percentage] (+ (:percentage @sbercore/app-state) 0.0))))} "€ кол-во"))

              ;; (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} (b/button {:className "btn btn-primary colbtn" :onClick (fn [e] ((swap! app-state assoc-in [:sort-list] "maxgbpshares") (swap! sbercore/app-state assoc-in [:percentage] (+ (:percentage @sbercore/app-state) 0.0))) )} "£ кол-во"))

              (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} (dom/h4 {:style {:text-align "center"}}) "Купить кол-во")

              (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} (b/button {:className "btn btn-primary colbtn" :onClick (fn [e] (sendLetter))} "email"))
            )
          )
          (dom/div {:className "panel-body"}
            (om/build showportfs-view  data {})
          )
        )
      )
    )
  )
)




(sec/defroute portfolios-page "/calcportfs" []
  (om/root portfolios-view
           sbercore/app-state
           {:target (. js/document (getElementById "app"))}))
