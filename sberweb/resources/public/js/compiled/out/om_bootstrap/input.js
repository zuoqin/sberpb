// Compiled by ClojureScript 1.9.89 {}
goog.provide('om_bootstrap.input');
goog.require('cljs.core');
goog.require('om_bootstrap.types');
goog.require('schema.core');
goog.require('om_bootstrap.util');
goog.require('om_tools.dom');
goog.require('clojure.string');
goog.require('om.core');
om_bootstrap.input.Addons = cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"addon-before","addon-before",-500360384)),schema.core.either.call(null,schema.core.Str,om_bootstrap.types.Component),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"addon-after","addon-after",634985306)),schema.core.either.call(null,schema.core.Str,om_bootstrap.types.Component),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"addon-button","addon-button",136745317)),schema.core.either.call(null,schema.core.Str,om_bootstrap.types.Component),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"addon-button-before","addon-button-before",-143956251)),schema.core.either.call(null,schema.core.Str,om_bootstrap.types.Component),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"addon-button-after","addon-button-after",-1815680807)),schema.core.either.call(null,schema.core.Str,om_bootstrap.types.Component)], true, false);
/**
 * Helps render feedback icons.
 */
om_bootstrap.input.FeedbackIcons = cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998)),schema.core.enum$.call(null,"success","warning","error"),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821)),schema.core.Bool], true, false);
/**
 * Input fields that match these bad dawgs:
 *   https://github.com/react-bootstrap/react-bootstrap/blob/master/src/Input.jsx
 */
om_bootstrap.input.Input = om_bootstrap.types.bootstrap.call(null,cljs.core.merge.call(null,om_bootstrap.input.Addons,om_bootstrap.input.FeedbackIcons,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"type","type",1174270348)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"label","label",1718410804)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"skip-form-group?","skip-form-group?",210862261)),schema.core.named.call(null,schema.core.Bool,"DON'T render a wrapping form group?"),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"help","help",-439233446)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"group-classname","group-classname",-610987816)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"wrapper-classname","wrapper-classname",1629533866)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"label-classname","label-classname",-1752600212)),schema.core.Str], true, false)));
om_bootstrap.input.Radio = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"checked?","checked?",2024809091)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"inline?","inline?",-1674483791)),schema.core.Bool], true, false));
var ufv___23480 = schema.utils.use_fn_validation;
var output_schema23467_23481 = schema.core.Str;
var input_schema23468_23482 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.Str,schema.core.Keyword),schema.core.Bool], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"klasses","klasses",-380235757,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.PersistentArrayMap.fromArray([cljs.core.list(new cljs.core.Symbol("s","either","s/either",-2144372885,null),new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], true, false)], null)))], null);
var input_checker23469_23483 = schema.core.checker.call(null,input_schema23468_23482);
var output_checker23470_23484 = schema.core.checker.call(null,output_schema23467_23481);
/**
 * Inputs: [klasses :- {(s/either s/Str s/Keyword) s/Bool}]
 *   Returns: s/Str
 * 
 *   Mimics the class-set behavior from React. Pass in a map of
 *   potential class to Boolean; you'll get back a class string that
 *   represents the final class to apply.
 * 
 *   TODO: Use class-set from om-tools.
 */
om_bootstrap.input.class_set = ((function (ufv___23480,output_schema23467_23481,input_schema23468_23482,input_checker23469_23483,output_checker23470_23484){
return (function om_bootstrap$input$class_set(G__23471){
var validate__7824__auto__ = ufv___23480.get_cell();
if(cljs.core.truth_(validate__7824__auto__)){
var args__7825__auto___23485 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23471], null);
var temp__4657__auto___23486 = input_checker23469_23483.call(null,args__7825__auto___23485);
if(cljs.core.truth_(temp__4657__auto___23486)){
var error__7826__auto___23487 = temp__4657__auto___23486;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"class-set","class-set",-355600496,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Mimics the class-set behavior from React. Pass in a map of\n  potential class to Boolean; you'll get back a class string that\n  represents the final class to apply.\n\n  TODO: Use class-set from om-tools."], null)),cljs.core.pr_str.call(null,error__7826__auto___23487)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23468_23482,new cljs.core.Keyword(null,"value","value",305978217),args__7825__auto___23485,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___23487], null));
} else {
}
} else {
}

var o__7827__auto__ = (function (){var klasses = G__23471;
while(true){
return clojure.string.join.call(null," ",cljs.core.mapcat.call(null,((function (validate__7824__auto__,ufv___23480,output_schema23467_23481,input_schema23468_23482,input_checker23469_23483,output_checker23470_23484){
return (function (p__23476){
var vec__23477 = p__23476;
var k = cljs.core.nth.call(null,vec__23477,(0),null);
var keep_QMARK_ = cljs.core.nth.call(null,vec__23477,(1),null);
if(cljs.core.truth_(keep_QMARK_)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k)], null);
} else {
return null;
}
});})(validate__7824__auto__,ufv___23480,output_schema23467_23481,input_schema23468_23482,input_checker23469_23483,output_checker23470_23484))
,klasses));
break;
}
})();
if(cljs.core.truth_(validate__7824__auto__)){
var temp__4657__auto___23488 = output_checker23470_23484.call(null,o__7827__auto__);
if(cljs.core.truth_(temp__4657__auto___23488)){
var error__7826__auto___23489 = temp__4657__auto___23488;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"class-set","class-set",-355600496,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Mimics the class-set behavior from React. Pass in a map of\n  potential class to Boolean; you'll get back a class string that\n  represents the final class to apply.\n\n  TODO: Use class-set from om-tools."], null)),cljs.core.pr_str.call(null,error__7826__auto___23489)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23467_23481,new cljs.core.Keyword(null,"value","value",305978217),o__7827__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___23489], null));
} else {
}
} else {
}

return o__7827__auto__;
});})(ufv___23480,output_schema23467_23481,input_schema23468_23482,input_checker23469_23483,output_checker23470_23484))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.class_set),schema.core.make_fn_schema.call(null,output_schema23467_23481,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23468_23482], null)));
var ufv___23495 = schema.utils.use_fn_validation;
var output_schema23490_23496 = om_bootstrap.types.Component;
var input_schema23491_23497 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Str,cljs.core.with_meta(new cljs.core.Symbol(null,"glyph-name","glyph-name",350405338,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null)], null)))], null);
var input_checker23492_23498 = schema.core.checker.call(null,input_schema23491_23497);
var output_checker23493_23499 = schema.core.checker.call(null,output_schema23490_23496);
/**
 * Inputs: [glyph-name :- s/Str]
 *   Returns: t/Component
 * 
 *   To be used with :addon-before or :addon-after.
 */
om_bootstrap.input.glyph = ((function (ufv___23495,output_schema23490_23496,input_schema23491_23497,input_checker23492_23498,output_checker23493_23499){
return (function om_bootstrap$input$glyph(G__23494){
var validate__7824__auto__ = ufv___23495.get_cell();
if(cljs.core.truth_(validate__7824__auto__)){
var args__7825__auto___23500 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23494], null);
var temp__4657__auto___23501 = input_checker23492_23498.call(null,args__7825__auto___23500);
if(cljs.core.truth_(temp__4657__auto___23501)){
var error__7826__auto___23502 = temp__4657__auto___23501;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"glyph","glyph",-534987652,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"To be used with :addon-before or :addon-after."], null)),cljs.core.pr_str.call(null,error__7826__auto___23502)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23491_23497,new cljs.core.Keyword(null,"value","value",305978217),args__7825__auto___23500,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___23502], null));
} else {
}
} else {
}

