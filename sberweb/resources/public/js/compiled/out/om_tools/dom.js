// Compiled by ClojureScript 1.9.89 {}
goog.provide('om_tools.dom');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('om.dom');
/**
 * Converts kebab-case to camelCase
 */
om_tools.dom.camel_case = (function om_tools$dom$camel_case(s){
return clojure.string.replace.call(null,s,/-(\w)/,cljs.core.comp.call(null,clojure.string.upper_case,cljs.core.second));
});
/**
 * Converts attributes that are kebab-case and should be camelCase
 */
om_tools.dom.opt_key_case = (function om_tools$dom$opt_key_case(attr){
if(cljs.core.truth_((function (){var or__6251__auto__ = (cljs.core.count.call(null,attr) < (5));
if(or__6251__auto__){
return or__6251__auto__;
} else {
var G__15448 = cljs.core.subs.call(null,attr,(0),(5));
switch (G__15448) {
case "data-":
case "aria-":
return true;

break;
default:
return false;

}
}
})())){
return attr;
} else {
return om_tools.dom.camel_case.call(null,attr);
}
});
/**
 * Converts aliased attributes
 */
om_tools.dom.opt_key_alias = (function om_tools$dom$opt_key_alias(opt){
var G__15451 = (((opt instanceof cljs.core.Keyword))?opt.fqn:null);
switch (G__15451) {
case "class":
return new cljs.core.Keyword(null,"className","className",-1983287057);

break;
case "for":
return new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720);

break;
default:
return opt;

}
});
/**
 * Returns potentially formatted name for DOM element attribute.
 * Converts kebab-case to camelCase.
 */
om_tools.dom.format_opt_key = (function om_tools$dom$format_opt_key(opt_key){
return cljs.core.keyword.call(null,om_tools.dom.opt_key_case.call(null,cljs.core.name.call(null,om_tools.dom.opt_key_alias.call(null,opt_key))));
});
/**
 * Returns potentially modified value for DOM element attribute.
 * Recursively formats map values (ie :style attribute)
 */
om_tools.dom.format_opt_val = (function om_tools$dom$format_opt_val(opt_val){
if(cljs.core.map_QMARK_.call(null,opt_val)){
return om_tools.dom.format_opts.call(null,opt_val);
} else {
return opt_val;

}
});
/**
 * Returns JavaScript object for React DOM attributes from opts map
 */
om_tools.dom.format_opts = (function om_tools$dom$format_opts(opts){
if(cljs.core.map_QMARK_.call(null,opts)){
return cljs.core.clj__GT_js.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__15457){
var vec__15458 = p__15457;
var k = cljs.core.nth.call(null,vec__15458,(0),null);
var v = cljs.core.nth.call(null,vec__15458,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_tools.dom.format_opt_key.call(null,k),om_tools.dom.format_opt_val.call(null,v)], null);
}),opts)));
} else {
return opts;
}
});
om_tools.dom.possible_coll_QMARK_ = (function om_tools$dom$possible_coll_QMARK_(form){
return (cljs.core.coll_QMARK_.call(null,form)) || ((form instanceof cljs.core.Symbol)) || (cljs.core.list_QMARK_.call(null,form));
});
om_tools.dom.valid_element_QMARK_ = (function om_tools$dom$valid_element_QMARK_(x){
return (function (){var or__6251__auto__ = React.isValidElement;
if(cljs.core.truth_(or__6251__auto__)){
return or__6251__auto__;
} else {
return React.isValidComponent;
}
})().call(null,x);
});
om_tools.dom.js_opts_QMARK_ = (function om_tools$dom$js_opts_QMARK_(x){
return (cljs.core.object_QMARK_.call(null,x)) && (!(om_tools.dom.valid_element_QMARK_.call(null,x)));
});
/**
 * Returns a vector of [opts children] for from first and second
 *   argument given to DOM function
 */
om_tools.dom.element_args = (function om_tools$dom$element_args(opts,children){
if((opts == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,children], null);
} else {
if(cljs.core.map_QMARK_.call(null,opts)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_tools.dom.format_opts.call(null,opts),children], null);
} else {
if(cljs.core.truth_(om_tools.dom.js_opts_QMARK_.call(null,opts))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [opts,children], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.cons.call(null,opts,children)], null);

}
}
}
});
om_tools.dom.element = (function om_tools$dom$element(ctor,opts,children){
var vec__15464 = om_tools.dom.element_args.call(null,opts,children);
var opts__$1 = cljs.core.nth.call(null,vec__15464,(0),null);
var children__$1 = cljs.core.nth.call(null,vec__15464,(1),null);
return cljs.core.apply.call(null,ctor,cljs.core.flatten.call(null,cljs.core.cons.call(null,opts__$1,children__$1)));
});
om_tools.dom.a = (function om_tools$dom$a(var_args){
var args15467 = [];
var len__7326__auto___16117 = arguments.length;
var i__7327__auto___16118 = (0);
while(true){
if((i__7327__auto___16118 < len__7326__auto___16117)){
args15467.push((arguments[i__7327__auto___16118]));

var G__16119 = (i__7327__auto___16118 + (1));
i__7327__auto___16118 = G__16119;
continue;
} else {
}
break;
}

var G__15471 = args15467.length;
switch (G__15471) {
case 0:
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15467.slice((1)),(0),null));
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.a.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.a,null,null);
});

om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.a,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.a.cljs$lang$applyTo = (function (seq15468){
var G__15469 = cljs.core.first.call(null,seq15468);
var seq15468__$1 = cljs.core.next.call(null,seq15468);
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic(G__15469,seq15468__$1);
});

om_tools.dom.a.cljs$lang$maxFixedArity = (1);


om_tools.dom.abbr = (function om_tools$dom$abbr(var_args){
var args15472 = [];
var len__7326__auto___16121 = arguments.length;
var i__7327__auto___16122 = (0);
while(true){
if((i__7327__auto___16122 < len__7326__auto___16121)){
args15472.push((arguments[i__7327__auto___16122]));

var G__16123 = (i__7327__auto___16122 + (1));
i__7327__auto___16122 = G__16123;
continue;
} else {
}
break;
}

var G__15476 = args15472.length;
switch (G__15476) {
case 0:
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15472.slice((1)),(0),null));
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.abbr,null,null);
});

om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.abbr,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.abbr.cljs$lang$applyTo = (function (seq15473){
var G__15474 = cljs.core.first.call(null,seq15473);
var seq15473__$1 = cljs.core.next.call(null,seq15473);
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(G__15474,seq15473__$1);
});

om_tools.dom.abbr.cljs$lang$maxFixedArity = (1);


om_tools.dom.address = (function om_tools$dom$address(var_args){
var args15477 = [];
var len__7326__auto___16125 = arguments.length;
var i__7327__auto___16126 = (0);
while(true){
if((i__7327__auto___16126 < len__7326__auto___16125)){
args15477.push((arguments[i__7327__auto___16126]));

var G__16127 = (i__7327__auto___16126 + (1));
i__7327__auto___16126 = G__16127;
continue;
} else {
}
break;
}

var G__15481 = args15477.length;
switch (G__15481) {
case 0:
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15477.slice((1)),(0),null));
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.address.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.address,null,null);
});

om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.address,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.address.cljs$lang$applyTo = (function (seq15478){
var G__15479 = cljs.core.first.call(null,seq15478);
var seq15478__$1 = cljs.core.next.call(null,seq15478);
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic(G__15479,seq15478__$1);
});

om_tools.dom.address.cljs$lang$maxFixedArity = (1);


om_tools.dom.area = (function om_tools$dom$area(var_args){
var args15482 = [];
var len__7326__auto___16129 = arguments.length;
var i__7327__auto___16130 = (0);
while(true){
if((i__7327__auto___16130 < len__7326__auto___16129)){
args15482.push((arguments[i__7327__auto___16130]));

var G__16131 = (i__7327__auto___16130 + (1));
i__7327__auto___16130 = G__16131;
continue;
} else {
}
break;
}

var G__15486 = args15482.length;
switch (G__15486) {
case 0:
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15482.slice((1)),(0),null));
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.area.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.area,null,null);
});

om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.area,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.area.cljs$lang$applyTo = (function (seq15483){
var G__15484 = cljs.core.first.call(null,seq15483);
var seq15483__$1 = cljs.core.next.call(null,seq15483);
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic(G__15484,seq15483__$1);
});

om_tools.dom.area.cljs$lang$maxFixedArity = (1);


om_tools.dom.article = (function om_tools$dom$article(var_args){
var args15487 = [];
var len__7326__auto___16133 = arguments.length;
var i__7327__auto___16134 = (0);
while(true){
if((i__7327__auto___16134 < len__7326__auto___16133)){
args15487.push((arguments[i__7327__auto___16134]));

var G__16135 = (i__7327__auto___16134 + (1));
i__7327__auto___16134 = G__16135;
continue;
} else {
}
break;
}

var G__15491 = args15487.length;
switch (G__15491) {
case 0:
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15487.slice((1)),(0),null));
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.article.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.article,null,null);
});

om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.article,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.article.cljs$lang$applyTo = (function (seq15488){
var G__15489 = cljs.core.first.call(null,seq15488);
var seq15488__$1 = cljs.core.next.call(null,seq15488);
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic(G__15489,seq15488__$1);
});

om_tools.dom.article.cljs$lang$maxFixedArity = (1);


om_tools.dom.aside = (function om_tools$dom$aside(var_args){
var args15492 = [];
var len__7326__auto___16137 = arguments.length;
var i__7327__auto___16138 = (0);
while(true){
if((i__7327__auto___16138 < len__7326__auto___16137)){
args15492.push((arguments[i__7327__auto___16138]));

var G__16139 = (i__7327__auto___16138 + (1));
i__7327__auto___16138 = G__16139;
continue;
} else {
}
break;
}

var G__15496 = args15492.length;
switch (G__15496) {
case 0:
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15492.slice((1)),(0),null));
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.aside.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.aside,null,null);
});

om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.aside,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.aside.cljs$lang$applyTo = (function (seq15493){
var G__15494 = cljs.core.first.call(null,seq15493);
var seq15493__$1 = cljs.core.next.call(null,seq15493);
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic(G__15494,seq15493__$1);
});

om_tools.dom.aside.cljs$lang$maxFixedArity = (1);


om_tools.dom.audio = (function om_tools$dom$audio(var_args){
var args15497 = [];
var len__7326__auto___16141 = arguments.length;
var i__7327__auto___16142 = (0);
while(true){
if((i__7327__auto___16142 < len__7326__auto___16141)){
args15497.push((arguments[i__7327__auto___16142]));

var G__16143 = (i__7327__auto___16142 + (1));
i__7327__auto___16142 = G__16143;
continue;
} else {
}
break;
}

var G__15501 = args15497.length;
switch (G__15501) {
case 0:
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15497.slice((1)),(0),null));
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.audio.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.audio,null,null);
});

om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.audio,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.audio.cljs$lang$applyTo = (function (seq15498){
var G__15499 = cljs.core.first.call(null,seq15498);
var seq15498__$1 = cljs.core.next.call(null,seq15498);
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic(G__15499,seq15498__$1);
});

om_tools.dom.audio.cljs$lang$maxFixedArity = (1);


om_tools.dom.b = (function om_tools$dom$b(var_args){
var args15502 = [];
var len__7326__auto___16145 = arguments.length;
var i__7327__auto___16146 = (0);
while(true){
if((i__7327__auto___16146 < len__7326__auto___16145)){
args15502.push((arguments[i__7327__auto___16146]));

var G__16147 = (i__7327__auto___16146 + (1));
i__7327__auto___16146 = G__16147;
continue;
} else {
}
break;
}

var G__15506 = args15502.length;
switch (G__15506) {
case 0:
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15502.slice((1)),(0),null));
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.b.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.b,null,null);
});

om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.b,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.b.cljs$lang$applyTo = (function (seq15503){
var G__15504 = cljs.core.first.call(null,seq15503);
var seq15503__$1 = cljs.core.next.call(null,seq15503);
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic(G__15504,seq15503__$1);
});

om_tools.dom.b.cljs$lang$maxFixedArity = (1);


om_tools.dom.base = (function om_tools$dom$base(var_args){
var args15507 = [];
var len__7326__auto___16149 = arguments.length;
var i__7327__auto___16150 = (0);
while(true){
if((i__7327__auto___16150 < len__7326__auto___16149)){
args15507.push((arguments[i__7327__auto___16150]));

var G__16151 = (i__7327__auto___16150 + (1));
i__7327__auto___16150 = G__16151;
continue;
} else {
}
break;
}

var G__15511 = args15507.length;
switch (G__15511) {
case 0:
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15507.slice((1)),(0),null));
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.base.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.base,null,null);
});

om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.base,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.base.cljs$lang$applyTo = (function (seq15508){
var G__15509 = cljs.core.first.call(null,seq15508);
var seq15508__$1 = cljs.core.next.call(null,seq15508);
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic(G__15509,seq15508__$1);
});

om_tools.dom.base.cljs$lang$maxFixedArity = (1);


om_tools.dom.bdi = (function om_tools$dom$bdi(var_args){
var args15512 = [];
var len__7326__auto___16153 = arguments.length;
var i__7327__auto___16154 = (0);
while(true){
if((i__7327__auto___16154 < len__7326__auto___16153)){
args15512.push((arguments[i__7327__auto___16154]));

var G__16155 = (i__7327__auto___16154 + (1));
i__7327__auto___16154 = G__16155;
continue;
} else {
}
break;
}

var G__15516 = args15512.length;
switch (G__15516) {
case 0:
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15512.slice((1)),(0),null));
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.bdi,null,null);
});

om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.bdi,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.bdi.cljs$lang$applyTo = (function (seq15513){
var G__15514 = cljs.core.first.call(null,seq15513);
var seq15513__$1 = cljs.core.next.call(null,seq15513);
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(G__15514,seq15513__$1);
});

om_tools.dom.bdi.cljs$lang$maxFixedArity = (1);


om_tools.dom.bdo = (function om_tools$dom$bdo(var_args){
var args15517 = [];
var len__7326__auto___16157 = arguments.length;
var i__7327__auto___16158 = (0);
while(true){
if((i__7327__auto___16158 < len__7326__auto___16157)){
args15517.push((arguments[i__7327__auto___16158]));

var G__16159 = (i__7327__auto___16158 + (1));
i__7327__auto___16158 = G__16159;
continue;
} else {
}
break;
}

var G__15521 = args15517.length;
switch (G__15521) {
case 0:
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15517.slice((1)),(0),null));
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.bdo,null,null);
});

om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.bdo,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.bdo.cljs$lang$applyTo = (function (seq15518){
var G__15519 = cljs.core.first.call(null,seq15518);
var seq15518__$1 = cljs.core.next.call(null,seq15518);
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(G__15519,seq15518__$1);
});

om_tools.dom.bdo.cljs$lang$maxFixedArity = (1);


om_tools.dom.big = (function om_tools$dom$big(var_args){
var args15522 = [];
var len__7326__auto___16161 = arguments.length;
var i__7327__auto___16162 = (0);
while(true){
if((i__7327__auto___16162 < len__7326__auto___16161)){
args15522.push((arguments[i__7327__auto___16162]));

var G__16163 = (i__7327__auto___16162 + (1));
i__7327__auto___16162 = G__16163;
continue;
} else {
}
break;
}

var G__15526 = args15522.length;
switch (G__15526) {
case 0:
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15522.slice((1)),(0),null));
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.big.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.big,null,null);
});

om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.big,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.big.cljs$lang$applyTo = (function (seq15523){
var G__15524 = cljs.core.first.call(null,seq15523);
var seq15523__$1 = cljs.core.next.call(null,seq15523);
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic(G__15524,seq15523__$1);
});

om_tools.dom.big.cljs$lang$maxFixedArity = (1);


