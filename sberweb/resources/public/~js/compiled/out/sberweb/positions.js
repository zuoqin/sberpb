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

return sberweb.core.setClientsDropDown.call(null);
});
sberweb.positions.error_handler = (function sberweb$positions$error_handler(p__47537){
var map__47540 = p__47537;
var map__47540__$1 = ((((!((map__47540 == null)))?((((map__47540.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47540.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47540):map__47540);
var status = cljs.core.get.call(null,map__47540__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__47540__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return console.log([cljs.core.str("something bad happened: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
sberweb.positions.getPositions = (function sberweb$positions$getPositions(){
return sberweb.core.setClientsDropDown.call(null);

});

var ufv___47558 = schema.utils.use_fn_validation;
var output_schema47543_47559 = schema.core.Any;
var input_schema47544_47560 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker47545_47561 = schema.core.checker.call(null,input_schema47544_47560);
var output_checker47546_47562 = schema.core.checker.call(null,output_schema47543_47559);
/**
 * Inputs: [data owner]
 */
sberweb.positions.showpositions_view = ((function (ufv___47558,output_schema47543_47559,input_schema47544_47560,input_checker47545_47561,output_checker47546_47562){
return (function sberweb$positions$showpositions_view(G__47547,G__47548){
var validate__37909__auto__ = ufv___47558.get_cell();
if(cljs.core.truth_(validate__37909__auto__)){
var args__37910__auto___47563 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__47547,G__47548], null);
var temp__4657__auto___47564 = input_checker47545_47561.call(null,args__37910__auto___47563);
if(cljs.core.truth_(temp__4657__auto___47564)){
var error__37911__auto___47565 = temp__4657__auto___47564;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"showpositions-view","showpositions-view",35508492,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__37911__auto___47565)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema47544_47560,new cljs.core.Keyword(null,"value","value",305978217),args__37910__auto___47563,new cljs.core.Keyword(null,"error","error",-978969032),error__37911__auto___47565], null));
} else {
}
} else {
}

var o__37912__auto__ = (function (){var data = G__47547;
var owner = G__47548;
while(true){
if(typeof sberweb.positions.t_sberweb$positions47552 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
sberweb.positions.t_sberweb$positions47552 = (function (G__47548,input_schema47544,owner,data,input_checker47545,output_checker47546,showpositions_view,validate__37909__auto__,output_schema47543,G__47547,ufv__,meta47553){
this.G__47548 = G__47548;
this.input_schema47544 = input_schema47544;
this.owner = owner;
this.data = data;
this.input_checker47545 = input_checker47545;
this.output_checker47546 = output_checker47546;
this.showpositions_view = showpositions_view;
this.validate__37909__auto__ = validate__37909__auto__;
this.output_schema47543 = output_schema47543;
this.G__47547 = G__47547;
this.ufv__ = ufv__;
this.meta47553 = meta47553;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
sberweb.positions.t_sberweb$positions47552.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__37909__auto__,ufv___47558,output_schema47543_47559,input_schema47544_47560,input_checker47545_47561,output_checker47546_47562){
return (function (_47554,meta47553__$1){
var self__ = this;
var _47554__$1 = this;
return (new sberweb.positions.t_sberweb$positions47552(self__.G__47548,self__.input_schema47544,self__.owner,self__.data,self__.input_checker47545,self__.output_checker47546,self__.showpositions_view,self__.validate__37909__auto__,self__.output_schema47543,self__.G__47547,self__.ufv__,meta47553__$1));
});})(validate__37909__auto__,ufv___47558,output_schema47543_47559,input_schema47544_47560,input_checker47545_47561,output_checker47546_47562))
;

sberweb.positions.t_sberweb$positions47552.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__37909__auto__,ufv___47558,output_schema47543_47559,input_schema47544_47560,input_checker47545_47561,output_checker47546_47562){
return (function (_47554){
var self__ = this;
var _47554__$1 = this;
return self__.meta47553;
});})(validate__37909__auto__,ufv___47558,output_schema47543_47559,input_schema47544_47560,input_checker47545_47561,output_checker47546_47562))
;

sberweb.positions.t_sberweb$positions47552.prototype.om$core$IDisplayName$ = true;

sberweb.positions.t_sberweb$positions47552.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__37909__auto__,ufv___47558,output_schema47543_47559,input_schema47544_47560,input_checker47545_47561,output_checker47546_47562){
return (function (_){
var self__ = this;
var ___$1 = this;
return "showpositions-view";
});})(validate__37909__auto__,ufv___47558,output_schema47543_47559,input_schema47544_47560,input_checker47545_47561,output_checker47546_47562))
;

sberweb.positions.t_sberweb$positions47552.prototype.om$core$IRender$ = true;

sberweb.positions.t_sberweb$positions47552.prototype.om$core$IRender$render$arity$1 = ((function (validate__37909__auto__,ufv___47558,output_schema47543_47559,input_schema47544_47560,input_checker47545_47561,output_checker47546_47562){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,React.DOM.div,{"className": "list-group", "style": {"display": "block"}},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.map.call(null,((function (___$1,validate__37909__auto__,ufv___47558,output_schema47543_47559,input_schema47544_47560,input_checker47545_47561,output_checker47546_47562){
return (function (item){
return om_tools.dom.element.call(null,React.DOM.span,cljs.core.apply.call(null,React.DOM.a,{"className": "list-group-item", "href": om_tools.dom.format_opts.call(null,[cljs.core.str("#/postrans/"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item))].join(''))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.h4({"className": "list-group-item-heading", "dangerouslySetInnerHTML": {"__html": new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,((function (___$1,validate__37909__auto__,ufv___47558,output_schema47543_47559,input_schema47544_47560,input_checker47545_47561,output_checker47546_47562){
return (function (x){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item))){
return true;
} else {
return false;
}
});})(___$1,validate__37909__auto__,ufv___47558,output_schema47543_47559,input_schema47544_47560,input_checker47545_47561,output_checker47546_47562))
,new cljs.core.Keyword(null,"securities","securities",-755156980).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.core.app_state)))))}},null),cljs.core.apply.call(null,React.DOM.h4,{"className": "list-group-item-heading"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(item)],null))))],null)))),cljs.core.PersistentVector.EMPTY);
});})(___$1,validate__37909__auto__,ufv___47558,output_schema47543_47559,input_schema47544_47560,input_checker47545_47561,output_checker47546_47562))
,new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(cljs.core.keyword.call(null,new cljs.core.Keyword(null,"selectedclient","selectedclient",1310372998).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.core.app_state))).call(null,cljs.core.deref.call(null,sberweb.core.app_state))))],null))));
});})(validate__37909__auto__,ufv___47558,output_schema47543_47559,input_schema47544_47560,input_checker47545_47561,output_checker47546_47562))
;

