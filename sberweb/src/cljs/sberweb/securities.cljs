(ns sberweb.securities (:use [net.unit8.tower :only [t]])
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

;; (defn map-asset [asset]
;;   (let [
;;     ;tr1 (println (str "asset=" asset))
;;     sec (first (filter (fn [x] (if (= (str (:id x)) (name (first asset))) true false)) (:securities @sbercore/app-state)))
;;     ]
;;     {(keyword (:acode sec)) (:amount (second asset))}
;;   )
;; )

(defn OnGetAssets [response]
  (let [
    ;;assets (map (fn [x] ()) response)

    assets (loop [result {} positions response]
             (if (seq positions)
               (let [
                     position (first positions)
                     sec (first (filter (fn [x] (if (= (str (:id x)) (name (first position))) true false)) (:securities @sbercore/app-state)))
                     ]
                 (recur (assoc-in result [(keyword (:acode sec))] (:amount (second position)))
                      (rest positions))
               )
               result)
             )
    ]
    (swap! sbercore/app-state assoc-in [:assets] assets)
  )
  (swap! sbercore/app-state assoc :state 1 )
  ;; (sbercore/setSecsDropDown)
  ;;(.log js/console (:client @app-state)) 

)


(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "something bad happened: " status " " status-text))
)




(defn getAssets [] 
  (if (> (count (:assets @sbercore/app-state)) 0)
    (swap! sbercore/app-state assoc :state 1 )
    (GET (str settings/apipath "api/assets") {
      :handler OnGetAssets
      :error-handler error-handler
      :headers {
        :content-type "application/json"
        :Authorization (str "Bearer "  (:token (:token @sbercore/app-state))) }
    })
  )
)

(defn comp-assets
  [sec1 sec2]
  (if (or (< (compare (name (first sec1)) (name (first sec2))) 0) )  
      true
      false
  )
)

(defn goPortfolios [secid]
  (let []
    ;;(.log js/console e) 
    (swap! sbercore/app-state assoc-in [:selectedsec]  (js/parseInt secid))
    (swap! sbercore/app-state assoc-in [:view] 2)
    
    (sbercore/goPortfolios "")
  )
)

