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
var temp__4655__auto__ = (function (){var and__24860__auto__ = cljs.core.contains_QMARK_.call(null,m,k);
if(and__24860__auto__){
return k__GT_fn.call(null,k);
} else {
return and__24860__auto__;
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
return cljs.core.reduce.call(null,merge_entry,(function (){var or__24872__auto__ = m1;
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge,cljs.core.PersistentArrayMap.EMPTY,maps);
});
var ufv___39905 = schema.utils.use_fn_validation;
var output_schema39900_39906 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null);
var input_schema39901_39907 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)))], null);
var input_checker39902_39908 = schema.core.checker.call(null,input_schema39901_39907);
var output_checker39903_39909 = schema.core.checker.call(null,output_schema39900_39906);
/**
 * Inputs: [x :- s/Any]
 *   Returns: [s/Any]
 */
om_bootstrap.util.collectify = ((function (ufv___39905,output_schema39900_39906,input_schema39901_39907,input_checker39902_39908,output_checker39903_39909){
return (function om_bootstrap$util$collectify(G__39904){
var validate__29415__auto__ = ufv___39905.get_cell();
if(cljs.core.truth_(validate__29415__auto__)){
var args__29416__auto___39910 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__39904], null);
var temp__4657__auto___39911 = input_checker39902_39908.call(null,args__29416__auto___39910);
if(cljs.core.truth_(temp__4657__auto___39911)){
var error__29417__auto___39912 = temp__4657__auto___39911;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"collectify","collectify",-1779603030,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)),cljs.core.pr_str.call(null,error__29417__auto___39912)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39901_39907,new cljs.core.Keyword(null,"value","value",305978217),args__29416__auto___39910,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___39912], null));
} else {
}
} else {
}

var o__29418__auto__ = (function (){var x = G__39904;
while(true){
if(cljs.core.sequential_QMARK_.call(null,x)){
return x;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
break;
}
})();
if(cljs.core.truth_(validate__29415__auto__)){
var temp__4657__auto___39913 = output_checker39903_39909.call(null,o__29418__auto__);
if(cljs.core.truth_(temp__4657__auto___39913)){
var error__29417__auto___39914 = temp__4657__auto___39913;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"collectify","collectify",-1779603030,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)),cljs.core.pr_str.call(null,error__29417__auto___39914)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39900_39906,new cljs.core.Keyword(null,"value","value",305978217),o__29418__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___39914], null));
} else {
}
} else {
}

return o__29418__auto__;
});})(ufv___39905,output_schema39900_39906,input_schema39901_39907,input_checker39902_39908,output_checker39903_39909))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.collectify),schema.core.make_fn_schema.call(null,output_schema39900_39906,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39901_39907], null)));
/**
 * This is the same as om.core/get-props. We added it to get around
 *   the new precondition in Om 0.8.0.
 */
om_bootstrap.util.get_props = (function om_bootstrap$util$get_props(x){
return (x.props["__om_cursor"]);
});
var ufv___39920 = schema.utils.use_fn_validation;
var output_schema39915_39921 = schema.core.Bool;
var input_schema39916_39922 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker39917_39923 = schema.core.checker.call(null,input_schema39916_39922);
var output_checker39918_39924 = schema.core.checker.call(null,output_schema39915_39921);
/**
 * Inputs: [x]
 *   Returns: s/Bool
 */
om_bootstrap.util.om_component_QMARK_ = ((function (ufv___39920,output_schema39915_39921,input_schema39916_39922,input_checker39917_39923,output_checker39918_39924){
return (function om_bootstrap$util$om_component_QMARK_(G__39919){
var validate__29415__auto__ = ufv___39920.get_cell();
if(cljs.core.truth_(validate__29415__auto__)){
var args__29416__auto___39925 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__39919], null);
var temp__4657__auto___39926 = input_checker39917_39923.call(null,args__29416__auto___39925);
if(cljs.core.truth_(temp__4657__auto___39926)){
var error__29417__auto___39927 = temp__4657__auto___39926;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"om-component?","om-component?",534068525,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null)),cljs.core.pr_str.call(null,error__29417__auto___39927)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39916_39922,new cljs.core.Keyword(null,"value","value",305978217),args__29416__auto___39925,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___39927], null));
} else {
}
} else {
}

