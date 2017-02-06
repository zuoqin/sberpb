// Compiled by ClojureScript 1.9.89 {}
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('schema.utils');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__30149__30150__auto__){
if(!((p1__30149__30150__auto__ == null))){
if((false) || (p1__30149__30150__auto__.schema$core$Schema$)){
return true;
} else {
if((!p1__30149__30150__auto__.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,p1__30149__30150__auto__);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,p1__30149__30150__auto__);
}
})], null));
plumbing.fnk.schema.InputSchema = cljs.core.PersistentArrayMap.fromArray([schema.core.cond_pre.call(null,schema.core.eq.call(null,schema.core.Keyword),schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.OutputSchema = plumbing.fnk.schema.Schema;
plumbing.fnk.schema.IOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.OutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
plumbing.fnk.schema.GraphInputSchema = cljs.core.PersistentArrayMap.fromArray([schema.core.cond_pre.call(null,schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.MapOutputSchema = cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.GraphIOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphInputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
/**
 * Like (assert (distinct? things)) but with a more helpful error message.
 */
plumbing.fnk.schema.assert_distinct = (function plumbing$fnk$schema$assert_distinct(things){
var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__31650_SHARP_){
return (cljs.core.val.call(null,p1__31650_SHARP_) > (1));
}),cljs.core.frequencies.call(null,things)));
if(cljs.core.empty_QMARK_.call(null,repeated_things)){
return null;
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Got repeated items (expected distinct): %s",repeated_things)));
}
});
/**
 * Like (get m k), but throws if k is not present in m.
 */
plumbing.fnk.schema.safe_get = (function plumbing$fnk$schema$safe_get(m,k,key_path){
if(cljs.core.map_QMARK_.call(null,m)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Expected a map at key-path %s, got type %s",key_path,schema.utils.type_of.call(null,m))));
}

var vec__31654 = cljs.core.find.call(null,m,k);
var _ = cljs.core.nth.call(null,vec__31654,(0),null);
var v = cljs.core.nth.call(null,vec__31654,(1),null);
var p = vec__31654;
if(cljs.core.truth_(p)){
} else {
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.keys.call(null,m)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"missing-key","missing-key",1259209562),new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"map","map",1371690461),m], null));
}

return v;
});
plumbing.fnk.schema.non_map_union = (function plumbing$fnk$schema$non_map_union(s1,s2){
if(cljs.core._EQ_.call(null,s1,s2)){
return s1;
} else {
if(cljs.core._EQ_.call(null,s1,schema.core.Any)){
return s2;
} else {
if(cljs.core._EQ_.call(null,s2,schema.core.Any)){
return s1;
} else {
return s1;

}
}
}
});
/**
 * Return a difference of schmas s1 and s2, where one is not a map.
 * Punt for now, assuming s2 always satisfies s1.
 */
plumbing.fnk.schema.non_map_diff = (function plumbing$fnk$schema$non_map_diff(s1,s2){
return null;
});
plumbing.fnk.schema.map_schema_QMARK_ = (function plumbing$fnk$schema$map_schema_QMARK_(m){
return ((m instanceof cljs.core.PersistentArrayMap)) || ((m instanceof cljs.core.PersistentHashMap));
});
var ufv___31662 = schema.utils.use_fn_validation;
var output_schema31657_31663 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));
var input_schema31658_31664 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker31659_31665 = schema.core.checker.call(null,input_schema31658_31664);
var output_checker31660_31666 = schema.core.checker.call(null,output_schema31657_31663);
/**
 * Inputs: [k]
 *   Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
 * 
 *   Given a possibly-unevaluated schema map key form, unpack an explicit keyword
 * and optional? flag, or return nil for a non-explicit key
 */
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___31662,output_schema31657_31663,input_schema31658_31664,input_checker31659_31665,output_checker31660_31666){
return (function plumbing$fnk$schema$unwrap_schema_form_key(G__31661){
var validate__29415__auto__ = ufv___31662.get_cell();
if(cljs.core.truth_(validate__29415__auto__)){
var args__29416__auto___31667 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31661], null);
var temp__4657__auto___31668 = input_checker31659_31665.call(null,args__29416__auto___31667);
if(cljs.core.truth_(temp__4657__auto___31668)){
var error__29417__auto___31669 = temp__4657__auto___31668;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),"k",new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),"optional?")),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a possibly-unevaluated schema map key form, unpack an explicit keyword\n   and optional? flag, or return nil for a non-explicit key"], null)),cljs.core.pr_str.call(null,error__29417__auto___31669)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31658_31664,new cljs.core.Keyword(null,"value","value",305978217),args__29416__auto___31667,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___31669], null));
} else {
}
} else {
}

var o__29418__auto__ = (function (){var k = G__31661;
while(true){
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,k))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key.call(null,k),schema.core.required_key_QMARK_.call(null,k)], null);
} else {
if((cljs.core.sequential_QMARK_.call(null,k)) && (!(cljs.core.vector_QMARK_.call(null,k))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,k),(2))) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,k),new cljs.core.Symbol("schema.core","optional-key","schema.core/optional-key",-170069547,null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,k),false], null);
} else {
return null;
}
}
break;
}
})();
if(cljs.core.truth_(validate__29415__auto__)){
var temp__4657__auto___31670 = output_checker31660_31666.call(null,o__29418__auto__);
if(cljs.core.truth_(temp__4657__auto___31670)){
var error__29417__auto___31671 = temp__4657__auto___31670;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),"k",new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),"optional?")),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a possibly-unevaluated schema map key form, unpack an explicit keyword\n   and optional? flag, or return nil for a non-explicit key"], null)),cljs.core.pr_str.call(null,error__29417__auto___31671)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31657_31663,new cljs.core.Keyword(null,"value","value",305978217),o__29418__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___31671], null));
} else {
}
} else {
}

