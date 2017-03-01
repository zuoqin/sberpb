(ns sberweb.postrans (:use [net.unit8.tower :only [t]])
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
  )
  (:import goog.History)
)

(enable-console-print!)

(defonce app-state (atom  {:users [] :trips [] }))

(def custom-formatter (tf/formatter "dd/MM/yyyy"))

(def custom-formatter1 (tf/formatter "MMM dd yyyy hh:mm:ss"))

(def ch (chan (dropping-buffer 2)))


(defn tran-to-map [tran]
  (let [newtran {:id (:id tran) :valuedate (:valuedate tran) :nominal (:nominal tran) :security (:security tran) :currency (:currency tran) :price (:price tran) :direction (:direction tran) :client (:client tran)}]
    newtran
  )
)

(defn OnGetTransactions [response]
  (let [
    client (:code (first (filter (fn [x] (if (= (:id x) (:clientid @app-state)) true false)) (:clients @sbercore/app-state))))
   ]
   (swap! sbercore/app-state assoc-in [ (keyword client) :transactions] (map tran-to-map response))
  )
   ;;(sbercore/setClientsDropDown)
   ;;(.log js/console (:client @app-state))
)


(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "something bad happened: " status " " status-text))
)




(defn getTransactions []
  (let [
    client (:code (first (filter (fn [x] (if (= (:id x) (:clientid @app-state)) true false))  (:clients @sbercore/app-state))))
   ]
   (if (or (nil? ((keyword client) @sbercore/app-state)) (nil? (:transactions (((keyword client) @sbercore/app-state) @sbercore/app-state))) ) 
    (GET (str settings/apipath "api/postran?client=" client "&security=" (:secid @app-state)) {
      :handler OnGetTransactions
      :error-handler error-handler
      :headers {
        :content-type "application/json"
        :Authorization (str "Bearer "  (:token (:token @sbercore/app-state))) }
    })
    (sbercore/setClientsDropDown)
)
  )
  

)

(defn diffdates [tran1 tran2]
  (-  (tc/to-long (tc/from-date (:valuedate tran1))) (tc/to-long (tc/from-date (:valuedate tran2)))  ) 
)


(defn comp-trans
  [tran1 tran2]
  (if (> (diffdates tran1 tran2) 0) true false )
)



(defcomponent showtransactions-view [data owner]
  (render
    [_]
    (dom/div {:className "list-group" :style {:display "block"}}
      (map (fn [item]
        (dom/div {:className "row" :style {:margin-left "0px" :margin-right "0px"}}
          (dom/div {:className "col-xs-3 col-md-3"}
            (dom/h4 {:className "list-group-item-heading"} (str (tf/unparse custom-formatter (tc/from-date (:valuedate item)))))
          )

          (dom/div {:className "col-xs-3 col-md-3"} 
            (dom/h4 {:className "list-group-item-heading"} (if (= (:direction item) "B") "Buy" "Sell"))
          )

          (dom/div {:className "col-xs-3 col-md-3"} 
            (dom/h4 {:className "list-group-item-heading" :style {:text-align "right"}} (sbercore/split-thousands (str (:nominal item)) )  )
          )

          (dom/div {:className "col-xs-3 col-md-3" :style {:text-align "right"}}
            (dom/h4 {:className "list-group-item-heading"} (:price item))
          )
        )

        )
	(sort (comp comp-trans) (filter (fn [x] (if (= (:security x) (:secid @app-state)) true false)) (:transactions ((keyword (:code (first (filter (fn [x] (if (= (:id x) (:clientid @app-state)) true false)) (:clients @sbercore/app-state)))) ) @sbercore/app-state))))    
      )
    )
  )
)


(defn onMount [data]
  (getTransactions)
  (put! ch 42)
  (swap! sbercore/app-state assoc-in [:current]  "Transactions")
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

(defcomponent transactions-view [data owner]
  (will-mount [_]
    (onMount data)
  )
  (render [_]
    (let [
      styleprimary {:style {:margin-top "70px" :margin-left "0px" :margin-right "0px"}}
      stylerow {:style {:margin-left "0px" :margin-right "0px"}}
      ]

      (dom/div
        (om/build sbercore/website-view sbercore/app-state {})
        (dom/div  (assoc styleprimary :className "panel panel-primary")
          (dom/div {:className "panel-heading"}
            (dom/div (assoc stylerow  :className "row" )
              (dom/div {:className "col-xs-3 col-md-3" :style {:text-align "center"}} "Date")
              (dom/div {:className "col-xs-3 col-md-3" :style {:text-align "center"}} "Buy/Sell")
              (dom/div {:className "col-xs-3 col-md-3" :style {:text-align "center"}} "Amount")
              (dom/div {:className "col-xs-3 col-md-3" :style {:text-align "center"}} "Price")
            )
          )
          (dom/div {:className "panel-body"}
            (om/build showtransactions-view  data {})
          )          
        )
      ) 
    )
  )
)




(sec/defroute transactions-page "/postrans/:clientid/:secid" [clientid secid]
  (swap! app-state assoc-in [:secid]  (js/parseInt secid)  )
  (swap! app-state assoc-in [:clientid]  (js/parseInt clientid)  )
  (om/root transactions-view
           sbercore/app-state
           {:target (. js/document (getElementById "app"))}))


