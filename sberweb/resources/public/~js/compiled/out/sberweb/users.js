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
sberweb.users.error_handler = (function sberweb$users$error_handler(p__46434){
var map__46437 = p__46434;
var map__46437__$1 = ((((!((map__46437 == null)))?((((map__46437.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46437.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46437):map__46437);
var status = cljs.core.get.call(null,map__46437__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__46437__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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

var ufv___46455 = schema.utils.use_fn_validation;
var output_schema46440_46456 = schema.core.Any;
var input_schema46441_46457 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker46442_46458 = schema.core.checker.call(null,input_schema46441_46457);
var output_checker46443_46459 = schema.core.checker.call(null,output_schema46440_46456);
/**
 * Inputs: [data owner]
 */
sberweb.users.showusers_view = ((function (ufv___46455,output_schema46440_46456,input_schema46441_46457,input_checker46442_46458,output_checker46443_46459){
return (function sberweb$users$showusers_view(G__46444,G__46445){
var validate__37909__auto__ = ufv___46455.get_cell();
if(cljs.core.truth_(validate__37909__auto__)){
var args__37910__auto___46460 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__46444,G__46445], null);
var temp__4657__auto___46461 = input_checker46442_46458.call(null,args__37910__auto___46460);
if(cljs.core.truth_(temp__4657__auto___46461)){
var error__37911__auto___46462 = temp__4657__auto___46461;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"showusers-view","showusers-view",2067057673,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__37911__auto___46462)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema46441_46457,new cljs.core.Keyword(null,"value","value",305978217),args__37910__auto___46460,new cljs.core.Keyword(null,"error","error",-978969032),error__37911__auto___46462], null));
} else {
}
} else {
}

var o__37912__auto__ = (function (){var data = G__46444;
var owner = G__46445;
while(true){
if(typeof sberweb.users.t_sberweb$users46449 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
sberweb.users.t_sberweb$users46449 = (function (G__46445,owner,data,output_schema46440,showusers_view,G__46444,validate__37909__auto__,input_checker46442,input_schema46441,output_checker46443,ufv__,meta46450){
this.G__46445 = G__46445;
this.owner = owner;
this.data = data;
this.output_schema46440 = output_schema46440;
this.showusers_view = showusers_view;
this.G__46444 = G__46444;
this.validate__37909__auto__ = validate__37909__auto__;
this.input_checker46442 = input_checker46442;
this.input_schema46441 = input_schema46441;
this.output_checker46443 = output_checker46443;
this.ufv__ = ufv__;
this.meta46450 = meta46450;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
sberweb.users.t_sberweb$users46449.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__37909__auto__,ufv___46455,output_schema46440_46456,input_schema46441_46457,input_checker46442_46458,output_checker46443_46459){
return (function (_46451,meta46450__$1){
var self__ = this;
var _46451__$1 = this;
return (new sberweb.users.t_sberweb$users46449(self__.G__46445,self__.owner,self__.data,self__.output_schema46440,self__.showusers_view,self__.G__46444,self__.validate__37909__auto__,self__.input_checker46442,self__.input_schema46441,self__.output_checker46443,self__.ufv__,meta46450__$1));
});})(validate__37909__auto__,ufv___46455,output_schema46440_46456,input_schema46441_46457,input_checker46442_46458,output_checker46443_46459))
;

sberweb.users.t_sberweb$users46449.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__37909__auto__,ufv___46455,output_schema46440_46456,input_schema46441_46457,input_checker46442_46458,output_checker46443_46459){
return (function (_46451){
var self__ = this;
var _46451__$1 = this;
return self__.meta46450;
});})(validate__37909__auto__,ufv___46455,output_schema46440_46456,input_schema46441_46457,input_checker46442_46458,output_checker46443_46459))
;

sberweb.users.t_sberweb$users46449.prototype.om$core$IDisplayName$ = true;

sberweb.users.t_sberweb$users46449.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__37909__auto__,ufv___46455,output_schema46440_46456,input_schema46441_46457,input_checker46442_46458,output_checker46443_46459){
return (function (_){
var self__ = this;
var ___$1 = this;
return "showusers-view";
});})(validate__37909__auto__,ufv___46455,output_schema46440_46456,input_schema46441_46457,input_checker46442_46458,output_checker46443_46459))
;

sberweb.users.t_sberweb$users46449.prototype.om$core$IRender$ = true;

sberweb.users.t_sberweb$users46449.prototype.om$core$IRender$render$arity$1 = ((function (validate__37909__auto__,ufv___46455,output_schema46440_46456,input_schema46441_46457,input_checker46442_46458,output_checker46443_46459){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,React.DOM.div,{"className": "list-group", "style": {"display": "block"}},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.map.call(null,((function (___$1,validate__37909__auto__,ufv___46455,output_schema46440_46456,input_schema46441_46457,input_checker46442_46458,output_checker46443_46459){
return (function (item){
return om_tools.dom.element.call(null,React.DOM.span,cljs.core.apply.call(null,React.DOM.a,{"className": "list-group-item", "href": om_tools.dom.format_opts.call(null,[cljs.core.str("#/userdetail/"),cljs.core.str(new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(item))].join(''))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.h4({"className": "list-group-item-heading", "dangerouslySetInnerHTML": {"__html": new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(item)}},null),cljs.core.apply.call(null,React.DOM.h6,{"className": "paddingleft2"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.get.call(null,item,"senddate")],null))))],null)))),cljs.core.PersistentVector.EMPTY);
});})(___$1,validate__37909__auto__,ufv___46455,output_schema46440_46456,input_schema46441_46457,input_checker46442_46458,output_checker46443_46459))
,cljs.core.sort.call(null,cljs.core.comp.call(null,sberweb.users.comp_users),new cljs.core.Keyword(null,"users","users",-713552705).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.core.app_state))))],null))));
});})(validate__37909__auto__,ufv___46455,output_schema46440_46456,input_schema46441_46457,input_checker46442_46458,output_checker46443_46459))
;

