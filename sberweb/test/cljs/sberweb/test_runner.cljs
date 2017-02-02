(ns sberweb.test-runner
  (:require
   [doo.runner :refer-macros [doo-tests]]
   [sberweb.core-test]
   [sberweb.common-test]))

(enable-console-print!)

(doo-tests 'sberweb.core-test
           'sberweb.common-test)
