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
var ufv___21943 = schema.utils.use_fn_validation;
var output_schema21932_21944 = om_bootstrap.types.Component;
var input_schema21933_21945 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.panel.Panel,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Panel","Panel",-43708258,null)], null))),schema.core.Any], null);
var input_checker21934_21946 = schema.core.checker.call(null,input_schema21933_21945);
var output_checker21935_21947 = schema.core.checker.call(null,output_schema21932_21944);
/**
 * Inputs: [opts :- Panel & children]
 *   Returns: t/Component
 */
om_bootstrap.panel.panel = ((function (ufv___21943,output_schema21932_21944,input_schema21933_21945,input_checker21934_21946,output_checker21935_21947){
return (function om_bootstrap$panel$panel(var_args){
var args__7333__auto__ = [];
var len__7326__auto___21948 = arguments.length;
var i__7327__auto___21949 = (0);
while(true){
if((i__7327__auto___21949 < len__7326__auto___21948)){
args__7333__auto__.push((arguments[i__7327__auto___21949]));

var G__21950 = (i__7327__auto___21949 + (1));
i__7327__auto___21949 = G__21950;
continue;
} else {
}
break;
}

var argseq__7334__auto__ = ((((1) < args__7333__auto__.length))?(new cljs.core.IndexedSeq(args__7333__auto__.slice((1)),(0),null)):null);
return om_bootstrap.panel.panel.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7334__auto__);
});})(ufv___21943,output_schema21932_21944,input_schema21933_21945,input_checker21934_21946,output_checker21935_21947))
;

om_bootstrap.panel.panel.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___21943,output_schema21932_21944,input_schema21933_21945,input_checker21934_21946,output_checker21935_21947){
return (function (G__21936,rest21937){
var validate__7824__auto__ = ufv___21943.get_cell();
if(cljs.core.truth_(validate__7824__auto__)){
var args__7825__auto___21951 = cljs.core.list_STAR_.call(null,G__21936,rest21937);
var temp__4657__auto___21952 = input_checker21934_21946.call(null,args__7825__auto___21951);
if(cljs.core.truth_(temp__4657__auto___21952)){
var error__7826__auto___21953 = temp__4657__auto___21952;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"panel","panel",1081894071,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__7826__auto___21953)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21933_21945,new cljs.core.Keyword(null,"value","value",305978217),args__7825__auto___21951,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___21953], null));
} else {
}
} else {
}

var o__7827__auto__ = (function (){var opts = G__21936;
var children = rest21937;
while(true){
var vec__21940 = om_bootstrap.types.separate.call(null,om_bootstrap.panel.Panel,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"panel",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"default"], null));
var bs = cljs.core.nth.call(null,vec__21940,(0),null);
var props = cljs.core.nth.call(null,vec__21940,(1),null);
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
if(cljs.core.truth_(validate__7824__auto__)){
var temp__4657__auto___21954 = output_checker21935_21947.call(null,o__7827__auto__);
if(cljs.core.truth_(temp__4657__auto___21954)){
var error__7826__auto___21955 = temp__4657__auto___21954;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"panel","panel",1081894071,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__7826__auto___21955)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21932_21944,new cljs.core.Keyword(null,"value","value",305978217),o__7827__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___21955], null));
} else {
}
} else {
}

return o__7827__auto__;
});})(ufv___21943,output_schema21932_21944,input_schema21933_21945,input_checker21934_21946,output_checker21935_21947))
;

om_bootstrap.panel.panel.cljs$lang$maxFixedArity = (1);

om_bootstrap.panel.panel.cljs$lang$applyTo = ((function (ufv___21943,output_schema21932_21944,input_schema21933_21945,input_checker21934_21946,output_checker21935_21947){
return (function (seq21938){
var G__21939 = cljs.core.first.call(null,seq21938);
var seq21938__$1 = cljs.core.next.call(null,seq21938);
return om_bootstrap.panel.panel.cljs$core$IFn$_invoke$arity$variadic(G__21939,seq21938__$1);
});})(ufv___21943,output_schema21932_21944,input_schema21933_21945,input_checker21934_21946,output_checker21935_21947))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.panel.panel),schema.core.make_fn_schema.call(null,output_schema21932_21944,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21933_21945], null)));
om_bootstrap.panel.collapsible_panel_STAR_$descriptor = (function (){var descriptor__21879__auto__ = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
(descriptor__21879__auto__["mixins"] = [om_bootstrap.mixins.collapsible_mixin]);

return descriptor__21879__auto__;
})();

