// Compiled by ClojureScript 1.9.89 {}
goog.provide('om_bootstrap.util');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('om.core');
goog.require('schema.core');
/**
 * Returns a map that consists of the rest of the maps conj-ed onto
 *   the first.  If a key occurs in more than one map, the mapping(s)
 *   from the latter (left-to-right) will be combined with the mapping in
 *   the result by looking up the proper merge function and in the
 *   supplied map of key -> merge-fn and using that for the big merge. If
 *   a key doesn't have a merge function, the right value wins (as with
 *   merge).
 */
om_bootstrap.util.merge_with_fns = (function om_bootstrap$util$merge_with_fns(k__GT_fn,maps){
var merge_entry = (function om_bootstrap$util$merge_with_fns_$_merge_entry(m,e){
var k = cljs.core.key.call(null,e);
var v = cljs.core.val.call(null,e);
var temp__4655__auto__ = (function (){var and__6239__auto__ = cljs.core.contains_QMARK_.call(null,m,k);
if(and__6239__auto__){
return k__GT_fn.call(null,k);
} else {
return and__6239__auto__;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),v));
} else {
return cljs.core.assoc.call(null,m,k,v);
}
});
var merge = (function om_bootstrap$util$merge_with_fns_$_merge(m1,m2){
return cljs.core.reduce.call(null,merge_entry,(function (){var or__6251__auto__ = m1;
if(cljs.core.truth_(or__6251__auto__)){
return or__6251__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge,cljs.core.PersistentArrayMap.EMPTY,maps);
});
var ufv___21632 = schema.utils.use_fn_validation;
var output_schema21627_21633 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null);
var input_schema21628_21634 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)))], null);
var input_checker21629_21635 = schema.core.checker.call(null,input_schema21628_21634);
var output_checker21630_21636 = schema.core.checker.call(null,output_schema21627_21633);
/**
 * Inputs: [x :- s/Any]
 *   Returns: [s/Any]
 */
om_bootstrap.util.collectify = ((function (ufv___21632,output_schema21627_21633,input_schema21628_21634,input_checker21629_21635,output_checker21630_21636){
return (function om_bootstrap$util$collectify(G__21631){
var validate__7824__auto__ = ufv___21632.get_cell();
if(cljs.core.truth_(validate__7824__auto__)){
var args__7825__auto___21637 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21631], null);
var temp__4657__auto___21638 = input_checker21629_21635.call(null,args__7825__auto___21637);
if(cljs.core.truth_(temp__4657__auto___21638)){
var error__7826__auto___21639 = temp__4657__auto___21638;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"collectify","collectify",-1779603030,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)),cljs.core.pr_str.call(null,error__7826__auto___21639)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21628_21634,new cljs.core.Keyword(null,"value","value",305978217),args__7825__auto___21637,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___21639], null));
} else {
}
} else {
}

var o__7827__auto__ = (function (){var x = G__21631;
while(true){
if(cljs.core.sequential_QMARK_.call(null,x)){
return x;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
break;
}
})();
if(cljs.core.truth_(validate__7824__auto__)){
var temp__4657__auto___21640 = output_checker21630_21636.call(null,o__7827__auto__);
if(cljs.core.truth_(temp__4657__auto___21640)){
var error__7826__auto___21641 = temp__4657__auto___21640;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"collectify","collectify",-1779603030,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)),cljs.core.pr_str.call(null,error__7826__auto___21641)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21627_21633,new cljs.core.Keyword(null,"value","value",305978217),o__7827__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___21641], null));
} else {
}
} else {
}

return o__7827__auto__;
});})(ufv___21632,output_schema21627_21633,input_schema21628_21634,input_checker21629_21635,output_checker21630_21636))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.collectify),schema.core.make_fn_schema.call(null,output_schema21627_21633,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21628_21634], null)));
/**
 * This is the same as om.core/get-props. We added it to get around
 *   the new precondition in Om 0.8.0.
 */
om_bootstrap.util.get_props = (function om_bootstrap$util$get_props(x){
return (x.props["__om_cursor"]);
});
var ufv___21647 = schema.utils.use_fn_validation;
var output_schema21642_21648 = schema.core.Bool;
var input_schema21643_21649 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker21644_21650 = schema.core.checker.call(null,input_schema21643_21649);
var output_checker21645_21651 = schema.core.checker.call(null,output_schema21642_21648);
/**
 * Inputs: [x]
 *   Returns: s/Bool
 */