sberweb.positions.t_sberweb$positions47552.getBasis = ((function (validate__37909__auto__,ufv___47558,output_schema47543_47559,input_schema47544_47560,input_checker47545_47561,output_checker47546_47562){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"G__47548","G__47548",1736920226,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"input-schema47544","input-schema47544",505852898,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"input-checker47545","input-checker47545",595190567,null),new cljs.core.Symbol(null,"output-checker47546","output-checker47546",-698395702,null),cljs.core.with_meta(new cljs.core.Symbol(null,"showpositions-view","showpositions-view",35508492,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))], null))),new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("schema.core","make-fn-schema","schema.core/make-fn-schema",152735578,null),new cljs.core.Symbol(null,"output-schema47543","output-schema47543",-1743243631,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"input-schema47544","input-schema47544",505852898,null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Inputs: [data owner]",new cljs.core.Keyword(null,"raw-arglists","raw-arglists",-1511012109),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"validate__37909__auto__","validate__37909__auto__",-807220660,null),new cljs.core.Symbol(null,"output-schema47543","output-schema47543",-1743243631,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__47547","G__47547",393134292,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"meta47553","meta47553",997145395,null)], null);
});})(validate__37909__auto__,ufv___47558,output_schema47543_47559,input_schema47544_47560,input_checker47545_47561,output_checker47546_47562))
;

sberweb.positions.t_sberweb$positions47552.cljs$lang$type = true;

sberweb.positions.t_sberweb$positions47552.cljs$lang$ctorStr = "sberweb.positions/t_sberweb$positions47552";

sberweb.positions.t_sberweb$positions47552.cljs$lang$ctorPrWriter = ((function (validate__37909__auto__,ufv___47558,output_schema47543_47559,input_schema47544_47560,input_checker47545_47561,output_checker47546_47562){
return (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"sberweb.positions/t_sberweb$positions47552");
});})(validate__37909__auto__,ufv___47558,output_schema47543_47559,input_schema47544_47560,input_checker47545_47561,output_checker47546_47562))
;

