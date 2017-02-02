// Compiled by ClojureScript 1.9.89 {}
goog.provide('sberweb.users');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('om_tools.dom');
goog.require('om_tools.core');
goog.require('sberweb.settings');
goog.require('sberweb.core');
goog.require('goog.History');
goog.require('om.core');
goog.require('secretary.core');
goog.require('om_bootstrap.button');
goog.require('net.unit8.tower');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof sberweb.users.app_state !== 'undefined'){
} else {
sberweb.users.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"users","users",-713552705),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"trips","trips",477933849),cljs.core.PersistentVector.EMPTY], null));
}
sberweb.users.OnGetUsers = (function sberweb$users$OnGetUsers(response){
cljs.core.swap_BANG_.call(null,sberweb.users.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"users","users",-713552705),cljs.core.get.call(null,response,"Users"));

return console.log(new cljs.core.Keyword(null,"users","users",-713552705).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.users.app_state)));
});
sberweb.users.error_handler = (function sberweb$users$error_handler(p__24168){
var map__24171 = p__24168;
var map__24171__$1 = ((((!((map__24171 == null)))?((((map__24171.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24171.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24171):map__24171);
var status = cljs.core.get.call(null,map__24171__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__24171__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return console.log([cljs.core.str("something bad happened: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
sberweb.users.getUsers = (function sberweb$users$getUsers(data){
return ajax.core.GET.call(null,[cljs.core.str(sberweb.settings.apipath),cljs.core.str("api/user")].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"handler","handler",-195596612),sberweb.users.OnGetUsers,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),sberweb.users.error_handler,new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json",new cljs.core.Keyword(null,"Authorization","Authorization",-1017527462),[cljs.core.str("Bearer "),cljs.core.str(new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.core.app_state)))))].join('')], null)], null));
});
sberweb.users.comp_users = (function sberweb$users$comp_users(user1,user2){
if((cljs.core.compare.call(null,new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(user1),new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(user2)) > (0))){
return false;
} else {
return true;
}
});

var ufv___24189 = schema.utils.use_fn_validation;
var output_schema24174_24190 = schema.core.Any;
var input_schema24175_24191 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker24176_24192 = schema.core.checker.call(null,input_schema24175_24191);
var output_checker24177_24193 = schema.core.checker.call(null,output_schema24174_24190);
/**
 * Inputs: [data owner]
 */
sberweb.users.showusers_view = ((function (ufv___24189,output_schema24174_24190,input_schema24175_24191,input_checker24176_24192,output_checker24177_24193){
return (function sberweb$users$showusers_view(G__24178,G__24179){
var validate__7824__auto__ = ufv___24189.get_cell();
if(cljs.core.truth_(validate__7824__auto__)){
var args__7825__auto___24194 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__24178,G__24179], null);
var temp__4657__auto___24195 = input_checker24176_24192.call(null,args__7825__auto___24194);
if(cljs.core.truth_(temp__4657__auto___24195)){
var error__7826__auto___24196 = temp__4657__auto___24195;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"showusers-view","showusers-view",2067057673,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__7826__auto___24196)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema24175_24191,new cljs.core.Keyword(null,"value","value",305978217),args__7825__auto___24194,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___24196], null));
} else {
}
} else {
}

var o__7827__auto__ = (function (){var data = G__24178;
var owner = G__24179;
while(true){
if(typeof sberweb.users.t_sberweb$users24183 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
sberweb.users.t_sberweb$users24183 = (function (output_schema24174,output_checker24177,G__24178,owner,data,G__24179,showusers_view,input_schema24175,validate__7824__auto__,input_checker24176,ufv__,meta24184){
this.output_schema24174 = output_schema24174;
this.output_checker24177 = output_checker24177;
this.G__24178 = G__24178;
this.owner = owner;
this.data = data;
this.G__24179 = G__24179;
this.showusers_view = showusers_view;
this.input_schema24175 = input_schema24175;
this.validate__7824__auto__ = validate__7824__auto__;
this.input_checker24176 = input_checker24176;
this.ufv__ = ufv__;
this.meta24184 = meta24184;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
sberweb.users.t_sberweb$users24183.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__7824__auto__,ufv___24189,output_schema24174_24190,input_schema24175_24191,input_checker24176_24192,output_checker24177_24193){
return (function (_24185,meta24184__$1){
var self__ = this;
var _24185__$1 = this;
return (new sberweb.users.t_sberweb$users24183(self__.output_schema24174,self__.output_checker24177,self__.G__24178,self__.owner,self__.data,self__.G__24179,self__.showusers_view,self__.input_schema24175,self__.validate__7824__auto__,self__.input_checker24176,self__.ufv__,meta24184__$1));
});})(validate__7824__auto__,ufv___24189,output_schema24174_24190,input_schema24175_24191,input_checker24176_24192,output_checker24177_24193))
;

sberweb.users.t_sberweb$users24183.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__7824__auto__,ufv___24189,output_schema24174_24190,input_schema24175_24191,input_checker24176_24192,output_checker24177_24193){
return (function (_24185){
var self__ = this;
var _24185__$1 = this;
return self__.meta24184;
});})(validate__7824__auto__,ufv___24189,output_schema24174_24190,input_schema24175_24191,input_checker24176_24192,output_checker24177_24193))
;

sberweb.users.t_sberweb$users24183.prototype.om$core$IDisplayName$ = true;

sberweb.users.t_sberweb$users24183.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__7824__auto__,ufv___24189,output_schema24174_24190,input_schema24175_24191,input_checker24176_24192,output_checker24177_24193){
return (function (_){
var self__ = this;
var ___$1 = this;
return "showusers-view";
});})(validate__7824__auto__,ufv___24189,output_schema24174_24190,input_schema24175_24191,input_checker24176_24192,output_checker24177_24193))
;

sberweb.users.t_sberweb$users24183.prototype.om$core$IRender$ = true;

sberweb.users.t_sberweb$users24183.prototype.om$core$IRender$render$arity$1 = ((function (validate__7824__auto__,ufv___24189,output_schema24174_24190,input_schema24175_24191,input_checker24176_24192,output_checker24177_24193){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,React.DOM.div,{"className": "list-group", "style": {"display": "block"}},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.map.call(null,((function (___$1,validate__7824__auto__,ufv___24189,output_schema24174_24190,input_schema24175_24191,input_checker24176_24192,output_checker24177_24193){
return (function (item){
return om_tools.dom.element.call(null,React.DOM.span,cljs.core.apply.call(null,React.DOM.a,{"className": "list-group-item", "href": om_tools.dom.format_opts.call(null,[cljs.core.str("#/userdetail/"),cljs.core.str(new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(item))].join(''))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.h4({"className": "list-group-item-heading", "dangerouslySetInnerHTML": {"__html": new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(item)}},null),cljs.core.apply.call(null,React.DOM.h6,{"className": "paddingleft2"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.get.call(null,item,"senddate")],null))))],null)))),cljs.core.PersistentVector.EMPTY);
});})(___$1,validate__7824__auto__,ufv___24189,output_schema24174_24190,input_schema24175_24191,input_checker24176_24192,output_checker24177_24193))
,cljs.core.sort.call(null,cljs.core.comp.call(null,sberweb.users.comp_users),new cljs.core.Keyword(null,"users","users",-713552705).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.core.app_state))))],null))));
});})(validate__7824__auto__,ufv___24189,output_schema24174_24190,input_schema24175_24191,input_checker24176_24192,output_checker24177_24193))
;

