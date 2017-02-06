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
var ufv___41753 = schema.utils.use_fn_validation;
var output_schema41740_41754 = schema.core.Str;
var input_schema41741_41755 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.Str,schema.core.Keyword),schema.core.Bool], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"klasses","klasses",-380235757,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.PersistentArrayMap.fromArray([cljs.core.list(new cljs.core.Symbol("s","either","s/either",-2144372885,null),new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], true, false)], null)))], null);
var input_checker41742_41756 = schema.core.checker.call(null,input_schema41741_41755);
var output_checker41743_41757 = schema.core.checker.call(null,output_schema41740_41754);
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
om_bootstrap.input.class_set = ((function (ufv___41753,output_schema41740_41754,input_schema41741_41755,input_checker41742_41756,output_checker41743_41757){
return (function om_bootstrap$input$class_set(G__41744){
var validate__29415__auto__ = ufv___41753.get_cell();
if(cljs.core.truth_(validate__29415__auto__)){
var args__29416__auto___41758 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__41744], null);
var temp__4657__auto___41759 = input_checker41742_41756.call(null,args__29416__auto___41758);
if(cljs.core.truth_(temp__4657__auto___41759)){
var error__29417__auto___41760 = temp__4657__auto___41759;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"class-set","class-set",-355600496,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Mimics the class-set behavior from React. Pass in a map of\n  potential class to Boolean; you'll get back a class string that\n  represents the final class to apply.\n\n  TODO: Use class-set from om-tools."], null)),cljs.core.pr_str.call(null,error__29417__auto___41760)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema41741_41755,new cljs.core.Keyword(null,"value","value",305978217),args__29416__auto___41758,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___41760], null));
} else {
}
} else {
}

var o__29418__auto__ = (function (){var klasses = G__41744;
while(true){
return clojure.string.join.call(null," ",cljs.core.mapcat.call(null,((function (validate__29415__auto__,ufv___41753,output_schema41740_41754,input_schema41741_41755,input_checker41742_41756,output_checker41743_41757){
return (function (p__41749){
var vec__41750 = p__41749;
var k = cljs.core.nth.call(null,vec__41750,(0),null);
var keep_QMARK_ = cljs.core.nth.call(null,vec__41750,(1),null);
if(cljs.core.truth_(keep_QMARK_)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k)], null);
} else {
return null;
}
});})(validate__29415__auto__,ufv___41753,output_schema41740_41754,input_schema41741_41755,input_checker41742_41756,output_checker41743_41757))
,klasses));
break;
}
})();
if(cljs.core.truth_(validate__29415__auto__)){
var temp__4657__auto___41761 = output_checker41743_41757.call(null,o__29418__auto__);
if(cljs.core.truth_(temp__4657__auto___41761)){
var error__29417__auto___41762 = temp__4657__auto___41761;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"class-set","class-set",-355600496,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Mimics the class-set behavior from React. Pass in a map of\n  potential class to Boolean; you'll get back a class string that\n  represents the final class to apply.\n\n  TODO: Use class-set from om-tools."], null)),cljs.core.pr_str.call(null,error__29417__auto___41762)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema41740_41754,new cljs.core.Keyword(null,"value","value",305978217),o__29418__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___41762], null));
} else {
}
} else {
}

return o__29418__auto__;
});})(ufv___41753,output_schema41740_41754,input_schema41741_41755,input_checker41742_41756,output_checker41743_41757))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.class_set),schema.core.make_fn_schema.call(null,output_schema41740_41754,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema41741_41755], null)));
var ufv___41768 = schema.utils.use_fn_validation;
var output_schema41763_41769 = om_bootstrap.types.Component;
var input_schema41764_41770 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Str,cljs.core.with_meta(new cljs.core.Symbol(null,"glyph-name","glyph-name",350405338,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null)], null)))], null);
var input_checker41765_41771 = schema.core.checker.call(null,input_schema41764_41770);
var output_checker41766_41772 = schema.core.checker.call(null,output_schema41763_41769);
/**
 * Inputs: [glyph-name :- s/Str]
 *   Returns: t/Component
 * 
 *   To be used with :addon-before or :addon-after.
 */
om_bootstrap.input.glyph = ((function (ufv___41768,output_schema41763_41769,input_schema41764_41770,input_checker41765_41771,output_checker41766_41772){
return (function om_bootstrap$input$glyph(G__41767){
var validate__29415__auto__ = ufv___41768.get_cell();
if(cljs.core.truth_(validate__29415__auto__)){
var args__29416__auto___41773 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__41767], null);
var temp__4657__auto___41774 = input_checker41765_41771.call(null,args__29416__auto___41773);
if(cljs.core.truth_(temp__4657__auto___41774)){
var error__29417__auto___41775 = temp__4657__auto___41774;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"glyph","glyph",-534987652,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"To be used with :addon-before or :addon-after."], null)),cljs.core.pr_str.call(null,error__29417__auto___41775)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema41764_41770,new cljs.core.Keyword(null,"value","value",305978217),args__29416__auto___41773,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___41775], null));
} else {
}
} else {
}

var o__29418__auto__ = (function (){var glyph_name = G__41767;
while(true){
return React.DOM.span({"className": om_tools.dom.format_opts.call(null,[cljs.core.str("glyphicon glyphicon-"),cljs.core.str(glyph_name)].join(''))});
break;
}
})();
if(cljs.core.truth_(validate__29415__auto__)){
var temp__4657__auto___41776 = output_checker41766_41772.call(null,o__29418__auto__);
if(cljs.core.truth_(temp__4657__auto___41776)){
var error__29417__auto___41777 = temp__4657__auto___41776;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"glyph","glyph",-534987652,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"To be used with :addon-before or :addon-after."], null)),cljs.core.pr_str.call(null,error__29417__auto___41777)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema41763_41769,new cljs.core.Keyword(null,"value","value",305978217),o__29418__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___41777], null));
} else {
}
} else {
}

return o__29418__auto__;
});})(ufv___41768,output_schema41763_41769,input_schema41764_41770,input_checker41765_41771,output_checker41766_41772))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.glyph),schema.core.make_fn_schema.call(null,output_schema41763_41769,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema41764_41770], null)));
var ufv___41795 = schema.utils.use_fn_validation;
var output_schema41778_41796 = om_bootstrap.types.Component;
var input_schema41779_41797 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.FeedbackIcons,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);
var input_checker41780_41798 = schema.core.checker.call(null,input_schema41779_41797);
var output_checker41781_41799 = schema.core.checker.call(null,output_schema41778_41796);
/**
 * Inputs: [{:keys [feedback? bs-style]} :- FeedbackIcons]
 *   Returns: t/Component
 */