sberweb.users.t_sberweb$users46449.getBasis = ((function (validate__37909__auto__,ufv___46455,output_schema46440_46456,input_schema46441_46457,input_checker46442_46458,output_checker46443_46459){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"G__46445","G__46445",1465565760,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"output-schema46440","output-schema46440",1513599175,null),cljs.core.with_meta(new cljs.core.Symbol(null,"showusers-view","showusers-view",2067057673,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))], null))),new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("schema.core","make-fn-schema","schema.core/make-fn-schema",152735578,null),new cljs.core.Symbol(null,"output-schema46440","output-schema46440",1513599175,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"input-schema46441","input-schema46441",-348815432,null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Inputs: [data owner]",new cljs.core.Keyword(null,"raw-arglists","raw-arglists",-1511012109),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"G__46444","G__46444",128444362,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"validate__37909__auto__","validate__37909__auto__",-807220660,null),new cljs.core.Symbol(null,"input-checker46442","input-checker46442",-952912335,null),new cljs.core.Symbol(null,"input-schema46441","input-schema46441",-348815432,null),new cljs.core.Symbol(null,"output-checker46443","output-checker46443",-1908507301,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"meta46450","meta46450",1921113131,null)], null);
});})(validate__37909__auto__,ufv___46455,output_schema46440_46456,input_schema46441_46457,input_checker46442_46458,output_checker46443_46459))
;

sberweb.users.t_sberweb$users46449.cljs$lang$type = true;

sberweb.users.t_sberweb$users46449.cljs$lang$ctorStr = "sberweb.users/t_sberweb$users46449";

sberweb.users.t_sberweb$users46449.cljs$lang$ctorPrWriter = ((function (validate__37909__auto__,ufv___46455,output_schema46440_46456,input_schema46441_46457,input_checker46442_46458,output_checker46443_46459){
return (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"sberweb.users/t_sberweb$users46449");
});})(validate__37909__auto__,ufv___46455,output_schema46440_46456,input_schema46441_46457,input_checker46442_46458,output_checker46443_46459))
;

