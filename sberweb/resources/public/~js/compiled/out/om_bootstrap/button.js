// Compiled by ClojureScript 1.9.89 {}
goog.provide('om_bootstrap.button');
goog.require('cljs.core');
goog.require('om_bootstrap.types');
goog.require('schema.core');
goog.require('om_bootstrap.util');
goog.require('om_tools.dom');
goog.require('om_tools.mixin');
goog.require('om_tools.core');
goog.require('om_bootstrap.mixins');
goog.require('om.core');
om_bootstrap.button.Button = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"active?","active?",459499776)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"block?","block?",1102479923)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"nav-dropdown?","nav-dropdown?",2070486004)),schema.core.Bool], true, false));
om_bootstrap.button.ButtonGroup = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"justified?","justified?",-1045366764)),schema.core.Bool], true, false));
var ufv___40812 = schema.utils.use_fn_validation;
var output_schema40806_40813 = schema.core.Any;
var input_schema40807_40814 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"classes","classes",2037804510),cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),schema.core.maybe.call(null,schema.core.Bool),new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false)], null),cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker40808_40815 = schema.core.checker.call(null,input_schema40807_40814);
var output_checker40809_40816 = schema.core.checker.call(null,output_schema40806_40813);
/**
 * Inputs: [opts :- {:classes {s/Any s/Any}, :disabled? (s/maybe s/Bool), :props {s/Any s/Any}} children]
 */
om_bootstrap.button.render_anchor = ((function (ufv___40812,output_schema40806_40813,input_schema40807_40814,input_checker40808_40815,output_checker40809_40816){
return (function om_bootstrap$button$render_anchor(G__40810,G__40811){
var validate__29415__auto__ = ufv___40812.get_cell();
if(cljs.core.truth_(validate__29415__auto__)){
var args__29416__auto___40817 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__40810,G__40811], null);
var temp__4657__auto___40818 = input_checker40808_40815.call(null,args__29416__auto___40817);
if(cljs.core.truth_(temp__4657__auto___40818)){
var error__29417__auto___40819 = temp__4657__auto___40818;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-anchor","render-anchor",-1892709609,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__29417__auto___40819)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema40807_40814,new cljs.core.Keyword(null,"value","value",305978217),args__29416__auto___40817,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___40819], null));
} else {
}
} else {
}

var o__29418__auto__ = (function (){var opts = G__40810;
var children = G__40811;
while(true){
var props = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(opts),"#"),new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,cljs.core.assoc.call(null,new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(opts))),new cljs.core.Keyword(null,"role","role",-736691072),"button"], null);
return om_tools.dom.element.call(null,React.DOM.a,om_bootstrap.util.merge_props.call(null,props,new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(opts)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__29415__auto__)){
var temp__4657__auto___40820 = output_checker40809_40816.call(null,o__29418__auto__);
if(cljs.core.truth_(temp__4657__auto___40820)){
var error__29417__auto___40821 = temp__4657__auto___40820;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-anchor","render-anchor",-1892709609,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__29417__auto___40821)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema40806_40813,new cljs.core.Keyword(null,"value","value",305978217),o__29418__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___40821], null));
} else {
}
} else {
}

return o__29418__auto__;
});})(ufv___40812,output_schema40806_40813,input_schema40807_40814,input_checker40808_40815,output_checker40809_40816))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.render_anchor),schema.core.make_fn_schema.call(null,output_schema40806_40813,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40807_40814], null)));
var ufv___40833 = schema.utils.use_fn_validation;
var output_schema40822_40834 = om_bootstrap.types.Component;
var input_schema40823_40835 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.Button,cljs.core.with_meta(new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Button","Button",-1787718586,null)], null))),schema.core.Any], null);
var input_checker40824_40836 = schema.core.checker.call(null,input_schema40823_40835);
var output_checker40825_40837 = schema.core.checker.call(null,output_schema40822_40834);
/**
 * Inputs: [props :- Button & children]
 *   Returns: t/Component
 * 
 *   Renders a button.
 */
om_bootstrap.button.button = ((function (ufv___40833,output_schema40822_40834,input_schema40823_40835,input_checker40824_40836,output_checker40825_40837){
return (function om_bootstrap$button$button(var_args){
var args__25954__auto__ = [];
var len__25947__auto___40838 = arguments.length;
var i__25948__auto___40839 = (0);
while(true){
if((i__25948__auto___40839 < len__25947__auto___40838)){
args__25954__auto__.push((arguments[i__25948__auto___40839]));

var G__40840 = (i__25948__auto___40839 + (1));
i__25948__auto___40839 = G__40840;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((1) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((1)),(0),null)):null);
return om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25955__auto__);
});})(ufv___40833,output_schema40822_40834,input_schema40823_40835,input_checker40824_40836,output_checker40825_40837))
;

om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___40833,output_schema40822_40834,input_schema40823_40835,input_checker40824_40836,output_checker40825_40837){
return (function (G__40826,rest40827){
var validate__29415__auto__ = ufv___40833.get_cell();
if(cljs.core.truth_(validate__29415__auto__)){
var args__29416__auto___40841 = cljs.core.list_STAR_.call(null,G__40826,rest40827);
var temp__4657__auto___40842 = input_checker40824_40836.call(null,args__29416__auto___40841);
if(cljs.core.truth_(temp__4657__auto___40842)){
var error__29417__auto___40843 = temp__4657__auto___40842;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"button","button",-1197855826,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders a button."], null)),cljs.core.pr_str.call(null,error__29417__auto___40843)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema40823_40835,new cljs.core.Keyword(null,"value","value",305978217),args__29416__auto___40841,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___40843], null));
} else {
}
} else {
}

var o__29418__auto__ = (function (){var props = G__40826;
var children = rest40827;
while(true){
var vec__40830 = om_bootstrap.types.separate.call(null,om_bootstrap.button.Button,props,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"button",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"default",new cljs.core.Keyword(null,"type","type",1174270348),"button"], null));
var bs = cljs.core.nth.call(null,vec__40830,(0),null);
var props__$1 = cljs.core.nth.call(null,vec__40830,(1),null);
var klasses = (cljs.core.truth_(new cljs.core.Keyword(null,"nav-dropdown?","nav-dropdown?",2070486004).cljs$core$IFn$_invoke$arity$1(bs))?cljs.core.PersistentArrayMap.EMPTY:om_bootstrap.types.bs_class_set.call(null,bs));
var klasses__$1 = cljs.core.merge.call(null,klasses,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"btn-block","btn-block",967079535),new cljs.core.Keyword(null,"block?","block?",1102479923).cljs$core$IFn$_invoke$arity$1(bs)], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031).cljs$core$IFn$_invoke$arity$1(bs))){
return cljs.core.apply.call(null,React.DOM.li,{"className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(bs)], null)))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_bootstrap.button.render_anchor.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),props__$1,new cljs.core.Keyword(null,"classes","classes",2037804510),klasses__$1], null),children)],null))));
} else {
if(cljs.core.truth_((function (){var or__24872__auto__ = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(props__$1);
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return new cljs.core.Keyword(null,"nav-dropdown?","nav-dropdown?",2070486004).cljs$core$IFn$_invoke$arity$1(bs);
}
})())){
return om_bootstrap.button.render_anchor.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"props","props",453281727),props__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"classes","classes",2037804510),klasses__$1], null),children);
} else {
return om_tools.dom.element.call(null,React.DOM.button,om_bootstrap.util.merge_props.call(null,props__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,klasses__$1),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(bs)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));

}
}
break;
}
})();
if(cljs.core.truth_(validate__29415__auto__)){
var temp__4657__auto___40844 = output_checker40825_40837.call(null,o__29418__auto__);
if(cljs.core.truth_(temp__4657__auto___40844)){
var error__29417__auto___40845 = temp__4657__auto___40844;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"button","button",-1197855826,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders a button."], null)),cljs.core.pr_str.call(null,error__29417__auto___40845)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema40822_40834,new cljs.core.Keyword(null,"value","value",305978217),o__29418__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___40845], null));
} else {
}
} else {
}

return o__29418__auto__;
});})(ufv___40833,output_schema40822_40834,input_schema40823_40835,input_checker40824_40836,output_checker40825_40837))
;

om_bootstrap.button.button.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.button.cljs$lang$applyTo = ((function (ufv___40833,output_schema40822_40834,input_schema40823_40835,input_checker40824_40836,output_checker40825_40837){
return (function (seq40828){
var G__40829 = cljs.core.first.call(null,seq40828);
var seq40828__$1 = cljs.core.next.call(null,seq40828);
return om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic(G__40829,seq40828__$1);
});})(ufv___40833,output_schema40822_40834,input_schema40823_40835,input_checker40824_40836,output_checker40825_40837))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.button),schema.core.make_fn_schema.call(null,output_schema40822_40834,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40823_40835], null)));
var ufv___40857 = schema.utils.use_fn_validation;
var output_schema40846_40858 = om_bootstrap.types.Component;
var input_schema40847_40859 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.Any], null);
var input_checker40848_40860 = schema.core.checker.call(null,input_schema40847_40859);
var output_checker40849_40861 = schema.core.checker.call(null,output_schema40846_40858);
/**
 * Inputs: [opts & children]
 *   Returns: t/Component
 * 
 *   Renders a button toolbar.
 */
om_bootstrap.button.toolbar = ((function (ufv___40857,output_schema40846_40858,input_schema40847_40859,input_checker40848_40860,output_checker40849_40861){
return (function om_bootstrap$button$toolbar(var_args){
var args__25954__auto__ = [];
var len__25947__auto___40862 = arguments.length;
var i__25948__auto___40863 = (0);
while(true){
if((i__25948__auto___40863 < len__25947__auto___40862)){
args__25954__auto__.push((arguments[i__25948__auto___40863]));

var G__40864 = (i__25948__auto___40863 + (1));
i__25948__auto___40863 = G__40864;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((1) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((1)),(0),null)):null);
return om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25955__auto__);
});})(ufv___40857,output_schema40846_40858,input_schema40847_40859,input_checker40848_40860,output_checker40849_40861))
;

