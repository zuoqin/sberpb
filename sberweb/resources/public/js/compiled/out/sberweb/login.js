// Compiled by ClojureScript 1.9.89 {}
goog.provide('sberweb.login');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('om_bootstrap.input');
goog.require('om_bootstrap.panel');
goog.require('om_tools.dom');
goog.require('sberweb.positions');
goog.require('sberweb.userdetail');
goog.require('sberweb.users');
goog.require('goog.history.EventType');
goog.require('om_tools.core');
goog.require('sberweb.settings');
goog.require('sberweb.core');
goog.require('cljs.core.async');
goog.require('goog.History');
goog.require('goog.events');
goog.require('om.core');
goog.require('secretary.core');
goog.require('om_bootstrap.button');
goog.require('net.unit8.tower');
cljs.core.enable_console_print_BANG_.call(null);
sberweb.login.application = document.getElementById("app");
sberweb.login.set_html_BANG_ = (function sberweb$login$set_html_BANG_(el,content){
return (el["innerHTML"] = content);
});
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");
var history_24247 = (new goog.History());
var navigation_24248 = goog.history.EventType.NAVIGATE;
goog.events.listen(history_24247,navigation_24248,((function (history_24247,navigation_24248){
return (function (p1__24245_SHARP_){
return secretary.core.dispatch_BANG_.call(null,p1__24245_SHARP_.token);
});})(history_24247,navigation_24248))
);

var G__24246_24249 = history_24247;
G__24246_24249.setEnabled(true);

sberweb.login.ch = cljs.core.async.chan.call(null,cljs.core.async.dropping_buffer.call(null,(2)));
sberweb.login.jquery = $;
if(typeof sberweb.login.app_state !== 'undefined'){
} else {
sberweb.login.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),"",new cljs.core.Keyword(null,"modalText","modalText",1729748738),"Modal Text",new cljs.core.Keyword(null,"modalTitle","modalTitle",-1534566551),"Modal Title",new cljs.core.Keyword(null,"state","state",-1988618099),(0)], null));
}
sberweb.login.setLoginError = (function sberweb$login$setLoginError(error){
cljs.core.swap_BANG_.call(null,sberweb.login.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(error));

cljs.core.swap_BANG_.call(null,sberweb.login.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modalTitle","modalTitle",-1534566551)], null),[cljs.core.str("Login Error")].join(''));

cljs.core.swap_BANG_.call(null,sberweb.login.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modalText","modalText",1729748738)], null),[cljs.core.str(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(error))].join(''));

cljs.core.swap_BANG_.call(null,sberweb.login.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099)], null),(0));

return sberweb.login.jquery.call(null,(function (){
return sberweb.login.jquery.call(null,"#loginModal").modal();
}));
});
sberweb.login.onLoginError = (function sberweb$login$onLoginError(response){
var newdata = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.get.call(null,response,cljs.core.keyword.call(null,"response"))], null);
return sberweb.login.setLoginError.call(null,newdata);
});
sberweb.login.error_handler = (function sberweb$login$error_handler(p__24250){
var map__24253 = p__24250;
var map__24253__$1 = ((((!((map__24253 == null)))?((((map__24253.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24253.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24253):map__24253);
var status = cljs.core.get.call(null,map__24253__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__24253__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return console.log([cljs.core.str("something bad happened: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
sberweb.login.OnGetPositions = (function sberweb$login$OnGetPositions(response){
cljs.core.swap_BANG_.call(null,sberweb.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.core.app_state)))),new cljs.core.Keyword(null,"positions","positions",-1380538434)], null),response);

return (window["location"] = "#/positions");
});
sberweb.login.reqpositions = (function sberweb$login$reqpositions(){
return ajax.core.GET.call(null,[cljs.core.str(sberweb.settings.apipath),cljs.core.str("api/trans?client="),cljs.core.str(new cljs.core.Keyword(null,"client","client",-1323448117).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.core.app_state))))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"handler","handler",-195596612),sberweb.login.OnGetPositions,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),sberweb.login.error_handler,new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json",new cljs.core.Keyword(null,"Authorization","Authorization",-1017527462),[cljs.core.str("Bearer "),cljs.core.str(new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.core.app_state))))].join('')], null)], null));
});
sberweb.login.setUser = (function sberweb$login$setUser(theUser){
var cnt_24255 = cljs.core.count.call(null,new cljs.core.Keyword(null,"users","users",-713552705).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.core.app_state)));
cljs.core.swap_BANG_.call(null,sberweb.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",-713552705),cnt_24255], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"role","role",-736691072),cljs.core.nth.call(null,theUser,(1)),new cljs.core.Keyword(null,"login","login",55217519),cljs.core.nth.call(null,theUser,(0)),new cljs.core.Keyword(null,"password","password",417022471),cljs.core.nth.call(null,theUser,(2))], null));

if(cljs.core._EQ_.call(null,cljs.core.nth.call(null,theUser,(0)),new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.core.app_state))))){
return cljs.core.swap_BANG_.call(null,sberweb.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"role","role",-736691072)], null),cljs.core.nth.call(null,theUser,(1)));
} else {
return null;
}
});
sberweb.login.OnGetUser = (function sberweb$login$OnGetUser(response){
cljs.core.doall.call(null,cljs.core.map.call(null,sberweb.login.setUser,response));

return sberweb.login.reqpositions.call(null);
});
sberweb.login.requser = (function sberweb$login$requser(){
return ajax.core.GET.call(null,[cljs.core.str(sberweb.settings.apipath),cljs.core.str("api/user")].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"handler","handler",-195596612),sberweb.login.OnGetUser,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),sberweb.login.error_handler,new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json",new cljs.core.Keyword(null,"Authorization","Authorization",-1017527462),[cljs.core.str("Bearer "),cljs.core.str(new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.core.app_state))))].join('')], null)], null));
});
sberweb.login.onLoginSuccess = (function sberweb$login$onLoginSuccess(response){
var newdata = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"token","token",-1211463215),cljs.core.get.call(null,response,cljs.core.keyword.call(null,"access_token")),new cljs.core.Keyword(null,"expires","expires",1393008816),cljs.core.get.call(null,response,cljs.core.keyword.call(null,"expires_in"))], null);
console.log([cljs.core.str(newdata)].join(''));

