(ns tradingmodel.core
  (:gen-class)
  (use (incanter core charts excel datasets))
)

(defn findfirstCol [colvals]
  (let [
    f (loop [result 1.0 data colvals]
        (if (seq data)
          (let [
            val (first data)
            ;tr1 (println val)
            ]
            (if (= val "#N/A N/A")
              (recur result (rest data))
              val
            )
          )
          1.0
        )
      )
    ]
    f
  ) 
)



(defn square [n] (* n n))

(defn mean [a] (/ (reduce + a) (count a)))

;(def filename "c:/data/Book3.xlsx")

(defn standarddev [a] 
    (Math/sqrt (/ 
                  (reduce + (map square (map - a (repeat (mean a))))) 
                  (- (count a) 1 ))))



(defn params [filename]
  (let [
    data (to-map (read-xls filename))
    ;p1vals (:p1 data)
    ;p2vals (:p2 data)
    ;p3vals (:p3 data)
    ;p4vals (:p4 data)
    ;p5vals (:p5 data)
    ]
    data
  )
)

(defn colb_main [filename]
  (let [
    data (to-map (read-xls filename))
    colb0 (findfirstCol (:ColB data))
    ]
    (loop [result [] colb (:ColB data) prevval colb0]
      (if (seq colb)
        (let [
          val (first colb)
          ;tr1 (println val)
          ]
          (recur (conj result (if (= "#N/A N/A" (str val)) prevval val)) (rest colb) (if (= "#N/A N/A" (str val)) prevval val))
        )
        result
      )
    )
  )
)

(defn colh_main [filename]
  (let [
    data (to-map (read-xls filename))
    colg0 (findfirstCol (:ColG data))

    ]
    (loop [result [] colg (:ColG data) prevval colg0]
        (if (seq colg)
          (let [
            val (first colg)
            ;tr1 (println val)
            ]
            (recur (conj result (if (= "#N/A N/A" (str val)) prevval val)) (rest colg) (if (= "#N/A N/A" (str val)) prevval val))
          )
          result
        )
      )
  )
)

(defn coli_main [filename]
  (let [
    data (to-map (read-xls filename))
    coli0 (findfirstCol (:ColE data))
    ]
    (loop [result [] cole (:ColE data) prevval coli0]
        (if (seq cole)
          (let [
            val (first cole)
            ;tr1 (println val)
            ]
            (recur (conj result (if (= "#N/A N/A" (str val)) prevval val)) (rest cole) (if (= "#N/A N/A" (str val)) prevval val))
          )
          result
        )
      )
  )
)

(defn colj_main [filename]
  (let [
    data (to-map (read-xls filename))
    coli0 (findfirstCol (:ColE data))
    ]
    (loop [result [] coli (coli_main filename)  prevval coli0]
      (if (seq coli)
        (let [
          val (first coli)
          ;tr1 (println (log (/ val prevval)))
          ]
          (recur (conj result (log (/ val prevval))) (rest coli) val)
        )
        result
      )
    )
  )
)

(defn comp-by-r2 [res1 res2]
  (let [
    ;tr1 (println (str "res1= " res1 "; res2=" res2))
    ]
    (if (> (:b res1) (:b res2)) true (if (and (= (:b res1) (:b res2)) (> (:profit res1) (:profit res2))) true false))
  )
)


(defn comp-by-profit [res1 res2]
  (let [
    ;tr1 (println (str "res1= " res1 "; res2=" res2))
    ]
    (if (> (:profit res1) (:profit res2)) true (if (and (= (:profit res1) (:profit res2)) (> (:b res1) (:b res2))) true false))
  )
)


