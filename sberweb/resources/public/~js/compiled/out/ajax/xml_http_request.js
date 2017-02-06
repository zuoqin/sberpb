// Compiled by ClojureScript 1.9.89 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__28445,handler){
var map__28446 = p__28445;
var map__28446__$1 = ((((!((map__28446 == null)))?((((map__28446.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28446.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28446):map__28446);
var uri = cljs.core.get.call(null,map__28446__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__28446__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__28446__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__28446__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__28446__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__28446__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__28446__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__28446,map__28446__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__28444_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__28444_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__28446,map__28446__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___28458 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___28458)){
var response_type_28459 = temp__4657__auto___28458;
this$__$1.responseType = cljs.core.name.call(null,response_type_28459);
} else {
}

var seq__28448_28460 = cljs.core.seq.call(null,headers);
var chunk__28449_28461 = null;
var count__28450_28462 = (0);
var i__28451_28463 = (0);
while(true){
if((i__28451_28463 < count__28450_28462)){
var vec__28452_28464 = cljs.core._nth.call(null,chunk__28449_28461,i__28451_28463);
var k_28465 = cljs.core.nth.call(null,vec__28452_28464,(0),null);
var v_28466 = cljs.core.nth.call(null,vec__28452_28464,(1),null);
this$__$1.setRequestHeader(k_28465,v_28466);

var G__28467 = seq__28448_28460;
var G__28468 = chunk__28449_28461;
var G__28469 = count__28450_28462;
var G__28470 = (i__28451_28463 + (1));
seq__28448_28460 = G__28467;
chunk__28449_28461 = G__28468;
count__28450_28462 = G__28469;
i__28451_28463 = G__28470;
continue;
} else {
var temp__4657__auto___28471 = cljs.core.seq.call(null,seq__28448_28460);
if(temp__4657__auto___28471){
var seq__28448_28472__$1 = temp__4657__auto___28471;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28448_28472__$1)){
var c__25683__auto___28473 = cljs.core.chunk_first.call(null,seq__28448_28472__$1);
var G__28474 = cljs.core.chunk_rest.call(null,seq__28448_28472__$1);
var G__28475 = c__25683__auto___28473;
var G__28476 = cljs.core.count.call(null,c__25683__auto___28473);
var G__28477 = (0);
seq__28448_28460 = G__28474;
chunk__28449_28461 = G__28475;
count__28450_28462 = G__28476;
i__28451_28463 = G__28477;
continue;
} else {
var vec__28455_28478 = cljs.core.first.call(null,seq__28448_28472__$1);
var k_28479 = cljs.core.nth.call(null,vec__28455_28478,(0),null);
var v_28480 = cljs.core.nth.call(null,vec__28455_28478,(1),null);
this$__$1.setRequestHeader(k_28479,v_28480);

var G__28481 = cljs.core.next.call(null,seq__28448_28472__$1);
var G__28482 = null;
var G__28483 = (0);
var G__28484 = (0);
seq__28448_28460 = G__28481;
chunk__28449_28461 = G__28482;
count__28450_28462 = G__28483;
i__28451_28463 = G__28484;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__24872__auto__ = body;
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
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

//# sourceMappingURL=xml_http_request.js.map?rel=1486291260456