om_tools.dom.blockquote = (function om_tools$dom$blockquote(var_args){
var args15527 = [];
var len__7326__auto___16165 = arguments.length;
var i__7327__auto___16166 = (0);
while(true){
if((i__7327__auto___16166 < len__7326__auto___16165)){
args15527.push((arguments[i__7327__auto___16166]));

var G__16167 = (i__7327__auto___16166 + (1));
i__7327__auto___16166 = G__16167;
continue;
} else {
}
break;
}

var G__15531 = args15527.length;
switch (G__15531) {
case 0:
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15527.slice((1)),(0),null));
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.blockquote,null,null);
});

om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.blockquote,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.blockquote.cljs$lang$applyTo = (function (seq15528){
var G__15529 = cljs.core.first.call(null,seq15528);
var seq15528__$1 = cljs.core.next.call(null,seq15528);
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(G__15529,seq15528__$1);
});

om_tools.dom.blockquote.cljs$lang$maxFixedArity = (1);


om_tools.dom.body = (function om_tools$dom$body(var_args){
var args15532 = [];
var len__7326__auto___16169 = arguments.length;
var i__7327__auto___16170 = (0);
while(true){
if((i__7327__auto___16170 < len__7326__auto___16169)){
args15532.push((arguments[i__7327__auto___16170]));

var G__16171 = (i__7327__auto___16170 + (1));
i__7327__auto___16170 = G__16171;
continue;
} else {
}
break;
}

var G__15536 = args15532.length;
switch (G__15536) {
case 0:
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15532.slice((1)),(0),null));
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.body.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.body,null,null);
});

om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.body,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.body.cljs$lang$applyTo = (function (seq15533){
var G__15534 = cljs.core.first.call(null,seq15533);
var seq15533__$1 = cljs.core.next.call(null,seq15533);
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic(G__15534,seq15533__$1);
});

om_tools.dom.body.cljs$lang$maxFixedArity = (1);


om_tools.dom.br = (function om_tools$dom$br(var_args){
var args15537 = [];
var len__7326__auto___16173 = arguments.length;
var i__7327__auto___16174 = (0);
while(true){
if((i__7327__auto___16174 < len__7326__auto___16173)){
args15537.push((arguments[i__7327__auto___16174]));

var G__16175 = (i__7327__auto___16174 + (1));
i__7327__auto___16174 = G__16175;
continue;
} else {
}
break;
}

var G__15541 = args15537.length;
switch (G__15541) {
case 0:
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15537.slice((1)),(0),null));
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.br.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.br,null,null);
});

om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.br,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.br.cljs$lang$applyTo = (function (seq15538){
var G__15539 = cljs.core.first.call(null,seq15538);
var seq15538__$1 = cljs.core.next.call(null,seq15538);
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic(G__15539,seq15538__$1);
});

om_tools.dom.br.cljs$lang$maxFixedArity = (1);


om_tools.dom.button = (function om_tools$dom$button(var_args){
var args15542 = [];
var len__7326__auto___16177 = arguments.length;
var i__7327__auto___16178 = (0);
while(true){
if((i__7327__auto___16178 < len__7326__auto___16177)){
args15542.push((arguments[i__7327__auto___16178]));

var G__16179 = (i__7327__auto___16178 + (1));
i__7327__auto___16178 = G__16179;
continue;
} else {
}
break;
}

var G__15546 = args15542.length;
switch (G__15546) {
case 0:
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15542.slice((1)),(0),null));
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.button.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.button,null,null);
});

om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.button,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.button.cljs$lang$applyTo = (function (seq15543){
var G__15544 = cljs.core.first.call(null,seq15543);
var seq15543__$1 = cljs.core.next.call(null,seq15543);
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic(G__15544,seq15543__$1);
});

om_tools.dom.button.cljs$lang$maxFixedArity = (1);


om_tools.dom.canvas = (function om_tools$dom$canvas(var_args){
var args15547 = [];
var len__7326__auto___16181 = arguments.length;
var i__7327__auto___16182 = (0);
while(true){
if((i__7327__auto___16182 < len__7326__auto___16181)){
args15547.push((arguments[i__7327__auto___16182]));

var G__16183 = (i__7327__auto___16182 + (1));
i__7327__auto___16182 = G__16183;
continue;
} else {
}
break;
}

var G__15551 = args15547.length;
switch (G__15551) {
case 0:
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15547.slice((1)),(0),null));
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.canvas,null,null);
});

om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.canvas,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.canvas.cljs$lang$applyTo = (function (seq15548){
var G__15549 = cljs.core.first.call(null,seq15548);
var seq15548__$1 = cljs.core.next.call(null,seq15548);
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(G__15549,seq15548__$1);
});

om_tools.dom.canvas.cljs$lang$maxFixedArity = (1);


om_tools.dom.caption = (function om_tools$dom$caption(var_args){
var args15552 = [];
var len__7326__auto___16185 = arguments.length;
var i__7327__auto___16186 = (0);
while(true){
if((i__7327__auto___16186 < len__7326__auto___16185)){
args15552.push((arguments[i__7327__auto___16186]));

var G__16187 = (i__7327__auto___16186 + (1));
i__7327__auto___16186 = G__16187;
continue;
} else {
}
break;
}

var G__15556 = args15552.length;
switch (G__15556) {
case 0:
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15552.slice((1)),(0),null));
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.caption.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.caption,null,null);
});

om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.caption,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.caption.cljs$lang$applyTo = (function (seq15553){
var G__15554 = cljs.core.first.call(null,seq15553);
var seq15553__$1 = cljs.core.next.call(null,seq15553);
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic(G__15554,seq15553__$1);
});

om_tools.dom.caption.cljs$lang$maxFixedArity = (1);


om_tools.dom.cite = (function om_tools$dom$cite(var_args){
var args15557 = [];
var len__7326__auto___16189 = arguments.length;
var i__7327__auto___16190 = (0);
while(true){
if((i__7327__auto___16190 < len__7326__auto___16189)){
args15557.push((arguments[i__7327__auto___16190]));

var G__16191 = (i__7327__auto___16190 + (1));
i__7327__auto___16190 = G__16191;
continue;
} else {
}
break;
}

var G__15561 = args15557.length;
switch (G__15561) {
case 0:
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15557.slice((1)),(0),null));
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.cite.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.cite,null,null);
});

om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.cite,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.cite.cljs$lang$applyTo = (function (seq15558){
var G__15559 = cljs.core.first.call(null,seq15558);
var seq15558__$1 = cljs.core.next.call(null,seq15558);
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic(G__15559,seq15558__$1);
});

om_tools.dom.cite.cljs$lang$maxFixedArity = (1);


om_tools.dom.code = (function om_tools$dom$code(var_args){
var args15562 = [];
var len__7326__auto___16193 = arguments.length;
var i__7327__auto___16194 = (0);
while(true){
if((i__7327__auto___16194 < len__7326__auto___16193)){
args15562.push((arguments[i__7327__auto___16194]));

var G__16195 = (i__7327__auto___16194 + (1));
i__7327__auto___16194 = G__16195;
continue;
} else {
}
break;
}

var G__15566 = args15562.length;
switch (G__15566) {
case 0:
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15562.slice((1)),(0),null));
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.code.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.code,null,null);
});

om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.code,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.code.cljs$lang$applyTo = (function (seq15563){
var G__15564 = cljs.core.first.call(null,seq15563);
var seq15563__$1 = cljs.core.next.call(null,seq15563);
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic(G__15564,seq15563__$1);
});

om_tools.dom.code.cljs$lang$maxFixedArity = (1);


om_tools.dom.col = (function om_tools$dom$col(var_args){
var args15567 = [];
var len__7326__auto___16197 = arguments.length;
var i__7327__auto___16198 = (0);
while(true){
if((i__7327__auto___16198 < len__7326__auto___16197)){
args15567.push((arguments[i__7327__auto___16198]));

var G__16199 = (i__7327__auto___16198 + (1));
i__7327__auto___16198 = G__16199;
continue;
} else {
}
break;
}

var G__15571 = args15567.length;
switch (G__15571) {
case 0:
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15567.slice((1)),(0),null));
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.col.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.col,null,null);
});

om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.col,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.col.cljs$lang$applyTo = (function (seq15568){
var G__15569 = cljs.core.first.call(null,seq15568);
var seq15568__$1 = cljs.core.next.call(null,seq15568);
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic(G__15569,seq15568__$1);
});

om_tools.dom.col.cljs$lang$maxFixedArity = (1);


om_tools.dom.colgroup = (function om_tools$dom$colgroup(var_args){
var args15572 = [];
var len__7326__auto___16201 = arguments.length;
var i__7327__auto___16202 = (0);
while(true){
if((i__7327__auto___16202 < len__7326__auto___16201)){
args15572.push((arguments[i__7327__auto___16202]));

var G__16203 = (i__7327__auto___16202 + (1));
i__7327__auto___16202 = G__16203;
continue;
} else {
}
break;
}

var G__15576 = args15572.length;
switch (G__15576) {
case 0:
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15572.slice((1)),(0),null));
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.colgroup,null,null);
});

om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.colgroup,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.colgroup.cljs$lang$applyTo = (function (seq15573){
var G__15574 = cljs.core.first.call(null,seq15573);
var seq15573__$1 = cljs.core.next.call(null,seq15573);
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(G__15574,seq15573__$1);
});

om_tools.dom.colgroup.cljs$lang$maxFixedArity = (1);


om_tools.dom.data = (function om_tools$dom$data(var_args){
var args15577 = [];
var len__7326__auto___16205 = arguments.length;
var i__7327__auto___16206 = (0);
while(true){
if((i__7327__auto___16206 < len__7326__auto___16205)){
args15577.push((arguments[i__7327__auto___16206]));

var G__16207 = (i__7327__auto___16206 + (1));
i__7327__auto___16206 = G__16207;
continue;
} else {
}
break;
}

var G__15581 = args15577.length;
switch (G__15581) {
case 0:
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15577.slice((1)),(0),null));
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.data.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.data,null,null);
});

om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.data,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.data.cljs$lang$applyTo = (function (seq15578){
var G__15579 = cljs.core.first.call(null,seq15578);
var seq15578__$1 = cljs.core.next.call(null,seq15578);
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic(G__15579,seq15578__$1);
});

om_tools.dom.data.cljs$lang$maxFixedArity = (1);


om_tools.dom.datalist = (function om_tools$dom$datalist(var_args){
var args15582 = [];
var len__7326__auto___16209 = arguments.length;
var i__7327__auto___16210 = (0);
while(true){
if((i__7327__auto___16210 < len__7326__auto___16209)){
args15582.push((arguments[i__7327__auto___16210]));

var G__16211 = (i__7327__auto___16210 + (1));
i__7327__auto___16210 = G__16211;
continue;
} else {
}
break;
}

var G__15586 = args15582.length;
switch (G__15586) {
case 0:
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15582.slice((1)),(0),null));
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.datalist,null,null);
});

om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.datalist,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.datalist.cljs$lang$applyTo = (function (seq15583){
var G__15584 = cljs.core.first.call(null,seq15583);
var seq15583__$1 = cljs.core.next.call(null,seq15583);
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(G__15584,seq15583__$1);
});

om_tools.dom.datalist.cljs$lang$maxFixedArity = (1);


om_tools.dom.dd = (function om_tools$dom$dd(var_args){
var args15587 = [];
var len__7326__auto___16213 = arguments.length;
var i__7327__auto___16214 = (0);
while(true){
if((i__7327__auto___16214 < len__7326__auto___16213)){
args15587.push((arguments[i__7327__auto___16214]));

var G__16215 = (i__7327__auto___16214 + (1));
i__7327__auto___16214 = G__16215;
continue;
} else {
}
break;
}

var G__15591 = args15587.length;
switch (G__15591) {
case 0:
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15587.slice((1)),(0),null));
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.dd.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dd,null,null);
});

om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.dd,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.dd.cljs$lang$applyTo = (function (seq15588){
var G__15589 = cljs.core.first.call(null,seq15588);
var seq15588__$1 = cljs.core.next.call(null,seq15588);
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic(G__15589,seq15588__$1);
});

om_tools.dom.dd.cljs$lang$maxFixedArity = (1);


om_tools.dom.del = (function om_tools$dom$del(var_args){
var args15592 = [];
var len__7326__auto___16217 = arguments.length;
var i__7327__auto___16218 = (0);
while(true){
if((i__7327__auto___16218 < len__7326__auto___16217)){
args15592.push((arguments[i__7327__auto___16218]));

var G__16219 = (i__7327__auto___16218 + (1));
i__7327__auto___16218 = G__16219;
continue;
} else {
}
break;
}

var G__15596 = args15592.length;
switch (G__15596) {
case 0:
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15592.slice((1)),(0),null));
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.del.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.del,null,null);
});

om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.del,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.del.cljs$lang$applyTo = (function (seq15593){
var G__15594 = cljs.core.first.call(null,seq15593);
var seq15593__$1 = cljs.core.next.call(null,seq15593);
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic(G__15594,seq15593__$1);
});

om_tools.dom.del.cljs$lang$maxFixedArity = (1);


om_tools.dom.details = (function om_tools$dom$details(var_args){
var args15597 = [];
var len__7326__auto___16221 = arguments.length;
var i__7327__auto___16222 = (0);
while(true){
if((i__7327__auto___16222 < len__7326__auto___16221)){
args15597.push((arguments[i__7327__auto___16222]));

var G__16223 = (i__7327__auto___16222 + (1));
i__7327__auto___16222 = G__16223;
continue;
} else {
}
break;
}

var G__15601 = args15597.length;
switch (G__15601) {
case 0:
return om_tools.dom.details.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15597.slice((1)),(0),null));
return om_tools.dom.details.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.details.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.details,null,null);
});

om_tools.dom.details.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.details,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.details.cljs$lang$applyTo = (function (seq15598){
var G__15599 = cljs.core.first.call(null,seq15598);
var seq15598__$1 = cljs.core.next.call(null,seq15598);
return om_tools.dom.details.cljs$core$IFn$_invoke$arity$variadic(G__15599,seq15598__$1);
});

om_tools.dom.details.cljs$lang$maxFixedArity = (1);


om_tools.dom.dfn = (function om_tools$dom$dfn(var_args){
var args15602 = [];
var len__7326__auto___16225 = arguments.length;
var i__7327__auto___16226 = (0);
while(true){
if((i__7327__auto___16226 < len__7326__auto___16225)){
args15602.push((arguments[i__7327__auto___16226]));

var G__16227 = (i__7327__auto___16226 + (1));
i__7327__auto___16226 = G__16227;
continue;
} else {
}
break;
}

var G__15606 = args15602.length;
switch (G__15606) {
case 0:
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15602.slice((1)),(0),null));
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dfn,null,null);
});

om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.dfn,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.dfn.cljs$lang$applyTo = (function (seq15603){
var G__15604 = cljs.core.first.call(null,seq15603);
var seq15603__$1 = cljs.core.next.call(null,seq15603);
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(G__15604,seq15603__$1);
});

om_tools.dom.dfn.cljs$lang$maxFixedArity = (1);


om_tools.dom.dialog = (function om_tools$dom$dialog(var_args){
var args15607 = [];
var len__7326__auto___16229 = arguments.length;
var i__7327__auto___16230 = (0);
while(true){
if((i__7327__auto___16230 < len__7326__auto___16229)){
args15607.push((arguments[i__7327__auto___16230]));

var G__16231 = (i__7327__auto___16230 + (1));
i__7327__auto___16230 = G__16231;
continue;
} else {
}
break;
}

var G__15611 = args15607.length;
switch (G__15611) {
case 0:
return om_tools.dom.dialog.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15607.slice((1)),(0),null));
return om_tools.dom.dialog.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.dialog.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dialog,null,null);
});

om_tools.dom.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.dialog,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.dialog.cljs$lang$applyTo = (function (seq15608){
var G__15609 = cljs.core.first.call(null,seq15608);
var seq15608__$1 = cljs.core.next.call(null,seq15608);
return om_tools.dom.dialog.cljs$core$IFn$_invoke$arity$variadic(G__15609,seq15608__$1);
});

om_tools.dom.dialog.cljs$lang$maxFixedArity = (1);


