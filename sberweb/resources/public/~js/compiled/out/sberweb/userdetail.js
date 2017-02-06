// Compiled by ClojureScript 1.9.89 {}
goog.provide('sberweb.userdetail');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('om_bootstrap.input');
goog.require('om_bootstrap.panel');
goog.require('om_tools.dom');
goog.require('goog.history.EventType');
goog.require('om_tools.core');
goog.require('om.dom');
goog.require('sberweb.settings');
goog.require('sberweb.core');
goog.require('cljs.core.async');
goog.require('cljs_time.core');
goog.require('goog.History');
goog.require('goog.events');
goog.require('cljs_time.format');
goog.require('om.core');
goog.require('secretary.core');
goog.require('om_bootstrap.button');
goog.require('clojure.string');
goog.require('net.unit8.tower');
sberweb.userdetail.jquery = $;
cljs.core.enable_console_print_BANG_.call(null);
sberweb.userdetail.ch = cljs.core.async.chan.call(null,cljs.core.async.dropping_buffer.call(null,(2)));
if(typeof sberweb.userdetail.app_state !== 'undefined'){
} else {
sberweb.userdetail.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"login","login",55217519),"",new cljs.core.Keyword(null,"password","password",417022471),"",new cljs.core.Keyword(null,"roles","roles",143379530),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"admin"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"manager"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"user"], null)], null),new cljs.core.Keyword(null,"isinsert","isinsert",399898579),false,new cljs.core.Keyword(null,"role","role",-736691072),"admin",new cljs.core.Keyword(null,"view","view",1247994814),(1),new cljs.core.Keyword(null,"current","current",-1088038603),"User Detail"], null));
}
sberweb.userdetail.handleChange = (function sberweb$userdetail$handleChange(e){
return cljs.core.swap_BANG_.call(null,sberweb.userdetail.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,e.nativeEvent.target.id)], null),e.nativeEvent.target.value);
});
sberweb.userdetail.OnDeleteUserError = (function sberweb$userdetail$OnDeleteUserError(response){
var newdata = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"userid","userid",1974246085),cljs.core.get.call(null,response,cljs.core.keyword.call(null,"tripid"))], null);
return null;
});
sberweb.userdetail.OnDeleteUserSuccess = (function sberweb$userdetail$OnDeleteUserSuccess(response){
var users_46120 = new cljs.core.Keyword(null,"users","users",-713552705).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.core.app_state));
var newusers_46121 = cljs.core.remove.call(null,((function (users_46120){
return (function (user){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(user),new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.userdetail.app_state)))){
return true;
} else {
return false;
}
});})(users_46120))
,users_46120);
cljs.core.swap_BANG_.call(null,sberweb.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",-713552705)], null),newusers_46121);

return document.location = "#/users";
});
sberweb.userdetail.OnUpdateUserError = (function sberweb$userdetail$OnUpdateUserError(response){
var newdata = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tripid","tripid",1618565525),cljs.core.get.call(null,response,cljs.core.keyword.call(null,"tripid"))], null);
return null;
});
sberweb.userdetail.OnUpdateUserSuccess = (function sberweb$userdetail$OnUpdateUserSuccess(response){
var users = new cljs.core.Keyword(null,"users","users",-713552705).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.core.app_state));
var deluser = cljs.core.remove.call(null,((function (users){
return (function (user){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(user),new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.userdetail.app_state)))){
return true;
} else {
return false;
}
});})(users))
,users);
var adduser = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.conj.call(null,deluser,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.userdetail.app_state)),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"password","password",417022471).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.userdetail.app_state)),new cljs.core.Keyword(null,"role","role",-736691072),new cljs.core.Keyword(null,"role","role",-736691072).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.userdetail.app_state))], null)));
cljs.core.swap_BANG_.call(null,sberweb.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",-713552705)], null),adduser);

return document.location = "#/users";
});
sberweb.userdetail.deleteUser = (function sberweb$userdetail$deleteUser(login){
return ajax.core.DELETE.call(null,[cljs.core.str(sberweb.settings.apipath),cljs.core.str("api/user?login="),cljs.core.str(login)].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),sberweb.userdetail.OnDeleteUserSuccess,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),sberweb.userdetail.OnDeleteUserError,new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json",new cljs.core.Keyword(null,"Authorization","Authorization",-1017527462),[cljs.core.str("Bearer "),cljs.core.str(new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.core.app_state))))].join('')], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570)], null));
});
sberweb.userdetail.updateUser = (function sberweb$userdetail$updateUser(){
return ajax.core.PUT.call(null,[cljs.core.str(sberweb.settings.apipath),cljs.core.str("api/user")].join(''),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"handler","handler",-195596612),sberweb.userdetail.OnUpdateUserSuccess,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),sberweb.userdetail.OnUpdateUserError,new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json",new cljs.core.Keyword(null,"Authorization","Authorization",-1017527462),[cljs.core.str("Bearer "),cljs.core.str(new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.core.app_state))))].join('')], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.userdetail.app_state)),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"password","password",417022471).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.userdetail.app_state)),new cljs.core.Keyword(null,"role","role",-736691072),new cljs.core.Keyword(null,"role","role",-736691072).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.userdetail.app_state))], null)], null));
});
sberweb.userdetail.OnCreateUserError = (function sberweb$userdetail$OnCreateUserError(response){
var newdata = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tripid","tripid",1618565525),cljs.core.get.call(null,response,cljs.core.keyword.call(null,"tripid"))], null);
return null;
});
sberweb.userdetail.OnCreateUserSuccess = (function sberweb$userdetail$OnCreateUserSuccess(response){
var users = new cljs.core.Keyword(null,"users","users",-713552705).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.core.app_state));
var adduser = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.conj.call(null,users,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.userdetail.app_state)),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"password","password",417022471).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.userdetail.app_state)),new cljs.core.Keyword(null,"role","role",-736691072),new cljs.core.Keyword(null,"role","role",-736691072).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.userdetail.app_state))], null)));
cljs.core.swap_BANG_.call(null,sberweb.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",-713552705)], null),adduser);

return document.location = "#/users";
});
sberweb.userdetail.createUser = (function sberweb$userdetail$createUser(){
return ajax.core.POST.call(null,[cljs.core.str(sberweb.settings.apipath),cljs.core.str("api/user")].join(''),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"handler","handler",-195596612),sberweb.userdetail.OnCreateUserSuccess,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),sberweb.userdetail.OnCreateUserError,new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json",new cljs.core.Keyword(null,"Authorization","Authorization",-1017527462),[cljs.core.str("Bearer "),cljs.core.str(new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.core.app_state))))].join('')], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.userdetail.app_state)),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"password","password",417022471).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.userdetail.app_state)),new cljs.core.Keyword(null,"role","role",-736691072),new cljs.core.Keyword(null,"role","role",-736691072).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.userdetail.app_state))], null)], null));
});
sberweb.userdetail.onDropDownChange = (function sberweb$userdetail$onDropDownChange(id,value){
return cljs.core.swap_BANG_.call(null,sberweb.userdetail.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"role","role",-736691072)], null),value);
});
sberweb.userdetail.setRolesDropDown = (function sberweb$userdetail$setRolesDropDown(){
sberweb.userdetail.jquery.call(null,(function (){
return sberweb.userdetail.jquery.call(null,"#roles").selectpicker(cljs.core.PersistentArrayMap.EMPTY);
}));

return sberweb.userdetail.jquery.call(null,(function (){
return sberweb.userdetail.jquery.call(null,"#roles").selectpicker("val",new cljs.core.Keyword(null,"role","role",-736691072).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.userdetail.app_state))).on("change",(function (e){
return sberweb.userdetail.onDropDownChange.call(null,e.target.id,e.target.value);
}));
}));
});
sberweb.userdetail.setNewUserValue = (function sberweb$userdetail$setNewUserValue(key,val){
return cljs.core.swap_BANG_.call(null,sberweb.userdetail.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,key)], null),val);
});
sberweb.userdetail.setcontrols = (function sberweb$userdetail$setcontrols(value){
var G__46123 = value;
switch (G__46123) {
case (46):
return sberweb.userdetail.setRolesDropDown.call(null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(value)].join('')));

}
});
sberweb.userdetail.initqueue = (function sberweb$userdetail$initqueue(){
var seq__46153 = cljs.core.seq.call(null,cljs.core.range.call(null,(1000)));
var chunk__46154 = null;
var count__46155 = (0);
var i__46156 = (0);
while(true){
if((i__46156 < count__46155)){
var n = cljs.core._nth.call(null,chunk__46154,i__46156);
var c__27094__auto___46181 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__46153,chunk__46154,count__46155,i__46156,c__27094__auto___46181,n){
return (function (){
var f__27095__auto__ = (function (){var switch__27029__auto__ = ((function (seq__46153,chunk__46154,count__46155,i__46156,c__27094__auto___46181,n){
return (function (state_46160){
var state_val_46161 = (state_46160[(1)]);
if((state_val_46161 === (1))){
var inst_46157 = (function (){return ((function (seq__46153,chunk__46154,count__46155,i__46156,state_val_46161,c__27094__auto___46181,n){
return (function (v){
return sberweb.userdetail.setcontrols.call(null,v);
});
;})(seq__46153,chunk__46154,count__46155,i__46156,state_val_46161,c__27094__auto___46181,n))
})();
var inst_46158 = cljs.core.async.take_BANG_.call(null,sberweb.userdetail.ch,inst_46157);
var state_46160__$1 = state_46160;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46160__$1,inst_46158);
} else {
return null;
}
});})(seq__46153,chunk__46154,count__46155,i__46156,c__27094__auto___46181,n))
;
return ((function (seq__46153,chunk__46154,count__46155,i__46156,switch__27029__auto__,c__27094__auto___46181,n){
return (function() {
var sberweb$userdetail$initqueue_$_state_machine__27030__auto__ = null;
var sberweb$userdetail$initqueue_$_state_machine__27030__auto____0 = (function (){
var statearr_46165 = [null,null,null,null,null,null,null];
(statearr_46165[(0)] = sberweb$userdetail$initqueue_$_state_machine__27030__auto__);

(statearr_46165[(1)] = (1));

return statearr_46165;
});
var sberweb$userdetail$initqueue_$_state_machine__27030__auto____1 = (function (state_46160){
while(true){
var ret_value__27031__auto__ = (function (){try{while(true){
var result__27032__auto__ = switch__27029__auto__.call(null,state_46160);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27032__auto__;
}
break;
}
}catch (e46166){if((e46166 instanceof Object)){
var ex__27033__auto__ = e46166;
var statearr_46167_46182 = state_46160;
(statearr_46167_46182[(5)] = ex__27033__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46160);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46166;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46183 = state_46160;
state_46160 = G__46183;
continue;
} else {
return ret_value__27031__auto__;
}
break;
}
});
sberweb$userdetail$initqueue_$_state_machine__27030__auto__ = function(state_46160){
switch(arguments.length){
case 0:
return sberweb$userdetail$initqueue_$_state_machine__27030__auto____0.call(this);
case 1:
return sberweb$userdetail$initqueue_$_state_machine__27030__auto____1.call(this,state_46160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sberweb$userdetail$initqueue_$_state_machine__27030__auto__.cljs$core$IFn$_invoke$arity$0 = sberweb$userdetail$initqueue_$_state_machine__27030__auto____0;
sberweb$userdetail$initqueue_$_state_machine__27030__auto__.cljs$core$IFn$_invoke$arity$1 = sberweb$userdetail$initqueue_$_state_machine__27030__auto____1;
return sberweb$userdetail$initqueue_$_state_machine__27030__auto__;
})()
;})(seq__46153,chunk__46154,count__46155,i__46156,switch__27029__auto__,c__27094__auto___46181,n))
})();
var state__27096__auto__ = (function (){var statearr_46168 = f__27095__auto__.call(null);
(statearr_46168[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27094__auto___46181);

return statearr_46168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27096__auto__);
});})(seq__46153,chunk__46154,count__46155,i__46156,c__27094__auto___46181,n))
);


var G__46184 = seq__46153;
var G__46185 = chunk__46154;
var G__46186 = count__46155;
var G__46187 = (i__46156 + (1));
seq__46153 = G__46184;
chunk__46154 = G__46185;
count__46155 = G__46186;
i__46156 = G__46187;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__46153);
if(temp__4657__auto__){
var seq__46153__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46153__$1)){
var c__25683__auto__ = cljs.core.chunk_first.call(null,seq__46153__$1);
var G__46188 = cljs.core.chunk_rest.call(null,seq__46153__$1);
var G__46189 = c__25683__auto__;
var G__46190 = cljs.core.count.call(null,c__25683__auto__);
var G__46191 = (0);
seq__46153 = G__46188;
chunk__46154 = G__46189;
count__46155 = G__46190;
i__46156 = G__46191;
continue;
} else {
var n = cljs.core.first.call(null,seq__46153__$1);
var c__27094__auto___46192 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__46153,chunk__46154,count__46155,i__46156,c__27094__auto___46192,n,seq__46153__$1,temp__4657__auto__){
return (function (){
var f__27095__auto__ = (function (){var switch__27029__auto__ = ((function (seq__46153,chunk__46154,count__46155,i__46156,c__27094__auto___46192,n,seq__46153__$1,temp__4657__auto__){
return (function (state_46172){
var state_val_46173 = (state_46172[(1)]);
if((state_val_46173 === (1))){
var inst_46169 = (function (){return ((function (seq__46153,chunk__46154,count__46155,i__46156,state_val_46173,c__27094__auto___46192,n,seq__46153__$1,temp__4657__auto__){
return (function (v){
return sberweb.userdetail.setcontrols.call(null,v);
});
;})(seq__46153,chunk__46154,count__46155,i__46156,state_val_46173,c__27094__auto___46192,n,seq__46153__$1,temp__4657__auto__))
})();
var inst_46170 = cljs.core.async.take_BANG_.call(null,sberweb.userdetail.ch,inst_46169);
var state_46172__$1 = state_46172;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46172__$1,inst_46170);
} else {
return null;
}
});})(seq__46153,chunk__46154,count__46155,i__46156,c__27094__auto___46192,n,seq__46153__$1,temp__4657__auto__))
;
return ((function (seq__46153,chunk__46154,count__46155,i__46156,switch__27029__auto__,c__27094__auto___46192,n,seq__46153__$1,temp__4657__auto__){
return (function() {
var sberweb$userdetail$initqueue_$_state_machine__27030__auto__ = null;
var sberweb$userdetail$initqueue_$_state_machine__27030__auto____0 = (function (){
var statearr_46177 = [null,null,null,null,null,null,null];
(statearr_46177[(0)] = sberweb$userdetail$initqueue_$_state_machine__27030__auto__);

(statearr_46177[(1)] = (1));

return statearr_46177;
});
var sberweb$userdetail$initqueue_$_state_machine__27030__auto____1 = (function (state_46172){
while(true){
var ret_value__27031__auto__ = (function (){try{while(true){
var result__27032__auto__ = switch__27029__auto__.call(null,state_46172);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27032__auto__;
}
break;
}
}catch (e46178){if((e46178 instanceof Object)){
var ex__27033__auto__ = e46178;
var statearr_46179_46193 = state_46172;
(statearr_46179_46193[(5)] = ex__27033__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46172);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46178;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46194 = state_46172;
state_46172 = G__46194;
continue;
} else {
return ret_value__27031__auto__;
}
break;
}
});
sberweb$userdetail$initqueue_$_state_machine__27030__auto__ = function(state_46172){
switch(arguments.length){
case 0:
return sberweb$userdetail$initqueue_$_state_machine__27030__auto____0.call(this);
case 1:
return sberweb$userdetail$initqueue_$_state_machine__27030__auto____1.call(this,state_46172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sberweb$userdetail$initqueue_$_state_machine__27030__auto__.cljs$core$IFn$_invoke$arity$0 = sberweb$userdetail$initqueue_$_state_machine__27030__auto____0;
sberweb$userdetail$initqueue_$_state_machine__27030__auto__.cljs$core$IFn$_invoke$arity$1 = sberweb$userdetail$initqueue_$_state_machine__27030__auto____1;
return sberweb$userdetail$initqueue_$_state_machine__27030__auto__;
})()
;})(seq__46153,chunk__46154,count__46155,i__46156,switch__27029__auto__,c__27094__auto___46192,n,seq__46153__$1,temp__4657__auto__))
})();
var state__27096__auto__ = (function (){var statearr_46180 = f__27095__auto__.call(null);
(statearr_46180[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27094__auto___46192);

return statearr_46180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27096__auto__);
});})(seq__46153,chunk__46154,count__46155,i__46156,c__27094__auto___46192,n,seq__46153__$1,temp__4657__auto__))
);


var G__46195 = cljs.core.next.call(null,seq__46153__$1);
var G__46196 = null;
var G__46197 = (0);
var G__46198 = (0);
seq__46153 = G__46195;
chunk__46154 = G__46196;
count__46155 = G__46197;
i__46156 = G__46198;
continue;
}
} else {
return null;
}
}
break;
}
});
sberweb.userdetail.initqueue.call(null);
sberweb.userdetail.array_to_string = (function sberweb$userdetail$array_to_string(element){
var newdata = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"empname","empname",1714032099),cljs.core.get.call(null,element,"empname")], null);
return new cljs.core.Keyword(null,"empname","empname",1714032099).cljs$core$IFn$_invoke$arity$1(newdata);
});
sberweb.userdetail.setUser = (function sberweb$userdetail$setUser(){
var users = new cljs.core.Keyword(null,"users","users",-713552705).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.core.app_state));
var user = cljs.core.first.call(null,cljs.core.filter.call(null,((function (users){
return (function (user){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.userdetail.app_state)),new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(user))){
return true;
} else {
return false;
}
});})(users))
,new cljs.core.Keyword(null,"users","users",-713552705).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.core.app_state))));
cljs.core.swap_BANG_.call(null,sberweb.userdetail.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519)], null),new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(user));

