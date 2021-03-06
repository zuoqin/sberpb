(defproject arenaparse "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :repositories {"my.datomic.com" {:url "https://my.datomic.com/repo"
                                 :creds :gpg}}
  :dependencies [
                 [org.clojure/data.csv "0.1.3"]
                 [org.clojure/clojure "1.8.0"]
                 [clj-time "0.13.0"]
                 [incanter "1.5.7"]
                 [org.clojure/data.codec "0.1.0"]
                 [lock-key "1.5.0"]
                 [base64-clj "0.1.1"]
                 [com.datomic/datomic-pro "0.9.5350" :exclusions [org.slf4j/log4j-over-slf4j org.slf4j/slf4j-nop]]

                 [dk.ative/docjure "1.11.0"]
                 ]
  :main ^:skip-aot arenaparse.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}})