om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___40857,output_schema40846_40858,input_schema40847_40859,input_checker40848_40860,output_checker40849_40861){
return (function (G__40850,rest40851){
var validate__29415__auto__ = ufv___40857.get_cell();
if(cljs.core.truth_(validate__29415__auto__)){
var args__29416__auto___40865 = cljs.core.list_STAR_.call(null,G__40850,rest40851);
var temp__4657__auto___40866 = input_checker40848_40860.call(null,args__29416__auto___40865);
if(cljs.core.truth_(temp__4657__auto___40866)){
var error__29417__auto___40867 = temp__4657__auto___40866;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"toolbar","toolbar",467742462,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders a button toolbar."], null)),cljs.core.pr_str.call(null,error__29417__auto___40867)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema40847_40859,new cljs.core.Keyword(null,"value","value",305978217),args__29416__auto___40865,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___40867], null));
} else {
}
} else {
}

var o__29418__auto__ = (function (){var opts = G__40850;
var children = rest40851;
while(true){
var vec__40854 = om_bootstrap.types.separate.call(null,cljs.core.PersistentArrayMap.EMPTY,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"button-toolbar"], null));
var bs = cljs.core.nth.call(null,vec__40854,(0),null);
var props = cljs.core.nth.call(null,vec__40854,(1),null);
return cljs.core.apply.call(null,React.DOM.div,{"role": "toolbar", "className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,om_bootstrap.types.bs_class_set.call(null,bs)))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))));
break;
}
})();
if(cljs.core.truth_(validate__29415__auto__)){
var temp__4657__auto___40868 = output_checker40849_40861.call(null,o__29418__auto__);
if(cljs.core.truth_(temp__4657__auto___40868)){
var error__29417__auto___40869 = temp__4657__auto___40868;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"toolbar","toolbar",467742462,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders a button toolbar."], null)),cljs.core.pr_str.call(null,error__29417__auto___40869)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema40846_40858,new cljs.core.Keyword(null,"value","value",305978217),o__29418__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___40869], null));
} else {
}
} else {
}

return o__29418__auto__;
});})(ufv___40857,output_schema40846_40858,input_schema40847_40859,input_checker40848_40860,output_checker40849_40861))
;

om_bootstrap.button.toolbar.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.toolbar.cljs$lang$applyTo = ((function (ufv___40857,output_schema40846_40858,input_schema40847_40859,input_checker40848_40860,output_checker40849_40861){
return (function (seq40852){
var G__40853 = cljs.core.first.call(null,seq40852);
var seq40852__$1 = cljs.core.next.call(null,seq40852);
return om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic(G__40853,seq40852__$1);
});})(ufv___40857,output_schema40846_40858,input_schema40847_40859,input_checker40848_40860,output_checker40849_40861))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.toolbar),schema.core.make_fn_schema.call(null,output_schema40846_40858,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40847_40859], null)));
var ufv___40881 = schema.utils.use_fn_validation;
var output_schema40870_40882 = om_bootstrap.types.Component;
var input_schema40871_40883 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.ButtonGroup,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"ButtonGroup","ButtonGroup",-309978472,null)], null))),schema.core.Any], null);
var input_checker40872_40884 = schema.core.checker.call(null,input_schema40871_40883);
var output_checker40873_40885 = schema.core.checker.call(null,output_schema40870_40882);
/**
 * Inputs: [opts :- ButtonGroup & children]
 *   Returns: t/Component
 * 
 *   Renders the supplied children in a wrapping button-group div.
 */
om_bootstrap.button.button_group = ((function (ufv___40881,output_schema40870_40882,input_schema40871_40883,input_checker40872_40884,output_checker40873_40885){
return (function om_bootstrap$button$button_group(var_args){
var args__25954__auto__ = [];
var len__25947__auto___40886 = arguments.length;
var i__25948__auto___40887 = (0);
while(true){
if((i__25948__auto___40887 < len__25947__auto___40886)){
args__25954__auto__.push((arguments[i__25948__auto___40887]));

var G__40888 = (i__25948__auto___40887 + (1));
i__25948__auto___40887 = G__40888;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((1) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((1)),(0),null)):null);
return om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25955__auto__);
});})(ufv___40881,output_schema40870_40882,input_schema40871_40883,input_checker40872_40884,output_checker40873_40885))
;

om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___40881,output_schema40870_40882,input_schema40871_40883,input_checker40872_40884,output_checker40873_40885){
return (function (G__40874,rest40875){
var validate__29415__auto__ = ufv___40881.get_cell();
if(cljs.core.truth_(validate__29415__auto__)){
var args__29416__auto___40889 = cljs.core.list_STAR_.call(null,G__40874,rest40875);
var temp__4657__auto___40890 = input_checker40872_40884.call(null,args__29416__auto___40889);
if(cljs.core.truth_(temp__4657__auto___40890)){
var error__29417__auto___40891 = temp__4657__auto___40890;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"button-group","button-group",108385979,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders the supplied children in a wrapping button-group div."], null)),cljs.core.pr_str.call(null,error__29417__auto___40891)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema40871_40883,new cljs.core.Keyword(null,"value","value",305978217),args__29416__auto___40889,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___40891], null));
} else {
}
} else {
}

var o__29418__auto__ = (function (){var opts = G__40874;
var children = rest40875;
while(true){
var vec__40878 = om_bootstrap.types.separate.call(null,om_bootstrap.button.ButtonGroup,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"button-group"], null));
var bs = cljs.core.nth.call(null,vec__40878,(0),null);
var props = cljs.core.nth.call(null,vec__40878,(1),null);
var classes = cljs.core.merge.call(null,om_bootstrap.types.bs_class_set.call(null,bs),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"btn-group","btn-group",114866246),cljs.core.not.call(null,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444).cljs$core$IFn$_invoke$arity$1(bs)),new cljs.core.Keyword(null,"btn-group-vertical","btn-group-vertical",-1273565878),new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"btn-group-justified","btn-group-justified",1401722505),new cljs.core.Keyword(null,"justified?","justified?",-1045366764).cljs$core$IFn$_invoke$arity$1(bs)], null));
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__29415__auto__)){
var temp__4657__auto___40892 = output_checker40873_40885.call(null,o__29418__auto__);
if(cljs.core.truth_(temp__4657__auto___40892)){
var error__29417__auto___40893 = temp__4657__auto___40892;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"button-group","button-group",108385979,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders the supplied children in a wrapping button-group div."], null)),cljs.core.pr_str.call(null,error__29417__auto___40893)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema40870_40882,new cljs.core.Keyword(null,"value","value",305978217),o__29418__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___40893], null));
} else {
}
} else {
}

return o__29418__auto__;
});})(ufv___40881,output_schema40870_40882,input_schema40871_40883,input_checker40872_40884,output_checker40873_40885))
;

om_bootstrap.button.button_group.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.button_group.cljs$lang$applyTo = ((function (ufv___40881,output_schema40870_40882,input_schema40871_40883,input_checker40872_40884,output_checker40873_40885){
return (function (seq40876){
var G__40877 = cljs.core.first.call(null,seq40876);
var seq40876__$1 = cljs.core.next.call(null,seq40876);
return om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic(G__40877,seq40876__$1);
});})(ufv___40881,output_schema40870_40882,input_schema40871_40883,input_checker40872_40884,output_checker40873_40885))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.button_group),schema.core.make_fn_schema.call(null,output_schema40870_40882,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40871_40883], null)));
om_bootstrap.button.DropdownButton = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"href","href",-793805698)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-click","on-click",1632826543)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031)),schema.core.Bool], true, false));
om_bootstrap.button.render_nav_item = (function om_bootstrap$button$render_nav_item(props,open_QMARK_,children){
var classes = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dropdown","dropdown",1343185805),true,new cljs.core.Keyword(null,"open","open",-1763596448),open_QMARK_,new cljs.core.Keyword(null,"dropup","dropup",-1031053231),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428).cljs$core$IFn$_invoke$arity$1(props)], null);
return cljs.core.apply.call(null,React.DOM.li,{"className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,classes))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))));
});
om_bootstrap.button.render_button_group = (function om_bootstrap$button$render_button_group(props,open_QMARK_,children){
var group_classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),open_QMARK_,new cljs.core.Keyword(null,"dropup","dropup",-1031053231),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428).cljs$core$IFn$_invoke$arity$1(props)], null);
return om_bootstrap.button.button_group.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-size","bs-size",1567732754),new cljs.core.Keyword(null,"bs-size","bs-size",1567732754).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,group_classes)], null),children);
});
om_bootstrap.button.MenuItem = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"key","key",-1516042587),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"header?","header?",-106649173)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"divider?","divider?",1882560157)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"href","href",-793805698)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))], true, false));

var component_fnk__40181__auto___40929 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema40898 = schema.core.Any;
var input_schema40899 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"map40897","map40897",16709208,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)))], null);
var input_checker40900 = schema.core.checker.call(null,input_schema40899);
var output_checker40901 = schema.core.checker.call(null,output_schema40898);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema40898,input_schema40899,input_checker40900,output_checker40901){
return (function om_bootstrap$button$constructor40895(G__40902){
var validate__29415__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__29415__auto__)){
var args__29416__auto___40930 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__40902], null);
var temp__4657__auto___40931 = input_checker40900.call(null,args__29416__auto___40930);
if(cljs.core.truth_(temp__4657__auto___40931)){
var error__29417__auto___40932 = temp__4657__auto___40931;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor40895","constructor40895",-695817241,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__29417__auto___40932)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema40899,new cljs.core.Keyword(null,"value","value",305978217),args__29416__auto___40930,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___40932], null));
} else {
}
} else {
}

