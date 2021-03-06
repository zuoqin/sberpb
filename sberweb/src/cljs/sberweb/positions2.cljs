(ns sberweb.positions2 (:use [net.unit8.tower :only [t]])
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

(defonce app-state (atom  {:sort-deals-list {:column 8 :direction 0}}))

(def custom-formatter (tf/formatter "dd/MM/yyyy"))

(def custom-formatter1 (tf/formatter "MMM dd yyyy hh:mm:ss"))

(def ch (chan (dropping-buffer 2)))

(defn abs [n] (max n (- n)))

(defn OnGetPositions [response]
   (swap! sbercore/app-state assoc :positions response  )
   (sbercore/setClientsDropDown)
   ;;(.log js/console (:client @app-state)) 
)


(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "something bad happened: " status " " status-text))
)




(defn getPositions [] 
  (if (not (nil? (:selectedclient @sbercore/app-state)))
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
)


(defn calc_portfusdvalue []
  (let [
         secsusdvalue (:usdvalue (reduce (fn [x y] {:usdvalue (+ (:usdvalue x) (:usdvalue y))}) (:positions ((keyword (:selectedclient @sbercore/app-state)) @sbercore/app-state))))
         usdrate (:price (first (filter (fn [x] (if (= "USD" (:acode x)) true false)) (:securities @sbercore/app-state))))
         eurrate (:price (first (filter (fn [x] (if (= "USD" (:acode x)) true false)) (:securities @sbercore/app-state))))
         gbprate (:price (first (filter (fn [x] (if (= "USD" (:acode x)) true false)) (:securities @sbercore/app-state))))
         cashusdvalue (+ (:usd (first (filter (fn [x] (if (= (:code x) (:selectedclient @sbercore/app-state)) true false)) (:clients @sbercore/app-state)))) (* eurrate (/ (:eur (first (filter (fn [x] (if (= (:code x) (:selectedclient @sbercore/app-state)) true false)) (:clients @sbercore/app-state)))) usdrate)) (* gbprate (/ (:gbp (first (filter (fn [x] (if (= (:code x) (:selectedclient @sbercore/app-state)) true false)) (:clients @sbercore/app-state)))) usdrate)) (* 1.0 (/ (:rub (first (filter (fn [x] (if (= (:code x) (:selectedclient @sbercore/app-state)) true false)) (:clients @sbercore/app-state)))) usdrate)))


         portfusdvalue (+ secsusdvalue cashusdvalue)

  ]
  portfusdvalue
  )
)


(defn comp-positions
  [position1 position2]
  (let [
    sec1 (first (filter (fn[x] (if (= (:id x) (:id position1) ) true false)) (:securities @sbercore/app-state)))
    sec2 (first (filter (fn[x] (if (= (:id x) (:id position2) ) true false)) (:securities @sbercore/app-state)))

    newprice1 (if (nil? (:price sec1)) 0.0001 (:price sec1))
    newprice2 (if (nil? (:price sec2)) 0.0001 (:price sec2))
    growth1 (* 100.0 (/ (- (if (nil? (:target sec1)) 0.0 (:target sec1)) newprice1) newprice1))
    growth2 (* 100.0 (/ (- (if (nil? (:target sec2)) 0.0 (:target sec2)) newprice2) newprice2))


  ]
    (if (= (:assettype sec1) 5)
      (if (or
           (< (:duration sec1) (:duration sec2))
           (and (= (:duration sec1) (:duration sec2)) (> (compare (:acode (first (filter (fn[x] (if (= (:id x) (:id position1) ) true false)) (:securities @sbercore/app-state)))) (:acode (first (filter (fn[x] (if (= (:id x) (:id position2) ) true false)) (:securities @sbercore/app-state))))) 0))
        ) 
          true
          false
      )
      (if (or
           (> growth1 growth2)
           (and (= growth1 growth2) (> (compare (:acode (first (filter (fn[x] (if (= (:id x) (:id position1) ) true false)) (:securities @sbercore/app-state)))) (:acode (first (filter (fn[x] (if (= (:id x) (:id position2) ) true false)) (:securities @sbercore/app-state))))) 0))
        ) 
          true
          false
      )
    )
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
  (let [
    sec1 (first (filter (fn[y] (if (= (:security deal1) (:id y) ) true false)) (:securities @sbercore/app-state)))
    sec2 (first (filter (fn[y] (if (= (:security deal2) (:id y) ) true false)) (:securities @sbercore/app-state)))
    ;tr1 (.log js/console (str sec))
    seccode1 (:acode sec1)
    seccode2 (:acode sec2)
            ]
    (case (:column (:sort-deals-list @app-state)) 
      0 (if (or       
          (< (compare seccode1 seccode2) 0)
          (and (> (tc/to-long (tf/parse custom-formatter (:date deal1))) (tc/to-long (tf/parse custom-formatter (:date deal2)))) (= (compare seccode1 seccode2) 0))
          )
          true
          false
        )

      1 (if (or
          (< (:direction deal1) (:direction deal2))

          (and (= (:direction deal1) (:direction deal2)) (> (tc/to-long (tf/parse custom-formatter (:date deal1))) (tc/to-long (tf/parse custom-formatter (:date deal2)))) ) 
          (and (= (:direction deal1) (:direction deal2)) (= (tc/to-long (tf/parse custom-formatter (:date deal1))) (tc/to-long (tf/parse custom-formatter (:date deal2)))) (> (compare seccode1 seccode2) 0))
          )
          true
          false
        )

      2 (if (or
          (< (abs (:nominal deal1))  (abs (:nominal deal2)) )

          (and (= (abs (:nominal deal1))  (abs (:nominal deal2)) ) (> (tc/to-long (tf/parse custom-formatter (:date deal1))) (tc/to-long (tf/parse custom-formatter (:date deal2)))) ) 
          (and (= (abs (:nominal deal1))  (abs (:nominal deal2)) ) (= (tc/to-long (tf/parse custom-formatter (:date deal1))) (tc/to-long (tf/parse custom-formatter (:date deal2)))) (> (compare seccode1 seccode2) 0))
          )
          true
          false
        )
      3 (if (or
          (< (:currency sec1)  (:currency sec2) )

          (and (= (:currency sec1)  (:currency sec2) ) (> (tc/to-long (tf/parse custom-formatter (:date deal1))) (tc/to-long (tf/parse custom-formatter (:date deal2)))) ) 
          (and (= (:currency sec1)  (:currency sec2) ) (= (tc/to-long (tf/parse custom-formatter (:date deal1))) (tc/to-long (tf/parse custom-formatter (:date deal2)))) (> (compare seccode1 seccode2) 0))
          )
          true
          false
        )

      4 (if (or
          (< (:wap deal1)  (:wap deal2) )

          (and (= (:wap deal1)  (:wap deal2) ) (> (tc/to-long (tf/parse custom-formatter (:date deal1))) (tc/to-long (tf/parse custom-formatter (:date deal2)))) ) 
          (and (= (:wap deal1)  (:wap deal2) ) (= (tc/to-long (tf/parse custom-formatter (:date deal1))) (tc/to-long (tf/parse custom-formatter (:date deal2)))) (> (compare seccode1 seccode2) 0))
          )
          true
          false
        )

      8 (if (or       
          (> (tc/to-long (tf/parse custom-formatter (:date deal1))) (tc/to-long (tf/parse custom-formatter (:date deal2))))
          (and (= (tc/to-long (tf/parse custom-formatter (:date deal1))) (tc/to-long (tf/parse custom-formatter (:date deal2)))) (> (compare seccode1 seccode2) 0))
          )
          true
          false
        )
    )
  )
)

(defcomponent showstocks-total-view [data owner]
  (render [_]
    (let [portfusdvalue (calc_portfusdvalue)]
      (if (> (count (:positions ((keyword (:selectedclient @sbercore/app-state)) @sbercore/app-state) )) 0)
        (dom/div {:className "list-group" :style {:display "block"}}
          (dom/div {:className "row" :style {:margin-left "0px" :margin-right "0px"}} 
            (dom/div {:className "col-xs-2 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}
              (dom/h4 {:className "list-group-item-heading" :style {:margin-left "10px" :font-weight "700"}} "ВСЕГО: ")
            )

            ;Share %%
            (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px" :text-align "right" :font-weight "700"}}            
              (dom/h4 {:className "list-group-item-heading" :style {:margin-left "10px" :font-weight "700" :margin-right "10px"}} (sbercore/split-thousands 
                (gstring/format "%.2f" (/ (:usdvalue (reduce (fn [x y] {:usdvalue (+ (:usdvalue x) (:usdvalue y))} ) (filter (fn [x] (if (= (:assettype (first (filter (fn [y] (if (= (:id y) (:id x)) true false)) (:securities @sbercore/app-state))) ) 1) true false) ) (:positions ((keyword (:selectedclient @sbercore/app-state)) @sbercore/app-state))))) portfusdvalue 0.01)))))

            ;Amount
            ;;(dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}})


            ;USD Value
            (dom/div {:className "col-xs-2 col-md-2" :style {:padding-left "0px" :padding-right "0px" :text-align "right" :font-weight "700"}}
              (dom/h4 {:className "list-group-item-heading" :style {:margin-left "10px" :font-weight "700" :margin-right "0px"}} (sbercore/split-thousands 
                (gstring/format "%.0f" (:usdvalue (reduce (fn [x y] {:usdvalue (+ (:usdvalue x) (:usdvalue y))} ) (filter (fn [x] (if (= (:assettype (first (filter (fn [y] (if (= (:id y) (:id x)) true false)) (:securities @sbercore/app-state))) ) 1) true false) ) (:positions ((keyword (:selectedclient @sbercore/app-state)) @sbercore/app-state)))))))))

            ;; ;WAP Price
            ;; (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}



            ;; )

            ;Last Price
            ;; (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}



            ;; )
            ;Target Price
            (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}


            )

            ;ANR
            (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}


            )


            ;; USD Currency P/L, %%
            (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px" :padding-top "10px"}}

            )


            ;; RUB %% P/L
            (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px" :padding-top "10px"}}

            )

            ;; Yield
            (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px" :text-align "right" :font-size "18px"}}
              ;; (sbercore/split-thousands 
              ;;   (gstring/format "%.0f" (:sum (reduce (fn [x item] (let [

              ;;     sec (first (filter (fn[x] (if (= (:id x) (:id item) ) true false)) (:securities @sbercore/app-state)))
              ;;     seccur (:currency sec)

              ;;     isrusbond (if (and (= 5 (:assettype sec))
              ;;                        (= "RU" (subs (:isin sec) 0 2))
              ;;                        )  true false)

              ;;     isbond (if (and (= 5 (:assettype sec))
              ;;                        ;(= "RU" (subs (:isin security) 0 2))
              ;;                        )  true false)
              ;;     ]
              ;;     {:sum (+ (if (= isrusbond true) (/ (* 1000.0 (-  (:currubprice item) (:waprub item)) (:amount item))  100.0)  (if (= isbond true) (/ (* (-  (:currubprice item) (:waprub item)) (:amount item))  100.0)  (* (-  (:currubprice item) (:waprub item)) (:amount item)))) (:sum x))}  
              ;;   )  ) {:sum 0.0} (:positions ((keyword (:selectedclient @sbercore/app-state)) @sbercore/app-state)  ) )))
              ;; )
            )

            ;; Ex-div date
            (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px" :text-align "right" :font-size "18px"}}
    ;; (sbercore/split-thousands 
    ;;             (gstring/format "%.0f" (:sum (reduce (fn [x item] (let [

    ;;               sec (first (filter (fn[x] (if (= (:id x) (:id item) ) true false)) (:securities @sbercore/app-state)))
    ;;               seccur (:currency sec)
    ;;               isbond (if (= 5 (:assettype sec)) true false)
    ;;               usdrate (:price (first (filter (fn [x] (if (= "USD" (:acode x)) true false)) (:securities @sbercore/app-state))))Б

    ;;               fxrate (if (or (= "RUB" seccur) (= "RUR" seccur)) 1 (:price  (first (filter (fn[x] (if( = (:acode x) (if (= seccur "GBX") "GBP" seccur)) true false)) (:securities @sbercore/app-state)))))
    ;;               newfxrate (if (= 0 (compare "GBX" seccur)) (/ fxrate 100.) fxrate)
    ;;               isrusbond (if (and (= 5 (:assettype sec))
    ;;                                  (= "RU" (subs (:isin sec) 0 2))
    ;;                                  )  true false)

    ;;               isbond (if (and (= 5 (:assettype sec))
    ;;                                  ;(= "RU" (subs (:isin security) 0 2))
    ;;                                  )  true false)
    ;;               ]
    ;;               {:sum (+ (/ (* (if (= isrusbond true) 1000.0 1.0) (-  (:price item) (:wap item))  (:amount item) newfxrate) (* usdrate (if (= isbond true) 100.0 1.0)) )  (:sum x))}
    ;;             )  ) {:sum 0.0} (:positions ((keyword (:selectedclient @sbercore/app-state)) @sbercore/app-state)  ) )))
    ;;           )

              ;; (sbercore/split-thousands
              ;;  (gstring/format "%.0f" (:usdvalue (reduce (fn [x y] {:usdvalue (+ (:usdvalue x) (:usdvalue y))} ) (:positions ((keyword (:selectedclient @sbercore/app-state)) @sbercore/app-state)  )  ) ) )
              ;; )
            )
          )
        )
      )
    )

  )
)