sberweb.users.t_sberweb$users24183.getBasis = ((function (validate__7824__auto__,ufv___24189,output_schema24174_24190,input_schema24175_24191,input_checker24176_24192,output_checker24177_24193){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"output-schema24174","output-schema24174",517038499,null),new cljs.core.Symbol(null,"output-checker24177","output-checker24177",-1801297021,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__24178","G__24178",-1870857820,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"data","data",1407862150,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__24179","G__24179",-437575866,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"showusers-view","showusers-view",2067057673,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))], null))),new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("schema.core","make-fn-schema","schema.core/make-fn-schema",152735578,null),new cljs.core.Symbol(null,"output-schema24174","output-schema24174",517038499,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"input-schema24175","input-schema24175",1040299983,null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Inputs: [data owner]",new cljs.core.Keyword(null,"raw-arglists","raw-arglists",-1511012109),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"input-schema24175","input-schema24175",1040299983,null),new cljs.core.Symbol(null,"validate__7824__auto__","validate__7824__auto__",1540215376,null),new cljs.core.Symbol(null,"input-checker24176","input-checker24176",-1039598377,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"meta24184","meta24184",-630214879,null)], null);
});})(validate__7824__auto__,ufv___24189,output_schema24174_24190,input_schema24175_24191,input_checker24176_24192,output_checker24177_24193))
;

