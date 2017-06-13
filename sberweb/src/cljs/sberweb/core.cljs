(ns sberweb.core
  (:require [om.core :as om :include-macros true]
            [om-tools.dom :as dom :include-macros true]
            [om-tools.core :refer-macros [defcomponent]]
            [secretary.core :as sec :include-macros true]
            [goog.events :as events]
            [goog.history.EventType :as EventType]
            [ajax.core :refer [GET POST]]
            [sberweb.settings :as settings]
            [om.dom :as omdom :include-macros true]

            [om-bootstrap.button :as b]

            [clojure.string :as str]
            [goog.string :as gstring]
            [goog.string.format]
  )
  (:import goog.History)
)

(enable-console-print!)

(defonce app-state (atom {:state 0 :percentage "5.00" :noholders 0 :selectedclient nil :search "" :selectedcurrency "all" :user {:role "admin"} }))





(def jquery (js* "$"))


(defn split-thousands [n-str]
  (let [index (str/index-of n-str ".")
        lstr (subs n-str 0 (if (nil? index) (count n-str) index))
        rstr (if (nil? index) "" (subs n-str index)) 
        splitstr (->> lstr
          reverse
          (partition 3 3 [])
          (map reverse)
          reverse
          (map #(apply str %))
          (str/join " "))
    ]
    (str splitstr rstr)
  )
)


(defn doLogout [data]
  (swap! app-state assoc-in [:view]   0 )
)

(defn goCalcPortfs [e]
  (aset js/window "location" "#/calcportfs")
  (swap! app-state assoc-in [:view] 4 )
)

(defn goPortfolios [e]
  (aset js/window "location" "#/portfolios")
  (swap! app-state assoc-in [:view] 2 )
)

(defn goPositions [e]
  (aset js/window "location" "#/positions")
  (swap! app-state assoc-in [:view] 1 )
)

(defn goPositions2 [e]
  (aset js/window "location" "#/positions2")
  (swap! app-state assoc-in [:view] 1 )
)

(defn goUsers [data]
  (swap! app-state assoc-in [:view] 3 )
)

(defn goSettings [data]
  ;;(swap! app-state assoc-in [:view] 5 )
  (.open js/window (str "http://localhost:3000/tradeidea/" (:token (:token @app-state))))
)


(defcomponent logout-view [_ _]
  (render
   [_]
   (let [style {:style {:margin "10px"}}]
     (dom/div style
       (dom/a (assoc style :href "#/login") 
              "Login"
              )
      )
    )
  )
)

(defn handle-chkb-change [e]
  ;(.log js/console (.. e -target -id) )  
  ;(.log js/console "The change ....")
  (.stopPropagation e)
  (.stopImmediatePropagation (.. e -nativeEvent) )
  (swap! app-state assoc-in [(keyword  (.. e -currentTarget -id) )] 
    (if (= true (.. e -currentTarget -checked)  ) 1 0)
  )
  ;(CheckCalcLeave)
  ;(set! (.-checked (.. e -currentTarget)) false)
  ;(dominalib/remove-attr!  (.. e -currentTarget) :checked)
  ;;(dominalib/set-attr!  (.. e -currentTarget) :checked true)
)

(defn handle-change [e owner]
  
  (swap! app-state assoc-in [:form (keyword (.. e -target -id))] 
    (.. e -target -value)
  ) 
)

(defn handle-change-currency [e owner]
  
  (swap! app-state assoc-in [:form (keyword (.. e -target -id))] 
    (.. e -target -value)
  ) 
)

(defn map-deal [deal]
  (let [
        trans (loop [result [] trans (:transactions deal) ]
                (if (seq trans) 
                  (let [
                        tran (first trans)
                        ;tr1 (.log js/console (str "tran: " tran ))
                        ]
                    (recur (conj result {:security (:security deal) :date (:date tran) :direction (:direction tran) :nominal (:nominal tran) :wap (:wap tran) :wapusd (:wapusd tran) :waprub (:waprub tran)})
                         (rest trans))
                  )
                  result)
        )        
        result trans
    ]
    ;
    result
  )
)


(defn map-position [position]
  (let [
    client (first (filter (fn [x] (if (= (:selectedclient @app-state) (:code x)) true false)) (:clients @app-state)))
    secid (js/parseInt (name (nth position 0)))
    security (first (filter (fn [x] (if (= (:id x) secid) true false)) (:securities @app-state)))
    
    posprice (:price (nth position 1))
    price (if (nil? (:price security)) posprice (:price security))


    currency (if (= 0 (compare "GBX" (:currency security))) "GBP" (:currency security))

    
    fxrate (if (or (= "RUB" currency) (= "RUR" currency)) 1 (:price  (first (filter (fn[x] (if( = (:acode x) currency) true false)) (:securities @app-state)))))
    usdrate (:price (first (filter (fn [x] (if (= "USD" (:acode x)) true false)) (:securities @app-state))))


    tr1 (.log js/console (str "client currency: " (:currency client)))
    clientcurrencyrate (:price (first (filter (fn [x] (if (= (str/upper-case (:currency client)) (:acode x)) true false)) (:securities @app-state))))

    isrusbond (if (and (= 5 (:assettype security)) 
                       (= "RU" (subs (:isin security) 0 2))
                       )  true false)
    isbond (if (and (= 5 (:assettype security)) 
                   ;(= "RU" (subs (:isin security) 0 2))
                   )  true false)
    newfxrate (if (= 0 (compare "GBX" (:currency security))) (/ fxrate 100.) fxrate)

    result {:id secid :currency (:currency security) :amount (:amount (nth position 1)) :wap posprice :price price :waprub (:rubprice (nth position 1)) :currubprice (* price newfxrate) :wapusd (:wapusd (nth position 1)) :usdvalue (/ (* (:amount (nth position 1)) (:price security)  (if (= isrusbond true) 10.0 (if (= isbond true) (/ newfxrate 100.0 ) newfxrate ) ) ) usdrate) :posvalue (/ (* (:amount (nth position 1)) (:price security)  (if (= isrusbond true) 10.0 (if (= isbond true) (/ newfxrate 100.0 ) newfxrate ) ) ) clientcurrencyrate) }



    ]
    result
  )
)

(defn map-portfolio [item]
  (let [
    ;tr1 (.log js/console item)
    portfid (name (nth item 0))
    portfolio (first (filter (fn [x] (if (= (compare (:code x) portfid) 0) true false)) (:clients @app-state)))

    security (first (filter (fn [x] (if (= (:id x) (:selectedsec @app-state)) true false)) (:securities @app-state)))
    posprice (get (nth item 1) "price")
    price (if (nil? (:price security)) posprice (:price security))

        
    currency (if (= 0 (compare "GBX" (:currency security))) "GBP" (:currency security))

    usdrate (:price (first (filter (fn [x] (if (= "USD" (:acode x)) true false)) (:securities @app-state)))) 

    fxrate (if (or (= "RUB" currency) (= "RUR" currency)) 1 (:price  (first (filter (fn[x] (if( = (:acode x) currency) true false)) (:securities @app-state)))))

    newfxrate (if (= 0 (compare "GBX" (:currency security))) (/ fxrate 100.) fxrate)

    isrusbond (if (and (= 5 (:assettype security)) 
                       (= "RU" (subs (:isin security) 0 2))
                       )  true false)
    isbond (if (and (= 5 (:assettype security)) 
                   ;(= "RU" (subs (:isin security) 0 2))
                   )  true false)

    result {:id (:id portfolio) :amount (:amount (nth item 1) ) :wapcur (:price (nth item 1) ) :wapusd (:wapusd (nth item 1) ) :waprub (:rubprice (nth item 1) ) :currubprice (* price newfxrate) :usdvalue (/ (* (:amount (nth item 1)) (:price security)  (if (= isrusbond true) 10.0 (if (= isbond true) (/ newfxrate 100.0 ) newfxrate ) ) ) usdrate) }

    ]
    result
  )
)


(defn map-calc-portfolio [item]
  (let [
    portfid 1
    ;; portfolio (first (filter (fn [x] (if (= (compare (:code x) portfid) 0) true false)) (:clients @app-state)))

    ;; security (first (filter (fn [x] (if (= (:id x) (:selectedsec @app-state)) true false)) (:securities @app-state)))
    ;; posprice (get (nth item 1) "price")
    ;; price (if (nil? (:price security)) posprice (:price security))

        
    ;; currency (if (= 0 (compare "GBX" (:currency security))) "GBP" (:currency security))

    ;; usdrate (:price (first (filter (fn [x] (if (= "USD" (:acode x)) true false)) (:securities @app-state)))) 

    ;; fxrate (if (or (= "RUB" currency) (= "RUR" currency)) 1 (:price  (first (filter (fn[x] (if( = (:acode x) currency) true false)) (:securities @app-state)))))

    ;; newfxrate (if (= 0 (compare "GBX" (:currency security))) (/ fxrate 100.) fxrate)
    ;; isrusbond (if (and (= 5 (:assettype security)) 
    ;;                    (= "RU" (subs (:isin security) 0 2))
    ;;                    )  true false)
    ;; isbond (if (and (= 5 (:assettype security)) 
    ;;                ;(= "RU" (subs (:isin security) 0 2))
    ;;                )  true false)

    ;; result {:id (:id portfolio) :amount (:amount (nth item 1) ) :wapcur (:price (nth item 1) ) :wapusd (:price (nth item 1) ) :waprub (:rubprice (nth item 1) ) :currubprice (* price newfxrate) :usdvalue (/ (* (:amount (nth item 1)) (:price security)  (if (= isrusbond true) 10.0 (if (= isbond true) (/ newfxrate 100.0 ) newfxrate ) ) ) usdrate) }

    ]
    ;(.log js/console item)
    item
  )
)

(defn OnGetPortfolios [response]
  (swap! app-state assoc :state 1 )
  (swap! app-state assoc-in [ (keyword (str (:selectedsec @app-state)) ) :portfolios] (map (fn [x] (map-portfolio x)) response) )
)

(defn OnGetCalcPortfolios [response]
  ;(set! ( . (.getElementById js/document "btnrefresh") -disabled) false)
  (swap! app-state assoc :state 1 )
  (swap! app-state assoc-in [ (keyword (str (:selectedsec @app-state)) ) :calcportfs] (map (fn [x] (map-calc-portfolio x)) response) )
)

(defn OnGetPositions [response]
   (swap! app-state assoc-in [(keyword (:selectedclient @app-state)) :positions] (map (fn [x] (map-position x)) (filter (fn [x] (if (> (:amount (nth x 1)) 0) true false)) response) ) )
)

(defn OnGetDeals [response]
   (swap! app-state assoc-in [(keyword (:selectedclient @app-state)) :deals] (flatten (map (fn [x] (map-deal x)) (filter (fn [x] (if (> 1 1) true true)) response) )))
)






(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "something bad happened: " status " " status-text))
)
,