return o__29418__auto__;
});})(ufv___31662,output_schema31657_31663,input_schema31658_31664,input_checker31659_31665,output_checker31660_31666))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema31657_31663,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31658_31664], null)));
var ufv___31677 = schema.utils.use_fn_validation;
var output_schema31672_31678 = cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
var input_schema31673_31679 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker31674_31680 = schema.core.checker.call(null,input_schema31673_31679);
var output_checker31675_31681 = schema.core.checker.call(null,output_schema31672_31678);
/**
 * Inputs: [s]
 *   Returns: {s/Keyword s/Bool}
 * 
 *   Given a possibly-unevaluated map schema, return a map from bare keyword to true
 * (for required) or false (for optional)
 */
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___31677,output_schema31672_31678,input_schema31673_31679,input_checker31674_31680,output_checker31675_31681){
return (function plumbing$fnk$schema$explicit_schema_key_map(G__31676){
var validate__29415__auto__ = ufv___31677.get_cell();
if(cljs.core.truth_(validate__29415__auto__)){
var args__29416__auto___31682 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31676], null);
var temp__4657__auto___31683 = input_checker31674_31680.call(null,args__29416__auto___31682);
if(cljs.core.truth_(temp__4657__auto___31683)){
var error__29417__auto___31684 = temp__4657__auto___31683;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a possibly-unevaluated map schema, return a map from bare keyword to true\n   (for required) or false (for optional)"], null)),cljs.core.pr_str.call(null,error__29417__auto___31684)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31673_31679,new cljs.core.Keyword(null,"value","value",305978217),args__29416__auto___31682,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___31684], null));
} else {
}
} else {
}

var o__29418__auto__ = (function (){var s = G__31676;
while(true){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();
if(cljs.core.truth_(validate__29415__auto__)){
var temp__4657__auto___31685 = output_checker31675_31681.call(null,o__29418__auto__);
if(cljs.core.truth_(temp__4657__auto___31685)){
var error__29417__auto___31686 = temp__4657__auto___31685;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a possibly-unevaluated map schema, return a map from bare keyword to true\n   (for required) or false (for optional)"], null)),cljs.core.pr_str.call(null,error__29417__auto___31686)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31672_31678,new cljs.core.Keyword(null,"value","value",305978217),o__29418__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___31686], null));
} else {
}
} else {
}

return o__29418__auto__;
});})(ufv___31677,output_schema31672_31678,input_schema31673_31679,input_checker31674_31680,output_checker31675_31681))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema31672_31678,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31673_31679], null)));
var ufv___31692 = schema.utils.use_fn_validation;
var output_schema31687_31693 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
var input_schema31688_31694 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null)], null)))], null);
var input_checker31689_31695 = schema.core.checker.call(null,input_schema31688_31694);
var output_checker31690_31696 = schema.core.checker.call(null,output_schema31687_31693);
/**
 * Inputs: [s :- {s/Keyword s/Bool}]
 *   Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
 * 
 *   Given output of explicit-schema-key-map, split into seq [req opt].
 */
plumbing.fnk.schema.split_schema_keys = ((function (ufv___31692,output_schema31687_31693,input_schema31688_31694,input_checker31689_31695,output_checker31690_31696){
return (function plumbing$fnk$schema$split_schema_keys(G__31691){
var validate__29415__auto__ = ufv___31692.get_cell();
if(cljs.core.truth_(validate__29415__auto__)){
var args__29416__auto___31697 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31691], null);
var temp__4657__auto___31698 = input_checker31689_31695.call(null,args__29416__auto___31697);
if(cljs.core.truth_(temp__4657__auto___31698)){
var error__29417__auto___31699 = temp__4657__auto___31698;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"required","required",-846788763,null))),cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"optional","optional",-600484260,null)))], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given output of explicit-schema-key-map, split into seq [req opt]."], null)),cljs.core.pr_str.call(null,error__29417__auto___31699)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31688_31694,new cljs.core.Keyword(null,"value","value",305978217),args__29416__auto___31697,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___31699], null));
} else {
}
} else {
}

var o__29418__auto__ = (function (){var s = G__31691;
while(true){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();
if(cljs.core.truth_(validate__29415__auto__)){
var temp__4657__auto___31700 = output_checker31690_31696.call(null,o__29418__auto__);
if(cljs.core.truth_(temp__4657__auto___31700)){
var error__29417__auto___31701 = temp__4657__auto___31700;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"required","required",-846788763,null))),cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"optional","optional",-600484260,null)))], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given output of explicit-schema-key-map, split into seq [req opt]."], null)),cljs.core.pr_str.call(null,error__29417__auto___31701)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31687_31693,new cljs.core.Keyword(null,"value","value",305978217),o__29418__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___31701], null));
} else {
}
} else {
}

return o__29418__auto__;
});})(ufv___31692,output_schema31687_31693,input_schema31688_31694,input_checker31689_31695,output_checker31690_31696))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema31687_31693,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31688_31694], null)));
/**
 * Like merge-with, but also projects keys to a smaller space and merges them similar to the
 * values.
 */
plumbing.fnk.schema.merge_on_with = (function plumbing$fnk$schema$merge_on_with(var_args){
var args__25954__auto__ = [];
var len__25947__auto___31713 = arguments.length;
var i__25948__auto___31714 = (0);
while(true){
if((i__25948__auto___31714 < len__25947__auto___31713)){
args__25954__auto__.push((arguments[i__25948__auto___31714]));

var G__31715 = (i__25948__auto___31714 + (1));
i__25948__auto___31714 = G__31715;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((3) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((3)),(0),null)):null);
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25955__auto__);
});

plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic = (function (key_project,key_combine,val_combine,maps){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__31706){
var vec__31707 = p__31706;
var k = cljs.core.nth.call(null,vec__31707,(0),null);
var v = cljs.core.nth.call(null,vec__31707,(1),null);
var pk = key_project.call(null,k);
var temp__4655__auto__ = cljs.core.get.call(null,m,pk);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__31710 = temp__4655__auto__;
var ok = cljs.core.nth.call(null,vec__31710,(0),null);
var ov = cljs.core.nth.call(null,vec__31710,(1),null);
return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
} else {
return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.concat,maps))));
});

plumbing.fnk.schema.merge_on_with.cljs$lang$maxFixedArity = (3);

plumbing.fnk.schema.merge_on_with.cljs$lang$applyTo = (function (seq31702){
var G__31703 = cljs.core.first.call(null,seq31702);
var seq31702__$1 = cljs.core.next.call(null,seq31702);
var G__31704 = cljs.core.first.call(null,seq31702__$1);
var seq31702__$2 = cljs.core.next.call(null,seq31702__$1);
var G__31705 = cljs.core.first.call(null,seq31702__$2);
var seq31702__$3 = cljs.core.next.call(null,seq31702__$2);
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic(G__31703,G__31704,G__31705,seq31702__$3);
});

var ufv___31723 = schema.utils.use_fn_validation;
var output_schema31717_31724 = plumbing.fnk.schema.InputSchema;
var input_schema31718_31725 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,cljs.core.with_meta(new cljs.core.Symbol(null,"i1","i1",-572470430,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null)], null))),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,cljs.core.with_meta(new cljs.core.Symbol(null,"i2","i2",850408895,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null)], null)))], null);
var input_checker31719_31726 = schema.core.checker.call(null,input_schema31718_31725);
var output_checker31720_31727 = schema.core.checker.call(null,output_schema31717_31724);
/**
 * Inputs: [i1 :- InputSchema i2 :- InputSchema]
 *   Returns: InputSchema
 * 
 *   Returns a minimal input schema schema that entails satisfaction of both s1 and s2
 */
plumbing.fnk.schema.union_input_schemata = ((function (ufv___31723,output_schema31717_31724,input_schema31718_31725,input_checker31719_31726,output_checker31720_31727){
return (function plumbing$fnk$schema$union_input_schemata(G__31721,G__31722){
var validate__29415__auto__ = ufv___31723.get_cell();
if(cljs.core.truth_(validate__29415__auto__)){
var args__29416__auto___31728 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31721,G__31722], null);
var temp__4657__auto___31729 = input_checker31719_31726.call(null,args__29416__auto___31728);
if(cljs.core.truth_(temp__4657__auto___31729)){
var error__29417__auto___31730 = temp__4657__auto___31729;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a minimal input schema schema that entails satisfaction of both s1 and s2"], null)),cljs.core.pr_str.call(null,error__29417__auto___31730)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31718_31725,new cljs.core.Keyword(null,"value","value",305978217),args__29416__auto___31728,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___31730], null));
} else {
}
} else {
}

var o__29418__auto__ = (function (){var i1 = G__31721;
var i2 = G__31722;
while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__29415__auto__,ufv___31723,output_schema31717_31724,input_schema31718_31725,input_checker31719_31726,output_checker31720_31727){
return (function (p1__31716_SHARP_){
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,p1__31716_SHARP_))){
return schema.core.explicit_schema_key.call(null,p1__31716_SHARP_);
} else {
return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__29415__auto__,ufv___31723,output_schema31717_31724,input_schema31718_31725,input_checker31719_31726,output_checker31720_31727))
,((function (validate__29415__auto__,ufv___31723,output_schema31717_31724,input_schema31718_31725,input_checker31719_31726,output_checker31720_31727){
return (function (k1,k2){
if(cljs.core.truth_(schema.core.required_key_QMARK_.call(null,k1))){
return k1;
} else {
if(cljs.core.truth_(schema.core.required_key_QMARK_.call(null,k2))){
return k2;
} else {
if(cljs.core.truth_(schema.core.optional_key_QMARK_.call(null,k1))){
if(cljs.core._EQ_.call(null,k1,k2)){
} else {
throw (new Error("Assert failed: (= k1 k2)"));
}

return k1;
} else {
if(cljs.core._EQ_.call(null,k1,k2)){
return k1;
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Only one extra schema allowed")));


}
}
}
}
});})(validate__29415__auto__,ufv___31723,output_schema31717_31724,input_schema31718_31725,input_checker31719_31726,output_checker31720_31727))
,((function (validate__29415__auto__,ufv___31723,output_schema31717_31724,input_schema31718_31725,input_checker31719_31726,output_checker31720_31727){
return (function (s1,s2){
if(cljs.core.truth_((function (){var and__24860__auto__ = plumbing.fnk.schema.map_schema_QMARK_.call(null,s1);
if(cljs.core.truth_(and__24860__auto__)){
return plumbing.fnk.schema.map_schema_QMARK_.call(null,s2);
} else {
return and__24860__auto__;
}
})())){
return plumbing$fnk$schema$union_input_schemata.call(null,s1,s2);
} else {
return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__29415__auto__,ufv___31723,output_schema31717_31724,input_schema31718_31725,input_checker31719_31726,output_checker31720_31727))
,i1,i2);
break;
}
})();
if(cljs.core.truth_(validate__29415__auto__)){
var temp__4657__auto___31731 = output_checker31720_31727.call(null,o__29418__auto__);
if(cljs.core.truth_(temp__4657__auto___31731)){
var error__29417__auto___31732 = temp__4657__auto___31731;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a minimal input schema schema that entails satisfaction of both s1 and s2"], null)),cljs.core.pr_str.call(null,error__29417__auto___31732)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31717_31724,new cljs.core.Keyword(null,"value","value",305978217),o__29418__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___31732], null));
} else {
}
} else {
}

return o__29418__auto__;
});})(ufv___31723,output_schema31717_31724,input_schema31718_31725,input_checker31719_31726,output_checker31720_31727))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema31717_31724,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31718_31725], null)));
var ufv___31738 = schema.utils.use_fn_validation;
var output_schema31733_31739 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);
var input_schema31734_31740 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,cljs.core.with_meta(new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null)], null)))], null);
var input_checker31735_31741 = schema.core.checker.call(null,input_schema31734_31740);
var output_checker31736_31742 = schema.core.checker.call(null,output_schema31733_31739);
/**
 * Inputs: [input-schema :- InputSchema]
 *   Returns: [s/Keyword]
 * 
 *   Which top-level keys are required (i.e., non-false) by this input schema.
 */
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___31738,output_schema31733_31739,input_schema31734_31740,input_checker31735_31741,output_checker31736_31742){
return (function plumbing$fnk$schema$required_toplevel_keys(G__31737){
var validate__29415__auto__ = ufv___31738.get_cell();
if(cljs.core.truth_(validate__29415__auto__)){
var args__29416__auto___31743 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31737], null);
var temp__4657__auto___31744 = input_checker31735_31741.call(null,args__29416__auto___31743);
if(cljs.core.truth_(temp__4657__auto___31744)){
var error__29417__auto___31745 = temp__4657__auto___31744;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Which top-level keys are required (i.e., non-false) by this input schema."], null)),cljs.core.pr_str.call(null,error__29417__auto___31745)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31734_31740,new cljs.core.Keyword(null,"value","value",305978217),args__29416__auto___31743,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___31745], null));
} else {
}
} else {
}

var o__29418__auto__ = (function (){var input_schema = G__31737;
while(true){
return cljs.core.keep.call(null,((function (validate__29415__auto__,ufv___31738,output_schema31733_31739,input_schema31734_31740,input_checker31735_31741,output_checker31736_31742){
return (function (k){
if(cljs.core.truth_(schema.core.required_key_QMARK_.call(null,k))){
return schema.core.explicit_schema_key.call(null,k);
} else {
return null;
}
});})(validate__29415__auto__,ufv___31738,output_schema31733_31739,input_schema31734_31740,input_checker31735_31741,output_checker31736_31742))
,cljs.core.keys.call(null,input_schema));
break;
}
})();
if(cljs.core.truth_(validate__29415__auto__)){
var temp__4657__auto___31746 = output_checker31736_31742.call(null,o__29418__auto__);
if(cljs.core.truth_(temp__4657__auto___31746)){
var error__29417__auto___31747 = temp__4657__auto___31746;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Which top-level keys are required (i.e., non-false) by this input schema."], null)),cljs.core.pr_str.call(null,error__29417__auto___31747)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31733_31739,new cljs.core.Keyword(null,"value","value",305978217),o__29418__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___31747], null));
} else {
}
} else {
}

return o__29418__auto__;
});})(ufv___31738,output_schema31733_31739,input_schema31734_31740,input_checker31735_31741,output_checker31736_31742))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema31733_31739,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31734_31740], null)));
/**
 * Guess an output schema for an expr.  Currently just looks for literal map structure and
 * all keyword keys.
 */
