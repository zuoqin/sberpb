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
var history_47690 = (new goog.History());
var navigation_47691 = goog.history.EventType.NAVIGATE;
goog.events.listen(history_47690,navigation_47691,((function (history_47690,navigation_47691){
return (function (p1__47688_SHARP_){
return secretary.core.dispatch_BANG_.call(null,p1__47688_SHARP_.token);
});})(history_47690,navigation_47691))
);

var G__47689_47692 = history_47690;
G__47689_47692.setEnabled(true);

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
sberweb.login.error_handler = (function sberweb$login$error_handler(p__47693){
var map__47696 = p__47693;
var map__47696__$1 = ((((!((map__47696 == null)))?((((map__47696.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47696.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47696):map__47696);
var status = cljs.core.get.call(null,map__47696__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__47696__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return console.log([cljs.core.str("something bad happened: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
sberweb.login.OnGetSecurities = (function sberweb$login$OnGetSecurities(response){
cljs.core.swap_BANG_.call(null,sberweb.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"securities","securities",-755156980)], null),response);

return (window["location"] = "#/positions");
});
sberweb.login.reqsecurities = (function sberweb$login$reqsecurities(){
return ajax.core.GET.call(null,[cljs.core.str(sberweb.settings.apipath),cljs.core.str("api/security")].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"handler","handler",-195596612),sberweb.login.OnGetSecurities,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),sberweb.login.error_handler,new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json",new cljs.core.Keyword(null,"Authorization","Authorization",-1017527462),[cljs.core.str("Bearer "),cljs.core.str(new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.core.app_state))))].join('')], null)], null));
});
sberweb.login.OnGetClients = (function sberweb$login$OnGetClients(response){
cljs.core.swap_BANG_.call(null,sberweb.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clients","clients",1436018090)], null),response);

return sberweb.login.reqsecurities.call(null);
});
sberweb.login.reqclients = (function sberweb$login$reqclients(){
return ajax.core.GET.call(null,[cljs.core.str(sberweb.settings.apipath),cljs.core.str("api/client")].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"handler","handler",-195596612),sberweb.login.OnGetClients,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),sberweb.login.error_handler,new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json",new cljs.core.Keyword(null,"Authorization","Authorization",-1017527462),[cljs.core.str("Bearer "),cljs.core.str(new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.core.app_state))))].join('')], null)], null));
});
sberweb.login.setUser = (function sberweb$login$setUser(theUser){
var cnt_47698 = cljs.core.count.call(null,new cljs.core.Keyword(null,"users","users",-713552705).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.core.app_state)));
cljs.core.swap_BANG_.call(null,sberweb.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",-713552705),cnt_47698], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"role","role",-736691072),cljs.core.nth.call(null,theUser,(1)),new cljs.core.Keyword(null,"login","login",55217519),cljs.core.nth.call(null,theUser,(0)),new cljs.core.Keyword(null,"password","password",417022471),cljs.core.nth.call(null,theUser,(2))], null));

if(cljs.core._EQ_.call(null,cljs.core.nth.call(null,theUser,(0)),new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.core.app_state))))){
return cljs.core.swap_BANG_.call(null,sberweb.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"role","role",-736691072)], null),cljs.core.nth.call(null,theUser,(1)));
} else {
return null;
}
});
sberweb.login.OnGetUser = (function sberweb$login$OnGetUser(response){
cljs.core.doall.call(null,cljs.core.map.call(null,sberweb.login.setUser,response));

return sberweb.login.reqclients.call(null);
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

var ufv___47715 = schema.utils.use_fn_validation;
var output_schema47700_47716 = schema.core.Any;
var input_schema47701_47717 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker47702_47718 = schema.core.checker.call(null,input_schema47701_47717);
var output_checker47703_47719 = schema.core.checker.call(null,output_schema47700_47716);
/**
 * Inputs: [data owner]
 */
sberweb.login.login_page_view = ((function (ufv___47715,output_schema47700_47716,input_schema47701_47717,input_checker47702_47718,output_checker47703_47719){
return (function sberweb$login$login_page_view(G__47704,G__47705){
var validate__37909__auto__ = ufv___47715.get_cell();
if(cljs.core.truth_(validate__37909__auto__)){
var args__37910__auto___47720 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__47704,G__47705], null);
var temp__4657__auto___47721 = input_checker47702_47718.call(null,args__37910__auto___47720);
if(cljs.core.truth_(temp__4657__auto___47721)){
var error__37911__auto___47722 = temp__4657__auto___47721;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"login-page-view","login-page-view",1666816510,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__37911__auto___47722)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema47701_47717,new cljs.core.Keyword(null,"value","value",305978217),args__37910__auto___47720,new cljs.core.Keyword(null,"error","error",-978969032),error__37911__auto___47722], null));
} else {
}
} else {
}

var o__37912__auto__ = (function (){var data = G__47704;
var owner = G__47705;
while(true){
if(typeof sberweb.login.t_sberweb$login47709 !== 'undefined'){
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
sberweb.login.t_sberweb$login47709 = (function (input_schema47701,owner,output_schema47700,data,input_checker47702,output_checker47703,validate__37909__auto__,G__47704,G__47705,ufv__,login_page_view,meta47710){
this.input_schema47701 = input_schema47701;
this.owner = owner;
this.output_schema47700 = output_schema47700;
this.data = data;
this.input_checker47702 = input_checker47702;
this.output_checker47703 = output_checker47703;
this.validate__37909__auto__ = validate__37909__auto__;
this.G__47704 = G__47704;
this.G__47705 = G__47705;
this.ufv__ = ufv__;
this.login_page_view = login_page_view;
this.meta47710 = meta47710;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
sberweb.login.t_sberweb$login47709.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__37909__auto__,ufv___47715,output_schema47700_47716,input_schema47701_47717,input_checker47702_47718,output_checker47703_47719){
return (function (_47711,meta47710__$1){
var self__ = this;
var _47711__$1 = this;
return (new sberweb.login.t_sberweb$login47709(self__.input_schema47701,self__.owner,self__.output_schema47700,self__.data,self__.input_checker47702,self__.output_checker47703,self__.validate__37909__auto__,self__.G__47704,self__.G__47705,self__.ufv__,self__.login_page_view,meta47710__$1));
});})(validate__37909__auto__,ufv___47715,output_schema47700_47716,input_schema47701_47717,input_checker47702_47718,output_checker47703_47719))
;

sberweb.login.t_sberweb$login47709.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__37909__auto__,ufv___47715,output_schema47700_47716,input_schema47701_47717,input_checker47702_47718,output_checker47703_47719){
return (function (_47711){
var self__ = this;
var _47711__$1 = this;
return self__.meta47710;
});})(validate__37909__auto__,ufv___47715,output_schema47700_47716,input_schema47701_47717,input_checker47702_47718,output_checker47703_47719))
;

sberweb.login.t_sberweb$login47709.prototype.om$core$IDisplayName$ = true;

sberweb.login.t_sberweb$login47709.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__37909__auto__,ufv___47715,output_schema47700_47716,input_schema47701_47717,input_checker47702_47718,output_checker47703_47719){
return (function (_){
var self__ = this;
var ___$1 = this;
return "login-page-view";
});})(validate__37909__auto__,ufv___47715,output_schema47700_47716,input_schema47701_47717,input_checker47702_47718,output_checker47703_47719))
;

