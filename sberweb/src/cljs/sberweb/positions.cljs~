(ns tripweb.trips (:use [net.unit8.tower :only [t]])
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om-tools.dom :as dom :include-macros true]
            [om-tools.core :refer-macros [defcomponent]]
            [secretary.core :as sec :include-macros true]
            [tripweb.core :as tripcore]
            [ajax.core :refer [GET POST]]
            [tripweb.settings :as settings]
            [om-bootstrap.button :as b]

            [cljs.core.async :refer [put! dropping-buffer chan take! <!]]

            [cljs-time.format :as tf]
            [cljs-time.coerce :as tc]
  )
  (:import goog.History)
)

(enable-console-print!)

(defonce app-state (atom  {:users [] :trips [] }))

(def custom-formatter (tf/formatter "dd/MM/yyyy"))

(def custom-formatter1 (tf/formatter "MMM dd yyyy hh:mm:ss"))

(def ch (chan (dropping-buffer 2)))

(defn OnGetTrips [response]
   (swap! app-state assoc :trips response  )
   (tripcore/setUsersDropDown)
   (.log js/console (:users @app-state)) 

)


(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "something bad happened: " status " " status-text))
)




(defn getTrips [] 

  (if (> (count (:trips ((keyword (:selecteduser @tripcore/app-state)) @tripcore/app-state)) 0))
    (tripcore/setUsersDropDown)
    (GET (str settings/apipath "api/trip?login=" (:login (:user @tripcore/app-state)) ) {
      :handler OnGetTrips
      :error-handler error-handler
      :headers {
        :content-type "application/json"
        :Authorization (str "Bearer "  (:token (:token @tripcore/app-state))) }
    })
)

)


(defn ismonthly [dt]
  (let [addmonth (+ (tc/to-long (tf/parse custom-formatter1 (str (subs (str (js/Date)) 4 16 )  "00:01:00") )) (* 1000 60 60 24 30))
        today (tc/to-long (tf/parse custom-formatter1 (str (subs (str (js/Date)) 4 16 )  "00:01:00") ))
        ]
    (if (and (>= (nth dt 3) today) (<= (nth dt 3) addmonth)) true false)

  )
)

(defn diffdates [dt1 dt2]
  (-  (tc/to-long (tc/from-date (nth dt1 3))) (tc/to-long (tc/from-date (nth dt2 3)))  ) 
)


(defn diffindate [dt]
  (Math/round (/ (-  (tc/to-long (tc/from-date (nth dt 3)))    (tc/to-long (tf/parse custom-formatter1 (str (subs (str (js/Date)) 4 16 )  "00:01:00") ))  )  (* 3600000 24)))  
)


(defn comp-trips
  [trip1 trip2]
  (if (< (diffindate trip1) 0)
    (if (> (diffindate trip2) 0)
      false
      (if (> (diffdates trip1 trip2) 0) true false )
    )

    (if (> (diffindate trip2) 0) 
      (if (> (diffdates trip1 trip2) 0) false true)
      true)
  )
)


(defcomponent showtrips-view [data owner]
  (render
    [_]
    (dom/div {:className "list-group" :style {:display "block"}}
      (map (fn [item]
        (dom/span
          (dom/a {:className "list-group-item" :href (str  "#/tripdetail/" (nth item 0) ) }
            (dom/h4  #js {:className "list-group-item-heading" :dangerouslySetInnerHTML #js {:__html (nth item 1)}} nil)

            (dom/h4 {:className "list-group-item-heading"} (if (< (diffindate item) 0) (str (tf/unparse custom-formatter (tc/from-date (nth item 3)) ) " - " (tf/unparse custom-formatter (tc/from-date (nth item 4)) ))  (str "Days before trip: " (diffindate item)))   )

            (dom/h6 {:className "paddingleft2"} (nth item 2))

          ) 
        )
        ) (sort (comp comp-trips) (filter (fn [trip] (if (= (:ismonthly @tripcore/app-state) true)

(if (and (ismonthly trip)  (or (> (.indexOf (nth trip 1) (:search @tripcore/app-state) ) -1 )  (> (.indexOf (nth trip 2) (:search @tripcore/app-state) ) -1 ))  ) true false)
 

(if (or (> (.indexOf (nth trip 1) (:search @tripcore/app-state) ) -1 )  (> (.indexOf (nth trip 2) (:search @tripcore/app-state) ) -1 )) true false)



)) 
                     (:trips ((keyword (:selecteduser @tripcore/app-state)) @data) )
                     )) 


      )
    )
  )
)

(defn onMount [data]
  (getTrips)
  (put! ch 42)
  (swap! tripcore/app-state assoc-in [:current] 
    "Trips"
  )
)


(defn setcontrols []
  (tripcore/setUsersDropDown)
  (.log js/console "fieldcode"       )
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

(defcomponent trips-view [data owner]
  (will-mount [_]
    (onMount data)
  )
  (render [_]
    (let [style {:style {:margin "10px" :padding-bottom "0px"}}
      styleprimary {:style {:margin-top "70px"}}
      ]

      (dom/div
        (om/build tripcore/website-view tripcore/app-state {})
        (dom/div  (assoc styleprimary  :className "panel panel-primary" ;:onClick (fn [e](println e))
        )
          (dom/div
            (b/button {:className "btn btn-primary" :onClick (fn [e] (-> js/document
          .-location
          (set! "#/tripdetail/0")))} "Add New")
          )
          (om/build showtrips-view  data {})
        )
      ) 
    )
  )
)




(sec/defroute trips-page "/trips" []
  (om/root trips-view
           tripcore/app-state
           {:target (. js/document (getElementById "app"))}))