sberweb.users.t_sberweb$users24183.cljs$lang$type = true;

sberweb.users.t_sberweb$users24183.cljs$lang$ctorStr = "sberweb.users/t_sberweb$users24183";

sberweb.users.t_sberweb$users24183.cljs$lang$ctorPrWriter = ((function (validate__7824__auto__,ufv___24189,output_schema24174_24190,input_schema24175_24191,input_checker24176_24192,output_checker24177_24193){
return (function (this__6857__auto__,writer__6858__auto__,opt__6859__auto__){
return cljs.core._write.call(null,writer__6858__auto__,"sberweb.users/t_sberweb$users24183");
});})(validate__7824__auto__,ufv___24189,output_schema24174_24190,input_schema24175_24191,input_checker24176_24192,output_checker24177_24193))
;

sberweb.users.__GT_t_sberweb$users24183 = ((function (validate__7824__auto__,ufv___24189,output_schema24174_24190,input_schema24175_24191,input_checker24176_24192,output_checker24177_24193){
return (function sberweb$users$showusers_view_$___GT_t_sberweb$users24183(output_schema24174__$1,output_checker24177__$1,G__24178__$1,owner__$1,data__$1,G__24179__$1,showusers_view__$1,input_schema24175__$1,validate__7824__auto____$1,input_checker24176__$1,ufv____$1,meta24184){
return (new sberweb.users.t_sberweb$users24183(output_schema24174__$1,output_checker24177__$1,G__24178__$1,owner__$1,data__$1,G__24179__$1,showusers_view__$1,input_schema24175__$1,validate__7824__auto____$1,input_checker24176__$1,ufv____$1,meta24184));
});})(validate__7824__auto__,ufv___24189,output_schema24174_24190,input_schema24175_24191,input_checker24176_24192,output_checker24177_24193))
;

}

return (new sberweb.users.t_sberweb$users24183(output_schema24174_24190,output_checker24177_24193,G__24178,owner,data,G__24179,sberweb$users$showusers_view,input_schema24175_24191,validate__7824__auto__,input_checker24176_24192,ufv___24189,null));
break;
}
})();
if(cljs.core.truth_(validate__7824__auto__)){
var temp__4657__auto___24197 = output_checker24177_24193.call(null,o__7827__auto__);
if(cljs.core.truth_(temp__4657__auto___24197)){
var error__7826__auto___24198 = temp__4657__auto___24197;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"showusers-view","showusers-view",2067057673,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__7826__auto___24198)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema24174_24190,new cljs.core.Keyword(null,"value","value",305978217),o__7827__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___24198], null));
} else {
}
} else {
}

return o__7827__auto__;
});})(ufv___24189,output_schema24174_24190,input_schema24175_24191,input_checker24176_24192,output_checker24177_24193))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,sberweb.users.showusers_view),schema.core.make_fn_schema.call(null,output_schema24174_24190,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema24175_24191], null)));

sberweb.users.__GT_showusers_view = (function sberweb$users$__GT_showusers_view(var_args){
var args24186 = [];
var len__7326__auto___24199 = arguments.length;
var i__7327__auto___24200 = (0);
while(true){
if((i__7327__auto___24200 < len__7326__auto___24199)){
args24186.push((arguments[i__7327__auto___24200]));

var G__24201 = (i__7327__auto___24200 + (1));
i__7327__auto___24200 = G__24201;
continue;
} else {
}
break;
}

var G__24188 = args24186.length;
switch (G__24188) {
case 1:
return sberweb.users.__GT_showusers_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sberweb.users.__GT_showusers_view.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24186.length)].join('')));

}
});

sberweb.users.__GT_showusers_view.cljs$core$IFn$_invoke$arity$1 = (function (cursor__21877__auto__){
return om.core.build.call(null,sberweb.users.showusers_view,cursor__21877__auto__);
});

sberweb.users.__GT_showusers_view.cljs$core$IFn$_invoke$arity$2 = (function (cursor__21877__auto__,m24173){
return om.core.build.call(null,sberweb.users.showusers_view,cursor__21877__auto__,m24173);
});

sberweb.users.__GT_showusers_view.cljs$lang$maxFixedArity = 2;

