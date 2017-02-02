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
var users_23847 = new cljs.core.Keyword(null,"users","users",-713552705).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tripcore.app_state));
var newusers_23848 = cljs.core.remove.call(null,((function (users_23847){
return (function (user){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(user),new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.userdetail.app_state)))){
return true;
} else {
return false;
}
});})(users_23847))
,users_23847);
cljs.core.swap_BANG_.call(null,tripcore.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",-713552705)], null),newusers_23848);

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
var G__23850 = value;
switch (G__23850) {
case (46):
return sberweb.userdetail.setRolesDropDown.call(null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(value)].join('')));

}
});
sberweb.userdetail.initqueue = (function sberweb$userdetail$initqueue(){
var seq__23880 = cljs.core.seq.call(null,cljs.core.range.call(null,(1000)));
var chunk__23881 = null;
var count__23882 = (0);
var i__23883 = (0);
while(true){
if((i__23883 < count__23882)){
var n = cljs.core._nth.call(null,chunk__23881,i__23883);
var c__18664__auto___23908 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__23880,chunk__23881,count__23882,i__23883,c__18664__auto___23908,n){
return (function (){
var f__18665__auto__ = (function (){var switch__18552__auto__ = ((function (seq__23880,chunk__23881,count__23882,i__23883,c__18664__auto___23908,n){
return (function (state_23887){
var state_val_23888 = (state_23887[(1)]);
if((state_val_23888 === (1))){
var inst_23884 = (function (){return ((function (seq__23880,chunk__23881,count__23882,i__23883,state_val_23888,c__18664__auto___23908,n){
return (function (v){
return sberweb.userdetail.setcontrols.call(null,v);
});
;})(seq__23880,chunk__23881,count__23882,i__23883,state_val_23888,c__18664__auto___23908,n))
})();
var inst_23885 = cljs.core.async.take_BANG_.call(null,sberweb.userdetail.ch,inst_23884);
var state_23887__$1 = state_23887;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23887__$1,inst_23885);
} else {
return null;
}
});})(seq__23880,chunk__23881,count__23882,i__23883,c__18664__auto___23908,n))
;
return ((function (seq__23880,chunk__23881,count__23882,i__23883,switch__18552__auto__,c__18664__auto___23908,n){
return (function() {
var sberweb$userdetail$initqueue_$_state_machine__18553__auto__ = null;
var sberweb$userdetail$initqueue_$_state_machine__18553__auto____0 = (function (){
var statearr_23892 = [null,null,null,null,null,null,null];
(statearr_23892[(0)] = sberweb$userdetail$initqueue_$_state_machine__18553__auto__);

(statearr_23892[(1)] = (1));

return statearr_23892;
});
var sberweb$userdetail$initqueue_$_state_machine__18553__auto____1 = (function (state_23887){
while(true){
var ret_value__18554__auto__ = (function (){try{while(true){
var result__18555__auto__ = switch__18552__auto__.call(null,state_23887);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18555__auto__;
}
break;
}
}catch (e23893){if((e23893 instanceof Object)){
var ex__18556__auto__ = e23893;
var statearr_23894_23909 = state_23887;
(statearr_23894_23909[(5)] = ex__18556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23887);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23893;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23910 = state_23887;
state_23887 = G__23910;
continue;
} else {
return ret_value__18554__auto__;
}
break;
}
});
sberweb$userdetail$initqueue_$_state_machine__18553__auto__ = function(state_23887){
switch(arguments.length){
case 0:
return sberweb$userdetail$initqueue_$_state_machine__18553__auto____0.call(this);
case 1:
return sberweb$userdetail$initqueue_$_state_machine__18553__auto____1.call(this,state_23887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sberweb$userdetail$initqueue_$_state_machine__18553__auto__.cljs$core$IFn$_invoke$arity$0 = sberweb$userdetail$initqueue_$_state_machine__18553__auto____0;
sberweb$userdetail$initqueue_$_state_machine__18553__auto__.cljs$core$IFn$_invoke$arity$1 = sberweb$userdetail$initqueue_$_state_machine__18553__auto____1;
return sberweb$userdetail$initqueue_$_state_machine__18553__auto__;
})()
;})(seq__23880,chunk__23881,count__23882,i__23883,switch__18552__auto__,c__18664__auto___23908,n))
})();
var state__18666__auto__ = (function (){var statearr_23895 = f__18665__auto__.call(null);
(statearr_23895[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18664__auto___23908);

return statearr_23895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18666__auto__);
});})(seq__23880,chunk__23881,count__23882,i__23883,c__18664__auto___23908,n))
);


var G__23911 = seq__23880;
var G__23912 = chunk__23881;
var G__23913 = count__23882;
var G__23914 = (i__23883 + (1));
seq__23880 = G__23911;
chunk__23881 = G__23912;
count__23882 = G__23913;
i__23883 = G__23914;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__23880);
if(temp__4657__auto__){
var seq__23880__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23880__$1)){
var c__7062__auto__ = cljs.core.chunk_first.call(null,seq__23880__$1);
var G__23915 = cljs.core.chunk_rest.call(null,seq__23880__$1);
var G__23916 = c__7062__auto__;
var G__23917 = cljs.core.count.call(null,c__7062__auto__);
var G__23918 = (0);
seq__23880 = G__23915;
chunk__23881 = G__23916;
count__23882 = G__23917;
i__23883 = G__23918;
continue;
} else {
var n = cljs.core.first.call(null,seq__23880__$1);
var c__18664__auto___23919 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__23880,chunk__23881,count__23882,i__23883,c__18664__auto___23919,n,seq__23880__$1,temp__4657__auto__){
return (function (){
var f__18665__auto__ = (function (){var switch__18552__auto__ = ((function (seq__23880,chunk__23881,count__23882,i__23883,c__18664__auto___23919,n,seq__23880__$1,temp__4657__auto__){
return (function (state_23899){
var state_val_23900 = (state_23899[(1)]);
if((state_val_23900 === (1))){
var inst_23896 = (function (){return ((function (seq__23880,chunk__23881,count__23882,i__23883,state_val_23900,c__18664__auto___23919,n,seq__23880__$1,temp__4657__auto__){
return (function (v){
return sberweb.userdetail.setcontrols.call(null,v);
});
;})(seq__23880,chunk__23881,count__23882,i__23883,state_val_23900,c__18664__auto___23919,n,seq__23880__$1,temp__4657__auto__))
})();
var inst_23897 = cljs.core.async.take_BANG_.call(null,sberweb.userdetail.ch,inst_23896);
var state_23899__$1 = state_23899;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23899__$1,inst_23897);
} else {
return null;
}
});})(seq__23880,chunk__23881,count__23882,i__23883,c__18664__auto___23919,n,seq__23880__$1,temp__4657__auto__))
;
return ((function (seq__23880,chunk__23881,count__23882,i__23883,switch__18552__auto__,c__18664__auto___23919,n,seq__23880__$1,temp__4657__auto__){
return (function() {
var sberweb$userdetail$initqueue_$_state_machine__18553__auto__ = null;
var sberweb$userdetail$initqueue_$_state_machine__18553__auto____0 = (function (){
var statearr_23904 = [null,null,null,null,null,null,null];
(statearr_23904[(0)] = sberweb$userdetail$initqueue_$_state_machine__18553__auto__);

(statearr_23904[(1)] = (1));

return statearr_23904;
});
var sberweb$userdetail$initqueue_$_state_machine__18553__auto____1 = (function (state_23899){
while(true){
var ret_value__18554__auto__ = (function (){try{while(true){
var result__18555__auto__ = switch__18552__auto__.call(null,state_23899);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18555__auto__;
}
break;
}
}catch (e23905){if((e23905 instanceof Object)){
var ex__18556__auto__ = e23905;
var statearr_23906_23920 = state_23899;
(statearr_23906_23920[(5)] = ex__18556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23899);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23905;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23921 = state_23899;
state_23899 = G__23921;
continue;
} else {
return ret_value__18554__auto__;
}
break;
}
});
sberweb$userdetail$initqueue_$_state_machine__18553__auto__ = function(state_23899){
switch(arguments.length){
case 0:
return sberweb$userdetail$initqueue_$_state_machine__18553__auto____0.call(this);
case 1:
return sberweb$userdetail$initqueue_$_state_machine__18553__auto____1.call(this,state_23899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sberweb$userdetail$initqueue_$_state_machine__18553__auto__.cljs$core$IFn$_invoke$arity$0 = sberweb$userdetail$initqueue_$_state_machine__18553__auto____0;
sberweb$userdetail$initqueue_$_state_machine__18553__auto__.cljs$core$IFn$_invoke$arity$1 = sberweb$userdetail$initqueue_$_state_machine__18553__auto____1;
return sberweb$userdetail$initqueue_$_state_machine__18553__auto__;
})()
;})(seq__23880,chunk__23881,count__23882,i__23883,switch__18552__auto__,c__18664__auto___23919,n,seq__23880__$1,temp__4657__auto__))
})();
var state__18666__auto__ = (function (){var statearr_23907 = f__18665__auto__.call(null);
(statearr_23907[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18664__auto___23919);

return statearr_23907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18666__auto__);
});})(seq__23880,chunk__23881,count__23882,i__23883,c__18664__auto___23919,n,seq__23880__$1,temp__4657__auto__))
);


var G__23922 = cljs.core.next.call(null,seq__23880__$1);
var G__23923 = null;
var G__23924 = (0);
var G__23925 = (0);
seq__23880 = G__23922;
chunk__23881 = G__23923;
count__23882 = G__23924;
i__23883 = G__23925;
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
return cljs.core.apply.call(null,om.dom.option,{"key": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(text)), "value": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(text)), "onChange": om_tools.dom.format_opts.call(null,(function (p1__23926_SHARP_){
return sberweb.userdetail.handle_change.call(null,p1__23926_SHARP_,owner);
}))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(text)],null))));
}),new cljs.core.Keyword(null,"roles","roles",143379530).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.userdetail.app_state)));
});

