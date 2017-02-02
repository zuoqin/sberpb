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
var ufv___22539 = schema.utils.use_fn_validation;
var output_schema22533_22540 = schema.core.Any;
var input_schema22534_22541 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"classes","classes",2037804510),cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),schema.core.maybe.call(null,schema.core.Bool),new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false)], null),cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker22535_22542 = schema.core.checker.call(null,input_schema22534_22541);
var output_checker22536_22543 = schema.core.checker.call(null,output_schema22533_22540);
/**
 * Inputs: [opts :- {:classes {s/Any s/Any}, :disabled? (s/maybe s/Bool), :props {s/Any s/Any}} children]
 */
om_bootstrap.button.render_anchor = ((function (ufv___22539,output_schema22533_22540,input_schema22534_22541,input_checker22535_22542,output_checker22536_22543){
return (function om_bootstrap$button$render_anchor(G__22537,G__22538){
var validate__7824__auto__ = ufv___22539.get_cell();
if(cljs.core.truth_(validate__7824__auto__)){
var args__7825__auto___22544 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22537,G__22538], null);
var temp__4657__auto___22545 = input_checker22535_22542.call(null,args__7825__auto___22544);
if(cljs.core.truth_(temp__4657__auto___22545)){
var error__7826__auto___22546 = temp__4657__auto___22545;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-anchor","render-anchor",-1892709609,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__7826__auto___22546)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22534_22541,new cljs.core.Keyword(null,"value","value",305978217),args__7825__auto___22544,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___22546], null));
} else {
}
} else {
}

var o__7827__auto__ = (function (){var opts = G__22537;
var children = G__22538;
while(true){
var props = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(opts),"#"),new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,cljs.core.assoc.call(null,new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(opts))),new cljs.core.Keyword(null,"role","role",-736691072),"button"], null);
return om_tools.dom.element.call(null,React.DOM.a,om_bootstrap.util.merge_props.call(null,props,new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(opts)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__7824__auto__)){
var temp__4657__auto___22547 = output_checker22536_22543.call(null,o__7827__auto__);
if(cljs.core.truth_(temp__4657__auto___22547)){
var error__7826__auto___22548 = temp__4657__auto___22547;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-anchor","render-anchor",-1892709609,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__7826__auto___22548)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22533_22540,new cljs.core.Keyword(null,"value","value",305978217),o__7827__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___22548], null));
} else {
}
} else {
}

return o__7827__auto__;
});})(ufv___22539,output_schema22533_22540,input_schema22534_22541,input_checker22535_22542,output_checker22536_22543))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.render_anchor),schema.core.make_fn_schema.call(null,output_schema22533_22540,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22534_22541], null)));
var ufv___22560 = schema.utils.use_fn_validation;
var output_schema22549_22561 = om_bootstrap.types.Component;
var input_schema22550_22562 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.Button,cljs.core.with_meta(new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Button","Button",-1787718586,null)], null))),schema.core.Any], null);
var input_checker22551_22563 = schema.core.checker.call(null,input_schema22550_22562);
var output_checker22552_22564 = schema.core.checker.call(null,output_schema22549_22561);
/**
 * Inputs: [props :- Button & children]
 *   Returns: t/Component
 * 
 *   Renders a button.
 */
om_bootstrap.button.button = ((function (ufv___22560,output_schema22549_22561,input_schema22550_22562,input_checker22551_22563,output_checker22552_22564){
return (function om_bootstrap$button$button(var_args){
var args__7333__auto__ = [];
var len__7326__auto___22565 = arguments.length;
var i__7327__auto___22566 = (0);
while(true){
if((i__7327__auto___22566 < len__7326__auto___22565)){
args__7333__auto__.push((arguments[i__7327__auto___22566]));

var G__22567 = (i__7327__auto___22566 + (1));
i__7327__auto___22566 = G__22567;
continue;
} else {
}
break;
}

var argseq__7334__auto__ = ((((1) < args__7333__auto__.length))?(new cljs.core.IndexedSeq(args__7333__auto__.slice((1)),(0),null)):null);
return om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7334__auto__);
});})(ufv___22560,output_schema22549_22561,input_schema22550_22562,input_checker22551_22563,output_checker22552_22564))
;

om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___22560,output_schema22549_22561,input_schema22550_22562,input_checker22551_22563,output_checker22552_22564){
return (function (G__22553,rest22554){
var validate__7824__auto__ = ufv___22560.get_cell();
if(cljs.core.truth_(validate__7824__auto__)){
var args__7825__auto___22568 = cljs.core.list_STAR_.call(null,G__22553,rest22554);
var temp__4657__auto___22569 = input_checker22551_22563.call(null,args__7825__auto___22568);
if(cljs.core.truth_(temp__4657__auto___22569)){
var error__7826__auto___22570 = temp__4657__auto___22569;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"button","button",-1197855826,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders a button."], null)),cljs.core.pr_str.call(null,error__7826__auto___22570)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22550_22562,new cljs.core.Keyword(null,"value","value",305978217),args__7825__auto___22568,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___22570], null));
} else {
}
} else {
}

var o__7827__auto__ = (function (){var props = G__22553;
var children = rest22554;
while(true){
var vec__22557 = om_bootstrap.types.separate.call(null,om_bootstrap.button.Button,props,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"button",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"default",new cljs.core.Keyword(null,"type","type",1174270348),"button"], null));
var bs = cljs.core.nth.call(null,vec__22557,(0),null);
var props__$1 = cljs.core.nth.call(null,vec__22557,(1),null);
var klasses = (cljs.core.truth_(new cljs.core.Keyword(null,"nav-dropdown?","nav-dropdown?",2070486004).cljs$core$IFn$_invoke$arity$1(bs))?cljs.core.PersistentArrayMap.EMPTY:om_bootstrap.types.bs_class_set.call(null,bs));
var klasses__$1 = cljs.core.merge.call(null,klasses,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"btn-block","btn-block",967079535),new cljs.core.Keyword(null,"block?","block?",1102479923).cljs$core$IFn$_invoke$arity$1(bs)], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031).cljs$core$IFn$_invoke$arity$1(bs))){
return cljs.core.apply.call(null,React.DOM.li,{"className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(bs)], null)))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_bootstrap.button.render_anchor.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),props__$1,new cljs.core.Keyword(null,"classes","classes",2037804510),klasses__$1], null),children)],null))));
} else {
if(cljs.core.truth_((function (){var or__6251__auto__ = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(props__$1);
if(cljs.core.truth_(or__6251__auto__)){
return or__6251__auto__;
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
if(cljs.core.truth_(validate__7824__auto__)){
var temp__4657__auto___22571 = output_checker22552_22564.call(null,o__7827__auto__);
if(cljs.core.truth_(temp__4657__auto___22571)){
var error__7826__auto___22572 = temp__4657__auto___22571;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"button","button",-1197855826,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders a button."], null)),cljs.core.pr_str.call(null,error__7826__auto___22572)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22549_22561,new cljs.core.Keyword(null,"value","value",305978217),o__7827__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___22572], null));
} else {
}
} else {
}

return o__7827__auto__;
});})(ufv___22560,output_schema22549_22561,input_schema22550_22562,input_checker22551_22563,output_checker22552_22564))
;

om_bootstrap.button.button.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.button.cljs$lang$applyTo = ((function (ufv___22560,output_schema22549_22561,input_schema22550_22562,input_checker22551_22563,output_checker22552_22564){
return (function (seq22555){
var G__22556 = cljs.core.first.call(null,seq22555);
var seq22555__$1 = cljs.core.next.call(null,seq22555);
return om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic(G__22556,seq22555__$1);
});})(ufv___22560,output_schema22549_22561,input_schema22550_22562,input_checker22551_22563,output_checker22552_22564))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.button),schema.core.make_fn_schema.call(null,output_schema22549_22561,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22550_22562], null)));
var ufv___22584 = schema.utils.use_fn_validation;
var output_schema22573_22585 = om_bootstrap.types.Component;
var input_schema22574_22586 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.Any], null);
var input_checker22575_22587 = schema.core.checker.call(null,input_schema22574_22586);
var output_checker22576_22588 = schema.core.checker.call(null,output_schema22573_22585);
/**
 * Inputs: [opts & children]
 *   Returns: t/Component
 * 
 *   Renders a button toolbar.
 */
om_bootstrap.button.toolbar = ((function (ufv___22584,output_schema22573_22585,input_schema22574_22586,input_checker22575_22587,output_checker22576_22588){
return (function om_bootstrap$button$toolbar(var_args){
var args__7333__auto__ = [];
var len__7326__auto___22589 = arguments.length;
var i__7327__auto___22590 = (0);
while(true){
if((i__7327__auto___22590 < len__7326__auto___22589)){
args__7333__auto__.push((arguments[i__7327__auto___22590]));

var G__22591 = (i__7327__auto___22590 + (1));
i__7327__auto___22590 = G__22591;
continue;
} else {
}
break;
}

var argseq__7334__auto__ = ((((1) < args__7333__auto__.length))?(new cljs.core.IndexedSeq(args__7333__auto__.slice((1)),(0),null)):null);
return om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7334__auto__);
});})(ufv___22584,output_schema22573_22585,input_schema22574_22586,input_checker22575_22587,output_checker22576_22588))
;