sberweb.users.onMount = (function sberweb$users$onMount(data){
return cljs.core.swap_BANG_.call(null,sberweb.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current","current",-1088038603)], null),"Users");
});

var ufv___24219 = schema.utils.use_fn_validation;
var output_schema24204_24220 = schema.core.Any;
var input_schema24205_24221 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker24206_24222 = schema.core.checker.call(null,input_schema24205_24221);
var output_checker24207_24223 = schema.core.checker.call(null,output_schema24204_24220);
/**
 * Inputs: [data owner]
 */
sberweb.users.users_view = ((function (ufv___24219,output_schema24204_24220,input_schema24205_24221,input_checker24206_24222,output_checker24207_24223){
return (function sberweb$users$users_view(G__24208,G__24209){
var validate__7824__auto__ = ufv___24219.get_cell();
if(cljs.core.truth_(validate__7824__auto__)){
var args__7825__auto___24224 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__24208,G__24209], null);
var temp__4657__auto___24225 = input_checker24206_24222.call(null,args__7825__auto___24224);
if(cljs.core.truth_(temp__4657__auto___24225)){
var error__7826__auto___24226 = temp__4657__auto___24225;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"users-view","users-view",2008055244,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__7826__auto___24226)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema24205_24221,new cljs.core.Keyword(null,"value","value",305978217),args__7825__auto___24224,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___24226], null));
} else {
}
} else {
}

var o__7827__auto__ = (function (){var data = G__24208;
var owner = G__24209;
while(true){
if(typeof sberweb.users.t_sberweb$users24213 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
sberweb.users.t_sberweb$users24213 = (function (owner,data,users_view,G__24209,input_checker24206,validate__7824__auto__,G__24208,output_checker24207,output_schema24204,ufv__,input_schema24205,meta24214){
this.owner = owner;
this.data = data;
this.users_view = users_view;
this.G__24209 = G__24209;
this.input_checker24206 = input_checker24206;
this.validate__7824__auto__ = validate__7824__auto__;
this.G__24208 = G__24208;
this.output_checker24207 = output_checker24207;
this.output_schema24204 = output_schema24204;
this.ufv__ = ufv__;
this.input_schema24205 = input_schema24205;
this.meta24214 = meta24214;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
sberweb.users.t_sberweb$users24213.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__7824__auto__,ufv___24219,output_schema24204_24220,input_schema24205_24221,input_checker24206_24222,output_checker24207_24223){
return (function (_24215,meta24214__$1){
var self__ = this;
var _24215__$1 = this;
return (new sberweb.users.t_sberweb$users24213(self__.owner,self__.data,self__.users_view,self__.G__24209,self__.input_checker24206,self__.validate__7824__auto__,self__.G__24208,self__.output_checker24207,self__.output_schema24204,self__.ufv__,self__.input_schema24205,meta24214__$1));
});})(validate__7824__auto__,ufv___24219,output_schema24204_24220,input_schema24205_24221,input_checker24206_24222,output_checker24207_24223))
;

sberweb.users.t_sberweb$users24213.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__7824__auto__,ufv___24219,output_schema24204_24220,input_schema24205_24221,input_checker24206_24222,output_checker24207_24223){
return (function (_24215){
var self__ = this;
var _24215__$1 = this;
return self__.meta24214;
});})(validate__7824__auto__,ufv___24219,output_schema24204_24220,input_schema24205_24221,input_checker24206_24222,output_checker24207_24223))
;

sberweb.users.t_sberweb$users24213.prototype.om$core$IDisplayName$ = true;

sberweb.users.t_sberweb$users24213.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__7824__auto__,ufv___24219,output_schema24204_24220,input_schema24205_24221,input_checker24206_24222,output_checker24207_24223){
return (function (_){
var self__ = this;
var ___$1 = this;
return "users-view";
});})(validate__7824__auto__,ufv___24219,output_schema24204_24220,input_schema24205_24221,input_checker24206_24222,output_checker24207_24223))
;

sberweb.users.t_sberweb$users24213.prototype.om$core$IWillMount$ = true;

sberweb.users.t_sberweb$users24213.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (validate__7824__auto__,ufv___24219,output_schema24204_24220,input_schema24205_24221,input_checker24206_24222,output_checker24207_24223){
return (function (_){
var self__ = this;
var ___$1 = this;
return sberweb.users.onMount.call(null,self__.data);
});})(validate__7824__auto__,ufv___24219,output_schema24204_24220,input_schema24205_24221,input_checker24206_24222,output_checker24207_24223))
;

sberweb.users.t_sberweb$users24213.prototype.om$core$IRender$ = true;

