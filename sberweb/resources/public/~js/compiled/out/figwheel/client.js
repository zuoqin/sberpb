// Compiled by ClojureScript 1.9.89 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.4-4";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args47008 = [];
var len__25947__auto___47011 = arguments.length;
var i__25948__auto___47012 = (0);
while(true){
if((i__25948__auto___47012 < len__25947__auto___47011)){
args47008.push((arguments[i__25948__auto___47012]));

var G__47013 = (i__25948__auto___47012 + (1));
i__25948__auto___47012 = G__47013;
continue;
} else {
}
break;
}

var G__47010 = args47008.length;
switch (G__47010) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47008.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__25954__auto__ = [];
var len__25947__auto___47016 = arguments.length;
var i__25948__auto___47017 = (0);
while(true){
if((i__25948__auto___47017 < len__25947__auto___47016)){
args__25954__auto__.push((arguments[i__25948__auto___47017]));

var G__47018 = (i__25948__auto___47017 + (1));
i__25948__auto___47017 = G__47018;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq47015){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47015));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__25954__auto__ = [];
var len__25947__auto___47020 = arguments.length;
var i__25948__auto___47021 = (0);
while(true){
if((i__25948__auto___47021 < len__25947__auto___47020)){
args__25954__auto__.push((arguments[i__25948__auto___47021]));

var G__47022 = (i__25948__auto___47021 + (1));
i__25948__auto___47021 = G__47022;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq47019){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47019));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__47023 = cljs.core._EQ_;
var expr__47024 = (function (){var or__24872__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e47027){if((e47027 instanceof Error)){
var e = e47027;
return false;
} else {
throw e47027;

}
}})();
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__47023.call(null,"true",expr__47024))){
return true;
} else {
if(cljs.core.truth_(pred__47023.call(null,"false",expr__47024))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__47024)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e47029){if((e47029 instanceof Error)){
var e = e47029;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e47029;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__47030){
var map__47033 = p__47030;
var map__47033__$1 = ((((!((map__47033 == null)))?((((map__47033.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47033.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47033):map__47033);
var message = cljs.core.get.call(null,map__47033__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__47033__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__24872__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__24860__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__24860__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__24860__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__36937__auto___47195 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36937__auto___47195,ch){
return (function (){
var f__36938__auto__ = (function (){var switch__36825__auto__ = ((function (c__36937__auto___47195,ch){
return (function (state_47164){
var state_val_47165 = (state_47164[(1)]);
if((state_val_47165 === (7))){
var inst_47160 = (state_47164[(2)]);
var state_47164__$1 = state_47164;
var statearr_47166_47196 = state_47164__$1;
(statearr_47166_47196[(2)] = inst_47160);

(statearr_47166_47196[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47165 === (1))){
var state_47164__$1 = state_47164;
var statearr_47167_47197 = state_47164__$1;
(statearr_47167_47197[(2)] = null);

(statearr_47167_47197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47165 === (4))){
var inst_47117 = (state_47164[(7)]);
var inst_47117__$1 = (state_47164[(2)]);
var state_47164__$1 = (function (){var statearr_47168 = state_47164;
(statearr_47168[(7)] = inst_47117__$1);

return statearr_47168;
})();
if(cljs.core.truth_(inst_47117__$1)){
var statearr_47169_47198 = state_47164__$1;
(statearr_47169_47198[(1)] = (5));

} else {
var statearr_47170_47199 = state_47164__$1;
(statearr_47170_47199[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47165 === (15))){
var inst_47124 = (state_47164[(8)]);
var inst_47139 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_47124);
var inst_47140 = cljs.core.first.call(null,inst_47139);
var inst_47141 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_47140);
var inst_47142 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_47141)].join('');
var inst_47143 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_47142);
var state_47164__$1 = state_47164;
var statearr_47171_47200 = state_47164__$1;
(statearr_47171_47200[(2)] = inst_47143);

(statearr_47171_47200[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47165 === (13))){
var inst_47148 = (state_47164[(2)]);
var state_47164__$1 = state_47164;
var statearr_47172_47201 = state_47164__$1;
(statearr_47172_47201[(2)] = inst_47148);

(statearr_47172_47201[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47165 === (6))){
var state_47164__$1 = state_47164;
var statearr_47173_47202 = state_47164__$1;
(statearr_47173_47202[(2)] = null);

(statearr_47173_47202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47165 === (17))){
var inst_47146 = (state_47164[(2)]);
var state_47164__$1 = state_47164;
var statearr_47174_47203 = state_47164__$1;
(statearr_47174_47203[(2)] = inst_47146);

(statearr_47174_47203[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47165 === (3))){
var inst_47162 = (state_47164[(2)]);
var state_47164__$1 = state_47164;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47164__$1,inst_47162);
} else {
if((state_val_47165 === (12))){
var inst_47123 = (state_47164[(9)]);
var inst_47137 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_47123,opts);
var state_47164__$1 = state_47164;
if(cljs.core.truth_(inst_47137)){
var statearr_47175_47204 = state_47164__$1;
(statearr_47175_47204[(1)] = (15));

} else {
var statearr_47176_47205 = state_47164__$1;
(statearr_47176_47205[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47165 === (2))){
var state_47164__$1 = state_47164;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47164__$1,(4),ch);
} else {
if((state_val_47165 === (11))){
var inst_47124 = (state_47164[(8)]);
var inst_47129 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47130 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_47124);
var inst_47131 = cljs.core.async.timeout.call(null,(1000));
var inst_47132 = [inst_47130,inst_47131];
var inst_47133 = (new cljs.core.PersistentVector(null,2,(5),inst_47129,inst_47132,null));
var state_47164__$1 = state_47164;
return cljs.core.async.ioc_alts_BANG_.call(null,state_47164__$1,(14),inst_47133);
} else {
if((state_val_47165 === (9))){
var inst_47124 = (state_47164[(8)]);
var inst_47150 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_47151 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_47124);
var inst_47152 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_47151);
var inst_47153 = [cljs.core.str("Not loading: "),cljs.core.str(inst_47152)].join('');
var inst_47154 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_47153);
var state_47164__$1 = (function (){var statearr_47177 = state_47164;
(statearr_47177[(10)] = inst_47150);

return statearr_47177;
})();
var statearr_47178_47206 = state_47164__$1;
(statearr_47178_47206[(2)] = inst_47154);

(statearr_47178_47206[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47165 === (5))){
var inst_47117 = (state_47164[(7)]);
var inst_47119 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_47120 = (new cljs.core.PersistentArrayMap(null,2,inst_47119,null));
var inst_47121 = (new cljs.core.PersistentHashSet(null,inst_47120,null));
var inst_47122 = figwheel.client.focus_msgs.call(null,inst_47121,inst_47117);
var inst_47123 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_47122);
var inst_47124 = cljs.core.first.call(null,inst_47122);
var inst_47125 = figwheel.client.autoload_QMARK_.call(null);
var state_47164__$1 = (function (){var statearr_47179 = state_47164;
(statearr_47179[(9)] = inst_47123);

(statearr_47179[(8)] = inst_47124);

return statearr_47179;
})();
if(cljs.core.truth_(inst_47125)){
var statearr_47180_47207 = state_47164__$1;
(statearr_47180_47207[(1)] = (8));

} else {
var statearr_47181_47208 = state_47164__$1;
(statearr_47181_47208[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47165 === (14))){
var inst_47135 = (state_47164[(2)]);
var state_47164__$1 = state_47164;
var statearr_47182_47209 = state_47164__$1;
(statearr_47182_47209[(2)] = inst_47135);

(statearr_47182_47209[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47165 === (16))){
var state_47164__$1 = state_47164;
var statearr_47183_47210 = state_47164__$1;
(statearr_47183_47210[(2)] = null);

(statearr_47183_47210[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47165 === (10))){
var inst_47156 = (state_47164[(2)]);
var state_47164__$1 = (function (){var statearr_47184 = state_47164;
(statearr_47184[(11)] = inst_47156);

return statearr_47184;
})();
var statearr_47185_47211 = state_47164__$1;
(statearr_47185_47211[(2)] = null);

(statearr_47185_47211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47165 === (8))){
var inst_47123 = (state_47164[(9)]);
var inst_47127 = figwheel.client.reload_file_state_QMARK_.call(null,inst_47123,opts);
var state_47164__$1 = state_47164;
if(cljs.core.truth_(inst_47127)){
var statearr_47186_47212 = state_47164__$1;
(statearr_47186_47212[(1)] = (11));

} else {
var statearr_47187_47213 = state_47164__$1;
(statearr_47187_47213[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__36937__auto___47195,ch))
;
return ((function (switch__36825__auto__,c__36937__auto___47195,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__36826__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__36826__auto____0 = (function (){
var statearr_47191 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47191[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__36826__auto__);

(statearr_47191[(1)] = (1));

return statearr_47191;
});
var figwheel$client$file_reloader_plugin_$_state_machine__36826__auto____1 = (function (state_47164){
while(true){
var ret_value__36827__auto__ = (function (){try{while(true){
var result__36828__auto__ = switch__36825__auto__.call(null,state_47164);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36828__auto__;
}
break;
}
}catch (e47192){if((e47192 instanceof Object)){
var ex__36829__auto__ = e47192;
var statearr_47193_47214 = state_47164;
(statearr_47193_47214[(5)] = ex__36829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47164);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47192;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47215 = state_47164;
state_47164 = G__47215;
continue;
} else {
return ret_value__36827__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__36826__auto__ = function(state_47164){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__36826__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__36826__auto____1.call(this,state_47164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__36826__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__36826__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__36826__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__36826__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__36826__auto__;
})()
;})(switch__36825__auto__,c__36937__auto___47195,ch))
})();
var state__36939__auto__ = (function (){var statearr_47194 = f__36938__auto__.call(null);
(statearr_47194[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36937__auto___47195);

return statearr_47194;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36939__auto__);
});})(c__36937__auto___47195,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__47216_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__47216_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_47219 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_47219){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e47218){if((e47218 instanceof Error)){
var e = e47218;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_47219], null));
} else {
var e = e47218;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_47219))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__47220){
var map__47229 = p__47220;
var map__47229__$1 = ((((!((map__47229 == null)))?((((map__47229.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47229.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47229):map__47229);
var opts = map__47229__$1;
var build_id = cljs.core.get.call(null,map__47229__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__47229,map__47229__$1,opts,build_id){
return (function (p__47231){
var vec__47232 = p__47231;
var seq__47233 = cljs.core.seq.call(null,vec__47232);
var first__47234 = cljs.core.first.call(null,seq__47233);
var seq__47233__$1 = cljs.core.next.call(null,seq__47233);
var map__47235 = first__47234;
var map__47235__$1 = ((((!((map__47235 == null)))?((((map__47235.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47235.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47235):map__47235);
var msg = map__47235__$1;
var msg_name = cljs.core.get.call(null,map__47235__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__47233__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__47232,seq__47233,first__47234,seq__47233__$1,map__47235,map__47235__$1,msg,msg_name,_,map__47229,map__47229__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__47232,seq__47233,first__47234,seq__47233__$1,map__47235,map__47235__$1,msg,msg_name,_,map__47229,map__47229__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__47229,map__47229__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__47243){
var vec__47244 = p__47243;
var seq__47245 = cljs.core.seq.call(null,vec__47244);
var first__47246 = cljs.core.first.call(null,seq__47245);
var seq__47245__$1 = cljs.core.next.call(null,seq__47245);
var map__47247 = first__47246;
var map__47247__$1 = ((((!((map__47247 == null)))?((((map__47247.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47247.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47247):map__47247);
var msg = map__47247__$1;
var msg_name = cljs.core.get.call(null,map__47247__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__47245__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__47249){
var map__47261 = p__47249;
var map__47261__$1 = ((((!((map__47261 == null)))?((((map__47261.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47261.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47261):map__47261);
var on_compile_warning = cljs.core.get.call(null,map__47261__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__47261__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__47261,map__47261__$1,on_compile_warning,on_compile_fail){
return (function (p__47263){
var vec__47264 = p__47263;
var seq__47265 = cljs.core.seq.call(null,vec__47264);
var first__47266 = cljs.core.first.call(null,seq__47265);
var seq__47265__$1 = cljs.core.next.call(null,seq__47265);
var map__47267 = first__47266;
var map__47267__$1 = ((((!((map__47267 == null)))?((((map__47267.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47267.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47267):map__47267);
var msg = map__47267__$1;
var msg_name = cljs.core.get.call(null,map__47267__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__47265__$1;
var pred__47269 = cljs.core._EQ_;
var expr__47270 = msg_name;
if(cljs.core.truth_(pred__47269.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__47270))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__47269.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__47270))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__47261,map__47261__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__36937__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36937__auto__,msg_hist,msg_names,msg){
return (function (){
var f__36938__auto__ = (function (){var switch__36825__auto__ = ((function (c__36937__auto__,msg_hist,msg_names,msg){
return (function (state_47478){
var state_val_47479 = (state_47478[(1)]);
if((state_val_47479 === (7))){
var inst_47406 = (state_47478[(2)]);
var state_47478__$1 = state_47478;
if(cljs.core.truth_(inst_47406)){
var statearr_47480_47526 = state_47478__$1;
(statearr_47480_47526[(1)] = (8));

} else {
var statearr_47481_47527 = state_47478__$1;
(statearr_47481_47527[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47479 === (20))){
var inst_47472 = (state_47478[(2)]);
var state_47478__$1 = state_47478;
var statearr_47482_47528 = state_47478__$1;
(statearr_47482_47528[(2)] = inst_47472);

(statearr_47482_47528[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47479 === (27))){
var inst_47468 = (state_47478[(2)]);
var state_47478__$1 = state_47478;
var statearr_47483_47529 = state_47478__$1;
(statearr_47483_47529[(2)] = inst_47468);

(statearr_47483_47529[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47479 === (1))){
var inst_47399 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_47478__$1 = state_47478;
if(cljs.core.truth_(inst_47399)){
var statearr_47484_47530 = state_47478__$1;
(statearr_47484_47530[(1)] = (2));

} else {
var statearr_47485_47531 = state_47478__$1;
(statearr_47485_47531[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47479 === (24))){
var inst_47470 = (state_47478[(2)]);
var state_47478__$1 = state_47478;
var statearr_47486_47532 = state_47478__$1;
(statearr_47486_47532[(2)] = inst_47470);

(statearr_47486_47532[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47479 === (4))){
var inst_47476 = (state_47478[(2)]);
var state_47478__$1 = state_47478;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47478__$1,inst_47476);
} else {
if((state_val_47479 === (15))){
var inst_47474 = (state_47478[(2)]);
var state_47478__$1 = state_47478;
var statearr_47487_47533 = state_47478__$1;
(statearr_47487_47533[(2)] = inst_47474);

(statearr_47487_47533[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47479 === (21))){
var inst_47433 = (state_47478[(2)]);
var state_47478__$1 = state_47478;
var statearr_47488_47534 = state_47478__$1;
(statearr_47488_47534[(2)] = inst_47433);

(statearr_47488_47534[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47479 === (31))){
var inst_47457 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_47478__$1 = state_47478;
if(cljs.core.truth_(inst_47457)){
var statearr_47489_47535 = state_47478__$1;
(statearr_47489_47535[(1)] = (34));

} else {
var statearr_47490_47536 = state_47478__$1;
(statearr_47490_47536[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47479 === (32))){
var inst_47466 = (state_47478[(2)]);
var state_47478__$1 = state_47478;
var statearr_47491_47537 = state_47478__$1;
(statearr_47491_47537[(2)] = inst_47466);

(statearr_47491_47537[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47479 === (33))){
var inst_47455 = (state_47478[(2)]);
var state_47478__$1 = state_47478;
var statearr_47492_47538 = state_47478__$1;
(statearr_47492_47538[(2)] = inst_47455);

(statearr_47492_47538[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47479 === (13))){
var inst_47420 = figwheel.client.heads_up.clear.call(null);
var state_47478__$1 = state_47478;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47478__$1,(16),inst_47420);
} else {
if((state_val_47479 === (22))){
var inst_47437 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47438 = figwheel.client.heads_up.append_warning_message.call(null,inst_47437);
var state_47478__$1 = state_47478;
var statearr_47493_47539 = state_47478__$1;
(statearr_47493_47539[(2)] = inst_47438);

(statearr_47493_47539[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47479 === (36))){
var inst_47464 = (state_47478[(2)]);
var state_47478__$1 = state_47478;
var statearr_47494_47540 = state_47478__$1;
(statearr_47494_47540[(2)] = inst_47464);

(statearr_47494_47540[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47479 === (29))){
var inst_47448 = (state_47478[(2)]);
var state_47478__$1 = state_47478;
var statearr_47495_47541 = state_47478__$1;
(statearr_47495_47541[(2)] = inst_47448);

(statearr_47495_47541[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47479 === (6))){
var inst_47401 = (state_47478[(7)]);
var state_47478__$1 = state_47478;
var statearr_47496_47542 = state_47478__$1;
(statearr_47496_47542[(2)] = inst_47401);

(statearr_47496_47542[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47479 === (28))){
var inst_47444 = (state_47478[(2)]);
var inst_47445 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47446 = figwheel.client.heads_up.display_warning.call(null,inst_47445);
var state_47478__$1 = (function (){var statearr_47497 = state_47478;
(statearr_47497[(8)] = inst_47444);

return statearr_47497;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47478__$1,(29),inst_47446);
} else {
if((state_val_47479 === (25))){
var inst_47442 = figwheel.client.heads_up.clear.call(null);
var state_47478__$1 = state_47478;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47478__$1,(28),inst_47442);
} else {
if((state_val_47479 === (34))){
var inst_47459 = figwheel.client.heads_up.flash_loaded.call(null);
var state_47478__$1 = state_47478;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47478__$1,(37),inst_47459);
} else {
if((state_val_47479 === (17))){
var inst_47426 = (state_47478[(2)]);
var state_47478__$1 = state_47478;
var statearr_47498_47543 = state_47478__$1;
(statearr_47498_47543[(2)] = inst_47426);

(statearr_47498_47543[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47479 === (3))){
var inst_47418 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_47478__$1 = state_47478;
if(cljs.core.truth_(inst_47418)){
var statearr_47499_47544 = state_47478__$1;
(statearr_47499_47544[(1)] = (13));

} else {
var statearr_47500_47545 = state_47478__$1;
(statearr_47500_47545[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47479 === (12))){
var inst_47414 = (state_47478[(2)]);
var state_47478__$1 = state_47478;
var statearr_47501_47546 = state_47478__$1;
(statearr_47501_47546[(2)] = inst_47414);

(statearr_47501_47546[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47479 === (2))){
var inst_47401 = (state_47478[(7)]);
var inst_47401__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_47478__$1 = (function (){var statearr_47502 = state_47478;
(statearr_47502[(7)] = inst_47401__$1);

return statearr_47502;
})();
if(cljs.core.truth_(inst_47401__$1)){
var statearr_47503_47547 = state_47478__$1;
(statearr_47503_47547[(1)] = (5));

} else {
var statearr_47504_47548 = state_47478__$1;
(statearr_47504_47548[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47479 === (23))){
var inst_47440 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_47478__$1 = state_47478;
if(cljs.core.truth_(inst_47440)){
var statearr_47505_47549 = state_47478__$1;
(statearr_47505_47549[(1)] = (25));

} else {
var statearr_47506_47550 = state_47478__$1;
(statearr_47506_47550[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47479 === (35))){
var state_47478__$1 = state_47478;
var statearr_47507_47551 = state_47478__$1;
(statearr_47507_47551[(2)] = null);

(statearr_47507_47551[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47479 === (19))){
var inst_47435 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_47478__$1 = state_47478;
if(cljs.core.truth_(inst_47435)){
var statearr_47508_47552 = state_47478__$1;
(statearr_47508_47552[(1)] = (22));

} else {
var statearr_47509_47553 = state_47478__$1;
(statearr_47509_47553[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47479 === (11))){
var inst_47410 = (state_47478[(2)]);
var state_47478__$1 = state_47478;
var statearr_47510_47554 = state_47478__$1;
(statearr_47510_47554[(2)] = inst_47410);

(statearr_47510_47554[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47479 === (9))){
var inst_47412 = figwheel.client.heads_up.clear.call(null);
var state_47478__$1 = state_47478;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47478__$1,(12),inst_47412);
} else {
if((state_val_47479 === (5))){
var inst_47403 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_47478__$1 = state_47478;
var statearr_47511_47555 = state_47478__$1;
(statearr_47511_47555[(2)] = inst_47403);

(statearr_47511_47555[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47479 === (14))){
var inst_47428 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_47478__$1 = state_47478;
if(cljs.core.truth_(inst_47428)){
var statearr_47512_47556 = state_47478__$1;
(statearr_47512_47556[(1)] = (18));

} else {
var statearr_47513_47557 = state_47478__$1;
(statearr_47513_47557[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47479 === (26))){
var inst_47450 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_47478__$1 = state_47478;
if(cljs.core.truth_(inst_47450)){
var statearr_47514_47558 = state_47478__$1;
(statearr_47514_47558[(1)] = (30));

} else {
var statearr_47515_47559 = state_47478__$1;
(statearr_47515_47559[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47479 === (16))){
var inst_47422 = (state_47478[(2)]);
var inst_47423 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47424 = figwheel.client.heads_up.display_exception.call(null,inst_47423);
var state_47478__$1 = (function (){var statearr_47516 = state_47478;
(statearr_47516[(9)] = inst_47422);

return statearr_47516;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47478__$1,(17),inst_47424);
} else {
if((state_val_47479 === (30))){
var inst_47452 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47453 = figwheel.client.heads_up.display_warning.call(null,inst_47452);
var state_47478__$1 = state_47478;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47478__$1,(33),inst_47453);
} else {
if((state_val_47479 === (10))){
var inst_47416 = (state_47478[(2)]);
var state_47478__$1 = state_47478;
var statearr_47517_47560 = state_47478__$1;
(statearr_47517_47560[(2)] = inst_47416);

(statearr_47517_47560[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47479 === (18))){
var inst_47430 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47431 = figwheel.client.heads_up.display_exception.call(null,inst_47430);
var state_47478__$1 = state_47478;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47478__$1,(21),inst_47431);
} else {
if((state_val_47479 === (37))){
var inst_47461 = (state_47478[(2)]);
var state_47478__$1 = state_47478;
var statearr_47518_47561 = state_47478__$1;
(statearr_47518_47561[(2)] = inst_47461);

(statearr_47518_47561[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47479 === (8))){
var inst_47408 = figwheel.client.heads_up.flash_loaded.call(null);
var state_47478__$1 = state_47478;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47478__$1,(11),inst_47408);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__36937__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__36825__auto__,c__36937__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36826__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36826__auto____0 = (function (){
var statearr_47522 = [null,null,null,null,null,null,null,null,null,null];
(statearr_47522[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36826__auto__);

(statearr_47522[(1)] = (1));

return statearr_47522;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36826__auto____1 = (function (state_47478){
while(true){
var ret_value__36827__auto__ = (function (){try{while(true){
var result__36828__auto__ = switch__36825__auto__.call(null,state_47478);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36828__auto__;
}
break;
}
}catch (e47523){if((e47523 instanceof Object)){
var ex__36829__auto__ = e47523;
var statearr_47524_47562 = state_47478;
(statearr_47524_47562[(5)] = ex__36829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47478);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47523;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47563 = state_47478;
state_47478 = G__47563;
continue;
} else {
return ret_value__36827__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36826__auto__ = function(state_47478){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36826__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36826__auto____1.call(this,state_47478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36826__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36826__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36826__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36826__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36826__auto__;
})()
;})(switch__36825__auto__,c__36937__auto__,msg_hist,msg_names,msg))
})();
var state__36939__auto__ = (function (){var statearr_47525 = f__36938__auto__.call(null);
(statearr_47525[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36937__auto__);

return statearr_47525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36939__auto__);
});})(c__36937__auto__,msg_hist,msg_names,msg))
);

return c__36937__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__36937__auto___47626 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36937__auto___47626,ch){
return (function (){
var f__36938__auto__ = (function (){var switch__36825__auto__ = ((function (c__36937__auto___47626,ch){
return (function (state_47609){
var state_val_47610 = (state_47609[(1)]);
if((state_val_47610 === (1))){
var state_47609__$1 = state_47609;
var statearr_47611_47627 = state_47609__$1;
(statearr_47611_47627[(2)] = null);

(statearr_47611_47627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47610 === (2))){
var state_47609__$1 = state_47609;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47609__$1,(4),ch);
} else {
if((state_val_47610 === (3))){
var inst_47607 = (state_47609[(2)]);
var state_47609__$1 = state_47609;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47609__$1,inst_47607);
} else {
if((state_val_47610 === (4))){
var inst_47597 = (state_47609[(7)]);
var inst_47597__$1 = (state_47609[(2)]);
var state_47609__$1 = (function (){var statearr_47612 = state_47609;
(statearr_47612[(7)] = inst_47597__$1);

return statearr_47612;
})();
if(cljs.core.truth_(inst_47597__$1)){
var statearr_47613_47628 = state_47609__$1;
(statearr_47613_47628[(1)] = (5));

} else {
var statearr_47614_47629 = state_47609__$1;
(statearr_47614_47629[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47610 === (5))){
var inst_47597 = (state_47609[(7)]);
var inst_47599 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_47597);
var state_47609__$1 = state_47609;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47609__$1,(8),inst_47599);
} else {
if((state_val_47610 === (6))){
var state_47609__$1 = state_47609;
var statearr_47615_47630 = state_47609__$1;
(statearr_47615_47630[(2)] = null);

(statearr_47615_47630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47610 === (7))){
var inst_47605 = (state_47609[(2)]);
var state_47609__$1 = state_47609;
var statearr_47616_47631 = state_47609__$1;
(statearr_47616_47631[(2)] = inst_47605);

(statearr_47616_47631[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47610 === (8))){
var inst_47601 = (state_47609[(2)]);
var state_47609__$1 = (function (){var statearr_47617 = state_47609;
(statearr_47617[(8)] = inst_47601);

return statearr_47617;
})();
var statearr_47618_47632 = state_47609__$1;
(statearr_47618_47632[(2)] = null);

(statearr_47618_47632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__36937__auto___47626,ch))
;
return ((function (switch__36825__auto__,c__36937__auto___47626,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__36826__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__36826__auto____0 = (function (){
var statearr_47622 = [null,null,null,null,null,null,null,null,null];
(statearr_47622[(0)] = figwheel$client$heads_up_plugin_$_state_machine__36826__auto__);

(statearr_47622[(1)] = (1));

return statearr_47622;
});
var figwheel$client$heads_up_plugin_$_state_machine__36826__auto____1 = (function (state_47609){
while(true){
var ret_value__36827__auto__ = (function (){try{while(true){
var result__36828__auto__ = switch__36825__auto__.call(null,state_47609);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36828__auto__;
}
break;
}
}catch (e47623){if((e47623 instanceof Object)){
var ex__36829__auto__ = e47623;
var statearr_47624_47633 = state_47609;
(statearr_47624_47633[(5)] = ex__36829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47609);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47623;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47634 = state_47609;
state_47609 = G__47634;
continue;
} else {
return ret_value__36827__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__36826__auto__ = function(state_47609){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__36826__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__36826__auto____1.call(this,state_47609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__36826__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__36826__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__36826__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__36826__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__36826__auto__;
})()
;})(switch__36825__auto__,c__36937__auto___47626,ch))
})();
var state__36939__auto__ = (function (){var statearr_47625 = f__36938__auto__.call(null);
(statearr_47625[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36937__auto___47626);

return statearr_47625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36939__auto__);
});})(c__36937__auto___47626,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__36937__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36937__auto__){
return (function (){
var f__36938__auto__ = (function (){var switch__36825__auto__ = ((function (c__36937__auto__){
return (function (state_47655){
var state_val_47656 = (state_47655[(1)]);
if((state_val_47656 === (1))){
var inst_47650 = cljs.core.async.timeout.call(null,(3000));
var state_47655__$1 = state_47655;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47655__$1,(2),inst_47650);
} else {
if((state_val_47656 === (2))){
var inst_47652 = (state_47655[(2)]);
var inst_47653 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_47655__$1 = (function (){var statearr_47657 = state_47655;
(statearr_47657[(7)] = inst_47652);

return statearr_47657;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47655__$1,inst_47653);
} else {
return null;
}
}
});})(c__36937__auto__))
;
return ((function (switch__36825__auto__,c__36937__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__36826__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__36826__auto____0 = (function (){
var statearr_47661 = [null,null,null,null,null,null,null,null];
(statearr_47661[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__36826__auto__);

(statearr_47661[(1)] = (1));

return statearr_47661;
});
var figwheel$client$enforce_project_plugin_$_state_machine__36826__auto____1 = (function (state_47655){
while(true){
var ret_value__36827__auto__ = (function (){try{while(true){
var result__36828__auto__ = switch__36825__auto__.call(null,state_47655);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36828__auto__;
}
break;
}
}catch (e47662){if((e47662 instanceof Object)){
var ex__36829__auto__ = e47662;
var statearr_47663_47665 = state_47655;
(statearr_47663_47665[(5)] = ex__36829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47655);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47662;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47666 = state_47655;
state_47655 = G__47666;
continue;
} else {
return ret_value__36827__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__36826__auto__ = function(state_47655){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__36826__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__36826__auto____1.call(this,state_47655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__36826__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__36826__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__36826__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__36826__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__36826__auto__;
})()
;})(switch__36825__auto__,c__36937__auto__))
})();
var state__36939__auto__ = (function (){var statearr_47664 = f__36938__auto__.call(null);
(statearr_47664[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36937__auto__);

return statearr_47664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36939__auto__);
});})(c__36937__auto__))
);

return c__36937__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__36937__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36937__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__36938__auto__ = (function (){var switch__36825__auto__ = ((function (c__36937__auto__,figwheel_version,temp__4657__auto__){
return (function (state_47689){
var state_val_47690 = (state_47689[(1)]);
if((state_val_47690 === (1))){
var inst_47683 = cljs.core.async.timeout.call(null,(2000));
var state_47689__$1 = state_47689;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47689__$1,(2),inst_47683);
} else {
if((state_val_47690 === (2))){
var inst_47685 = (state_47689[(2)]);
var inst_47686 = [cljs.core.str("Figwheel Client Version \""),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("\" is not equal to "),cljs.core.str("Figwheel Sidecar Version \""),cljs.core.str(figwheel_version),cljs.core.str("\""),cljs.core.str(".  Shutting down Websocket Connection!")].join('');
var inst_47687 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_47686);
var state_47689__$1 = (function (){var statearr_47691 = state_47689;
(statearr_47691[(7)] = inst_47685);

return statearr_47691;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47689__$1,inst_47687);
} else {
return null;
}
}
});})(c__36937__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__36825__auto__,c__36937__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36826__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36826__auto____0 = (function (){
var statearr_47695 = [null,null,null,null,null,null,null,null];
(statearr_47695[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36826__auto__);

(statearr_47695[(1)] = (1));

return statearr_47695;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36826__auto____1 = (function (state_47689){
while(true){
var ret_value__36827__auto__ = (function (){try{while(true){
var result__36828__auto__ = switch__36825__auto__.call(null,state_47689);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36828__auto__;
}
break;
}
}catch (e47696){if((e47696 instanceof Object)){
var ex__36829__auto__ = e47696;
var statearr_47697_47699 = state_47689;
(statearr_47697_47699[(5)] = ex__36829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47689);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47696;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47700 = state_47689;
state_47689 = G__47700;
continue;
} else {
return ret_value__36827__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36826__auto__ = function(state_47689){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36826__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36826__auto____1.call(this,state_47689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36826__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36826__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36826__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36826__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36826__auto__;
})()
;})(switch__36825__auto__,c__36937__auto__,figwheel_version,temp__4657__auto__))
})();
var state__36939__auto__ = (function (){var statearr_47698 = f__36938__auto__.call(null);
(statearr_47698[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36937__auto__);

return statearr_47698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36939__auto__);
});})(c__36937__auto__,figwheel_version,temp__4657__auto__))
);

return c__36937__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__47701){
var map__47705 = p__47701;
var map__47705__$1 = ((((!((map__47705 == null)))?((((map__47705.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47705.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47705):map__47705);
var file = cljs.core.get.call(null,map__47705__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__47705__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__47705__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__47707 = "";
var G__47707__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__47707),cljs.core.str("file "),cljs.core.str(file)].join(''):G__47707);
var G__47707__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__47707__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__47707__$1);
if(cljs.core.truth_((function (){var and__24860__auto__ = line;
if(cljs.core.truth_(and__24860__auto__)){
return column;
} else {
return and__24860__auto__;
}
})())){
return [cljs.core.str(G__47707__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__47707__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__47708){
var map__47715 = p__47708;
var map__47715__$1 = ((((!((map__47715 == null)))?((((map__47715.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47715.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47715):map__47715);
var ed = map__47715__$1;
var formatted_exception = cljs.core.get.call(null,map__47715__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__47715__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__47715__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__47717_47721 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__47718_47722 = null;
var count__47719_47723 = (0);
var i__47720_47724 = (0);
while(true){
if((i__47720_47724 < count__47719_47723)){
var msg_47725 = cljs.core._nth.call(null,chunk__47718_47722,i__47720_47724);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_47725);

var G__47726 = seq__47717_47721;
var G__47727 = chunk__47718_47722;
var G__47728 = count__47719_47723;
var G__47729 = (i__47720_47724 + (1));
seq__47717_47721 = G__47726;
chunk__47718_47722 = G__47727;
count__47719_47723 = G__47728;
i__47720_47724 = G__47729;
continue;
} else {
var temp__4657__auto___47730 = cljs.core.seq.call(null,seq__47717_47721);
if(temp__4657__auto___47730){
var seq__47717_47731__$1 = temp__4657__auto___47730;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47717_47731__$1)){
var c__25683__auto___47732 = cljs.core.chunk_first.call(null,seq__47717_47731__$1);
var G__47733 = cljs.core.chunk_rest.call(null,seq__47717_47731__$1);
var G__47734 = c__25683__auto___47732;
var G__47735 = cljs.core.count.call(null,c__25683__auto___47732);
var G__47736 = (0);
seq__47717_47721 = G__47733;
chunk__47718_47722 = G__47734;
count__47719_47723 = G__47735;
i__47720_47724 = G__47736;
continue;
} else {
var msg_47737 = cljs.core.first.call(null,seq__47717_47731__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_47737);

var G__47738 = cljs.core.next.call(null,seq__47717_47731__$1);
var G__47739 = null;
var G__47740 = (0);
var G__47741 = (0);
seq__47717_47721 = G__47738;
chunk__47718_47722 = G__47739;
count__47719_47723 = G__47740;
i__47720_47724 = G__47741;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__47742){
var map__47745 = p__47742;
var map__47745__$1 = ((((!((map__47745 == null)))?((((map__47745.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47745.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47745):map__47745);
var w = map__47745__$1;
var message = cljs.core.get.call(null,map__47745__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources\\public\\js\\compiled\\out\\figwheel\\client.cljs",33,1,323,323,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources\\public\\js\\compiled\\out\\figwheel\\client.cljs",30,1,315,315,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__24860__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__24860__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__24860__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__47757 = cljs.core.seq.call(null,plugins);
var chunk__47758 = null;
var count__47759 = (0);
var i__47760 = (0);
while(true){
if((i__47760 < count__47759)){
var vec__47761 = cljs.core._nth.call(null,chunk__47758,i__47760);
var k = cljs.core.nth.call(null,vec__47761,(0),null);
var plugin = cljs.core.nth.call(null,vec__47761,(1),null);
if(cljs.core.truth_(plugin)){
var pl_47767 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__47757,chunk__47758,count__47759,i__47760,pl_47767,vec__47761,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_47767.call(null,msg_hist);
});})(seq__47757,chunk__47758,count__47759,i__47760,pl_47767,vec__47761,k,plugin))
);
} else {
}

var G__47768 = seq__47757;
var G__47769 = chunk__47758;
var G__47770 = count__47759;
var G__47771 = (i__47760 + (1));
seq__47757 = G__47768;
chunk__47758 = G__47769;
count__47759 = G__47770;
i__47760 = G__47771;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__47757);
if(temp__4657__auto__){
var seq__47757__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47757__$1)){
var c__25683__auto__ = cljs.core.chunk_first.call(null,seq__47757__$1);
var G__47772 = cljs.core.chunk_rest.call(null,seq__47757__$1);
var G__47773 = c__25683__auto__;
var G__47774 = cljs.core.count.call(null,c__25683__auto__);
var G__47775 = (0);
seq__47757 = G__47772;
chunk__47758 = G__47773;
count__47759 = G__47774;
i__47760 = G__47775;
continue;
} else {
var vec__47764 = cljs.core.first.call(null,seq__47757__$1);
var k = cljs.core.nth.call(null,vec__47764,(0),null);
var plugin = cljs.core.nth.call(null,vec__47764,(1),null);
if(cljs.core.truth_(plugin)){
var pl_47776 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__47757,chunk__47758,count__47759,i__47760,pl_47776,vec__47764,k,plugin,seq__47757__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_47776.call(null,msg_hist);
});})(seq__47757,chunk__47758,count__47759,i__47760,pl_47776,vec__47764,k,plugin,seq__47757__$1,temp__4657__auto__))
);
} else {
}

var G__47777 = cljs.core.next.call(null,seq__47757__$1);
var G__47778 = null;
var G__47779 = (0);
var G__47780 = (0);
seq__47757 = G__47777;
chunk__47758 = G__47778;
count__47759 = G__47779;
i__47760 = G__47780;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args47781 = [];
var len__25947__auto___47788 = arguments.length;
var i__25948__auto___47789 = (0);
while(true){
if((i__25948__auto___47789 < len__25947__auto___47788)){
args47781.push((arguments[i__25948__auto___47789]));

var G__47790 = (i__25948__auto___47789 + (1));
i__25948__auto___47789 = G__47790;
continue;
} else {
}
break;
}

var G__47783 = args47781.length;
switch (G__47783) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47781.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__47784_47792 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__47785_47793 = null;
var count__47786_47794 = (0);
var i__47787_47795 = (0);
while(true){
if((i__47787_47795 < count__47786_47794)){
var msg_47796 = cljs.core._nth.call(null,chunk__47785_47793,i__47787_47795);
figwheel.client.socket.handle_incoming_message.call(null,msg_47796);

var G__47797 = seq__47784_47792;
var G__47798 = chunk__47785_47793;
var G__47799 = count__47786_47794;
var G__47800 = (i__47787_47795 + (1));
seq__47784_47792 = G__47797;
chunk__47785_47793 = G__47798;
count__47786_47794 = G__47799;
i__47787_47795 = G__47800;
continue;
} else {
var temp__4657__auto___47801 = cljs.core.seq.call(null,seq__47784_47792);
if(temp__4657__auto___47801){
var seq__47784_47802__$1 = temp__4657__auto___47801;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47784_47802__$1)){
var c__25683__auto___47803 = cljs.core.chunk_first.call(null,seq__47784_47802__$1);
var G__47804 = cljs.core.chunk_rest.call(null,seq__47784_47802__$1);
var G__47805 = c__25683__auto___47803;
var G__47806 = cljs.core.count.call(null,c__25683__auto___47803);
var G__47807 = (0);
seq__47784_47792 = G__47804;
chunk__47785_47793 = G__47805;
count__47786_47794 = G__47806;
i__47787_47795 = G__47807;
continue;
} else {
var msg_47808 = cljs.core.first.call(null,seq__47784_47802__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_47808);

var G__47809 = cljs.core.next.call(null,seq__47784_47802__$1);
var G__47810 = null;
var G__47811 = (0);
var G__47812 = (0);
seq__47784_47792 = G__47809;
chunk__47785_47793 = G__47810;
count__47786_47794 = G__47811;
i__47787_47795 = G__47812;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__25954__auto__ = [];
var len__25947__auto___47817 = arguments.length;
var i__25948__auto___47818 = (0);
while(true){
if((i__25948__auto___47818 < len__25947__auto___47817)){
args__25954__auto__.push((arguments[i__25948__auto___47818]));

var G__47819 = (i__25948__auto___47818 + (1));
i__25948__auto___47818 = G__47819;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__47814){
var map__47815 = p__47814;
var map__47815__$1 = ((((!((map__47815 == null)))?((((map__47815.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47815.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47815):map__47815);
var opts = map__47815__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq47813){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47813));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e47821){if((e47821 instanceof Error)){
var e = e47821;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e47821;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__47825){
var map__47826 = p__47825;
var map__47826__$1 = ((((!((map__47826 == null)))?((((map__47826.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47826.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47826):map__47826);
var msg_name = cljs.core.get.call(null,map__47826__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1486291289814