om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___22584,output_schema22573_22585,input_schema22574_22586,input_checker22575_22587,output_checker22576_22588){
return (function (G__22577,rest22578){
var validate__7824__auto__ = ufv___22584.get_cell();
if(cljs.core.truth_(validate__7824__auto__)){
var args__7825__auto___22592 = cljs.core.list_STAR_.call(null,G__22577,rest22578);
var temp__4657__auto___22593 = input_checker22575_22587.call(null,args__7825__auto___22592);
if(cljs.core.truth_(temp__4657__auto___22593)){
var error__7826__auto___22594 = temp__4657__auto___22593;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"toolbar","toolbar",467742462,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders a button toolbar."], null)),cljs.core.pr_str.call(null,error__7826__auto___22594)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22574_22586,new cljs.core.Keyword(null,"value","value",305978217),args__7825__auto___22592,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___22594], null));
} else {
}
} else {
}

var o__7827__auto__ = (function (){var opts = G__22577;
var children = rest22578;
while(true){
var vec__22581 = om_bootstrap.types.separate.call(null,cljs.core.PersistentArrayMap.EMPTY,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"button-toolbar"], null));
var bs = cljs.core.nth.call(null,vec__22581,(0),null);
var props = cljs.core.nth.call(null,vec__22581,(1),null);
return cljs.core.apply.call(null,React.DOM.div,{"role": "toolbar", "className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,om_bootstrap.types.bs_class_set.call(null,bs)))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))));
break;
}
})();
if(cljs.core.truth_(validate__7824__auto__)){
var temp__4657__auto___22595 = output_checker22576_22588.call(null,o__7827__auto__);
if(cljs.core.truth_(temp__4657__auto___22595)){
var error__7826__auto___22596 = temp__4657__auto___22595;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"toolbar","toolbar",467742462,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders a button toolbar."], null)),cljs.core.pr_str.call(null,error__7826__auto___22596)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22573_22585,new cljs.core.Keyword(null,"value","value",305978217),o__7827__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___22596], null));
} else {
}
} else {
}

return o__7827__auto__;
});})(ufv___22584,output_schema22573_22585,input_schema22574_22586,input_checker22575_22587,output_checker22576_22588))
;

om_bootstrap.button.toolbar.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.toolbar.cljs$lang$applyTo = ((function (ufv___22584,output_schema22573_22585,input_schema22574_22586,input_checker22575_22587,output_checker22576_22588){
return (function (seq22579){
var G__22580 = cljs.core.first.call(null,seq22579);
var seq22579__$1 = cljs.core.next.call(null,seq22579);
return om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic(G__22580,seq22579__$1);
});})(ufv___22584,output_schema22573_22585,input_schema22574_22586,input_checker22575_22587,output_checker22576_22588))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.toolbar),schema.core.make_fn_schema.call(null,output_schema22573_22585,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22574_22586], null)));
var ufv___22608 = schema.utils.use_fn_validation;
var output_schema22597_22609 = om_bootstrap.types.Component;
var input_schema22598_22610 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.ButtonGroup,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"ButtonGroup","ButtonGroup",-309978472,null)], null))),schema.core.Any], null);
var input_checker22599_22611 = schema.core.checker.call(null,input_schema22598_22610);
var output_checker22600_22612 = schema.core.checker.call(null,output_schema22597_22609);
/**
 * Inputs: [opts :- ButtonGroup & children]
 *   Returns: t/Component
 * 
 *   Renders the supplied children in a wrapping button-group div.
 */
om_bootstrap.button.button_group = ((function (ufv___22608,output_schema22597_22609,input_schema22598_22610,input_checker22599_22611,output_checker22600_22612){
return (function om_bootstrap$button$button_group(var_args){
var args__7333__auto__ = [];
var len__7326__auto___22613 = arguments.length;
var i__7327__auto___22614 = (0);
while(true){
if((i__7327__auto___22614 < len__7326__auto___22613)){
args__7333__auto__.push((arguments[i__7327__auto___22614]));

var G__22615 = (i__7327__auto___22614 + (1));
i__7327__auto___22614 = G__22615;
continue;
} else {
}
break;
}

var argseq__7334__auto__ = ((((1) < args__7333__auto__.length))?(new cljs.core.IndexedSeq(args__7333__auto__.slice((1)),(0),null)):null);
return om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7334__auto__);
});})(ufv___22608,output_schema22597_22609,input_schema22598_22610,input_checker22599_22611,output_checker22600_22612))
;

om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___22608,output_schema22597_22609,input_schema22598_22610,input_checker22599_22611,output_checker22600_22612){
return (function (G__22601,rest22602){
var validate__7824__auto__ = ufv___22608.get_cell();
if(cljs.core.truth_(validate__7824__auto__)){
var args__7825__auto___22616 = cljs.core.list_STAR_.call(null,G__22601,rest22602);
var temp__4657__auto___22617 = input_checker22599_22611.call(null,args__7825__auto___22616);
if(cljs.core.truth_(temp__4657__auto___22617)){
var error__7826__auto___22618 = temp__4657__auto___22617;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"button-group","button-group",108385979,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders the supplied children in a wrapping button-group div."], null)),cljs.core.pr_str.call(null,error__7826__auto___22618)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22598_22610,new cljs.core.Keyword(null,"value","value",305978217),args__7825__auto___22616,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___22618], null));
} else {
}
} else {
}

var o__7827__auto__ = (function (){var opts = G__22601;
var children = rest22602;
while(true){
var vec__22605 = om_bootstrap.types.separate.call(null,om_bootstrap.button.ButtonGroup,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"button-group"], null));
var bs = cljs.core.nth.call(null,vec__22605,(0),null);
var props = cljs.core.nth.call(null,vec__22605,(1),null);
var classes = cljs.core.merge.call(null,om_bootstrap.types.bs_class_set.call(null,bs),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"btn-group","btn-group",114866246),cljs.core.not.call(null,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444).cljs$core$IFn$_invoke$arity$1(bs)),new cljs.core.Keyword(null,"btn-group-vertical","btn-group-vertical",-1273565878),new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"btn-group-justified","btn-group-justified",1401722505),new cljs.core.Keyword(null,"justified?","justified?",-1045366764).cljs$core$IFn$_invoke$arity$1(bs)], null));
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__7824__auto__)){
var temp__4657__auto___22619 = output_checker22600_22612.call(null,o__7827__auto__);
if(cljs.core.truth_(temp__4657__auto___22619)){
var error__7826__auto___22620 = temp__4657__auto___22619;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"button-group","button-group",108385979,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders the supplied children in a wrapping button-group div."], null)),cljs.core.pr_str.call(null,error__7826__auto___22620)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22597_22609,new cljs.core.Keyword(null,"value","value",305978217),o__7827__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___22620], null));
} else {
}
} else {
}

return o__7827__auto__;
});})(ufv___22608,output_schema22597_22609,input_schema22598_22610,input_checker22599_22611,output_checker22600_22612))
;

om_bootstrap.button.button_group.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.button_group.cljs$lang$applyTo = ((function (ufv___22608,output_schema22597_22609,input_schema22598_22610,input_checker22599_22611,output_checker22600_22612){
return (function (seq22603){
var G__22604 = cljs.core.first.call(null,seq22603);
var seq22603__$1 = cljs.core.next.call(null,seq22603);
return om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic(G__22604,seq22603__$1);
});})(ufv___22608,output_schema22597_22609,input_schema22598_22610,input_checker22599_22611,output_checker22600_22612))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.button_group),schema.core.make_fn_schema.call(null,output_schema22597_22609,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22598_22610], null)));
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

var component_fnk__21908__auto___22656 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema22625 = schema.core.Any;
var input_schema22626 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"map22624","map22624",1604163616,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)))], null);
var input_checker22627 = schema.core.checker.call(null,input_schema22626);
var output_checker22628 = schema.core.checker.call(null,output_schema22625);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema22625,input_schema22626,input_checker22627,output_checker22628){
return (function om_bootstrap$button$constructor22622(G__22629){
var validate__7824__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__7824__auto__)){
var args__7825__auto___22657 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22629], null);
var temp__4657__auto___22658 = input_checker22627.call(null,args__7825__auto___22657);
if(cljs.core.truth_(temp__4657__auto___22658)){
var error__7826__auto___22659 = temp__4657__auto___22658;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor22622","constructor22622",-1845010838,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__7826__auto___22659)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22626,new cljs.core.Keyword(null,"value","value",305978217),args__7825__auto___22657,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___22659], null));
} else {
}
} else {
}

var o__7827__auto__ = (function (){var map22624 = G__22629;
while(true){
if(cljs.core.map_QMARK_.call(null,map22624)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map22624)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map22624,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.button.t_om_bootstrap$button22638 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
om_bootstrap.button.t_om_bootstrap$button22638 = (function (map22624,owner,output_schema22625,output_checker22628,G__22629,constructor22622,input_schema22626,validate__7824__auto__,input_checker22627,ufv__,meta22639){
this.map22624 = map22624;
this.owner = owner;
this.output_schema22625 = output_schema22625;
this.output_checker22628 = output_checker22628;
this.G__22629 = G__22629;
this.constructor22622 = constructor22622;
this.input_schema22626 = input_schema22626;
this.validate__7824__auto__ = validate__7824__auto__;
this.input_checker22627 = input_checker22627;
this.ufv__ = ufv__;
this.meta22639 = meta22639;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.button.t_om_bootstrap$button22638.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,validate__7824__auto__,ufv__,output_schema22625,input_schema22626,input_checker22627,output_checker22628){
return (function (_22640,meta22639__$1){
var self__ = this;
var _22640__$1 = this;
return (new om_bootstrap.button.t_om_bootstrap$button22638(self__.map22624,self__.owner,self__.output_schema22625,self__.output_checker22628,self__.G__22629,self__.constructor22622,self__.input_schema22626,self__.validate__7824__auto__,self__.input_checker22627,self__.ufv__,meta22639__$1));
});})(owner,validate__7824__auto__,ufv__,output_schema22625,input_schema22626,input_checker22627,output_checker22628))
;

om_bootstrap.button.t_om_bootstrap$button22638.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,validate__7824__auto__,ufv__,output_schema22625,input_schema22626,input_checker22627,output_checker22628){
return (function (_22640){
var self__ = this;
var _22640__$1 = this;
return self__.meta22639;
});})(owner,validate__7824__auto__,ufv__,output_schema22625,input_schema22626,input_checker22627,output_checker22628))
;

