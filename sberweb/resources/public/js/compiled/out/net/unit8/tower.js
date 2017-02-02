// Compiled by ClojureScript 1.9.89 {}
goog.provide('net.unit8.tower');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('net.unit8.tower.utils');
goog.require('clojure.browser.net');
/**
 * Returns locale keyword for given Locale object or locale keyword.
 */
net.unit8.tower.locale_key = cljs.core.memoize.call(null,(function (p1__23405_SHARP_){
return cljs.core.keyword.call(null,clojure.string.replace.call(null,cljs.core.name.call(null,p1__23405_SHARP_),"_","-"));
}));
/**
 * Like clojure.core/format but takes a locale.
 */
net.unit8.tower.fmt_str = (function net$unit8$tower$fmt_str(var_args){
var args__7333__auto__ = [];
var len__7326__auto___23409 = arguments.length;
var i__7327__auto___23410 = (0);
while(true){
if((i__7327__auto___23410 < len__7326__auto___23409)){
args__7333__auto__.push((arguments[i__7327__auto___23410]));

var G__23411 = (i__7327__auto___23410 + (1));
i__7327__auto___23410 = G__23411;
continue;
} else {
}
break;
}

var argseq__7334__auto__ = ((((2) < args__7333__auto__.length))?(new cljs.core.IndexedSeq(args__7333__auto__.slice((2)),(0),null)):null);
return net.unit8.tower.fmt_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7334__auto__);
});

