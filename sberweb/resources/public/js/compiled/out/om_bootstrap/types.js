// Compiled by ClojureScript 1.9.89 {}
goog.provide('om_bootstrap.types');
goog.require('cljs.core');
goog.require('schema.core');
var ufv___21763 = schema.utils.use_fn_validation;
var output_schema21758_21764 = schema.core.Any;
var input_schema21759_21765 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)))], null);
var input_checker21760_21766 = schema.core.checker.call(null,input_schema21759_21765);
var output_checker21761_21767 = schema.core.checker.call(null,output_schema21758_21764);
/**
 * Inputs: [schema :- {s/Any s/Any}]
 * 
 *   Returns all keys from a schema.
 */
om_bootstrap.types.schema_keys = ((function (ufv___21763,output_schema21758_21764,input_schema21759_21765,input_checker21760_21766,output_checker21761_21767){
return (function om_bootstrap$types$schema_keys(G__21762){
var validate__7824__auto__ = ufv___21763.get_cell();
if(cljs.core.truth_(validate__7824__auto__)){
var args__7825__auto___21768 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21762], null);
var temp__4657__auto___21769 = input_checker21760_21766.call(null,args__7825__auto___21768);
if(cljs.core.truth_(temp__4657__auto___21769)){
var error__7826__auto___21770 = temp__4657__auto___21769;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"schema-keys","schema-keys",947810359,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns all keys from a schema."], null)),cljs.core.pr_str.call(null,error__7826__auto___21770)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21759_21765,new cljs.core.Keyword(null,"value","value",305978217),args__7825__auto___21768,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___21770], null));
} else {
}
} else {
}

var o__7827__auto__ = (function (){var schema__$1 = G__21762;
while(true){
return cljs.core.map.call(null,((function (validate__7824__auto__,ufv___21763,output_schema21758_21764,input_schema21759_21765,input_checker21760_21766,output_checker21761_21767){
return (function (k){
if(cljs.core.truth_(schema.core.optional_key_QMARK_.call(null,k))){
return new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(k);
} else {
return k;
}
});})(validate__7824__auto__,ufv___21763,output_schema21758_21764,input_schema21759_21765,input_checker21760_21766,output_checker21761_21767))
,cljs.core.keys.call(null,schema__$1));
break;
}
})();
if(cljs.core.truth_(validate__7824__auto__)){
var temp__4657__auto___21771 = output_checker21761_21767.call(null,o__7827__auto__);
if(cljs.core.truth_(temp__4657__auto___21771)){
var error__7826__auto___21772 = temp__4657__auto___21771;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"schema-keys","schema-keys",947810359,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns all keys from a schema."], null)),cljs.core.pr_str.call(null,error__7826__auto___21772)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21758_21764,new cljs.core.Keyword(null,"value","value",305978217),o__7827__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___21772], null));
} else {
}
} else {
}

return o__7827__auto__;
});})(ufv___21763,output_schema21758_21764,input_schema21759_21765,input_checker21760_21766,output_checker21761_21767))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.schema_keys),schema.core.make_fn_schema.call(null,output_schema21758_21764,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21759_21765], null)));
var ufv___21778 = schema.utils.use_fn_validation;
var output_schema21773_21779 = schema.core.Any;
var input_schema21774_21780 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker21775_21781 = schema.core.checker.call(null,input_schema21774_21780);
var output_checker21776_21782 = schema.core.checker.call(null,output_schema21773_21779);
/**
 * Inputs: [schema]
 * 
 *   Returns a map schema that accepts the supplied map schema, plus any
 *   other optional keys that show up in the map. Such a schema can only
 *   enforce that required keys are missing.
 */