cljs.core.swap_BANG_.call(null,sberweb.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"token","token",-1211463215)], null),newdata);

cljs.core.swap_BANG_.call(null,sberweb.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814)], null),(1));

cljs.core.swap_BANG_.call(null,sberweb.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",-713552705)], null),cljs.core.PersistentVector.EMPTY);

return sberweb.login.requser.call(null);
});
sberweb.login.OnLogin = (function sberweb$login$OnLogin(response){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,response),(0))){
return sberweb.login.onLoginError.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"response","response",-1068424192),"Incorrect username or password"], null));
} else {
return sberweb.login.onLoginSuccess.call(null,response);
}
});
sberweb.login.dologin = (function sberweb$login$dologin(username,password){
cljs.core.swap_BANG_.call(null,sberweb.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"login","login",55217519)], null),username);

cljs.core.swap_BANG_.call(null,sberweb.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selecteduser","selecteduser",-934523066)], null),username);

return ajax.core.POST.call(null,[cljs.core.str(sberweb.settings.apipath),cljs.core.str("token")].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),sberweb.login.OnLogin,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),sberweb.login.onLoginError,new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/x-www-form-urlencoded"], null),new cljs.core.Keyword(null,"body","body",-2049205669),[cljs.core.str("grant_type=password&username="),cljs.core.str(username),cljs.core.str("&password="),cljs.core.str(password)].join('')], null));
});
sberweb.login.checklogin = (function sberweb$login$checklogin(owner){
var theUserName = om.core.get_node.call(null,owner,"txtUserName").value;
var thePassword = om.core.get_node.call(null,owner,"txtPassword").value;
console.log([cljs.core.str(theUserName)].join(''));

return sberweb.login.dologin.call(null,[cljs.core.str(theUserName)].join(''),[cljs.core.str(thePassword)].join(''));
});
sberweb.login.addModal = (function sberweb$login$addModal(){
return om_tools.dom.element.call(null,React.DOM.div,cljs.core.apply.call(null,React.DOM.div,{"id": "loginModal", "className": "modal fade", "role": "dialog"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "modal-dialog"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "modal-content"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "modal-header"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_bootstrap.button.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"className","className",-1983287057),"close",new cljs.core.Keyword(null,"data-dismiss","data-dismiss",-2004576016),"modal"], null)),cljs.core.apply.call(null,React.DOM.h4,{"className": "modal-title"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"modalTitle","modalTitle",-1534566551).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.login.app_state))],null))))],null)))),cljs.core.apply.call(null,React.DOM.div,{"className": "modal-body"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.p,new cljs.core.Keyword(null,"modalText","modalText",1729748738).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.login.app_state)),cljs.core.PersistentVector.EMPTY)],null)))),cljs.core.apply.call(null,React.DOM.div,{"className": "modal-footer"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_bootstrap.button.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"className","className",-1983287057),"btn btn-default",new cljs.core.Keyword(null,"data-dismiss","data-dismiss",-2004576016),"modal"], null),"Close")],null))))],null))))],null))))],null)))),cljs.core.PersistentVector.EMPTY);
});

