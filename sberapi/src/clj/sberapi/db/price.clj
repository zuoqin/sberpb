(ns sberapi.db.price
  (:require [datomic.api :as d]
            [mount.core :refer [defstate]]
            [sberapi.db.core :refer [conn] ]
            [sberapi.config :refer [env]]
            [clj-time.core :as t]
            [clj-time.format :as f]
            [clj-time.local :as l]
            [clj-time.coerce :as c]
 
            [sberapi.db.security :as sec]
))

(def custom-formatter (f/formatter "dd/MM/yyyy"))
(def build-in-basicdate-formatter (f/formatters :basic-date))


(defn ent [id]
  (let [
   
  ]
  (seq (d/entity (d/db conn) (ffirst id))) )
)

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
    sec (first (filter (fn [x] (if (= (compare (:isin x) (:isin quote)) 0) true false)) (sec/get-securities)))
    dt (java.util.Date.)
    dttxt (f/unparse build-in-basicdate-formatter (c/from-long (c/to-long dt)))
    ;tr1 (println quote)
    price (double (:price quote))


    priceid (d/q '[:find ?e ;?t ?a ?y ?d ?p ?dur
             :in $ ?sec
             :where
             [?e :price/targetprice ?t]
             [?e :price/analystrating ?a]
             [?e :price/yield ?y]
             [?e :price/dvddate ?d]
             [?e :price/putdate ?p]
             [?e :price/duration ?dur]
             [?e :price/security ?sec]
             ] (d/db conn) (:id sec))
    price (ent priceid)


    target (second (first (filter (fn [x] (if (= (first x) (keyword "price/targetprice")) true false)) price)))

    anr (second (first (filter (fn [x] (if (= (first x) (keyword "price/analystrating")) true false)) price) ))

    yield (second (first (filter (fn [x] (if (= (first x) (keyword "price/yield")) true false)) price) ))

    dvddate (second (first (filter (fn [x] (if (= (first x) (keyword "price/dvddate")) true false)) price) ))

    putdate (second (first (filter (fn [x] (if (= (first x) (keyword "price/putdate")) true false)) price) ))

    duration (second (first (filter (fn [x] (if (= (first x) (keyword "price/duration")) true false)) price) ))


    tr2 (if (not (nil? priceid)) (d/transact conn [[:db.fn/retractEntity (ffirst priceid)]])) 
        
  ]

  ;;:price/targetprice target :price/analystrating anr :price/yield yield :price/dvddate newdvddt :price/putdate newputdt :price/duration duration
  (d/transact-async conn  [{ :price/security (:id sec) :price/lastprice (double (:price quote)) :price/valuedate dt  :price/source "Excel import" :price/comment (str "Import from Bllomberg API output on " dttxt) :price/targetprice target :price/analystrating anr :price/yield yield :price/dvddate dvddate :price/putdate putdate :price/duration duration :db/id #db/id[:db.part/user -100001 ]}])
)
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