var component_fnk__21908__auto___21985 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema21960 = schema.core.Any;
var input_schema21961 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"map21959","map21959",-676313611,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)))], null);
var input_checker21962 = schema.core.checker.call(null,input_schema21961);
var output_checker21963 = schema.core.checker.call(null,output_schema21960);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema21960,input_schema21961,input_checker21962,output_checker21963){
return (function om_bootstrap$panel$constructor21957(G__21964){
var validate__7824__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__7824__auto__)){
var args__7825__auto___21986 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21964], null);
var temp__4657__auto___21987 = input_checker21962.call(null,args__7825__auto___21986);
if(cljs.core.truth_(temp__4657__auto___21987)){
var error__7826__auto___21988 = temp__4657__auto___21987;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor21957","constructor21957",-634380493,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__7826__auto___21988)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21961,new cljs.core.Keyword(null,"value","value",305978217),args__7825__auto___21986,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___21988], null));
} else {
}
} else {
}

var o__7827__auto__ = (function (){var map21959 = G__21964;
while(true){
if(cljs.core.map_QMARK_.call(null,map21959)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map21959)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map21959,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map21959,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.panel.t_om_bootstrap$panel21970 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
om_bootstrap.panel.t_om_bootstrap$panel21970 = (function (G__21964,owner,input_checker21962,input_schema21961,validate__7824__auto__,constructor21957,state,map21959,output_schema21960,output_checker21963,ufv__,meta21971){
this.G__21964 = G__21964;
this.owner = owner;
this.input_checker21962 = input_checker21962;
this.input_schema21961 = input_schema21961;
this.validate__7824__auto__ = validate__7824__auto__;
this.constructor21957 = constructor21957;
this.state = state;
this.map21959 = map21959;
this.output_schema21960 = output_schema21960;
this.output_checker21963 = output_checker21963;
this.ufv__ = ufv__;
this.meta21971 = meta21971;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.panel.t_om_bootstrap$panel21970.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,owner,validate__7824__auto__,ufv__,output_schema21960,input_schema21961,input_checker21962,output_checker21963){
return (function (_21972,meta21971__$1){
var self__ = this;
var _21972__$1 = this;
return (new om_bootstrap.panel.t_om_bootstrap$panel21970(self__.G__21964,self__.owner,self__.input_checker21962,self__.input_schema21961,self__.validate__7824__auto__,self__.constructor21957,self__.state,self__.map21959,self__.output_schema21960,self__.output_checker21963,self__.ufv__,meta21971__$1));
});})(state,owner,validate__7824__auto__,ufv__,output_schema21960,input_schema21961,input_checker21962,output_checker21963))
;

om_bootstrap.panel.t_om_bootstrap$panel21970.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,owner,validate__7824__auto__,ufv__,output_schema21960,input_schema21961,input_checker21962,output_checker21963){
return (function (_21972){
var self__ = this;
var _21972__$1 = this;
return self__.meta21971;
});})(state,owner,validate__7824__auto__,ufv__,output_schema21960,input_schema21961,input_checker21962,output_checker21963))
;

om_bootstrap.panel.t_om_bootstrap$panel21970.prototype.om$core$IDisplayName$ = true;

om_bootstrap.panel.t_om_bootstrap$panel21970.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,owner,validate__7824__auto__,ufv__,output_schema21960,input_schema21961,input_checker21962,output_checker21963){
return (function (_){
var self__ = this;
var ___$1 = this;
return "collapsible-panel*";
});})(state,owner,validate__7824__auto__,ufv__,output_schema21960,input_schema21961,input_checker21962,output_checker21963))
;

om_bootstrap.panel.t_om_bootstrap$panel21970.prototype.om$core$IRender$ = true;