var ufv___24272 = schema.utils.use_fn_validation;
var output_schema24257_24273 = schema.core.Any;
var input_schema24258_24274 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker24259_24275 = schema.core.checker.call(null,input_schema24258_24274);
var output_checker24260_24276 = schema.core.checker.call(null,output_schema24257_24273);
/**
 * Inputs: [data owner]
 */
sberweb.login.login_page_view = ((function (ufv___24272,output_schema24257_24273,input_schema24258_24274,input_checker24259_24275,output_checker24260_24276){
return (function sberweb$login$login_page_view(G__24261,G__24262){
var validate__7824__auto__ = ufv___24272.get_cell();
if(cljs.core.truth_(validate__7824__auto__)){
var args__7825__auto___24277 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__24261,G__24262], null);
var temp__4657__auto___24278 = input_checker24259_24275.call(null,args__7825__auto___24277);
if(cljs.core.truth_(temp__4657__auto___24278)){
var error__7826__auto___24279 = temp__4657__auto___24278;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"login-page-view","login-page-view",1666816510,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__7826__auto___24279)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema24258_24274,new cljs.core.Keyword(null,"value","value",305978217),args__7825__auto___24277,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___24279], null));
} else {
}
} else {
}

var o__7827__auto__ = (function (){var data = G__24261;
var owner = G__24262;
while(true){
if(typeof sberweb.login.t_sberweb$login24266 !== 'undefined'){
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
sberweb.login.t_sberweb$login24266 = (function (G__24262,owner,data,validate__7824__auto__,input_checker24259,input_schema24258,G__24261,ufv__,output_checker24260,login_page_view,output_schema24257,meta24267){
this.G__24262 = G__24262;
this.owner = owner;
this.data = data;
this.validate__7824__auto__ = validate__7824__auto__;
this.input_checker24259 = input_checker24259;
this.input_schema24258 = input_schema24258;
this.G__24261 = G__24261;
this.ufv__ = ufv__;
this.output_checker24260 = output_checker24260;
this.login_page_view = login_page_view;
this.output_schema24257 = output_schema24257;
this.meta24267 = meta24267;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
sberweb.login.t_sberweb$login24266.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__7824__auto__,ufv___24272,output_schema24257_24273,input_schema24258_24274,input_checker24259_24275,output_checker24260_24276){
return (function (_24268,meta24267__$1){
var self__ = this;
var _24268__$1 = this;
return (new sberweb.login.t_sberweb$login24266(self__.G__24262,self__.owner,self__.data,self__.validate__7824__auto__,self__.input_checker24259,self__.input_schema24258,self__.G__24261,self__.ufv__,self__.output_checker24260,self__.login_page_view,self__.output_schema24257,meta24267__$1));
});})(validate__7824__auto__,ufv___24272,output_schema24257_24273,input_schema24258_24274,input_checker24259_24275,output_checker24260_24276))
;

sberweb.login.t_sberweb$login24266.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__7824__auto__,ufv___24272,output_schema24257_24273,input_schema24258_24274,input_checker24259_24275,output_checker24260_24276){
return (function (_24268){
var self__ = this;
var _24268__$1 = this;
return self__.meta24267;
});})(validate__7824__auto__,ufv___24272,output_schema24257_24273,input_schema24258_24274,input_checker24259_24275,output_checker24260_24276))
;

sberweb.login.t_sberweb$login24266.prototype.om$core$IDisplayName$ = true;