om_bootstrap.input.render_icon = ((function (ufv___41795,output_schema41778_41796,input_schema41779_41797,input_checker41780_41798,output_checker41781_41799){
return (function om_bootstrap$input$render_icon(G__41782){
var validate__29415__auto__ = ufv___41795.get_cell();
if(cljs.core.truth_(validate__29415__auto__)){
var args__29416__auto___41800 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__41782], null);
var temp__4657__auto___41801 = input_checker41780_41798.call(null,args__29416__auto___41800);
if(cljs.core.truth_(temp__4657__auto___41801)){
var error__29417__auto___41802 = temp__4657__auto___41801;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-icon","render-icon",511977669,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__29417__auto___41802)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema41779_41797,new cljs.core.Keyword(null,"value","value",305978217),args__29416__auto___41800,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___41802], null));
} else {
}
} else {
}

var o__29418__auto__ = (function (){var G__41790 = G__41782;
var map__41791 = G__41790;
var map__41791__$1 = ((((!((map__41791 == null)))?((((map__41791.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41791.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41791):map__41791);
var feedback_QMARK_ = cljs.core.get.call(null,map__41791__$1,new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821));
var bs_style = cljs.core.get.call(null,map__41791__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));
var G__41790__$1 = G__41790;
while(true){
var map__41793 = G__41790__$1;
var map__41793__$1 = ((((!((map__41793 == null)))?((((map__41793.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41793.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41793):map__41793);
var feedback_QMARK___$1 = cljs.core.get.call(null,map__41793__$1,new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821));
var bs_style__$1 = cljs.core.get.call(null,map__41793__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));
if(cljs.core.truth_(feedback_QMARK___$1)){
var klasses = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"glyphicon","glyphicon",-2083132161),true,new cljs.core.Keyword(null,"form-control-feedback","form-control-feedback",-26248681),true,new cljs.core.Keyword(null,"glyphicon-ok","glyphicon-ok",-980475854),cljs.core._EQ_.call(null,"success",bs_style__$1),new cljs.core.Keyword(null,"glyphicon-warning-sign","glyphicon-warning-sign",-715964093),cljs.core._EQ_.call(null,"warning",bs_style__$1),new cljs.core.Keyword(null,"glyphicon-remove","glyphicon-remove",16420020),cljs.core._EQ_.call(null,"error",bs_style__$1)], null);
return React.DOM.span({"className": om_tools.dom.format_opts.call(null,om_bootstrap.input.class_set.call(null,klasses))});
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(validate__29415__auto__)){
var temp__4657__auto___41803 = output_checker41781_41799.call(null,o__29418__auto__);
if(cljs.core.truth_(temp__4657__auto___41803)){
var error__29417__auto___41804 = temp__4657__auto___41803;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-icon","render-icon",511977669,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__29417__auto___41804)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema41778_41796,new cljs.core.Keyword(null,"value","value",305978217),o__29418__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___41804], null));
} else {
}
} else {
}

return o__29418__auto__;
});})(ufv___41795,output_schema41778_41796,input_schema41779_41797,input_checker41780_41798,output_checker41781_41799))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.render_icon),schema.core.make_fn_schema.call(null,output_schema41778_41796,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema41779_41797], null)));
var ufv___41810 = schema.utils.use_fn_validation;
var output_schema41805_41811 = schema.core.Any;
var input_schema41806_41812 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.maybe.call(null,schema.core.Str),cljs.core.with_meta(new cljs.core.Symbol(null,"help","help",1201298081,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),new cljs.core.Symbol("s","Str","s/Str",907974338,null))], null)))], null);
var input_checker41807_41813 = schema.core.checker.call(null,input_schema41806_41812);
var output_checker41808_41814 = schema.core.checker.call(null,output_schema41805_41811);
/**
 * Inputs: [help :- (s/maybe s/Str)]
 */
om_bootstrap.input.render_help = ((function (ufv___41810,output_schema41805_41811,input_schema41806_41812,input_checker41807_41813,output_checker41808_41814){
return (function om_bootstrap$input$render_help(G__41809){
var validate__29415__auto__ = ufv___41810.get_cell();
if(cljs.core.truth_(validate__29415__auto__)){
var args__29416__auto___41815 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__41809], null);
var temp__4657__auto___41816 = input_checker41807_41813.call(null,args__29416__auto___41815);
if(cljs.core.truth_(temp__4657__auto___41816)){
var error__29417__auto___41817 = temp__4657__auto___41816;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-help","render-help",-1879333594,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__29417__auto___41817)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema41806_41812,new cljs.core.Keyword(null,"value","value",305978217),args__29416__auto___41815,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___41817], null));
} else {
}
} else {
}

var o__29418__auto__ = (function (){var help = G__41809;
while(true){
if(cljs.core.truth_(help)){
return cljs.core.apply.call(null,React.DOM.span,{"className": "help-block"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[help],null))));
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(validate__29415__auto__)){
var temp__4657__auto___41818 = output_checker41808_41814.call(null,o__29418__auto__);
if(cljs.core.truth_(temp__4657__auto___41818)){
var error__29417__auto___41819 = temp__4657__auto___41818;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-help","render-help",-1879333594,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__29417__auto___41819)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema41805_41811,new cljs.core.Keyword(null,"value","value",305978217),o__29418__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___41819], null));
} else {
}
} else {
}

return o__29418__auto__;
});})(ufv___41810,output_schema41805_41811,input_schema41806_41812,input_checker41807_41813,output_checker41808_41814))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.render_help),schema.core.make_fn_schema.call(null,output_schema41805_41811,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema41806_41812], null)));
var ufv___41838 = schema.utils.use_fn_validation;
var output_schema41820_41839 = schema.core.Any;
var input_schema41821_41840 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Addons,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"items","items",-1622480831,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)))], null);
var input_checker41822_41841 = schema.core.checker.call(null,input_schema41821_41840);
var output_checker41823_41842 = schema.core.checker.call(null,output_schema41820_41839);
/**
 * Inputs: [{:keys [addon-before addon-after addon-button addon-button-before addon-button-after]} :- Addons items :- s/Any]
 * 
 *   Items is a vector of render instances.
 */
om_bootstrap.input.render_input_group = ((function (ufv___41838,output_schema41820_41839,input_schema41821_41840,input_checker41822_41841,output_checker41823_41842){
return (function om_bootstrap$input$render_input_group(G__41824,G__41825){
var validate__29415__auto__ = ufv___41838.get_cell();
if(cljs.core.truth_(validate__29415__auto__)){
var args__29416__auto___41843 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__41824,G__41825], null);
var temp__4657__auto___41844 = input_checker41822_41841.call(null,args__29416__auto___41843);
if(cljs.core.truth_(temp__4657__auto___41844)){
var error__29417__auto___41845 = temp__4657__auto___41844;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-input-group","render-input-group",361721583,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Items is a vector of render instances."], null)),cljs.core.pr_str.call(null,error__29417__auto___41845)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema41821_41840,new cljs.core.Keyword(null,"value","value",305978217),args__29416__auto___41843,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___41845], null));
} else {
}
} else {
}

