(ns sberweb.positions (:use [net.unit8.tower :only [t]])
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

(defn OnGetPositions [response]
   (swap! app-state assoc :positions response  )
   (sbercore/setClientsDropDown)
   ;;(.log js/console (:client @app-state)) 

)


(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "something bad happened: " status " " status-text))
)




(defn getPositions [] 

  (if (> (count (:position ((keyword (:selectedclient @sbercore/app-state)) @sbercore/app-state)) 0))
    (sbercore/setClientsDropDown)
    (GET (str settings/apipath "api/position?client=" (:code (:client @sbercore/app-state)) ) {
      :handler OnGetPositions
      :error-handler error-handler
      :headers {
        :content-type "application/json"
        :Authorization (str "Bearer "  (:token (:token @sbercore/app-state))) }
    })
)

)


(defn comp-positions
  [position1 position2]

  (if (> (compare (:acode (first (filter (fn[x] (if (= (:id x) (:id position1) ) true false)) (:securities @sbercore/app-state)))) (:acode (first (filter (fn[x] (if (= (:id x) (:id position2) ) true false)) (:securities @sbercore/app-state))))) 0) 
      false
      true
  )

)

(defcomponent showpositions-view [data owner]
  (render
    [_]
    (dom/div {:className "list-group" :style {:display "block"}}
      (map (fn [item]
        (dom/div {:className "row" :style {:margin-left "0px" :margin-right "0px"}} 
          (dom/div {:className "col-xs-3 col-md-3" :style {:padding-left "0px" :padding-right "0px"}}
            (dom/a {:className "list-group-item" :href (str  "#/postrans/" (:id item)    ) }

              (dom/h4  #js {:className "list-group-item-heading" :dangerouslySetInnerHTML #js {:__html (:acode (first (filter (fn[x] (if (= (:id x) (:id item) ) true false)) (:securities @sbercore/app-state))))}} nil)
            )

          )
          (dom/div {:className "col-xs-3 col-md-3" :style {:padding-left "0px" :padding-right "0px"}}
            
            (dom/a {:className "list-group-item" :style {:text-align "right"} :href (str  "#/postrans/" (:id item)    ) }
              (dom/h4 {:className "list-group-item-heading"} (sbercore/split-thousands (str (:amount item)))   )
            )
            
          )


          (dom/div {:className "col-xs-3 col-md-3" :style {:padding-left "0px" :padding-right "0px"}}
            
            (dom/a {:className "list-group-item" :style {:text-align "right"} :href (str  "#/postrans/" (:id item)    ) }
              (dom/h4 {:className "list-group-item-heading"} (if (> (:wap item) 1) (gstring/format "%.2f" (:wap item))  (subs (str (:wap item)) 0 5) )    )
            )
            
          )
        )
        )
        (sort (comp comp-positions) (filter (fn [x] (if (<= (:amount x) 0) false true)) (:positions ((keyword (:selectedclient @sbercore/app-state)) @sbercore/app-state) ) ))
      )
    )
  )
)


(defn onMount [data]
  (getPositions)
  (put! ch 42)
  (swap! sbercore/app-state assoc-in [:current] "Positions")
)


(defn setcontrols []
  (sbercore/setClientsDropDown)
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

(defcomponent positions-view [data owner]
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
              (dom/div {:className "col-xs-3 col-md-3" :style {:text-align "center"}}  "Security Name")
              (dom/div {:className "col-xs-3 col-md-3" :style {:text-align "center"}} "Amount")
              (dom/div {:className "col-xs-3 col-md-3" :style {:text-align "center"}} "WAP price")
            )
          )
          (dom/div {:className "panel-body"}
            (om/build showpositions-view  data {})
          )
        )
      ) 
    )
  )
)




(sec/defroute positions-page "/positions" []
  (om/root positions-view
           sbercore/app-state
           {:target (. js/document (getElementById "app"))}))


