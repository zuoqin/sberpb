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
if(cljs.core.truth_((function (){var or__24872__auto__ = (cljs.core.count.call(null,attr) < (5));
if(or__24872__auto__){
return or__24872__auto__;
} else {
var G__34737 = cljs.core.subs.call(null,attr,(0),(5));
switch (G__34737) {
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
var G__34740 = (((opt instanceof cljs.core.Keyword))?opt.fqn:null);
switch (G__34740) {
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
return cljs.core.clj__GT_js.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__34746){
var vec__34747 = p__34746;
var k = cljs.core.nth.call(null,vec__34747,(0),null);
var v = cljs.core.nth.call(null,vec__34747,(1),null);
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
return (function (){var or__24872__auto__ = React.isValidElement;
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
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
var vec__34753 = om_tools.dom.element_args.call(null,opts,children);
var opts__$1 = cljs.core.nth.call(null,vec__34753,(0),null);
var children__$1 = cljs.core.nth.call(null,vec__34753,(1),null);
return cljs.core.apply.call(null,ctor,cljs.core.flatten.call(null,cljs.core.cons.call(null,opts__$1,children__$1)));
});
om_tools.dom.a = (function om_tools$dom$a(var_args){
var args34756 = [];
var len__25947__auto___35406 = arguments.length;
var i__25948__auto___35407 = (0);
while(true){
if((i__25948__auto___35407 < len__25947__auto___35406)){
args34756.push((arguments[i__25948__auto___35407]));

var G__35408 = (i__25948__auto___35407 + (1));
i__25948__auto___35407 = G__35408;
continue;
} else {
}
break;
}

var G__34760 = args34756.length;
switch (G__34760) {
case 0:
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args34756.slice((1)),(0),null));
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.a.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.a,null,null);
});

om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.a,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.a.cljs$lang$applyTo = (function (seq34757){
var G__34758 = cljs.core.first.call(null,seq34757);
var seq34757__$1 = cljs.core.next.call(null,seq34757);
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic(G__34758,seq34757__$1);
});

om_tools.dom.a.cljs$lang$maxFixedArity = (1);


om_tools.dom.abbr = (function om_tools$dom$abbr(var_args){
var args34761 = [];
var len__25947__auto___35410 = arguments.length;
var i__25948__auto___35411 = (0);
while(true){
if((i__25948__auto___35411 < len__25947__auto___35410)){
args34761.push((arguments[i__25948__auto___35411]));

var G__35412 = (i__25948__auto___35411 + (1));
i__25948__auto___35411 = G__35412;
continue;
} else {
}
break;
}

var G__34765 = args34761.length;
switch (G__34765) {
case 0:
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args34761.slice((1)),(0),null));
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.abbr,null,null);
});

om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.abbr,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.abbr.cljs$lang$applyTo = (function (seq34762){
var G__34763 = cljs.core.first.call(null,seq34762);
var seq34762__$1 = cljs.core.next.call(null,seq34762);
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(G__34763,seq34762__$1);
});

om_tools.dom.abbr.cljs$lang$maxFixedArity = (1);


om_tools.dom.address = (function om_tools$dom$address(var_args){
var args34766 = [];
var len__25947__auto___35414 = arguments.length;
var i__25948__auto___35415 = (0);
while(true){
if((i__25948__auto___35415 < len__25947__auto___35414)){
args34766.push((arguments[i__25948__auto___35415]));

var G__35416 = (i__25948__auto___35415 + (1));
i__25948__auto___35415 = G__35416;
continue;
} else {
}
break;
}

var G__34770 = args34766.length;
switch (G__34770) {
case 0:
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args34766.slice((1)),(0),null));
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.address.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.address,null,null);
});

om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.address,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.address.cljs$lang$applyTo = (function (seq34767){
var G__34768 = cljs.core.first.call(null,seq34767);
var seq34767__$1 = cljs.core.next.call(null,seq34767);
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic(G__34768,seq34767__$1);
});

om_tools.dom.address.cljs$lang$maxFixedArity = (1);


om_tools.dom.area = (function om_tools$dom$area(var_args){
var args34771 = [];
var len__25947__auto___35418 = arguments.length;
var i__25948__auto___35419 = (0);
while(true){
if((i__25948__auto___35419 < len__25947__auto___35418)){
args34771.push((arguments[i__25948__auto___35419]));

var G__35420 = (i__25948__auto___35419 + (1));
i__25948__auto___35419 = G__35420;
continue;
} else {
}
break;
}

var G__34775 = args34771.length;
switch (G__34775) {
case 0:
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args34771.slice((1)),(0),null));
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.area.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.area,null,null);
});

om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.area,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.area.cljs$lang$applyTo = (function (seq34772){
var G__34773 = cljs.core.first.call(null,seq34772);
var seq34772__$1 = cljs.core.next.call(null,seq34772);
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic(G__34773,seq34772__$1);
});

om_tools.dom.area.cljs$lang$maxFixedArity = (1);


om_tools.dom.article = (function om_tools$dom$article(var_args){
var args34776 = [];
var len__25947__auto___35422 = arguments.length;
var i__25948__auto___35423 = (0);
while(true){
if((i__25948__auto___35423 < len__25947__auto___35422)){
args34776.push((arguments[i__25948__auto___35423]));

var G__35424 = (i__25948__auto___35423 + (1));
i__25948__auto___35423 = G__35424;
continue;
} else {
}
break;
}

var G__34780 = args34776.length;
switch (G__34780) {
case 0:
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args34776.slice((1)),(0),null));
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.article.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.article,null,null);
});

om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.article,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.article.cljs$lang$applyTo = (function (seq34777){
var G__34778 = cljs.core.first.call(null,seq34777);
var seq34777__$1 = cljs.core.next.call(null,seq34777);
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic(G__34778,seq34777__$1);
});

om_tools.dom.article.cljs$lang$maxFixedArity = (1);


om_tools.dom.aside = (function om_tools$dom$aside(var_args){
var args34781 = [];
var len__25947__auto___35426 = arguments.length;
var i__25948__auto___35427 = (0);
while(true){
if((i__25948__auto___35427 < len__25947__auto___35426)){
args34781.push((arguments[i__25948__auto___35427]));

var G__35428 = (i__25948__auto___35427 + (1));
i__25948__auto___35427 = G__35428;
continue;
} else {
}
break;
}

var G__34785 = args34781.length;
switch (G__34785) {
case 0:
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args34781.slice((1)),(0),null));
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.aside.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.aside,null,null);
});

om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.aside,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.aside.cljs$lang$applyTo = (function (seq34782){
var G__34783 = cljs.core.first.call(null,seq34782);
var seq34782__$1 = cljs.core.next.call(null,seq34782);
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic(G__34783,seq34782__$1);
});

om_tools.dom.aside.cljs$lang$maxFixedArity = (1);


om_tools.dom.audio = (function om_tools$dom$audio(var_args){
var args34786 = [];
var len__25947__auto___35430 = arguments.length;
var i__25948__auto___35431 = (0);
while(true){
if((i__25948__auto___35431 < len__25947__auto___35430)){
args34786.push((arguments[i__25948__auto___35431]));

var G__35432 = (i__25948__auto___35431 + (1));
i__25948__auto___35431 = G__35432;
continue;
} else {
}
break;
}

var G__34790 = args34786.length;
switch (G__34790) {
case 0:
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args34786.slice((1)),(0),null));
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.audio.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.audio,null,null);
});

om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.audio,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.audio.cljs$lang$applyTo = (function (seq34787){
var G__34788 = cljs.core.first.call(null,seq34787);
var seq34787__$1 = cljs.core.next.call(null,seq34787);
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic(G__34788,seq34787__$1);
});

om_tools.dom.audio.cljs$lang$maxFixedArity = (1);


om_tools.dom.b = (function om_tools$dom$b(var_args){
var args34791 = [];
var len__25947__auto___35434 = arguments.length;
var i__25948__auto___35435 = (0);
while(true){
if((i__25948__auto___35435 < len__25947__auto___35434)){
args34791.push((arguments[i__25948__auto___35435]));

var G__35436 = (i__25948__auto___35435 + (1));
i__25948__auto___35435 = G__35436;
continue;
} else {
}
break;
}

var G__34795 = args34791.length;
switch (G__34795) {
case 0:
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args34791.slice((1)),(0),null));
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.b.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.b,null,null);
});

om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.b,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.b.cljs$lang$applyTo = (function (seq34792){
var G__34793 = cljs.core.first.call(null,seq34792);
var seq34792__$1 = cljs.core.next.call(null,seq34792);
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic(G__34793,seq34792__$1);
});

om_tools.dom.b.cljs$lang$maxFixedArity = (1);


om_tools.dom.base = (function om_tools$dom$base(var_args){
var args34796 = [];
var len__25947__auto___35438 = arguments.length;
var i__25948__auto___35439 = (0);
while(true){
if((i__25948__auto___35439 < len__25947__auto___35438)){
args34796.push((arguments[i__25948__auto___35439]));

var G__35440 = (i__25948__auto___35439 + (1));
i__25948__auto___35439 = G__35440;
continue;
} else {
}
break;
}

var G__34800 = args34796.length;
switch (G__34800) {
case 0:
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args34796.slice((1)),(0),null));
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.base.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.base,null,null);
});

om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.base,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.base.cljs$lang$applyTo = (function (seq34797){
var G__34798 = cljs.core.first.call(null,seq34797);
var seq34797__$1 = cljs.core.next.call(null,seq34797);
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic(G__34798,seq34797__$1);
});

om_tools.dom.base.cljs$lang$maxFixedArity = (1);


om_tools.dom.bdi = (function om_tools$dom$bdi(var_args){
var args34801 = [];
var len__25947__auto___35442 = arguments.length;
var i__25948__auto___35443 = (0);
while(true){
if((i__25948__auto___35443 < len__25947__auto___35442)){
args34801.push((arguments[i__25948__auto___35443]));

var G__35444 = (i__25948__auto___35443 + (1));
i__25948__auto___35443 = G__35444;
continue;
} else {
}
break;
}

var G__34805 = args34801.length;
switch (G__34805) {
case 0:
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args34801.slice((1)),(0),null));
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.bdi,null,null);
});

om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.bdi,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.bdi.cljs$lang$applyTo = (function (seq34802){
var G__34803 = cljs.core.first.call(null,seq34802);
var seq34802__$1 = cljs.core.next.call(null,seq34802);
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(G__34803,seq34802__$1);
});

om_tools.dom.bdi.cljs$lang$maxFixedArity = (1);


om_tools.dom.bdo = (function om_tools$dom$bdo(var_args){
var args34806 = [];
var len__25947__auto___35446 = arguments.length;
var i__25948__auto___35447 = (0);
while(true){
if((i__25948__auto___35447 < len__25947__auto___35446)){
args34806.push((arguments[i__25948__auto___35447]));

var G__35448 = (i__25948__auto___35447 + (1));
i__25948__auto___35447 = G__35448;
continue;
} else {
}
break;
}

var G__34810 = args34806.length;
switch (G__34810) {
case 0:
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args34806.slice((1)),(0),null));
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.bdo,null,null);
});

om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.bdo,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.bdo.cljs$lang$applyTo = (function (seq34807){
var G__34808 = cljs.core.first.call(null,seq34807);
var seq34807__$1 = cljs.core.next.call(null,seq34807);
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(G__34808,seq34807__$1);
});

om_tools.dom.bdo.cljs$lang$maxFixedArity = (1);


om_tools.dom.big = (function om_tools$dom$big(var_args){
var args34811 = [];
var len__25947__auto___35450 = arguments.length;
var i__25948__auto___35451 = (0);
while(true){
if((i__25948__auto___35451 < len__25947__auto___35450)){
args34811.push((arguments[i__25948__auto___35451]));

var G__35452 = (i__25948__auto___35451 + (1));
i__25948__auto___35451 = G__35452;
continue;
} else {
}
break;
}

var G__34815 = args34811.length;
switch (G__34815) {
case 0:
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args34811.slice((1)),(0),null));
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.big.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.big,null,null);
});

om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.big,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.big.cljs$lang$applyTo = (function (seq34812){
var G__34813 = cljs.core.first.call(null,seq34812);
var seq34812__$1 = cljs.core.next.call(null,seq34812);
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic(G__34813,seq34812__$1);
});

om_tools.dom.big.cljs$lang$maxFixedArity = (1);


om_tools.dom.blockquote = (function om_tools$dom$blockquote(var_args){
var args34816 = [];
var len__25947__auto___35454 = arguments.length;
var i__25948__auto___35455 = (0);
while(true){
if((i__25948__auto___35455 < len__25947__auto___35454)){
args34816.push((arguments[i__25948__auto___35455]));

var G__35456 = (i__25948__auto___35455 + (1));
i__25948__auto___35455 = G__35456;
continue;
} else {
}
break;
}

var G__34820 = args34816.length;
switch (G__34820) {
case 0:
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args34816.slice((1)),(0),null));
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.blockquote,null,null);
});

om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.blockquote,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.blockquote.cljs$lang$applyTo = (function (seq34817){
var G__34818 = cljs.core.first.call(null,seq34817);
var seq34817__$1 = cljs.core.next.call(null,seq34817);
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(G__34818,seq34817__$1);
});

om_tools.dom.blockquote.cljs$lang$maxFixedArity = (1);


om_tools.dom.body = (function om_tools$dom$body(var_args){
var args34821 = [];
var len__25947__auto___35458 = arguments.length;
var i__25948__auto___35459 = (0);
while(true){
if((i__25948__auto___35459 < len__25947__auto___35458)){
args34821.push((arguments[i__25948__auto___35459]));

var G__35460 = (i__25948__auto___35459 + (1));
i__25948__auto___35459 = G__35460;
continue;
} else {
}
break;
}

var G__34825 = args34821.length;
switch (G__34825) {
case 0:
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args34821.slice((1)),(0),null));
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.body.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.body,null,null);
});

om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.body,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.body.cljs$lang$applyTo = (function (seq34822){
var G__34823 = cljs.core.first.call(null,seq34822);
var seq34822__$1 = cljs.core.next.call(null,seq34822);
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic(G__34823,seq34822__$1);
});

om_tools.dom.body.cljs$lang$maxFixedArity = (1);


om_tools.dom.br = (function om_tools$dom$br(var_args){
var args34826 = [];
var len__25947__auto___35462 = arguments.length;
var i__25948__auto___35463 = (0);
while(true){
if((i__25948__auto___35463 < len__25947__auto___35462)){
args34826.push((arguments[i__25948__auto___35463]));

var G__35464 = (i__25948__auto___35463 + (1));
i__25948__auto___35463 = G__35464;
continue;
} else {
}
break;
}

var G__34830 = args34826.length;
switch (G__34830) {
case 0:
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args34826.slice((1)),(0),null));
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.br.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.br,null,null);
});

om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.br,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.br.cljs$lang$applyTo = (function (seq34827){
var G__34828 = cljs.core.first.call(null,seq34827);
var seq34827__$1 = cljs.core.next.call(null,seq34827);
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic(G__34828,seq34827__$1);
});

om_tools.dom.br.cljs$lang$maxFixedArity = (1);


om_tools.dom.button = (function om_tools$dom$button(var_args){
var args34831 = [];
var len__25947__auto___35466 = arguments.length;
var i__25948__auto___35467 = (0);
while(true){
if((i__25948__auto___35467 < len__25947__auto___35466)){
args34831.push((arguments[i__25948__auto___35467]));

var G__35468 = (i__25948__auto___35467 + (1));
i__25948__auto___35467 = G__35468;
continue;
} else {
}
break;
}

var G__34835 = args34831.length;
switch (G__34835) {
case 0:
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args34831.slice((1)),(0),null));
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.button.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.button,null,null);
});