var ufv___23944 = schema.utils.use_fn_validation;
var output_schema23929_23945 = schema.core.Any;
var input_schema23930_23946 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker23931_23947 = schema.core.checker.call(null,input_schema23930_23946);
var output_checker23932_23948 = schema.core.checker.call(null,output_schema23929_23945);
/**
 * Inputs: [data owner]
 */
sberweb.userdetail.userdetail_page_view = ((function (ufv___23944,output_schema23929_23945,input_schema23930_23946,input_checker23931_23947,output_checker23932_23948){
return (function sberweb$userdetail$userdetail_page_view(G__23933,G__23934){
var validate__7824__auto__ = ufv___23944.get_cell();
if(cljs.core.truth_(validate__7824__auto__)){
var args__7825__auto___23949 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23933,G__23934], null);
var temp__4657__auto___23950 = input_checker23931_23947.call(null,args__7825__auto___23949);
if(cljs.core.truth_(temp__4657__auto___23950)){
var error__7826__auto___23951 = temp__4657__auto___23950;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"userdetail-page-view","userdetail-page-view",1214210905,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__7826__auto___23951)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23930_23946,new cljs.core.Keyword(null,"value","value",305978217),args__7825__auto___23949,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___23951], null));
} else {
}
} else {
}

var o__7827__auto__ = (function (){var data = G__23933;
var owner = G__23934;
while(true){
if(typeof sberweb.userdetail.t_sberweb$userdetail23938 !== 'undefined'){
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
sberweb.userdetail.t_sberweb$userdetail23938 = (function (owner,input_checker23931,data,input_schema23930,G__23933,validate__7824__auto__,userdetail_page_view,output_checker23932,ufv__,output_schema23929,G__23934,meta23939){
this.owner = owner;
this.input_checker23931 = input_checker23931;
this.data = data;
this.input_schema23930 = input_schema23930;
this.G__23933 = G__23933;
this.validate__7824__auto__ = validate__7824__auto__;
this.userdetail_page_view = userdetail_page_view;
this.output_checker23932 = output_checker23932;
this.ufv__ = ufv__;
this.output_schema23929 = output_schema23929;
this.G__23934 = G__23934;
this.meta23939 = meta23939;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
sberweb.userdetail.t_sberweb$userdetail23938.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__7824__auto__,ufv___23944,output_schema23929_23945,input_schema23930_23946,input_checker23931_23947,output_checker23932_23948){
return (function (_23940,meta23939__$1){
var self__ = this;
var _23940__$1 = this;
return (new sberweb.userdetail.t_sberweb$userdetail23938(self__.owner,self__.input_checker23931,self__.data,self__.input_schema23930,self__.G__23933,self__.validate__7824__auto__,self__.userdetail_page_view,self__.output_checker23932,self__.ufv__,self__.output_schema23929,self__.G__23934,meta23939__$1));
});})(validate__7824__auto__,ufv___23944,output_schema23929_23945,input_schema23930_23946,input_checker23931_23947,output_checker23932_23948))
;

sberweb.userdetail.t_sberweb$userdetail23938.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__7824__auto__,ufv___23944,output_schema23929_23945,input_schema23930_23946,input_checker23931_23947,output_checker23932_23948){
return (function (_23940){
var self__ = this;
var _23940__$1 = this;
return self__.meta23939;
});})(validate__7824__auto__,ufv___23944,output_schema23929_23945,input_schema23930_23946,input_checker23931_23947,output_checker23932_23948))
;