var o__29418__auto__ = (function (){var x = G__39919;
while(true){
return cljs.core.boolean$.call(null,om_bootstrap.util.get_props.call(null,x));
break;
}
})();
if(cljs.core.truth_(validate__29415__auto__)){
var temp__4657__auto___39928 = output_checker39918_39924.call(null,o__29418__auto__);
if(cljs.core.truth_(temp__4657__auto___39928)){
var error__29417__auto___39929 = temp__4657__auto___39928;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"om-component?","om-component?",534068525,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null)),cljs.core.pr_str.call(null,error__29417__auto___39929)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39915_39921,new cljs.core.Keyword(null,"value","value",305978217),o__29418__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___39929], null));
} else {
}
} else {
}

return o__29418__auto__;
});})(ufv___39920,output_schema39915_39921,input_schema39916_39922,input_checker39917_39923,output_checker39918_39924))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.om_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema39915_39921,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39916_39922], null)));
var ufv___39935 = schema.utils.use_fn_validation;
var output_schema39930_39936 = schema.core.Bool;
var input_schema39931_39937 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"child","child",-2030468224,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker39932_39938 = schema.core.checker.call(null,input_schema39931_39937);
var output_checker39933_39939 = schema.core.checker.call(null,output_schema39930_39936);
/**
 * Inputs: [child]
 *   Returns: s/Bool
 * 
 *   TODO: Once Om updates its externs to include this file, we can
 *   remove the janky aget call.
 */
om_bootstrap.util.strict_valid_component_QMARK_ = ((function (ufv___39935,output_schema39930_39936,input_schema39931_39937,input_checker39932_39938,output_checker39933_39939){
return (function om_bootstrap$util$strict_valid_component_QMARK_(G__39934){
var validate__29415__auto__ = ufv___39935.get_cell();
if(cljs.core.truth_(validate__29415__auto__)){
var args__29416__auto___39940 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__39934], null);
var temp__4657__auto___39941 = input_checker39932_39938.call(null,args__29416__auto___39940);
if(cljs.core.truth_(temp__4657__auto___39941)){
var error__29417__auto___39942 = temp__4657__auto___39941;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"strict-valid-component?","strict-valid-component?",130165335,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"TODO: Once Om updates its externs to include this file, we can\n  remove the janky aget call."], null)),cljs.core.pr_str.call(null,error__29417__auto___39942)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39931_39937,new cljs.core.Keyword(null,"value","value",305978217),args__29416__auto___39940,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___39942], null));
} else {
}
} else {
}

var o__29418__auto__ = (function (){var child = G__39934;
while(true){
return (React["isValidElement"]).call(null,child);
break;
}
})();
if(cljs.core.truth_(validate__29415__auto__)){
var temp__4657__auto___39943 = output_checker39933_39939.call(null,o__29418__auto__);
if(cljs.core.truth_(temp__4657__auto___39943)){
var error__29417__auto___39944 = temp__4657__auto___39943;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"strict-valid-component?","strict-valid-component?",130165335,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"TODO: Once Om updates its externs to include this file, we can\n  remove the janky aget call."], null)),cljs.core.pr_str.call(null,error__29417__auto___39944)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39930_39936,new cljs.core.Keyword(null,"value","value",305978217),o__29418__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___39944], null));
} else {
}
} else {
}

return o__29418__auto__;
});})(ufv___39935,output_schema39930_39936,input_schema39931_39937,input_checker39932_39938,output_checker39933_39939))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.strict_valid_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema39930_39936,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39931_39937], null)));
var ufv___39950 = schema.utils.use_fn_validation;
var output_schema39945_39951 = schema.core.Bool;
var input_schema39946_39952 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"child","child",-2030468224,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker39947_39953 = schema.core.checker.call(null,input_schema39946_39952);
var output_checker39948_39954 = schema.core.checker.call(null,output_schema39945_39951);
/**
 * Inputs: [child]
 *   Returns: s/Bool
 * 
 *   Returns true if the supplied argument is a valid React component,
 *   false otherwise.
 */