cljs.core.swap_BANG_.call(null,sberweb.userdetail.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"role","role",-736691072)], null),new cljs.core.Keyword(null,"role","role",-736691072).cljs$core$IFn$_invoke$arity$1(user));

return cljs.core.swap_BANG_.call(null,sberweb.userdetail.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"password","password",417022471)], null),new cljs.core.Keyword(null,"password","password",417022471).cljs$core$IFn$_invoke$arity$1(user));
});
sberweb.userdetail.OnError = (function sberweb$userdetail$OnError(response){
var newdata = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.get.call(null,new cljs.core.Keyword(null,"response","response",-1068424192).cljs$core$IFn$_invoke$arity$1(response),"error")], null);
return console.log([cljs.core.str(response)].join(''));
});
sberweb.userdetail.getUserDetail = (function sberweb$userdetail$getUserDetail(){
if((cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.userdetail.app_state)),null)) && (cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.userdetail.app_state)),""))){
return sberweb.userdetail.setUser.call(null);
} else {
return null;
}
});
sberweb.userdetail.handleFromChange = (function sberweb$userdetail$handleFromChange(e){
return console.log("The change ....");
});
sberweb.userdetail.onMount = (function sberweb$userdetail$onMount(data){
cljs.core.swap_BANG_.call(null,sberweb.userdetail.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current","current",-1088038603)], null),"User Detail");

sberweb.userdetail.getUserDetail.call(null);

return sberweb.userdetail.setcontrols.call(null,(46));
});
sberweb.userdetail.handle_change = (function sberweb$userdetail$handle_change(e,owner){
return cljs.core.swap_BANG_.call(null,sberweb.userdetail.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.keyword.call(null,e.target.id)], null),e.target.value);
});
sberweb.userdetail.buildRolesList = (function sberweb$userdetail$buildRolesList(data,owner){
return cljs.core.map.call(null,(function (text){
return cljs.core.apply.call(null,om.dom.option,{"key": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(text)), "value": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(text)), "onChange": om_tools.dom.format_opts.call(null,(function (p1__46199_SHARP_){
return sberweb.userdetail.handle_change.call(null,p1__46199_SHARP_,owner);
}))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(text)],null))));
}),new cljs.core.Keyword(null,"roles","roles",143379530).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.userdetail.app_state)));
});