sberweb.userdetail.t_sberweb$userdetail23938.prototype.om$core$IDisplayName$ = true;

sberweb.userdetail.t_sberweb$userdetail23938.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__7824__auto__,ufv___23944,output_schema23929_23945,input_schema23930_23946,input_checker23931_23947,output_checker23932_23948){
return (function (_){
var self__ = this;
var ___$1 = this;
return "userdetail-page-view";
});})(validate__7824__auto__,ufv___23944,output_schema23929_23945,input_schema23930_23946,input_checker23931_23947,output_checker23932_23948))
;

sberweb.userdetail.t_sberweb$userdetail23938.prototype.om$core$IDidMount$ = true;

sberweb.userdetail.t_sberweb$userdetail23938.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (validate__7824__auto__,ufv___23944,output_schema23929_23945,input_schema23930_23946,input_checker23931_23947,output_checker23932_23948){
return (function (_){
var self__ = this;
var ___$1 = this;
return sberweb.userdetail.onMount.call(null,self__.data);
});})(validate__7824__auto__,ufv___23944,output_schema23929_23945,input_schema23930_23946,input_checker23931_23947,output_checker23932_23948))
;

sberweb.userdetail.t_sberweb$userdetail23938.prototype.om$core$IDidUpdate$ = true;

sberweb.userdetail.t_sberweb$userdetail23938.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (validate__7824__auto__,ufv___23944,output_schema23929_23945,input_schema23930_23946,input_checker23931_23947,output_checker23932_23948){
return (function (this$,prev_props,prev_state){
var self__ = this;
var this$__$1 = this;
return console.log("Update happened");
});})(validate__7824__auto__,ufv___23944,output_schema23929_23945,input_schema23930_23946,input_checker23931_23947,output_checker23932_23948))
;

