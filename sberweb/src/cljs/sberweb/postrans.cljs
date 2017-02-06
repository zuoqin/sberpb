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
   (swap! sbercore/app-state assoc-in [ (keyword (:selectedclient @sbercore/app-state)) :transactions] (map tran-to-map response)  )
   ;;(sbercore/setClientsDropDown)
   ;;(.log js/console (:client @app-state)) 

)


(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "something bad happened: " status " " status-text))
)




(defn getTransactions []
  (if (nil? ( (keyword (str (:secid @app-state))) (:transactions (((keyword (:selectedclient @sbercore/app-state)) @sbercore/app-state) @sbercore/app-state))))
    
    (GET (str settings/apipath "api/postran?client=" (:selectedclient @sbercore/app-state) "&security=" (:secid @app-state)) {
      :handler OnGetTransactions
      :error-handler error-handler
      :headers {
        :content-type "application/json"
        :Authorization (str "Bearer "  (:token (:token @sbercore/app-state))) }
    })
    (sbercore/setClientsDropDown)
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
        (dom/div {:className "row"}
          (dom/div {:className "col-md-4"}
            (dom/h4 {:className "list-group-item-heading"} (str (tf/unparse custom-formatter (tc/from-date (:valuedate item)))))
          )

          (dom/div {:className "col-md-4"} 
            (dom/h4 {:className "list-group-item-heading"} (if (= (:direction item) "B") "Buy" "Sell"))
          )

          (dom/div {:className "col-md-4"}
            (dom/h4 {:className "list-group-item-heading"} (:price item))
          )
        )

        )
	(sort (comp comp-trans) (filter (fn [x] (if (= (:security x) (:secid @app-state)) true false)) (:transactions ((keyword (:selectedclient @sbercore/app-state)) @sbercore/app-state))))    
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
    (let [style {:style {:margin "10px" :padding-bottom "0px"}}
      styleprimary {:style {:margin-top "70px" :margin-left "0px"}}
      ]

      (dom/div
        (om/build sbercore/website-view sbercore/app-state {})
        (dom/div  (assoc styleprimary  :className "panel panel-primary" ;:onClick (fn [e](println e))
        )
          (dom/div {:className "row"}
            (dom/div {:className "col-md-4"} "Date")
            (dom/div {:className "col-md-4"} "Buy/SellAmount")
            (dom/div {:className "col-md-4"} "Amount")
          )
          (om/build showtransactions-view  data {})
        )
      ) 
    )
  )
)




(sec/defroute transactions-page "/postrans/:id" [id]
  (swap! app-state assoc-in [:secid]  (js/parseInt id)  )
  (om/root transactions-view
           sbercore/app-state
           {:target (. js/document (getElementById "app"))}))


