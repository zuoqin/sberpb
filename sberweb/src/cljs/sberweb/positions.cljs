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

  (if (or
       (> (:usdvalue position1) (:usdvalue position2))
       (and (= (:usdvalue position1) (:usdvalue position2)) (> (compare (:acode (first (filter (fn[x] (if (= (:id x) (:id position1) ) true false)) (:securities @sbercore/app-state)))) (:acode (first (filter (fn[x] (if (= (:id x) (:id position2) ) true false)) (:securities @sbercore/app-state))))) 0))
    )  
      
      true
      false
  )
)

(defcomponent showpositions-total-view [data owner]
  (render
    [_]
    (dom/div {:className "list-group" :style {:display "block"}}
      (dom/div {:className "row" :style {:margin-left "0px" :margin-right "0px"}} 
        (dom/div {:className "col-xs-2 col-md-2" :style {:padding-left "0px" :padding-right "0px"}}
          (dom/h4 {:className "list-group-item-heading" :style {:margin-left "10px"}} "ВСЕГО: ") nil
        )

        ;Amount
        (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}            

        )

        ;WAP Price
        (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}



        )

        ;Last Price
        (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}



        )
        ;Target Price
        (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}


        )

        ;USD Value
        (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px" :text-align "right" :font-size "18px"}}
          (sbercore/split-thousands 
            (gstring/format "%.0f" (:usdvalue (reduce (fn [x y] {:usdvalue (+ (:usdvalue x) (:usdvalue y))} ) (:positions ((keyword (:selectedclient @sbercore/app-state)) @sbercore/app-state)  ) )))
          )
        )

        ;Currency
        (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}


        )


        ;; Sec Currency P/L, %%
        (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px" :padding-top "10px"}}

        )


        ;; RUB %% P/L
        (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px" :padding-top "10px"}}

        )

        ;; RUB P/L
        (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px" :text-align "right" :font-size "18px"}}
          (sbercore/split-thousands 
            (gstring/format "%.0f" (:sum (reduce (fn [x item] (let [

              sec (first (filter (fn[x] (if (= (:id x) (:id item) ) true false)) (:securities @sbercore/app-state)))
              seccur (:currency sec)
 
              isrusbond (if (and (= 5 (:assettype sec))
                                 (= "RU" (subs (:isin sec) 0 2))
                                 )  true false)

              isbond (if (and (= 5 (:assettype sec))
                                 ;(= "RU" (subs (:isin security) 0 2))
                                 )  true false)
              ]
              {:sum (+ (if (= isrusbond true) (/ (* 1000.0 (-  (:currubprice item) (:waprub item)) (:amount item))  100.0)  (if (= isbond true) (/ (* (-  (:currubprice item) (:waprub item)) (:amount item))  100.0)  (* (-  (:currubprice item) (:waprub item)) (:amount item)))) (:sum x))}  
            )  ) {:sum 0.0} (:positions ((keyword (:selectedclient @sbercore/app-state)) @sbercore/app-state)  ) )))
          )
        )

        ;; USD P/L
        (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px" :text-align "right" :font-size "18px"}}
(sbercore/split-thousands 
            (gstring/format "%.0f" (:sum (reduce (fn [x item] (let [

              sec (first (filter (fn[x] (if (= (:id x) (:id item) ) true false)) (:securities @sbercore/app-state)))
              seccur (:currency sec)
              isbond (if (= 5 (:assettype sec)) true false)
              usdrate (:price (first (filter (fn [x] (if (= "USD" (:acode x)) true false)) (:securities @sbercore/app-state))))

              fxrate (if (or (= "RUB" seccur) (= "RUR" seccur)) 1 (:price  (first (filter (fn[x] (if( = (:acode x) (if (= seccur "GBX") "GBP" seccur)) true false)) (:securities @sbercore/app-state)))))
              newfxrate (if (= 0 (compare "GBX" seccur)) (/ fxrate 100.) fxrate)
              isrusbond (if (and (= 5 (:assettype sec))
                                 (= "RU" (subs (:isin sec) 0 2))
                                 )  true false)

              isbond (if (and (= 5 (:assettype sec))
                                 ;(= "RU" (subs (:isin security) 0 2))
                                 )  true false)
              ]
              {:sum (+ (/ (* (if (= isrusbond true) 1000.0 1.0) (-  (:price item) (:wap item))  (:amount item) newfxrate) (* usdrate (if (= isbond true) 100.0 1.0)) )  (:sum x))}
            )  ) {:sum 0.0} (:positions ((keyword (:selectedclient @sbercore/app-state)) @sbercore/app-state)  ) )))
          )

          ;; (sbercore/split-thousands
          ;;  (gstring/format "%.0f" (:usdvalue (reduce (fn [x y] {:usdvalue (+ (:usdvalue x) (:usdvalue y))} ) (:positions ((keyword (:selectedclient @sbercore/app-state)) @sbercore/app-state)  )  ) ) )
          ;; )
        )
      )
    )
  )
)