sberweb.userdetail.t_sberweb$userdetail23938.prototype.om$core$IRender$ = true;

sberweb.userdetail.t_sberweb$userdetail23938.prototype.om$core$IRender$render$arity$1 = ((function (validate__7824__auto__,ufv___23944,output_schema23929_23945,input_schema23930_23946,input_checker23931_23947,output_checker23932_23948){
return (function (_){
var self__ = this;
var ___$1 = this;
var style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"10px;",new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),"0px;"], null)], null);
var styleprimary = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"70px"], null)], null);
return om_tools.dom.element.call(null,React.DOM.div,om.core.build.call(null,sberweb.core.website_view,self__.data,cljs.core.PersistentArrayMap.EMPTY),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"id": "user-detail-container"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.span,om_tools.dom.element.call(null,React.DOM.div,cljs.core.assoc.call(null,styleprimary,new cljs.core.Keyword(null,"className","className",-1983287057),"panel panel-default",new cljs.core.Keyword(null,"id","id",-1388402092),"divUserInfo"),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "panel-heading"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.h5,null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,["Login: ",om.dom.input.call(null,{"id": "login", "type": "text", "disabled": om_tools.dom.format_opts.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"isinsert","isinsert",399898579).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.userdetail.app_state)),true))?false:true)), "onChange": om_tools.dom.format_opts.call(null,((function (style,styleprimary,___$1,validate__7824__auto__,ufv___23944,output_schema23929_23945,input_schema23930_23946,input_checker23931_23947,output_checker23932_23948){
return (function (e){
return sberweb.userdetail.handleChange.call(null,e);
});})(style,styleprimary,___$1,validate__7824__auto__,ufv___23944,output_schema23929_23945,input_schema23930_23946,input_checker23931_23947,output_checker23932_23948))
), "value": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.userdetail.app_state)))})],null)))),cljs.core.apply.call(null,React.DOM.h5,null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,["Password: ",om.dom.input.call(null,{"id": "password", "type": "password", "onChange": om_tools.dom.format_opts.call(null,((function (style,styleprimary,___$1,validate__7824__auto__,ufv___23944,output_schema23929_23945,input_schema23930_23946,input_checker23931_23947,output_checker23932_23948){
return (function (e){
return sberweb.userdetail.handleChange.call(null,e);
});})(style,styleprimary,___$1,validate__7824__auto__,ufv___23944,output_schema23929_23945,input_schema23930_23946,input_checker23931_23947,output_checker23932_23948))
), "value": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"password","password",417022471).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.userdetail.app_state)))})],null)))),cljs.core.apply.call(null,React.DOM.div,{"className": "form-group"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.p,React.DOM.label({"className": "control-label", "htmlFor": "roles"},"Role: "),cljs.core.PersistentVector.EMPTY),om.dom.select.call(null,{"id": "roles", "className": "selectpicker", "data-show-subtext": "true", "data-live-search": "true", "onChange": ((function (style,styleprimary,___$1,validate__7824__auto__,ufv___23944,output_schema23929_23945,input_schema23930_23946,input_checker23931_23947,output_checker23932_23948){
return (function (p1__23927_SHARP_){
return sberweb.userdetail.handle_change.call(null,p1__23927_SHARP_,self__.owner);
});})(style,styleprimary,___$1,validate__7824__auto__,ufv___23944,output_schema23929_23945,input_schema23930_23946,input_checker23931_23947,output_checker23932_23948))
},sberweb.userdetail.buildRolesList.call(null,self__.data,self__.owner))],null))))],null))))],null))),cljs.core.PersistentVector.EMPTY)],null)))),cljs.core.apply.call(null,React.DOM.nav,{"className": "navbar navbar-default", "role": "navigation"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "navbar-header"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_bootstrap.button.button.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"btn btn-default",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (style,styleprimary,___$1,validate__7824__auto__,ufv___23944,output_schema23929_23945,input_schema23930_23946,input_checker23931_23947,output_checker23932_23948){
return (function (e){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"isinsert","isinsert",399898579).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.userdetail.app_state)),(0))){
return sberweb.userdetail.createUser.call(null);
} else {
return sberweb.userdetail.updateUser.call(null);
}
});})(style,styleprimary,___$1,validate__7824__auto__,ufv___23944,output_schema23929_23945,input_schema23930_23946,input_checker23931_23947,output_checker23932_23948))
], null),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"isinsert","isinsert",399898579).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.userdetail.app_state)),true))?"Insert":"Update")),om_bootstrap.button.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",-1983287057),"btn btn-danger",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"isinsert","isinsert",399898579).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.userdetail.app_state)),true))?"hidden":"visible")], null),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (style,styleprimary,___$1,validate__7824__auto__,ufv___23944,output_schema23929_23945,input_schema23930_23946,input_checker23931_23947,output_checker23932_23948){
return (function (e){
return sberweb.userdetail.deleteUser.call(null,new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.userdetail.app_state)));
});})(style,styleprimary,___$1,validate__7824__auto__,ufv___23944,output_schema23929_23945,input_schema23930_23946,input_checker23931_23947,output_checker23932_23948))
], null),"Delete"),om_bootstrap.button.button.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"btn btn-info",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (style,styleprimary,___$1,validate__7824__auto__,ufv___23944,output_schema23929_23945,input_schema23930_23946,input_checker23931_23947,output_checker23932_23948){
return (function (e){
return document.location = "#/users";
});})(style,styleprimary,___$1,validate__7824__auto__,ufv___23944,output_schema23929_23945,input_schema23930_23946,input_checker23931_23947,output_checker23932_23948))
], null),"Cancel")],null))))],null))))],null)));
});})(validate__7824__auto__,ufv___23944,output_schema23929_23945,input_schema23930_23946,input_checker23931_23947,output_checker23932_23948))
;