om_bootstrap.util.om_component_QMARK_ = ((function (ufv___21647,output_schema21642_21648,input_schema21643_21649,input_checker21644_21650,output_checker21645_21651){
return (function om_bootstrap$util$om_component_QMARK_(G__21646){
var validate__7824__auto__ = ufv___21647.get_cell();
if(cljs.core.truth_(validate__7824__auto__)){
var args__7825__auto___21652 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21646], null);
var temp__4657__auto___21653 = input_checker21644_21650.call(null,args__7825__auto___21652);
if(cljs.core.truth_(temp__4657__auto___21653)){
var error__7826__auto___21654 = temp__4657__auto___21653;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"om-component?","om-component?",534068525,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null)),cljs.core.pr_str.call(null,error__7826__auto___21654)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21643_21649,new cljs.core.Keyword(null,"value","value",305978217),args__7825__auto___21652,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___21654], null));
} else {
}
} else {
}

var o__7827__auto__ = (function (){var x = G__21646;
while(true){
return cljs.core.boolean$.call(null,om_bootstrap.util.get_props.call(null,x));
break;
}
})();
if(cljs.core.truth_(validate__7824__auto__)){
var temp__4657__auto___21655 = output_checker21645_21651.call(null,o__7827__auto__);
if(cljs.core.truth_(temp__4657__auto___21655)){
var error__7826__auto___21656 = temp__4657__auto___21655;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"om-component?","om-component?",534068525,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null)),cljs.core.pr_str.call(null,error__7826__auto___21656)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21642_21648,new cljs.core.Keyword(null,"value","value",305978217),o__7827__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___21656], null));
} else {
}
} else {
}

return o__7827__auto__;
});})(ufv___21647,output_schema21642_21648,input_schema21643_21649,input_checker21644_21650,output_checker21645_21651))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.om_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema21642_21648,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21643_21649], null)));
var ufv___21662 = schema.utils.use_fn_validation;
var output_schema21657_21663 = schema.core.Bool;
var input_schema21658_21664 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"child","child",-2030468224,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker21659_21665 = schema.core.checker.call(null,input_schema21658_21664);
var output_checker21660_21666 = schema.core.checker.call(null,output_schema21657_21663);
/**
 * Inputs: [child]
 *   Returns: s/Bool
 * 
 *   TODO: Once Om updates its externs to include this file, we can
 *   remove the janky aget call.
 */
om_bootstrap.util.strict_valid_component_QMARK_ = ((function (ufv___21662,output_schema21657_21663,input_schema21658_21664,input_checker21659_21665,output_checker21660_21666){
return (function om_bootstrap$util$strict_valid_component_QMARK_(G__21661){
var validate__7824__auto__ = ufv___21662.get_cell();
if(cljs.core.truth_(validate__7824__auto__)){
var args__7825__auto___21667 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21661], null);
var temp__4657__auto___21668 = input_checker21659_21665.call(null,args__7825__auto___21667);
if(cljs.core.truth_(temp__4657__auto___21668)){
var error__7826__auto___21669 = temp__4657__auto___21668;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"strict-valid-component?","strict-valid-component?",130165335,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"TODO: Once Om updates its externs to include this file, we can\n  remove the janky aget call."], null)),cljs.core.pr_str.call(null,error__7826__auto___21669)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21658_21664,new cljs.core.Keyword(null,"value","value",305978217),args__7825__auto___21667,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___21669], null));
} else {
}
} else {
}

var o__7827__auto__ = (function (){var child = G__21661;
while(true){
return (React["isValidElement"]).call(null,child);
break;
}
})();
if(cljs.core.truth_(validate__7824__auto__)){
var temp__4657__auto___21670 = output_checker21660_21666.call(null,o__7827__auto__);
if(cljs.core.truth_(temp__4657__auto___21670)){
var error__7826__auto___21671 = temp__4657__auto___21670;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"strict-valid-component?","strict-valid-component?",130165335,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"TODO: Once Om updates its externs to include this file, we can\n  remove the janky aget call."], null)),cljs.core.pr_str.call(null,error__7826__auto___21671)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21657_21663,new cljs.core.Keyword(null,"value","value",305978217),o__7827__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___21671], null));
} else {
}
} else {
}