var ufv___46217 = schema.utils.use_fn_validation;
var output_schema46202_46218 = schema.core.Any;
var input_schema46203_46219 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker46204_46220 = schema.core.checker.call(null,input_schema46203_46219);
var output_checker46205_46221 = schema.core.checker.call(null,output_schema46202_46218);
/**
 * Inputs: [data owner]
 */
sberweb.userdetail.userdetail_page_view = ((function (ufv___46217,output_schema46202_46218,input_schema46203_46219,input_checker46204_46220,output_checker46205_46221){
return (function sberweb$userdetail$userdetail_page_view(G__46206,G__46207){
var validate__37909__auto__ = ufv___46217.get_cell();
if(cljs.core.truth_(validate__37909__auto__)){
var args__37910__auto___46222 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__46206,G__46207], null);
var temp__4657__auto___46223 = input_checker46204_46220.call(null,args__37910__auto___46222);
if(cljs.core.truth_(temp__4657__auto___46223)){
var error__37911__auto___46224 = temp__4657__auto___46223;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"userdetail-page-view","userdetail-page-view",1214210905,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__37911__auto___46224)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema46203_46219,new cljs.core.Keyword(null,"value","value",305978217),args__37910__auto___46222,new cljs.core.Keyword(null,"error","error",-978969032),error__37911__auto___46224], null));
} else {
}
} else {
}

