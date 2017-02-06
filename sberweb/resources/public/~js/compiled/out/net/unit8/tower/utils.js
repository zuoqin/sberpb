// Compiled by ClojureScript 1.9.89 {}
goog.provide('net.unit8.tower.utils');
goog.require('cljs.core');
goog.require('clojure.string');
/**
 * Takes a nested map and squashes it into a sequence of paths to leaf nodes.
 *   Based on 'flatten-tree' by James Reaves on Google Groups.
 */
net.unit8.tower.utils.leaf_nodes = (function net$unit8$tower$utils$leaf_nodes(m){
if(cljs.core.map_QMARK_.call(null,m)){
var iter__25652__auto__ = (function net$unit8$tower$utils$leaf_nodes_$_iter__41544(s__41545){
return (new cljs.core.LazySeq(null,(function (){
var s__41545__$1 = s__41545;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__41545__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__41553 = cljs.core.first.call(null,xs__5205__auto__);
var k = cljs.core.nth.call(null,vec__41553,(0),null);
var v = cljs.core.nth.call(null,vec__41553,(1),null);
var iterys__25648__auto__ = ((function (s__41545__$1,vec__41553,k,v,xs__5205__auto__,temp__4657__auto__){
return (function net$unit8$tower$utils$leaf_nodes_$_iter__41544_$_iter__41546(s__41547){
return (new cljs.core.LazySeq(null,((function (s__41545__$1,vec__41553,k,v,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__41547__$1 = s__41547;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__41547__$1);
if(temp__4657__auto____$1){
var s__41547__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41547__$2)){
var c__25650__auto__ = cljs.core.chunk_first.call(null,s__41547__$2);
var size__25651__auto__ = cljs.core.count.call(null,c__25650__auto__);
var b__41549 = cljs.core.chunk_buffer.call(null,size__25651__auto__);
if((function (){var i__41548 = (0);
while(true){
if((i__41548 < size__25651__auto__)){
var w = cljs.core._nth.call(null,c__25650__auto__,i__41548);
cljs.core.chunk_append.call(null,b__41549,cljs.core.cons.call(null,k,w));

var G__41556 = (i__41548 + (1));
i__41548 = G__41556;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41549),net$unit8$tower$utils$leaf_nodes_$_iter__41544_$_iter__41546.call(null,cljs.core.chunk_rest.call(null,s__41547__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41549),null);
}
} else {
var w = cljs.core.first.call(null,s__41547__$2);
return cljs.core.cons.call(null,cljs.core.cons.call(null,k,w),net$unit8$tower$utils$leaf_nodes_$_iter__41544_$_iter__41546.call(null,cljs.core.rest.call(null,s__41547__$2)));
}
} else {
return null;
}
break;
}
});})(s__41545__$1,vec__41553,k,v,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__41545__$1,vec__41553,k,v,xs__5205__auto__,temp__4657__auto__))
;
var fs__25649__auto__ = cljs.core.seq.call(null,iterys__25648__auto__.call(null,net$unit8$tower$utils$leaf_nodes.call(null,v)));
if(fs__25649__auto__){
return cljs.core.concat.call(null,fs__25649__auto__,net$unit8$tower$utils$leaf_nodes_$_iter__41544.call(null,cljs.core.rest.call(null,s__41545__$1)));
} else {
var G__41557 = cljs.core.rest.call(null,s__41545__$1);
s__41545__$1 = G__41557;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25652__auto__.call(null,m);
} else {
var x__25706__auto__ = (function (){var x__25706__auto__ = m;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25706__auto__);
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25706__auto__);
}
});
net.unit8.tower.utils.html_breaks = (function net$unit8$tower$utils$html_breaks(s){
return clojure.string.replace.call(null,s,/(\r?\n|\r)/,"<br/>");
});
net.unit8.tower.utils.html_escape = (function net$unit8$tower$utils$html_escape(s){
return clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,[cljs.core.str(s)].join(''),"&","&amp;"),"<","&lt;"),">","&gt;"),"\"","&quot;");
});
net.unit8.tower.utils.md_to_html_string = (function net$unit8$tower$utils$md_to_html_string(s){
return s;
});
net.unit8.tower.utils.markdown = (function net$unit8$tower$utils$markdown(var_args){
var args__25954__auto__ = [];
var len__25947__auto___41566 = arguments.length;
var i__25948__auto___41567 = (0);
while(true){
if((i__25948__auto___41567 < len__25947__auto___41566)){
args__25954__auto__.push((arguments[i__25948__auto___41567]));

var G__41568 = (i__25948__auto___41567 + (1));
i__25948__auto___41567 = G__41568;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((1) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((1)),(0),null)):null);
return net.unit8.tower.utils.markdown.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25955__auto__);
});

net.unit8.tower.utils.markdown.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__41560){
var vec__41561 = p__41560;
var map__41564 = cljs.core.nth.call(null,vec__41561,(0),null);
var map__41564__$1 = ((((!((map__41564 == null)))?((((map__41564.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41564.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41564):map__41564);
var opts = map__41564__$1;
var inline_QMARK_ = cljs.core.get.call(null,map__41564__$1,new cljs.core.Keyword(null,"inline?","inline?",-1674483791));
var auto_links_QMARK_ = cljs.core.get.call(null,map__41564__$1,new cljs.core.Keyword(null,"auto-links?","auto-links?",-264376204));
var s__$1 = [cljs.core.str(s)].join('');
var s__$2 = ((cljs.core.not.call(null,auto_links_QMARK_))?s__$1:clojure.string.replace.call(null,s__$1,/https?:\/\/([\w\/\.-]+)/,"[$1]($0)"));
var s__$3 = ((cljs.core.not.call(null,inline_QMARK_))?s__$2:clojure.string.replace.call(null,s__$2,/(\r?\n|\r)+/," "));
var s__$4 = cljs.core.apply.call(null,net.unit8.tower.utils.md_to_html_string,s__$3,cljs.core.reduce.call(null,cljs.core.concat,opts));
var s__$5 = ((cljs.core.not.call(null,inline_QMARK_))?s__$4:clojure.string.replace.call(null,s__$4,/^<p>(.*?)<\/p>$/,"$1"));
return s__$5;
});

net.unit8.tower.utils.markdown.cljs$lang$maxFixedArity = (1);

net.unit8.tower.utils.markdown.cljs$lang$applyTo = (function (seq41558){
var G__41559 = cljs.core.first.call(null,seq41558);
var seq41558__$1 = cljs.core.next.call(null,seq41558);
return net.unit8.tower.utils.markdown.cljs$core$IFn$_invoke$arity$variadic(G__41559,seq41558__$1);
});

/**
 * Like `name` but includes namespace in string when present.
 */
net.unit8.tower.utils.fq_name = (function net$unit8$tower$utils$fq_name(x){
if(typeof x === 'string'){
return x;
} else {
var n = cljs.core.name.call(null,x);
var temp__4655__auto__ = cljs.core.namespace.call(null,x);
if(cljs.core.truth_(temp__4655__auto__)){
var ns = temp__4655__auto__;
return [cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(n)].join('');
} else {
return n;
}
}
});
net.unit8.tower.utils.explode_keyword = (function net$unit8$tower$utils$explode_keyword(k){
return clojure.string.split.call(null,net.unit8.tower.utils.fq_name.call(null,k),/[\.\/]/);
});
net.unit8.tower.utils.merge_keywords = (function net$unit8$tower$utils$merge_keywords(var_args){
var args__25954__auto__ = [];
var len__25947__auto___41575 = arguments.length;
var i__25948__auto___41576 = (0);
while(true){
if((i__25948__auto___41576 < len__25947__auto___41575)){
args__25954__auto__.push((arguments[i__25948__auto___41576]));

var G__41577 = (i__25948__auto___41576 + (1));
i__25948__auto___41576 = G__41577;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((1) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((1)),(0),null)):null);
return net.unit8.tower.utils.merge_keywords.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25955__auto__);
});

net.unit8.tower.utils.merge_keywords.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__41571){
var vec__41572 = p__41571;
var as_ns_QMARK_ = cljs.core.nth.call(null,vec__41572,(0),null);
var parts = cljs.core.reduce.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY,cljs.core.mapv.call(null,net.unit8.tower.utils.explode_keyword,cljs.core.filterv.call(null,cljs.core.identity,ks)));
if(cljs.core.empty_QMARK_.call(null,parts)){
return null;
} else {
if(cljs.core.truth_(as_ns_QMARK_)){
return cljs.core.keyword.call(null,clojure.string.join.call(null,".",parts));
} else {
var ppop = cljs.core.pop.call(null,parts);
return cljs.core.keyword.call(null,((cljs.core.empty_QMARK_.call(null,ppop))?null:clojure.string.join.call(null,".",ppop)),cljs.core.peek.call(null,parts));
}
}
});

net.unit8.tower.utils.merge_keywords.cljs$lang$maxFixedArity = (1);

net.unit8.tower.utils.merge_keywords.cljs$lang$applyTo = (function (seq41569){
var G__41570 = cljs.core.first.call(null,seq41569);
var seq41569__$1 = cljs.core.next.call(null,seq41569);
return net.unit8.tower.utils.merge_keywords.cljs$core$IFn$_invoke$arity$variadic(G__41570,seq41569__$1);
});

/**
 * Like `merge-with` but merges maps recursively, applying the given fn
 *   only when there's a non-map at a particular level.
 * 
 *   (merge-deep-with + {:a {:b {:c 1 :d {:x 1 :y 2}} :e 3} :f 4}
 *                  {:a {:b {:c 2 :d {:z 9} :z 3} :e 100}})
 *   => {:a {:b {:z 3, :c 3, :d {:z 9, :x 1, :y 2}}, :e 103}, :f 4}
 */
net.unit8.tower.utils.merge_deep_with = (function net$unit8$tower$utils$merge_deep_with(var_args){
var args__25954__auto__ = [];
var len__25947__auto___41580 = arguments.length;
var i__25948__auto___41581 = (0);
while(true){
if((i__25948__auto___41581 < len__25947__auto___41580)){
args__25954__auto__.push((arguments[i__25948__auto___41581]));

var G__41582 = (i__25948__auto___41581 + (1));
i__25948__auto___41581 = G__41582;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((1) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((1)),(0),null)):null);
return net.unit8.tower.utils.merge_deep_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25955__auto__);
});

net.unit8.tower.utils.merge_deep_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,maps){
return cljs.core.apply.call(null,(function() { 
var net$unit8$tower$utils$m__delegate = function (maps__$1){
if(cljs.core.every_QMARK_.call(null,cljs.core.map_QMARK_,maps__$1)){
return cljs.core.apply.call(null,cljs.core.merge_with,net$unit8$tower$utils$m,maps__$1);
} else {
return cljs.core.apply.call(null,f,maps__$1);
}
};
var net$unit8$tower$utils$m = function (var_args){
var maps__$1 = null;
if (arguments.length > 0) {
var G__41583__i = 0, G__41583__a = new Array(arguments.length -  0);
while (G__41583__i < G__41583__a.length) {G__41583__a[G__41583__i] = arguments[G__41583__i + 0]; ++G__41583__i;}
  maps__$1 = new cljs.core.IndexedSeq(G__41583__a,0);
} 
return net$unit8$tower$utils$m__delegate.call(this,maps__$1);};
net$unit8$tower$utils$m.cljs$lang$maxFixedArity = 0;
net$unit8$tower$utils$m.cljs$lang$applyTo = (function (arglist__41584){
var maps__$1 = cljs.core.seq(arglist__41584);
return net$unit8$tower$utils$m__delegate(maps__$1);
});
net$unit8$tower$utils$m.cljs$core$IFn$_invoke$arity$variadic = net$unit8$tower$utils$m__delegate;
return net$unit8$tower$utils$m;
})()
,maps);
});

net.unit8.tower.utils.merge_deep_with.cljs$lang$maxFixedArity = (1);

net.unit8.tower.utils.merge_deep_with.cljs$lang$applyTo = (function (seq41578){
var G__41579 = cljs.core.first.call(null,seq41578);
var seq41578__$1 = cljs.core.next.call(null,seq41578);
return net.unit8.tower.utils.merge_deep_with.cljs$core$IFn$_invoke$arity$variadic(G__41579,seq41578__$1);
});

net.unit8.tower.utils.merge_deep = cljs.core.partial.call(null,net.unit8.tower.utils.merge_deep_with,(function (x,y){
return y;
}));

//# sourceMappingURL=utils.js.map?rel=1486291277131