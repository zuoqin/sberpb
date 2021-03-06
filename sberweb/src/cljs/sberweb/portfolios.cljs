(ns sberweb.portfolios (:use [net.unit8.tower :only [t]])
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
  (swap! sbercore/app-state assoc-in [(keyword (:selectedsec @sbercore/app-state)) :portfolios] response  )
  (sbercore/setSecsDropDown)
  ;;(.log js/console (:client @app-state)) 
)


(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "something bad happened: " status " " status-text))
)




(defn getPortfolios [] 

  (if (> (count (:porfolios ((keyword (:selectedsec @sbercore/app-state)) @sbercore/app-state)) 0))
    (sbercore/setSecsDropDown)
    (GET (str settings/apipath "api/portfolios?security=" (:selectedsec @sbercore/app-state) ) {
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

              sec (first (filter (fn[x] (if( = (:selectedsec @sbercore/app-state) (:id x)) true false)) (:securities @sbercore/app-state)))

              price (:price  sec)
              seccurrency (:currency sec )

              ;isrusbond (if (and (= 5 (:assettype sec))(= "RUB" (:currency sec)))  true false)

              isbond (if (and (= 5 (:assettype sec))
                                 ;(= "RU" (subs (:isin security) 0 2))
                                 )  true false)
              usdrate (:price (first (filter (fn [x] (if (= "USD" (:acode x)) true false)) (:securities @sbercore/app-state))))
              fxrate (if (or (= "RUB" seccurrency) (= "RUR" seccurrency)) 1 (:price (first (filter (fn[x] (if( = (:acode x) (if (= seccurrency "GBX") "GBP" seccurrency)) true false)) (:securities @sbercore/app-state)))))
              newfxrate (if (= 0 (compare "GBX" seccurrency)) (/ fxrate 100.) fxrate)
              ;tr1 (.log js/console (str (* 100.0 (/ (- (* (:wapusd item) (:amount item) (if (= 5 (:assettype sec)) (if isrusbond 10.0 10.0) 1.0)) (:usdvalue item)) (* (:wapusd item) (:amount item) (if (= 5 (:assettype sec)) 10.0 1.0)) ))))
             ]


          (dom/div {:className "row tablerow" :style {:margin-left "0px" :margin-right "0px"}}

            ;; Portfolio (client)
            (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}
              (dom/a {:className "list-group-item" :style {:background "transparent"} :href (str  "#/postrans/" (:id item) "/" (:selectedsec @sbercore/app-state)  )}
                (dom/h4 {:className "list-group-item-heading" :style {:white-space "nowrap"}} (:code (first (filter (fn[x] (if (= (:id x) (:id item) ) true false)) (:clients @sbercore/app-state)))))
              )
            )

            ;; Доля в портфеле
            (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px" :text-align "right"}}
              (dom/a {:className "list-group-item" :style {:background "transparent"} :href (str  "#/postrans/" (:id item) "/" (:selectedsec @sbercore/app-state)  )}
                (dom/h4 {:className "list-group-item-heading" :style {:white-space "nowrap"}} (gstring/format "%.2f" (:share item)))
              )
            )



            ;; Количество бумаг
            (dom/div {:className "col-xs-2 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}            
              (dom/a {:className "list-group-item" :style {:background "transparent" :padding-left "3px" :padding-right "3px" :text-align "right"} :href (str  "#/postrans/" (:id item) "/" (:selectedsec @sbercore/app-state)) }
                (dom/h4 {:className "list-group-item-heading"} (sbercore/split-thousands (str (:amount item)))   )
              )            
            )

            ;; 
            (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}
              (dom/a {:className "list-group-item" :style {:background "transparent" :text-align "right"} :href (str  "#/postrans/" (:id item)  "/" (:selectedsec @sbercore/app-state)  ) }
                (dom/h4 {:className "list-group-item-heading"} (sbercore/split-thousands (if (> (:wapcur item) 1) (gstring/format "%.2f" (if (nil? (:wapcur item)) 0.00 (:wapcur item)) )  (subs (str (if (nil? (:wapcur item)) 0.00 (:wapcur item))) 0 5))))
               )
            )

            (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}
              (dom/a {:className "list-group-item" :style {:background "transparent" :text-align "right"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                (dom/h4 {:className "list-group-item-heading"} (str (sbercore/split-thousands (if (> price 1) (gstring/format "%.2f" price)  (subs (str price) 0 5) )) " " (case (:currency sec) "USD" "$" "GBP" "£" "GBX" "£p" "EUR" "€" "RUB" "₽" "RUR" "₽" ""))     )
              )            
            )


            ;; USD value
            (dom/div {:className "col-xs-2 col-md-2" :style {:background "transparent" :padding-left "0px" :padding-right "0px" :padding-top "10px"}}
              (dom/div
                (dom/div 
                  (dom/span {:style {:position "absolute" :padding-right "5px" :text-align "right" :display "block" :width "100%"}} (sbercore/split-thousands (str (.round js/Math (:usdvalue item)   ) )))
                )
              )
            )


            ;; USD P/L, %%
            (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px" :padding-top "10px"}}
              (dom/div {:className "progress"}
                (dom/div {:className (str "progress-bar" (if (< (:usdvalue item) (* (:wapusd item) (:amount item) (if (= 5 (:assettype sec)) (* 0.01 (:multiple sec) (:nominal sec) 0.001) 1.0))) " progress-bar-danger" ""))  :role "progresbar" :aria-valuenow (str (.round js/Math (.abs js/Math (* 100.0 (/ (- (:usdvalue item) (* (:wapusd item) (:amount item) (if (= 5 (:assettype sec)) (* 0.01 (:multiple sec) (:nominal sec) 0.001) 1.0))) (* (:wapusd item) (:amount item) (if (= 5 (:assettype sec)) (* 0.01 (:multiple sec) (:nominal sec) 0.001) 1.0)) )) ))) :aria-valuemin "0" :aria-valuemax "100" :style {:color "black" :width (str (.round js/Math (.abs js/Math  (* 100.0 (/ (- (:usdvalue item) (* (:wapusd item) (:amount item) (if (= 5 (:assettype sec)) (* 0.01 (:multiple sec) (:nominal sec) 0.001) 1.0))) (* (:wapusd item) (:amount item) (if (= 5 (:assettype sec)) (* 0.01 (:multiple sec) (:nominal sec) 0.001) 1.0)) )))) "%") }}
                  (dom/span {:style {:position "absolute" :display "block" :width "100%"}} (gstring/format "%.2f" (* 100.0 (/ (- (:usdvalue item) (* (:wapusd item) (:amount item) (if (= 5 (:assettype sec)) (* 0.01 (:multiple sec) (:nominal sec) 0.001) 1.0))) (* (:wapusd item) (:amount item) (if (= 5 (:assettype sec)) (* 0.01 (:multiple sec) (:nominal sec) 0.001) 1.0)) ))))
                )
              )
            )


            ;; RUB %% P/L
            (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px" :padding-top "10px"}}
              (dom/div {:className "progress"}
                (dom/div {:className (str "progress-bar" (if (< (:currubprice item) (:waprub item)) " progress-bar-danger" ""))  :role "progresbar" :aria-valuenow (str (.round js/Math (.abs js/Math (* 100.0 (/ (-  (:currubprice item) (:waprub item)) (:waprub item)))))) :aria-valuemin "0" :aria-valuemax "100" :style {:color "black" :width (str (.round js/Math (.abs js/Math (* 100.0 (/ (-  (:currubprice item) (:waprub item)) (:waprub item))))) "%") }}
                  (dom/span {:style {:position "absolute" :display "block" :width "100%"}} (gstring/format "%.2f" (* 100.0 (if (> (:usdvalue item) 0) 1 -1) (/ (-  (:currubprice item) (:waprub item)) (if (> (:waprub item) 0.0001) (:waprub item) 0.0001) ))) ) 

                )
              )
            )

            ;; RUB P/L
            (dom/div {:className "hidden-xs col-md-1" :style {:padding-left "0px" :padding-right "0px" :padding-top "10px"}}
              (dom/div
                (dom/div 
                  (dom/span {:style {:position "absolute" :padding-right "5px" :text-align "right" :display "block" :width "100%"}} (sbercore/split-thousands (str (.round js/Math  (if (= isbond true) (/ (* (:multiple sec) (:nominal sec) 0.001 (-  (:currubprice item) (:waprub item)) (:amount item))  100.0)  (* (-  (:currubprice item) (:waprub item)) (:amount item)))))))
                )
              )
            )


            ;; USD P/L
            (dom/div {:className "col-xs-2 col-md-2" :style {:padding-left "0px" :padding-right "0px" :padding-top "10px"}}
              (dom/div
                (dom/div 
                  (dom/span {:style {:position "absolute" :padding-right "5px" :text-align "right" :display "block" :width "100%"}} (sbercore/split-thousands (str (.round js/Math (* (- (/ (:currubprice item) usdrate) (:wapusd item) )  (:amount item) (:multiple sec) (:nominal sec) (if (= isbond true) 0.0001 1.0)) ))))
                )
              )
            )

            ;; P/L, %%
            ;; (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px" :padding-top "10px"}}
            ;;   (dom/div {:className "progress"}
            ;;     (dom/div {:className (str "progress-bar" (if (< (:currubprice item) (:waprub item)) " progress-bar-danger" ""))  :role "progresbar" :aria-valuenow (str (.round js/Math (.abs js/Math (* 100.0 (/ (-  (:currubprice item) (:waprub item)) (:waprub item)))))) :aria-valuemin "0" :aria-valuemax "100" :style {:color "black" :width (str (.round js/Math (.abs js/Math (* 100.0 (/ (-  (:currubprice item) (:waprub item)) (:waprub item))))) "%") }}
            ;;       (dom/span {:style {:position "absolute" :display "block" :width "100%"}} (.round js/Math (* 100.0 (/ (-  (:currubprice item) (:waprub item)) (:waprub item)))) ) 

            ;;     )
            ;;   )
            ;; )
          )

        )
        )
           (sort (comp comp-portfs) (filter (fn [x] (let [
               name (:name (first (filter (fn[y] (if (= (:id x) (:id y) ) true false)) (:clients @sbercore/app-state))))
               portfname (str/lower-case (if (nil? name) "" name)) 
               ]
               (if (or (nil? (:id x)) (= false (str/includes? portfname (str/lower-case (:search @sbercore/app-state)))))  false true)) ) (:portfolios ((keyword (str (:selectedsec @sbercore/app-state))) @sbercore/app-state))))
      )
    )
  )
)