sberweb.positions.__GT_t_sberweb$positions47552 = ((function (validate__37909__auto__,ufv___47558,output_schema47543_47559,input_schema47544_47560,input_checker47545_47561,output_checker47546_47562){
return (function sberweb$positions$showpositions_view_$___GT_t_sberweb$positions47552(G__47548__$1,input_schema47544__$1,owner__$1,data__$1,input_checker47545__$1,output_checker47546__$1,showpositions_view__$1,validate__37909__auto____$1,output_schema47543__$1,G__47547__$1,ufv____$1,meta47553){
return (new sberweb.positions.t_sberweb$positions47552(G__47548__$1,input_schema47544__$1,owner__$1,data__$1,input_checker47545__$1,output_checker47546__$1,showpositions_view__$1,validate__37909__auto____$1,output_schema47543__$1,G__47547__$1,ufv____$1,meta47553));
});})(validate__37909__auto__,ufv___47558,output_schema47543_47559,input_schema47544_47560,input_checker47545_47561,output_checker47546_47562))
;

}

return (new sberweb.positions.t_sberweb$positions47552(G__47548,input_schema47544_47560,owner,data,input_checker47545_47561,output_checker47546_47562,sberweb$positions$showpositions_view,validate__37909__auto__,output_schema47543_47559,G__47547,ufv___47558,null));
break;
}
})();
if(cljs.core.truth_(validate__37909__auto__)){
var temp__4657__auto___47566 = output_checker47546_47562.call(null,o__37912__auto__);
if(cljs.core.truth_(temp__4657__auto___47566)){
var error__37911__auto___47567 = temp__4657__auto___47566;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"showpositions-view","showpositions-view",35508492,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__37911__auto___47567)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema47543_47559,new cljs.core.Keyword(null,"value","value",305978217),o__37912__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37911__auto___47567], null));
} else {
}
} else {
}

return o__37912__auto__;
});})(ufv___47558,output_schema47543_47559,input_schema47544_47560,input_checker47545_47561,output_checker47546_47562))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,sberweb.positions.showpositions_view),schema.core.make_fn_schema.call(null,output_schema47543_47559,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema47544_47560], null)));

sberweb.positions.__GT_showpositions_view = (function sberweb$positions$__GT_showpositions_view(var_args){
var args47555 = [];
var len__25947__auto___47568 = arguments.length;
var i__25948__auto___47569 = (0);
while(true){
if((i__25948__auto___47569 < len__25947__auto___47568)){
args47555.push((arguments[i__25948__auto___47569]));

var G__47570 = (i__25948__auto___47569 + (1));
i__25948__auto___47569 = G__47570;
continue;
} else {
}
break;
}

var G__47557 = args47555.length;
switch (G__47557) {
case 1:
return sberweb.positions.__GT_showpositions_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sberweb.positions.__GT_showpositions_view.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47555.length)].join('')));

}
});

sberweb.positions.__GT_showpositions_view.cljs$core$IFn$_invoke$arity$1 = (function (cursor__41613__auto__){
return om.core.build.call(null,sberweb.positions.showpositions_view,cursor__41613__auto__);
});

sberweb.positions.__GT_showpositions_view.cljs$core$IFn$_invoke$arity$2 = (function (cursor__41613__auto__,m47542){
return om.core.build.call(null,sberweb.positions.showpositions_view,cursor__41613__auto__,m47542);
});

sberweb.positions.__GT_showpositions_view.cljs$lang$maxFixedArity = 2;