om_bootstrap.util.valid_component_QMARK_ = ((function (ufv___39950,output_schema39945_39951,input_schema39946_39952,input_checker39947_39953,output_checker39948_39954){
return (function om_bootstrap$util$valid_component_QMARK_(G__39949){
var validate__29415__auto__ = ufv___39950.get_cell();
if(cljs.core.truth_(validate__29415__auto__)){
var args__29416__auto___39955 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__39949], null);
var temp__4657__auto___39956 = input_checker39947_39953.call(null,args__29416__auto___39955);
if(cljs.core.truth_(temp__4657__auto___39956)){
var error__29417__auto___39957 = temp__4657__auto___39956;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"valid-component?","valid-component?",-519675438,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if the supplied argument is a valid React component,\n  false otherwise."], null)),cljs.core.pr_str.call(null,error__29417__auto___39957)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39946_39952,new cljs.core.Keyword(null,"value","value",305978217),args__29416__auto___39955,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___39957], null));
} else {
}
} else {
}

var o__29418__auto__ = (function (){var child = G__39949;
while(true){
var or__24872__auto__ = typeof child === 'string';
if(or__24872__auto__){
return or__24872__auto__;
} else {
var or__24872__auto____$1 = typeof child === 'number';
if(or__24872__auto____$1){
return or__24872__auto____$1;
} else {
return om_bootstrap.util.strict_valid_component_QMARK_.call(null,child);
}
}
break;
}
})();
if(cljs.core.truth_(validate__29415__auto__)){
var temp__4657__auto___39958 = output_checker39948_39954.call(null,o__29418__auto__);
if(cljs.core.truth_(temp__4657__auto___39958)){
var error__29417__auto___39959 = temp__4657__auto___39958;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"valid-component?","valid-component?",-519675438,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if the supplied argument is a valid React component,\n  false otherwise."], null)),cljs.core.pr_str.call(null,error__29417__auto___39959)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39945_39951,new cljs.core.Keyword(null,"value","value",305978217),o__29418__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___39959], null));
} else {
}
} else {
}

return o__29418__auto__;
});})(ufv___39950,output_schema39945_39951,input_schema39946_39952,input_checker39947_39953,output_checker39948_39954))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.valid_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema39945_39951,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39946_39952], null)));
var ufv___39965 = schema.utils.use_fn_validation;
var output_schema39960_39966 = schema.core.Bool;
var input_schema39961_39967 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker39962_39968 = schema.core.checker.call(null,input_schema39961_39967);
var output_checker39963_39969 = schema.core.checker.call(null,output_schema39960_39966);
/**
 * Inputs: [children]
 *   Returns: s/Bool
 * 
 *   Returns true if the supplied sequence contains some valid React component,
 *   false otherwise.
 */
om_bootstrap.util.some_valid_component_QMARK_ = ((function (ufv___39965,output_schema39960_39966,input_schema39961_39967,input_checker39962_39968,output_checker39963_39969){
return (function om_bootstrap$util$some_valid_component_QMARK_(G__39964){
var validate__29415__auto__ = ufv___39965.get_cell();
if(cljs.core.truth_(validate__29415__auto__)){
var args__29416__auto___39970 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__39964], null);
var temp__4657__auto___39971 = input_checker39962_39968.call(null,args__29416__auto___39970);
if(cljs.core.truth_(temp__4657__auto___39971)){
var error__29417__auto___39972 = temp__4657__auto___39971;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"some-valid-component?","some-valid-component?",-171767082,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if the supplied sequence contains some valid React component,\n  false otherwise."], null)),cljs.core.pr_str.call(null,error__29417__auto___39972)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39961_39967,new cljs.core.Keyword(null,"value","value",305978217),args__29416__auto___39970,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___39972], null));
} else {
}
} else {
}

var o__29418__auto__ = (function (){var children = G__39964;
while(true){
return cljs.core.boolean$.call(null,cljs.core.some.call(null,om_bootstrap.util.valid_component_QMARK_,children));
break;
}
})();
if(cljs.core.truth_(validate__29415__auto__)){
var temp__4657__auto___39973 = output_checker39963_39969.call(null,o__29418__auto__);
if(cljs.core.truth_(temp__4657__auto___39973)){
var error__29417__auto___39974 = temp__4657__auto___39973;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"some-valid-component?","some-valid-component?",-171767082,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if the supplied sequence contains some valid React component,\n  false otherwise."], null)),cljs.core.pr_str.call(null,error__29417__auto___39974)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39960_39966,new cljs.core.Keyword(null,"value","value",305978217),o__29418__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___39974], null));
} else {
}
} else {
}

return o__29418__auto__;
});})(ufv___39965,output_schema39960_39966,input_schema39961_39967,input_checker39962_39968,output_checker39963_39969))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.some_valid_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema39960_39966,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39961_39967], null)));
/**
 * Generates a new function that calls each supplied side-effecting
 *   function.
 */