(defn onMount [data]
  (getPortfolios)
  (put! ch 42)
  (swap! sbercore/app-state assoc-in [:current] {:name "Portfolios" :text "Portfolios with this security: "} )

  (swap! sbercore/app-state assoc-in [:view] 2)
  (swap! sbercore/app-state assoc-in [:search] "")
)


(defn setcontrols []
  (sbercore/setSecsDropDown)
  (if (not (= nil (:selectedsec @sbercore/app-state)))
    (sbercore/getPortfolios)
  )
  ;;(.log js/console "fieldcode" )
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
      styleprimary {:style {:padding-top "70px" :margin-left "0px" :margin-right "0px"}}
      ]
      (dom/div
        (om/build sbercore/website-view sbercore/app-state {})
        (dom/div  (assoc styleprimary  :className "panel panel-primary")
          (dom/div {:className "panel-heading"}

            (dom/div (assoc stylerow  :className "row" )
              (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}}  "Портфель")
              (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}}  "Доля в портфеле")
              (dom/div {:className "col-xs-2 col-md-1" :style {:text-align "center"}} "Кол-во")
              (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "WAP price")
              (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "Last price")
              (dom/div {:className "col-xs-2 col-md-2" :style {:text-align "center"}} "USD Value")
              ;(dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "P/L, %")
              (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "P/L, USD %")
              (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "P/L, RUB %")
              (dom/div {:className "hidden-xs col-md-1" :style {:text-align "center"}} "P/L, RUB")
              (dom/div {:className "col-xs-2 col-md-2" :style {:text-align "center"}} "P/L USD")
            )
          )
          (if (not (nil? (:selectedsec @sbercore/app-state)))
            (if (or  (> (count (:portfolios ((keyword (str (:selectedsec @sbercore/app-state))) @sbercore/app-state))) 0)
                (= (:state @data ) 1)
              )

              (dom/div {:className "panel-body"}
                (om/build showportfs-view  data {})
              )

              (dom/div {:style {:background "white"}}
                (dom/p {:style {:text-align "center"}}
                  (dom/img {:src "images/loader.gif"})
                )
              )
            )
          )
        )
      ) 
    )
  )
)




;; (sec/defroute portfolios-page "/portfolios" []
;;   (om/root portfolios-view
;;            sbercore/app-state
;;            {:target (. js/document (getElementById "app"))}))


(sec/defroute portfolios-page-byid "/portfolios/:secid" [secid]
  (let [
    ;;tr1 (.log js/console (str "secid=" secid))
    ;;tr1 (swap! app-state assoc-in [:secid]  (js/parseInt secid)  )
    ]
    (swap! sbercore/app-state assoc-in [:current] {:name "Portfolios" :text "Portfolios with this security: "})
    (swap! sbercore/app-state assoc-in [:selectedsec]  (js/parseInt secid))
    (swap! sbercore/app-state assoc-in [:view] 2)
    ;;(sbercore/goPortfolios "")
    (om/root portfolios-view
             sbercore/app-state
             {:target (. js/document (getElementById "app"))})
  )
)