sberweb.positions.onMount = (function sberweb$positions$onMount(data){
sberweb.positions.getPositions.call(null);

cljs.core.async.put_BANG_.call(null,sberweb.positions.ch,(42));

return cljs.core.swap_BANG_.call(null,sberweb.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current","current",-1088038603)], null),"Positions");
});
sberweb.positions.setcontrols = (function sberweb$positions$setcontrols(){
return sberweb.core.setClientsDropDown.call(null);
});
sberweb.positions.initqueue = (function sberweb$positions$initqueue(){
var seq__47600 = cljs.core.seq.call(null,cljs.core.range.call(null,(1000)));
var chunk__47601 = null;
var count__47602 = (0);
var i__47603 = (0);
while(true){
if((i__47603 < count__47602)){
var n = cljs.core._nth.call(null,chunk__47601,i__47603);
var c__27094__auto___47628 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__47600,chunk__47601,count__47602,i__47603,c__27094__auto___47628,n){
return (function (){
var f__27095__auto__ = (function (){var switch__27029__auto__ = ((function (seq__47600,chunk__47601,count__47602,i__47603,c__27094__auto___47628,n){
return (function (state_47607){
var state_val_47608 = (state_47607[(1)]);
if((state_val_47608 === (1))){
var inst_47604 = (function (){return ((function (seq__47600,chunk__47601,count__47602,i__47603,state_val_47608,c__27094__auto___47628,n){
return (function (v){
return sberweb.positions.setcontrols.call(null);
});
;})(seq__47600,chunk__47601,count__47602,i__47603,state_val_47608,c__27094__auto___47628,n))
})();
var inst_47605 = cljs.core.async.take_BANG_.call(null,sberweb.positions.ch,inst_47604);
var state_47607__$1 = state_47607;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47607__$1,inst_47605);
} else {
return null;
}
});})(seq__47600,chunk__47601,count__47602,i__47603,c__27094__auto___47628,n))
;
return ((function (seq__47600,chunk__47601,count__47602,i__47603,switch__27029__auto__,c__27094__auto___47628,n){
return (function() {
var sberweb$positions$initqueue_$_state_machine__27030__auto__ = null;
var sberweb$positions$initqueue_$_state_machine__27030__auto____0 = (function (){
var statearr_47612 = [null,null,null,null,null,null,null];
(statearr_47612[(0)] = sberweb$positions$initqueue_$_state_machine__27030__auto__);

(statearr_47612[(1)] = (1));

return statearr_47612;
});
var sberweb$positions$initqueue_$_state_machine__27030__auto____1 = (function (state_47607){
while(true){
var ret_value__27031__auto__ = (function (){try{while(true){
var result__27032__auto__ = switch__27029__auto__.call(null,state_47607);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27032__auto__;
}
break;
}
}catch (e47613){if((e47613 instanceof Object)){
var ex__27033__auto__ = e47613;
var statearr_47614_47629 = state_47607;
(statearr_47614_47629[(5)] = ex__27033__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47607);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47613;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47630 = state_47607;
state_47607 = G__47630;
continue;
} else {
return ret_value__27031__auto__;
}
break;
}
});
sberweb$positions$initqueue_$_state_machine__27030__auto__ = function(state_47607){
switch(arguments.length){
case 0:
return sberweb$positions$initqueue_$_state_machine__27030__auto____0.call(this);
case 1:
return sberweb$positions$initqueue_$_state_machine__27030__auto____1.call(this,state_47607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sberweb$positions$initqueue_$_state_machine__27030__auto__.cljs$core$IFn$_invoke$arity$0 = sberweb$positions$initqueue_$_state_machine__27030__auto____0;
sberweb$positions$initqueue_$_state_machine__27030__auto__.cljs$core$IFn$_invoke$arity$1 = sberweb$positions$initqueue_$_state_machine__27030__auto____1;
return sberweb$positions$initqueue_$_state_machine__27030__auto__;
})()
;})(seq__47600,chunk__47601,count__47602,i__47603,switch__27029__auto__,c__27094__auto___47628,n))
})();
var state__27096__auto__ = (function (){var statearr_47615 = f__27095__auto__.call(null);
(statearr_47615[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27094__auto___47628);

return statearr_47615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27096__auto__);
});})(seq__47600,chunk__47601,count__47602,i__47603,c__27094__auto___47628,n))
);


var G__47631 = seq__47600;
var G__47632 = chunk__47601;
var G__47633 = count__47602;
var G__47634 = (i__47603 + (1));
seq__47600 = G__47631;
chunk__47601 = G__47632;
count__47602 = G__47633;
i__47603 = G__47634;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__47600);
if(temp__4657__auto__){
var seq__47600__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47600__$1)){
var c__25683__auto__ = cljs.core.chunk_first.call(null,seq__47600__$1);
var G__47635 = cljs.core.chunk_rest.call(null,seq__47600__$1);
var G__47636 = c__25683__auto__;
var G__47637 = cljs.core.count.call(null,c__25683__auto__);
var G__47638 = (0);
seq__47600 = G__47635;
chunk__47601 = G__47636;
count__47602 = G__47637;
i__47603 = G__47638;
continue;
} else {
var n = cljs.core.first.call(null,seq__47600__$1);
var c__27094__auto___47639 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__47600,chunk__47601,count__47602,i__47603,c__27094__auto___47639,n,seq__47600__$1,temp__4657__auto__){
return (function (){
var f__27095__auto__ = (function (){var switch__27029__auto__ = ((function (seq__47600,chunk__47601,count__47602,i__47603,c__27094__auto___47639,n,seq__47600__$1,temp__4657__auto__){
return (function (state_47619){
var state_val_47620 = (state_47619[(1)]);
if((state_val_47620 === (1))){
var inst_47616 = (function (){return ((function (seq__47600,chunk__47601,count__47602,i__47603,state_val_47620,c__27094__auto___47639,n,seq__47600__$1,temp__4657__auto__){
return (function (v){
return sberweb.positions.setcontrols.call(null);
});
;})(seq__47600,chunk__47601,count__47602,i__47603,state_val_47620,c__27094__auto___47639,n,seq__47600__$1,temp__4657__auto__))
})();
var inst_47617 = cljs.core.async.take_BANG_.call(null,sberweb.positions.ch,inst_47616);
var state_47619__$1 = state_47619;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47619__$1,inst_47617);
} else {
return null;
}
});})(seq__47600,chunk__47601,count__47602,i__47603,c__27094__auto___47639,n,seq__47600__$1,temp__4657__auto__))
;
return ((function (seq__47600,chunk__47601,count__47602,i__47603,switch__27029__auto__,c__27094__auto___47639,n,seq__47600__$1,temp__4657__auto__){
return (function() {
var sberweb$positions$initqueue_$_state_machine__27030__auto__ = null;
var sberweb$positions$initqueue_$_state_machine__27030__auto____0 = (function (){
var statearr_47624 = [null,null,null,null,null,null,null];
(statearr_47624[(0)] = sberweb$positions$initqueue_$_state_machine__27030__auto__);

(statearr_47624[(1)] = (1));

return statearr_47624;
});
var sberweb$positions$initqueue_$_state_machine__27030__auto____1 = (function (state_47619){
while(true){
var ret_value__27031__auto__ = (function (){try{while(true){
var result__27032__auto__ = switch__27029__auto__.call(null,state_47619);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27032__auto__;
}
break;
}
}catch (e47625){if((e47625 instanceof Object)){
var ex__27033__auto__ = e47625;
var statearr_47626_47640 = state_47619;
(statearr_47626_47640[(5)] = ex__27033__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47619);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47625;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47641 = state_47619;
state_47619 = G__47641;
continue;
} else {
return ret_value__27031__auto__;
}
break;
}
});
sberweb$positions$initqueue_$_state_machine__27030__auto__ = function(state_47619){
switch(arguments.length){
case 0:
return sberweb$positions$initqueue_$_state_machine__27030__auto____0.call(this);
case 1:
return sberweb$positions$initqueue_$_state_machine__27030__auto____1.call(this,state_47619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sberweb$positions$initqueue_$_state_machine__27030__auto__.cljs$core$IFn$_invoke$arity$0 = sberweb$positions$initqueue_$_state_machine__27030__auto____0;
sberweb$positions$initqueue_$_state_machine__27030__auto__.cljs$core$IFn$_invoke$arity$1 = sberweb$positions$initqueue_$_state_machine__27030__auto____1;
return sberweb$positions$initqueue_$_state_machine__27030__auto__;
})()
;})(seq__47600,chunk__47601,count__47602,i__47603,switch__27029__auto__,c__27094__auto___47639,n,seq__47600__$1,temp__4657__auto__))
})();
var state__27096__auto__ = (function (){var statearr_47627 = f__27095__auto__.call(null);
(statearr_47627[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27094__auto___47639);

return statearr_47627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27096__auto__);
});})(seq__47600,chunk__47601,count__47602,i__47603,c__27094__auto___47639,n,seq__47600__$1,temp__4657__auto__))
);


var G__47642 = cljs.core.next.call(null,seq__47600__$1);
var G__47643 = null;
var G__47644 = (0);
var G__47645 = (0);
seq__47600 = G__47642;
chunk__47601 = G__47643;
count__47602 = G__47644;
i__47603 = G__47645;
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

var ufv___47662 = schema.utils.use_fn_validation;
var output_schema47647_47663 = schema.core.Any;
var input_schema47648_47664 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker47649_47665 = schema.core.checker.call(null,input_schema47648_47664);
var output_checker47650_47666 = schema.core.checker.call(null,output_schema47647_47663);
/**
 * Inputs: [data owner]
 */
sberweb.positions.positions_view = ((function (ufv___47662,output_schema47647_47663,input_schema47648_47664,input_checker47649_47665,output_checker47650_47666){
return (function sberweb$positions$positions_view(G__47651,G__47652){
var validate__37909__auto__ = ufv___47662.get_cell();
if(cljs.core.truth_(validate__37909__auto__)){
var args__37910__auto___47667 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__47651,G__47652], null);
var temp__4657__auto___47668 = input_checker47649_47665.call(null,args__37910__auto___47667);
if(cljs.core.truth_(temp__4657__auto___47668)){
var error__37911__auto___47669 = temp__4657__auto___47668;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"positions-view","positions-view",1264243663,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__37911__auto___47669)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema47648_47664,new cljs.core.Keyword(null,"value","value",305978217),args__37910__auto___47667,new cljs.core.Keyword(null,"error","error",-978969032),error__37911__auto___47669], null));
} else {
}
} else {
}

var o__37912__auto__ = (function (){var data = G__47651;
var owner = G__47652;
while(true){
if(typeof sberweb.positions.t_sberweb$positions47656 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
sberweb.positions.t_sberweb$positions47656 = (function (owner,data,G__47651,input_schema47648,validate__37909__auto__,positions_view,output_schema47647,input_checker47649,G__47652,output_checker47650,ufv__,meta47657){
this.owner = owner;
this.data = data;
this.G__47651 = G__47651;
this.input_schema47648 = input_schema47648;
this.validate__37909__auto__ = validate__37909__auto__;
this.positions_view = positions_view;
this.output_schema47647 = output_schema47647;
this.input_checker47649 = input_checker47649;
this.G__47652 = G__47652;
this.output_checker47650 = output_checker47650;
this.ufv__ = ufv__;
this.meta47657 = meta47657;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
sberweb.positions.t_sberweb$positions47656.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__37909__auto__,ufv___47662,output_schema47647_47663,input_schema47648_47664,input_checker47649_47665,output_checker47650_47666){
return (function (_47658,meta47657__$1){
var self__ = this;
var _47658__$1 = this;
return (new sberweb.positions.t_sberweb$positions47656(self__.owner,self__.data,self__.G__47651,self__.input_schema47648,self__.validate__37909__auto__,self__.positions_view,self__.output_schema47647,self__.input_checker47649,self__.G__47652,self__.output_checker47650,self__.ufv__,meta47657__$1));
});})(validate__37909__auto__,ufv___47662,output_schema47647_47663,input_schema47648_47664,input_checker47649_47665,output_checker47650_47666))
;

sberweb.positions.t_sberweb$positions47656.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__37909__auto__,ufv___47662,output_schema47647_47663,input_schema47648_47664,input_checker47649_47665,output_checker47650_47666){
return (function (_47658){
var self__ = this;
var _47658__$1 = this;
return self__.meta47657;
});})(validate__37909__auto__,ufv___47662,output_schema47647_47663,input_schema47648_47664,input_checker47649_47665,output_checker47650_47666))
;

sberweb.positions.t_sberweb$positions47656.prototype.om$core$IDisplayName$ = true;

sberweb.positions.t_sberweb$positions47656.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__37909__auto__,ufv___47662,output_schema47647_47663,input_schema47648_47664,input_checker47649_47665,output_checker47650_47666){
return (function (_){
var self__ = this;
var ___$1 = this;
return "positions-view";
});})(validate__37909__auto__,ufv___47662,output_schema47647_47663,input_schema47648_47664,input_checker47649_47665,output_checker47650_47666))
;

sberweb.positions.t_sberweb$positions47656.prototype.om$core$IWillMount$ = true;

sberweb.positions.t_sberweb$positions47656.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (validate__37909__auto__,ufv___47662,output_schema47647_47663,input_schema47648_47664,input_checker47649_47665,output_checker47650_47666){
return (function (_){
var self__ = this;
var ___$1 = this;
return sberweb.positions.onMount.call(null,self__.data);
});})(validate__37909__auto__,ufv___47662,output_schema47647_47663,input_schema47648_47664,input_checker47649_47665,output_checker47650_47666))
;

sberweb.positions.t_sberweb$positions47656.prototype.om$core$IRender$ = true;

sberweb.positions.t_sberweb$positions47656.prototype.om$core$IRender$render$arity$1 = ((function (validate__37909__auto__,ufv___47662,output_schema47647_47663,input_schema47648_47664,input_checker47649_47665,output_checker47650_47666){
return (function (_){
var self__ = this;
var ___$1 = this;
var style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"10px",new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),"0px"], null)], null);
var styleprimary = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"70px"], null)], null);
return om_tools.dom.element.call(null,React.DOM.div,om.core.build.call(null,sberweb.core.website_view,sberweb.core.app_state,cljs.core.PersistentArrayMap.EMPTY),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.div,cljs.core.assoc.call(null,styleprimary,new cljs.core.Keyword(null,"className","className",-1983287057),"panel panel-primary"),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build.call(null,sberweb.positions.showpositions_view,self__.data,cljs.core.PersistentArrayMap.EMPTY)],null)))],null)));
});})(validate__37909__auto__,ufv___47662,output_schema47647_47663,input_schema47648_47664,input_checker47649_47665,output_checker47650_47666))
;

