(ns sberweb.syssettingsdetail  (:use [net.unit8.tower :only [t]])
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om-tools.dom :as dom :include-macros true]
            [om-tools.core :refer-macros [defcomponent]]
            [secretary.core :as sec :include-macros true]
            [goog.events :as events]
            [goog.history.EventType :as EventType]
            [sberweb.core :as sbercore]
            [ajax.core :refer [GET POST PUT DELETE]]
            [clojure.string :as str]
            [om-bootstrap.button :as b]
            [om-bootstrap.panel :as p]
            [om.dom :as omdom :include-macros true]
            [cljs.core.async :refer [put! dropping-buffer chan take! <!]]
            [om-bootstrap.input :as i]
            [cljs-time.core :as tm]
            [cljs-time.format :as tf]
            [sberweb.settings :as settings]
  )
  (:import goog.History)
)

(def jquery (js* "$"))

(enable-console-print!)

(def ch (chan (dropping-buffer 2)))
(defonce app-state (atom  {:code "" :data "" :isinsert false :view 6 :current "System setting detail"} ))

(defn handleChange [e]
  ;(.log js/console e  )  
  ;(.log js/console "The change ....")
  (swap! app-state assoc-in [(keyword (.. e -nativeEvent -target -id))] (.. e -nativeEvent -target -value))
)


(defn OnDeleteSettingError [response]
  (let [     
      newdata {:userid (get response (keyword "tripid") ) }
    ]

  )
  ;; TO-DO: Delete User from Core
  ;;(.log js/console (str  (get (first response)  "Title") ))
)


(defn OnDeleteSettingSuccess [response]
  (let [
      settings (:settings @sbercore/app-state)
      newsettings (remove (fn [setting] (if (= (:code setting) (:code @app-state) ) true false  )) settings)
    ]
    ;(swap! sbercore/app-state assoc-in [:token] newdata )
    (swap! sbercore/app-state assoc-in [:settings] newsettings)
  )

    (-> js/document
      .-location
      (set! "#/syssettings"))
)

(defn OnUpdateSettingError [response]
  (let [     
      newdata {:settingid (get response (keyword "settingid") ) }
    ]

  )
  ;; TO-DO: Delete Trip from Core
  ;;(.log js/console (str  (get (first response)  "Title") ))
)


(defn OnUpdateSettingSuccess [response]
  (let [
      settings (:settings @sbercore/app-state    )  
      delsetting (remove (fn [setting] (if (= (:code setting) (:code @app-state) ) true false  )) settings)
      addsetting (into [] (conj delsetting {:code (:code @app-state) :data (:data @app-state)})) 
    ]
    (swap! sbercore/app-state assoc-in [:settings] addsetting)

    (-> js/document
      .-location
      (set! "#/syssettings"))

  )
)


;; (defn deleteUser [login]
;;   (DELETE (str settings/apipath  "api/user?login=" login) {
;;     :handler OnDeleteUserSuccess
;;     :error-handler OnDeleteUserError
;;     :headers {
;;       :content-type "application/json" 
;;       :Authorization (str "Bearer "  (:token (:token @sbercore/app-state)))}
;;     :format :json})
;; )



(defn updateSetting []
  (PUT (str settings/apipath  "api/syssetting") {
    :handler OnUpdateSettingSuccess
    :error-handler OnUpdateSettingError
    :headers {
      :content-type "application/json" 
      :Authorization (str "Bearer "  (:token (:token @sbercore/app-state)))}
    :format :json
    :params {:code (:code @app-state) :data (:data @app-state)}})
)


(defn OnCreateSettingError [response]
  (let [     
      
    ]

  )
  ;; TO-DO: Delete Trip from Core
  ;;(.log js/console (str  (get (first response)  "Title") ))
)


(defn OnCreateSettingSuccess [response]
  (let [
      settings (:settings @sbercore/app-state)
      addsetting (into [] (conj settings {:code (:code @app-state) :data (:data @app-state)} )) 
    ]
    (swap! sbercore/app-state assoc-in [:settings] addsetting)

    (-> js/document
      .-location
      (set! "#/syssettings"))

  )
)

(defn createSetting []
  (POST (str settings/apipath  "api/user") {
    :handler OnCreateSettingSuccess
    :error-handler OnCreateSettingError
    :headers {
      :content-type "application/json" 
      :Authorization (str "Bearer "  (:token (:token @sbercore/app-state)))}
    :format :json
    :params { :login (:login @app-state) :password (:password @app-state) :role (:role @app-state) }})
)