om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.button,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.button.cljs$lang$applyTo = (function (seq34832){
var G__34833 = cljs.core.first.call(null,seq34832);
var seq34832__$1 = cljs.core.next.call(null,seq34832);
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic(G__34833,seq34832__$1);
});

om_tools.dom.button.cljs$lang$maxFixedArity = (1);


om_tools.dom.canvas = (function om_tools$dom$canvas(var_args){
var args34836 = [];
var len__25947__auto___35470 = arguments.length;
var i__25948__auto___35471 = (0);
while(true){
if((i__25948__auto___35471 < len__25947__auto___35470)){
args34836.push((arguments[i__25948__auto___35471]));

var G__35472 = (i__25948__auto___35471 + (1));
i__25948__auto___35471 = G__35472;
continue;
} else {
}
break;
}

var G__34840 = args34836.length;
switch (G__34840) {
case 0:
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args34836.slice((1)),(0),null));
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.canvas,null,null);
});

om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.canvas,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.canvas.cljs$lang$applyTo = (function (seq34837){
var G__34838 = cljs.core.first.call(null,seq34837);
var seq34837__$1 = cljs.core.next.call(null,seq34837);
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(G__34838,seq34837__$1);
});

om_tools.dom.canvas.cljs$lang$maxFixedArity = (1);


om_tools.dom.caption = (function om_tools$dom$caption(var_args){
var args34841 = [];
var len__25947__auto___35474 = arguments.length;
var i__25948__auto___35475 = (0);
while(true){
if((i__25948__auto___35475 < len__25947__auto___35474)){
args34841.push((arguments[i__25948__auto___35475]));

var G__35476 = (i__25948__auto___35475 + (1));
i__25948__auto___35475 = G__35476;
continue;
} else {
}
break;
}

var G__34845 = args34841.length;
switch (G__34845) {
case 0:
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args34841.slice((1)),(0),null));
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.caption.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.caption,null,null);
});

om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.caption,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.caption.cljs$lang$applyTo = (function (seq34842){
var G__34843 = cljs.core.first.call(null,seq34842);
var seq34842__$1 = cljs.core.next.call(null,seq34842);
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic(G__34843,seq34842__$1);
});

om_tools.dom.caption.cljs$lang$maxFixedArity = (1);


om_tools.dom.cite = (function om_tools$dom$cite(var_args){
var args34846 = [];
var len__25947__auto___35478 = arguments.length;
var i__25948__auto___35479 = (0);
while(true){
if((i__25948__auto___35479 < len__25947__auto___35478)){
args34846.push((arguments[i__25948__auto___35479]));

var G__35480 = (i__25948__auto___35479 + (1));
i__25948__auto___35479 = G__35480;
continue;
} else {
}
break;
}

var G__34850 = args34846.length;
switch (G__34850) {
case 0:
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args34846.slice((1)),(0),null));
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.cite.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.cite,null,null);
});

om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.cite,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.cite.cljs$lang$applyTo = (function (seq34847){
var G__34848 = cljs.core.first.call(null,seq34847);
var seq34847__$1 = cljs.core.next.call(null,seq34847);
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic(G__34848,seq34847__$1);
});

om_tools.dom.cite.cljs$lang$maxFixedArity = (1);


om_tools.dom.code = (function om_tools$dom$code(var_args){
var args34851 = [];
var len__25947__auto___35482 = arguments.length;
var i__25948__auto___35483 = (0);
while(true){
if((i__25948__auto___35483 < len__25947__auto___35482)){
args34851.push((arguments[i__25948__auto___35483]));

var G__35484 = (i__25948__auto___35483 + (1));
i__25948__auto___35483 = G__35484;
continue;
} else {
}
break;
}

var G__34855 = args34851.length;
switch (G__34855) {
case 0:
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args34851.slice((1)),(0),null));
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.code.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.code,null,null);
});

om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.code,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.code.cljs$lang$applyTo = (function (seq34852){
var G__34853 = cljs.core.first.call(null,seq34852);
var seq34852__$1 = cljs.core.next.call(null,seq34852);
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic(G__34853,seq34852__$1);
});

om_tools.dom.code.cljs$lang$maxFixedArity = (1);


om_tools.dom.col = (function om_tools$dom$col(var_args){
var args34856 = [];
var len__25947__auto___35486 = arguments.length;
var i__25948__auto___35487 = (0);
while(true){
if((i__25948__auto___35487 < len__25947__auto___35486)){
args34856.push((arguments[i__25948__auto___35487]));

var G__35488 = (i__25948__auto___35487 + (1));
i__25948__auto___35487 = G__35488;
continue;
} else {
}
break;
}

var G__34860 = args34856.length;
switch (G__34860) {
case 0:
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args34856.slice((1)),(0),null));
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.col.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.col,null,null);
});

om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.col,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.col.cljs$lang$applyTo = (function (seq34857){
var G__34858 = cljs.core.first.call(null,seq34857);
var seq34857__$1 = cljs.core.next.call(null,seq34857);
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic(G__34858,seq34857__$1);
});

om_tools.dom.col.cljs$lang$maxFixedArity = (1);


om_tools.dom.colgroup = (function om_tools$dom$colgroup(var_args){
var args34861 = [];
var len__25947__auto___35490 = arguments.length;
var i__25948__auto___35491 = (0);
while(true){
if((i__25948__auto___35491 < len__25947__auto___35490)){
args34861.push((arguments[i__25948__auto___35491]));

var G__35492 = (i__25948__auto___35491 + (1));
i__25948__auto___35491 = G__35492;
continue;
} else {
}
break;
}

var G__34865 = args34861.length;
switch (G__34865) {
case 0:
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args34861.slice((1)),(0),null));
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.colgroup,null,null);
});

om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.colgroup,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.colgroup.cljs$lang$applyTo = (function (seq34862){
var G__34863 = cljs.core.first.call(null,seq34862);
var seq34862__$1 = cljs.core.next.call(null,seq34862);
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(G__34863,seq34862__$1);
});

om_tools.dom.colgroup.cljs$lang$maxFixedArity = (1);


om_tools.dom.data = (function om_tools$dom$data(var_args){
var args34866 = [];
var len__25947__auto___35494 = arguments.length;
var i__25948__auto___35495 = (0);
while(true){
if((i__25948__auto___35495 < len__25947__auto___35494)){
args34866.push((arguments[i__25948__auto___35495]));

var G__35496 = (i__25948__auto___35495 + (1));
i__25948__auto___35495 = G__35496;
continue;
} else {
}
break;
}

var G__34870 = args34866.length;
switch (G__34870) {
case 0:
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args34866.slice((1)),(0),null));
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.data.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.data,null,null);
});

om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.data,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.data.cljs$lang$applyTo = (function (seq34867){
var G__34868 = cljs.core.first.call(null,seq34867);
var seq34867__$1 = cljs.core.next.call(null,seq34867);
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic(G__34868,seq34867__$1);
});

om_tools.dom.data.cljs$lang$maxFixedArity = (1);


om_tools.dom.datalist = (function om_tools$dom$datalist(var_args){
var args34871 = [];
var len__25947__auto___35498 = arguments.length;
var i__25948__auto___35499 = (0);
while(true){
if((i__25948__auto___35499 < len__25947__auto___35498)){
args34871.push((arguments[i__25948__auto___35499]));

var G__35500 = (i__25948__auto___35499 + (1));
i__25948__auto___35499 = G__35500;
continue;
} else {
}
break;
}

var G__34875 = args34871.length;
switch (G__34875) {
case 0:
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args34871.slice((1)),(0),null));
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.datalist,null,null);
});

om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.datalist,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.datalist.cljs$lang$applyTo = (function (seq34872){
var G__34873 = cljs.core.first.call(null,seq34872);
var seq34872__$1 = cljs.core.next.call(null,seq34872);
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(G__34873,seq34872__$1);
});

om_tools.dom.datalist.cljs$lang$maxFixedArity = (1);


om_tools.dom.dd = (function om_tools$dom$dd(var_args){
var args34876 = [];
var len__25947__auto___35502 = arguments.length;
var i__25948__auto___35503 = (0);
while(true){
if((i__25948__auto___35503 < len__25947__auto___35502)){
args34876.push((arguments[i__25948__auto___35503]));

var G__35504 = (i__25948__auto___35503 + (1));
i__25948__auto___35503 = G__35504;
continue;
} else {
}
break;
}

var G__34880 = args34876.length;
switch (G__34880) {
case 0:
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args34876.slice((1)),(0),null));
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.dd.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dd,null,null);
});

om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.dd,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.dd.cljs$lang$applyTo = (function (seq34877){
var G__34878 = cljs.core.first.call(null,seq34877);
var seq34877__$1 = cljs.core.next.call(null,seq34877);
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic(G__34878,seq34877__$1);
});

om_tools.dom.dd.cljs$lang$maxFixedArity = (1);


om_tools.dom.del = (function om_tools$dom$del(var_args){
var args34881 = [];
var len__25947__auto___35506 = arguments.length;
var i__25948__auto___35507 = (0);
while(true){
if((i__25948__auto___35507 < len__25947__auto___35506)){
args34881.push((arguments[i__25948__auto___35507]));

var G__35508 = (i__25948__auto___35507 + (1));
i__25948__auto___35507 = G__35508;
continue;
} else {
}
break;
}

var G__34885 = args34881.length;
switch (G__34885) {
case 0:
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args34881.slice((1)),(0),null));
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.del.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.del,null,null);
});

om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.del,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.del.cljs$lang$applyTo = (function (seq34882){
var G__34883 = cljs.core.first.call(null,seq34882);
var seq34882__$1 = cljs.core.next.call(null,seq34882);
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic(G__34883,seq34882__$1);
});

om_tools.dom.del.cljs$lang$maxFixedArity = (1);


om_tools.dom.details = (function om_tools$dom$details(var_args){
var args34886 = [];
var len__25947__auto___35510 = arguments.length;
var i__25948__auto___35511 = (0);
while(true){
if((i__25948__auto___35511 < len__25947__auto___35510)){
args34886.push((arguments[i__25948__auto___35511]));

var G__35512 = (i__25948__auto___35511 + (1));
i__25948__auto___35511 = G__35512;
continue;
} else {
}
break;
}

var G__34890 = args34886.length;
switch (G__34890) {
case 0:
return om_tools.dom.details.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args34886.slice((1)),(0),null));
return om_tools.dom.details.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.details.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.details,null,null);
});

om_tools.dom.details.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.details,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.details.cljs$lang$applyTo = (function (seq34887){
var G__34888 = cljs.core.first.call(null,seq34887);
var seq34887__$1 = cljs.core.next.call(null,seq34887);
return om_tools.dom.details.cljs$core$IFn$_invoke$arity$variadic(G__34888,seq34887__$1);
});

om_tools.dom.details.cljs$lang$maxFixedArity = (1);


om_tools.dom.dfn = (function om_tools$dom$dfn(var_args){
var args34891 = [];
var len__25947__auto___35514 = arguments.length;
var i__25948__auto___35515 = (0);
while(true){
if((i__25948__auto___35515 < len__25947__auto___35514)){
args34891.push((arguments[i__25948__auto___35515]));

var G__35516 = (i__25948__auto___35515 + (1));
i__25948__auto___35515 = G__35516;
continue;
} else {
}
break;
}

var G__34895 = args34891.length;
switch (G__34895) {
case 0:
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args34891.slice((1)),(0),null));
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dfn,null,null);
});

om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.dfn,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.dfn.cljs$lang$applyTo = (function (seq34892){
var G__34893 = cljs.core.first.call(null,seq34892);
var seq34892__$1 = cljs.core.next.call(null,seq34892);
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(G__34893,seq34892__$1);
});

om_tools.dom.dfn.cljs$lang$maxFixedArity = (1);


om_tools.dom.dialog = (function om_tools$dom$dialog(var_args){
var args34896 = [];
var len__25947__auto___35518 = arguments.length;
var i__25948__auto___35519 = (0);
while(true){
if((i__25948__auto___35519 < len__25947__auto___35518)){
args34896.push((arguments[i__25948__auto___35519]));

var G__35520 = (i__25948__auto___35519 + (1));
i__25948__auto___35519 = G__35520;
continue;
} else {
}
break;
}

var G__34900 = args34896.length;
switch (G__34900) {
case 0:
return om_tools.dom.dialog.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args34896.slice((1)),(0),null));
return om_tools.dom.dialog.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.dialog.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dialog,null,null);
});

om_tools.dom.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.dialog,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.dialog.cljs$lang$applyTo = (function (seq34897){
var G__34898 = cljs.core.first.call(null,seq34897);
var seq34897__$1 = cljs.core.next.call(null,seq34897);
return om_tools.dom.dialog.cljs$core$IFn$_invoke$arity$variadic(G__34898,seq34897__$1);
});

om_tools.dom.dialog.cljs$lang$maxFixedArity = (1);


om_tools.dom.div = (function om_tools$dom$div(var_args){
var args34901 = [];
var len__25947__auto___35522 = arguments.length;
var i__25948__auto___35523 = (0);
while(true){
if((i__25948__auto___35523 < len__25947__auto___35522)){
args34901.push((arguments[i__25948__auto___35523]));

var G__35524 = (i__25948__auto___35523 + (1));
i__25948__auto___35523 = G__35524;
continue;
} else {
}
break;
}

var G__34905 = args34901.length;
switch (G__34905) {
case 0:
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args34901.slice((1)),(0),null));
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.div.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.div,null,null);
});

om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.div,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.div.cljs$lang$applyTo = (function (seq34902){
var G__34903 = cljs.core.first.call(null,seq34902);
var seq34902__$1 = cljs.core.next.call(null,seq34902);
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic(G__34903,seq34902__$1);
});

om_tools.dom.div.cljs$lang$maxFixedArity = (1);


om_tools.dom.dl = (function om_tools$dom$dl(var_args){
var args34906 = [];
var len__25947__auto___35526 = arguments.length;
var i__25948__auto___35527 = (0);
while(true){
if((i__25948__auto___35527 < len__25947__auto___35526)){
args34906.push((arguments[i__25948__auto___35527]));

var G__35528 = (i__25948__auto___35527 + (1));
i__25948__auto___35527 = G__35528;
continue;
} else {
}
break;
}

var G__34910 = args34906.length;
switch (G__34910) {
case 0:
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args34906.slice((1)),(0),null));
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.dl.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dl,null,null);
});

om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.dl,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.dl.cljs$lang$applyTo = (function (seq34907){
var G__34908 = cljs.core.first.call(null,seq34907);
var seq34907__$1 = cljs.core.next.call(null,seq34907);
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic(G__34908,seq34907__$1);
});

om_tools.dom.dl.cljs$lang$maxFixedArity = (1);


om_tools.dom.dt = (function om_tools$dom$dt(var_args){
var args34911 = [];
var len__25947__auto___35530 = arguments.length;
var i__25948__auto___35531 = (0);
while(true){
if((i__25948__auto___35531 < len__25947__auto___35530)){
args34911.push((arguments[i__25948__auto___35531]));

var G__35532 = (i__25948__auto___35531 + (1));
i__25948__auto___35531 = G__35532;
continue;
} else {
}
break;
}

var G__34915 = args34911.length;
switch (G__34915) {
case 0:
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args34911.slice((1)),(0),null));
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.dt.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dt,null,null);
});