sberweb.users.__GT_t_sberweb$users46449 = ((function (validate__37909__auto__,ufv___46455,output_schema46440_46456,input_schema46441_46457,input_checker46442_46458,output_checker46443_46459){
return (function sberweb$users$showusers_view_$___GT_t_sberweb$users46449(G__46445__$1,owner__$1,data__$1,output_schema46440__$1,showusers_view__$1,G__46444__$1,validate__37909__auto____$1,input_checker46442__$1,input_schema46441__$1,output_checker46443__$1,ufv____$1,meta46450){
return (new sberweb.users.t_sberweb$users46449(G__46445__$1,owner__$1,data__$1,output_schema46440__$1,showusers_view__$1,G__46444__$1,validate__37909__auto____$1,input_checker46442__$1,input_schema46441__$1,output_checker46443__$1,ufv____$1,meta46450));
});})(validate__37909__auto__,ufv___46455,output_schema46440_46456,input_schema46441_46457,input_checker46442_46458,output_checker46443_46459))
;

}

return (new sberweb.users.t_sberweb$users46449(G__46445,owner,data,output_schema46440_46456,sberweb$users$showusers_view,G__46444,validate__37909__auto__,input_checker46442_46458,input_schema46441_46457,output_checker46443_46459,ufv___46455,null));
break;
}
})();
if(cljs.core.truth_(validate__37909__auto__)){
var temp__4657__auto___46463 = output_checker46443_46459.call(null,o__37912__auto__);
if(cljs.core.truth_(temp__4657__auto___46463)){
var error__37911__auto___46464 = temp__4657__auto___46463;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"showusers-view","showusers-view",2067057673,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__37911__auto___46464)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema46440_46456,new cljs.core.Keyword(null,"value","value",305978217),o__37912__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37911__auto___46464], null));
} else {
}
} else {
}

return o__37912__auto__;
});})(ufv___46455,output_schema46440_46456,input_schema46441_46457,input_checker46442_46458,output_checker46443_46459))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,sberweb.users.showusers_view),schema.core.make_fn_schema.call(null,output_schema46440_46456,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema46441_46457], null)));

sberweb.users.__GT_showusers_view = (function sberweb$users$__GT_showusers_view(var_args){
var args46452 = [];
var len__25947__auto___46465 = arguments.length;
var i__25948__auto___46466 = (0);
while(true){
if((i__25948__auto___46466 < len__25947__auto___46465)){
args46452.push((arguments[i__25948__auto___46466]));

var G__46467 = (i__25948__auto___46466 + (1));
i__25948__auto___46466 = G__46467;
continue;
} else {
}
break;
}

var G__46454 = args46452.length;
switch (G__46454) {
case 1:
return sberweb.users.__GT_showusers_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sberweb.users.__GT_showusers_view.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46452.length)].join('')));

}
});

sberweb.users.__GT_showusers_view.cljs$core$IFn$_invoke$arity$1 = (function (cursor__41613__auto__){
return om.core.build.call(null,sberweb.users.showusers_view,cursor__41613__auto__);
});

sberweb.users.__GT_showusers_view.cljs$core$IFn$_invoke$arity$2 = (function (cursor__41613__auto__,m46439){
return om.core.build.call(null,sberweb.users.showusers_view,cursor__41613__auto__,m46439);
});

sberweb.users.__GT_showusers_view.cljs$lang$maxFixedArity = 2;

sberweb.users.onMount = (function sberweb$users$onMount(data){
return cljs.core.swap_BANG_.call(null,sberweb.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current","current",-1088038603)], null),"Users");
});

var ufv___46485 = schema.utils.use_fn_validation;
var output_schema46470_46486 = schema.core.Any;
var input_schema46471_46487 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker46472_46488 = schema.core.checker.call(null,input_schema46471_46487);
var output_checker46473_46489 = schema.core.checker.call(null,output_schema46470_46486);
/**
 * Inputs: [data owner]
 */
sberweb.users.users_view = ((function (ufv___46485,output_schema46470_46486,input_schema46471_46487,input_checker46472_46488,output_checker46473_46489){
return (function sberweb$users$users_view(G__46474,G__46475){
var validate__37909__auto__ = ufv___46485.get_cell();
if(cljs.core.truth_(validate__37909__auto__)){
var args__37910__auto___46490 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__46474,G__46475], null);
var temp__4657__auto___46491 = input_checker46472_46488.call(null,args__37910__auto___46490);
if(cljs.core.truth_(temp__4657__auto___46491)){
var error__37911__auto___46492 = temp__4657__auto___46491;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"users-view","users-view",2008055244,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__37911__auto___46492)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema46471_46487,new cljs.core.Keyword(null,"value","value",305978217),args__37910__auto___46490,new cljs.core.Keyword(null,"error","error",-978969032),error__37911__auto___46492], null));
} else {
}
} else {
}