var o__37912__auto__ = (function (){var data = G__46206;
var owner = G__46207;
while(true){
if(typeof sberweb.userdetail.t_sberweb$userdetail46211 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {om.core.IDidUpdate}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IDidMount}
 * @implements {cljs.core.IWithMeta}
*/
sberweb.userdetail.t_sberweb$userdetail46211 = (function (output_checker46205,G__46206,owner,data,G__46207,validate__37909__auto__,input_checker46204,output_schema46202,input_schema46203,userdetail_page_view,ufv__,meta46212){
this.output_checker46205 = output_checker46205;
this.G__46206 = G__46206;
this.owner = owner;
this.data = data;
this.G__46207 = G__46207;
this.validate__37909__auto__ = validate__37909__auto__;
this.input_checker46204 = input_checker46204;
this.output_schema46202 = output_schema46202;
this.input_schema46203 = input_schema46203;
this.userdetail_page_view = userdetail_page_view;
this.ufv__ = ufv__;
this.meta46212 = meta46212;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
sberweb.userdetail.t_sberweb$userdetail46211.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__37909__auto__,ufv___46217,output_schema46202_46218,input_schema46203_46219,input_checker46204_46220,output_checker46205_46221){
return (function (_46213,meta46212__$1){
var self__ = this;
var _46213__$1 = this;
return (new sberweb.userdetail.t_sberweb$userdetail46211(self__.output_checker46205,self__.G__46206,self__.owner,self__.data,self__.G__46207,self__.validate__37909__auto__,self__.input_checker46204,self__.output_schema46202,self__.input_schema46203,self__.userdetail_page_view,self__.ufv__,meta46212__$1));
});})(validate__37909__auto__,ufv___46217,output_schema46202_46218,input_schema46203_46219,input_checker46204_46220,output_checker46205_46221))
;

sberweb.userdetail.t_sberweb$userdetail46211.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__37909__auto__,ufv___46217,output_schema46202_46218,input_schema46203_46219,input_checker46204_46220,output_checker46205_46221){
return (function (_46213){
var self__ = this;
var _46213__$1 = this;
return self__.meta46212;
});})(validate__37909__auto__,ufv___46217,output_schema46202_46218,input_schema46203_46219,input_checker46204_46220,output_checker46205_46221))
;