var o__29418__auto__ = (function (){var G__41833 = G__41824;
var map__41834 = G__41833;
var map__41834__$1 = ((((!((map__41834 == null)))?((((map__41834.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41834.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41834):map__41834);
var addon_before = cljs.core.get.call(null,map__41834__$1,new cljs.core.Keyword(null,"addon-before","addon-before",-500360384));
var addon_after = cljs.core.get.call(null,map__41834__$1,new cljs.core.Keyword(null,"addon-after","addon-after",634985306));
var addon_button = cljs.core.get.call(null,map__41834__$1,new cljs.core.Keyword(null,"addon-button","addon-button",136745317));
var addon_button_before = cljs.core.get.call(null,map__41834__$1,new cljs.core.Keyword(null,"addon-button-before","addon-button-before",-143956251));
var addon_button_after = cljs.core.get.call(null,map__41834__$1,new cljs.core.Keyword(null,"addon-button-after","addon-button-after",-1815680807));
var items = G__41825;
var G__41833__$1 = G__41833;
var items__$1 = items;
while(true){
var map__41836 = G__41833__$1;
var map__41836__$1 = ((((!((map__41836 == null)))?((((map__41836.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41836.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41836):map__41836);
var addon_before__$1 = cljs.core.get.call(null,map__41836__$1,new cljs.core.Keyword(null,"addon-before","addon-before",-500360384));
var addon_after__$1 = cljs.core.get.call(null,map__41836__$1,new cljs.core.Keyword(null,"addon-after","addon-after",634985306));
var addon_button__$1 = cljs.core.get.call(null,map__41836__$1,new cljs.core.Keyword(null,"addon-button","addon-button",136745317));
var addon_button_before__$1 = cljs.core.get.call(null,map__41836__$1,new cljs.core.Keyword(null,"addon-button-before","addon-button-before",-143956251));
var addon_button_after__$1 = cljs.core.get.call(null,map__41836__$1,new cljs.core.Keyword(null,"addon-button-after","addon-button-after",-1815680807));
var items__$2 = items__$1;
if(cljs.core.truth_((function (){var or__24872__auto__ = addon_before__$1;
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
var or__24872__auto____$1 = addon_after__$1;
if(cljs.core.truth_(or__24872__auto____$1)){
return or__24872__auto____$1;
} else {
var or__24872__auto____$2 = addon_button__$1;
if(cljs.core.truth_(or__24872__auto____$2)){
return or__24872__auto____$2;
} else {
var or__24872__auto____$3 = addon_button_before__$1;
if(cljs.core.truth_(or__24872__auto____$3)){
return or__24872__auto____$3;
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
if(cljs.core.truth_(validate__29415__auto__)){
var temp__4657__auto___41846 = output_checker41823_41842.call(null,o__29418__auto__);
if(cljs.core.truth_(temp__4657__auto___41846)){
var error__29417__auto___41847 = temp__4657__auto___41846;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-input-group","render-input-group",361721583,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Items is a vector of render instances."], null)),cljs.core.pr_str.call(null,error__29417__auto___41847)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema41820_41839,new cljs.core.Keyword(null,"value","value",305978217),o__29418__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___41847], null));
} else {
}
} else {
}

return o__29418__auto__;
});})(ufv___41838,output_schema41820_41839,input_schema41821_41840,input_checker41822_41841,output_checker41823_41842))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.render_input_group),schema.core.make_fn_schema.call(null,output_schema41820_41839,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema41821_41840], null)));
var ufv___41865 = schema.utils.use_fn_validation;
var output_schema41848_41866 = schema.core.Bool;
var input_schema41849_41867 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);
var input_checker41850_41868 = schema.core.checker.call(null,input_schema41849_41867);
var output_checker41851_41869 = schema.core.checker.call(null,output_schema41848_41866);
/**
 * Inputs: [{type :type} :- Input]
 *   Returns: s/Bool
 * 
 *   Returns true if the supplied input is of type checkbox or radio,
 *   false otherwise.
 */
om_bootstrap.input.checkbox_or_radio_QMARK_ = ((function (ufv___41865,output_schema41848_41866,input_schema41849_41867,input_checker41850_41868,output_checker41851_41869){
return (function om_bootstrap$input$checkbox_or_radio_QMARK_(G__41852){
var validate__29415__auto__ = ufv___41865.get_cell();
if(cljs.core.truth_(validate__29415__auto__)){
var args__29416__auto___41870 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__41852], null);
var temp__4657__auto___41871 = input_checker41850_41868.call(null,args__29416__auto___41870);
if(cljs.core.truth_(temp__4657__auto___41871)){
var error__29417__auto___41872 = temp__4657__auto___41871;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"checkbox-or-radio?","checkbox-or-radio?",-1047589288,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if the supplied input is of type checkbox or radio,\n  false otherwise."], null)),cljs.core.pr_str.call(null,error__29417__auto___41872)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema41849_41867,new cljs.core.Keyword(null,"value","value",305978217),args__29416__auto___41870,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___41872], null));
} else {
}
} else {
}

var o__29418__auto__ = (function (){var G__41860 = G__41852;
var map__41861 = G__41860;
var map__41861__$1 = ((((!((map__41861 == null)))?((((map__41861.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41861.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41861):map__41861);
var type = cljs.core.get.call(null,map__41861__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var G__41860__$1 = G__41860;
while(true){
var map__41863 = G__41860__$1;
var map__41863__$1 = ((((!((map__41863 == null)))?((((map__41863.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41863.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41863):map__41863);
var type__$1 = cljs.core.get.call(null,map__41863__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return (cljs.core._EQ_.call(null,type__$1,"checkbox")) || (cljs.core._EQ_.call(null,type__$1,"radio"));
break;
}
})();
if(cljs.core.truth_(validate__29415__auto__)){
var temp__4657__auto___41873 = output_checker41851_41869.call(null,o__29418__auto__);
if(cljs.core.truth_(temp__4657__auto___41873)){
var error__29417__auto___41874 = temp__4657__auto___41873;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"checkbox-or-radio?","checkbox-or-radio?",-1047589288,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if the supplied input is of type checkbox or radio,\n  false otherwise."], null)),cljs.core.pr_str.call(null,error__29417__auto___41874)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema41848_41866,new cljs.core.Keyword(null,"value","value",305978217),o__29418__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___41874], null));
} else {
}
} else {
}

return o__29418__auto__;
});})(ufv___41865,output_schema41848_41866,input_schema41849_41867,input_checker41850_41868,output_checker41851_41869))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.checkbox_or_radio_QMARK_),schema.core.make_fn_schema.call(null,output_schema41848_41866,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema41849_41867], null)));
var ufv___41893 = schema.utils.use_fn_validation;
var output_schema41875_41894 = om_bootstrap.types.Component;
var input_schema41876_41895 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker41877_41896 = schema.core.checker.call(null,input_schema41876_41895);
var output_checker41878_41897 = schema.core.checker.call(null,output_schema41875_41894);
/**
 * Inputs: [{type :type} :- Input children]
 *   Returns: t/Component
 * 
 *   Wraps this business in a div.
 */
om_bootstrap.input.checkbox_or_radio_wrapper = ((function (ufv___41893,output_schema41875_41894,input_schema41876_41895,input_checker41877_41896,output_checker41878_41897){
return (function om_bootstrap$input$checkbox_or_radio_wrapper(G__41879,G__41880){
var validate__29415__auto__ = ufv___41893.get_cell();
if(cljs.core.truth_(validate__29415__auto__)){
var args__29416__auto___41898 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__41879,G__41880], null);
var temp__4657__auto___41899 = input_checker41877_41896.call(null,args__29416__auto___41898);
if(cljs.core.truth_(temp__4657__auto___41899)){
var error__29417__auto___41900 = temp__4657__auto___41899;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"checkbox-or-radio-wrapper","checkbox-or-radio-wrapper",-964759132,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Wraps this business in a div."], null)),cljs.core.pr_str.call(null,error__29417__auto___41900)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema41876_41895,new cljs.core.Keyword(null,"value","value",305978217),args__29416__auto___41898,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___41900], null));
} else {
}
} else {
}

var o__29418__auto__ = (function (){var G__41888 = G__41879;
var map__41889 = G__41888;
var map__41889__$1 = ((((!((map__41889 == null)))?((((map__41889.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41889.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41889):map__41889);
var type = cljs.core.get.call(null,map__41889__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var children = G__41880;
var G__41888__$1 = G__41888;
var children__$1 = children;
while(true){
var map__41891 = G__41888__$1;
var map__41891__$1 = ((((!((map__41891 == null)))?((((map__41891.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41891.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41891):map__41891);
var type__$1 = cljs.core.get.call(null,map__41891__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var children__$2 = children__$1;
var klasses = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),cljs.core._EQ_.call(null,"checkbox",type__$1),new cljs.core.Keyword(null,"radio","radio",1323726374),cljs.core._EQ_.call(null,"radio",type__$1)], null);
return cljs.core.apply.call(null,React.DOM.div,{"className": om_tools.dom.format_opts.call(null,om_bootstrap.input.class_set.call(null,klasses))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$2],null))));
break;
}
})();
if(cljs.core.truth_(validate__29415__auto__)){
var temp__4657__auto___41901 = output_checker41878_41897.call(null,o__29418__auto__);
if(cljs.core.truth_(temp__4657__auto___41901)){
var error__29417__auto___41902 = temp__4657__auto___41901;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"checkbox-or-radio-wrapper","checkbox-or-radio-wrapper",-964759132,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Wraps this business in a div."], null)),cljs.core.pr_str.call(null,error__29417__auto___41902)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema41875_41894,new cljs.core.Keyword(null,"value","value",305978217),o__29418__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___41902], null));
} else {
}
} else {
}

return o__29418__auto__;
});})(ufv___41893,output_schema41875_41894,input_schema41876_41895,input_checker41877_41896,output_checker41878_41897))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.checkbox_or_radio_wrapper),schema.core.make_fn_schema.call(null,output_schema41875_41894,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema41876_41895], null)));
var ufv___41922 = schema.utils.use_fn_validation;
var output_schema41903_41923 = schema.core.Any;
var input_schema41904_41924 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,cljs.core.with_meta(new cljs.core.Symbol(null,"input","input",-2097503808,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Input","Input",1777023215,null)], null)))], null);
var input_schema41908_41925 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"child","child",-2030468224,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker41905_41926 = schema.core.checker.call(null,input_schema41904_41924);
var output_checker41906_41927 = schema.core.checker.call(null,output_schema41903_41923);
var input_checker41909_41928 = schema.core.checker.call(null,input_schema41908_41925);
var output_checker41910_41929 = schema.core.checker.call(null,output_schema41903_41923);
/**
 * Inputs: ([input :- Input] [{lc :label-classname, label :label, :as input} :- Input child])
 * 
 *   This doesn't handle any control group stuff.
 */
om_bootstrap.input.render_label = ((function (ufv___41922,output_schema41903_41923,input_schema41904_41924,input_schema41908_41925,input_checker41905_41926,output_checker41906_41927,input_checker41909_41928,output_checker41910_41929){
return (function om_bootstrap$input$render_label(var_args){
var args41913 = [];
var len__25947__auto___41930 = arguments.length;
var i__25948__auto___41931 = (0);
while(true){
if((i__25948__auto___41931 < len__25947__auto___41930)){
args41913.push((arguments[i__25948__auto___41931]));

var G__41932 = (i__25948__auto___41931 + (1));
i__25948__auto___41931 = G__41932;
continue;
} else {
}
break;
}

var G__41915 = args41913.length;
switch (G__41915) {
case 1:
return om_bootstrap.input.render_label.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.input.render_label.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41913.length)].join('')));

}
});})(ufv___41922,output_schema41903_41923,input_schema41904_41924,input_schema41908_41925,input_checker41905_41926,output_checker41906_41927,input_checker41909_41928,output_checker41910_41929))
;

om_bootstrap.input.render_label.cljs$core$IFn$_invoke$arity$1 = ((function (ufv___41922,output_schema41903_41923,input_schema41904_41924,input_schema41908_41925,input_checker41905_41926,output_checker41906_41927,input_checker41909_41928,output_checker41910_41929){
return (function (G__41907){
var validate__29415__auto__ = ufv___41922.get_cell();
if(cljs.core.truth_(validate__29415__auto__)){
var args__29416__auto___41934 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__41907], null);
var temp__4657__auto___41935 = input_checker41905_41926.call(null,args__29416__auto___41934);
if(cljs.core.truth_(temp__4657__auto___41935)){
var error__29417__auto___41936 = temp__4657__auto___41935;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-label","render-label",-2019535210,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"This doesn't handle any control group stuff."], null)),cljs.core.pr_str.call(null,error__29417__auto___41936)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema41904_41924,new cljs.core.Keyword(null,"value","value",305978217),args__29416__auto___41934,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___41936], null));
} else {
}
} else {
}

var o__29418__auto__ = (function (){var input = G__41907;
while(true){
return om_bootstrap.input.render_label.call(null,input,null);
break;
}
})();
if(cljs.core.truth_(validate__29415__auto__)){
var temp__4657__auto___41937 = output_checker41906_41927.call(null,o__29418__auto__);
if(cljs.core.truth_(temp__4657__auto___41937)){
var error__29417__auto___41938 = temp__4657__auto___41937;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-label","render-label",-2019535210,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"This doesn't handle any control group stuff."], null)),cljs.core.pr_str.call(null,error__29417__auto___41938)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema41903_41923,new cljs.core.Keyword(null,"value","value",305978217),o__29418__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___41938], null));
} else {
}
} else {
}

return o__29418__auto__;
});})(ufv___41922,output_schema41903_41923,input_schema41904_41924,input_schema41908_41925,input_checker41905_41926,output_checker41906_41927,input_checker41909_41928,output_checker41910_41929))
;

om_bootstrap.input.render_label.cljs$core$IFn$_invoke$arity$2 = ((function (ufv___41922,output_schema41903_41923,input_schema41904_41924,input_schema41908_41925,input_checker41905_41926,output_checker41906_41927,input_checker41909_41928,output_checker41910_41929){
return (function (G__41911,G__41912){
var validate__29415__auto__ = ufv___41922.get_cell();
if(cljs.core.truth_(validate__29415__auto__)){
var args__29416__auto___41939 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__41911,G__41912], null);
var temp__4657__auto___41940 = input_checker41909_41928.call(null,args__29416__auto___41939);
if(cljs.core.truth_(temp__4657__auto___41940)){
var error__29417__auto___41941 = temp__4657__auto___41940;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-label","render-label",-2019535210,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"This doesn't handle any control group stuff."], null)),cljs.core.pr_str.call(null,error__29417__auto___41941)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema41908_41925,new cljs.core.Keyword(null,"value","value",305978217),args__29416__auto___41939,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___41941], null));
} else {
}
} else {
}

var o__29418__auto__ = (function (){var G__41917 = G__41911;
var map__41918 = G__41917;
var map__41918__$1 = ((((!((map__41918 == null)))?((((map__41918.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41918.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41918):map__41918);
var input = map__41918__$1;
var lc = cljs.core.get.call(null,map__41918__$1,new cljs.core.Keyword(null,"label-classname","label-classname",-1752600212));
var label = cljs.core.get.call(null,map__41918__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var child = G__41912;
var G__41917__$1 = G__41917;
var child__$1 = child;
while(true){
var map__41920 = G__41917__$1;
var map__41920__$1 = ((((!((map__41920 == null)))?((((map__41920.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41920.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41920):map__41920);
var input__$1 = map__41920__$1;
var lc__$1 = cljs.core.get.call(null,map__41920__$1,new cljs.core.Keyword(null,"label-classname","label-classname",-1752600212));
var label__$1 = cljs.core.get.call(null,map__41920__$1,new cljs.core.Keyword(null,"label","label",1718410804));
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
if(cljs.core.truth_(validate__29415__auto__)){
var temp__4657__auto___41942 = output_checker41910_41929.call(null,o__29418__auto__);
if(cljs.core.truth_(temp__4657__auto___41942)){
var error__29417__auto___41943 = temp__4657__auto___41942;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-label","render-label",-2019535210,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"This doesn't handle any control group stuff."], null)),cljs.core.pr_str.call(null,error__29417__auto___41943)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema41903_41923,new cljs.core.Keyword(null,"value","value",305978217),o__29418__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___41943], null));
} else {
}
} else {
}

return o__29418__auto__;
});})(ufv___41922,output_schema41903_41923,input_schema41904_41924,input_schema41908_41925,input_checker41905_41926,output_checker41906_41927,input_checker41909_41928,output_checker41910_41929))
;

om_bootstrap.input.render_label.cljs$lang$maxFixedArity = 2;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.render_label),schema.core.make_fn_schema.call(null,output_schema41903_41923,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema41904_41924,input_schema41908_41925], null)));
var ufv___41962 = schema.utils.use_fn_validation;
var output_schema41944_41963 = schema.core.Any;
var input_schema41945_41964 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"child","child",-2030468224,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker41946_41965 = schema.core.checker.call(null,input_schema41945_41964);
var output_checker41947_41966 = schema.core.checker.call(null,output_schema41944_41963);
/**
 * Inputs: [{wc :wrapper-classname} :- Input child]
 */
om_bootstrap.input.render_wrapper = ((function (ufv___41962,output_schema41944_41963,input_schema41945_41964,input_checker41946_41965,output_checker41947_41966){
return (function om_bootstrap$input$render_wrapper(G__41948,G__41949){
var validate__29415__auto__ = ufv___41962.get_cell();
if(cljs.core.truth_(validate__29415__auto__)){
var args__29416__auto___41967 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__41948,G__41949], null);
var temp__4657__auto___41968 = input_checker41946_41965.call(null,args__29416__auto___41967);
if(cljs.core.truth_(temp__4657__auto___41968)){
var error__29417__auto___41969 = temp__4657__auto___41968;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-wrapper","render-wrapper",79817165,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__29417__auto___41969)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema41945_41964,new cljs.core.Keyword(null,"value","value",305978217),args__29416__auto___41967,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___41969], null));
} else {
}
} else {
}

var o__29418__auto__ = (function (){var G__41957 = G__41948;
var map__41958 = G__41957;
var map__41958__$1 = ((((!((map__41958 == null)))?((((map__41958.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41958.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41958):map__41958);
var wc = cljs.core.get.call(null,map__41958__$1,new cljs.core.Keyword(null,"wrapper-classname","wrapper-classname",1629533866));
var child = G__41949;
var G__41957__$1 = G__41957;
var child__$1 = child;
while(true){
var map__41960 = G__41957__$1;
var map__41960__$1 = ((((!((map__41960 == null)))?((((map__41960.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41960.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41960):map__41960);
var wc__$1 = cljs.core.get.call(null,map__41960__$1,new cljs.core.Keyword(null,"wrapper-classname","wrapper-classname",1629533866));
var child__$2 = child__$1;
if(cljs.core.truth_(wc__$1)){
return cljs.core.apply.call(null,React.DOM.div,{"className": om_tools.dom.format_opts.call(null,wc__$1)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[child__$2],null))));
} else {
return child__$2;
}
break;
}
})();
if(cljs.core.truth_(validate__29415__auto__)){
var temp__4657__auto___41970 = output_checker41947_41966.call(null,o__29418__auto__);
if(cljs.core.truth_(temp__4657__auto___41970)){
var error__29417__auto___41971 = temp__4657__auto___41970;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-wrapper","render-wrapper",79817165,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__29417__auto___41971)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema41944_41963,new cljs.core.Keyword(null,"value","value",305978217),o__29418__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___41971], null));
} else {
}
} else {
}

return o__29418__auto__;
});})(ufv___41962,output_schema41944_41963,input_schema41945_41964,input_checker41946_41965,output_checker41947_41966))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.render_wrapper),schema.core.make_fn_schema.call(null,output_schema41944_41963,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema41945_41964], null)));
var ufv___41990 = schema.utils.use_fn_validation;
var output_schema41972_41991 = om_bootstrap.types.Component;
var input_schema41973_41992 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker41974_41993 = schema.core.checker.call(null,input_schema41973_41992);
var output_checker41975_41994 = schema.core.checker.call(null,output_schema41972_41991);
/**
 * Inputs: [{bs-style :bs-style, cn :group-classname, :as input} :- Input children]
 *   Returns: t/Component
 * 
 *   Wraps the entire form group.
 */
om_bootstrap.input.render_form_group = ((function (ufv___41990,output_schema41972_41991,input_schema41973_41992,input_checker41974_41993,output_checker41975_41994){
return (function om_bootstrap$input$render_form_group(G__41976,G__41977){
var validate__29415__auto__ = ufv___41990.get_cell();
if(cljs.core.truth_(validate__29415__auto__)){
var args__29416__auto___41995 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__41976,G__41977], null);
var temp__4657__auto___41996 = input_checker41974_41993.call(null,args__29416__auto___41995);
if(cljs.core.truth_(temp__4657__auto___41996)){
var error__29417__auto___41997 = temp__4657__auto___41996;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-form-group","render-form-group",2039718866,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Wraps the entire form group."], null)),cljs.core.pr_str.call(null,error__29417__auto___41997)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema41973_41992,new cljs.core.Keyword(null,"value","value",305978217),args__29416__auto___41995,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___41997], null));
} else {
}
} else {
}

var o__29418__auto__ = (function (){var G__41985 = G__41976;
var map__41986 = G__41985;
var map__41986__$1 = ((((!((map__41986 == null)))?((((map__41986.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41986.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41986):map__41986);
var input = map__41986__$1;
var bs_style = cljs.core.get.call(null,map__41986__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));
var cn = cljs.core.get.call(null,map__41986__$1,new cljs.core.Keyword(null,"group-classname","group-classname",-610987816));
var children = G__41977;
var G__41985__$1 = G__41985;
var children__$1 = children;
while(true){
var map__41988 = G__41985__$1;
var map__41988__$1 = ((((!((map__41988 == null)))?((((map__41988.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41988.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41988):map__41988);
var input__$1 = map__41988__$1;
var bs_style__$1 = cljs.core.get.call(null,map__41988__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));
var cn__$1 = cljs.core.get.call(null,map__41988__$1,new cljs.core.Keyword(null,"group-classname","group-classname",-610987816));
var children__$2 = children__$1;
var classes = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"form-group","form-group",-267875328),cljs.core.not.call(null,new cljs.core.Keyword(null,"skip-form-group?","skip-form-group?",210862261).cljs$core$IFn$_invoke$arity$1(input__$1)),new cljs.core.Keyword(null,"has-feedback","has-feedback",1328001802),cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821).cljs$core$IFn$_invoke$arity$1(input__$1)),new cljs.core.Keyword(null,"has-success","has-success",685004255),cljs.core._EQ_.call(null,"success",bs_style__$1),new cljs.core.Keyword(null,"has-warning","has-warning",1993894136),cljs.core._EQ_.call(null,"warning",bs_style__$1),new cljs.core.Keyword(null,"has-error","has-error",-786302929),cljs.core._EQ_.call(null,"error",bs_style__$1)], null),(cljs.core.truth_(cn__$1)?cljs.core.PersistentArrayMap.fromArray([cn__$1,cljs.core.boolean$.call(null,cn__$1)], true, false):null));
return cljs.core.apply.call(null,React.DOM.div,{"className": om_tools.dom.format_opts.call(null,om_bootstrap.input.class_set.call(null,classes))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$2],null))));
break;
}
})();
if(cljs.core.truth_(validate__29415__auto__)){
var temp__4657__auto___41998 = output_checker41975_41994.call(null,o__29418__auto__);
if(cljs.core.truth_(temp__4657__auto___41998)){
var error__29417__auto___41999 = temp__4657__auto___41998;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-form-group","render-form-group",2039718866,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Wraps the entire form group."], null)),cljs.core.pr_str.call(null,error__29417__auto___41999)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema41972_41991,new cljs.core.Keyword(null,"value","value",305978217),o__29418__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___41999], null));
} else {
}
} else {
}

return o__29418__auto__;
});})(ufv___41990,output_schema41972_41991,input_schema41973_41992,input_checker41974_41993,output_checker41975_41994))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.render_form_group),schema.core.make_fn_schema.call(null,output_schema41972_41991,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema41973_41992], null)));
var ufv___42009 = schema.utils.use_fn_validation;
var output_schema42000_42010 = om_bootstrap.types.Component;
var input_schema42001_42011 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,cljs.core.with_meta(new cljs.core.Symbol(null,"input","input",-2097503808,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Input","Input",1777023215,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker42002_42012 = schema.core.checker.call(null,input_schema42001_42011);
var output_checker42003_42013 = schema.core.checker.call(null,output_schema42000_42010);
/**
 * Inputs: [input :- Input attrs children]
 *   Returns: t/Component
 */
om_bootstrap.input.render_input = ((function (ufv___42009,output_schema42000_42010,input_schema42001_42011,input_checker42002_42012,output_checker42003_42013){
return (function om_bootstrap$input$render_input(G__42004,G__42005,G__42006){
var validate__29415__auto__ = ufv___42009.get_cell();
if(cljs.core.truth_(validate__29415__auto__)){
var args__29416__auto___42014 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__42004,G__42005,G__42006], null);
var temp__4657__auto___42015 = input_checker42002_42012.call(null,args__29416__auto___42014);
if(cljs.core.truth_(temp__4657__auto___42015)){
var error__29417__auto___42016 = temp__4657__auto___42015;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-input","render-input",243083212,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__29417__auto___42016)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema42001_42011,new cljs.core.Keyword(null,"value","value",305978217),args__29416__auto___42014,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___42016], null));
} else {
}
} else {
}

var o__29418__auto__ = (function (){var input = G__42004;
var attrs = G__42005;
var children = G__42006;
while(true){
var props = ((function (validate__29415__auto__,ufv___42009,output_schema42000_42010,input_schema42001_42011,input_checker42002_42012,output_checker42003_42013){
return (function (klass){
return om_bootstrap.util.merge_props.call(null,attrs,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),klass,new cljs.core.Keyword(null,"ref","ref",1289896967),"input",new cljs.core.Keyword(null,"key","key",-1516042587),"input"], null));
});})(validate__29415__auto__,ufv___42009,output_schema42000_42010,input_schema42001_42011,input_checker42002_42012,output_checker42003_42013))
;
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(input))){
return children;
} else {
var G__42008 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(input);
switch (G__42008) {
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
if(cljs.core.truth_(validate__29415__auto__)){
var temp__4657__auto___42018 = output_checker42003_42013.call(null,o__29418__auto__);
if(cljs.core.truth_(temp__4657__auto___42018)){
var error__29417__auto___42019 = temp__4657__auto___42018;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-input","render-input",243083212,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__29417__auto___42019)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema42000_42010,new cljs.core.Keyword(null,"value","value",305978217),o__29418__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___42019], null));
} else {
}
} else {
}

return o__29418__auto__;
});})(ufv___42009,output_schema42000_42010,input_schema42001_42011,input_checker42002_42012,output_checker42003_42013))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.render_input),schema.core.make_fn_schema.call(null,output_schema42000_42010,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema42001_42011], null)));
var ufv___42031 = schema.utils.use_fn_validation;
var output_schema42020_42032 = om_bootstrap.types.Component;
var input_schema42021_42033 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Input","Input",1777023215,null)], null))),schema.core.Any], null);
var input_checker42022_42034 = schema.core.checker.call(null,input_schema42021_42033);
var output_checker42023_42035 = schema.core.checker.call(null,output_schema42020_42032);
/**
 * Inputs: [opts :- Input & children]
 *   Returns: t/Component
 * 
 *   Returns an input component. This currently does NOT handle any of
 *   the default values or validation messages that we'll need to make
 *   this work, though.
 */