om_tools.dom.div = (function om_tools$dom$div(var_args){
var args15612 = [];
var len__7326__auto___16233 = arguments.length;
var i__7327__auto___16234 = (0);
while(true){
if((i__7327__auto___16234 < len__7326__auto___16233)){
args15612.push((arguments[i__7327__auto___16234]));

var G__16235 = (i__7327__auto___16234 + (1));
i__7327__auto___16234 = G__16235;
continue;
} else {
}
break;
}

var G__15616 = args15612.length;
switch (G__15616) {
case 0:
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15612.slice((1)),(0),null));
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.div.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.div,null,null);
});

om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.div,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.div.cljs$lang$applyTo = (function (seq15613){
var G__15614 = cljs.core.first.call(null,seq15613);
var seq15613__$1 = cljs.core.next.call(null,seq15613);
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic(G__15614,seq15613__$1);
});

om_tools.dom.div.cljs$lang$maxFixedArity = (1);


om_tools.dom.dl = (function om_tools$dom$dl(var_args){
var args15617 = [];
var len__7326__auto___16237 = arguments.length;
var i__7327__auto___16238 = (0);
while(true){
if((i__7327__auto___16238 < len__7326__auto___16237)){
args15617.push((arguments[i__7327__auto___16238]));

var G__16239 = (i__7327__auto___16238 + (1));
i__7327__auto___16238 = G__16239;
continue;
} else {
}
break;
}

var G__15621 = args15617.length;
switch (G__15621) {
case 0:
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15617.slice((1)),(0),null));
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.dl.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dl,null,null);
});

om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.dl,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.dl.cljs$lang$applyTo = (function (seq15618){
var G__15619 = cljs.core.first.call(null,seq15618);
var seq15618__$1 = cljs.core.next.call(null,seq15618);
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic(G__15619,seq15618__$1);
});

om_tools.dom.dl.cljs$lang$maxFixedArity = (1);


om_tools.dom.dt = (function om_tools$dom$dt(var_args){
var args15622 = [];
var len__7326__auto___16241 = arguments.length;
var i__7327__auto___16242 = (0);
while(true){
if((i__7327__auto___16242 < len__7326__auto___16241)){
args15622.push((arguments[i__7327__auto___16242]));

var G__16243 = (i__7327__auto___16242 + (1));
i__7327__auto___16242 = G__16243;
continue;
} else {
}
break;
}

var G__15626 = args15622.length;
switch (G__15626) {
case 0:
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15622.slice((1)),(0),null));
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.dt.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dt,null,null);
});

om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.dt,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.dt.cljs$lang$applyTo = (function (seq15623){
var G__15624 = cljs.core.first.call(null,seq15623);
var seq15623__$1 = cljs.core.next.call(null,seq15623);
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic(G__15624,seq15623__$1);
});

om_tools.dom.dt.cljs$lang$maxFixedArity = (1);


om_tools.dom.em = (function om_tools$dom$em(var_args){
var args15632 = [];
var len__7326__auto___16245 = arguments.length;
var i__7327__auto___16246 = (0);
while(true){
if((i__7327__auto___16246 < len__7326__auto___16245)){
args15632.push((arguments[i__7327__auto___16246]));

var G__16247 = (i__7327__auto___16246 + (1));
i__7327__auto___16246 = G__16247;
continue;
} else {
}
break;
}

var G__15636 = args15632.length;
switch (G__15636) {
case 0:
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15632.slice((1)),(0),null));
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.em.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.em,null,null);
});

om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.em,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.em.cljs$lang$applyTo = (function (seq15633){
var G__15634 = cljs.core.first.call(null,seq15633);
var seq15633__$1 = cljs.core.next.call(null,seq15633);
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic(G__15634,seq15633__$1);
});

om_tools.dom.em.cljs$lang$maxFixedArity = (1);


om_tools.dom.embed = (function om_tools$dom$embed(var_args){
var args15637 = [];
var len__7326__auto___16249 = arguments.length;
var i__7327__auto___16250 = (0);
while(true){
if((i__7327__auto___16250 < len__7326__auto___16249)){
args15637.push((arguments[i__7327__auto___16250]));

var G__16251 = (i__7327__auto___16250 + (1));
i__7327__auto___16250 = G__16251;
continue;
} else {
}
break;
}

var G__15641 = args15637.length;
switch (G__15641) {
case 0:
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15637.slice((1)),(0),null));
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.embed.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.embed,null,null);
});

om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.embed,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.embed.cljs$lang$applyTo = (function (seq15638){
var G__15639 = cljs.core.first.call(null,seq15638);
var seq15638__$1 = cljs.core.next.call(null,seq15638);
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic(G__15639,seq15638__$1);
});

om_tools.dom.embed.cljs$lang$maxFixedArity = (1);


om_tools.dom.fieldset = (function om_tools$dom$fieldset(var_args){
var args15642 = [];
var len__7326__auto___16253 = arguments.length;
var i__7327__auto___16254 = (0);
while(true){
if((i__7327__auto___16254 < len__7326__auto___16253)){
args15642.push((arguments[i__7327__auto___16254]));

var G__16255 = (i__7327__auto___16254 + (1));
i__7327__auto___16254 = G__16255;
continue;
} else {
}
break;
}

var G__15646 = args15642.length;
switch (G__15646) {
case 0:
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15642.slice((1)),(0),null));
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.fieldset,null,null);
});

om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.fieldset,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.fieldset.cljs$lang$applyTo = (function (seq15643){
var G__15644 = cljs.core.first.call(null,seq15643);
var seq15643__$1 = cljs.core.next.call(null,seq15643);
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(G__15644,seq15643__$1);
});

om_tools.dom.fieldset.cljs$lang$maxFixedArity = (1);


om_tools.dom.figcaption = (function om_tools$dom$figcaption(var_args){
var args15647 = [];
var len__7326__auto___16257 = arguments.length;
var i__7327__auto___16258 = (0);
while(true){
if((i__7327__auto___16258 < len__7326__auto___16257)){
args15647.push((arguments[i__7327__auto___16258]));

var G__16259 = (i__7327__auto___16258 + (1));
i__7327__auto___16258 = G__16259;
continue;
} else {
}
break;
}

var G__15651 = args15647.length;
switch (G__15651) {
case 0:
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15647.slice((1)),(0),null));
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.figcaption,null,null);
});

om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.figcaption,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.figcaption.cljs$lang$applyTo = (function (seq15648){
var G__15649 = cljs.core.first.call(null,seq15648);
var seq15648__$1 = cljs.core.next.call(null,seq15648);
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(G__15649,seq15648__$1);
});

om_tools.dom.figcaption.cljs$lang$maxFixedArity = (1);


om_tools.dom.figure = (function om_tools$dom$figure(var_args){
var args15652 = [];
var len__7326__auto___16261 = arguments.length;
var i__7327__auto___16262 = (0);
while(true){
if((i__7327__auto___16262 < len__7326__auto___16261)){
args15652.push((arguments[i__7327__auto___16262]));

var G__16263 = (i__7327__auto___16262 + (1));
i__7327__auto___16262 = G__16263;
continue;
} else {
}
break;
}

var G__15656 = args15652.length;
switch (G__15656) {
case 0:
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15652.slice((1)),(0),null));
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.figure.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.figure,null,null);
});

om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.figure,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.figure.cljs$lang$applyTo = (function (seq15653){
var G__15654 = cljs.core.first.call(null,seq15653);
var seq15653__$1 = cljs.core.next.call(null,seq15653);
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic(G__15654,seq15653__$1);
});

om_tools.dom.figure.cljs$lang$maxFixedArity = (1);


om_tools.dom.footer = (function om_tools$dom$footer(var_args){
var args15657 = [];
var len__7326__auto___16265 = arguments.length;
var i__7327__auto___16266 = (0);
while(true){
if((i__7327__auto___16266 < len__7326__auto___16265)){
args15657.push((arguments[i__7327__auto___16266]));

var G__16267 = (i__7327__auto___16266 + (1));
i__7327__auto___16266 = G__16267;
continue;
} else {
}
break;
}

var G__15661 = args15657.length;
switch (G__15661) {
case 0:
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15657.slice((1)),(0),null));
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.footer.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.footer,null,null);
});

om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.footer,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.footer.cljs$lang$applyTo = (function (seq15658){
var G__15659 = cljs.core.first.call(null,seq15658);
var seq15658__$1 = cljs.core.next.call(null,seq15658);
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic(G__15659,seq15658__$1);
});

om_tools.dom.footer.cljs$lang$maxFixedArity = (1);


om_tools.dom.form = (function om_tools$dom$form(var_args){
var args15662 = [];
var len__7326__auto___16269 = arguments.length;
var i__7327__auto___16270 = (0);
while(true){
if((i__7327__auto___16270 < len__7326__auto___16269)){
args15662.push((arguments[i__7327__auto___16270]));

var G__16271 = (i__7327__auto___16270 + (1));
i__7327__auto___16270 = G__16271;
continue;
} else {
}
break;
}

var G__15666 = args15662.length;
switch (G__15666) {
case 0:
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15662.slice((1)),(0),null));
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.form.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.form,null,null);
});

om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.form,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.form.cljs$lang$applyTo = (function (seq15663){
var G__15664 = cljs.core.first.call(null,seq15663);
var seq15663__$1 = cljs.core.next.call(null,seq15663);
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic(G__15664,seq15663__$1);
});

om_tools.dom.form.cljs$lang$maxFixedArity = (1);


om_tools.dom.h1 = (function om_tools$dom$h1(var_args){
var args15667 = [];
var len__7326__auto___16273 = arguments.length;
var i__7327__auto___16274 = (0);
while(true){
if((i__7327__auto___16274 < len__7326__auto___16273)){
args15667.push((arguments[i__7327__auto___16274]));

var G__16275 = (i__7327__auto___16274 + (1));
i__7327__auto___16274 = G__16275;
continue;
} else {
}
break;
}

var G__15671 = args15667.length;
switch (G__15671) {
case 0:
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15667.slice((1)),(0),null));
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.h1.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h1,null,null);
});

om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.h1,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.h1.cljs$lang$applyTo = (function (seq15668){
var G__15669 = cljs.core.first.call(null,seq15668);
var seq15668__$1 = cljs.core.next.call(null,seq15668);
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic(G__15669,seq15668__$1);
});

om_tools.dom.h1.cljs$lang$maxFixedArity = (1);


om_tools.dom.h2 = (function om_tools$dom$h2(var_args){
var args15672 = [];
var len__7326__auto___16277 = arguments.length;
var i__7327__auto___16278 = (0);
while(true){
if((i__7327__auto___16278 < len__7326__auto___16277)){
args15672.push((arguments[i__7327__auto___16278]));

var G__16279 = (i__7327__auto___16278 + (1));
i__7327__auto___16278 = G__16279;
continue;
} else {
}
break;
}

var G__15676 = args15672.length;
switch (G__15676) {
case 0:
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15672.slice((1)),(0),null));
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.h2.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h2,null,null);
});

om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.h2,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.h2.cljs$lang$applyTo = (function (seq15673){
var G__15674 = cljs.core.first.call(null,seq15673);
var seq15673__$1 = cljs.core.next.call(null,seq15673);
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic(G__15674,seq15673__$1);
});

om_tools.dom.h2.cljs$lang$maxFixedArity = (1);


om_tools.dom.h3 = (function om_tools$dom$h3(var_args){
var args15677 = [];
var len__7326__auto___16281 = arguments.length;
var i__7327__auto___16282 = (0);
while(true){
if((i__7327__auto___16282 < len__7326__auto___16281)){
args15677.push((arguments[i__7327__auto___16282]));

var G__16283 = (i__7327__auto___16282 + (1));
i__7327__auto___16282 = G__16283;
continue;
} else {
}
break;
}

var G__15681 = args15677.length;
switch (G__15681) {
case 0:
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15677.slice((1)),(0),null));
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.h3.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h3,null,null);
});

om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.h3,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.h3.cljs$lang$applyTo = (function (seq15678){
var G__15679 = cljs.core.first.call(null,seq15678);
var seq15678__$1 = cljs.core.next.call(null,seq15678);
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic(G__15679,seq15678__$1);
});

om_tools.dom.h3.cljs$lang$maxFixedArity = (1);


om_tools.dom.h4 = (function om_tools$dom$h4(var_args){
var args15682 = [];
var len__7326__auto___16285 = arguments.length;
var i__7327__auto___16286 = (0);
while(true){
if((i__7327__auto___16286 < len__7326__auto___16285)){
args15682.push((arguments[i__7327__auto___16286]));

var G__16287 = (i__7327__auto___16286 + (1));
i__7327__auto___16286 = G__16287;
continue;
} else {
}
break;
}

var G__15686 = args15682.length;
switch (G__15686) {
case 0:
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15682.slice((1)),(0),null));
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.h4.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h4,null,null);
});

om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.h4,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.h4.cljs$lang$applyTo = (function (seq15683){
var G__15684 = cljs.core.first.call(null,seq15683);
var seq15683__$1 = cljs.core.next.call(null,seq15683);
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic(G__15684,seq15683__$1);
});

om_tools.dom.h4.cljs$lang$maxFixedArity = (1);


om_tools.dom.h5 = (function om_tools$dom$h5(var_args){
var args15687 = [];
var len__7326__auto___16289 = arguments.length;
var i__7327__auto___16290 = (0);
while(true){
if((i__7327__auto___16290 < len__7326__auto___16289)){
args15687.push((arguments[i__7327__auto___16290]));

var G__16291 = (i__7327__auto___16290 + (1));
i__7327__auto___16290 = G__16291;
continue;
} else {
}
break;
}

var G__15691 = args15687.length;
switch (G__15691) {
case 0:
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15687.slice((1)),(0),null));
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.h5.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h5,null,null);
});

om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.h5,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.h5.cljs$lang$applyTo = (function (seq15688){
var G__15689 = cljs.core.first.call(null,seq15688);
var seq15688__$1 = cljs.core.next.call(null,seq15688);
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic(G__15689,seq15688__$1);
});

om_tools.dom.h5.cljs$lang$maxFixedArity = (1);


om_tools.dom.h6 = (function om_tools$dom$h6(var_args){
var args15692 = [];
var len__7326__auto___16293 = arguments.length;
var i__7327__auto___16294 = (0);
while(true){
if((i__7327__auto___16294 < len__7326__auto___16293)){
args15692.push((arguments[i__7327__auto___16294]));

var G__16295 = (i__7327__auto___16294 + (1));
i__7327__auto___16294 = G__16295;
continue;
} else {
}
break;
}

var G__15696 = args15692.length;
switch (G__15696) {
case 0:
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15692.slice((1)),(0),null));
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.h6.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h6,null,null);
});

om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.h6,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.h6.cljs$lang$applyTo = (function (seq15693){
var G__15694 = cljs.core.first.call(null,seq15693);
var seq15693__$1 = cljs.core.next.call(null,seq15693);
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic(G__15694,seq15693__$1);
});

om_tools.dom.h6.cljs$lang$maxFixedArity = (1);


om_tools.dom.head = (function om_tools$dom$head(var_args){
var args15697 = [];
var len__7326__auto___16297 = arguments.length;
var i__7327__auto___16298 = (0);
while(true){
if((i__7327__auto___16298 < len__7326__auto___16297)){
args15697.push((arguments[i__7327__auto___16298]));

var G__16299 = (i__7327__auto___16298 + (1));
i__7327__auto___16298 = G__16299;
continue;
} else {
}
break;
}

var G__15701 = args15697.length;
switch (G__15701) {
case 0:
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15697.slice((1)),(0),null));
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.head.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.head,null,null);
});

om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.head,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.head.cljs$lang$applyTo = (function (seq15698){
var G__15699 = cljs.core.first.call(null,seq15698);
var seq15698__$1 = cljs.core.next.call(null,seq15698);
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic(G__15699,seq15698__$1);
});

om_tools.dom.head.cljs$lang$maxFixedArity = (1);