return o__7827__auto__;
});})(ufv___21662,output_schema21657_21663,input_schema21658_21664,input_checker21659_21665,output_checker21660_21666))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.strict_valid_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema21657_21663,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21658_21664], null)));
var ufv___21677 = schema.utils.use_fn_validation;
var output_schema21672_21678 = schema.core.Bool;
var input_schema21673_21679 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"child","child",-2030468224,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker21674_21680 = schema.core.checker.call(null,input_schema21673_21679);
var output_checker21675_21681 = schema.core.checker.call(null,output_schema21672_21678);
/**
 * Inputs: [child]
 *   Returns: s/Bool
 * 
 *   Returns true if the supplied argument is a valid React component,
 *   false otherwise.
 */
om_bootstrap.util.valid_component_QMARK_ = ((function (ufv___21677,output_schema21672_21678,input_schema21673_21679,input_checker21674_21680,output_checker21675_21681){
return (function om_bootstrap$util$valid_component_QMARK_(G__21676){
var validate__7824__auto__ = ufv___21677.get_cell();
if(cljs.core.truth_(validate__7824__auto__)){
var args__7825__auto___21682 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21676], null);
var temp__4657__auto___21683 = input_checker21674_21680.call(null,args__7825__auto___21682);
if(cljs.core.truth_(temp__4657__auto___21683)){
var error__7826__auto___21684 = temp__4657__auto___21683;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"valid-component?","valid-component?",-519675438,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if the supplied argument is a valid React component,\n  false otherwise."], null)),cljs.core.pr_str.call(null,error__7826__auto___21684)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21673_21679,new cljs.core.Keyword(null,"value","value",305978217),args__7825__auto___21682,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___21684], null));
} else {
}
} else {
}

var o__7827__auto__ = (function (){var child = G__21676;
while(true){
var or__6251__auto__ = typeof child === 'string';
if(or__6251__auto__){
return or__6251__auto__;
} else {
var or__6251__auto____$1 = typeof child === 'number';
if(or__6251__auto____$1){
return or__6251__auto____$1;
} else {
return om_bootstrap.util.strict_valid_component_QMARK_.call(null,child);
}
}
break;
}
})();
if(cljs.core.truth_(validate__7824__auto__)){
var temp__4657__auto___21685 = output_checker21675_21681.call(null,o__7827__auto__);
if(cljs.core.truth_(temp__4657__auto___21685)){
var error__7826__auto___21686 = temp__4657__auto___21685;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"valid-component?","valid-component?",-519675438,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if the supplied argument is a valid React component,\n  false otherwise."], null)),cljs.core.pr_str.call(null,error__7826__auto___21686)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21672_21678,new cljs.core.Keyword(null,"value","value",305978217),o__7827__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___21686], null));
} else {
}
} else {
}

return o__7827__auto__;
});})(ufv___21677,output_schema21672_21678,input_schema21673_21679,input_checker21674_21680,output_checker21675_21681))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.valid_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema21672_21678,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21673_21679], null)));
var ufv___21692 = schema.utils.use_fn_validation;
var output_schema21687_21693 = schema.core.Bool;
var input_schema21688_21694 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker21689_21695 = schema.core.checker.call(null,input_schema21688_21694);
var output_checker21690_21696 = schema.core.checker.call(null,output_schema21687_21693);
/**
 * Inputs: [children]
 *   Returns: s/Bool
 * 
 *   Returns true if the supplied sequence contains some valid React component,
 *   false otherwise.
 */
