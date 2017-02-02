// Compiled by ClojureScript 1.9.89 {}
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('schema.utils');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__9291__9292__auto__){
if(!((p1__9291__9292__auto__ == null))){
if((false) || (p1__9291__9292__auto__.schema$core$Schema$)){
return true;
} else {
if((!p1__9291__9292__auto__.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,p1__9291__9292__auto__);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,p1__9291__9292__auto__);
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
var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__10792_SHARP_){
return (cljs.core.val.call(null,p1__10792_SHARP_) > (1));
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

var vec__10796 = cljs.core.find.call(null,m,k);
var _ = cljs.core.nth.call(null,vec__10796,(0),null);
var v = cljs.core.nth.call(null,vec__10796,(1),null);
var p = vec__10796;
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
var ufv___10804 = schema.utils.use_fn_validation;
var output_schema10799_10805 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));
var input_schema10800_10806 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker10801_10807 = schema.core.checker.call(null,input_schema10800_10806);
var output_checker10802_10808 = schema.core.checker.call(null,output_schema10799_10805);
/**
 * Inputs: [k]
 *   Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
 * 
 *   Given a possibly-unevaluated schema map key form, unpack an explicit keyword
 * and optional? flag, or return nil for a non-explicit key
 */
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___10804,output_schema10799_10805,input_schema10800_10806,input_checker10801_10807,output_checker10802_10808){
return (function plumbing$fnk$schema$unwrap_schema_form_key(G__10803){
var validate__7824__auto__ = ufv___10804.get_cell();
if(cljs.core.truth_(validate__7824__auto__)){
var args__7825__auto___10809 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__10803], null);
var temp__4657__auto___10810 = input_checker10801_10807.call(null,args__7825__auto___10809);
if(cljs.core.truth_(temp__4657__auto___10810)){
var error__7826__auto___10811 = temp__4657__auto___10810;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),"k",new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),"optional?")),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a possibly-unevaluated schema map key form, unpack an explicit keyword\n   and optional? flag, or return nil for a non-explicit key"], null)),cljs.core.pr_str.call(null,error__7826__auto___10811)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema10800_10806,new cljs.core.Keyword(null,"value","value",305978217),args__7825__auto___10809,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___10811], null));
} else {
}
} else {
}

var o__7827__auto__ = (function (){var k = G__10803;
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
if(cljs.core.truth_(validate__7824__auto__)){
var temp__4657__auto___10812 = output_checker10802_10808.call(null,o__7827__auto__);
if(cljs.core.truth_(temp__4657__auto___10812)){
var error__7826__auto___10813 = temp__4657__auto___10812;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),"k",new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),"optional?")),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a possibly-unevaluated schema map key form, unpack an explicit keyword\n   and optional? flag, or return nil for a non-explicit key"], null)),cljs.core.pr_str.call(null,error__7826__auto___10813)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema10799_10805,new cljs.core.Keyword(null,"value","value",305978217),o__7827__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___10813], null));
} else {
}
} else {
}

return o__7827__auto__;
});})(ufv___10804,output_schema10799_10805,input_schema10800_10806,input_checker10801_10807,output_checker10802_10808))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema10799_10805,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema10800_10806], null)));
var ufv___10819 = schema.utils.use_fn_validation;
var output_schema10814_10820 = cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
var input_schema10815_10821 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker10816_10822 = schema.core.checker.call(null,input_schema10815_10821);
var output_checker10817_10823 = schema.core.checker.call(null,output_schema10814_10820);
/**
 * Inputs: [s]
 *   Returns: {s/Keyword s/Bool}
 * 
 *   Given a possibly-unevaluated map schema, return a map from bare keyword to true
 * (for required) or false (for optional)
 */
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___10819,output_schema10814_10820,input_schema10815_10821,input_checker10816_10822,output_checker10817_10823){
return (function plumbing$fnk$schema$explicit_schema_key_map(G__10818){
var validate__7824__auto__ = ufv___10819.get_cell();
if(cljs.core.truth_(validate__7824__auto__)){
var args__7825__auto___10824 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__10818], null);
var temp__4657__auto___10825 = input_checker10816_10822.call(null,args__7825__auto___10824);
if(cljs.core.truth_(temp__4657__auto___10825)){
var error__7826__auto___10826 = temp__4657__auto___10825;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a possibly-unevaluated map schema, return a map from bare keyword to true\n   (for required) or false (for optional)"], null)),cljs.core.pr_str.call(null,error__7826__auto___10826)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema10815_10821,new cljs.core.Keyword(null,"value","value",305978217),args__7825__auto___10824,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___10826], null));
} else {
}
} else {
}

var o__7827__auto__ = (function (){var s = G__10818;
while(true){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();
if(cljs.core.truth_(validate__7824__auto__)){
var temp__4657__auto___10827 = output_checker10817_10823.call(null,o__7827__auto__);
if(cljs.core.truth_(temp__4657__auto___10827)){
var error__7826__auto___10828 = temp__4657__auto___10827;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a possibly-unevaluated map schema, return a map from bare keyword to true\n   (for required) or false (for optional)"], null)),cljs.core.pr_str.call(null,error__7826__auto___10828)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema10814_10820,new cljs.core.Keyword(null,"value","value",305978217),o__7827__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___10828], null));
} else {
}
} else {
}

return o__7827__auto__;
});})(ufv___10819,output_schema10814_10820,input_schema10815_10821,input_checker10816_10822,output_checker10817_10823))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema10814_10820,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema10815_10821], null)));
var ufv___10834 = schema.utils.use_fn_validation;
var output_schema10829_10835 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
var input_schema10830_10836 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null)], null)))], null);
var input_checker10831_10837 = schema.core.checker.call(null,input_schema10830_10836);
var output_checker10832_10838 = schema.core.checker.call(null,output_schema10829_10835);
/**
 * Inputs: [s :- {s/Keyword s/Bool}]
 *   Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
 * 
 *   Given output of explicit-schema-key-map, split into seq [req opt].
 */