om_bootstrap.types.at_least = ((function (ufv___21778,output_schema21773_21779,input_schema21774_21780,input_checker21775_21781,output_checker21776_21782){
return (function om_bootstrap$types$at_least(G__21777){
var validate__7824__auto__ = ufv___21778.get_cell();
if(cljs.core.truth_(validate__7824__auto__)){
var args__7825__auto___21783 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21777], null);
var temp__4657__auto___21784 = input_checker21775_21781.call(null,args__7825__auto___21783);
if(cljs.core.truth_(temp__4657__auto___21784)){
var error__7826__auto___21785 = temp__4657__auto___21784;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"at-least","at-least",1907728373,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a map schema that accepts the supplied map schema, plus any\n  other optional keys that show up in the map. Such a schema can only\n  enforce that required keys are missing."], null)),cljs.core.pr_str.call(null,error__7826__auto___21785)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21774_21780,new cljs.core.Keyword(null,"value","value",305978217),args__7825__auto___21783,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___21785], null));
} else {
}
} else {
}

var o__7827__auto__ = (function (){var schema__$1 = G__21777;
while(true){
return cljs.core.assoc.call(null,schema__$1,schema.core.Any,schema.core.Any);
break;
}
})();
if(cljs.core.truth_(validate__7824__auto__)){
var temp__4657__auto___21786 = output_checker21776_21782.call(null,o__7827__auto__);
if(cljs.core.truth_(temp__4657__auto___21786)){
var error__7826__auto___21787 = temp__4657__auto___21786;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"at-least","at-least",1907728373,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a map schema that accepts the supplied map schema, plus any\n  other optional keys that show up in the map. Such a schema can only\n  enforce that required keys are missing."], null)),cljs.core.pr_str.call(null,error__7826__auto___21787)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21773_21779,new cljs.core.Keyword(null,"value","value",305978217),o__7827__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___21787], null));
} else {
}
} else {
}

return o__7827__auto__;
});})(ufv___21778,output_schema21773_21779,input_schema21774_21780,input_checker21775_21781,output_checker21776_21782))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.at_least),schema.core.make_fn_schema.call(null,output_schema21773_21779,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21774_21780], null)));
om_bootstrap.types.Component = schema.core.named.call(null,schema.core.Any,"Alias for an om component, since I don't know what type to put here.");
om_bootstrap.types.Renderable = schema.core.named.call(null,schema.core.Any,"Anything that can get rendered.");
/**
 * Map of keyword to the proper bootstrap class name.
 */
om_bootstrap.types.class_map = cljs.core.PersistentHashMap.fromArrays(["alert","label","form","progress-bar","modal","navbar","button-toolbar","panel-group","nav","column","row","input-group","panel","well","button-group","button","glyphicon"],["alert","label","form","progress-bar","modal","navbar","btn-toolbar","panel-group","nav","col","row","input-group","panel","well","btn-group","btn","glyphicon"]);
/**
 * Map of style keywords -> styles.
 */
om_bootstrap.types.style_map = cljs.core.PersistentHashMap.fromArrays(["success","warning","inline","pills","info","tabs","primary","danger","link","default"],["success","warning","inline","pills","info","tabs","primary","danger","link","default"]);
om_bootstrap.types.size_map = new cljs.core.PersistentArrayMap(null, 4, ["large","lg","medium","md","small","sm","xsmall","xs"], null);
om_bootstrap.types.BSClass = cljs.core.apply.call(null,schema.core.enum$,cljs.core.keys.call(null,om_bootstrap.types.class_map));
om_bootstrap.types.BSStyle = cljs.core.apply.call(null,schema.core.enum$,cljs.core.keys.call(null,om_bootstrap.types.style_map));
om_bootstrap.types.BSSize = cljs.core.apply.call(null,schema.core.enum$,cljs.core.keys.call(null,om_bootstrap.types.size_map));
om_bootstrap.types.BootstrapClass = cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590)),om_bootstrap.types.BSClass,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998)),om_bootstrap.types.BSStyle,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"bs-size","bs-size",1567732754)),om_bootstrap.types.BSSize], true, false);
/**
 * Applies all default bootstrap options to the supplied schema. If
 *   the incoming schema has one of the the keys from BootstrapClass,
 *   that wins (even if it's required).
 */