var o__29418__auto__ = (function (){var map40897 = G__40902;
while(true){
if(cljs.core.map_QMARK_.call(null,map40897)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map40897)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map40897,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.button.t_om_bootstrap$button40911 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
om_bootstrap.button.t_om_bootstrap$button40911 = (function (owner,constructor40895,validate__29415__auto__,output_checker40901,input_schema40899,input_checker40900,map40897,G__40902,output_schema40898,ufv__,meta40912){
this.owner = owner;
this.constructor40895 = constructor40895;
this.validate__29415__auto__ = validate__29415__auto__;
this.output_checker40901 = output_checker40901;
this.input_schema40899 = input_schema40899;
this.input_checker40900 = input_checker40900;
this.map40897 = map40897;
this.G__40902 = G__40902;
this.output_schema40898 = output_schema40898;
this.ufv__ = ufv__;
this.meta40912 = meta40912;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.button.t_om_bootstrap$button40911.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,validate__29415__auto__,ufv__,output_schema40898,input_schema40899,input_checker40900,output_checker40901){
return (function (_40913,meta40912__$1){
var self__ = this;
var _40913__$1 = this;
return (new om_bootstrap.button.t_om_bootstrap$button40911(self__.owner,self__.constructor40895,self__.validate__29415__auto__,self__.output_checker40901,self__.input_schema40899,self__.input_checker40900,self__.map40897,self__.G__40902,self__.output_schema40898,self__.ufv__,meta40912__$1));
});})(owner,validate__29415__auto__,ufv__,output_schema40898,input_schema40899,input_checker40900,output_checker40901))
;

om_bootstrap.button.t_om_bootstrap$button40911.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,validate__29415__auto__,ufv__,output_schema40898,input_schema40899,input_checker40900,output_checker40901){
return (function (_40913){
var self__ = this;
var _40913__$1 = this;
return self__.meta40912;
});})(owner,validate__29415__auto__,ufv__,output_schema40898,input_schema40899,input_checker40900,output_checker40901))
;

om_bootstrap.button.t_om_bootstrap$button40911.prototype.om$core$IDisplayName$ = true;

om_bootstrap.button.t_om_bootstrap$button40911.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,validate__29415__auto__,ufv__,output_schema40898,input_schema40899,input_checker40900,output_checker40901){
return (function (_){
var self__ = this;
var ___$1 = this;
return "menu-item*";
});})(owner,validate__29415__auto__,ufv__,output_schema40898,input_schema40899,input_checker40900,output_checker40901))
;

om_bootstrap.button.t_om_bootstrap$button40911.prototype.om$core$IRender$ = true;

om_bootstrap.button.t_om_bootstrap$button40911.prototype.om$core$IRender$render$arity$1 = ((function (owner,validate__29415__auto__,ufv__,output_schema40898,input_schema40899,input_checker40900,output_checker40901){
return (function (_){
var self__ = this;
var ___$1 = this;
var map__40914 = om.core.get_props.call(null,self__.owner);
var map__40914__$1 = ((((!((map__40914 == null)))?((((map__40914.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40914.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40914):map__40914);
var opts = cljs.core.get.call(null,map__40914__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var children = cljs.core.get.call(null,map__40914__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var vec__40915 = om_bootstrap.types.separate.call(null,om_bootstrap.button.MenuItem,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null));
var bs = cljs.core.nth.call(null,vec__40915,(0),null);
var props = cljs.core.nth.call(null,vec__40915,(1),null);
var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dropdown-header","dropdown-header",-1451449167),new cljs.core.Keyword(null,"header?","header?",-106649173).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"divider","divider",1265972657),new cljs.core.Keyword(null,"divider?","divider?",1882560157).cljs$core$IFn$_invoke$arity$1(bs)], null);
var handle_click = ((function (map__40914,map__40914__$1,opts,children,vec__40915,bs,props,classes,___$1,owner,validate__29415__auto__,ufv__,output_schema40898,input_schema40899,input_checker40900,output_checker40901){
return (function (e){
var temp__4657__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4657__auto__)){
var on_select = temp__4657__auto__;
e.preventDefault();

return on_select.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(bs));
} else {
return null;
}
});})(map__40914,map__40914__$1,opts,children,vec__40915,bs,props,classes,___$1,owner,validate__29415__auto__,ufv__,output_schema40898,input_schema40899,input_checker40900,output_checker40901))
;
var children__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"header?","header?",-106649173).cljs$core$IFn$_invoke$arity$1(bs))?children:cljs.core.apply.call(null,React.DOM.a,{"onClick": om_tools.dom.format_opts.call(null,handle_click), "href": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(bs)), "title": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs)), "tabIndex": "-1"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)))));
var li_attrs = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"role","role",-736691072),"presentation",new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null),(function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4657__auto__)){
var k = temp__4657__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null);
} else {
return null;
}
})());
return om_tools.dom.element.call(null,React.DOM.li,om_bootstrap.util.merge_props.call(null,props,li_attrs),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$1],null)));
});})(owner,validate__29415__auto__,ufv__,output_schema40898,input_schema40899,input_checker40900,output_checker40901))
;

om_bootstrap.button.t_om_bootstrap$button40911.getBasis = ((function (owner,validate__29415__auto__,ufv__,output_schema40898,input_schema40899,input_checker40900,output_checker40901){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"constructor40895","constructor40895",-695817241,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"validate__29415__auto__","validate__29415__auto__",-2035315153,null),new cljs.core.Symbol(null,"output-checker40901","output-checker40901",1325029584,null),new cljs.core.Symbol(null,"input-schema40899","input-schema40899",-1763043374,null),new cljs.core.Symbol(null,"input-checker40900","input-checker40900",-1732393705,null),new cljs.core.Symbol(null,"map40897","map40897",16709208,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__40902","G__40902",1785810106,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)),new cljs.core.Symbol(null,"output-schema40898","output-schema40898",-252637222,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"meta40912","meta40912",-1614929558,null)], null);
});})(owner,validate__29415__auto__,ufv__,output_schema40898,input_schema40899,input_checker40900,output_checker40901))
;

om_bootstrap.button.t_om_bootstrap$button40911.cljs$lang$type = true;

om_bootstrap.button.t_om_bootstrap$button40911.cljs$lang$ctorStr = "om-bootstrap.button/t_om_bootstrap$button40911";

om_bootstrap.button.t_om_bootstrap$button40911.cljs$lang$ctorPrWriter = ((function (owner,validate__29415__auto__,ufv__,output_schema40898,input_schema40899,input_checker40900,output_checker40901){
return (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"om-bootstrap.button/t_om_bootstrap$button40911");
});})(owner,validate__29415__auto__,ufv__,output_schema40898,input_schema40899,input_checker40900,output_checker40901))
;

om_bootstrap.button.__GT_t_om_bootstrap$button40911 = ((function (owner,validate__29415__auto__,ufv__,output_schema40898,input_schema40899,input_checker40900,output_checker40901){
return (function om_bootstrap$button$constructor40895_$___GT_t_om_bootstrap$button40911(owner__$1,constructor40895__$1,validate__29415__auto____$1,output_checker40901__$1,input_schema40899__$1,input_checker40900__$1,map40897__$1,G__40902__$1,output_schema40898__$1,ufv____$1,meta40912){
return (new om_bootstrap.button.t_om_bootstrap$button40911(owner__$1,constructor40895__$1,validate__29415__auto____$1,output_checker40901__$1,input_schema40899__$1,input_checker40900__$1,map40897__$1,G__40902__$1,output_schema40898__$1,ufv____$1,meta40912));
});})(owner,validate__29415__auto__,ufv__,output_schema40898,input_schema40899,input_checker40900,output_checker40901))
;

}

return (new om_bootstrap.button.t_om_bootstrap$button40911(owner,om_bootstrap$button$constructor40895,validate__29415__auto__,output_checker40901,input_schema40899,input_checker40900,map40897,G__40902,output_schema40898,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__29415__auto__)){
var temp__4657__auto___40933 = output_checker40901.call(null,o__29418__auto__);
if(cljs.core.truth_(temp__4657__auto___40933)){
var error__29417__auto___40934 = temp__4657__auto___40933;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor40895","constructor40895",-695817241,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__29417__auto___40934)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema40898,new cljs.core.Keyword(null,"value","value",305978217),o__29418__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___40934], null));
} else {
}
} else {
}

return o__29418__auto__;
});})(ufv__,output_schema40898,input_schema40899,input_checker40900,output_checker40901))
,schema.core.make_fn_schema.call(null,output_schema40898,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40899], null)));
})();
/**
 * Generates an Om component of a menu item. Done this way so that
 *   wrapping dropdowns will have access to the Om state.
 */
om_bootstrap.button.menu_item_STAR_ = ((function (component_fnk__40181__auto___40929){
return (function om_bootstrap$button$menu_item_STAR_(var_args){
var args__25954__auto__ = [];
var len__25947__auto___40935 = arguments.length;
var i__25948__auto___40936 = (0);
while(true){
if((i__25948__auto___40936 < len__25947__auto___40935)){
args__25954__auto__.push((arguments[i__25948__auto___40936]));

var G__40937 = (i__25948__auto___40936 + (1));
i__25948__auto___40936 = G__40937;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((2) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((2)),(0),null)):null);
return om_bootstrap.button.menu_item_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25955__auto__);
});})(component_fnk__40181__auto___40929))
;

om_bootstrap.button.menu_item_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__40181__auto___40929){
return (function (data__40182__auto__,owner40894,p__40922){
var vec__40923 = p__40922;
var opts__40183__auto__ = cljs.core.nth.call(null,vec__40923,(0),null);
return component_fnk__40181__auto___40929.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__40183__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner40894,new cljs.core.Keyword(null,"data","data",-232669377),data__40182__auto__], null));
});})(component_fnk__40181__auto___40929))
;