plumbing.fnk.schema.split_schema_keys = ((function (ufv___10834,output_schema10829_10835,input_schema10830_10836,input_checker10831_10837,output_checker10832_10838){
return (function plumbing$fnk$schema$split_schema_keys(G__10833){
var validate__7824__auto__ = ufv___10834.get_cell();
if(cljs.core.truth_(validate__7824__auto__)){
var args__7825__auto___10839 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__10833], null);
var temp__4657__auto___10840 = input_checker10831_10837.call(null,args__7825__auto___10839);
if(cljs.core.truth_(temp__4657__auto___10840)){
var error__7826__auto___10841 = temp__4657__auto___10840;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"required","required",-846788763,null))),cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"optional","optional",-600484260,null)))], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given output of explicit-schema-key-map, split into seq [req opt]."], null)),cljs.core.pr_str.call(null,error__7826__auto___10841)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema10830_10836,new cljs.core.Keyword(null,"value","value",305978217),args__7825__auto___10839,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___10841], null));
} else {
}
} else {
}

var o__7827__auto__ = (function (){var s = G__10833;
while(true){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();
if(cljs.core.truth_(validate__7824__auto__)){
var temp__4657__auto___10842 = output_checker10832_10838.call(null,o__7827__auto__);
if(cljs.core.truth_(temp__4657__auto___10842)){
var error__7826__auto___10843 = temp__4657__auto___10842;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"required","required",-846788763,null))),cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"optional","optional",-600484260,null)))], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given output of explicit-schema-key-map, split into seq [req opt]."], null)),cljs.core.pr_str.call(null,error__7826__auto___10843)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema10829_10835,new cljs.core.Keyword(null,"value","value",305978217),o__7827__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___10843], null));
} else {
}
} else {
}

return o__7827__auto__;
});})(ufv___10834,output_schema10829_10835,input_schema10830_10836,input_checker10831_10837,output_checker10832_10838))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema10829_10835,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema10830_10836], null)));
/**
 * Like merge-with, but also projects keys to a smaller space and merges them similar to the
 * values.
 */
plumbing.fnk.schema.merge_on_with = (function plumbing$fnk$schema$merge_on_with(var_args){
var args__7333__auto__ = [];
var len__7326__auto___10855 = arguments.length;
var i__7327__auto___10856 = (0);
while(true){
if((i__7327__auto___10856 < len__7326__auto___10855)){
args__7333__auto__.push((arguments[i__7327__auto___10856]));

var G__10857 = (i__7327__auto___10856 + (1));
i__7327__auto___10856 = G__10857;
continue;
} else {
}
break;
}

var argseq__7334__auto__ = ((((3) < args__7333__auto__.length))?(new cljs.core.IndexedSeq(args__7333__auto__.slice((3)),(0),null)):null);
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7334__auto__);
});

plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic = (function (key_project,key_combine,val_combine,maps){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__10848){
var vec__10849 = p__10848;
var k = cljs.core.nth.call(null,vec__10849,(0),null);
var v = cljs.core.nth.call(null,vec__10849,(1),null);
var pk = key_project.call(null,k);
var temp__4655__auto__ = cljs.core.get.call(null,m,pk);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__10852 = temp__4655__auto__;
var ok = cljs.core.nth.call(null,vec__10852,(0),null);
var ov = cljs.core.nth.call(null,vec__10852,(1),null);
return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
} else {
return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.concat,maps))));
});

plumbing.fnk.schema.merge_on_with.cljs$lang$maxFixedArity = (3);

plumbing.fnk.schema.merge_on_with.cljs$lang$applyTo = (function (seq10844){
var G__10845 = cljs.core.first.call(null,seq10844);
var seq10844__$1 = cljs.core.next.call(null,seq10844);
var G__10846 = cljs.core.first.call(null,seq10844__$1);
var seq10844__$2 = cljs.core.next.call(null,seq10844__$1);
var G__10847 = cljs.core.first.call(null,seq10844__$2);
var seq10844__$3 = cljs.core.next.call(null,seq10844__$2);
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic(G__10845,G__10846,G__10847,seq10844__$3);
});