sberweb.userdetail.t_sberweb$userdetail46211.prototype.om$core$IDisplayName$ = true;

sberweb.userdetail.t_sberweb$userdetail46211.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__37909__auto__,ufv___46217,output_schema46202_46218,input_schema46203_46219,input_checker46204_46220,output_checker46205_46221){
return (function (_){
var self__ = this;
var ___$1 = this;
return "userdetail-page-view";
});})(validate__37909__auto__,ufv___46217,output_schema46202_46218,input_schema46203_46219,input_checker46204_46220,output_checker46205_46221))
;

sberweb.userdetail.t_sberweb$userdetail46211.prototype.om$core$IDidMount$ = true;

sberweb.userdetail.t_sberweb$userdetail46211.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (validate__37909__auto__,ufv___46217,output_schema46202_46218,input_schema46203_46219,input_checker46204_46220,output_checker46205_46221){
return (function (_){
var self__ = this;
var ___$1 = this;
return sberweb.userdetail.onMount.call(null,self__.data);
});})(validate__37909__auto__,ufv___46217,output_schema46202_46218,input_schema46203_46219,input_checker46204_46220,output_checker46205_46221))
;

sberweb.userdetail.t_sberweb$userdetail46211.prototype.om$core$IDidUpdate$ = true;

sberweb.userdetail.t_sberweb$userdetail46211.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (validate__37909__auto__,ufv___46217,output_schema46202_46218,input_schema46203_46219,input_checker46204_46220,output_checker46205_46221){
return (function (this$,prev_props,prev_state){
var self__ = this;
var this$__$1 = this;
return console.log("Update happened");
});})(validate__37909__auto__,ufv___46217,output_schema46202_46218,input_schema46203_46219,input_checker46204_46220,output_checker46205_46221))
;

sberweb.userdetail.t_sberweb$userdetail46211.prototype.om$core$IRender$ = true;