sberweb.positions.t_sberweb$positions47656.getBasis = ((function (validate__37909__auto__,ufv___47662,output_schema47647_47663,input_schema47648_47664,input_checker47649_47665,output_checker47650_47666){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"data","data",1407862150,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__47651","G__47651",-27764762,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"input-schema47648","input-schema47648",1343275367,null),new cljs.core.Symbol(null,"validate__37909__auto__","validate__37909__auto__",-807220660,null),cljs.core.with_meta(new cljs.core.Symbol(null,"positions-view","positions-view",1264243663,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))], null))),new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("schema.core","make-fn-schema","schema.core/make-fn-schema",152735578,null),new cljs.core.Symbol(null,"output-schema47647","output-schema47647",1198425073,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"input-schema47648","input-schema47648",1343275367,null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Inputs: [data owner]",new cljs.core.Keyword(null,"raw-arglists","raw-arglists",-1511012109),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"output-schema47647","output-schema47647",1198425073,null),new cljs.core.Symbol(null,"input-checker47649","input-checker47649",1691240595,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__47652","G__47652",-211017161,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"output-checker47650","output-checker47650",-446748360,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"meta47657","meta47657",-1957437878,null)], null);
});})(validate__37909__auto__,ufv___47662,output_schema47647_47663,input_schema47648_47664,input_checker47649_47665,output_checker47650_47666))
;