sberweb.userdetail.t_sberweb$userdetail23938.getBasis = ((function (validate__7824__auto__,ufv___23944,output_schema23929_23945,input_schema23930_23946,input_checker23931_23947,output_checker23932_23948){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"input-checker23931","input-checker23931",-1891384827,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"input-schema23930","input-schema23930",-441059962,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__23933","G__23933",-1254101466,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"validate__7824__auto__","validate__7824__auto__",1540215376,null),cljs.core.with_meta(new cljs.core.Symbol(null,"userdetail-page-view","userdetail-page-view",1214210905,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))], null))),new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("schema.core","make-fn-schema","schema.core/make-fn-schema",152735578,null),new cljs.core.Symbol(null,"output-schema23929","output-schema23929",-1300042721,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"input-schema23930","input-schema23930",-441059962,null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Inputs: [data owner]",new cljs.core.Keyword(null,"raw-arglists","raw-arglists",-1511012109),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"output-checker23932","output-checker23932",1959454941,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"output-schema23929","output-schema23929",-1300042721,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__23934","G__23934",-85044033,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"meta23939","meta23939",-752872076,null)], null);
});})(validate__7824__auto__,ufv___23944,output_schema23929_23945,input_schema23930_23946,input_checker23931_23947,output_checker23932_23948))
;