(defcomponent showassets-view [data owner]
  (render
    [_]
    (dom/div {:className "list-group" :style {:display "block"}}
      (map (fn [item]
        (let [

              sec (first (filter (fn[x] (if( = (name (first item)) (:acode x)) true false)) (:securities @sbercore/app-state)))

              price (:price sec)
              seccurrency (:currency sec )

              isbond (if (and (= 5 (:assettype sec))
                                 ;(= "RU" (subs (:isin security) 0 2))
                                 )  true false)


              usdrate (:price (first (filter (fn [x] (if (= "USD" (:acode x)) true false)) (:securities @sbercore/app-state))))

              fxrate (if (or (= "RUB" seccurrency) (= "RUR" seccurrency)) 1 (:price (first (filter (fn[x] (if( = (:acode x) (if (= seccurrency "GBX") "GBP" seccurrency)) true false)) (:securities @sbercore/app-state)))))

              newfxrate (if (= 0 (compare "GBX" seccurrency)) (/ fxrate 100.) fxrate)
              secrubprice (* price newfxrate)
              secusdprice (/ secrubprice usdrate)

              ;tr1 (.log js/console (str (* 100.0 (/ (- (* (:wapusd item) (:amount item) (if (= 5 (:assettype sec)) (if isrusbond 10.0 10.0) 1.0)) (:usdvalue item)) (* (:wapusd item) (:amount item) (if (= 5 (:assettype sec)) 10.0 1.0)) ))))
             ]


          (dom/div {:className "row" :style {:margin-left "0px" :margin-right "0px"}}

            ;; Asset name
            (dom/div {:className "col-xs-2 col-md-2" :style {:padding-left "0px" :padding-right "0px"}}
              (dom/a {:className "list-group-item" :href (str  "#/portfolios/" (:id sec))
;:onClick (fn [e] (goPortfolios (:id sec)))
}
                (dom/h4 {:className "list-group-item-heading" :style {:white-space "nowrap"}} (:acode sec))
              )
            )

            ;; Количество бумаг
            (dom/div {:className "col-xs-2 col-md-2" :style {:padding-left "0px" :padding-right "0px"}}
              (dom/a {:className "list-group-item" :style {:padding-left "3px" :padding-right "3px" :text-align "right"} :href (str  "#/postrans/" (:id item) "/" (:selectedsec @sbercore/app-state))}
                (dom/h4 {:className "list-group-item-heading"} (sbercore/split-thousands (str (second item))))
              )
            )

            ;; Текущая рыночная цена 
            (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}
              (dom/a {:className "list-group-item" :style {:text-align "right"} :href (str  "#/postrans/" (:id item)  "/" (:selectedsec @sbercore/app-state)  ) }
                (dom/h4 {:className "list-group-item-heading"} (if (> (:price sec) 1) (gstring/format "%.2f" (if (nil? (:price sec)) 0.00 (:price sec)) )  (subs (str (if (nil? (:price sec)) 0.00 (:price sec))) 0 5)))
               )
            )

            ;; Валюта
            (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}
              (dom/a {:className "list-group-item" :style {:text-align "right"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                (dom/h4 {:className "list-group-item-heading"} (str  (case (:currency sec) "USD" "$" "GBP" "£" "GBX" "£p" "EUR" "€" "RUB" "₽" "RUR" "₽" ""))     )
              )            
            )


            ;; USD value
            (dom/div {:className "col-xs-2 col-md-2" :style {:padding-left "0px" :padding-right "0px" :padding-top "10px"}}
              (dom/div
                (dom/div 
                  (dom/span {:style {:position "absolute" :padding-right "5px" :text-align "right" :display "block" :width "100%"}} (sbercore/split-thousands (str (.round js/Math (* secusdprice (:multiple sec) (second item) (if isbond 0.01 1.0))) )))
                )
              )
            )

            ;; RUB value
            (dom/div {:className "col-xs-2 col-md-2" :style {:padding-left "0px" :padding-right "0px" :padding-top "10px"}}
              (dom/div
                (dom/div 
                  (dom/span {:style {:position "absolute" :padding-right "5px" :text-align "right" :display "block" :width "100%"}} (sbercore/split-thousands (str (.round js/Math (* secrubprice (:multiple sec) (second item) (if isbond 0.01 1.0)) ) )))
                )
              )
            )

            ;; USD dirty value
            (dom/div {:className "col-xs-2 col-md-2" :style {:padding-left "0px" :padding-right "0px" :padding-top "10px"}}
              (dom/div
                (dom/div 
                  (dom/span {:style {:position "absolute" :padding-right "5px" :text-align "right" :display "block" :width "100%"}} (sbercore/split-thousands (str (.round js/Math (* secusdprice (:multiple sec) (second item) (if isbond 0.01 1.0))))))
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
           (sort (comp comp-assets) (filter (fn [x] (let [

               ]
               (if (or (= false (str/includes? (name (first x)) (str/lower-case (:search @sbercore/app-state)))))  false true)) ) (:assets @sbercore/app-state)))
      )
    )
  )
)


(defn onMount [data]
  (swap! sbercore/app-state assoc-in [:view] 7)
  (swap! sbercore/app-state assoc :state 2 )
  (getAssets)
  (put! ch 42)
  (swap! sbercore/app-state assoc-in [:current] {:name "Assets" :text "Все активы клиентов"} )
)


(defn setcontrols []
  ;; (sbercore/setSecsDropDown)
  ;; (if (not (= nil (:selectedsec @sbercore/app-state)))
  ;;   (sbercore/getPortfolios)
  ;; )
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

(defcomponent assets-view [data owner]
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
              (dom/div {:className "col-xs-2 col-md-2" :style {:text-align "center"}}  "Актив")
              (dom/div {:className "col-xs-2 col-md-2" :style {:text-align "center"}} "Количество")
              (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "Цена")
              (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "Валюта")
              (dom/div {:className "col-xs-2 col-md-2" :style {:text-align "center"}} "USD стоимость")
              (dom/div {:className "col-xs-2 col-md-2" :style {:text-align "center"}} "RUB стоимость")
              (dom/div {:className "col-xs-2 col-md-2" :style {:text-align "center"}} "USD стоимость с НКД")
            )
          )
          (if (or
              (= (:state @data ) 1)
            )

            (dom/div {:className "panel-body"}
              (om/build showassets-view  data {})
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




(sec/defroute assets-page "/assets" []
  (om/root assets-view
           sbercore/app-state
           {:target (. js/document (getElementById "app"))}))
