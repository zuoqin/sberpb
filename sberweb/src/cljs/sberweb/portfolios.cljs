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

  (if (> (compare (:name portf1)  (:name portf2)  ) 0) 
      false
      true
  )
)

(defcomponent showportfs-view [data owner]
  (render
    [_]
    (dom/div {:className "list-group" :style {:display "block"}}
      (map (fn [item]
        (dom/div {:className "row" :style {:margin-left "0px" :margin-right "0px"}} 
          (dom/div {:className "col-xs-3 col-md-3" :style {:padding-left "0px" :padding-right "0px"}}
            (dom/a {:className "list-group-item" :href (str  "#/postrans/" (:id item) "/" (:selectedsec @sbercore/app-state)  )}
              (dom/h4  #js {:className "list-group-item-heading" :dangerouslySetInnerHTML #js {:__html (:name (first (filter (fn[x] (if (= (:id x) (:id item) ) true false)) (:clients @sbercore/app-state))))}} nil)
            )

          )
          (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}            
            (dom/a {:className "list-group-item" :style {:padding-left "3px" :padding-right "3px" :text-align "right"} :href (str  "#/postrans/" (:id item) "/" (:selectedsec @sbercore/app-state)) }
              (dom/h4 {:className "list-group-item-heading"} (sbercore/split-thousands (str (:amount item)))   )
            )            
          )


          (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}
            
            (dom/a {:className "list-group-item" :style {:text-align "right"} :href (str  "#/postrans/" (:id item)  "/" (:selectedsec @sbercore/app-state)  ) }
              (dom/h4 {:className "list-group-item-heading"} (if (> (:wap item) 1) (gstring/format "%.2f" (if (nil? (:wap item)) 0.00 (:wap item)) )  (subs (str (if (nil? (:wap item)) 0.00 (:wap item))) 0 5) )    )
            )
            
          )

          (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}
            
            (dom/a {:className "list-group-item" :style {:text-align "right"} :href (str  "#/postrans/" (:id item)  "/" (:selectedsec @sbercore/app-state)  ) }
              (dom/h4 {:className "list-group-item-heading"}  (:currency (first (filter (fn [x] (if (= (:id x) (:selectedsec @sbercore/app-state)) true false)) (:securities @sbercore/app-state))) item)    )
            )
            
          )


          ;; Sec Currency P/L, %%
          (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px" :padding-top "10px"}}
            (dom/div {:className "progress"}
              (dom/div {:className (str "progress-bar" (if (< (:price item) (:wap item)) " progress-bar-danger" ""))  :role "progresbar" :aria-valuenow (str (.round js/Math (.abs js/Math (* 100.0 (/ (-  (:price item) (:wap item)) (if (> (:waprub item) 0.0001) (:waprub item) 0.0001) ))))) :aria-valuemin "0" :aria-valuemax "100" :style {:color "black" :width (str (.round js/Math (.abs js/Math (* 100.0 (/ (-  (:price item) (if (> (:wap item) 0.0001) (:wap item) 0.001) ) (:wap item))))) "%") }}
                (dom/span {:style {:position "absolute" :display "block" :width "100%"}} (.round js/Math (* 100.0 (/ (-  (:price item) (:wap item)) (if (> (:wap item) 0.0001) (:wap item) 0.0001) ))) ) 
                
              )
            )
          )


          ;; RUB %% P/L
          (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px" :padding-top "10px"}}
            (dom/div {:className "progress"}
              (dom/div {:className (str "progress-bar" (if (< (:currubprice item) (:waprub item)) " progress-bar-danger" ""))  :role "progresbar" :aria-valuenow (str (.round js/Math (.abs js/Math (* 100.0 (/ (-  (:currubprice item) (:waprub item)) (:waprub item)))))) :aria-valuemin "0" :aria-valuemax "100" :style {:color "black" :width (str (.round js/Math (.abs js/Math (* 100.0 (/ (-  (:currubprice item) (:waprub item)) (:waprub item))))) "%") }}
                (dom/span {:style {:position "absolute" :display "block" :width "100%"}} (.round js/Math (* 100.0 (/ (-  (:currubprice item) (:waprub item)) (if (> (:waprub item) 0.0001) (:waprub item) 0.0001) ))) ) 
                
              )
            )
          )

          ;; RUB P/L
          (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px" :padding-top "10px"}}
            (dom/div
              (dom/div 
                (dom/span {:style {:position "absolute" :padding-right "5px" :text-align "right" :display "block" :width "100%"}} (sbercore/split-thousands (str (.round js/Math (* (-  (:currubprice item) (:waprub item)) (:amount item))   ) )))   
                
              )
            )
          )


          ;; USD P/L
          (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px" :padding-top "10px"}}
            (dom/div
              (dom/div 
                (dom/span {:style {:position "absolute" :padding-right "5px" :text-align "right" :display "block" :width "100%"}} (sbercore/split-thousands (str (.round js/Math (* (-  (:price item) (:wap item)) (:amount item))   ) )))   
                
              )
            )
          )


          ;; YTD P/L, %%
          (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px" :padding-top "10px"}}
            (dom/div {:className "progress"}
              (dom/div {:className (str "progress-bar" (if (< (:currubprice item) (:waprub item)) " progress-bar-danger" ""))  :role "progresbar" :aria-valuenow (str (.round js/Math (.abs js/Math (* 100.0 (/ (-  (:currubprice item) (:waprub item)) (:waprub item)))))) :aria-valuemin "0" :aria-valuemax "100" :style {:color "black" :width (str (.round js/Math (.abs js/Math (* 100.0 (/ (-  (:currubprice item) (:waprub item)) (:waprub item))))) "%") }}
                (dom/span {:style {:position "absolute" :display "block" :width "100%"}} (.round js/Math (* 100.0 (/ (-  (:currubprice item) (:waprub item)) () (:waprub item)))) ) 
                
              )
            )
          )

          ;; 1Y P/L, %%
          (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px" :padding-top "10px"}}
            (dom/div {:className "progress"}
              (dom/div {:className (str "progress-bar" (if (< (:currubprice item) (:waprub item)) " progress-bar-danger" ""))  :role "progresbar" :aria-valuenow (str (.round js/Math (.abs js/Math (* 100.0 (/ (-  (:currubprice item) (:waprub item)) (:waprub item)))))) :aria-valuemin "0" :aria-valuemax "100" :style {:color "black" :width (str (.round js/Math (.abs js/Math (* 100.0 (/ (-  (:currubprice item) (:waprub item)) (:waprub item))))) "%") }}
                (dom/span {:style {:position "absolute" :display "block" :width "100%"}} (.round js/Math (* 100.0 (/ (-  (:currubprice item) (:waprub item)) (:waprub item)))) ) 
                
              )
            )
          )
        )
        )
           (sort (comp comp-portfs) (filter (fn [x] (let [
               portfname (:name (first (filter (fn[y] (if (= (:id x) (:id y) ) true false)) (:clients @sbercore/app-state))))
               ]
               (if (or (= false (str/includes? portfname (:search @sbercore/app-state))))  false true)) ) (:portfolios ((keyword (str (:selectedsec @sbercore/app-state))) @sbercore/app-state))))

        
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
  (sbercore/setSecsDropDown)
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
              (dom/div {:className "col-xs-3 col-md-3" :style {:text-align "center"}}  "Portfolio")
              (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "Amount")
              (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "WAP price")
              (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "Currency")
              (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "P/L, %")
              (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "P/L RUB, %")
              (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "P/L, RUB")
              (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "P/L, USD")
              (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "YTD P/L, %")
              (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "1Y P/L, %")
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




(sec/defroute portfolios-page "/portfolios" []
  (om/root portfolios-view
           sbercore/app-state
           {:target (. js/document (getElementById "app"))}))