om_bootstrap.input.input = ((function (ufv___42031,output_schema42020_42032,input_schema42021_42033,input_checker42022_42034,output_checker42023_42035){
return (function om_bootstrap$input$input(var_args){
var args__25954__auto__ = [];
var len__25947__auto___42036 = arguments.length;
var i__25948__auto___42037 = (0);
while(true){
if((i__25948__auto___42037 < len__25947__auto___42036)){
args__25954__auto__.push((arguments[i__25948__auto___42037]));

var G__42038 = (i__25948__auto___42037 + (1));
i__25948__auto___42037 = G__42038;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((1) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((1)),(0),null)):null);
return om_bootstrap.input.input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25955__auto__);
});})(ufv___42031,output_schema42020_42032,input_schema42021_42033,input_checker42022_42034,output_checker42023_42035))
;

om_bootstrap.input.input.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___42031,output_schema42020_42032,input_schema42021_42033,input_checker42022_42034,output_checker42023_42035){
return (function (G__42024,rest42025){
var validate__29415__auto__ = ufv___42031.get_cell();
if(cljs.core.truth_(validate__29415__auto__)){
var args__29416__auto___42039 = cljs.core.list_STAR_.call(null,G__42024,rest42025);
var temp__4657__auto___42040 = input_checker42022_42034.call(null,args__29416__auto___42039);
if(cljs.core.truth_(temp__4657__auto___42040)){
var error__29417__auto___42041 = temp__4657__auto___42040;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"input","input",-2097503808,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns an input component. This currently does NOT handle any of\n  the default values or validation messages that we'll need to make\n  this work, though."], null)),cljs.core.pr_str.call(null,error__29417__auto___42041)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema42021_42033,new cljs.core.Keyword(null,"value","value",305978217),args__29416__auto___42039,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___42041], null));
} else {
}
} else {
}

var o__29418__auto__ = (function (){var opts = G__42024;
var children = rest42025;
while(true){
var vec__42028 = om_bootstrap.types.separate.call(null,om_bootstrap.input.Input,opts);
var input = cljs.core.nth.call(null,vec__42028,(0),null);
var attrs = cljs.core.nth.call(null,vec__42028,(1),null);
if(cljs.core.truth_(om_bootstrap.input.checkbox_or_radio_QMARK_.call(null,input))){
return om_bootstrap.input.render_form_group.call(null,input,om_bootstrap.input.render_wrapper.call(null,input,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.input.checkbox_or_radio_wrapper.call(null,input,om_bootstrap.input.render_label.call(null,input,om_bootstrap.input.render_input.call(null,input,attrs,children))),om_bootstrap.input.render_help.call(null,new cljs.core.Keyword(null,"help","help",-439233446).cljs$core$IFn$_invoke$arity$1(input))], null)));
} else {
return om_bootstrap.input.render_form_group.call(null,input,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.input.render_label.call(null,input),om_bootstrap.input.render_wrapper.call(null,input,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.input.render_input_group.call(null,cljs.core.select_keys.call(null,input,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"addon-before","addon-before",-500360384),new cljs.core.Keyword(null,"addon-after","addon-after",634985306),new cljs.core.Keyword(null,"addon-button","addon-button",136745317),new cljs.core.Keyword(null,"addon-button-before","addon-button-before",-143956251),new cljs.core.Keyword(null,"addon-button-after","addon-button-after",-1815680807)], null)),om_bootstrap.input.render_input.call(null,input,attrs,children)),om_bootstrap.input.render_icon.call(null,cljs.core.select_keys.call(null,input,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821),new cljs.core.Keyword(null,"bs-style","bs-style",1424423998)], null))),om_bootstrap.input.render_help.call(null,new cljs.core.Keyword(null,"help","help",-439233446).cljs$core$IFn$_invoke$arity$1(input))], null))], null));
}
break;
}
})();
if(cljs.core.truth_(validate__29415__auto__)){
var temp__4657__auto___42042 = output_checker42023_42035.call(null,o__29418__auto__);
if(cljs.core.truth_(temp__4657__auto___42042)){
var error__29417__auto___42043 = temp__4657__auto___42042;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"input","input",-2097503808,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns an input component. This currently does NOT handle any of\n  the default values or validation messages that we'll need to make\n  this work, though."], null)),cljs.core.pr_str.call(null,error__29417__auto___42043)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema42020_42032,new cljs.core.Keyword(null,"value","value",305978217),o__29418__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___42043], null));
} else {
}
} else {
}