sberweb.userdetail.t_sberweb$userdetail46211.prototype.om$core$IRender$render$arity$1 = ((function (validate__37909__auto__,ufv___46217,output_schema46202_46218,input_schema46203_46219,input_checker46204_46220,output_checker46205_46221){
return (function (_){
var self__ = this;
var ___$1 = this;
var style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"10px;",new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),"0px;"], null)], null);
var styleprimary = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"70px"], null)], null);
return om_tools.dom.element.call(null,React.DOM.div,om.core.build.call(null,sberweb.core.website_view,self__.data,cljs.core.PersistentArrayMap.EMPTY),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"id": "user-detail-container"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.span,om_tools.dom.element.call(null,React.DOM.div,cljs.core.assoc.call(null,styleprimary,new cljs.core.Keyword(null,"className","className",-1983287057),"panel panel-default",new cljs.core.Keyword(null,"id","id",-1388402092),"divUserInfo"),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "panel-heading"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.h5,null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,["Login: ",om.dom.input.call(null,{"id": "login", "type": "text", "disabled": om_tools.dom.format_opts.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"isinsert","isinsert",399898579).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.userdetail.app_state)),true))?false:true)), "onChange": om_tools.dom.format_opts.call(null,((function (style,styleprimary,___$1,validate__37909__auto__,ufv___46217,output_schema46202_46218,input_schema46203_46219,input_checker46204_46220,output_checker46205_46221){
return (function (e){
return sberweb.userdetail.handleChange.call(null,e);
});})(style,styleprimary,___$1,validate__37909__auto__,ufv___46217,output_schema46202_46218,input_schema46203_46219,input_checker46204_46220,output_checker46205_46221))
), "value": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.userdetail.app_state)))})],null)))),cljs.core.apply.call(null,React.DOM.h5,null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,["Password: ",om.dom.input.call(null,{"id": "password", "type": "password", "onChange": om_tools.dom.format_opts.call(null,((function (style,styleprimary,___$1,validate__37909__auto__,ufv___46217,output_schema46202_46218,input_schema46203_46219,input_checker46204_46220,output_checker46205_46221){
return (function (e){
return sberweb.userdetail.handleChange.call(null,e);
});})(style,styleprimary,___$1,validate__37909__auto__,ufv___46217,output_schema46202_46218,input_schema46203_46219,input_checker46204_46220,output_checker46205_46221))
), "value": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"password","password",417022471).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.userdetail.app_state)))})],null)))),cljs.core.apply.call(null,React.DOM.div,{"className": "form-group"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.p,React.DOM.label({"className": "control-label", "htmlFor": "roles"},"Role: "),cljs.core.PersistentVector.EMPTY),om.dom.select.call(null,{"id": "roles", "className": "selectpicker", "data-show-subtext": "true", "data-live-search": "true", "onChange": ((function (style,styleprimary,___$1,validate__37909__auto__,ufv___46217,output_schema46202_46218,input_schema46203_46219,input_checker46204_46220,output_checker46205_46221){
return (function (p1__46200_SHARP_){
return sberweb.userdetail.handle_change.call(null,p1__46200_SHARP_,self__.owner);
});})(style,styleprimary,___$1,validate__37909__auto__,ufv___46217,output_schema46202_46218,input_schema46203_46219,input_checker46204_46220,output_checker46205_46221))
},sberweb.userdetail.buildRolesList.call(null,self__.data,self__.owner))],null))))],null))))],null))),cljs.core.PersistentVector.EMPTY)],null)))),cljs.core.apply.call(null,React.DOM.nav,{"className": "navbar navbar-default", "role": "navigation"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "navbar-header"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_bootstrap.button.button.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"btn btn-default",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (style,styleprimary,___$1,validate__37909__auto__,ufv___46217,output_schema46202_46218,input_schema46203_46219,input_checker46204_46220,output_checker46205_46221){
return (function (e){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"isinsert","isinsert",399898579).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.userdetail.app_state)),(0))){
return sberweb.userdetail.createUser.call(null);
} else {
return sberweb.userdetail.updateUser.call(null);
}
});})(style,styleprimary,___$1,validate__37909__auto__,ufv___46217,output_schema46202_46218,input_schema46203_46219,input_checker46204_46220,output_checker46205_46221))
], null),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"isinsert","isinsert",399898579).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.userdetail.app_state)),true))?"Insert":"Update")),om_bootstrap.button.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",-1983287057),"btn btn-danger",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"isinsert","isinsert",399898579).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.userdetail.app_state)),true))?"hidden":"visible")], null),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (style,styleprimary,___$1,validate__37909__auto__,ufv___46217,output_schema46202_46218,input_schema46203_46219,input_checker46204_46220,output_checker46205_46221){
return (function (e){
return sberweb.userdetail.deleteUser.call(null,new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.userdetail.app_state)));
});})(style,styleprimary,___$1,validate__37909__auto__,ufv___46217,output_schema46202_46218,input_schema46203_46219,input_checker46204_46220,output_checker46205_46221))
], null),"Delete"),om_bootstrap.button.button.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"btn btn-info",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (style,styleprimary,___$1,validate__37909__auto__,ufv___46217,output_schema46202_46218,input_schema46203_46219,input_checker46204_46220,output_checker46205_46221){
return (function (e){
return document.location = "#/users";
});})(style,styleprimary,___$1,validate__37909__auto__,ufv___46217,output_schema46202_46218,input_schema46203_46219,input_checker46204_46220,output_checker46205_46221))
], null),"Cancel")],null))))],null))))],null)));
});})(validate__37909__auto__,ufv___46217,output_schema46202_46218,input_schema46203_46219,input_checker46204_46220,output_checker46205_46221))
;