om_tools.dom.header = (function om_tools$dom$header(var_args){
var args15702 = [];
var len__7326__auto___16301 = arguments.length;
var i__7327__auto___16302 = (0);
while(true){
if((i__7327__auto___16302 < len__7326__auto___16301)){
args15702.push((arguments[i__7327__auto___16302]));

var G__16303 = (i__7327__auto___16302 + (1));
i__7327__auto___16302 = G__16303;
continue;
} else {
}
break;
}

var G__15706 = args15702.length;
switch (G__15706) {
case 0:
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15702.slice((1)),(0),null));
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.header.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.header,null,null);
});

om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.header,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.header.cljs$lang$applyTo = (function (seq15703){
var G__15704 = cljs.core.first.call(null,seq15703);
var seq15703__$1 = cljs.core.next.call(null,seq15703);
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic(G__15704,seq15703__$1);
});

om_tools.dom.header.cljs$lang$maxFixedArity = (1);


om_tools.dom.hr = (function om_tools$dom$hr(var_args){
var args15707 = [];
var len__7326__auto___16305 = arguments.length;
var i__7327__auto___16306 = (0);
while(true){
if((i__7327__auto___16306 < len__7326__auto___16305)){
args15707.push((arguments[i__7327__auto___16306]));

var G__16307 = (i__7327__auto___16306 + (1));
i__7327__auto___16306 = G__16307;
continue;
} else {
}
break;
}

var G__15711 = args15707.length;
switch (G__15711) {
case 0:
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15707.slice((1)),(0),null));
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.hr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.hr,null,null);
});

om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.hr,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.hr.cljs$lang$applyTo = (function (seq15708){
var G__15709 = cljs.core.first.call(null,seq15708);
var seq15708__$1 = cljs.core.next.call(null,seq15708);
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic(G__15709,seq15708__$1);
});

om_tools.dom.hr.cljs$lang$maxFixedArity = (1);


om_tools.dom.html = (function om_tools$dom$html(var_args){
var args15712 = [];
var len__7326__auto___16309 = arguments.length;
var i__7327__auto___16310 = (0);
while(true){
if((i__7327__auto___16310 < len__7326__auto___16309)){
args15712.push((arguments[i__7327__auto___16310]));

var G__16311 = (i__7327__auto___16310 + (1));
i__7327__auto___16310 = G__16311;
continue;
} else {
}
break;
}

var G__15716 = args15712.length;
switch (G__15716) {
case 0:
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15712.slice((1)),(0),null));
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.html.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.html,null,null);
});

om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.html,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.html.cljs$lang$applyTo = (function (seq15713){
var G__15714 = cljs.core.first.call(null,seq15713);
var seq15713__$1 = cljs.core.next.call(null,seq15713);
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic(G__15714,seq15713__$1);
});

om_tools.dom.html.cljs$lang$maxFixedArity = (1);


om_tools.dom.i = (function om_tools$dom$i(var_args){
var args15717 = [];
var len__7326__auto___16313 = arguments.length;
var i__7327__auto___16314 = (0);
while(true){
if((i__7327__auto___16314 < len__7326__auto___16313)){
args15717.push((arguments[i__7327__auto___16314]));

var G__16315 = (i__7327__auto___16314 + (1));
i__7327__auto___16314 = G__16315;
continue;
} else {
}
break;
}

var G__15721 = args15717.length;
switch (G__15721) {
case 0:
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15717.slice((1)),(0),null));
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.i.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.i,null,null);
});

om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.i,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.i.cljs$lang$applyTo = (function (seq15718){
var G__15719 = cljs.core.first.call(null,seq15718);
var seq15718__$1 = cljs.core.next.call(null,seq15718);
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic(G__15719,seq15718__$1);
});

om_tools.dom.i.cljs$lang$maxFixedArity = (1);


om_tools.dom.iframe = (function om_tools$dom$iframe(var_args){
var args15722 = [];
var len__7326__auto___16317 = arguments.length;
var i__7327__auto___16318 = (0);
while(true){
if((i__7327__auto___16318 < len__7326__auto___16317)){
args15722.push((arguments[i__7327__auto___16318]));

var G__16319 = (i__7327__auto___16318 + (1));
i__7327__auto___16318 = G__16319;
continue;
} else {
}
break;
}

var G__15726 = args15722.length;
switch (G__15726) {
case 0:
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15722.slice((1)),(0),null));
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.iframe,null,null);
});

om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.iframe,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.iframe.cljs$lang$applyTo = (function (seq15723){
var G__15724 = cljs.core.first.call(null,seq15723);
var seq15723__$1 = cljs.core.next.call(null,seq15723);
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(G__15724,seq15723__$1);
});

om_tools.dom.iframe.cljs$lang$maxFixedArity = (1);


om_tools.dom.img = (function om_tools$dom$img(var_args){
var args15727 = [];
var len__7326__auto___16321 = arguments.length;
var i__7327__auto___16322 = (0);
while(true){
if((i__7327__auto___16322 < len__7326__auto___16321)){
args15727.push((arguments[i__7327__auto___16322]));

var G__16323 = (i__7327__auto___16322 + (1));
i__7327__auto___16322 = G__16323;
continue;
} else {
}
break;
}

var G__15731 = args15727.length;
switch (G__15731) {
case 0:
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15727.slice((1)),(0),null));
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.img.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.img,null,null);
});

om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.img,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.img.cljs$lang$applyTo = (function (seq15728){
var G__15729 = cljs.core.first.call(null,seq15728);
var seq15728__$1 = cljs.core.next.call(null,seq15728);
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic(G__15729,seq15728__$1);
});

om_tools.dom.img.cljs$lang$maxFixedArity = (1);


om_tools.dom.ins = (function om_tools$dom$ins(var_args){
var args15732 = [];
var len__7326__auto___16325 = arguments.length;
var i__7327__auto___16326 = (0);
while(true){
if((i__7327__auto___16326 < len__7326__auto___16325)){
args15732.push((arguments[i__7327__auto___16326]));

var G__16327 = (i__7327__auto___16326 + (1));
i__7327__auto___16326 = G__16327;
continue;
} else {
}
break;
}

var G__15736 = args15732.length;
switch (G__15736) {
case 0:
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15732.slice((1)),(0),null));
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.ins.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ins,null,null);
});

om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.ins,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.ins.cljs$lang$applyTo = (function (seq15733){
var G__15734 = cljs.core.first.call(null,seq15733);
var seq15733__$1 = cljs.core.next.call(null,seq15733);
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic(G__15734,seq15733__$1);
});

om_tools.dom.ins.cljs$lang$maxFixedArity = (1);


om_tools.dom.kbd = (function om_tools$dom$kbd(var_args){
var args15737 = [];
var len__7326__auto___16329 = arguments.length;
var i__7327__auto___16330 = (0);
while(true){
if((i__7327__auto___16330 < len__7326__auto___16329)){
args15737.push((arguments[i__7327__auto___16330]));

var G__16331 = (i__7327__auto___16330 + (1));
i__7327__auto___16330 = G__16331;
continue;
} else {
}
break;
}

var G__15741 = args15737.length;
switch (G__15741) {
case 0:
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15737.slice((1)),(0),null));
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.kbd,null,null);
});

om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.kbd,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.kbd.cljs$lang$applyTo = (function (seq15738){
var G__15739 = cljs.core.first.call(null,seq15738);
var seq15738__$1 = cljs.core.next.call(null,seq15738);
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(G__15739,seq15738__$1);
});

om_tools.dom.kbd.cljs$lang$maxFixedArity = (1);


om_tools.dom.keygen = (function om_tools$dom$keygen(var_args){
var args15742 = [];
var len__7326__auto___16333 = arguments.length;
var i__7327__auto___16334 = (0);
while(true){
if((i__7327__auto___16334 < len__7326__auto___16333)){
args15742.push((arguments[i__7327__auto___16334]));

var G__16335 = (i__7327__auto___16334 + (1));
i__7327__auto___16334 = G__16335;
continue;
} else {
}
break;
}

var G__15746 = args15742.length;
switch (G__15746) {
case 0:
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15742.slice((1)),(0),null));
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.keygen,null,null);
});

om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.keygen,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.keygen.cljs$lang$applyTo = (function (seq15743){
var G__15744 = cljs.core.first.call(null,seq15743);
var seq15743__$1 = cljs.core.next.call(null,seq15743);
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(G__15744,seq15743__$1);
});

om_tools.dom.keygen.cljs$lang$maxFixedArity = (1);


om_tools.dom.label = (function om_tools$dom$label(var_args){
var args15747 = [];
var len__7326__auto___16337 = arguments.length;
var i__7327__auto___16338 = (0);
while(true){
if((i__7327__auto___16338 < len__7326__auto___16337)){
args15747.push((arguments[i__7327__auto___16338]));

var G__16339 = (i__7327__auto___16338 + (1));
i__7327__auto___16338 = G__16339;
continue;
} else {
}
break;
}

var G__15751 = args15747.length;
switch (G__15751) {
case 0:
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15747.slice((1)),(0),null));
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.label.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.label,null,null);
});

om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.label,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.label.cljs$lang$applyTo = (function (seq15748){
var G__15749 = cljs.core.first.call(null,seq15748);
var seq15748__$1 = cljs.core.next.call(null,seq15748);
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic(G__15749,seq15748__$1);
});

om_tools.dom.label.cljs$lang$maxFixedArity = (1);


om_tools.dom.legend = (function om_tools$dom$legend(var_args){
var args15752 = [];
var len__7326__auto___16341 = arguments.length;
var i__7327__auto___16342 = (0);
while(true){
if((i__7327__auto___16342 < len__7326__auto___16341)){
args15752.push((arguments[i__7327__auto___16342]));

var G__16343 = (i__7327__auto___16342 + (1));
i__7327__auto___16342 = G__16343;
continue;
} else {
}
break;
}

var G__15756 = args15752.length;
switch (G__15756) {
case 0:
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15752.slice((1)),(0),null));
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.legend.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.legend,null,null);
});

om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.legend,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.legend.cljs$lang$applyTo = (function (seq15753){
var G__15754 = cljs.core.first.call(null,seq15753);
var seq15753__$1 = cljs.core.next.call(null,seq15753);
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic(G__15754,seq15753__$1);
});

om_tools.dom.legend.cljs$lang$maxFixedArity = (1);


om_tools.dom.li = (function om_tools$dom$li(var_args){
var args15757 = [];
var len__7326__auto___16345 = arguments.length;
var i__7327__auto___16346 = (0);
while(true){
if((i__7327__auto___16346 < len__7326__auto___16345)){
args15757.push((arguments[i__7327__auto___16346]));

var G__16347 = (i__7327__auto___16346 + (1));
i__7327__auto___16346 = G__16347;
continue;
} else {
}
break;
}

var G__15761 = args15757.length;
switch (G__15761) {
case 0:
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15757.slice((1)),(0),null));
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.li.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.li,null,null);
});

om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.li,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.li.cljs$lang$applyTo = (function (seq15758){
var G__15759 = cljs.core.first.call(null,seq15758);
var seq15758__$1 = cljs.core.next.call(null,seq15758);
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic(G__15759,seq15758__$1);
});

om_tools.dom.li.cljs$lang$maxFixedArity = (1);


om_tools.dom.link = (function om_tools$dom$link(var_args){
var args15762 = [];
var len__7326__auto___16349 = arguments.length;
var i__7327__auto___16350 = (0);
while(true){
if((i__7327__auto___16350 < len__7326__auto___16349)){
args15762.push((arguments[i__7327__auto___16350]));

var G__16351 = (i__7327__auto___16350 + (1));
i__7327__auto___16350 = G__16351;
continue;
} else {
}
break;
}

var G__15766 = args15762.length;
switch (G__15766) {
case 0:
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15762.slice((1)),(0),null));
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.link.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.link,null,null);
});

om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.link,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.link.cljs$lang$applyTo = (function (seq15763){
var G__15764 = cljs.core.first.call(null,seq15763);
var seq15763__$1 = cljs.core.next.call(null,seq15763);
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic(G__15764,seq15763__$1);
});

om_tools.dom.link.cljs$lang$maxFixedArity = (1);


om_tools.dom.main = (function om_tools$dom$main(var_args){
var args15767 = [];
var len__7326__auto___16353 = arguments.length;
var i__7327__auto___16354 = (0);
while(true){
if((i__7327__auto___16354 < len__7326__auto___16353)){
args15767.push((arguments[i__7327__auto___16354]));

var G__16355 = (i__7327__auto___16354 + (1));
i__7327__auto___16354 = G__16355;
continue;
} else {
}
break;
}

var G__15771 = args15767.length;
switch (G__15771) {
case 0:
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15767.slice((1)),(0),null));
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.main.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.main,null,null);
});

om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.main,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.main.cljs$lang$applyTo = (function (seq15768){
var G__15769 = cljs.core.first.call(null,seq15768);
var seq15768__$1 = cljs.core.next.call(null,seq15768);
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic(G__15769,seq15768__$1);
});

om_tools.dom.main.cljs$lang$maxFixedArity = (1);


om_tools.dom.map = (function om_tools$dom$map(var_args){
var args15772 = [];
var len__7326__auto___16357 = arguments.length;
var i__7327__auto___16358 = (0);
while(true){
if((i__7327__auto___16358 < len__7326__auto___16357)){
args15772.push((arguments[i__7327__auto___16358]));

var G__16359 = (i__7327__auto___16358 + (1));
i__7327__auto___16358 = G__16359;
continue;
} else {
}
break;
}

var G__15776 = args15772.length;
switch (G__15776) {
case 0:
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15772.slice((1)),(0),null));
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.map.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.map,null,null);
});

om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.map,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.map.cljs$lang$applyTo = (function (seq15773){
var G__15774 = cljs.core.first.call(null,seq15773);
var seq15773__$1 = cljs.core.next.call(null,seq15773);
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic(G__15774,seq15773__$1);
});

om_tools.dom.map.cljs$lang$maxFixedArity = (1);


om_tools.dom.mark = (function om_tools$dom$mark(var_args){
var args15777 = [];
var len__7326__auto___16361 = arguments.length;
var i__7327__auto___16362 = (0);
while(true){
if((i__7327__auto___16362 < len__7326__auto___16361)){
args15777.push((arguments[i__7327__auto___16362]));

var G__16363 = (i__7327__auto___16362 + (1));
i__7327__auto___16362 = G__16363;
continue;
} else {
}
break;
}

var G__15781 = args15777.length;
switch (G__15781) {
case 0:
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15777.slice((1)),(0),null));
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.mark.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.mark,null,null);
});

om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.mark,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.mark.cljs$lang$applyTo = (function (seq15778){
var G__15779 = cljs.core.first.call(null,seq15778);
var seq15778__$1 = cljs.core.next.call(null,seq15778);
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic(G__15779,seq15778__$1);
});

om_tools.dom.mark.cljs$lang$maxFixedArity = (1);


om_tools.dom.menu = (function om_tools$dom$menu(var_args){
var args15782 = [];
var len__7326__auto___16365 = arguments.length;
var i__7327__auto___16366 = (0);
while(true){
if((i__7327__auto___16366 < len__7326__auto___16365)){
args15782.push((arguments[i__7327__auto___16366]));

var G__16367 = (i__7327__auto___16366 + (1));
i__7327__auto___16366 = G__16367;
continue;
} else {
}
break;
}

var G__15786 = args15782.length;
switch (G__15786) {
case 0:
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15782.slice((1)),(0),null));
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.menu.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.menu,null,null);
});

om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.menu,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.menu.cljs$lang$applyTo = (function (seq15783){
var G__15784 = cljs.core.first.call(null,seq15783);
var seq15783__$1 = cljs.core.next.call(null,seq15783);
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic(G__15784,seq15783__$1);
});

om_tools.dom.menu.cljs$lang$maxFixedArity = (1);