om_bootstrap.button.t_om_bootstrap$button22638.prototype.om$core$IDisplayName$ = true;

om_bootstrap.button.t_om_bootstrap$button22638.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,validate__7824__auto__,ufv__,output_schema22625,input_schema22626,input_checker22627,output_checker22628){
return (function (_){
var self__ = this;
var ___$1 = this;
return "menu-item*";
});})(owner,validate__7824__auto__,ufv__,output_schema22625,input_schema22626,input_checker22627,output_checker22628))
;

om_bootstrap.button.t_om_bootstrap$button22638.prototype.om$core$IRender$ = true;

om_bootstrap.button.t_om_bootstrap$button22638.prototype.om$core$IRender$render$arity$1 = ((function (owner,validate__7824__auto__,ufv__,output_schema22625,input_schema22626,input_checker22627,output_checker22628){
return (function (_){
var self__ = this;
var ___$1 = this;
var map__22641 = om.core.get_props.call(null,self__.owner);
var map__22641__$1 = ((((!((map__22641 == null)))?((((map__22641.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22641.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22641):map__22641);
var opts = cljs.core.get.call(null,map__22641__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var children = cljs.core.get.call(null,map__22641__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var vec__22642 = om_bootstrap.types.separate.call(null,om_bootstrap.button.MenuItem,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null));
var bs = cljs.core.nth.call(null,vec__22642,(0),null);
var props = cljs.core.nth.call(null,vec__22642,(1),null);
var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dropdown-header","dropdown-header",-1451449167),new cljs.core.Keyword(null,"header?","header?",-106649173).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"divider","divider",1265972657),new cljs.core.Keyword(null,"divider?","divider?",1882560157).cljs$core$IFn$_invoke$arity$1(bs)], null);
var handle_click = ((function (map__22641,map__22641__$1,opts,children,vec__22642,bs,props,classes,___$1,owner,validate__7824__auto__,ufv__,output_schema22625,input_schema22626,input_checker22627,output_checker22628){
return (function (e){
var temp__4657__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4657__auto__)){
var on_select = temp__4657__auto__;
e.preventDefault();

return on_select.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(bs));
} else {
return null;
}
});})(map__22641,map__22641__$1,opts,children,vec__22642,bs,props,classes,___$1,owner,validate__7824__auto__,ufv__,output_schema22625,input_schema22626,input_checker22627,output_checker22628))
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
});})(owner,validate__7824__auto__,ufv__,output_schema22625,input_schema22626,input_checker22627,output_checker22628))
;

om_bootstrap.button.t_om_bootstrap$button22638.getBasis = ((function (owner,validate__7824__auto__,ufv__,output_schema22625,input_schema22626,input_checker22627,output_checker22628){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map22624","map22624",1604163616,null),cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"output-schema22625","output-schema22625",667042500,null),new cljs.core.Symbol(null,"output-checker22628","output-checker22628",1027994791,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__22629","G__22629",-2057984217,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"constructor22622","constructor22622",-1845010838,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"input-schema22626","input-schema22626",1412453451,null),new cljs.core.Symbol(null,"validate__7824__auto__","validate__7824__auto__",1540215376,null),new cljs.core.Symbol(null,"input-checker22627","input-checker22627",804048085,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"meta22639","meta22639",-1921658083,null)], null);
});})(owner,validate__7824__auto__,ufv__,output_schema22625,input_schema22626,input_checker22627,output_checker22628))
;

om_bootstrap.button.t_om_bootstrap$button22638.cljs$lang$type = true;

om_bootstrap.button.t_om_bootstrap$button22638.cljs$lang$ctorStr = "om-bootstrap.button/t_om_bootstrap$button22638";

om_bootstrap.button.t_om_bootstrap$button22638.cljs$lang$ctorPrWriter = ((function (owner,validate__7824__auto__,ufv__,output_schema22625,input_schema22626,input_checker22627,output_checker22628){
return (function (this__6857__auto__,writer__6858__auto__,opt__6859__auto__){
return cljs.core._write.call(null,writer__6858__auto__,"om-bootstrap.button/t_om_bootstrap$button22638");
});})(owner,validate__7824__auto__,ufv__,output_schema22625,input_schema22626,input_checker22627,output_checker22628))
;

om_bootstrap.button.__GT_t_om_bootstrap$button22638 = ((function (owner,validate__7824__auto__,ufv__,output_schema22625,input_schema22626,input_checker22627,output_checker22628){
return (function om_bootstrap$button$constructor22622_$___GT_t_om_bootstrap$button22638(map22624__$1,owner__$1,output_schema22625__$1,output_checker22628__$1,G__22629__$1,constructor22622__$1,input_schema22626__$1,validate__7824__auto____$1,input_checker22627__$1,ufv____$1,meta22639){
return (new om_bootstrap.button.t_om_bootstrap$button22638(map22624__$1,owner__$1,output_schema22625__$1,output_checker22628__$1,G__22629__$1,constructor22622__$1,input_schema22626__$1,validate__7824__auto____$1,input_checker22627__$1,ufv____$1,meta22639));
});})(owner,validate__7824__auto__,ufv__,output_schema22625,input_schema22626,input_checker22627,output_checker22628))
;

}

return (new om_bootstrap.button.t_om_bootstrap$button22638(map22624,owner,output_schema22625,output_checker22628,G__22629,om_bootstrap$button$constructor22622,input_schema22626,validate__7824__auto__,input_checker22627,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__7824__auto__)){
var temp__4657__auto___22660 = output_checker22628.call(null,o__7827__auto__);
if(cljs.core.truth_(temp__4657__auto___22660)){
var error__7826__auto___22661 = temp__4657__auto___22660;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor22622","constructor22622",-1845010838,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__7826__auto___22661)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22625,new cljs.core.Keyword(null,"value","value",305978217),o__7827__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___22661], null));
} else {
}
} else {
}

return o__7827__auto__;
});})(ufv__,output_schema22625,input_schema22626,input_checker22627,output_checker22628))
,schema.core.make_fn_schema.call(null,output_schema22625,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22626], null)));
})();
/**
 * Generates an Om component of a menu item. Done this way so that
 *   wrapping dropdowns will have access to the Om state.
 */
om_bootstrap.button.menu_item_STAR_ = ((function (component_fnk__21908__auto___22656){
return (function om_bootstrap$button$menu_item_STAR_(var_args){
var args__7333__auto__ = [];
var len__7326__auto___22662 = arguments.length;
var i__7327__auto___22663 = (0);
while(true){
if((i__7327__auto___22663 < len__7326__auto___22662)){
args__7333__auto__.push((arguments[i__7327__auto___22663]));

var G__22664 = (i__7327__auto___22663 + (1));
i__7327__auto___22663 = G__22664;
continue;
} else {
}
break;
}

var argseq__7334__auto__ = ((((2) < args__7333__auto__.length))?(new cljs.core.IndexedSeq(args__7333__auto__.slice((2)),(0),null)):null);
return om_bootstrap.button.menu_item_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7334__auto__);
});})(component_fnk__21908__auto___22656))
;

om_bootstrap.button.menu_item_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__21908__auto___22656){
return (function (data__21909__auto__,owner22621,p__22649){
var vec__22650 = p__22649;
var opts__21910__auto__ = cljs.core.nth.call(null,vec__22650,(0),null);
return component_fnk__21908__auto___22656.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__21910__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner22621,new cljs.core.Keyword(null,"data","data",-232669377),data__21909__auto__], null));
});})(component_fnk__21908__auto___22656))
;

om_bootstrap.button.menu_item_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.button.menu_item_STAR_.cljs$lang$applyTo = ((function (component_fnk__21908__auto___22656){
return (function (seq22646){
var G__22647 = cljs.core.first.call(null,seq22646);
var seq22646__$1 = cljs.core.next.call(null,seq22646);
var G__22648 = cljs.core.first.call(null,seq22646__$1);
var seq22646__$2 = cljs.core.next.call(null,seq22646__$1);
return om_bootstrap.button.menu_item_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__22647,G__22648,seq22646__$2);
});})(component_fnk__21908__auto___22656))
;


om_bootstrap.button.__GT_menu_item_STAR_ = (function om_bootstrap$button$__GT_menu_item_STAR_(var_args){
var args22653 = [];
var len__7326__auto___22665 = arguments.length;
var i__7327__auto___22666 = (0);
while(true){
if((i__7327__auto___22666 < len__7326__auto___22665)){
args22653.push((arguments[i__7327__auto___22666]));

var G__22667 = (i__7327__auto___22666 + (1));
i__7327__auto___22666 = G__22667;
continue;
} else {
}
break;
}

var G__22655 = args22653.length;
switch (G__22655) {
case 1:
return om_bootstrap.button.__GT_menu_item_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.button.__GT_menu_item_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22653.length)].join('')));

}
});

om_bootstrap.button.__GT_menu_item_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__21877__auto__){
return om.core.build.call(null,om_bootstrap.button.menu_item_STAR_,cursor__21877__auto__);
});

om_bootstrap.button.__GT_menu_item_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__21877__auto__,m22623){
return om.core.build.call(null,om_bootstrap.button.menu_item_STAR_,cursor__21877__auto__,m22623);
});

