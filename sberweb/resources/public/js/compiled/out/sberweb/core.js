// Compiled by ClojureScript 1.9.89 {}
goog.provide('sberweb.core');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('om_tools.dom');
goog.require('goog.history.EventType');
goog.require('om_tools.core');
goog.require('om.dom');
goog.require('sberweb.settings');
goog.require('goog.History');
goog.require('goog.events');
goog.require('om.core');
goog.require('secretary.core');
goog.require('om_bootstrap.button');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof sberweb.core.app_state !== 'undefined'){
} else {
sberweb.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello Chestnut!"], null));
}
sberweb.core.jquery = $;
sberweb.core.doLogout = (function sberweb$core$doLogout(data){
return cljs.core.swap_BANG_.call(null,sberweb.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814)], null),(0));
});
sberweb.core.goUsers = (function sberweb$core$goUsers(data){
return cljs.core.swap_BANG_.call(null,sberweb.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814)], null),(1));
});

var ufv___22874 = schema.utils.use_fn_validation;
var output_schema22859_22875 = schema.core.Any;
var input_schema22860_22876 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker22861_22877 = schema.core.checker.call(null,input_schema22860_22876);
var output_checker22862_22878 = schema.core.checker.call(null,output_schema22859_22875);
/**
 * Inputs: [_ _]
 */
sberweb.core.logout_view = ((function (ufv___22874,output_schema22859_22875,input_schema22860_22876,input_checker22861_22877,output_checker22862_22878){
return (function sberweb$core$logout_view(G__22863,G__22864){
var validate__7824__auto__ = ufv___22874.get_cell();
if(cljs.core.truth_(validate__7824__auto__)){
var args__7825__auto___22879 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22863,G__22864], null);
var temp__4657__auto___22880 = input_checker22861_22877.call(null,args__7825__auto___22879);
if(cljs.core.truth_(temp__4657__auto___22880)){
var error__7826__auto___22881 = temp__4657__auto___22880;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"logout-view","logout-view",-923812057,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__7826__auto___22881)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22860_22876,new cljs.core.Keyword(null,"value","value",305978217),args__7825__auto___22879,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___22881], null));
} else {
}
} else {
}

var o__7827__auto__ = (function (){var _ = G__22863;
var ___$1 = G__22864;
while(true){
if(typeof sberweb.core.t_sberweb$core22868 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
sberweb.core.t_sberweb$core22868 = (function (input_schema22860,logout_view,output_schema22859,_,validate__7824__auto__,G__22864,G__22863,output_checker22862,input_checker22861,ufv__,meta22869){
this.input_schema22860 = input_schema22860;
this.logout_view = logout_view;
this.output_schema22859 = output_schema22859;
this._ = _;
this.validate__7824__auto__ = validate__7824__auto__;
this.G__22864 = G__22864;
this.G__22863 = G__22863;
this.output_checker22862 = output_checker22862;
this.input_checker22861 = input_checker22861;
this.ufv__ = ufv__;
this.meta22869 = meta22869;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
sberweb.core.t_sberweb$core22868.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__7824__auto__,ufv___22874,output_schema22859_22875,input_schema22860_22876,input_checker22861_22877,output_checker22862_22878){
return (function (_22870,meta22869__$1){
var self__ = this;
var _22870__$1 = this;
return (new sberweb.core.t_sberweb$core22868(self__.input_schema22860,self__.logout_view,self__.output_schema22859,self__._,self__.validate__7824__auto__,self__.G__22864,self__.G__22863,self__.output_checker22862,self__.input_checker22861,self__.ufv__,meta22869__$1));
});})(validate__7824__auto__,ufv___22874,output_schema22859_22875,input_schema22860_22876,input_checker22861_22877,output_checker22862_22878))
;

sberweb.core.t_sberweb$core22868.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__7824__auto__,ufv___22874,output_schema22859_22875,input_schema22860_22876,input_checker22861_22877,output_checker22862_22878){
return (function (_22870){
var self__ = this;
var _22870__$1 = this;
return self__.meta22869;
});})(validate__7824__auto__,ufv___22874,output_schema22859_22875,input_schema22860_22876,input_checker22861_22877,output_checker22862_22878))
;

sberweb.core.t_sberweb$core22868.prototype.om$core$IDisplayName$ = true;

sberweb.core.t_sberweb$core22868.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__7824__auto__,ufv___22874,output_schema22859_22875,input_schema22860_22876,input_checker22861_22877,output_checker22862_22878){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return "logout-view";
});})(validate__7824__auto__,ufv___22874,output_schema22859_22875,input_schema22860_22876,input_checker22861_22877,output_checker22862_22878))
;

sberweb.core.t_sberweb$core22868.prototype.om$core$IRender$ = true;

sberweb.core.t_sberweb$core22868.prototype.om$core$IRender$render$arity$1 = ((function (validate__7824__auto__,ufv___22874,output_schema22859_22875,input_schema22860_22876,input_checker22861_22877,output_checker22862_22878){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"10px"], null)], null);
return om_tools.dom.element.call(null,React.DOM.div,style,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.a,cljs.core.assoc.call(null,style,new cljs.core.Keyword(null,"href","href",-793805698),"#/login"),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,["Login"],null)))],null)));
});})(validate__7824__auto__,ufv___22874,output_schema22859_22875,input_schema22860_22876,input_checker22861_22877,output_checker22862_22878))
;