var o__37912__auto__ = (function (){var data = G__46474;
var owner = G__46475;
while(true){
if(typeof sberweb.users.t_sberweb$users46479 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
sberweb.users.t_sberweb$users46479 = (function (owner,data,users_view,validate__37909__auto__,input_checker46472,G__46475,input_schema46471,output_schema46470,output_checker46473,G__46474,ufv__,meta46480){
this.owner = owner;
this.data = data;
this.users_view = users_view;
this.validate__37909__auto__ = validate__37909__auto__;
this.input_checker46472 = input_checker46472;
this.G__46475 = G__46475;
this.input_schema46471 = input_schema46471;
this.output_schema46470 = output_schema46470;
this.output_checker46473 = output_checker46473;
this.G__46474 = G__46474;
this.ufv__ = ufv__;
this.meta46480 = meta46480;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
sberweb.users.t_sberweb$users46479.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__37909__auto__,ufv___46485,output_schema46470_46486,input_schema46471_46487,input_checker46472_46488,output_checker46473_46489){
return (function (_46481,meta46480__$1){
var self__ = this;
var _46481__$1 = this;
return (new sberweb.users.t_sberweb$users46479(self__.owner,self__.data,self__.users_view,self__.validate__37909__auto__,self__.input_checker46472,self__.G__46475,self__.input_schema46471,self__.output_schema46470,self__.output_checker46473,self__.G__46474,self__.ufv__,meta46480__$1));
});})(validate__37909__auto__,ufv___46485,output_schema46470_46486,input_schema46471_46487,input_checker46472_46488,output_checker46473_46489))
;

sberweb.users.t_sberweb$users46479.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__37909__auto__,ufv___46485,output_schema46470_46486,input_schema46471_46487,input_checker46472_46488,output_checker46473_46489){
return (function (_46481){
var self__ = this;
var _46481__$1 = this;
return self__.meta46480;
});})(validate__37909__auto__,ufv___46485,output_schema46470_46486,input_schema46471_46487,input_checker46472_46488,output_checker46473_46489))
;

sberweb.users.t_sberweb$users46479.prototype.om$core$IDisplayName$ = true;

sberweb.users.t_sberweb$users46479.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__37909__auto__,ufv___46485,output_schema46470_46486,input_schema46471_46487,input_checker46472_46488,output_checker46473_46489){
return (function (_){
var self__ = this;
var ___$1 = this;
return "users-view";
});})(validate__37909__auto__,ufv___46485,output_schema46470_46486,input_schema46471_46487,input_checker46472_46488,output_checker46473_46489))
;

sberweb.users.t_sberweb$users46479.prototype.om$core$IWillMount$ = true;

sberweb.users.t_sberweb$users46479.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (validate__37909__auto__,ufv___46485,output_schema46470_46486,input_schema46471_46487,input_checker46472_46488,output_checker46473_46489){
return (function (_){
var self__ = this;
var ___$1 = this;
return sberweb.users.onMount.call(null,self__.data);
});})(validate__37909__auto__,ufv___46485,output_schema46470_46486,input_schema46471_46487,input_checker46472_46488,output_checker46473_46489))
;

sberweb.users.t_sberweb$users46479.prototype.om$core$IRender$ = true;