var ufv___10865 = schema.utils.use_fn_validation;
var output_schema10859_10866 = plumbing.fnk.schema.InputSchema;
var input_schema10860_10867 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,cljs.core.with_meta(new cljs.core.Symbol(null,"i1","i1",-572470430,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null)], null))),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,cljs.core.with_meta(new cljs.core.Symbol(null,"i2","i2",850408895,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null)], null)))], null);
var input_checker10861_10868 = schema.core.checker.call(null,input_schema10860_10867);
var output_checker10862_10869 = schema.core.checker.call(null,output_schema10859_10866);
/**
 * Inputs: [i1 :- InputSchema i2 :- InputSchema]
 *   Returns: InputSchema
 * 
 *   Returns a minimal input schema schema that entails satisfaction of both s1 and s2
 */
plumbing.fnk.schema.union_input_schemata = ((function (ufv___10865,output_schema10859_10866,input_schema10860_10867,input_checker10861_10868,output_checker10862_10869){
return (function plumbing$fnk$schema$union_input_schemata(G__10863,G__10864){
var validate__7824__auto__ = ufv___10865.get_cell();
if(cljs.core.truth_(validate__7824__auto__)){
var args__7825__auto___10870 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__10863,G__10864], null);
var temp__4657__auto___10871 = input_checker10861_10868.call(null,args__7825__auto___10870);
if(cljs.core.truth_(temp__4657__auto___10871)){
var error__7826__auto___10872 = temp__4657__auto___10871;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a minimal input schema schema that entails satisfaction of both s1 and s2"], null)),cljs.core.pr_str.call(null,error__7826__auto___10872)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema10860_10867,new cljs.core.Keyword(null,"value","value",305978217),args__7825__auto___10870,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___10872], null));
} else {
}
} else {
}

var o__7827__auto__ = (function (){var i1 = G__10863;
var i2 = G__10864;
while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__7824__auto__,ufv___10865,output_schema10859_10866,input_schema10860_10867,input_checker10861_10868,output_checker10862_10869){
return (function (p1__10858_SHARP_){
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,p1__10858_SHARP_))){
return schema.core.explicit_schema_key.call(null,p1__10858_SHARP_);
} else {
return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__7824__auto__,ufv___10865,output_schema10859_10866,input_schema10860_10867,input_checker10861_10868,output_checker10862_10869))
,((function (validate__7824__auto__,ufv___10865,output_schema10859_10866,input_schema10860_10867,input_checker10861_10868,output_checker10862_10869){
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
});})(validate__7824__auto__,ufv___10865,output_schema10859_10866,input_schema10860_10867,input_checker10861_10868,output_checker10862_10869))
,((function (validate__7824__auto__,ufv___10865,output_schema10859_10866,input_schema10860_10867,input_checker10861_10868,output_checker10862_10869){
return (function (s1,s2){
if(cljs.core.truth_((function (){var and__6239__auto__ = plumbing.fnk.schema.map_schema_QMARK_.call(null,s1);
if(cljs.core.truth_(and__6239__auto__)){
return plumbing.fnk.schema.map_schema_QMARK_.call(null,s2);
} else {
return and__6239__auto__;
}
})())){
return plumbing$fnk$schema$union_input_schemata.call(null,s1,s2);
} else {
return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__7824__auto__,ufv___10865,output_schema10859_10866,input_schema10860_10867,input_checker10861_10868,output_checker10862_10869))
,i1,i2);
break;
}
})();
if(cljs.core.truth_(validate__7824__auto__)){
var temp__4657__auto___10873 = output_checker10862_10869.call(null,o__7827__auto__);
if(cljs.core.truth_(temp__4657__auto___10873)){
var error__7826__auto___10874 = temp__4657__auto___10873;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a minimal input schema schema that entails satisfaction of both s1 and s2"], null)),cljs.core.pr_str.call(null,error__7826__auto___10874)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema10859_10866,new cljs.core.Keyword(null,"value","value",305978217),o__7827__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___10874], null));
} else {
}
} else {
}

return o__7827__auto__;
});})(ufv___10865,output_schema10859_10866,input_schema10860_10867,input_checker10861_10868,output_checker10862_10869))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema10859_10866,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema10860_10867], null)));
var ufv___10880 = schema.utils.use_fn_validation;
var output_schema10875_10881 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);
var input_schema10876_10882 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,cljs.core.with_meta(new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null)], null)))], null);
var input_checker10877_10883 = schema.core.checker.call(null,input_schema10876_10882);
var output_checker10878_10884 = schema.core.checker.call(null,output_schema10875_10881);
/**
 * Inputs: [input-schema :- InputSchema]
 *   Returns: [s/Keyword]
 * 
 *   Which top-level keys are required (i.e., non-false) by this input schema.
 */
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___10880,output_schema10875_10881,input_schema10876_10882,input_checker10877_10883,output_checker10878_10884){
return (function plumbing$fnk$schema$required_toplevel_keys(G__10879){
var validate__7824__auto__ = ufv___10880.get_cell();
if(cljs.core.truth_(validate__7824__auto__)){
var args__7825__auto___10885 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__10879], null);
var temp__4657__auto___10886 = input_checker10877_10883.call(null,args__7825__auto___10885);
if(cljs.core.truth_(temp__4657__auto___10886)){
var error__7826__auto___10887 = temp__4657__auto___10886;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Which top-level keys are required (i.e., non-false) by this input schema."], null)),cljs.core.pr_str.call(null,error__7826__auto___10887)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema10876_10882,new cljs.core.Keyword(null,"value","value",305978217),args__7825__auto___10885,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___10887], null));
} else {
}
} else {
}

var o__7827__auto__ = (function (){var input_schema = G__10879;
while(true){
return cljs.core.keep.call(null,((function (validate__7824__auto__,ufv___10880,output_schema10875_10881,input_schema10876_10882,input_checker10877_10883,output_checker10878_10884){
return (function (k){
if(cljs.core.truth_(schema.core.required_key_QMARK_.call(null,k))){
return schema.core.explicit_schema_key.call(null,k);
} else {
return null;
}
});})(validate__7824__auto__,ufv___10880,output_schema10875_10881,input_schema10876_10882,input_checker10877_10883,output_checker10878_10884))
,cljs.core.keys.call(null,input_schema));
break;
}
})();
if(cljs.core.truth_(validate__7824__auto__)){
var temp__4657__auto___10888 = output_checker10878_10884.call(null,o__7827__auto__);
if(cljs.core.truth_(temp__4657__auto___10888)){
var error__7826__auto___10889 = temp__4657__auto___10888;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Which top-level keys are required (i.e., non-false) by this input schema."], null)),cljs.core.pr_str.call(null,error__7826__auto___10889)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema10875_10881,new cljs.core.Keyword(null,"value","value",305978217),o__7827__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___10889], null));
} else {
}
} else {
}

return o__7827__auto__;
});})(ufv___10880,output_schema10875_10881,input_schema10876_10882,input_checker10877_10883,output_checker10878_10884))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema10875_10881,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema10876_10882], null)));
/**
 * Guess an output schema for an expr.  Currently just looks for literal map structure and
 * all keyword keys.
 */