sberweb.login.t_sberweb$login24266.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__7824__auto__,ufv___24272,output_schema24257_24273,input_schema24258_24274,input_checker24259_24275,output_checker24260_24276){
return (function (_){
var self__ = this;
var ___$1 = this;
return "login-page-view";
});})(validate__7824__auto__,ufv___24272,output_schema24257_24273,input_schema24258_24274,input_checker24259_24275,output_checker24260_24276))
;

sberweb.login.t_sberweb$login24266.prototype.om$core$IDidUpdate$ = true;

sberweb.login.t_sberweb$login24266.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (validate__7824__auto__,ufv___24272,output_schema24257_24273,input_schema24258_24274,input_checker24259_24275,output_checker24260_24276){
return (function (this$,prev_props,prev_state){
var self__ = this;
var this$__$1 = this;
return console.log("starting login screen");
});})(validate__7824__auto__,ufv___24272,output_schema24257_24273,input_schema24258_24274,input_checker24259_24275,output_checker24260_24276))
;

sberweb.login.t_sberweb$login24266.prototype.om$core$IDidMount$ = true;

sberweb.login.t_sberweb$login24266.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (validate__7824__auto__,ufv___24272,output_schema24257_24273,input_schema24258_24274,input_checker24259_24275,output_checker24260_24276){
return (function (_){
var self__ = this;
var ___$1 = this;
return om.core.get_node.call(null,self__.owner,"txtUserName").focus();
});})(validate__7824__auto__,ufv___24272,output_schema24257_24273,input_schema24258_24274,input_checker24259_24275,output_checker24260_24276))
;

sberweb.login.t_sberweb$login24266.prototype.om$core$IRender$ = true;

sberweb.login.t_sberweb$login24266.prototype.om$core$IRender$render$arity$1 = ((function (validate__7824__auto__,ufv___24272,output_schema24257_24273,input_schema24258_24274,input_checker24259_24275,output_checker24260_24276){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,React.DOM.div,{"className": "container", "style": {"width": "100%", "paddingTop": "283px", "backgroundImage": "url(/images/loginbackground.png)", "backgroundSize": "cover"}},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.form,{"className": "form-signin"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.dom.input.call(null,{"type": "text", "ref": "txtUserName", "defaultValue": sberweb.settings.demouser, "className": "form-control", "placeholder": "User Name"}),om.dom.input.call(null,{"className": "form-control", "ref": "txtPassword", "id": "txtPassword", "defaultValue": om_tools.dom.format_opts.call(null,sberweb.settings.demopassword), "type": "password", "placeholder": "Password"}),React.DOM.button({"className": ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.login.app_state)),(0)))?"btn btn-lg btn-primary btn-block":"btn btn-lg btn-primary btn-block m-progress"), "type": "button", "onClick": ((function (___$1,validate__7824__auto__,ufv___24272,output_schema24257_24273,input_schema24258_24274,input_checker24259_24275,output_checker24260_24276){
return (function (e){
return sberweb.login.checklogin.call(null,self__.owner);
});})(___$1,validate__7824__auto__,ufv___24272,output_schema24257_24273,input_schema24258_24274,input_checker24259_24275,output_checker24260_24276))
},"Login"),React.DOM.button({"className": ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.login.app_state)),(0)))?"btn btn-lg btn-primary btn-block":"btn btn-lg btn-primary btn-block m-progress"), "type": "button", "onClick": ((function (___$1,validate__7824__auto__,ufv___24272,output_schema24257_24273,input_schema24258_24274,input_checker24259_24275,output_checker24260_24276){
return (function (e){
return document.location = "#/registration";
});})(___$1,validate__7824__auto__,ufv___24272,output_schema24257_24273,input_schema24258_24274,input_checker24259_24275,output_checker24260_24276))
},"Register")],null)))),sberweb.login.addModal.call(null),React.DOM.div({"style": {"marginBottom": "200px"}})],null))));
});})(validate__7824__auto__,ufv___24272,output_schema24257_24273,input_schema24258_24274,input_checker24259_24275,output_checker24260_24276))
;