plumbing.fnk.schema.guess_expr_output_schema = (function plumbing$fnk$schema$guess_expr_output_schema(expr){
if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr)))){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__25652__auto__ = (function plumbing$fnk$schema$guess_expr_output_schema_$_iter__31764(s__31765){
return (new cljs.core.LazySeq(null,(function (){
var s__31765__$1 = s__31765;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__31765__$1);
if(temp__4657__auto__){
var s__31765__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31765__$2)){
var c__25650__auto__ = cljs.core.chunk_first.call(null,s__31765__$2);
var size__25651__auto__ = cljs.core.count.call(null,c__25650__auto__);
var b__31767 = cljs.core.chunk_buffer.call(null,size__25651__auto__);
if((function (){var i__31766 = (0);
while(true){
if((i__31766 < size__25651__auto__)){
var vec__31774 = cljs.core._nth.call(null,c__25650__auto__,i__31766);
var k = cljs.core.nth.call(null,vec__31774,(0),null);
var v = cljs.core.nth.call(null,vec__31774,(1),null);
cljs.core.chunk_append.call(null,b__31767,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,plumbing$fnk$schema$guess_expr_output_schema.call(null,v)], null));

var G__31780 = (i__31766 + (1));
i__31766 = G__31780;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31767),plumbing$fnk$schema$guess_expr_output_schema_$_iter__31764.call(null,cljs.core.chunk_rest.call(null,s__31765__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31767),null);
}
} else {
var vec__31777 = cljs.core.first.call(null,s__31765__$2);
var k = cljs.core.nth.call(null,vec__31777,(0),null);
var v = cljs.core.nth.call(null,vec__31777,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,plumbing$fnk$schema$guess_expr_output_schema.call(null,v)], null),plumbing$fnk$schema$guess_expr_output_schema_$_iter__31764.call(null,cljs.core.rest.call(null,s__31765__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25652__auto__.call(null,expr);
})());
} else {
return new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null);
}
});
/**
 * Subtract output-schema from input-schema, returning nil if it's possible that an object
 * satisfying the output-schema satisfies the input-schema, or otherwise a description
 * of the part(s) of input-schema not met by output-schema.  Strict about the map structure
 * of output-schema matching input-schema, but loose about everything else (only looks at
 * required keys of output-schema.
 */
plumbing.fnk.schema.schema_diff = (function plumbing$fnk$schema$schema_diff(input_schema,output_schema){
if(cljs.core.not.call(null,plumbing.fnk.schema.map_schema_QMARK_.call(null,input_schema))){
return plumbing.fnk.schema.non_map_diff.call(null,input_schema,output_schema);
} else {
if(cljs.core.not.call(null,plumbing.fnk.schema.map_schema_QMARK_.call(null,output_schema))){
return schema.utils.error.call(null,schema.utils.make_ValidationError.call(null,input_schema,output_schema,(new cljs.core.Delay((function (){
return cljs.core._conj.call(null,(function (){var x__25706__auto__ = schema.core.explain.call(null,output_schema);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25706__auto__);
})(),new cljs.core.Symbol(null,"map?","map?",-1780568534,null));
}),null)),null));
} else {
return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__25652__auto__ = (function plumbing$fnk$schema$schema_diff_$_iter__31797(s__31798){
return (new cljs.core.LazySeq(null,(function (){
var s__31798__$1 = s__31798;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__31798__$1);
if(temp__4657__auto__){
var s__31798__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31798__$2)){
var c__25650__auto__ = cljs.core.chunk_first.call(null,s__31798__$2);
var size__25651__auto__ = cljs.core.count.call(null,c__25650__auto__);
var b__31800 = cljs.core.chunk_buffer.call(null,size__25651__auto__);
if((function (){var i__31799 = (0);
while(true){
if((i__31799 < size__25651__auto__)){
var vec__31807 = cljs.core._nth.call(null,c__25650__auto__,i__31799);
var k = cljs.core.nth.call(null,vec__31807,(0),null);
var v = cljs.core.nth.call(null,vec__31807,(1),null);
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,k))){
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
var raw_k = schema.core.explicit_schema_key.call(null,k);
var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);
if(cljs.core.truth_((function (){var or__24872__auto__ = required_QMARK_;
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return present_QMARK_;
}
})())){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):plumbing$fnk$schema$schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));
if(cljs.core.truth_(fail)){
cljs.core.chunk_append.call(null,b__31800,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));

var G__31813 = (i__31799 + (1));
i__31799 = G__31813;
continue;
} else {
var G__31814 = (i__31799 + (1));
i__31799 = G__31814;
continue;
}
} else {
var G__31815 = (i__31799 + (1));
i__31799 = G__31815;
continue;
}
} else {
var G__31816 = (i__31799 + (1));
i__31799 = G__31816;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31800),plumbing$fnk$schema$schema_diff_$_iter__31797.call(null,cljs.core.chunk_rest.call(null,s__31798__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31800),null);
}
} else {
var vec__31810 = cljs.core.first.call(null,s__31798__$2);
var k = cljs.core.nth.call(null,vec__31810,(0),null);
var v = cljs.core.nth.call(null,vec__31810,(1),null);
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,k))){
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
var raw_k = schema.core.explicit_schema_key.call(null,k);
var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);
if(cljs.core.truth_((function (){var or__24872__auto__ = required_QMARK_;
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return present_QMARK_;
}
})())){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):plumbing$fnk$schema$schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));
if(cljs.core.truth_(fail)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),plumbing$fnk$schema$schema_diff_$_iter__31797.call(null,cljs.core.rest.call(null,s__31798__$2)));
} else {
var G__31817 = cljs.core.rest.call(null,s__31798__$2);
s__31798__$1 = G__31817;
continue;
}
} else {
var G__31818 = cljs.core.rest.call(null,s__31798__$2);
s__31798__$1 = G__31818;
continue;
}
} else {
var G__31819 = cljs.core.rest.call(null,s__31798__$2);
s__31798__$1 = G__31819;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25652__auto__.call(null,input_schema);
})()));

}
}
});
plumbing.fnk.schema.assert_satisfies_schema = (function plumbing$fnk$schema$assert_satisfies_schema(input_schema,output_schema){
var fails = plumbing.fnk.schema.schema_diff.call(null,input_schema,output_schema);
if(cljs.core.truth_(fails)){
throw cljs.core.ex_info.call(null,[cljs.core.str(fails)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"does-not-satisfy-schema","does-not-satisfy-schema",-1543152824),new cljs.core.Keyword(null,"failures","failures",-912916356),fails], null));
} else {
return null;
}
});
var ufv___31866 = schema.utils.use_fn_validation;
var output_schema31820_31867 = schema.core.Any;
var input_schema31821_31868 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker31822_31869 = schema.core.checker.call(null,input_schema31821_31868);
var output_checker31823_31870 = schema.core.checker.call(null,output_schema31820_31867);
/**
 * Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
 * 
 *   Given pairs of input and output schemata for fnks f1 and f2,
 * return a pair of input and output schemata for #(f2 (merge % (f1 %))).
 * f1's output schema must not contain any optional keys.
 */