sberweb.core.t_sberweb$core22868.getBasis = ((function (validate__7824__auto__,ufv___22874,output_schema22859_22875,input_schema22860_22876,input_checker22861_22877,output_checker22862_22878){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"input-schema22860","input-schema22860",-512342457,null),cljs.core.with_meta(new cljs.core.Symbol(null,"logout-view","logout-view",-923812057,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))], null))),new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("schema.core","make-fn-schema","schema.core/make-fn-schema",152735578,null),new cljs.core.Symbol(null,"output-schema22859","output-schema22859",-1922159705,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"input-schema22860","input-schema22860",-512342457,null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Inputs: [_ _]",new cljs.core.Keyword(null,"raw-arglists","raw-arglists",-1511012109),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)))], null)),new cljs.core.Symbol(null,"output-schema22859","output-schema22859",-1922159705,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"validate__7824__auto__","validate__7824__auto__",1540215376,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__22864","G__22864",-998821037,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"G__22863","G__22863",1338419892,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"output-checker22862","output-checker22862",222988501,null),new cljs.core.Symbol(null,"input-checker22861","input-checker22861",681673975,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"meta22869","meta22869",386955146,null)], null);
});})(validate__7824__auto__,ufv___22874,output_schema22859_22875,input_schema22860_22876,input_checker22861_22877,output_checker22862_22878))
;

sberweb.core.t_sberweb$core22868.cljs$lang$type = true;

sberweb.core.t_sberweb$core22868.cljs$lang$ctorStr = "sberweb.core/t_sberweb$core22868";

sberweb.core.t_sberweb$core22868.cljs$lang$ctorPrWriter = ((function (validate__7824__auto__,ufv___22874,output_schema22859_22875,input_schema22860_22876,input_checker22861_22877,output_checker22862_22878){
return (function (this__6857__auto__,writer__6858__auto__,opt__6859__auto__){
return cljs.core._write.call(null,writer__6858__auto__,"sberweb.core/t_sberweb$core22868");
});})(validate__7824__auto__,ufv___22874,output_schema22859_22875,input_schema22860_22876,input_checker22861_22877,output_checker22862_22878))
;

sberweb.core.__GT_t_sberweb$core22868 = ((function (validate__7824__auto__,ufv___22874,output_schema22859_22875,input_schema22860_22876,input_checker22861_22877,output_checker22862_22878){
return (function sberweb$core$logout_view_$___GT_t_sberweb$core22868(input_schema22860__$1,logout_view__$1,output_schema22859__$1,___$2,validate__7824__auto____$1,G__22864__$1,G__22863__$1,output_checker22862__$1,input_checker22861__$1,ufv____$1,meta22869){
return (new sberweb.core.t_sberweb$core22868(input_schema22860__$1,logout_view__$1,output_schema22859__$1,___$2,validate__7824__auto____$1,G__22864__$1,G__22863__$1,output_checker22862__$1,input_checker22861__$1,ufv____$1,meta22869));
});})(validate__7824__auto__,ufv___22874,output_schema22859_22875,input_schema22860_22876,input_checker22861_22877,output_checker22862_22878))
;

}

return (new sberweb.core.t_sberweb$core22868(input_schema22860_22876,sberweb$core$logout_view,output_schema22859_22875,___$1,validate__7824__auto__,G__22864,G__22863,output_checker22862_22878,input_checker22861_22877,ufv___22874,null));
break;
}
})();
if(cljs.core.truth_(validate__7824__auto__)){
var temp__4657__auto___22882 = output_checker22862_22878.call(null,o__7827__auto__);
if(cljs.core.truth_(temp__4657__auto___22882)){
var error__7826__auto___22883 = temp__4657__auto___22882;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"logout-view","logout-view",-923812057,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__7826__auto___22883)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22859_22875,new cljs.core.Keyword(null,"value","value",305978217),o__7827__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___22883], null));
} else {
}
} else {
}

return o__7827__auto__;
});})(ufv___22874,output_schema22859_22875,input_schema22860_22876,input_checker22861_22877,output_checker22862_22878))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,sberweb.core.logout_view),schema.core.make_fn_schema.call(null,output_schema22859_22875,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22860_22876], null)));

sberweb.core.__GT_logout_view = (function sberweb$core$__GT_logout_view(var_args){
var args22871 = [];
var len__7326__auto___22884 = arguments.length;
var i__7327__auto___22885 = (0);
while(true){
if((i__7327__auto___22885 < len__7326__auto___22884)){
args22871.push((arguments[i__7327__auto___22885]));

var G__22886 = (i__7327__auto___22885 + (1));
i__7327__auto___22885 = G__22886;
continue;
} else {
}
break;
}

var G__22873 = args22871.length;
switch (G__22873) {
case 1:
return sberweb.core.__GT_logout_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sberweb.core.__GT_logout_view.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22871.length)].join('')));

}
});

sberweb.core.__GT_logout_view.cljs$core$IFn$_invoke$arity$1 = (function (cursor__21877__auto__){
return om.core.build.call(null,sberweb.core.logout_view,cursor__21877__auto__);
});

sberweb.core.__GT_logout_view.cljs$core$IFn$_invoke$arity$2 = (function (cursor__21877__auto__,m22858){
return om.core.build.call(null,sberweb.core.logout_view,cursor__21877__auto__,m22858);
});

sberweb.core.__GT_logout_view.cljs$lang$maxFixedArity = 2;