sberweb.login.t_sberweb$login24266.getBasis = ((function (validate__7824__auto__,ufv___24272,output_schema24257_24273,input_schema24258_24274,input_checker24259_24275,output_checker24260_24276){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"G__24262","G__24262",470567395,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"validate__7824__auto__","validate__7824__auto__",1540215376,null),new cljs.core.Symbol(null,"input-checker24259","input-checker24259",-1292541359,null),new cljs.core.Symbol(null,"input-schema24258","input-schema24258",1999529363,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__24261","G__24261",1182064760,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"output-checker24260","output-checker24260",-1006700963,null),cljs.core.with_meta(new cljs.core.Symbol(null,"login-page-view","login-page-view",1666816510,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))], null))),new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("schema.core","make-fn-schema","schema.core/make-fn-schema",152735578,null),new cljs.core.Symbol(null,"output-schema24257","output-schema24257",-1394665473,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"input-schema24258","input-schema24258",1999529363,null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Inputs: [data owner]",new cljs.core.Keyword(null,"raw-arglists","raw-arglists",-1511012109),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"output-schema24257","output-schema24257",-1394665473,null),new cljs.core.Symbol(null,"meta24267","meta24267",2036375194,null)], null);
});})(validate__7824__auto__,ufv___24272,output_schema24257_24273,input_schema24258_24274,input_checker24259_24275,output_checker24260_24276))
;

sberweb.login.t_sberweb$login24266.cljs$lang$type = true;

sberweb.login.t_sberweb$login24266.cljs$lang$ctorStr = "sberweb.login/t_sberweb$login24266";

sberweb.login.t_sberweb$login24266.cljs$lang$ctorPrWriter = ((function (validate__7824__auto__,ufv___24272,output_schema24257_24273,input_schema24258_24274,input_checker24259_24275,output_checker24260_24276){
return (function (this__6857__auto__,writer__6858__auto__,opt__6859__auto__){
return cljs.core._write.call(null,writer__6858__auto__,"sberweb.login/t_sberweb$login24266");
});})(validate__7824__auto__,ufv___24272,output_schema24257_24273,input_schema24258_24274,input_checker24259_24275,output_checker24260_24276))
;

sberweb.login.__GT_t_sberweb$login24266 = ((function (validate__7824__auto__,ufv___24272,output_schema24257_24273,input_schema24258_24274,input_checker24259_24275,output_checker24260_24276){
return (function sberweb$login$login_page_view_$___GT_t_sberweb$login24266(G__24262__$1,owner__$1,data__$1,validate__7824__auto____$1,input_checker24259__$1,input_schema24258__$1,G__24261__$1,ufv____$1,output_checker24260__$1,login_page_view__$1,output_schema24257__$1,meta24267){
return (new sberweb.login.t_sberweb$login24266(G__24262__$1,owner__$1,data__$1,validate__7824__auto____$1,input_checker24259__$1,input_schema24258__$1,G__24261__$1,ufv____$1,output_checker24260__$1,login_page_view__$1,output_schema24257__$1,meta24267));
});})(validate__7824__auto__,ufv___24272,output_schema24257_24273,input_schema24258_24274,input_checker24259_24275,output_checker24260_24276))
;

}

return (new sberweb.login.t_sberweb$login24266(G__24262,owner,data,validate__7824__auto__,input_checker24259_24275,input_schema24258_24274,G__24261,ufv___24272,output_checker24260_24276,sberweb$login$login_page_view,output_schema24257_24273,null));
break;
}
})();
if(cljs.core.truth_(validate__7824__auto__)){
var temp__4657__auto___24280 = output_checker24260_24276.call(null,o__7827__auto__);
if(cljs.core.truth_(temp__4657__auto___24280)){
var error__7826__auto___24281 = temp__4657__auto___24280;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"login-page-view","login-page-view",1666816510,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__7826__auto___24281)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema24257_24273,new cljs.core.Keyword(null,"value","value",305978217),o__7827__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___24281], null));
} else {
}
} else {
}

return o__7827__auto__;
});})(ufv___24272,output_schema24257_24273,input_schema24258_24274,input_checker24259_24275,output_checker24260_24276))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,sberweb.login.login_page_view),schema.core.make_fn_schema.call(null,output_schema24257_24273,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema24258_24274], null)));