sberweb.login.t_sberweb$login47709.prototype.om$core$IDidUpdate$ = true;

sberweb.login.t_sberweb$login47709.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (validate__37909__auto__,ufv___47715,output_schema47700_47716,input_schema47701_47717,input_checker47702_47718,output_checker47703_47719){
return (function (this$,prev_props,prev_state){
var self__ = this;
var this$__$1 = this;
return console.log("starting login screen");
});})(validate__37909__auto__,ufv___47715,output_schema47700_47716,input_schema47701_47717,input_checker47702_47718,output_checker47703_47719))
;

sberweb.login.t_sberweb$login47709.prototype.om$core$IDidMount$ = true;

sberweb.login.t_sberweb$login47709.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (validate__37909__auto__,ufv___47715,output_schema47700_47716,input_schema47701_47717,input_checker47702_47718,output_checker47703_47719){
return (function (_){
var self__ = this;
var ___$1 = this;
return om.core.get_node.call(null,self__.owner,"txtUserName").focus();
});})(validate__37909__auto__,ufv___47715,output_schema47700_47716,input_schema47701_47717,input_checker47702_47718,output_checker47703_47719))
;

sberweb.login.t_sberweb$login47709.prototype.om$core$IRender$ = true;

sberweb.login.t_sberweb$login47709.prototype.om$core$IRender$render$arity$1 = ((function (validate__37909__auto__,ufv___47715,output_schema47700_47716,input_schema47701_47717,input_checker47702_47718,output_checker47703_47719){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,React.DOM.div,{"className": "container", "style": {"width": "100%", "paddingTop": "283px", "backgroundImage": "url(/images/loginbackground.png)", "backgroundSize": "cover"}},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.form,{"className": "form-signin"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.dom.input.call(null,{"type": "text", "ref": "txtUserName", "defaultValue": sberweb.settings.demouser, "className": "form-control", "placeholder": "User Name"}),om.dom.input.call(null,{"className": "form-control", "ref": "txtPassword", "id": "txtPassword", "defaultValue": om_tools.dom.format_opts.call(null,sberweb.settings.demopassword), "type": "password", "placeholder": "Password"}),React.DOM.button({"className": ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.login.app_state)),(0)))?"btn btn-lg btn-primary btn-block":"btn btn-lg btn-primary btn-block m-progress"), "type": "button", "onClick": ((function (___$1,validate__37909__auto__,ufv___47715,output_schema47700_47716,input_schema47701_47717,input_checker47702_47718,output_checker47703_47719){
return (function (e){
return sberweb.login.checklogin.call(null,self__.owner);
});})(___$1,validate__37909__auto__,ufv___47715,output_schema47700_47716,input_schema47701_47717,input_checker47702_47718,output_checker47703_47719))
},"Login"),React.DOM.button({"className": ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.login.app_state)),(0)))?"btn btn-lg btn-primary btn-block":"btn btn-lg btn-primary btn-block m-progress"), "type": "button", "onClick": ((function (___$1,validate__37909__auto__,ufv___47715,output_schema47700_47716,input_schema47701_47717,input_checker47702_47718,output_checker47703_47719){
return (function (e){
return document.location = "#/registration";
});})(___$1,validate__37909__auto__,ufv___47715,output_schema47700_47716,input_schema47701_47717,input_checker47702_47718,output_checker47703_47719))
},"Register")],null)))),sberweb.login.addModal.call(null),React.DOM.div({"style": {"marginBottom": "200px"}})],null))));
});})(validate__37909__auto__,ufv___47715,output_schema47700_47716,input_schema47701_47717,input_checker47702_47718,output_checker47703_47719))
;

