(ns sberweb.login  (:use [net.unit8.tower :only [t]])
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om-tools.dom :as dom :include-macros true]
            [om-tools.core :refer-macros [defcomponent]]
            [secretary.core :as sec :refer-macros [defroute]]
            [goog.events :as events]
            [goog.history.EventType :as EventType]
            [sberweb.core :as sbercore]
            [sberweb.settings :as settings]
            [ajax.core :refer [GET POST]]
            [om-bootstrap.input :as i]
            [om-bootstrap.button :as b]
            [om-bootstrap.panel :as p]
	    
            [sberweb.userdetail :as userdetail]
            [sberweb.positions :as positions]
            [sberweb.postrans :as postrans]
            [sberweb.users :as users]
            [cljs.core.async :refer [put! dropping-buffer chan take! <!]]
  )
  (:import goog.History)
)

(enable-console-print!)


(def application
  (js/document.getElementById "app"))

(defn set-html! [el content]
  (aset el "innerHTML" content))


(sec/set-config! :prefix "#")

(let [history (History.)
      navigation EventType/NAVIGATE]
  (goog.events/listen history
                     navigation
                     #(-> % .-token sec/dispatch!))
  (doto history (.setEnabled true)))


(def ch (chan (dropping-buffer 2)))
(def jquery (js* "$"))
(defonce app-state (atom  {:error "" :modalText "Modal Text" :modalTitle "Modal Title" :state 0} ))


(defn setLoginError [error]
  (swap! app-state assoc-in [:error] 
    (:error error)
  )

  (swap! app-state assoc-in [:modalTitle] 
    (str "Login Error")
  ) 

  (swap! app-state assoc-in [:modalText] 
    (str (:error error))
  ) 

  (swap! app-state assoc-in [:state] 0) 
 
  ;;(.log js/console (str  "In setLoginError" (:error error) ))
  (jquery
    (fn []
      (-> (jquery "#loginModal")
        (.modal)
      )
    )
  )
)


(defn onLoginError [ response]
  (let [     
      newdata { :error (get response (keyword "response")) }
    ]
   
    (setLoginError newdata)
  )
  
  ;(.log js/console (str  response ))
)



(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "something bad happened: " status " " status-text)))

(defn OnGetSecurities [response]
  (swap! sbercore/app-state assoc-in [:securities] response )
  (aset js/window "location" "#/positions")
)

(defn reqsecurities []
  (GET (str settings/apipath "api/security")
       {:handler OnGetSecurities
        :error-handler error-handler
        :headers {:content-type "application/json"
                  :Authorization (str "Bearer " (:token  (:token @sbercore/app-state))) }
       })
)

(defn OnGetClients [response]
  (swap! sbercore/app-state assoc-in [:clients] response )
  (reqsecurities)
)




(defn reqclients []
  (GET (str settings/apipath "api/client")
       {:handler OnGetClients
        :error-handler error-handler
        :headers {:content-type "application/json"
                  :Authorization (str "Bearer " (:token  (:token @sbercore/app-state))) }
       })
)



(defn setUser [theUser]
  (let [cnt (count (:users @sbercore/app-state))]
    (swap! sbercore/app-state assoc-in [:users cnt] {:role (nth theUser 1)  :login (nth theUser 0) :password (nth theUser 2)})
  )
  

  ;;(.log js/console (nth theUser 0))
  ;;(.log js/console (:login (:user @sbercore/app-state) ))
  (if (= (nth theUser 0) (:login (:user @sbercore/app-state) ))   
    (swap! sbercore/app-state assoc-in [:user :role] (nth theUser 1) )
  )
  
)


(defn OnGetUser [response]
  (doall (map setUser response))
  (reqclients)  
)


(defn requser []
  (GET (str settings/apipath "api/user") {
    :handler OnGetUser
    :error-handler error-handler
    :headers {:content-type "application/json" :Authorization (str "Bearer "  (:token  (:token @sbercore/app-state))) }
  })
)

(defn onLoginSuccess [response]
  (
    let [     
      ;response1 (js->clj response)
      newdata {:token (get response (keyword "access_token"))  :expires (get response (keyword "expires_in") ) }
    ]
    (.log js/console (str newdata))
    ;;(.log js/console (str (select-keys (js->clj response) [:Title :Reference :Introduction])  ))    
    (swap! sbercore/app-state assoc-in [:token] newdata )
    (swap! sbercore/app-state assoc-in [:view] 1 )
    (swap! sbercore/app-state assoc-in [:users] [] )
    (requser)

  )


)

