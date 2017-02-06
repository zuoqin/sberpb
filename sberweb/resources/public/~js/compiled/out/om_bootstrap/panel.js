// Compiled by ClojureScript 1.9.89 {}
goog.provide('om_bootstrap.panel');
goog.require('cljs.core');
goog.require('om_bootstrap.types');
goog.require('schema.core');
goog.require('om_bootstrap.util');
goog.require('om_tools.dom');
goog.require('om_tools.core');
goog.require('om_bootstrap.mixins');
goog.require('om.core');
om_bootstrap.panel.Panel = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"header","header",119441134)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"footer","footer",1606445390)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"list-group","list-group",-304522729)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"collapsible?","collapsible?",-1508197779)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674)),schema.core.Bool], true, false));
var ufv___40216 = schema.utils.use_fn_validation;
var output_schema40205_40217 = om_bootstrap.types.Component;
var input_schema40206_40218 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.panel.Panel,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Panel","Panel",-43708258,null)], null))),schema.core.Any], null);
var input_checker40207_40219 = schema.core.checker.call(null,input_schema40206_40218);
var output_checker40208_40220 = schema.core.checker.call(null,output_schema40205_40217);
/**
 * Inputs: [opts :- Panel & children]
 *   Returns: t/Component
 */
om_bootstrap.panel.panel = ((function (ufv___40216,output_schema40205_40217,input_schema40206_40218,input_checker40207_40219,output_checker40208_40220){
return (function om_bootstrap$panel$panel(var_args){
var args__25954__auto__ = [];
var len__25947__auto___40221 = arguments.length;
var i__25948__auto___40222 = (0);
while(true){
if((i__25948__auto___40222 < len__25947__auto___40221)){
args__25954__auto__.push((arguments[i__25948__auto___40222]));

var G__40223 = (i__25948__auto___40222 + (1));
i__25948__auto___40222 = G__40223;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((1) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((1)),(0),null)):null);
return om_bootstrap.panel.panel.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25955__auto__);
});})(ufv___40216,output_schema40205_40217,input_schema40206_40218,input_checker40207_40219,output_checker40208_40220))
;

om_bootstrap.panel.panel.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___40216,output_schema40205_40217,input_schema40206_40218,input_checker40207_40219,output_checker40208_40220){
return (function (G__40209,rest40210){
var validate__29415__auto__ = ufv___40216.get_cell();
if(cljs.core.truth_(validate__29415__auto__)){
var args__29416__auto___40224 = cljs.core.list_STAR_.call(null,G__40209,rest40210);
var temp__4657__auto___40225 = input_checker40207_40219.call(null,args__29416__auto___40224);
if(cljs.core.truth_(temp__4657__auto___40225)){
var error__29417__auto___40226 = temp__4657__auto___40225;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"panel","panel",1081894071,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__29417__auto___40226)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema40206_40218,new cljs.core.Keyword(null,"value","value",305978217),args__29416__auto___40224,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___40226], null));
} else {
}
} else {
}