sberweb.positions.t_sberweb$positions47656.cljs$lang$type = true;

sberweb.positions.t_sberweb$positions47656.cljs$lang$ctorStr = "sberweb.positions/t_sberweb$positions47656";

sberweb.positions.t_sberweb$positions47656.cljs$lang$ctorPrWriter = ((function (validate__37909__auto__,ufv___47662,output_schema47647_47663,input_schema47648_47664,input_checker47649_47665,output_checker47650_47666){
return (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"sberweb.positions/t_sberweb$positions47656");
});})(validate__37909__auto__,ufv___47662,output_schema47647_47663,input_schema47648_47664,input_checker47649_47665,output_checker47650_47666))
;

sberweb.positions.__GT_t_sberweb$positions47656 = ((function (validate__37909__auto__,ufv___47662,output_schema47647_47663,input_schema47648_47664,input_checker47649_47665,output_checker47650_47666){
return (function sberweb$positions$positions_view_$___GT_t_sberweb$positions47656(owner__$1,data__$1,G__47651__$1,input_schema47648__$1,validate__37909__auto____$1,positions_view__$1,output_schema47647__$1,input_checker47649__$1,G__47652__$1,output_checker47650__$1,ufv____$1,meta47657){
return (new sberweb.positions.t_sberweb$positions47656(owner__$1,data__$1,G__47651__$1,input_schema47648__$1,validate__37909__auto____$1,positions_view__$1,output_schema47647__$1,input_checker47649__$1,G__47652__$1,output_checker47650__$1,ufv____$1,meta47657));
});})(validate__37909__auto__,ufv___47662,output_schema47647_47663,input_schema47648_47664,input_checker47649_47665,output_checker47650_47666))
;

}