sberweb.userdetail.t_sberweb$userdetail46211.getBasis = ((function (validate__37909__auto__,ufv___46217,output_schema46202_46218,input_schema46203_46219,input_checker46204_46220,output_checker46205_46221){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"output-checker46205","output-checker46205",1032360609,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__46206","G__46206",1694408355,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"data","data",1407862150,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__46207","G__46207",2052264553,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"validate__37909__auto__","validate__37909__auto__",-807220660,null),new cljs.core.Symbol(null,"input-checker46204","input-checker46204",911778289,null),new cljs.core.Symbol(null,"output-schema46202","output-schema46202",740889169,null),new cljs.core.Symbol(null,"input-schema46203","input-schema46203",722538007,null),cljs.core.with_meta(new cljs.core.Symbol(null,"userdetail-page-view","userdetail-page-view",1214210905,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))], null))),new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("schema.core","make-fn-schema","schema.core/make-fn-schema",152735578,null),new cljs.core.Symbol(null,"output-schema46202","output-schema46202",740889169,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"input-schema46203","input-schema46203",722538007,null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Inputs: [data owner]",new cljs.core.Keyword(null,"raw-arglists","raw-arglists",-1511012109),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"meta46212","meta46212",209869041,null)], null);
});})(validate__37909__auto__,ufv___46217,output_schema46202_46218,input_schema46203_46219,input_checker46204_46220,output_checker46205_46221))
;

sberweb.userdetail.t_sberweb$userdetail46211.cljs$lang$type = true;

sberweb.userdetail.t_sberweb$userdetail46211.cljs$lang$ctorStr = "sberweb.userdetail/t_sberweb$userdetail46211";

sberweb.userdetail.t_sberweb$userdetail46211.cljs$lang$ctorPrWriter = ((function (validate__37909__auto__,ufv___46217,output_schema46202_46218,input_schema46203_46219,input_checker46204_46220,output_checker46205_46221){
return (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"sberweb.userdetail/t_sberweb$userdetail46211");
});})(validate__37909__auto__,ufv___46217,output_schema46202_46218,input_schema46203_46219,input_checker46204_46220,output_checker46205_46221))
;

sberweb.userdetail.__GT_t_sberweb$userdetail46211 = ((function (validate__37909__auto__,ufv___46217,output_schema46202_46218,input_schema46203_46219,input_checker46204_46220,output_checker46205_46221){
return (function sberweb$userdetail$userdetail_page_view_$___GT_t_sberweb$userdetail46211(output_checker46205__$1,G__46206__$1,owner__$1,data__$1,G__46207__$1,validate__37909__auto____$1,input_checker46204__$1,output_schema46202__$1,input_schema46203__$1,userdetail_page_view__$1,ufv____$1,meta46212){
return (new sberweb.userdetail.t_sberweb$userdetail46211(output_checker46205__$1,G__46206__$1,owner__$1,data__$1,G__46207__$1,validate__37909__auto____$1,input_checker46204__$1,output_schema46202__$1,input_schema46203__$1,userdetail_page_view__$1,ufv____$1,meta46212));
});})(validate__37909__auto__,ufv___46217,output_schema46202_46218,input_schema46203_46219,input_checker46204_46220,output_checker46205_46221))
;

}

return (new sberweb.userdetail.t_sberweb$userdetail46211(output_checker46205_46221,G__46206,owner,data,G__46207,validate__37909__auto__,input_checker46204_46220,output_schema46202_46218,input_schema46203_46219,sberweb$userdetail$userdetail_page_view,ufv___46217,null));
break;
}
})();
if(cljs.core.truth_(validate__37909__auto__)){
var temp__4657__auto___46225 = output_checker46205_46221.call(null,o__37912__auto__);
if(cljs.core.truth_(temp__4657__auto___46225)){
var error__37911__auto___46226 = temp__4657__auto___46225;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"userdetail-page-view","userdetail-page-view",1214210905,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__37911__auto___46226)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema46202_46218,new cljs.core.Keyword(null,"value","value",305978217),o__37912__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37911__auto___46226], null));
} else {
}
} else {
}

return o__37912__auto__;
});})(ufv___46217,output_schema46202_46218,input_schema46203_46219,input_checker46204_46220,output_checker46205_46221))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,sberweb.userdetail.userdetail_page_view),schema.core.make_fn_schema.call(null,output_schema46202_46218,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema46203_46219], null)));

sberweb.userdetail.__GT_userdetail_page_view = (function sberweb$userdetail$__GT_userdetail_page_view(var_args){
var args46214 = [];
var len__25947__auto___46227 = arguments.length;
var i__25948__auto___46228 = (0);
while(true){
if((i__25948__auto___46228 < len__25947__auto___46227)){
args46214.push((arguments[i__25948__auto___46228]));

var G__46229 = (i__25948__auto___46228 + (1));
i__25948__auto___46228 = G__46229;
continue;
} else {
}
break;
}

var G__46216 = args46214.length;
switch (G__46216) {
case 1:
return sberweb.userdetail.__GT_userdetail_page_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sberweb.userdetail.__GT_userdetail_page_view.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46214.length)].join('')));

}
});

sberweb.userdetail.__GT_userdetail_page_view.cljs$core$IFn$_invoke$arity$1 = (function (cursor__41613__auto__){
return om.core.build.call(null,sberweb.userdetail.userdetail_page_view,cursor__41613__auto__);
});

sberweb.userdetail.__GT_userdetail_page_view.cljs$core$IFn$_invoke$arity$2 = (function (cursor__41613__auto__,m46201){
return om.core.build.call(null,sberweb.userdetail.userdetail_page_view,cursor__41613__auto__,m46201);
});

sberweb.userdetail.__GT_userdetail_page_view.cljs$lang$maxFixedArity = 2;