sberweb.userdetail.t_sberweb$userdetail23938.cljs$lang$type = true;

sberweb.userdetail.t_sberweb$userdetail23938.cljs$lang$ctorStr = "sberweb.userdetail/t_sberweb$userdetail23938";

sberweb.userdetail.t_sberweb$userdetail23938.cljs$lang$ctorPrWriter = ((function (validate__7824__auto__,ufv___23944,output_schema23929_23945,input_schema23930_23946,input_checker23931_23947,output_checker23932_23948){
return (function (this__6857__auto__,writer__6858__auto__,opt__6859__auto__){
return cljs.core._write.call(null,writer__6858__auto__,"sberweb.userdetail/t_sberweb$userdetail23938");
});})(validate__7824__auto__,ufv___23944,output_schema23929_23945,input_schema23930_23946,input_checker23931_23947,output_checker23932_23948))
;

sberweb.userdetail.__GT_t_sberweb$userdetail23938 = ((function (validate__7824__auto__,ufv___23944,output_schema23929_23945,input_schema23930_23946,input_checker23931_23947,output_checker23932_23948){
return (function sberweb$userdetail$userdetail_page_view_$___GT_t_sberweb$userdetail23938(owner__$1,input_checker23931__$1,data__$1,input_schema23930__$1,G__23933__$1,validate__7824__auto____$1,userdetail_page_view__$1,output_checker23932__$1,ufv____$1,output_schema23929__$1,G__23934__$1,meta23939){
return (new sberweb.userdetail.t_sberweb$userdetail23938(owner__$1,input_checker23931__$1,data__$1,input_schema23930__$1,G__23933__$1,validate__7824__auto____$1,userdetail_page_view__$1,output_checker23932__$1,ufv____$1,output_schema23929__$1,G__23934__$1,meta23939));
});})(validate__7824__auto__,ufv___23944,output_schema23929_23945,input_schema23930_23946,input_checker23931_23947,output_checker23932_23948))
;

}

return (new sberweb.userdetail.t_sberweb$userdetail23938(owner,input_checker23931_23947,data,input_schema23930_23946,G__23933,validate__7824__auto__,sberweb$userdetail$userdetail_page_view,output_checker23932_23948,ufv___23944,output_schema23929_23945,G__23934,null));
break;
}
})();
if(cljs.core.truth_(validate__7824__auto__)){
var temp__4657__auto___23952 = output_checker23932_23948.call(null,o__7827__auto__);
if(cljs.core.truth_(temp__4657__auto___23952)){
var error__7826__auto___23953 = temp__4657__auto___23952;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"userdetail-page-view","userdetail-page-view",1214210905,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__7826__auto___23953)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23929_23945,new cljs.core.Keyword(null,"value","value",305978217),o__7827__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___23953], null));
} else {
}
} else {
}