(defn calccase [p1 p2 p3 p4 p5 colb_main coli_main colm_main coln_main colo_main coll_main]
  (let [
    colp_main (loop [result [] coln coln_main colo colo_main]
        (if (seq coln)
          (let [
            ;tr1 (println (str "i=" (first coli) "; h=" (first colh)))

            val (+ (first coln) (* p1 (first colo))) 

            
            ]
            (recur (conj result val) (rest coln) (rest colo))
          )
          result
        )
      )

    ;tr1 (println (str "p0=" (first colp_main) "; count=" (count colp_main) "; last=" (nth colp_main (- (count colp_main) 1))))
    colq_main (loop [result [] coln coln_main colo colo_main]
        (if (seq coln)
          (let [
            ;tr1 (println (str "i=" (first coli) "; h=" (first colh)))

            val (- (first coln) (* p1 (first colo))) 

            
            ]
            (recur (conj result val) (rest coln) (rest colo))
          )
          result
        )
      )



    ;tr1 (println (str "q0=" (first colq_main) "; count=" (count colq_main) "; last=" (nth colq_main (- (count colq_main) 1))))
    coly_main (loop [result [] coll (drop 12 coll_main)]
        (if (seq coll)
          (let [
            ;tr1 (println (str "i=" (first coli) "; h=" (first colh)))

            val (- (/ (first coll) p5))
            ]
            (recur (conj result val) (rest coll))
          )
          result
        )
      )

    ;tr1 (println (str "y0=" (first coly_main) "; count=" (count coly_main) "; last=" (nth coly_main (- (count coly_main) 1))))

    colv_main (loop [colb colb_main coli (drop 1 coli_main) colm (drop 12 colm_main) colp colp_main colv [] coly coly_main pass 0 previ 0.0 prevr 0.0 prevs 0.0 valv-1 0.0 valv-2 0.0 valv-3 0.0 prevz 0.0 prevaa 0.0 prevad 0.0 prevae 0.0]
      (if (seq colp)
        (let [

          ;tr1 (if (< pass 20) (println (str "1. prevv=" valv-1 "; prevaa=" prevaa "; prevz=" prevz)))

          valaa (+ prevaa prevz)

          ;tr1 (if (< pass 20) (println (str "1.2. aa=" valaa "; prevs=" prevs)))

          vals (- (+ prevs valaa prevr) prevaa)

          ;tr1 (if (< pass 20) (println (str "1.3. prevv=" valv-1 )))

          vali (first coli)
          valu (* vals (- vali previ))

          ;tr1 (if (< pass 20) (println (str "1.4. prevv=" valv-1 )))

          valb (first colb)
          valp (first colp)

          ;tr1 (if (< pass 20) (println (str "1.5. prevv=" valv-1 )))

          valm (first colm)
          valy (first coly)

          ;valz 0.0


          ;tr1 (if (= pass 58) (println (str pass ". vals=" vals "; prevr=" prevr  "; valm=" valm "; p4=" p4 "; p3=" p3 "; prevz=" prevz)))

          valr (if (> (+ vals prevr) p4)
            (if (< valm p3)
              (- 0.0 prevs prevr prevz)
              0.0
            )
            (if (< valm p3)
              (if (= 0.0 prevs)
                0.0
                (- 0.0 prevs prevr prevz)
              )
              (if (> valb p2)
                (if (> valm valp)
                  1.0
                  0.0
                )
                0.0
              )
            )
          )

          valt (* 0.002 (abs valr) vali)


          valv (+ (- valv-1 valt) valu)

          valad (if (> valr 0.0) vali prevad)



          ;tr1 (if (= pass 47) (println (str pass ". b=" valb "; m=" valm "; r=" valr "; aa=" valaa "; s=" vals "; i=" vali "; v=" valv "; y=" valy "; z=" valz "; ad=" valad )))

          valae (if (= 0.0 vals)
             (if (= 1.0 valr)
               vali
               0.0
             )

             (if (and (not= 0.0 (- valad prevad)) (> vals 0.0)) 
               (if (= 1.0 (+ vals valr))
                 valad
                 (if (and (> (+ vals valr) 1.0) (<= (+ vals valr) 2.0)) 
                   (/ (+ valad prevae) (min (+ vals valr) 2.0))
                   (if (and (> (+ vals valr) 2.0)) 
                     (/ (+ valad (* vals prevae))  (+ vals valr))
                     0.0
                   )
                 )
               )
               prevae
             )
           )
          


          valab (* vals (- vali valae))

          ;tr1 (if (< pass 20) (println (str "3. prevv=" valv-1 "; ae=" valae "; ab=" valab)))
          valaf (if (= valae 0.0)
            0.0
            (/ valab valae)
          )

          valz (if (not= 0.0 (+ valr prevr))
            0.0
            (if (not= 0.0 (- valv-1 valv-2 valv-3))
              (if (not= 0.0 prevz)
                0.0
                (if (< valaf valy)
                  (- 0.0 prevs)
                  0.0
                )
              )
              0.0              
            )
          )

          ;tr1 (if (< pass 100) (println (str pass ". b=" valb "; m=" valm "; r=" valr "; s=" vals "; i=" vali "; v=" valv "; y=" valy "; z=" valz "; aa=" valaa "; ab=" valab "; ad=" valad "; ae=" valae "; af=" valaf)))
          ]
          (recur (rest colb) (rest coli) (rest colm) (rest colp) (conj colv valv) (rest coly) (+ pass 1) vali valr vals valv valv-1 valv-2  valz valaa valad valae)
        )
        
        colv
      )
    )

    ;tr1 (println (str "countv=" (count colv_main)))

    n (double (count colv_main)) 

    sum_x (double (reduce + (range n))) 

    x_av (/ sum_x n)

    sum_y (reduce + colv_main)
    y_av (/ sum_y n)

    ;tr1 (println (str "x_av=" x_av "; y_av=" y_av))

    ;tr1 (println (map (fn [x] (x - x_av)) (range n)))
    ;; coeff (/ (reduce + (map (fn [a b] (* a b)) (map (fn [x] (- x x_av)) (range n)) (map (fn [y] (- y y_av)) colv_main)))

    ;;   (reduce + (map (fn [x] (* (- x x_av) (- x x_av))) (range n)) )
    ;; )


    denominator (Math/sqrt (* (- (* n (reduce (fn [x  y] (+ x (* y y))) 0.0 (range n))) (* sum_x sum_x))  

    (- (* n (reduce (fn [x  y] (+ x (* y y))) 0.0 colv_main)) (* sum_y sum_y))

    ))
    b (if (> denominator 0.0) (/  (-  (* n (reduce + (map (fn [x y] (* x y)) (range n) colv_main))) (* sum_x sum_y)) denominator) 0.0) 
    ]
    
    ;colv_main
    {:b (* b b) :profit (nth colv_main (- (count colv_main) 1)) :p1 p1 :p2 p2 :p3 p3 :p4 p4 :p5 p5}

   ;{:profit (nth colv_main (- (count colv_main) 1)) :p1 p1 :p2 p2 :p3 p3 :p4 p4 :p5 p5}
  
  )
)

