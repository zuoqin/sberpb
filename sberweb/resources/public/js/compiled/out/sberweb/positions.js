// Compiled by ClojureScript 1.9.89 {}
goog.provide('sberweb.positions');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('om_tools.dom');
goog.require('om_tools.core');
goog.require('sberweb.settings');
goog.require('sberweb.core');
goog.require('cljs.core.async');
goog.require('cljs_time.coerce');
goog.require('goog.History');
goog.require('cljs_time.format');
goog.require('om.core');
goog.require('secretary.core');
goog.require('om_bootstrap.button');
goog.require('net.unit8.tower');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof sberweb.positions.app_state !== 'undefined'){
} else {
sberweb.positions.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"users","users",-713552705),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"trips","trips",477933849),cljs.core.PersistentVector.EMPTY], null));
}
sberweb.positions.custom_formatter = cljs_time.format.formatter.call(null,"dd/MM/yyyy");
sberweb.positions.custom_formatter1 = cljs_time.format.formatter.call(null,"MMM dd yyyy hh:mm:ss");
sberweb.positions.ch = cljs.core.async.chan.call(null,cljs.core.async.dropping_buffer.call(null,(2)));
sberweb.positions.OnGetPositions = (function sberweb$positions$OnGetPositions(response){
cljs.core.swap_BANG_.call(null,sberweb.positions.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"positions","positions",-1380538434),response);

sberweb.core.setUsersDropDown.call(null);

return console.log(new cljs.core.Keyword(null,"users","users",-713552705).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.positions.app_state)));
});
sberweb.positions.error_handler = (function sberweb$positions$error_handler(p__24015){
var map__24018 = p__24015;
var map__24018__$1 = ((((!((map__24018 == null)))?((((map__24018.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24018.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24018):map__24018);
var status = cljs.core.get.call(null,map__24018__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__24018__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return console.log([cljs.core.str("something bad happened: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
sberweb.positions.getPositions = (function sberweb$positions$getPositions(){
return sberweb.core.setUsersDropDown.call(null);

});

var ufv___24036 = schema.utils.use_fn_validation;
var output_schema24021_24037 = schema.core.Any;
var input_schema24022_24038 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker24023_24039 = schema.core.checker.call(null,input_schema24022_24038);
var output_checker24024_24040 = schema.core.checker.call(null,output_schema24021_24037);
/**
 * Inputs: [data owner]
 */
sberweb.positions.showpositions_view = ((function (ufv___24036,output_schema24021_24037,input_schema24022_24038,input_checker24023_24039,output_checker24024_24040){
return (function sberweb$positions$showpositions_view(G__24025,G__24026){
var validate__7824__auto__ = ufv___24036.get_cell();
if(cljs.core.truth_(validate__7824__auto__)){
var args__7825__auto___24041 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__24025,G__24026], null);
var temp__4657__auto___24042 = input_checker24023_24039.call(null,args__7825__auto___24041);
if(cljs.core.truth_(temp__4657__auto___24042)){
var error__7826__auto___24043 = temp__4657__auto___24042;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"showpositions-view","showpositions-view",35508492,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__7826__auto___24043)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema24022_24038,new cljs.core.Keyword(null,"value","value",305978217),args__7825__auto___24041,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___24043], null));
} else {
}
} else {
}

var o__7827__auto__ = (function (){var data = G__24025;
var owner = G__24026;
while(true){
if(typeof sberweb.positions.t_sberweb$positions24030 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
sberweb.positions.t_sberweb$positions24030 = (function (owner,data,output_schema24021,input_checker24023,G__24025,G__24026,output_checker24024,input_schema24022,showpositions_view,validate__7824__auto__,ufv__,meta24031){
this.owner = owner;
this.data = data;
this.output_schema24021 = output_schema24021;
this.input_checker24023 = input_checker24023;
this.G__24025 = G__24025;
this.G__24026 = G__24026;
this.output_checker24024 = output_checker24024;
this.input_schema24022 = input_schema24022;
this.showpositions_view = showpositions_view;
this.validate__7824__auto__ = validate__7824__auto__;
this.ufv__ = ufv__;
this.meta24031 = meta24031;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
sberweb.positions.t_sberweb$positions24030.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__7824__auto__,ufv___24036,output_schema24021_24037,input_schema24022_24038,input_checker24023_24039,output_checker24024_24040){
return (function (_24032,meta24031__$1){
var self__ = this;
var _24032__$1 = this;
return (new sberweb.positions.t_sberweb$positions24030(self__.owner,self__.data,self__.output_schema24021,self__.input_checker24023,self__.G__24025,self__.G__24026,self__.output_checker24024,self__.input_schema24022,self__.showpositions_view,self__.validate__7824__auto__,self__.ufv__,meta24031__$1));
});})(validate__7824__auto__,ufv___24036,output_schema24021_24037,input_schema24022_24038,input_checker24023_24039,output_checker24024_24040))
;

sberweb.positions.t_sberweb$positions24030.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__7824__auto__,ufv___24036,output_schema24021_24037,input_schema24022_24038,input_checker24023_24039,output_checker24024_24040){
return (function (_24032){
var self__ = this;
var _24032__$1 = this;
return self__.meta24031;
});})(validate__7824__auto__,ufv___24036,output_schema24021_24037,input_schema24022_24038,input_checker24023_24039,output_checker24024_24040))
;

sberweb.positions.t_sberweb$positions24030.prototype.om$core$IDisplayName$ = true;

sberweb.positions.t_sberweb$positions24030.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__7824__auto__,ufv___24036,output_schema24021_24037,input_schema24022_24038,input_checker24023_24039,output_checker24024_24040){
return (function (_){
var self__ = this;
var ___$1 = this;
return "showpositions-view";
});})(validate__7824__auto__,ufv___24036,output_schema24021_24037,input_schema24022_24038,input_checker24023_24039,output_checker24024_24040))
;

sberweb.positions.t_sberweb$positions24030.prototype.om$core$IRender$ = true;

sberweb.positions.t_sberweb$positions24030.prototype.om$core$IRender$render$arity$1 = ((function (validate__7824__auto__,ufv___24036,output_schema24021_24037,input_schema24022_24038,input_checker24023_24039,output_checker24024_24040){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,React.DOM.div,{"className": "list-group", "style": {"display": "block"}},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.map.call(null,((function (___$1,validate__7824__auto__,ufv___24036,output_schema24021_24037,input_schema24022_24038,input_checker24023_24039,output_checker24024_24040){
return (function (item){
return om_tools.dom.element.call(null,React.DOM.span,cljs.core.apply.call(null,React.DOM.a,{"className": "list-group-item", "href": om_tools.dom.format_opts.call(null,[cljs.core.str("#/postrans/"),cljs.core.str(cljs.core.nth.call(null,item,(0)))].join(''))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.h4({"className": "list-group-item-heading", "dangerouslySetInnerHTML": {"__html": cljs.core.nth.call(null,item,(1))}},null),React.DOM.h4({"className": "list-group-item-heading"},"jkghjkhkj"),cljs.core.apply.call(null,React.DOM.h6,{"className": "paddingleft2"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.nth.call(null,item,(2))],null))))],null)))),cljs.core.PersistentVector.EMPTY);
});})(___$1,validate__7824__auto__,ufv___24036,output_schema24021_24037,input_schema24022_24038,input_checker24023_24039,output_checker24024_24040))
,new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(cljs.core.keyword.call(null,new cljs.core.Keyword(null,"selecteduser","selecteduser",-934523066).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.core.app_state))).call(null,cljs.core.deref.call(null,self__.data))))],null))));
});})(validate__7824__auto__,ufv___24036,output_schema24021_24037,input_schema24022_24038,input_checker24023_24039,output_checker24024_24040))
;