return (new sberweb.positions.t_sberweb$positions47656(owner,data,G__47651,input_schema47648_47664,validate__37909__auto__,sberweb$positions$positions_view,output_schema47647_47663,input_checker47649_47665,G__47652,output_checker47650_47666,ufv___47662,null));
break;
}
})();
if(cljs.core.truth_(validate__37909__auto__)){
var temp__4657__auto___47670 = output_checker47650_47666.call(null,o__37912__auto__);
if(cljs.core.truth_(temp__4657__auto___47670)){
var error__37911__auto___47671 = temp__4657__auto___47670;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"positions-view","positions-view",1264243663,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__37911__auto___47671)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema47647_47663,new cljs.core.Keyword(null,"value","value",305978217),o__37912__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37911__auto___47671], null));
} else {
}
} else {
}

return o__37912__auto__;
});})(ufv___47662,output_schema47647_47663,input_schema47648_47664,input_checker47649_47665,output_checker47650_47666))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,sberweb.positions.positions_view),schema.core.make_fn_schema.call(null,output_schema47647_47663,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema47648_47664], null)));

sberweb.positions.__GT_positions_view = (function sberweb$positions$__GT_positions_view(var_args){
var args47659 = [];
var len__25947__auto___47672 = arguments.length;
var i__25948__auto___47673 = (0);
while(true){
if((i__25948__auto___47673 < len__25947__auto___47672)){
args47659.push((arguments[i__25948__auto___47673]));

var G__47674 = (i__25948__auto___47673 + (1));
i__25948__auto___47673 = G__47674;
continue;
} else {
}
break;
}

var G__47661 = args47659.length;
switch (G__47661) {
case 1:
return sberweb.positions.__GT_positions_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sberweb.positions.__GT_positions_view.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47659.length)].join('')));

}
});