plumbing.fnk.schema.guess_expr_output_schema = (function plumbing$fnk$schema$guess_expr_output_schema(expr){
if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr)))){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7031__auto__ = (function plumbing$fnk$schema$guess_expr_output_schema_$_iter__10906(s__10907){
return (new cljs.core.LazySeq(null,(function (){
var s__10907__$1 = s__10907;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__10907__$1);
if(temp__4657__auto__){
var s__10907__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10907__$2)){
var c__7029__auto__ = cljs.core.chunk_first.call(null,s__10907__$2);
var size__7030__auto__ = cljs.core.count.call(null,c__7029__auto__);
var b__10909 = cljs.core.chunk_buffer.call(null,size__7030__auto__);
if((function (){var i__10908 = (0);
while(true){
if((i__10908 < size__7030__auto__)){
var vec__10916 = cljs.core._nth.call(null,c__7029__auto__,i__10908);
var k = cljs.core.nth.call(null,vec__10916,(0),null);
var v = cljs.core.nth.call(null,vec__10916,(1),null);
cljs.core.chunk_append.call(null,b__10909,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,plumbing$fnk$schema$guess_expr_output_schema.call(null,v)], null));

var G__10922 = (i__10908 + (1));
i__10908 = G__10922;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10909),plumbing$fnk$schema$guess_expr_output_schema_$_iter__10906.call(null,cljs.core.chunk_rest.call(null,s__10907__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10909),null);
}
} else {
var vec__10919 = cljs.core.first.call(null,s__10907__$2);
var k = cljs.core.nth.call(null,vec__10919,(0),null);
var v = cljs.core.nth.call(null,vec__10919,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,plumbing$fnk$schema$guess_expr_output_schema.call(null,v)], null),plumbing$fnk$schema$guess_expr_output_schema_$_iter__10906.call(null,cljs.core.rest.call(null,s__10907__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7031__auto__.call(null,expr);
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
return cljs.core._conj.call(null,(function (){var x__7085__auto__ = schema.core.explain.call(null,output_schema);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7085__auto__);
})(),new cljs.core.Symbol(null,"map?","map?",-1780568534,null));
}),null)),null));
} else {
return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7031__auto__ = (function plumbing$fnk$schema$schema_diff_$_iter__10939(s__10940){
return (new cljs.core.LazySeq(null,(function (){
var s__10940__$1 = s__10940;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__10940__$1);
if(temp__4657__auto__){
var s__10940__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10940__$2)){
var c__7029__auto__ = cljs.core.chunk_first.call(null,s__10940__$2);
var size__7030__auto__ = cljs.core.count.call(null,c__7029__auto__);
var b__10942 = cljs.core.chunk_buffer.call(null,size__7030__auto__);
if((function (){var i__10941 = (0);
while(true){
if((i__10941 < size__7030__auto__)){
var vec__10949 = cljs.core._nth.call(null,c__7029__auto__,i__10941);
var k = cljs.core.nth.call(null,vec__10949,(0),null);
var v = cljs.core.nth.call(null,vec__10949,(1),null);
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,k))){
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
var raw_k = schema.core.explicit_schema_key.call(null,k);
var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);
if(cljs.core.truth_((function (){var or__6251__auto__ = required_QMARK_;
if(cljs.core.truth_(or__6251__auto__)){
return or__6251__auto__;
} else {
return present_QMARK_;
}
})())){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):plumbing$fnk$schema$schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));
if(cljs.core.truth_(fail)){
cljs.core.chunk_append.call(null,b__10942,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));

var G__10955 = (i__10941 + (1));
i__10941 = G__10955;
continue;
} else {
var G__10956 = (i__10941 + (1));
i__10941 = G__10956;
continue;
}
} else {
var G__10957 = (i__10941 + (1));
i__10941 = G__10957;
continue;
}
} else {
var G__10958 = (i__10941 + (1));
i__10941 = G__10958;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10942),plumbing$fnk$schema$schema_diff_$_iter__10939.call(null,cljs.core.chunk_rest.call(null,s__10940__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10942),null);
}
} else {
var vec__10952 = cljs.core.first.call(null,s__10940__$2);
var k = cljs.core.nth.call(null,vec__10952,(0),null);
var v = cljs.core.nth.call(null,vec__10952,(1),null);
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,k))){
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
var raw_k = schema.core.explicit_schema_key.call(null,k);
var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);
if(cljs.core.truth_((function (){var or__6251__auto__ = required_QMARK_;
if(cljs.core.truth_(or__6251__auto__)){
return or__6251__auto__;
} else {
return present_QMARK_;
}
})())){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):plumbing$fnk$schema$schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));
if(cljs.core.truth_(fail)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),plumbing$fnk$schema$schema_diff_$_iter__10939.call(null,cljs.core.rest.call(null,s__10940__$2)));
} else {
var G__10959 = cljs.core.rest.call(null,s__10940__$2);
s__10940__$1 = G__10959;
continue;
}
} else {
var G__10960 = cljs.core.rest.call(null,s__10940__$2);
s__10940__$1 = G__10960;
continue;
}
} else {
var G__10961 = cljs.core.rest.call(null,s__10940__$2);
s__10940__$1 = G__10961;
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
return iter__7031__auto__.call(null,input_schema);
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
var ufv___11008 = schema.utils.use_fn_validation;
var output_schema10962_11009 = schema.core.Any;
var input_schema10963_11010 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker10964_11011 = schema.core.checker.call(null,input_schema10963_11010);
var output_checker10965_11012 = schema.core.checker.call(null,output_schema10962_11009);
/**
 * Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
 * 
 *   Given pairs of input and output schemata for fnks f1 and f2,
 * return a pair of input and output schemata for #(f2 (merge % (f1 %))).
 * f1's output schema must not contain any optional keys.
 */
plumbing.fnk.schema.compose_schemata = ((function (ufv___11008,output_schema10962_11009,input_schema10963_11010,input_checker10964_11011,output_checker10965_11012){
return (function plumbing$fnk$schema$compose_schemata(G__10966,G__10967){
var validate__7824__auto__ = true;
if(validate__7824__auto__){
var args__7825__auto___11013 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__10966,G__10967], null);
var temp__4657__auto___11014 = input_checker10964_11011.call(null,args__7825__auto___11013);
if(cljs.core.truth_(temp__4657__auto___11014)){
var error__7826__auto___11015 = temp__4657__auto___11014;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"always-validate","always-validate",1031872127),true,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given pairs of input and output schemata for fnks f1 and f2,\n   return a pair of input and output schemata for #(f2 (merge % (f1 %))).\n   f1's output schema must not contain any optional keys."], null)),cljs.core.pr_str.call(null,error__7826__auto___11015)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema10963_11010,new cljs.core.Keyword(null,"value","value",305978217),args__7825__auto___11013,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___11015], null));
} else {
}
} else {
}

var o__7827__auto__ = (function (){var G__10994 = G__10966;
var vec__10996 = G__10994;
var i2 = cljs.core.nth.call(null,vec__10996,(0),null);
var o2 = cljs.core.nth.call(null,vec__10996,(1),null);
var G__10995 = G__10967;
var vec__10999 = G__10995;
var i1 = cljs.core.nth.call(null,vec__10999,(0),null);
var o1 = cljs.core.nth.call(null,vec__10999,(1),null);
var G__10994__$1 = G__10994;
var G__10995__$1 = G__10995;
while(true){
var vec__11002 = G__10994__$1;
var i2__$1 = cljs.core.nth.call(null,vec__11002,(0),null);
var o2__$1 = cljs.core.nth.call(null,vec__11002,(1),null);
var vec__11005 = G__10995__$1;
var i1__$1 = cljs.core.nth.call(null,vec__11005,(0),null);
var o1__$1 = cljs.core.nth.call(null,vec__11005,(1),null);
plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();
if(validate__7824__auto__){
var temp__4657__auto___11016 = output_checker10965_11012.call(null,o__7827__auto__);
if(cljs.core.truth_(temp__4657__auto___11016)){
var error__7826__auto___11017 = temp__4657__auto___11016;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"always-validate","always-validate",1031872127),true,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given pairs of input and output schemata for fnks f1 and f2,\n   return a pair of input and output schemata for #(f2 (merge % (f1 %))).\n   f1's output schema must not contain any optional keys."], null)),cljs.core.pr_str.call(null,error__7826__auto___11017)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema10962_11009,new cljs.core.Keyword(null,"value","value",305978217),o__7827__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___11017], null));
} else {
}
} else {
}

return o__7827__auto__;
});})(ufv___11008,output_schema10962_11009,input_schema10963_11010,input_checker10964_11011,output_checker10965_11012))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema10962_11009,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema10963_11010], null)));
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
var ufv___11160 = schema.utils.use_fn_validation;
var output_schema11018_11161 = schema.core.Any;
var input_schema11019_11162 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null)], null))),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),cljs.core.with_meta(new cljs.core.Symbol(null,"ks","ks",-754231827,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null)], null)))], null);
var input_checker11020_11163 = schema.core.checker.call(null,input_schema11019_11162);
var output_checker11021_11164 = schema.core.checker.call(null,output_schema11018_11161);
/**
 * Inputs: [s :- InputSchema ks :- [s/Keyword]]
 * 
 *   Return a pair [ks-part non-ks-part], with any extra schema removed.
 */