return o__7827__auto__;
});})(ufv___23944,output_schema23929_23945,input_schema23930_23946,input_checker23931_23947,output_checker23932_23948))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,sberweb.userdetail.userdetail_page_view),schema.core.make_fn_schema.call(null,output_schema23929_23945,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23930_23946], null)));

sberweb.userdetail.__GT_userdetail_page_view = (function sberweb$userdetail$__GT_userdetail_page_view(var_args){
var args23941 = [];
var len__7326__auto___23954 = arguments.length;
var i__7327__auto___23955 = (0);
while(true){
if((i__7327__auto___23955 < len__7326__auto___23954)){
args23941.push((arguments[i__7327__auto___23955]));

var G__23956 = (i__7327__auto___23955 + (1));
i__7327__auto___23955 = G__23956;
continue;
} else {
}
break;
}

var G__23943 = args23941.length;
switch (G__23943) {
case 1:
return sberweb.userdetail.__GT_userdetail_page_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sberweb.userdetail.__GT_userdetail_page_view.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23941.length)].join('')));

}
});

sberweb.userdetail.__GT_userdetail_page_view.cljs$core$IFn$_invoke$arity$1 = (function (cursor__21877__auto__){
return om.core.build.call(null,sberweb.userdetail.userdetail_page_view,cursor__21877__auto__);
});

sberweb.userdetail.__GT_userdetail_page_view.cljs$core$IFn$_invoke$arity$2 = (function (cursor__21877__auto__,m23928){
return om.core.build.call(null,sberweb.userdetail.userdetail_page_view,cursor__21877__auto__,m23928);
});

sberweb.userdetail.__GT_userdetail_page_view.cljs$lang$maxFixedArity = 2;

var action__22027__auto___23963 = (function (params__22028__auto__){
if(cljs.core.map_QMARK_.call(null,params__22028__auto__)){
var map__23958 = params__22028__auto__;
var map__23958__$1 = ((((!((map__23958 == null)))?((((map__23958.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23958.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23958):map__23958);
var login = cljs.core.get.call(null,map__23958__$1,new cljs.core.Keyword(null,"login","login",55217519));
return cljs.core.swap_BANG_.call(null,sberweb.userdetail.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519)], null),login).call(null,cljs.core.swap_BANG_.call(null,sberweb.userdetail.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"isinsert","isinsert",399898579)], null),false),om.core.root.call(null,sberweb.userdetail.userdetail_page_view,sberweb.userdetail.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null)));
} else {
if(cljs.core.vector_QMARK_.call(null,params__22028__auto__)){
var map__23960 = params__22028__auto__;
var map__23960__$1 = ((((!((map__23960 == null)))?((((map__23960.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23960.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23960):map__23960);
var login = cljs.core.get.call(null,map__23960__$1,new cljs.core.Keyword(null,"login","login",55217519));
return cljs.core.swap_BANG_.call(null,sberweb.userdetail.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519)], null),login).call(null,cljs.core.swap_BANG_.call(null,sberweb.userdetail.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"isinsert","isinsert",399898579)], null),false),om.core.root.call(null,sberweb.userdetail.userdetail_page_view,sberweb.userdetail.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null)));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/userdetail/:login",action__22027__auto___23963);

sberweb.userdetail.userdetail_page = ((function (action__22027__auto___23963){
return (function sberweb$userdetail$userdetail_page(var_args){
var args__7333__auto__ = [];
var len__7326__auto___23964 = arguments.length;
var i__7327__auto___23965 = (0);
while(true){
if((i__7327__auto___23965 < len__7326__auto___23964)){
args__7333__auto__.push((arguments[i__7327__auto___23965]));

var G__23966 = (i__7327__auto___23965 + (1));
i__7327__auto___23965 = G__23966;
continue;
} else {
}
break;
}

var argseq__7334__auto__ = ((((0) < args__7333__auto__.length))?(new cljs.core.IndexedSeq(args__7333__auto__.slice((0)),(0),null)):null);
return sberweb.userdetail.userdetail_page.cljs$core$IFn$_invoke$arity$variadic(argseq__7334__auto__);
});})(action__22027__auto___23963))
;