sberweb.positions.t_sberweb$positions24030.getBasis = ((function (validate__7824__auto__,ufv___24036,output_schema24021_24037,input_schema24022_24038,input_checker24023_24039,output_checker24024_24040){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"output-schema24021","output-schema24021",-947774010,null),new cljs.core.Symbol(null,"input-checker24023","input-checker24023",154307783,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__24025","G__24025",-672487287,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"G__24026","G__24026",-469733942,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"output-checker24024","output-checker24024",1782732522,null),new cljs.core.Symbol(null,"input-schema24022","input-schema24022",260360779,null),cljs.core.with_meta(new cljs.core.Symbol(null,"showpositions-view","showpositions-view",35508492,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))], null))),new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("schema.core","make-fn-schema","schema.core/make-fn-schema",152735578,null),new cljs.core.Symbol(null,"output-schema24021","output-schema24021",-947774010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"input-schema24022","input-schema24022",260360779,null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Inputs: [data owner]",new cljs.core.Keyword(null,"raw-arglists","raw-arglists",-1511012109),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"validate__7824__auto__","validate__7824__auto__",1540215376,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"meta24031","meta24031",151439468,null)], null);
});})(validate__7824__auto__,ufv___24036,output_schema24021_24037,input_schema24022_24038,input_checker24023_24039,output_checker24024_24040))
;