sberweb.core.handle_change = (function sberweb$core$handle_change(e,owner){
return cljs.core.swap_BANG_.call(null,sberweb.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.keyword.call(null,e.target.id)], null),e.target.value);
});
sberweb.core.OnGetTrips = (function sberweb$core$OnGetTrips(response){
return cljs.core.swap_BANG_.call(null,sberweb.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,new cljs.core.Keyword(null,"selecteduser","selecteduser",-934523066).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.core.app_state))),new cljs.core.Keyword(null,"trips","trips",477933849)], null),response);
});
sberweb.core.error_handler = (function sberweb$core$error_handler(p__22888){
var map__22891 = p__22888;
var map__22891__$1 = ((((!((map__22891 == null)))?((((map__22891.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22891.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22891):map__22891);
var status = cljs.core.get.call(null,map__22891__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__22891__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return console.log([cljs.core.str("something bad happened: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
sberweb.core.getTrips = (function sberweb$core$getTrips(){
return ajax.core.GET.call(null,[cljs.core.str(sberweb.settings.apipath),cljs.core.str("api/trip?login="),cljs.core.str(new cljs.core.Keyword(null,"selecteduser","selecteduser",-934523066).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.core.app_state)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"handler","handler",-195596612),sberweb.core.OnGetTrips,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),sberweb.core.error_handler,new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json",new cljs.core.Keyword(null,"Authorization","Authorization",-1017527462),[cljs.core.str("Bearer "),cljs.core.str(new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.core.app_state))))].join('')], null)], null));
});
sberweb.core.onDropDownChange = (function sberweb$core$onDropDownChange(id,value){
cljs.core.swap_BANG_.call(null,sberweb.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selecteduser","selecteduser",-934523066)], null),value);

if((new cljs.core.Keyword(null,"trips","trips",477933849).cljs$core$IFn$_invoke$arity$1(cljs.core.keyword.call(null,value).call(null,cljs.core.deref.call(null,sberweb.core.app_state))) == null)){
return sberweb.core.getTrips.call(null);
} else {
return null;
}
});
sberweb.core.comp_users = (function sberweb$core$comp_users(user1,user2){
if((cljs.core.compare.call(null,new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(user1),new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(user2)) > (0))){
return false;
} else {
return true;
}
});
sberweb.core.buildUsersList = (function sberweb$core$buildUsersList(data,owner){
return cljs.core.map.call(null,(function (text){
return cljs.core.apply.call(null,om.dom.option,{"key": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(text)), "value": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(text)), "onChange": om_tools.dom.format_opts.call(null,(function (p1__22893_SHARP_){
return sberweb.core.handle_change.call(null,p1__22893_SHARP_,owner);
}))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(text)],null))));
}),cljs.core.sort.call(null,cljs.core.comp.call(null,sberweb.core.comp_users),new cljs.core.Keyword(null,"users","users",-713552705).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.core.app_state))));
});
sberweb.core.setUsersDropDown = (function sberweb$core$setUsersDropDown(){
sberweb.core.jquery.call(null,(function (){
return sberweb.core.jquery.call(null,"#users").selectpicker(cljs.core.PersistentArrayMap.EMPTY);
}));

return sberweb.core.jquery.call(null,(function (){
return sberweb.core.jquery.call(null,"#users").selectpicker("val",new cljs.core.Keyword(null,"selecteduser","selecteduser",-934523066).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.core.app_state))).on("change",(function (e){
return sberweb.core.onDropDownChange.call(null,e.target.id,e.target.value);
}));
}));
});
sberweb.core.onDidUpdate = (function sberweb$core$onDidUpdate(data){
console.log("Update Core happened");

return sberweb.core.setUsersDropDown.call(null);
});
sberweb.core.onMount = (function sberweb$core$onMount(data){
console.log("Mount core happened");

return sberweb.core.setUsersDropDown.call(null);
});

var ufv___22910 = schema.utils.use_fn_validation;
var output_schema22895_22911 = schema.core.Any;
var input_schema22896_22912 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker22897_22913 = schema.core.checker.call(null,input_schema22896_22912);
var output_checker22898_22914 = schema.core.checker.call(null,output_schema22895_22911);
/**
 * Inputs: [data owner]
 */
sberweb.core.users_navigation_view = ((function (ufv___22910,output_schema22895_22911,input_schema22896_22912,input_checker22897_22913,output_checker22898_22914){
return (function sberweb$core$users_navigation_view(G__22899,G__22900){
var validate__7824__auto__ = ufv___22910.get_cell();
if(cljs.core.truth_(validate__7824__auto__)){
var args__7825__auto___22915 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22899,G__22900], null);
var temp__4657__auto___22916 = input_checker22897_22913.call(null,args__7825__auto___22915);
if(cljs.core.truth_(temp__4657__auto___22916)){
var error__7826__auto___22917 = temp__4657__auto___22916;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"users-navigation-view","users-navigation-view",-19184075,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__7826__auto___22917)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22896_22912,new cljs.core.Keyword(null,"value","value",305978217),args__7825__auto___22915,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___22917], null));
} else {
}
} else {
}

var o__7827__auto__ = (function (){var data = G__22899;
var owner = G__22900;
while(true){
if(typeof sberweb.core.t_sberweb$core22904 !== 'undefined'){
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
sberweb.core.t_sberweb$core22904 = (function (owner,data,input_checker22897,input_schema22896,output_schema22895,validate__7824__auto__,output_checker22898,users_navigation_view,G__22899,G__22900,ufv__,meta22905){
this.owner = owner;
this.data = data;
this.input_checker22897 = input_checker22897;
this.input_schema22896 = input_schema22896;
this.output_schema22895 = output_schema22895;
this.validate__7824__auto__ = validate__7824__auto__;
this.output_checker22898 = output_checker22898;
this.users_navigation_view = users_navigation_view;
this.G__22899 = G__22899;
this.G__22900 = G__22900;
this.ufv__ = ufv__;
this.meta22905 = meta22905;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
sberweb.core.t_sberweb$core22904.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__7824__auto__,ufv___22910,output_schema22895_22911,input_schema22896_22912,input_checker22897_22913,output_checker22898_22914){
return (function (_22906,meta22905__$1){
var self__ = this;
var _22906__$1 = this;
return (new sberweb.core.t_sberweb$core22904(self__.owner,self__.data,self__.input_checker22897,self__.input_schema22896,self__.output_schema22895,self__.validate__7824__auto__,self__.output_checker22898,self__.users_navigation_view,self__.G__22899,self__.G__22900,self__.ufv__,meta22905__$1));
});})(validate__7824__auto__,ufv___22910,output_schema22895_22911,input_schema22896_22912,input_checker22897_22913,output_checker22898_22914))
;

sberweb.core.t_sberweb$core22904.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__7824__auto__,ufv___22910,output_schema22895_22911,input_schema22896_22912,input_checker22897_22913,output_checker22898_22914){
return (function (_22906){
var self__ = this;
var _22906__$1 = this;
return self__.meta22905;
});})(validate__7824__auto__,ufv___22910,output_schema22895_22911,input_schema22896_22912,input_checker22897_22913,output_checker22898_22914))
;

sberweb.core.t_sberweb$core22904.prototype.om$core$IDisplayName$ = true;

sberweb.core.t_sberweb$core22904.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__7824__auto__,ufv___22910,output_schema22895_22911,input_schema22896_22912,input_checker22897_22913,output_checker22898_22914){
return (function (_){
var self__ = this;
var ___$1 = this;
return "users-navigation-view";
});})(validate__7824__auto__,ufv___22910,output_schema22895_22911,input_schema22896_22912,input_checker22897_22913,output_checker22898_22914))
;