om_bootstrap.button.menu_item_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.button.menu_item_STAR_.cljs$lang$applyTo = ((function (component_fnk__40181__auto___40929){
return (function (seq40919){
var G__40920 = cljs.core.first.call(null,seq40919);
var seq40919__$1 = cljs.core.next.call(null,seq40919);
var G__40921 = cljs.core.first.call(null,seq40919__$1);
var seq40919__$2 = cljs.core.next.call(null,seq40919__$1);
return om_bootstrap.button.menu_item_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__40920,G__40921,seq40919__$2);
});})(component_fnk__40181__auto___40929))
;


om_bootstrap.button.__GT_menu_item_STAR_ = (function om_bootstrap$button$__GT_menu_item_STAR_(var_args){
var args40926 = [];
var len__25947__auto___40938 = arguments.length;
var i__25948__auto___40939 = (0);
while(true){
if((i__25948__auto___40939 < len__25947__auto___40938)){
args40926.push((arguments[i__25948__auto___40939]));

var G__40940 = (i__25948__auto___40939 + (1));
i__25948__auto___40939 = G__40940;
continue;
} else {
}
break;
}

var G__40928 = args40926.length;
switch (G__40928) {
case 1:
return om_bootstrap.button.__GT_menu_item_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.button.__GT_menu_item_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40926.length)].join('')));

}
});

om_bootstrap.button.__GT_menu_item_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__40150__auto__){
return om.core.build.call(null,om_bootstrap.button.menu_item_STAR_,cursor__40150__auto__);
});

om_bootstrap.button.__GT_menu_item_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__40150__auto__,m40896){
return om.core.build.call(null,om_bootstrap.button.menu_item_STAR_,cursor__40150__auto__,m40896);
});

om_bootstrap.button.__GT_menu_item_STAR_.cljs$lang$maxFixedArity = 2;

var ufv___40950 = schema.utils.use_fn_validation;
var output_schema40942_40951 = om_bootstrap.types.Component;
var input_schema40943_40952 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.MenuItem,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"MenuItem","MenuItem",1235363736,null)], null))),schema.core.Any], null);
var input_checker40944_40953 = schema.core.checker.call(null,input_schema40943_40952);
var output_checker40945_40954 = schema.core.checker.call(null,output_schema40942_40951);
/**
 * Inputs: [opts :- MenuItem & children]
 *   Returns: t/Component
 */
om_bootstrap.button.menu_item = ((function (ufv___40950,output_schema40942_40951,input_schema40943_40952,input_checker40944_40953,output_checker40945_40954){
return (function om_bootstrap$button$menu_item(var_args){
var args__25954__auto__ = [];
var len__25947__auto___40955 = arguments.length;
var i__25948__auto___40956 = (0);
while(true){
if((i__25948__auto___40956 < len__25947__auto___40955)){
args__25954__auto__.push((arguments[i__25948__auto___40956]));

var G__40957 = (i__25948__auto___40956 + (1));
i__25948__auto___40956 = G__40957;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((1) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((1)),(0),null)):null);
return om_bootstrap.button.menu_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25955__auto__);
});})(ufv___40950,output_schema40942_40951,input_schema40943_40952,input_checker40944_40953,output_checker40945_40954))
;

om_bootstrap.button.menu_item.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___40950,output_schema40942_40951,input_schema40943_40952,input_checker40944_40953,output_checker40945_40954){
return (function (G__40946,rest40947){
var validate__29415__auto__ = ufv___40950.get_cell();
if(cljs.core.truth_(validate__29415__auto__)){
var args__29416__auto___40958 = cljs.core.list_STAR_.call(null,G__40946,rest40947);
var temp__4657__auto___40959 = input_checker40944_40953.call(null,args__29416__auto___40958);
if(cljs.core.truth_(temp__4657__auto___40959)){
var error__29417__auto___40960 = temp__4657__auto___40959;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"menu-item","menu-item",269419754,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__29417__auto___40960)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema40943_40952,new cljs.core.Keyword(null,"value","value",305978217),args__29416__auto___40958,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___40960], null));
} else {
}
} else {
}

var o__29418__auto__ = (function (){var opts = G__40946;
var children = rest40947;
while(true){
return om_bootstrap.button.__GT_menu_item_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__29415__auto__)){
var temp__4657__auto___40961 = output_checker40945_40954.call(null,o__29418__auto__);
if(cljs.core.truth_(temp__4657__auto___40961)){
var error__29417__auto___40962 = temp__4657__auto___40961;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"menu-item","menu-item",269419754,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__29417__auto___40962)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema40942_40951,new cljs.core.Keyword(null,"value","value",305978217),o__29418__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___40962], null));
} else {
}
} else {
}

return o__29418__auto__;
});})(ufv___40950,output_schema40942_40951,input_schema40943_40952,input_checker40944_40953,output_checker40945_40954))
;

om_bootstrap.button.menu_item.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.menu_item.cljs$lang$applyTo = ((function (ufv___40950,output_schema40942_40951,input_schema40943_40952,input_checker40944_40953,output_checker40945_40954){
return (function (seq40948){
var G__40949 = cljs.core.first.call(null,seq40948);
var seq40948__$1 = cljs.core.next.call(null,seq40948);
return om_bootstrap.button.menu_item.cljs$core$IFn$_invoke$arity$variadic(G__40949,seq40948__$1);
});})(ufv___40950,output_schema40942_40951,input_schema40943_40952,input_checker40944_40953,output_checker40945_40954))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.menu_item),schema.core.make_fn_schema.call(null,output_schema40942_40951,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40943_40952], null)));
om_bootstrap.button.DropdownMenu = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))], true, false));
var ufv___40975 = schema.utils.use_fn_validation;
var output_schema40964_40976 = om_bootstrap.types.Component;
var input_schema40965_40977 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.DropdownMenu,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"DropdownMenu","DropdownMenu",881901742,null)], null))),schema.core.Any], null);
var input_checker40966_40978 = schema.core.checker.call(null,input_schema40965_40977);
var output_checker40967_40979 = schema.core.checker.call(null,output_schema40964_40976);
/**
 * Inputs: [opts :- DropdownMenu & children]
 *   Returns: t/Component
 */
om_bootstrap.button.dropdown_menu = ((function (ufv___40975,output_schema40964_40976,input_schema40965_40977,input_checker40966_40978,output_checker40967_40979){
return (function om_bootstrap$button$dropdown_menu(var_args){
var args__25954__auto__ = [];
var len__25947__auto___40980 = arguments.length;
var i__25948__auto___40981 = (0);
while(true){
if((i__25948__auto___40981 < len__25947__auto___40980)){
args__25954__auto__.push((arguments[i__25948__auto___40981]));

var G__40982 = (i__25948__auto___40981 + (1));
i__25948__auto___40981 = G__40982;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((1) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((1)),(0),null)):null);
return om_bootstrap.button.dropdown_menu.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25955__auto__);
});})(ufv___40975,output_schema40964_40976,input_schema40965_40977,input_checker40966_40978,output_checker40967_40979))
;

om_bootstrap.button.dropdown_menu.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___40975,output_schema40964_40976,input_schema40965_40977,input_checker40966_40978,output_checker40967_40979){
return (function (G__40968,rest40969){
var validate__29415__auto__ = ufv___40975.get_cell();
if(cljs.core.truth_(validate__29415__auto__)){
var args__29416__auto___40983 = cljs.core.list_STAR_.call(null,G__40968,rest40969);
var temp__4657__auto___40984 = input_checker40966_40978.call(null,args__29416__auto___40983);
if(cljs.core.truth_(temp__4657__auto___40984)){
var error__29417__auto___40985 = temp__4657__auto___40984;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"dropdown-menu","dropdown-menu",-2089460283,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__29417__auto___40985)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema40965_40977,new cljs.core.Keyword(null,"value","value",305978217),args__29416__auto___40983,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___40985], null));
} else {
}
} else {
}

var o__29418__auto__ = (function (){var opts = G__40968;
var children = rest40969;
while(true){
var vec__40972 = om_bootstrap.types.separate.call(null,om_bootstrap.button.DropdownMenu,opts);
var bs = cljs.core.nth.call(null,vec__40972,(0),null);
var props = cljs.core.nth.call(null,vec__40972,(1),null);
var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dropdown-menu","dropdown-menu",564975486),true,new cljs.core.Keyword(null,"dropdown-menu-right","dropdown-menu-right",-1532579541),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs)], null);
var ul_attrs = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes),new cljs.core.Keyword(null,"role","role",-736691072),"menu"], null);
return om_tools.dom.element.call(null,React.DOM.ul,om_bootstrap.util.merge_props.call(null,props,ul_attrs),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var temp__4655__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4655__auto__)){
var on_select = temp__4655__auto__;
return cljs.core.map.call(null,((function (on_select,temp__4655__auto__,vec__40972,bs,props,classes,ul_attrs,validate__29415__auto__,ufv___40975,output_schema40964_40976,input_schema40965_40977,input_checker40966_40978,output_checker40967_40979){
return (function (p1__40963_SHARP_){
return om_bootstrap.util.clone_with_props.call(null,p1__40963_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),on_select], null));
});})(on_select,temp__4655__auto__,vec__40972,bs,props,classes,ul_attrs,validate__29415__auto__,ufv___40975,output_schema40964_40976,input_schema40965_40977,input_checker40966_40978,output_checker40967_40979))
,children);
} else {
return children;
}
})()],null)));
break;
}
})();
if(cljs.core.truth_(validate__29415__auto__)){
var temp__4657__auto___40986 = output_checker40967_40979.call(null,o__29418__auto__);
if(cljs.core.truth_(temp__4657__auto___40986)){
var error__29417__auto___40987 = temp__4657__auto___40986;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"dropdown-menu","dropdown-menu",-2089460283,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__29417__auto___40987)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema40964_40976,new cljs.core.Keyword(null,"value","value",305978217),o__29418__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___40987], null));
} else {
}
} else {
}