sberweb.userdetail.userdetail_page.cljs$core$IFn$_invoke$arity$variadic = ((function (action__22027__auto___23963){
return (function (args__22026__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/userdetail/:login",args__22026__auto__);
});})(action__22027__auto___23963))
;

sberweb.userdetail.userdetail_page.cljs$lang$maxFixedArity = (0);

sberweb.userdetail.userdetail_page.cljs$lang$applyTo = ((function (action__22027__auto___23963){
return (function (seq23962){
return sberweb.userdetail.userdetail_page.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23962));
});})(action__22027__auto___23963))
;

var action__22027__auto___23972 = (function (params__22028__auto__){
if(cljs.core.map_QMARK_.call(null,params__22028__auto__)){
var map__23967 = params__22028__auto__;
var map__23967__$1 = ((((!((map__23967 == null)))?((((map__23967.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23967.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23967):map__23967);
return cljs.core.swap_BANG_.call(null,sberweb.userdetail.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519)], null),"").call(null,cljs.core.swap_BANG_.call(null,sberweb.userdetail.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"isinsert","isinsert",399898579)], null),true),cljs.core.swap_BANG_.call(null,sberweb.userdetail.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"role","role",-736691072)], null),"user"),cljs.core.swap_BANG_.call(null,sberweb.userdetail.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"password","password",417022471)], null),""),om.core.root.call(null,sberweb.userdetail.userdetail_page_view,sberweb.userdetail.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null)));
} else {
if(cljs.core.vector_QMARK_.call(null,params__22028__auto__)){
var map__23969 = params__22028__auto__;
var map__23969__$1 = ((((!((map__23969 == null)))?((((map__23969.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23969.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23969):map__23969);
return cljs.core.swap_BANG_.call(null,sberweb.userdetail.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519)], null),"").call(null,cljs.core.swap_BANG_.call(null,sberweb.userdetail.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"isinsert","isinsert",399898579)], null),true),cljs.core.swap_BANG_.call(null,sberweb.userdetail.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"role","role",-736691072)], null),"user"),cljs.core.swap_BANG_.call(null,sberweb.userdetail.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"password","password",417022471)], null),""),om.core.root.call(null,sberweb.userdetail.userdetail_page_view,sberweb.userdetail.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null)));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/userdetail",action__22027__auto___23972);

sberweb.userdetail.userdetail_new_page = ((function (action__22027__auto___23972){
return (function sberweb$userdetail$userdetail_new_page(var_args){
var args__7333__auto__ = [];
var len__7326__auto___23973 = arguments.length;
var i__7327__auto___23974 = (0);
while(true){
if((i__7327__auto___23974 < len__7326__auto___23973)){
args__7333__auto__.push((arguments[i__7327__auto___23974]));

var G__23975 = (i__7327__auto___23974 + (1));
i__7327__auto___23974 = G__23975;
continue;
} else {
}
break;
}

var argseq__7334__auto__ = ((((0) < args__7333__auto__.length))?(new cljs.core.IndexedSeq(args__7333__auto__.slice((0)),(0),null)):null);
return sberweb.userdetail.userdetail_new_page.cljs$core$IFn$_invoke$arity$variadic(argseq__7334__auto__);
});})(action__22027__auto___23972))
;

sberweb.userdetail.userdetail_new_page.cljs$core$IFn$_invoke$arity$variadic = ((function (action__22027__auto___23972){
return (function (args__22026__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/userdetail",args__22026__auto__);
});})(action__22027__auto___23972))
;

sberweb.userdetail.userdetail_new_page.cljs$lang$maxFixedArity = (0);

sberweb.userdetail.userdetail_new_page.cljs$lang$applyTo = ((function (action__22027__auto___23972){
return (function (seq23971){
return sberweb.userdetail.userdetail_new_page.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23971));
});})(action__22027__auto___23972))
;


//# sourceMappingURL=userdetail.js.map?rel=1486035198388