(defn getPositions [] 
  (GET (str settings/apipath "api/position?client=" (:selectedclient @app-state) ) {
    :handler OnGetPositions
    :error-handler error-handler
    :headers {
      :content-type "application/json"
      :Authorization (str "Bearer "  (:token (:token @app-state))) }
  })
)

(defn getDeals [] 
  (GET (str settings/apipath "api/deals?client=" (:selectedclient @app-state) ) {
    :handler OnGetDeals
    :error-handler error-handler
    :headers {
      :content-type "application/json"
      :Authorization (str "Bearer "  (:token (:token @app-state)))}
  })
)


(defn getPortfolios [] 
  (GET (str settings/apipath "api/portfolios?security=" (:selectedsec @app-state) ) {
    :handler OnGetPortfolios
    :error-handler error-handler
    :headers {
      :content-type "application/json"
      :Authorization (str "Bearer "  (:token (:token @app-state))) }
  })
)

(defn getCalcPortfolios [] 
  (swap! app-state assoc :state 2 )
  ;(set! ( . (.getElementById js/document "btnrefresh") -disabled) true)
  (GET (str settings/apipath "api/calcshares?security=" (:selectedsec @app-state) "&percentage=" (:percentage @app-state) ) {
    :handler OnGetCalcPortfolios
    :error-handler error-handler
    :headers {
      :content-type "application/json"
      :Authorization (str "Bearer "  (:token (:token @app-state))) }
  })
)