sberweb.login.t_sberweb$login47709.getBasis = ((function (validate__37909__auto__,ufv___47715,output_schema47700_47716,input_schema47701_47717,input_checker47702_47718,output_checker47703_47719){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"input-schema47701","input-schema47701",-682165310,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"output-schema47700","output-schema47700",-189414235,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"input-checker47702","input-checker47702",-548089621,null),new cljs.core.Symbol(null,"output-checker47703","output-checker47703",569041452,null),new cljs.core.Symbol(null,"validate__37909__auto__","validate__37909__auto__",-807220660,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__47704","G__47704",-2092299953,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"G__47705","G__47705",-1565945702,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),cljs.core.with_meta(new cljs.core.Symbol(null,"login-page-view","login-page-view",1666816510,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))], null))),new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("schema.core","make-fn-schema","schema.core/make-fn-schema",152735578,null),new cljs.core.Symbol(null,"output-schema47700","output-schema47700",-189414235,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"input-schema47701","input-schema47701",-682165310,null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Inputs: [data owner]",new cljs.core.Keyword(null,"raw-arglists","raw-arglists",-1511012109),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"meta47710","meta47710",-414349200,null)], null);
});})(validate__37909__auto__,ufv___47715,output_schema47700_47716,input_schema47701_47717,input_checker47702_47718,output_checker47703_47719))
;