sberweb.positions.t_sberweb$positions24030.cljs$lang$type = true;

sberweb.positions.t_sberweb$positions24030.cljs$lang$ctorStr = "sberweb.positions/t_sberweb$positions24030";

sberweb.positions.t_sberweb$positions24030.cljs$lang$ctorPrWriter = ((function (validate__7824__auto__,ufv___24036,output_schema24021_24037,input_schema24022_24038,input_checker24023_24039,output_checker24024_24040){
return (function (this__6857__auto__,writer__6858__auto__,opt__6859__auto__){
return cljs.core._write.call(null,writer__6858__auto__,"sberweb.positions/t_sberweb$positions24030");
});})(validate__7824__auto__,ufv___24036,output_schema24021_24037,input_schema24022_24038,input_checker24023_24039,output_checker24024_24040))
;

sberweb.positions.__GT_t_sberweb$positions24030 = ((function (validate__7824__auto__,ufv___24036,output_schema24021_24037,input_schema24022_24038,input_checker24023_24039,output_checker24024_24040){
return (function sberweb$positions$showpositions_view_$___GT_t_sberweb$positions24030(owner__$1,data__$1,output_schema24021__$1,input_checker24023__$1,G__24025__$1,G__24026__$1,output_checker24024__$1,input_schema24022__$1,showpositions_view__$1,validate__7824__auto____$1,ufv____$1,meta24031){
return (new sberweb.positions.t_sberweb$positions24030(owner__$1,data__$1,output_schema24021__$1,input_checker24023__$1,G__24025__$1,G__24026__$1,output_checker24024__$1,input_schema24022__$1,showpositions_view__$1,validate__7824__auto____$1,ufv____$1,meta24031));
});})(validate__7824__auto__,ufv___24036,output_schema24021_24037,input_schema24022_24038,input_checker24023_24039,output_checker24024_24040))
;

}

return (new sberweb.positions.t_sberweb$positions24030(owner,data,output_schema24021_24037,input_checker24023_24039,G__24025,G__24026,output_checker24024_24040,input_schema24022_24038,sberweb$positions$showpositions_view,validate__7824__auto__,ufv___24036,null));
break;
}
})();
if(cljs.core.truth_(validate__7824__auto__)){
var temp__4657__auto___24044 = output_checker24024_24040.call(null,o__7827__auto__);
if(cljs.core.truth_(temp__4657__auto___24044)){
var error__7826__auto___24045 = temp__4657__auto___24044;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"showpositions-view","showpositions-view",35508492,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__7826__auto___24045)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema24021_24037,new cljs.core.Keyword(null,"value","value",305978217),o__7827__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___24045], null));
} else {
}
} else {
}

return o__7827__auto__;
});})(ufv___24036,output_schema24021_24037,input_schema24022_24038,input_checker24023_24039,output_checker24024_24040))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,sberweb.positions.showpositions_view),schema.core.make_fn_schema.call(null,output_schema24021_24037,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema24022_24038], null)));

sberweb.positions.__GT_showpositions_view = (function sberweb$positions$__GT_showpositions_view(var_args){
var args24033 = [];
var len__7326__auto___24046 = arguments.length;
var i__7327__auto___24047 = (0);
while(true){
if((i__7327__auto___24047 < len__7326__auto___24046)){
args24033.push((arguments[i__7327__auto___24047]));

var G__24048 = (i__7327__auto___24047 + (1));
i__7327__auto___24047 = G__24048;
continue;
} else {
}
break;
}

var G__24035 = args24033.length;
switch (G__24035) {
case 1:
return sberweb.positions.__GT_showpositions_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sberweb.positions.__GT_showpositions_view.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24033.length)].join('')));

}
});

sberweb.positions.__GT_showpositions_view.cljs$core$IFn$_invoke$arity$1 = (function (cursor__21877__auto__){
return om.core.build.call(null,sberweb.positions.showpositions_view,cursor__21877__auto__);
});

sberweb.positions.__GT_showpositions_view.cljs$core$IFn$_invoke$arity$2 = (function (cursor__21877__auto__,m24020){
return om.core.build.call(null,sberweb.positions.showpositions_view,cursor__21877__auto__,m24020);
});

sberweb.positions.__GT_showpositions_view.cljs$lang$maxFixedArity = 2;

