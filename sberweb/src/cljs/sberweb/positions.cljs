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

            [cljs.core.async :refer [put! dropping-buffer chan take! <! timeout]]

            [cljs-time.format :as tf]
            [cljs-time.coerce :as tc]

            [clojure.string :as str]
            [goog.string :as gstring]
            [goog.string.format]
  )
  (:import goog.History)
)

(enable-console-print!)

(defonce app-state (atom  {:sort-deals-list {:column 8 :direction 0} :charts []}))

(def custom-formatter (tf/formatter "dd/MM/yyyy"))

(def custom-formatter1 (tf/formatter "MMM dd yyyy hh:mm:ss"))

(def ch (chan (dropping-buffer 2)))

(defn abs [n] (max n (- n)))

(defn OnGetPositions [response]
   (swap! sbercore/app-state assoc :positions response  )
   (sbercore/setClientsDropDown)
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
    (if (and (= (:assettype sec1) 5) (= (:assettype sec2) 5)) 
      (if (or
           (< (:currency sec1) (:currency sec2))
           (and (= (:currency sec1) (:currency sec2)) (< (:duration sec1) (:duration sec2))) 
           (and (= (:duration sec1) (:duration sec2)) (= (:currency sec1) (:currency sec2)) (> (compare (:acode (first (filter (fn[x] (if (= (:id x) (:id position1) ) true false)) (:securities @sbercore/app-state)))) (:acode (first (filter (fn[x] (if (= (:id x) (:id position2) ) true false)) (:securities @sbercore/app-state))))) 0))
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

(defn usdrate []
  (:price (first (filter (fn [x] (if (= "USD" (:acode x)) true false)) (:securities @sbercore/app-state))))
) 

(defn gbprate []
  (:price (first (filter (fn [x] (if (= "GBP" (:acode x)) true false)) (:securities @sbercore/app-state))))
)

(defn eurrate []
  (:price (first (filter (fn [x] (if (= "EUR" (:acode x)) true false)) (:securities @sbercore/app-state))))
)

(defn clientcurrencyrate []
  (let [
    client (first (filter (fn [x] (if (= (:selectedclient @sbercore/app-state) (:code x)) true false)) (:clients @sbercore/app-state)))
    ]
    (if (nil? (:selectedclient @sbercore/app-state))
    1.0
    (:price (first (filter (fn [x] (if (= (str/upper-case (:currency client)) (:acode x)) true false)) (:securities @sbercore/app-state)))))
  )
)

(defcomponent speedo-view [data owner]
  (render [_]
    (let [
          usdval (:usd (first (filter (fn [x] (if (= (:code x) (:selectedclient @data)) true false)) (:clients @data))))

          usdval (if (< usdval 0.0) (- 0 usdval) 0.0)

          rubcash (:rub (first (filter (fn [x] (if (= (:code x) (:selectedclient @data)) true false)) (:clients @data))))
          rubcash (if (< rubcash 0.0) (- 0 rubcash) 0.0)

          eurcash (:eur (first (filter (fn [x] (if (= (:code x) (:selectedclient @data)) true false)) (:clients @data))))
          eurcash (if (< eurcash 0.0) (- 0 eurcash) 0.0)

          gbpcash (:gbp (first (filter (fn [x] (if (= (:code x) (:selectedclient @data)) true false)) (:clients @data))))
          gbpcash (if (< gbpcash 0.0) (- 0 gbpcash) 0.0)

          borrowings (do (if (nil? (:selectedclient @data)) 0.0 (/ (+ (* (eurrate) eurcash) (* (gbprate) gbpcash) rubcash) (clientcurrencyrate))))


          futures (if (nil? (:selectedclient @data)) 0.0 (:posvalue (reduce (fn [x y] (let [;tr1 (.log js/console (str "x=" x " y=" y))
           ] {:posvalue (+ (if (< (:posvalue y) 0.0) (- 0.0 (:posvalue y)) (:posvalue y)) (:posvalue x))})  ) (filter (fn [x] (if (and (= 1 1) (or (= (:assettype (first (filter (fn [z] (if (= (:id z) (:id x)) true false)) (:securities @sbercore/app-state)))) 15)) )  true false)) (:positions ((keyword (:selectedclient @data)) @data))))))

          portfvalue (sbercore/calc_portfvalue)


          margin (/ (* 100.0 portfvalue) (+ borrowings futures portfvalue))

          ;tr1 (.log js/console (str "futures=" futures " borrow=" borrowings " margin=" margin))
      ]
      (dom/div {:style {:zoom 0.41 :width "640px" :height "480px" :margin-top "0px" :margin-right "0px" :margin-bottom "0px" :margin-left "50px" :overflow "hidden" :backgroundColor "#000" :position "relative" :display "inline-block"}}
        (dom/div {:className "speedometr"}
          (dom/div {:className "ris-w"})
          (dom/div {:className "ris-w"})
          (dom/div {:className "ris-w"})
          (dom/div {:className "ris-w"})
          (dom/div {:className "ris-w"})
          (dom/div {:className "ris-w"})
          (dom/div {:className "ris-w"})
          (dom/div {:className "ris-w"})
          (dom/div {:className "ris-w"})
          (dom/div {:className "ris-w"})
          (dom/div {:className "ris-w"})
          (dom/div {:className "ris ris-o1"})
          (dom/div {:className "ris ris-o2"})
          (dom/div {:className "ris ris-o3"})
          (dom/div {:className "ris ris-o4"})
          (dom/div {:className "ris ris-o5"})
          (dom/div {:className "ris ris-o6"})
          (dom/div {:className "ris ris-o7"})
          (dom/div {:className "ris ris-o8"})
          (dom/div {:className "ris ris-o9"})
          (dom/div {:className "ris ris-o10"})


          (dom/span {:className "speedo s-0"} "0")
          (dom/span {:className "speedo s-20"} "10")
          (dom/span {:className "speedo s-40"} "20")
          (dom/span {:className "speedo s-60"} "30")
          (dom/span {:className "speedo s-80"} "40")
          (dom/span {:className "speedo s-100"} "50")
          (dom/span {:className "speedo s-120"} "60")
          (dom/span {:className "speedo s-140"} "70")
          (dom/span {:className "speedo s-160"} "80")
          (dom/span {:className "speedo s-180"} "90")
          (dom/span {:className "speedo s-200"} "100")

          (dom/div {:className "strelka" :style {:transform (str "rotate(" (.round js/Math (- (* margin (/ 210 100)) 20.0)) "deg)")}})
        )
        (dom/div {:className "black"})
      )
    )
  )
)


(defn setPieChart1[]
  (let [
    usdval (do (if (nil? (:selectedclient @sbercore/app-state)) 0.0 (+ (/ (* (usdrate) (:usd (first (filter (fn [x] (if (= (:code x) (:selectedclient @sbercore/app-state)) true false)) (:clients @sbercore/app-state))))) (clientcurrencyrate)) (:posvalue (reduce (fn [x y] {:posvalue (+ (:posvalue x) (:posvalue y))} ) (filter (fn [x] (if (and (= (:currency (first (filter (fn [y] (if (= (:id y) (:id x)) true false)) (:securities @sbercore/app-state)))) "USD")  (or (= (:assettype (first (filter (fn [y] (if (= (:id y) (:id x)) true false)) (:securities @sbercore/app-state)))) 1) (= (:assettype (first (filter (fn [y] (if (= (:id y) (:id x)) true false)) (:securities @sbercore/app-state)))) 5)) )  true false)) (:positions ((keyword (:selectedclient @sbercore/app-state)) @sbercore/app-state)))))))) 


    rubval (do (if (nil? (:selectedclient @sbercore/app-state)) 0.0 (+ (/ (:rub (first (filter (fn [x] (if (= (:code x) (:selectedclient @sbercore/app-state)) true false)) (:clients @sbercore/app-state)))) (clientcurrencyrate))

      (:posvalue (reduce (fn [x y] {:posvalue (+ (:posvalue x) (:posvalue y))} ) (filter (fn [x] (if (and (= (:currency (first (filter (fn [y] (if (= (:id y) (:id x)) true false)) (:securities @sbercore/app-state)))) "RUB")  (or (= (:assettype (first (filter (fn [y] (if (= (:id y) (:id x)) true false)) (:securities @sbercore/app-state)))) 1) (= (:assettype (first (filter (fn [y] (if (= (:id y) (:id x)) true false)) (:securities @sbercore/app-state)))) 5)) )  true false)) (:positions ((keyword (:selectedclient @sbercore/app-state)) @sbercore/app-state))))))))



    eurval (do (if (nil? (:selectedclient @sbercore/app-state)) 0.0 (+ (* (eurrate) (/ (:eur (first (filter (fn [x] (if (= (:code x) (:selectedclient @sbercore/app-state)) true false)) (:clients @sbercore/app-state)))) (clientcurrencyrate)))

      (:posvalue (reduce (fn [x y] {:posvalue (+ (:posvalue x) (:posvalue y))} ) (filter (fn [x] (if (and (= (:currency (first (filter (fn [y] (if (= (:id y) (:id x)) true false)) (:securities @sbercore/app-state)))) "EUR")  (or (= (:assettype (first (filter (fn [y] (if (= (:id y) (:id x)) true false)) (:securities @sbercore/app-state)))) 1) (= (:assettype (first (filter (fn [y] (if (= (:id y) (:id x)) true false)) (:securities @sbercore/app-state)))) 5)) )  true false)) (:positions ((keyword (:selectedclient @sbercore/app-state)) @sbercore/app-state)))))
                                                                      )))

    gbpval (do (if (nil? (:selectedclient @sbercore/app-state)) 0.0 (+ (* (gbprate) (/ (:gbp (first (filter (fn [x] (if (= (:code x) (:selectedclient @sbercore/app-state)) true false)) (:clients @sbercore/app-state)))) (clientcurrencyrate)))


                                                                      (:posvalue (reduce (fn [x y] {:posvalue (+ (:posvalue x) (:posvalue y))} ) (filter (fn [x] (if (and (or (= (:currency (first (filter (fn [y] (if (= (:id y) (:id x)) true false)) (:securities @sbercore/app-state)))) "GBX") (= (:currency (first (filter (fn [y] (if (= (:id y) (:id x)) true false)) (:securities @sbercore/app-state)))) "GBP"))   (or (= (:assettype (first (filter (fn [y] (if (= (:id y) (:id x)) true false)) (:securities @sbercore/app-state)))) 1) (= (:assettype (first (filter (fn [y] (if (= (:id y) (:id x)) true false)) (:securities @sbercore/app-state)))) 5)) )  true false)) (:positions ((keyword (:selectedclient @sbercore/app-state)) @sbercore/app-state))))))))

    usdval (if (> usdval 0) (.round js/Math usdval) 0.0)
    rubval (if (> rubval 0) (.round js/Math rubval) 0.0)
    eurval (if (> eurval 0) (.round js/Math eurval) 0.0)
    gbpval (if (> gbpval 0) (.round js/Math gbpval) 0.0)


    ;tr1 (.log js/console (str "usdval=" usdval " eurval=" eurval " gbpval=" gbpval "rubval=" rubval))
    element (.getElementById js/document "rev-chartjs1")
    context (if (not (nil? element)) (.getContext element "2d"))
    chart-data {:type "pie"
                :options {
                  :legend {
                    :display true
                    :labels {
                      :fontSize 36
                    }
                  }
                }
                :data {:labels ["USD" "RUB" "EUR" "GBP"]
                       :datasets [{:data [usdval rubval eurval gbpval]
                                   :backgroundColor [
                                     "#FF0000"
                                     "#00FF00"
                                     "#0000FF"
                                     "#00FFFF"
                                   ]}
                                  ]}}

    
    jschart (if (not (nil? element)) (do (js/Chart. context (clj->js chart-data))) nil)
    ]
    (set! (.-defaultFontSize (.-global (.-defaults js/Chart))) 36)
    ;(set! (.-title js/document) "דו״ח זמינות יחידות")
    

    (if (not (nil? element)) (do (.update jschart)))

    (if (not (nil? element)) (set! (.-width (.-style element)) "200px"))

    (if (not (nil? element)) (set! (.-height (.-style element)) "200px"))
    (swap! app-state assoc-in [:charts] (conj (:charts @app-state) jschart))
  )
)


;; (defn js-object-by-asset-type []
;;   (do (clj->js #{ (.round js/Math (sbercore/calc_cashusdvalue)) (if (nil? (:selectedclient @sbercore/app-state)) 0.0 (.round js/Math (:posvalue (reduce (fn [x y] {:posvalue (+ (:posvalue x) (:posvalue y))} ) (filter (fn [x] (if (= (:assettype (first (filter (fn [y] (if (= (:id y) (:id x)) true false)) (:securities @sbercore/app-state))) ) 5) true false) ) (:positions ((keyword (:selectedclient @sbercore/app-state)) @sbercore/app-state)))))))  (if (nil? (:selectedclient @sbercore/app-state)) 0.0 (.round js/Math (:posvalue (reduce (fn [x y] {:posvalue (+ (:posvalue x) (:posvalue y))} ) (filter (fn [x] (if (= (:assettype (first (filter (fn [y] (if (= (:id y) (:id x)) true false)) (:securities @sbercore/app-state))) ) 1) true false) ) (:positions ((keyword (:selectedclient @sbercore/app-state)) @sbercore/app-state)))))))  }))
;; )


(defn setPieChart2[]
  (let [
    cash (do (.round js/Math (sbercore/calc_cashusdvalue)))
    bonds (do (if (nil? (:selectedclient @sbercore/app-state)) 0.0 (.round js/Math (:posvalue (reduce (fn [x y] {:posvalue (+ (:posvalue x) (:posvalue y))} ) (filter (fn [x] (if (= (:assettype (first (filter (fn [y] (if (= (:id y) (:id x)) true false)) (:securities @sbercore/app-state))) ) 5) true false) ) (:positions ((keyword (:selectedclient @sbercore/app-state)) @sbercore/app-state)))))))) 
    equity (do (if (nil? (:selectedclient @sbercore/app-state)) 0.0 (.round js/Math (:posvalue (reduce (fn [x y] {:posvalue (+ (:posvalue x) (:posvalue y))} ) (filter (fn [x] (if (= (:assettype (first (filter (fn [y] (if (= (:id y) (:id x)) true false)) (:securities @sbercore/app-state))) ) 1) true false) ) (:positions ((keyword (:selectedclient @sbercore/app-state)) @sbercore/app-state)))))))) 


    cash (if (> cash 0) cash 0.0)
    bonds (if (> bonds 0) bonds 0.0)
    equity (if (> equity 0) equity 0.0)

    element (.getElementById js/document "rev-chartjs2")

    context (if (not (nil? element)) (.getContext element "2d"))
    chart-data {:type "pie"
                :options {
                  :legend {
                    :display true
                    :labels {
                    :fontSize 36
                    }
                  }
                }
                :data {:labels ["Денежная позиция" "Облигации" "Акции"]
                       :datasets [{:data [cash bonds equity]
                                   :backgroundColor [
                                     "#FF0000"
                                     "#00FF00"
                                     "#0000FF"
                                   ]}
                                  ]}}

    jschart (if (not (nil? element)) (do (js/Chart. context (clj->js chart-data))) nil)
    ]
    (set! (.-defaultFontSize (.-global (.-defaults js/Chart))) 36)
    ;(set! (.-title js/document) "דו״ח זמינות יחידות")
    (if (not (nil? element)) (do (.update jschart)))

    (if (not (nil? element)) (set! (.-width (.-style element)) "200px"))

    (if (not (nil? element)) (set! (.-height (.-style element)) "200px"))
    (swap! app-state assoc-in [:charts] (conj (:charts @app-state) jschart))
  )
)

(defn cleanupcharts []
  (loop [
    charts (:charts @app-state)
    ]
    (if (seq charts) 
      (let [
        chart (first charts)
        ]
        (if (not (nil? chart)) (.destroy chart))
        (recur (rest charts))
       )
     )
  )
  (swap! app-state assoc-in [:charts] [])
)

(defn setPieCharts []
  (let [
    
    ]
    (do (cleanupcharts))
    (do (setPieChart1)) 
    (do (setPieChart2))
    ;(setPieChart3)
  )
)




(defcomponent showcharts-view [data owner]
  (render [_]
    (let []
      (dom/div  {:className "row no-print" :style {:margin-top "0px" :direction "ltr"}}
        (dom/div {:className "col-md-4" :style {:text-align "center"}}
          (dom/canvas {:id "rev-chartjs1" :width "300" :height "300" :style {:display "inline-block" :width "300px !important" :height "300px !important" :text-align "center"}}
          )
        )

        (dom/div {:className "col-md-4" :style {:text-align "center"}}
          (om/build speedo-view data {})
        )

        (dom/div {:className "col-md-4" :style {:text-align "center"}}
          (dom/canvas {:id "rev-chartjs2" :width "300" :height "300" :style {:display "inline-block" :width "300px !important" :height "300px !important"}}
          )
        )
      )
    )
  )
)


(defcomponent showstocks-total-view [data owner]
  (render [_]
    (let [
        portfvalue (sbercore/calculatetotallimit)
        portfusdvalue (sbercore/calculatetotallimitusd)
        client (first (filter (fn [x] (if (= (:selectedclient @data) (:code x)) true false)) (:clients @data)))

        ;stocksusdvalue (:usdvalue (reduce (fn [x y] {:usdvalue (+ (:usdvalue x) (:usdvalue y))} ) (filter (fn [x] (if (= (:assettype (first (filter (fn [y] (if (= (:id y) (:id x)) true false)) (:securities @sbercore/app-state))) ) 1) true false) ) (:positions ((keyword (:selectedclient @sbercore/app-state)) @sbercore/app-state)))))

        ;tr1 (.log js/console (str (gstring/format "%.2f" stocksusdvalue) )) 
      ]
      (if (or (> (count (:positions ((keyword (:selectedclient @sbercore/app-state)) @sbercore/app-state) )) 0)
              (> (count (:deals ((keyword (:selectedclient @sbercore/app-state)) @sbercore/app-state) )) 0)
        )
        (dom/div {:className "list-group" :style {:display "block"}}
          (dom/div {:className "row" :style {:margin-left "0px" :margin-right "0px"}} 
            (dom/div {:className "col-xs-2 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}
              (dom/h4 {:className "list-group-item-heading" :style {:margin-left "10px" :font-weight "700"}} "ВСЕГО: ")
            )

            ;Share %%
            (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px" :text-align "right" :font-weight "700"}}
              (dom/div {:className "col-md-6"}
                (dom/h4 {:className "list-group-item-heading" :style {:margin-left "10px" :font-weight "700" :margin-right "10px"}} (sbercore/split-thousands 
                  (gstring/format "%.2f" (/ (:posvalue (reduce (fn [x y] {:posvalue (+ (:posvalue x) (:posvalue y))} ) (filter (fn [x] (if (= (:assettype (first (filter (fn [y] (if (= (:id y) (:id x)) true false)) (:securities @sbercore/app-state))) ) 1) true false) ) (:positions ((keyword (:selectedclient @sbercore/app-state)) @sbercore/app-state))))) portfvalue 0.01))))
              )

              (dom/div {:className "col-md-6"}
                (dom/h4 {:className "list-group-item-heading" :style {:margin-left "10px" :font-weight "700" :margin-right "10px"}} (sbercore/split-thousands 
                  (gstring/format "%.2f" (- (:stockshare client) (/ (:posvalue (reduce (fn [x y] {:posvalue (+ (:posvalue x) (:posvalue y))} ) (filter (fn [x] (if (= (:assettype (first (filter (fn [y] (if (= (:id y) (:id x)) true false)) (:securities @sbercore/app-state))) ) 1) true false) ) (:positions ((keyword (:selectedclient @sbercore/app-state)) @sbercore/app-state))))) portfvalue 0.01)))))
              )
            )
            ;Amount
            ;;(dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}})


            ;Client Currency Value
            (dom/div {:className "col-xs-2 col-md-2" :style {:padding-left "0px" :padding-right "0px" :text-align "right" :font-weight "700"}}
              (dom/h4 {:className "list-group-item-heading" :style {:margin-left "10px" :font-weight "700" :margin-right "0px"}} (sbercore/split-thousands 
                (gstring/format "%.0f" (:posvalue (reduce (fn [x y] {:posvalue (+ (:posvalue x) (:posvalue y))} ) (filter (fn [x] (if (= (:assettype (first (filter (fn [y] (if (= (:id y) (:id x)) true false)) (:securities @sbercore/app-state))) ) 1) true false) ) (:positions ((keyword (:selectedclient @sbercore/app-state)) @sbercore/app-state)))))))))

            ;; ;WAP Price
            (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}} )

            ;Last Price
            (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}} )


            ;Target Price
            (dom/div {:className "plprdiv col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}})


            ;ANR
            (dom/div {:className "hidden-xs col-md-1" :style {:padding-left "0px" :padding-right "0px"}})


            ;; USD Currency P/L, %%
            (dom/div {:className "plprdiv col-xs-1 hidden-md hidden-lg" :style {:padding-left "0px" :padding-right "0px" :padding-top "0px"}}
              (dom/h4 {:className "list-group-item-heading" :style {:margin-left "10px"  :font-weight "700" :margin-right "10px"}} (sbercore/split-thousands 
                (case portfusdvalue 0.0 "" nil "" (gstring/format "%.2f" (/ (:usdgain (reduce (fn [x y] {:usdgain (+ (:usdgain x) (* (:usdvalue y) (/ (- (:usdvalue y) (* (:amount y) (:wapusd y) ) ) (* (:amount y) (:wapusd y) ))) )} ) {:usdgain 0.0} (filter (fn [x] (if (= (:assettype (first (filter (fn [y] (if (= (:id y) (:id x)) true false)) (:securities @sbercore/app-state))) ) 1) true false) ) (:positions ((keyword (:selectedclient @sbercore/app-state)) @sbercore/app-state))))) portfusdvalue 0.01)) )))
            )

            (dom/div {:className "plprdiv hidden-xs col-md-1" :style {:padding-top "0px"}}
              (dom/div {:className "col-md-6" :style {:padding-left "0px" :padding-right "0px"}}
                (dom/h4 {:className "list-group-item-heading" :style {:margin-left "10px"  :font-weight "700" :margin-right "10px"}} (case portfusdvalue 0.0 "" nil "" (gstring/format "%.2f" (/ (:rubgain (reduce (fn [x y] {:rubgain (+ (:rubgain x) (* (:usdvalue y) (/ (-  (:currubprice y) (:waprub y)) (:waprub y))) )} ) {:rubgain 0.0} (filter (fn [x] (if (= (:assettype (first (filter (fn [y] (if (= (:id y) (:id x)) true false)) (:securities @sbercore/app-state))) ) 1) true false) ) (:positions ((keyword (:selectedclient @sbercore/app-state)) @sbercore/app-state))))) portfusdvalue 0.01)))))
              (dom/div {:className "col-md-6" :style {:padding-left "0px" :padding-right "0px"}}
                (dom/h4 {:className "list-group-item-heading" :style {:margin-left "10px"  :font-weight "700" :margin-right "10px"}} (case portfusdvalue 0.0 "" nil "" (gstring/format "%.2f" (/ (:usdgain (reduce (fn [x y] {:usdgain (+ (:usdgain x) (* (:usdvalue y) (/ (- (:usdvalue y) (* (:amount y) (:wapusd y) ) ) (* (:amount y) (:wapusd y) ))   ) )} ) {:usdgain 0.0} (filter (fn [x] (if (= (:assettype (first (filter (fn [y] (if (= (:id y) (:id x)) true false)) (:securities @sbercore/app-state))) ) 1) true false) ) (:positions ((keyword (:selectedclient @sbercore/app-state)) @sbercore/app-state))))) portfusdvalue 0.01))) )
              )
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


(defcomponent showbonds-total-view [data owner]
  (render [_]
    (let [
      portfvalue (sbercore/calculatetotallimit)
      portfusdvalue (sbercore/calculatetotallimitusd)
      client (first (filter (fn [x] (if (= (:selectedclient @data) (:code x)) true false)) (:clients @data)))
      ]

      (if (or (> (count (:positions ((keyword (:selectedclient @sbercore/app-state)) @sbercore/app-state) )) 0)
              (> (count (:deals ((keyword (:selectedclient @sbercore/app-state)) @sbercore/app-state) )) 0)
        )
        (dom/div {:className "list-group" :style {:display "block"}}
          (dom/div {:className "row" :style {:margin-left "0px" :margin-right "0px"}} 
            (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}
              (dom/h4 {:className "list-group-item-heading" :style {:margin-left "10px" :font-weight "700"}} "ВСЕГО: ")
            )

              ;Share %%
              (dom/div {:className "col-xs-2 col-md-1" :style {:padding-left "0px" :padding-right "0px" :text-align "right" :font-weight "700"}}
                (dom/div {:className "col-md-6"}
                  (dom/h4 {:className "list-group-item-heading" :style {:margin-left "10px" :font-weight "700" :margin-right "0px"}} (sbercore/split-thousands 
                    (gstring/format "%.2f" (/ (:usdvalue (reduce (fn [x y] {:usdvalue (+ (:usdvalue x) (:usdvalue y))} ) (filter (fn [x] (if (= (:assettype (first (filter (fn [y] (if (= (:id y) (:id x)) true false)) (:securities @sbercore/app-state))) ) 5) true false) ) (:positions ((keyword (:selectedclient @sbercore/app-state)) @sbercore/app-state))))) portfusdvalue 0.01))))
                )
                (dom/div {:className "col-md-6"}
                  (dom/h4 {:className "list-group-item-heading" :style {:margin-left "10px" :font-weight "700" :margin-right "10px"}} (sbercore/split-thousands 
                    (gstring/format "%.2f" (- (:bondshare client) (/ (:posvalue (reduce (fn [x y] {:posvalue (+ (:posvalue x) (:posvalue y))} ) (filter (fn [x] (if (= (:assettype (first (filter (fn [y] (if (= (:id y) (:id x)) true false)) (:securities @sbercore/app-state))) ) 5) true false) ) (:positions ((keyword (:selectedclient @sbercore/app-state)) @sbercore/app-state))))) portfvalue 0.01)))))
                )
              )

            ;Amount
            ;;(dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}})

            ;Client Currency Value
            (dom/div {:className "col-xs-4 col-md-2" :style {:padding-left "0px" :padding-right "0px" :text-align "right" :font-weight "700"}}
              (dom/h4 {:className "list-group-item-heading" :style {:margin-left "10px" :font-weight "700" :margin-right "0px"}} (sbercore/split-thousands 
                (gstring/format "%.0f" (:posvalue (reduce (fn [x y] {:posvalue (+ (:posvalue x) (:posvalue y))} ) (filter (fn [x] (if (= (:assettype (first (filter (fn [y] (if (= (:id y) (:id x)) true false)) (:securities @sbercore/app-state))) ) 5) true false) ) (:positions ((keyword (:selectedclient @sbercore/app-state)) @sbercore/app-state)))))))))

            ;WAP Price
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
    (let [
      portfusdvalue (sbercore/calculatetotallimitusd)
      ]

      (if (> (count (:clients @sbercore/app-state)) 0)
        (dom/div {:className "row" :style {:margin-left "0px" :margin-right "0px"}}

          (dom/div {:className "col-xs-3 col-md-2" :style {:padding-left "0px" :padding-right "0px" :padding-top "3px"} }
            (dom/h4 {:className "list-group-item-heading" :style {:text-align "right" :font-weight "700"}} (str (gstring/format "%.2f" (* 100 (/ (sbercore/calc_cashusdvalue) portfusdvalue)))) 
            )
          )

          (dom/div {:className "col-xs-2 col-md-2" :style {:padding-left "0px" :padding-right "0px" :padding-top "3px" :background-color (if (< (:usd (first (filter (fn [x] (if (= (:code x) (:selectedclient @sbercore/app-state)) true false)) (:clients @sbercore/app-state)))) 0) "red" "white")} }
            (dom/h4 {:className "list-group-item-heading" :style {:text-align "right"}} (sbercore/split-thousands (gstring/format "%.2f" (:usd (first (filter (fn [x] (if (= (:code x) (:selectedclient @sbercore/app-state)) true false)) (:clients @sbercore/app-state))))))
            )
          )

          (dom/div {:className "col-xs-3 col-md-3" :style {:padding-left "0px" :padding-right "0px" :padding-top "3px" :background-color (if (< (:rub (first (filter (fn [x] (if (= (:code x) (:selectedclient @sbercore/app-state)) true false)) (:clients @sbercore/app-state)))) 0) "red" "white")}}
            (dom/h4 {:className "list-group-item-heading" :style {:text-align "right"}} (sbercore/split-thousands (gstring/format "%.2f" (:rub (first (filter (fn [x] (if (= (:code x) (:selectedclient @sbercore/app-state)) true false)) (:clients @sbercore/app-state))))))
            )
          )

          (dom/div {:className "col-xs-3 col-md-3" :style {:padding-left "0px" :padding-right "0px" :padding-top "3px" :background-color (if (< (:eur (first (filter (fn [x] (if (= (:code x) (:selectedclient @sbercore/app-state)) true false)) (:clients @sbercore/app-state)))) 0) "red" "white")}}
            (dom/h4 {:className "list-group-item-heading" :style {:text-align "right"}} (sbercore/split-thousands (gstring/format "%.2f" (:eur (first (filter (fn [x] (if (= (:code x) (:selectedclient @sbercore/app-state)) true false)) (:clients @sbercore/app-state))))))
            )
          )

          (dom/div {:className "col-xs-1 col-md-2" :style {:padding-left "0px" :padding-right "0px" :padding-top "3px" :background-color (if (< (:gbp (first (filter (fn [x] (if (= (:code x) (:selectedclient @sbercore/app-state)) true false)) (:clients @sbercore/app-state)))) 0) "red" "white")}}
            (dom/h4 {:className "list-group-item-heading" :style {:text-align "right"}} (sbercore/split-thousands (gstring/format "%.2f" (:gbp (first (filter (fn [x] (if (= (:code x) (:selectedclient @sbercore/app-state)) true false)) (:clients @sbercore/app-state))))))
            )
          )
        )
      )
    )

  )
)

(defcomponent showstocks-view [data owner]
  (render
    [_]
    (if (or (> (count (:positions ((keyword (:selectedclient @sbercore/app-state)) @sbercore/app-state) )) 0)
            (> (count (:deals ((keyword (:selectedclient @sbercore/app-state)) @sbercore/app-state) )) 0)
      )

      (dom/div {:className "list-group" :style {:display "block"}}
        (map (fn [item]
          (let [
                sec (first (filter (fn[x] (if (= (:id x) (:id item) ) true false)) (:securities @sbercore/app-state)))
                seccur (:currency sec)
                isbond (if (= 5 (:assettype sec)) true false)

                client (first (filter (fn [x] (if (= (:selectedclient @sbercore/app-state) (:code x)) true false)) (:clients @sbercore/app-state)))

                clientcurrencyrate (:price (first (filter (fn [x] (if (= (str/upper-case (:currency client)) (:acode x)) true false)) (:securities @sbercore/app-state))))

                ;usdrate (:price (first (filter (fn [x] (if (= "USD" (:acode x)) true false)) (:securities @sbercore/app-state))))

                fxrate (if (or (= "RUB" seccur) (= "RUR" seccur)) 1 (:price  (first (filter (fn[x] (if( = (:acode x) (if (= seccur "GBX") "GBP" seccur)) true false)) (:securities @sbercore/app-state)))))

                ;isrusbond (if (and (= 5 (:assettype sec)) (= "RUB" (:currency sec)))  true false)

                isbond (if (and (= 5 (:assettype sec)))  true false)

                newfxrate (if (= 0 (compare "GBX" seccur)) (/ fxrate 100.) fxrate)
                putdate (if (nil? (:putdate item)) #inst "1900-01-01T00:00:00.000-00:00" (:putdate item))
                ;tr1 (.log js/console "currency: "  seccur " rate:" newfxrate)
                portfvalue (sbercore/calculatetotallimit)
                
                
                potential (* 100.0 (/ (- (if (or (nil? (:target sec)) (= 0.0 (:target sec)))  (:price item) (:target sec)) (:price item)) (:price item)))
                maxpotential (apply max (map (fn [position]
                  (let [
                        sec (first (filter (fn[x] (if (= (:id x) (:id position) ) true false)) (:securities @sbercore/app-state)))
                        newprice (if (nil? (:price sec)) 0.0001 (:price sec))
                        growth (* 100.0 (/ (- (if (nil? (:target sec)) 0.0 (:target sec)) newprice) newprice))  
]
                   growth)) (:positions ((keyword (:selectedclient @sbercore/app-state)) @sbercore/app-state))))

                ;tr1 (.log js/console "maxpotential: "  maxpotential " potential: " potential)
            ]

            (dom/div {:className "row tablerow" :style {:margin-left "0px" :margin-right "0px"}} 
              (dom/div {:className "col-xs-2 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}
                (dom/div {:className "clientcode"}
                  (dom/a {:className "list-group-item" :style {:background "transparent"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                    (dom/h4 {:className "list-group-item-heading" :style {:white-space "nowrap"}} (:acode sec))
                  )
                  (dom/span {:className "clientinfo"}
                    (dom/input {:type "text" :style {:border-width "0px" :background-color "aqua" :width "250px"} :visibility "hidden" :value (str "ISIN: " (:isin sec))} )
                  )
                )
              )

              
              (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}
                ;; Доля в портфеле
                (dom/div {:className "col-md-6" }
                  (dom/a {:className "list-group-item" :style {:background "transparent" :padding-left "3px" :padding-right "3px" :text-align "right"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                    (dom/h4 {:className "list-group-item-heading"} (gstring/format "%.2f" (* 100.0 (/ (:posvalue item) portfvalue))))
                  )
                )
                ;; Свободно % от лимита
                (dom/div {:className "col-md-6" }
                  (dom/a {:className "list-group-item" :style {:background "transparent" :padding-left "3px" :padding-right "3px" :text-align "right"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                    (dom/h4 {:className "list-group-item-heading"} (gstring/format "%.2f" (- (/ (* (if (nil? (:stocklimit client)) 10.0 (:stocklimit client)) (:stockshare client)) 100.0) (* 100.0 (/ (:posvalue item) portfvalue)))))
                  )
                )
              )


              ;;Количество бумаг
              (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}            
                (dom/a {:className "list-group-item" :style {:background "transparent" :padding-left "3px" :padding-right "3px" :text-align "right"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                  (dom/h4 {:className "list-group-item-heading" :style {:white-space "nowrap"}} (sbercore/split-thousands (str (:amount item)))   )
                )            
              )


              ;;Client currency Value
              (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}
                (dom/a {:className "list-group-item" :style {:background "transparent" :text-align "right"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                  (dom/h4 {:className "list-group-item-heading"} (sbercore/split-thousands (gstring/format "%.0f" (:posvalue item))))
                )
              )


              ;; Цена покупки
              (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}
                (dom/a {:className "list-group-item" :style {:background "transparent" :text-align "right"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                  (dom/h4 {:className "list-group-item-heading" :style {:white-space "nowrap"}} (sbercore/split-thousands (gstring/format "%.2f" (:wap item))) " " (case (:currency item) "USD" "$" "GBP" "£" "GBX" "£p" "EUR" "€" "RUB" "₽" "RUR" "₽" (:currency item)) )
                )
              )

              ;; Last Price
              (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "3px"}}
                (dom/a {:className "list-group-item" :style {:background "transparent" :text-align "right"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                  (dom/h4 {:className "list-group-item-heading"} (sbercore/split-thousands (if (> (:price item) 1) (gstring/format "%.2f" (:price item))  (subs (str (:price item)) 0 5))) )
                )
              )

              ;; Потенциал роста
              (dom/div {:className "plprdiv col-xs-1 col-md-1" :style {:padding-top "5px"}}
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
                (dom/a {:className "list-group-item" :style {:background "transparent" :text-align "right"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item))}
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
              (dom/div {:className "plprdiv col-xs-1 hidden-md hidden-lg"}

                (dom/div {:className "progress"}
                  (dom/div {:className (str "progress-bar" (if (< (:usdvalue item) (* (:amount item) (:wapusd item))) " progress-bar-danger" ""))  :role "progresbar" :aria-valuenow (str (.round js/Math (.abs js/Math (* 100.0 (/ (- (:usdvalue item) (* (:amount item) (:wapusd item))) (* (:amount item) (:wapusd item))))))) :aria-valuemin "0" :aria-valuemax "100" :style {:color "black" :width (str (.round js/Math (.abs js/Math (* 100.0 (/ (- (:usdvalue item) (* (:amount item) (:wapusd item) ) ) (* (:amount item) (:wapusd item) ))))) "%") }}
                    (dom/span {:className "plprogress" :style {:position "absolute" :display "block" :width "100%"}} (gstring/format "%.2f" (* 100.0 (/ (- (:usdvalue item) (* (:amount item) (:wapusd item) ) ) (* (:amount item) (:wapusd item) )))))
                  )
                )
              )
              (dom/div {:className "plprdiv hidden-xs col-md-1" :style {:padding-top "5px"}}
                (dom/div {:className "col-md-6" :style {:padding-left "0px" :padding-right "0px"}}
                  (dom/div {:className "progress"}
                    (dom/div {:className (str "progress-bar" (if (< (:currubprice item) (:waprub item)) " progress-bar-danger" ""))  :role "progresbar" :aria-valuenow (str (.round js/Math (.abs js/Math (* 100.0 (/ (-  (:currubprice item) (:waprub item)) (:waprub item)))))) :aria-valuemin "0" :aria-valuemax "100" :style {:color "black" :width (str (.round js/Math (.abs js/Math (* 100.0 (/ (-  (:currubprice item) (:waprub item)) (:waprub item))))) "%") }}
                      (dom/span {:className "plprogress" :style {:position "absolute" :display "block" :width "100%"}} (gstring/format "%.2f" (* 100.0 (/ (-  (:currubprice item) (:waprub item)) (:waprub item))))) 
                    )
                  )
                )
                (dom/div {:className "col-md-6" :style {:padding-left "0px" :padding-right "0px"}}
                  (dom/div {:className "progress"}
                    (dom/div {:className (str "progress-bar" (if (< (:usdvalue item) (* (:amount item) (:wapusd item))) " progress-bar-danger" ""))  :role "progresbar" :aria-valuenow (str (.round js/Math (.abs js/Math (* 100.0 (/ (- (:usdvalue item) (* (:amount item) (:wapusd item))) (* (:amount item) (:wapusd item))))))) :aria-valuemin "0" :aria-valuemax "100" :style {:color "black" :width (str (.round js/Math (.abs js/Math (* 100.0 (/ (- (:usdvalue item) (* (:amount item) (:wapusd item) ) ) (* (:amount item) (:wapusd item) ))))) "%") }}
                      (dom/span {:className "plprogress" :style {:position "absolute" :display "block" :width "100%"}} (gstring/format "%.2f" (* 100.0 (/ (- (:usdvalue item) (* (:amount item) (:wapusd item))) (* (:amount item) (:wapusd item))))))
                    )
                  )
                )
              )

              ;; RUB P/L
              (dom/div {:className "hidden-xs col-md-1" :style {:padding-left "0px" :padding-right "0px" :padding-top "5px"}}
                (dom/div {:className "col-md-6" :style {:padding-left "0px" :padding-right "0px"}}
                  (dom/span {:style {:position "absolute" :padding-right "5px" :text-align "right" :display "block" :width "100%" :white-space "nowrap" :background-color (if (> (:currubprice item) (:waprub item)) "lightgreen" "lightpink")}} (sbercore/split-thousands (str (.round js/Math  (* (-  (:currubprice item) (:waprub item)) (:amount item))))))
                )
                (dom/div {:className "col-md-6" :style {:padding-left "0px" :padding-right "0px"}}
                  (dom/div 
                   (dom/span {:style {:position "absolute" :padding-right "5px" :text-align "right" :display "block" :width "100%" :white-space "nowrap" :background-color (if (> (:usdvalue item) (* (:amount item) (:wapusd item) )) "lightgreen" "lightpink")}} (sbercore/split-thousands (str (.round js/Math (-  (:usdvalue item) (* (:wapusd item) (:amount item)))))))
                  )
                )
              )


              ;; USD P/L
              ;; (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px" :padding-top "10px"}}
              ;;   (dom/div
              ;;     (dom/div 
              ;;       (dom/span {:style {:position "absolute" :padding-right "5px" :text-align "right" :display "block" :width "100%"}} (sbercore/split-thousands (str (.round js/Math (/ (* (if (= isrusbond true) 1000.0 1.0) (-  (:price item) (:wap item))  (:amount item) newfxrate) (* usdrate (if (= isbond true) 100.0 1.0)))))))
              ;;     )
              ;;   )
              ;; )


              ;;Дивидендная доходность
              (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px" :visibility (if (> (:yield sec) 0) "visible" "hidden")}}

                (dom/a {:className "list-group-item" :style {:background "transparent" :text-align "right"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                  (dom/h4 {:className "list-group-item-heading"} (sbercore/split-thousands (gstring/format "%.2f" (if (nil? (:yield sec)) 0.0 (:yield sec))))
                  )
                )
              )

              ;;Дата Ex-div
              (dom/div {:className "col-xs-2 col-md-1" :style {:padding-left "0px" :padding-right "0px" :visibility (if (or (nil? (:dvddate sec)) (> (.indexOf (tf/unparse custom-formatter (tc/from-long (tc/to-long (:dvddate sec)))) "1900") 0) )   "hidden" "visible")}}
                (dom/a {:className "list-group-item" :style {:background "transparent" :text-align "right"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                  (dom/h4 {:className "list-group-item-heading"} (tf/unparse custom-formatter (tc/from-long (tc/to-long (if (nil? (:dvddate sec)) #inst "1900-01-01T00:00:00.000-00:00" (:dvddate sec)) ))))
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
                  (if (or (not= 1 assettype)
                          ;(<= (:amount x) 0) 
                          (= false (str/includes? seccode (str/upper-case (:search @sbercore/app-state)) ))
                      )  false true)
                ))
              (:positions ((keyword (:selectedclient @data)) @data))
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

                client (first (filter (fn [x] (if (= (:selectedclient @sbercore/app-state) (:code x)) true false)) (:clients @sbercore/app-state)))
                seccur (:currency sec)
                multiple (:multiple sec)
                isbond (if (= 5 (:assettype sec)) true false)

                usdrate (:price (first (filter (fn [x] (if (= "USD" (:acode x)) true false)) (:securities @sbercore/app-state))))

                fxrate (if (or (= "RUB" seccur) (= "RUR" seccur)) 1 (:price  (first (filter (fn[x] (if( = (:acode x) (if (= seccur "GBX") "GBP" seccur)) true false)) (:securities @sbercore/app-state)))))

                ;;isrusbond (if (and (= 5 (:assettype sec)) (= "RUB" (:currency sec)))  true false)

                usdcosts (* 0.01 (:multiple sec) (:amount item) (:wapusd item))

                ;tr1 (if (= false isrusbond) (println (str (:acode sec) " не российский бонд: "  " costs: " usdcosts " usdvalue: " (:usdvalue item)  " wapusd: " (:wapusd item) )))
                isbond (if (and (= 5 (:assettype sec)))  true false)
                newfxrate (if (= 0 (compare "GBX" seccur)) (/ fxrate 100.) fxrate)
                ;tr1 (.log js/console "currency: "  seccur " rate:" newfxrate)
                putdate (if (nil? (:putdate sec)) #inst "1900-01-01T00:00:00.000-00:00" (:putdate sec))
                dvddate (if (nil? (:dvddate sec)) #inst "1900-01-01T00:00:00.000-00:00" (:dvddate sec))
                ;;tr1 (println putdate)
                portfvalue (sbercore/calculatetotallimit)
            ]

            (dom/div {:className "row tablerow" :style {:margin-left "0px" :margin-right "0px"}} 
              (dom/div {:className "col-xs-2 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}
                (dom/div {:className "clientcode"}
                  (dom/a {:className "list-group-item" :style {:background "transparent"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                    (dom/h4 {:className "list-group-item-heading" :style {:white-space "nowrap"}} (:acode sec))
                  )
                  (dom/span {:className "clientinfo"}
                    (dom/input {:type "text" :style {:border-width "0px" :background-color "aqua" :width "250px"} :visibility "hidden" :value (str "ISIN: " (:isin sec))} )
                  )
                )
              )

              
              (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}

                ;;Доля в портфеле
                (dom/div {:className "col-md-6" }
                  (dom/a {:className "list-group-item" :style {:background "transparent" :padding-left "3px" :padding-right "3px" :text-align "right"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                    (dom/h4 {:className "list-group-item-heading"} (gstring/format "%.2f" (* 100.0 (/ (:posvalue item) portfvalue))))
                  )
                )

                ;; Свободно % от лимита
                (dom/div {:className "col-md-6" }
                  (dom/a {:className "list-group-item" :style {:background "transparent" :padding-left "3px" :padding-right "3px" :text-align "right"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                    (dom/h4 {:className "list-group-item-heading"} (gstring/format "%.2f" (- (/ (* (if (nil? (:bondlimit client)) 10.0 (:bondlimit client)) (:bondshare client)) 100.0) (* 100.0 (/ (:posvalue item) portfvalue)))))
                  )
                )
              )

              ;;Номинал
              (dom/div {:className "col-xs-2 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}            
                (dom/a {:className "list-group-item" :style {:background "transparent" :padding-left "3px" :padding-right "3px" :text-align "right"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                  (dom/h4 {:className "list-group-item-heading"} (sbercore/split-thousands (str (:amount item)))   )
                )            
              )


              ;;Client currency Value
              (dom/div {:className "col-xs-2 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}            
                (dom/a {:className "list-group-item" :style {:background "transparent" :padding-left "3px" :padding-right "3px" :text-align "right"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                  (dom/h4 {:className "list-group-item-heading"} (sbercore/split-thousands (gstring/format "%.0f" (:posvalue item))))))


              ;; Цена покупки
              (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}
                (dom/a {:className "list-group-item" :style {:background "transparent" :text-align "right"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                  (dom/h4 {:className "list-group-item-heading" :style {:white-space "nowrap"}} (str (if (> (:wap item) 1) (gstring/format "%.2f" (:wap item))  (subs (str (:wap item)) 0 5) ) " " (case (:currency item) "USD" "$" "GBP" "£" "GBX" "£p" "EUR" "€" "RUB" "₽" "RUR" "₽" (:currency item)) )
                  )
                )
              )

              ;; Last Price
              (dom/div {:className "hidden-xs col-md-1" :style {:padding-left "0px" :padding-right "0px"}}
                (dom/a {:className "list-group-item" :style {:background "transparent" :text-align "right"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                  (dom/h4 {:className "list-group-item-heading" :style {:white-space "nowrap"}} (str (if (> (:price item) 1) (gstring/format "%.2f" (:price item))  (subs (str (:price item)) 0 5) )))
                )
              )

              ;;Дюрация
              (dom/div {:className "hidden-xs col-md-1" :style {:padding-left "0px" :padding-right "0px"}}

                (dom/a {:className "list-group-item" :style {:background "transparent" :text-align "right"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                  (dom/h4 {:className "list-group-item-heading"} (gstring/format "%.2f" (if (nil? (:duration sec)) 0 (:duration sec)) ))
                )
              )

              ;;Put date
              (dom/div {:className "hidden-xs col-md-1" :style {:padding-left "0px" :padding-right "0px" :visibility (if (> (.indexOf (tf/unparse custom-formatter (tc/from-long (tc/to-long putdate))) "1900") 0)  "hidden" "visible")} }
                (dom/a {:className "list-group-item" :style {:background "transparent" :text-align "right"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                  (dom/h4 {:className "list-group-item-heading"} (tf/unparse custom-formatter (tc/from-long (tc/to-long putdate)))
                  )
                )
              )

              ;; Currency
              ;; (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}

              ;;   (dom/a {:className "list-group-item" :style {:text-align "right"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
              ;;     (dom/h4 {:className "list-group-item-heading"} (:currency item)    )
              ;;   )            
              ;; )

              ;; USD P/L, %%
              (dom/div {:className "plprdiv col-xs-1 hidden-md hidden-lg"}
                (dom/div {:className "progress"}
                  (dom/div {:className (str "progress-bar" (if (< (:usdvalue item) usdcosts) " progress-bar-danger" ""))  :role "progresbar" :aria-valuenow (gstring/format "%.2f" (* 100.0 (/ (- (:usdvalue item) usdcosts) usdcosts))) :aria-valuemin "0" :aria-valuemax "100" :style {:color "black" :width (str (gstring/format "%.0f" (.abs js/Math (* 100.0 (/ (- (:usdvalue item) usdcosts) usdcosts)))) "%")}}
                    (dom/span {:className "plprogress" :style {:position "absolute" :display "block" :width "100%" :white-space "nowrap"}} (gstring/format "%.2f" (* 100.0 (/ (- (:usdvalue item) usdcosts) usdcosts))))                
                  )
                )
              )
              (dom/div {:className "plprdiv hidden-xs col-md-1" :style {:padding-left "0px" :padding-right "0px" :padding-top "5px"}}
                (dom/div {:className "col-md-6" :style {:padding-left "0px" :padding-right "0px"}}
                  (dom/div {:className "progress"}
                    (dom/div {:className (str "progress-bar" (if (< (:currubprice item) (:waprub item)) " progress-bar-danger" ""))  :role "progresbar" :aria-valuenow (str (.round js/Math (.abs js/Math (* 100.0 (/ (-  (:currubprice item) (:waprub item)) (:waprub item)))))) :aria-valuemin "0" :aria-valuemax "100" :style {:color "black" :width (str (.round js/Math (.abs js/Math (* 100.0 (/ (-  (:currubprice item) (:waprub item)) (:waprub item))))) "%") }}
                      (dom/span {:className "plprogress" :style {:position "absolute" :display "block" :width "100%" :white-space "nowrap"}} (gstring/format "%.2f" (* 100.0 (/ (-  (:currubprice item) (:waprub item)) (:waprub item)))))
                    )
                  )
                )
                (dom/div {:className "col-md-6" :style {:padding-left "0px" :padding-right "0px"}}
                  (dom/div {:className "progress"}
                    (dom/div {:className (str "progress-bar" (if (< (:usdvalue item) usdcosts) " progress-bar-danger" ""))  :role "progresbar" :aria-valuenow (gstring/format "%.2f" (* 100.0 (/ (- (:usdvalue item) usdcosts) usdcosts))) :aria-valuemin "0" :aria-valuemax "100" :style {:color "black" :width (str (gstring/format "%.0f" (.abs js/Math (* 100.0 (/ (- (:usdvalue item) usdcosts) usdcosts)))) "%")}}
                      (dom/span {:className "plprogress" :style {:position "absolute" :display "block" :width "100%" :white-space "nowrap"}} (gstring/format "%.2f" (* 100.0 (/ (- (:usdvalue item) usdcosts) usdcosts))))                
                    )
                  )
                )
              )


              ;; USD RUB P/L
              (dom/div {:className "hidden-xs col-md-1" :style {:padding-left "0px" :padding-right "0px" :padding-top "5px"}}                
                (dom/div {:className "col-md-6" :style {:padding-left "0px" :padding-right "0px" }}
                  (dom/span {:style {:position "absolute" :padding-right "5px" :text-align "right" :display "block" :width "100%" :background-color (if (> (:currubprice item) (:waprub item)) "lightgreen" "lightpink") :white-space "nowrap" }} (sbercore/split-thousands (str (.round js/Math  (/ (* multiple (-  (:currubprice item) (:waprub item)) (:amount item))  100.0)))))
                )
                (dom/div {:className "col-md-6" :style {:padding-left "0px" :padding-right "0px"}}
                  (dom/div 
                    (dom/span {:style {:position "absolute" :padding-right "5px" :text-align "right" :display "block" :width "100%" :background-color (if (> (:usdvalue item) usdcosts) "lightgreen" "lightpink") :white-space "nowrap"}} (sbercore/split-thousands (str (.round js/Math (- (:usdvalue item) usdcosts)))))
                  )
                )
              )

              ;;;Yield
              (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px" :padding-top "0px"}}

                (dom/a {:className "list-group-item" :style {:background "transparent" :text-align "right"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                  (dom/h4 {:className "list-group-item-heading"} (gstring/format "%.2f" (if (nil? (:yield sec)) 0 (:yield sec))))
                )
              )


              ;; RUB P/L
              ;; (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px" :padding-top "10px"}}
              ;;   (dom/div
              ;;     (dom/div 
              ;;       

              ;;     )
              ;;   )
              ;; )

              ;;Coupon date
              (dom/div {:className "col-xs-2 col-md-1" :style {:padding-left "0px" :padding-right "0px" :visibility (if (> (.indexOf (tf/unparse custom-formatter (tc/from-long (tc/to-long dvddate))) "1900") 0)  "hidden" "visible")} }
                (dom/a {:className "list-group-item" :style {:background "transparent" :text-align "right"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
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
            (if (or (not= 5 assettype)
                    ;(<= (:amount x) 0) 
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

            (dom/div {:className "row tablerow" :style {:margin-left "0px" :margin-right "0px"}} 

              ;; Наименование контракта
              (dom/div {:className "col-xs-2 col-md-2" :style {:padding-left "0px" :padding-right "0px"}}
                (dom/a {:className "list-group-item" :style {:background "transparent"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                  (dom/h4 {:className "list-group-item-heading" :style {:white-space "nowrap"}} (:acode sec))
                )
              )

              ;;Количество контрактов
              (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}            
                (dom/a {:className "list-group-item" :style {:background "transparent" :padding-left "3px" :padding-right "3px" :text-align "right"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                  (dom/h4 {:className "list-group-item-heading"} (sbercore/split-thousands (str (:amount item)))   )
                )            
              )

              ;; Мультипликатор контракта
              (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}            
                (dom/a {:className "list-group-item" :style {:background "transparent" :padding-left "3px" :padding-right "3px" :text-align "right"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                  (dom/h4 {:className "list-group-item-heading"} (sbercore/split-thousands (str (:multiple sec)))   )
                )            
              )



              ;; Цена покупки
              (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}
                (dom/a {:className "list-group-item" :style {:background "transparent" :text-align "right"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                  (dom/h4 {:className "list-group-item-heading"} (sbercore/split-thousands  (if (> (:wap item) 1) (gstring/format "%.2f" (:wap item))  (subs (str (:usdvalue item)) 0 5))))
                )
              )

              ;; Last Price
              (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}
                (dom/a {:className "list-group-item" :style {:background "transparent" :text-align "right"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                  (dom/h4 {:className "list-group-item-heading"} (sbercore/split-thousands (if (> (:price item) 1) (gstring/format "%.2f" (:price item))  (subs (str (:price item)) 0 5))) )
                )
              )

              ;; Currency
              (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}
                (dom/a {:className "list-group-item" :style {:background "transparent" :text-align "right"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                  (dom/h4 {:className "list-group-item-heading"} (:currency item))
                )
              )


              ;; USD Currency P/L
              (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}
                (dom/a {:className "list-group-item" :style {:background "transparent" :text-align "right"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                  (dom/h4 {:className "list-group-item-heading"} (sbercore/split-thousands (gstring/format "%.0f" usdprofit)) )
                )
              )


              ;; RUB P/L
              (dom/div {:className "col-xs-2 col-md-2" :style {:padding-left "0px" :padding-right "0px"}}
                (dom/a {:className "list-group-item" :style {:background "transparent" :text-align "right"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                  (dom/h4 {:className "list-group-item-heading"} (sbercore/split-thousands (gstring/format "%.0f" rubprofit)) )
                )
              )


              ;;Дата экспирации
              (dom/div {:className "col-xs-2 col-md-2" :style {:padding-left "0px" :padding-right "0px" :visibility (if (or (nil? (:dvddate sec)) (> (.indexOf (tf/unparse custom-formatter (tc/from-long (tc/to-long (:dvddate sec)))) "1900") 0) )   "hidden" "visible")}}
                (dom/a {:className "list-group-item" :style {:background "transparent" :text-align "right"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                  (dom/h4 {:className "list-group-item-heading"} (tf/unparse custom-formatter (tc/from-long (tc/to-long (if (nil? (:dvddate sec)) #inst "1900-01-01T00:00:00.000-00:00" (:dvddate sec)) ))))
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
                          ;(= (:amount x) 0.0) 
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
        ;isrusbond (if (and (= 5 (:assettype sec)) (= "RUB" (:currency sec)))  true false)
        multiple (:multiple sec)
        isbond (if (and (= 5 (:assettype sec))
                                        ;(= "RU" (subs (:isin security) 0 2))
                        )  true false)
        ;tr1 (.log js/console (str "showtranitem: " item))
        ]
    (dom/div {:className "row tablerow" :style {:margin-left "0px" :margin-right "0px"}}
      ;; Инструмент
      (dom/div {:className "col-xs-2 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}
        (dom/div {:className "clientcode"}
          (dom/a {:className "list-group-item" :style {:background "transparent"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id sec)) }
            (dom/h4 {:className "list-group-item-heading" :style {:white-space "nowrap"}} (:acode sec))
          )
          (dom/span {:className "clientinfo"}
            (dom/input {:type "text" :style {:border-width "0px" :background-color "aqua" :width "250px"} :visibility "hidden" :value (str "ISIN: " (:isin sec))} )
          )
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
        (dom/a {:className "list-group-item" :style {:background "transparent"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id sec)) }
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
        (dom/a {:className "list-group-item" :style {:background "transparent"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id sec))}
          (dom/h4 {:className "list-group-item-heading" :style {:text-align "right" :white-space "nowrap"}} (str (if (> (:wap item) 1) (sbercore/split-thousands (gstring/format "%.2f" (:wap item)))  (subs (str (:wap item)) 0 5)) " " (case (:currency sec) "USD" "$" "GBP" "£" "GBX" "£p" "EUR" "€" "RUB" "₽" "RUR" "₽" "")) )
        )
      )

      ;; Стоимость в валюте бумаги
      (dom/div {:className "hidden-xs col-md-2" :style {:padding-left "0px" :padding-right "0px"}}
        (dom/a {:className "list-group-item" :style {:background "transparent"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id sec))}
          (dom/h4 {:className "list-group-item-heading" :style {:text-align "right" :white-space "nowrap"}} (sbercore/split-thousands (gstring/format "%.0f"  (* (:multiple sec) (:nominal item) (:wap item) (if (= true isbond) 0.01 1.0)))))
        )
      )


      ;; Стоимость в долларах США
      (dom/div {:className "col-xs-2 col-md-2" :style {:padding-left "0px" :padding-right "0px"}}
        (dom/a {:className "list-group-item" :style {:background "transparent"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id sec))}
          (dom/h4 {:className "list-group-item-heading" :style {:text-align "right" :white-space "nowrap"}} (sbercore/split-thousands (gstring/format "%.0f" (* (:multiple sec) (:nominal item) (:wapusd item) (if (= true isbond) 0.01 1.0)))))
        )
      )

      ;; Стоимость в рублях РФ
      (dom/div {:className "col-xs-2 col-md-2" :style {:padding-left "0px" :padding-right "0px"}}
        (dom/a {:className "list-group-item" :style {:background "transparent"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id sec)) }
          (dom/h4 {:className "list-group-item-heading" :style {:text-align "right" :white-space "nowrap"}} (sbercore/split-thousands (gstring/format "%.0f" (* (:multiple sec) (:nominal item) (:waprub item) (if (= true isbond) 0.01 1.0)))))
        )
      )

      ;; Дата сделки
      (dom/div {:className "col-xs-2 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}
        (dom/a {:className "list-group-item" :style {:background "transparent"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id sec))}
          (dom/h4 {:className "list-group-item-heading" :style {:text-align "right"}} (:date item) ;(tf/unparse custom-formatter (tc/from-long (tc/to-long (tf/parse custom-formatter (:date item)))))
          )
        )          
      )
    )
  )
)


(defn load-deals []
  (let []    
    (sbercore/getDeals)
  )
)

(defcomponent showdeals-view [data owner]
  (render
    [_]
    (if (or (> (count (:deals ((keyword (:selectedclient @sbercore/app-state)) @sbercore/app-state) )) 0)
      )      
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
        (dom/div {:className "panel-footer"}
          (b/button {:className (if (= 2 (:state @data)) "btn btn-info m-progress no-print" "btn btn-info no-print") :disabled? (:nomoredeals @data) :style {:width "100%"} :onClick (fn [e] (load-deals))} (if (:nomoredeals @data) "Все сделки загружены" "Загрузить ещё..."))
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
  (swap! sbercore/app-state assoc-in [:view] 1)
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
    42 ( let [] 
         ;(setPieCharts)
         (sbercore/setClientsDropDown)
       )
    43 (doswaps)
    46 (go
         (<! (timeout 100))
         (setPieCharts)
       )
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
  (did-mount [this]
    (let [
      ;tr1 (.log js/console "did mount")
      ]
      (put! ch 46)
    )    
  )
  (will-receive-props [this next-props]
    (let [

      ]
      ;(.log js/console (str "properties received"))
      (put! ch 46)
    )
  )
  (did-update [this prev-props prev-state]

  )

  (render [_]
    (let [
      stylerow {:style {:margin-left "0px" :margin-right "0px"}}
      styleprimary {:style {:margin-top "70px" :margin-left "0px" :margin-right "0px"}}

      client (first (filter (fn [x] (if (= (:selectedclient @data) (:code x)) true false)) (:clients @data)))
      ]

      (dom/div
        (sbercore/addVersionInfo)
        (om/build sbercore/website-view data {})

        (dom/div {:className "no-print" :style {:visibility (if (nil? (:selectedclient @sbercore/app-state)) "hidden" "visible")}}
          (dom/div  {:className "panel panel-primary"}
            (dom/div {:className "panel-heading" :style {:margin-top "70px"}}
              (dom/div (assoc stylerow  :className "row" )
                (dom/div {:className "col-xs-4 col-md-4" :style {:text-align "center"}} "По типам валют")

                (dom/div {:className "col-xs-4 col-md-4" :style {:text-align "center"}} "Уровень маржи")

                (dom/div {:className "col-xs-4 col-md-4" :style {:text-align "center"}} "По типам инструментов")
              )
            )
            (dom/div {:className "panel-body"}
              (om/build showcharts-view data {})
            )
          )
        )

        (if (not (nil? (:selectedclient @sbercore/app-state)))
          (if (or (> (count (:positions ((keyword (:selectedclient @sbercore/app-state)) @sbercore/app-state) )) 0)
                  (= (:state @data ) 1)
            )
            (dom/div




              (dom/div {:style {:margin-top "0px"} :className "panel panel-info"}
                (dom/div {:className "panel-heading"}
                  (dom/div (assoc stylerow  :className "row" )
                    (dom/div {:className "col-xs-12 col-md-12" :style {:text-align "center"}} "Денежная позиция")
                  )
                )
              )

              (dom/div  {:className "panel panel-primary"}
                (dom/div {:className "panel-heading"}
                  (dom/div (assoc stylerow  :className "row" )
                    (dom/div {:className "col-xs-2 col-md-1" :style {:text-align "center"}} "")
                    (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "Доля, %")
                    (dom/div {:className "col-xs-2 col-md-2" :style {:text-align "center"}} "Доллар США")
                    (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "")
                    (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "Рубль")
                    (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "")
                    (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "")
                    (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "Евро")
                    (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "")
                    (dom/div {:className "col-xs-1 col-md-2" :style {:text-align "center"}} "Фунт")
                  )
                )
                (dom/div {:className "panel-body"}
                  (om/build showcash-view  data {})
                )
              )




              (dom/div {:className "panel panel-info"}
                (dom/div {:className "panel-heading"}
                  (dom/div (assoc stylerow  :className "row" )
                    (dom/div {:className "col-xs-12 col-md-12" :style {:text-align "center"} } (str "Акции. Совокупный лимит от портфеля: " (:stockshare client) "%, Лимит на бумагу: " (if (nil? (:stocklimit client)) 10.0 (:stocklimit client)) "%") )
                  )
                )
              )
              (dom/div  {:className "panel panel-primary"}
                (dom/div {:className "panel-heading"}
                  (dom/div (assoc stylerow  :className "row" )
                    (dom/div {:className "col-xs-2 col-md-1" :style {:text-align "center"}} "Бумага")
                    (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "Доля, % / свободно %")
                    (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "Кол-во")
                    (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} (str "Ст-ть в " (:currency (first (filter (fn [x] (if (= (:selectedclient @sbercore/app-state) (:code x)) true false)) (:clients @sbercore/app-state))))) )
                    (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "Цена покупки")
                    (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "Last price")
                    (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "Пот-л роста " (dom/span {:className "glyphicon glyphicon-arrow-down"}))
                    (dom/div {:className "hidden-xs col-md-1" :style {:text-align "center"}} "ANR")
                    (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "P/L RUB / USD %")
                    (dom/div {:className "hidden-xs col-md-1" :style {:text-align "center"}} "P/L RUB / USD")
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
                    (dom/div {:className "col-xs-12 col-md-12" :style {:text-align "center"}} (str "Облигации. Совокупный лимит от портфеля: " (:bondshare client) "%, Лимит на бумагу: " (if (nil? (:bondlimit client)) 10.0 (:bondlimit client)) "%"))
                  )
                )
              )
              (dom/div  {:className "panel panel-primary" :style {:margin-top "0px" :margin-left "0px" :margin-right "0px"}}
                (dom/div {:className "panel-heading"}
                  (dom/div (assoc stylerow  :className "row" )
                    (dom/div {:className "col-xs-2 col-md-1" :style {:text-align "center"}} "Security")
                    (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "Доля, % / свободно %")
                    (dom/div {:className "col-xs-2 col-md-1" :style {:text-align "center"}} "Номинал")
                    (dom/div {:className "col-xs-2 col-md-1" :style {:text-align "center"}} (str "Ст-ть без НКД в " (:currency (first (filter (fn [x] (if (= (:selectedclient @sbercore/app-state) (:code x)) true false)) (:clients @sbercore/app-state))))))
                    (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "Цена покупки")
                    (dom/div {:className "hidden-xs col-md-1" :style {:text-align "center"}} "Last price")
                    (dom/div {:className "hidden-xs col-md-1" :style {:text-align "center"}} "Дюрация" (dom/span {:className "glyphicon glyphicon-arrow-up"}) )
                    (dom/div {:className "hidden-xs col-md-1" :style {:text-align "center"}} "Put Date")
                    (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "P/L RUB / USD %")
                    (dom/div {:className "hidden-xs col-md-1" :style {:text-align "center"}} "P/L RUB / USD")
                    (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "Yield")
                    (dom/div {:className "col-xs-2 col-md-1" :style {:text-align "center"}} "Coupon date")
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
                    (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "Количество")
                    (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "Мультип-р")
                    (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "Цена покупки")
                    (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "Last price")
                    (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "Currency")
                    (dom/div {:className "col-xs-1 col-md-1" :style {:text-align "center"}} "P/L USD")
                    (dom/div {:className "col-xs-2 col-md-2" :style {:text-align "center"}} "P/L RUB")
                    (dom/div {:className "col-xs-2 col-md-2" :style {:text-align "center"}} "Экспирация")
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




(sec/defroute positions-page "/positions" []
  (om/root positions-view
           sbercore/app-state
           {:target (. js/document (getElementById "app"))}))