var o__7827__auto__ = (function (){var glyph_name = G__23494;
while(true){
return React.DOM.span({"className": om_tools.dom.format_opts.call(null,[cljs.core.str("glyphicon glyphicon-"),cljs.core.str(glyph_name)].join(''))});
break;
}
})();
if(cljs.core.truth_(validate__7824__auto__)){
var temp__4657__auto___23503 = output_checker23493_23499.call(null,o__7827__auto__);
if(cljs.core.truth_(temp__4657__auto___23503)){
var error__7826__auto___23504 = temp__4657__auto___23503;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"glyph","glyph",-534987652,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"To be used with :addon-before or :addon-after."], null)),cljs.core.pr_str.call(null,error__7826__auto___23504)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23490_23496,new cljs.core.Keyword(null,"value","value",305978217),o__7827__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___23504], null));
} else {
}
} else {
}

return o__7827__auto__;
});})(ufv___23495,output_schema23490_23496,input_schema23491_23497,input_checker23492_23498,output_checker23493_23499))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.glyph),schema.core.make_fn_schema.call(null,output_schema23490_23496,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23491_23497], null)));
var ufv___23522 = schema.utils.use_fn_validation;
var output_schema23505_23523 = om_bootstrap.types.Component;
var input_schema23506_23524 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.FeedbackIcons,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);
var input_checker23507_23525 = schema.core.checker.call(null,input_schema23506_23524);
var output_checker23508_23526 = schema.core.checker.call(null,output_schema23505_23523);
/**
 * Inputs: [{:keys [feedback? bs-style]} :- FeedbackIcons]
 *   Returns: t/Component
 */
om_bootstrap.input.render_icon = ((function (ufv___23522,output_schema23505_23523,input_schema23506_23524,input_checker23507_23525,output_checker23508_23526){
return (function om_bootstrap$input$render_icon(G__23509){
var validate__7824__auto__ = ufv___23522.get_cell();
if(cljs.core.truth_(validate__7824__auto__)){
var args__7825__auto___23527 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23509], null);
var temp__4657__auto___23528 = input_checker23507_23525.call(null,args__7825__auto___23527);
if(cljs.core.truth_(temp__4657__auto___23528)){
var error__7826__auto___23529 = temp__4657__auto___23528;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-icon","render-icon",511977669,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__7826__auto___23529)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23506_23524,new cljs.core.Keyword(null,"value","value",305978217),args__7825__auto___23527,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___23529], null));
} else {
}
} else {
}

var o__7827__auto__ = (function (){var G__23517 = G__23509;
var map__23518 = G__23517;
var map__23518__$1 = ((((!((map__23518 == null)))?((((map__23518.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23518.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23518):map__23518);
var feedback_QMARK_ = cljs.core.get.call(null,map__23518__$1,new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821));
var bs_style = cljs.core.get.call(null,map__23518__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));
var G__23517__$1 = G__23517;
while(true){
var map__23520 = G__23517__$1;
var map__23520__$1 = ((((!((map__23520 == null)))?((((map__23520.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23520.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23520):map__23520);
var feedback_QMARK___$1 = cljs.core.get.call(null,map__23520__$1,new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821));
var bs_style__$1 = cljs.core.get.call(null,map__23520__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));
if(cljs.core.truth_(feedback_QMARK___$1)){
var klasses = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"glyphicon","glyphicon",-2083132161),true,new cljs.core.Keyword(null,"form-control-feedback","form-control-feedback",-26248681),true,new cljs.core.Keyword(null,"glyphicon-ok","glyphicon-ok",-980475854),cljs.core._EQ_.call(null,"success",bs_style__$1),new cljs.core.Keyword(null,"glyphicon-warning-sign","glyphicon-warning-sign",-715964093),cljs.core._EQ_.call(null,"warning",bs_style__$1),new cljs.core.Keyword(null,"glyphicon-remove","glyphicon-remove",16420020),cljs.core._EQ_.call(null,"error",bs_style__$1)], null);
return React.DOM.span({"className": om_tools.dom.format_opts.call(null,om_bootstrap.input.class_set.call(null,klasses))});
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(validate__7824__auto__)){
var temp__4657__auto___23530 = output_checker23508_23526.call(null,o__7827__auto__);
if(cljs.core.truth_(temp__4657__auto___23530)){
var error__7826__auto___23531 = temp__4657__auto___23530;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-icon","render-icon",511977669,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__7826__auto___23531)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23505_23523,new cljs.core.Keyword(null,"value","value",305978217),o__7827__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___23531], null));
} else {
}
} else {
}

return o__7827__auto__;
});})(ufv___23522,output_schema23505_23523,input_schema23506_23524,input_checker23507_23525,output_checker23508_23526))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.render_icon),schema.core.make_fn_schema.call(null,output_schema23505_23523,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23506_23524], null)));
var ufv___23537 = schema.utils.use_fn_validation;
var output_schema23532_23538 = schema.core.Any;
var input_schema23533_23539 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.maybe.call(null,schema.core.Str),cljs.core.with_meta(new cljs.core.Symbol(null,"help","help",1201298081,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),new cljs.core.Symbol("s","Str","s/Str",907974338,null))], null)))], null);
var input_checker23534_23540 = schema.core.checker.call(null,input_schema23533_23539);
var output_checker23535_23541 = schema.core.checker.call(null,output_schema23532_23538);
/**
 * Inputs: [help :- (s/maybe s/Str)]
 */
om_bootstrap.input.render_help = ((function (ufv___23537,output_schema23532_23538,input_schema23533_23539,input_checker23534_23540,output_checker23535_23541){
return (function om_bootstrap$input$render_help(G__23536){
var validate__7824__auto__ = ufv___23537.get_cell();
if(cljs.core.truth_(validate__7824__auto__)){
var args__7825__auto___23542 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23536], null);
var temp__4657__auto___23543 = input_checker23534_23540.call(null,args__7825__auto___23542);
if(cljs.core.truth_(temp__4657__auto___23543)){
var error__7826__auto___23544 = temp__4657__auto___23543;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-help","render-help",-1879333594,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__7826__auto___23544)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23533_23539,new cljs.core.Keyword(null,"value","value",305978217),args__7825__auto___23542,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___23544], null));
} else {
}
} else {
}

var o__7827__auto__ = (function (){var help = G__23536;
while(true){
if(cljs.core.truth_(help)){
return cljs.core.apply.call(null,React.DOM.span,{"className": "help-block"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[help],null))));
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(validate__7824__auto__)){
var temp__4657__auto___23545 = output_checker23535_23541.call(null,o__7827__auto__);
if(cljs.core.truth_(temp__4657__auto___23545)){
var error__7826__auto___23546 = temp__4657__auto___23545;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-help","render-help",-1879333594,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__7826__auto___23546)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23532_23538,new cljs.core.Keyword(null,"value","value",305978217),o__7827__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___23546], null));
} else {
}
} else {
}

return o__7827__auto__;
});})(ufv___23537,output_schema23532_23538,input_schema23533_23539,input_checker23534_23540,output_checker23535_23541))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.render_help),schema.core.make_fn_schema.call(null,output_schema23532_23538,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23533_23539], null)));
var ufv___23565 = schema.utils.use_fn_validation;
var output_schema23547_23566 = schema.core.Any;
var input_schema23548_23567 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Addons,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"items","items",-1622480831,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)))], null);
var input_checker23549_23568 = schema.core.checker.call(null,input_schema23548_23567);
var output_checker23550_23569 = schema.core.checker.call(null,output_schema23547_23566);
/**
 * Inputs: [{:keys [addon-before addon-after addon-button addon-button-before addon-button-after]} :- Addons items :- s/Any]
 * 
 *   Items is a vector of render instances.
 */