plumbing.fnk.schema.compose_schemata = ((function (ufv___31866,output_schema31820_31867,input_schema31821_31868,input_checker31822_31869,output_checker31823_31870){
return (function plumbing$fnk$schema$compose_schemata(G__31824,G__31825){
var validate__29415__auto__ = true;
if(validate__29415__auto__){
var args__29416__auto___31871 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31824,G__31825], null);
var temp__4657__auto___31872 = input_checker31822_31869.call(null,args__29416__auto___31871);
if(cljs.core.truth_(temp__4657__auto___31872)){
var error__29417__auto___31873 = temp__4657__auto___31872;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"always-validate","always-validate",1031872127),true,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given pairs of input and output schemata for fnks f1 and f2,\n   return a pair of input and output schemata for #(f2 (merge % (f1 %))).\n   f1's output schema must not contain any optional keys."], null)),cljs.core.pr_str.call(null,error__29417__auto___31873)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31821_31868,new cljs.core.Keyword(null,"value","value",305978217),args__29416__auto___31871,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___31873], null));
} else {
}
} else {
}

var o__29418__auto__ = (function (){var G__31852 = G__31824;
var vec__31854 = G__31852;
var i2 = cljs.core.nth.call(null,vec__31854,(0),null);
var o2 = cljs.core.nth.call(null,vec__31854,(1),null);
var G__31853 = G__31825;
var vec__31857 = G__31853;
var i1 = cljs.core.nth.call(null,vec__31857,(0),null);
var o1 = cljs.core.nth.call(null,vec__31857,(1),null);
var G__31852__$1 = G__31852;
var G__31853__$1 = G__31853;
while(true){
var vec__31860 = G__31852__$1;
var i2__$1 = cljs.core.nth.call(null,vec__31860,(0),null);
var o2__$1 = cljs.core.nth.call(null,vec__31860,(1),null);
var vec__31863 = G__31853__$1;
var i1__$1 = cljs.core.nth.call(null,vec__31863,(0),null);
var o1__$1 = cljs.core.nth.call(null,vec__31863,(1),null);
plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();
if(validate__29415__auto__){
var temp__4657__auto___31874 = output_checker31823_31870.call(null,o__29418__auto__);
if(cljs.core.truth_(temp__4657__auto___31874)){
var error__29417__auto___31875 = temp__4657__auto___31874;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"always-validate","always-validate",1031872127),true,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given pairs of input and output schemata for fnks f1 and f2,\n   return a pair of input and output schemata for #(f2 (merge % (f1 %))).\n   f1's output schema must not contain any optional keys."], null)),cljs.core.pr_str.call(null,error__29417__auto___31875)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31820_31867,new cljs.core.Keyword(null,"value","value",305978217),o__29418__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___31875], null));
} else {
}
} else {
}

return o__29418__auto__;
});})(ufv___31866,output_schema31820_31867,input_schema31821_31868,input_checker31822_31869,output_checker31823_31870))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema31820_31867,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31821_31868], null)));
plumbing.fnk.schema.schema_key = (function plumbing$fnk$schema$schema_key(m,k){
if(cljs.core.contains_QMARK_.call(null,m,k)){
return k;
} else {
if(cljs.core.contains_QMARK_.call(null,m,schema.core.optional_key.call(null,k))){
return schema.core.optional_key.call(null,k);
} else {
return null;

}
}
});
plumbing.fnk.schema.possibly_contains_QMARK_ = (function plumbing$fnk$schema$possibly_contains_QMARK_(m,k){
return cljs.core.boolean$.call(null,plumbing.fnk.schema.schema_key.call(null,m,k));
});
var ufv___32018 = schema.utils.use_fn_validation;
var output_schema31876_32019 = schema.core.Any;
var input_schema31877_32020 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null)], null))),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),cljs.core.with_meta(new cljs.core.Symbol(null,"ks","ks",-754231827,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null)], null)))], null);
var input_checker31878_32021 = schema.core.checker.call(null,input_schema31877_32020);
var output_checker31879_32022 = schema.core.checker.call(null,output_schema31876_32019);
/**
 * Inputs: [s :- InputSchema ks :- [s/Keyword]]
 * 
 *   Return a pair [ks-part non-ks-part], with any extra schema removed.
 */