(defn onSecsDropDownChange [id value]
  (let [
        code (:id (first (filter (fn[x] (if (= (:id x) (js/parseInt value) ) true false)) (:securities @app-state)))  )
        ]

    (swap! app-state assoc-in [:selectedsec] code)
    (if (nil? (:portfolios ((keyword value) @app-state)))
      (getPortfolios)
    )
  )
  
  ;;(.log js/console value)  
)

(defn onCalcSecsDropDownChange [id value]
  (let [
        code (:id (first (filter (fn[x] (if (= (:id x) (js/parseInt value) ) true false)) (:securities @app-state)))  )
        ]

    (swap! app-state assoc-in [:selectedsec] code)
    ;(if (nil? (:calcportfs ((keyword value) @app-state))))
    (getCalcPortfolios)
  )
  
  ;;(.log js/console value)  
)

(defn onCalcCurrenciesDropDownChange [id value]
  (let [
        code ""
        ]

    (swap! app-state assoc-in [:selectedcurrency] value)
    ;(if (nil? (:calcportfs ((keyword value) @app-state))))
    ;(getCalcPortfolios)
  )
  
  ;;(.log js/console value)  
)

(defn onDropDownChange [id value]
  (let [
        code (:code (first (filter (fn[x] (if (= (:id x) (js/parseInt value) ) true false)) (:clients @app-state)))  )
        ]

    (swap! app-state assoc-in [:selectedclient] code)
    (if (nil? (:positions ((keyword value) @app-state)))
      (getPositions)
    )

    (if (nil? (:deals ((keyword value) @app-state)))
      (getDeals)
    )
  )
  

  ;;(.log js/console value)  

)


(defn comp-clients
  [client1 client2]
  (if (> (compare (:code client1) (:code client2)) 0) 
      false
      true
  )
)

(defn comp-secs
  [security1 security2]
  (if (> (compare (:acode security1) (:acode security2)) 0) 
      false
      true
  )
)