om_bootstrap.types.bootstrap = (function om_bootstrap$types$bootstrap(schema__$1){
var bootstrap_schema = cljs.core.apply.call(null,cljs.core.dissoc,om_bootstrap.types.BootstrapClass,cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,cljs.core.select_keys.call(null,schema__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),new cljs.core.Keyword(null,"bs-size","bs-size",1567732754)], null)))));
return om_bootstrap.types.at_least.call(null,cljs.core.merge.call(null,bootstrap_schema,schema__$1));
});
var ufv___21803 = schema.utils.use_fn_validation;
var output_schema21788_21804 = schema.core.pair.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),"om-bootstrap options.",cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),"all other props.");
var input_schema21789_21805 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_schema21794_21806 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"defaults","defaults",-1678408555,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker21790_21807 = schema.core.checker.call(null,input_schema21789_21805);
var output_checker21791_21808 = schema.core.checker.call(null,output_schema21788_21804);
var input_checker21795_21809 = schema.core.checker.call(null,input_schema21794_21806);
var output_checker21796_21810 = schema.core.checker.call(null,output_schema21788_21804);
/**
 * Inputs: ([schema opts] [schema opts defaults])
 *   Returns: (s/pair {s/Any s/Any} "om-bootstrap options." {s/Any s/Any} "all other props.")
 * 
 *   Returns two maps; the first is all of the schema options, the
 *   second is the REST of the options.
 */
om_bootstrap.types.separate = ((function (ufv___21803,output_schema21788_21804,input_schema21789_21805,input_schema21794_21806,input_checker21790_21807,output_checker21791_21808,input_checker21795_21809,output_checker21796_21810){
return (function om_bootstrap$types$separate(var_args){
var args21800 = [];
var len__7326__auto___21811 = arguments.length;
var i__7327__auto___21812 = (0);
while(true){
if((i__7327__auto___21812 < len__7326__auto___21811)){
args21800.push((arguments[i__7327__auto___21812]));

var G__21813 = (i__7327__auto___21812 + (1));
i__7327__auto___21812 = G__21813;
continue;
} else {
}
break;
}

var G__21802 = args21800.length;
switch (G__21802) {
case 2:
return om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21800.length)].join('')));

}
});})(ufv___21803,output_schema21788_21804,input_schema21789_21805,input_schema21794_21806,input_checker21790_21807,output_checker21791_21808,input_checker21795_21809,output_checker21796_21810))
;

om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$2 = ((function (ufv___21803,output_schema21788_21804,input_schema21789_21805,input_schema21794_21806,input_checker21790_21807,output_checker21791_21808,input_checker21795_21809,output_checker21796_21810){
return (function (G__21792,G__21793){
var validate__7824__auto__ = ufv___21803.get_cell();
if(cljs.core.truth_(validate__7824__auto__)){
var args__7825__auto___21815 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21792,G__21793], null);
var temp__4657__auto___21816 = input_checker21790_21807.call(null,args__7825__auto___21815);
if(cljs.core.truth_(temp__4657__auto___21816)){
var error__7826__auto___21817 = temp__4657__auto___21816;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"separate","separate",15703118,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"om-bootstrap options.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"all other props."),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns two maps; the first is all of the schema options, the\n  second is the REST of the options."], null)),cljs.core.pr_str.call(null,error__7826__auto___21817)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21789_21805,new cljs.core.Keyword(null,"value","value",305978217),args__7825__auto___21815,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___21817], null));
} else {
}
} else {
}

var o__7827__auto__ = (function (){var schema__$1 = G__21792;
var opts = G__21793;
while(true){
return om_bootstrap.types.separate.call(null,schema__$1,opts,cljs.core.PersistentArrayMap.EMPTY);
break;
}
})();
if(cljs.core.truth_(validate__7824__auto__)){
var temp__4657__auto___21818 = output_checker21791_21808.call(null,o__7827__auto__);
if(cljs.core.truth_(temp__4657__auto___21818)){
var error__7826__auto___21819 = temp__4657__auto___21818;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"separate","separate",15703118,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"om-bootstrap options.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"all other props."),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns two maps; the first is all of the schema options, the\n  second is the REST of the options."], null)),cljs.core.pr_str.call(null,error__7826__auto___21819)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21788_21804,new cljs.core.Keyword(null,"value","value",305978217),o__7827__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___21819], null));
} else {
}
} else {
}

