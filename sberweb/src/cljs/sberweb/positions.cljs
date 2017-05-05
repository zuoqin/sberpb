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
   (swap! sbercore/app-state assoc :positions response  )
   (sbercore/setClientsDropDown)
   ;;(.log js/console (:client @app-state)) 
)


(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "something bad happened: " status " " status-text))
)




(defn getPositions [] 

  (if (> (count (:positions ((keyword (:selectedclient @sbercore/app-state)) @sbercore/app-state))) 0)
    (sbercore/setClientsDropDown)
    ;; (GET (str settings/apipath "api/position?client=" (:selectedclient @app-state) ) {
    ;;   :handler OnGetPositions
    ;;   :error-handler error-handler
    ;;   :headers {
    ;;     :content-type "application/json"
    ;;     :Authorization (str "Bearer "  (:token (:token @sbercore/app-state))) }
    ;; })
    (sbercore/getPositions)
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

(defn comp-trans
  [tran1 tran2]
  (if (or
       (> (tc/to-long (tf/parse custom-formatter (:date tran1))) (tc/to-long (tf/parse custom-formatter (:date tran2))))
       (and (= (tc/to-long (tf/parse custom-formatter (:date tran1))) (tc/to-long (tf/parse custom-formatter (:date tran2)))) (> (:amount tran1) (:amount tran2)))
    )
      true
      false
  )
)

(defn comp-deals
  [deal1 deal2]

  (if (or
       (> (:security deal1) (:security deal2))
       (and (= (:security deal1) (:security deal2)) (> (tc/to-long (:tradedate deal1)) (tc/to-long (:tradedate deal2))))
    ) 
      true
      false
  )
)

(defcomponent showpositions-total-view [data owner]
  (render
    [_]
    (if (> (count (:positions ((keyword (:selectedclient @sbercore/app-state)) @sbercore/app-state) )) 0)
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
)

(defcomponent showcash-view [data owner]
  (render
    [_]
    (if (> (count (:clients @sbercore/app-state)) 0)
      (dom/div {:className "row" :style {:margin-left "0px" :margin-right "0px"}}
        (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "")
        (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "")
        (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px" :background-color (if (< (:usd (first (filter (fn [x] (if (= (:code x) (:selectedclient @sbercore/app-state)) true false)) (:clients @sbercore/app-state)))) 0) "lightpink" "white")} }
          (dom/h4 {:className "list-group-item-heading" :style {:text-align "right"}} (sbercore/split-thousands (str (:usd (first (filter (fn [x] (if (= (:code x) (:selectedclient @sbercore/app-state)) true false)) (:clients @sbercore/app-state))))))
          )
        )
        (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "")
        (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "")
        (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px" :background-color (if (< (:rub (first (filter (fn [x] (if (= (:code x) (:selectedclient @sbercore/app-state)) true false)) (:clients @sbercore/app-state)))) 0) "lightpink" "white")}}
          (dom/h4 {:className "list-group-item-heading" :style {:text-align "right"}} (sbercore/split-thousands (str (:rub (first (filter (fn [x] (if (= (:code x) (:selectedclient @sbercore/app-state)) true false)) (:clients @sbercore/app-state))))))
          )
        )
        (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "")
        (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "")
        (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px" :background-color (if (< (:eur (first (filter (fn [x] (if (= (:code x) (:selectedclient @sbercore/app-state)) true false)) (:clients @sbercore/app-state)))) 0) "lightpink" "white")}}
          (dom/h4 {:className "list-group-item-heading" :style {:text-align "right"}} (sbercore/split-thousands (str (:eur (first (filter (fn [x] (if (= (:code x) (:selectedclient @sbercore/app-state)) true false)) (:clients @sbercore/app-state))))))
          )
        )
        (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "")
        (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "")
        (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px" :background-color (if (< (:gbp (first (filter (fn [x] (if (= (:code x) (:selectedclient @sbercore/app-state)) true false)) (:clients @sbercore/app-state)))) 0) "lightpink" "white")}}
          (dom/h4 {:className "list-group-item-heading" :style {:text-align "right"}} (sbercore/split-thousands (str (:gbp (first (filter (fn [x] (if (= (:code x) (:selectedclient @sbercore/app-state)) true false)) (:clients @sbercore/app-state))))))
          )
        )
      )
    )
  )
)

(defcomponent showstocks-view [data owner]
  (render
    [_]
    (if (> (count (:positions ((keyword (:selectedclient @sbercore/app-state)) @sbercore/app-state) )) 0)

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
                putdate (if (nil? (:putdate item)) #inst "1900-01-01T00:00:00.000-00:00" (:putdate item))
                ;tr1 (.log js/console "currency: "  seccur " rate:" newfxrate)
                portfusdvalue (:usdvalue (reduce (fn [x y] {:usdvalue (+ (:usdvalue x) (:usdvalue y))}) (:positions ((keyword (:selectedclient @sbercore/app-state)) @sbercore/app-state))))

                ;;tr1 (.log js/console "portfolio usd value: "  portfusdvalue)
            ]

            (dom/div {:className "row" :style {:margin-left "0px" :margin-right "0px"}} 
              (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}
                (dom/a {:className "list-group-item" :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                  (dom/h4  #js {:className "list-group-item-heading" :dangerouslySetInnerHTML #js {:__html (:acode sec)}} nil)
                )
              )

              ;; Доля в портфеле
              (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}            
                (dom/a {:className "list-group-item" :style {:padding-left "3px" :padding-right "3px" :text-align "right"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                  (dom/h4 {:className "list-group-item-heading"} (gstring/format "%.2f" (* 100.0 (/ (:usdvalue item) portfusdvalue))))
                )            
              )


              ;;Количество бумаг
              (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}            
                (dom/a {:className "list-group-item" :style {:padding-left "3px" :padding-right "3px" :text-align "right"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                  (dom/h4 {:className "list-group-item-heading"} (sbercore/split-thousands (str (:amount item)))   )
                )            
              )


              ;; Цена покупки
              (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}
                (dom/a {:className "list-group-item" :style {:text-align "right"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                  (dom/h4 {:className "list-group-item-heading"} (sbercore/split-thousands  (if (> (:wap item) 1) (gstring/format "%.2f" (:wap item))  (subs (str (:usdvalue item)) 0 5))))
                )
              )

              ;; Last Price
              (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}
                (dom/a {:className "list-group-item" :style {:text-align "right"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                  (dom/h4 {:className "list-group-item-heading"} (sbercore/split-thousands (if (> (:price item) 1) (gstring/format "%.2f" (:price item))  (subs (str (:price item)) 0 5))) )
                )
              )

              ;;Target price
              (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px" :visibility (if (> (:target sec) 0) "visible" "hidden")}}
                (dom/a {:className "list-group-item" :style {:text-align "right"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                  (dom/h4 {:className "list-group-item-heading"} (if (and (> (:target sec) 0) )  (if (> (:price item) 1) (sbercore/split-thousands (gstring/format "%.0f" (if (nil? (:target sec)) 0.0 (:target sec))))  (subs (str (if (nil? (:target sec)) 0.0 (:target sec))) 0 5)) ""))
                )            
              )

              ;;Рейтинг аналитиков
              (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}
                (dom/a {:className "list-group-item" :style {:text-align "right"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                  (dom/h4 {:className "list-group-item-heading"} (gstring/format "%.2f" (if (nil? (:anr sec)) 0.0 (:anr sec)))
                  )
                )
              )


              ;; Currency
              (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}
                (dom/a {:className "list-group-item" :style {:text-align "right"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                  (dom/h4 {:className "list-group-item-heading"} (:currency item))
                )
              )


              ;; USD Currency P/L, %%
              (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px" :padding-top "10px"}}
                (dom/div {:className "progress"}
                  (dom/div {:className (str "progress-bar" (if (< (:usdvalue item) (* (:amount item) (:wapusd item))) " progress-bar-danger" ""))  :role "progresbar" :aria-valuenow (str (.round js/Math (.abs js/Math (* 100.0 (/ (- (:usdvalue item) (* (:amount item) (:wapusd item))) (* (:amount item) (:wapusd item))))))) :aria-valuemin "0" :aria-valuemax "100" :style {:color "black" :width (str (.round js/Math (.abs js/Math (* 100.0 (/ (- (:usdvalue item) (* (:amount item) (:wapusd item) ) ) (* (:amount item) (:wapusd item) ))))) "%") }}
                    (dom/span {:style {:position "absolute" :display "block" :width "100%"}} (.round js/Math (* 100.0 (/ (- (:usdvalue item) (* (:amount item) (:wapusd item) ) ) (* (:amount item) (:wapusd item) ))  )) )                
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

              ;;Дивидендная доходность
              (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px" :visibility (if (> (:yield sec) 0) "visible" "hidden")}}

                (dom/a {:className "list-group-item" :style {:text-align "right"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                  (dom/h4 {:className "list-group-item-heading"} (sbercore/split-thousands (gstring/format "%.2f" (if (nil? (:yield sec)) 0.0 (:yield sec))))
                  )
                )
              )

              ;;Дата Ex-div
              (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px" :visibility (if (or (nil? (:dvddate sec)) (> (.indexOf (tf/unparse custom-formatter (tc/from-long (tc/to-long (:dvddate sec)))) "1900") 0) )   "hidden" "visible")}}
                (dom/a {:className "list-group-item" :style {:text-align "right"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                  (dom/h4 {:className "list-group-item-heading"} (tf/unparse custom-formatter (tc/from-long (tc/to-long (if (nil? (:dvddate sec)) #inst "1900-01-01T00:00:00.000-00:00" (:dvddate sec)) ))))
                )
              )

              ;; RUB P/L
              ;; (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px" :padding-top "10px"}}
              ;;   (dom/div
              ;;     (dom/div 
              ;;       (dom/span {:style {:position "absolute" :padding-right "5px" :text-align "right" :display "block" :width "100%"}} (sbercore/split-thousands (str (.round js/Math  (if (= isrusbond true) (/ (* 1000.0 (-  (:currubprice item) (:waprub item)) (:amount item))  100.0)  (if (= isbond true) (/ (* (-  (:currubprice item) (:waprub item)) (:amount item))  100.0)  (* (-  (:currubprice item) (:waprub item)) (:amount item))))   ))))

              ;;     )
              ;;   )
              ;; )


              ;; USD P/L
              ;; (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px" :padding-top "10px"}}
              ;;   (dom/div
              ;;     (dom/div 
              ;;       (dom/span {:style {:position "absolute" :padding-right "5px" :text-align "right" :display "block" :width "100%"}} (sbercore/split-thousands (str (.round js/Math (/ (* (if (= isrusbond true) 1000.0 1.0) (-  (:price item) (:wap item))  (:amount item) newfxrate) (* usdrate (if (= isbond true) 100.0 1.0)))))))
              ;;     )
              ;;   )
              ;; )
            )

          )

          )

          (sort (comp comp-positions)
            (filter
              (fn [x]
                (let [
                  sec (first (filter (fn[y] (if (= (:id x) (:id y) ) true false)) (:securities @sbercore/app-state)))
                  seccode (:acode sec)
                  assettype (:assettype sec)]
                  (if (or (not= 1 assettype)
                          (<= (:amount x) 0) 
                          (= false (str/includes? seccode (str/upper-case (:search @sbercore/app-state)) ))
                      )  false true)
                ))
              (:positions ((keyword (:selectedclient @sbercore/app-state)) @sbercore/app-state))
            )
          )
        )
      )
    )
  )
)


(defcomponent showbonds-view [data owner]
  (render
    [_]
    (if (> (count (:positions ((keyword (:selectedclient @sbercore/app-state)) @sbercore/app-state) )) 0)

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

                usdcosts (* (if (= isrusbond true) 10.0 0.01) (:amount item) (:wapusd item))

                ;tr1 (if (= false isrusbond) (println (str (:acode sec) " не российский бонд: " (:usdvalue item) " costs: " usdcosts " usdvalue: "  " wapusd: " (:wapusd item) )))
                isbond (if (and (= 5 (:assettype sec))
                                   ;(= "RU" (subs (:isin security) 0 2))
                                   )  true false)
                newfxrate (if (= 0 (compare "GBX" seccur)) (/ fxrate 100.) fxrate)
                ;tr1 (.log js/console "currency: "  seccur " rate:" newfxrate)
                putdate (if (nil? (:putdate sec)) #inst "1900-01-01T00:00:00.000-00:00" (:putdate sec))
                dvddate (if (nil? (:dvddate sec)) #inst "1900-01-01T00:00:00.000-00:00" (:dvddate sec))
                ;;tr1 (println putdate)
                portfusdvalue (:usdvalue (reduce (fn [x y] {:usdvalue (+ (:usdvalue x) (:usdvalue y))}) (:positions ((keyword (:selectedclient @sbercore/app-state)) @sbercore/app-state))))
            ]

            (dom/div {:className "row" :style {:margin-left "0px" :margin-right "0px"}} 
              (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}
                (dom/a {:className "list-group-item" :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }

                  (dom/h4  #js {:className "list-group-item-heading" :dangerouslySetInnerHTML #js {:__html (:acode sec)}} nil)
                )

              )

              ;;Доля в портфеле
              (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}            
                (dom/a {:className "list-group-item" :style {:padding-left "3px" :padding-right "3px" :text-align "right"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                  (dom/h4 {:className "list-group-item-heading"} (gstring/format "%.2f" (* 100.0 (/ (:usdvalue item) portfusdvalue))))
                )            
              )

              ;;Номинал
              (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}            
                (dom/a {:className "list-group-item" :style {:padding-left "3px" :padding-right "3px" :text-align "right"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                  (dom/h4 {:className "list-group-item-heading"} (sbercore/split-thousands (str (:amount item)))   )
                )            
              )


              ;; Цена покупки
              (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}
                (dom/a {:className "list-group-item" :style {:text-align "right"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                  (dom/h4 {:className "list-group-item-heading"} (if (> (:wap item) 1) (gstring/format "%.2f" (:wap item))  (subs (str (:wap item)) 0 5) )    )
                )
              )

              ;; Last Price
              (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}
                (dom/a {:className "list-group-item" :style {:text-align "right"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                  (dom/h4 {:className "list-group-item-heading"} (if (> (:price item) 1) (gstring/format "%.2f" (:price item))  (subs (str (:price item)) 0 5) ))
                )
              )

              ;;Дюрация
              (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}

                (dom/a {:className "list-group-item" :style {:text-align "right"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                  (dom/h4 {:className "list-group-item-heading"} (gstring/format "%.2f" (if (nil? (:duration sec)) 0 (:duration sec)) ))
                )
              )

              ;;Put date
              (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px" :visibility (if (> (.indexOf (tf/unparse custom-formatter (tc/from-long (tc/to-long putdate))) "1900") 0)  "hidden" "visible")} }
                (dom/a {:className "list-group-item" :style {:text-align "right"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                  (dom/h4 {:className "list-group-item-heading"} (tf/unparse custom-formatter (tc/from-long (tc/to-long putdate)))
                  )
                )
              )

              ;; Currency
              (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}

                (dom/a {:className "list-group-item" :style {:text-align "right"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                  (dom/h4 {:className "list-group-item-heading"} (:currency item)    )
                )            
              )

              ;; USD P/L, %%
              (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px" :padding-top "10px"}}
                (dom/div {:className "progress"}
                  (dom/div {:className (str "progress-bar" (if (< (:usdvalue item) usdcosts) " progress-bar-danger" ""))  :role "progresbar" :aria-valuenow (gstring/format "%.2f" (* 100.0 (/ (- (:usdvalue item) usdcosts) usdcosts))) :aria-valuemin "0" :aria-valuemax "100" :style {:color "black" :width (gstring/format "%.2f" (* 100.0 (/ (- (:usdvalue item) usdcosts) usdcosts))) }}
                    (dom/span {:style {:position "absolute" :display "block" :width "100%"}} (gstring/format "%.2f" (* 100.0 (/ (- (:usdvalue item) usdcosts) usdcosts))))                
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

              ;;;Yield
              (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}

                (dom/a {:className "list-group-item" :style {:text-align "right"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                  (dom/h4 {:className "list-group-item-heading"} (gstring/format "%.2f" (if (nil? (:yield sec)) 0 (:yield sec))))
                )
              )


              ;; RUB P/L
              ;; (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px" :padding-top "10px"}}
              ;;   (dom/div
              ;;     (dom/div 
              ;;       (dom/span {:style {:position "absolute" :padding-right "5px" :text-align "right" :display "block" :width "100%"}} (sbercore/split-thousands (str (.round js/Math  (if (= isrusbond true) (/ (* 1000.0 (-  (:currubprice item) (:waprub item)) (:amount item))  100.0)  (if (= isbond true) (/ (* (-  (:currubprice item) (:waprub item)) (:amount item))  100.0)  (* (-  (:currubprice item) (:waprub item)) (:amount item))))   ))))

              ;;     )
              ;;   )
              ;; )

              ;;Coupon date
              (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px" :visibility (if (> (.indexOf (tf/unparse custom-formatter (tc/from-long (tc/to-long dvddate))) "1900") 0)  "hidden" "visible")} }
                (dom/a {:className "list-group-item" :style {:text-align "right"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                  (dom/h4 {:className "list-group-item-heading"} (tf/unparse custom-formatter (tc/from-long (tc/to-long (if (nil? (:dvddate sec)) #inst "1900-01-01T00:00:00.000-00:00" dvddate))))
                  )
                )
              )

              ;; USD P/L
              ;; (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px" :padding-top "10px"}}
              ;;   (dom/div
              ;;     (dom/div 
              ;;       (dom/span {:style {:position "absolute" :padding-right "5px" :text-align "right" :display "block" :width "100%"}} (sbercore/split-thousands (str (.round js/Math (/ (* (if (= isrusbond true) 1000.0 1.0) (-  (:price item) (:wap item))  (:amount item) newfxrate) (* usdrate (if (= isbond true) 100.0 1.0))                                                                                                                           )))))
              ;;     )
              ;;   )
              ;; )
            )

          )

          )

          (sort (comp comp-positions) (filter (fn [x] (let [
            sec (first (filter (fn[y] (if (= (:id x) (:id y) ) true false)) (:securities @sbercore/app-state)))
            seccode (:acode sec)
            assettype (:assettype sec)]
            (if (or (not= 5 assettype) (<= (:amount x) 0) 
                    (= false (str/includes? seccode (str/upper-case (:search @sbercore/app-state)) )) 
                )  false true)
                                                        ) ) (:positions ((keyword (:selectedclient @sbercore/app-state)) @sbercore/app-state))))
        )
      )
    )
  )
)




(defcomponent showforts-view [data owner]
  (render
    [_]
    (if (> (count (:positions ((keyword (:selectedclient @sbercore/app-state)) @sbercore/app-state) )) 0)

      (dom/div {:className "list-group" :style {:display "block"}}
        (map (fn [item]
          (let [sec (first (filter (fn[x] (if (= (:id x) (:id item) ) true false)) (:securities @sbercore/app-state)))
                seccur (:currency sec)
                isbond (if (= 5 (:assettype sec)) true false)

                usdrate (:price (first (filter (fn [x] (if (= "USD" (:acode x)) true false)) (:securities @sbercore/app-state))))

                fxrate (if (or (= "RUB" seccur) (= "RUR" seccur)) 1 (:price  (first (filter (fn[x] (if( = (:acode x) (if (= seccur "GBX") "GBP" seccur)) true false)) (:securities @sbercore/app-state)))))

                newfxrate (if (= 0 (compare "GBX" seccur)) (/ fxrate 100.) fxrate)
                ;;tr1 (.log js/console "portfolio usd value: "  portfusdvalue)
            ]

            (dom/div {:className "row" :style {:margin-left "0px" :margin-right "0px"}} 
              (dom/div {:className "col-xs-2 col-md-2" :style {:padding-left "0px" :padding-right "0px"}}
                (dom/a {:className "list-group-item" :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                  (dom/h4  #js {:className "list-group-item-heading" :dangerouslySetInnerHTML #js {:__html (:acode sec)}} nil)
                )
              )

              ;;Количество контрактов
              (dom/div {:className "col-xs-2 col-md-2" :style {:padding-left "0px" :padding-right "0px"}}            
                (dom/a {:className "list-group-item" :style {:padding-left "3px" :padding-right "3px" :text-align "right"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                  (dom/h4 {:className "list-group-item-heading"} (sbercore/split-thousands (str (:amount item)))   )
                )            
              )


              ;; Цена покупки
              (dom/div {:className "col-xs-2 col-md-2" :style {:padding-left "0px" :padding-right "0px"}}
                (dom/a {:className "list-group-item" :style {:text-align "right"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                  (dom/h4 {:className "list-group-item-heading"} (sbercore/split-thousands  (if (> (:wap item) 1) (gstring/format "%.2f" (:wap item))  (subs (str (:usdvalue item)) 0 5))))
                )
              )

              ;; Last Price
              (dom/div {:className "col-xs-2 col-md-2" :style {:padding-left "0px" :padding-right "0px"}}
                (dom/a {:className "list-group-item" :style {:text-align "right"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                  (dom/h4 {:className "list-group-item-heading"} (sbercore/split-thousands (if (> (:price item) 1) (gstring/format "%.2f" (:price item))  (subs (str (:price item)) 0 5))) )
                )
              )

              ;; Currency
              (dom/div {:className "col-xs-2 col-md-2" :style {:padding-left "0px" :padding-right "0px"}}
                (dom/a {:className "list-group-item" :style {:text-align "right"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                  (dom/h4 {:className "list-group-item-heading"} (:currency item))
                )
              )


              ;; USD Currency P/L, %%
              (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px" :padding-top "10px"}}
                (dom/div {:className "progress"}
                  (dom/div {:className (str "progress-bar" (if (< (:usdvalue item) (* (:amount item) (:wapusd item))) " progress-bar-danger" ""))  :role "progresbar" :aria-valuenow (str (.round js/Math (.abs js/Math (* 100.0 (/ (- (:usdvalue item) (* (:amount item) (:wapusd item))) (* (:amount item) (:wapusd item))))))) :aria-valuemin "0" :aria-valuemax "100" :style {:color "black" :width (str (.round js/Math (.abs js/Math (* 100.0 (/ (- (:usdvalue item) (* (:amount item) (:wapusd item) ) ) (* (:amount item) (:wapusd item) ))))) "%") }}
                    (dom/span {:style {:position "absolute" :display "block" :width "100%"}} (.round js/Math (* 100.0 (/ (- (:usdvalue item) (* (:amount item) (:wapusd item) ) ) (* (:amount item) (:wapusd item) ))  )) )                
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
            )
          )
          )

          (sort (comp comp-positions)
            (filter
              (fn [x]
                (let [
                  sec (first (filter (fn[y] (if (= (:id x) (:id y) ) true false)) (:securities @sbercore/app-state)))
                  seccode (:acode sec)
                  assettype (:assettype sec)]
                  (if (or (not= 15 assettype)
                          (<= (:amount x) 0) 
                          (= false (str/includes? seccode (str/upper-case (:search @sbercore/app-state)) ))
                      )  false true)
                ))
              (:positions ((keyword (:selectedclient @sbercore/app-state)) @sbercore/app-state))
            )
          )
        )
      )
    )
  )
)



(defn showtrans [security trans]
  (map (fn [item]
    (let [sec (first (filter (fn[x] (if (= (:id x) security ) true false)) (:securities @sbercore/app-state)))
          isrusbond (if (and (= 5 (:assettype sec))
                                   (= "RU" (subs (:isin sec) 0 2))
                                   )  true false)
          isbond (if (and (= 5 (:assettype sec))
                                   ;(= "RU" (subs (:isin security) 0 2))
                                   )  true false)
      ]
      (dom/div {:className "row" :style {:margin-left "0px" :margin-right "0px"}}
        ;; Инструмент
        (dom/div {:className "col-xs-2 col-md-2" :style {:padding-left "0px" :padding-right "0px"}}
          (dom/a {:className "list-group-item" :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id sec)) }
            (dom/h4  #js {:className "list-group-item-heading" :dangerouslySetInnerHTML #js {:__html (:acode sec)}} nil)
          )
        )

        ;; Покупка / Продажа
        (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}
          (dom/a {:className "list-group-item" :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id sec)) :style {:background-color (if (= (:direction item) "B") "lightgreen" "lightpink")}}
            (dom/h4 {:className "list-group-item-heading"} (if (= (:direction item) "B") "Покупка" "Продажа"))
          )
        )

        ;;Номинал
        (dom/div {:className "col-xs-2 col-md-2" :style {:padding-left "0px" :padding-right "0px"}}
          (dom/a {:className "list-group-item" :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id sec)) }
            (dom/h4 {:className "list-group-item-heading" :style {:text-align "right"}} (sbercore/split-thousands (str (:nominal item))))
          )
        )

        ;; Currency
        (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}
          (dom/a {:className "list-group-item" :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id sec)) }
            (dom/h4 {:className "list-group-item-heading"} (:currency sec))
          )
        )

        ;; Цена
        (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}
          (dom/a {:className "list-group-item" :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id sec))}
            (dom/h4 {:className "list-group-item-heading" :style {:text-align "right"}} (if (> (:wap item) 1) (sbercore/split-thousands (gstring/format "%.2f" (:wap item)))  (subs (str (:wap item)) 0 5)))
          )
        )

        ;; Стоимость в валюте бумаги
        (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}
          (dom/a {:className "list-group-item" :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id sec))}
            (dom/h4 {:className "list-group-item-heading" :style {:text-align "right"}} (sbercore/split-thousands (gstring/format "%.2f"  (* (:nominal item) (:wap item) (if (= true isbond) 0.01 1.0) (if (= true isrusbond) 1000.0 1.0)))))
          )
        )


        ;; Стоимость в долларах США
        (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}
          (dom/a {:className "list-group-item" :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id sec))}
            (dom/h4 {:className "list-group-item-heading" :style {:text-align "right"}} (sbercore/split-thousands (gstring/format "%.2f" (* (:nominal item) (:wapusd item) (if (= true isbond) 0.01 1.0) (if (= true isrusbond) 1000.0 1.0)))))
          )
        )

        ;; Стоимость в рублях РФ
        (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}
          (dom/a {:className "list-group-item" :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id sec)) }
            (dom/h4 {:className "list-group-item-heading" :style {:text-align "right"}} (sbercore/split-thousands (gstring/format "%.2f" (* (:nominal item) (:waprub item) (if (= true isbond) 0.01 1.0) (if (= true isrusbond) 1000.0 1.0)))))
          )
        )

        ;; Дата сделки
        (dom/div {:className "col-xs-2 col-md-2" :style {:padding-left "0px" :padding-right "0px"}}
          (dom/a {:className "list-group-item" :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id sec))}
            (dom/h4 {:className "list-group-item-heading" :style {:text-align "right"}} (tf/unparse custom-formatter (tc/from-long (tc/to-long (tf/parse custom-formatter (:date item))))) )
          )          
        )
      )
    )
    )
    (sort (comp comp-trans) (filter (fn [x] (let [
      a 1]
      (if (= 1 1)  true true) ) ) trans))
  )
)


(defcomponent showdeals-view [data owner]
  (render
    [_]
    (if (> (count (:deals ((keyword (:selectedclient @sbercore/app-state)) @sbercore/app-state) )) 0)
      (dom/div {:className "list-group" :style {:display "block"}}
        (map (fn [item]
          (let [sec (first (filter (fn[x] (if (= (:id x) (:security item) ) true false)) (:securities @sbercore/app-state)))

                ;tr1 (println sec)
                seccur (:currency sec)
                isbond (if (= 5 (:assettype sec)) true false)

                usdrate (:price (first (filter (fn [x] (if (= "USD" (:acode x)) true false)) (:securities @sbercore/app-state))))

                fxrate (if (or (= "RUB" seccur) (= "RUR" seccur)) 1 (:price  (first (filter (fn[x] (if( = (:acode x) (if (= seccur "GBX") "GBP" seccur)) true false)) (:securities @sbercore/app-state)))))

                isrusbond (if (and (= 5 (:assettype sec))
                                   (= "RU" (subs (:isin sec) 0 2))
                                   )  true false)


                ;tr1 (if (= false isrusbond) (println (str (:acode sec) " не российский бонд: " (:usdvalue item) " costs: " usdcosts " usdvalue: "  " wapusd: " (:wapusd item) )))
                isbond (if (and (= 5 (:assettype sec))
                                   ;(= "RU" (subs (:isin security) 0 2))
                                   )  true false)
                newfxrate (if (= 0 (compare "GBX" seccur)) (/ fxrate 100.) fxrate)
                ;tr1 (.log js/console "currency: "  seccur " rate:" newfxrate)                
            ]
            (showtrans (:security item) (:transactions item))
          )
          )
          (sort (comp comp-deals) (filter (fn [x] (let [
            sec (first (filter (fn[y] (if (= (:security x) (:id y) ) true false)) (:securities @sbercore/app-state)))
             seccode (:acode sec)
            ]
            (if (and (= true (str/includes? seccode (str/upper-case (:search @sbercore/app-state)) )) (= 1 1))   true false) ) ) (:deals ((keyword (:selectedclient @sbercore/app-state)) @sbercore/app-state))))
        )
      )
      (dom/div {:style {:background "white"}}
        (dom/p {:style {:text-align "center"}}
          (dom/img {:src "images/loader.gif"})
        )        
      )
    )
  )
)


(defn onMount [data]
  (getPositions)
  (if (nil? (:deals ((keyword (:selectedclient @sbercore/app-state)) @sbercore/app-state)))
    (sbercore/getDeals)
  )
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


        (if (> (count (:positions ((keyword (:selectedclient @sbercore/app-state)) @sbercore/app-state) )) 0)
          (dom/div
            (dom/div {:style {:margin-top "70px"} :className "panel panel-info"}
              (dom/div {:className "panel-heading"}
                (dom/div (assoc stylerow  :className "row" )
                  (dom/div {:className "col-xs-12 col-md-12" :style {:text-align "center"}} "Cash позиция")
                )
              )
            )

            (dom/div  {:className "panel panel-primary"}
              (dom/div {:className "panel-heading"}
                (dom/div (assoc stylerow  :className "row" )
                  (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "")
                  (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "")
                  (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "Доллар США")
                  (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "")
                  (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "")
                  (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "Рубль")
                  (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "")
                  (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "")
                  (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "Евро")
                  (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "")
                  (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "")
                  (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "Фунт")
                )
              )
              (dom/div {:className "panel-body"}
                (om/build showcash-view  data {})
                ;(om/build showpositions-total-view  data {})
              )
            )



           
            (dom/div {:className "panel panel-info"}
              (dom/div {:className "panel-heading"}
                (dom/div (assoc stylerow  :className "row" )
                  (dom/div {:className "col-xs-12 col-md-12" :style {:text-align "center"} } "Акции")
                )
              )
            )
            (dom/div  {:className "panel panel-primary"}
              (dom/div {:className "panel-heading"}
                (dom/div (assoc stylerow  :className "row" )
                  (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "Security Name")
                  (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "Share, %")
                  (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "Amount")
                  (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "Цена покупки")
                  (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "Last price")
                  (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "Target price")
                  (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "ANR")
                  (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "Currency")
                  (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "P/L USD, %")
                  (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "P/L RUB, %")
                  (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "Yield")
                  (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "Ex-div date")
                )
              )
              (dom/div {:className "panel-body"}
                (om/build showstocks-view  data {})
                ;(om/build showpositions-total-view  data {})
              )
            )

            (dom/div {:style {:margin-top "30px"} :className "panel panel-info"}
              (dom/div {:className "panel-heading"}
                (dom/div (assoc stylerow  :className "row" )
                  (dom/div {:className "col-xs-12 col-md-12" :style {:text-align "center"}} "Облигации")
                )
              )
            )
            (dom/div  {:className "panel panel-primary" :style {:margin-top "0px" :margin-left "0px" :margin-right "0px"}}
              (dom/div {:className "panel-heading"}
                (dom/div (assoc stylerow  :className "row" )
                  (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "Security Name")
                  (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "Доля в портфеле, %")
                  (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "Номинал")
                  (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "Цена покупки")
                  (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "Last price")
                  (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "Дюрация")
                  (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "Put Date")
                  (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "Currency")
                  (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "P/L USD, %")
                  (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "P/L RUB, %")
                  (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "Yield")
                  (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "Coupon date")
                )
              )
              (dom/div {:className "panel-body"}
                (om/build showbonds-view  data {})
                ;(om/build showpositions-total-view  data {})
              )
            )


            (dom/div {:className "panel panel-info"}
              (dom/div {:className "panel-heading"}
                (dom/div (assoc stylerow  :className "row" )
                  (dom/div {:className "col-xs-12 col-md-12" :style {:text-align "center"} } "FORTS")
                )
              )
            )
            (dom/div  {:className "panel panel-primary"}
              (dom/div {:className "panel-heading"}
                (dom/div (assoc stylerow  :className "row" )
                  (dom/div {:className "col-xs-2 col-md-2" :style {:text-align "center"}} "Security Name")
                  (dom/div {:className "col-xs-2 col-md-2" :style {:text-align "center"}} "Amount")
                  (dom/div {:className "col-xs-2 col-md-2" :style {:text-align "center"}} "Цена покупки")
                  (dom/div {:className "col-xs-2 col-md-2" :style {:text-align "center"}} "Last price")
                  (dom/div {:className "col-xs-2 col-md-2" :style {:text-align "center"}} "Currency")
                  (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "P/L USD, %")
                  (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "P/L RUB, %")
                )
              )
              (dom/div {:className "panel-body"}
                (om/build showforts-view  data {})
              )
            )


            (dom/div {:style {:margin-top "30px"} :className "panel panel-info"}
              (dom/div {:className "panel-heading"}
                (dom/div (assoc stylerow  :className "row" )
                  (dom/div {:className "col-xs-12 col-md-12" :style {:text-align "center"}} "История сделок")
                )
              )
            )
            (dom/div  {:className "panel panel-primary"}
              (dom/div {:className "panel-heading"}
                (dom/div (assoc stylerow  :className "row" )
                  (dom/div {:className "col-xs-2 col-md-2" :style {:text-align "center"}}  "Security Name")
                  (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "Direction")
                  (dom/div {:className "col-xs-2 col-md-2" :style {:text-align "center"}} "Nominal")
                  (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "Currency")
                  (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "Price")
                  (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "Value")
                  (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "USD Value")
                  (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "RUB Value")
                  (dom/div {:className "col-xs-2 col-md-2" :style {:text-align "center"}} "Date")
                )
              )
              (dom/div {:className "panel-body"}
                (om/build showdeals-view data {})
              )
            )
          )
          (dom/div {:style {:background "white"}}
            (dom/p {:style {:text-align "center"}}
              (dom/img {:src "images/loader.gif"})
            )        
          )
          ;(if (nil? (:selectedclient @sbercore/app-state)))
        )
      )
    )
  )
)




(sec/defroute positions-page "/positions" []
  (om/root positions-view
           sbercore/app-state
           {:target (. js/document (getElementById "app"))}))