(defcomponent showpositions-view [data owner]
  (render
    [_]
    (dom/div {:className "list-group" :style {:display "block"}}
      (map (fn [item]
        (let [sec (first (filter (fn[x] (if (= (:id x) (:id item) ) true false)) (:securities @sbercore/app-state)))
              seccur (:currency sec)
              isbond (if (= 5 (:assettype sec)) true false)

              usdrate (:price (first (filter (fn [x] (if (= "USD" (:acode x)) true false)) (:securities @sbercore/app-state))))

              fxrate (if (or (= "RUB" seccur) (= "RUR" seccur)) 1 (:price  (first (filter (fn[x] (if( = (:acode x) (if (= seccur "GBX") "GBP" seccur)) true false)) (:securities @sbercore/app-state)))))

              isrusbond (if (and (= 5 (:assettype sec))
                                 (= "RU" (subs (:isin sec) 0 2))
                                 )  true false)

              isbond (if (and (= 5 (:assettype sec))
                                 ;(= "RU" (subs (:isin security) 0 2))
                                 )  true false)
              newfxrate (if (= 0 (compare "GBX" seccur)) (/ fxrate 100.) fxrate)
              ;tr1 (.log js/console "currency: "  seccur " rate:" newfxrate)
          ]

          (dom/div {:className "row" :style {:margin-left "0px" :margin-right "0px"}} 
            (dom/div {:className "col-xs-2 col-md-2" :style {:padding-left "0px" :padding-right "0px"}}
              (dom/a {:className "list-group-item" :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }

                (dom/h4  #js {:className "list-group-item-heading" :dangerouslySetInnerHTML #js {:__html (:acode sec)}} nil)
              )

            )
            (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}            
              (dom/a {:className "list-group-item" :style {:padding-left "3px" :padding-right "3px" :text-align "right"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                (dom/h4 {:className "list-group-item-heading"} (sbercore/split-thousands (str (:amount item)))   )
              )            
            )


            ;; WAP Price
            (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}

              (dom/a {:className "list-group-item" :style {:text-align "right"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                (dom/h4 {:className "list-group-item-heading"} (if (> (:wap item) 1) (gstring/format "%.2f" (:wap item))  (subs (str (:wap item)) 0 5) )    )
              )

            )

            
            ;; Last Price
            (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}

              (dom/a {:className "list-group-item" :style {:text-align "right"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                (dom/h4 {:className "list-group-item-heading"} (if (> (:price item) 1) (gstring/format "%.2f" (:price item))  (subs (str (:price item)) 0 5) )    )
              )

            )
            

            ;;Target price
            (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}

              (dom/a {:className "list-group-item" :style {:text-align "right"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                (dom/h4 {:className "list-group-item-heading"} (if (> (:price item) 1) (sbercore/split-thousands (gstring/format "%.0f" (if (nil? (:target sec)) 0.0 (:target sec))))  (subs (str (if (nil? (:target sec)) 0.0 (:target sec))) 0 5)))
              )            
            )

            ;;USD Total Value
            (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}

              (dom/a {:className "list-group-item" :style {:text-align "right"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                (dom/h4 {:className "list-group-item-heading"} (sbercore/split-thousands (gstring/format "%.0f" (:usdvalue item)))
                )
              )
            )
;;(* (:amount item) (if (= isrusbond true) (/ (* 100 (:price item) ) usdrate) (if (= true isbond) (/ (* newfxrate (:price item) ) (* 100.0 usdrate)) (/ (* newfxrate (:price item) ) (* 1.0 usdrate) ) ) ))


            ;; Currency
            (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}

              (dom/a {:className "list-group-item" :style {:text-align "right"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                (dom/h4 {:className "list-group-item-heading"} (:currency item)    )
              )            
            )


            ;; Sec Currency P/L, %%
            (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px" :padding-top "10px"}}
              (dom/div {:className "progress"}
                (dom/div {:className (str "progress-bar" (if (< (:price item) (:wap item)) " progress-bar-danger" ""))  :role "progresbar" :aria-valuenow (str (.round js/Math (.abs js/Math (* 100.0 (/ (-  (:price item) (:wap item)) (:waprub item)))))) :aria-valuemin "0" :aria-valuemax "100" :style {:color "black" :width (str (.round js/Math (.abs js/Math (* 100.0 (/ (-  (:price item) (:wap item)) (:wap item))))) "%") }}
                  (dom/span {:style {:position "absolute" :display "block" :width "100%"}} (.round js/Math (* 100.0 (/ (-  (:price item) (:wap item)) (:wap item)))) )                
                )
              )
            )


            ;; RUB %% P/L
            (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px" :padding-top "10px"}}
              (dom/div {:className "progress"}
                (dom/div {:className (str "progress-bar" (if (< (:currubprice item) (:waprub item)) " progress-bar-danger" ""))  :role "progresbar" :aria-valuenow (str (.round js/Math (.abs js/Math (* 100.0 (/ (-  (:currubprice item) (:waprub item)) (:waprub item)))))) :aria-valuemin "0" :aria-valuemax "100" :style {:color "black" :width (str (.round js/Math (.abs js/Math (* 100.0 (/ (-  (:currubprice item) (:waprub item)) (:waprub item))))) "%") }}
                  (dom/span {:style {:position "absolute" :display "block" :width "100%"}} (.round js/Math (* 100.0 (/ (-  (:currubprice item) (:waprub item)) (:waprub item)))) ) 

                )
              )
            )

            ;; RUB P/L
            (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px" :padding-top "10px"}}
              (dom/div
                (dom/div 
                  (dom/span {:style {:position "absolute" :padding-right "5px" :text-align "right" :display "block" :width "100%"}} (sbercore/split-thousands (str (.round js/Math  (if (= isrusbond true) (/ (* 1000.0 (-  (:currubprice item) (:waprub item)) (:amount item))  100.0)  (if (= isbond true) (/ (* (-  (:currubprice item) (:waprub item)) (:amount item))  100.0)  (* (-  (:currubprice item) (:waprub item)) (:amount item))))   ))))

                )
              )
            )


            ;; USD P/L
            (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px" :padding-top "10px"}}
              (dom/div
                (dom/div 
                  (dom/span {:style {:position "absolute" :padding-right "5px" :text-align "right" :display "block" :width "100%"}} (sbercore/split-thousands (str (.round js/Math (/ (* (if (= isrusbond true) 1000.0 1.0) (-  (:price item) (:wap item))  (:amount item) newfxrate) (* usdrate (if (= isbond true) 100.0 1.0))                                                                                                                           )))))
                )
              )
            )
          )

        )

        )

        (sort (comp comp-positions) (filter (fn [x] (let [
                                                          seccode (:acode (first (filter (fn[y] (if (= (:id x) (:id y) ) true false)) (:securities @sbercore/app-state))))

                                                          ]
                                                      (if (or (<= (:amount x) 0) 
                                        ;(= false (str/includes? seccode (:search @sbercore/app-state))) 
                                                              )  false true)
                                                      ) ) (:positions ((keyword (:selectedclient @sbercore/app-state)) @sbercore/app-state) ) ) )

        
      )
    )
  )
)


(defn onMount [data]
  (getPositions)
  (put! ch 42)
  (swap! sbercore/app-state assoc-in [:current] {:name "Positions" :text "Positions with this security"} )
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
              (dom/div {:className "col-xs-2 col-md-2" :style {:text-align "center"}}  "Security Name")
              (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "Amount")
              (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "WAP price")
              (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "Last price")
              (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "Target price")
              (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "USD Value")
              (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "Currency")
              (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "P/L, %")
              (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "P/L RUB, %")
              (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "P/L, RUB")
              (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "P/L, USD")
            )
          )
          (dom/div {:className "panel-body"}
            (om/build showpositions-view  data {})
            (om/build showpositions-total-view  data {})
          )
        )

        (dom/div {:style {:margin-top "30px"} :className "panel panel-info"}
          (dom/div {:className "panel-heading"}
            (dom/div (assoc stylerow  :className "row" )
              (dom/div {:className "col-xs-12 col-md-12" :style {:text-align "center"}} "Закрытые позиции")
            )
          )
        )
        (dom/div  {:className "panel panel-primary"}
          (dom/div {:className "panel-heading"}
            (dom/div (assoc stylerow  :className "row" )
              (dom/div {:className "col-xs-2 col-md-2" :style {:text-align "center"}}  "Security Name")
              (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "Amount")
              (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "WAP price")
              (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "Last price")
              (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "Target price")
              (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "USD Value")
              (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "Currency")
              (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "P/L, %")
              (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "P/L RUB, %")
              (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "P/L, RUB")
              (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "P/L, USD")
            )
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