return o__29418__auto__;
});})(ufv___42031,output_schema42020_42032,input_schema42021_42033,input_checker42022_42034,output_checker42023_42035))
;

om_bootstrap.input.input.cljs$lang$maxFixedArity = (1);

om_bootstrap.input.input.cljs$lang$applyTo = ((function (ufv___42031,output_schema42020_42032,input_schema42021_42033,input_checker42022_42034,output_checker42023_42035){
return (function (seq42026){
var G__42027 = cljs.core.first.call(null,seq42026);
var seq42026__$1 = cljs.core.next.call(null,seq42026);
return om_bootstrap.input.input.cljs$core$IFn$_invoke$arity$variadic(G__42027,seq42026__$1);
});})(ufv___42031,output_schema42020_42032,input_schema42021_42033,input_checker42022_42034,output_checker42023_42035))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.input),schema.core.make_fn_schema.call(null,output_schema42020_42032,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema42021_42033], null)));
var ufv___42059 = schema.utils.use_fn_validation;
var output_schema42044_42060 = om_bootstrap.types.Component;
var input_schema42045_42061 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Radio,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Radio","Radio",1790223405,null)], null)))], null);
var input_checker42046_42062 = schema.core.checker.call(null,input_schema42045_42061);
var output_checker42047_42063 = schema.core.checker.call(null,output_schema42044_42060);
/**
 * Inputs: [opts :- Radio]
 *   Returns: t/Component
 * 
 *   Generates a radio button entry, to place into a radio button
 * grouping.
 */