(defn buildClientsList [data owner]
  (map
    (fn [text]
      (dom/option {:key (:code text) :value (:id text)
                    :onChange #(handle-change % owner)} (:name text))
    )
    (sort (comp comp-clients) (:clients @app-state )) 
  )
)


(defn buildSecsList [data owner]
  (map
    (fn [text]
      (dom/option {:key (:id text) :value (:id text)
                    :onChange #(handle-change % owner)} (:acode text))
    )
    (sort (comp comp-secs) (:securities @app-state ))
  )
)



(defn setSecsDropDown []
  (jquery
     (fn []
       (-> (jquery "#securities" )
         (.selectpicker {})
       )
     )
   )
   (jquery
     (fn []
       (-> (jquery "#securities" )
         (.selectpicker "val" (:id (first (filter (fn [x] (if (= (:id x) (:selectedsec @app-state)) true false )) (:securities @app-state)) )) )
         (.on "change"
           (fn [e]
             (
               onSecsDropDownChange (.. e -target -id) (.. e -target -value)
             )
           )
         )
       )
     )
   )
)

(defn setCalcSecsDropDown []
  (swap! app-state assoc :state 0)
  ;(set! ( . (.getElementById js/document "btnrefresh") -disabled) true)
  (jquery
     (fn []
       (-> (jquery "#securities" )
         (.selectpicker {})
       )
     )
   )
   (jquery
     (fn []
       (-> (jquery "#securities" )
         (.selectpicker "val" (:id (first (filter (fn [x] (if (= (:id x) (:selectedsec @app-state)) true false )) (:securities @app-state)) )) )
         (.on "change"
           (fn [e]
             (
               onCalcSecsDropDownChange (.. e -target -id) (.. e -target -value)
             )
           )
         )
       )
     )
   )



  (jquery
     (fn []
       (-> (jquery "#currencies" )
         (.selectpicker {})
       )
     )
   )
   (jquery
     (fn []
       (-> (jquery "#currencies" )
         (.selectpicker "val" (:selectedcurrency @app-state))
         (.on "change"
           (fn [e]
             (
               onCalcCurrenciesDropDownChange (.. e -target -id) (.. e -target -value)
             )
           )
         )
       )
     )
   )
)

(defn setClientsDropDown []  
  (jquery
     (fn []
       (-> (jquery "#clients" )
         (.selectpicker {})
       )
     )
   )
   (jquery
     (fn []
       (-> (jquery "#clients" )
         (.selectpicker "val" (:id (first (filter (fn [x] (if (= (:code x) (:selectedclient @app-state)) true false )) (:clients @app-state)) )) )
         (.on "change"
           (fn [e]
             (
               onDropDownChange (.. e -target -id) (.. e -target -value)
             )
           )
         )
       )
     )
   )
)



(defn onDidUpdate [data]
  (setClientsDropDown)
    ;; (jquery
    ;;   (fn []
    ;;     (-> (jquery "#side-menu")
    ;;       (.metisMenu)
    ;;     )
    ;;   )
    ;; )

)

(defn onMount [data]
  (.log js/console "Mount core happened")
  (setClientsDropDown)
)


(defcomponent users-navigation-view [data owner]
  (did-mount [_]
    (onMount data)
  )
  (did-update [this prev-props prev-state]
    onDidUpdate data
  )
  (render [_]
    (let [style {:style {:margin "10px" :padding-bottom "0px"}}
      stylehome {:style {:margin-top "0px"} }
      ]
      (dom/nav {:className "navbar navbar-default navbar-static-top" :role "navigation"}
        (dom/div {:className "navbar-header"}
          (dom/button {:type "button" :className "navbar-toggle"
            :data-toggle "collapse" :data-target ".navbar-collapse"}
            (dom/span {:className "sr-only"} "Toggle navigation")
            (dom/span {:className "icon-bar"})
            (dom/span {:className "icon-bar"})
            (dom/span {:className "icon-bar"})
          )
          (dom/a  (assoc stylehome :className "navbar-brand")
            (dom/span {:id "pageTitle"}  (:text (:current @data)) )
          )
        )
        (dom/ul {:className "nav navbar-top-links navbar-right"}
          ;;(displayMessagesBlock data)
          ;;(displayUserSettingsBlock data)
        )
        ;;(displaySideBarBlock data)
      )
    )
  )
)
(defn handleChange [e]
  (swap! app-state assoc-in [(keyword (.. e -nativeEvent -target -id))] (.. e -nativeEvent -target -value))
)

(defn handleCheck [e]
  (.stopPropagation e)
  (.stopImmediatePropagation (.. e -nativeEvent) )
  (swap! app-state assoc-in [(keyword (.. e -nativeEvent -target -id))] (.. e -nativeEvent -target -checked))
)

(defn printMonth []
  (.print js/window)
)


(defn downloadPortfolio [e]
  (aset js/window "location" (str "/clientexcel/" (:selectedclient @app-state)))
)




(defcomponent positions-navigation-view [data owner]
  (render [_]
    (let [style {:style {:margin "10px" :padding-bottom "0px"}}
      stylehome {:style {:margin-top "10px"} }
      ]
      (dom/nav {:className "navbar navbar-default navbar-fixed-top" :role "navigation"}
        (dom/div {:className "navbar-header"}
          (dom/button {:type "button" :className "navbar-toggle"
            :data-toggle "collapse" :data-target ".navbar-ex1-collapse"}
            (dom/span {:className "sr-only"} "Toggle navigation")
            (dom/span {:className "icon-bar"})
            (dom/span {:className "icon-bar"})
            (dom/span {:className "icon-bar"})
          )
          (dom/a  (assoc stylehome :className "navbar-brand")
            (dom/span {:id "pageTitle"} (:text (:current @data)) )
          )
        )
        (dom/div {:className "collapse navbar-collapse navbar-ex1-collapse" :id "menu"}
          (dom/ul {:className "nav navbar-nav" :style {:padding-top "17px" :visibility (if (= (compare (:name (:current @data))  "Positions") 0 ) "visible" "hidden")}}
            (dom/li
              (dom/div {:style {:margin-right "10px" :visibility (if (and (= (compare (:name (:current @data)) "Positions") 0) (or (= (:role (:user @data)) "admin") (= (:role (:user @data)) "admin")) ) "visible" "hidden")}} 
                (omdom/select #js {:id "clients"
                                   :className "selectpicker"
                                   :data-show-subtext "true"
                                   :data-live-search "true"
                                   :onChange #(handle-change % owner)
                                   }                
                  (buildClientsList data owner)
                )
              )
            )
            (dom/li
              (dom/h5 {:style {:margin-left "5px" :margin-right "5px" :height "32px" :margin-top "1px"}} " "
      (dom/input {:id "search" :type "text" :placeholder "Search" :style {:height "32px" :margin-top "1px"} :value  (:search @data) :onChange (fn [e] (handleChange e )) })  )
            )

            ;; (dom/li {:style {:margin-left "5px"}}
            ;;   (b/button {:className "btn btn-default" :onClick (fn [e] (downloadPortfolio e) )} "Download Excel")
            ;; )
          )
          (dom/ul {:className "nav navbar-nav navbar-right"}
            (dom/li {:className "dropdown"}
              (dom/a {:className "dropdown-toggle" :data-toggle "dropdown"  :aria-expanded "false" }
                 (dom/i {:className "fa fa-exchange"})
                 (dom/i {:className "fa fa-caret-down"})
              )
              (dom/ul {:className "dropdown-menu dropdown-messages"}
                (dom/li 
                  (dom/a {:style {:cursor "pointer" :pointer-events (if (nil? (:selectedclient @app-state)) "none" "all")} :onClick (fn [e] (downloadPortfolio e) )}
                    (dom/div
                      (dom/i {:className "fa fa-cloud-download"})
                     "Сохранить в Excel"
                    )
                  )
                )
                (dom/li {:className "divider"})
                (dom/li 
                  (dom/a {:style {:cursor "pointer" :pointer-events (if (nil? (:selectedclient @app-state)) "none" "all")} :onClick (fn [e] (printMonth) )}
                    (dom/div
                      (dom/i {:className "fa fa-print"})
                      "Печать"
                    )
                  )
                )
              )
            )
            (dom/li {:className "dropdown"}
              (dom/a {:className "dropdown-toggle" :data-toggle "dropdown"  :aria-expanded "false" }
                 (dom/i {:className "fa fa-tasks fa-fw"})
                 (dom/i {:className "fa fa-caret-down"})
              )
              (dom/ul {:className "dropdown-menu dropdown-tasks"}
                (dom/li
                  (dom/a {:href "#/positions2" :onClick (fn [e] (goPositions2 e))}
                    (dom/div
                      (dom/i {:className "fa fa-comment fa-fw"})
                      "Позиции с НКД"
                    )
                  )
                )
                (dom/li {:className "divider"})
                (dom/li
                  (dom/a {:href "#/portfolios" :onClick (fn [e] (goPortfolios e))}
                    (dom/div
                      (dom/i {:className "fa fa-twitter fa-fw"})
                      "Держатели бумаги"
                    )
                  )
                )
                (dom/li {:className "divider"})
                (dom/li
                  (dom/a {:href "#/calcportfs" :onClick (fn [e] (goCalcPortfs e))}
                    (dom/div
                      (dom/i {:className "fa fa-tasks fa-fw"})
                      "Расчеты"
                    )
                  )
                )
              )
            )

            (dom/li {:className "dropdown"}
              (dom/a {:className "dropdown-toggle" :data-toggle "dropdown"  :aria-expanded "false" }
                 (dom/i {:className "fa fa-user fa-fw"})
                 (dom/i {:className "fa fa-caret-down"})
              )
              (dom/ul {:className "dropdown-menu dropdown-user"}
                (dom/li
                  (dom/a {:href "#/login"}
                    (dom/div
                      (dom/i {:className "fa fa-sign-out fa-fw"})
                      "Выход"
                    )
                  )
                )
              )
            )
          )
        )
      )
    )
  )
)


(defcomponent portfolios-navigation-view [data owner]
  (render [_]
    (let [style {:style {:margin "10px" :padding-bottom "0px"}}
      stylehome {:style {:margin-top "10px"} }
      ]
      (dom/nav {:className "navbar navbar-default navbar-fixed-top" :role "navigation"}
        (dom/div {:className "navbar-header"}
          (dom/button {:type "button" :className "navbar-toggle"
            :data-toggle "collapse" :data-target ".navbar-ex1-collapse"}
            (dom/span {:className "sr-only"} "Toggle navigation")
            (dom/span {:className "icon-bar"})
            (dom/span {:className "icon-bar"})
            (dom/span {:className "icon-bar"})
          )
          (dom/a  (assoc stylehome :className "navbar-brand")
            (dom/span {:id "pageTitle"} (:text (:current @data)) )
          )
        )
        (dom/div {:className "collapse navbar-collapse navbar-ex1-collapse" :id "menu"}
          (dom/ul {:className "nav navbar-nav" :style {:padding-top "17px" :visibility (if (= (compare (:name (:current @data))  "Portfolios") 0) "visible" "hidden")}}
            (dom/li
              (dom/div {:style {:margin-right "10px" :visibility (if (and (= (compare (:name (:current @app-state)) "Portfolios") 0) (or (= (:role (:user @app-state)) "admin") (= (:role (:user @app-state)) "admin")) ) "visible" "hidden")}} 
                (omdom/select #js {:id "securities"
                                   :className "selectpicker"
                                   :data-show-subtext "true"
                                   :data-live-search "true"
                                   :onChange #(handle-change % owner)
                                   }                
                  (buildSecsList data owner)
                )
              )
            )
            (dom/li
              (dom/h5 {:style {:margin-left "5px" :margin-right "5px" :height "32px" :margin-top "1px"}} " "
      (dom/input {:id "search" :type "text" :placeholder "Search" :style {:height "32px" :margin-top "1px"} :value  (:search @app-state) :onChange (fn [e] (handleChange e )) })  )
            )
          )

          (dom/ul {:className "nav navbar-nav navbar-right"}
            (dom/li {:className "dropdown"}
              (dom/a {:className "dropdown-toggle" :data-toggle "dropdown"  :aria-expanded "false" }
                 (dom/i {:className "fa fa-exchange"})
                 (dom/i {:className "fa fa-caret-down"})
              )
              (dom/ul {:className "dropdown-menu dropdown-messages"}
                (dom/li 
                  (dom/a {:style {:cursor "pointer" :pointer-events (if (nil? (:selectedclient @app-state)) "none" "all")} :onClick (fn [e] (printMonth) )}
                    (dom/div
                      (dom/i {:className "fa fa-print"})
                      "Печать"
                    )
                  )
                )
              )
            )
            (dom/li {:className "dropdown"}
              (dom/a {:className "dropdown-toggle" :data-toggle "dropdown"  :aria-expanded "false" }
                 (dom/i {:className "fa fa-tasks fa-fw"})
                 (dom/i {:className "fa fa-caret-down"})
              )
              (dom/ul {:className "dropdown-menu dropdown-tasks"}
                (dom/li
                  (dom/a {:href "#/positions" :onClick (fn [e] (goPositions e))}
                    (dom/div
                      (dom/i {:className "fa fa-comment fa-fw"})
                      "Позиции"
                    )
                  )
                )
                (dom/li {:className "divider"})
                (dom/li
                  (dom/a {:href "#/positions2" :onClick (fn [e] (goPositions2 e))}
                    (dom/div
                      (dom/i {:className "fa fa-twitter fa-fw"})
                      "Позиции с НКД"
                    )
                  )
                )
                (dom/li {:className "divider"})
                (dom/li
                  (dom/a {:href "#/calcportfs" :onClick (fn [e] (goCalcPortfs e))}
                    (dom/div
                      (dom/i {:className "fa fa-tasks fa-fw"})
                      "Расчеты"
                    )
                  )
                )
              )
            )

            (dom/li {:className "dropdown"}
              (dom/a {:className "dropdown-toggle" :data-toggle "dropdown"  :aria-expanded "false" }
                 (dom/i {:className "fa fa-user fa-fw"})
                 (dom/i {:className "fa fa-caret-down"})
              )
              (dom/ul {:className "dropdown-menu dropdown-user"}
                (dom/li
                  (dom/a {:href "#/login"}
                    (dom/div
                      (dom/i {:className "fa fa-sign-out fa-fw"})
                      "Выход"
                    )
                  )
                )
              )
            )
          )
        )
      )
    )
  )
)


(defcomponent calcportfs-navigation-view [data owner]
  (render [_]
    (let [style {:style {:margin "10px" :padding-bottom "0px"}}
      stylehome {:style {:margin-top "10px"} }
      ]
      (dom/nav {:className "navbar navbar-default navbar-fixed-top" :role "navigation"}
        (dom/div {:className "navbar-header"}
          (dom/button {:type "button" :className "navbar-toggle"
            :data-toggle "collapse" :data-target ".navbar-ex1-collapse"}
            (dom/span {:className "sr-only"} "Toggle navigation")
            (dom/span {:className "icon-bar"})
            (dom/span {:className "icon-bar"})
            (dom/span {:className "icon-bar"})
          )
          (dom/a  (assoc stylehome :className "navbar-brand")
            (dom/span {:id "pageTitle"} (:text (:current @data)) )
          )
        )
        (dom/div {:className "collapse navbar-collapse navbar-ex1-collapse" :id "menu"}
          (dom/ul {:className "nav navbar-nav" :style {:padding-top "17px" :visibility (if (= (compare (:name (:current @data))  "Portfolios") 0) "visible" "hidden")}}
            (dom/li
              (dom/div {:style {:margin-right "10px" :visibility (if (and (= (compare (:name (:current @data)) "Portfolios") 0) (or (= (:role (:user @data)) "admin") (= (:role (:user @data)) "admin")) ) "visible" "hidden")}} 
                (omdom/select #js {:id "securities"
                                   :className "selectpicker"
                                   :data-show-subtext "true"
                                   :data-live-search "true"
                                   :onChange #(handle-change % owner)
                                   }                
                  (buildSecsList data owner)
                )
              )
            )
            (dom/li
              (dom/h5 {:style {:margin-left "5px" :margin-right "5px" :height "32px" :margin-top "1px"}} " "
      (dom/input {:id "search" :type "text" :placeholder "Search" :style {:height "32px" :width "100px" :margin-top "1px"} :value  (:search @data) :onChange (fn [e] (handleChange e )) })  )
            )

            (dom/li {:style {:margin-left "3px"}}
              (dom/label {:for "noholders" :style {:font-weight 100 :padding-right "1px" :padding-top "7px"}} "Оставить без бумаги:")
            )
            (dom/li {:style {:margin-left "1px"}}
              (dom/input {:id "noholders" :type "checkbox" :style {:height "32px" :width "70px" :margin-top "1px"} :defaultChecked (if (= 0 (:noholders @data)) false true) :label "Оставить без бумаги" :onChange (fn [e] (handle-chkb-change e ))})
            )

            (dom/li {:style {:margin-left "1px"}}
              (dom/label {:for "percentage" :style {:font-weight 100 :padding-right "10px"}} "Процент: ")

              (dom/input {:id "percentage" :type "number" :step "0.01" :style {:height "32px" :width "70px" :margin-top "1px"} :value  (:percentage @data) :onChange (fn [e] (handleChange e ))})
            )
            (dom/li {:style {:margin-left "5px"}}
              (dom/button #js {:id "btnrefresh" :disabled (if (= 1 (:state @data)) false true) :className (if (= 2 (:state @data)) "btn btn-info m-progress" "btn btn-info")  :type "button" :onClick (fn [e] (getCalcPortfolios))} "Обновить")
            )

            (dom/li {:style {:margin-left "15px" :padding-right "10px"}}
              (dom/label {:for "currencies" :style {:font-weight 100 :margin-top "7px"}} "Валюта: ")
            )
            (dom/li
              (dom/div {:style {:margin-right "10px"}} 
                (omdom/select #js {:id "currencies"
                                   :className "selectpicker"
                                   :data-show-subtext "true"
                                   :data-live-search "true"
                                   :onChange #(handle-change-currency % owner)
                                   }
                  (dom/option {:key "allcur" :value "all"
                    :onChange #(handle-change-currency % owner)} "ВСЕ")
                  (dom/option {:key "usdcur" :value "usd"
                    :onChange #(handle-change-currency % owner)} "USD")
                  (dom/option {:key "rubcur" :value "rub"
                    :onChange #(handle-change-currency % owner)} "RUB")
                  (dom/option {:key "eurcur" :value "eur"
                    :onChange #(handle-change-currency % owner)} "EUR")
                  (dom/option {:key "gbpcur" :value "gbp"
                    :onChange #(handle-change-currency % owner)} "GBP")
                  ;;(buildSecsList data owner)
                )
              )
            )
          )


          (dom/ul {:className "nav navbar-nav navbar-right"}
            (dom/li {:className "dropdown"}
              (dom/a {:className "dropdown-toggle" :data-toggle "dropdown"  :aria-expanded "false" }
                 (dom/i {:className "fa fa-exchange"})
                 (dom/i {:className "fa fa-caret-down"})
              )
              (dom/ul {:className "dropdown-menu dropdown-messages"}
                (dom/li 
                  (dom/a {:style {:cursor "pointer" :pointer-events (if (nil? (:selectedclient @app-state)) "none" "all")} :onClick (fn [e] (printMonth) )}
                    (dom/div
                      (dom/i {:className "fa fa-print"})
                      "Печать"
                    )
                  )
                )
              )
            )
            (dom/li {:className "dropdown"}
              (dom/a {:className "dropdown-toggle" :data-toggle "dropdown"  :aria-expanded "false" }
                 (dom/i {:className "fa fa-tasks fa-fw"})
                 (dom/i {:className "fa fa-caret-down"})
              )
              (dom/ul {:className "dropdown-menu dropdown-tasks"}
                (dom/li
                  (dom/a {:href "#/positions" :onClick (fn [e] (goPositions e))}
                    (dom/div
                      (dom/i {:className "fa fa-comment fa-fw"})
                      "Позиции"
                    )
                  )
                )
                (dom/li {:className "divider"})
                (dom/li
                  (dom/a {:href "#/portfolios" :onClick (fn [e] (goPortfolios e))}
                    (dom/div
                      (dom/i {:className "fa fa-twitter fa-fw"})
                      "Держатели бумаги"
                    )
                  )
                )
                (dom/li {:className "divider"})
                (dom/li
                  (dom/a {:href "#/calcportfs" :onClick (fn [e] (goSettings e))}
                    (dom/div
                      (dom/i {:className "fa fa-tasks fa-fw"})
                      "Опции"
                    )
                  )
                )
              )
            )

            (dom/li {:className "dropdown"}
              (dom/a {:className "dropdown-toggle" :data-toggle "dropdown"  :aria-expanded "false" }
                 (dom/i {:className "fa fa-user fa-fw"})
                 (dom/i {:className "fa fa-caret-down"})
              )
              (dom/ul {:className "dropdown-menu dropdown-user"}
                (dom/li
                  (dom/a {:href "#/login"}
                    (dom/div
                      (dom/i {:className "fa fa-sign-out fa-fw"})
                      "Выход"
                    )
                  )
                )
              )
            )
          )
        )
      )
    )
  )
)

(defcomponent settings-navigation-view [data owner]
  (render [_]
    (let [style {:style {:margin "10px" :padding-bottom "0px"}}
      stylehome {:style {:margin-top "10px"} }
      ]
      (dom/nav {:className "navbar navbar-default navbar-fixed-top" :role "navigation"}
        (dom/div {:className "navbar-header"}
          (dom/button {:type "button" :className "navbar-toggle"
            :data-toggle "collapse" :data-target ".navbar-ex1-collapse"}
            (dom/span {:className "sr-only"} "Toggle navigation")
            (dom/span {:className "icon-bar"})
            (dom/span {:className "icon-bar"})
            (dom/span {:className "icon-bar"})
          )
          (dom/a  (assoc stylehome :className "navbar-brand")
            (dom/span {:id "pageTitle"} (:text (:current @data)) )
          )
        )
        (dom/div {:className "collapse navbar-collapse navbar-ex1-collapse" :id "menu"}
          (dom/ul {:className "nav navbar-nav" :style {:padding-top "17px" :visibility (if (= (compare (:name (:current @app-state))  "Settings") 0) "visible" "hidden")}}
            (dom/li
              (dom/h5 {:style {:margin-left "5px" :margin-right "5px" :height "32px" :margin-top "1px"}} " "
      (dom/input {:id "search" :type "text" :placeholder "Search" :style {:height "32px" :margin-top "1px"} :value  (:search @app-state) :onChange (fn [e] (handleChange e )) })  )
            )
          )


          (dom/ul {:className "nav navbar-nav navbar-right"}
            (dom/li
              (dom/a {:style {:margin "10px" :padding-bottom "0px"} :href "#/syssettings" :onClick (fn [e] (goPositions e))}
                 (dom/span {:className "glyphicon glyphicon-book"})
                 "Positions"
              )
            )
            (dom/li
              (dom/a {:style {:margin "10px" :padding-bottom "0px"} :href "#/positions" :onClick (fn [e] (goPositions e))}
                 (dom/span {:className "glyphicon glyphicon-cog"})
                 "Positions"
              )
            )
            (dom/li
              (dom/a {:style {:margin "10px" :padding-bottom "0px"} :href "#/calcportfs" :onClick (fn [e] (goCalcPortfs e))}
                 (dom/span {:className "glyphicon glyphicon-wrench"})
                 "Calculation"
              )
            )
            (dom/li
              (dom/a (assoc style :href "#/login")
                (dom/i {:className "fa fa-sign-out fa-fw"})
                "Exit"
              )
            )
          )
        )
      )
    )
  )
)


(defn calc_cashusdvalue
  ([clientcode]
    (let [
           usdrate (:price (first (filter (fn [x] (if (= "USD" (:acode x)) true false)) (:securities @app-state))))
           eurrate (:price (first (filter (fn [x] (if (= "EUR" (:acode x)) true false)) (:securities @app-state))))
           gbprate (:price (first (filter (fn [x] (if (= "GBP" (:acode x)) true false)) (:securities @app-state))))
           cashusdvalue (+ (:usd (first (filter (fn [x] (if (= (:code x) clientcode) true false)) (:clients @app-state)))) (* eurrate (/ (:eur (first (filter (fn [x] (if (= (:code x) clientcode) true false)) (:clients @app-state)))) usdrate)) (* gbprate (/ (:gbp (first (filter (fn [x] (if (= (:code x) clientcode) true false)) (:clients @app-state)))) usdrate)) (* 1.0 (/ (:rub (first (filter (fn [x] (if (= (:code x) clientcode) true false)) (:clients @app-state)))) usdrate)))
    ]
    cashusdvalue
    )
  )
  ([]
    (calc_cashusdvalue (:selectedclient @app-state))
  )
)


(defn calc_cashvalue
  ([clientcode]
    (let [
      client (first (filter (fn [x] (if (= (:selectedclient @app-state) (:code x)) true false)) (:clients @app-state)))
      clientcurrencyrate (:price (first (filter (fn [x] (if (= (str/upper-case (:currency client)) (:acode x)) true false)) (:securities @app-state))))
      usdrate (:price (first (filter (fn [x] (if (= "USD" (:acode x)) true false)) (:securities @app-state))))
      ]
      (/ (* (calc_cashusdvalue clientcode) usdrate) clientcurrencyrate)
    )
  )
  ([]
    (calc_cashvalue (:selectedclient @app-state))
  )
)


(defn calc_portfusdvalue []
  (let [
         secsusdvalue (:usdvalue (reduce (fn [x y] {:usdvalue (+ (:usdvalue x) (:usdvalue y))}) (filter (fn [x] (let [
           sec (first (filter (fn[y] (if (= (:id x) (:id y) ) true false)) (:securities @app-state)))
           assettype (:assettype sec)]
           (if (or (= 1 assettype) (= 5 assettype)) true false))) (:positions ((keyword (:selectedclient @app-state)) @app-state)))
))
         cashusdvalue (calc_cashusdvalue) 

         portfusdvalue (+ secsusdvalue cashusdvalue)
  ]
  portfusdvalue
  )
)

(defn calc_portfvalue []
  (let [
      client (first (filter (fn [x] (if (= (:selectedclient @app-state) (:code x)) true false)) (:clients @app-state)))
      clientcurrencyrate (:price (first (filter (fn [x] (if (= (str/upper-case (:currency client)) (:acode x)) true false)) (:securities @app-state))))
      usdrate (:price (first (filter (fn [x] (if (= "USD" (:acode x)) true false)) (:securities @app-state))))      

      portfusdvalue (calc_portfusdvalue)
    ]
    (/ (* portfusdvalue usdrate) clientcurrencyrate) 
  )
)

(defmulti website-view
  (
    fn [data _]   
      (:view (if (= data nil) @app-state @data ))
      ;;(:view @app-state )
  )
)

(defmethod website-view 0
  [data owner] 
  ;(.log js/console "zero found in view")
  (logout-view data owner)
)


(defmethod website-view 1
  [data owner] 
  ;(.log js/console "One is found in view")
  (positions-navigation-view data owner)
)


(defmethod website-view 2
  [data owner] 
  ;(.log js/console "Two is found in view")
  (portfolios-navigation-view data owner)
)

(defmethod website-view 3
  [data owner] 
  ;(.log js/console "Two is found in view")
  (users-navigation-view data owner)
)

(defmethod website-view 4
  [data owner] 
  ;(.log js/console "One is found in view")
  (calcportfs-navigation-view app-state owner)
)

(defmethod website-view 5
  [data owner] 
  ;(.log js/console "One is found in view")
  (settings-navigation-view data owner)
)

(defmethod website-view 6
  [data owner] 
  ;(.log js/console "One is found in view")
  (settings-navigation-view data owner)
)