sberweb.login.__GT_login_page_view = (function sberweb$login$__GT_login_page_view(var_args){
var args24269 = [];
var len__7326__auto___24282 = arguments.length;
var i__7327__auto___24283 = (0);
while(true){
if((i__7327__auto___24283 < len__7326__auto___24282)){
args24269.push((arguments[i__7327__auto___24283]));

var G__24284 = (i__7327__auto___24283 + (1));
i__7327__auto___24283 = G__24284;
continue;
} else {
}
break;
}

var G__24271 = args24269.length;
switch (G__24271) {
case 1:
return sberweb.login.__GT_login_page_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sberweb.login.__GT_login_page_view.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24269.length)].join('')));

}
});

sberweb.login.__GT_login_page_view.cljs$core$IFn$_invoke$arity$1 = (function (cursor__21877__auto__){
return om.core.build.call(null,sberweb.login.login_page_view,cursor__21877__auto__);
});

sberweb.login.__GT_login_page_view.cljs$core$IFn$_invoke$arity$2 = (function (cursor__21877__auto__,m24256){
return om.core.build.call(null,sberweb.login.login_page_view,cursor__21877__auto__,m24256);
});

sberweb.login.__GT_login_page_view.cljs$lang$maxFixedArity = 2;

if(typeof sberweb.login.website_view !== 'undefined'){
} else {
sberweb.login.website_view = (function (){var method_table__7176__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7177__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7178__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7179__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7180__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"sberweb.login","website-view"),((function (method_table__7176__auto__,prefer_table__7177__auto__,method_cache__7178__auto__,cached_hierarchy__7179__auto__,hierarchy__7180__auto__){
return (function (data,_){
return new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,data,null))?cljs.core.deref.call(null,sberweb.core.app_state):cljs.core.deref.call(null,data)));
});})(method_table__7176__auto__,prefer_table__7177__auto__,method_cache__7178__auto__,cached_hierarchy__7179__auto__,hierarchy__7180__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7180__auto__,method_table__7176__auto__,prefer_table__7177__auto__,method_cache__7178__auto__,cached_hierarchy__7179__auto__));
})();
}
cljs.core._add_method.call(null,sberweb.login.website_view,(0),(function (data,owner){
return sberweb.login.login_page_view.call(null,data,owner);
}));
cljs.core._add_method.call(null,sberweb.login.website_view,(1),(function (data,owner){
return sberweb.login.login_page_view.call(null,data,owner);
}));
var action__22027__auto___24292 = (function (params__22028__auto__){
if(cljs.core.map_QMARK_.call(null,params__22028__auto__)){
var map__24286 = params__22028__auto__;
var map__24286__$1 = ((((!((map__24286 == null)))?((((map__24286.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24286.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24286):map__24286);
return om.core.root.call(null,sberweb.login.login_page_view,sberweb.login.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__22028__auto__)){
var vec__24288 = params__22028__auto__;
return om.core.root.call(null,sberweb.login.login_page_view,sberweb.login.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/login",action__22027__auto___24292);

sberweb.login.login_page = ((function (action__22027__auto___24292){
return (function sberweb$login$login_page(var_args){
var args__7333__auto__ = [];
var len__7326__auto___24293 = arguments.length;
var i__7327__auto___24294 = (0);
while(true){
if((i__7327__auto___24294 < len__7326__auto___24293)){
args__7333__auto__.push((arguments[i__7327__auto___24294]));

var G__24295 = (i__7327__auto___24294 + (1));
i__7327__auto___24294 = G__24295;
continue;
} else {
}
break;
}

var argseq__7334__auto__ = ((((0) < args__7333__auto__.length))?(new cljs.core.IndexedSeq(args__7333__auto__.slice((0)),(0),null)):null);
return sberweb.login.login_page.cljs$core$IFn$_invoke$arity$variadic(argseq__7334__auto__);
});})(action__22027__auto___24292))
;

sberweb.login.login_page.cljs$core$IFn$_invoke$arity$variadic = ((function (action__22027__auto___24292){
return (function (args__22026__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/login",args__22026__auto__);
});})(action__22027__auto___24292))
;

sberweb.login.login_page.cljs$lang$maxFixedArity = (0);

sberweb.login.login_page.cljs$lang$applyTo = ((function (action__22027__auto___24292){
return (function (seq24291){
return sberweb.login.login_page.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24291));
});})(action__22027__auto___24292))
;

sberweb.login.main = (function sberweb$login$main(){
return document.location = "#/login";
});
sberweb.login.main.call(null);

//# sourceMappingURL=login.js.map?rel=1486035198702