om_bootstrap.input.radio_option = ((function (ufv___42059,output_schema42044_42060,input_schema42045_42061,input_checker42046_42062,output_checker42047_42063){
return (function om_bootstrap$input$radio_option(G__42048){
var validate__29415__auto__ = ufv___42059.get_cell();
if(cljs.core.truth_(validate__29415__auto__)){
var args__29416__auto___42064 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__42048], null);
var temp__4657__auto___42065 = input_checker42046_42062.call(null,args__29416__auto___42064);
if(cljs.core.truth_(temp__4657__auto___42065)){
var error__29417__auto___42066 = temp__4657__auto___42065;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"radio-option","radio-option",726779012,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Generates a radio button entry, to place into a radio button\n   grouping."], null)),cljs.core.pr_str.call(null,error__29417__auto___42066)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema42045_42061,new cljs.core.Keyword(null,"value","value",305978217),args__29416__auto___42064,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___42066], null));
} else {
}
} else {
}

var o__29418__auto__ = (function (){var opts = G__42048;
while(true){
var vec__42054 = om_bootstrap.types.separate.call(null,om_bootstrap.input.Radio,opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ref","ref",1289896967),"input",new cljs.core.Keyword(null,"key","key",-1516042587),"input",new cljs.core.Keyword(null,"type","type",1174270348),"radio"], null));
var bs = cljs.core.nth.call(null,vec__42054,(0),null);
var props = cljs.core.nth.call(null,vec__42054,(1),null);
var map__42057 = bs;
var map__42057__$1 = ((((!((map__42057 == null)))?((((map__42057.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42057.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42057):map__42057);
var label = cljs.core.get.call(null,map__42057__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var checked_QMARK_ = cljs.core.get.call(null,map__42057__$1,new cljs.core.Keyword(null,"checked?","checked?",2024809091));
var inline_QMARK_ = cljs.core.get.call(null,map__42057__$1,new cljs.core.Keyword(null,"inline?","inline?",-1674483791));
var core = om_tools.dom.element.call(null,om.dom.input,cljs.core.assoc.call(null,props,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_),cljs.core.PersistentVector.EMPTY);
if(cljs.core.truth_(inline_QMARK_)){
return cljs.core.apply.call(null,React.DOM.label,{"className": "radio-inline"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[core,label],null))));
} else {
return cljs.core.apply.call(null,React.DOM.div,{"className": "radio"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.label,{},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[core,label],null))))],null))));
}
break;
}
})();
if(cljs.core.truth_(validate__29415__auto__)){
var temp__4657__auto___42067 = output_checker42047_42063.call(null,o__29418__auto__);
if(cljs.core.truth_(temp__4657__auto___42067)){
var error__29417__auto___42068 = temp__4657__auto___42067;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"radio-option","radio-option",726779012,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Generates a radio button entry, to place into a radio button\n   grouping."], null)),cljs.core.pr_str.call(null,error__29417__auto___42068)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema42044_42060,new cljs.core.Keyword(null,"value","value",305978217),o__29418__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___42068], null));
} else {
}
} else {
}

return o__29418__auto__;
});})(ufv___42059,output_schema42044_42060,input_schema42045_42061,input_checker42046_42062,output_checker42047_42063))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.radio_option),schema.core.make_fn_schema.call(null,output_schema42044_42060,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema42045_42061], null)));
var ufv___42107 = schema.utils.use_fn_validation;
var output_schema42069_42108 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.types.Component], null);
var input_schema42070_42109 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Str,cljs.core.with_meta(new cljs.core.Symbol(null,"header","header",1759972661,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null)], null))),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.pair.call(null,schema.core.Str,"option value",schema.core.Str,"option label")], null),cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.Symbol("s","Str","s/Str",907974338,null),"option value",new cljs.core.Symbol("s","Str","s/Str",907974338,null),"option label")], null)], null)))], null);
var input_checker42071_42110 = schema.core.checker.call(null,input_schema42070_42109);
var output_checker42072_42111 = schema.core.checker.call(null,output_schema42069_42108);
/**
 * Inputs: [header :- s/Str opts :- [(s/pair s/Str "option value" s/Str "option label")]]
 *   Returns: [t/Component]
 * 
 *   Returns a sequence of options for use as the children of a select
 *   input.
 */