om_bootstrap.util.some_valid_component_QMARK_ = ((function (ufv___21692,output_schema21687_21693,input_schema21688_21694,input_checker21689_21695,output_checker21690_21696){
return (function om_bootstrap$util$some_valid_component_QMARK_(G__21691){
var validate__7824__auto__ = ufv___21692.get_cell();
if(cljs.core.truth_(validate__7824__auto__)){
var args__7825__auto___21697 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21691], null);
var temp__4657__auto___21698 = input_checker21689_21695.call(null,args__7825__auto___21697);
if(cljs.core.truth_(temp__4657__auto___21698)){
var error__7826__auto___21699 = temp__4657__auto___21698;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"some-valid-component?","some-valid-component?",-171767082,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if the supplied sequence contains some valid React component,\n  false otherwise."], null)),cljs.core.pr_str.call(null,error__7826__auto___21699)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21688_21694,new cljs.core.Keyword(null,"value","value",305978217),args__7825__auto___21697,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___21699], null));
} else {
}
} else {
}

var o__7827__auto__ = (function (){var children = G__21691;
while(true){
return cljs.core.boolean$.call(null,cljs.core.some.call(null,om_bootstrap.util.valid_component_QMARK_,children));
break;
}
})();
if(cljs.core.truth_(validate__7824__auto__)){
var temp__4657__auto___21700 = output_checker21690_21696.call(null,o__7827__auto__);
if(cljs.core.truth_(temp__4657__auto___21700)){
var error__7826__auto___21701 = temp__4657__auto___21700;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"some-valid-component?","some-valid-component?",-171767082,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if the supplied sequence contains some valid React component,\n  false otherwise."], null)),cljs.core.pr_str.call(null,error__7826__auto___21701)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21687_21693,new cljs.core.Keyword(null,"value","value",305978217),o__7827__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___21701], null));
} else {
}
} else {
}

return o__7827__auto__;
});})(ufv___21692,output_schema21687_21693,input_schema21688_21694,input_checker21689_21695,output_checker21690_21696))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.some_valid_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema21687_21693,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21688_21694], null)));
/**
 * Generates a new function that calls each supplied side-effecting
 *   function.
 */
om_bootstrap.util.chain_fns = (function om_bootstrap$util$chain_fns(l,r){
if(cljs.core.truth_((function (){var and__6239__auto__ = l;
if(cljs.core.truth_(and__6239__auto__)){
return r;
} else {
return and__6239__auto__;
}
})())){
return (function() { 
var G__21702__delegate = function (args){
cljs.core.apply.call(null,l,args);

return cljs.core.apply.call(null,r,args);
};
var G__21702 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21703__i = 0, G__21703__a = new Array(arguments.length -  0);
while (G__21703__i < G__21703__a.length) {G__21703__a[G__21703__i] = arguments[G__21703__i + 0]; ++G__21703__i;}
  args = new cljs.core.IndexedSeq(G__21703__a,0);
} 
return G__21702__delegate.call(this,args);};
G__21702.cljs$lang$maxFixedArity = 0;
G__21702.cljs$lang$applyTo = (function (arglist__21704){
var args = cljs.core.seq(arglist__21704);
return G__21702__delegate(args);
});
G__21702.cljs$core$IFn$_invoke$arity$variadic = G__21702__delegate;
return G__21702;
})()
;
} else {
var or__6251__auto__ = l;
if(cljs.core.truth_(or__6251__auto__)){
return or__6251__auto__;
} else {
return r;
}
}
});
/**
 * Map of React keyword to a custom function for its merge. Tries to
 *   do a decent job with event handlers as well; currently only
 *   handles :on-select :on-click, :on-blur, kebab-cased as om-tools
 *   prefers.
 */
om_bootstrap.util.react_merges = (function (){var merge_class = (function (l,r){
return [cljs.core.str(l),cljs.core.str(" "),cljs.core.str(r)].join('');
});
var orig_fn = ((function (merge_class){
return (function (l,r){
var or__6251__auto__ = l;
if(cljs.core.truth_(or__6251__auto__)){
return or__6251__auto__;
} else {
return r;
}
});})(merge_class))
;
var empty_fn = ((function (merge_class,orig_fn){
return (function (_,___$1){
return null;
});})(merge_class,orig_fn))
;
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"on-select","on-select",-192407950),new cljs.core.Keyword(null,"class","class",-2030961996)],[empty_fn,empty_fn,orig_fn,om_bootstrap.util.chain_fns,om_bootstrap.util.chain_fns,merge_class,cljs.core.merge,om_bootstrap.util.chain_fns,merge_class]);
})();
/**
 * Merges two maps that represent React properties. Merges occur
 *   according to the functions defined in `react-merges`.
 */