om_bootstrap.button.__GT_menu_item_STAR_.cljs$lang$maxFixedArity = 2;

var ufv___22677 = schema.utils.use_fn_validation;
var output_schema22669_22678 = om_bootstrap.types.Component;
var input_schema22670_22679 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.MenuItem,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"MenuItem","MenuItem",1235363736,null)], null))),schema.core.Any], null);
var input_checker22671_22680 = schema.core.checker.call(null,input_schema22670_22679);
var output_checker22672_22681 = schema.core.checker.call(null,output_schema22669_22678);
/**
 * Inputs: [opts :- MenuItem & children]
 *   Returns: t/Component
 */
om_bootstrap.button.menu_item = ((function (ufv___22677,output_schema22669_22678,input_schema22670_22679,input_checker22671_22680,output_checker22672_22681){
return (function om_bootstrap$button$menu_item(var_args){
var args__7333__auto__ = [];
var len__7326__auto___22682 = arguments.length;
var i__7327__auto___22683 = (0);
while(true){
if((i__7327__auto___22683 < len__7326__auto___22682)){
args__7333__auto__.push((arguments[i__7327__auto___22683]));

var G__22684 = (i__7327__auto___22683 + (1));
i__7327__auto___22683 = G__22684;
continue;
} else {
}
break;
}

var argseq__7334__auto__ = ((((1) < args__7333__auto__.length))?(new cljs.core.IndexedSeq(args__7333__auto__.slice((1)),(0),null)):null);
return om_bootstrap.button.menu_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7334__auto__);
});})(ufv___22677,output_schema22669_22678,input_schema22670_22679,input_checker22671_22680,output_checker22672_22681))
;

om_bootstrap.button.menu_item.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___22677,output_schema22669_22678,input_schema22670_22679,input_checker22671_22680,output_checker22672_22681){
return (function (G__22673,rest22674){
var validate__7824__auto__ = ufv___22677.get_cell();
if(cljs.core.truth_(validate__7824__auto__)){
var args__7825__auto___22685 = cljs.core.list_STAR_.call(null,G__22673,rest22674);
var temp__4657__auto___22686 = input_checker22671_22680.call(null,args__7825__auto___22685);
if(cljs.core.truth_(temp__4657__auto___22686)){
var error__7826__auto___22687 = temp__4657__auto___22686;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"menu-item","menu-item",269419754,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__7826__auto___22687)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22670_22679,new cljs.core.Keyword(null,"value","value",305978217),args__7825__auto___22685,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___22687], null));
} else {
}
} else {
}

var o__7827__auto__ = (function (){var opts = G__22673;
var children = rest22674;
while(true){
return om_bootstrap.button.__GT_menu_item_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__7824__auto__)){
var temp__4657__auto___22688 = output_checker22672_22681.call(null,o__7827__auto__);
if(cljs.core.truth_(temp__4657__auto___22688)){
var error__7826__auto___22689 = temp__4657__auto___22688;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"menu-item","menu-item",269419754,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__7826__auto___22689)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22669_22678,new cljs.core.Keyword(null,"value","value",305978217),o__7827__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___22689], null));
} else {
}
} else {
}

return o__7827__auto__;
});})(ufv___22677,output_schema22669_22678,input_schema22670_22679,input_checker22671_22680,output_checker22672_22681))
;

om_bootstrap.button.menu_item.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.menu_item.cljs$lang$applyTo = ((function (ufv___22677,output_schema22669_22678,input_schema22670_22679,input_checker22671_22680,output_checker22672_22681){
return (function (seq22675){
var G__22676 = cljs.core.first.call(null,seq22675);
var seq22675__$1 = cljs.core.next.call(null,seq22675);
return om_bootstrap.button.menu_item.cljs$core$IFn$_invoke$arity$variadic(G__22676,seq22675__$1);
});})(ufv___22677,output_schema22669_22678,input_schema22670_22679,input_checker22671_22680,output_checker22672_22681))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.menu_item),schema.core.make_fn_schema.call(null,output_schema22669_22678,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22670_22679], null)));
om_bootstrap.button.DropdownMenu = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))], true, false));
var ufv___22702 = schema.utils.use_fn_validation;
var output_schema22691_22703 = om_bootstrap.types.Component;
var input_schema22692_22704 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.DropdownMenu,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"DropdownMenu","DropdownMenu",881901742,null)], null))),schema.core.Any], null);
var input_checker22693_22705 = schema.core.checker.call(null,input_schema22692_22704);
var output_checker22694_22706 = schema.core.checker.call(null,output_schema22691_22703);
/**
 * Inputs: [opts :- DropdownMenu & children]
 *   Returns: t/Component
 */
om_bootstrap.button.dropdown_menu = ((function (ufv___22702,output_schema22691_22703,input_schema22692_22704,input_checker22693_22705,output_checker22694_22706){
return (function om_bootstrap$button$dropdown_menu(var_args){
var args__7333__auto__ = [];
var len__7326__auto___22707 = arguments.length;
var i__7327__auto___22708 = (0);
while(true){
if((i__7327__auto___22708 < len__7326__auto___22707)){
args__7333__auto__.push((arguments[i__7327__auto___22708]));

var G__22709 = (i__7327__auto___22708 + (1));
i__7327__auto___22708 = G__22709;
continue;
} else {
}
break;
}

var argseq__7334__auto__ = ((((1) < args__7333__auto__.length))?(new cljs.core.IndexedSeq(args__7333__auto__.slice((1)),(0),null)):null);
return om_bootstrap.button.dropdown_menu.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7334__auto__);
});})(ufv___22702,output_schema22691_22703,input_schema22692_22704,input_checker22693_22705,output_checker22694_22706))
;

om_bootstrap.button.dropdown_menu.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___22702,output_schema22691_22703,input_schema22692_22704,input_checker22693_22705,output_checker22694_22706){
return (function (G__22695,rest22696){
var validate__7824__auto__ = ufv___22702.get_cell();
if(cljs.core.truth_(validate__7824__auto__)){
var args__7825__auto___22710 = cljs.core.list_STAR_.call(null,G__22695,rest22696);
var temp__4657__auto___22711 = input_checker22693_22705.call(null,args__7825__auto___22710);
if(cljs.core.truth_(temp__4657__auto___22711)){
var error__7826__auto___22712 = temp__4657__auto___22711;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"dropdown-menu","dropdown-menu",-2089460283,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__7826__auto___22712)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22692_22704,new cljs.core.Keyword(null,"value","value",305978217),args__7825__auto___22710,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___22712], null));
} else {
}
} else {
}

var o__7827__auto__ = (function (){var opts = G__22695;
var children = rest22696;
while(true){
var vec__22699 = om_bootstrap.types.separate.call(null,om_bootstrap.button.DropdownMenu,opts);
var bs = cljs.core.nth.call(null,vec__22699,(0),null);
var props = cljs.core.nth.call(null,vec__22699,(1),null);
var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dropdown-menu","dropdown-menu",564975486),true,new cljs.core.Keyword(null,"dropdown-menu-right","dropdown-menu-right",-1532579541),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs)], null);
var ul_attrs = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes),new cljs.core.Keyword(null,"role","role",-736691072),"menu"], null);
return om_tools.dom.element.call(null,React.DOM.ul,om_bootstrap.util.merge_props.call(null,props,ul_attrs),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var temp__4655__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4655__auto__)){
var on_select = temp__4655__auto__;
return cljs.core.map.call(null,((function (on_select,temp__4655__auto__,vec__22699,bs,props,classes,ul_attrs,validate__7824__auto__,ufv___22702,output_schema22691_22703,input_schema22692_22704,input_checker22693_22705,output_checker22694_22706){
return (function (p1__22690_SHARP_){
return om_bootstrap.util.clone_with_props.call(null,p1__22690_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),on_select], null));
});})(on_select,temp__4655__auto__,vec__22699,bs,props,classes,ul_attrs,validate__7824__auto__,ufv___22702,output_schema22691_22703,input_schema22692_22704,input_checker22693_22705,output_checker22694_22706))
,children);
} else {
return children;
}
})()],null)));
break;
}
})();
if(cljs.core.truth_(validate__7824__auto__)){
var temp__4657__auto___22713 = output_checker22694_22706.call(null,o__7827__auto__);
if(cljs.core.truth_(temp__4657__auto___22713)){
var error__7826__auto___22714 = temp__4657__auto___22713;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"dropdown-menu","dropdown-menu",-2089460283,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__7826__auto___22714)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22691_22703,new cljs.core.Keyword(null,"value","value",305978217),o__7827__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___22714], null));
} else {
}
} else {
}

return o__7827__auto__;
});})(ufv___22702,output_schema22691_22703,input_schema22692_22704,input_checker22693_22705,output_checker22694_22706))
;

om_bootstrap.button.dropdown_menu.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.dropdown_menu.cljs$lang$applyTo = ((function (ufv___22702,output_schema22691_22703,input_schema22692_22704,input_checker22693_22705,output_checker22694_22706){
return (function (seq22697){
var G__22698 = cljs.core.first.call(null,seq22697);
var seq22697__$1 = cljs.core.next.call(null,seq22697);
return om_bootstrap.button.dropdown_menu.cljs$core$IFn$_invoke$arity$variadic(G__22698,seq22697__$1);
});})(ufv___22702,output_schema22691_22703,input_schema22692_22704,input_checker22693_22705,output_checker22694_22706))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.dropdown_menu),schema.core.make_fn_schema.call(null,output_schema22691_22703,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22692_22704], null)));
om_bootstrap.button.dropdown_STAR_$descriptor = (function (){var descriptor__21879__auto__ = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
(descriptor__21879__auto__["mixins"] = [om_bootstrap.mixins.dropdown_mixin]);

return descriptor__21879__auto__;
})();