var o__29418__auto__ = (function (){var opts = G__40209;
var children = rest40210;
while(true){
var vec__40213 = om_bootstrap.types.separate.call(null,om_bootstrap.panel.Panel,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"panel",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"default"], null));
var bs = cljs.core.nth.call(null,vec__40213,(0),null);
var props = cljs.core.nth.call(null,vec__40213,(1),null);
var classes = cljs.core.assoc.call(null,om_bootstrap.types.bs_class_set.call(null,bs),new cljs.core.Keyword(null,"panel","panel",-558637456),true);
if(cljs.core.truth_(new cljs.core.Keyword(null,"collapsible?","collapsible?",-1508197779).cljs$core$IFn$_invoke$arity$1(bs))){
return om_bootstrap.panel.__GT_collapsible_panel_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"collapsible?","collapsible?",-1508197779)),new cljs.core.Keyword(null,"children","children",-940561982),children], null));
} else {
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"header","header",119441134).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4657__auto__)){
var header = temp__4657__auto__;
return cljs.core.apply.call(null,React.DOM.div,{"className": "panel-heading"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_bootstrap.util.clone_with_props.call(null,header,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"panel-title"], null))],null))));
} else {
return null;
}
})(),((cljs.core._EQ_.call(null,(0),cljs.core.count.call(null,cljs.core.filter.call(null,cljs.core.identity,children))))?null:cljs.core.apply.call(null,React.DOM.div,{"className": om_tools.dom.format_opts.call(null,[cljs.core.str("panel-body"),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674).cljs$core$IFn$_invoke$arity$1(bs))?" collapse":null))].join('')), "ref": "body"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))))),(function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"list-group","list-group",-304522729).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4657__auto__)){
var list_group = temp__4657__auto__;
return list_group;
} else {
return null;
}
})(),(function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"footer","footer",1606445390).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4657__auto__)){
var footer = temp__4657__auto__;
return cljs.core.apply.call(null,React.DOM.div,{"className": "panel-footer"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[footer],null))));
} else {
return null;
}
})()],null)));
}
break;
}
})();
if(cljs.core.truth_(validate__29415__auto__)){
var temp__4657__auto___40227 = output_checker40208_40220.call(null,o__29418__auto__);
if(cljs.core.truth_(temp__4657__auto___40227)){
var error__29417__auto___40228 = temp__4657__auto___40227;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"panel","panel",1081894071,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__29417__auto___40228)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema40205_40217,new cljs.core.Keyword(null,"value","value",305978217),o__29418__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___40228], null));
} else {
}
} else {
}

return o__29418__auto__;
});})(ufv___40216,output_schema40205_40217,input_schema40206_40218,input_checker40207_40219,output_checker40208_40220))
;

om_bootstrap.panel.panel.cljs$lang$maxFixedArity = (1);

om_bootstrap.panel.panel.cljs$lang$applyTo = ((function (ufv___40216,output_schema40205_40217,input_schema40206_40218,input_checker40207_40219,output_checker40208_40220){
return (function (seq40211){
var G__40212 = cljs.core.first.call(null,seq40211);
var seq40211__$1 = cljs.core.next.call(null,seq40211);
return om_bootstrap.panel.panel.cljs$core$IFn$_invoke$arity$variadic(G__40212,seq40211__$1);
});})(ufv___40216,output_schema40205_40217,input_schema40206_40218,input_checker40207_40219,output_checker40208_40220))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.panel.panel),schema.core.make_fn_schema.call(null,output_schema40205_40217,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40206_40218], null)));
om_bootstrap.panel.collapsible_panel_STAR_$descriptor = (function (){var descriptor__40152__auto__ = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
(descriptor__40152__auto__["mixins"] = [om_bootstrap.mixins.collapsible_mixin]);

return descriptor__40152__auto__;
})();

var component_fnk__40181__auto___40258 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema40233 = schema.core.Any;
var input_schema40234 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"map40232","map40232",-1470894008,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)))], null);
var input_checker40235 = schema.core.checker.call(null,input_schema40234);
var output_checker40236 = schema.core.checker.call(null,output_schema40233);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema40233,input_schema40234,input_checker40235,output_checker40236){
return (function om_bootstrap$panel$constructor40230(G__40237){
var validate__29415__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__29415__auto__)){
var args__29416__auto___40259 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__40237], null);
var temp__4657__auto___40260 = input_checker40235.call(null,args__29416__auto___40259);
if(cljs.core.truth_(temp__4657__auto___40260)){
var error__29417__auto___40261 = temp__4657__auto___40260;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor40230","constructor40230",-1901850664,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__29417__auto___40261)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema40234,new cljs.core.Keyword(null,"value","value",305978217),args__29416__auto___40259,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___40261], null));
} else {
}
} else {
}