(defn setNewSettingValue [key val]
  (swap! app-state assoc-in [(keyword key)] val)
)



(defn setcontrols [value]
  (case value
    46 (.log js/console value)
  )
)


(defn initqueue []
  (doseq [n (range 1000)]
    (go ;(while true)
      (take! ch(
        fn [v] (
           ;.log js/console v
           ;(setcalculatedfields) 
           setcontrols v
           
           ;(.log js/console v)  
          )
        )
      )
    )
  )
)


(initqueue)

(defn setSetting []
  (let [
        settings (:settings @sbercore/app-state)
        setting (first (filter (fn [setting] (if (= (:code @app-state) (:code setting)) true false)) (:settings @sbercore/app-state )))
        ]
    (swap! app-state assoc-in [:code ]  (:code setting)) 
    (swap! app-state assoc-in [:data ]  (:data setting))
  )
)




(defn OnError [response]
  (let [     
      newdata { :error (get (:response response)  "error") }
    ]
    (.log js/console (str  response )) 
    
  )
  
  
)


(defn getSettingDetail []
  ;(.log js/console (str "token: " " " (:token  (first (:token @t5pcore/app-state)))       ))
  (setSetting)
  ;; (if
  ;;   (and 
  ;;     (not= (:code @app-state) nil)
  ;;     (not= (:data @app-state) "")
  ;;   )    
  ;; )
)

(defn handleFromChange [e]
  ;;(.log js/console e  )  
  (.log js/console "The change ....")

)


(defn onMount [data]
  (swap! sbercore/app-state assoc-in [:current] {:name "Setting Detail" :text "System settings"} )
  (getSettingDetail)
  (setcontrols 46)
)


(defn handle-change [e owner]
  ;(.log js/console () e)
  (swap! app-state assoc-in [:form (keyword (.. e -target -id))] 
    (.. e -target -value)
  ) 
)



(defcomponent settingdetail-page-view [data owner]
  (did-mount [_]
    (onMount data)
  )
  (did-update [this prev-props prev-state]
    (.log js/console "Update happened") 

    ;(put! ch 46)
  )
  (render
    [_]
    (let [style {:style {:margin "10px;" :padding-bottom "0px;"}}
      styleprimary {:style {:margin-top "70px"}}
      ]
      (dom/div
        (om/build sbercore/website-view data {})
        (dom/div {:id "user-detail-container"}
          (dom/span
            (dom/div  (assoc styleprimary  :className "panel panel-default"  :id "divUserInfo")
              
              (dom/div {:className "panel-heading"}
                (dom/h5 "Code: " 
                  (dom/input {:id "code" :type "text" :disabled (if (= (:isinsert @app-state) true) false true)  :onChange (fn [e] (handleChange e)) :value (:code @app-state)} )

                )
                
                (dom/h5 "Data: "
                  (dom/textarea {:id "data"  :style {:width "100%" :height "300px"} :onChange (fn [e] (handleChange e)) :value (:data @app-state)})
                )
              )              
            )
          )
        )
        (dom/nav {:className "navbar navbar-default" :role "navigation"}
          (dom/div {:className "navbar-header"}
            (b/button {:className "btn btn-default" :onClick (fn [e] (if (= (:isinsert @app-state) 0) (createSetting) (updateSetting)) )} (if (= (:isinsert @app-state) true) "Insert" "Update"))
            ;; (b/button {:className "btn btn-danger" :style {:visibility (if (= (:isinsert @app-state) true) "hidden" "visible")} :onClick (fn [e] (deleteUser (:login @app-state)))} "Delete")

            (b/button {:className "btn btn-info"  :onClick (fn [e] (-> js/document
      .-location
      (set! "#/syssettings")))  } "Cancel")
          )
        )
      )
    )

  )
)



(sec/defroute settingdetail-page "/syssettingdetail/:code" [code]
  (
    (swap! app-state assoc-in [:code]  code ) 
    (swap! app-state assoc-in [:isinsert]  false )
    (om/root settingdetail-page-view
             app-state
             {:target (. js/document (getElementById "app"))})

  )
)


;; (sec/defroute userdetail-new-page "/userdetail" {}
;;   (
;;     (swap! app-state assoc-in [:login]  "" ) 
;;     (swap! app-state assoc-in [:isinsert]  true )
 
;;     (swap! app-state assoc-in [:role ]  "user" ) 
;;     (swap! app-state assoc-in [:password] "" )


;;     (om/root userdetail-page-view
;;              app-state
;;              {:target (. js/document (getElementById "app"))})

;;   )
;; )