var component_fnk__21908__auto___22751 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema22720 = schema.core.Any;
var input_schema22721 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"map22719","map22719",135999059,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)))], null);
var input_checker22722 = schema.core.checker.call(null,input_schema22721);
var output_checker22723 = schema.core.checker.call(null,output_schema22720);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema22720,input_schema22721,input_checker22722,output_checker22723){
return (function om_bootstrap$button$constructor22717(G__22724){
var validate__7824__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__7824__auto__)){
var args__7825__auto___22752 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22724], null);
var temp__4657__auto___22753 = input_checker22722.call(null,args__7825__auto___22752);
if(cljs.core.truth_(temp__4657__auto___22753)){
var error__7826__auto___22754 = temp__4657__auto___22753;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor22717","constructor22717",-353035249,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__7826__auto___22754)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22721,new cljs.core.Keyword(null,"value","value",305978217),args__7825__auto___22752,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___22754], null));
} else {
}
} else {
}

var o__7827__auto__ = (function (){var map22719 = G__22724;
while(true){
if(cljs.core.map_QMARK_.call(null,map22719)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map22719)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map22719,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map22719,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.button.t_om_bootstrap$button22733 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
om_bootstrap.button.t_om_bootstrap$button22733 = (function (output_checker22723,owner,output_schema22720,input_checker22722,constructor22717,input_schema22721,validate__7824__auto__,map22719,state,G__22724,ufv__,meta22734){
this.output_checker22723 = output_checker22723;
this.owner = owner;
this.output_schema22720 = output_schema22720;
this.input_checker22722 = input_checker22722;
this.constructor22717 = constructor22717;
this.input_schema22721 = input_schema22721;
this.validate__7824__auto__ = validate__7824__auto__;
this.map22719 = map22719;
this.state = state;
this.G__22724 = G__22724;
this.ufv__ = ufv__;
this.meta22734 = meta22734;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.button.t_om_bootstrap$button22733.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,owner,validate__7824__auto__,ufv__,output_schema22720,input_schema22721,input_checker22722,output_checker22723){
return (function (_22735,meta22734__$1){
var self__ = this;
var _22735__$1 = this;
return (new om_bootstrap.button.t_om_bootstrap$button22733(self__.output_checker22723,self__.owner,self__.output_schema22720,self__.input_checker22722,self__.constructor22717,self__.input_schema22721,self__.validate__7824__auto__,self__.map22719,self__.state,self__.G__22724,self__.ufv__,meta22734__$1));
});})(state,owner,validate__7824__auto__,ufv__,output_schema22720,input_schema22721,input_checker22722,output_checker22723))
;

om_bootstrap.button.t_om_bootstrap$button22733.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,owner,validate__7824__auto__,ufv__,output_schema22720,input_schema22721,input_checker22722,output_checker22723){
return (function (_22735){
var self__ = this;
var _22735__$1 = this;
return self__.meta22734;
});})(state,owner,validate__7824__auto__,ufv__,output_schema22720,input_schema22721,input_checker22722,output_checker22723))
;

om_bootstrap.button.t_om_bootstrap$button22733.prototype.om$core$IDisplayName$ = true;

om_bootstrap.button.t_om_bootstrap$button22733.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,owner,validate__7824__auto__,ufv__,output_schema22720,input_schema22721,input_checker22722,output_checker22723){
return (function (_){
var self__ = this;
var ___$1 = this;
return "dropdown*";
});})(state,owner,validate__7824__auto__,ufv__,output_schema22720,input_schema22721,input_checker22722,output_checker22723))
;

om_bootstrap.button.t_om_bootstrap$button22733.prototype.om$core$IRender$ = true;

om_bootstrap.button.t_om_bootstrap$button22733.prototype.om$core$IRender$render$arity$1 = ((function (state,owner,validate__7824__auto__,ufv__,output_schema22720,input_schema22721,input_checker22722,output_checker22723){
return (function (_){
var self__ = this;
var ___$1 = this;
var open_QMARK_ = (self__.owner["isDropdownOpen"]).call(null);
var map__22736 = om.core.get_props.call(null,self__.owner);
var map__22736__$1 = ((((!((map__22736 == null)))?((((map__22736.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22736.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22736):map__22736);
var opts = cljs.core.get.call(null,map__22736__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var children = cljs.core.get.call(null,map__22736__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var vec__22737 = om_bootstrap.types.separate.call(null,om_bootstrap.button.DropdownButton,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null));
var bs = cljs.core.nth.call(null,vec__22737,(0),null);
var props = cljs.core.nth.call(null,vec__22737,(1),null);
var set_dropdown = (self__.owner["setDropdownState"]);
var render_fn = cljs.core.partial.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031).cljs$core$IFn$_invoke$arity$1(bs))?om_bootstrap.button.render_nav_item:om_bootstrap.button.render_button_group),bs,open_QMARK_);
var button_props = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ref","ref",1289896967),"dropdownButton",new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-toggle",new cljs.core.Keyword(null,"key","key",-1516042587),(0),new cljs.core.Keyword(null,"nav-dropdown?","nav-dropdown?",2070486004),new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,map__22736,map__22736__$1,opts,children,vec__22737,bs,props,set_dropdown,render_fn,___$1,state,owner,validate__7824__auto__,ufv__,output_schema22720,input_schema22721,input_checker22722,output_checker22723){
return (function (e){
e.preventDefault();

return set_dropdown.call(null,cljs.core.not.call(null,open_QMARK_));
});})(open_QMARK_,map__22736,map__22736__$1,opts,children,vec__22737,bs,props,set_dropdown,render_fn,___$1,state,owner,validate__7824__auto__,ufv__,output_schema22720,input_schema22721,input_checker22722,output_checker22723))
], null);
var update_child_props = ((function (open_QMARK_,map__22736,map__22736__$1,opts,children,vec__22737,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__7824__auto__,ufv__,output_schema22720,input_schema22721,input_checker22722,output_checker22723){
return (function (props__$1){
var handle = (cljs.core.truth_((function (){var or__6251__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"opts","opts",155075701).cljs$core$IFn$_invoke$arity$1(props__$1));
if(cljs.core.truth_(or__6251__auto__)){
return or__6251__auto__;
} else {
return new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
}
})())?((function (open_QMARK_,map__22736,map__22736__$1,opts,children,vec__22737,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__7824__auto__,ufv__,output_schema22720,input_schema22721,input_checker22722,output_checker22723){
return (function (key){
var temp__4655__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4655__auto__)){
var os = temp__4655__auto__;
return os.call(null,key);
} else {
return set_dropdown.call(null,false);
}
});})(open_QMARK_,map__22736,map__22736__$1,opts,children,vec__22737,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__7824__auto__,ufv__,output_schema22720,input_schema22721,input_checker22722,output_checker22723))
:null);
return cljs.core.update_in.call(null,props__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null),om_bootstrap.util.merge_props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),handle], null));
});})(open_QMARK_,map__22736,map__22736__$1,opts,children,vec__22737,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__7824__auto__,ufv__,output_schema22720,input_schema22721,input_checker22722,output_checker22723))
;
return render_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.button.button.call(null,om_bootstrap.util.merge_props.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428)),button_props),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs)," ",React.DOM.span({"className": "caret"})),om_bootstrap.button.dropdown_menu.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ref","ref",1289896967),"menu",new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"key","key",-1516042587),(1)], null),cljs.core.map.call(null,((function (open_QMARK_,map__22736,map__22736__$1,opts,children,vec__22737,bs,props,set_dropdown,render_fn,button_props,update_child_props,___$1,state,owner,validate__7824__auto__,ufv__,output_schema22720,input_schema22721,input_checker22722,output_checker22723){
return (function (p1__22715_SHARP_){
return om_bootstrap.util.clone_with_props.call(null,p1__22715_SHARP_,update_child_props);
});})(open_QMARK_,map__22736,map__22736__$1,opts,children,vec__22737,bs,props,set_dropdown,render_fn,button_props,update_child_props,___$1,state,owner,validate__7824__auto__,ufv__,output_schema22720,input_schema22721,input_checker22722,output_checker22723))
,children))], null));
});})(state,owner,validate__7824__auto__,ufv__,output_schema22720,input_schema22721,input_checker22722,output_checker22723))
;

om_bootstrap.button.t_om_bootstrap$button22733.getBasis = ((function (state,owner,validate__7824__auto__,ufv__,output_schema22720,input_schema22721,input_checker22722,output_checker22723){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"output-checker22723","output-checker22723",-1824621759,null),cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"output-schema22720","output-schema22720",-974077212,null),new cljs.core.Symbol(null,"input-checker22722","input-checker22722",1211898573,null),cljs.core.with_meta(new cljs.core.Symbol(null,"constructor22717","constructor22717",-353035249,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"input-schema22721","input-schema22721",1147116655,null),new cljs.core.Symbol(null,"validate__7824__auto__","validate__7824__auto__",1540215376,null),new cljs.core.Symbol(null,"map22719","map22719",135999059,null),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"G__22724","G__22724",-903150473,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"meta22734","meta22734",-1002911499,null)], null);
});})(state,owner,validate__7824__auto__,ufv__,output_schema22720,input_schema22721,input_checker22722,output_checker22723))
;

om_bootstrap.button.t_om_bootstrap$button22733.cljs$lang$type = true;

om_bootstrap.button.t_om_bootstrap$button22733.cljs$lang$ctorStr = "om-bootstrap.button/t_om_bootstrap$button22733";