om_bootstrap.input.render_input_group = ((function (ufv___23565,output_schema23547_23566,input_schema23548_23567,input_checker23549_23568,output_checker23550_23569){
return (function om_bootstrap$input$render_input_group(G__23551,G__23552){
var validate__7824__auto__ = ufv___23565.get_cell();
if(cljs.core.truth_(validate__7824__auto__)){
var args__7825__auto___23570 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23551,G__23552], null);
var temp__4657__auto___23571 = input_checker23549_23568.call(null,args__7825__auto___23570);
if(cljs.core.truth_(temp__4657__auto___23571)){
var error__7826__auto___23572 = temp__4657__auto___23571;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-input-group","render-input-group",361721583,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Items is a vector of render instances."], null)),cljs.core.pr_str.call(null,error__7826__auto___23572)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23548_23567,new cljs.core.Keyword(null,"value","value",305978217),args__7825__auto___23570,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___23572], null));
} else {
}
} else {
}

var o__7827__auto__ = (function (){var G__23560 = G__23551;
var map__23561 = G__23560;
var map__23561__$1 = ((((!((map__23561 == null)))?((((map__23561.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23561.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23561):map__23561);
var addon_before = cljs.core.get.call(null,map__23561__$1,new cljs.core.Keyword(null,"addon-before","addon-before",-500360384));
var addon_after = cljs.core.get.call(null,map__23561__$1,new cljs.core.Keyword(null,"addon-after","addon-after",634985306));
var addon_button = cljs.core.get.call(null,map__23561__$1,new cljs.core.Keyword(null,"addon-button","addon-button",136745317));
var addon_button_before = cljs.core.get.call(null,map__23561__$1,new cljs.core.Keyword(null,"addon-button-before","addon-button-before",-143956251));
var addon_button_after = cljs.core.get.call(null,map__23561__$1,new cljs.core.Keyword(null,"addon-button-after","addon-button-after",-1815680807));
var items = G__23552;
var G__23560__$1 = G__23560;
var items__$1 = items;
while(true){
var map__23563 = G__23560__$1;
var map__23563__$1 = ((((!((map__23563 == null)))?((((map__23563.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23563.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23563):map__23563);
var addon_before__$1 = cljs.core.get.call(null,map__23563__$1,new cljs.core.Keyword(null,"addon-before","addon-before",-500360384));
var addon_after__$1 = cljs.core.get.call(null,map__23563__$1,new cljs.core.Keyword(null,"addon-after","addon-after",634985306));
var addon_button__$1 = cljs.core.get.call(null,map__23563__$1,new cljs.core.Keyword(null,"addon-button","addon-button",136745317));
var addon_button_before__$1 = cljs.core.get.call(null,map__23563__$1,new cljs.core.Keyword(null,"addon-button-before","addon-button-before",-143956251));
var addon_button_after__$1 = cljs.core.get.call(null,map__23563__$1,new cljs.core.Keyword(null,"addon-button-after","addon-button-after",-1815680807));
var items__$2 = items__$1;
if(cljs.core.truth_((function (){var or__6251__auto__ = addon_before__$1;
if(cljs.core.truth_(or__6251__auto__)){
return or__6251__auto__;
} else {
var or__6251__auto____$1 = addon_after__$1;
if(cljs.core.truth_(or__6251__auto____$1)){
return or__6251__auto____$1;
} else {
var or__6251__auto____$2 = addon_button__$1;
if(cljs.core.truth_(or__6251__auto____$2)){
return or__6251__auto____$2;
} else {
var or__6251__auto____$3 = addon_button_before__$1;
if(cljs.core.truth_(or__6251__auto____$3)){
return or__6251__auto____$3;
} else {
return addon_button_after__$1;
}
}
}
}
})())){
return cljs.core.apply.call(null,React.DOM.div,{"className": "input-group"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,6,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(addon_before__$1)?cljs.core.apply.call(null,React.DOM.span,{"className": "input-group-addon"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[addon_before__$1],null)))):null),(cljs.core.truth_(addon_button_before__$1)?cljs.core.apply.call(null,React.DOM.span,{"className": "input-group-btn"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[addon_button_before__$1],null)))):null),items__$2,(cljs.core.truth_(addon_after__$1)?cljs.core.apply.call(null,React.DOM.span,{"className": "input-group-addon"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[addon_after__$1],null)))):null),(cljs.core.truth_(addon_button__$1)?cljs.core.apply.call(null,React.DOM.span,{"className": "input-group-btn"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[addon_button__$1],null)))):null),(cljs.core.truth_(addon_button_after__$1)?cljs.core.apply.call(null,React.DOM.span,{"className": "input-group-btn"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[addon_button_after__$1],null)))):null)],null))));
} else {
return items__$2;
}
break;
}
})();
if(cljs.core.truth_(validate__7824__auto__)){
var temp__4657__auto___23573 = output_checker23550_23569.call(null,o__7827__auto__);
if(cljs.core.truth_(temp__4657__auto___23573)){
var error__7826__auto___23574 = temp__4657__auto___23573;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-input-group","render-input-group",361721583,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Items is a vector of render instances."], null)),cljs.core.pr_str.call(null,error__7826__auto___23574)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23547_23566,new cljs.core.Keyword(null,"value","value",305978217),o__7827__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___23574], null));
} else {
}
} else {
}

return o__7827__auto__;
});})(ufv___23565,output_schema23547_23566,input_schema23548_23567,input_checker23549_23568,output_checker23550_23569))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.render_input_group),schema.core.make_fn_schema.call(null,output_schema23547_23566,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23548_23567], null)));
var ufv___23592 = schema.utils.use_fn_validation;
var output_schema23575_23593 = schema.core.Bool;
var input_schema23576_23594 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);
var input_checker23577_23595 = schema.core.checker.call(null,input_schema23576_23594);
var output_checker23578_23596 = schema.core.checker.call(null,output_schema23575_23593);
/**
 * Inputs: [{type :type} :- Input]
 *   Returns: s/Bool
 * 
 *   Returns true if the supplied input is of type checkbox or radio,
 *   false otherwise.
 */
