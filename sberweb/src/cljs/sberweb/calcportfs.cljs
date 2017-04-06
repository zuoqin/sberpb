(ns sberweb.calcportfs (:use [net.unit8.tower :only [t]])
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

              isrusbond (if (and (= 5 (:assettype sec))
                                 (= "RU" (subs (:isin sec) 0 2))
                                 )  true false)

              isbond (if (and (= 5 (:assettype sec))
                                 ;(= "RU" (subs (:isin security) 0 2))
                                 )  true false)
              usdrate (:price (first (filter (fn [x] (if (= "USD" (:acode x)) true false)) (:securities @sbercore/app-state))))
              fxrate (if (or (= "RUB" seccurrency) (= "RUR" seccurrency)) 1 (:price (first (filter (fn[x] (if( = (:acode x) (if (= seccurrency "GBX") "GBP" seccurrency)) true false)) (:securities @sbercore/app-state)))))
              newfxrate (if (= 0 (compare "GBX" seccurrency)) (/ fxrate 100.) fxrate)
             ]


          (dom/div {:className "row" :style {:margin-left "0px" :margin-right "0px"}} 
            (dom/div {:className "col-xs-2 col-md-2" :style {:padding-left "0px" :padding-right "0px"}}
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
                (dom/h4 {:className "list-group-item-heading"} (if (> (:wapcur item) 1) (gstring/format "%.2f" (if (nil? (:wapcur item)) 0.00 (:wapcur item)) )  (subs (str (if (nil? (:wapcur item)) 0.00 (:wapcur item))) 0 5) )    )
              )

            )

            (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}

              (dom/a {:className "list-group-item" :style {:text-align "right"} :href (str  "#/postrans/" (:id (first (filter (fn [x] (if (= (compare (:code x) (:selectedclient @sbercore/app-state)) 0) true false)) (:clients @sbercore/app-state)))) "/" (:id item) ) }
                (dom/h4 {:className "list-group-item-heading"} (if (> price 1) (gstring/format "%.2f" price)  (subs (str price) 0 5) )    )
              )            
            )



            ;; Currency
            (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px"}}

              (dom/a {:className "list-group-item" :style {:text-align "right"} :href (str  "#/postrans/" (:id item)  "/" (:selectedsec @sbercore/app-state)  ) }
                (dom/h4 {:className "list-group-item-heading"}  (:currency (first (filter (fn [x] (if (= (:id x) (:selectedsec @sbercore/app-state)) true false)) (:securities @sbercore/app-state))) item)    )
              )

           )


            ;; USD value
            (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px" :padding-top "10px"}}
              (dom/div
                (dom/div 
                  (dom/span {:style {:position "absolute" :padding-right "5px" :text-align "right" :display "block" :width "100%"}} (sbercore/split-thousands (str (.round js/Math (:usdvalue item)   ) )))
                )
              )
            )


            ;; Sec Currency P/L, %%
            (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px" :padding-top "10px"}}
              (dom/div {:className "progress"}
                (dom/div {:className (str "progress-bar" (if (< price (:wapcur item)) " progress-bar-danger" ""))  :role "progresbar" :aria-valuenow (str (.round js/Math (.abs js/Math (* 100.0 (/ (-  price (:wapcur item)) (if (> (:waprub item) 0.0001) (:waprub item) 0.0001) ))))) :aria-valuemin "0" :aria-valuemax "100" :style {:color "black" :width (str (.round js/Math (.abs js/Math (* 100.0 (/ (-  price (if (> (:wapcur item) 0.0001) (:wapcur item) 0.001) ) (:wapcur item))))) "%") }}
                  (dom/span {:style {:position "absolute" :display "block" :width "100%"}} (.round js/Math (* 100.0 (/ (- price (:wapcur item)) (if (> (:wapcur item) 0.0001) (:wapcur item) 0.0001) ))) ) 

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
                  (dom/span {:style {:position "absolute" :padding-right "5px" :text-align "right" :display "block" :width "100%"}} (sbercore/split-thousands (str (.round js/Math  (if (= isrusbond true) (/ (* 1000.0 (-  (:currubprice item) (:waprub item)) (:amount item))  100.0)  (if (= isbond true) (/ (* (-  (:currubprice item) (:waprub item)) (:amount item))  100.0)  (* (-  (:currubprice item) (:waprub item)) (:amount item))))   ))))
                )
              )
            )


            ;; USD P/L
            (dom/div {:className "col-xs-1 col-md-1" :style {:padding-left "0px" :padding-right "0px" :padding-top "10px"}}
              (dom/div
                (dom/div 
                  (dom/span {:style {:position "absolute" :padding-right "5px" :text-align "right" :display "block" :width "100%"}} (sbercore/split-thousands (str (.round js/Math (/ (* (if (= isrusbond true) 1000.0 1.0) (- (/ (:currubprice item) usdrate) (:wapusd item) )  (:amount item) ) (if (= isbond true) 100.0 1.0) )))))
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

(defcomponent calcportfs-view [data owner]
  (will-mount [_]
    (onMount data)
  )
  (render [_]
    (let [
      stylerow {:style {:margin-left "0px" :margin-right "0px"}}
      styleprimary {:style {:margin-top "70px" :margin-left "0px" :margin-right "0px"}}
      ]
      (dom/div {:className "container" :style {:width "100%" :padding-top "283px" :backgroundImage "url(/images/loginbackground.png)" :backgroundSize "cover"}  }
        ;(om/build t5pcore/website-view data {})
        ;(dom/h1 "Login Page")
        ;(dom/img {:src "images/LogonBack.jpg" :className "img-responsive company-logo-logon"})
        (dom/form {:className "form-signin"}
          (dom/input #js {:type "text" :ref "txtUserName"
             :defaultValue  settings/demouser  :className "form-control" :placeholder "User Name" } )
          (dom/input {:className "form-control" :ref "txtPassword" :id "txtPassword" :defaultValue settings/demopassword :type "password"  :placeholder "Password"} )
          (dom/button #js {
            :className (if (= (:state @app-state) 0) "btn btn-lg btn-primary btn-block" "btn btn-lg btn-primary btn-block m-progress" )  :type "button" } "Login")

        )
        (dom/div {:style {:margin-bottom "200px"}})
      )
    )
  )
)




(sec/defroute portfolios-page "/calcportfs" []
  (om/root calcportfs-view
           sbercore/app-state
           {:target (. js/document (getElementById "app"))}))