return o__29418__auto__;
});})(ufv___40975,output_schema40964_40976,input_schema40965_40977,input_checker40966_40978,output_checker40967_40979))
;

om_bootstrap.button.dropdown_menu.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.dropdown_menu.cljs$lang$applyTo = ((function (ufv___40975,output_schema40964_40976,input_schema40965_40977,input_checker40966_40978,output_checker40967_40979){
return (function (seq40970){
var G__40971 = cljs.core.first.call(null,seq40970);
var seq40970__$1 = cljs.core.next.call(null,seq40970);
return om_bootstrap.button.dropdown_menu.cljs$core$IFn$_invoke$arity$variadic(G__40971,seq40970__$1);
});})(ufv___40975,output_schema40964_40976,input_schema40965_40977,input_checker40966_40978,output_checker40967_40979))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.dropdown_menu),schema.core.make_fn_schema.call(null,output_schema40964_40976,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40965_40977], null)));
om_bootstrap.button.dropdown_STAR_$descriptor = (function (){var descriptor__40152__auto__ = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
(descriptor__40152__auto__["mixins"] = [om_bootstrap.mixins.dropdown_mixin]);

return descriptor__40152__auto__;
})();

var component_fnk__40181__auto___41024 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema40993 = schema.core.Any;
var input_schema40994 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"map40992","map40992",316063193,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)))], null);
var input_checker40995 = schema.core.checker.call(null,input_schema40994);
var output_checker40996 = schema.core.checker.call(null,output_schema40993);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema40993,input_schema40994,input_checker40995,output_checker40996){
return (function om_bootstrap$button$constructor40990(G__40997){
var validate__29415__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__29415__auto__)){
var args__29416__auto___41025 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__40997], null);
var temp__4657__auto___41026 = input_checker40995.call(null,args__29416__auto___41025);
if(cljs.core.truth_(temp__4657__auto___41026)){
var error__29417__auto___41027 = temp__4657__auto___41026;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor40990","constructor40990",-1511717867,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__29417__auto___41027)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema40994,new cljs.core.Keyword(null,"value","value",305978217),args__29416__auto___41025,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___41027], null));
} else {
}
} else {
}

var o__29418__auto__ = (function (){var map40992 = G__40997;
while(true){
if(cljs.core.map_QMARK_.call(null,map40992)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map40992)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map40992,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map40992,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.button.t_om_bootstrap$button41006 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
om_bootstrap.button.t_om_bootstrap$button41006 = (function (owner,G__40997,output_schema40993,input_checker40995,validate__29415__auto__,input_schema40994,state,output_checker40996,constructor40990,map40992,ufv__,meta41007){
this.owner = owner;
this.G__40997 = G__40997;
this.output_schema40993 = output_schema40993;
this.input_checker40995 = input_checker40995;
this.validate__29415__auto__ = validate__29415__auto__;
this.input_schema40994 = input_schema40994;
this.state = state;
this.output_checker40996 = output_checker40996;
this.constructor40990 = constructor40990;
this.map40992 = map40992;
this.ufv__ = ufv__;
this.meta41007 = meta41007;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.button.t_om_bootstrap$button41006.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,owner,validate__29415__auto__,ufv__,output_schema40993,input_schema40994,input_checker40995,output_checker40996){
return (function (_41008,meta41007__$1){
var self__ = this;
var _41008__$1 = this;
return (new om_bootstrap.button.t_om_bootstrap$button41006(self__.owner,self__.G__40997,self__.output_schema40993,self__.input_checker40995,self__.validate__29415__auto__,self__.input_schema40994,self__.state,self__.output_checker40996,self__.constructor40990,self__.map40992,self__.ufv__,meta41007__$1));
});})(state,owner,validate__29415__auto__,ufv__,output_schema40993,input_schema40994,input_checker40995,output_checker40996))
;

om_bootstrap.button.t_om_bootstrap$button41006.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,owner,validate__29415__auto__,ufv__,output_schema40993,input_schema40994,input_checker40995,output_checker40996){
return (function (_41008){
var self__ = this;
var _41008__$1 = this;
return self__.meta41007;
});})(state,owner,validate__29415__auto__,ufv__,output_schema40993,input_schema40994,input_checker40995,output_checker40996))
;

om_bootstrap.button.t_om_bootstrap$button41006.prototype.om$core$IDisplayName$ = true;

om_bootstrap.button.t_om_bootstrap$button41006.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,owner,validate__29415__auto__,ufv__,output_schema40993,input_schema40994,input_checker40995,output_checker40996){
return (function (_){
var self__ = this;
var ___$1 = this;
return "dropdown*";
});})(state,owner,validate__29415__auto__,ufv__,output_schema40993,input_schema40994,input_checker40995,output_checker40996))
;

om_bootstrap.button.t_om_bootstrap$button41006.prototype.om$core$IRender$ = true;

om_bootstrap.button.t_om_bootstrap$button41006.prototype.om$core$IRender$render$arity$1 = ((function (state,owner,validate__29415__auto__,ufv__,output_schema40993,input_schema40994,input_checker40995,output_checker40996){
return (function (_){
var self__ = this;
var ___$1 = this;
var open_QMARK_ = (self__.owner["isDropdownOpen"]).call(null);
var map__41009 = om.core.get_props.call(null,self__.owner);
var map__41009__$1 = ((((!((map__41009 == null)))?((((map__41009.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41009.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41009):map__41009);
var opts = cljs.core.get.call(null,map__41009__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var children = cljs.core.get.call(null,map__41009__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var vec__41010 = om_bootstrap.types.separate.call(null,om_bootstrap.button.DropdownButton,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null));
var bs = cljs.core.nth.call(null,vec__41010,(0),null);
var props = cljs.core.nth.call(null,vec__41010,(1),null);
var set_dropdown = (self__.owner["setDropdownState"]);
var render_fn = cljs.core.partial.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031).cljs$core$IFn$_invoke$arity$1(bs))?om_bootstrap.button.render_nav_item:om_bootstrap.button.render_button_group),bs,open_QMARK_);
var button_props = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ref","ref",1289896967),"dropdownButton",new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-toggle",new cljs.core.Keyword(null,"key","key",-1516042587),(0),new cljs.core.Keyword(null,"nav-dropdown?","nav-dropdown?",2070486004),new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,map__41009,map__41009__$1,opts,children,vec__41010,bs,props,set_dropdown,render_fn,___$1,state,owner,validate__29415__auto__,ufv__,output_schema40993,input_schema40994,input_checker40995,output_checker40996){
return (function (e){
e.preventDefault();

return set_dropdown.call(null,cljs.core.not.call(null,open_QMARK_));
});})(open_QMARK_,map__41009,map__41009__$1,opts,children,vec__41010,bs,props,set_dropdown,render_fn,___$1,state,owner,validate__29415__auto__,ufv__,output_schema40993,input_schema40994,input_checker40995,output_checker40996))
], null);
var update_child_props = ((function (open_QMARK_,map__41009,map__41009__$1,opts,children,vec__41010,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__29415__auto__,ufv__,output_schema40993,input_schema40994,input_checker40995,output_checker40996){
return (function (props__$1){
var handle = (cljs.core.truth_((function (){var or__24872__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"opts","opts",155075701).cljs$core$IFn$_invoke$arity$1(props__$1));
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
}
})())?((function (open_QMARK_,map__41009,map__41009__$1,opts,children,vec__41010,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__29415__auto__,ufv__,output_schema40993,input_schema40994,input_checker40995,output_checker40996){
return (function (key){
var temp__4655__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4655__auto__)){
var os = temp__4655__auto__;
return os.call(null,key);
} else {
return set_dropdown.call(null,false);
}
});})(open_QMARK_,map__41009,map__41009__$1,opts,children,vec__41010,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__29415__auto__,ufv__,output_schema40993,input_schema40994,input_checker40995,output_checker40996))
:null);
return cljs.core.update_in.call(null,props__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null),om_bootstrap.util.merge_props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),handle], null));
});})(open_QMARK_,map__41009,map__41009__$1,opts,children,vec__41010,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__29415__auto__,ufv__,output_schema40993,input_schema40994,input_checker40995,output_checker40996))
;
return render_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.button.button.call(null,om_bootstrap.util.merge_props.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428)),button_props),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs)," ",React.DOM.span({"className": "caret"})),om_bootstrap.button.dropdown_menu.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ref","ref",1289896967),"menu",new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"key","key",-1516042587),(1)], null),cljs.core.map.call(null,((function (open_QMARK_,map__41009,map__41009__$1,opts,children,vec__41010,bs,props,set_dropdown,render_fn,button_props,update_child_props,___$1,state,owner,validate__29415__auto__,ufv__,output_schema40993,input_schema40994,input_checker40995,output_checker40996){
return (function (p1__40988_SHARP_){
return om_bootstrap.util.clone_with_props.call(null,p1__40988_SHARP_,update_child_props);
});})(open_QMARK_,map__41009,map__41009__$1,opts,children,vec__41010,bs,props,set_dropdown,render_fn,button_props,update_child_props,___$1,state,owner,validate__29415__auto__,ufv__,output_schema40993,input_schema40994,input_checker40995,output_checker40996))
,children))], null));
});})(state,owner,validate__29415__auto__,ufv__,output_schema40993,input_schema40994,input_checker40995,output_checker40996))
;