om_bootstrap.panel.t_om_bootstrap$panel21970.prototype.om$core$IRender$render$arity$1 = ((function (state,owner,validate__7824__auto__,ufv__,output_schema21960,input_schema21961,input_checker21962,output_checker21963){
return (function (_){
var self__ = this;
var ___$1 = this;
var map__21973 = om.core.get_props.call(null,self__.owner);
var map__21973__$1 = ((((!((map__21973 == null)))?((((map__21973.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21973.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21973):map__21973);
var opts = cljs.core.get.call(null,map__21973__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var children = cljs.core.get.call(null,map__21973__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var is_collapsed_QMARK_ = (self__.owner["isPanelCollapsed"]).call(null,self__.owner);
var toggle_BANG_ = ((function (map__21973,map__21973__$1,opts,children,is_collapsed_QMARK_,___$1,state,owner,validate__7824__auto__,ufv__,output_schema21960,input_schema21961,input_checker21962,output_checker21963){
return (function (___$2){
(self__.owner["toggleCollapsed"]).call(null,self__.owner);

return false;
});})(map__21973,map__21973__$1,opts,children,is_collapsed_QMARK_,___$1,state,owner,validate__7824__auto__,ufv__,output_schema21960,input_schema21961,input_checker21962,output_checker21963))
;
var collapsible_header = om_tools.dom.element.call(null,React.DOM.h4,cljs.core.apply.call(null,React.DOM.a,{"href": "#", "onClick": om_tools.dom.format_opts.call(null,toggle_BANG_)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"header","header",119441134).cljs$core$IFn$_invoke$arity$1(opts)],null)))),cljs.core.PersistentVector.EMPTY);
return om_bootstrap.panel.panel.call(null,om_bootstrap.util.merge_props.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"header","header",119441134),collapsible_header,new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674),is_collapsed_QMARK_], null)),children);
});})(state,owner,validate__7824__auto__,ufv__,output_schema21960,input_schema21961,input_checker21962,output_checker21963))
;

om_bootstrap.panel.t_om_bootstrap$panel21970.getBasis = ((function (state,owner,validate__7824__auto__,ufv__,output_schema21960,input_schema21961,input_checker21962,output_checker21963){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"G__21964","G__21964",-27693438,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"input-checker21962","input-checker21962",-1534400828,null),new cljs.core.Symbol(null,"input-schema21961","input-schema21961",-2022004983,null),new cljs.core.Symbol(null,"validate__7824__auto__","validate__7824__auto__",1540215376,null),cljs.core.with_meta(new cljs.core.Symbol(null,"constructor21957","constructor21957",-634380493,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"map21959","map21959",-676313611,null),new cljs.core.Symbol(null,"output-schema21960","output-schema21960",-109193096,null),new cljs.core.Symbol(null,"output-checker21963","output-checker21963",-511737030,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"meta21971","meta21971",-827086732,null)], null);
});})(state,owner,validate__7824__auto__,ufv__,output_schema21960,input_schema21961,input_checker21962,output_checker21963))
;

om_bootstrap.panel.t_om_bootstrap$panel21970.cljs$lang$type = true;

om_bootstrap.panel.t_om_bootstrap$panel21970.cljs$lang$ctorStr = "om-bootstrap.panel/t_om_bootstrap$panel21970";

om_bootstrap.panel.t_om_bootstrap$panel21970.cljs$lang$ctorPrWriter = ((function (state,owner,validate__7824__auto__,ufv__,output_schema21960,input_schema21961,input_checker21962,output_checker21963){
return (function (this__6857__auto__,writer__6858__auto__,opt__6859__auto__){
return cljs.core._write.call(null,writer__6858__auto__,"om-bootstrap.panel/t_om_bootstrap$panel21970");
});})(state,owner,validate__7824__auto__,ufv__,output_schema21960,input_schema21961,input_checker21962,output_checker21963))
;

om_bootstrap.panel.__GT_t_om_bootstrap$panel21970 = ((function (state,owner,validate__7824__auto__,ufv__,output_schema21960,input_schema21961,input_checker21962,output_checker21963){
return (function om_bootstrap$panel$constructor21957_$___GT_t_om_bootstrap$panel21970(G__21964__$1,owner__$1,input_checker21962__$1,input_schema21961__$1,validate__7824__auto____$1,constructor21957__$1,state__$1,map21959__$1,output_schema21960__$1,output_checker21963__$1,ufv____$1,meta21971){
return (new om_bootstrap.panel.t_om_bootstrap$panel21970(G__21964__$1,owner__$1,input_checker21962__$1,input_schema21961__$1,validate__7824__auto____$1,constructor21957__$1,state__$1,map21959__$1,output_schema21960__$1,output_checker21963__$1,ufv____$1,meta21971));
});})(state,owner,validate__7824__auto__,ufv__,output_schema21960,input_schema21961,input_checker21962,output_checker21963))
;

}

