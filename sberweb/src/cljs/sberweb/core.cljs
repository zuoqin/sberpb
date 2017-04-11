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

(defonce app-state (atom {:selectedclient "AAOHF" :search ""  :user {:role "admin"} }))





(def jquery (js* "$"))


(defn split-thousands
  [n-str]
  (->> n-str
       reverse
       (partition 3 3 [])
       (map reverse)
       reverse
       (map #(apply str %))
       (str/join " ")))


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

(defn goUsers [data]
  (swap! app-state assoc-in [:view] 1 )
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


(defn handle-change [e owner]
  
  (swap! app-state assoc-in [:form (keyword (.. e -target -id))] 
    (.. e -target -value)
  ) 
)

(defn map-position [position]
  (let [
    secid (js/parseInt (name (nth position 0)))
    security (first (filter (fn [x] (if (= (:id x) secid) true false)) (:securities @app-state)))
    
    posprice (:price (nth position 1))
    price (if (nil? (:price security)) posprice (:price security))


    currency (if (= 0 (compare "GBX" (:currency security))) "GBP" (:currency security))

    
    fxrate (if (or (= "RUB" currency) (= "RUR" currency)) 1 (:price  (first (filter (fn[x] (if( = (:acode x) currency) true false)) (:securities @app-state)))))
    usdrate (:price (first (filter (fn [x] (if (= "USD" (:acode x)) true false)) (:securities @app-state))))

    isrusbond (if (and (= 5 (:assettype security)) 
                       (= "RU" (subs (:isin security) 0 2))
                       )  true false)
    isbond (if (and (= 5 (:assettype security)) 
                   ;(= "RU" (subs (:isin security) 0 2))
                   )  true false)
    newfxrate (if (= 0 (compare "GBX" (:currency security))) (/ fxrate 100.) fxrate)

    result {:id secid :currency (:currency security) :amount (:amount (nth position 1)) :wap posprice :price price :waprub (:rubprice (nth position 1)) :currubprice (* price newfxrate) :wapusd (:wapusd (nth position 1)) :usdvalue (/ (* (:amount (nth position 1)) (:price security)  (if (= isrusbond true) 10.0 (if (= isbond true) (/ newfxrate 100.0 ) newfxrate ) ) ) usdrate) }



    ]
    ;(.log js/console (str "price: " price " fxrate:" fxrate))
    result
  )
)

(defn map-portfolio [item]
  (let [
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

    result {:id (:id portfolio) :amount (:amount (nth item 1) ) :wapcur (:price (nth item 1) ) :wapusd (:price (nth item 1) ) :waprub (:rubprice (nth item 1) ) :currubprice (* price newfxrate) :usdvalue (/ (* (:amount (nth item 1)) (:price security)  (if (= isrusbond true) 10.0 (if (= isbond true) (/ newfxrate 100.0 ) newfxrate ) ) ) usdrate) }

    ]
    ;(.log js/console item)
    result
  )
)


(defn OnGetPortfolios [response]
   (swap! app-state assoc-in [ (keyword (str (:selectedsec @app-state)) ) :portfolios] (map (fn [x] (map-portfolio x)) response) )
)


(defn OnGetPositions [response]
   (swap! app-state assoc-in [(keyword (:selectedclient @app-state)) :positions] (map (fn [x] (map-position x)) (filter (fn [x] (if (> (:amount (nth x 1)) 0) true false)) response) ) )
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


(defn getPortfolios [] 
  (GET (str settings/apipath "api/portfolios?security=" (:selectedsec @app-state) ) {
    :handler OnGetPortfolios
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


(defn onDropDownChange [id value]
  (let [
        code (:code (first (filter (fn[x] (if (= (:id x) (js/parseInt value) ) true false)) (:clients @app-state)))  )
        ]

    (swap! app-state assoc-in [:selectedclient] code)
    (if (nil? (:positions ((keyword value) @app-state)))
      (getPositions)
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
          (dom/ul {:className "nav navbar-nav" :style {:padding-top "17px" :visibility (if (= (compare (:name (:current @app-state))  "Positions") 0 ) "visible" "hidden")}}
            (dom/li
              (dom/div {:style {:margin-right "10px" :visibility (if (and (= (compare (:name (:current @app-state)) "Positions") 0) (or (= (:role (:user @app-state)) "admin") (= (:role (:user @app-state)) "admin")) ) "visible" "hidden")}} 
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
      (dom/input {:id "search" :type "text" :placeholder "Search" :style {:height "32px" :margin-top "1px"} :value  (:search @app-state) :onChange (fn [e] (handleChange e )) })  )
            )

            (dom/li {:style {:margin-left "5px"}}
              ;; (dom/a {:href (str "/clientexcel/" (:selectedclient @app-state)) :style {:padding-top "9px"}}
              ;;   (dom/span "Download positions"))

              (b/button {:className "btn btn-default" :onClick (fn [e] (downloadPortfolio e) )} "Download Excel")
            )
          )
          (dom/ul {:className "nav navbar-nav navbar-right"}
            (dom/li
              (dom/a {:style {:margin "10px" :padding-bottom "0px"} :href "#/portfolios" :onClick (fn [e] (goPortfolios e))}
                 (dom/span {:className "glyphicon glyphicon-cog"})
                 "Portfolios"
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
          (dom/ul {:className "nav navbar-nav" :style {:padding-top "17px" :visibility (if (= (compare (:name (:current @app-state))  "Portfolios") 0) "visible" "hidden")}}
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

            (dom/li {:style {:margin-left "5px"}}
              (b/button {:className "btn btn-info"  :onClick (fn [e] (printMonth))  } "Print portfolios")
            )
          )


          (dom/ul {:className "nav navbar-nav navbar-right"}
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
          (dom/ul {:className "nav navbar-nav" :style {:padding-top "17px" :visibility (if (= (compare (:name (:current @app-state))  "Portfolios") 0) "visible" "hidden")}}
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

            (dom/li {:style {:margin-left "5px"}}
              (b/button {:className "btn btn-info"  :onClick (fn [e] (printMonth))  } "Print portfolios")
            )
          )


          (dom/ul {:className "nav navbar-nav navbar-right"}
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
  (calcportfs-navigation-view data owner)
)