net.unit8.tower.fmt_str.cljs$core$IFn$_invoke$arity$variadic = (function (loc,fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

net.unit8.tower.fmt_str.cljs$lang$maxFixedArity = (2);

net.unit8.tower.fmt_str.cljs$lang$applyTo = (function (seq23406){
var G__23407 = cljs.core.first.call(null,seq23406);
var seq23406__$1 = cljs.core.next.call(null,seq23406);
var G__23408 = cljs.core.first.call(null,seq23406__$1);
var seq23406__$2 = cljs.core.next.call(null,seq23406__$1);
return net.unit8.tower.fmt_str.cljs$core$IFn$_invoke$arity$variadic(G__23407,G__23408,seq23406__$2);
});

/**
 * Global fallback dev-mode?.
 */
net.unit8.tower.dev_mode_QMARK_ = cljs.core.atom.call(null,true);
/**
 * Global fallback dev-mode?.
 */
net.unit8.tower.fallback_locale = cljs.core.atom.call(null,new cljs.core.Keyword(null,"en","en",88457073));
/**
 * Merges scope keywords: (scope :a.b :c/d :e) => :a.b.c.d/e
 */
net.unit8.tower.scoped = cljs.core.memoize.call(null,(function() { 
var G__23412__delegate = function (ks){
return net.unit8.tower.utils.merge_keywords.call(null,ks);
};
var G__23412 = function (var_args){
var ks = null;
if (arguments.length > 0) {
var G__23413__i = 0, G__23413__a = new Array(arguments.length -  0);
while (G__23413__i < G__23413__a.length) {G__23413__a[G__23413__i] = arguments[G__23413__i + 0]; ++G__23413__i;}
  ks = new cljs.core.IndexedSeq(G__23413__a,0);
} 
return G__23412__delegate.call(this,ks);};
G__23412.cljs$lang$maxFixedArity = 0;
G__23412.cljs$lang$applyTo = (function (arglist__23414){
var ks = cljs.core.seq(arglist__23414);
return G__23412__delegate(ks);
});
G__23412.cljs$core$IFn$_invoke$arity$variadic = G__23412__delegate;
return G__23412;
})()
);
net.unit8.tower._STAR_tscope_STAR_ = null;
net.unit8.tower.dict_cache = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * [:locale :ns1 ... :nsN unscoped-key<decorator> translation] =>
 *   {:ns1.<...>.nsN/unscoped-key {:locale (f translation decorator)}}
 */
net.unit8.tower.compile_dict_path = (function net$unit8$tower$compile_dict_path(raw_dict,path){
if((cljs.core.count.call(null,path) >= (3))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Malformed dictionary path: "),cljs.core.str(path)].join('')),cljs.core.str("\n"),cljs.core.str("(>= (count path) 3)")].join('')));
}

var vec__23422 = cljs.core.vec.call(null,path);
var loc = cljs.core.nth.call(null,vec__23422,(0),null);
var path__$1 = vec__23422;
var translation = cljs.core.peek.call(null,path__$1);
var scope_ks = cljs.core.subvec.call(null,path__$1,(1),(cljs.core.count.call(null,path__$1) - (2)));
var vec__23425 = cljs.core.mapv.call(null,cljs.core.keyword,cljs.core.re_find.call(null,/([^!\*_]+)([!\*_].*)*/,cljs.core.name.call(null,cljs.core.peek.call(null,cljs.core.pop.call(null,path__$1)))));
var _ = cljs.core.nth.call(null,vec__23425,(0),null);
var unscoped_k = cljs.core.nth.call(null,vec__23425,(1),null);
var decorator = cljs.core.nth.call(null,vec__23425,(2),null);
var translation__$1 = ((!((translation instanceof cljs.core.Keyword)))?translation:(function (){var target = cljs.core.get_in.call(null,raw_dict,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [loc], null),cljs.core.mapv.call(null,cljs.core.keyword,net.unit8.tower.utils.explode_keyword.call(null,translation))));
if((target instanceof cljs.core.Keyword)){
return null;
} else {
return target;
}
})());
var temp__4657__auto__ = (cljs.core.truth_(translation__$1)?(function (){var G__23428 = (((decorator instanceof cljs.core.Keyword))?decorator.fqn:null);
switch (G__23428) {
case "_comment":
return null;

break;
case "_note":
return null;

break;
case "_html":
return translation__$1;

break;
case "!":
return translation__$1;

break;
case "_md":
return net.unit8.tower.utils.markdown.call(null,net.unit8.tower.utils.html_escape.call(null,translation__$1),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inline?","inline?",-1674483791),false], null));

break;
case "*":
return net.unit8.tower.utils.markdown.call(null,net.unit8.tower.utils.html_escape.call(null,translation__$1),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inline?","inline?",-1674483791),false], null));

break;
default:
return net.unit8.tower.utils.markdown.call(null,net.unit8.tower.utils.html_escape.call(null,translation__$1),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inline?","inline?",-1674483791),true], null));

}
})():null);
if(cljs.core.truth_(temp__4657__auto__)){
var translation__$2 = temp__4657__auto__;
return cljs.core.PersistentArrayMap.fromArray([cljs.core.apply.call(null,net.unit8.tower.scoped,cljs.core.conj.call(null,scope_ks,unscoped_k)),cljs.core.PersistentArrayMap.fromArray([loc,translation__$2], true, false)], true, false);
} else {
return null;
}
});
/**
 * Merges each locale's translations over its parent locale translations.
 */
net.unit8.tower.inherit_parent_trs = (function net$unit8$tower$inherit_parent_trs(dict){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7031__auto__ = (function net$unit8$tower$inherit_parent_trs_$_iter__23435(s__23436){
return (new cljs.core.LazySeq(null,(function (){
var s__23436__$1 = s__23436;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__23436__$1);
if(temp__4657__auto__){
var s__23436__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23436__$2)){
var c__7029__auto__ = cljs.core.chunk_first.call(null,s__23436__$2);
var size__7030__auto__ = cljs.core.count.call(null,c__7029__auto__);
var b__23438 = cljs.core.chunk_buffer.call(null,size__7030__auto__);
if((function (){var i__23437 = (0);
while(true){
if((i__23437 < size__7030__auto__)){
var loc = cljs.core._nth.call(null,c__7029__auto__,i__23437);
cljs.core.chunk_append.call(null,b__23438,(function (){var loc_parts = clojure.string.split.call(null,cljs.core.name.call(null,loc),/[-_]/);
var loc_tree = cljs.core.mapv.call(null,((function (i__23437,loc_parts,loc,c__7029__auto__,size__7030__auto__,b__23438,s__23436__$2,temp__4657__auto__){
return (function (p1__23430_SHARP_){
return cljs.core.keyword.call(null,clojure.string.join.call(null,"-",p1__23430_SHARP_));
});})(i__23437,loc_parts,loc,c__7029__auto__,size__7030__auto__,b__23438,s__23436__$2,temp__4657__auto__))
,cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,cljs.core.butlast,loc_parts)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [loc,cljs.core.apply.call(null,net.unit8.tower.utils.merge_deep,cljs.core.map.call(null,dict,cljs.core.rseq.call(null,loc_tree)))], null);
})());

var G__23439 = (i__23437 + (1));
i__23437 = G__23439;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23438),net$unit8$tower$inherit_parent_trs_$_iter__23435.call(null,cljs.core.chunk_rest.call(null,s__23436__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23438),null);
}
} else {
var loc = cljs.core.first.call(null,s__23436__$2);
return cljs.core.cons.call(null,(function (){var loc_parts = clojure.string.split.call(null,cljs.core.name.call(null,loc),/[-_]/);
var loc_tree = cljs.core.mapv.call(null,((function (loc_parts,loc,s__23436__$2,temp__4657__auto__){
return (function (p1__23430_SHARP_){
return cljs.core.keyword.call(null,clojure.string.join.call(null,"-",p1__23430_SHARP_));
});})(loc_parts,loc,s__23436__$2,temp__4657__auto__))
,cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,cljs.core.butlast,loc_parts)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [loc,cljs.core.apply.call(null,net.unit8.tower.utils.merge_deep,cljs.core.map.call(null,dict,cljs.core.rseq.call(null,loc_tree)))], null);
})(),net$unit8$tower$inherit_parent_trs_$_iter__23435.call(null,cljs.core.rest.call(null,s__23436__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7031__auto__.call(null,cljs.core.keys.call(null,dict));
})());
});
net.unit8.tower.compile_dict_inner = (function net$unit8$tower$compile_dict_inner(key,raw_dict){
var dd = cljs.core.apply.call(null,cljs.core.merge_with,cljs.core.merge,cljs.core.map.call(null,cljs.core.partial.call(null,net.unit8.tower.compile_dict_path,raw_dict),net.unit8.tower.utils.leaf_nodes.call(null,net.unit8.tower.inherit_parent_trs.call(null,raw_dict))));
cljs.core.swap_BANG_.call(null,net.unit8.tower.dict_cache,cljs.core.assoc,key,dd);

return dd;
});
net.unit8.tower.compile_dict = (function net$unit8$tower$compile_dict(raw_dict,dev_mode_QMARK_){
var temp__4655__auto__ = (function (){var and__6239__auto__ = cljs.core.not.call(null,dev_mode_QMARK_);
if(and__6239__auto__){
return cljs.core.deref.call(null,net.unit8.tower.dict_cache).call(null,raw_dict);
} else {
return and__6239__auto__;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var dd = temp__4655__auto__;
return dd;
} else {
if(!(typeof raw_dict === 'string')){
return net.unit8.tower.compile_dict_inner.call(null,raw_dict,raw_dict);
} else {
var req = (new XMLHttpRequest());
req.open("GET",raw_dict,false);

req.send(null);

return net.unit8.tower.compile_dict_inner.call(null,raw_dict,cljs.core.js__GT_clj.call(null,JSON.parse(req.responseText),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
}
}
});
net.unit8.tower.translate = (function net$unit8$tower$translate(var_args){
var args__7333__auto__ = [];
var len__7326__auto___23453 = arguments.length;
var i__7327__auto___23454 = (0);
while(true){
if((i__7327__auto___23454 < len__7326__auto___23453)){
args__7333__auto__.push((arguments[i__7327__auto___23454]));

var G__23455 = (i__7327__auto___23454 + (1));
i__7327__auto___23454 = G__23455;
continue;
} else {
}
break;
}

var argseq__7334__auto__ = ((((4) < args__7333__auto__.length))?(new cljs.core.IndexedSeq(args__7333__auto__.slice((4)),(0),null)):null);
return net.unit8.tower.translate.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7334__auto__);
});

net.unit8.tower.translate.cljs$core$IFn$_invoke$arity$variadic = (function (loc,config,scope,k_or_ks,fmt_args){
var map__23451 = config;
var map__23451__$1 = ((((!((map__23451 == null)))?((((map__23451.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23451.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23451):map__23451);
var dev_mode_QMARK_ = cljs.core.get.call(null,map__23451__$1,new cljs.core.Keyword(null,"dev-mode?","dev-mode?",-392099091),cljs.core.deref.call(null,net.unit8.tower.dev_mode_QMARK_));
var dictionary = cljs.core.get.call(null,map__23451__$1,new cljs.core.Keyword(null,"dictionary","dictionary",-2013643865));
var fallback_locale = cljs.core.get.call(null,map__23451__$1,new cljs.core.Keyword(null,"fallback-locale","fallback-locale",-1300697761),(function (){var or__6251__auto__ = new cljs.core.Keyword(null,"default-locale","default-locale",-677515761).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__6251__auto__)){
return or__6251__auto__;
} else {
return cljs.core.deref.call(null,net.unit8.tower.fallback_locale);
}
})());
var log_missing_translation_fn = cljs.core.get.call(null,map__23451__$1,new cljs.core.Keyword(null,"log-missing-translation-fn","log-missing-translation-fn",-1222017068));
var root_scope = cljs.core.get.call(null,map__23451__$1,new cljs.core.Keyword(null,"root-scope","root-scope",322629014));
var fmt_fn = cljs.core.get.call(null,map__23451__$1,new cljs.core.Keyword(null,"fmt-fn","fmt-fn",1822593570),net.unit8.tower.fmt_str);
var scope__$1 = null;
var dict = net.unit8.tower.compile_dict.call(null,dictionary,dev_mode_QMARK_);
var ks = ((cljs.core.vector_QMARK_.call(null,k_or_ks))?k_or_ks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_or_ks], null));
var get_tr = ((function (map__23451,map__23451__$1,dev_mode_QMARK_,dictionary,fallback_locale,log_missing_translation_fn,root_scope,fmt_fn,scope__$1,dict,ks){
return (function (p1__23440_SHARP_,p2__23441_SHARP_,p3__23442_SHARP_){
return cljs.core.get_in.call(null,p1__23440_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [net.unit8.tower.scoped.call(null,scope__$1,p2__23441_SHARP_),net.unit8.tower.locale_key.call(null,p3__23442_SHARP_)], null));
});})(map__23451,map__23451__$1,dev_mode_QMARK_,dictionary,fallback_locale,log_missing_translation_fn,root_scope,fmt_fn,scope__$1,dict,ks))
;
var tr = (function (){var or__6251__auto__ = cljs.core.some.call(null,((function (map__23451,map__23451__$1,dev_mode_QMARK_,dictionary,fallback_locale,log_missing_translation_fn,root_scope,fmt_fn,scope__$1,dict,ks,get_tr){
return (function (p1__23443_SHARP_){
return get_tr.call(null,dict,p1__23443_SHARP_,loc);
});})(map__23451,map__23451__$1,dev_mode_QMARK_,dictionary,fallback_locale,log_missing_translation_fn,root_scope,fmt_fn,scope__$1,dict,ks,get_tr))
,cljs.core.take_while.call(null,cljs.core.keyword_QMARK_,ks));
if(cljs.core.truth_(or__6251__auto__)){
return or__6251__auto__;
} else {
var last_k = cljs.core.peek.call(null,ks);
if(!((last_k instanceof cljs.core.Keyword))){
return last_k;
} else {
var temp__4657__auto___23456 = log_missing_translation_fn;
if(cljs.core.truth_(temp__4657__auto___23456)){
var log_f_23457 = temp__4657__auto___23456;
log_f_23457.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"dev-mode?","dev-mode?",-392099091),dev_mode_QMARK_,new cljs.core.Keyword(null,"locale","locale",-2115712697),loc,new cljs.core.Keyword(null,"scope","scope",-439358418),scope__$1,new cljs.core.Keyword(null,"ks","ks",1900203942),ks], null));
} else {
}

var or__6251__auto____$1 = cljs.core.some.call(null,((function (last_k,or__6251__auto__,map__23451,map__23451__$1,dev_mode_QMARK_,dictionary,fallback_locale,log_missing_translation_fn,root_scope,fmt_fn,scope__$1,dict,ks,get_tr){
return (function (p1__23444_SHARP_){
return get_tr.call(null,dict,p1__23444_SHARP_,fallback_locale);
});})(last_k,or__6251__auto__,map__23451,map__23451__$1,dev_mode_QMARK_,dictionary,fallback_locale,log_missing_translation_fn,root_scope,fmt_fn,scope__$1,dict,ks,get_tr))
,ks);
if(cljs.core.truth_(or__6251__auto____$1)){
return or__6251__auto____$1;
} else {
var temp__4657__auto__ = (function (){var or__6251__auto____$2 = get_tr.call(null,dict,new cljs.core.Keyword(null,"missing","missing",362507769),loc);
if(cljs.core.truth_(or__6251__auto____$2)){
return or__6251__auto____$2;
} else {
return get_tr.call(null,dict,new cljs.core.Keyword(null,"missing","missing",362507769),fallback_locale);
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var pattern = temp__4657__auto__;
var str_STAR_ = ((function (pattern,temp__4657__auto__,or__6251__auto____$1,last_k,or__6251__auto__,map__23451,map__23451__$1,dev_mode_QMARK_,dictionary,fallback_locale,log_missing_translation_fn,root_scope,fmt_fn,scope__$1,dict,ks,get_tr){
return (function (p1__23445_SHARP_){
if((p1__23445_SHARP_ == null)){
return "nil";
} else {
return [cljs.core.str(p1__23445_SHARP_)].join('');
}
});})(pattern,temp__4657__auto__,or__6251__auto____$1,last_k,or__6251__auto__,map__23451,map__23451__$1,dev_mode_QMARK_,dictionary,fallback_locale,log_missing_translation_fn,root_scope,fmt_fn,scope__$1,dict,ks,get_tr))
;
return net.unit8.tower.fmt_str.call(null,loc,pattern,str_STAR_.call(null,loc),str_STAR_.call(null,scope__$1),str_STAR_.call(null,ks));
} else {
return null;
}
}
}
}
})();
if(cljs.core.not.call(null,fmt_args)){
return tr;
} else {
return cljs.core.apply.call(null,fmt_fn,loc,tr,fmt_args);
}
});

net.unit8.tower.translate.cljs$lang$maxFixedArity = (4);

net.unit8.tower.translate.cljs$lang$applyTo = (function (seq23446){
var G__23447 = cljs.core.first.call(null,seq23446);
var seq23446__$1 = cljs.core.next.call(null,seq23446);
var G__23448 = cljs.core.first.call(null,seq23446__$1);
var seq23446__$2 = cljs.core.next.call(null,seq23446__$1);
var G__23449 = cljs.core.first.call(null,seq23446__$2);
var seq23446__$3 = cljs.core.next.call(null,seq23446__$2);
var G__23450 = cljs.core.first.call(null,seq23446__$3);
var seq23446__$4 = cljs.core.next.call(null,seq23446__$3);
return net.unit8.tower.translate.cljs$core$IFn$_invoke$arity$variadic(G__23447,G__23448,G__23449,G__23450,seq23446__$4);
});

/**
 * Like `translate` but uses a thread-local translation scope.
 */
net.unit8.tower.t = (function net$unit8$tower$t(var_args){
var args__7333__auto__ = [];
var len__7326__auto___23462 = arguments.length;
var i__7327__auto___23463 = (0);
while(true){
if((i__7327__auto___23463 < len__7326__auto___23462)){
args__7333__auto__.push((arguments[i__7327__auto___23463]));

var G__23464 = (i__7327__auto___23463 + (1));
i__7327__auto___23463 = G__23464;
continue;
} else {
}
break;
}

var argseq__7334__auto__ = ((((3) < args__7333__auto__.length))?(new cljs.core.IndexedSeq(args__7333__auto__.slice((3)),(0),null)):null);
return net.unit8.tower.t.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7334__auto__);
});

net.unit8.tower.t.cljs$core$IFn$_invoke$arity$variadic = (function (loc,config,k_or_ks,fmt_str_args){
return cljs.core.apply.call(null,net.unit8.tower.translate,loc,config,new cljs.core.Keyword("net.unit8.tower","scope-var","net.unit8.tower/scope-var",258916991),k_or_ks,fmt_str_args);
});

net.unit8.tower.t.cljs$lang$maxFixedArity = (3);

net.unit8.tower.t.cljs$lang$applyTo = (function (seq23458){
var G__23459 = cljs.core.first.call(null,seq23458);
var seq23458__$1 = cljs.core.next.call(null,seq23458);
var G__23460 = cljs.core.first.call(null,seq23458__$1);
var seq23458__$2 = cljs.core.next.call(null,seq23458__$1);
var G__23461 = cljs.core.first.call(null,seq23458__$2);
var seq23458__$3 = cljs.core.next.call(null,seq23458__$2);
return net.unit8.tower.t.cljs$core$IFn$_invoke$arity$variadic(G__23459,G__23460,G__23461,seq23458__$3);
});


//# sourceMappingURL=tower.js.map?rel=1486035198013