om_bootstrap.input.options = ((function (ufv___42107,output_schema42069_42108,input_schema42070_42109,input_checker42071_42110,output_checker42072_42111){
return (function om_bootstrap$input$options(G__42073,G__42074){
var validate__29415__auto__ = ufv___42107.get_cell();
if(cljs.core.truth_(validate__29415__auto__)){
var args__29416__auto___42112 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__42073,G__42074], null);
var temp__4657__auto___42113 = input_checker42071_42110.call(null,args__29416__auto___42112);
if(cljs.core.truth_(temp__4657__auto___42113)){
var error__29417__auto___42114 = temp__4657__auto___42113;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a sequence of options for use as the children of a select\n  input."], null)),cljs.core.pr_str.call(null,error__29417__auto___42114)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema42070_42109,new cljs.core.Keyword(null,"value","value",305978217),args__29416__auto___42112,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___42114], null));
} else {
}
} else {
}

var o__29418__auto__ = (function (){var header = G__42073;
var opts = G__42074;
while(true){
return cljs.core.cons.call(null,cljs.core.apply.call(null,om.dom.option,{"value": ""},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[header],null)))),(function (){var iter__25652__auto__ = ((function (validate__29415__auto__,ufv___42107,output_schema42069_42108,input_schema42070_42109,input_checker42071_42110,output_checker42072_42111){
return (function om_bootstrap$input$options_$_iter__42091(s__42092){
return (new cljs.core.LazySeq(null,((function (validate__29415__auto__,ufv___42107,output_schema42069_42108,input_schema42070_42109,input_checker42071_42110,output_checker42072_42111){
return (function (){
var s__42092__$1 = s__42092;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__42092__$1);
if(temp__4657__auto__){
var s__42092__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__42092__$2)){
var c__25650__auto__ = cljs.core.chunk_first.call(null,s__42092__$2);
var size__25651__auto__ = cljs.core.count.call(null,c__25650__auto__);
var b__42094 = cljs.core.chunk_buffer.call(null,size__25651__auto__);
if((function (){var i__42093 = (0);
while(true){
if((i__42093 < size__25651__auto__)){
var vec__42101 = cljs.core._nth.call(null,c__25650__auto__,i__42093);
var v = cljs.core.nth.call(null,vec__42101,(0),null);
var label = cljs.core.nth.call(null,vec__42101,(1),null);
cljs.core.chunk_append.call(null,b__42094,cljs.core.apply.call(null,om.dom.option,{"value": om_tools.dom.format_opts.call(null,v)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[label],null)))));

var G__42115 = (i__42093 + (1));
i__42093 = G__42115;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42094),om_bootstrap$input$options_$_iter__42091.call(null,cljs.core.chunk_rest.call(null,s__42092__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42094),null);
}
} else {
var vec__42104 = cljs.core.first.call(null,s__42092__$2);
var v = cljs.core.nth.call(null,vec__42104,(0),null);
var label = cljs.core.nth.call(null,vec__42104,(1),null);
return cljs.core.cons.call(null,cljs.core.apply.call(null,om.dom.option,{"value": om_tools.dom.format_opts.call(null,v)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[label],null)))),om_bootstrap$input$options_$_iter__42091.call(null,cljs.core.rest.call(null,s__42092__$2)));
}
} else {
return null;
}
break;
}
});})(validate__29415__auto__,ufv___42107,output_schema42069_42108,input_schema42070_42109,input_checker42071_42110,output_checker42072_42111))
,null,null));
});})(validate__29415__auto__,ufv___42107,output_schema42069_42108,input_schema42070_42109,input_checker42071_42110,output_checker42072_42111))
;
return iter__25652__auto__.call(null,opts);
})());
break;
}
})();
if(cljs.core.truth_(validate__29415__auto__)){
var temp__4657__auto___42116 = output_checker42072_42111.call(null,o__29418__auto__);
if(cljs.core.truth_(temp__4657__auto___42116)){
var error__29417__auto___42117 = temp__4657__auto___42116;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a sequence of options for use as the children of a select\n  input."], null)),cljs.core.pr_str.call(null,error__29417__auto___42117)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema42069_42108,new cljs.core.Keyword(null,"value","value",305978217),o__29418__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___42117], null));
} else {
}
} else {
}

return o__29418__auto__;
});})(ufv___42107,output_schema42069_42108,input_schema42070_42109,input_checker42071_42110,output_checker42072_42111))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.options),schema.core.make_fn_schema.call(null,output_schema42069_42108,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema42070_42109], null)));

//# sourceMappingURL=input.js.map?rel=1486291278288