om_bootstrap.button.t_om_bootstrap$button22733.cljs$lang$ctorPrWriter = ((function (state,owner,validate__7824__auto__,ufv__,output_schema22720,input_schema22721,input_checker22722,output_checker22723){
return (function (this__6857__auto__,writer__6858__auto__,opt__6859__auto__){
return cljs.core._write.call(null,writer__6858__auto__,"om-bootstrap.button/t_om_bootstrap$button22733");
});})(state,owner,validate__7824__auto__,ufv__,output_schema22720,input_schema22721,input_checker22722,output_checker22723))
;

om_bootstrap.button.__GT_t_om_bootstrap$button22733 = ((function (state,owner,validate__7824__auto__,ufv__,output_schema22720,input_schema22721,input_checker22722,output_checker22723){
return (function om_bootstrap$button$constructor22717_$___GT_t_om_bootstrap$button22733(output_checker22723__$1,owner__$1,output_schema22720__$1,input_checker22722__$1,constructor22717__$1,input_schema22721__$1,validate__7824__auto____$1,map22719__$1,state__$1,G__22724__$1,ufv____$1,meta22734){
return (new om_bootstrap.button.t_om_bootstrap$button22733(output_checker22723__$1,owner__$1,output_schema22720__$1,input_checker22722__$1,constructor22717__$1,input_schema22721__$1,validate__7824__auto____$1,map22719__$1,state__$1,G__22724__$1,ufv____$1,meta22734));
});})(state,owner,validate__7824__auto__,ufv__,output_schema22720,input_schema22721,input_checker22722,output_checker22723))
;

}

return (new om_bootstrap.button.t_om_bootstrap$button22733(output_checker22723,owner,output_schema22720,input_checker22722,om_bootstrap$button$constructor22717,input_schema22721,validate__7824__auto__,map22719,state,G__22724,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__7824__auto__)){
var temp__4657__auto___22755 = output_checker22723.call(null,o__7827__auto__);
if(cljs.core.truth_(temp__4657__auto___22755)){
var error__7826__auto___22756 = temp__4657__auto___22755;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor22717","constructor22717",-353035249,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__7826__auto___22756)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22720,new cljs.core.Keyword(null,"value","value",305978217),o__7827__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___22756], null));
} else {
}
} else {
}

return o__7827__auto__;
});})(ufv__,output_schema22720,input_schema22721,input_checker22722,output_checker22723))
,schema.core.make_fn_schema.call(null,output_schema22720,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22721], null)));
})();
/**
 * Generates a dropdown button component responsible for its own
 *   toggled state. The open? toggling is handled through a dropdown
 *   mixin.
 */
om_bootstrap.button.dropdown_STAR_ = ((function (component_fnk__21908__auto___22751){
return (function om_bootstrap$button$dropdown_STAR_(var_args){
var args__7333__auto__ = [];
var len__7326__auto___22757 = arguments.length;
var i__7327__auto___22758 = (0);
while(true){
if((i__7327__auto___22758 < len__7326__auto___22757)){
args__7333__auto__.push((arguments[i__7327__auto___22758]));

var G__22759 = (i__7327__auto___22758 + (1));
i__7327__auto___22758 = G__22759;
continue;
} else {
}
break;
}

var argseq__7334__auto__ = ((((2) < args__7333__auto__.length))?(new cljs.core.IndexedSeq(args__7333__auto__.slice((2)),(0),null)):null);
return om_bootstrap.button.dropdown_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7334__auto__);
});})(component_fnk__21908__auto___22751))
;

om_bootstrap.button.dropdown_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__21908__auto___22751){
return (function (data__21909__auto__,owner22716,p__22744){
var vec__22745 = p__22744;
var opts__21910__auto__ = cljs.core.nth.call(null,vec__22745,(0),null);
return component_fnk__21908__auto___22751.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner22716),new cljs.core.Keyword(null,"opts","opts",155075701),opts__21910__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner22716,new cljs.core.Keyword(null,"data","data",-232669377),data__21909__auto__], null));
});})(component_fnk__21908__auto___22751))
;

om_bootstrap.button.dropdown_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.button.dropdown_STAR_.cljs$lang$applyTo = ((function (component_fnk__21908__auto___22751){
return (function (seq22741){
var G__22742 = cljs.core.first.call(null,seq22741);
var seq22741__$1 = cljs.core.next.call(null,seq22741);
var G__22743 = cljs.core.first.call(null,seq22741__$1);
var seq22741__$2 = cljs.core.next.call(null,seq22741__$1);
return om_bootstrap.button.dropdown_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__22742,G__22743,seq22741__$2);
});})(component_fnk__21908__auto___22751))
;


om_bootstrap.button.__GT_dropdown_STAR_ = (function om_bootstrap$button$__GT_dropdown_STAR_(var_args){
var args22748 = [];
var len__7326__auto___22760 = arguments.length;
var i__7327__auto___22761 = (0);
while(true){
if((i__7327__auto___22761 < len__7326__auto___22760)){
args22748.push((arguments[i__7327__auto___22761]));

var G__22762 = (i__7327__auto___22761 + (1));
i__7327__auto___22761 = G__22762;
continue;
} else {
}
break;
}

var G__22750 = args22748.length;
switch (G__22750) {
case 1:
return om_bootstrap.button.__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.button.__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22748.length)].join('')));

}
});

om_bootstrap.button.__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__21877__auto__){
return om.core.build.call(null,om_bootstrap.button.dropdown_STAR_,cursor__21877__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.dropdown_STAR_$descriptor], null));
});

om_bootstrap.button.__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__21877__auto__,m22718){
return om.core.build.call(null,om_bootstrap.button.dropdown_STAR_,cursor__21877__auto__,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.dropdown_STAR_$descriptor], null),m22718));
});

om_bootstrap.button.__GT_dropdown_STAR_.cljs$lang$maxFixedArity = 2;

var ufv___22772 = schema.utils.use_fn_validation;
var output_schema22764_22773 = om_bootstrap.types.Component;
var input_schema22765_22774 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.DropdownButton,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"DropdownButton","DropdownButton",251375015,null)], null))),schema.core.Any], null);
var input_checker22766_22775 = schema.core.checker.call(null,input_schema22765_22774);
var output_checker22767_22776 = schema.core.checker.call(null,output_schema22764_22773);
/**
 * Inputs: [opts :- DropdownButton & children]
 *   Returns: t/Component
 * 
 *   Returns a dropdown button component. The component manages its own
 *   dropdown state.
 */
om_bootstrap.button.dropdown = ((function (ufv___22772,output_schema22764_22773,input_schema22765_22774,input_checker22766_22775,output_checker22767_22776){
return (function om_bootstrap$button$dropdown(var_args){
var args__7333__auto__ = [];
var len__7326__auto___22777 = arguments.length;
var i__7327__auto___22778 = (0);
while(true){
if((i__7327__auto___22778 < len__7326__auto___22777)){
args__7333__auto__.push((arguments[i__7327__auto___22778]));

var G__22779 = (i__7327__auto___22778 + (1));
i__7327__auto___22778 = G__22779;
continue;
} else {
}
break;
}

var argseq__7334__auto__ = ((((1) < args__7333__auto__.length))?(new cljs.core.IndexedSeq(args__7333__auto__.slice((1)),(0),null)):null);
return om_bootstrap.button.dropdown.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7334__auto__);
});})(ufv___22772,output_schema22764_22773,input_schema22765_22774,input_checker22766_22775,output_checker22767_22776))
;

om_bootstrap.button.dropdown.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___22772,output_schema22764_22773,input_schema22765_22774,input_checker22766_22775,output_checker22767_22776){
return (function (G__22768,rest22769){
var validate__7824__auto__ = ufv___22772.get_cell();
if(cljs.core.truth_(validate__7824__auto__)){
var args__7825__auto___22780 = cljs.core.list_STAR_.call(null,G__22768,rest22769);
var temp__4657__auto___22781 = input_checker22766_22775.call(null,args__7825__auto___22780);
if(cljs.core.truth_(temp__4657__auto___22781)){
var error__7826__auto___22782 = temp__4657__auto___22781;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"dropdown","dropdown",-1311249964,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a dropdown button component. The component manages its own\n  dropdown state."], null)),cljs.core.pr_str.call(null,error__7826__auto___22782)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22765_22774,new cljs.core.Keyword(null,"value","value",305978217),args__7825__auto___22780,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___22782], null));
} else {
}
} else {
}

var o__7827__auto__ = (function (){var opts = G__22768;
var children = rest22769;
while(true){
return om_bootstrap.button.__GT_dropdown_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__7824__auto__)){
var temp__4657__auto___22783 = output_checker22767_22776.call(null,o__7827__auto__);
if(cljs.core.truth_(temp__4657__auto___22783)){
var error__7826__auto___22784 = temp__4657__auto___22783;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"dropdown","dropdown",-1311249964,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a dropdown button component. The component manages its own\n  dropdown state."], null)),cljs.core.pr_str.call(null,error__7826__auto___22784)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22764_22773,new cljs.core.Keyword(null,"value","value",305978217),o__7827__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___22784], null));
} else {
}
} else {
}

return o__7827__auto__;
});})(ufv___22772,output_schema22764_22773,input_schema22765_22774,input_checker22766_22775,output_checker22767_22776))
;