return o__7827__auto__;
});})(ufv___21803,output_schema21788_21804,input_schema21789_21805,input_schema21794_21806,input_checker21790_21807,output_checker21791_21808,input_checker21795_21809,output_checker21796_21810))
;

om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3 = ((function (ufv___21803,output_schema21788_21804,input_schema21789_21805,input_schema21794_21806,input_checker21790_21807,output_checker21791_21808,input_checker21795_21809,output_checker21796_21810){
return (function (G__21797,G__21798,G__21799){
var validate__7824__auto__ = ufv___21803.get_cell();
if(cljs.core.truth_(validate__7824__auto__)){
var args__7825__auto___21820 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21797,G__21798,G__21799], null);
var temp__4657__auto___21821 = input_checker21795_21809.call(null,args__7825__auto___21820);
if(cljs.core.truth_(temp__4657__auto___21821)){
var error__7826__auto___21822 = temp__4657__auto___21821;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"separate","separate",15703118,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"om-bootstrap options.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"all other props."),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns two maps; the first is all of the schema options, the\n  second is the REST of the options."], null)),cljs.core.pr_str.call(null,error__7826__auto___21822)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21794_21806,new cljs.core.Keyword(null,"value","value",305978217),args__7825__auto___21820,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___21822], null));
} else {
}
} else {
}

var o__7827__auto__ = (function (){var schema__$1 = G__21797;
var opts = G__21798;
var defaults = G__21799;
while(true){
var ks = cljs.core.set.call(null,om_bootstrap.types.schema_keys.call(null,om_bootstrap.types.bootstrap.call(null,schema__$1)));
var opts__$1 = cljs.core.merge.call(null,defaults,opts);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.comp.call(null,ks,cljs.core.key),opts__$1)),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,cljs.core.comp.call(null,ks,cljs.core.key),opts__$1))], null);
break;
}
})();
if(cljs.core.truth_(validate__7824__auto__)){
var temp__4657__auto___21823 = output_checker21796_21810.call(null,o__7827__auto__);
if(cljs.core.truth_(temp__4657__auto___21823)){
var error__7826__auto___21824 = temp__4657__auto___21823;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"separate","separate",15703118,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"om-bootstrap options.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),"all other props."),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns two maps; the first is all of the schema options, the\n  second is the REST of the options."], null)),cljs.core.pr_str.call(null,error__7826__auto___21824)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21788_21804,new cljs.core.Keyword(null,"value","value",305978217),o__7827__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___21824], null));
} else {
}
} else {
}

return o__7827__auto__;
});})(ufv___21803,output_schema21788_21804,input_schema21789_21805,input_schema21794_21806,input_checker21790_21807,output_checker21791_21808,input_checker21795_21809,output_checker21796_21810))
;

om_bootstrap.types.separate.cljs$lang$maxFixedArity = 3;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.separate),schema.core.make_fn_schema.call(null,output_schema21788_21804,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21789_21805,input_schema21794_21806], null)));
var ufv___21842 = schema.utils.use_fn_validation;
var output_schema21825_21843 = cljs.core.PersistentArrayMap.fromArray([schema.core.Str,schema.core.Bool], true, false);
var input_schema21826_21844 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.types.at_least.call(null,om_bootstrap.types.BootstrapClass),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);
var input_checker21827_21845 = schema.core.checker.call(null,input_schema21826_21844);
var output_checker21828_21846 = schema.core.checker.call(null,output_schema21825_21843);
/**
 * Inputs: [{:keys [bs-class bs-style bs-size]} :- (at-least BootstrapClass)]
 *   Returns: {s/Str s/Bool}
 * 
 *   Returns input for class-set.
 */