sberweb.users.t_sberweb$users46479.prototype.om$core$IRender$render$arity$1 = ((function (validate__37909__auto__,ufv___46485,output_schema46470_46486,input_schema46471_46487,input_checker46472_46488,output_checker46473_46489){
return (function (_){
var self__ = this;
var ___$1 = this;
var style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"10px",new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),"0px"], null)], null);
var styleprimary = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"70px"], null)], null);
return om_tools.dom.element.call(null,React.DOM.div,om.core.build.call(null,sberweb.core.website_view,sberweb.core.app_state,cljs.core.PersistentArrayMap.EMPTY),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.div,cljs.core.assoc.call(null,styleprimary,new cljs.core.Keyword(null,"className","className",-1983287057),"panel panel-primary"),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.button.button.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"btn btn-primary",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (style,styleprimary,___$1,validate__37909__auto__,ufv___46485,output_schema46470_46486,input_schema46471_46487,input_checker46472_46488,output_checker46473_46489){
return (function (e){
return document.location = "#/userdetail";
});})(style,styleprimary,___$1,validate__37909__auto__,ufv___46485,output_schema46470_46486,input_schema46471_46487,input_checker46472_46488,output_checker46473_46489))
], null),"Add New"),cljs.core.PersistentVector.EMPTY),om.core.build.call(null,sberweb.users.showusers_view,self__.data,cljs.core.PersistentArrayMap.EMPTY)],null)))],null)));
});})(validate__37909__auto__,ufv___46485,output_schema46470_46486,input_schema46471_46487,input_checker46472_46488,output_checker46473_46489))
;

sberweb.users.t_sberweb$users46479.getBasis = ((function (validate__37909__auto__,ufv___46485,output_schema46470_46486,input_schema46471_46487,input_checker46472_46488,output_checker46473_46489){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"data","data",1407862150,null),cljs.core.with_meta(new cljs.core.Symbol(null,"users-view","users-view",2008055244,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))], null))),new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("schema.core","make-fn-schema","schema.core/make-fn-schema",152735578,null),new cljs.core.Symbol(null,"output-schema46470","output-schema46470",168249594,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"input-schema46471","input-schema46471",-1687596206,null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Inputs: [data owner]",new cljs.core.Keyword(null,"raw-arglists","raw-arglists",-1511012109),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"validate__37909__auto__","validate__37909__auto__",-807220660,null),new cljs.core.Symbol(null,"input-checker46472","input-checker46472",-784881171,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__46475","G__46475",1944634130,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"input-schema46471","input-schema46471",-1687596206,null),new cljs.core.Symbol(null,"output-schema46470","output-schema46470",168249594,null),new cljs.core.Symbol(null,"output-checker46473","output-checker46473",-824937062,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__46474","G__46474",-133055236,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"meta46480","meta46480",-1912775665,null)], null);
});})(validate__37909__auto__,ufv___46485,output_schema46470_46486,input_schema46471_46487,input_checker46472_46488,output_checker46473_46489))
;

sberweb.users.t_sberweb$users46479.cljs$lang$type = true;

sberweb.users.t_sberweb$users46479.cljs$lang$ctorStr = "sberweb.users/t_sberweb$users46479";

sberweb.users.t_sberweb$users46479.cljs$lang$ctorPrWriter = ((function (validate__37909__auto__,ufv___46485,output_schema46470_46486,input_schema46471_46487,input_checker46472_46488,output_checker46473_46489){
return (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"sberweb.users/t_sberweb$users46479");
});})(validate__37909__auto__,ufv___46485,output_schema46470_46486,input_schema46471_46487,input_checker46472_46488,output_checker46473_46489))
;

sberweb.users.__GT_t_sberweb$users46479 = ((function (validate__37909__auto__,ufv___46485,output_schema46470_46486,input_schema46471_46487,input_checker46472_46488,output_checker46473_46489){
return (function sberweb$users$users_view_$___GT_t_sberweb$users46479(owner__$1,data__$1,users_view__$1,validate__37909__auto____$1,input_checker46472__$1,G__46475__$1,input_schema46471__$1,output_schema46470__$1,output_checker46473__$1,G__46474__$1,ufv____$1,meta46480){
return (new sberweb.users.t_sberweb$users46479(owner__$1,data__$1,users_view__$1,validate__37909__auto____$1,input_checker46472__$1,G__46475__$1,input_schema46471__$1,output_schema46470__$1,output_checker46473__$1,G__46474__$1,ufv____$1,meta46480));
});})(validate__37909__auto__,ufv___46485,output_schema46470_46486,input_schema46471_46487,input_checker46472_46488,output_checker46473_46489))
;

}

