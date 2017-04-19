(ns sberweb.syssettings (:use [net.unit8.tower :only [t]])
  (:require [om.core :as om :include-macros true]
            [om-tools.dom :as dom :include-macros true]
            [om-tools.core :refer-macros [defcomponent]]
            [secretary.core :as sec :include-macros true]
            [sberweb.core :as sbercore]
            [ajax.core :refer [GET POST]]


            [om-bootstrap.button :as b]

            [sberweb.settings :as settings]
  )
  (:import goog.History)
)

(enable-console-print!)

(defonce app-state (atom  {:users [] :trips [] }))


(defn OnGetSettings [response]
   (swap! app-state assoc :settings  (get response "Settings")  )
   (.log js/console (:settings @app-state)) 

)

(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "something bad happened: " status " " status-text))
)


(defn getSettings [data] 
  (GET (str settings/apipath "api/settings") {
    :handler OnGetSettings
    :error-handler error-handler
    :headers {
      :content-type "application/json"
      :Authorization (str "Bearer "  (:token  (first (:token @sbercore/app-state)))) }
  })
)


(defn comp-settings
  [setting1 setting2]
  (if (> (compare (:code setting1) (:code setting2)) 0)
      false
      true
  )
)


(defcomponent showsettings-view [data owner]
  (render
    [_]
    (dom/div {:className "list-group" :style {:display "block"}}
      (map (fn [item]
        (dom/span
          (dom/a {:className "list-group-item" :href (str  "#/syssettingdetail/" (:login item ) ) }
            (dom/h4  #js {:className "list-group-item-heading" :dangerouslySetInnerHTML #js {:__html (:login item)}} nil)
            ;(dom/h4 {:className "list-group-item-heading"} (get item "subject"))
            (dom/h6 {:className "paddingleft2"} (get item "senddate"))
            ;(dom/p  #js {:className "list-group-item-text paddingleft2" :dangerouslySetInnerHTML #js {:__html (get item "body")}} nil)
          ) 
        )                  
        )(sort (comp comp-settings) (:settings @sbercore/app-state ))
      )
    )
  )
)



(defn onMount [data]
  ; (getUsers data)
  (swap! sbercore/app-state assoc-in [:current] 
    "Settings"
  )
)



(defcomponent settings-view [data owner]
  (will-mount [_]
    (onMount data)
  )
  (render [_]
    (let [style {:style {:margin "10px" :padding-bottom "0px"}}
      styleprimary {:style {:margin-top "70px"}}
      ]
      (dom/div
        (om/build sbercore/website-view sbercore/app-state {})
        (dom/div  (assoc styleprimary  :className "panel panel-primary" ;;:onClick (fn [e](println e))
        )
          (dom/div
            (b/button {:className "btn btn-primary" :onClick (fn [e] (-> js/document
          .-location
          (set! "#/syssettingdetail")))} "Add New")
          )
          ; (dom/div {:className "panel-heading"}
          ;   (dom/div {:className "row"}
          ;     ; (dom/div {:className "col-md-10"}
          ;     ;   (dom/span {:style {:padding-left "5px"}} "我的消息")
          ;     ; )
          ;     ; (dom/div {:className "col-md-2"}
          ;     ;   (dom/span {:className "badge" :style {:float "right" }} (str (:msgcount data))  )
          ;     ; )
          ;   )
          ; )
          (om/build showsettings-view  data {})
        )
      ) 


    )
  )
)




(sec/defroute syssettings-page "/syssettings" []
  (om/root settings-view
           app-state
           {:target (. js/document (getElementById "app"))}))