sberweb.core.t_sberweb$core22904.prototype.om$core$IDidMount$ = true;

sberweb.core.t_sberweb$core22904.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (validate__7824__auto__,ufv___22910,output_schema22895_22911,input_schema22896_22912,input_checker22897_22913,output_checker22898_22914){
return (function (_){
var self__ = this;
var ___$1 = this;
return sberweb.core.onMount.call(null,self__.data);
});})(validate__7824__auto__,ufv___22910,output_schema22895_22911,input_schema22896_22912,input_checker22897_22913,output_checker22898_22914))
;

sberweb.core.t_sberweb$core22904.prototype.om$core$IDidUpdate$ = true;

sberweb.core.t_sberweb$core22904.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (validate__7824__auto__,ufv___22910,output_schema22895_22911,input_schema22896_22912,input_checker22897_22913,output_checker22898_22914){
return (function (this$,prev_props,prev_state){
var self__ = this;
var this$__$1 = this;

return self__.data;
});})(validate__7824__auto__,ufv___22910,output_schema22895_22911,input_schema22896_22912,input_checker22897_22913,output_checker22898_22914))
;

sberweb.core.t_sberweb$core22904.prototype.om$core$IRender$ = true;

sberweb.core.t_sberweb$core22904.prototype.om$core$IRender$render$arity$1 = ((function (validate__7824__auto__,ufv___22910,output_schema22895_22911,input_schema22896_22912,input_checker22897_22913,output_checker22898_22914){
return (function (_){
var self__ = this;
var ___$1 = this;
var style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"10px",new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),"0px"], null)], null);
var stylehome = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"0px"], null)], null);
return cljs.core.apply.call(null,React.DOM.nav,{"className": "navbar navbar-default navbar-static-top", "role": "navigation"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "navbar-header"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.button,{"type": "button", "className": "navbar-toggle", "data-toggle": "collapse", "data-target": ".navbar-collapse"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.span({"className": "sr-only"},"Toggle navigation"),React.DOM.span({"className": "icon-bar"}),React.DOM.span({"className": "icon-bar"}),React.DOM.span({"className": "icon-bar"})],null)))),om_tools.dom.element.call(null,React.DOM.a,cljs.core.assoc.call(null,stylehome,new cljs.core.Keyword(null,"className","className",-1983287057),"navbar-brand"),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.span,{"id": "pageTitle"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.data))],null))))],null)))],null)))),React.DOM.ul({"className": "nav navbar-top-links navbar-right"})],null))));
});})(validate__7824__auto__,ufv___22910,output_schema22895_22911,input_schema22896_22912,input_checker22897_22913,output_checker22898_22914))
;

sberweb.core.t_sberweb$core22904.getBasis = ((function (validate__7824__auto__,ufv___22910,output_schema22895_22911,input_schema22896_22912,input_checker22897_22913,output_checker22898_22914){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"input-checker22897","input-checker22897",1024938406,null),new cljs.core.Symbol(null,"input-schema22896","input-schema22896",743929290,null),new cljs.core.Symbol(null,"output-schema22895","output-schema22895",-1797587250,null),new cljs.core.Symbol(null,"validate__7824__auto__","validate__7824__auto__",1540215376,null),new cljs.core.Symbol(null,"output-checker22898","output-checker22898",858571093,null),cljs.core.with_meta(new cljs.core.Symbol(null,"users-navigation-view","users-navigation-view",-19184075,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))], null))),new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("schema.core","make-fn-schema","schema.core/make-fn-schema",152735578,null),new cljs.core.Symbol(null,"output-schema22895","output-schema22895",-1797587250,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"input-schema22896","input-schema22896",743929290,null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Inputs: [data owner]",new cljs.core.Keyword(null,"raw-arglists","raw-arglists",-1511012109),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"G__22899","G__22899",1142271128,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"G__22900","G__22900",425964316,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"meta22905","meta22905",572823297,null)], null);
});})(validate__7824__auto__,ufv___22910,output_schema22895_22911,input_schema22896_22912,input_checker22897_22913,output_checker22898_22914))
;