om_bootstrap.input.checkbox_or_radio_QMARK_ = ((function (ufv___23592,output_schema23575_23593,input_schema23576_23594,input_checker23577_23595,output_checker23578_23596){
return (function om_bootstrap$input$checkbox_or_radio_QMARK_(G__23579){
var validate__7824__auto__ = ufv___23592.get_cell();
if(cljs.core.truth_(validate__7824__auto__)){
var args__7825__auto___23597 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23579], null);
var temp__4657__auto___23598 = input_checker23577_23595.call(null,args__7825__auto___23597);
if(cljs.core.truth_(temp__4657__auto___23598)){
var error__7826__auto___23599 = temp__4657__auto___23598;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"checkbox-or-radio?","checkbox-or-radio?",-1047589288,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if the supplied input is of type checkbox or radio,\n  false otherwise."], null)),cljs.core.pr_str.call(null,error__7826__auto___23599)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23576_23594,new cljs.core.Keyword(null,"value","value",305978217),args__7825__auto___23597,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___23599], null));
} else {
}
} else {
}

var o__7827__auto__ = (function (){var G__23587 = G__23579;
var map__23588 = G__23587;
var map__23588__$1 = ((((!((map__23588 == null)))?((((map__23588.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23588.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23588):map__23588);
var type = cljs.core.get.call(null,map__23588__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var G__23587__$1 = G__23587;
while(true){
var map__23590 = G__23587__$1;
var map__23590__$1 = ((((!((map__23590 == null)))?((((map__23590.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23590.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23590):map__23590);
var type__$1 = cljs.core.get.call(null,map__23590__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return (cljs.core._EQ_.call(null,type__$1,"checkbox")) || (cljs.core._EQ_.call(null,type__$1,"radio"));
break;
}
})();
if(cljs.core.truth_(validate__7824__auto__)){
var temp__4657__auto___23600 = output_checker23578_23596.call(null,o__7827__auto__);
if(cljs.core.truth_(temp__4657__auto___23600)){
var error__7826__auto___23601 = temp__4657__auto___23600;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"checkbox-or-radio?","checkbox-or-radio?",-1047589288,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if the supplied input is of type checkbox or radio,\n  false otherwise."], null)),cljs.core.pr_str.call(null,error__7826__auto___23601)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23575_23593,new cljs.core.Keyword(null,"value","value",305978217),o__7827__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___23601], null));
} else {
}
} else {
}

return o__7827__auto__;
});})(ufv___23592,output_schema23575_23593,input_schema23576_23594,input_checker23577_23595,output_checker23578_23596))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.checkbox_or_radio_QMARK_),schema.core.make_fn_schema.call(null,output_schema23575_23593,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23576_23594], null)));
var ufv___23620 = schema.utils.use_fn_validation;
var output_schema23602_23621 = om_bootstrap.types.Component;
var input_schema23603_23622 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker23604_23623 = schema.core.checker.call(null,input_schema23603_23622);
var output_checker23605_23624 = schema.core.checker.call(null,output_schema23602_23621);
/**
 * Inputs: [{type :type} :- Input children]
 *   Returns: t/Component
 * 
 *   Wraps this business in a div.
 */
om_bootstrap.input.checkbox_or_radio_wrapper = ((function (ufv___23620,output_schema23602_23621,input_schema23603_23622,input_checker23604_23623,output_checker23605_23624){
return (function om_bootstrap$input$checkbox_or_radio_wrapper(G__23606,G__23607){
var validate__7824__auto__ = ufv___23620.get_cell();
if(cljs.core.truth_(validate__7824__auto__)){
var args__7825__auto___23625 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23606,G__23607], null);
var temp__4657__auto___23626 = input_checker23604_23623.call(null,args__7825__auto___23625);
if(cljs.core.truth_(temp__4657__auto___23626)){
var error__7826__auto___23627 = temp__4657__auto___23626;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"checkbox-or-radio-wrapper","checkbox-or-radio-wrapper",-964759132,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Wraps this business in a div."], null)),cljs.core.pr_str.call(null,error__7826__auto___23627)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23603_23622,new cljs.core.Keyword(null,"value","value",305978217),args__7825__auto___23625,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___23627], null));
} else {
}
} else {
}

var o__7827__auto__ = (function (){var G__23615 = G__23606;
var map__23616 = G__23615;
var map__23616__$1 = ((((!((map__23616 == null)))?((((map__23616.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23616.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23616):map__23616);
var type = cljs.core.get.call(null,map__23616__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var children = G__23607;
var G__23615__$1 = G__23615;
var children__$1 = children;
while(true){
var map__23618 = G__23615__$1;
var map__23618__$1 = ((((!((map__23618 == null)))?((((map__23618.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23618.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23618):map__23618);
var type__$1 = cljs.core.get.call(null,map__23618__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var children__$2 = children__$1;
var klasses = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),cljs.core._EQ_.call(null,"checkbox",type__$1),new cljs.core.Keyword(null,"radio","radio",1323726374),cljs.core._EQ_.call(null,"radio",type__$1)], null);
return cljs.core.apply.call(null,React.DOM.div,{"className": om_tools.dom.format_opts.call(null,om_bootstrap.input.class_set.call(null,klasses))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$2],null))));
break;
}
})();
if(cljs.core.truth_(validate__7824__auto__)){
var temp__4657__auto___23628 = output_checker23605_23624.call(null,o__7827__auto__);
if(cljs.core.truth_(temp__4657__auto___23628)){
var error__7826__auto___23629 = temp__4657__auto___23628;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"checkbox-or-radio-wrapper","checkbox-or-radio-wrapper",-964759132,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Wraps this business in a div."], null)),cljs.core.pr_str.call(null,error__7826__auto___23629)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23602_23621,new cljs.core.Keyword(null,"value","value",305978217),o__7827__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___23629], null));
} else {
}
} else {
}

return o__7827__auto__;
});})(ufv___23620,output_schema23602_23621,input_schema23603_23622,input_checker23604_23623,output_checker23605_23624))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.checkbox_or_radio_wrapper),schema.core.make_fn_schema.call(null,output_schema23602_23621,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23603_23622], null)));
var ufv___23649 = schema.utils.use_fn_validation;
var output_schema23630_23650 = schema.core.Any;
var input_schema23631_23651 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,cljs.core.with_meta(new cljs.core.Symbol(null,"input","input",-2097503808,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Input","Input",1777023215,null)], null)))], null);
var input_schema23635_23652 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"child","child",-2030468224,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker23632_23653 = schema.core.checker.call(null,input_schema23631_23651);
var output_checker23633_23654 = schema.core.checker.call(null,output_schema23630_23650);
var input_checker23636_23655 = schema.core.checker.call(null,input_schema23635_23652);
var output_checker23637_23656 = schema.core.checker.call(null,output_schema23630_23650);
/**
 * Inputs: ([input :- Input] [{lc :label-classname, label :label, :as input} :- Input child])
 * 
 *   This doesn't handle any control group stuff.
 */
om_bootstrap.input.render_label = ((function (ufv___23649,output_schema23630_23650,input_schema23631_23651,input_schema23635_23652,input_checker23632_23653,output_checker23633_23654,input_checker23636_23655,output_checker23637_23656){
return (function om_bootstrap$input$render_label(var_args){
var args23640 = [];
var len__7326__auto___23657 = arguments.length;
var i__7327__auto___23658 = (0);
while(true){
if((i__7327__auto___23658 < len__7326__auto___23657)){
args23640.push((arguments[i__7327__auto___23658]));

var G__23659 = (i__7327__auto___23658 + (1));
i__7327__auto___23658 = G__23659;
continue;
} else {
}
break;
}

var G__23642 = args23640.length;
switch (G__23642) {
case 1:
return om_bootstrap.input.render_label.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.input.render_label.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23640.length)].join('')));

}
});})(ufv___23649,output_schema23630_23650,input_schema23631_23651,input_schema23635_23652,input_checker23632_23653,output_checker23633_23654,input_checker23636_23655,output_checker23637_23656))
;

om_bootstrap.input.render_label.cljs$core$IFn$_invoke$arity$1 = ((function (ufv___23649,output_schema23630_23650,input_schema23631_23651,input_schema23635_23652,input_checker23632_23653,output_checker23633_23654,input_checker23636_23655,output_checker23637_23656){
return (function (G__23634){
var validate__7824__auto__ = ufv___23649.get_cell();
if(cljs.core.truth_(validate__7824__auto__)){
var args__7825__auto___23661 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23634], null);
var temp__4657__auto___23662 = input_checker23632_23653.call(null,args__7825__auto___23661);
if(cljs.core.truth_(temp__4657__auto___23662)){
var error__7826__auto___23663 = temp__4657__auto___23662;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-label","render-label",-2019535210,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"This doesn't handle any control group stuff."], null)),cljs.core.pr_str.call(null,error__7826__auto___23663)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23631_23651,new cljs.core.Keyword(null,"value","value",305978217),args__7825__auto___23661,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___23663], null));
} else {
}
} else {
}

var o__7827__auto__ = (function (){var input = G__23634;
while(true){
return om_bootstrap.input.render_label.call(null,input,null);
break;
}
})();
if(cljs.core.truth_(validate__7824__auto__)){
var temp__4657__auto___23664 = output_checker23633_23654.call(null,o__7827__auto__);
if(cljs.core.truth_(temp__4657__auto___23664)){
var error__7826__auto___23665 = temp__4657__auto___23664;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-label","render-label",-2019535210,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"This doesn't handle any control group stuff."], null)),cljs.core.pr_str.call(null,error__7826__auto___23665)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23630_23650,new cljs.core.Keyword(null,"value","value",305978217),o__7827__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___23665], null));
} else {
}
} else {
}

return o__7827__auto__;
});})(ufv___23649,output_schema23630_23650,input_schema23631_23651,input_schema23635_23652,input_checker23632_23653,output_checker23633_23654,input_checker23636_23655,output_checker23637_23656))
;

om_bootstrap.input.render_label.cljs$core$IFn$_invoke$arity$2 = ((function (ufv___23649,output_schema23630_23650,input_schema23631_23651,input_schema23635_23652,input_checker23632_23653,output_checker23633_23654,input_checker23636_23655,output_checker23637_23656){
return (function (G__23638,G__23639){
var validate__7824__auto__ = ufv___23649.get_cell();
if(cljs.core.truth_(validate__7824__auto__)){
var args__7825__auto___23666 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23638,G__23639], null);
var temp__4657__auto___23667 = input_checker23636_23655.call(null,args__7825__auto___23666);
if(cljs.core.truth_(temp__4657__auto___23667)){
var error__7826__auto___23668 = temp__4657__auto___23667;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-label","render-label",-2019535210,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"This doesn't handle any control group stuff."], null)),cljs.core.pr_str.call(null,error__7826__auto___23668)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23635_23652,new cljs.core.Keyword(null,"value","value",305978217),args__7825__auto___23666,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___23668], null));
} else {
}
} else {
}

var o__7827__auto__ = (function (){var G__23644 = G__23638;
var map__23645 = G__23644;
var map__23645__$1 = ((((!((map__23645 == null)))?((((map__23645.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23645.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23645):map__23645);
var input = map__23645__$1;
var lc = cljs.core.get.call(null,map__23645__$1,new cljs.core.Keyword(null,"label-classname","label-classname",-1752600212));
var label = cljs.core.get.call(null,map__23645__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var child = G__23639;
var G__23644__$1 = G__23644;
var child__$1 = child;
while(true){
var map__23647 = G__23644__$1;
var map__23647__$1 = ((((!((map__23647 == null)))?((((map__23647.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23647.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23647):map__23647);
var input__$1 = map__23647__$1;
var lc__$1 = cljs.core.get.call(null,map__23647__$1,new cljs.core.Keyword(null,"label-classname","label-classname",-1752600212));
var label__$1 = cljs.core.get.call(null,map__23647__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var child__$2 = child__$1;
var classes = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"control-label","control-label",1226436372),cljs.core.not.call(null,om_bootstrap.input.checkbox_or_radio_QMARK_.call(null,input__$1))], null),(cljs.core.truth_(lc__$1)?cljs.core.PersistentArrayMap.fromArray([lc__$1,cljs.core.boolean$.call(null,lc__$1)], true, false):null));
if(cljs.core.truth_(label__$1)){
return cljs.core.apply.call(null,React.DOM.label,{"className": om_tools.dom.format_opts.call(null,om_bootstrap.input.class_set.call(null,classes))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[child__$2,label__$1],null))));
} else {
return child__$2;
}
break;
}
})();
if(cljs.core.truth_(validate__7824__auto__)){
var temp__4657__auto___23669 = output_checker23637_23656.call(null,o__7827__auto__);
if(cljs.core.truth_(temp__4657__auto___23669)){
var error__7826__auto___23670 = temp__4657__auto___23669;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-label","render-label",-2019535210,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"This doesn't handle any control group stuff."], null)),cljs.core.pr_str.call(null,error__7826__auto___23670)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23630_23650,new cljs.core.Keyword(null,"value","value",305978217),o__7827__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___23670], null));
} else {
}
} else {
}

return o__7827__auto__;
});})(ufv___23649,output_schema23630_23650,input_schema23631_23651,input_schema23635_23652,input_checker23632_23653,output_checker23633_23654,input_checker23636_23655,output_checker23637_23656))
;

om_bootstrap.input.render_label.cljs$lang$maxFixedArity = 2;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.render_label),schema.core.make_fn_schema.call(null,output_schema23630_23650,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23631_23651,input_schema23635_23652], null)));
var ufv___23689 = schema.utils.use_fn_validation;
var output_schema23671_23690 = schema.core.Any;
var input_schema23672_23691 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"child","child",-2030468224,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker23673_23692 = schema.core.checker.call(null,input_schema23672_23691);
var output_checker23674_23693 = schema.core.checker.call(null,output_schema23671_23690);
/**
 * Inputs: [{wc :wrapper-classname} :- Input child]
 */
om_bootstrap.input.render_wrapper = ((function (ufv___23689,output_schema23671_23690,input_schema23672_23691,input_checker23673_23692,output_checker23674_23693){
return (function om_bootstrap$input$render_wrapper(G__23675,G__23676){
var validate__7824__auto__ = ufv___23689.get_cell();
if(cljs.core.truth_(validate__7824__auto__)){
var args__7825__auto___23694 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23675,G__23676], null);
var temp__4657__auto___23695 = input_checker23673_23692.call(null,args__7825__auto___23694);
if(cljs.core.truth_(temp__4657__auto___23695)){
var error__7826__auto___23696 = temp__4657__auto___23695;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-wrapper","render-wrapper",79817165,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__7826__auto___23696)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23672_23691,new cljs.core.Keyword(null,"value","value",305978217),args__7825__auto___23694,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___23696], null));
} else {
}
} else {
}

var o__7827__auto__ = (function (){var G__23684 = G__23675;
var map__23685 = G__23684;
var map__23685__$1 = ((((!((map__23685 == null)))?((((map__23685.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23685.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23685):map__23685);
var wc = cljs.core.get.call(null,map__23685__$1,new cljs.core.Keyword(null,"wrapper-classname","wrapper-classname",1629533866));
var child = G__23676;
var G__23684__$1 = G__23684;
var child__$1 = child;
while(true){
var map__23687 = G__23684__$1;
var map__23687__$1 = ((((!((map__23687 == null)))?((((map__23687.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23687.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23687):map__23687);
var wc__$1 = cljs.core.get.call(null,map__23687__$1,new cljs.core.Keyword(null,"wrapper-classname","wrapper-classname",1629533866));
var child__$2 = child__$1;
if(cljs.core.truth_(wc__$1)){
return cljs.core.apply.call(null,React.DOM.div,{"className": om_tools.dom.format_opts.call(null,wc__$1)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[child__$2],null))));
} else {
return child__$2;
}
break;
}
})();
if(cljs.core.truth_(validate__7824__auto__)){
var temp__4657__auto___23697 = output_checker23674_23693.call(null,o__7827__auto__);
if(cljs.core.truth_(temp__4657__auto___23697)){
var error__7826__auto___23698 = temp__4657__auto___23697;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-wrapper","render-wrapper",79817165,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__7826__auto___23698)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23671_23690,new cljs.core.Keyword(null,"value","value",305978217),o__7827__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___23698], null));
} else {
}
} else {
}

return o__7827__auto__;
});})(ufv___23689,output_schema23671_23690,input_schema23672_23691,input_checker23673_23692,output_checker23674_23693))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.render_wrapper),schema.core.make_fn_schema.call(null,output_schema23671_23690,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23672_23691], null)));
var ufv___23717 = schema.utils.use_fn_validation;
var output_schema23699_23718 = om_bootstrap.types.Component;
var input_schema23700_23719 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker23701_23720 = schema.core.checker.call(null,input_schema23700_23719);
var output_checker23702_23721 = schema.core.checker.call(null,output_schema23699_23718);
/**
 * Inputs: [{bs-style :bs-style, cn :group-classname, :as input} :- Input children]
 *   Returns: t/Component
 * 
 *   Wraps the entire form group.
 */
om_bootstrap.input.render_form_group = ((function (ufv___23717,output_schema23699_23718,input_schema23700_23719,input_checker23701_23720,output_checker23702_23721){
return (function om_bootstrap$input$render_form_group(G__23703,G__23704){
var validate__7824__auto__ = ufv___23717.get_cell();
if(cljs.core.truth_(validate__7824__auto__)){
var args__7825__auto___23722 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23703,G__23704], null);
var temp__4657__auto___23723 = input_checker23701_23720.call(null,args__7825__auto___23722);
if(cljs.core.truth_(temp__4657__auto___23723)){
var error__7826__auto___23724 = temp__4657__auto___23723;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-form-group","render-form-group",2039718866,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Wraps the entire form group."], null)),cljs.core.pr_str.call(null,error__7826__auto___23724)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23700_23719,new cljs.core.Keyword(null,"value","value",305978217),args__7825__auto___23722,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___23724], null));
} else {
}
} else {
}

var o__7827__auto__ = (function (){var G__23712 = G__23703;
var map__23713 = G__23712;
var map__23713__$1 = ((((!((map__23713 == null)))?((((map__23713.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23713.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23713):map__23713);
var input = map__23713__$1;
var bs_style = cljs.core.get.call(null,map__23713__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));
var cn = cljs.core.get.call(null,map__23713__$1,new cljs.core.Keyword(null,"group-classname","group-classname",-610987816));
var children = G__23704;
var G__23712__$1 = G__23712;
var children__$1 = children;
while(true){
var map__23715 = G__23712__$1;
var map__23715__$1 = ((((!((map__23715 == null)))?((((map__23715.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23715.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23715):map__23715);
var input__$1 = map__23715__$1;
var bs_style__$1 = cljs.core.get.call(null,map__23715__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));
var cn__$1 = cljs.core.get.call(null,map__23715__$1,new cljs.core.Keyword(null,"group-classname","group-classname",-610987816));
var children__$2 = children__$1;
var classes = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"form-group","form-group",-267875328),cljs.core.not.call(null,new cljs.core.Keyword(null,"skip-form-group?","skip-form-group?",210862261).cljs$core$IFn$_invoke$arity$1(input__$1)),new cljs.core.Keyword(null,"has-feedback","has-feedback",1328001802),cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821).cljs$core$IFn$_invoke$arity$1(input__$1)),new cljs.core.Keyword(null,"has-success","has-success",685004255),cljs.core._EQ_.call(null,"success",bs_style__$1),new cljs.core.Keyword(null,"has-warning","has-warning",1993894136),cljs.core._EQ_.call(null,"warning",bs_style__$1),new cljs.core.Keyword(null,"has-error","has-error",-786302929),cljs.core._EQ_.call(null,"error",bs_style__$1)], null),(cljs.core.truth_(cn__$1)?cljs.core.PersistentArrayMap.fromArray([cn__$1,cljs.core.boolean$.call(null,cn__$1)], true, false):null));
return cljs.core.apply.call(null,React.DOM.div,{"className": om_tools.dom.format_opts.call(null,om_bootstrap.input.class_set.call(null,classes))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$2],null))));
break;
}
})();
if(cljs.core.truth_(validate__7824__auto__)){
var temp__4657__auto___23725 = output_checker23702_23721.call(null,o__7827__auto__);
if(cljs.core.truth_(temp__4657__auto___23725)){
var error__7826__auto___23726 = temp__4657__auto___23725;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-form-group","render-form-group",2039718866,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Wraps the entire form group."], null)),cljs.core.pr_str.call(null,error__7826__auto___23726)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23699_23718,new cljs.core.Keyword(null,"value","value",305978217),o__7827__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___23726], null));
} else {
}
} else {
}