om_tools.dom.menuitem = (function om_tools$dom$menuitem(var_args){
var args15787 = [];
var len__7326__auto___16369 = arguments.length;
var i__7327__auto___16370 = (0);
while(true){
if((i__7327__auto___16370 < len__7326__auto___16369)){
args15787.push((arguments[i__7327__auto___16370]));

var G__16371 = (i__7327__auto___16370 + (1));
i__7327__auto___16370 = G__16371;
continue;
} else {
}
break;
}

var G__15791 = args15787.length;
switch (G__15791) {
case 0:
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15787.slice((1)),(0),null));
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.menuitem,null,null);
});

om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.menuitem,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.menuitem.cljs$lang$applyTo = (function (seq15788){
var G__15789 = cljs.core.first.call(null,seq15788);
var seq15788__$1 = cljs.core.next.call(null,seq15788);
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(G__15789,seq15788__$1);
});

om_tools.dom.menuitem.cljs$lang$maxFixedArity = (1);


om_tools.dom.meta = (function om_tools$dom$meta(var_args){
var args15792 = [];
var len__7326__auto___16373 = arguments.length;
var i__7327__auto___16374 = (0);
while(true){
if((i__7327__auto___16374 < len__7326__auto___16373)){
args15792.push((arguments[i__7327__auto___16374]));

var G__16375 = (i__7327__auto___16374 + (1));
i__7327__auto___16374 = G__16375;
continue;
} else {
}
break;
}

var G__15796 = args15792.length;
switch (G__15796) {
case 0:
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15792.slice((1)),(0),null));
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.meta.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.meta,null,null);
});

om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.meta,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.meta.cljs$lang$applyTo = (function (seq15793){
var G__15794 = cljs.core.first.call(null,seq15793);
var seq15793__$1 = cljs.core.next.call(null,seq15793);
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic(G__15794,seq15793__$1);
});

om_tools.dom.meta.cljs$lang$maxFixedArity = (1);


om_tools.dom.meter = (function om_tools$dom$meter(var_args){
var args15797 = [];
var len__7326__auto___16377 = arguments.length;
var i__7327__auto___16378 = (0);
while(true){
if((i__7327__auto___16378 < len__7326__auto___16377)){
args15797.push((arguments[i__7327__auto___16378]));

var G__16379 = (i__7327__auto___16378 + (1));
i__7327__auto___16378 = G__16379;
continue;
} else {
}
break;
}

var G__15801 = args15797.length;
switch (G__15801) {
case 0:
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15797.slice((1)),(0),null));
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.meter.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.meter,null,null);
});

om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.meter,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.meter.cljs$lang$applyTo = (function (seq15798){
var G__15799 = cljs.core.first.call(null,seq15798);
var seq15798__$1 = cljs.core.next.call(null,seq15798);
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic(G__15799,seq15798__$1);
});

om_tools.dom.meter.cljs$lang$maxFixedArity = (1);


om_tools.dom.nav = (function om_tools$dom$nav(var_args){
var args15802 = [];
var len__7326__auto___16381 = arguments.length;
var i__7327__auto___16382 = (0);
while(true){
if((i__7327__auto___16382 < len__7326__auto___16381)){
args15802.push((arguments[i__7327__auto___16382]));

var G__16383 = (i__7327__auto___16382 + (1));
i__7327__auto___16382 = G__16383;
continue;
} else {
}
break;
}

var G__15806 = args15802.length;
switch (G__15806) {
case 0:
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15802.slice((1)),(0),null));
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.nav.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.nav,null,null);
});

om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.nav,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.nav.cljs$lang$applyTo = (function (seq15803){
var G__15804 = cljs.core.first.call(null,seq15803);
var seq15803__$1 = cljs.core.next.call(null,seq15803);
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic(G__15804,seq15803__$1);
});

om_tools.dom.nav.cljs$lang$maxFixedArity = (1);


om_tools.dom.noscript = (function om_tools$dom$noscript(var_args){
var args15807 = [];
var len__7326__auto___16385 = arguments.length;
var i__7327__auto___16386 = (0);
while(true){
if((i__7327__auto___16386 < len__7326__auto___16385)){
args15807.push((arguments[i__7327__auto___16386]));

var G__16387 = (i__7327__auto___16386 + (1));
i__7327__auto___16386 = G__16387;
continue;
} else {
}
break;
}

var G__15811 = args15807.length;
switch (G__15811) {
case 0:
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15807.slice((1)),(0),null));
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.noscript,null,null);
});

om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.noscript,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.noscript.cljs$lang$applyTo = (function (seq15808){
var G__15809 = cljs.core.first.call(null,seq15808);
var seq15808__$1 = cljs.core.next.call(null,seq15808);
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(G__15809,seq15808__$1);
});

om_tools.dom.noscript.cljs$lang$maxFixedArity = (1);


om_tools.dom.object = (function om_tools$dom$object(var_args){
var args15812 = [];
var len__7326__auto___16389 = arguments.length;
var i__7327__auto___16390 = (0);
while(true){
if((i__7327__auto___16390 < len__7326__auto___16389)){
args15812.push((arguments[i__7327__auto___16390]));

var G__16391 = (i__7327__auto___16390 + (1));
i__7327__auto___16390 = G__16391;
continue;
} else {
}
break;
}

var G__15816 = args15812.length;
switch (G__15816) {
case 0:
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15812.slice((1)),(0),null));
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.object.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.object,null,null);
});

om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.object,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.object.cljs$lang$applyTo = (function (seq15813){
var G__15814 = cljs.core.first.call(null,seq15813);
var seq15813__$1 = cljs.core.next.call(null,seq15813);
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic(G__15814,seq15813__$1);
});

om_tools.dom.object.cljs$lang$maxFixedArity = (1);


om_tools.dom.ol = (function om_tools$dom$ol(var_args){
var args15817 = [];
var len__7326__auto___16393 = arguments.length;
var i__7327__auto___16394 = (0);
while(true){
if((i__7327__auto___16394 < len__7326__auto___16393)){
args15817.push((arguments[i__7327__auto___16394]));

var G__16395 = (i__7327__auto___16394 + (1));
i__7327__auto___16394 = G__16395;
continue;
} else {
}
break;
}

var G__15821 = args15817.length;
switch (G__15821) {
case 0:
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15817.slice((1)),(0),null));
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.ol.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ol,null,null);
});

om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.ol,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.ol.cljs$lang$applyTo = (function (seq15818){
var G__15819 = cljs.core.first.call(null,seq15818);
var seq15818__$1 = cljs.core.next.call(null,seq15818);
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic(G__15819,seq15818__$1);
});

om_tools.dom.ol.cljs$lang$maxFixedArity = (1);


om_tools.dom.optgroup = (function om_tools$dom$optgroup(var_args){
var args15822 = [];
var len__7326__auto___16397 = arguments.length;
var i__7327__auto___16398 = (0);
while(true){
if((i__7327__auto___16398 < len__7326__auto___16397)){
args15822.push((arguments[i__7327__auto___16398]));

var G__16399 = (i__7327__auto___16398 + (1));
i__7327__auto___16398 = G__16399;
continue;
} else {
}
break;
}

var G__15826 = args15822.length;
switch (G__15826) {
case 0:
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15822.slice((1)),(0),null));
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.optgroup,null,null);
});

om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.optgroup,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.optgroup.cljs$lang$applyTo = (function (seq15823){
var G__15824 = cljs.core.first.call(null,seq15823);
var seq15823__$1 = cljs.core.next.call(null,seq15823);
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(G__15824,seq15823__$1);
});

om_tools.dom.optgroup.cljs$lang$maxFixedArity = (1);


om_tools.dom.output = (function om_tools$dom$output(var_args){
var args15827 = [];
var len__7326__auto___16401 = arguments.length;
var i__7327__auto___16402 = (0);
while(true){
if((i__7327__auto___16402 < len__7326__auto___16401)){
args15827.push((arguments[i__7327__auto___16402]));

var G__16403 = (i__7327__auto___16402 + (1));
i__7327__auto___16402 = G__16403;
continue;
} else {
}
break;
}

var G__15831 = args15827.length;
switch (G__15831) {
case 0:
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15827.slice((1)),(0),null));
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.output.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.output,null,null);
});

om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.output,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.output.cljs$lang$applyTo = (function (seq15828){
var G__15829 = cljs.core.first.call(null,seq15828);
var seq15828__$1 = cljs.core.next.call(null,seq15828);
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic(G__15829,seq15828__$1);
});

om_tools.dom.output.cljs$lang$maxFixedArity = (1);


om_tools.dom.p = (function om_tools$dom$p(var_args){
var args15832 = [];
var len__7326__auto___16405 = arguments.length;
var i__7327__auto___16406 = (0);
while(true){
if((i__7327__auto___16406 < len__7326__auto___16405)){
args15832.push((arguments[i__7327__auto___16406]));

var G__16407 = (i__7327__auto___16406 + (1));
i__7327__auto___16406 = G__16407;
continue;
} else {
}
break;
}

var G__15836 = args15832.length;
switch (G__15836) {
case 0:
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15832.slice((1)),(0),null));
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.p.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.p,null,null);
});

om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.p,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.p.cljs$lang$applyTo = (function (seq15833){
var G__15834 = cljs.core.first.call(null,seq15833);
var seq15833__$1 = cljs.core.next.call(null,seq15833);
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic(G__15834,seq15833__$1);
});

om_tools.dom.p.cljs$lang$maxFixedArity = (1);


om_tools.dom.param = (function om_tools$dom$param(var_args){
var args15837 = [];
var len__7326__auto___16409 = arguments.length;
var i__7327__auto___16410 = (0);
while(true){
if((i__7327__auto___16410 < len__7326__auto___16409)){
args15837.push((arguments[i__7327__auto___16410]));

var G__16411 = (i__7327__auto___16410 + (1));
i__7327__auto___16410 = G__16411;
continue;
} else {
}
break;
}

var G__15841 = args15837.length;
switch (G__15841) {
case 0:
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15837.slice((1)),(0),null));
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.param.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.param,null,null);
});

om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.param,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.param.cljs$lang$applyTo = (function (seq15838){
var G__15839 = cljs.core.first.call(null,seq15838);
var seq15838__$1 = cljs.core.next.call(null,seq15838);
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic(G__15839,seq15838__$1);
});

om_tools.dom.param.cljs$lang$maxFixedArity = (1);


om_tools.dom.picture = (function om_tools$dom$picture(var_args){
var args15842 = [];
var len__7326__auto___16413 = arguments.length;
var i__7327__auto___16414 = (0);
while(true){
if((i__7327__auto___16414 < len__7326__auto___16413)){
args15842.push((arguments[i__7327__auto___16414]));

var G__16415 = (i__7327__auto___16414 + (1));
i__7327__auto___16414 = G__16415;
continue;
} else {
}
break;
}

var G__15846 = args15842.length;
switch (G__15846) {
case 0:
return om_tools.dom.picture.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15842.slice((1)),(0),null));
return om_tools.dom.picture.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.picture.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.picture,null,null);
});

om_tools.dom.picture.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.picture,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.picture.cljs$lang$applyTo = (function (seq15843){
var G__15844 = cljs.core.first.call(null,seq15843);
var seq15843__$1 = cljs.core.next.call(null,seq15843);
return om_tools.dom.picture.cljs$core$IFn$_invoke$arity$variadic(G__15844,seq15843__$1);
});

om_tools.dom.picture.cljs$lang$maxFixedArity = (1);


om_tools.dom.pre = (function om_tools$dom$pre(var_args){
var args15847 = [];
var len__7326__auto___16417 = arguments.length;
var i__7327__auto___16418 = (0);
while(true){
if((i__7327__auto___16418 < len__7326__auto___16417)){
args15847.push((arguments[i__7327__auto___16418]));

var G__16419 = (i__7327__auto___16418 + (1));
i__7327__auto___16418 = G__16419;
continue;
} else {
}
break;
}

var G__15851 = args15847.length;
switch (G__15851) {
case 0:
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15847.slice((1)),(0),null));
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.pre.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.pre,null,null);
});

om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.pre,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.pre.cljs$lang$applyTo = (function (seq15848){
var G__15849 = cljs.core.first.call(null,seq15848);
var seq15848__$1 = cljs.core.next.call(null,seq15848);
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic(G__15849,seq15848__$1);
});

om_tools.dom.pre.cljs$lang$maxFixedArity = (1);


om_tools.dom.progress = (function om_tools$dom$progress(var_args){
var args15852 = [];
var len__7326__auto___16421 = arguments.length;
var i__7327__auto___16422 = (0);
while(true){
if((i__7327__auto___16422 < len__7326__auto___16421)){
args15852.push((arguments[i__7327__auto___16422]));

var G__16423 = (i__7327__auto___16422 + (1));
i__7327__auto___16422 = G__16423;
continue;
} else {
}
break;
}

var G__15856 = args15852.length;
switch (G__15856) {
case 0:
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15852.slice((1)),(0),null));
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.progress.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.progress,null,null);
});

om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.progress,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.progress.cljs$lang$applyTo = (function (seq15853){
var G__15854 = cljs.core.first.call(null,seq15853);
var seq15853__$1 = cljs.core.next.call(null,seq15853);
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic(G__15854,seq15853__$1);
});

om_tools.dom.progress.cljs$lang$maxFixedArity = (1);


om_tools.dom.q = (function om_tools$dom$q(var_args){
var args15857 = [];
var len__7326__auto___16425 = arguments.length;
var i__7327__auto___16426 = (0);
while(true){
if((i__7327__auto___16426 < len__7326__auto___16425)){
args15857.push((arguments[i__7327__auto___16426]));

var G__16427 = (i__7327__auto___16426 + (1));
i__7327__auto___16426 = G__16427;
continue;
} else {
}
break;
}

var G__15861 = args15857.length;
switch (G__15861) {
case 0:
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15857.slice((1)),(0),null));
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.q.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.q,null,null);
});

om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.q,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.q.cljs$lang$applyTo = (function (seq15858){
var G__15859 = cljs.core.first.call(null,seq15858);
var seq15858__$1 = cljs.core.next.call(null,seq15858);
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic(G__15859,seq15858__$1);
});

om_tools.dom.q.cljs$lang$maxFixedArity = (1);


om_tools.dom.rp = (function om_tools$dom$rp(var_args){
var args15862 = [];
var len__7326__auto___16429 = arguments.length;
var i__7327__auto___16430 = (0);
while(true){
if((i__7327__auto___16430 < len__7326__auto___16429)){
args15862.push((arguments[i__7327__auto___16430]));

var G__16431 = (i__7327__auto___16430 + (1));
i__7327__auto___16430 = G__16431;
continue;
} else {
}
break;
}

var G__15866 = args15862.length;
switch (G__15866) {
case 0:
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15862.slice((1)),(0),null));
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.rp.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rp,null,null);
});

om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.rp,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.rp.cljs$lang$applyTo = (function (seq15863){
var G__15864 = cljs.core.first.call(null,seq15863);
var seq15863__$1 = cljs.core.next.call(null,seq15863);
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic(G__15864,seq15863__$1);
});

om_tools.dom.rp.cljs$lang$maxFixedArity = (1);


om_tools.dom.rt = (function om_tools$dom$rt(var_args){
var args15867 = [];
var len__7326__auto___16433 = arguments.length;
var i__7327__auto___16434 = (0);
while(true){
if((i__7327__auto___16434 < len__7326__auto___16433)){
args15867.push((arguments[i__7327__auto___16434]));

var G__16435 = (i__7327__auto___16434 + (1));
i__7327__auto___16434 = G__16435;
continue;
} else {
}
break;
}

var G__15871 = args15867.length;
switch (G__15871) {
case 0:
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15867.slice((1)),(0),null));
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.rt.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rt,null,null);
});

om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.rt,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.rt.cljs$lang$applyTo = (function (seq15868){
var G__15869 = cljs.core.first.call(null,seq15868);
var seq15868__$1 = cljs.core.next.call(null,seq15868);
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic(G__15869,seq15868__$1);
});

om_tools.dom.rt.cljs$lang$maxFixedArity = (1);