(defn OnLogin [response]
  (if (= (count response) 0)
    (onLoginError {:response "Incorrect username or password"} )
    (onLoginSuccess response)
  )
  
  ;;(.log js/console (str  (response) ))
  ;;(.log js/console (str  (get (first response)  "Title") ))

  
  
)

(defn dologin [username password]

  ;; currently logged in user
  (swap! sbercore/app-state assoc-in [:user :login] username)

  ;; currently selected user
  (swap! sbercore/app-state assoc-in [:selecteduser] username)


  (POST (str settings/apipath "token") {:handler OnLogin
                                            :error-handler onLoginError
                                            :headers {:content-type "application/x-www-form-urlencoded"}
                                            :body (str "grant_type=password&username=" username "&password=" password) 
                                            })
)




(defn checklogin [owner]
  (let [
    theUserName (-> (om/get-node owner "txtUserName") .-value)
    thePassword (-> (om/get-node owner "txtPassword") .-value)
    ]
    ;(aset js/window "location" "http://localhost:3449/#/something")
    ;(.log js/console owner ) 

    (.log js/console (str  theUserName ))
    (dologin (str theUserName) (str thePassword)) 
  )
)


(defn addModal []
  (dom/div
    (dom/div {:id "loginModal" :className "modal fade" :role "dialog"}
      (dom/div {:className "modal-dialog"} 
        ;;Modal content
        (dom/div {:className "modal-content"} 
          (dom/div {:className "modal-header"} 
                   (b/button {:type "button" :className "close" :data-dismiss "modal"})
                   (dom/h4 {:className "modal-title"} (:modalTitle @app-state) )
                   )
          (dom/div {:className "modal-body"}
                   (dom/p (:modalText @app-state))
                   )
          (dom/div {:className "modal-footer"}
                   (b/button {:type "button" :className "btn btn-default" :data-dismiss "modal"} "Close")
          )
        )
      )
    )
  )
)



(defcomponent login-page-view [data owner]
  (did-update [this prev-props prev-state]
    (.log js/console "starting login screen" ) 
    
  )
  (did-mount [_]
    (.focus (om/get-node owner "txtUserName" ))
  )
  (render
    [_]
    (dom/div {:className "container" :style {:width "100%" :padding-top "283px" :backgroundImage "url(/images/loginbackground.png)" :backgroundSize "cover"}  }
      ;(om/build t5pcore/website-view data {})
      ;(dom/h1 "Login Page")
      ;(dom/img {:src "images/LogonBack.jpg" :className "img-responsive company-logo-logon"})
      (dom/form {:className "form-signin"}
        (dom/input #js {:type "text" :ref "txtUserName"
           :defaultValue  settings/demouser  :className "form-control" :placeholder "User Name" } )
        (dom/input {:className "form-control" :ref "txtPassword" :id "txtPassword" :defaultValue settings/demopassword :type "password"  :placeholder "Password"} )
        (dom/button #js {
          :className (if (= (:state @app-state) 0) "btn btn-lg btn-primary btn-block" "btn btn-lg btn-primary btn-block m-progress" )  :type "button" :onClick (fn [e](checklogin owner))} "Login")


        (dom/button #js {
          :className (if (= (:state @app-state) 0) "btn btn-lg btn-primary btn-block" "btn btn-lg btn-primary btn-block m-progress" )  :type "button"  :onClick (fn [e] (-> js/document
      .-location
      (set! "#/registration")))} "Register")
        
      )
      (addModal)
      (dom/div {:style {:margin-bottom "200px"}})
    )
  )
)



(defmulti website-view
  (
    fn [data _]
      (:view (if (= data nil) @sbercore/app-state @data ))
  )
)

(defmethod website-view 0
  [data owner] 
  (login-page-view data owner)
)

(defmethod website-view 1
  [data owner] 
  (login-page-view data owner)
)

(sec/defroute login-page "/login" []
  (om/root login-page-view 
           app-state
           {:target (. js/document (getElementById "app"))}
  )
)


(defn main []
  (-> js/document
      .-location
      (set! "#/login"))

  ;;(aset js/window "location" "#/login")
)


(main)