return o__7827__auto__;
});})(ufv___23717,output_schema23699_23718,input_schema23700_23719,input_checker23701_23720,output_checker23702_23721))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.render_form_group),schema.core.make_fn_schema.call(null,output_schema23699_23718,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23700_23719], null)));
var ufv___23736 = schema.utils.use_fn_validation;
var output_schema23727_23737 = om_bootstrap.types.Component;
var input_schema23728_23738 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,cljs.core.with_meta(new cljs.core.Symbol(null,"input","input",-2097503808,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Input","Input",1777023215,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker23729_23739 = schema.core.checker.call(null,input_schema23728_23738);
var output_checker23730_23740 = schema.core.checker.call(null,output_schema23727_23737);
/**
 * Inputs: [input :- Input attrs children]
 *   Returns: t/Component
 */
om_bootstrap.input.render_input = ((function (ufv___23736,output_schema23727_23737,input_schema23728_23738,input_checker23729_23739,output_checker23730_23740){
return (function om_bootstrap$input$render_input(G__23731,G__23732,G__23733){
var validate__7824__auto__ = ufv___23736.get_cell();
if(cljs.core.truth_(validate__7824__auto__)){
var args__7825__auto___23741 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23731,G__23732,G__23733], null);
var temp__4657__auto___23742 = input_checker23729_23739.call(null,args__7825__auto___23741);
if(cljs.core.truth_(temp__4657__auto___23742)){
var error__7826__auto___23743 = temp__4657__auto___23742;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-input","render-input",243083212,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__7826__auto___23743)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23728_23738,new cljs.core.Keyword(null,"value","value",305978217),args__7825__auto___23741,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___23743], null));
} else {
}
} else {
}

var o__7827__auto__ = (function (){var input = G__23731;
var attrs = G__23732;
var children = G__23733;
while(true){
var props = ((function (validate__7824__auto__,ufv___23736,output_schema23727_23737,input_schema23728_23738,input_checker23729_23739,output_checker23730_23740){
return (function (klass){
return om_bootstrap.util.merge_props.call(null,attrs,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),klass,new cljs.core.Keyword(null,"ref","ref",1289896967),"input",new cljs.core.Keyword(null,"key","key",-1516042587),"input"], null));
});})(validate__7824__auto__,ufv___23736,output_schema23727_23737,input_schema23728_23738,input_checker23729_23739,output_checker23730_23740))
;
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(input))){
return children;
} else {
var G__23735 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(input);
switch (G__23735) {
case "select":
return om_tools.dom.select.call(null,props.call(null,"form-control"),children);

break;
case "textarea":
return om_tools.dom.element.call(null,om.dom.textarea,props.call(null,"form-control"),cljs.core.PersistentVector.EMPTY);

break;
case "static":
return om_tools.dom.element.call(null,React.DOM.p,props.call(null,"form-control-static"),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(attrs)],null)));

break;
default:
return om_tools.dom.element.call(null,om.dom.input,cljs.core.assoc.call(null,props.call(null,(cljs.core.truth_(om_bootstrap.input.checkbox_or_radio_QMARK_.call(null,input))?"":"form-control")),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(input)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));

}
}
break;
}
})();
if(cljs.core.truth_(validate__7824__auto__)){
var temp__4657__auto___23745 = output_checker23730_23740.call(null,o__7827__auto__);
if(cljs.core.truth_(temp__4657__auto___23745)){
var error__7826__auto___23746 = temp__4657__auto___23745;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-input","render-input",243083212,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__7826__auto___23746)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23727_23737,new cljs.core.Keyword(null,"value","value",305978217),o__7827__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___23746], null));
} else {
}
} else {
}