sberweb.login.t_sberweb$login47709.cljs$lang$type = true;

sberweb.login.t_sberweb$login47709.cljs$lang$ctorStr = "sberweb.login/t_sberweb$login47709";

sberweb.login.t_sberweb$login47709.cljs$lang$ctorPrWriter = ((function (validate__37909__auto__,ufv___47715,output_schema47700_47716,input_schema47701_47717,input_checker47702_47718,output_checker47703_47719){
return (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"sberweb.login/t_sberweb$login47709");
});})(validate__37909__auto__,ufv___47715,output_schema47700_47716,input_schema47701_47717,input_checker47702_47718,output_checker47703_47719))
;

sberweb.login.__GT_t_sberweb$login47709 = ((function (validate__37909__auto__,ufv___47715,output_schema47700_47716,input_schema47701_47717,input_checker47702_47718,output_checker47703_47719){
return (function sberweb$login$login_page_view_$___GT_t_sberweb$login47709(input_schema47701__$1,owner__$1,output_schema47700__$1,data__$1,input_checker47702__$1,output_checker47703__$1,validate__37909__auto____$1,G__47704__$1,G__47705__$1,ufv____$1,login_page_view__$1,meta47710){
return (new sberweb.login.t_sberweb$login47709(input_schema47701__$1,owner__$1,output_schema47700__$1,data__$1,input_checker47702__$1,output_checker47703__$1,validate__37909__auto____$1,G__47704__$1,G__47705__$1,ufv____$1,login_page_view__$1,meta47710));
});})(validate__37909__auto__,ufv___47715,output_schema47700_47716,input_schema47701_47717,input_checker47702_47718,output_checker47703_47719))
;

}

return (new sberweb.login.t_sberweb$login47709(input_schema47701_47717,owner,output_schema47700_47716,data,input_checker47702_47718,output_checker47703_47719,validate__37909__auto__,G__47704,G__47705,ufv___47715,sberweb$login$login_page_view,null));
break;
}
})();
if(cljs.core.truth_(validate__37909__auto__)){
var temp__4657__auto___47723 = output_checker47703_47719.call(null,o__37912__auto__);
if(cljs.core.truth_(temp__4657__auto___47723)){
var error__37911__auto___47724 = temp__4657__auto___47723;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"login-page-view","login-page-view",1666816510,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__37911__auto___47724)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema47700_47716,new cljs.core.Keyword(null,"value","value",305978217),o__37912__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37911__auto___47724], null));
} else {
}
} else {
}

return o__37912__auto__;
});})(ufv___47715,output_schema47700_47716,input_schema47701_47717,input_checker47702_47718,output_checker47703_47719))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,sberweb.login.login_page_view),schema.core.make_fn_schema.call(null,output_schema47700_47716,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema47701_47717], null)));

sberweb.login.__GT_login_page_view = (function sberweb$login$__GT_login_page_view(var_args){
var args47712 = [];
var len__25947__auto___47725 = arguments.length;
var i__25948__auto___47726 = (0);
while(true){
if((i__25948__auto___47726 < len__25947__auto___47725)){
args47712.push((arguments[i__25948__auto___47726]));

var G__47727 = (i__25948__auto___47726 + (1));
i__25948__auto___47726 = G__47727;
continue;
} else {
}
break;
}

var G__47714 = args47712.length;
switch (G__47714) {
case 1:
return sberweb.login.__GT_login_page_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sberweb.login.__GT_login_page_view.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47712.length)].join('')));

}
});