om_bootstrap.button.dropdown.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.dropdown.cljs$lang$applyTo = ((function (ufv___22772,output_schema22764_22773,input_schema22765_22774,input_checker22766_22775,output_checker22767_22776){
return (function (seq22770){
var G__22771 = cljs.core.first.call(null,seq22770);
var seq22770__$1 = cljs.core.next.call(null,seq22770);
return om_bootstrap.button.dropdown.cljs$core$IFn$_invoke$arity$variadic(G__22771,seq22770__$1);
});})(ufv___22772,output_schema22764_22773,input_schema22765_22774,input_checker22766_22775,output_checker22767_22776))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.dropdown),schema.core.make_fn_schema.call(null,output_schema22764_22773,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22765_22774], null)));
om_bootstrap.button.SplitButton = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"href","href",-793805698)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"dropdown-title","dropdown-title",1850134238)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-click","on-click",1632826543)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))], true, false));
om_bootstrap.button.split_STAR_$descriptor = (function (){var descriptor__21879__auto__ = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
(descriptor__21879__auto__["mixins"] = [om_bootstrap.mixins.dropdown_mixin]);

return descriptor__21879__auto__;
})();

var component_fnk__21908__auto___22820 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema22789 = schema.core.Any;
var input_schema22790 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"map22788","map22788",-1601924303,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)))], null);
var input_checker22791 = schema.core.checker.call(null,input_schema22790);
var output_checker22792 = schema.core.checker.call(null,output_schema22789);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema22789,input_schema22790,input_checker22791,output_checker22792){
return (function om_bootstrap$button$constructor22786(G__22793){
var validate__7824__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__7824__auto__)){
var args__7825__auto___22821 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22793], null);
var temp__4657__auto___22822 = input_checker22791.call(null,args__7825__auto___22821);
if(cljs.core.truth_(temp__4657__auto___22822)){
var error__7826__auto___22823 = temp__4657__auto___22822;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor22786","constructor22786",1483601740,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__7826__auto___22823)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22790,new cljs.core.Keyword(null,"value","value",305978217),args__7825__auto___22821,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___22823], null));
} else {
}
} else {
}

var o__7827__auto__ = (function (){var map22788 = G__22793;
while(true){
if(cljs.core.map_QMARK_.call(null,map22788)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map22788)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map22788,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map22788,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.button.t_om_bootstrap$button22802 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
om_bootstrap.button.t_om_bootstrap$button22802 = (function (G__22793,owner,constructor22786,input_schema22790,validate__7824__auto__,map22788,state,output_checker22792,input_checker22791,ufv__,output_schema22789,meta22803){
this.G__22793 = G__22793;
this.owner = owner;
this.constructor22786 = constructor22786;
this.input_schema22790 = input_schema22790;
this.validate__7824__auto__ = validate__7824__auto__;
this.map22788 = map22788;
this.state = state;
this.output_checker22792 = output_checker22792;
this.input_checker22791 = input_checker22791;
this.ufv__ = ufv__;
this.output_schema22789 = output_schema22789;
this.meta22803 = meta22803;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.button.t_om_bootstrap$button22802.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,owner,validate__7824__auto__,ufv__,output_schema22789,input_schema22790,input_checker22791,output_checker22792){
return (function (_22804,meta22803__$1){
var self__ = this;
var _22804__$1 = this;
return (new om_bootstrap.button.t_om_bootstrap$button22802(self__.G__22793,self__.owner,self__.constructor22786,self__.input_schema22790,self__.validate__7824__auto__,self__.map22788,self__.state,self__.output_checker22792,self__.input_checker22791,self__.ufv__,self__.output_schema22789,meta22803__$1));
});})(state,owner,validate__7824__auto__,ufv__,output_schema22789,input_schema22790,input_checker22791,output_checker22792))
;

om_bootstrap.button.t_om_bootstrap$button22802.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,owner,validate__7824__auto__,ufv__,output_schema22789,input_schema22790,input_checker22791,output_checker22792){
return (function (_22804){
var self__ = this;
var _22804__$1 = this;
return self__.meta22803;
});})(state,owner,validate__7824__auto__,ufv__,output_schema22789,input_schema22790,input_checker22791,output_checker22792))
;

om_bootstrap.button.t_om_bootstrap$button22802.prototype.om$core$IDisplayName$ = true;

om_bootstrap.button.t_om_bootstrap$button22802.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,owner,validate__7824__auto__,ufv__,output_schema22789,input_schema22790,input_checker22791,output_checker22792){
return (function (_){
var self__ = this;
var ___$1 = this;
return "split*";
});})(state,owner,validate__7824__auto__,ufv__,output_schema22789,input_schema22790,input_checker22791,output_checker22792))
;

om_bootstrap.button.t_om_bootstrap$button22802.prototype.om$core$IRender$ = true;

om_bootstrap.button.t_om_bootstrap$button22802.prototype.om$core$IRender$render$arity$1 = ((function (state,owner,validate__7824__auto__,ufv__,output_schema22789,input_schema22790,input_checker22791,output_checker22792){
return (function (_){
var self__ = this;
var ___$1 = this;
var open_QMARK_ = (self__.owner["isDropdownOpen"]).call(null);
var map__22805 = om.core.get_props.call(null,self__.owner);
var map__22805__$1 = ((((!((map__22805 == null)))?((((map__22805.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22805.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22805):map__22805);
var opts = cljs.core.get.call(null,map__22805__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var children = cljs.core.get.call(null,map__22805__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var vec__22806 = om_bootstrap.types.separate.call(null,om_bootstrap.button.SplitButton,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dropdown-title","dropdown-title",1850134238),"Toggle dropdown"], null));
var bs = cljs.core.nth.call(null,vec__22806,(0),null);
var props = cljs.core.nth.call(null,vec__22806,(1),null);
var set_dropdown = (self__.owner["setDropdownState"]);
var btn_props = cljs.core.partial.call(null,om_bootstrap.util.merge_props,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"id","id",-1388402092)));
var btn = om_bootstrap.button.button.call(null,btn_props.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,map__22805,map__22805__$1,opts,children,vec__22806,bs,props,set_dropdown,btn_props,___$1,state,owner,validate__7824__auto__,ufv__,output_schema22789,input_schema22790,input_checker22791,output_checker22792){
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
});})(open_QMARK_,map__22805,map__22805__$1,opts,children,vec__22806,bs,props,set_dropdown,btn_props,___$1,state,owner,validate__7824__auto__,ufv__,output_schema22789,input_schema22790,input_checker22791,output_checker22792))
], null)),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs));
var drop_btn = om_bootstrap.button.button.call(null,btn_props.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ref","ref",1289896967),"dropdownButton",new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-toggle",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,map__22805,map__22805__$1,opts,children,vec__22806,bs,props,set_dropdown,btn_props,btn,___$1,state,owner,validate__7824__auto__,ufv__,output_schema22789,input_schema22790,input_checker22791,output_checker22792){
return (function (e){
e.preventDefault();

return set_dropdown.call(null,cljs.core.not.call(null,open_QMARK_));
});})(open_QMARK_,map__22805,map__22805__$1,opts,children,vec__22806,bs,props,set_dropdown,btn_props,btn,___$1,state,owner,validate__7824__auto__,ufv__,output_schema22789,input_schema22790,input_checker22791,output_checker22792))
], null)),cljs.core.apply.call(null,React.DOM.span,{"className": "sr-only"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dropdown-title","dropdown-title",1850134238).cljs$core$IFn$_invoke$arity$1(bs)],null)))),React.DOM.span({"className": "caret"}));
var menu = om_bootstrap.button.dropdown_menu.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ref","ref",1289896967),"menu",new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"on-select","on-select",-192407950),((function (open_QMARK_,map__22805,map__22805__$1,opts,children,vec__22806,bs,props,set_dropdown,btn_props,btn,drop_btn,___$1,state,owner,validate__7824__auto__,ufv__,output_schema22789,input_schema22790,input_checker22791,output_checker22792){
return (function (k){
var temp__4657__auto___22824 = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4657__auto___22824)){
var f_22825 = temp__4657__auto___22824;
f_22825.call(null,k);
} else {
}

return set_dropdown.call(null,false);
});})(open_QMARK_,map__22805,map__22805__$1,opts,children,vec__22806,bs,props,set_dropdown,btn_props,btn,drop_btn,___$1,state,owner,validate__7824__auto__,ufv__,output_schema22789,input_schema22790,input_checker22791,output_checker22792))
], null),children);
return om_bootstrap.button.button_group.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bs-size","bs-size",1567732754),new cljs.core.Keyword(null,"bs-size","bs-size",1567732754).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),open_QMARK_,new cljs.core.Keyword(null,"dropup","dropup",-1031053231),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428).cljs$core$IFn$_invoke$arity$1(bs)], null))], null),btn,drop_btn,menu);
});})(state,owner,validate__7824__auto__,ufv__,output_schema22789,input_schema22790,input_checker22791,output_checker22792))
;

om_bootstrap.button.t_om_bootstrap$button22802.getBasis = ((function (state,owner,validate__7824__auto__,ufv__,output_schema22789,input_schema22790,input_checker22791,output_checker22792){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"G__22793","G__22793",712970753,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"constructor22786","constructor22786",1483601740,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"input-schema22790","input-schema22790",-494704464,null),new cljs.core.Symbol(null,"validate__7824__auto__","validate__7824__auto__",1540215376,null),new cljs.core.Symbol(null,"map22788","map22788",-1601924303,null),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"output-checker22792","output-checker22792",-1823880396,null),new cljs.core.Symbol(null,"input-checker22791","input-checker22791",1092290843,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"output-schema22789","output-schema22789",1011001534,null),new cljs.core.Symbol(null,"meta22803","meta22803",-839410665,null)], null);
});})(state,owner,validate__7824__auto__,ufv__,output_schema22789,input_schema22790,input_checker22791,output_checker22792))
;

om_bootstrap.button.t_om_bootstrap$button22802.cljs$lang$type = true;

om_bootstrap.button.t_om_bootstrap$button22802.cljs$lang$ctorStr = "om-bootstrap.button/t_om_bootstrap$button22802";