return o__7827__auto__;
});})(ufv___23736,output_schema23727_23737,input_schema23728_23738,input_checker23729_23739,output_checker23730_23740))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.render_input),schema.core.make_fn_schema.call(null,output_schema23727_23737,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23728_23738], null)));
var ufv___23758 = schema.utils.use_fn_validation;
var output_schema23747_23759 = om_bootstrap.types.Component;
var input_schema23748_23760 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Input","Input",1777023215,null)], null))),schema.core.Any], null);
var input_checker23749_23761 = schema.core.checker.call(null,input_schema23748_23760);
var output_checker23750_23762 = schema.core.checker.call(null,output_schema23747_23759);
/**
 * Inputs: [opts :- Input & children]
 *   Returns: t/Component
 * 
 *   Returns an input component. This currently does NOT handle any of
 *   the default values or validation messages that we'll need to make
 *   this work, though.
 */
om_bootstrap.input.input = ((function (ufv___23758,output_schema23747_23759,input_schema23748_23760,input_checker23749_23761,output_checker23750_23762){
return (function om_bootstrap$input$input(var_args){
var args__7333__auto__ = [];
var len__7326__auto___23763 = arguments.length;
var i__7327__auto___23764 = (0);
while(true){
if((i__7327__auto___23764 < len__7326__auto___23763)){
args__7333__auto__.push((arguments[i__7327__auto___23764]));

var G__23765 = (i__7327__auto___23764 + (1));
i__7327__auto___23764 = G__23765;
continue;
} else {
}
break;
}

var argseq__7334__auto__ = ((((1) < args__7333__auto__.length))?(new cljs.core.IndexedSeq(args__7333__auto__.slice((1)),(0),null)):null);
return om_bootstrap.input.input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7334__auto__);
});})(ufv___23758,output_schema23747_23759,input_schema23748_23760,input_checker23749_23761,output_checker23750_23762))
;