om_tools.dom.ruby = (function om_tools$dom$ruby(var_args){
var args15872 = [];
var len__7326__auto___16437 = arguments.length;
var i__7327__auto___16438 = (0);
while(true){
if((i__7327__auto___16438 < len__7326__auto___16437)){
args15872.push((arguments[i__7327__auto___16438]));

var G__16439 = (i__7327__auto___16438 + (1));
i__7327__auto___16438 = G__16439;
continue;
} else {
}
break;
}

var G__15876 = args15872.length;
switch (G__15876) {
case 0:
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15872.slice((1)),(0),null));
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ruby,null,null);
});

om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.ruby,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.ruby.cljs$lang$applyTo = (function (seq15873){
var G__15874 = cljs.core.first.call(null,seq15873);
var seq15873__$1 = cljs.core.next.call(null,seq15873);
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(G__15874,seq15873__$1);
});

om_tools.dom.ruby.cljs$lang$maxFixedArity = (1);


om_tools.dom.s = (function om_tools$dom$s(var_args){
var args15877 = [];
var len__7326__auto___16441 = arguments.length;
var i__7327__auto___16442 = (0);
while(true){
if((i__7327__auto___16442 < len__7326__auto___16441)){
args15877.push((arguments[i__7327__auto___16442]));

var G__16443 = (i__7327__auto___16442 + (1));
i__7327__auto___16442 = G__16443;
continue;
} else {
}
break;
}

var G__15881 = args15877.length;
switch (G__15881) {
case 0:
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15877.slice((1)),(0),null));
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.s.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.s,null,null);
});

om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.s,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.s.cljs$lang$applyTo = (function (seq15878){
var G__15879 = cljs.core.first.call(null,seq15878);
var seq15878__$1 = cljs.core.next.call(null,seq15878);
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic(G__15879,seq15878__$1);
});

om_tools.dom.s.cljs$lang$maxFixedArity = (1);


om_tools.dom.samp = (function om_tools$dom$samp(var_args){
var args15882 = [];
var len__7326__auto___16445 = arguments.length;
var i__7327__auto___16446 = (0);
while(true){
if((i__7327__auto___16446 < len__7326__auto___16445)){
args15882.push((arguments[i__7327__auto___16446]));

var G__16447 = (i__7327__auto___16446 + (1));
i__7327__auto___16446 = G__16447;
continue;
} else {
}
break;
}

var G__15886 = args15882.length;
switch (G__15886) {
case 0:
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15882.slice((1)),(0),null));
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.samp.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.samp,null,null);
});

om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.samp,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.samp.cljs$lang$applyTo = (function (seq15883){
var G__15884 = cljs.core.first.call(null,seq15883);
var seq15883__$1 = cljs.core.next.call(null,seq15883);
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic(G__15884,seq15883__$1);
});

om_tools.dom.samp.cljs$lang$maxFixedArity = (1);


om_tools.dom.script = (function om_tools$dom$script(var_args){
var args15887 = [];
var len__7326__auto___16449 = arguments.length;
var i__7327__auto___16450 = (0);
while(true){
if((i__7327__auto___16450 < len__7326__auto___16449)){
args15887.push((arguments[i__7327__auto___16450]));

var G__16451 = (i__7327__auto___16450 + (1));
i__7327__auto___16450 = G__16451;
continue;
} else {
}
break;
}

var G__15891 = args15887.length;
switch (G__15891) {
case 0:
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15887.slice((1)),(0),null));
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.script.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.script,null,null);
});

om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.script,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.script.cljs$lang$applyTo = (function (seq15888){
var G__15889 = cljs.core.first.call(null,seq15888);
var seq15888__$1 = cljs.core.next.call(null,seq15888);
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic(G__15889,seq15888__$1);
});

om_tools.dom.script.cljs$lang$maxFixedArity = (1);


om_tools.dom.section = (function om_tools$dom$section(var_args){
var args15892 = [];
var len__7326__auto___16453 = arguments.length;
var i__7327__auto___16454 = (0);
while(true){
if((i__7327__auto___16454 < len__7326__auto___16453)){
args15892.push((arguments[i__7327__auto___16454]));

var G__16455 = (i__7327__auto___16454 + (1));
i__7327__auto___16454 = G__16455;
continue;
} else {
}
break;
}

var G__15896 = args15892.length;
switch (G__15896) {
case 0:
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15892.slice((1)),(0),null));
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.section.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.section,null,null);
});

om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.section,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.section.cljs$lang$applyTo = (function (seq15893){
var G__15894 = cljs.core.first.call(null,seq15893);
var seq15893__$1 = cljs.core.next.call(null,seq15893);
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic(G__15894,seq15893__$1);
});

om_tools.dom.section.cljs$lang$maxFixedArity = (1);


om_tools.dom.small = (function om_tools$dom$small(var_args){
var args15897 = [];
var len__7326__auto___16457 = arguments.length;
var i__7327__auto___16458 = (0);
while(true){
if((i__7327__auto___16458 < len__7326__auto___16457)){
args15897.push((arguments[i__7327__auto___16458]));

var G__16459 = (i__7327__auto___16458 + (1));
i__7327__auto___16458 = G__16459;
continue;
} else {
}
break;
}

var G__15901 = args15897.length;
switch (G__15901) {
case 0:
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15897.slice((1)),(0),null));
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.small.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.small,null,null);
});

om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.small,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.small.cljs$lang$applyTo = (function (seq15898){
var G__15899 = cljs.core.first.call(null,seq15898);
var seq15898__$1 = cljs.core.next.call(null,seq15898);
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic(G__15899,seq15898__$1);
});

om_tools.dom.small.cljs$lang$maxFixedArity = (1);


om_tools.dom.source = (function om_tools$dom$source(var_args){
var args15902 = [];
var len__7326__auto___16461 = arguments.length;
var i__7327__auto___16462 = (0);
while(true){
if((i__7327__auto___16462 < len__7326__auto___16461)){
args15902.push((arguments[i__7327__auto___16462]));

var G__16463 = (i__7327__auto___16462 + (1));
i__7327__auto___16462 = G__16463;
continue;
} else {
}
break;
}

var G__15906 = args15902.length;
switch (G__15906) {
case 0:
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15902.slice((1)),(0),null));
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.source.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.source,null,null);
});

om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.source,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.source.cljs$lang$applyTo = (function (seq15903){
var G__15904 = cljs.core.first.call(null,seq15903);
var seq15903__$1 = cljs.core.next.call(null,seq15903);
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic(G__15904,seq15903__$1);
});

om_tools.dom.source.cljs$lang$maxFixedArity = (1);


om_tools.dom.span = (function om_tools$dom$span(var_args){
var args15907 = [];
var len__7326__auto___16465 = arguments.length;
var i__7327__auto___16466 = (0);
while(true){
if((i__7327__auto___16466 < len__7326__auto___16465)){
args15907.push((arguments[i__7327__auto___16466]));

var G__16467 = (i__7327__auto___16466 + (1));
i__7327__auto___16466 = G__16467;
continue;
} else {
}
break;
}

var G__15911 = args15907.length;
switch (G__15911) {
case 0:
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15907.slice((1)),(0),null));
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.span.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.span,null,null);
});

om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.span,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.span.cljs$lang$applyTo = (function (seq15908){
var G__15909 = cljs.core.first.call(null,seq15908);
var seq15908__$1 = cljs.core.next.call(null,seq15908);
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic(G__15909,seq15908__$1);
});

om_tools.dom.span.cljs$lang$maxFixedArity = (1);


om_tools.dom.strong = (function om_tools$dom$strong(var_args){
var args15912 = [];
var len__7326__auto___16469 = arguments.length;
var i__7327__auto___16470 = (0);
while(true){
if((i__7327__auto___16470 < len__7326__auto___16469)){
args15912.push((arguments[i__7327__auto___16470]));

var G__16471 = (i__7327__auto___16470 + (1));
i__7327__auto___16470 = G__16471;
continue;
} else {
}
break;
}

var G__15916 = args15912.length;
switch (G__15916) {
case 0:
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15912.slice((1)),(0),null));
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.strong.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.strong,null,null);
});

om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.strong,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.strong.cljs$lang$applyTo = (function (seq15913){
var G__15914 = cljs.core.first.call(null,seq15913);
var seq15913__$1 = cljs.core.next.call(null,seq15913);
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic(G__15914,seq15913__$1);
});

om_tools.dom.strong.cljs$lang$maxFixedArity = (1);


om_tools.dom.style = (function om_tools$dom$style(var_args){
var args15917 = [];
var len__7326__auto___16473 = arguments.length;
var i__7327__auto___16474 = (0);
while(true){
if((i__7327__auto___16474 < len__7326__auto___16473)){
args15917.push((arguments[i__7327__auto___16474]));

var G__16475 = (i__7327__auto___16474 + (1));
i__7327__auto___16474 = G__16475;
continue;
} else {
}
break;
}

var G__15921 = args15917.length;
switch (G__15921) {
case 0:
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15917.slice((1)),(0),null));
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.style.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.style,null,null);
});

om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.style,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.style.cljs$lang$applyTo = (function (seq15918){
var G__15919 = cljs.core.first.call(null,seq15918);
var seq15918__$1 = cljs.core.next.call(null,seq15918);
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic(G__15919,seq15918__$1);
});

om_tools.dom.style.cljs$lang$maxFixedArity = (1);


om_tools.dom.sub = (function om_tools$dom$sub(var_args){
var args15922 = [];
var len__7326__auto___16477 = arguments.length;
var i__7327__auto___16478 = (0);
while(true){
if((i__7327__auto___16478 < len__7326__auto___16477)){
args15922.push((arguments[i__7327__auto___16478]));

var G__16479 = (i__7327__auto___16478 + (1));
i__7327__auto___16478 = G__16479;
continue;
} else {
}
break;
}

var G__15926 = args15922.length;
switch (G__15926) {
case 0:
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15922.slice((1)),(0),null));
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.sub.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.sub,null,null);
});

om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.sub,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.sub.cljs$lang$applyTo = (function (seq15923){
var G__15924 = cljs.core.first.call(null,seq15923);
var seq15923__$1 = cljs.core.next.call(null,seq15923);
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic(G__15924,seq15923__$1);
});

om_tools.dom.sub.cljs$lang$maxFixedArity = (1);


om_tools.dom.summary = (function om_tools$dom$summary(var_args){
var args15927 = [];
var len__7326__auto___16481 = arguments.length;
var i__7327__auto___16482 = (0);
while(true){
if((i__7327__auto___16482 < len__7326__auto___16481)){
args15927.push((arguments[i__7327__auto___16482]));

var G__16483 = (i__7327__auto___16482 + (1));
i__7327__auto___16482 = G__16483;
continue;
} else {
}
break;
}

var G__15931 = args15927.length;
switch (G__15931) {
case 0:
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15927.slice((1)),(0),null));
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.summary.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.summary,null,null);
});

om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.summary,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.summary.cljs$lang$applyTo = (function (seq15928){
var G__15929 = cljs.core.first.call(null,seq15928);
var seq15928__$1 = cljs.core.next.call(null,seq15928);
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic(G__15929,seq15928__$1);
});

om_tools.dom.summary.cljs$lang$maxFixedArity = (1);


om_tools.dom.sup = (function om_tools$dom$sup(var_args){
var args15932 = [];
var len__7326__auto___16485 = arguments.length;
var i__7327__auto___16486 = (0);
while(true){
if((i__7327__auto___16486 < len__7326__auto___16485)){
args15932.push((arguments[i__7327__auto___16486]));

var G__16487 = (i__7327__auto___16486 + (1));
i__7327__auto___16486 = G__16487;
continue;
} else {
}
break;
}

var G__15936 = args15932.length;
switch (G__15936) {
case 0:
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15932.slice((1)),(0),null));
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.sup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.sup,null,null);
});

om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.sup,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.sup.cljs$lang$applyTo = (function (seq15933){
var G__15934 = cljs.core.first.call(null,seq15933);
var seq15933__$1 = cljs.core.next.call(null,seq15933);
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic(G__15934,seq15933__$1);
});

om_tools.dom.sup.cljs$lang$maxFixedArity = (1);


om_tools.dom.table = (function om_tools$dom$table(var_args){
var args15937 = [];
var len__7326__auto___16489 = arguments.length;
var i__7327__auto___16490 = (0);
while(true){
if((i__7327__auto___16490 < len__7326__auto___16489)){
args15937.push((arguments[i__7327__auto___16490]));

var G__16491 = (i__7327__auto___16490 + (1));
i__7327__auto___16490 = G__16491;
continue;
} else {
}
break;
}

var G__15941 = args15937.length;
switch (G__15941) {
case 0:
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15937.slice((1)),(0),null));
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.table.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.table,null,null);
});

om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.table,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.table.cljs$lang$applyTo = (function (seq15938){
var G__15939 = cljs.core.first.call(null,seq15938);
var seq15938__$1 = cljs.core.next.call(null,seq15938);
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic(G__15939,seq15938__$1);
});

om_tools.dom.table.cljs$lang$maxFixedArity = (1);


om_tools.dom.tbody = (function om_tools$dom$tbody(var_args){
var args15942 = [];
var len__7326__auto___16493 = arguments.length;
var i__7327__auto___16494 = (0);
while(true){
if((i__7327__auto___16494 < len__7326__auto___16493)){
args15942.push((arguments[i__7327__auto___16494]));

var G__16495 = (i__7327__auto___16494 + (1));
i__7327__auto___16494 = G__16495;
continue;
} else {
}
break;
}

var G__15946 = args15942.length;
switch (G__15946) {
case 0:
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15942.slice((1)),(0),null));
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tbody,null,null);
});

om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.tbody,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.tbody.cljs$lang$applyTo = (function (seq15943){
var G__15944 = cljs.core.first.call(null,seq15943);
var seq15943__$1 = cljs.core.next.call(null,seq15943);
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(G__15944,seq15943__$1);
});

om_tools.dom.tbody.cljs$lang$maxFixedArity = (1);


om_tools.dom.td = (function om_tools$dom$td(var_args){
var args15947 = [];
var len__7326__auto___16497 = arguments.length;
var i__7327__auto___16498 = (0);
while(true){
if((i__7327__auto___16498 < len__7326__auto___16497)){
args15947.push((arguments[i__7327__auto___16498]));

var G__16499 = (i__7327__auto___16498 + (1));
i__7327__auto___16498 = G__16499;
continue;
} else {
}
break;
}

var G__15951 = args15947.length;
switch (G__15951) {
case 0:
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15947.slice((1)),(0),null));
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.td.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.td,null,null);
});

om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.td,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.td.cljs$lang$applyTo = (function (seq15948){
var G__15949 = cljs.core.first.call(null,seq15948);
var seq15948__$1 = cljs.core.next.call(null,seq15948);
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic(G__15949,seq15948__$1);
});

om_tools.dom.td.cljs$lang$maxFixedArity = (1);


om_tools.dom.tfoot = (function om_tools$dom$tfoot(var_args){
var args15952 = [];
var len__7326__auto___16501 = arguments.length;
var i__7327__auto___16502 = (0);
while(true){
if((i__7327__auto___16502 < len__7326__auto___16501)){
args15952.push((arguments[i__7327__auto___16502]));

var G__16503 = (i__7327__auto___16502 + (1));
i__7327__auto___16502 = G__16503;
continue;
} else {
}
break;
}

var G__15956 = args15952.length;
switch (G__15956) {
case 0:
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15952.slice((1)),(0),null));
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tfoot,null,null);
});

om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.tfoot,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.tfoot.cljs$lang$applyTo = (function (seq15953){
var G__15954 = cljs.core.first.call(null,seq15953);
var seq15953__$1 = cljs.core.next.call(null,seq15953);
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(G__15954,seq15953__$1);
});

om_tools.dom.tfoot.cljs$lang$maxFixedArity = (1);