sberweb.positions.onMount = (function sberweb$positions$onMount(data){
sberweb.positions.getPositions.call(null);

cljs.core.async.put_BANG_.call(null,sberweb.positions.ch,(42));

return cljs.core.swap_BANG_.call(null,sberweb.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current","current",-1088038603)], null),"Positions");
});
sberweb.positions.setcontrols = (function sberweb$positions$setcontrols(){
return sberweb.core.setUsersDropDown.call(null);
});
sberweb.positions.initqueue = (function sberweb$positions$initqueue(){
var seq__24078 = cljs.core.seq.call(null,cljs.core.range.call(null,(1000)));
var chunk__24079 = null;
var count__24080 = (0);
var i__24081 = (0);
while(true){
if((i__24081 < count__24080)){
var n = cljs.core._nth.call(null,chunk__24079,i__24081);
var c__18664__auto___24106 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__24078,chunk__24079,count__24080,i__24081,c__18664__auto___24106,n){
return (function (){
var f__18665__auto__ = (function (){var switch__18552__auto__ = ((function (seq__24078,chunk__24079,count__24080,i__24081,c__18664__auto___24106,n){
return (function (state_24085){
var state_val_24086 = (state_24085[(1)]);
if((state_val_24086 === (1))){
var inst_24082 = (function (){return ((function (seq__24078,chunk__24079,count__24080,i__24081,state_val_24086,c__18664__auto___24106,n){
return (function (v){
return sberweb.positions.setcontrols.call(null);
});
;})(seq__24078,chunk__24079,count__24080,i__24081,state_val_24086,c__18664__auto___24106,n))
})();
var inst_24083 = cljs.core.async.take_BANG_.call(null,sberweb.positions.ch,inst_24082);
var state_24085__$1 = state_24085;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24085__$1,inst_24083);
} else {
return null;
}
});})(seq__24078,chunk__24079,count__24080,i__24081,c__18664__auto___24106,n))
;
return ((function (seq__24078,chunk__24079,count__24080,i__24081,switch__18552__auto__,c__18664__auto___24106,n){
return (function() {
var sberweb$positions$initqueue_$_state_machine__18553__auto__ = null;
var sberweb$positions$initqueue_$_state_machine__18553__auto____0 = (function (){
var statearr_24090 = [null,null,null,null,null,null,null];
(statearr_24090[(0)] = sberweb$positions$initqueue_$_state_machine__18553__auto__);

(statearr_24090[(1)] = (1));

return statearr_24090;
});
var sberweb$positions$initqueue_$_state_machine__18553__auto____1 = (function (state_24085){
while(true){
var ret_value__18554__auto__ = (function (){try{while(true){
var result__18555__auto__ = switch__18552__auto__.call(null,state_24085);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18555__auto__;
}
break;
}
}catch (e24091){if((e24091 instanceof Object)){
var ex__18556__auto__ = e24091;
var statearr_24092_24107 = state_24085;
(statearr_24092_24107[(5)] = ex__18556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24085);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24091;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24108 = state_24085;
state_24085 = G__24108;
continue;
} else {
return ret_value__18554__auto__;
}
break;
}
});
sberweb$positions$initqueue_$_state_machine__18553__auto__ = function(state_24085){
switch(arguments.length){
case 0:
return sberweb$positions$initqueue_$_state_machine__18553__auto____0.call(this);
case 1:
return sberweb$positions$initqueue_$_state_machine__18553__auto____1.call(this,state_24085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sberweb$positions$initqueue_$_state_machine__18553__auto__.cljs$core$IFn$_invoke$arity$0 = sberweb$positions$initqueue_$_state_machine__18553__auto____0;
sberweb$positions$initqueue_$_state_machine__18553__auto__.cljs$core$IFn$_invoke$arity$1 = sberweb$positions$initqueue_$_state_machine__18553__auto____1;
return sberweb$positions$initqueue_$_state_machine__18553__auto__;
})()
;})(seq__24078,chunk__24079,count__24080,i__24081,switch__18552__auto__,c__18664__auto___24106,n))
})();
var state__18666__auto__ = (function (){var statearr_24093 = f__18665__auto__.call(null);
(statearr_24093[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18664__auto___24106);

return statearr_24093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18666__auto__);
});})(seq__24078,chunk__24079,count__24080,i__24081,c__18664__auto___24106,n))
);


var G__24109 = seq__24078;
var G__24110 = chunk__24079;
var G__24111 = count__24080;
var G__24112 = (i__24081 + (1));
seq__24078 = G__24109;
chunk__24079 = G__24110;
count__24080 = G__24111;
i__24081 = G__24112;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__24078);
if(temp__4657__auto__){
var seq__24078__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24078__$1)){
var c__7062__auto__ = cljs.core.chunk_first.call(null,seq__24078__$1);
var G__24113 = cljs.core.chunk_rest.call(null,seq__24078__$1);
var G__24114 = c__7062__auto__;
var G__24115 = cljs.core.count.call(null,c__7062__auto__);
var G__24116 = (0);
seq__24078 = G__24113;
chunk__24079 = G__24114;
count__24080 = G__24115;
i__24081 = G__24116;
continue;
} else {
var n = cljs.core.first.call(null,seq__24078__$1);
var c__18664__auto___24117 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__24078,chunk__24079,count__24080,i__24081,c__18664__auto___24117,n,seq__24078__$1,temp__4657__auto__){
return (function (){
var f__18665__auto__ = (function (){var switch__18552__auto__ = ((function (seq__24078,chunk__24079,count__24080,i__24081,c__18664__auto___24117,n,seq__24078__$1,temp__4657__auto__){
return (function (state_24097){
var state_val_24098 = (state_24097[(1)]);
if((state_val_24098 === (1))){
var inst_24094 = (function (){return ((function (seq__24078,chunk__24079,count__24080,i__24081,state_val_24098,c__18664__auto___24117,n,seq__24078__$1,temp__4657__auto__){
return (function (v){
return sberweb.positions.setcontrols.call(null);
});
;})(seq__24078,chunk__24079,count__24080,i__24081,state_val_24098,c__18664__auto___24117,n,seq__24078__$1,temp__4657__auto__))
})();
var inst_24095 = cljs.core.async.take_BANG_.call(null,sberweb.positions.ch,inst_24094);
var state_24097__$1 = state_24097;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24097__$1,inst_24095);
} else {
return null;
}
});})(seq__24078,chunk__24079,count__24080,i__24081,c__18664__auto___24117,n,seq__24078__$1,temp__4657__auto__))
;
return ((function (seq__24078,chunk__24079,count__24080,i__24081,switch__18552__auto__,c__18664__auto___24117,n,seq__24078__$1,temp__4657__auto__){
return (function() {
var sberweb$positions$initqueue_$_state_machine__18553__auto__ = null;
var sberweb$positions$initqueue_$_state_machine__18553__auto____0 = (function (){
var statearr_24102 = [null,null,null,null,null,null,null];
(statearr_24102[(0)] = sberweb$positions$initqueue_$_state_machine__18553__auto__);

(statearr_24102[(1)] = (1));

return statearr_24102;
});
var sberweb$positions$initqueue_$_state_machine__18553__auto____1 = (function (state_24097){
while(true){
var ret_value__18554__auto__ = (function (){try{while(true){
var result__18555__auto__ = switch__18552__auto__.call(null,state_24097);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18555__auto__;
}
break;
}
}catch (e24103){if((e24103 instanceof Object)){
var ex__18556__auto__ = e24103;
var statearr_24104_24118 = state_24097;
(statearr_24104_24118[(5)] = ex__18556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24097);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24103;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24119 = state_24097;
state_24097 = G__24119;
continue;
} else {
return ret_value__18554__auto__;
}
break;
}
});
sberweb$positions$initqueue_$_state_machine__18553__auto__ = function(state_24097){
switch(arguments.length){
case 0:
return sberweb$positions$initqueue_$_state_machine__18553__auto____0.call(this);
case 1:
return sberweb$positions$initqueue_$_state_machine__18553__auto____1.call(this,state_24097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sberweb$positions$initqueue_$_state_machine__18553__auto__.cljs$core$IFn$_invoke$arity$0 = sberweb$positions$initqueue_$_state_machine__18553__auto____0;
sberweb$positions$initqueue_$_state_machine__18553__auto__.cljs$core$IFn$_invoke$arity$1 = sberweb$positions$initqueue_$_state_machine__18553__auto____1;
return sberweb$positions$initqueue_$_state_machine__18553__auto__;
})()
;})(seq__24078,chunk__24079,count__24080,i__24081,switch__18552__auto__,c__18664__auto___24117,n,seq__24078__$1,temp__4657__auto__))
})();
var state__18666__auto__ = (function (){var statearr_24105 = f__18665__auto__.call(null);
(statearr_24105[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18664__auto___24117);

return statearr_24105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18666__auto__);
});})(seq__24078,chunk__24079,count__24080,i__24081,c__18664__auto___24117,n,seq__24078__$1,temp__4657__auto__))
);


var G__24120 = cljs.core.next.call(null,seq__24078__$1);
var G__24121 = null;
var G__24122 = (0);
var G__24123 = (0);
seq__24078 = G__24120;
chunk__24079 = G__24121;
count__24080 = G__24122;
i__24081 = G__24123;
continue;
}
} else {
return null;
}
}
break;
}
});
sberweb.positions.initqueue.call(null);

var ufv___24140 = schema.utils.use_fn_validation;
var output_schema24125_24141 = schema.core.Any;
var input_schema24126_24142 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker24127_24143 = schema.core.checker.call(null,input_schema24126_24142);
var output_checker24128_24144 = schema.core.checker.call(null,output_schema24125_24141);
/**
 * Inputs: [data owner]
 */
sberweb.positions.positions_view = ((function (ufv___24140,output_schema24125_24141,input_schema24126_24142,input_checker24127_24143,output_checker24128_24144){
return (function sberweb$positions$positions_view(G__24129,G__24130){
var validate__7824__auto__ = ufv___24140.get_cell();
if(cljs.core.truth_(validate__7824__auto__)){
var args__7825__auto___24145 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__24129,G__24130], null);
var temp__4657__auto___24146 = input_checker24127_24143.call(null,args__7825__auto___24145);
if(cljs.core.truth_(temp__4657__auto___24146)){
var error__7826__auto___24147 = temp__4657__auto___24146;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"positions-view","positions-view",1264243663,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__7826__auto___24147)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema24126_24142,new cljs.core.Keyword(null,"value","value",305978217),args__7825__auto___24145,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___24147], null));
} else {
}
} else {
}

var o__7827__auto__ = (function (){var data = G__24129;
var owner = G__24130;
while(true){
if(typeof sberweb.positions.t_sberweb$positions24134 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
sberweb.positions.t_sberweb$positions24134 = (function (G__24130,owner,input_checker24127,output_checker24128,data,input_schema24126,positions_view,validate__7824__auto__,G__24129,output_schema24125,ufv__,meta24135){
this.G__24130 = G__24130;
this.owner = owner;
this.input_checker24127 = input_checker24127;
this.output_checker24128 = output_checker24128;
this.data = data;
this.input_schema24126 = input_schema24126;
this.positions_view = positions_view;
this.validate__7824__auto__ = validate__7824__auto__;
this.G__24129 = G__24129;
this.output_schema24125 = output_schema24125;
this.ufv__ = ufv__;
this.meta24135 = meta24135;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
sberweb.positions.t_sberweb$positions24134.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__7824__auto__,ufv___24140,output_schema24125_24141,input_schema24126_24142,input_checker24127_24143,output_checker24128_24144){
return (function (_24136,meta24135__$1){
var self__ = this;
var _24136__$1 = this;
return (new sberweb.positions.t_sberweb$positions24134(self__.G__24130,self__.owner,self__.input_checker24127,self__.output_checker24128,self__.data,self__.input_schema24126,self__.positions_view,self__.validate__7824__auto__,self__.G__24129,self__.output_schema24125,self__.ufv__,meta24135__$1));
});})(validate__7824__auto__,ufv___24140,output_schema24125_24141,input_schema24126_24142,input_checker24127_24143,output_checker24128_24144))
;

sberweb.positions.t_sberweb$positions24134.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__7824__auto__,ufv___24140,output_schema24125_24141,input_schema24126_24142,input_checker24127_24143,output_checker24128_24144){
return (function (_24136){
var self__ = this;
var _24136__$1 = this;
return self__.meta24135;
});})(validate__7824__auto__,ufv___24140,output_schema24125_24141,input_schema24126_24142,input_checker24127_24143,output_checker24128_24144))
;

sberweb.positions.t_sberweb$positions24134.prototype.om$core$IDisplayName$ = true;

sberweb.positions.t_sberweb$positions24134.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__7824__auto__,ufv___24140,output_schema24125_24141,input_schema24126_24142,input_checker24127_24143,output_checker24128_24144){
return (function (_){
var self__ = this;
var ___$1 = this;
return "positions-view";
});})(validate__7824__auto__,ufv___24140,output_schema24125_24141,input_schema24126_24142,input_checker24127_24143,output_checker24128_24144))
;