om_bootstrap.input.input.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___23758,output_schema23747_23759,input_schema23748_23760,input_checker23749_23761,output_checker23750_23762){
return (function (G__23751,rest23752){
var validate__7824__auto__ = ufv___23758.get_cell();
if(cljs.core.truth_(validate__7824__auto__)){
var args__7825__auto___23766 = cljs.core.list_STAR_.call(null,G__23751,rest23752);
var temp__4657__auto___23767 = input_checker23749_23761.call(null,args__7825__auto___23766);
if(cljs.core.truth_(temp__4657__auto___23767)){
var error__7826__auto___23768 = temp__4657__auto___23767;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"input","input",-2097503808,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns an input component. This currently does NOT handle any of\n  the default values or validation messages that we'll need to make\n  this work, though."], null)),cljs.core.pr_str.call(null,error__7826__auto___23768)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23748_23760,new cljs.core.Keyword(null,"value","value",305978217),args__7825__auto___23766,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___23768], null));
} else {
}
} else {
}

var o__7827__auto__ = (function (){var opts = G__23751;
var children = rest23752;
while(true){
var vec__23755 = om_bootstrap.types.separate.call(null,om_bootstrap.input.Input,opts);
var input = cljs.core.nth.call(null,vec__23755,(0),null);
var attrs = cljs.core.nth.call(null,vec__23755,(1),null);
if(cljs.core.truth_(om_bootstrap.input.checkbox_or_radio_QMARK_.call(null,input))){
return om_bootstrap.input.render_form_group.call(null,input,om_bootstrap.input.render_wrapper.call(null,input,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.input.checkbox_or_radio_wrapper.call(null,input,om_bootstrap.input.render_label.call(null,input,om_bootstrap.input.render_input.call(null,input,attrs,children))),om_bootstrap.input.render_help.call(null,new cljs.core.Keyword(null,"help","help",-439233446).cljs$core$IFn$_invoke$arity$1(input))], null)));
} else {
return om_bootstrap.input.render_form_group.call(null,input,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.input.render_label.call(null,input),om_bootstrap.input.render_wrapper.call(null,input,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.input.render_input_group.call(null,cljs.core.select_keys.call(null,input,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"addon-before","addon-before",-500360384),new cljs.core.Keyword(null,"addon-after","addon-after",634985306),new cljs.core.Keyword(null,"addon-button","addon-button",136745317),new cljs.core.Keyword(null,"addon-button-before","addon-button-before",-143956251),new cljs.core.Keyword(null,"addon-button-after","addon-button-after",-1815680807)], null)),om_bootstrap.input.render_input.call(null,input,attrs,children)),om_bootstrap.input.render_icon.call(null,cljs.core.select_keys.call(null,input,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821),new cljs.core.Keyword(null,"bs-style","bs-style",1424423998)], null))),om_bootstrap.input.render_help.call(null,new cljs.core.Keyword(null,"help","help",-439233446).cljs$core$IFn$_invoke$arity$1(input))], null))], null));
}
break;
}
})();
if(cljs.core.truth_(validate__7824__auto__)){
var temp__4657__auto___23769 = output_checker23750_23762.call(null,o__7827__auto__);
if(cljs.core.truth_(temp__4657__auto___23769)){
var error__7826__auto___23770 = temp__4657__auto___23769;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"input","input",-2097503808,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns an input component. This currently does NOT handle any of\n  the default values or validation messages that we'll need to make\n  this work, though."], null)),cljs.core.pr_str.call(null,error__7826__auto___23770)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23747_23759,new cljs.core.Keyword(null,"value","value",305978217),o__7827__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___23770], null));
} else {
}
} else {
}

return o__7827__auto__;
});})(ufv___23758,output_schema23747_23759,input_schema23748_23760,input_checker23749_23761,output_checker23750_23762))
;

om_bootstrap.input.input.cljs$lang$maxFixedArity = (1);

om_bootstrap.input.input.cljs$lang$applyTo = ((function (ufv___23758,output_schema23747_23759,input_schema23748_23760,input_checker23749_23761,output_checker23750_23762){
return (function (seq23753){
var G__23754 = cljs.core.first.call(null,seq23753);
var seq23753__$1 = cljs.core.next.call(null,seq23753);
return om_bootstrap.input.input.cljs$core$IFn$_invoke$arity$variadic(G__23754,seq23753__$1);
});})(ufv___23758,output_schema23747_23759,input_schema23748_23760,input_checker23749_23761,output_checker23750_23762))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.input),schema.core.make_fn_schema.call(null,output_schema23747_23759,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23748_23760], null)));
var ufv___23786 = schema.utils.use_fn_validation;
var output_schema23771_23787 = om_bootstrap.types.Component;
var input_schema23772_23788 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Radio,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Radio","Radio",1790223405,null)], null)))], null);
var input_checker23773_23789 = schema.core.checker.call(null,input_schema23772_23788);
var output_checker23774_23790 = schema.core.checker.call(null,output_schema23771_23787);
/**
 * Inputs: [opts :- Radio]
 *   Returns: t/Component
 * 
 *   Generates a radio button entry, to place into a radio button
 * grouping.
 */