return (new om_bootstrap.panel.t_om_bootstrap$panel21970(G__21964,owner,input_checker21962,input_schema21961,validate__7824__auto__,om_bootstrap$panel$constructor21957,state,map21959,output_schema21960,output_checker21963,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__7824__auto__)){
var temp__4657__auto___21989 = output_checker21963.call(null,o__7827__auto__);
if(cljs.core.truth_(temp__4657__auto___21989)){
var error__7826__auto___21990 = temp__4657__auto___21989;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor21957","constructor21957",-634380493,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__7826__auto___21990)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21960,new cljs.core.Keyword(null,"value","value",305978217),o__7827__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___21990], null));
} else {
}
} else {
}

return o__7827__auto__;
});})(ufv__,output_schema21960,input_schema21961,input_checker21962,output_checker21963))
,schema.core.make_fn_schema.call(null,output_schema21960,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21961], null)));
})();
/**
 * Generates a collapsible panel component resposible for its own toggled state.
 * The :collapsed? state is handled through a collapsible mixin.
 */
om_bootstrap.panel.collapsible_panel_STAR_ = ((function (component_fnk__21908__auto___21985){
return (function om_bootstrap$panel$collapsible_panel_STAR_(var_args){
var args__7333__auto__ = [];
var len__7326__auto___21991 = arguments.length;
var i__7327__auto___21992 = (0);
while(true){
if((i__7327__auto___21992 < len__7326__auto___21991)){
args__7333__auto__.push((arguments[i__7327__auto___21992]));

var G__21993 = (i__7327__auto___21992 + (1));
i__7327__auto___21992 = G__21993;
continue;
} else {
}
break;
}

var argseq__7334__auto__ = ((((2) < args__7333__auto__.length))?(new cljs.core.IndexedSeq(args__7333__auto__.slice((2)),(0),null)):null);
return om_bootstrap.panel.collapsible_panel_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7334__auto__);
});})(component_fnk__21908__auto___21985))
;

om_bootstrap.panel.collapsible_panel_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__21908__auto___21985){
return (function (data__21909__auto__,owner21956,p__21978){
var vec__21979 = p__21978;
var opts__21910__auto__ = cljs.core.nth.call(null,vec__21979,(0),null);
return component_fnk__21908__auto___21985.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner21956),new cljs.core.Keyword(null,"opts","opts",155075701),opts__21910__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner21956,new cljs.core.Keyword(null,"data","data",-232669377),data__21909__auto__], null));
});})(component_fnk__21908__auto___21985))
;

om_bootstrap.panel.collapsible_panel_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.panel.collapsible_panel_STAR_.cljs$lang$applyTo = ((function (component_fnk__21908__auto___21985){
return (function (seq21975){
var G__21976 = cljs.core.first.call(null,seq21975);
var seq21975__$1 = cljs.core.next.call(null,seq21975);
var G__21977 = cljs.core.first.call(null,seq21975__$1);
var seq21975__$2 = cljs.core.next.call(null,seq21975__$1);
return om_bootstrap.panel.collapsible_panel_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__21976,G__21977,seq21975__$2);
});})(component_fnk__21908__auto___21985))
;


om_bootstrap.panel.__GT_collapsible_panel_STAR_ = (function om_bootstrap$panel$__GT_collapsible_panel_STAR_(var_args){
var args21982 = [];
var len__7326__auto___21994 = arguments.length;
var i__7327__auto___21995 = (0);
while(true){
if((i__7327__auto___21995 < len__7326__auto___21994)){
args21982.push((arguments[i__7327__auto___21995]));

var G__21996 = (i__7327__auto___21995 + (1));
i__7327__auto___21995 = G__21996;
continue;
} else {
}
break;
}

var G__21984 = args21982.length;
switch (G__21984) {
case 1:
return om_bootstrap.panel.__GT_collapsible_panel_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.panel.__GT_collapsible_panel_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21982.length)].join('')));

}
});

om_bootstrap.panel.__GT_collapsible_panel_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__21877__auto__){
return om.core.build.call(null,om_bootstrap.panel.collapsible_panel_STAR_,cursor__21877__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.panel.collapsible_panel_STAR_$descriptor], null));
});

om_bootstrap.panel.__GT_collapsible_panel_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__21877__auto__,m21958){
return om.core.build.call(null,om_bootstrap.panel.collapsible_panel_STAR_,cursor__21877__auto__,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.panel.collapsible_panel_STAR_$descriptor], null),m21958));
});

om_bootstrap.panel.__GT_collapsible_panel_STAR_.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=panel.js.map?rel=1486035196406