plumbing.fnk.schema.split_schema = ((function (ufv___32018,output_schema31876_32019,input_schema31877_32020,input_checker31878_32021,output_checker31879_32022){
return (function plumbing$fnk$schema$split_schema(G__31880,G__31881){
var validate__29415__auto__ = ufv___32018.get_cell();
if(cljs.core.truth_(validate__29415__auto__)){
var args__29416__auto___32023 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31880,G__31881], null);
var temp__4657__auto___32024 = input_checker31878_32021.call(null,args__29416__auto___32023);
if(cljs.core.truth_(temp__4657__auto___32024)){
var error__29417__auto___32025 = temp__4657__auto___32024;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return a pair [ks-part non-ks-part], with any extra schema removed."], null)),cljs.core.pr_str.call(null,error__29417__auto___32025)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31877_32020,new cljs.core.Keyword(null,"value","value",305978217),args__29416__auto___32023,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___32025], null));
} else {
}
} else {
}

var o__29418__auto__ = (function (){var s = G__31880;
var ks = G__31881;
while(true){
var ks__$1 = cljs.core.set.call(null,ks);
var iter__25652__auto__ = ((function (ks__$1,validate__29415__auto__,ufv___32018,output_schema31876_32019,input_schema31877_32020,input_checker31878_32021,output_checker31879_32022){
return (function plumbing$fnk$schema$split_schema_$_iter__31950(s__31951){
return (new cljs.core.LazySeq(null,((function (ks__$1,validate__29415__auto__,ufv___32018,output_schema31876_32019,input_schema31877_32020,input_checker31878_32021,output_checker31879_32022){
return (function (){
var s__31951__$1 = s__31951;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__31951__$1);
if(temp__4657__auto__){
var s__31951__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31951__$2)){
var c__25650__auto__ = cljs.core.chunk_first.call(null,s__31951__$2);
var size__25651__auto__ = cljs.core.count.call(null,c__25650__auto__);
var b__31953 = cljs.core.chunk_buffer.call(null,size__25651__auto__);
if((function (){var i__31952 = (0);
while(true){
if((i__31952 < size__25651__auto__)){
var in_QMARK_ = cljs.core._nth.call(null,c__25650__auto__,i__31952);
cljs.core.chunk_append.call(null,b__31953,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__25652__auto__ = ((function (i__31952,in_QMARK_,c__25650__auto__,size__25651__auto__,b__31953,s__31951__$2,temp__4657__auto__,ks__$1,validate__29415__auto__,ufv___32018,output_schema31876_32019,input_schema31877_32020,input_checker31878_32021,output_checker31879_32022){
return (function plumbing$fnk$schema$split_schema_$_iter__31950_$_iter__31986(s__31987){
return (new cljs.core.LazySeq(null,((function (i__31952,in_QMARK_,c__25650__auto__,size__25651__auto__,b__31953,s__31951__$2,temp__4657__auto__,ks__$1,validate__29415__auto__,ufv___32018,output_schema31876_32019,input_schema31877_32020,input_checker31878_32021,output_checker31879_32022){
return (function (){
var s__31987__$1 = s__31987;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__31987__$1);
if(temp__4657__auto____$1){
var s__31987__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31987__$2)){
var c__25650__auto____$1 = cljs.core.chunk_first.call(null,s__31987__$2);
var size__25651__auto____$1 = cljs.core.count.call(null,c__25650__auto____$1);
var b__31989 = cljs.core.chunk_buffer.call(null,size__25651__auto____$1);
if((function (){var i__31988 = (0);
while(true){
if((i__31988 < size__25651__auto____$1)){
var vec__31996 = cljs.core._nth.call(null,c__25650__auto____$1,i__31988);
var k = cljs.core.nth.call(null,vec__31996,(0),null);
var v = cljs.core.nth.call(null,vec__31996,(1),null);
if(cljs.core.truth_((function (){var and__24860__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__24860__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__24860__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__31989,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__32026 = (i__31988 + (1));
i__31988 = G__32026;
continue;
} else {
var G__32027 = (i__31988 + (1));
i__31988 = G__32027;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31989),plumbing$fnk$schema$split_schema_$_iter__31950_$_iter__31986.call(null,cljs.core.chunk_rest.call(null,s__31987__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31989),null);
}
} else {
var vec__31999 = cljs.core.first.call(null,s__31987__$2);
var k = cljs.core.nth.call(null,vec__31999,(0),null);
var v = cljs.core.nth.call(null,vec__31999,(1),null);
if(cljs.core.truth_((function (){var and__24860__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__24860__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__24860__auto__;
}
})())){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$fnk$schema$split_schema_$_iter__31950_$_iter__31986.call(null,cljs.core.rest.call(null,s__31987__$2)));
} else {
var G__32028 = cljs.core.rest.call(null,s__31987__$2);
s__31987__$1 = G__32028;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__31952,in_QMARK_,c__25650__auto__,size__25651__auto__,b__31953,s__31951__$2,temp__4657__auto__,ks__$1,validate__29415__auto__,ufv___32018,output_schema31876_32019,input_schema31877_32020,input_checker31878_32021,output_checker31879_32022))
,null,null));
});})(i__31952,in_QMARK_,c__25650__auto__,size__25651__auto__,b__31953,s__31951__$2,temp__4657__auto__,ks__$1,validate__29415__auto__,ufv___32018,output_schema31876_32019,input_schema31877_32020,input_checker31878_32021,output_checker31879_32022))
;
return iter__25652__auto__.call(null,s);
})()));

var G__32029 = (i__31952 + (1));
i__31952 = G__32029;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31953),plumbing$fnk$schema$split_schema_$_iter__31950.call(null,cljs.core.chunk_rest.call(null,s__31951__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31953),null);
}
} else {
var in_QMARK_ = cljs.core.first.call(null,s__31951__$2);
return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__25652__auto__ = ((function (in_QMARK_,s__31951__$2,temp__4657__auto__,ks__$1,validate__29415__auto__,ufv___32018,output_schema31876_32019,input_schema31877_32020,input_checker31878_32021,output_checker31879_32022){
return (function plumbing$fnk$schema$split_schema_$_iter__31950_$_iter__32002(s__32003){
return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__31951__$2,temp__4657__auto__,ks__$1,validate__29415__auto__,ufv___32018,output_schema31876_32019,input_schema31877_32020,input_checker31878_32021,output_checker31879_32022){
return (function (){
var s__32003__$1 = s__32003;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__32003__$1);
if(temp__4657__auto____$1){
var s__32003__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32003__$2)){
var c__25650__auto__ = cljs.core.chunk_first.call(null,s__32003__$2);
var size__25651__auto__ = cljs.core.count.call(null,c__25650__auto__);
var b__32005 = cljs.core.chunk_buffer.call(null,size__25651__auto__);
if((function (){var i__32004 = (0);
while(true){
if((i__32004 < size__25651__auto__)){
var vec__32012 = cljs.core._nth.call(null,c__25650__auto__,i__32004);
var k = cljs.core.nth.call(null,vec__32012,(0),null);
var v = cljs.core.nth.call(null,vec__32012,(1),null);
if(cljs.core.truth_((function (){var and__24860__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__24860__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__24860__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__32005,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__32030 = (i__32004 + (1));
i__32004 = G__32030;
continue;
} else {
var G__32031 = (i__32004 + (1));
i__32004 = G__32031;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32005),plumbing$fnk$schema$split_schema_$_iter__31950_$_iter__32002.call(null,cljs.core.chunk_rest.call(null,s__32003__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32005),null);
}
} else {
var vec__32015 = cljs.core.first.call(null,s__32003__$2);
var k = cljs.core.nth.call(null,vec__32015,(0),null);
var v = cljs.core.nth.call(null,vec__32015,(1),null);
if(cljs.core.truth_((function (){var and__24860__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__24860__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__24860__auto__;
}
})())){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$fnk$schema$split_schema_$_iter__31950_$_iter__32002.call(null,cljs.core.rest.call(null,s__32003__$2)));
} else {
var G__32032 = cljs.core.rest.call(null,s__32003__$2);
s__32003__$1 = G__32032;
continue;
}
}
} else {
return null;
}
break;
}
});})(in_QMARK_,s__31951__$2,temp__4657__auto__,ks__$1,validate__29415__auto__,ufv___32018,output_schema31876_32019,input_schema31877_32020,input_checker31878_32021,output_checker31879_32022))
,null,null));
});})(in_QMARK_,s__31951__$2,temp__4657__auto__,ks__$1,validate__29415__auto__,ufv___32018,output_schema31876_32019,input_schema31877_32020,input_checker31878_32021,output_checker31879_32022))
;
return iter__25652__auto__.call(null,s);
})()),plumbing$fnk$schema$split_schema_$_iter__31950.call(null,cljs.core.rest.call(null,s__31951__$2)));
}
} else {
return null;
}
break;
}
});})(ks__$1,validate__29415__auto__,ufv___32018,output_schema31876_32019,input_schema31877_32020,input_checker31878_32021,output_checker31879_32022))
,null,null));
});})(ks__$1,validate__29415__auto__,ufv___32018,output_schema31876_32019,input_schema31877_32020,input_checker31878_32021,output_checker31879_32022))
;
return iter__25652__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();
if(cljs.core.truth_(validate__29415__auto__)){
var temp__4657__auto___32033 = output_checker31879_32022.call(null,o__29418__auto__);
if(cljs.core.truth_(temp__4657__auto___32033)){
var error__29417__auto___32034 = temp__4657__auto___32033;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return a pair [ks-part non-ks-part], with any extra schema removed."], null)),cljs.core.pr_str.call(null,error__29417__auto___32034)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31876_32019,new cljs.core.Keyword(null,"value","value",305978217),o__29418__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___32034], null));
} else {
}
} else {
}

return o__29418__auto__;
});})(ufv___32018,output_schema31876_32019,input_schema31877_32020,input_checker31878_32021,output_checker31879_32022))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema31876_32019,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31877_32020], null)));
var ufv___32105 = schema.utils.use_fn_validation;
var output_schema32035_32106 = plumbing.fnk.schema.GraphIOSchemata;
var input_schema32036_32107 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker32037_32108 = schema.core.checker.call(null,input_schema32036_32107);
var output_checker32038_32109 = schema.core.checker.call(null,output_schema32035_32106);
/**
 * Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
 *   Returns: GraphIOSchemata
 * 
 *   Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
 * return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
 */