om_bootstrap.util.merge_props = (function om_bootstrap$util$merge_props(var_args){
var args__7333__auto__ = [];
var len__7326__auto___21706 = arguments.length;
var i__7327__auto___21707 = (0);
while(true){
if((i__7327__auto___21707 < len__7326__auto___21706)){
args__7333__auto__.push((arguments[i__7327__auto___21707]));

var G__21708 = (i__7327__auto___21707 + (1));
i__7327__auto___21707 = G__21708;
continue;
} else {
}
break;
}

var argseq__7334__auto__ = ((((0) < args__7333__auto__.length))?(new cljs.core.IndexedSeq(args__7333__auto__.slice((0)),(0),null)):null);
return om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(argseq__7334__auto__);
});

om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic = (function (prop_maps){
var react_merge = (function om_bootstrap$util$react_merge(xs){
return om_bootstrap.util.merge_with_fns.call(null,om_bootstrap.util.react_merges,xs);
});
var normalize_class = (function om_bootstrap$util$normalize_class(m){
if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"class","class",-2030961996))){
return react_merge.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.dissoc.call(null,m,new cljs.core.Keyword(null,"class","class",-2030961996)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(m)], null)], null));
} else {
return m;
}
});
var ret = react_merge.call(null,cljs.core.map.call(null,normalize_class,prop_maps));
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ret))){
return cljs.core.dissoc.call(null,ret,new cljs.core.Keyword(null,"key","key",-1516042587));
} else {
return ret;
}
});

om_bootstrap.util.merge_props.cljs$lang$maxFixedArity = (0);

om_bootstrap.util.merge_props.cljs$lang$applyTo = (function (seq21705){
return om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21705));
});

/**
 * Returns a basic, shallow copy of the supplied JS object.
 */
om_bootstrap.util.copy_js = (function om_bootstrap$util$copy_js(arr){
var ret = {};
var seq__21717_21721 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,arr));
var chunk__21718_21722 = null;
var count__21719_21723 = (0);
var i__21720_21724 = (0);
while(true){
if((i__21720_21724 < count__21719_21723)){
var k_21725 = cljs.core._nth.call(null,chunk__21718_21722,i__21720_21724);
if(cljs.core.truth_(arr.hasOwnProperty(k_21725))){
(ret[k_21725] = (arr[k_21725]));
} else {
}

var G__21726 = seq__21717_21721;
var G__21727 = chunk__21718_21722;
var G__21728 = count__21719_21723;
var G__21729 = (i__21720_21724 + (1));
seq__21717_21721 = G__21726;
chunk__21718_21722 = G__21727;
count__21719_21723 = G__21728;
i__21720_21724 = G__21729;
continue;
} else {
var temp__4657__auto___21730 = cljs.core.seq.call(null,seq__21717_21721);
if(temp__4657__auto___21730){
var seq__21717_21731__$1 = temp__4657__auto___21730;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21717_21731__$1)){
var c__7062__auto___21732 = cljs.core.chunk_first.call(null,seq__21717_21731__$1);
var G__21733 = cljs.core.chunk_rest.call(null,seq__21717_21731__$1);
var G__21734 = c__7062__auto___21732;
var G__21735 = cljs.core.count.call(null,c__7062__auto___21732);
var G__21736 = (0);
seq__21717_21721 = G__21733;
chunk__21718_21722 = G__21734;
count__21719_21723 = G__21735;
i__21720_21724 = G__21736;
continue;
} else {
var k_21737 = cljs.core.first.call(null,seq__21717_21731__$1);
if(cljs.core.truth_(arr.hasOwnProperty(k_21737))){
(ret[k_21737] = (arr[k_21737]));
} else {
}

var G__21738 = cljs.core.next.call(null,seq__21717_21731__$1);
var G__21739 = null;
var G__21740 = (0);
var G__21741 = (0);
seq__21717_21721 = G__21738;
chunk__21718_21722 = G__21739;
count__21719_21723 = G__21740;
i__21720_21724 = G__21741;
continue;
}
} else {
}
}
break;
}

return ret;
});
om_bootstrap.util.create_element = (function om_bootstrap$util$create_element(var_args){
var args21742 = [];
var len__7326__auto___21745 = arguments.length;
var i__7327__auto___21746 = (0);
while(true){
if((i__7327__auto___21746 < len__7326__auto___21745)){
args21742.push((arguments[i__7327__auto___21746]));

var G__21747 = (i__7327__auto___21746 + (1));
i__7327__auto___21746 = G__21747;
continue;
} else {
}
break;
}

var G__21744 = args21742.length;
switch (G__21744) {
case 1:
return om_bootstrap.util.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.util.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21742.length)].join('')));

}
});