var action__41717__auto___46236 = (function (params__41718__auto__){
if(cljs.core.map_QMARK_.call(null,params__41718__auto__)){
var map__46231 = params__41718__auto__;
var map__46231__$1 = ((((!((map__46231 == null)))?((((map__46231.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46231.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46231):map__46231);
var login = cljs.core.get.call(null,map__46231__$1,new cljs.core.Keyword(null,"login","login",55217519));
return cljs.core.swap_BANG_.call(null,sberweb.userdetail.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519)], null),login).call(null,cljs.core.swap_BANG_.call(null,sberweb.userdetail.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"isinsert","isinsert",399898579)], null),false),om.core.root.call(null,sberweb.userdetail.userdetail_page_view,sberweb.userdetail.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null)));
} else {
if(cljs.core.vector_QMARK_.call(null,params__41718__auto__)){
var map__46233 = params__41718__auto__;
var map__46233__$1 = ((((!((map__46233 == null)))?((((map__46233.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46233.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46233):map__46233);
var login = cljs.core.get.call(null,map__46233__$1,new cljs.core.Keyword(null,"login","login",55217519));
return cljs.core.swap_BANG_.call(null,sberweb.userdetail.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519)], null),login).call(null,cljs.core.swap_BANG_.call(null,sberweb.userdetail.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"isinsert","isinsert",399898579)], null),false),om.core.root.call(null,sberweb.userdetail.userdetail_page_view,sberweb.userdetail.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null)));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/userdetail/:login",action__41717__auto___46236);

sberweb.userdetail.userdetail_page = ((function (action__41717__auto___46236){
return (function sberweb$userdetail$userdetail_page(var_args){
var args__25954__auto__ = [];
var len__25947__auto___46237 = arguments.length;
var i__25948__auto___46238 = (0);
while(true){
if((i__25948__auto___46238 < len__25947__auto___46237)){
args__25954__auto__.push((arguments[i__25948__auto___46238]));

var G__46239 = (i__25948__auto___46238 + (1));
i__25948__auto___46238 = G__46239;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return sberweb.userdetail.userdetail_page.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});})(action__41717__auto___46236))
;

sberweb.userdetail.userdetail_page.cljs$core$IFn$_invoke$arity$variadic = ((function (action__41717__auto___46236){
return (function (args__41716__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/userdetail/:login",args__41716__auto__);
});})(action__41717__auto___46236))
;

sberweb.userdetail.userdetail_page.cljs$lang$maxFixedArity = (0);

sberweb.userdetail.userdetail_page.cljs$lang$applyTo = ((function (action__41717__auto___46236){
return (function (seq46235){
return sberweb.userdetail.userdetail_page.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46235));
});})(action__41717__auto___46236))
;

var action__41717__auto___46245 = (function (params__41718__auto__){
if(cljs.core.map_QMARK_.call(null,params__41718__auto__)){
var map__46240 = params__41718__auto__;
var map__46240__$1 = ((((!((map__46240 == null)))?((((map__46240.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46240.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46240):map__46240);
return cljs.core.swap_BANG_.call(null,sberweb.userdetail.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519)], null),"").call(null,cljs.core.swap_BANG_.call(null,sberweb.userdetail.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"isinsert","isinsert",399898579)], null),true),cljs.core.swap_BANG_.call(null,sberweb.userdetail.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"role","role",-736691072)], null),"user"),cljs.core.swap_BANG_.call(null,sberweb.userdetail.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"password","password",417022471)], null),""),om.core.root.call(null,sberweb.userdetail.userdetail_page_view,sberweb.userdetail.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null)));
} else {
if(cljs.core.vector_QMARK_.call(null,params__41718__auto__)){
var map__46242 = params__41718__auto__;
var map__46242__$1 = ((((!((map__46242 == null)))?((((map__46242.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46242.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46242):map__46242);
return cljs.core.swap_BANG_.call(null,sberweb.userdetail.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519)], null),"").call(null,cljs.core.swap_BANG_.call(null,sberweb.userdetail.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"isinsert","isinsert",399898579)], null),true),cljs.core.swap_BANG_.call(null,sberweb.userdetail.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"role","role",-736691072)], null),"user"),cljs.core.swap_BANG_.call(null,sberweb.userdetail.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"password","password",417022471)], null),""),om.core.root.call(null,sberweb.userdetail.userdetail_page_view,sberweb.userdetail.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null)));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/userdetail",action__41717__auto___46245);

sberweb.userdetail.userdetail_new_page = ((function (action__41717__auto___46245){
return (function sberweb$userdetail$userdetail_new_page(var_args){
var args__25954__auto__ = [];
var len__25947__auto___46246 = arguments.length;
var i__25948__auto___46247 = (0);
while(true){
if((i__25948__auto___46247 < len__25947__auto___46246)){
args__25954__auto__.push((arguments[i__25948__auto___46247]));

var G__46248 = (i__25948__auto___46247 + (1));
i__25948__auto___46247 = G__46248;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return sberweb.userdetail.userdetail_new_page.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});})(action__41717__auto___46245))
;

sberweb.userdetail.userdetail_new_page.cljs$core$IFn$_invoke$arity$variadic = ((function (action__41717__auto___46245){
return (function (args__41716__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/userdetail",args__41716__auto__);
});})(action__41717__auto___46245))
;

sberweb.userdetail.userdetail_new_page.cljs$lang$maxFixedArity = (0);

sberweb.userdetail.userdetail_new_page.cljs$lang$applyTo = ((function (action__41717__auto___46245){
return (function (seq46244){
return sberweb.userdetail.userdetail_new_page.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46244));
});})(action__41717__auto___46245))
;


//# sourceMappingURL=userdetail.js.map?rel=1486364643489