sberweb.core.t_sberweb$core22904.cljs$lang$type = true;

sberweb.core.t_sberweb$core22904.cljs$lang$ctorStr = "sberweb.core/t_sberweb$core22904";

sberweb.core.t_sberweb$core22904.cljs$lang$ctorPrWriter = ((function (validate__7824__auto__,ufv___22910,output_schema22895_22911,input_schema22896_22912,input_checker22897_22913,output_checker22898_22914){
return (function (this__6857__auto__,writer__6858__auto__,opt__6859__auto__){
return cljs.core._write.call(null,writer__6858__auto__,"sberweb.core/t_sberweb$core22904");
});})(validate__7824__auto__,ufv___22910,output_schema22895_22911,input_schema22896_22912,input_checker22897_22913,output_checker22898_22914))
;

sberweb.core.__GT_t_sberweb$core22904 = ((function (validate__7824__auto__,ufv___22910,output_schema22895_22911,input_schema22896_22912,input_checker22897_22913,output_checker22898_22914){
return (function sberweb$core$users_navigation_view_$___GT_t_sberweb$core22904(owner__$1,data__$1,input_checker22897__$1,input_schema22896__$1,output_schema22895__$1,validate__7824__auto____$1,output_checker22898__$1,users_navigation_view__$1,G__22899__$1,G__22900__$1,ufv____$1,meta22905){
return (new sberweb.core.t_sberweb$core22904(owner__$1,data__$1,input_checker22897__$1,input_schema22896__$1,output_schema22895__$1,validate__7824__auto____$1,output_checker22898__$1,users_navigation_view__$1,G__22899__$1,G__22900__$1,ufv____$1,meta22905));
});})(validate__7824__auto__,ufv___22910,output_schema22895_22911,input_schema22896_22912,input_checker22897_22913,output_checker22898_22914))
;

}

return (new sberweb.core.t_sberweb$core22904(owner,data,input_checker22897_22913,input_schema22896_22912,output_schema22895_22911,validate__7824__auto__,output_checker22898_22914,sberweb$core$users_navigation_view,G__22899,G__22900,ufv___22910,null));
break;
}
})();
if(cljs.core.truth_(validate__7824__auto__)){
var temp__4657__auto___22918 = output_checker22898_22914.call(null,o__7827__auto__);
if(cljs.core.truth_(temp__4657__auto___22918)){
var error__7826__auto___22919 = temp__4657__auto___22918;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"users-navigation-view","users-navigation-view",-19184075,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__7826__auto___22919)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22895_22911,new cljs.core.Keyword(null,"value","value",305978217),o__7827__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___22919], null));
} else {
}
} else {
}

return o__7827__auto__;
});})(ufv___22910,output_schema22895_22911,input_schema22896_22912,input_checker22897_22913,output_checker22898_22914))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,sberweb.core.users_navigation_view),schema.core.make_fn_schema.call(null,output_schema22895_22911,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22896_22912], null)));

sberweb.core.__GT_users_navigation_view = (function sberweb$core$__GT_users_navigation_view(var_args){
var args22907 = [];
var len__7326__auto___22920 = arguments.length;
var i__7327__auto___22921 = (0);
while(true){
if((i__7327__auto___22921 < len__7326__auto___22920)){
args22907.push((arguments[i__7327__auto___22921]));

var G__22922 = (i__7327__auto___22921 + (1));
i__7327__auto___22921 = G__22922;
continue;
} else {
}
break;
}

var G__22909 = args22907.length;
switch (G__22909) {
case 1:
return sberweb.core.__GT_users_navigation_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sberweb.core.__GT_users_navigation_view.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22907.length)].join('')));

}
});

sberweb.core.__GT_users_navigation_view.cljs$core$IFn$_invoke$arity$1 = (function (cursor__21877__auto__){
return om.core.build.call(null,sberweb.core.users_navigation_view,cursor__21877__auto__);
});

sberweb.core.__GT_users_navigation_view.cljs$core$IFn$_invoke$arity$2 = (function (cursor__21877__auto__,m22894){
return om.core.build.call(null,sberweb.core.users_navigation_view,cursor__21877__auto__,m22894);
});

sberweb.core.__GT_users_navigation_view.cljs$lang$maxFixedArity = 2;

sberweb.core.handleChange = (function sberweb$core$handleChange(e){
return cljs.core.swap_BANG_.call(null,sberweb.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,e.nativeEvent.target.id)], null),e.nativeEvent.target.value);
});
sberweb.core.handleCheck = (function sberweb$core$handleCheck(e){
e.stopPropagation();

e.nativeEvent.stopImmediatePropagation();

return cljs.core.swap_BANG_.call(null,sberweb.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,e.nativeEvent.target.id)], null),e.nativeEvent.target.checked);
});
sberweb.core.printMonth = (function sberweb$core$printMonth(){
return window.print();
});

var ufv___22941 = schema.utils.use_fn_validation;
var output_schema22926_22942 = schema.core.Any;
var input_schema22927_22943 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker22928_22944 = schema.core.checker.call(null,input_schema22927_22943);
var output_checker22929_22945 = schema.core.checker.call(null,output_schema22926_22942);
/**
 * Inputs: [data owner]
 */