plumbing.fnk.schema.split_schema = ((function (ufv___11160,output_schema11018_11161,input_schema11019_11162,input_checker11020_11163,output_checker11021_11164){
return (function plumbing$fnk$schema$split_schema(G__11022,G__11023){
var validate__7824__auto__ = ufv___11160.get_cell();
if(cljs.core.truth_(validate__7824__auto__)){
var args__7825__auto___11165 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__11022,G__11023], null);
var temp__4657__auto___11166 = input_checker11020_11163.call(null,args__7825__auto___11165);
if(cljs.core.truth_(temp__4657__auto___11166)){
var error__7826__auto___11167 = temp__4657__auto___11166;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return a pair [ks-part non-ks-part], with any extra schema removed."], null)),cljs.core.pr_str.call(null,error__7826__auto___11167)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema11019_11162,new cljs.core.Keyword(null,"value","value",305978217),args__7825__auto___11165,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___11167], null));
} else {
}
} else {
}

var o__7827__auto__ = (function (){var s = G__11022;
var ks = G__11023;
while(true){
var ks__$1 = cljs.core.set.call(null,ks);
var iter__7031__auto__ = ((function (ks__$1,validate__7824__auto__,ufv___11160,output_schema11018_11161,input_schema11019_11162,input_checker11020_11163,output_checker11021_11164){
return (function plumbing$fnk$schema$split_schema_$_iter__11092(s__11093){
return (new cljs.core.LazySeq(null,((function (ks__$1,validate__7824__auto__,ufv___11160,output_schema11018_11161,input_schema11019_11162,input_checker11020_11163,output_checker11021_11164){
return (function (){
var s__11093__$1 = s__11093;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__11093__$1);
if(temp__4657__auto__){
var s__11093__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11093__$2)){
var c__7029__auto__ = cljs.core.chunk_first.call(null,s__11093__$2);
var size__7030__auto__ = cljs.core.count.call(null,c__7029__auto__);
var b__11095 = cljs.core.chunk_buffer.call(null,size__7030__auto__);
if((function (){var i__11094 = (0);
while(true){
if((i__11094 < size__7030__auto__)){
var in_QMARK_ = cljs.core._nth.call(null,c__7029__auto__,i__11094);
cljs.core.chunk_append.call(null,b__11095,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7031__auto__ = ((function (i__11094,in_QMARK_,c__7029__auto__,size__7030__auto__,b__11095,s__11093__$2,temp__4657__auto__,ks__$1,validate__7824__auto__,ufv___11160,output_schema11018_11161,input_schema11019_11162,input_checker11020_11163,output_checker11021_11164){
return (function plumbing$fnk$schema$split_schema_$_iter__11092_$_iter__11128(s__11129){
return (new cljs.core.LazySeq(null,((function (i__11094,in_QMARK_,c__7029__auto__,size__7030__auto__,b__11095,s__11093__$2,temp__4657__auto__,ks__$1,validate__7824__auto__,ufv___11160,output_schema11018_11161,input_schema11019_11162,input_checker11020_11163,output_checker11021_11164){
return (function (){
var s__11129__$1 = s__11129;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__11129__$1);
if(temp__4657__auto____$1){
var s__11129__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11129__$2)){
var c__7029__auto____$1 = cljs.core.chunk_first.call(null,s__11129__$2);
var size__7030__auto____$1 = cljs.core.count.call(null,c__7029__auto____$1);
var b__11131 = cljs.core.chunk_buffer.call(null,size__7030__auto____$1);
if((function (){var i__11130 = (0);
while(true){
if((i__11130 < size__7030__auto____$1)){
var vec__11138 = cljs.core._nth.call(null,c__7029__auto____$1,i__11130);
var k = cljs.core.nth.call(null,vec__11138,(0),null);
var v = cljs.core.nth.call(null,vec__11138,(1),null);
if(cljs.core.truth_((function (){var and__6239__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__6239__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__6239__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__11131,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__11168 = (i__11130 + (1));
i__11130 = G__11168;
continue;
} else {
var G__11169 = (i__11130 + (1));
i__11130 = G__11169;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11131),plumbing$fnk$schema$split_schema_$_iter__11092_$_iter__11128.call(null,cljs.core.chunk_rest.call(null,s__11129__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11131),null);
}
} else {
var vec__11141 = cljs.core.first.call(null,s__11129__$2);
var k = cljs.core.nth.call(null,vec__11141,(0),null);
var v = cljs.core.nth.call(null,vec__11141,(1),null);
if(cljs.core.truth_((function (){var and__6239__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__6239__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__6239__auto__;
}
})())){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$fnk$schema$split_schema_$_iter__11092_$_iter__11128.call(null,cljs.core.rest.call(null,s__11129__$2)));
} else {
var G__11170 = cljs.core.rest.call(null,s__11129__$2);
s__11129__$1 = G__11170;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__11094,in_QMARK_,c__7029__auto__,size__7030__auto__,b__11095,s__11093__$2,temp__4657__auto__,ks__$1,validate__7824__auto__,ufv___11160,output_schema11018_11161,input_schema11019_11162,input_checker11020_11163,output_checker11021_11164))
,null,null));
});})(i__11094,in_QMARK_,c__7029__auto__,size__7030__auto__,b__11095,s__11093__$2,temp__4657__auto__,ks__$1,validate__7824__auto__,ufv___11160,output_schema11018_11161,input_schema11019_11162,input_checker11020_11163,output_checker11021_11164))
;
return iter__7031__auto__.call(null,s);
})()));

var G__11171 = (i__11094 + (1));
i__11094 = G__11171;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11095),plumbing$fnk$schema$split_schema_$_iter__11092.call(null,cljs.core.chunk_rest.call(null,s__11093__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11095),null);
}
} else {
var in_QMARK_ = cljs.core.first.call(null,s__11093__$2);
return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7031__auto__ = ((function (in_QMARK_,s__11093__$2,temp__4657__auto__,ks__$1,validate__7824__auto__,ufv___11160,output_schema11018_11161,input_schema11019_11162,input_checker11020_11163,output_checker11021_11164){
return (function plumbing$fnk$schema$split_schema_$_iter__11092_$_iter__11144(s__11145){
return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__11093__$2,temp__4657__auto__,ks__$1,validate__7824__auto__,ufv___11160,output_schema11018_11161,input_schema11019_11162,input_checker11020_11163,output_checker11021_11164){
return (function (){
var s__11145__$1 = s__11145;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__11145__$1);
if(temp__4657__auto____$1){
var s__11145__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11145__$2)){
var c__7029__auto__ = cljs.core.chunk_first.call(null,s__11145__$2);
var size__7030__auto__ = cljs.core.count.call(null,c__7029__auto__);
var b__11147 = cljs.core.chunk_buffer.call(null,size__7030__auto__);
if((function (){var i__11146 = (0);
while(true){
if((i__11146 < size__7030__auto__)){
var vec__11154 = cljs.core._nth.call(null,c__7029__auto__,i__11146);
var k = cljs.core.nth.call(null,vec__11154,(0),null);
var v = cljs.core.nth.call(null,vec__11154,(1),null);
if(cljs.core.truth_((function (){var and__6239__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__6239__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__6239__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__11147,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__11172 = (i__11146 + (1));
i__11146 = G__11172;
continue;
} else {
var G__11173 = (i__11146 + (1));
i__11146 = G__11173;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11147),plumbing$fnk$schema$split_schema_$_iter__11092_$_iter__11144.call(null,cljs.core.chunk_rest.call(null,s__11145__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11147),null);
}
} else {
var vec__11157 = cljs.core.first.call(null,s__11145__$2);
var k = cljs.core.nth.call(null,vec__11157,(0),null);
var v = cljs.core.nth.call(null,vec__11157,(1),null);
if(cljs.core.truth_((function (){var and__6239__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__6239__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__6239__auto__;
}
})())){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$fnk$schema$split_schema_$_iter__11092_$_iter__11144.call(null,cljs.core.rest.call(null,s__11145__$2)));
} else {
var G__11174 = cljs.core.rest.call(null,s__11145__$2);
s__11145__$1 = G__11174;
continue;
}
}
} else {
return null;
}
break;
}
});})(in_QMARK_,s__11093__$2,temp__4657__auto__,ks__$1,validate__7824__auto__,ufv___11160,output_schema11018_11161,input_schema11019_11162,input_checker11020_11163,output_checker11021_11164))
,null,null));
});})(in_QMARK_,s__11093__$2,temp__4657__auto__,ks__$1,validate__7824__auto__,ufv___11160,output_schema11018_11161,input_schema11019_11162,input_checker11020_11163,output_checker11021_11164))
;
return iter__7031__auto__.call(null,s);
})()),plumbing$fnk$schema$split_schema_$_iter__11092.call(null,cljs.core.rest.call(null,s__11093__$2)));
}
} else {
return null;
}
break;
}
});})(ks__$1,validate__7824__auto__,ufv___11160,output_schema11018_11161,input_schema11019_11162,input_checker11020_11163,output_checker11021_11164))
,null,null));
});})(ks__$1,validate__7824__auto__,ufv___11160,output_schema11018_11161,input_schema11019_11162,input_checker11020_11163,output_checker11021_11164))
;
return iter__7031__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();
if(cljs.core.truth_(validate__7824__auto__)){
var temp__4657__auto___11175 = output_checker11021_11164.call(null,o__7827__auto__);
if(cljs.core.truth_(temp__4657__auto___11175)){
var error__7826__auto___11176 = temp__4657__auto___11175;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return a pair [ks-part non-ks-part], with any extra schema removed."], null)),cljs.core.pr_str.call(null,error__7826__auto___11176)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema11018_11161,new cljs.core.Keyword(null,"value","value",305978217),o__7827__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___11176], null));
} else {
}
} else {
}

return o__7827__auto__;
});})(ufv___11160,output_schema11018_11161,input_schema11019_11162,input_checker11020_11163,output_checker11021_11164))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema11018_11161,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema11019_11162], null)));
var ufv___11247 = schema.utils.use_fn_validation;
var output_schema11177_11248 = plumbing.fnk.schema.GraphIOSchemata;
var input_schema11178_11249 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker11179_11250 = schema.core.checker.call(null,input_schema11178_11249);
var output_checker11180_11251 = schema.core.checker.call(null,output_schema11177_11248);
/**
 * Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
 *   Returns: GraphIOSchemata
 * 
 *   Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
 * return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
 */