sberweb.users.t_sberweb$users24213.prototype.om$core$IRender$render$arity$1 = ((function (validate__7824__auto__,ufv___24219,output_schema24204_24220,input_schema24205_24221,input_checker24206_24222,output_checker24207_24223){
return (function (_){
var self__ = this;
var ___$1 = this;
var style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"10px",new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),"0px"], null)], null);
var styleprimary = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"70px"], null)], null);
return om_tools.dom.element.call(null,React.DOM.div,om.core.build.call(null,sberweb.core.website_view,sberweb.core.app_state,cljs.core.PersistentArrayMap.EMPTY),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.div,cljs.core.assoc.call(null,styleprimary,new cljs.core.Keyword(null,"className","className",-1983287057),"panel panel-primary"),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.button.button.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"btn btn-primary",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (style,styleprimary,___$1,validate__7824__auto__,ufv___24219,output_schema24204_24220,input_schema24205_24221,input_checker24206_24222,output_checker24207_24223){
return (function (e){
return document.location = "#/userdetail";
});})(style,styleprimary,___$1,validate__7824__auto__,ufv___24219,output_schema24204_24220,input_schema24205_24221,input_checker24206_24222,output_checker24207_24223))
], null),"Add New"),cljs.core.PersistentVector.EMPTY),om.core.build.call(null,sberweb.users.showusers_view,self__.data,cljs.core.PersistentArrayMap.EMPTY)],null)))],null)));
});})(validate__7824__auto__,ufv___24219,output_schema24204_24220,input_schema24205_24221,input_checker24206_24222,output_checker24207_24223))
;

sberweb.users.t_sberweb$users24213.getBasis = ((function (validate__7824__auto__,ufv___24219,output_schema24204_24220,input_schema24205_24221,input_checker24206_24222,output_checker24207_24223){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"data","data",1407862150,null),cljs.core.with_meta(new cljs.core.Symbol(null,"users-view","users-view",2008055244,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))], null))),new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("schema.core","make-fn-schema","schema.core/make-fn-schema",152735578,null),new cljs.core.Symbol(null,"output-schema24204","output-schema24204",310234710,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"input-schema24205","input-schema24205",1275254238,null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Inputs: [data owner]",new cljs.core.Keyword(null,"raw-arglists","raw-arglists",-1511012109),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"G__24209","G__24209",1369242669,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"input-checker24206","input-checker24206",-737904913,null),new cljs.core.Symbol(null,"validate__7824__auto__","validate__7824__auto__",1540215376,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__24208","G__24208",869076114,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"output-checker24207","output-checker24207",1882163922,null),new cljs.core.Symbol(null,"output-schema24204","output-schema24204",310234710,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"input-schema24205","input-schema24205",1275254238,null),new cljs.core.Symbol(null,"meta24214","meta24214",112762347,null)], null);
});})(validate__7824__auto__,ufv___24219,output_schema24204_24220,input_schema24205_24221,input_checker24206_24222,output_checker24207_24223))
;

sberweb.users.t_sberweb$users24213.cljs$lang$type = true;

sberweb.users.t_sberweb$users24213.cljs$lang$ctorStr = "sberweb.users/t_sberweb$users24213";

sberweb.users.t_sberweb$users24213.cljs$lang$ctorPrWriter = ((function (validate__7824__auto__,ufv___24219,output_schema24204_24220,input_schema24205_24221,input_checker24206_24222,output_checker24207_24223){
return (function (this__6857__auto__,writer__6858__auto__,opt__6859__auto__){
return cljs.core._write.call(null,writer__6858__auto__,"sberweb.users/t_sberweb$users24213");
});})(validate__7824__auto__,ufv___24219,output_schema24204_24220,input_schema24205_24221,input_checker24206_24222,output_checker24207_24223))
;

sberweb.users.__GT_t_sberweb$users24213 = ((function (validate__7824__auto__,ufv___24219,output_schema24204_24220,input_schema24205_24221,input_checker24206_24222,output_checker24207_24223){
return (function sberweb$users$users_view_$___GT_t_sberweb$users24213(owner__$1,data__$1,users_view__$1,G__24209__$1,input_checker24206__$1,validate__7824__auto____$1,G__24208__$1,output_checker24207__$1,output_schema24204__$1,ufv____$1,input_schema24205__$1,meta24214){
return (new sberweb.users.t_sberweb$users24213(owner__$1,data__$1,users_view__$1,G__24209__$1,input_checker24206__$1,validate__7824__auto____$1,G__24208__$1,output_checker24207__$1,output_schema24204__$1,ufv____$1,input_schema24205__$1,meta24214));
});})(validate__7824__auto__,ufv___24219,output_schema24204_24220,input_schema24205_24221,input_checker24206_24222,output_checker24207_24223))
;

}