sberweb.core.trips_navigation_view = ((function (ufv___22941,output_schema22926_22942,input_schema22927_22943,input_checker22928_22944,output_checker22929_22945){
return (function sberweb$core$trips_navigation_view(G__22930,G__22931){
var validate__7824__auto__ = ufv___22941.get_cell();
if(cljs.core.truth_(validate__7824__auto__)){
var args__7825__auto___22946 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22930,G__22931], null);
var temp__4657__auto___22947 = input_checker22928_22944.call(null,args__7825__auto___22946);
if(cljs.core.truth_(temp__4657__auto___22947)){
var error__7826__auto___22948 = temp__4657__auto___22947;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"trips-navigation-view","trips-navigation-view",-1557877011,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__7826__auto___22948)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22927_22943,new cljs.core.Keyword(null,"value","value",305978217),args__7825__auto___22946,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___22948], null));
} else {
}
} else {
}

var o__7827__auto__ = (function (){var data = G__22930;
var owner = G__22931;
while(true){
if(typeof sberweb.core.t_sberweb$core22935 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
sberweb.core.t_sberweb$core22935 = (function (G__22931,owner,input_schema22927,data,trips_navigation_view,validate__7824__auto__,G__22930,output_checker22929,input_checker22928,output_schema22926,ufv__,meta22936){
this.G__22931 = G__22931;
this.owner = owner;
this.input_schema22927 = input_schema22927;
this.data = data;
this.trips_navigation_view = trips_navigation_view;
this.validate__7824__auto__ = validate__7824__auto__;
this.G__22930 = G__22930;
this.output_checker22929 = output_checker22929;
this.input_checker22928 = input_checker22928;
this.output_schema22926 = output_schema22926;
this.ufv__ = ufv__;
this.meta22936 = meta22936;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
sberweb.core.t_sberweb$core22935.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__7824__auto__,ufv___22941,output_schema22926_22942,input_schema22927_22943,input_checker22928_22944,output_checker22929_22945){
return (function (_22937,meta22936__$1){
var self__ = this;
var _22937__$1 = this;
return (new sberweb.core.t_sberweb$core22935(self__.G__22931,self__.owner,self__.input_schema22927,self__.data,self__.trips_navigation_view,self__.validate__7824__auto__,self__.G__22930,self__.output_checker22929,self__.input_checker22928,self__.output_schema22926,self__.ufv__,meta22936__$1));
});})(validate__7824__auto__,ufv___22941,output_schema22926_22942,input_schema22927_22943,input_checker22928_22944,output_checker22929_22945))
;

sberweb.core.t_sberweb$core22935.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__7824__auto__,ufv___22941,output_schema22926_22942,input_schema22927_22943,input_checker22928_22944,output_checker22929_22945){
return (function (_22937){
var self__ = this;
var _22937__$1 = this;
return self__.meta22936;
});})(validate__7824__auto__,ufv___22941,output_schema22926_22942,input_schema22927_22943,input_checker22928_22944,output_checker22929_22945))
;

sberweb.core.t_sberweb$core22935.prototype.om$core$IDisplayName$ = true;

sberweb.core.t_sberweb$core22935.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__7824__auto__,ufv___22941,output_schema22926_22942,input_schema22927_22943,input_checker22928_22944,output_checker22929_22945){
return (function (_){
var self__ = this;
var ___$1 = this;
return "trips-navigation-view";
});})(validate__7824__auto__,ufv___22941,output_schema22926_22942,input_schema22927_22943,input_checker22928_22944,output_checker22929_22945))
;

sberweb.core.t_sberweb$core22935.prototype.om$core$IRender$ = true;