om_bootstrap.button.t_om_bootstrap$button41006.getBasis = ((function (state,owner,validate__29415__auto__,ufv__,output_schema40993,input_schema40994,input_checker40995,output_checker40996){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"G__40997","G__40997",-1990444188,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)),new cljs.core.Symbol(null,"output-schema40993","output-schema40993",2001702570,null),new cljs.core.Symbol(null,"input-checker40995","input-checker40995",1147578543,null),new cljs.core.Symbol(null,"validate__29415__auto__","validate__29415__auto__",-2035315153,null),new cljs.core.Symbol(null,"input-schema40994","input-schema40994",-1792282478,null),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"output-checker40996","output-checker40996",1393163060,null),cljs.core.with_meta(new cljs.core.Symbol(null,"constructor40990","constructor40990",-1511717867,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"map40992","map40992",316063193,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"meta41007","meta41007",999064980,null)], null);
});})(state,owner,validate__29415__auto__,ufv__,output_schema40993,input_schema40994,input_checker40995,output_checker40996))
;

om_bootstrap.button.t_om_bootstrap$button41006.cljs$lang$type = true;

om_bootstrap.button.t_om_bootstrap$button41006.cljs$lang$ctorStr = "om-bootstrap.button/t_om_bootstrap$button41006";

om_bootstrap.button.t_om_bootstrap$button41006.cljs$lang$ctorPrWriter = ((function (state,owner,validate__29415__auto__,ufv__,output_schema40993,input_schema40994,input_checker40995,output_checker40996){
return (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"om-bootstrap.button/t_om_bootstrap$button41006");
});})(state,owner,validate__29415__auto__,ufv__,output_schema40993,input_schema40994,input_checker40995,output_checker40996))
;

om_bootstrap.button.__GT_t_om_bootstrap$button41006 = ((function (state,owner,validate__29415__auto__,ufv__,output_schema40993,input_schema40994,input_checker40995,output_checker40996){
return (function om_bootstrap$button$constructor40990_$___GT_t_om_bootstrap$button41006(owner__$1,G__40997__$1,output_schema40993__$1,input_checker40995__$1,validate__29415__auto____$1,input_schema40994__$1,state__$1,output_checker40996__$1,constructor40990__$1,map40992__$1,ufv____$1,meta41007){
return (new om_bootstrap.button.t_om_bootstrap$button41006(owner__$1,G__40997__$1,output_schema40993__$1,input_checker40995__$1,validate__29415__auto____$1,input_schema40994__$1,state__$1,output_checker40996__$1,constructor40990__$1,map40992__$1,ufv____$1,meta41007));
});})(state,owner,validate__29415__auto__,ufv__,output_schema40993,input_schema40994,input_checker40995,output_checker40996))
;

}

return (new om_bootstrap.button.t_om_bootstrap$button41006(owner,G__40997,output_schema40993,input_checker40995,validate__29415__auto__,input_schema40994,state,output_checker40996,om_bootstrap$button$constructor40990,map40992,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__29415__auto__)){
var temp__4657__auto___41028 = output_checker40996.call(null,o__29418__auto__);
if(cljs.core.truth_(temp__4657__auto___41028)){
var error__29417__auto___41029 = temp__4657__auto___41028;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor40990","constructor40990",-1511717867,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__29417__auto___41029)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema40993,new cljs.core.Keyword(null,"value","value",305978217),o__29418__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___41029], null));
} else {
}
} else {
}

return o__29418__auto__;
});})(ufv__,output_schema40993,input_schema40994,input_checker40995,output_checker40996))
,schema.core.make_fn_schema.call(null,output_schema40993,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40994], null)));
})();
/**
 * Generates a dropdown button component responsible for its own
 *   toggled state. The open? toggling is handled through a dropdown
 *   mixin.
 */
om_bootstrap.button.dropdown_STAR_ = ((function (component_fnk__40181__auto___41024){
return (function om_bootstrap$button$dropdown_STAR_(var_args){
var args__25954__auto__ = [];
var len__25947__auto___41030 = arguments.length;
var i__25948__auto___41031 = (0);
while(true){
if((i__25948__auto___41031 < len__25947__auto___41030)){
args__25954__auto__.push((arguments[i__25948__auto___41031]));

var G__41032 = (i__25948__auto___41031 + (1));
i__25948__auto___41031 = G__41032;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((2) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((2)),(0),null)):null);
return om_bootstrap.button.dropdown_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25955__auto__);
});})(component_fnk__40181__auto___41024))
;

om_bootstrap.button.dropdown_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__40181__auto___41024){
return (function (data__40182__auto__,owner40989,p__41017){
var vec__41018 = p__41017;
var opts__40183__auto__ = cljs.core.nth.call(null,vec__41018,(0),null);
return component_fnk__40181__auto___41024.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner40989),new cljs.core.Keyword(null,"opts","opts",155075701),opts__40183__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner40989,new cljs.core.Keyword(null,"data","data",-232669377),data__40182__auto__], null));
});})(component_fnk__40181__auto___41024))
;

om_bootstrap.button.dropdown_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.button.dropdown_STAR_.cljs$lang$applyTo = ((function (component_fnk__40181__auto___41024){
return (function (seq41014){
var G__41015 = cljs.core.first.call(null,seq41014);
var seq41014__$1 = cljs.core.next.call(null,seq41014);
var G__41016 = cljs.core.first.call(null,seq41014__$1);
var seq41014__$2 = cljs.core.next.call(null,seq41014__$1);
return om_bootstrap.button.dropdown_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__41015,G__41016,seq41014__$2);
});})(component_fnk__40181__auto___41024))
;


om_bootstrap.button.__GT_dropdown_STAR_ = (function om_bootstrap$button$__GT_dropdown_STAR_(var_args){
var args41021 = [];
var len__25947__auto___41033 = arguments.length;
var i__25948__auto___41034 = (0);
while(true){
if((i__25948__auto___41034 < len__25947__auto___41033)){
args41021.push((arguments[i__25948__auto___41034]));

var G__41035 = (i__25948__auto___41034 + (1));
i__25948__auto___41034 = G__41035;
continue;
} else {
}
break;
}

var G__41023 = args41021.length;
switch (G__41023) {
case 1:
return om_bootstrap.button.__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.button.__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41021.length)].join('')));

}
});

om_bootstrap.button.__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__40150__auto__){
return om.core.build.call(null,om_bootstrap.button.dropdown_STAR_,cursor__40150__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.dropdown_STAR_$descriptor], null));
});

om_bootstrap.button.__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__40150__auto__,m40991){
return om.core.build.call(null,om_bootstrap.button.dropdown_STAR_,cursor__40150__auto__,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.dropdown_STAR_$descriptor], null),m40991));
});

om_bootstrap.button.__GT_dropdown_STAR_.cljs$lang$maxFixedArity = 2;

var ufv___41045 = schema.utils.use_fn_validation;
var output_schema41037_41046 = om_bootstrap.types.Component;
var input_schema41038_41047 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.DropdownButton,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"DropdownButton","DropdownButton",251375015,null)], null))),schema.core.Any], null);
var input_checker41039_41048 = schema.core.checker.call(null,input_schema41038_41047);
var output_checker41040_41049 = schema.core.checker.call(null,output_schema41037_41046);
/**
 * Inputs: [opts :- DropdownButton & children]
 *   Returns: t/Component
 * 
 *   Returns a dropdown button component. The component manages its own
 *   dropdown state.
 */
om_bootstrap.button.dropdown = ((function (ufv___41045,output_schema41037_41046,input_schema41038_41047,input_checker41039_41048,output_checker41040_41049){
return (function om_bootstrap$button$dropdown(var_args){
var args__25954__auto__ = [];
var len__25947__auto___41050 = arguments.length;
var i__25948__auto___41051 = (0);
while(true){
if((i__25948__auto___41051 < len__25947__auto___41050)){
args__25954__auto__.push((arguments[i__25948__auto___41051]));

var G__41052 = (i__25948__auto___41051 + (1));
i__25948__auto___41051 = G__41052;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((1) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((1)),(0),null)):null);
return om_bootstrap.button.dropdown.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25955__auto__);
});})(ufv___41045,output_schema41037_41046,input_schema41038_41047,input_checker41039_41048,output_checker41040_41049))
;

om_bootstrap.button.dropdown.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___41045,output_schema41037_41046,input_schema41038_41047,input_checker41039_41048,output_checker41040_41049){
return (function (G__41041,rest41042){
var validate__29415__auto__ = ufv___41045.get_cell();
if(cljs.core.truth_(validate__29415__auto__)){
var args__29416__auto___41053 = cljs.core.list_STAR_.call(null,G__41041,rest41042);
var temp__4657__auto___41054 = input_checker41039_41048.call(null,args__29416__auto___41053);
if(cljs.core.truth_(temp__4657__auto___41054)){
var error__29417__auto___41055 = temp__4657__auto___41054;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"dropdown","dropdown",-1311249964,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a dropdown button component. The component manages its own\n  dropdown state."], null)),cljs.core.pr_str.call(null,error__29417__auto___41055)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema41038_41047,new cljs.core.Keyword(null,"value","value",305978217),args__29416__auto___41053,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___41055], null));
} else {
}
} else {
}

var o__29418__auto__ = (function (){var opts = G__41041;
var children = rest41042;
while(true){
return om_bootstrap.button.__GT_dropdown_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__29415__auto__)){
var temp__4657__auto___41056 = output_checker41040_41049.call(null,o__29418__auto__);
if(cljs.core.truth_(temp__4657__auto___41056)){
var error__29417__auto___41057 = temp__4657__auto___41056;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"dropdown","dropdown",-1311249964,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a dropdown button component. The component manages its own\n  dropdown state."], null)),cljs.core.pr_str.call(null,error__29417__auto___41057)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema41037_41046,new cljs.core.Keyword(null,"value","value",305978217),o__29418__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___41057], null));
} else {
}
} else {
}

return o__29418__auto__;
});})(ufv___41045,output_schema41037_41046,input_schema41038_41047,input_checker41039_41048,output_checker41040_41049))
;