sberweb.positions.t_sberweb$positions24134.prototype.om$core$IWillMount$ = true;

sberweb.positions.t_sberweb$positions24134.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (validate__7824__auto__,ufv___24140,output_schema24125_24141,input_schema24126_24142,input_checker24127_24143,output_checker24128_24144){
return (function (_){
var self__ = this;
var ___$1 = this;
return sberweb.positions.onMount.call(null,self__.data);
});})(validate__7824__auto__,ufv___24140,output_schema24125_24141,input_schema24126_24142,input_checker24127_24143,output_checker24128_24144))
;

sberweb.positions.t_sberweb$positions24134.prototype.om$core$IRender$ = true;

sberweb.positions.t_sberweb$positions24134.prototype.om$core$IRender$render$arity$1 = ((function (validate__7824__auto__,ufv___24140,output_schema24125_24141,input_schema24126_24142,input_checker24127_24143,output_checker24128_24144){
return (function (_){
var self__ = this;
var ___$1 = this;
var style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"10px",new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),"0px"], null)], null);
var styleprimary = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"70px"], null)], null);
return om_tools.dom.element.call(null,React.DOM.div,om.core.build.call(null,sberweb.core.website_view,sberweb.core.app_state,cljs.core.PersistentArrayMap.EMPTY),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.div,cljs.core.assoc.call(null,styleprimary,new cljs.core.Keyword(null,"className","className",-1983287057),"panel panel-primary"),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.button.button.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"btn btn-primary",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (style,styleprimary,___$1,validate__7824__auto__,ufv___24140,output_schema24125_24141,input_schema24126_24142,input_checker24127_24143,output_checker24128_24144){
return (function (e){
return document.location = "#/tripdetail/0";
});})(style,styleprimary,___$1,validate__7824__auto__,ufv___24140,output_schema24125_24141,input_schema24126_24142,input_checker24127_24143,output_checker24128_24144))
], null),"Add New"),cljs.core.PersistentVector.EMPTY),om.core.build.call(null,sberweb.positions.showpositions_view,self__.data,cljs.core.PersistentArrayMap.EMPTY)],null)))],null)));
});})(validate__7824__auto__,ufv___24140,output_schema24125_24141,input_schema24126_24142,input_checker24127_24143,output_checker24128_24144))
;