sberweb.positions.__GT_positions_view.cljs$core$IFn$_invoke$arity$1 = (function (cursor__41613__auto__){
return om.core.build.call(null,sberweb.positions.positions_view,cursor__41613__auto__);
});

sberweb.positions.__GT_positions_view.cljs$core$IFn$_invoke$arity$2 = (function (cursor__41613__auto__,m47646){
return om.core.build.call(null,sberweb.positions.positions_view,cursor__41613__auto__,m47646);
});

sberweb.positions.__GT_positions_view.cljs$lang$maxFixedArity = 2;

var action__41717__auto___47682 = (function (params__41718__auto__){
if(cljs.core.map_QMARK_.call(null,params__41718__auto__)){
var map__47676 = params__41718__auto__;
var map__47676__$1 = ((((!((map__47676 == null)))?((((map__47676.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47676.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47676):map__47676);
return om.core.root.call(null,sberweb.positions.positions_view,sberweb.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__41718__auto__)){
var vec__47678 = params__41718__auto__;
return om.core.root.call(null,sberweb.positions.positions_view,sberweb.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/positions",action__41717__auto___47682);

sberweb.positions.positions_page = ((function (action__41717__auto___47682){
return (function sberweb$positions$positions_page(var_args){
var args__25954__auto__ = [];
var len__25947__auto___47683 = arguments.length;
var i__25948__auto___47684 = (0);
while(true){
if((i__25948__auto___47684 < len__25947__auto___47683)){
args__25954__auto__.push((arguments[i__25948__auto___47684]));

var G__47685 = (i__25948__auto___47684 + (1));
i__25948__auto___47684 = G__47685;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return sberweb.positions.positions_page.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});})(action__41717__auto___47682))
;

sberweb.positions.positions_page.cljs$core$IFn$_invoke$arity$variadic = ((function (action__41717__auto___47682){
return (function (args__41716__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/positions",args__41716__auto__);
});})(action__41717__auto___47682))
;

sberweb.positions.positions_page.cljs$lang$maxFixedArity = (0);

sberweb.positions.positions_page.cljs$lang$applyTo = ((function (action__41717__auto___47682){
return (function (seq47681){
return sberweb.positions.positions_page.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47681));
});})(action__41717__auto___47682))
;


//# sourceMappingURL=positions.js.map?rel=1486365145366