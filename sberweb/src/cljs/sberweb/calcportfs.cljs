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

        amount (if (nil? letter) 0 (:amount letter))
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


(defn comp-portfs
  [portf1 portf2]
  (if (or (> ((keyword (:sort-list @app-state)) portf1)  ((keyword (:sort-list @app-state)) portf2))  (and (= ((keyword (:sort-list @app-state)) portf1)  ((keyword (:sort-list @app-state)) portf2)) (> (:shares portf1)  (:shares portf2)) ) ) 
      true
      false
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



    (if (> (count (:calcportfs ((keyword (str (:selectedsec @sbercore/app-state))) @sbercore/app-state))) 0)
      (dom/div {:className "list-group" :style {:display "block"}}
        (map (fn [item]
          (let [
                client (first (filter (fn [x] (if (= (:code x) (:client item)) true false)) (:clients @sbercore/app-state)))
                sec (first (filter (fn[x] (if( = (:selectedsec @sbercore/app-state) (:id x)) true false)) (:securities @sbercore/app-state)))

                price (:price  sec)
                seccurrency (:currency sec )

                isrusbond (if (and (= 5 (:assettype sec))
                                   (= "RU" (subs (:isin sec) 0 2))
                                   )  true false)

                isbond (if (and (= 5 (:assettype sec))
                                   ;(= "RU" (subs (:isin security) 0 2))
                                   )  true false)
                usdrate (:price (first (filter (fn [x] (if (= "USD" (:acode x)) true false)) (:securities @sbercore/app-state))))
                fxrate (if (or (= "RUB" seccurrency) (= "RUR" seccurrency)) 1 (:price (first (filter (fn[x] (if( = (:acode x) (if (= seccurrency "GBX") "GBP" seccurrency)) true false)) (:securities @sbercore/app-state)))))
                newfxrate (if (= 0 (compare "GBX" seccurrency)) (/ fxrate 100.) fxrate)
               ]

          
            (dom/div {:className "row" :style {:margin-left "0px" :margin-right "0px"}} 

              ;;Client code
              (dom/div {:className "col-xs-1 col-md-1 clientcode" :style {:padding-left "0px" :padding-right "0px"}}
                (dom/a {:className "list-group-item" :style {:padding-left "3px" :padding-right "3px" :text-align "left"} :href (str  "#/postrans/" (:id client)  "/" (:selectedsec @sbercore/app-state)) }
                  (dom/h4 {:className "list-group-item-heading"} (:client item))
                  (dom/span {:className "clientinfo"} 
                    (dom/p (str "Всего активов в advisory: " (sbercore/split-thousands (gstring/format "%.0f" (:signedadvisory client))) " " (:currency client)))

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


              ;;USD amount
              (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}            
                (dom/a {:className "list-group-item" :style {:padding-left "3px" :padding-right "3px" :text-align "right"} :href (str  "#/postrans/" (:id item) "/" (:selectedsec @sbercore/app-state)) }
                  (dom/h4 {:className "list-group-item-heading"} (sbercore/split-thousands (gstring/format "%.0f" (:usd item))))
                )            
              )

              ;;RUB amount
              (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}            
                (dom/a {:className "list-group-item" :style {:padding-left "3px" :padding-right "3px" :text-align "right"} :href (str  "#/postrans/" (:id item) "/" (:selectedsec @sbercore/app-state)) }
                  (dom/h4 {:className "list-group-item-heading"} (sbercore/split-thousands (gstring/format "%.0f" (:rub item))))
                )            
              )


              ;;EUR amount
              (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}            
                (dom/a {:className "list-group-item" :style {:padding-left "3px" :padding-right "3px" :text-align "right"} :href (str  "#/postrans/" (:id item) "/" (:selectedsec @sbercore/app-state)) }
                  (dom/h4 {:className "list-group-item-heading"} (sbercore/split-thousands (gstring/format "%.0f" (:eur item))))
                )            
              )

              ;;GBP amount
              (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}            
                (dom/a {:className "list-group-item" :style {:padding-left "3px" :padding-right "3px" :text-align "right"} :href (str  "#/postrans/" (:id item) "/" (:selectedsec @sbercore/app-state)) }
                  (dom/h4 {:className "list-group-item-heading"} (sbercore/split-thousands (gstring/format "%.0f" (:gbp item))))
                )            
              )

              ;; Total Limit
              ;; (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}            
              ;;   (dom/a {:className "list-group-item" :style {:padding-left "3px" :padding-right "3px" :text-align "right"} :href (str  "#/postrans/" (:id item) "/" (:selectedsec @sbercore/app-state)) }
              ;;     (dom/h4 {:className "list-group-item-heading"} (sbercore/split-thousands (str (:maxlimit item))))
              ;;   )
              ;; )

              ;;Bought Shares
              (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}            
                (dom/a {:className "list-group-item" :style {:padding-left "3px" :padding-right "3px" :text-align "right"} :href (str  "#/postrans/" (:id item) "/" (:selectedsec @sbercore/app-state)) }
                  (dom/h4 {:className "list-group-item-heading"} (sbercore/split-thousands (str (:shares item)))   )
                )            
              )


              ;; Free Limit
              ;; (dom/div {:className "col-xs-2 col-md-2" :style {:padding-left "0px" :padding-right "0px"}}            
              ;;   (dom/a {:className "list-group-item" :style {:padding-left "3px" :padding-right "3px" :text-align "right"} :href (str  "#/postrans/" (:id item) "/" (:selectedsec @sbercore/app-state)) }
              ;;     (dom/h4 {:className "list-group-item-heading"} (sbercore/split-thousands (str (:freelimit item))))
              ;;   )
              ;; )


              ;;Shares can buy in USD
              (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}            
                (dom/a {:className "list-group-item" :style {:padding-left "3px" :padding-right "3px" :text-align "right"} :href (str  "#/postrans/" (:id item) "/" (:selectedsec @sbercore/app-state)) }
                  (dom/h4 {:className "list-group-item-heading"} (sbercore/split-thousands (str (:maxusdshares item))))
                )
              )


              ;;Shares can buy in RUB
              (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}            
                (dom/a {:className "list-group-item" :style {:padding-left "3px" :padding-right "3px" :text-align "right"} :href (str  "#/postrans/" (:id item) "/" (:selectedsec @sbercore/app-state)) }
                  (dom/h4 {:className "list-group-item-heading"} (sbercore/split-thousands (str (:maxrubshares item))))
                )
              )

              ;;Shares can buy in EUR
              (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}            
                (dom/a {:className "list-group-item" :style {:padding-left "3px" :padding-right "3px" :text-align "right"} :href (str  "#/postrans/" (:id item) "/" (:selectedsec @sbercore/app-state)) }
                  (dom/h4 {:className "list-group-item-heading"} (sbercore/split-thousands (str (:maxeurshares item))))
                )
              )

              ;;Shares can buy in GBP
              (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}            
                (dom/a {:className "list-group-item" :style {:padding-left "3px" :padding-right "3px" :text-align "right"} :href (str  "#/postrans/" (:id item) "/" (:selectedsec @sbercore/app-state)) }
                  (dom/h4 {:className "list-group-item-heading"} (sbercore/split-thousands (str (:maxgbpshares item))))
                )
              )

              ;;Купить бумаг
              (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}
                (dom/input {:type "text" :id (str "sharesbuy" (:client item)) :style {:height "40px" :width "100%" :font-size "14px" :font-weight 500 :margin-top "2px"} :defaultValue (:amount (first (filter (fn [x] (if (= (:code x) (:client item)) true false)) (:letters @app-state)))) :onChange (fn [e] (handle-sharebuy-change e ))
  })
              )

              ;;Отправить письмо
              (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px" :text-align "center"}}
                (dom/input {:id (str "checksend" (:client item))  :type "checkbox" :style {:height "32px" :width "70px" :margin-top "1px"} :defaultChecked (:issend (first (filter (fn [x] (if (= (:code x) (:client item)) true false)) (:letters @app-state)))) :onChange (fn [e] (handle-chkbsend-change e ))})
              )
            )
          )
        )

           (sort (comp comp-portfs) (filter (fn [x] (let [
               portfname (:client x)
               ]
               (if (or (= false (str/includes? portfname (str/upper-case (:search @sbercore/app-state)))) (and (= 1 (:noholders @sbercore/app-state)) (> (:shares x) 0.0)))  false true)) ) (:calcportfs ((keyword (str (:selectedsec @sbercore/app-state))) @sbercore/app-state))))
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