om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.dt,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.dt.cljs$lang$applyTo = (function (seq34912){
var G__34913 = cljs.core.first.call(null,seq34912);
var seq34912__$1 = cljs.core.next.call(null,seq34912);
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic(G__34913,seq34912__$1);
});

om_tools.dom.dt.cljs$lang$maxFixedArity = (1);


om_tools.dom.em = (function om_tools$dom$em(var_args){
var args34921 = [];
var len__25947__auto___35534 = arguments.length;
var i__25948__auto___35535 = (0);
while(true){
if((i__25948__auto___35535 < len__25947__auto___35534)){
args34921.push((arguments[i__25948__auto___35535]));

var G__35536 = (i__25948__auto___35535 + (1));
i__25948__auto___35535 = G__35536;
continue;
} else {
}
break;
}

var G__34925 = args34921.length;
switch (G__34925) {
case 0:
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args34921.slice((1)),(0),null));
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.em.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.em,null,null);
});

om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.em,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.em.cljs$lang$applyTo = (function (seq34922){
var G__34923 = cljs.core.first.call(null,seq34922);
var seq34922__$1 = cljs.core.next.call(null,seq34922);
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic(G__34923,seq34922__$1);
});

om_tools.dom.em.cljs$lang$maxFixedArity = (1);


om_tools.dom.embed = (function om_tools$dom$embed(var_args){
var args34926 = [];
var len__25947__auto___35538 = arguments.length;
var i__25948__auto___35539 = (0);
while(true){
if((i__25948__auto___35539 < len__25947__auto___35538)){
args34926.push((arguments[i__25948__auto___35539]));

var G__35540 = (i__25948__auto___35539 + (1));
i__25948__auto___35539 = G__35540;
continue;
} else {
}
break;
}

var G__34930 = args34926.length;
switch (G__34930) {
case 0:
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args34926.slice((1)),(0),null));
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.embed.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.embed,null,null);
});

om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.embed,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.embed.cljs$lang$applyTo = (function (seq34927){
var G__34928 = cljs.core.first.call(null,seq34927);
var seq34927__$1 = cljs.core.next.call(null,seq34927);
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic(G__34928,seq34927__$1);
});

om_tools.dom.embed.cljs$lang$maxFixedArity = (1);


om_tools.dom.fieldset = (function om_tools$dom$fieldset(var_args){
var args34931 = [];
var len__25947__auto___35542 = arguments.length;
var i__25948__auto___35543 = (0);
while(true){
if((i__25948__auto___35543 < len__25947__auto___35542)){
args34931.push((arguments[i__25948__auto___35543]));

var G__35544 = (i__25948__auto___35543 + (1));
i__25948__auto___35543 = G__35544;
continue;
} else {
}
break;
}

var G__34935 = args34931.length;
switch (G__34935) {
case 0:
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args34931.slice((1)),(0),null));
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.fieldset,null,null);
});

om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.fieldset,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.fieldset.cljs$lang$applyTo = (function (seq34932){
var G__34933 = cljs.core.first.call(null,seq34932);
var seq34932__$1 = cljs.core.next.call(null,seq34932);
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(G__34933,seq34932__$1);
});

om_tools.dom.fieldset.cljs$lang$maxFixedArity = (1);


om_tools.dom.figcaption = (function om_tools$dom$figcaption(var_args){
var args34936 = [];
var len__25947__auto___35546 = arguments.length;
var i__25948__auto___35547 = (0);
while(true){
if((i__25948__auto___35547 < len__25947__auto___35546)){
args34936.push((arguments[i__25948__auto___35547]));

var G__35548 = (i__25948__auto___35547 + (1));
i__25948__auto___35547 = G__35548;
continue;
} else {
}
break;
}

var G__34940 = args34936.length;
switch (G__34940) {
case 0:
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args34936.slice((1)),(0),null));
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.figcaption,null,null);
});

om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.figcaption,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.figcaption.cljs$lang$applyTo = (function (seq34937){
var G__34938 = cljs.core.first.call(null,seq34937);
var seq34937__$1 = cljs.core.next.call(null,seq34937);
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(G__34938,seq34937__$1);
});

om_tools.dom.figcaption.cljs$lang$maxFixedArity = (1);


om_tools.dom.figure = (function om_tools$dom$figure(var_args){
var args34941 = [];
var len__25947__auto___35550 = arguments.length;
var i__25948__auto___35551 = (0);
while(true){
if((i__25948__auto___35551 < len__25947__auto___35550)){
args34941.push((arguments[i__25948__auto___35551]));

var G__35552 = (i__25948__auto___35551 + (1));
i__25948__auto___35551 = G__35552;
continue;
} else {
}
break;
}

var G__34945 = args34941.length;
switch (G__34945) {
case 0:
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args34941.slice((1)),(0),null));
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.figure.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.figure,null,null);
});

om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.figure,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.figure.cljs$lang$applyTo = (function (seq34942){
var G__34943 = cljs.core.first.call(null,seq34942);
var seq34942__$1 = cljs.core.next.call(null,seq34942);
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic(G__34943,seq34942__$1);
});

om_tools.dom.figure.cljs$lang$maxFixedArity = (1);


om_tools.dom.footer = (function om_tools$dom$footer(var_args){
var args34946 = [];
var len__25947__auto___35554 = arguments.length;
var i__25948__auto___35555 = (0);
while(true){
if((i__25948__auto___35555 < len__25947__auto___35554)){
args34946.push((arguments[i__25948__auto___35555]));

var G__35556 = (i__25948__auto___35555 + (1));
i__25948__auto___35555 = G__35556;
continue;
} else {
}
break;
}

var G__34950 = args34946.length;
switch (G__34950) {
case 0:
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args34946.slice((1)),(0),null));
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.footer.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.footer,null,null);
});

om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.footer,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.footer.cljs$lang$applyTo = (function (seq34947){
var G__34948 = cljs.core.first.call(null,seq34947);
var seq34947__$1 = cljs.core.next.call(null,seq34947);
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic(G__34948,seq34947__$1);
});

om_tools.dom.footer.cljs$lang$maxFixedArity = (1);


om_tools.dom.form = (function om_tools$dom$form(var_args){
var args34951 = [];
var len__25947__auto___35558 = arguments.length;
var i__25948__auto___35559 = (0);
while(true){
if((i__25948__auto___35559 < len__25947__auto___35558)){
args34951.push((arguments[i__25948__auto___35559]));

var G__35560 = (i__25948__auto___35559 + (1));
i__25948__auto___35559 = G__35560;
continue;
} else {
}
break;
}

var G__34955 = args34951.length;
switch (G__34955) {
case 0:
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args34951.slice((1)),(0),null));
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.form.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.form,null,null);
});

om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.form,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.form.cljs$lang$applyTo = (function (seq34952){
var G__34953 = cljs.core.first.call(null,seq34952);
var seq34952__$1 = cljs.core.next.call(null,seq34952);
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic(G__34953,seq34952__$1);
});

om_tools.dom.form.cljs$lang$maxFixedArity = (1);


om_tools.dom.h1 = (function om_tools$dom$h1(var_args){
var args34956 = [];
var len__25947__auto___35562 = arguments.length;
var i__25948__auto___35563 = (0);
while(true){
if((i__25948__auto___35563 < len__25947__auto___35562)){
args34956.push((arguments[i__25948__auto___35563]));

var G__35564 = (i__25948__auto___35563 + (1));
i__25948__auto___35563 = G__35564;
continue;
} else {
}
break;
}

var G__34960 = args34956.length;
switch (G__34960) {
case 0:
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args34956.slice((1)),(0),null));
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.h1.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h1,null,null);
});

om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.h1,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.h1.cljs$lang$applyTo = (function (seq34957){
var G__34958 = cljs.core.first.call(null,seq34957);
var seq34957__$1 = cljs.core.next.call(null,seq34957);
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic(G__34958,seq34957__$1);
});

om_tools.dom.h1.cljs$lang$maxFixedArity = (1);


om_tools.dom.h2 = (function om_tools$dom$h2(var_args){
var args34961 = [];
var len__25947__auto___35566 = arguments.length;
var i__25948__auto___35567 = (0);
while(true){
if((i__25948__auto___35567 < len__25947__auto___35566)){
args34961.push((arguments[i__25948__auto___35567]));

var G__35568 = (i__25948__auto___35567 + (1));
i__25948__auto___35567 = G__35568;
continue;
} else {
}
break;
}

var G__34965 = args34961.length;
switch (G__34965) {
case 0:
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args34961.slice((1)),(0),null));
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.h2.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h2,null,null);
});

om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.h2,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.h2.cljs$lang$applyTo = (function (seq34962){
var G__34963 = cljs.core.first.call(null,seq34962);
var seq34962__$1 = cljs.core.next.call(null,seq34962);
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic(G__34963,seq34962__$1);
});

om_tools.dom.h2.cljs$lang$maxFixedArity = (1);


om_tools.dom.h3 = (function om_tools$dom$h3(var_args){
var args34966 = [];
var len__25947__auto___35570 = arguments.length;
var i__25948__auto___35571 = (0);
while(true){
if((i__25948__auto___35571 < len__25947__auto___35570)){
args34966.push((arguments[i__25948__auto___35571]));

var G__35572 = (i__25948__auto___35571 + (1));
i__25948__auto___35571 = G__35572;
continue;
} else {
}
break;
}

var G__34970 = args34966.length;
switch (G__34970) {
case 0:
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args34966.slice((1)),(0),null));
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.h3.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h3,null,null);
});

om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.h3,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.h3.cljs$lang$applyTo = (function (seq34967){
var G__34968 = cljs.core.first.call(null,seq34967);
var seq34967__$1 = cljs.core.next.call(null,seq34967);
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic(G__34968,seq34967__$1);
});

om_tools.dom.h3.cljs$lang$maxFixedArity = (1);


om_tools.dom.h4 = (function om_tools$dom$h4(var_args){
var args34971 = [];
var len__25947__auto___35574 = arguments.length;
var i__25948__auto___35575 = (0);
while(true){
if((i__25948__auto___35575 < len__25947__auto___35574)){
args34971.push((arguments[i__25948__auto___35575]));

var G__35576 = (i__25948__auto___35575 + (1));
i__25948__auto___35575 = G__35576;
continue;
} else {
}
break;
}

var G__34975 = args34971.length;
switch (G__34975) {
case 0:
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args34971.slice((1)),(0),null));
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.h4.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h4,null,null);
});

om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.h4,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.h4.cljs$lang$applyTo = (function (seq34972){
var G__34973 = cljs.core.first.call(null,seq34972);
var seq34972__$1 = cljs.core.next.call(null,seq34972);
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic(G__34973,seq34972__$1);
});

om_tools.dom.h4.cljs$lang$maxFixedArity = (1);


om_tools.dom.h5 = (function om_tools$dom$h5(var_args){
var args34976 = [];
var len__25947__auto___35578 = arguments.length;
var i__25948__auto___35579 = (0);
while(true){
if((i__25948__auto___35579 < len__25947__auto___35578)){
args34976.push((arguments[i__25948__auto___35579]));

var G__35580 = (i__25948__auto___35579 + (1));
i__25948__auto___35579 = G__35580;
continue;
} else {
}
break;
}

var G__34980 = args34976.length;
switch (G__34980) {
case 0:
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args34976.slice((1)),(0),null));
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.h5.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h5,null,null);
});

om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.h5,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.h5.cljs$lang$applyTo = (function (seq34977){
var G__34978 = cljs.core.first.call(null,seq34977);
var seq34977__$1 = cljs.core.next.call(null,seq34977);
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic(G__34978,seq34977__$1);
});

om_tools.dom.h5.cljs$lang$maxFixedArity = (1);


om_tools.dom.h6 = (function om_tools$dom$h6(var_args){
var args34981 = [];
var len__25947__auto___35582 = arguments.length;
var i__25948__auto___35583 = (0);
while(true){
if((i__25948__auto___35583 < len__25947__auto___35582)){
args34981.push((arguments[i__25948__auto___35583]));

var G__35584 = (i__25948__auto___35583 + (1));
i__25948__auto___35583 = G__35584;
continue;
} else {
}
break;
}

var G__34985 = args34981.length;
switch (G__34985) {
case 0:
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args34981.slice((1)),(0),null));
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.h6.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h6,null,null);
});

om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.h6,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.h6.cljs$lang$applyTo = (function (seq34982){
var G__34983 = cljs.core.first.call(null,seq34982);
var seq34982__$1 = cljs.core.next.call(null,seq34982);
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic(G__34983,seq34982__$1);
});

om_tools.dom.h6.cljs$lang$maxFixedArity = (1);


om_tools.dom.head = (function om_tools$dom$head(var_args){
var args34986 = [];
var len__25947__auto___35586 = arguments.length;
var i__25948__auto___35587 = (0);
while(true){
if((i__25948__auto___35587 < len__25947__auto___35586)){
args34986.push((arguments[i__25948__auto___35587]));

var G__35588 = (i__25948__auto___35587 + (1));
i__25948__auto___35587 = G__35588;
continue;
} else {
}
break;
}

var G__34990 = args34986.length;
switch (G__34990) {
case 0:
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args34986.slice((1)),(0),null));
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.head.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.head,null,null);
});

om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.head,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.head.cljs$lang$applyTo = (function (seq34987){
var G__34988 = cljs.core.first.call(null,seq34987);
var seq34987__$1 = cljs.core.next.call(null,seq34987);
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic(G__34988,seq34987__$1);
});

om_tools.dom.head.cljs$lang$maxFixedArity = (1);


om_tools.dom.header = (function om_tools$dom$header(var_args){
var args34991 = [];
var len__25947__auto___35590 = arguments.length;
var i__25948__auto___35591 = (0);
while(true){
if((i__25948__auto___35591 < len__25947__auto___35590)){
args34991.push((arguments[i__25948__auto___35591]));

var G__35592 = (i__25948__auto___35591 + (1));
i__25948__auto___35591 = G__35592;
continue;
} else {
}
break;
}

var G__34995 = args34991.length;
switch (G__34995) {
case 0:
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args34991.slice((1)),(0),null));
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.header.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.header,null,null);
});

om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.header,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.header.cljs$lang$applyTo = (function (seq34992){
var G__34993 = cljs.core.first.call(null,seq34992);
var seq34992__$1 = cljs.core.next.call(null,seq34992);
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic(G__34993,seq34992__$1);
});

om_tools.dom.header.cljs$lang$maxFixedArity = (1);


om_tools.dom.hr = (function om_tools$dom$hr(var_args){
var args34996 = [];
var len__25947__auto___35594 = arguments.length;
var i__25948__auto___35595 = (0);
while(true){
if((i__25948__auto___35595 < len__25947__auto___35594)){
args34996.push((arguments[i__25948__auto___35595]));

var G__35596 = (i__25948__auto___35595 + (1));
i__25948__auto___35595 = G__35596;
continue;
} else {
}
break;
}

var G__35000 = args34996.length;
switch (G__35000) {
case 0:
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args34996.slice((1)),(0),null));
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.hr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.hr,null,null);
});

om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.hr,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.hr.cljs$lang$applyTo = (function (seq34997){
var G__34998 = cljs.core.first.call(null,seq34997);
var seq34997__$1 = cljs.core.next.call(null,seq34997);
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic(G__34998,seq34997__$1);
});

om_tools.dom.hr.cljs$lang$maxFixedArity = (1);


