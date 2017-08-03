(ns sberapi.core
  (:require [sberapi.handler :as handler]
            [luminus.repl-server :as repl]
            [luminus.http-server :as http]
            [sberapi.config :refer [env]]
            [clojure.tools.cli :refer [parse-opts]]
            [clojure.tools.logging :as log]
            [mount.core :as mount]
            [clojurewerkz.quartzite.scheduler :as qs]

            [sberapi.routes.position :as position]
  )
  (:gen-class)
)

(def cli-options
  [["-p" "--port PORT" "Port number"
    :parse-fn #(Integer/parseInt %)]])

(mount/defstate ^{:on-reload :noop}
                http-server
                :start
                (http/start
                  (-> env
                      (assoc :handler (handler/app))
                      (update :port #(or (-> env :options :port) %))))
                :stop
                (http/stop http-server))

(mount/defstate ^{:on-reload :noop}
                repl-server
                :start
                (when-let [nrepl-port (env :nrepl-port)]
                  (repl/start {:port nrepl-port}))
                :stop
                (when repl-server
                  (repl/stop repl-server)))


(defn stop-app []
  (doseq [component (:stopped (mount/stop))]
    (log/info component "stopped"))
  (shutdown-agents))

(defn start-app [args]
  (doseq [component (-> args
                        (parse-opts cli-options)
                        mount/start-with-args
                        :started)]
    (log/info component "started"))
  (.addShutdownHook (Runtime/getRuntime) (Thread. stop-app)))

(defn -main [& args]
  (let [
    ;s (qs/initialize)
    ;; trigger (t/build
    ;;   (t/with-identity (t/key "triggers.1"))
    ;;   (t/start-now)
    ;;   (t/with-schedule (schedule
    ;;     (with-repeat-count 1)
    ;;     (with-interval-in-milliseconds 20000))))
    ]
  )
  (start-app args)
  ;(println "no loading")
  (if (and (> (count args) 0) (= "-noload" (nth args 0))) (println "no loading") (position/loadallpositions))
)