plumbing.fnk.schema.sequence_schemata = ((function (ufv___32105,output_schema32035_32106,input_schema32036_32107,input_checker32037_32108,output_checker32038_32109){
return (function plumbing$fnk$schema$sequence_schemata(G__32039,G__32040){
var validate__29415__auto__ = ufv___32105.get_cell();
if(cljs.core.truth_(validate__29415__auto__)){
var args__29416__auto___32110 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32039,G__32040], null);
var temp__4657__auto___32111 = input_checker32037_32108.call(null,args__29416__auto___32110);
if(cljs.core.truth_(temp__4657__auto___32111)){
var error__29417__auto___32112 = temp__4657__auto___32111;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"GraphIOSchemata","GraphIOSchemata",-2137701253,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,\n   return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))"], null)),cljs.core.pr_str.call(null,error__29417__auto___32112)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32036_32107,new cljs.core.Keyword(null,"value","value",305978217),args__29416__auto___32110,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___32112], null));
} else {
}
} else {
}

var o__29418__auto__ = (function (){var G__32082 = G__32039;
var vec__32084 = G__32082;
var i1 = cljs.core.nth.call(null,vec__32084,(0),null);
var o1 = cljs.core.nth.call(null,vec__32084,(1),null);
var G__32083 = G__32040;
var vec__32087 = G__32083;
var k = cljs.core.nth.call(null,vec__32087,(0),null);
var vec__32090 = cljs.core.nth.call(null,vec__32087,(1),null);
var i2 = cljs.core.nth.call(null,vec__32090,(0),null);
var o2 = cljs.core.nth.call(null,vec__32090,(1),null);
var G__32082__$1 = G__32082;
var G__32083__$1 = G__32083;
while(true){
var vec__32093 = G__32082__$1;
var i1__$1 = cljs.core.nth.call(null,vec__32093,(0),null);
var o1__$1 = cljs.core.nth.call(null,vec__32093,(1),null);
var vec__32096 = G__32083__$1;
var k__$1 = cljs.core.nth.call(null,vec__32096,(0),null);
var vec__32099 = cljs.core.nth.call(null,vec__32096,(1),null);
var i2__$1 = cljs.core.nth.call(null,vec__32099,(0),null);
var o2__$1 = cljs.core.nth.call(null,vec__32099,(1),null);
if(cljs.core.not.call(null,plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Duplicate key output (possibly due to a misordered graph) %s for input %s from input %s",k__$1,schema.core.explain.call(null,i2__$1),schema.core.explain.call(null,i1__$1))));
}

if(cljs.core.not.call(null,plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i2__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Node outputs a key %s in its inputs %s",k__$1,schema.core.explain.call(null,i2__$1))));
}

if(cljs.core.not.call(null,plumbing.fnk.schema.possibly_contains_QMARK_.call(null,o1__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Node outputs a duplicate key %s given inputs %s",k__$1,schema.core.explain.call(null,i1__$1))));
}

var vec__32102 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));
var used = cljs.core.nth.call(null,vec__32102,(0),null);
var unused = cljs.core.nth.call(null,vec__32102,(1),null);
plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();
if(cljs.core.truth_(validate__29415__auto__)){
var temp__4657__auto___32113 = output_checker32038_32109.call(null,o__29418__auto__);
if(cljs.core.truth_(temp__4657__auto___32113)){
var error__29417__auto___32114 = temp__4657__auto___32113;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"GraphIOSchemata","GraphIOSchemata",-2137701253,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,\n   return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))"], null)),cljs.core.pr_str.call(null,error__29417__auto___32114)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32035_32106,new cljs.core.Keyword(null,"value","value",305978217),o__29418__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___32114], null));
} else {
}
} else {
}

return o__29418__auto__;
});})(ufv___32105,output_schema32035_32106,input_schema32036_32107,input_checker32037_32108,output_checker32038_32109))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema32035_32106,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32036_32107], null)));

//# sourceMappingURL=schema.js.map?rel=1486291265920