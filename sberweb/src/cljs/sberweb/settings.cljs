(ns sberweb.settings
  (:require [om.core :as om :include-macros true]
            [om-tools.dom :as dom :include-macros true]
            [om-tools.core :refer-macros [defcomponent]]
            [secretary.core :as sec :include-macros true]
            [goog.events :as events]
            [goog.history.EventType :as EventType]
  )
  (:import goog.History)
)

(enable-console-print!)

;;(def apipath "http://10.30.60.102:3000/")
(def apipath "http://10.30.60.102:3000/")
(def demouser "zuoqin")
(def demopassword "Qwerty123")