plumbing.fnk.schema.sequence_schemata = ((function (ufv___11247,output_schema11177_11248,input_schema11178_11249,input_checker11179_11250,output_checker11180_11251){
return (function plumbing$fnk$schema$sequence_schemata(G__11181,G__11182){
var validate__7824__auto__ = ufv___11247.get_cell();
if(cljs.core.truth_(validate__7824__auto__)){
var args__7825__auto___11252 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__11181,G__11182], null);
var temp__4657__auto___11253 = input_checker11179_11250.call(null,args__7825__auto___11252);
if(cljs.core.truth_(temp__4657__auto___11253)){
var error__7826__auto___11254 = temp__4657__auto___11253;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"GraphIOSchemata","GraphIOSchemata",-2137701253,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,\n   return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))"], null)),cljs.core.pr_str.call(null,error__7826__auto___11254)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema11178_11249,new cljs.core.Keyword(null,"value","value",305978217),args__7825__auto___11252,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___11254], null));
} else {
}
} else {
}

var o__7827__auto__ = (function (){var G__11224 = G__11181;
var vec__11226 = G__11224;
var i1 = cljs.core.nth.call(null,vec__11226,(0),null);
var o1 = cljs.core.nth.call(null,vec__11226,(1),null);
var G__11225 = G__11182;
var vec__11229 = G__11225;
var k = cljs.core.nth.call(null,vec__11229,(0),null);
var vec__11232 = cljs.core.nth.call(null,vec__11229,(1),null);
var i2 = cljs.core.nth.call(null,vec__11232,(0),null);
var o2 = cljs.core.nth.call(null,vec__11232,(1),null);
var G__11224__$1 = G__11224;
var G__11225__$1 = G__11225;
while(true){
var vec__11235 = G__11224__$1;
var i1__$1 = cljs.core.nth.call(null,vec__11235,(0),null);
var o1__$1 = cljs.core.nth.call(null,vec__11235,(1),null);
var vec__11238 = G__11225__$1;
var k__$1 = cljs.core.nth.call(null,vec__11238,(0),null);
var vec__11241 = cljs.core.nth.call(null,vec__11238,(1),null);
var i2__$1 = cljs.core.nth.call(null,vec__11241,(0),null);
var o2__$1 = cljs.core.nth.call(null,vec__11241,(1),null);
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

var vec__11244 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));
var used = cljs.core.nth.call(null,vec__11244,(0),null);
var unused = cljs.core.nth.call(null,vec__11244,(1),null);
plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();
if(cljs.core.truth_(validate__7824__auto__)){
var temp__4657__auto___11255 = output_checker11180_11251.call(null,o__7827__auto__);
if(cljs.core.truth_(temp__4657__auto___11255)){
var error__7826__auto___11256 = temp__4657__auto___11255;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"GraphIOSchemata","GraphIOSchemata",-2137701253,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,\n   return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))"], null)),cljs.core.pr_str.call(null,error__7826__auto___11256)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema11177_11248,new cljs.core.Keyword(null,"value","value",305978217),o__7827__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___11256], null));
} else {
}
} else {
}

return o__7827__auto__;
});})(ufv___11247,output_schema11177_11248,input_schema11178_11249,input_checker11179_11250,output_checker11180_11251))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema11177_11248,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema11178_11249], null)));

//# sourceMappingURL=schema.js.map?rel=1486035191958