sberweb.core.t_sberweb$core22935.prototype.om$core$IRender$render$arity$1 = ((function (validate__7824__auto__,ufv___22941,output_schema22926_22942,input_schema22927_22943,input_checker22928_22944,output_checker22929_22945){
return (function (_){
var self__ = this;
var ___$1 = this;
var style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"10px",new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),"0px"], null)], null);
var stylehome = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"10px"], null)], null);
return cljs.core.apply.call(null,React.DOM.nav,{"className": "navbar navbar-default navbar-fixed-top", "role": "navigation"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "navbar-header"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.button,{"type": "button", "className": "navbar-toggle", "data-toggle": "collapse", "data-target": ".navbar-ex1-collapse"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.span({"className": "sr-only"},"Toggle navigation"),React.DOM.span({"className": "icon-bar"}),React.DOM.span({"className": "icon-bar"}),React.DOM.span({"className": "icon-bar"})],null)))),om_tools.dom.element.call(null,React.DOM.a,cljs.core.assoc.call(null,stylehome,new cljs.core.Keyword(null,"className","className",-1983287057),"navbar-brand"),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.span,{"id": "pageTitle"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.data))],null))))],null)))],null)))),cljs.core.apply.call(null,React.DOM.div,{"className": "collapse navbar-collapse navbar-ex1-collapse", "id": "menu"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.ul,{"className": "nav navbar-nav", "style": {"paddingTop": "17px", "visibility": om_tools.dom.format_opts.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.core.app_state)),"Trips"))?"visible":"hidden"))}},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.li,cljs.core.apply.call(null,React.DOM.div,{"style": {"marginRight": "10px", "visibility": om_tools.dom.format_opts.call(null,(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.core.app_state)),"Trips")) && ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"role","role",-736691072).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.core.app_state))),"admin")) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"role","role",-736691072).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.core.app_state))),"admin"))))?"visible":"hidden"))}},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.dom.select.call(null,{"id": "users", "className": "selectpicker", "data-show-subtext": "true", "data-live-search": "true", "onChange": ((function (style,stylehome,___$1,validate__7824__auto__,ufv___22941,output_schema22926_22942,input_schema22927_22943,input_checker22928_22944,output_checker22929_22945){
return (function (p1__22924_SHARP_){
return sberweb.core.handle_change.call(null,p1__22924_SHARP_,self__.owner);
});})(style,stylehome,___$1,validate__7824__auto__,ufv___22941,output_schema22926_22942,input_schema22927_22943,input_checker22928_22944,output_checker22929_22945))
},sberweb.core.buildUsersList.call(null,self__.data,self__.owner))],null)))),cljs.core.PersistentVector.EMPTY),om_tools.dom.element.call(null,React.DOM.li,cljs.core.apply.call(null,React.DOM.h5,{"style": {"marginLeft": "5px", "marginRight": "5px", "height": "32px", "marginTop": "1px"}},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[" ",om.dom.input.call(null,{"id": "search", "type": "text", "placeholder": "Search", "style": {"height": "32px", "marginTop": "1px"}, "value": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"search","search",1564939822).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.core.app_state))), "onChange": om_tools.dom.format_opts.call(null,((function (style,stylehome,___$1,validate__7824__auto__,ufv___22941,output_schema22926_22942,input_schema22927_22943,input_checker22928_22944,output_checker22929_22945){
return (function (e){
return sberweb.core.handleChange.call(null,e);
});})(style,stylehome,___$1,validate__7824__auto__,ufv___22941,output_schema22926_22942,input_schema22927_22943,input_checker22928_22944,output_checker22929_22945))
)})],null)))),cljs.core.PersistentVector.EMPTY),om_tools.dom.element.call(null,React.DOM.li,cljs.core.apply.call(null,React.DOM.label,{"style": {"fontWeight": (100), "marginTop": "7px"}},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.dom.input.call(null,{"id": "ismonthly", "type": "checkbox", "defaultChecked": false, "onChange": om_tools.dom.format_opts.call(null,((function (style,stylehome,___$1,validate__7824__auto__,ufv___22941,output_schema22926_22942,input_schema22927_22943,input_checker22928_22944,output_checker22929_22945){
return (function (e){
return sberweb.core.handleCheck.call(null,e);
});})(style,stylehome,___$1,validate__7824__auto__,ufv___22941,output_schema22926_22942,input_schema22927_22943,input_checker22928_22944,output_checker22929_22945))
)}),"Select this month"],null)))),cljs.core.PersistentVector.EMPTY),cljs.core.apply.call(null,React.DOM.li,{"style": {"marginLeft": "5px"}},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_bootstrap.button.button.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"btn btn-info",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (style,stylehome,___$1,validate__7824__auto__,ufv___22941,output_schema22926_22942,input_schema22927_22943,input_checker22928_22944,output_checker22929_22945){
return (function (e){
return sberweb.core.printMonth.call(null);
});})(style,stylehome,___$1,validate__7824__auto__,ufv___22941,output_schema22926_22942,input_schema22927_22943,input_checker22928_22944,output_checker22929_22945))
], null),"Print trips")],null))))],null)))),cljs.core.apply.call(null,React.DOM.ul,{"className": "nav navbar-nav navbar-right"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.li,om_tools.dom.element.call(null,React.DOM.a,cljs.core.assoc.call(null,style,new cljs.core.Keyword(null,"href","href",-793805698),"#/trips"),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.span({"className": "glyphicon glyphicon-cog"}),"Trips"],null))),cljs.core.PersistentVector.EMPTY),cljs.core.apply.call(null,React.DOM.li,{"style": {"visibility": om_tools.dom.format_opts.call(null,(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"role","role",-736691072).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.core.app_state))),"admin")) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"role","role",-736691072).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.core.app_state))),"manager")))?"visible":"hidden"))}},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.a,cljs.core.assoc.call(null,style,new cljs.core.Keyword(null,"href","href",-793805698),"#/users"),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.span({"className": "glyphicon glyphicon-log-out"}),"Users"],null)))],null)))),om_tools.dom.element.call(null,React.DOM.li,om_tools.dom.element.call(null,React.DOM.a,cljs.core.assoc.call(null,style,new cljs.core.Keyword(null,"href","href",-793805698),"#/login"),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.i({"className": "fa fa-sign-out fa-fw"}),"Exit"],null))),cljs.core.PersistentVector.EMPTY)],null))))],null))))],null))));
});})(validate__7824__auto__,ufv___22941,output_schema22926_22942,input_schema22927_22943,input_checker22928_22944,output_checker22929_22945))
;

sberweb.core.t_sberweb$core22935.getBasis = ((function (validate__7824__auto__,ufv___22941,output_schema22926_22942,input_schema22927_22943,input_checker22928_22944,output_checker22929_22945){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"G__22931","G__22931",-2083237853,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"input-schema22927","input-schema22927",2020750981,null),new cljs.core.Symbol(null,"data","data",1407862150,null),cljs.core.with_meta(new cljs.core.Symbol(null,"trips-navigation-view","trips-navigation-view",-1557877011,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))], null))),new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("schema.core","make-fn-schema","schema.core/make-fn-schema",152735578,null),new cljs.core.Symbol(null,"output-schema22926","output-schema22926",-914307461,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"input-schema22927","input-schema22927",2020750981,null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Inputs: [data owner]",new cljs.core.Keyword(null,"raw-arglists","raw-arglists",-1511012109),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"validate__7824__auto__","validate__7824__auto__",1540215376,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__22930","G__22930",839281972,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"output-checker22929","output-checker22929",-428019212,null),new cljs.core.Symbol(null,"input-checker22928","input-checker22928",388752507,null),new cljs.core.Symbol(null,"output-schema22926","output-schema22926",-914307461,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"meta22936","meta22936",-1619969831,null)], null);
});})(validate__7824__auto__,ufv___22941,output_schema22926_22942,input_schema22927_22943,input_checker22928_22944,output_checker22929_22945))
;

sberweb.core.t_sberweb$core22935.cljs$lang$type = true;