om_tools.dom.th = (function om_tools$dom$th(var_args){
var args15957 = [];
var len__7326__auto___16505 = arguments.length;
var i__7327__auto___16506 = (0);
while(true){
if((i__7327__auto___16506 < len__7326__auto___16505)){
args15957.push((arguments[i__7327__auto___16506]));

var G__16507 = (i__7327__auto___16506 + (1));
i__7327__auto___16506 = G__16507;
continue;
} else {
}
break;
}

var G__15961 = args15957.length;
switch (G__15961) {
case 0:
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15957.slice((1)),(0),null));
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.th.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.th,null,null);
});

om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.th,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.th.cljs$lang$applyTo = (function (seq15958){
var G__15959 = cljs.core.first.call(null,seq15958);
var seq15958__$1 = cljs.core.next.call(null,seq15958);
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic(G__15959,seq15958__$1);
});

om_tools.dom.th.cljs$lang$maxFixedArity = (1);


om_tools.dom.thead = (function om_tools$dom$thead(var_args){
var args15962 = [];
var len__7326__auto___16509 = arguments.length;
var i__7327__auto___16510 = (0);
while(true){
if((i__7327__auto___16510 < len__7326__auto___16509)){
args15962.push((arguments[i__7327__auto___16510]));

var G__16511 = (i__7327__auto___16510 + (1));
i__7327__auto___16510 = G__16511;
continue;
} else {
}
break;
}

var G__15966 = args15962.length;
switch (G__15966) {
case 0:
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15962.slice((1)),(0),null));
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.thead.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.thead,null,null);
});

om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.thead,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.thead.cljs$lang$applyTo = (function (seq15963){
var G__15964 = cljs.core.first.call(null,seq15963);
var seq15963__$1 = cljs.core.next.call(null,seq15963);
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic(G__15964,seq15963__$1);
});

om_tools.dom.thead.cljs$lang$maxFixedArity = (1);


om_tools.dom.time = (function om_tools$dom$time(var_args){
var args15967 = [];
var len__7326__auto___16513 = arguments.length;
var i__7327__auto___16514 = (0);
while(true){
if((i__7327__auto___16514 < len__7326__auto___16513)){
args15967.push((arguments[i__7327__auto___16514]));

var G__16515 = (i__7327__auto___16514 + (1));
i__7327__auto___16514 = G__16515;
continue;
} else {
}
break;
}

var G__15971 = args15967.length;
switch (G__15971) {
case 0:
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15967.slice((1)),(0),null));
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.time.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.time,null,null);
});

om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.time,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.time.cljs$lang$applyTo = (function (seq15968){
var G__15969 = cljs.core.first.call(null,seq15968);
var seq15968__$1 = cljs.core.next.call(null,seq15968);
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic(G__15969,seq15968__$1);
});

om_tools.dom.time.cljs$lang$maxFixedArity = (1);


om_tools.dom.title = (function om_tools$dom$title(var_args){
var args15972 = [];
var len__7326__auto___16517 = arguments.length;
var i__7327__auto___16518 = (0);
while(true){
if((i__7327__auto___16518 < len__7326__auto___16517)){
args15972.push((arguments[i__7327__auto___16518]));

var G__16519 = (i__7327__auto___16518 + (1));
i__7327__auto___16518 = G__16519;
continue;
} else {
}
break;
}

var G__15976 = args15972.length;
switch (G__15976) {
case 0:
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15972.slice((1)),(0),null));
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.title.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.title,null,null);
});

om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.title,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.title.cljs$lang$applyTo = (function (seq15973){
var G__15974 = cljs.core.first.call(null,seq15973);
var seq15973__$1 = cljs.core.next.call(null,seq15973);
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic(G__15974,seq15973__$1);
});

om_tools.dom.title.cljs$lang$maxFixedArity = (1);


om_tools.dom.tr = (function om_tools$dom$tr(var_args){
var args15977 = [];
var len__7326__auto___16521 = arguments.length;
var i__7327__auto___16522 = (0);
while(true){
if((i__7327__auto___16522 < len__7326__auto___16521)){
args15977.push((arguments[i__7327__auto___16522]));

var G__16523 = (i__7327__auto___16522 + (1));
i__7327__auto___16522 = G__16523;
continue;
} else {
}
break;
}

var G__15981 = args15977.length;
switch (G__15981) {
case 0:
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15977.slice((1)),(0),null));
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.tr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tr,null,null);
});

om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.tr,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.tr.cljs$lang$applyTo = (function (seq15978){
var G__15979 = cljs.core.first.call(null,seq15978);
var seq15978__$1 = cljs.core.next.call(null,seq15978);
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic(G__15979,seq15978__$1);
});

om_tools.dom.tr.cljs$lang$maxFixedArity = (1);


om_tools.dom.track = (function om_tools$dom$track(var_args){
var args15982 = [];
var len__7326__auto___16525 = arguments.length;
var i__7327__auto___16526 = (0);
while(true){
if((i__7327__auto___16526 < len__7326__auto___16525)){
args15982.push((arguments[i__7327__auto___16526]));

var G__16527 = (i__7327__auto___16526 + (1));
i__7327__auto___16526 = G__16527;
continue;
} else {
}
break;
}

var G__15986 = args15982.length;
switch (G__15986) {
case 0:
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15982.slice((1)),(0),null));
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.track.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.track,null,null);
});

om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.track,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.track.cljs$lang$applyTo = (function (seq15983){
var G__15984 = cljs.core.first.call(null,seq15983);
var seq15983__$1 = cljs.core.next.call(null,seq15983);
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic(G__15984,seq15983__$1);
});

om_tools.dom.track.cljs$lang$maxFixedArity = (1);


om_tools.dom.u = (function om_tools$dom$u(var_args){
var args15987 = [];
var len__7326__auto___16529 = arguments.length;
var i__7327__auto___16530 = (0);
while(true){
if((i__7327__auto___16530 < len__7326__auto___16529)){
args15987.push((arguments[i__7327__auto___16530]));

var G__16531 = (i__7327__auto___16530 + (1));
i__7327__auto___16530 = G__16531;
continue;
} else {
}
break;
}

var G__15991 = args15987.length;
switch (G__15991) {
case 0:
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15987.slice((1)),(0),null));
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.u.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.u,null,null);
});

om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.u,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.u.cljs$lang$applyTo = (function (seq15988){
var G__15989 = cljs.core.first.call(null,seq15988);
var seq15988__$1 = cljs.core.next.call(null,seq15988);
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic(G__15989,seq15988__$1);
});

om_tools.dom.u.cljs$lang$maxFixedArity = (1);


om_tools.dom.ul = (function om_tools$dom$ul(var_args){
var args15992 = [];
var len__7326__auto___16533 = arguments.length;
var i__7327__auto___16534 = (0);
while(true){
if((i__7327__auto___16534 < len__7326__auto___16533)){
args15992.push((arguments[i__7327__auto___16534]));

var G__16535 = (i__7327__auto___16534 + (1));
i__7327__auto___16534 = G__16535;
continue;
} else {
}
break;
}

var G__15996 = args15992.length;
switch (G__15996) {
case 0:
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15992.slice((1)),(0),null));
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.ul.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ul,null,null);
});

om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.ul,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.ul.cljs$lang$applyTo = (function (seq15993){
var G__15994 = cljs.core.first.call(null,seq15993);
var seq15993__$1 = cljs.core.next.call(null,seq15993);
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic(G__15994,seq15993__$1);
});

om_tools.dom.ul.cljs$lang$maxFixedArity = (1);


om_tools.dom.var$ = (function om_tools$dom$var(var_args){
var args15997 = [];
var len__7326__auto___16537 = arguments.length;
var i__7327__auto___16538 = (0);
while(true){
if((i__7327__auto___16538 < len__7326__auto___16537)){
args15997.push((arguments[i__7327__auto___16538]));

var G__16539 = (i__7327__auto___16538 + (1));
i__7327__auto___16538 = G__16539;
continue;
} else {
}
break;
}

var G__16001 = args15997.length;
switch (G__16001) {
case 0:
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15997.slice((1)),(0),null));
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.var$.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.var$,null,null);
});

om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.var$,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.var$.cljs$lang$applyTo = (function (seq15998){
var G__15999 = cljs.core.first.call(null,seq15998);
var seq15998__$1 = cljs.core.next.call(null,seq15998);
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic(G__15999,seq15998__$1);
});

om_tools.dom.var$.cljs$lang$maxFixedArity = (1);


om_tools.dom.video = (function om_tools$dom$video(var_args){
var args16002 = [];
var len__7326__auto___16541 = arguments.length;
var i__7327__auto___16542 = (0);
while(true){
if((i__7327__auto___16542 < len__7326__auto___16541)){
args16002.push((arguments[i__7327__auto___16542]));

var G__16543 = (i__7327__auto___16542 + (1));
i__7327__auto___16542 = G__16543;
continue;
} else {
}
break;
}

var G__16006 = args16002.length;
switch (G__16006) {
case 0:
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args16002.slice((1)),(0),null));
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.video.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.video,null,null);
});

om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.video,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.video.cljs$lang$applyTo = (function (seq16003){
var G__16004 = cljs.core.first.call(null,seq16003);
var seq16003__$1 = cljs.core.next.call(null,seq16003);
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic(G__16004,seq16003__$1);
});

om_tools.dom.video.cljs$lang$maxFixedArity = (1);


om_tools.dom.wbr = (function om_tools$dom$wbr(var_args){
var args16007 = [];
var len__7326__auto___16545 = arguments.length;
var i__7327__auto___16546 = (0);
while(true){
if((i__7327__auto___16546 < len__7326__auto___16545)){
args16007.push((arguments[i__7327__auto___16546]));

var G__16547 = (i__7327__auto___16546 + (1));
i__7327__auto___16546 = G__16547;
continue;
} else {
}
break;
}

var G__16011 = args16007.length;
switch (G__16011) {
case 0:
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args16007.slice((1)),(0),null));
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.wbr,null,null);
});

om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.wbr,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.wbr.cljs$lang$applyTo = (function (seq16008){
var G__16009 = cljs.core.first.call(null,seq16008);
var seq16008__$1 = cljs.core.next.call(null,seq16008);
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(G__16009,seq16008__$1);
});

om_tools.dom.wbr.cljs$lang$maxFixedArity = (1);


om_tools.dom.circle = (function om_tools$dom$circle(var_args){
var args16012 = [];
var len__7326__auto___16549 = arguments.length;
var i__7327__auto___16550 = (0);
while(true){
if((i__7327__auto___16550 < len__7326__auto___16549)){
args16012.push((arguments[i__7327__auto___16550]));

var G__16551 = (i__7327__auto___16550 + (1));
i__7327__auto___16550 = G__16551;
continue;
} else {
}
break;
}

var G__16016 = args16012.length;
switch (G__16016) {
case 0:
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args16012.slice((1)),(0),null));
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.circle.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.circle,null,null);
});

om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.circle,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.circle.cljs$lang$applyTo = (function (seq16013){
var G__16014 = cljs.core.first.call(null,seq16013);
var seq16013__$1 = cljs.core.next.call(null,seq16013);
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic(G__16014,seq16013__$1);
});

om_tools.dom.circle.cljs$lang$maxFixedArity = (1);


om_tools.dom.clipPath = (function om_tools$dom$clipPath(var_args){
var args16017 = [];
var len__7326__auto___16553 = arguments.length;
var i__7327__auto___16554 = (0);
while(true){
if((i__7327__auto___16554 < len__7326__auto___16553)){
args16017.push((arguments[i__7327__auto___16554]));

var G__16555 = (i__7327__auto___16554 + (1));
i__7327__auto___16554 = G__16555;
continue;
} else {
}
break;
}

var G__16021 = args16017.length;
switch (G__16021) {
case 0:
return om_tools.dom.clipPath.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args16017.slice((1)),(0),null));
return om_tools.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.clipPath.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.clipPath,null,null);
});

om_tools.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.clipPath,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.clipPath.cljs$lang$applyTo = (function (seq16018){
var G__16019 = cljs.core.first.call(null,seq16018);
var seq16018__$1 = cljs.core.next.call(null,seq16018);
return om_tools.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic(G__16019,seq16018__$1);
});

om_tools.dom.clipPath.cljs$lang$maxFixedArity = (1);


om_tools.dom.ellipse = (function om_tools$dom$ellipse(var_args){
var args16022 = [];
var len__7326__auto___16557 = arguments.length;
var i__7327__auto___16558 = (0);
while(true){
if((i__7327__auto___16558 < len__7326__auto___16557)){
args16022.push((arguments[i__7327__auto___16558]));

var G__16559 = (i__7327__auto___16558 + (1));
i__7327__auto___16558 = G__16559;
continue;
} else {
}
break;
}

var G__16026 = args16022.length;
switch (G__16026) {
case 0:
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args16022.slice((1)),(0),null));
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ellipse,null,null);
});

om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.ellipse,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.ellipse.cljs$lang$applyTo = (function (seq16023){
var G__16024 = cljs.core.first.call(null,seq16023);
var seq16023__$1 = cljs.core.next.call(null,seq16023);
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(G__16024,seq16023__$1);
});

om_tools.dom.ellipse.cljs$lang$maxFixedArity = (1);


om_tools.dom.g = (function om_tools$dom$g(var_args){
var args16027 = [];
var len__7326__auto___16561 = arguments.length;
var i__7327__auto___16562 = (0);
while(true){
if((i__7327__auto___16562 < len__7326__auto___16561)){
args16027.push((arguments[i__7327__auto___16562]));

var G__16563 = (i__7327__auto___16562 + (1));
i__7327__auto___16562 = G__16563;
continue;
} else {
}
break;
}

var G__16031 = args16027.length;
switch (G__16031) {
case 0:
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args16027.slice((1)),(0),null));
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.g.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.g,null,null);
});

om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.g,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.g.cljs$lang$applyTo = (function (seq16028){
var G__16029 = cljs.core.first.call(null,seq16028);
var seq16028__$1 = cljs.core.next.call(null,seq16028);
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic(G__16029,seq16028__$1);
});

om_tools.dom.g.cljs$lang$maxFixedArity = (1);


om_tools.dom.line = (function om_tools$dom$line(var_args){
var args16032 = [];
var len__7326__auto___16565 = arguments.length;
var i__7327__auto___16566 = (0);
while(true){
if((i__7327__auto___16566 < len__7326__auto___16565)){
args16032.push((arguments[i__7327__auto___16566]));

var G__16567 = (i__7327__auto___16566 + (1));
i__7327__auto___16566 = G__16567;
continue;
} else {
}
break;
}

var G__16036 = args16032.length;
switch (G__16036) {
case 0:
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args16032.slice((1)),(0),null));
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.line.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.line,null,null);
});

om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.line,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.line.cljs$lang$applyTo = (function (seq16033){
var G__16034 = cljs.core.first.call(null,seq16033);
var seq16033__$1 = cljs.core.next.call(null,seq16033);
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic(G__16034,seq16033__$1);
});

om_tools.dom.line.cljs$lang$maxFixedArity = (1);


om_tools.dom.mask = (function om_tools$dom$mask(var_args){
var args16037 = [];
var len__7326__auto___16569 = arguments.length;
var i__7327__auto___16570 = (0);
while(true){
if((i__7327__auto___16570 < len__7326__auto___16569)){
args16037.push((arguments[i__7327__auto___16570]));

var G__16571 = (i__7327__auto___16570 + (1));
i__7327__auto___16570 = G__16571;
continue;
} else {
}
break;
}

var G__16041 = args16037.length;
switch (G__16041) {
case 0:
return om_tools.dom.mask.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args16037.slice((1)),(0),null));
return om_tools.dom.mask.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.mask.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.mask,null,null);
});

om_tools.dom.mask.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.mask,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.mask.cljs$lang$applyTo = (function (seq16038){
var G__16039 = cljs.core.first.call(null,seq16038);
var seq16038__$1 = cljs.core.next.call(null,seq16038);
return om_tools.dom.mask.cljs$core$IFn$_invoke$arity$variadic(G__16039,seq16038__$1);
});

om_tools.dom.mask.cljs$lang$maxFixedArity = (1);