om_bootstrap.button.dropdown.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.dropdown.cljs$lang$applyTo = ((function (ufv___41045,output_schema41037_41046,input_schema41038_41047,input_checker41039_41048,output_checker41040_41049){
return (function (seq41043){
var G__41044 = cljs.core.first.call(null,seq41043);
var seq41043__$1 = cljs.core.next.call(null,seq41043);
return om_bootstrap.button.dropdown.cljs$core$IFn$_invoke$arity$variadic(G__41044,seq41043__$1);
});})(ufv___41045,output_schema41037_41046,input_schema41038_41047,input_checker41039_41048,output_checker41040_41049))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.dropdown),schema.core.make_fn_schema.call(null,output_schema41037_41046,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema41038_41047], null)));
om_bootstrap.button.SplitButton = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"href","href",-793805698)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"dropdown-title","dropdown-title",1850134238)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-click","on-click",1632826543)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))], true, false));
om_bootstrap.button.split_STAR_$descriptor = (function (){var descriptor__40152__auto__ = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
(descriptor__40152__auto__["mixins"] = [om_bootstrap.mixins.dropdown_mixin]);

return descriptor__40152__auto__;
})();

var component_fnk__40181__auto___41093 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema41062 = schema.core.Any;
var input_schema41063 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"map41061","map41061",-1467478911,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)))], null);
var input_checker41064 = schema.core.checker.call(null,input_schema41063);
var output_checker41065 = schema.core.checker.call(null,output_schema41062);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema41062,input_schema41063,input_checker41064,output_checker41065){
return (function om_bootstrap$button$constructor41059(G__41066){
var validate__29415__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__29415__auto__)){
var args__29416__auto___41094 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__41066], null);
var temp__4657__auto___41095 = input_checker41064.call(null,args__29416__auto___41094);
if(cljs.core.truth_(temp__4657__auto___41095)){
var error__29417__auto___41096 = temp__4657__auto___41095;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor41059","constructor41059",-1503540378,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__29417__auto___41096)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema41063,new cljs.core.Keyword(null,"value","value",305978217),args__29416__auto___41094,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___41096], null));
} else {
}
} else {
}

var o__29418__auto__ = (function (){var map41061 = G__41066;
while(true){
if(cljs.core.map_QMARK_.call(null,map41061)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map41061)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map41061,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map41061,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.button.t_om_bootstrap$button41075 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
om_bootstrap.button.t_om_bootstrap$button41075 = (function (map41061,owner,constructor41059,output_schema41062,input_schema41063,input_checker41064,validate__29415__auto__,G__41066,output_checker41065,state,ufv__,meta41076){
this.map41061 = map41061;
this.owner = owner;
this.constructor41059 = constructor41059;
this.output_schema41062 = output_schema41062;
this.input_schema41063 = input_schema41063;
this.input_checker41064 = input_checker41064;
this.validate__29415__auto__ = validate__29415__auto__;
this.G__41066 = G__41066;
this.output_checker41065 = output_checker41065;
this.state = state;
this.ufv__ = ufv__;
this.meta41076 = meta41076;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.button.t_om_bootstrap$button41075.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,owner,validate__29415__auto__,ufv__,output_schema41062,input_schema41063,input_checker41064,output_checker41065){
return (function (_41077,meta41076__$1){
var self__ = this;
var _41077__$1 = this;
return (new om_bootstrap.button.t_om_bootstrap$button41075(self__.map41061,self__.owner,self__.constructor41059,self__.output_schema41062,self__.input_schema41063,self__.input_checker41064,self__.validate__29415__auto__,self__.G__41066,self__.output_checker41065,self__.state,self__.ufv__,meta41076__$1));
});})(state,owner,validate__29415__auto__,ufv__,output_schema41062,input_schema41063,input_checker41064,output_checker41065))
;

om_bootstrap.button.t_om_bootstrap$button41075.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,owner,validate__29415__auto__,ufv__,output_schema41062,input_schema41063,input_checker41064,output_checker41065){
return (function (_41077){
var self__ = this;
var _41077__$1 = this;
return self__.meta41076;
});})(state,owner,validate__29415__auto__,ufv__,output_schema41062,input_schema41063,input_checker41064,output_checker41065))
;

om_bootstrap.button.t_om_bootstrap$button41075.prototype.om$core$IDisplayName$ = true;

om_bootstrap.button.t_om_bootstrap$button41075.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,owner,validate__29415__auto__,ufv__,output_schema41062,input_schema41063,input_checker41064,output_checker41065){
return (function (_){
var self__ = this;
var ___$1 = this;
return "split*";
});})(state,owner,validate__29415__auto__,ufv__,output_schema41062,input_schema41063,input_checker41064,output_checker41065))
;

om_bootstrap.button.t_om_bootstrap$button41075.prototype.om$core$IRender$ = true;

om_bootstrap.button.t_om_bootstrap$button41075.prototype.om$core$IRender$render$arity$1 = ((function (state,owner,validate__29415__auto__,ufv__,output_schema41062,input_schema41063,input_checker41064,output_checker41065){
return (function (_){
var self__ = this;
var ___$1 = this;
var open_QMARK_ = (self__.owner["isDropdownOpen"]).call(null);
var map__41078 = om.core.get_props.call(null,self__.owner);
var map__41078__$1 = ((((!((map__41078 == null)))?((((map__41078.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41078.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41078):map__41078);
var opts = cljs.core.get.call(null,map__41078__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var children = cljs.core.get.call(null,map__41078__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var vec__41079 = om_bootstrap.types.separate.call(null,om_bootstrap.button.SplitButton,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dropdown-title","dropdown-title",1850134238),"Toggle dropdown"], null));
var bs = cljs.core.nth.call(null,vec__41079,(0),null);
var props = cljs.core.nth.call(null,vec__41079,(1),null);
var set_dropdown = (self__.owner["setDropdownState"]);
var btn_props = cljs.core.partial.call(null,om_bootstrap.util.merge_props,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"id","id",-1388402092)));
var btn = om_bootstrap.button.button.call(null,btn_props.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,map__41078,map__41078__$1,opts,children,vec__41079,bs,props,set_dropdown,btn_props,___$1,state,owner,validate__29415__auto__,ufv__,output_schema41062,input_schema41063,input_checker41064,output_checker41065){
return (function (e){
if(cljs.core.truth_(open_QMARK_)){
set_dropdown.call(null,false);
} else {
}

var temp__4657__auto__ = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4657__auto__)){
var f = temp__4657__auto__;
return f.call(null,e);
} else {
return null;
}
});})(open_QMARK_,map__41078,map__41078__$1,opts,children,vec__41079,bs,props,set_dropdown,btn_props,___$1,state,owner,validate__29415__auto__,ufv__,output_schema41062,input_schema41063,input_checker41064,output_checker41065))
], null)),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs));
var drop_btn = om_bootstrap.button.button.call(null,btn_props.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ref","ref",1289896967),"dropdownButton",new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-toggle",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,map__41078,map__41078__$1,opts,children,vec__41079,bs,props,set_dropdown,btn_props,btn,___$1,state,owner,validate__29415__auto__,ufv__,output_schema41062,input_schema41063,input_checker41064,output_checker41065){
return (function (e){
e.preventDefault();

return set_dropdown.call(null,cljs.core.not.call(null,open_QMARK_));
});})(open_QMARK_,map__41078,map__41078__$1,opts,children,vec__41079,bs,props,set_dropdown,btn_props,btn,___$1,state,owner,validate__29415__auto__,ufv__,output_schema41062,input_schema41063,input_checker41064,output_checker41065))
], null)),cljs.core.apply.call(null,React.DOM.span,{"className": "sr-only"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dropdown-title","dropdown-title",1850134238).cljs$core$IFn$_invoke$arity$1(bs)],null)))),React.DOM.span({"className": "caret"}));
var menu = om_bootstrap.button.dropdown_menu.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ref","ref",1289896967),"menu",new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"on-select","on-select",-192407950),((function (open_QMARK_,map__41078,map__41078__$1,opts,children,vec__41079,bs,props,set_dropdown,btn_props,btn,drop_btn,___$1,state,owner,validate__29415__auto__,ufv__,output_schema41062,input_schema41063,input_checker41064,output_checker41065){
return (function (k){
var temp__4657__auto___41097 = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4657__auto___41097)){
var f_41098 = temp__4657__auto___41097;
f_41098.call(null,k);
} else {
}

return set_dropdown.call(null,false);
});})(open_QMARK_,map__41078,map__41078__$1,opts,children,vec__41079,bs,props,set_dropdown,btn_props,btn,drop_btn,___$1,state,owner,validate__29415__auto__,ufv__,output_schema41062,input_schema41063,input_checker41064,output_checker41065))
], null),children);
return om_bootstrap.button.button_group.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bs-size","bs-size",1567732754),new cljs.core.Keyword(null,"bs-size","bs-size",1567732754).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),open_QMARK_,new cljs.core.Keyword(null,"dropup","dropup",-1031053231),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428).cljs$core$IFn$_invoke$arity$1(bs)], null))], null),btn,drop_btn,menu);
});})(state,owner,validate__29415__auto__,ufv__,output_schema41062,input_schema41063,input_checker41064,output_checker41065))
;

om_bootstrap.button.t_om_bootstrap$button41075.getBasis = ((function (state,owner,validate__29415__auto__,ufv__,output_schema41062,input_schema41063,input_checker41064,output_checker41065){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map41061","map41061",-1467478911,null),cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"constructor41059","constructor41059",-1503540378,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"output-schema41062","output-schema41062",1654802091,null),new cljs.core.Symbol(null,"input-schema41063","input-schema41063",1896405804,null),new cljs.core.Symbol(null,"input-checker41064","input-checker41064",-748024594,null),new cljs.core.Symbol(null,"validate__29415__auto__","validate__29415__auto__",-2035315153,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__41066","G__41066",-348411760,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)),new cljs.core.Symbol(null,"output-checker41065","output-checker41065",-474346510,null),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"meta41076","meta41076",-364769774,null)], null);
});})(state,owner,validate__29415__auto__,ufv__,output_schema41062,input_schema41063,input_checker41064,output_checker41065))
;