(defcomponent showbonds-total-view [data owner]
  (render [_]
    (let [portfusdvalue (calc_portfusdvalue)]

      (if (> (count (:positions ((keyword (:selectedclient @sbercore/app-state)) @sbercore/app-state) )) 0)
        (dom/div {:className "list-group" :style {:display "block"}}
          (dom/div {:className "row" :style {:margin-left "0px" :margin-right "0px"}} 
            (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}
              (dom/h4 {:className "list-group-item-heading" :style {:margin-left "10px" :font-weight "700"}} "ВСЕГО: ")
            )

              ;Share %%
              (dom/div {:className "col-xs-2 col-md-1" :style {:padding-left "0px" :padding-right "0px" :text-align "right" :font-weight "700"}}            
                (dom/h4 {:className "list-group-item-heading" :style {:margin-left "10px" :font-weight "700" :margin-right "0px"}} (sbercore/split-thousands 
                  (gstring/format "%.2f" (/ (:usdvalue (reduce (fn [x y] {:usdvalue (+ (:usdvalue x) (:usdvalue y))} ) (filter (fn [x] (if (= (:assettype (first (filter (fn [y] (if (= (:id y) (:id x)) true false)) (:securities @sbercore/app-state))) ) 5) true false) ) (:positions ((keyword (:selectedclient @sbercore/app-state)) @sbercore/app-state))))) portfusdvalue 0.01)))))

            ;Amount
            ;;(dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}})

            ;USD Value
            (dom/div {:className "col-xs-4 col-md-2" :style {:padding-left "0px" :padding-right "0px" :text-align "right" :font-weight "700"}}
              (dom/h4 {:className "list-group-item-heading" :style {:margin-left "10px" :font-weight "700" :margin-right "0px"}} (sbercore/split-thousands 
                (gstring/format "%.0f" (:usdvalue (reduce (fn [x y] {:usdvalue (+ (:usdvalue x) (:usdvalue y))} ) (filter (fn [x] (if (= (:assettype (first (filter (fn [y] (if (= (:id y) (:id x)) true false)) (:securities @sbercore/app-state))) ) 5) true false) ) (:positions ((keyword (:selectedclient @sbercore/app-state)) @sbercore/app-state)))))))))

            ;WAP Price
            (dom/div {:className "hidden-xs col-md-1" :style {:padding-left "0px" :padding-right "0px"}})

            ;Last Price
            (dom/div {:className "hidden-xs col-md-1" :style {:padding-left "0px" :padding-right "0px"}})

            ;Target Price
            ;(dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}})


            (dom/div {:className "col-xs-3 col-md-2" :style {:padding-left "0px" :padding-right "0px" :text-align "right" :font-weight "700"}}
              (dom/h4 {:className "list-group-item-heading" :style {:margin-left "10px" :font-weight "700" :margin-right "0px"}} (sbercore/split-thousands 
                (gstring/format "%.0f" (:usdvalue (reduce (fn [x y] (let [sec (first (filter (fn [s] (if (= (:id s) (:id y)) true false)) (:securities @sbercore/app-state)))] {:usdvalue (+ (:usdvalue x) (/ (* (:usdvalue y) (+ (:price sec) (:target sec))) (:price sec)))})) {:usdvalue 0.0} (filter (fn [x] (if (= (:assettype (first (filter (fn [y] (if (= (:id y) (:id x)) true false)) (:securities @sbercore/app-state))) ) 5) true false) ) (:positions ((keyword (:selectedclient @sbercore/app-state)) @sbercore/app-state)))))))))


            ;; USD Currency P/L, %%
            (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px" :padding-top "10px"}}

            )


            ;; RUB %% P/L
            (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px" :padding-top "10px"}}

            )

            ;; Yield
            (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px" :text-align "right" :font-size "18px"}}
              ;; (sbercore/split-thousands 
              ;;   (gstring/format "%.0f" (:sum (reduce (fn [x item] (let [

              ;;     sec (first (filter (fn[x] (if (= (:id x) (:id item) ) true false)) (:securities @sbercore/app-state)))
              ;;     seccur (:currency sec)

              ;;     isrusbond (if (and (= 5 (:assettype sec))
              ;;                        (= "RU" (subs (:isin sec) 0 2))
              ;;                        )  true false)

              ;;     isbond (if (and (= 5 (:assettype sec))
              ;;                        ;(= "RU" (subs (:isin security) 0 2))
              ;;                        )  true false)
              ;;     ]
              ;;     {:sum (+ (if (= isrusbond true) (/ (* 1000.0 (-  (:currubprice item) (:waprub item)) (:amount item))  100.0)  (if (= isbond true) (/ (* (-  (:currubprice item) (:waprub item)) (:amount item))  100.0)  (* (-  (:currubprice item) (:waprub item)) (:amount item)))) (:sum x))}  
              ;;   )  ) {:sum 0.0} (:positions ((keyword (:selectedclient @sbercore/app-state)) @sbercore/app-state)  ) )))
              ;; )
            )

            ;; Ex-div date
            (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px" :text-align "right" :font-size "18px"}}
    ;; (sbercore/split-thousands 
    ;;             (gstring/format "%.0f" (:sum (reduce (fn [x item] (let [

    ;;               sec (first (filter (fn[x] (if (= (:id x) (:id item) ) true false)) (:securities @sbercore/app-state)))
    ;;               seccur (:currency sec)
    ;;               isbond (if (= 5 (:assettype sec)) true false)
    ;;               usdrate (:price (first (filter (fn [x] (if (= "USD" (:acode x)) true false)) (:securities @sbercore/app-state))))

    ;;               fxrate (if (or (= "RUB" seccur) (= "RUR" seccur)) 1 (:price  (first (filter (fn[x] (if( = (:acode x) (if (= seccur "GBX") "GBP" seccur)) true false)) (:securities @sbercore/app-state)))))
    ;;               newfxrate (if (= 0 (compare "GBX" seccur)) (/ fxrate 100.) fxrate)
    ;;               isrusbond (if (and (= 5 (:assettype sec))
    ;;                                  (= "RU" (subs (:isin sec) 0 2))
    ;;                                  )  true false)

    ;;               isbond (if (and (= 5 (:assettype sec))
    ;;                                  ;(= "RU" (subs (:isin security) 0 2))
    ;;                                  )  true false)
    ;;               ]
    ;;               {:sum (+ (/ (* (if (= isrusbond true) 1000.0 1.0) (-  (:price item) (:wap item))  (:amount item) newfxrate) (* usdrate (if (= isbond true) 100.0 1.0)) )  (:sum x))}
    ;;             )  ) {:sum 0.0} (:positions ((keyword (:selectedclient @sbercore/app-state)) @sbercore/app-state)  ) )))
    ;;           )

              ;; (sbercore/split-thousands
              ;;  (gstring/format "%.0f" (:usdvalue (reduce (fn [x y] {:usdvalue (+ (:usdvalue x) (:usdvalue y))} ) (:positions ((keyword (:selectedclient @sbercore/app-state)) @sbercore/app-state)  )  ) ) )
              ;; )
            )
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

        (dom/div {:className "col-xs-3 col-md-3" :style {:padding-left "0px" :padding-right "0px" :background-color (if (< (:usd (first (filter (fn [x] (if (= (:code x) (:selectedclient @sbercore/app-state)) true false)) (:clients @sbercore/app-state)))) 0) "lightpink" "white")} }
          (dom/h4 {:className "list-group-item-heading" :style {:text-align "right"}} (sbercore/split-thousands (str (:usd (first (filter (fn [x] (if (= (:code x) (:selectedclient @sbercore/app-state)) true false)) (:clients @sbercore/app-state))))))
          )
        )

        (dom/div {:className "col-xs-3 col-md-3" :style {:padding-left "0px" :padding-right "0px" :background-color (if (< (:rub (first (filter (fn [x] (if (= (:code x) (:selectedclient @sbercore/app-state)) true false)) (:clients @sbercore/app-state)))) 0) "lightpink" "white")}}
          (dom/h4 {:className "list-group-item-heading" :style {:text-align "right"}} (sbercore/split-thousands (str (:rub (first (filter (fn [x] (if (= (:code x) (:selectedclient @sbercore/app-state)) true false)) (:clients @sbercore/app-state))))))
          )
        )

        (dom/div {:className "col-xs-3 col-md-3" :style {:padding-left "0px" :padding-right "0px" :background-color (if (< (:eur (first (filter (fn [x] (if (= (:code x) (:selectedclient @sbercore/app-state)) true false)) (:clients @sbercore/app-state)))) 0) "lightpink" "white")}}
          (dom/h4 {:className "list-group-item-heading" :style {:text-align "right"}} (sbercore/split-thousands (str (:eur (first (filter (fn [x] (if (= (:code x) (:selectedclient @sbercore/app-state)) true false)) (:clients @sbercore/app-state))))))
          )
        )

        (dom/div {:className "col-xs-3 col-md-3" :style {:padding-left "0px" :padding-right "0px" :background-color (if (< (:gbp (first (filter (fn [x] (if (= (:code x) (:selectedclient @sbercore/app-state)) true false)) (:clients @sbercore/app-state)))) 0) "lightpink" "white")}}
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
          (let [
                sec (first (filter (fn[x] (if (= (:id x) (:id item) ) true false)) (:securities @sbercore/app-state)))
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
                portfusdvalue (calc_portfusdvalue)

                potential (* 100.0 (/ (- (if (nil? (:target sec)) 0.0 (:target sec)) (:price item)) (:price item)))
                maxpotential (apply max (map (fn [position]
                  (let [
                        sec (first (filter (fn[x] (if (= (:id x) (:id position) ) true false)) (:securities @sbercore/app-state)))
                        newprice (if (nil? (:price sec)) 0.0001 (:price sec))
                        growth (* 100.0 (/ (- (if (nil? (:target sec)) 0.0 (:target sec)) newprice) newprice))  
]
                   growth)) (:positions ((keyword (:selectedclient @sbercore/app-state)) @sbercore/app-state))))

                ;tr1 (.log js/console "maxpotential: "  maxpotential " potential: " potential)
            ]

            (dom/div {:className "row" :style {:margin-left "0px" :margin-right "0px"}} 
              (dom/div {:className "col-xs-2 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}
                (dom/a {:className "list-group-item" :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                  (dom/h4 {:className "list-group-item-heading" :style {:white-space "nowrap"}} (:acode sec))
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
                  (dom/h4 {:className "list-group-item-heading" :style {:white-space "nowrap"}} (sbercore/split-thousands (str (:amount item)))   )
                )            
              )


              ;;USD Value
              (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}
                (dom/a {:className "list-group-item" :style {:text-align "right"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                  (dom/h4 {:className "list-group-item-heading"} (sbercore/split-thousands (str (.round js/Math (/ (* (if (= isrusbond true) 1000.0 1.0) (:price item)  (:amount item) newfxrate) (* usdrate (if (= isbond true) 100.0 1.0)))))))                  
                )
              )


              ;; Цена покупки
              (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}
                (dom/a {:className "list-group-item" :style {:text-align "right"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                  (dom/h4 {:className "list-group-item-heading" :style {:white-space "nowrap"}} (str (sbercore/split-thousands  (if (> (:wap item) 1) (gstring/format "%.2f" (:wap item))  (subs (str (:usdvalue item)) 0 5))) " " (case (:currency item) "USD" "$" "GBP" "£" "GBX" "£p" "EUR" "€" "RUB" "₽" "RUR" "₽" "")) )
                )
              )

              ;; Last Price
              (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}
                (dom/a {:className "list-group-item" :style {:text-align "right"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                  (dom/h4 {:className "list-group-item-heading"} (sbercore/split-thousands (if (> (:price item) 1) (gstring/format "%.2f" (:price item))  (subs (str (:price item)) 0 5))) )
                )
              )

              ;; Потенциал роста
              (dom/div {:className "plprdiv col-xs-1 col-md-1"}
                (dom/div {:className "progress"}
                  (dom/div {:className (str "progress-bar" (if (< (if (nil? (:target sec)) 0.0 (:target sec)) (:price item)) " progress-bar-danger" ""))  :role "progresbar" :aria-valuenow (str (.round js/Math (* 100.0 (/ (- (if (nil? (:target sec)) 0.0 (:target sec)) (:price item)) (:price item))  ))) :aria-valuemin "0" :aria-valuemax (str maxpotential) :style {:color "black" :width (str (gstring/format "%.0f" (abs (* 100.0 (/ potential maxpotential))) ) "%") }}
                    (dom/span {:className "plprogress" :style {:position "absolute" :display "block" :width (if (> (/ potential maxpotential) 0.1) (str (gstring/format "%.0f" (abs (* 100.0 (/ potential maxpotential))) ) "%") "100%" )  :color (if (and (> potential 0) (> (/ potential maxpotential) 0.1) )  "white" "black") :font-weight "700"} } (str (.round js/Math potential) "%") )
                  )
                )
              )

              ;;Target price
              ;; (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px" :visibility (if (> (:target sec) 0) "visible" "hidden")}}
              ;;   (dom/a {:className "list-group-item" :style {:text-align "right"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
              ;;     (dom/h4 {:className "list-group-item-heading"} (if (and (> (:target sec) 0) )  (if (> (:price item) 1) (sbercore/split-thousands (gstring/format "%.0f" (if (nil? (:target sec)) 0.0 (:target sec))))  (subs (str (if (nil? (:target sec)) 0.0 (:target sec))) 0 5)) ""))
              ;;   )            
              ;; )

              ;;Рейтинг аналитиков
              (dom/div {:className "hidden-xs col-md-1" :style {:padding-left "0px" :padding-right "0px"}}
                (dom/a {:className "list-group-item" :style {:text-align "right"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                  (dom/h4 {:className "list-group-item-heading"} (gstring/format "%.2f" (if (nil? (:anr sec)) 0.0 (:anr sec)))
                  )
                )
              )


              ;; Currency
              ;; (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}
              ;;   (dom/a {:className "list-group-item" :style {:text-align "right"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
              ;;     (dom/h4 {:className "list-group-item-heading"} (:currency item))
              ;;   )
              ;; )


              ;; USD Currency P/L, %%
              (dom/div {:className "plprdiv col-xs-1 col-md-1"}
                (dom/div {:className "progress"}
                  (dom/div {:className (str "progress-bar" (if (< (:usdvalue item) (* (:amount item) (:wapusd item))) " progress-bar-danger" ""))  :role "progresbar" :aria-valuenow (str (.round js/Math (.abs js/Math (* 100.0 (/ (- (:usdvalue item) (* (:amount item) (:wapusd item))) (* (:amount item) (:wapusd item))))))) :aria-valuemin "0" :aria-valuemax "100" :style {:color "black" :width (str (.round js/Math (.abs js/Math (* 100.0 (/ (- (:usdvalue item) (* (:amount item) (:wapusd item) ) ) (* (:amount item) (:wapusd item) ))))) "%") }}
                    (dom/span {:className "plprogress" :style {:position "absolute" :display "block" :width "100%"}} (.round js/Math (* 100.0 (/ (- (:usdvalue item) (* (:amount item) (:wapusd item) ) ) (* (:amount item) (:wapusd item) ))  )) )                
                  )
                )
              )


              ;; RUB %% P/L
              (dom/div {:className "plprdiv hidden-xs col-md-1" :style {:padding-left "0px" :padding-right "0px" :padding-top "10px"}}
                (dom/div {:className "progress"}
                  (dom/div {:className (str "progress-bar" (if (< (:currubprice item) (:waprub item)) " progress-bar-danger" ""))  :role "progresbar" :aria-valuenow (str (.round js/Math (.abs js/Math (* 100.0 (/ (-  (:currubprice item) (:waprub item)) (:waprub item)))))) :aria-valuemin "0" :aria-valuemax "100" :style {:color "black" :width (str (.round js/Math (.abs js/Math (* 100.0 (/ (-  (:currubprice item) (:waprub item)) (:waprub item))))) "%") }}
                    (dom/span {:className "plprogress" :style {:position "absolute" :display "block" :width "100%"}} (.round js/Math (* 100.0 (/ (-  (:currubprice item) (:waprub item)) (:waprub item)))) ) 
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
              (dom/div {:className "col-xs-2 col-md-1" :style {:padding-left "0px" :padding-right "0px" :visibility (if (or (nil? (:dvddate sec)) (> (.indexOf (tf/unparse custom-formatter (tc/from-long (tc/to-long (:dvddate sec)))) "1900") 0) )   "hidden" "visible")}}
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
                portfusdvalue (calc_portfusdvalue)
            ]

            (dom/div {:className "row" :style {:margin-left "0px" :margin-right "0px"}} 
              (dom/div {:className "col-xs-2 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}
                (dom/a {:className "list-group-item" :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                  (dom/h4 {:className "list-group-item-heading" :style {:white-space "nowrap"}} (:acode sec))
                )

              )

              ;;Доля в портфеле
              (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}            
                (dom/a {:className "list-group-item" :style {:padding-left "3px" :padding-right "3px" :text-align "right"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                  (dom/h4 {:className "list-group-item-heading"} (gstring/format "%.2f" (* 100.0 (/ (:usdvalue item) portfusdvalue))))
                )            
              )

              ;;Номинал
              (dom/div {:className "col-xs-2 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}            
                (dom/a {:className "list-group-item" :style {:padding-left "3px" :padding-right "3px" :text-align "right"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                  (dom/h4 {:className "list-group-item-heading"} (sbercore/split-thousands (str (:amount item)))   )
                )            
              )


              ;;USD Value
              (dom/div {:className "col-xs-2 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}            
                (dom/a {:className "list-group-item" :style {:padding-left "3px" :padding-right "3px" :text-align "right"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                  (dom/h4 {:className "list-group-item-heading"} (sbercore/split-thousands (gstring/format "%.0f" (:usdvalue item))))))


              ;; Цена покупки
              (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}
                (dom/a {:className "list-group-item" :style {:text-align "right"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                  (dom/h4 {:className "list-group-item-heading" :style {:white-space "nowrap"}} (str (if (> (:wap item) 1) (gstring/format "%.2f" (:wap item))  (subs (str (:wap item)) 0 5) )  ) ;;" " (case (:currency item) "USD" "$" "GBP" "£" "GBX" "£p" "EUR" "€" "RUB" "₽" "RUR" "₽" "")
                  )
                )
              )

              ;; Last Price
              (dom/div {:className "hidden-xs col-md-1" :style {:padding-left "0px" :padding-right "0px"}}
                (dom/a {:className "list-group-item" :style {:text-align "right"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                  (dom/h4 {:className "list-group-item-heading" :style {:white-space "nowrap"}} (str (if (> (:price item) 1) (gstring/format "%.2f" (:price item))  (subs (str (:price item)) 0 5) )))
                )
              )

              ;;Дюрация
              (dom/div {:className "hidden-xs col-md-1" :style {:padding-left "0px" :padding-right "0px"}}

                (dom/a {:className "list-group-item" :style {:text-align "right"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                  (dom/h4 {:className "list-group-item-heading"} (gstring/format "%.2f" (if (nil? (:duration sec)) 0 (:duration sec)) ))
                )
              )

              ;;Dirty price
              (dom/div {:className "col-xs-2 col-md-1" :style {:padding-left "0px" :padding-right "0px"} }
                (dom/a {:className "list-group-item" :style {:text-align "right"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                  (dom/h4 {:className "list-group-item-heading"} (sbercore/split-thousands (gstring/format "%.0f" (/ (* (:usdvalue item) (+ (:price sec) (:target sec))) (:price item)))))
                )
              )

              ;; Currency
              ;; (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}

              ;;   (dom/a {:className "list-group-item" :style {:text-align "right"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
              ;;     (dom/h4 {:className "list-group-item-heading"} (:currency item)    )
              ;;   )            
              ;; )

              ;; USD P/L, %%
              (dom/div {:className "plprdiv col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}
                (dom/div {:className "progress"}
                  (dom/div {:className (str "progress-bar" (if (< (:usdvalue item) usdcosts) " progress-bar-danger" ""))  :role "progresbar" :aria-valuenow (gstring/format "%.2f" (* 100.0 (/ (- (:usdvalue item) usdcosts) usdcosts))) :aria-valuemin "0" :aria-valuemax "100" :style {:color "black" :width (gstring/format "%.2f" (* 100.0 (/ (- (:usdvalue item) usdcosts) usdcosts))) }}
                    (dom/span {:className "plprogress" :style {:position "absolute" :display "block" :width "100%"}} (gstring/format "%.2f" (* 100.0 (/ (- (:usdvalue item) usdcosts) usdcosts))))                
                  )
                )
              )



              ;; RUB %% P/L
              (dom/div {:className "hidden-xs col-md-1" :style {:padding-left "0px" :padding-right "0px" :padding-top "10px"}}
                (dom/div {:className "progress"}
                  (dom/div {:className (str "progress-bar" (if (< (:currubprice item) (:waprub item)) " progress-bar-danger" ""))  :role "progresbar" :aria-valuenow (str (.round js/Math (.abs js/Math (* 100.0 (/ (-  (:currubprice item) (:waprub item)) (:waprub item)))))) :aria-valuemin "0" :aria-valuemax "100" :style {:color "black" :width (str (.round js/Math (.abs js/Math (* 100.0 (/ (-  (:currubprice item) (:waprub item)) (:waprub item))))) "%") }}
                    (dom/span {:className "plprogress" :style {:position "absolute" :display "block" :width "100%"}} (.round js/Math (* 100.0 (/ (-  (:currubprice item) (:waprub item)) (:waprub item)))))
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
              (dom/div {:className "hidden-xs col-md-1" :style {:padding-left "0px" :padding-right "0px" :visibility (if (> (.indexOf (tf/unparse custom-formatter (tc/from-long (tc/to-long dvddate))) "1900") 0)  "hidden" "visible")} }
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

                usdrate (:price (first (filter (fn [x] (if (= "USD" (:acode x)) true false)) (:securities @sbercore/app-state))))

                fxrate (if (or (= "RUB" seccur) (= "RUR" seccur)) 1 (:price  (first (filter (fn[x] (if( = (:acode x) (if (= seccur "GBX") "GBP" seccur)) true false)) (:securities @sbercore/app-state)))))


                ;;tr1 (.log js/console (str "amount= " (:amount item) " multiple= " (:multiple sec) " priceitem= " (:price item) " pricesec= " (:price sec))) 
                newfxrate (if (= 0 (compare "GBX" seccur)) (/ fxrate 100.) fxrate)

                usdprofit (if (= "USD" seccur) (* (:amount item) (:multiple sec) (- (:price item) (:wapusd item)))      (if (= "RUB" seccur) (/ (* (:amount item) (:multiple sec) (- (:currubprice item) (:waprub item))) usdrate) -7777777.777))

                rubprofit (if (= "USD" seccur) (* (:amount item) (:multiple sec) (- (:price item) (:wapusd item)) usdrate)   (if (= "RUB" seccur) (* (:amount item) (:multiple sec) (- (:currubprice item) (:waprub item))) -7777777.777))
            ]

            (dom/div {:className "row" :style {:margin-left "0px" :margin-right "0px"}} 
              (dom/div {:className "col-xs-2 col-md-2" :style {:padding-left "0px" :padding-right "0px"}}
                (dom/a {:className "list-group-item" :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                  (dom/h4 {:className "list-group-item-heading" :style {:white-space "nowrap"}} (:acode sec))
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


              ;; USD Currency P/L
              (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}
                (dom/a {:className "list-group-item" :style {:text-align "right"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                  (dom/h4 {:className "list-group-item-heading"} (sbercore/split-thousands (gstring/format "%.0f" usdprofit)) )
                )
              )


              ;; RUB P/L
              (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}
                (dom/a {:className "list-group-item" :style {:text-align "right"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                  (dom/h4 {:className "list-group-item-heading"} (sbercore/split-thousands (gstring/format "%.0f" rubprofit)) )
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



(defn showtran [item]
  (let [sec (first (filter (fn[x] (if (= (:id x) (:security item) ) true false)) (:securities @sbercore/app-state)))
        isrusbond (if (and (= 5 (:assettype sec))
                           (= "RU" (subs (:isin sec) 0 2))
                           )  true false)
        isbond (if (and (= 5 (:assettype sec))
                                        ;(= "RU" (subs (:isin security) 0 2))
                        )  true false)
        ;tr1 (.log js/console (str "showtranitem: " item))
        ]
    (dom/div {:className "row" :style {:margin-left "0px" :margin-right "0px"}}
      ;; Инструмент
      (dom/div {:className "col-xs-2 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}
        (dom/a {:className "list-group-item" :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id sec)) }
          (dom/h4 {:className "list-group-item-heading" :style {:white-space "nowrap"}} (:acode sec))
        )
      )

      ;; Покупка / Продажа
      (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}
        (dom/a {:className "list-group-item" :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id sec)) :style {:background-color (if (= (:direction item) "B") "lightgreen" "lightpink")}}
          (dom/h4 {:className "list-group-item-heading" :style {:white-space "nowrap"}} (if (= (:direction item) "B") "Покупка" "Продажа"))
        )
      )

      ;;Номинал
      (dom/div {:className "col-xs-2 col-md-2" :style {:padding-left "0px" :padding-right "0px"}}
        (dom/a {:className "list-group-item" :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id sec)) }
          (dom/h4 {:className "list-group-item-heading" :style {:text-align "right" :white-space "nowrap"}} (sbercore/split-thousands (str (:nominal item))))
        )
      )

      ;; Currency
      ;; (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}
      ;;   (dom/a {:className "list-group-item" :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id sec)) :style {:text-align "center"}}
      ;;     (dom/h4 {:className "list-group-item-heading"} (:currency sec))
      ;;   )
      ;; )

      ;; Цена
      (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}
        (dom/a {:className "list-group-item" :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id sec))}
          (dom/h4 {:className "list-group-item-heading" :style {:text-align "right" :white-space "nowrap"}} (str (if (> (:wap item) 1) (sbercore/split-thousands (gstring/format "%.2f" (:wap item)))  (subs (str (:wap item)) 0 5)) " " (case (:currency sec) "USD" "$" "GBP" "£" "GBX" "£p" "EUR" "€" "RUB" "₽" "RUR" "₽" "")) )
        )
      )

      ;; Стоимость в валюте бумаги
      (dom/div {:className "hidden-xs col-md-2" :style {:padding-left "0px" :padding-right "0px"}}
        (dom/a {:className "list-group-item" :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id sec))}
          (dom/h4 {:className "list-group-item-heading" :style {:text-align "right" :white-space "nowrap"}} (sbercore/split-thousands (gstring/format "%.0f"  (* (:multiple sec) (:nominal item) (:wap item) (if (= true isbond) 0.01 1.0) (if (= true isrusbond) 1000.0 1.0)))))
        )
      )


      ;; Стоимость в долларах США
      (dom/div {:className "col-xs-2 col-md-2" :style {:padding-left "0px" :padding-right "0px"}}
        (dom/a {:className "list-group-item" :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id sec))}
          (dom/h4 {:className "list-group-item-heading" :style {:text-align "right" :white-space "nowrap"}} (sbercore/split-thousands (gstring/format "%.0f" (* (:multiple sec) (:nominal item) (:wapusd item) (if (= true isbond) 0.01 1.0) (if (= true isrusbond) 1000.0 1.0)))))
        )
      )

      ;; Стоимость в рублях РФ
      (dom/div {:className "col-xs-2 col-md-2" :style {:padding-left "0px" :padding-right "0px"}}
        (dom/a {:className "list-group-item" :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id sec)) }
          (dom/h4 {:className "list-group-item-heading" :style {:text-align "right" :white-space "nowrap"}} (sbercore/split-thousands (gstring/format "%.0f" (* (:multiple sec) (:nominal item) (:waprub item) (if (= true isbond) 0.01 1.0) (if (= true isrusbond) 1000.0 1.0)))))
        )
      )

      ;; Дата сделки
      (dom/div {:className "col-xs-2 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}
        (dom/a {:className "list-group-item" :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id sec))}
          (dom/h4 {:className "list-group-item-heading" :style {:text-align "right"}} (:date item) ;(tf/unparse custom-formatter (tc/from-long (tc/to-long (tf/parse custom-formatter (:date item)))))
          )
        )          
      )
    )
  )
)



(defcomponent showdeals-view [data owner]
  (render
    [_]
    (if (> (count (:deals ((keyword (:selectedclient @sbercore/app-state)) @sbercore/app-state) )) 0)
      (dom/div {:className "list-group" :style {:display "block"}}
        (map (fn [item]
          (let [
            ]
            (showtran item)
          )
          )
          (sort (comp comp-deals) (filter (fn [x] (let [
             sec (first (filter (fn[y] (if (= (:security x) (:id y) ) true false)) (:securities @sbercore/app-state)))
             ;tr1 (.log js/console (str sec))
             seccode (:acode sec)
            ]
            ; 
            (if (and (= true (str/includes? seccode (str/upper-case (:search @sbercore/app-state)) )) (> (:wap x) (- 0 (:column (:sort-deals-list @app-state)))  ))   true false) ) ) (:deals ((keyword (:selectedclient @sbercore/app-state)) @sbercore/app-state)))) 
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
  (if (not (nil? (:selectedclient @sbercore/app-state)))
    (if (nil? (:deals ((keyword (:selectedclient @sbercore/app-state)) @sbercore/app-state)))
      (sbercore/getDeals)
    )
  )

  (put! ch 42)
  (swap! sbercore/app-state assoc-in [:current] {:name "Positions" :text "Позиции по счёту"} )
)

(defn doswaps []
  (let [a (rand-int 26)
        b (rand-int 26)
        c (rand-int 26)
    ]
    (swap! sbercore/app-state assoc-in [:fake] (str a b c))
  )
)

(defn setcontrols [value]
  (case value
    42 (sbercore/setClientsDropDown)
    43 (doswaps)
  )
)

(defn initqueue []
  (doseq [n (range 1000)]
    (go ;(while true)
      (take! ch(
        fn [v] (
           setcontrols v
          )
        )
      )
    )
  )
)

(initqueue)


(defn sort-deals-list [column]
  (swap! app-state assoc-in [:search] (:search @sbercore/app-state))
  (swap! app-state assoc-in [:sort-deals-list :column] column)
  ;(swap! app-state assoc-in [:deals] (:deals ((keyword (:selectedclient @sbercore/app-state)) @sbercore/app-state))) 
  ;(swap! sbercore/app-state assoc-in [(keyword (:selectedclient @sbercore/app-state)) :deals] [])
  (put! ch 43)
)

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
        (om/build sbercore/website-view data {})

        (if (not (nil? (:selectedclient @sbercore/app-state)))
          (if (> (count (:positions ((keyword (:selectedclient @sbercore/app-state)) @sbercore/app-state) )) 0)
            (dom/div
              (dom/div {:style {:margin-top "70px"} :className "panel panel-info"}
                (dom/div {:className "panel-heading"}
                  (dom/div (assoc stylerow  :className "row" )
                    (dom/div {:className "col-xs-12 col-md-12" :style {:text-align "center"}} "Денежная позиция")
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
                    (dom/div {:className "col-xs-2 col-md-1" :style {:text-align "center"}} "Бумага")
                    (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "Доля, %")
                    (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "Кол-во")
                    (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "USD Value")
                    (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "Цена покупки")
                    (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "Last price")
                    (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "Пот-л роста " (dom/span {:className "glyphicon glyphicon-arrow-down"}))
                    (dom/div {:className "hidden-xs col-md-1" :style {:text-align "center"}} "ANR")
                    (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "P/L USD, %")
                    (dom/div {:className "hidden-xs col-md-1" :style {:text-align "center"}} "P/L RUB, %")
                    (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "Yield")
                    (dom/div {:className "col-xs-2 col-md-1" :style {:text-align "center"}} "Ex-div date")
                  )
                )
                (dom/div {:className "panel-body"}
                  (om/build showstocks-view  data {})
                  (om/build showstocks-total-view  data {})
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
                    (dom/div {:className "col-xs-2 col-md-1" :style {:text-align "center"}} "Security")
                    (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "Доля, %")
                    (dom/div {:className "col-xs-2 col-md-1" :style {:text-align "center"}} "Номинал")
                    (dom/div {:className "col-xs-2 col-md-1" :style {:text-align "center"}} "USD Val w/o ACC")
                    (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "Цена покупки")
                    (dom/div {:className "hidden-xs col-md-1" :style {:text-align "center"}} "Last price")
                    (dom/div {:className "hidden-xs col-md-1" :style {:text-align "center"}} "Дюрация" (dom/span {:className "glyphicon glyphicon-arrow-up"}) )
                    (dom/div {:className "col-xs-2 col-md-1" :style {:text-align "center"}} "USd Val i/acc")
                    (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "P/L USD, %")
                    (dom/div {:className "hidden-xs col-md-1" :style {:text-align "center"}} "P/L RUB, %")
                    (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "Yield")
                    (dom/div {:className "hidden-xs col-md-1" :style {:text-align "center"}} "Coupon date")
                  )
                )
                (dom/div {:className "panel-body"}
                  (om/build showbonds-view  data {})
                  (om/build showbonds-total-view  data {})
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
                    (dom/div {:className "col-xs-2 col-md-2" :style {:text-align "center"}} (b/button {:className "btn btn-primary colbtn" :onClick (fn [e] ((swap! app-state assoc-in [:sort-forts-list] "secname")))} "Security") (dom/span {:className "glyphicon glyphicon-arrow-up"}))
                    (dom/div {:className "col-xs-2 col-md-2" :style {:text-align "center"}} "Amount")
                    (dom/div {:className "col-xs-2 col-md-2" :style {:text-align "center"}} "Цена покупки")
                    (dom/div {:className "col-xs-2 col-md-2" :style {:text-align "center"}} "Last price")
                    (dom/div {:className "col-xs-2 col-md-2" :style {:text-align "center"}} "Currency")
                    (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "P/L USD")
                    (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "P/L RUB")
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
                    (dom/div {:className "col-xs-2 col-md-1" :style {:text-align "center"}} (b/button {:className "btn btn-primary colbtn" :onClick (fn [e] (sort-deals-list 0))} "Security") (if (= (:column (:sort-deals-list @app-state)) 0) (dom/span {:className "glyphicon glyphicon-arrow-up"})))
                    (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} (b/button {:className "btn btn-primary colbtn" :onClick (fn [e] (sort-deals-list 1))} "Direction") (if (= (:column (:sort-deals-list @app-state)) 1) (dom/span {:className "glyphicon glyphicon-arrow-up"})))
                    (dom/div {:className "col-xs-2 col-md-2" :style {:text-align "center"}} (b/button {:className "btn btn-primary colbtn" :onClick (fn [e] (sort-deals-list 2))} "Nominal") (if (= (:column (:sort-deals-list @app-state)) 2) (dom/span {:className "glyphicon glyphicon-arrow-up"})))

                    (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} (b/button {:className "btn btn-primary colbtn" :onClick (fn [e] (sort-deals-list 4))} "Price") (if (= (:column (:sort-deals-list @app-state)) 4) (dom/span {:className "glyphicon glyphicon-arrow-up"})))
                    (dom/div {:className "hidden-xs col-md-2" :style {:text-align "center"}} "Value")
                    (dom/div {:className "col-xs-2 col-md-2" :style {:text-align "center"}} "USD Value")
                    (dom/div {:className "col-xs-2 col-md-2" :style {:text-align "center"}} "RUB Value")
                    (dom/div {:className "col-xs-2 col-md-1" :style {:text-align "center"}}(b/button {:className "btn btn-primary colbtn" :onClick (fn [e] (sort-deals-list 8))} "Date") (if (= (:column (:sort-deals-list @app-state)) 8) (dom/span {:className "glyphicon glyphicon-arrow-down"})))
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
)




(sec/defroute positions-page "/positions2" []
  (om/root positions-view
           sbercore/app-state
           {:target (. js/document (getElementById "app"))}))