sberweb.login.__GT_login_page_view.cljs$core$IFn$_invoke$arity$1 = (function (cursor__41613__auto__){
return om.core.build.call(null,sberweb.login.login_page_view,cursor__41613__auto__);
});

sberweb.login.__GT_login_page_view.cljs$core$IFn$_invoke$arity$2 = (function (cursor__41613__auto__,m47699){
return om.core.build.call(null,sberweb.login.login_page_view,cursor__41613__auto__,m47699);
});

sberweb.login.__GT_login_page_view.cljs$lang$maxFixedArity = 2;

if(typeof sberweb.login.website_view !== 'undefined'){
} else {
sberweb.login.website_view = (function (){var method_table__25797__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25798__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25799__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25800__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25801__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"sberweb.login","website-view"),((function (method_table__25797__auto__,prefer_table__25798__auto__,method_cache__25799__auto__,cached_hierarchy__25800__auto__,hierarchy__25801__auto__){
return (function (data,_){
return new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,data,null))?cljs.core.deref.call(null,sberweb.core.app_state):cljs.core.deref.call(null,data)));
});})(method_table__25797__auto__,prefer_table__25798__auto__,method_cache__25799__auto__,cached_hierarchy__25800__auto__,hierarchy__25801__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25801__auto__,method_table__25797__auto__,prefer_table__25798__auto__,method_cache__25799__auto__,cached_hierarchy__25800__auto__));
})();
}
cljs.core._add_method.call(null,sberweb.login.website_view,(0),(function (data,owner){
return sberweb.login.login_page_view.call(null,data,owner);
}));
cljs.core._add_method.call(null,sberweb.login.website_view,(1),(function (data,owner){
return sberweb.login.login_page_view.call(null,data,owner);
}));
var action__41717__auto___47735 = (function (params__41718__auto__){
if(cljs.core.map_QMARK_.call(null,params__41718__auto__)){
var map__47729 = params__41718__auto__;
var map__47729__$1 = ((((!((map__47729 == null)))?((((map__47729.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47729.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47729):map__47729);
return om.core.root.call(null,sberweb.login.login_page_view,sberweb.login.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__41718__auto__)){
var vec__47731 = params__41718__auto__;
return om.core.root.call(null,sberweb.login.login_page_view,sberweb.login.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/login",action__41717__auto___47735);

sberweb.login.login_page = ((function (action__41717__auto___47735){
return (function sberweb$login$login_page(var_args){
var args__25954__auto__ = [];
var len__25947__auto___47736 = arguments.length;
var i__25948__auto___47737 = (0);
while(true){
if((i__25948__auto___47737 < len__25947__auto___47736)){
args__25954__auto__.push((arguments[i__25948__auto___47737]));

var G__47738 = (i__25948__auto___47737 + (1));
i__25948__auto___47737 = G__47738;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return sberweb.login.login_page.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});})(action__41717__auto___47735))
;

sberweb.login.login_page.cljs$core$IFn$_invoke$arity$variadic = ((function (action__41717__auto___47735){
return (function (args__41716__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/login",args__41716__auto__);
});})(action__41717__auto___47735))
;

sberweb.login.login_page.cljs$lang$maxFixedArity = (0);

sberweb.login.login_page.cljs$lang$applyTo = ((function (action__41717__auto___47735){
return (function (seq47734){
return sberweb.login.login_page.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47734));
});})(action__41717__auto___47735))
;

sberweb.login.main = (function sberweb$login$main(){
return document.location = "#/login";
});
sberweb.login.main.call(null);

//# sourceMappingURL=login.js.map?rel=1486365145694