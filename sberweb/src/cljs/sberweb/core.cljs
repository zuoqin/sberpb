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

(defonce app-state (atom {:selectedclient "KDBSF" :search ""  :user {:role "admin"} }))





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

    newfxrate (if (= 0 (compare "GBX" (:currency security))) (/ fxrate 100.) fxrate)    

    result {:id secid :currency (:currency security) :amount (:amount (nth position 1)) :wap posprice :price price :waprub (:rubprice (nth position 1)) :currubprice (* price newfxrate)}



    ]
    ;(.log js/console (str "price: " price " fxrate:" fxrate))
    result
  )
)

(defn OnGetPositions [response]
   (swap! app-state assoc-in [(keyword (:selectedclient @app-state)) :positions] (map (fn [x] (map-position x)) response) )
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


(defn buildClientsList [data owner]
  (map
    (fn [text]
      (dom/option {:key (:code text) :value (:id text)
                    :onChange #(handle-change % owner)} (:name text))
    )
    (sort (comp comp-clients) (:clients @app-state )) 
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
            (dom/span {:id "pageTitle"}  (:current @data))
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
            (dom/span {:id "pageTitle"} (:current @data))
          )
        )
        (dom/div {:className "collapse navbar-collapse navbar-ex1-collapse" :id "menu"}
          (dom/ul {:className "nav navbar-nav" :style {:padding-top "17px" :visibility (if (= (:current @app-state) "Positions") "visible" "hidden")}}
            (dom/li
              (dom/div {:style {:margin-right "10px" :visibility (if (and (= (:current @app-state) "Positions") (or (= (:role (:user @app-state)) "admin") (= (:role (:user @app-state)) "admin")) ) "visible" "hidden")}} 
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

            (dom/li
              (dom/label {:style {:font-weight 100 :margin-top "7px"} }
                (dom/input {:id "ismonthly" :type "checkbox" :defaultChecked false :onChange (fn [e] (handleCheck e))}) "Select this month"
              )
            )
            (dom/li {:style {:margin-left "5px"}}
              (b/button {:className "btn btn-info"  :onClick (fn [e] (printMonth))  } "Print positions")
            )
          )
         
          ;; (dom/ul {:className "nav navbar-nav navbar-right"}
          ;;   (dom/li
          ;;     (dom/a (assoc style :href "#/positions")
          ;;        (dom/span {:className "glyphicon glyphicon-cog"})
          ;;        "Positions"
          ;;     )
          ;;   )         
          ;;   (dom/li {:style {:visibility 
          ;;                                  (if 
          ;;                                    (or (= (:role (:user @app-state)) "admin")
          ;;                                        (= (:role (:user @app-state)) "manager")) "visible" "hidden")}}

          ;;     (dom/a (assoc style :href "#/users") 
          ;;       (dom/span {:className "glyphicon glyphicon-log-out"})
          ;;       "Users"
          ;;     )
          ;;   )
          ;;   (dom/li
          ;;     (dom/a (assoc style :href "#/login")
          ;;       (dom/i {:className "fa fa-sign-out fa-fw"})
          ;;       "Exit"
          ;;     )
          ;;   )
          ;; )
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
  (users-navigation-view data owner)
)
