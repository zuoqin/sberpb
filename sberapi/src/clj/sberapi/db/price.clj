(ns sberapi.db.price
  (:require [datomic.api :as d]
            [mount.core :refer [defstate]]
            [sberapi.db.core :refer [conn] ]
            [sberapi.config :refer [env]]
            [clj-time.core :as t]
            [clj-time.format :as f]
            [clj-time.local :as l]
            [clj-time.coerce :as c]
))

(def custom-formatter (f/formatter "dd/MM/yyyy"))

(defn find-setting [code]
  (let [settings (d/q '[:find ?code 
                      :in $ ?code
                      :where
                      [?u :setting/code ?code]
                     ]
                     (d/db conn) code)
    ]
    (if (not= settings #{} ) (first settings)  ["" ""]) 
  )
)

(defn price-to-map [item]
  (let [
    newprice {:security (nth item 0) :price (nth item 1) :target (nth item 2) :analystrating (nth item 3)}
  ]
  newprice
  )
)

(defn get-prices []
  (let [
    prices (d/q '[:find ?s ?p ?t ?a
                          :where
                          [?e :price/security ?s]
                          [?e :price/lastprice ?p]
                          [?e :price/targetprice ?t]
                          [?e :price/analystrating ?a]
                          ]
                        (d/db conn))

    ]
    (map price-to-map prices) 
  )
)

(defn update-price [quote]
  (let [
    ;tr1 (println (str quote))
    dt (java.util.Date.)

    ;tr1 (println quote)
    price (double (:price quote))
    target (double (:target quote))
    anr (double (:anr quote))

    ;tr1 (:yield quote)
    yield (double (:yield quote))
    duration (double (:duration quote))

    dvddt (:dvddate quote)
    
    newdvddt (if (> (count dvddt) 0 ) (java.util.Date. (c/to-long (f/parse custom-formatter dvddt))) (java.util.Date. (c/to-long (f/parse custom-formatter "01/01/1900"))))
    
    ;tr1 (println (str "dvddate=" dvddt " newdvddt=" newdvddt) )
    newputdt (if (> (count (:putdate quote)) 0 ) (java.util.Date. (c/to-long (f/parse custom-formatter (:putdate quote)))) (java.util.Date. (c/to-long (f/parse custom-formatter "01/01/1900"))))
    secid (:secid quote)
    ;tr1 (println quote)
    ;tr2 (println secid)

    tr1 (ffirst (d/q '[:find ?e
                       :in $ ?sec
                       :where
                       [?e :price/security ?sec]
                      ] (d/db conn) secid))

    tr2 (if (not (nil? tr1)) (d/transact conn [[:db.fn/retractEntity tr1]])) 
        
  ]
  (d/transact-async conn  [{ :price/security secid :price/lastprice price :price/valuedate dt :price/targetprice target :price/analystrating anr :price/yield yield :price/dvddate newdvddt :price/putdate newputdt :price/duration duration :price/source "Excel import" :price/comment "Import from Bllomberg Excel output on 2017-03-10" :db/id #db/id[:db.part/user -100001 ]}]))
)


;; (defn create-setting [code data]
;;   (let [setting (first (find-setting code))
;;   		resinvalid {:tempids [[0 -2]]}
;;   		resexists {:tempids [[0 -1]]}
;;   		result  (if (= (count setting) 0)
;; 			       (if (> (count code) 4)
;; 					  (d/transact
;; 					   conn
;; 					   [{:db/id #db/id[:db.part/user -1000001] :setting/code code :setting/data data}]
;; 					  )
;; 					  resinvalid
;; 			       )
;; 			       resexists
;;                  )
;;   	]
;;         (if (nil? (second (first (:tempids result))) )
;;           (second (first (:tempids @result)))
;;           (second (first (:tempids result)))
;;         )
;;   ) 
;; )


;; (defn delete-price [security]
;;   (let [id (first (first (d/q '[:find ?u
;;                             :in $ ?code
;;                             :where
;;                             [?u :setting/code ?code]
;;                             ]
;;                           (d/db conn) security) ))
;;         ]
;;   (d/transact
;;      conn
;;      [[:db.fn/retractEntity id]]
;;     )
;;   )
;; )