var o__29418__auto__ = (function (){var map40232 = G__40237;
while(true){
if(cljs.core.map_QMARK_.call(null,map40232)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map40232)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map40232,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map40232,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.panel.t_om_bootstrap$panel40243 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
om_bootstrap.panel.t_om_bootstrap$panel40243 = (function (input_checker40235,owner,output_checker40236,map40232,input_schema40234,validate__29415__auto__,state,output_schema40233,constructor40230,G__40237,ufv__,meta40244){
this.input_checker40235 = input_checker40235;
this.owner = owner;
this.output_checker40236 = output_checker40236;
this.map40232 = map40232;
this.input_schema40234 = input_schema40234;
this.validate__29415__auto__ = validate__29415__auto__;
this.state = state;
this.output_schema40233 = output_schema40233;
this.constructor40230 = constructor40230;
this.G__40237 = G__40237;
this.ufv__ = ufv__;
this.meta40244 = meta40244;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.panel.t_om_bootstrap$panel40243.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,owner,validate__29415__auto__,ufv__,output_schema40233,input_schema40234,input_checker40235,output_checker40236){
return (function (_40245,meta40244__$1){
var self__ = this;
var _40245__$1 = this;
return (new om_bootstrap.panel.t_om_bootstrap$panel40243(self__.input_checker40235,self__.owner,self__.output_checker40236,self__.map40232,self__.input_schema40234,self__.validate__29415__auto__,self__.state,self__.output_schema40233,self__.constructor40230,self__.G__40237,self__.ufv__,meta40244__$1));
});})(state,owner,validate__29415__auto__,ufv__,output_schema40233,input_schema40234,input_checker40235,output_checker40236))
;

om_bootstrap.panel.t_om_bootstrap$panel40243.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,owner,validate__29415__auto__,ufv__,output_schema40233,input_schema40234,input_checker40235,output_checker40236){
return (function (_40245){
var self__ = this;
var _40245__$1 = this;
return self__.meta40244;
});})(state,owner,validate__29415__auto__,ufv__,output_schema40233,input_schema40234,input_checker40235,output_checker40236))
;

om_bootstrap.panel.t_om_bootstrap$panel40243.prototype.om$core$IDisplayName$ = true;

om_bootstrap.panel.t_om_bootstrap$panel40243.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,owner,validate__29415__auto__,ufv__,output_schema40233,input_schema40234,input_checker40235,output_checker40236){
return (function (_){
var self__ = this;
var ___$1 = this;
return "collapsible-panel*";
});})(state,owner,validate__29415__auto__,ufv__,output_schema40233,input_schema40234,input_checker40235,output_checker40236))
;

om_bootstrap.panel.t_om_bootstrap$panel40243.prototype.om$core$IRender$ = true;

om_bootstrap.panel.t_om_bootstrap$panel40243.prototype.om$core$IRender$render$arity$1 = ((function (state,owner,validate__29415__auto__,ufv__,output_schema40233,input_schema40234,input_checker40235,output_checker40236){
return (function (_){
var self__ = this;
var ___$1 = this;
var map__40246 = om.core.get_props.call(null,self__.owner);
var map__40246__$1 = ((((!((map__40246 == null)))?((((map__40246.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40246.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40246):map__40246);
var opts = cljs.core.get.call(null,map__40246__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var children = cljs.core.get.call(null,map__40246__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var is_collapsed_QMARK_ = (self__.owner["isPanelCollapsed"]).call(null,self__.owner);
var toggle_BANG_ = ((function (map__40246,map__40246__$1,opts,children,is_collapsed_QMARK_,___$1,state,owner,validate__29415__auto__,ufv__,output_schema40233,input_schema40234,input_checker40235,output_checker40236){
return (function (___$2){
(self__.owner["toggleCollapsed"]).call(null,self__.owner);

return false;
});})(map__40246,map__40246__$1,opts,children,is_collapsed_QMARK_,___$1,state,owner,validate__29415__auto__,ufv__,output_schema40233,input_schema40234,input_checker40235,output_checker40236))
;
var collapsible_header = om_tools.dom.element.call(null,React.DOM.h4,cljs.core.apply.call(null,React.DOM.a,{"href": "#", "onClick": om_tools.dom.format_opts.call(null,toggle_BANG_)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"header","header",119441134).cljs$core$IFn$_invoke$arity$1(opts)],null)))),cljs.core.PersistentVector.EMPTY);
return om_bootstrap.panel.panel.call(null,om_bootstrap.util.merge_props.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"header","header",119441134),collapsible_header,new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674),is_collapsed_QMARK_], null)),children);
});})(state,owner,validate__29415__auto__,ufv__,output_schema40233,input_schema40234,input_checker40235,output_checker40236))
;