(defn onMount [data]
  ;(getPortfolios)
  (put! ch 42)
  (swap! sbercore/app-state assoc-in [:current] {:name "Portfolios" :text "Portfolios "} )
)


(defn setcontrols []
  (sbercore/setCalcSecsDropDown)
  (if (not (= nil (:selectedsec @sbercore/app-state)))
    (sbercore/getCalcPortfolios)
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
              (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} (b/button {:className "btn btn-primary colbtn" :onClick (fn [e] ((swap! app-state assoc-in [:sort-list] "usd") (swap! sbercore/app-state assoc-in [:percentage] (+ (:percentage @sbercore/app-state) 0.0))))} "USD"))

              (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} (b/button {:className "btn btn-primary colbtn" :onClick (fn [e] ((swap! app-state assoc-in [:sort-list] "rub") (swap! sbercore/app-state assoc-in [:percentage] (+ (:percentage @sbercore/app-state) 0.0))))} "RUB"))

              (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} (b/button {:className "btn btn-primary colbtn" :onClick (fn [e] ((swap! app-state assoc-in [:sort-list] "eur") (swap! sbercore/app-state assoc-in [:percentage] (+ (:percentage @sbercore/app-state) 0.0))))} "EUR"))

              (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} (b/button {:className "btn btn-primary colbtn" :onClick (fn [e] ((swap! app-state assoc-in [:sort-list] "gbp") (swap! sbercore/app-state assoc-in [:percentage] (+ (:percentage @sbercore/app-state) 0.0))))} "GBP"))

              ;(dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "Лимит клиента на бумагу, шт.")

              (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center" :padding-top "7px"}} "Куплено бумаг, шт.")
              ;(dom/div {:className "col-xs-2 col-md-2" :style {:text-align "center"}} "Свободный лимит на бумагу, шт.")

              (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} (b/button {:className "btn btn-primary colbtn" :onClick (fn [e] ((swap! app-state assoc-in [:sort-list] "maxusdshares") (swap! sbercore/app-state assoc-in [:percentage] (+ (:percentage @sbercore/app-state) 0.0))))} "$ кол-во"))

              (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} (b/button {:className "btn btn-primary colbtn" :onClick (fn [e] ((swap! app-state assoc-in [:sort-list] "maxrubshares") (swap! sbercore/app-state assoc-in [:percentage] (+ (:percentage @sbercore/app-state) 0.0))))} "₽ кол-во"))

              (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} (b/button {:className "btn btn-primary colbtn" :onClick (fn [e] ((swap! app-state assoc-in [:sort-list] "maxeurshares") (swap! sbercore/app-state assoc-in [:percentage] (+ (:percentage @sbercore/app-state) 0.0))))} "€ кол-во"))

              (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} (b/button {:className "btn btn-primary colbtn" :onClick (fn [e] ((swap! app-state assoc-in [:sort-list] "maxgbpshares") (swap! sbercore/app-state assoc-in [:percentage] (+ (:percentage @sbercore/app-state) 0.0))) )} "£ кол-во"))

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