om_tools.dom.html = (function om_tools$dom$html(var_args){
var args35001 = [];
var len__25947__auto___35598 = arguments.length;
var i__25948__auto___35599 = (0);
while(true){
if((i__25948__auto___35599 < len__25947__auto___35598)){
args35001.push((arguments[i__25948__auto___35599]));

var G__35600 = (i__25948__auto___35599 + (1));
i__25948__auto___35599 = G__35600;
continue;
} else {
}
break;
}

var G__35005 = args35001.length;
switch (G__35005) {
case 0:
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35001.slice((1)),(0),null));
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.html.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.html,null,null);
});

om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.html,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.html.cljs$lang$applyTo = (function (seq35002){
var G__35003 = cljs.core.first.call(null,seq35002);
var seq35002__$1 = cljs.core.next.call(null,seq35002);
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic(G__35003,seq35002__$1);
});

om_tools.dom.html.cljs$lang$maxFixedArity = (1);


om_tools.dom.i = (function om_tools$dom$i(var_args){
var args35006 = [];
var len__25947__auto___35602 = arguments.length;
var i__25948__auto___35603 = (0);
while(true){
if((i__25948__auto___35603 < len__25947__auto___35602)){
args35006.push((arguments[i__25948__auto___35603]));

var G__35604 = (i__25948__auto___35603 + (1));
i__25948__auto___35603 = G__35604;
continue;
} else {
}
break;
}

var G__35010 = args35006.length;
switch (G__35010) {
case 0:
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35006.slice((1)),(0),null));
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.i.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.i,null,null);
});

om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.i,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.i.cljs$lang$applyTo = (function (seq35007){
var G__35008 = cljs.core.first.call(null,seq35007);
var seq35007__$1 = cljs.core.next.call(null,seq35007);
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic(G__35008,seq35007__$1);
});

om_tools.dom.i.cljs$lang$maxFixedArity = (1);


om_tools.dom.iframe = (function om_tools$dom$iframe(var_args){
var args35011 = [];
var len__25947__auto___35606 = arguments.length;
var i__25948__auto___35607 = (0);
while(true){
if((i__25948__auto___35607 < len__25947__auto___35606)){
args35011.push((arguments[i__25948__auto___35607]));

var G__35608 = (i__25948__auto___35607 + (1));
i__25948__auto___35607 = G__35608;
continue;
} else {
}
break;
}

var G__35015 = args35011.length;
switch (G__35015) {
case 0:
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35011.slice((1)),(0),null));
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.iframe,null,null);
});

om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.iframe,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.iframe.cljs$lang$applyTo = (function (seq35012){
var G__35013 = cljs.core.first.call(null,seq35012);
var seq35012__$1 = cljs.core.next.call(null,seq35012);
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(G__35013,seq35012__$1);
});

om_tools.dom.iframe.cljs$lang$maxFixedArity = (1);


om_tools.dom.img = (function om_tools$dom$img(var_args){
var args35016 = [];
var len__25947__auto___35610 = arguments.length;
var i__25948__auto___35611 = (0);
while(true){
if((i__25948__auto___35611 < len__25947__auto___35610)){
args35016.push((arguments[i__25948__auto___35611]));

var G__35612 = (i__25948__auto___35611 + (1));
i__25948__auto___35611 = G__35612;
continue;
} else {
}
break;
}

var G__35020 = args35016.length;
switch (G__35020) {
case 0:
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35016.slice((1)),(0),null));
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.img.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.img,null,null);
});

om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.img,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.img.cljs$lang$applyTo = (function (seq35017){
var G__35018 = cljs.core.first.call(null,seq35017);
var seq35017__$1 = cljs.core.next.call(null,seq35017);
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic(G__35018,seq35017__$1);
});

om_tools.dom.img.cljs$lang$maxFixedArity = (1);


om_tools.dom.ins = (function om_tools$dom$ins(var_args){
var args35021 = [];
var len__25947__auto___35614 = arguments.length;
var i__25948__auto___35615 = (0);
while(true){
if((i__25948__auto___35615 < len__25947__auto___35614)){
args35021.push((arguments[i__25948__auto___35615]));

var G__35616 = (i__25948__auto___35615 + (1));
i__25948__auto___35615 = G__35616;
continue;
} else {
}
break;
}

var G__35025 = args35021.length;
switch (G__35025) {
case 0:
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35021.slice((1)),(0),null));
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.ins.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ins,null,null);
});

om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.ins,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.ins.cljs$lang$applyTo = (function (seq35022){
var G__35023 = cljs.core.first.call(null,seq35022);
var seq35022__$1 = cljs.core.next.call(null,seq35022);
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic(G__35023,seq35022__$1);
});

om_tools.dom.ins.cljs$lang$maxFixedArity = (1);


om_tools.dom.kbd = (function om_tools$dom$kbd(var_args){
var args35026 = [];
var len__25947__auto___35618 = arguments.length;
var i__25948__auto___35619 = (0);
while(true){
if((i__25948__auto___35619 < len__25947__auto___35618)){
args35026.push((arguments[i__25948__auto___35619]));

var G__35620 = (i__25948__auto___35619 + (1));
i__25948__auto___35619 = G__35620;
continue;
} else {
}
break;
}

var G__35030 = args35026.length;
switch (G__35030) {
case 0:
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35026.slice((1)),(0),null));
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.kbd,null,null);
});

om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.kbd,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.kbd.cljs$lang$applyTo = (function (seq35027){
var G__35028 = cljs.core.first.call(null,seq35027);
var seq35027__$1 = cljs.core.next.call(null,seq35027);
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(G__35028,seq35027__$1);
});

om_tools.dom.kbd.cljs$lang$maxFixedArity = (1);


om_tools.dom.keygen = (function om_tools$dom$keygen(var_args){
var args35031 = [];
var len__25947__auto___35622 = arguments.length;
var i__25948__auto___35623 = (0);
while(true){
if((i__25948__auto___35623 < len__25947__auto___35622)){
args35031.push((arguments[i__25948__auto___35623]));

var G__35624 = (i__25948__auto___35623 + (1));
i__25948__auto___35623 = G__35624;
continue;
} else {
}
break;
}

var G__35035 = args35031.length;
switch (G__35035) {
case 0:
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35031.slice((1)),(0),null));
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.keygen,null,null);
});

om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.keygen,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.keygen.cljs$lang$applyTo = (function (seq35032){
var G__35033 = cljs.core.first.call(null,seq35032);
var seq35032__$1 = cljs.core.next.call(null,seq35032);
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(G__35033,seq35032__$1);
});

om_tools.dom.keygen.cljs$lang$maxFixedArity = (1);


om_tools.dom.label = (function om_tools$dom$label(var_args){
var args35036 = [];
var len__25947__auto___35626 = arguments.length;
var i__25948__auto___35627 = (0);
while(true){
if((i__25948__auto___35627 < len__25947__auto___35626)){
args35036.push((arguments[i__25948__auto___35627]));

var G__35628 = (i__25948__auto___35627 + (1));
i__25948__auto___35627 = G__35628;
continue;
} else {
}
break;
}

var G__35040 = args35036.length;
switch (G__35040) {
case 0:
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35036.slice((1)),(0),null));
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.label.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.label,null,null);
});

om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.label,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.label.cljs$lang$applyTo = (function (seq35037){
var G__35038 = cljs.core.first.call(null,seq35037);
var seq35037__$1 = cljs.core.next.call(null,seq35037);
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic(G__35038,seq35037__$1);
});

om_tools.dom.label.cljs$lang$maxFixedArity = (1);


om_tools.dom.legend = (function om_tools$dom$legend(var_args){
var args35041 = [];
var len__25947__auto___35630 = arguments.length;
var i__25948__auto___35631 = (0);
while(true){
if((i__25948__auto___35631 < len__25947__auto___35630)){
args35041.push((arguments[i__25948__auto___35631]));

var G__35632 = (i__25948__auto___35631 + (1));
i__25948__auto___35631 = G__35632;
continue;
} else {
}
break;
}

var G__35045 = args35041.length;
switch (G__35045) {
case 0:
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35041.slice((1)),(0),null));
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.legend.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.legend,null,null);
});

om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.legend,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.legend.cljs$lang$applyTo = (function (seq35042){
var G__35043 = cljs.core.first.call(null,seq35042);
var seq35042__$1 = cljs.core.next.call(null,seq35042);
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic(G__35043,seq35042__$1);
});

om_tools.dom.legend.cljs$lang$maxFixedArity = (1);


om_tools.dom.li = (function om_tools$dom$li(var_args){
var args35046 = [];
var len__25947__auto___35634 = arguments.length;
var i__25948__auto___35635 = (0);
while(true){
if((i__25948__auto___35635 < len__25947__auto___35634)){
args35046.push((arguments[i__25948__auto___35635]));

var G__35636 = (i__25948__auto___35635 + (1));
i__25948__auto___35635 = G__35636;
continue;
} else {
}
break;
}

var G__35050 = args35046.length;
switch (G__35050) {
case 0:
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35046.slice((1)),(0),null));
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.li.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.li,null,null);
});

om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.li,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.li.cljs$lang$applyTo = (function (seq35047){
var G__35048 = cljs.core.first.call(null,seq35047);
var seq35047__$1 = cljs.core.next.call(null,seq35047);
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic(G__35048,seq35047__$1);
});

om_tools.dom.li.cljs$lang$maxFixedArity = (1);


om_tools.dom.link = (function om_tools$dom$link(var_args){
var args35051 = [];
var len__25947__auto___35638 = arguments.length;
var i__25948__auto___35639 = (0);
while(true){
if((i__25948__auto___35639 < len__25947__auto___35638)){
args35051.push((arguments[i__25948__auto___35639]));

var G__35640 = (i__25948__auto___35639 + (1));
i__25948__auto___35639 = G__35640;
continue;
} else {
}
break;
}

var G__35055 = args35051.length;
switch (G__35055) {
case 0:
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35051.slice((1)),(0),null));
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.link.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.link,null,null);
});

om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.link,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.link.cljs$lang$applyTo = (function (seq35052){
var G__35053 = cljs.core.first.call(null,seq35052);
var seq35052__$1 = cljs.core.next.call(null,seq35052);
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic(G__35053,seq35052__$1);
});

om_tools.dom.link.cljs$lang$maxFixedArity = (1);


om_tools.dom.main = (function om_tools$dom$main(var_args){
var args35056 = [];
var len__25947__auto___35642 = arguments.length;
var i__25948__auto___35643 = (0);
while(true){
if((i__25948__auto___35643 < len__25947__auto___35642)){
args35056.push((arguments[i__25948__auto___35643]));

var G__35644 = (i__25948__auto___35643 + (1));
i__25948__auto___35643 = G__35644;
continue;
} else {
}
break;
}

var G__35060 = args35056.length;
switch (G__35060) {
case 0:
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35056.slice((1)),(0),null));
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.main.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.main,null,null);
});

om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.main,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.main.cljs$lang$applyTo = (function (seq35057){
var G__35058 = cljs.core.first.call(null,seq35057);
var seq35057__$1 = cljs.core.next.call(null,seq35057);
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic(G__35058,seq35057__$1);
});

om_tools.dom.main.cljs$lang$maxFixedArity = (1);


om_tools.dom.map = (function om_tools$dom$map(var_args){
var args35061 = [];
var len__25947__auto___35646 = arguments.length;
var i__25948__auto___35647 = (0);
while(true){
if((i__25948__auto___35647 < len__25947__auto___35646)){
args35061.push((arguments[i__25948__auto___35647]));

var G__35648 = (i__25948__auto___35647 + (1));
i__25948__auto___35647 = G__35648;
continue;
} else {
}
break;
}

var G__35065 = args35061.length;
switch (G__35065) {
case 0:
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35061.slice((1)),(0),null));
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.map.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.map,null,null);
});

om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.map,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.map.cljs$lang$applyTo = (function (seq35062){
var G__35063 = cljs.core.first.call(null,seq35062);
var seq35062__$1 = cljs.core.next.call(null,seq35062);
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic(G__35063,seq35062__$1);
});

om_tools.dom.map.cljs$lang$maxFixedArity = (1);


om_tools.dom.mark = (function om_tools$dom$mark(var_args){
var args35066 = [];
var len__25947__auto___35650 = arguments.length;
var i__25948__auto___35651 = (0);
while(true){
if((i__25948__auto___35651 < len__25947__auto___35650)){
args35066.push((arguments[i__25948__auto___35651]));

var G__35652 = (i__25948__auto___35651 + (1));
i__25948__auto___35651 = G__35652;
continue;
} else {
}
break;
}

var G__35070 = args35066.length;
switch (G__35070) {
case 0:
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35066.slice((1)),(0),null));
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.mark.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.mark,null,null);
});

om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.mark,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.mark.cljs$lang$applyTo = (function (seq35067){
var G__35068 = cljs.core.first.call(null,seq35067);
var seq35067__$1 = cljs.core.next.call(null,seq35067);
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic(G__35068,seq35067__$1);
});

om_tools.dom.mark.cljs$lang$maxFixedArity = (1);


om_tools.dom.menu = (function om_tools$dom$menu(var_args){
var args35071 = [];
var len__25947__auto___35654 = arguments.length;
var i__25948__auto___35655 = (0);
while(true){
if((i__25948__auto___35655 < len__25947__auto___35654)){
args35071.push((arguments[i__25948__auto___35655]));

var G__35656 = (i__25948__auto___35655 + (1));
i__25948__auto___35655 = G__35656;
continue;
} else {
}
break;
}

var G__35075 = args35071.length;
switch (G__35075) {
case 0:
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35071.slice((1)),(0),null));
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.menu.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.menu,null,null);
});

om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.menu,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.menu.cljs$lang$applyTo = (function (seq35072){
var G__35073 = cljs.core.first.call(null,seq35072);
var seq35072__$1 = cljs.core.next.call(null,seq35072);
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic(G__35073,seq35072__$1);
});

om_tools.dom.menu.cljs$lang$maxFixedArity = (1);


om_tools.dom.menuitem = (function om_tools$dom$menuitem(var_args){
var args35076 = [];
var len__25947__auto___35658 = arguments.length;
var i__25948__auto___35659 = (0);
while(true){
if((i__25948__auto___35659 < len__25947__auto___35658)){
args35076.push((arguments[i__25948__auto___35659]));

var G__35660 = (i__25948__auto___35659 + (1));
i__25948__auto___35659 = G__35660;
continue;
} else {
}
break;
}

var G__35080 = args35076.length;
switch (G__35080) {
case 0:
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35076.slice((1)),(0),null));
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.menuitem,null,null);
});

om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.menuitem,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.menuitem.cljs$lang$applyTo = (function (seq35077){
var G__35078 = cljs.core.first.call(null,seq35077);
var seq35077__$1 = cljs.core.next.call(null,seq35077);
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(G__35078,seq35077__$1);
});

om_tools.dom.menuitem.cljs$lang$maxFixedArity = (1);


om_tools.dom.meta = (function om_tools$dom$meta(var_args){
var args35081 = [];
var len__25947__auto___35662 = arguments.length;
var i__25948__auto___35663 = (0);
while(true){
if((i__25948__auto___35663 < len__25947__auto___35662)){
args35081.push((arguments[i__25948__auto___35663]));

var G__35664 = (i__25948__auto___35663 + (1));
i__25948__auto___35663 = G__35664;
continue;
} else {
}
break;
}

var G__35085 = args35081.length;
switch (G__35085) {
case 0:
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35081.slice((1)),(0),null));
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.meta.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.meta,null,null);
});