om_bootstrap.panel.t_om_bootstrap$panel40243.getBasis = ((function (state,owner,validate__29415__auto__,ufv__,output_schema40233,input_schema40234,input_checker40235,output_checker40236){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"input-checker40235","input-checker40235",663062722,null),cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"output-checker40236","output-checker40236",-2028393211,null),new cljs.core.Symbol(null,"map40232","map40232",-1470894008,null),new cljs.core.Symbol(null,"input-schema40234","input-schema40234",-2147468883,null),new cljs.core.Symbol(null,"validate__29415__auto__","validate__29415__auto__",-2035315153,null),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"output-schema40233","output-schema40233",951125781,null),cljs.core.with_meta(new cljs.core.Symbol(null,"constructor40230","constructor40230",-1901850664,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"G__40237","G__40237",-1630102340,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"meta40244","meta40244",1931096369,null)], null);
});})(state,owner,validate__29415__auto__,ufv__,output_schema40233,input_schema40234,input_checker40235,output_checker40236))
;

om_bootstrap.panel.t_om_bootstrap$panel40243.cljs$lang$type = true;

om_bootstrap.panel.t_om_bootstrap$panel40243.cljs$lang$ctorStr = "om-bootstrap.panel/t_om_bootstrap$panel40243";

om_bootstrap.panel.t_om_bootstrap$panel40243.cljs$lang$ctorPrWriter = ((function (state,owner,validate__29415__auto__,ufv__,output_schema40233,input_schema40234,input_checker40235,output_checker40236){
return (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"om-bootstrap.panel/t_om_bootstrap$panel40243");
});})(state,owner,validate__29415__auto__,ufv__,output_schema40233,input_schema40234,input_checker40235,output_checker40236))
;

om_bootstrap.panel.__GT_t_om_bootstrap$panel40243 = ((function (state,owner,validate__29415__auto__,ufv__,output_schema40233,input_schema40234,input_checker40235,output_checker40236){
return (function om_bootstrap$panel$constructor40230_$___GT_t_om_bootstrap$panel40243(input_checker40235__$1,owner__$1,output_checker40236__$1,map40232__$1,input_schema40234__$1,validate__29415__auto____$1,state__$1,output_schema40233__$1,constructor40230__$1,G__40237__$1,ufv____$1,meta40244){
return (new om_bootstrap.panel.t_om_bootstrap$panel40243(input_checker40235__$1,owner__$1,output_checker40236__$1,map40232__$1,input_schema40234__$1,validate__29415__auto____$1,state__$1,output_schema40233__$1,constructor40230__$1,G__40237__$1,ufv____$1,meta40244));
});})(state,owner,validate__29415__auto__,ufv__,output_schema40233,input_schema40234,input_checker40235,output_checker40236))
;

}

return (new om_bootstrap.panel.t_om_bootstrap$panel40243(input_checker40235,owner,output_checker40236,map40232,input_schema40234,validate__29415__auto__,state,output_schema40233,om_bootstrap$panel$constructor40230,G__40237,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__29415__auto__)){
var temp__4657__auto___40262 = output_checker40236.call(null,o__29418__auto__);
if(cljs.core.truth_(temp__4657__auto___40262)){
var error__29417__auto___40263 = temp__4657__auto___40262;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor40230","constructor40230",-1901850664,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__29417__auto___40263)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema40233,new cljs.core.Keyword(null,"value","value",305978217),o__29418__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___40263], null));
} else {
}
} else {
}