om_bootstrap.button.t_om_bootstrap$button22802.cljs$lang$ctorPrWriter = ((function (state,owner,validate__7824__auto__,ufv__,output_schema22789,input_schema22790,input_checker22791,output_checker22792){
return (function (this__6857__auto__,writer__6858__auto__,opt__6859__auto__){
return cljs.core._write.call(null,writer__6858__auto__,"om-bootstrap.button/t_om_bootstrap$button22802");
});})(state,owner,validate__7824__auto__,ufv__,output_schema22789,input_schema22790,input_checker22791,output_checker22792))
;

om_bootstrap.button.__GT_t_om_bootstrap$button22802 = ((function (state,owner,validate__7824__auto__,ufv__,output_schema22789,input_schema22790,input_checker22791,output_checker22792){
return (function om_bootstrap$button$constructor22786_$___GT_t_om_bootstrap$button22802(G__22793__$1,owner__$1,constructor22786__$1,input_schema22790__$1,validate__7824__auto____$1,map22788__$1,state__$1,output_checker22792__$1,input_checker22791__$1,ufv____$1,output_schema22789__$1,meta22803){
return (new om_bootstrap.button.t_om_bootstrap$button22802(G__22793__$1,owner__$1,constructor22786__$1,input_schema22790__$1,validate__7824__auto____$1,map22788__$1,state__$1,output_checker22792__$1,input_checker22791__$1,ufv____$1,output_schema22789__$1,meta22803));
});})(state,owner,validate__7824__auto__,ufv__,output_schema22789,input_schema22790,input_checker22791,output_checker22792))
;

}

return (new om_bootstrap.button.t_om_bootstrap$button22802(G__22793,owner,om_bootstrap$button$constructor22786,input_schema22790,validate__7824__auto__,map22788,state,output_checker22792,input_checker22791,ufv__,output_schema22789,null));
break;
}
})();
if(cljs.core.truth_(validate__7824__auto__)){
var temp__4657__auto___22826 = output_checker22792.call(null,o__7827__auto__);
if(cljs.core.truth_(temp__4657__auto___22826)){
var error__7826__auto___22827 = temp__4657__auto___22826;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor22786","constructor22786",1483601740,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__7826__auto___22827)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22789,new cljs.core.Keyword(null,"value","value",305978217),o__7827__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___22827], null));
} else {
}
} else {
}

return o__7827__auto__;
});})(ufv__,output_schema22789,input_schema22790,input_checker22791,output_checker22792))
,schema.core.make_fn_schema.call(null,output_schema22789,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22790], null)));
})();
/**
 * Generates a split button component responsible for its own
 *   toggled state. The open? toggling is handled through a dropdown
 *   mixin.
 */
om_bootstrap.button.split_STAR_ = ((function (component_fnk__21908__auto___22820){
return (function om_bootstrap$button$split_STAR_(var_args){
var args__7333__auto__ = [];
var len__7326__auto___22828 = arguments.length;
var i__7327__auto___22829 = (0);
while(true){
if((i__7327__auto___22829 < len__7326__auto___22828)){
args__7333__auto__.push((arguments[i__7327__auto___22829]));

var G__22830 = (i__7327__auto___22829 + (1));
i__7327__auto___22829 = G__22830;
continue;
} else {
}
break;
}

var argseq__7334__auto__ = ((((2) < args__7333__auto__.length))?(new cljs.core.IndexedSeq(args__7333__auto__.slice((2)),(0),null)):null);
return om_bootstrap.button.split_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7334__auto__);
});})(component_fnk__21908__auto___22820))
;

om_bootstrap.button.split_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__21908__auto___22820){
return (function (data__21909__auto__,owner22785,p__22813){
var vec__22814 = p__22813;
var opts__21910__auto__ = cljs.core.nth.call(null,vec__22814,(0),null);
return component_fnk__21908__auto___22820.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner22785),new cljs.core.Keyword(null,"opts","opts",155075701),opts__21910__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner22785,new cljs.core.Keyword(null,"data","data",-232669377),data__21909__auto__], null));
});})(component_fnk__21908__auto___22820))
;

om_bootstrap.button.split_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.button.split_STAR_.cljs$lang$applyTo = ((function (component_fnk__21908__auto___22820){
return (function (seq22810){
var G__22811 = cljs.core.first.call(null,seq22810);
var seq22810__$1 = cljs.core.next.call(null,seq22810);
var G__22812 = cljs.core.first.call(null,seq22810__$1);
var seq22810__$2 = cljs.core.next.call(null,seq22810__$1);
return om_bootstrap.button.split_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__22811,G__22812,seq22810__$2);
});})(component_fnk__21908__auto___22820))
;


om_bootstrap.button.__GT_split_STAR_ = (function om_bootstrap$button$__GT_split_STAR_(var_args){
var args22817 = [];
var len__7326__auto___22831 = arguments.length;
var i__7327__auto___22832 = (0);
while(true){
if((i__7327__auto___22832 < len__7326__auto___22831)){
args22817.push((arguments[i__7327__auto___22832]));

var G__22833 = (i__7327__auto___22832 + (1));
i__7327__auto___22832 = G__22833;
continue;
} else {
}
break;
}

var G__22819 = args22817.length;
switch (G__22819) {
case 1:
return om_bootstrap.button.__GT_split_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.button.__GT_split_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22817.length)].join('')));

}
});

om_bootstrap.button.__GT_split_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__21877__auto__){
return om.core.build.call(null,om_bootstrap.button.split_STAR_,cursor__21877__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.split_STAR_$descriptor], null));
});

om_bootstrap.button.__GT_split_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__21877__auto__,m22787){
return om.core.build.call(null,om_bootstrap.button.split_STAR_,cursor__21877__auto__,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.split_STAR_$descriptor], null),m22787));
});

om_bootstrap.button.__GT_split_STAR_.cljs$lang$maxFixedArity = 2;

var ufv___22843 = schema.utils.use_fn_validation;
var output_schema22835_22844 = schema.core.Any;
var input_schema22836_22845 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.SplitButton,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"SplitButton","SplitButton",1856385687,null)], null))),schema.core.Any], null);
var input_checker22837_22846 = schema.core.checker.call(null,input_schema22836_22845);
var output_checker22838_22847 = schema.core.checker.call(null,output_schema22835_22844);
/**
 * Inputs: [opts :- SplitButton & children]
 */
om_bootstrap.button.split = ((function (ufv___22843,output_schema22835_22844,input_schema22836_22845,input_checker22837_22846,output_checker22838_22847){
return (function om_bootstrap$button$split(var_args){
var args__7333__auto__ = [];
var len__7326__auto___22848 = arguments.length;
var i__7327__auto___22849 = (0);
while(true){
if((i__7327__auto___22849 < len__7326__auto___22848)){
args__7333__auto__.push((arguments[i__7327__auto___22849]));

var G__22850 = (i__7327__auto___22849 + (1));
i__7327__auto___22849 = G__22850;
continue;
} else {
}
break;
}

var argseq__7334__auto__ = ((((1) < args__7333__auto__.length))?(new cljs.core.IndexedSeq(args__7333__auto__.slice((1)),(0),null)):null);
return om_bootstrap.button.split.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7334__auto__);
});})(ufv___22843,output_schema22835_22844,input_schema22836_22845,input_checker22837_22846,output_checker22838_22847))
;

om_bootstrap.button.split.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___22843,output_schema22835_22844,input_schema22836_22845,input_checker22837_22846,output_checker22838_22847){
return (function (G__22839,rest22840){
var validate__7824__auto__ = ufv___22843.get_cell();
if(cljs.core.truth_(validate__7824__auto__)){
var args__7825__auto___22851 = cljs.core.list_STAR_.call(null,G__22839,rest22840);
var temp__4657__auto___22852 = input_checker22837_22846.call(null,args__7825__auto___22851);
if(cljs.core.truth_(temp__4657__auto___22852)){
var error__7826__auto___22853 = temp__4657__auto___22852;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split","split",1041096409,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__7826__auto___22853)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22836_22845,new cljs.core.Keyword(null,"value","value",305978217),args__7825__auto___22851,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___22853], null));
} else {
}
} else {
}

var o__7827__auto__ = (function (){var opts = G__22839;
var children = rest22840;
while(true){
return om_bootstrap.button.__GT_split_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__7824__auto__)){
var temp__4657__auto___22854 = output_checker22838_22847.call(null,o__7827__auto__);
if(cljs.core.truth_(temp__4657__auto___22854)){
var error__7826__auto___22855 = temp__4657__auto___22854;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split","split",1041096409,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__7826__auto___22855)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22835_22844,new cljs.core.Keyword(null,"value","value",305978217),o__7827__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___22855], null));
} else {
}
} else {
}

return o__7827__auto__;
});})(ufv___22843,output_schema22835_22844,input_schema22836_22845,input_checker22837_22846,output_checker22838_22847))
;

om_bootstrap.button.split.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.split.cljs$lang$applyTo = ((function (ufv___22843,output_schema22835_22844,input_schema22836_22845,input_checker22837_22846,output_checker22838_22847){
return (function (seq22841){
var G__22842 = cljs.core.first.call(null,seq22841);
var seq22841__$1 = cljs.core.next.call(null,seq22841);
return om_bootstrap.button.split.cljs$core$IFn$_invoke$arity$variadic(G__22842,seq22841__$1);
});})(ufv___22843,output_schema22835_22844,input_schema22836_22845,input_checker22837_22846,output_checker22838_22847))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.split),schema.core.make_fn_schema.call(null,output_schema22835_22844,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22836_22845], null)));

//# sourceMappingURL=button.js.map?rel=1486035197342