om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.meta,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.meta.cljs$lang$applyTo = (function (seq35082){
var G__35083 = cljs.core.first.call(null,seq35082);
var seq35082__$1 = cljs.core.next.call(null,seq35082);
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic(G__35083,seq35082__$1);
});

om_tools.dom.meta.cljs$lang$maxFixedArity = (1);


om_tools.dom.meter = (function om_tools$dom$meter(var_args){
var args35086 = [];
var len__25947__auto___35666 = arguments.length;
var i__25948__auto___35667 = (0);
while(true){
if((i__25948__auto___35667 < len__25947__auto___35666)){
args35086.push((arguments[i__25948__auto___35667]));

var G__35668 = (i__25948__auto___35667 + (1));
i__25948__auto___35667 = G__35668;
continue;
} else {
}
break;
}

var G__35090 = args35086.length;
switch (G__35090) {
case 0:
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35086.slice((1)),(0),null));
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.meter.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.meter,null,null);
});

om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.meter,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.meter.cljs$lang$applyTo = (function (seq35087){
var G__35088 = cljs.core.first.call(null,seq35087);
var seq35087__$1 = cljs.core.next.call(null,seq35087);
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic(G__35088,seq35087__$1);
});

om_tools.dom.meter.cljs$lang$maxFixedArity = (1);


om_tools.dom.nav = (function om_tools$dom$nav(var_args){
var args35091 = [];
var len__25947__auto___35670 = arguments.length;
var i__25948__auto___35671 = (0);
while(true){
if((i__25948__auto___35671 < len__25947__auto___35670)){
args35091.push((arguments[i__25948__auto___35671]));

var G__35672 = (i__25948__auto___35671 + (1));
i__25948__auto___35671 = G__35672;
continue;
} else {
}
break;
}

var G__35095 = args35091.length;
switch (G__35095) {
case 0:
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35091.slice((1)),(0),null));
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.nav.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.nav,null,null);
});

om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.nav,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.nav.cljs$lang$applyTo = (function (seq35092){
var G__35093 = cljs.core.first.call(null,seq35092);
var seq35092__$1 = cljs.core.next.call(null,seq35092);
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic(G__35093,seq35092__$1);
});

om_tools.dom.nav.cljs$lang$maxFixedArity = (1);


om_tools.dom.noscript = (function om_tools$dom$noscript(var_args){
var args35096 = [];
var len__25947__auto___35674 = arguments.length;
var i__25948__auto___35675 = (0);
while(true){
if((i__25948__auto___35675 < len__25947__auto___35674)){
args35096.push((arguments[i__25948__auto___35675]));

var G__35676 = (i__25948__auto___35675 + (1));
i__25948__auto___35675 = G__35676;
continue;
} else {
}
break;
}

var G__35100 = args35096.length;
switch (G__35100) {
case 0:
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35096.slice((1)),(0),null));
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.noscript,null,null);
});

om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.noscript,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.noscript.cljs$lang$applyTo = (function (seq35097){
var G__35098 = cljs.core.first.call(null,seq35097);
var seq35097__$1 = cljs.core.next.call(null,seq35097);
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(G__35098,seq35097__$1);
});

om_tools.dom.noscript.cljs$lang$maxFixedArity = (1);


om_tools.dom.object = (function om_tools$dom$object(var_args){
var args35101 = [];
var len__25947__auto___35678 = arguments.length;
var i__25948__auto___35679 = (0);
while(true){
if((i__25948__auto___35679 < len__25947__auto___35678)){
args35101.push((arguments[i__25948__auto___35679]));

var G__35680 = (i__25948__auto___35679 + (1));
i__25948__auto___35679 = G__35680;
continue;
} else {
}
break;
}

var G__35105 = args35101.length;
switch (G__35105) {
case 0:
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35101.slice((1)),(0),null));
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.object.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.object,null,null);
});

om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.object,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.object.cljs$lang$applyTo = (function (seq35102){
var G__35103 = cljs.core.first.call(null,seq35102);
var seq35102__$1 = cljs.core.next.call(null,seq35102);
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic(G__35103,seq35102__$1);
});

om_tools.dom.object.cljs$lang$maxFixedArity = (1);


om_tools.dom.ol = (function om_tools$dom$ol(var_args){
var args35106 = [];
var len__25947__auto___35682 = arguments.length;
var i__25948__auto___35683 = (0);
while(true){
if((i__25948__auto___35683 < len__25947__auto___35682)){
args35106.push((arguments[i__25948__auto___35683]));

var G__35684 = (i__25948__auto___35683 + (1));
i__25948__auto___35683 = G__35684;
continue;
} else {
}
break;
}

var G__35110 = args35106.length;
switch (G__35110) {
case 0:
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35106.slice((1)),(0),null));
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.ol.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ol,null,null);
});

om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.ol,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.ol.cljs$lang$applyTo = (function (seq35107){
var G__35108 = cljs.core.first.call(null,seq35107);
var seq35107__$1 = cljs.core.next.call(null,seq35107);
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic(G__35108,seq35107__$1);
});

om_tools.dom.ol.cljs$lang$maxFixedArity = (1);


om_tools.dom.optgroup = (function om_tools$dom$optgroup(var_args){
var args35111 = [];
var len__25947__auto___35686 = arguments.length;
var i__25948__auto___35687 = (0);
while(true){
if((i__25948__auto___35687 < len__25947__auto___35686)){
args35111.push((arguments[i__25948__auto___35687]));

var G__35688 = (i__25948__auto___35687 + (1));
i__25948__auto___35687 = G__35688;
continue;
} else {
}
break;
}

var G__35115 = args35111.length;
switch (G__35115) {
case 0:
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35111.slice((1)),(0),null));
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.optgroup,null,null);
});

om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.optgroup,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.optgroup.cljs$lang$applyTo = (function (seq35112){
var G__35113 = cljs.core.first.call(null,seq35112);
var seq35112__$1 = cljs.core.next.call(null,seq35112);
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(G__35113,seq35112__$1);
});

om_tools.dom.optgroup.cljs$lang$maxFixedArity = (1);


om_tools.dom.output = (function om_tools$dom$output(var_args){
var args35116 = [];
var len__25947__auto___35690 = arguments.length;
var i__25948__auto___35691 = (0);
while(true){
if((i__25948__auto___35691 < len__25947__auto___35690)){
args35116.push((arguments[i__25948__auto___35691]));

var G__35692 = (i__25948__auto___35691 + (1));
i__25948__auto___35691 = G__35692;
continue;
} else {
}
break;
}

var G__35120 = args35116.length;
switch (G__35120) {
case 0:
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35116.slice((1)),(0),null));
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.output.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.output,null,null);
});

om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.output,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.output.cljs$lang$applyTo = (function (seq35117){
var G__35118 = cljs.core.first.call(null,seq35117);
var seq35117__$1 = cljs.core.next.call(null,seq35117);
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic(G__35118,seq35117__$1);
});

om_tools.dom.output.cljs$lang$maxFixedArity = (1);


om_tools.dom.p = (function om_tools$dom$p(var_args){
var args35121 = [];
var len__25947__auto___35694 = arguments.length;
var i__25948__auto___35695 = (0);
while(true){
if((i__25948__auto___35695 < len__25947__auto___35694)){
args35121.push((arguments[i__25948__auto___35695]));

var G__35696 = (i__25948__auto___35695 + (1));
i__25948__auto___35695 = G__35696;
continue;
} else {
}
break;
}

var G__35125 = args35121.length;
switch (G__35125) {
case 0:
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35121.slice((1)),(0),null));
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.p.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.p,null,null);
});

om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.p,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.p.cljs$lang$applyTo = (function (seq35122){
var G__35123 = cljs.core.first.call(null,seq35122);
var seq35122__$1 = cljs.core.next.call(null,seq35122);
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic(G__35123,seq35122__$1);
});

om_tools.dom.p.cljs$lang$maxFixedArity = (1);


om_tools.dom.param = (function om_tools$dom$param(var_args){
var args35126 = [];
var len__25947__auto___35698 = arguments.length;
var i__25948__auto___35699 = (0);
while(true){
if((i__25948__auto___35699 < len__25947__auto___35698)){
args35126.push((arguments[i__25948__auto___35699]));

var G__35700 = (i__25948__auto___35699 + (1));
i__25948__auto___35699 = G__35700;
continue;
} else {
}
break;
}

var G__35130 = args35126.length;
switch (G__35130) {
case 0:
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35126.slice((1)),(0),null));
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.param.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.param,null,null);
});

om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.param,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.param.cljs$lang$applyTo = (function (seq35127){
var G__35128 = cljs.core.first.call(null,seq35127);
var seq35127__$1 = cljs.core.next.call(null,seq35127);
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic(G__35128,seq35127__$1);
});

om_tools.dom.param.cljs$lang$maxFixedArity = (1);


om_tools.dom.picture = (function om_tools$dom$picture(var_args){
var args35131 = [];
var len__25947__auto___35702 = arguments.length;
var i__25948__auto___35703 = (0);
while(true){
if((i__25948__auto___35703 < len__25947__auto___35702)){
args35131.push((arguments[i__25948__auto___35703]));

var G__35704 = (i__25948__auto___35703 + (1));
i__25948__auto___35703 = G__35704;
continue;
} else {
}
break;
}

var G__35135 = args35131.length;
switch (G__35135) {
case 0:
return om_tools.dom.picture.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35131.slice((1)),(0),null));
return om_tools.dom.picture.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.picture.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.picture,null,null);
});

om_tools.dom.picture.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.picture,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.picture.cljs$lang$applyTo = (function (seq35132){
var G__35133 = cljs.core.first.call(null,seq35132);
var seq35132__$1 = cljs.core.next.call(null,seq35132);
return om_tools.dom.picture.cljs$core$IFn$_invoke$arity$variadic(G__35133,seq35132__$1);
});

om_tools.dom.picture.cljs$lang$maxFixedArity = (1);


om_tools.dom.pre = (function om_tools$dom$pre(var_args){
var args35136 = [];
var len__25947__auto___35706 = arguments.length;
var i__25948__auto___35707 = (0);
while(true){
if((i__25948__auto___35707 < len__25947__auto___35706)){
args35136.push((arguments[i__25948__auto___35707]));

var G__35708 = (i__25948__auto___35707 + (1));
i__25948__auto___35707 = G__35708;
continue;
} else {
}
break;
}

var G__35140 = args35136.length;
switch (G__35140) {
case 0:
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35136.slice((1)),(0),null));
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.pre.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.pre,null,null);
});

om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.pre,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.pre.cljs$lang$applyTo = (function (seq35137){
var G__35138 = cljs.core.first.call(null,seq35137);
var seq35137__$1 = cljs.core.next.call(null,seq35137);
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic(G__35138,seq35137__$1);
});

om_tools.dom.pre.cljs$lang$maxFixedArity = (1);


om_tools.dom.progress = (function om_tools$dom$progress(var_args){
var args35141 = [];
var len__25947__auto___35710 = arguments.length;
var i__25948__auto___35711 = (0);
while(true){
if((i__25948__auto___35711 < len__25947__auto___35710)){
args35141.push((arguments[i__25948__auto___35711]));

var G__35712 = (i__25948__auto___35711 + (1));
i__25948__auto___35711 = G__35712;
continue;
} else {
}
break;
}

var G__35145 = args35141.length;
switch (G__35145) {
case 0:
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35141.slice((1)),(0),null));
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.progress.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.progress,null,null);
});

om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.progress,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.progress.cljs$lang$applyTo = (function (seq35142){
var G__35143 = cljs.core.first.call(null,seq35142);
var seq35142__$1 = cljs.core.next.call(null,seq35142);
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic(G__35143,seq35142__$1);
});

om_tools.dom.progress.cljs$lang$maxFixedArity = (1);


om_tools.dom.q = (function om_tools$dom$q(var_args){
var args35146 = [];
var len__25947__auto___35714 = arguments.length;
var i__25948__auto___35715 = (0);
while(true){
if((i__25948__auto___35715 < len__25947__auto___35714)){
args35146.push((arguments[i__25948__auto___35715]));

var G__35716 = (i__25948__auto___35715 + (1));
i__25948__auto___35715 = G__35716;
continue;
} else {
}
break;
}

var G__35150 = args35146.length;
switch (G__35150) {
case 0:
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35146.slice((1)),(0),null));
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.q.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.q,null,null);
});

om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.q,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.q.cljs$lang$applyTo = (function (seq35147){
var G__35148 = cljs.core.first.call(null,seq35147);
var seq35147__$1 = cljs.core.next.call(null,seq35147);
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic(G__35148,seq35147__$1);
});

om_tools.dom.q.cljs$lang$maxFixedArity = (1);


om_tools.dom.rp = (function om_tools$dom$rp(var_args){
var args35151 = [];
var len__25947__auto___35718 = arguments.length;
var i__25948__auto___35719 = (0);
while(true){
if((i__25948__auto___35719 < len__25947__auto___35718)){
args35151.push((arguments[i__25948__auto___35719]));

var G__35720 = (i__25948__auto___35719 + (1));
i__25948__auto___35719 = G__35720;
continue;
} else {
}
break;
}

var G__35155 = args35151.length;
switch (G__35155) {
case 0:
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35151.slice((1)),(0),null));
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.rp.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rp,null,null);
});

om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.rp,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.rp.cljs$lang$applyTo = (function (seq35152){
var G__35153 = cljs.core.first.call(null,seq35152);
var seq35152__$1 = cljs.core.next.call(null,seq35152);
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic(G__35153,seq35152__$1);
});

om_tools.dom.rp.cljs$lang$maxFixedArity = (1);


om_tools.dom.rt = (function om_tools$dom$rt(var_args){
var args35156 = [];
var len__25947__auto___35722 = arguments.length;
var i__25948__auto___35723 = (0);
while(true){
if((i__25948__auto___35723 < len__25947__auto___35722)){
args35156.push((arguments[i__25948__auto___35723]));

var G__35724 = (i__25948__auto___35723 + (1));
i__25948__auto___35723 = G__35724;
continue;
} else {
}
break;
}

var G__35160 = args35156.length;
switch (G__35160) {
case 0:
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35156.slice((1)),(0),null));
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.rt.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rt,null,null);
});

om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.rt,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.rt.cljs$lang$applyTo = (function (seq35157){
var G__35158 = cljs.core.first.call(null,seq35157);
var seq35157__$1 = cljs.core.next.call(null,seq35157);
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic(G__35158,seq35157__$1);
});

om_tools.dom.rt.cljs$lang$maxFixedArity = (1);


om_tools.dom.ruby = (function om_tools$dom$ruby(var_args){
var args35161 = [];
var len__25947__auto___35726 = arguments.length;
var i__25948__auto___35727 = (0);
while(true){
if((i__25948__auto___35727 < len__25947__auto___35726)){
args35161.push((arguments[i__25948__auto___35727]));

var G__35728 = (i__25948__auto___35727 + (1));
i__25948__auto___35727 = G__35728;
continue;
} else {
}
break;
}

var G__35165 = args35161.length;
switch (G__35165) {
case 0:
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35161.slice((1)),(0),null));
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ruby,null,null);
});

om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.ruby,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.ruby.cljs$lang$applyTo = (function (seq35162){
var G__35163 = cljs.core.first.call(null,seq35162);
var seq35162__$1 = cljs.core.next.call(null,seq35162);
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(G__35163,seq35162__$1);
});

om_tools.dom.ruby.cljs$lang$maxFixedArity = (1);