om_tools.dom.path = (function om_tools$dom$path(var_args){
var args16042 = [];
var len__7326__auto___16573 = arguments.length;
var i__7327__auto___16574 = (0);
while(true){
if((i__7327__auto___16574 < len__7326__auto___16573)){
args16042.push((arguments[i__7327__auto___16574]));

var G__16575 = (i__7327__auto___16574 + (1));
i__7327__auto___16574 = G__16575;
continue;
} else {
}
break;
}

var G__16046 = args16042.length;
switch (G__16046) {
case 0:
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args16042.slice((1)),(0),null));
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.path.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.path,null,null);
});

om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.path,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.path.cljs$lang$applyTo = (function (seq16043){
var G__16044 = cljs.core.first.call(null,seq16043);
var seq16043__$1 = cljs.core.next.call(null,seq16043);
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic(G__16044,seq16043__$1);
});

om_tools.dom.path.cljs$lang$maxFixedArity = (1);


om_tools.dom.pattern = (function om_tools$dom$pattern(var_args){
var args16047 = [];
var len__7326__auto___16577 = arguments.length;
var i__7327__auto___16578 = (0);
while(true){
if((i__7327__auto___16578 < len__7326__auto___16577)){
args16047.push((arguments[i__7327__auto___16578]));

var G__16579 = (i__7327__auto___16578 + (1));
i__7327__auto___16578 = G__16579;
continue;
} else {
}
break;
}

var G__16051 = args16047.length;
switch (G__16051) {
case 0:
return om_tools.dom.pattern.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args16047.slice((1)),(0),null));
return om_tools.dom.pattern.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.pattern.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.pattern,null,null);
});

om_tools.dom.pattern.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.pattern,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.pattern.cljs$lang$applyTo = (function (seq16048){
var G__16049 = cljs.core.first.call(null,seq16048);
var seq16048__$1 = cljs.core.next.call(null,seq16048);
return om_tools.dom.pattern.cljs$core$IFn$_invoke$arity$variadic(G__16049,seq16048__$1);
});

om_tools.dom.pattern.cljs$lang$maxFixedArity = (1);


om_tools.dom.polyline = (function om_tools$dom$polyline(var_args){
var args16052 = [];
var len__7326__auto___16581 = arguments.length;
var i__7327__auto___16582 = (0);
while(true){
if((i__7327__auto___16582 < len__7326__auto___16581)){
args16052.push((arguments[i__7327__auto___16582]));

var G__16583 = (i__7327__auto___16582 + (1));
i__7327__auto___16582 = G__16583;
continue;
} else {
}
break;
}

var G__16056 = args16052.length;
switch (G__16056) {
case 0:
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args16052.slice((1)),(0),null));
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.polyline,null,null);
});

om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.polyline,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.polyline.cljs$lang$applyTo = (function (seq16053){
var G__16054 = cljs.core.first.call(null,seq16053);
var seq16053__$1 = cljs.core.next.call(null,seq16053);
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(G__16054,seq16053__$1);
});

om_tools.dom.polyline.cljs$lang$maxFixedArity = (1);


om_tools.dom.rect = (function om_tools$dom$rect(var_args){
var args16057 = [];
var len__7326__auto___16585 = arguments.length;
var i__7327__auto___16586 = (0);
while(true){
if((i__7327__auto___16586 < len__7326__auto___16585)){
args16057.push((arguments[i__7327__auto___16586]));

var G__16587 = (i__7327__auto___16586 + (1));
i__7327__auto___16586 = G__16587;
continue;
} else {
}
break;
}

var G__16061 = args16057.length;
switch (G__16061) {
case 0:
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args16057.slice((1)),(0),null));
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.rect.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rect,null,null);
});

om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.rect,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.rect.cljs$lang$applyTo = (function (seq16058){
var G__16059 = cljs.core.first.call(null,seq16058);
var seq16058__$1 = cljs.core.next.call(null,seq16058);
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic(G__16059,seq16058__$1);
});

om_tools.dom.rect.cljs$lang$maxFixedArity = (1);


om_tools.dom.svg = (function om_tools$dom$svg(var_args){
var args16062 = [];
var len__7326__auto___16589 = arguments.length;
var i__7327__auto___16590 = (0);
while(true){
if((i__7327__auto___16590 < len__7326__auto___16589)){
args16062.push((arguments[i__7327__auto___16590]));

var G__16591 = (i__7327__auto___16590 + (1));
i__7327__auto___16590 = G__16591;
continue;
} else {
}
break;
}

var G__16066 = args16062.length;
switch (G__16066) {
case 0:
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args16062.slice((1)),(0),null));
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.svg.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.svg,null,null);
});

om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.svg,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.svg.cljs$lang$applyTo = (function (seq16063){
var G__16064 = cljs.core.first.call(null,seq16063);
var seq16063__$1 = cljs.core.next.call(null,seq16063);
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic(G__16064,seq16063__$1);
});

om_tools.dom.svg.cljs$lang$maxFixedArity = (1);


om_tools.dom.text = (function om_tools$dom$text(var_args){
var args16067 = [];
var len__7326__auto___16593 = arguments.length;
var i__7327__auto___16594 = (0);
while(true){
if((i__7327__auto___16594 < len__7326__auto___16593)){
args16067.push((arguments[i__7327__auto___16594]));

var G__16595 = (i__7327__auto___16594 + (1));
i__7327__auto___16594 = G__16595;
continue;
} else {
}
break;
}

var G__16071 = args16067.length;
switch (G__16071) {
case 0:
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args16067.slice((1)),(0),null));
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.text.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.text,null,null);
});

om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.text,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.text.cljs$lang$applyTo = (function (seq16068){
var G__16069 = cljs.core.first.call(null,seq16068);
var seq16068__$1 = cljs.core.next.call(null,seq16068);
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic(G__16069,seq16068__$1);
});

om_tools.dom.text.cljs$lang$maxFixedArity = (1);


om_tools.dom.defs = (function om_tools$dom$defs(var_args){
var args16072 = [];
var len__7326__auto___16597 = arguments.length;
var i__7327__auto___16598 = (0);
while(true){
if((i__7327__auto___16598 < len__7326__auto___16597)){
args16072.push((arguments[i__7327__auto___16598]));

var G__16599 = (i__7327__auto___16598 + (1));
i__7327__auto___16598 = G__16599;
continue;
} else {
}
break;
}

var G__16076 = args16072.length;
switch (G__16076) {
case 0:
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args16072.slice((1)),(0),null));
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.defs.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.defs,null,null);
});

om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.defs,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.defs.cljs$lang$applyTo = (function (seq16073){
var G__16074 = cljs.core.first.call(null,seq16073);
var seq16073__$1 = cljs.core.next.call(null,seq16073);
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic(G__16074,seq16073__$1);
});

om_tools.dom.defs.cljs$lang$maxFixedArity = (1);


om_tools.dom.linearGradient = (function om_tools$dom$linearGradient(var_args){
var args16077 = [];
var len__7326__auto___16601 = arguments.length;
var i__7327__auto___16602 = (0);
while(true){
if((i__7327__auto___16602 < len__7326__auto___16601)){
args16077.push((arguments[i__7327__auto___16602]));

var G__16603 = (i__7327__auto___16602 + (1));
i__7327__auto___16602 = G__16603;
continue;
} else {
}
break;
}

var G__16081 = args16077.length;
switch (G__16081) {
case 0:
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args16077.slice((1)),(0),null));
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.linearGradient,null,null);
});

om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.linearGradient,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.linearGradient.cljs$lang$applyTo = (function (seq16078){
var G__16079 = cljs.core.first.call(null,seq16078);
var seq16078__$1 = cljs.core.next.call(null,seq16078);
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(G__16079,seq16078__$1);
});

om_tools.dom.linearGradient.cljs$lang$maxFixedArity = (1);


om_tools.dom.polygon = (function om_tools$dom$polygon(var_args){
var args16082 = [];
var len__7326__auto___16605 = arguments.length;
var i__7327__auto___16606 = (0);
while(true){
if((i__7327__auto___16606 < len__7326__auto___16605)){
args16082.push((arguments[i__7327__auto___16606]));

var G__16607 = (i__7327__auto___16606 + (1));
i__7327__auto___16606 = G__16607;
continue;
} else {
}
break;
}

var G__16086 = args16082.length;
switch (G__16086) {
case 0:
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args16082.slice((1)),(0),null));
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.polygon,null,null);
});

om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.polygon,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.polygon.cljs$lang$applyTo = (function (seq16083){
var G__16084 = cljs.core.first.call(null,seq16083);
var seq16083__$1 = cljs.core.next.call(null,seq16083);
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(G__16084,seq16083__$1);
});

om_tools.dom.polygon.cljs$lang$maxFixedArity = (1);


om_tools.dom.radialGradient = (function om_tools$dom$radialGradient(var_args){
var args16087 = [];
var len__7326__auto___16609 = arguments.length;
var i__7327__auto___16610 = (0);
while(true){
if((i__7327__auto___16610 < len__7326__auto___16609)){
args16087.push((arguments[i__7327__auto___16610]));

var G__16611 = (i__7327__auto___16610 + (1));
i__7327__auto___16610 = G__16611;
continue;
} else {
}
break;
}

var G__16091 = args16087.length;
switch (G__16091) {
case 0:
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args16087.slice((1)),(0),null));
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.radialGradient,null,null);
});

om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.radialGradient,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.radialGradient.cljs$lang$applyTo = (function (seq16088){
var G__16089 = cljs.core.first.call(null,seq16088);
var seq16088__$1 = cljs.core.next.call(null,seq16088);
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(G__16089,seq16088__$1);
});

om_tools.dom.radialGradient.cljs$lang$maxFixedArity = (1);


om_tools.dom.stop = (function om_tools$dom$stop(var_args){
var args16092 = [];
var len__7326__auto___16613 = arguments.length;
var i__7327__auto___16614 = (0);
while(true){
if((i__7327__auto___16614 < len__7326__auto___16613)){
args16092.push((arguments[i__7327__auto___16614]));

var G__16615 = (i__7327__auto___16614 + (1));
i__7327__auto___16614 = G__16615;
continue;
} else {
}
break;
}

var G__16096 = args16092.length;
switch (G__16096) {
case 0:
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args16092.slice((1)),(0),null));
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.stop.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.stop,null,null);
});

om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.stop,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.stop.cljs$lang$applyTo = (function (seq16093){
var G__16094 = cljs.core.first.call(null,seq16093);
var seq16093__$1 = cljs.core.next.call(null,seq16093);
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic(G__16094,seq16093__$1);
});

om_tools.dom.stop.cljs$lang$maxFixedArity = (1);


om_tools.dom.tspan = (function om_tools$dom$tspan(var_args){
var args16097 = [];
var len__7326__auto___16617 = arguments.length;
var i__7327__auto___16618 = (0);
while(true){
if((i__7327__auto___16618 < len__7326__auto___16617)){
args16097.push((arguments[i__7327__auto___16618]));

var G__16619 = (i__7327__auto___16618 + (1));
i__7327__auto___16618 = G__16619;
continue;
} else {
}
break;
}

var G__16101 = args16097.length;
switch (G__16101) {
case 0:
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args16097.slice((1)),(0),null));
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tspan,null,null);
});

om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.tspan,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.tspan.cljs$lang$applyTo = (function (seq16098){
var G__16099 = cljs.core.first.call(null,seq16098);
var seq16098__$1 = cljs.core.next.call(null,seq16098);
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(G__16099,seq16098__$1);
});

om_tools.dom.tspan.cljs$lang$maxFixedArity = (1);


om_tools.dom.use = (function om_tools$dom$use(var_args){
var args16102 = [];
var len__7326__auto___16621 = arguments.length;
var i__7327__auto___16622 = (0);
while(true){
if((i__7327__auto___16622 < len__7326__auto___16621)){
args16102.push((arguments[i__7327__auto___16622]));

var G__16623 = (i__7327__auto___16622 + (1));
i__7327__auto___16622 = G__16623;
continue;
} else {
}
break;
}

var G__16106 = args16102.length;
switch (G__16106) {
case 0:
return om_tools.dom.use.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args16102.slice((1)),(0),null));
return om_tools.dom.use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.use.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.use,null,null);
});

om_tools.dom.use.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,React.DOM.use,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.use.cljs$lang$applyTo = (function (seq16103){
var G__16104 = cljs.core.first.call(null,seq16103);
var seq16103__$1 = cljs.core.next.call(null,seq16103);
return om_tools.dom.use.cljs$core$IFn$_invoke$arity$variadic(G__16104,seq16103__$1);
});

om_tools.dom.use.cljs$lang$maxFixedArity = (1);


om_tools.dom.input = (function om_tools$dom$input(var_args){
var args16107 = [];
var len__7326__auto___16625 = arguments.length;
var i__7327__auto___16626 = (0);
while(true){
if((i__7327__auto___16626 < len__7326__auto___16625)){
args16107.push((arguments[i__7327__auto___16626]));

var G__16627 = (i__7327__auto___16626 + (1));
i__7327__auto___16626 = G__16627;
continue;
} else {
}
break;
}

var G__16111 = args16107.length;
switch (G__16111) {
case 0:
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args16107.slice((1)),(0),null));
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.input.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.input,null,null);
});

om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,om.dom.input,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.input.cljs$lang$applyTo = (function (seq16108){
var G__16109 = cljs.core.first.call(null,seq16108);
var seq16108__$1 = cljs.core.next.call(null,seq16108);
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic(G__16109,seq16108__$1);
});

om_tools.dom.input.cljs$lang$maxFixedArity = (1);


om_tools.dom.textarea = (function om_tools$dom$textarea(var_args){
var args16112 = [];
var len__7326__auto___16629 = arguments.length;
var i__7327__auto___16630 = (0);
while(true){
if((i__7327__auto___16630 < len__7326__auto___16629)){
args16112.push((arguments[i__7327__auto___16630]));

var G__16631 = (i__7327__auto___16630 + (1));
i__7327__auto___16630 = G__16631;
continue;
} else {
}
break;
}

var G__16116 = args16112.length;
switch (G__16116) {
case 0:
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args16112.slice((1)),(0),null));
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.textarea,null,null);
});

om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,om.dom.textarea,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.textarea.cljs$lang$applyTo = (function (seq16113){
var G__16114 = cljs.core.first.call(null,seq16113);
var seq16113__$1 = cljs.core.next.call(null,seq16113);
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(G__16114,seq16113__$1);
});

om_tools.dom.textarea.cljs$lang$maxFixedArity = (1);


om_tools.dom.option = (function om_tools$dom$option(var_args){
var args15627 = [];
var len__7326__auto___16633 = arguments.length;
var i__7327__auto___16634 = (0);
while(true){
if((i__7327__auto___16634 < len__7326__auto___16633)){
args15627.push((arguments[i__7327__auto___16634]));

var G__16635 = (i__7327__auto___16634 + (1));
i__7327__auto___16634 = G__16635;
continue;
} else {
}
break;
}

var G__15631 = args15627.length;
switch (G__15631) {
case 0:
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args15627.slice((1)),(0),null));
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7345__auto__);

}
});

om_tools.dom.option.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.option,null,null);
});

om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (opts__15435__auto__,children__15436__auto__){
return om_tools.dom.element.call(null,om.dom.option,opts__15435__auto__,children__15436__auto__);
});

om_tools.dom.option.cljs$lang$applyTo = (function (seq15628){
var G__15629 = cljs.core.first.call(null,seq15628);
var seq15628__$1 = cljs.core.next.call(null,seq15628);
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic(G__15629,seq15628__$1);
});

om_tools.dom.option.cljs$lang$maxFixedArity = (1);

om_tools.dom.class_set = (function om_tools$dom$class_set(m){

var temp__4657__auto__ = cljs.core.seq.call(null,cljs.core.distinct.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.keys.call(null,cljs.core.filter.call(null,cljs.core.val,m)))));
if(temp__4657__auto__){
var ks = temp__4657__auto__;
return clojure.string.join.call(null," ",ks);
} else {
return null;
}
});

//# sourceMappingURL=dom.js.map?rel=1486035193721