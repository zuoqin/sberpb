(ns figwheel.connect (:require [figwheel.client] [figwheel.client.utils] [sberweb.login]))
(figwheel.client/start {:build-id "app", :websocket-url "ws://localhost:3449/figwheel-ws"})