return (new sberweb.users.t_sberweb$users24213(owner,data,sberweb$users$users_view,G__24209,input_checker24206_24222,validate__7824__auto__,G__24208,output_checker24207_24223,output_schema24204_24220,ufv___24219,input_schema24205_24221,null));
break;
}
})();
if(cljs.core.truth_(validate__7824__auto__)){
var temp__4657__auto___24227 = output_checker24207_24223.call(null,o__7827__auto__);
if(cljs.core.truth_(temp__4657__auto___24227)){
var error__7826__auto___24228 = temp__4657__auto___24227;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"users-view","users-view",2008055244,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__7826__auto___24228)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema24204_24220,new cljs.core.Keyword(null,"value","value",305978217),o__7827__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___24228], null));
} else {
}
} else {
}

return o__7827__auto__;
});})(ufv___24219,output_schema24204_24220,input_schema24205_24221,input_checker24206_24222,output_checker24207_24223))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,sberweb.users.users_view),schema.core.make_fn_schema.call(null,output_schema24204_24220,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema24205_24221], null)));

sberweb.users.__GT_users_view = (function sberweb$users$__GT_users_view(var_args){
var args24216 = [];
var len__7326__auto___24229 = arguments.length;
var i__7327__auto___24230 = (0);
while(true){
if((i__7327__auto___24230 < len__7326__auto___24229)){
args24216.push((arguments[i__7327__auto___24230]));

var G__24231 = (i__7327__auto___24230 + (1));
i__7327__auto___24230 = G__24231;
continue;
} else {
}
break;
}

var G__24218 = args24216.length;
switch (G__24218) {
case 1:
return sberweb.users.__GT_users_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sberweb.users.__GT_users_view.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24216.length)].join('')));

}
});

sberweb.users.__GT_users_view.cljs$core$IFn$_invoke$arity$1 = (function (cursor__21877__auto__){
return om.core.build.call(null,sberweb.users.users_view,cursor__21877__auto__);
});

sberweb.users.__GT_users_view.cljs$core$IFn$_invoke$arity$2 = (function (cursor__21877__auto__,m24203){
return om.core.build.call(null,sberweb.users.users_view,cursor__21877__auto__,m24203);
});

sberweb.users.__GT_users_view.cljs$lang$maxFixedArity = 2;

var action__22027__auto___24239 = (function (params__22028__auto__){
if(cljs.core.map_QMARK_.call(null,params__22028__auto__)){
var map__24233 = params__22028__auto__;
var map__24233__$1 = ((((!((map__24233 == null)))?((((map__24233.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24233.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24233):map__24233);
return om.core.root.call(null,sberweb.users.users_view,sberweb.users.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__22028__auto__)){
var vec__24235 = params__22028__auto__;
return om.core.root.call(null,sberweb.users.users_view,sberweb.users.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/users",action__22027__auto___24239);

sberweb.users.users_page = ((function (action__22027__auto___24239){
return (function sberweb$users$users_page(var_args){
var args__7333__auto__ = [];
var len__7326__auto___24240 = arguments.length;
var i__7327__auto___24241 = (0);
while(true){
if((i__7327__auto___24241 < len__7326__auto___24240)){
args__7333__auto__.push((arguments[i__7327__auto___24241]));

var G__24242 = (i__7327__auto___24241 + (1));
i__7327__auto___24241 = G__24242;
continue;
} else {
}
break;
}

var argseq__7334__auto__ = ((((0) < args__7333__auto__.length))?(new cljs.core.IndexedSeq(args__7333__auto__.slice((0)),(0),null)):null);
return sberweb.users.users_page.cljs$core$IFn$_invoke$arity$variadic(argseq__7334__auto__);
});})(action__22027__auto___24239))
;

sberweb.users.users_page.cljs$core$IFn$_invoke$arity$variadic = ((function (action__22027__auto___24239){
return (function (args__22026__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/users",args__22026__auto__);
});})(action__22027__auto___24239))
;

sberweb.users.users_page.cljs$lang$maxFixedArity = (0);

sberweb.users.users_page.cljs$lang$applyTo = ((function (action__22027__auto___24239){
return (function (seq24238){
return sberweb.users.users_page.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24238));
});})(action__22027__auto___24239))
;


//# sourceMappingURL=users.js.map?rel=1486035198624