sberweb.core.t_sberweb$core22935.cljs$lang$ctorStr = "sberweb.core/t_sberweb$core22935";

sberweb.core.t_sberweb$core22935.cljs$lang$ctorPrWriter = ((function (validate__7824__auto__,ufv___22941,output_schema22926_22942,input_schema22927_22943,input_checker22928_22944,output_checker22929_22945){
return (function (this__6857__auto__,writer__6858__auto__,opt__6859__auto__){
return cljs.core._write.call(null,writer__6858__auto__,"sberweb.core/t_sberweb$core22935");
});})(validate__7824__auto__,ufv___22941,output_schema22926_22942,input_schema22927_22943,input_checker22928_22944,output_checker22929_22945))
;

sberweb.core.__GT_t_sberweb$core22935 = ((function (validate__7824__auto__,ufv___22941,output_schema22926_22942,input_schema22927_22943,input_checker22928_22944,output_checker22929_22945){
return (function sberweb$core$trips_navigation_view_$___GT_t_sberweb$core22935(G__22931__$1,owner__$1,input_schema22927__$1,data__$1,trips_navigation_view__$1,validate__7824__auto____$1,G__22930__$1,output_checker22929__$1,input_checker22928__$1,output_schema22926__$1,ufv____$1,meta22936){
return (new sberweb.core.t_sberweb$core22935(G__22931__$1,owner__$1,input_schema22927__$1,data__$1,trips_navigation_view__$1,validate__7824__auto____$1,G__22930__$1,output_checker22929__$1,input_checker22928__$1,output_schema22926__$1,ufv____$1,meta22936));
});})(validate__7824__auto__,ufv___22941,output_schema22926_22942,input_schema22927_22943,input_checker22928_22944,output_checker22929_22945))
;

}

return (new sberweb.core.t_sberweb$core22935(G__22931,owner,input_schema22927_22943,data,sberweb$core$trips_navigation_view,validate__7824__auto__,G__22930,output_checker22929_22945,input_checker22928_22944,output_schema22926_22942,ufv___22941,null));
break;
}
})();
if(cljs.core.truth_(validate__7824__auto__)){
var temp__4657__auto___22949 = output_checker22929_22945.call(null,o__7827__auto__);
if(cljs.core.truth_(temp__4657__auto___22949)){
var error__7826__auto___22950 = temp__4657__auto___22949;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"trips-navigation-view","trips-navigation-view",-1557877011,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__7826__auto___22950)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22926_22942,new cljs.core.Keyword(null,"value","value",305978217),o__7827__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___22950], null));
} else {
}
} else {
}

return o__7827__auto__;
});})(ufv___22941,output_schema22926_22942,input_schema22927_22943,input_checker22928_22944,output_checker22929_22945))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,sberweb.core.trips_navigation_view),schema.core.make_fn_schema.call(null,output_schema22926_22942,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22927_22943], null)));

sberweb.core.__GT_trips_navigation_view = (function sberweb$core$__GT_trips_navigation_view(var_args){
var args22938 = [];
var len__7326__auto___22951 = arguments.length;
var i__7327__auto___22952 = (0);
while(true){
if((i__7327__auto___22952 < len__7326__auto___22951)){
args22938.push((arguments[i__7327__auto___22952]));

var G__22953 = (i__7327__auto___22952 + (1));
i__7327__auto___22952 = G__22953;
continue;
} else {
}
break;
}

var G__22940 = args22938.length;
switch (G__22940) {
case 1:
return sberweb.core.__GT_trips_navigation_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sberweb.core.__GT_trips_navigation_view.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22938.length)].join('')));

}
});

sberweb.core.__GT_trips_navigation_view.cljs$core$IFn$_invoke$arity$1 = (function (cursor__21877__auto__){
return om.core.build.call(null,sberweb.core.trips_navigation_view,cursor__21877__auto__);
});

sberweb.core.__GT_trips_navigation_view.cljs$core$IFn$_invoke$arity$2 = (function (cursor__21877__auto__,m22925){
return om.core.build.call(null,sberweb.core.trips_navigation_view,cursor__21877__auto__,m22925);
});

sberweb.core.__GT_trips_navigation_view.cljs$lang$maxFixedArity = 2;

if(typeof sberweb.core.website_view !== 'undefined'){
} else {
sberweb.core.website_view = (function (){var method_table__7176__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7177__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7178__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7179__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7180__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"sberweb.core","website-view"),((function (method_table__7176__auto__,prefer_table__7177__auto__,method_cache__7178__auto__,cached_hierarchy__7179__auto__,hierarchy__7180__auto__){
return (function (data,_){
return new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,data,null))?cljs.core.deref.call(null,sberweb.core.app_state):cljs.core.deref.call(null,data)));
});})(method_table__7176__auto__,prefer_table__7177__auto__,method_cache__7178__auto__,cached_hierarchy__7179__auto__,hierarchy__7180__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7180__auto__,method_table__7176__auto__,prefer_table__7177__auto__,method_cache__7178__auto__,cached_hierarchy__7179__auto__));
})();
}
cljs.core._add_method.call(null,sberweb.core.website_view,(0),(function (data,owner){
return sberweb.core.logout_view.call(null,data,owner);
}));
cljs.core._add_method.call(null,sberweb.core.website_view,(1),(function (data,owner){
return sberweb.core.trips_navigation_view.call(null,data,owner);
}));
cljs.core._add_method.call(null,sberweb.core.website_view,(2),(function (data,owner){
return sberweb.core.users_navigation_view.call(null,data,owner);
}));

//# sourceMappingURL=core.js.map?rel=1486035197530