return o__29418__auto__;
});})(ufv__,output_schema40233,input_schema40234,input_checker40235,output_checker40236))
,schema.core.make_fn_schema.call(null,output_schema40233,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40234], null)));
})();
/**
 * Generates a collapsible panel component resposible for its own toggled state.
 * The :collapsed? state is handled through a collapsible mixin.
 */
om_bootstrap.panel.collapsible_panel_STAR_ = ((function (component_fnk__40181__auto___40258){
return (function om_bootstrap$panel$collapsible_panel_STAR_(var_args){
var args__25954__auto__ = [];
var len__25947__auto___40264 = arguments.length;
var i__25948__auto___40265 = (0);
while(true){
if((i__25948__auto___40265 < len__25947__auto___40264)){
args__25954__auto__.push((arguments[i__25948__auto___40265]));

var G__40266 = (i__25948__auto___40265 + (1));
i__25948__auto___40265 = G__40266;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((2) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((2)),(0),null)):null);
return om_bootstrap.panel.collapsible_panel_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25955__auto__);
});})(component_fnk__40181__auto___40258))
;

om_bootstrap.panel.collapsible_panel_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__40181__auto___40258){
return (function (data__40182__auto__,owner40229,p__40251){
var vec__40252 = p__40251;
var opts__40183__auto__ = cljs.core.nth.call(null,vec__40252,(0),null);
return component_fnk__40181__auto___40258.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner40229),new cljs.core.Keyword(null,"opts","opts",155075701),opts__40183__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner40229,new cljs.core.Keyword(null,"data","data",-232669377),data__40182__auto__], null));
});})(component_fnk__40181__auto___40258))
;

om_bootstrap.panel.collapsible_panel_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.panel.collapsible_panel_STAR_.cljs$lang$applyTo = ((function (component_fnk__40181__auto___40258){
return (function (seq40248){
var G__40249 = cljs.core.first.call(null,seq40248);
var seq40248__$1 = cljs.core.next.call(null,seq40248);
var G__40250 = cljs.core.first.call(null,seq40248__$1);
var seq40248__$2 = cljs.core.next.call(null,seq40248__$1);
return om_bootstrap.panel.collapsible_panel_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__40249,G__40250,seq40248__$2);
});})(component_fnk__40181__auto___40258))
;


om_bootstrap.panel.__GT_collapsible_panel_STAR_ = (function om_bootstrap$panel$__GT_collapsible_panel_STAR_(var_args){
var args40255 = [];
var len__25947__auto___40267 = arguments.length;
var i__25948__auto___40268 = (0);
while(true){
if((i__25948__auto___40268 < len__25947__auto___40267)){
args40255.push((arguments[i__25948__auto___40268]));

var G__40269 = (i__25948__auto___40268 + (1));
i__25948__auto___40268 = G__40269;
continue;
} else {
}
break;
}

var G__40257 = args40255.length;
switch (G__40257) {
case 1:
return om_bootstrap.panel.__GT_collapsible_panel_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.panel.__GT_collapsible_panel_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40255.length)].join('')));

}
});

om_bootstrap.panel.__GT_collapsible_panel_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__40150__auto__){
return om.core.build.call(null,om_bootstrap.panel.collapsible_panel_STAR_,cursor__40150__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.panel.collapsible_panel_STAR_$descriptor], null));
});

om_bootstrap.panel.__GT_collapsible_panel_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__40150__auto__,m40231){
return om.core.build.call(null,om_bootstrap.panel.collapsible_panel_STAR_,cursor__40150__auto__,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.panel.collapsible_panel_STAR_$descriptor], null),m40231));
});

om_bootstrap.panel.__GT_collapsible_panel_STAR_.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=panel.js.map?rel=1486291273073