return (new sberweb.users.t_sberweb$users46479(owner,data,sberweb$users$users_view,validate__37909__auto__,input_checker46472_46488,G__46475,input_schema46471_46487,output_schema46470_46486,output_checker46473_46489,G__46474,ufv___46485,null));
break;
}
})();
if(cljs.core.truth_(validate__37909__auto__)){
var temp__4657__auto___46493 = output_checker46473_46489.call(null,o__37912__auto__);
if(cljs.core.truth_(temp__4657__auto___46493)){
var error__37911__auto___46494 = temp__4657__auto___46493;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"users-view","users-view",2008055244,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__37911__auto___46494)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema46470_46486,new cljs.core.Keyword(null,"value","value",305978217),o__37912__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37911__auto___46494], null));
} else {
}
} else {
}

return o__37912__auto__;
});})(ufv___46485,output_schema46470_46486,input_schema46471_46487,input_checker46472_46488,output_checker46473_46489))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,sberweb.users.users_view),schema.core.make_fn_schema.call(null,output_schema46470_46486,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema46471_46487], null)));

sberweb.users.__GT_users_view = (function sberweb$users$__GT_users_view(var_args){
var args46482 = [];
var len__25947__auto___46495 = arguments.length;
var i__25948__auto___46496 = (0);
while(true){
if((i__25948__auto___46496 < len__25947__auto___46495)){
args46482.push((arguments[i__25948__auto___46496]));

var G__46497 = (i__25948__auto___46496 + (1));
i__25948__auto___46496 = G__46497;
continue;
} else {
}
break;
}

var G__46484 = args46482.length;
switch (G__46484) {
case 1:
return sberweb.users.__GT_users_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sberweb.users.__GT_users_view.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46482.length)].join('')));

}
});

sberweb.users.__GT_users_view.cljs$core$IFn$_invoke$arity$1 = (function (cursor__41613__auto__){
return om.core.build.call(null,sberweb.users.users_view,cursor__41613__auto__);
});

sberweb.users.__GT_users_view.cljs$core$IFn$_invoke$arity$2 = (function (cursor__41613__auto__,m46469){
return om.core.build.call(null,sberweb.users.users_view,cursor__41613__auto__,m46469);
});

sberweb.users.__GT_users_view.cljs$lang$maxFixedArity = 2;

var action__41717__auto___46505 = (function (params__41718__auto__){
if(cljs.core.map_QMARK_.call(null,params__41718__auto__)){
var map__46499 = params__41718__auto__;
var map__46499__$1 = ((((!((map__46499 == null)))?((((map__46499.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46499.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46499):map__46499);
return om.core.root.call(null,sberweb.users.users_view,sberweb.users.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__41718__auto__)){
var vec__46501 = params__41718__auto__;
return om.core.root.call(null,sberweb.users.users_view,sberweb.users.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/users",action__41717__auto___46505);

sberweb.users.users_page = ((function (action__41717__auto___46505){
return (function sberweb$users$users_page(var_args){
var args__25954__auto__ = [];
var len__25947__auto___46506 = arguments.length;
var i__25948__auto___46507 = (0);
while(true){
if((i__25948__auto___46507 < len__25947__auto___46506)){
args__25954__auto__.push((arguments[i__25948__auto___46507]));

var G__46508 = (i__25948__auto___46507 + (1));
i__25948__auto___46507 = G__46508;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return sberweb.users.users_page.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});})(action__41717__auto___46505))
;

sberweb.users.users_page.cljs$core$IFn$_invoke$arity$variadic = ((function (action__41717__auto___46505){
return (function (args__41716__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/users",args__41716__auto__);
});})(action__41717__auto___46505))
;

sberweb.users.users_page.cljs$lang$maxFixedArity = (0);

sberweb.users.users_page.cljs$lang$applyTo = ((function (action__41717__auto___46505){
return (function (seq46504){
return sberweb.users.users_page.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46504));
});})(action__41717__auto___46505))
;


//# sourceMappingURL=users.js.map?rel=1486364644130