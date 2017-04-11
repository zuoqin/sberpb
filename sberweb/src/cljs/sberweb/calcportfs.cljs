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

(defonce app-state (atom  {}))

(def custom-formatter (tf/formatter "dd/MM/yyyy"))

(def custom-formatter1 (tf/formatter "MMM dd yyyy hh:mm:ss"))

(def ch (chan (dropping-buffer 2)))

(defn OnGetPortfolios [response]
  (swap! sbercore/app-state assoc-in [(keyword (:selectedsec @sbercore/app-state)) :calcportfs] response  )
  (sbercore/setCalcSecsDropDown)
  ;;(.log js/console (:client @app-state)) 
)


(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "something bad happened: " status " " status-text))
)




(defn getPortfolios [] 
  (if (> (count (:calcportfs ((keyword (:selectedsec @sbercore/app-state)) @sbercore/app-state)) 0))
    (sbercore/setCalcSecsDropDown)
    (POST (str settings/apipath "api/calcshares?security=" (:selectedsec @sbercore/app-state) ) {
      :handler OnGetPortfolios
      :error-handler error-handler
      :headers {
        :content-type "application/json"
        :Authorization (str "Bearer "  (:token (:token @sbercore/app-state))) }
    })
  )
)


(defn comp-portfs
  [portf1 portf2]
  (if (or (> (:amount portf1)  (:amount portf2))  (and (<= (:amount portf1)  (:amount portf2)) (> (compare (:name portf1)  (:name portf2)  ) 0) ) ) 
      true
      false
  )
)

(defcomponent showportfs-view [data owner]
  (render
    [_]
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
            (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}} (:client item)
              ;; (dom/a {:className "list-group-item" :href (str  "#/postrans/" (:id item) "/" (:selectedsec @sbercore/app-state)  )}
              ;;   (dom/h4  #js {:className "list-group-item-heading" :dangerouslySetInnerHTML #js {:__html (:name (first (filter (fn[x] (if (= (:id x) (:id item) ) true false)) (:clients @sbercore/app-state))))}} nil)
              ;; )
            )

            ;; Всего в управлении
            (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}            
              (dom/a {:className "list-group-item" :style {:padding-left "3px" :padding-right "3px" :text-align "right"} :href (str  "#/postrans/" (:id item) "/" (:selectedsec @sbercore/app-state)) }
                (dom/h4 {:className "list-group-item-heading"} (sbercore/split-thousands (str (:signedadvisory client)))   )
              )            
            )


            ;;Доля акций в портфеле
            (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}            
              (dom/a {:className "list-group-item" :style {:padding-left "3px" :padding-right "3px" :text-align "right"} :href (str  "#/postrans/" (:id item) "/" (:selectedsec @sbercore/app-state)) }
                (dom/h4 {:className "list-group-item-heading"} (sbercore/split-thousands (str (:stockshare client)))   )
              )            
            )


            ;;Доля облигаций в портфеле
            (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}            
              (dom/a {:className "list-group-item" :style {:padding-left "3px" :padding-right "3px" :text-align "right"} :href (str  "#/postrans/" (:id item) "/" (:selectedsec @sbercore/app-state)) }
                (dom/h4 {:className "list-group-item-heading"} (sbercore/split-thousands (str (:bondshare client)))   )
              )            
            )


            ;; Cash amount
            (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}            
              (dom/a {:className "list-group-item" :style {:padding-left "3px" :padding-right "3px" :text-align "right"} :href (str  "#/postrans/" (:id item) "/" (:selectedsec @sbercore/app-state)) }
                (dom/h4 {:className "list-group-item-heading"} (sbercore/split-thousands (str (:cash item)))   )
              )            
            )

            ;; Client base currency
            (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}
              (:currency item)
            )

            ;;Shares
            (dom/div {:className "col-xs-2 col-md-2" :style {:padding-left "0px" :padding-right "0px"}}            
              (dom/a {:className "list-group-item" :style {:padding-left "3px" :padding-right "3px" :text-align "right"} :href (str  "#/postrans/" (:id item) "/" (:selectedsec @sbercore/app-state)) }
                (dom/h4 {:className "list-group-item-heading"} (sbercore/split-thousands (str (:shares item)))   )
              )            
            )

            ;; Free Limit
            (dom/div {:className "col-xs-2 col-md-2" :style {:padding-left "0px" :padding-right "0px"}}            
              (dom/a {:className "list-group-item" :style {:padding-left "3px" :padding-right "3px" :text-align "right"} :href (str  "#/postrans/" (:id item) "/" (:selectedsec @sbercore/app-state)) }
                (dom/h4 {:className "list-group-item-heading"} (sbercore/split-thousands (str (:freelimit item))))
              )
            )


            ;;Max shares
            (dom/div {:className "col-xs-2 col-md-2" :style {:padding-left "0px" :padding-right "0px"}}            
              (dom/a {:className "list-group-item" :style {:padding-left "3px" :padding-right "3px" :text-align "right"} :href (str  "#/postrans/" (:id item) "/" (:selectedsec @sbercore/app-state)) }
                (dom/h4 {:className "list-group-item-heading"} (sbercore/split-thousands (str (:maxshares item))))
              )
            )
          )
        )
        )
           (sort (comp comp-portfs) (filter (fn [x] (let [
               portfname (:client x)
               ]
               (if (or (= false (str/includes? portfname (:search @sbercore/app-state))))  false true)) ) (:calcportfs ((keyword (str (:selectedsec @sbercore/app-state))) @sbercore/app-state))))
      )
    )
  )
)


(defn onMount [data]
  (getPortfolios)
  (put! ch 42)
  (swap! sbercore/app-state assoc-in [:current] {:name "Portfolios" :text "Portfolios with this security: "} )
)


(defn setcontrols []
  (sbercore/setCalcSecsDropDown)
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
        (om/build sbercore/website-view sbercore/app-state {})
        (dom/div  (assoc styleprimary  :className "panel panel-primary")
          (dom/div {:className "panel-heading"}

            (dom/div (assoc stylerow  :className "row" )
              (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "Portfolio")
              (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "Всего в управлении")
              (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "Доля акций")
              (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "Доля Облигаций")
              (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "Cash")
              (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "Currency")
              (dom/div {:className "col-xs-2 col-md-2" :style {:text-align "center"}} "Shares")
              (dom/div {:className "col-xs-2 col-md-2" :style {:text-align "center"}} "Free Limit")
              (dom/div {:className "col-xs-2 col-md-2" :style {:text-align "center"}} "Max Shares")
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