om_tools.dom.s = (function om_tools$dom$s(var_args){
var args35166 = [];
var len__25947__auto___35730 = arguments.length;
var i__25948__auto___35731 = (0);
while(true){
if((i__25948__auto___35731 < len__25947__auto___35730)){
args35166.push((arguments[i__25948__auto___35731]));

var G__35732 = (i__25948__auto___35731 + (1));
i__25948__auto___35731 = G__35732;
continue;
} else {
}
break;
}

var G__35170 = args35166.length;
switch (G__35170) {
case 0:
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35166.slice((1)),(0),null));
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.s.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.s,null,null);
});

om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.s,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.s.cljs$lang$applyTo = (function (seq35167){
var G__35168 = cljs.core.first.call(null,seq35167);
var seq35167__$1 = cljs.core.next.call(null,seq35167);
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic(G__35168,seq35167__$1);
});

om_tools.dom.s.cljs$lang$maxFixedArity = (1);


om_tools.dom.samp = (function om_tools$dom$samp(var_args){
var args35171 = [];
var len__25947__auto___35734 = arguments.length;
var i__25948__auto___35735 = (0);
while(true){
if((i__25948__auto___35735 < len__25947__auto___35734)){
args35171.push((arguments[i__25948__auto___35735]));

var G__35736 = (i__25948__auto___35735 + (1));
i__25948__auto___35735 = G__35736;
continue;
} else {
}
break;
}

var G__35175 = args35171.length;
switch (G__35175) {
case 0:
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35171.slice((1)),(0),null));
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.samp.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.samp,null,null);
});

om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.samp,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.samp.cljs$lang$applyTo = (function (seq35172){
var G__35173 = cljs.core.first.call(null,seq35172);
var seq35172__$1 = cljs.core.next.call(null,seq35172);
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic(G__35173,seq35172__$1);
});

om_tools.dom.samp.cljs$lang$maxFixedArity = (1);


om_tools.dom.script = (function om_tools$dom$script(var_args){
var args35176 = [];
var len__25947__auto___35738 = arguments.length;
var i__25948__auto___35739 = (0);
while(true){
if((i__25948__auto___35739 < len__25947__auto___35738)){
args35176.push((arguments[i__25948__auto___35739]));

var G__35740 = (i__25948__auto___35739 + (1));
i__25948__auto___35739 = G__35740;
continue;
} else {
}
break;
}

var G__35180 = args35176.length;
switch (G__35180) {
case 0:
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35176.slice((1)),(0),null));
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.script.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.script,null,null);
});

om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.script,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.script.cljs$lang$applyTo = (function (seq35177){
var G__35178 = cljs.core.first.call(null,seq35177);
var seq35177__$1 = cljs.core.next.call(null,seq35177);
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic(G__35178,seq35177__$1);
});

om_tools.dom.script.cljs$lang$maxFixedArity = (1);


om_tools.dom.section = (function om_tools$dom$section(var_args){
var args35181 = [];
var len__25947__auto___35742 = arguments.length;
var i__25948__auto___35743 = (0);
while(true){
if((i__25948__auto___35743 < len__25947__auto___35742)){
args35181.push((arguments[i__25948__auto___35743]));

var G__35744 = (i__25948__auto___35743 + (1));
i__25948__auto___35743 = G__35744;
continue;
} else {
}
break;
}

var G__35185 = args35181.length;
switch (G__35185) {
case 0:
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35181.slice((1)),(0),null));
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.section.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.section,null,null);
});

om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.section,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.section.cljs$lang$applyTo = (function (seq35182){
var G__35183 = cljs.core.first.call(null,seq35182);
var seq35182__$1 = cljs.core.next.call(null,seq35182);
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic(G__35183,seq35182__$1);
});

om_tools.dom.section.cljs$lang$maxFixedArity = (1);


om_tools.dom.small = (function om_tools$dom$small(var_args){
var args35186 = [];
var len__25947__auto___35746 = arguments.length;
var i__25948__auto___35747 = (0);
while(true){
if((i__25948__auto___35747 < len__25947__auto___35746)){
args35186.push((arguments[i__25948__auto___35747]));

var G__35748 = (i__25948__auto___35747 + (1));
i__25948__auto___35747 = G__35748;
continue;
} else {
}
break;
}

var G__35190 = args35186.length;
switch (G__35190) {
case 0:
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35186.slice((1)),(0),null));
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.small.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.small,null,null);
});

om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.small,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.small.cljs$lang$applyTo = (function (seq35187){
var G__35188 = cljs.core.first.call(null,seq35187);
var seq35187__$1 = cljs.core.next.call(null,seq35187);
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic(G__35188,seq35187__$1);
});

om_tools.dom.small.cljs$lang$maxFixedArity = (1);


om_tools.dom.source = (function om_tools$dom$source(var_args){
var args35191 = [];
var len__25947__auto___35750 = arguments.length;
var i__25948__auto___35751 = (0);
while(true){
if((i__25948__auto___35751 < len__25947__auto___35750)){
args35191.push((arguments[i__25948__auto___35751]));

var G__35752 = (i__25948__auto___35751 + (1));
i__25948__auto___35751 = G__35752;
continue;
} else {
}
break;
}

var G__35195 = args35191.length;
switch (G__35195) {
case 0:
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35191.slice((1)),(0),null));
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.source.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.source,null,null);
});

om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.source,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.source.cljs$lang$applyTo = (function (seq35192){
var G__35193 = cljs.core.first.call(null,seq35192);
var seq35192__$1 = cljs.core.next.call(null,seq35192);
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic(G__35193,seq35192__$1);
});

om_tools.dom.source.cljs$lang$maxFixedArity = (1);


om_tools.dom.span = (function om_tools$dom$span(var_args){
var args35196 = [];
var len__25947__auto___35754 = arguments.length;
var i__25948__auto___35755 = (0);
while(true){
if((i__25948__auto___35755 < len__25947__auto___35754)){
args35196.push((arguments[i__25948__auto___35755]));

var G__35756 = (i__25948__auto___35755 + (1));
i__25948__auto___35755 = G__35756;
continue;
} else {
}
break;
}

var G__35200 = args35196.length;
switch (G__35200) {
case 0:
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35196.slice((1)),(0),null));
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.span.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.span,null,null);
});

om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.span,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.span.cljs$lang$applyTo = (function (seq35197){
var G__35198 = cljs.core.first.call(null,seq35197);
var seq35197__$1 = cljs.core.next.call(null,seq35197);
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic(G__35198,seq35197__$1);
});

om_tools.dom.span.cljs$lang$maxFixedArity = (1);


om_tools.dom.strong = (function om_tools$dom$strong(var_args){
var args35201 = [];
var len__25947__auto___35758 = arguments.length;
var i__25948__auto___35759 = (0);
while(true){
if((i__25948__auto___35759 < len__25947__auto___35758)){
args35201.push((arguments[i__25948__auto___35759]));

var G__35760 = (i__25948__auto___35759 + (1));
i__25948__auto___35759 = G__35760;
continue;
} else {
}
break;
}

var G__35205 = args35201.length;
switch (G__35205) {
case 0:
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35201.slice((1)),(0),null));
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.strong.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.strong,null,null);
});

om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.strong,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.strong.cljs$lang$applyTo = (function (seq35202){
var G__35203 = cljs.core.first.call(null,seq35202);
var seq35202__$1 = cljs.core.next.call(null,seq35202);
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic(G__35203,seq35202__$1);
});

om_tools.dom.strong.cljs$lang$maxFixedArity = (1);


om_tools.dom.style = (function om_tools$dom$style(var_args){
var args35206 = [];
var len__25947__auto___35762 = arguments.length;
var i__25948__auto___35763 = (0);
while(true){
if((i__25948__auto___35763 < len__25947__auto___35762)){
args35206.push((arguments[i__25948__auto___35763]));

var G__35764 = (i__25948__auto___35763 + (1));
i__25948__auto___35763 = G__35764;
continue;
} else {
}
break;
}

var G__35210 = args35206.length;
switch (G__35210) {
case 0:
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35206.slice((1)),(0),null));
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.style.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.style,null,null);
});

om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.style,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.style.cljs$lang$applyTo = (function (seq35207){
var G__35208 = cljs.core.first.call(null,seq35207);
var seq35207__$1 = cljs.core.next.call(null,seq35207);
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic(G__35208,seq35207__$1);
});

om_tools.dom.style.cljs$lang$maxFixedArity = (1);


om_tools.dom.sub = (function om_tools$dom$sub(var_args){
var args35211 = [];
var len__25947__auto___35766 = arguments.length;
var i__25948__auto___35767 = (0);
while(true){
if((i__25948__auto___35767 < len__25947__auto___35766)){
args35211.push((arguments[i__25948__auto___35767]));

var G__35768 = (i__25948__auto___35767 + (1));
i__25948__auto___35767 = G__35768;
continue;
} else {
}
break;
}

var G__35215 = args35211.length;
switch (G__35215) {
case 0:
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35211.slice((1)),(0),null));
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.sub.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.sub,null,null);
});

om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.sub,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.sub.cljs$lang$applyTo = (function (seq35212){
var G__35213 = cljs.core.first.call(null,seq35212);
var seq35212__$1 = cljs.core.next.call(null,seq35212);
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic(G__35213,seq35212__$1);
});

om_tools.dom.sub.cljs$lang$maxFixedArity = (1);


om_tools.dom.summary = (function om_tools$dom$summary(var_args){
var args35216 = [];
var len__25947__auto___35770 = arguments.length;
var i__25948__auto___35771 = (0);
while(true){
if((i__25948__auto___35771 < len__25947__auto___35770)){
args35216.push((arguments[i__25948__auto___35771]));

var G__35772 = (i__25948__auto___35771 + (1));
i__25948__auto___35771 = G__35772;
continue;
} else {
}
break;
}

var G__35220 = args35216.length;
switch (G__35220) {
case 0:
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35216.slice((1)),(0),null));
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.summary.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.summary,null,null);
});

om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.summary,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.summary.cljs$lang$applyTo = (function (seq35217){
var G__35218 = cljs.core.first.call(null,seq35217);
var seq35217__$1 = cljs.core.next.call(null,seq35217);
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic(G__35218,seq35217__$1);
});

om_tools.dom.summary.cljs$lang$maxFixedArity = (1);


om_tools.dom.sup = (function om_tools$dom$sup(var_args){
var args35221 = [];
var len__25947__auto___35774 = arguments.length;
var i__25948__auto___35775 = (0);
while(true){
if((i__25948__auto___35775 < len__25947__auto___35774)){
args35221.push((arguments[i__25948__auto___35775]));

var G__35776 = (i__25948__auto___35775 + (1));
i__25948__auto___35775 = G__35776;
continue;
} else {
}
break;
}

var G__35225 = args35221.length;
switch (G__35225) {
case 0:
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35221.slice((1)),(0),null));
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.sup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.sup,null,null);
});

om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.sup,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.sup.cljs$lang$applyTo = (function (seq35222){
var G__35223 = cljs.core.first.call(null,seq35222);
var seq35222__$1 = cljs.core.next.call(null,seq35222);
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic(G__35223,seq35222__$1);
});

om_tools.dom.sup.cljs$lang$maxFixedArity = (1);


om_tools.dom.table = (function om_tools$dom$table(var_args){
var args35226 = [];
var len__25947__auto___35778 = arguments.length;
var i__25948__auto___35779 = (0);
while(true){
if((i__25948__auto___35779 < len__25947__auto___35778)){
args35226.push((arguments[i__25948__auto___35779]));

var G__35780 = (i__25948__auto___35779 + (1));
i__25948__auto___35779 = G__35780;
continue;
} else {
}
break;
}

var G__35230 = args35226.length;
switch (G__35230) {
case 0:
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35226.slice((1)),(0),null));
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.table.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.table,null,null);
});

om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.table,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.table.cljs$lang$applyTo = (function (seq35227){
var G__35228 = cljs.core.first.call(null,seq35227);
var seq35227__$1 = cljs.core.next.call(null,seq35227);
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic(G__35228,seq35227__$1);
});

om_tools.dom.table.cljs$lang$maxFixedArity = (1);


om_tools.dom.tbody = (function om_tools$dom$tbody(var_args){
var args35231 = [];
var len__25947__auto___35782 = arguments.length;
var i__25948__auto___35783 = (0);
while(true){
if((i__25948__auto___35783 < len__25947__auto___35782)){
args35231.push((arguments[i__25948__auto___35783]));

var G__35784 = (i__25948__auto___35783 + (1));
i__25948__auto___35783 = G__35784;
continue;
} else {
}
break;
}

var G__35235 = args35231.length;
switch (G__35235) {
case 0:
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35231.slice((1)),(0),null));
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tbody,null,null);
});

om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.tbody,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.tbody.cljs$lang$applyTo = (function (seq35232){
var G__35233 = cljs.core.first.call(null,seq35232);
var seq35232__$1 = cljs.core.next.call(null,seq35232);
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(G__35233,seq35232__$1);
});

om_tools.dom.tbody.cljs$lang$maxFixedArity = (1);


om_tools.dom.td = (function om_tools$dom$td(var_args){
var args35236 = [];
var len__25947__auto___35786 = arguments.length;
var i__25948__auto___35787 = (0);
while(true){
if((i__25948__auto___35787 < len__25947__auto___35786)){
args35236.push((arguments[i__25948__auto___35787]));

var G__35788 = (i__25948__auto___35787 + (1));
i__25948__auto___35787 = G__35788;
continue;
} else {
}
break;
}

var G__35240 = args35236.length;
switch (G__35240) {
case 0:
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35236.slice((1)),(0),null));
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.td.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.td,null,null);
});

om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.td,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.td.cljs$lang$applyTo = (function (seq35237){
var G__35238 = cljs.core.first.call(null,seq35237);
var seq35237__$1 = cljs.core.next.call(null,seq35237);
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic(G__35238,seq35237__$1);
});

om_tools.dom.td.cljs$lang$maxFixedArity = (1);


om_tools.dom.tfoot = (function om_tools$dom$tfoot(var_args){
var args35241 = [];
var len__25947__auto___35790 = arguments.length;
var i__25948__auto___35791 = (0);
while(true){
if((i__25948__auto___35791 < len__25947__auto___35790)){
args35241.push((arguments[i__25948__auto___35791]));

var G__35792 = (i__25948__auto___35791 + (1));
i__25948__auto___35791 = G__35792;
continue;
} else {
}
break;
}

var G__35245 = args35241.length;
switch (G__35245) {
case 0:
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35241.slice((1)),(0),null));
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tfoot,null,null);
});

om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.tfoot,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.tfoot.cljs$lang$applyTo = (function (seq35242){
var G__35243 = cljs.core.first.call(null,seq35242);
var seq35242__$1 = cljs.core.next.call(null,seq35242);
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(G__35243,seq35242__$1);
});

om_tools.dom.tfoot.cljs$lang$maxFixedArity = (1);


om_tools.dom.th = (function om_tools$dom$th(var_args){
var args35246 = [];
var len__25947__auto___35794 = arguments.length;
var i__25948__auto___35795 = (0);
while(true){
if((i__25948__auto___35795 < len__25947__auto___35794)){
args35246.push((arguments[i__25948__auto___35795]));

var G__35796 = (i__25948__auto___35795 + (1));
i__25948__auto___35795 = G__35796;
continue;
} else {
}
break;
}

var G__35250 = args35246.length;
switch (G__35250) {
case 0:
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35246.slice((1)),(0),null));
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.th.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.th,null,null);
});