sberweb.positions.t_sberweb$positions24134.getBasis = ((function (validate__7824__auto__,ufv___24140,output_schema24125_24141,input_schema24126_24142,input_checker24127_24143,output_checker24128_24144){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"G__24130","G__24130",-1655425886,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"input-checker24127","input-checker24127",-1227419036,null),new cljs.core.Symbol(null,"output-checker24128","output-checker24128",-2115700443,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"input-schema24126","input-schema24126",686974888,null),cljs.core.with_meta(new cljs.core.Symbol(null,"positions-view","positions-view",1264243663,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))], null))),new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("schema.core","make-fn-schema","schema.core/make-fn-schema",152735578,null),new cljs.core.Symbol(null,"output-schema24125","output-schema24125",1525263833,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"input-schema24126","input-schema24126",686974888,null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Inputs: [data owner]",new cljs.core.Keyword(null,"raw-arglists","raw-arglists",-1511012109),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"validate__7824__auto__","validate__7824__auto__",1540215376,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__24129","G__24129",-874348073,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"output-schema24125","output-schema24125",1525263833,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"meta24135","meta24135",1064358144,null)], null);
});})(validate__7824__auto__,ufv___24140,output_schema24125_24141,input_schema24126_24142,input_checker24127_24143,output_checker24128_24144))
;

