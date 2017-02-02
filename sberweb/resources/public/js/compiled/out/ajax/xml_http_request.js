// Compiled by ClojureScript 1.9.89 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__7979,handler){
var map__7980 = p__7979;
var map__7980__$1 = ((((!((map__7980 == null)))?((((map__7980.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7980.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7980):map__7980);
var uri = cljs.core.get.call(null,map__7980__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__7980__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__7980__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__7980__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__7980__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__7980__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__7980__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__7980,map__7980__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__7978_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__7978_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__7980,map__7980__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___7992 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___7992)){
var response_type_7993 = temp__4657__auto___7992;
this$__$1.responseType = cljs.core.name.call(null,response_type_7993);
} else {
}

var seq__7982_7994 = cljs.core.seq.call(null,headers);
var chunk__7983_7995 = null;
var count__7984_7996 = (0);
var i__7985_7997 = (0);
while(true){
if((i__7985_7997 < count__7984_7996)){
var vec__7986_7998 = cljs.core._nth.call(null,chunk__7983_7995,i__7985_7997);
var k_7999 = cljs.core.nth.call(null,vec__7986_7998,(0),null);
var v_8000 = cljs.core.nth.call(null,vec__7986_7998,(1),null);
this$__$1.setRequestHeader(k_7999,v_8000);

var G__8001 = seq__7982_7994;
var G__8002 = chunk__7983_7995;
var G__8003 = count__7984_7996;
var G__8004 = (i__7985_7997 + (1));
seq__7982_7994 = G__8001;
chunk__7983_7995 = G__8002;
count__7984_7996 = G__8003;
i__7985_7997 = G__8004;
continue;
} else {
var temp__4657__auto___8005 = cljs.core.seq.call(null,seq__7982_7994);
if(temp__4657__auto___8005){
var seq__7982_8006__$1 = temp__4657__auto___8005;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7982_8006__$1)){
var c__7062__auto___8007 = cljs.core.chunk_first.call(null,seq__7982_8006__$1);
var G__8008 = cljs.core.chunk_rest.call(null,seq__7982_8006__$1);
var G__8009 = c__7062__auto___8007;
var G__8010 = cljs.core.count.call(null,c__7062__auto___8007);
var G__8011 = (0);
seq__7982_7994 = G__8008;
chunk__7983_7995 = G__8009;
count__7984_7996 = G__8010;
i__7985_7997 = G__8011;
continue;
} else {
var vec__7989_8012 = cljs.core.first.call(null,seq__7982_8006__$1);
var k_8013 = cljs.core.nth.call(null,vec__7989_8012,(0),null);
var v_8014 = cljs.core.nth.call(null,vec__7989_8012,(1),null);
this$__$1.setRequestHeader(k_8013,v_8014);

var G__8015 = cljs.core.next.call(null,seq__7982_8006__$1);
var G__8016 = null;
var G__8017 = (0);
var G__8018 = (0);
seq__7982_7994 = G__8015;
chunk__7983_7995 = G__8016;
count__7984_7996 = G__8017;
i__7985_7997 = G__8018;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__6251__auto__ = body;
if(cljs.core.truth_(or__6251__auto__)){
return or__6251__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map?rel=1486035189496