om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.th,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.th.cljs$lang$applyTo = (function (seq35247){
var G__35248 = cljs.core.first.call(null,seq35247);
var seq35247__$1 = cljs.core.next.call(null,seq35247);
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic(G__35248,seq35247__$1);
});

om_tools.dom.th.cljs$lang$maxFixedArity = (1);


om_tools.dom.thead = (function om_tools$dom$thead(var_args){
var args35251 = [];
var len__25947__auto___35798 = arguments.length;
var i__25948__auto___35799 = (0);
while(true){
if((i__25948__auto___35799 < len__25947__auto___35798)){
args35251.push((arguments[i__25948__auto___35799]));

var G__35800 = (i__25948__auto___35799 + (1));
i__25948__auto___35799 = G__35800;
continue;
} else {
}
break;
}

var G__35255 = args35251.length;
switch (G__35255) {
case 0:
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35251.slice((1)),(0),null));
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.thead.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.thead,null,null);
});

om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.thead,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.thead.cljs$lang$applyTo = (function (seq35252){
var G__35253 = cljs.core.first.call(null,seq35252);
var seq35252__$1 = cljs.core.next.call(null,seq35252);
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic(G__35253,seq35252__$1);
});

om_tools.dom.thead.cljs$lang$maxFixedArity = (1);


om_tools.dom.time = (function om_tools$dom$time(var_args){
var args35256 = [];
var len__25947__auto___35802 = arguments.length;
var i__25948__auto___35803 = (0);
while(true){
if((i__25948__auto___35803 < len__25947__auto___35802)){
args35256.push((arguments[i__25948__auto___35803]));

var G__35804 = (i__25948__auto___35803 + (1));
i__25948__auto___35803 = G__35804;
continue;
} else {
}
break;
}

var G__35260 = args35256.length;
switch (G__35260) {
case 0:
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35256.slice((1)),(0),null));
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.time.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.time,null,null);
});

om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.time,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.time.cljs$lang$applyTo = (function (seq35257){
var G__35258 = cljs.core.first.call(null,seq35257);
var seq35257__$1 = cljs.core.next.call(null,seq35257);
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic(G__35258,seq35257__$1);
});

om_tools.dom.time.cljs$lang$maxFixedArity = (1);


om_tools.dom.title = (function om_tools$dom$title(var_args){
var args35261 = [];
var len__25947__auto___35806 = arguments.length;
var i__25948__auto___35807 = (0);
while(true){
if((i__25948__auto___35807 < len__25947__auto___35806)){
args35261.push((arguments[i__25948__auto___35807]));

var G__35808 = (i__25948__auto___35807 + (1));
i__25948__auto___35807 = G__35808;
continue;
} else {
}
break;
}

var G__35265 = args35261.length;
switch (G__35265) {
case 0:
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35261.slice((1)),(0),null));
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.title.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.title,null,null);
});

om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.title,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.title.cljs$lang$applyTo = (function (seq35262){
var G__35263 = cljs.core.first.call(null,seq35262);
var seq35262__$1 = cljs.core.next.call(null,seq35262);
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic(G__35263,seq35262__$1);
});

om_tools.dom.title.cljs$lang$maxFixedArity = (1);


om_tools.dom.tr = (function om_tools$dom$tr(var_args){
var args35266 = [];
var len__25947__auto___35810 = arguments.length;
var i__25948__auto___35811 = (0);
while(true){
if((i__25948__auto___35811 < len__25947__auto___35810)){
args35266.push((arguments[i__25948__auto___35811]));

var G__35812 = (i__25948__auto___35811 + (1));
i__25948__auto___35811 = G__35812;
continue;
} else {
}
break;
}

var G__35270 = args35266.length;
switch (G__35270) {
case 0:
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35266.slice((1)),(0),null));
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.tr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tr,null,null);
});

om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.tr,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.tr.cljs$lang$applyTo = (function (seq35267){
var G__35268 = cljs.core.first.call(null,seq35267);
var seq35267__$1 = cljs.core.next.call(null,seq35267);
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic(G__35268,seq35267__$1);
});

om_tools.dom.tr.cljs$lang$maxFixedArity = (1);


om_tools.dom.track = (function om_tools$dom$track(var_args){
var args35271 = [];
var len__25947__auto___35814 = arguments.length;
var i__25948__auto___35815 = (0);
while(true){
if((i__25948__auto___35815 < len__25947__auto___35814)){
args35271.push((arguments[i__25948__auto___35815]));

var G__35816 = (i__25948__auto___35815 + (1));
i__25948__auto___35815 = G__35816;
continue;
} else {
}
break;
}

var G__35275 = args35271.length;
switch (G__35275) {
case 0:
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35271.slice((1)),(0),null));
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.track.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.track,null,null);
});

om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.track,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.track.cljs$lang$applyTo = (function (seq35272){
var G__35273 = cljs.core.first.call(null,seq35272);
var seq35272__$1 = cljs.core.next.call(null,seq35272);
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic(G__35273,seq35272__$1);
});

om_tools.dom.track.cljs$lang$maxFixedArity = (1);


om_tools.dom.u = (function om_tools$dom$u(var_args){
var args35276 = [];
var len__25947__auto___35818 = arguments.length;
var i__25948__auto___35819 = (0);
while(true){
if((i__25948__auto___35819 < len__25947__auto___35818)){
args35276.push((arguments[i__25948__auto___35819]));

var G__35820 = (i__25948__auto___35819 + (1));
i__25948__auto___35819 = G__35820;
continue;
} else {
}
break;
}

var G__35280 = args35276.length;
switch (G__35280) {
case 0:
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35276.slice((1)),(0),null));
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.u.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.u,null,null);
});

om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.u,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.u.cljs$lang$applyTo = (function (seq35277){
var G__35278 = cljs.core.first.call(null,seq35277);
var seq35277__$1 = cljs.core.next.call(null,seq35277);
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic(G__35278,seq35277__$1);
});

om_tools.dom.u.cljs$lang$maxFixedArity = (1);


om_tools.dom.ul = (function om_tools$dom$ul(var_args){
var args35281 = [];
var len__25947__auto___35822 = arguments.length;
var i__25948__auto___35823 = (0);
while(true){
if((i__25948__auto___35823 < len__25947__auto___35822)){
args35281.push((arguments[i__25948__auto___35823]));

var G__35824 = (i__25948__auto___35823 + (1));
i__25948__auto___35823 = G__35824;
continue;
} else {
}
break;
}

var G__35285 = args35281.length;
switch (G__35285) {
case 0:
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35281.slice((1)),(0),null));
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.ul.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ul,null,null);
});

om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.ul,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.ul.cljs$lang$applyTo = (function (seq35282){
var G__35283 = cljs.core.first.call(null,seq35282);
var seq35282__$1 = cljs.core.next.call(null,seq35282);
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic(G__35283,seq35282__$1);
});

om_tools.dom.ul.cljs$lang$maxFixedArity = (1);


om_tools.dom.var$ = (function om_tools$dom$var(var_args){
var args35286 = [];
var len__25947__auto___35826 = arguments.length;
var i__25948__auto___35827 = (0);
while(true){
if((i__25948__auto___35827 < len__25947__auto___35826)){
args35286.push((arguments[i__25948__auto___35827]));

var G__35828 = (i__25948__auto___35827 + (1));
i__25948__auto___35827 = G__35828;
continue;
} else {
}
break;
}

var G__35290 = args35286.length;
switch (G__35290) {
case 0:
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35286.slice((1)),(0),null));
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.var$.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.var$,null,null);
});

om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.var$,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.var$.cljs$lang$applyTo = (function (seq35287){
var G__35288 = cljs.core.first.call(null,seq35287);
var seq35287__$1 = cljs.core.next.call(null,seq35287);
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic(G__35288,seq35287__$1);
});

om_tools.dom.var$.cljs$lang$maxFixedArity = (1);


om_tools.dom.video = (function om_tools$dom$video(var_args){
var args35291 = [];
var len__25947__auto___35830 = arguments.length;
var i__25948__auto___35831 = (0);
while(true){
if((i__25948__auto___35831 < len__25947__auto___35830)){
args35291.push((arguments[i__25948__auto___35831]));

var G__35832 = (i__25948__auto___35831 + (1));
i__25948__auto___35831 = G__35832;
continue;
} else {
}
break;
}

var G__35295 = args35291.length;
switch (G__35295) {
case 0:
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35291.slice((1)),(0),null));
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.video.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.video,null,null);
});

om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.video,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.video.cljs$lang$applyTo = (function (seq35292){
var G__35293 = cljs.core.first.call(null,seq35292);
var seq35292__$1 = cljs.core.next.call(null,seq35292);
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic(G__35293,seq35292__$1);
});

om_tools.dom.video.cljs$lang$maxFixedArity = (1);


om_tools.dom.wbr = (function om_tools$dom$wbr(var_args){
var args35296 = [];
var len__25947__auto___35834 = arguments.length;
var i__25948__auto___35835 = (0);
while(true){
if((i__25948__auto___35835 < len__25947__auto___35834)){
args35296.push((arguments[i__25948__auto___35835]));

var G__35836 = (i__25948__auto___35835 + (1));
i__25948__auto___35835 = G__35836;
continue;
} else {
}
break;
}

var G__35300 = args35296.length;
switch (G__35300) {
case 0:
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35296.slice((1)),(0),null));
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.wbr,null,null);
});

om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.wbr,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.wbr.cljs$lang$applyTo = (function (seq35297){
var G__35298 = cljs.core.first.call(null,seq35297);
var seq35297__$1 = cljs.core.next.call(null,seq35297);
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(G__35298,seq35297__$1);
});

om_tools.dom.wbr.cljs$lang$maxFixedArity = (1);


om_tools.dom.circle = (function om_tools$dom$circle(var_args){
var args35301 = [];
var len__25947__auto___35838 = arguments.length;
var i__25948__auto___35839 = (0);
while(true){
if((i__25948__auto___35839 < len__25947__auto___35838)){
args35301.push((arguments[i__25948__auto___35839]));

var G__35840 = (i__25948__auto___35839 + (1));
i__25948__auto___35839 = G__35840;
continue;
} else {
}
break;
}

var G__35305 = args35301.length;
switch (G__35305) {
case 0:
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35301.slice((1)),(0),null));
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.circle.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.circle,null,null);
});

om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.circle,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.circle.cljs$lang$applyTo = (function (seq35302){
var G__35303 = cljs.core.first.call(null,seq35302);
var seq35302__$1 = cljs.core.next.call(null,seq35302);
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic(G__35303,seq35302__$1);
});

om_tools.dom.circle.cljs$lang$maxFixedArity = (1);


om_tools.dom.clipPath = (function om_tools$dom$clipPath(var_args){
var args35306 = [];
var len__25947__auto___35842 = arguments.length;
var i__25948__auto___35843 = (0);
while(true){
if((i__25948__auto___35843 < len__25947__auto___35842)){
args35306.push((arguments[i__25948__auto___35843]));

var G__35844 = (i__25948__auto___35843 + (1));
i__25948__auto___35843 = G__35844;
continue;
} else {
}
break;
}

var G__35310 = args35306.length;
switch (G__35310) {
case 0:
return om_tools.dom.clipPath.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35306.slice((1)),(0),null));
return om_tools.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.clipPath.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.clipPath,null,null);
});

om_tools.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.clipPath,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.clipPath.cljs$lang$applyTo = (function (seq35307){
var G__35308 = cljs.core.first.call(null,seq35307);
var seq35307__$1 = cljs.core.next.call(null,seq35307);
return om_tools.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic(G__35308,seq35307__$1);
});

om_tools.dom.clipPath.cljs$lang$maxFixedArity = (1);


om_tools.dom.ellipse = (function om_tools$dom$ellipse(var_args){
var args35311 = [];
var len__25947__auto___35846 = arguments.length;
var i__25948__auto___35847 = (0);
while(true){
if((i__25948__auto___35847 < len__25947__auto___35846)){
args35311.push((arguments[i__25948__auto___35847]));

var G__35848 = (i__25948__auto___35847 + (1));
i__25948__auto___35847 = G__35848;
continue;
} else {
}
break;
}

var G__35315 = args35311.length;
switch (G__35315) {
case 0:
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35311.slice((1)),(0),null));
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ellipse,null,null);
});

om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.ellipse,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.ellipse.cljs$lang$applyTo = (function (seq35312){
var G__35313 = cljs.core.first.call(null,seq35312);
var seq35312__$1 = cljs.core.next.call(null,seq35312);
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(G__35313,seq35312__$1);
});

om_tools.dom.ellipse.cljs$lang$maxFixedArity = (1);


om_tools.dom.g = (function om_tools$dom$g(var_args){
var args35316 = [];
var len__25947__auto___35850 = arguments.length;
var i__25948__auto___35851 = (0);
while(true){
if((i__25948__auto___35851 < len__25947__auto___35850)){
args35316.push((arguments[i__25948__auto___35851]));

var G__35852 = (i__25948__auto___35851 + (1));
i__25948__auto___35851 = G__35852;
continue;
} else {
}
break;
}

var G__35320 = args35316.length;
switch (G__35320) {
case 0:
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35316.slice((1)),(0),null));
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.g.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.g,null,null);
});

om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.g,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.g.cljs$lang$applyTo = (function (seq35317){
var G__35318 = cljs.core.first.call(null,seq35317);
var seq35317__$1 = cljs.core.next.call(null,seq35317);
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic(G__35318,seq35317__$1);
});

om_tools.dom.g.cljs$lang$maxFixedArity = (1);


om_tools.dom.line = (function om_tools$dom$line(var_args){
var args35321 = [];
var len__25947__auto___35854 = arguments.length;
var i__25948__auto___35855 = (0);
while(true){
if((i__25948__auto___35855 < len__25947__auto___35854)){
args35321.push((arguments[i__25948__auto___35855]));

var G__35856 = (i__25948__auto___35855 + (1));
i__25948__auto___35855 = G__35856;
continue;
} else {
}
break;
}

var G__35325 = args35321.length;
switch (G__35325) {
case 0:
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35321.slice((1)),(0),null));
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.line.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.line,null,null);
});

om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.line,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.line.cljs$lang$applyTo = (function (seq35322){
var G__35323 = cljs.core.first.call(null,seq35322);
var seq35322__$1 = cljs.core.next.call(null,seq35322);
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic(G__35323,seq35322__$1);
});

om_tools.dom.line.cljs$lang$maxFixedArity = (1);


om_tools.dom.mask = (function om_tools$dom$mask(var_args){
var args35326 = [];
var len__25947__auto___35858 = arguments.length;
var i__25948__auto___35859 = (0);
while(true){
if((i__25948__auto___35859 < len__25947__auto___35858)){
args35326.push((arguments[i__25948__auto___35859]));

var G__35860 = (i__25948__auto___35859 + (1));
i__25948__auto___35859 = G__35860;
continue;
} else {
}
break;
}

var G__35330 = args35326.length;
switch (G__35330) {
case 0:
return om_tools.dom.mask.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35326.slice((1)),(0),null));
return om_tools.dom.mask.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.mask.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.mask,null,null);
});

om_tools.dom.mask.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.mask,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.mask.cljs$lang$applyTo = (function (seq35327){
var G__35328 = cljs.core.first.call(null,seq35327);
var seq35327__$1 = cljs.core.next.call(null,seq35327);
return om_tools.dom.mask.cljs$core$IFn$_invoke$arity$variadic(G__35328,seq35327__$1);
});

om_tools.dom.mask.cljs$lang$maxFixedArity = (1);