sberweb.positions.t_sberweb$positions24134.cljs$lang$type = true;

sberweb.positions.t_sberweb$positions24134.cljs$lang$ctorStr = "sberweb.positions/t_sberweb$positions24134";

sberweb.positions.t_sberweb$positions24134.cljs$lang$ctorPrWriter = ((function (validate__7824__auto__,ufv___24140,output_schema24125_24141,input_schema24126_24142,input_checker24127_24143,output_checker24128_24144){
return (function (this__6857__auto__,writer__6858__auto__,opt__6859__auto__){
return cljs.core._write.call(null,writer__6858__auto__,"sberweb.positions/t_sberweb$positions24134");
});})(validate__7824__auto__,ufv___24140,output_schema24125_24141,input_schema24126_24142,input_checker24127_24143,output_checker24128_24144))
;

sberweb.positions.__GT_t_sberweb$positions24134 = ((function (validate__7824__auto__,ufv___24140,output_schema24125_24141,input_schema24126_24142,input_checker24127_24143,output_checker24128_24144){
return (function sberweb$positions$positions_view_$___GT_t_sberweb$positions24134(G__24130__$1,owner__$1,input_checker24127__$1,output_checker24128__$1,data__$1,input_schema24126__$1,positions_view__$1,validate__7824__auto____$1,G__24129__$1,output_schema24125__$1,ufv____$1,meta24135){
return (new sberweb.positions.t_sberweb$positions24134(G__24130__$1,owner__$1,input_checker24127__$1,output_checker24128__$1,data__$1,input_schema24126__$1,positions_view__$1,validate__7824__auto____$1,G__24129__$1,output_schema24125__$1,ufv____$1,meta24135));
});})(validate__7824__auto__,ufv___24140,output_schema24125_24141,input_schema24126_24142,input_checker24127_24143,output_checker24128_24144))
;

}