om_bootstrap.button.t_om_bootstrap$button41075.cljs$lang$type = true;

om_bootstrap.button.t_om_bootstrap$button41075.cljs$lang$ctorStr = "om-bootstrap.button/t_om_bootstrap$button41075";

om_bootstrap.button.t_om_bootstrap$button41075.cljs$lang$ctorPrWriter = ((function (state,owner,validate__29415__auto__,ufv__,output_schema41062,input_schema41063,input_checker41064,output_checker41065){
return (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"om-bootstrap.button/t_om_bootstrap$button41075");
});})(state,owner,validate__29415__auto__,ufv__,output_schema41062,input_schema41063,input_checker41064,output_checker41065))
;

om_bootstrap.button.__GT_t_om_bootstrap$button41075 = ((function (state,owner,validate__29415__auto__,ufv__,output_schema41062,input_schema41063,input_checker41064,output_checker41065){
return (function om_bootstrap$button$constructor41059_$___GT_t_om_bootstrap$button41075(map41061__$1,owner__$1,constructor41059__$1,output_schema41062__$1,input_schema41063__$1,input_checker41064__$1,validate__29415__auto____$1,G__41066__$1,output_checker41065__$1,state__$1,ufv____$1,meta41076){
return (new om_bootstrap.button.t_om_bootstrap$button41075(map41061__$1,owner__$1,constructor41059__$1,output_schema41062__$1,input_schema41063__$1,input_checker41064__$1,validate__29415__auto____$1,G__41066__$1,output_checker41065__$1,state__$1,ufv____$1,meta41076));
});})(state,owner,validate__29415__auto__,ufv__,output_schema41062,input_schema41063,input_checker41064,output_checker41065))
;

}

return (new om_bootstrap.button.t_om_bootstrap$button41075(map41061,owner,om_bootstrap$button$constructor41059,output_schema41062,input_schema41063,input_checker41064,validate__29415__auto__,G__41066,output_checker41065,state,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__29415__auto__)){
var temp__4657__auto___41099 = output_checker41065.call(null,o__29418__auto__);
if(cljs.core.truth_(temp__4657__auto___41099)){
var error__29417__auto___41100 = temp__4657__auto___41099;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor41059","constructor41059",-1503540378,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__29417__auto___41100)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema41062,new cljs.core.Keyword(null,"value","value",305978217),o__29418__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___41100], null));
} else {
}
} else {
}

return o__29418__auto__;
});})(ufv__,output_schema41062,input_schema41063,input_checker41064,output_checker41065))
,schema.core.make_fn_schema.call(null,output_schema41062,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema41063], null)));
})();
/**
 * Generates a split button component responsible for its own
 *   toggled state. The open? toggling is handled through a dropdown
 *   mixin.
 */
om_bootstrap.button.split_STAR_ = ((function (component_fnk__40181__auto___41093){
return (function om_bootstrap$button$split_STAR_(var_args){
var args__25954__auto__ = [];
var len__25947__auto___41101 = arguments.length;
var i__25948__auto___41102 = (0);
while(true){
if((i__25948__auto___41102 < len__25947__auto___41101)){
args__25954__auto__.push((arguments[i__25948__auto___41102]));

var G__41103 = (i__25948__auto___41102 + (1));
i__25948__auto___41102 = G__41103;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((2) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((2)),(0),null)):null);
return om_bootstrap.button.split_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25955__auto__);
});})(component_fnk__40181__auto___41093))
;

om_bootstrap.button.split_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__40181__auto___41093){
return (function (data__40182__auto__,owner41058,p__41086){
var vec__41087 = p__41086;
var opts__40183__auto__ = cljs.core.nth.call(null,vec__41087,(0),null);
return component_fnk__40181__auto___41093.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner41058),new cljs.core.Keyword(null,"opts","opts",155075701),opts__40183__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner41058,new cljs.core.Keyword(null,"data","data",-232669377),data__40182__auto__], null));
});})(component_fnk__40181__auto___41093))
;

om_bootstrap.button.split_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.button.split_STAR_.cljs$lang$applyTo = ((function (component_fnk__40181__auto___41093){
return (function (seq41083){
var G__41084 = cljs.core.first.call(null,seq41083);
var seq41083__$1 = cljs.core.next.call(null,seq41083);
var G__41085 = cljs.core.first.call(null,seq41083__$1);
var seq41083__$2 = cljs.core.next.call(null,seq41083__$1);
return om_bootstrap.button.split_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__41084,G__41085,seq41083__$2);
});})(component_fnk__40181__auto___41093))
;


om_bootstrap.button.__GT_split_STAR_ = (function om_bootstrap$button$__GT_split_STAR_(var_args){
var args41090 = [];
var len__25947__auto___41104 = arguments.length;
var i__25948__auto___41105 = (0);
while(true){
if((i__25948__auto___41105 < len__25947__auto___41104)){
args41090.push((arguments[i__25948__auto___41105]));

var G__41106 = (i__25948__auto___41105 + (1));
i__25948__auto___41105 = G__41106;
continue;
} else {
}
break;
}

var G__41092 = args41090.length;
switch (G__41092) {
case 1:
return om_bootstrap.button.__GT_split_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.button.__GT_split_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41090.length)].join('')));

}
});

om_bootstrap.button.__GT_split_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__40150__auto__){
return om.core.build.call(null,om_bootstrap.button.split_STAR_,cursor__40150__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.split_STAR_$descriptor], null));
});

om_bootstrap.button.__GT_split_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__40150__auto__,m41060){
return om.core.build.call(null,om_bootstrap.button.split_STAR_,cursor__40150__auto__,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.split_STAR_$descriptor], null),m41060));
});

om_bootstrap.button.__GT_split_STAR_.cljs$lang$maxFixedArity = 2;

var ufv___41116 = schema.utils.use_fn_validation;
var output_schema41108_41117 = schema.core.Any;
var input_schema41109_41118 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.SplitButton,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"SplitButton","SplitButton",1856385687,null)], null))),schema.core.Any], null);
var input_checker41110_41119 = schema.core.checker.call(null,input_schema41109_41118);
var output_checker41111_41120 = schema.core.checker.call(null,output_schema41108_41117);
/**
 * Inputs: [opts :- SplitButton & children]
 */
om_bootstrap.button.split = ((function (ufv___41116,output_schema41108_41117,input_schema41109_41118,input_checker41110_41119,output_checker41111_41120){
return (function om_bootstrap$button$split(var_args){
var args__25954__auto__ = [];
var len__25947__auto___41121 = arguments.length;
var i__25948__auto___41122 = (0);
while(true){
if((i__25948__auto___41122 < len__25947__auto___41121)){
args__25954__auto__.push((arguments[i__25948__auto___41122]));

var G__41123 = (i__25948__auto___41122 + (1));
i__25948__auto___41122 = G__41123;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((1) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((1)),(0),null)):null);
return om_bootstrap.button.split.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25955__auto__);
});})(ufv___41116,output_schema41108_41117,input_schema41109_41118,input_checker41110_41119,output_checker41111_41120))
;

om_bootstrap.button.split.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___41116,output_schema41108_41117,input_schema41109_41118,input_checker41110_41119,output_checker41111_41120){
return (function (G__41112,rest41113){
var validate__29415__auto__ = ufv___41116.get_cell();
if(cljs.core.truth_(validate__29415__auto__)){
var args__29416__auto___41124 = cljs.core.list_STAR_.call(null,G__41112,rest41113);
var temp__4657__auto___41125 = input_checker41110_41119.call(null,args__29416__auto___41124);
if(cljs.core.truth_(temp__4657__auto___41125)){
var error__29417__auto___41126 = temp__4657__auto___41125;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split","split",1041096409,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__29417__auto___41126)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema41109_41118,new cljs.core.Keyword(null,"value","value",305978217),args__29416__auto___41124,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___41126], null));
} else {
}
} else {
}

var o__29418__auto__ = (function (){var opts = G__41112;
var children = rest41113;
while(true){
return om_bootstrap.button.__GT_split_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__29415__auto__)){
var temp__4657__auto___41127 = output_checker41111_41120.call(null,o__29418__auto__);
if(cljs.core.truth_(temp__4657__auto___41127)){
var error__29417__auto___41128 = temp__4657__auto___41127;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split","split",1041096409,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__29417__auto___41128)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema41108_41117,new cljs.core.Keyword(null,"value","value",305978217),o__29418__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___41128], null));
} else {
}
} else {
}

return o__29418__auto__;
});})(ufv___41116,output_schema41108_41117,input_schema41109_41118,input_checker41110_41119,output_checker41111_41120))
;

om_bootstrap.button.split.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.split.cljs$lang$applyTo = ((function (ufv___41116,output_schema41108_41117,input_schema41109_41118,input_checker41110_41119,output_checker41111_41120){
return (function (seq41114){
var G__41115 = cljs.core.first.call(null,seq41114);
var seq41114__$1 = cljs.core.next.call(null,seq41114);
return om_bootstrap.button.split.cljs$core$IFn$_invoke$arity$variadic(G__41115,seq41114__$1);
});})(ufv___41116,output_schema41108_41117,input_schema41109_41118,input_checker41110_41119,output_checker41111_41120))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.split),schema.core.make_fn_schema.call(null,output_schema41108_41117,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema41109_41118], null)));

//# sourceMappingURL=button.js.map?rel=1486291275581