om_tools.dom.path = (function om_tools$dom$path(var_args){
var args35331 = [];
var len__25947__auto___35862 = arguments.length;
var i__25948__auto___35863 = (0);
while(true){
if((i__25948__auto___35863 < len__25947__auto___35862)){
args35331.push((arguments[i__25948__auto___35863]));

var G__35864 = (i__25948__auto___35863 + (1));
i__25948__auto___35863 = G__35864;
continue;
} else {
}
break;
}

var G__35335 = args35331.length;
switch (G__35335) {
case 0:
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35331.slice((1)),(0),null));
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.path.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.path,null,null);
});

om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.path,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.path.cljs$lang$applyTo = (function (seq35332){
var G__35333 = cljs.core.first.call(null,seq35332);
var seq35332__$1 = cljs.core.next.call(null,seq35332);
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic(G__35333,seq35332__$1);
});

om_tools.dom.path.cljs$lang$maxFixedArity = (1);


om_tools.dom.pattern = (function om_tools$dom$pattern(var_args){
var args35336 = [];
var len__25947__auto___35866 = arguments.length;
var i__25948__auto___35867 = (0);
while(true){
if((i__25948__auto___35867 < len__25947__auto___35866)){
args35336.push((arguments[i__25948__auto___35867]));

var G__35868 = (i__25948__auto___35867 + (1));
i__25948__auto___35867 = G__35868;
continue;
} else {
}
break;
}

var G__35340 = args35336.length;
switch (G__35340) {
case 0:
return om_tools.dom.pattern.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35336.slice((1)),(0),null));
return om_tools.dom.pattern.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.pattern.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.pattern,null,null);
});

om_tools.dom.pattern.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.pattern,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.pattern.cljs$lang$applyTo = (function (seq35337){
var G__35338 = cljs.core.first.call(null,seq35337);
var seq35337__$1 = cljs.core.next.call(null,seq35337);
return om_tools.dom.pattern.cljs$core$IFn$_invoke$arity$variadic(G__35338,seq35337__$1);
});

om_tools.dom.pattern.cljs$lang$maxFixedArity = (1);


om_tools.dom.polyline = (function om_tools$dom$polyline(var_args){
var args35341 = [];
var len__25947__auto___35870 = arguments.length;
var i__25948__auto___35871 = (0);
while(true){
if((i__25948__auto___35871 < len__25947__auto___35870)){
args35341.push((arguments[i__25948__auto___35871]));

var G__35872 = (i__25948__auto___35871 + (1));
i__25948__auto___35871 = G__35872;
continue;
} else {
}
break;
}

var G__35345 = args35341.length;
switch (G__35345) {
case 0:
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35341.slice((1)),(0),null));
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.polyline,null,null);
});

om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.polyline,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.polyline.cljs$lang$applyTo = (function (seq35342){
var G__35343 = cljs.core.first.call(null,seq35342);
var seq35342__$1 = cljs.core.next.call(null,seq35342);
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(G__35343,seq35342__$1);
});

om_tools.dom.polyline.cljs$lang$maxFixedArity = (1);


om_tools.dom.rect = (function om_tools$dom$rect(var_args){
var args35346 = [];
var len__25947__auto___35874 = arguments.length;
var i__25948__auto___35875 = (0);
while(true){
if((i__25948__auto___35875 < len__25947__auto___35874)){
args35346.push((arguments[i__25948__auto___35875]));

var G__35876 = (i__25948__auto___35875 + (1));
i__25948__auto___35875 = G__35876;
continue;
} else {
}
break;
}

var G__35350 = args35346.length;
switch (G__35350) {
case 0:
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35346.slice((1)),(0),null));
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.rect.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rect,null,null);
});

om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.rect,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.rect.cljs$lang$applyTo = (function (seq35347){
var G__35348 = cljs.core.first.call(null,seq35347);
var seq35347__$1 = cljs.core.next.call(null,seq35347);
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic(G__35348,seq35347__$1);
});

om_tools.dom.rect.cljs$lang$maxFixedArity = (1);


om_tools.dom.svg = (function om_tools$dom$svg(var_args){
var args35351 = [];
var len__25947__auto___35878 = arguments.length;
var i__25948__auto___35879 = (0);
while(true){
if((i__25948__auto___35879 < len__25947__auto___35878)){
args35351.push((arguments[i__25948__auto___35879]));

var G__35880 = (i__25948__auto___35879 + (1));
i__25948__auto___35879 = G__35880;
continue;
} else {
}
break;
}

var G__35355 = args35351.length;
switch (G__35355) {
case 0:
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35351.slice((1)),(0),null));
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.svg.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.svg,null,null);
});

om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.svg,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.svg.cljs$lang$applyTo = (function (seq35352){
var G__35353 = cljs.core.first.call(null,seq35352);
var seq35352__$1 = cljs.core.next.call(null,seq35352);
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic(G__35353,seq35352__$1);
});

om_tools.dom.svg.cljs$lang$maxFixedArity = (1);


om_tools.dom.text = (function om_tools$dom$text(var_args){
var args35356 = [];
var len__25947__auto___35882 = arguments.length;
var i__25948__auto___35883 = (0);
while(true){
if((i__25948__auto___35883 < len__25947__auto___35882)){
args35356.push((arguments[i__25948__auto___35883]));

var G__35884 = (i__25948__auto___35883 + (1));
i__25948__auto___35883 = G__35884;
continue;
} else {
}
break;
}

var G__35360 = args35356.length;
switch (G__35360) {
case 0:
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35356.slice((1)),(0),null));
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.text.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.text,null,null);
});

om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.text,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.text.cljs$lang$applyTo = (function (seq35357){
var G__35358 = cljs.core.first.call(null,seq35357);
var seq35357__$1 = cljs.core.next.call(null,seq35357);
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic(G__35358,seq35357__$1);
});

om_tools.dom.text.cljs$lang$maxFixedArity = (1);


om_tools.dom.defs = (function om_tools$dom$defs(var_args){
var args35361 = [];
var len__25947__auto___35886 = arguments.length;
var i__25948__auto___35887 = (0);
while(true){
if((i__25948__auto___35887 < len__25947__auto___35886)){
args35361.push((arguments[i__25948__auto___35887]));

var G__35888 = (i__25948__auto___35887 + (1));
i__25948__auto___35887 = G__35888;
continue;
} else {
}
break;
}

var G__35365 = args35361.length;
switch (G__35365) {
case 0:
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35361.slice((1)),(0),null));
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.defs.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.defs,null,null);
});

om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.defs,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.defs.cljs$lang$applyTo = (function (seq35362){
var G__35363 = cljs.core.first.call(null,seq35362);
var seq35362__$1 = cljs.core.next.call(null,seq35362);
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic(G__35363,seq35362__$1);
});

om_tools.dom.defs.cljs$lang$maxFixedArity = (1);


om_tools.dom.linearGradient = (function om_tools$dom$linearGradient(var_args){
var args35366 = [];
var len__25947__auto___35890 = arguments.length;
var i__25948__auto___35891 = (0);
while(true){
if((i__25948__auto___35891 < len__25947__auto___35890)){
args35366.push((arguments[i__25948__auto___35891]));

var G__35892 = (i__25948__auto___35891 + (1));
i__25948__auto___35891 = G__35892;
continue;
} else {
}
break;
}

var G__35370 = args35366.length;
switch (G__35370) {
case 0:
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35366.slice((1)),(0),null));
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.linearGradient,null,null);
});

om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.linearGradient,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.linearGradient.cljs$lang$applyTo = (function (seq35367){
var G__35368 = cljs.core.first.call(null,seq35367);
var seq35367__$1 = cljs.core.next.call(null,seq35367);
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(G__35368,seq35367__$1);
});

om_tools.dom.linearGradient.cljs$lang$maxFixedArity = (1);


om_tools.dom.polygon = (function om_tools$dom$polygon(var_args){
var args35371 = [];
var len__25947__auto___35894 = arguments.length;
var i__25948__auto___35895 = (0);
while(true){
if((i__25948__auto___35895 < len__25947__auto___35894)){
args35371.push((arguments[i__25948__auto___35895]));

var G__35896 = (i__25948__auto___35895 + (1));
i__25948__auto___35895 = G__35896;
continue;
} else {
}
break;
}

var G__35375 = args35371.length;
switch (G__35375) {
case 0:
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35371.slice((1)),(0),null));
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.polygon,null,null);
});

om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.polygon,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.polygon.cljs$lang$applyTo = (function (seq35372){
var G__35373 = cljs.core.first.call(null,seq35372);
var seq35372__$1 = cljs.core.next.call(null,seq35372);
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(G__35373,seq35372__$1);
});

om_tools.dom.polygon.cljs$lang$maxFixedArity = (1);


om_tools.dom.radialGradient = (function om_tools$dom$radialGradient(var_args){
var args35376 = [];
var len__25947__auto___35898 = arguments.length;
var i__25948__auto___35899 = (0);
while(true){
if((i__25948__auto___35899 < len__25947__auto___35898)){
args35376.push((arguments[i__25948__auto___35899]));

var G__35900 = (i__25948__auto___35899 + (1));
i__25948__auto___35899 = G__35900;
continue;
} else {
}
break;
}

var G__35380 = args35376.length;
switch (G__35380) {
case 0:
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35376.slice((1)),(0),null));
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.radialGradient,null,null);
});

om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.radialGradient,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.radialGradient.cljs$lang$applyTo = (function (seq35377){
var G__35378 = cljs.core.first.call(null,seq35377);
var seq35377__$1 = cljs.core.next.call(null,seq35377);
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(G__35378,seq35377__$1);
});

om_tools.dom.radialGradient.cljs$lang$maxFixedArity = (1);


om_tools.dom.stop = (function om_tools$dom$stop(var_args){
var args35381 = [];
var len__25947__auto___35902 = arguments.length;
var i__25948__auto___35903 = (0);
while(true){
if((i__25948__auto___35903 < len__25947__auto___35902)){
args35381.push((arguments[i__25948__auto___35903]));

var G__35904 = (i__25948__auto___35903 + (1));
i__25948__auto___35903 = G__35904;
continue;
} else {
}
break;
}

var G__35385 = args35381.length;
switch (G__35385) {
case 0:
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35381.slice((1)),(0),null));
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.stop.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.stop,null,null);
});

om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.stop,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.stop.cljs$lang$applyTo = (function (seq35382){
var G__35383 = cljs.core.first.call(null,seq35382);
var seq35382__$1 = cljs.core.next.call(null,seq35382);
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic(G__35383,seq35382__$1);
});

om_tools.dom.stop.cljs$lang$maxFixedArity = (1);


om_tools.dom.tspan = (function om_tools$dom$tspan(var_args){
var args35386 = [];
var len__25947__auto___35906 = arguments.length;
var i__25948__auto___35907 = (0);
while(true){
if((i__25948__auto___35907 < len__25947__auto___35906)){
args35386.push((arguments[i__25948__auto___35907]));

var G__35908 = (i__25948__auto___35907 + (1));
i__25948__auto___35907 = G__35908;
continue;
} else {
}
break;
}

var G__35390 = args35386.length;
switch (G__35390) {
case 0:
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35386.slice((1)),(0),null));
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tspan,null,null);
});

om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.tspan,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.tspan.cljs$lang$applyTo = (function (seq35387){
var G__35388 = cljs.core.first.call(null,seq35387);
var seq35387__$1 = cljs.core.next.call(null,seq35387);
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(G__35388,seq35387__$1);
});

om_tools.dom.tspan.cljs$lang$maxFixedArity = (1);


om_tools.dom.use = (function om_tools$dom$use(var_args){
var args35391 = [];
var len__25947__auto___35910 = arguments.length;
var i__25948__auto___35911 = (0);
while(true){
if((i__25948__auto___35911 < len__25947__auto___35910)){
args35391.push((arguments[i__25948__auto___35911]));

var G__35912 = (i__25948__auto___35911 + (1));
i__25948__auto___35911 = G__35912;
continue;
} else {
}
break;
}

var G__35395 = args35391.length;
switch (G__35395) {
case 0:
return om_tools.dom.use.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35391.slice((1)),(0),null));
return om_tools.dom.use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.use.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.use,null,null);
});

om_tools.dom.use.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,React.DOM.use,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.use.cljs$lang$applyTo = (function (seq35392){
var G__35393 = cljs.core.first.call(null,seq35392);
var seq35392__$1 = cljs.core.next.call(null,seq35392);
return om_tools.dom.use.cljs$core$IFn$_invoke$arity$variadic(G__35393,seq35392__$1);
});

om_tools.dom.use.cljs$lang$maxFixedArity = (1);


om_tools.dom.input = (function om_tools$dom$input(var_args){
var args35396 = [];
var len__25947__auto___35914 = arguments.length;
var i__25948__auto___35915 = (0);
while(true){
if((i__25948__auto___35915 < len__25947__auto___35914)){
args35396.push((arguments[i__25948__auto___35915]));

var G__35916 = (i__25948__auto___35915 + (1));
i__25948__auto___35915 = G__35916;
continue;
} else {
}
break;
}

var G__35400 = args35396.length;
switch (G__35400) {
case 0:
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35396.slice((1)),(0),null));
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.input.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.input,null,null);
});

om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,om.dom.input,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.input.cljs$lang$applyTo = (function (seq35397){
var G__35398 = cljs.core.first.call(null,seq35397);
var seq35397__$1 = cljs.core.next.call(null,seq35397);
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic(G__35398,seq35397__$1);
});

om_tools.dom.input.cljs$lang$maxFixedArity = (1);


om_tools.dom.textarea = (function om_tools$dom$textarea(var_args){
var args35401 = [];
var len__25947__auto___35918 = arguments.length;
var i__25948__auto___35919 = (0);
while(true){
if((i__25948__auto___35919 < len__25947__auto___35918)){
args35401.push((arguments[i__25948__auto___35919]));

var G__35920 = (i__25948__auto___35919 + (1));
i__25948__auto___35919 = G__35920;
continue;
} else {
}
break;
}

var G__35405 = args35401.length;
switch (G__35405) {
case 0:
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35401.slice((1)),(0),null));
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.textarea,null,null);
});

om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,om.dom.textarea,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.textarea.cljs$lang$applyTo = (function (seq35402){
var G__35403 = cljs.core.first.call(null,seq35402);
var seq35402__$1 = cljs.core.next.call(null,seq35402);
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(G__35403,seq35402__$1);
});

om_tools.dom.textarea.cljs$lang$maxFixedArity = (1);


om_tools.dom.option = (function om_tools$dom$option(var_args){
var args34916 = [];
var len__25947__auto___35922 = arguments.length;
var i__25948__auto___35923 = (0);
while(true){
if((i__25948__auto___35923 < len__25947__auto___35922)){
args34916.push((arguments[i__25948__auto___35923]));

var G__35924 = (i__25948__auto___35923 + (1));
i__25948__auto___35923 = G__35924;
continue;
} else {
}
break;
}

var G__34920 = args34916.length;
switch (G__34920) {
case 0:
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args34916.slice((1)),(0),null));
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.option.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.option,null,null);
});

om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (opts__34724__auto__,children__34725__auto__){
return om_tools.dom.element.call(null,om.dom.option,opts__34724__auto__,children__34725__auto__);
});

om_tools.dom.option.cljs$lang$applyTo = (function (seq34917){
var G__34918 = cljs.core.first.call(null,seq34917);
var seq34917__$1 = cljs.core.next.call(null,seq34917);
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic(G__34918,seq34917__$1);
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

//# sourceMappingURL=dom.js.map?rel=1486291268565