om_bootstrap.util.chain_fns = (function om_bootstrap$util$chain_fns(l,r){
if(cljs.core.truth_((function (){var and__24860__auto__ = l;
if(cljs.core.truth_(and__24860__auto__)){
return r;
} else {
return and__24860__auto__;
}
})())){
return (function() { 
var G__39975__delegate = function (args){
cljs.core.apply.call(null,l,args);

return cljs.core.apply.call(null,r,args);
};
var G__39975 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39976__i = 0, G__39976__a = new Array(arguments.length -  0);
while (G__39976__i < G__39976__a.length) {G__39976__a[G__39976__i] = arguments[G__39976__i + 0]; ++G__39976__i;}
  args = new cljs.core.IndexedSeq(G__39976__a,0);
} 
return G__39975__delegate.call(this,args);};
G__39975.cljs$lang$maxFixedArity = 0;
G__39975.cljs$lang$applyTo = (function (arglist__39977){
var args = cljs.core.seq(arglist__39977);
return G__39975__delegate(args);
});
G__39975.cljs$core$IFn$_invoke$arity$variadic = G__39975__delegate;
return G__39975;
})()
;
} else {
var or__24872__auto__ = l;
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
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
var or__24872__auto__ = l;
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
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
var args__25954__auto__ = [];
var len__25947__auto___39979 = arguments.length;
var i__25948__auto___39980 = (0);
while(true){
if((i__25948__auto___39980 < len__25947__auto___39979)){
args__25954__auto__.push((arguments[i__25948__auto___39980]));

var G__39981 = (i__25948__auto___39980 + (1));
i__25948__auto___39980 = G__39981;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
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

om_bootstrap.util.merge_props.cljs$lang$applyTo = (function (seq39978){
return om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39978));
});

/**
 * Returns a basic, shallow copy of the supplied JS object.
 */
om_bootstrap.util.copy_js = (function om_bootstrap$util$copy_js(arr){
var ret = {};
var seq__39990_39994 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,arr));
var chunk__39991_39995 = null;
var count__39992_39996 = (0);
var i__39993_39997 = (0);
while(true){
if((i__39993_39997 < count__39992_39996)){
var k_39998 = cljs.core._nth.call(null,chunk__39991_39995,i__39993_39997);
if(cljs.core.truth_(arr.hasOwnProperty(k_39998))){
(ret[k_39998] = (arr[k_39998]));
} else {
}

var G__39999 = seq__39990_39994;
var G__40000 = chunk__39991_39995;
var G__40001 = count__39992_39996;
var G__40002 = (i__39993_39997 + (1));
seq__39990_39994 = G__39999;
chunk__39991_39995 = G__40000;
count__39992_39996 = G__40001;
i__39993_39997 = G__40002;
continue;
} else {
var temp__4657__auto___40003 = cljs.core.seq.call(null,seq__39990_39994);
if(temp__4657__auto___40003){
var seq__39990_40004__$1 = temp__4657__auto___40003;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39990_40004__$1)){
var c__25683__auto___40005 = cljs.core.chunk_first.call(null,seq__39990_40004__$1);
var G__40006 = cljs.core.chunk_rest.call(null,seq__39990_40004__$1);
var G__40007 = c__25683__auto___40005;
var G__40008 = cljs.core.count.call(null,c__25683__auto___40005);
var G__40009 = (0);
seq__39990_39994 = G__40006;
chunk__39991_39995 = G__40007;
count__39992_39996 = G__40008;
i__39993_39997 = G__40009;
continue;
} else {
var k_40010 = cljs.core.first.call(null,seq__39990_40004__$1);
if(cljs.core.truth_(arr.hasOwnProperty(k_40010))){
(ret[k_40010] = (arr[k_40010]));
} else {
}

var G__40011 = cljs.core.next.call(null,seq__39990_40004__$1);
var G__40012 = null;
var G__40013 = (0);
var G__40014 = (0);
seq__39990_39994 = G__40011;
chunk__39991_39995 = G__40012;
count__39992_39996 = G__40013;
i__39993_39997 = G__40014;
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
var args40015 = [];
var len__25947__auto___40018 = arguments.length;
var i__25948__auto___40019 = (0);
while(true){
if((i__25948__auto___40019 < len__25947__auto___40018)){
args40015.push((arguments[i__25948__auto___40019]));

var G__40020 = (i__25948__auto___40019 + (1));
i__25948__auto___40019 = G__40020;
continue;
} else {
}
break;
}

var G__40017 = args40015.length;
switch (G__40017) {
case 1:
return om_bootstrap.util.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.util.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40015.length)].join('')));

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
var args40022 = [];
var len__25947__auto___40025 = arguments.length;
var i__25948__auto___40026 = (0);
while(true){
if((i__25948__auto___40026 < len__25947__auto___40025)){
args40022.push((arguments[i__25948__auto___40026]));

var G__40027 = (i__25948__auto___40026 + (1));
i__25948__auto___40026 = G__40027;
continue;
} else {
}
break;
}

var G__40024 = args40022.length;
switch (G__40024) {
case 1:
return om_bootstrap.util.clone_with_props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.util.clone_with_props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40022.length)].join('')));

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


//# sourceMappingURL=util.js.map?rel=1486291272679