om_bootstrap.util.create_element.cljs$core$IFn$_invoke$arity$1 = (function (child){
return om_bootstrap.util.create_element.call(null,child,null);
});

om_bootstrap.util.create_element.cljs$core$IFn$_invoke$arity$2 = (function (child,props){
return React.createElement(child.type,props);
});

om_bootstrap.util.create_element.cljs$lang$maxFixedArity = 2;

/**
 * Merges the supplied extra properties into the underlying Om cursor
 *   and calls the constructor to clone the React component.
 * 
 *   Requires that the supplied child has an Om cursor attached to it! 
 */
om_bootstrap.util.clone_om = (function om_bootstrap$util$clone_om(child,extra_props){
var om_props = om_bootstrap.util.get_props.call(null,child);
var props = {};
var cloned_child = goog.object.clone(child);
goog.object.extend(props,child.props,{"__om_cursor": ((cljs.core.fn_QMARK_.call(null,extra_props))?extra_props.call(null,om_props):om_bootstrap.util.merge_props.call(null,om_props,extra_props))});

goog.object.extend(cloned_child,{"props": props});

return cloned_child;
});
/**
 * This function is called if the React component child was NOT
 *   generated by Om. Merges the supplied properties into the -props
 *   field of the supplied React component and creates a shallow copy.
 */
om_bootstrap.util.clone_basic_react = (function om_bootstrap$util$clone_basic_react(child,extra_props){
var props = cljs.core.js__GT_clj.call(null,child.props,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var new_props = cljs.core.merge.call(null,((cljs.core.fn_QMARK_.call(null,extra_props))?extra_props.call(null,props):om_bootstrap.util.merge_props.call(null,props,extra_props)),(function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__4657__auto__)){
var children = temp__4657__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),children], null);
} else {
return null;
}
})());
return om_bootstrap.util.create_element.call(null,child,cljs.core.clj__GT_js.call(null,new_props));
});
/**
 * Returns a shallow copy of the supplied component (child); the copy
 *   will have any props provided by extra-props merged in. Props are
 *   merged in the same manner as merge-props, so props like :class will
 *   be merged intelligently.
 * 
 *   extra-props can be a function of the old props that returns new
 *   props, OR it can be a map of props.
 * 
 *   If the supplied child is an Om component, any supplied extra
 *   properties will be merged into the underlying cursor and accessible
 *   in the Om constructor.
 */
om_bootstrap.util.clone_with_props = (function om_bootstrap$util$clone_with_props(var_args){
var args21749 = [];
var len__7326__auto___21752 = arguments.length;
var i__7327__auto___21753 = (0);
while(true){
if((i__7327__auto___21753 < len__7326__auto___21752)){
args21749.push((arguments[i__7327__auto___21753]));

var G__21754 = (i__7327__auto___21753 + (1));
i__7327__auto___21753 = G__21754;
continue;
} else {
}
break;
}

var G__21751 = args21749.length;
switch (G__21751) {
case 1:
return om_bootstrap.util.clone_with_props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.util.clone_with_props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21749.length)].join('')));

}
});

om_bootstrap.util.clone_with_props.cljs$core$IFn$_invoke$arity$1 = (function (child){
return om_bootstrap.util.clone_with_props.call(null,child,cljs.core.PersistentArrayMap.EMPTY);
});

om_bootstrap.util.clone_with_props.cljs$core$IFn$_invoke$arity$2 = (function (child,extra_props){
if(cljs.core.not.call(null,om_bootstrap.util.strict_valid_component_QMARK_.call(null,child))){
return child;
} else {
if(cljs.core.truth_(om_bootstrap.util.om_component_QMARK_.call(null,child))){
return om_bootstrap.util.clone_om.call(null,child,extra_props);
} else {
if((cljs.core.map_QMARK_.call(null,extra_props)) && (cljs.core.empty_QMARK_.call(null,extra_props))){
return om_bootstrap.util.create_element.call(null,child,child.props);
} else {
return om_bootstrap.util.clone_basic_react.call(null,child,extra_props);

}
}
}
});

om_bootstrap.util.clone_with_props.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=util.js.map?rel=1486035196266