om_bootstrap.types.bs_class_set = ((function (ufv___21842,output_schema21825_21843,input_schema21826_21844,input_checker21827_21845,output_checker21828_21846){
return (function om_bootstrap$types$bs_class_set(G__21829){
var validate__7824__auto__ = ufv___21842.get_cell();
if(cljs.core.truth_(validate__7824__auto__)){
var args__7825__auto___21847 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21829], null);
var temp__4657__auto___21848 = input_checker21827_21845.call(null,args__7825__auto___21847);
if(cljs.core.truth_(temp__4657__auto___21848)){
var error__7826__auto___21849 = temp__4657__auto___21848;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"bs-class-set","bs-class-set",1457832630,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns input for class-set."], null)),cljs.core.pr_str.call(null,error__7826__auto___21849)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21826_21844,new cljs.core.Keyword(null,"value","value",305978217),args__7825__auto___21847,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___21849], null));
} else {
}
} else {
}

var o__7827__auto__ = (function (){var G__21837 = G__21829;
var map__21838 = G__21837;
var map__21838__$1 = ((((!((map__21838 == null)))?((((map__21838.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21838.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21838):map__21838);
var bs_class = cljs.core.get.call(null,map__21838__$1,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590));
var bs_style = cljs.core.get.call(null,map__21838__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));
var bs_size = cljs.core.get.call(null,map__21838__$1,new cljs.core.Keyword(null,"bs-size","bs-size",1567732754));
var G__21837__$1 = G__21837;
while(true){
var map__21840 = G__21837__$1;
var map__21840__$1 = ((((!((map__21840 == null)))?((((map__21840.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21840.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21840):map__21840);
var bs_class__$1 = cljs.core.get.call(null,map__21840__$1,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590));
var bs_style__$1 = cljs.core.get.call(null,map__21840__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));
var bs_size__$1 = cljs.core.get.call(null,map__21840__$1,new cljs.core.Keyword(null,"bs-size","bs-size",1567732754));
var temp__4655__auto__ = om_bootstrap.types.class_map.call(null,bs_class__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var klass = temp__4655__auto__;
var prefix = [cljs.core.str(cljs.core.name.call(null,klass)),cljs.core.str("-")].join('');
return cljs.core.merge.call(null,cljs.core.PersistentArrayMap.fromArray([klass,true], true, false),(function (){var temp__4657__auto__ = om_bootstrap.types.size_map.call(null,bs_size__$1);
if(cljs.core.truth_(temp__4657__auto__)){
var size = temp__4657__auto__;
return cljs.core.PersistentArrayMap.fromArray([[cljs.core.str(prefix),cljs.core.str(cljs.core.name.call(null,size))].join(''),true], true, false);
} else {
return null;
}
})(),(function (){var temp__4657__auto__ = om_bootstrap.types.style_map.call(null,bs_style__$1);
if(cljs.core.truth_(temp__4657__auto__)){
var style = temp__4657__auto__;
return cljs.core.PersistentArrayMap.fromArray([[cljs.core.str(prefix),cljs.core.str(cljs.core.name.call(null,style))].join(''),true], true, false);
} else {
return null;
}
})());
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
break;
}
})();
if(cljs.core.truth_(validate__7824__auto__)){
var temp__4657__auto___21850 = output_checker21828_21846.call(null,o__7827__auto__);
if(cljs.core.truth_(temp__4657__auto___21850)){
var error__7826__auto___21851 = temp__4657__auto___21850;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"bs-class-set","bs-class-set",1457832630,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns input for class-set."], null)),cljs.core.pr_str.call(null,error__7826__auto___21851)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21825_21843,new cljs.core.Keyword(null,"value","value",305978217),o__7827__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___21851], null));
} else {
}
} else {
}

return o__7827__auto__;
});})(ufv___21842,output_schema21825_21843,input_schema21826_21844,input_checker21827_21845,output_checker21828_21846))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.bs_class_set),schema.core.make_fn_schema.call(null,output_schema21825_21843,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21826_21844], null)));

//# sourceMappingURL=types.js.map?rel=1486035196328