return (new sberweb.positions.t_sberweb$positions24134(G__24130,owner,input_checker24127_24143,output_checker24128_24144,data,input_schema24126_24142,sberweb$positions$positions_view,validate__7824__auto__,G__24129,output_schema24125_24141,ufv___24140,null));
break;
}
})();
if(cljs.core.truth_(validate__7824__auto__)){
var temp__4657__auto___24148 = output_checker24128_24144.call(null,o__7827__auto__);
if(cljs.core.truth_(temp__4657__auto___24148)){
var error__7826__auto___24149 = temp__4657__auto___24148;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"positions-view","positions-view",1264243663,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__7826__auto___24149)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema24125_24141,new cljs.core.Keyword(null,"value","value",305978217),o__7827__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___24149], null));
} else {
}
} else {
}

return o__7827__auto__;
});})(ufv___24140,output_schema24125_24141,input_schema24126_24142,input_checker24127_24143,output_checker24128_24144))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,sberweb.positions.positions_view),schema.core.make_fn_schema.call(null,output_schema24125_24141,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema24126_24142], null)));

sberweb.positions.__GT_positions_view = (function sberweb$positions$__GT_positions_view(var_args){
var args24137 = [];
var len__7326__auto___24150 = arguments.length;
var i__7327__auto___24151 = (0);
while(true){
if((i__7327__auto___24151 < len__7326__auto___24150)){
args24137.push((arguments[i__7327__auto___24151]));

var G__24152 = (i__7327__auto___24151 + (1));
i__7327__auto___24151 = G__24152;
continue;
} else {
}
break;
}

var G__24139 = args24137.length;
switch (G__24139) {
case 1:
return sberweb.positions.__GT_positions_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sberweb.positions.__GT_positions_view.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24137.length)].join('')));

}
});

sberweb.positions.__GT_positions_view.cljs$core$IFn$_invoke$arity$1 = (function (cursor__21877__auto__){
return om.core.build.call(null,sberweb.positions.positions_view,cursor__21877__auto__);
});

sberweb.positions.__GT_positions_view.cljs$core$IFn$_invoke$arity$2 = (function (cursor__21877__auto__,m24124){
return om.core.build.call(null,sberweb.positions.positions_view,cursor__21877__auto__,m24124);
});

sberweb.positions.__GT_positions_view.cljs$lang$maxFixedArity = 2;

var action__22027__auto___24160 = (function (params__22028__auto__){
if(cljs.core.map_QMARK_.call(null,params__22028__auto__)){
var map__24154 = params__22028__auto__;
var map__24154__$1 = ((((!((map__24154 == null)))?((((map__24154.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24154.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24154):map__24154);
return om.core.root.call(null,sberweb.positions.positions_view,sberweb.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__22028__auto__)){
var vec__24156 = params__22028__auto__;
return om.core.root.call(null,sberweb.positions.positions_view,sberweb.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/positions",action__22027__auto___24160);

sberweb.positions.positions_page = ((function (action__22027__auto___24160){
return (function sberweb$positions$positions_page(var_args){
var args__7333__auto__ = [];
var len__7326__auto___24161 = arguments.length;
var i__7327__auto___24162 = (0);
while(true){
if((i__7327__auto___24162 < len__7326__auto___24161)){
args__7333__auto__.push((arguments[i__7327__auto___24162]));

var G__24163 = (i__7327__auto___24162 + (1));
i__7327__auto___24162 = G__24163;
continue;
} else {
}
break;
}

var argseq__7334__auto__ = ((((0) < args__7333__auto__.length))?(new cljs.core.IndexedSeq(args__7333__auto__.slice((0)),(0),null)):null);
return sberweb.positions.positions_page.cljs$core$IFn$_invoke$arity$variadic(argseq__7334__auto__);
});})(action__22027__auto___24160))
;

sberweb.positions.positions_page.cljs$core$IFn$_invoke$arity$variadic = ((function (action__22027__auto___24160){
return (function (args__22026__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/positions",args__22026__auto__);
});})(action__22027__auto___24160))
;

sberweb.positions.positions_page.cljs$lang$maxFixedArity = (0);

sberweb.positions.positions_page.cljs$lang$applyTo = ((function (action__22027__auto___24160){
return (function (seq24159){
return sberweb.positions.positions_page.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24159));
});})(action__22027__auto___24160))
;


//# sourceMappingURL=positions.js.map?rel=1486035198528