om_bootstrap.input.radio_option = ((function (ufv___23786,output_schema23771_23787,input_schema23772_23788,input_checker23773_23789,output_checker23774_23790){
return (function om_bootstrap$input$radio_option(G__23775){
var validate__7824__auto__ = ufv___23786.get_cell();
if(cljs.core.truth_(validate__7824__auto__)){
var args__7825__auto___23791 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23775], null);
var temp__4657__auto___23792 = input_checker23773_23789.call(null,args__7825__auto___23791);
if(cljs.core.truth_(temp__4657__auto___23792)){
var error__7826__auto___23793 = temp__4657__auto___23792;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"radio-option","radio-option",726779012,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Generates a radio button entry, to place into a radio button\n   grouping."], null)),cljs.core.pr_str.call(null,error__7826__auto___23793)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23772_23788,new cljs.core.Keyword(null,"value","value",305978217),args__7825__auto___23791,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___23793], null));
} else {
}
} else {
}

var o__7827__auto__ = (function (){var opts = G__23775;
while(true){
var vec__23781 = om_bootstrap.types.separate.call(null,om_bootstrap.input.Radio,opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ref","ref",1289896967),"input",new cljs.core.Keyword(null,"key","key",-1516042587),"input",new cljs.core.Keyword(null,"type","type",1174270348),"radio"], null));
var bs = cljs.core.nth.call(null,vec__23781,(0),null);
var props = cljs.core.nth.call(null,vec__23781,(1),null);
var map__23784 = bs;
var map__23784__$1 = ((((!((map__23784 == null)))?((((map__23784.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23784.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23784):map__23784);
var label = cljs.core.get.call(null,map__23784__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var checked_QMARK_ = cljs.core.get.call(null,map__23784__$1,new cljs.core.Keyword(null,"checked?","checked?",2024809091));
var inline_QMARK_ = cljs.core.get.call(null,map__23784__$1,new cljs.core.Keyword(null,"inline?","inline?",-1674483791));
var core = om_tools.dom.element.call(null,om.dom.input,cljs.core.assoc.call(null,props,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_),cljs.core.PersistentVector.EMPTY);
if(cljs.core.truth_(inline_QMARK_)){
return cljs.core.apply.call(null,React.DOM.label,{"className": "radio-inline"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[core,label],null))));
} else {
return cljs.core.apply.call(null,React.DOM.div,{"className": "radio"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.label,{},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[core,label],null))))],null))));
}
break;
}
})();
if(cljs.core.truth_(validate__7824__auto__)){
var temp__4657__auto___23794 = output_checker23774_23790.call(null,o__7827__auto__);
if(cljs.core.truth_(temp__4657__auto___23794)){
var error__7826__auto___23795 = temp__4657__auto___23794;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"radio-option","radio-option",726779012,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Generates a radio button entry, to place into a radio button\n   grouping."], null)),cljs.core.pr_str.call(null,error__7826__auto___23795)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23771_23787,new cljs.core.Keyword(null,"value","value",305978217),o__7827__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___23795], null));
} else {
}
} else {
}

return o__7827__auto__;
});})(ufv___23786,output_schema23771_23787,input_schema23772_23788,input_checker23773_23789,output_checker23774_23790))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.radio_option),schema.core.make_fn_schema.call(null,output_schema23771_23787,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23772_23788], null)));
var ufv___23834 = schema.utils.use_fn_validation;
var output_schema23796_23835 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.types.Component], null);
var input_schema23797_23836 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Str,cljs.core.with_meta(new cljs.core.Symbol(null,"header","header",1759972661,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null)], null))),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.pair.call(null,schema.core.Str,"option value",schema.core.Str,"option label")], null),cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.Symbol("s","Str","s/Str",907974338,null),"option value",new cljs.core.Symbol("s","Str","s/Str",907974338,null),"option label")], null)], null)))], null);
var input_checker23798_23837 = schema.core.checker.call(null,input_schema23797_23836);
var output_checker23799_23838 = schema.core.checker.call(null,output_schema23796_23835);
/**
 * Inputs: [header :- s/Str opts :- [(s/pair s/Str "option value" s/Str "option label")]]
 *   Returns: [t/Component]
 * 
 *   Returns a sequence of options for use as the children of a select
 *   input.
 */
om_bootstrap.input.options = ((function (ufv___23834,output_schema23796_23835,input_schema23797_23836,input_checker23798_23837,output_checker23799_23838){
return (function om_bootstrap$input$options(G__23800,G__23801){
var validate__7824__auto__ = ufv___23834.get_cell();
if(cljs.core.truth_(validate__7824__auto__)){
var args__7825__auto___23839 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23800,G__23801], null);
var temp__4657__auto___23840 = input_checker23798_23837.call(null,args__7825__auto___23839);
if(cljs.core.truth_(temp__4657__auto___23840)){
var error__7826__auto___23841 = temp__4657__auto___23840;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a sequence of options for use as the children of a select\n  input."], null)),cljs.core.pr_str.call(null,error__7826__auto___23841)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23797_23836,new cljs.core.Keyword(null,"value","value",305978217),args__7825__auto___23839,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___23841], null));
} else {
}
} else {
}

var o__7827__auto__ = (function (){var header = G__23800;
var opts = G__23801;
while(true){
return cljs.core.cons.call(null,cljs.core.apply.call(null,om.dom.option,{"value": ""},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[header],null)))),(function (){var iter__7031__auto__ = ((function (validate__7824__auto__,ufv___23834,output_schema23796_23835,input_schema23797_23836,input_checker23798_23837,output_checker23799_23838){
return (function om_bootstrap$input$options_$_iter__23818(s__23819){
return (new cljs.core.LazySeq(null,((function (validate__7824__auto__,ufv___23834,output_schema23796_23835,input_schema23797_23836,input_checker23798_23837,output_checker23799_23838){
return (function (){
var s__23819__$1 = s__23819;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__23819__$1);
if(temp__4657__auto__){
var s__23819__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23819__$2)){
var c__7029__auto__ = cljs.core.chunk_first.call(null,s__23819__$2);
var size__7030__auto__ = cljs.core.count.call(null,c__7029__auto__);
var b__23821 = cljs.core.chunk_buffer.call(null,size__7030__auto__);
if((function (){var i__23820 = (0);
while(true){
if((i__23820 < size__7030__auto__)){
var vec__23828 = cljs.core._nth.call(null,c__7029__auto__,i__23820);
var v = cljs.core.nth.call(null,vec__23828,(0),null);
var label = cljs.core.nth.call(null,vec__23828,(1),null);
cljs.core.chunk_append.call(null,b__23821,cljs.core.apply.call(null,om.dom.option,{"value": om_tools.dom.format_opts.call(null,v)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[label],null)))));

var G__23842 = (i__23820 + (1));
i__23820 = G__23842;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23821),om_bootstrap$input$options_$_iter__23818.call(null,cljs.core.chunk_rest.call(null,s__23819__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23821),null);
}
} else {
var vec__23831 = cljs.core.first.call(null,s__23819__$2);
var v = cljs.core.nth.call(null,vec__23831,(0),null);
var label = cljs.core.nth.call(null,vec__23831,(1),null);
return cljs.core.cons.call(null,cljs.core.apply.call(null,om.dom.option,{"value": om_tools.dom.format_opts.call(null,v)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[label],null)))),om_bootstrap$input$options_$_iter__23818.call(null,cljs.core.rest.call(null,s__23819__$2)));
}
} else {
return null;
}
break;
}
});})(validate__7824__auto__,ufv___23834,output_schema23796_23835,input_schema23797_23836,input_checker23798_23837,output_checker23799_23838))
,null,null));
});})(validate__7824__auto__,ufv___23834,output_schema23796_23835,input_schema23797_23836,input_checker23798_23837,output_checker23799_23838))
;
return iter__7031__auto__.call(null,opts);
})());
break;
}
})();
if(cljs.core.truth_(validate__7824__auto__)){
var temp__4657__auto___23843 = output_checker23799_23838.call(null,o__7827__auto__);
if(cljs.core.truth_(temp__4657__auto___23843)){
var error__7826__auto___23844 = temp__4657__auto___23843;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a sequence of options for use as the children of a select\n  input."], null)),cljs.core.pr_str.call(null,error__7826__auto___23844)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23796_23835,new cljs.core.Keyword(null,"value","value",305978217),o__7827__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___23844], null));
} else {
}
} else {
}

return o__7827__auto__;
});})(ufv___23834,output_schema23796_23835,input_schema23797_23836,input_checker23798_23837,output_checker23799_23838))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.options),schema.core.make_fn_schema.call(null,output_schema23796_23835,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23797_23836], null)));

//# sourceMappingURL=input.js.map?rel=1486035198232