(defn loadexcel [filename]
  (let [
    ;data (to-map (read-xls "c:/data/Book3.xlsx"))

    colk_main (loop [result [] colj (colj_main filename) pass 0]
        (if (> (count colj ) 51)
          (let [
            val (* (standarddev (take (if (= pass 0) 51 52) (drop (if (= pass 0) 1 0) colj))) (sqrt 52))
            ;tr1 (println (log (/ val prevval)))
            ]
            (recur (conj result val) (rest colj) (+ pass 1))
          )
          result
        )
        
      )
    ;tr1 (println (str "k0=" (first colk_main) "; count=" (count colk_main)))
    coll_main (loop [result [] coli (drop 51 (coli_main filename) ) colh (drop 51 (colh_main filename))]
        (if (seq coli)
          (let [
            ;tr1 (println (str "i=" (first coli) "; h=" (first colh)))

            vali (first coli)
            valh (first colh)
            val (- (/ valh vali) 1.0)
            
            ]
            (recur (conj result val) (rest coli) (rest colh))
          )
          result
        )
      )


    colm_main (loop [result [] coll coll_main colk colk_main pass 1]
        (if (seq coll)
          (let [
            ;tr1 (println (str pass ". l=" (first coll) "; k=" (first colk)))

            vall (first coll)
            valk (first colk)
            val (/ vall valk)
            
            ]
            (recur (conj result val) (rest coll) (rest colk) (+ pass 1))
          )
          result
        )
      )

    ;tr1 (println (str "m0=" (first colm_main) "; count=" (count colm_main)))
    coln_main (loop [result [] pass 0]
        (if (< pass (- (count colm_main) 12))
          (let [
            ;tr1 (println (str "i=" (first coli) "; h=" (first colh)))

            val (mean (take 13 (drop pass colm_main)))

            
            ]
            (recur (conj result val) (+ pass 1))
          )
          result
        )
      )

    ;tr1 (println (str "n0=" (first coln_main) "; count=" (count coln_main)))
    colo_main (loop [result [] pass 0]
        (if (< pass (- (count colm_main) 12))
          (let [
            ;tr1 (println (str "i=" (first coli) "; h=" (first colh)))
            val (standarddev (take 13 (drop pass colm_main)))
            ]
            (recur (conj result val) (+ pass 1))
          )
          result
        )
      )

    ;tr1 (println (str "o0=" (first colo_main) "; count=" (count colo_main) "; last=" (nth colo_main (- (count colo_main) 1))))

    colb_truncated (drop 63 (colb_main filename))
    coli_truncated (drop 62 (coli_main filename))


    ;(calccase p1 p2 p3 p4 p5 colb_truncated coli_truncated colm_main coln_main colo_main coll_main)
    params (params filename)

    res (loop [result [] p1 (nth (:p1 params) 0) p2 (nth (:p2 params) 0) p3 (nth (:p3 params) 0) p4 (nth (:p4 params) 0) p5 (nth (:p5 params) 0) pass 1]
           ;[result [] p1 3.0 p2 5.0 p3 0.1 p4 1.0 p5 0.2 pass 1]
        (if (<= p1 (+ (nth (:p1 params) 1) (/ (nth (:p1 params) 2) 10.0)))
          (if (<= p2 (+ (nth (:p2 params) 1) (/ (nth (:p2 params) 2) 10.0)))
            (if (<= p3 (+ (nth (:p3 params) 1) (/ (nth (:p3 params) 2) 10.0)))
              (if (<= p4 (+ (nth (:p4 params) 1) (/ (nth (:p4 params) 2) 10.0)))
                (if (<= p5 (+ (nth (:p5 params) 1) (/ (nth (:p5 params) 2) 10.0)))
                  (let [
                      ;tr1 (if (< pass 60) (println (str "1. pass=" pass "; count=" (count result) "; p1=" p1 "; p2=" p2 "; p3=" p3 "; p4=" p4 "; p5=" p5)))
                    ]
                    (recur (conj result (calccase p1 p2 p3 p4 p5 colb_truncated coli_truncated colm_main coln_main colo_main coll_main)) p1 p2 p3 p4 (+ p5 (nth (:p5 params) 2)) (+ pass 1))
                    ;(recur (conj result pass) p1 p2 p3 p4 (+ p5 0.2) (+ pass 1))
                  )
                  ;
                  (let [
                    ;tr1 (println (str (java.time.LocalDateTime/now)))
                    ;tr1 (if (< pass 1000) (println (str "2. pass=" (- pass 1) "; count=" (count result) "; p1=" p1 "; p2=" p2 "; p3=" p3 "; p4=" p4 "; p5=" p5)))
                    ]
                    (recur result p1 p2 p3 (+ p4 (nth (:p4 params) 2)) 0.2 pass)
                  )
                  
                )
                (let [
                  ;tr1 (println (str (java.time.LocalDateTime/now) " pass=" pass))
                  ;tr1 (if (< pass 2000) (println (str "3. pass=" (- pass 1) "; count=" (count result))))
                  ]
                  (recur result p1 p2 (+ p3 (nth (:p3 params) 2)) 1.0 0.2 pass)
                )
                
              )
              (let [
                  ;tr1 (if (< pass 60000) (println (str "4.pass=" (- pass 1) "; count=" (count result) "; p1=" p1 "; p2=" p2 "; p3=" p3 "; p4=" p4 "; p5=" p5)))
                  tr1 (println (str (java.time.LocalDateTime/now) " pass=" (- pass 1)))
                ]
                (recur result p1 (+ p2 (nth (:p2 params) 2)) 0.1 1.0 0.2 pass)
              )
            )
            (recur result (+ p1 (nth (:p1 params) 2)) 3.5 0.1 1.0 0.2 pass)
          )

          result
        )
      )
    arrsize (count res)
    sorted_res (sort (comp comp-by-r2) res)
    top_by_r2 (sort (comp comp-by-profit) (take (int (Math/floor (* 0.07 arrsize))) sorted_res))

    ]
    
    ;(println (nth coll 0))
    ;(println (nth colo_main 283))
    ;(println (nth colk 0))


    ;(println (nth colk 295))
    ;(println (count coll))
    ;(println (count (coli_main filename)))
    
    
  
    (println (str "count=" (count res) "1st=" (first sorted_res) ))

    (save-xls (to-dataset top_by_r2) "./output.xlsx")
    ;(calccase 1.4 3.5 0.1 3.0 0.2 (drop 63 (colb_main filename)) (drop 62 (coli_main filename)) colm_main coln_main colo_main coll_main)
  )
)


(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (if (> (count args) 0)
    (loadexcel (nth args 0))
    (println "Please provide input excel filename")
  )
)
