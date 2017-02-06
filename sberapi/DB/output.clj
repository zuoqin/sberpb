[
{ :user/code "zuoqin", :user/password "Qwerty123", :user/role "admin", :db/id #db/id[:db.part/user -100001] }
{ :user/code "rustam", :user/password "Qwerty123", :user/role "manager", :db/id #db/id[:db.part/user -100002] }
{ :user/code "alexey", :user/password "Qwerty123", :user/role "user", :db/id #db/id[:db.part/user -100003] }


;; SECURITIES
{ :security/code "MAIL LI Equity" :security/isin "MAILRU ISIN", :security/exchange "LONDON", :db/id #db/id[:db.part/user -100004] }
{ :security/code "MGNT RX Equity" :security/isin "MGNT ISIN", :security/exchange "MOSCOW", :db/id #db/id[:db.part/user -100005] }
{ :security/code "NVTK LI Equity" :security/isin "NVTK ISIN", :security/exchange "LONDON", :db/id #db/id[:db.part/user -100006] }
{ :security/code "YNDX US Equity" :security/isin "YNDX ISIN", :security/exchange "NASDAQ", :db/id #db/id[:db.part/user -100007] }
{ :security/code "RUALR RX EQUITY" :security/isin "RUALR ISIN", :security/exchange "MOSCOW", :db/id #db/id[:db.part/user -100008] }
{ :security/code "VIP US Equity" :security/isin "VIP ISIN", :security/exchange "NYSE", :db/id #db/id[:db.part/user -100009] }
{ :security/code "XS0925043100 Corp" :security/isin "VOSTOK 7 05/04/20", :security/exchange "OTC", :db/id #db/id[:db.part/user -100010] }
{ :security/code "XS0555493203 Corp" :security/isin "ALRSRU 7 3/4 11/03/20", :security/exchange "OTC", :db/id #db/id[:db.part/user -100011] }
{ :security/code "XS0918604496 Corp" :security/isin "EDCLLI 4 7/8 04/17/20", :security/exchange "OTC", :db/id #db/id[:db.part/user -100012] }
{ :security/code "XS0359381331 Corp" :security/isin "EVRAZ 9 1/2 04/24/18", :security/exchange "OTC", :db/id #db/id[:db.part/user -100013] }
{ :security/code "XS0588433267 Corp" :security/isin "NVTKRM 6.604 02/03/21", :security/exchange "OTC", :db/id #db/id[:db.part/user -100014] }
{ :security/code "XS1032750165 Corp" :security/isin "SBERRU 5 1/2 02/26/24", :security/exchange "OTC", :db/id #db/id[:db.part/user -100015] }
{ :security/code "XS0524610812 Corp" :security/isin "VEBBNK 6.902 07/09/20", :security/exchange "OTC", :db/id #db/id[:db.part/user -100016] }
{ :security/code "SNGSP RX EQUITY" :security/isin "SNGSP ISIN", :security/exchange "MOSCOW", :db/id #db/id[:db.part/user -100017] }
{ :security/code "XS1255387976 Corp" :security/isin "IMHRUS 10 3/4 12/28/18", :security/exchange "OTC", :db/id #db/id[:db.part/user -100018] }
{ :security/code "POLY LN Equity" :security/isin "POLY ISIN", :security/exchange "MOSCOW", :db/id #db/id[:db.part/user -100019] }



;; ISSUERS
{ :issuer/code "Mail.Ru Group Ltd" :db/id #db/id[:db.part/user -101001] }
{ :issuer/code "Magnit PJSC" :db/id #db/id[:db.part/user -101002] }
{ :issuer/code "Novatek PJSC" :db/id #db/id[:db.part/user -101003]}
{ :issuer/code "Yandex NV" :db/id #db/id[:db.part/user -101004]}
{ :issuer/code "United Co RUSAL PLC" :db/id #db/id[:db.part/user -101005]}
{ :issuer/code "VimpelCom Ltd" :db/id #db/id[:db.part/user -101006]}
{ :issuer/code "VOSTOK 7 05/04/20" :db/id #db/id[:db.part/user -101007]}
{ :issuer/code "ALRSRU 7 3/4 11/03/20" :db/id #db/id[:db.part/user -101008]}
{ :issuer/code "EDCLLI 4 7/8 04/17/20" :db/id #db/id[:db.part/user -101009]}
{ :issuer/code "EVRAZ 9 1/2 04/24/18" :db/id #db/id[:db.part/user -101010]}
{ :issuer/code "NVTKRM 6.604 02/03/21" :db/id #db/id[:db.part/user -101011]}
{ :issuer/code "SBERRU 5 1/2 02/26/24" :db/id #db/id[:db.part/user -101012]}
{ :issuer/code "VEBBNK 6.902 07/09/20" :db/id #db/id[:db.part/user -101013]}
{ :issuer/code "Surgutneftegas OJSC" :db/id #db/id[:db.part/user -101014]}
{ :issuer/code "IMHRUS 10 3/4 12/28/18" :db/id #db/id[:db.part/user -101015]}
{ :issuer/code "Polymetal International PLC" :db/id #db/id[:db.part/user -101016]}


;; CLIENTS

{ :client/code "KDBSF" :client/name "best client" :db/id #db/id[:db.part/user -102001]}
{ :client/code "KDBRF" :client/name "first client" :db/id #db/id[:db.part/user -102002]}


;; TRANSACTIONS

{ :transaction/client #db/id[:db.part/user -102001] :transaction/security #db/id[:db.part/user -100004], :transaction/nominal 8590.0 :transaction/price 23.26 :transaction/direction "B" :transaction/valuedate #inst "2014-11-12T00:00:00.0000000Z", :transaction/currency "USD" :transaction/comment "", :db/id #db/id[:db.part/user -110001] }

{ :transaction/client #db/id[:db.part/user -102001] :transaction/security #db/id[:db.part/user -100005], :transaction/nominal 330.0 :transaction/price 10300.0 :transaction/direction "B" :transaction/valuedate #inst "2016-10-12T00:00:00.0000000Z", :transaction/currency "RUB" :transaction/comment "", :db/id #db/id[:db.part/user -110002] }

{ :transaction/client #db/id[:db.part/user -102001] :transaction/security #db/id[:db.part/user -100006], :transaction/nominal 1000.0 :transaction/price 100.14 :transaction/direction "B" :transaction/valuedate #inst "2014-11-12T00:00:00.0000000Z", :transaction/currency "USD" :transaction/comment "", :db/id #db/id[:db.part/user -110003] }



;; PRICES
{ :price/security #db/id[:db.part/user -100004]  :price/lastprice  23.30 :price/valuedate #inst "2017-02-03T00:00:00.0000000Z" :price/comment "manual" :price/source "test data" }
{ :price/security #db/id[:db.part/user -100005]  :price/lastprice  10100.30 :price/valuedate #inst "2017-02-03T00:00:00.0000000Z" :price/comment "manual" :price/source "test data" }
{ :price/security #db/id[:db.part/user -100006]  :price/lastprice  100.01 :price/valuedate #inst "2017-02-03T00:00:00.0000000Z" :price/comment "manual" :price/source "test data" }
]
