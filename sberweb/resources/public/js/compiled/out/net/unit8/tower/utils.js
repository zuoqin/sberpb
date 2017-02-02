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
var iter__7031__auto__ = (function net$unit8$tower$utils$leaf_nodes_$_iter__23271(s__23272){
return (new cljs.core.LazySeq(null,(function (){
var s__23272__$1 = s__23272;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__23272__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__23280 = cljs.core.first.call(null,xs__5205__auto__);
var k = cljs.core.nth.call(null,vec__23280,(0),null);
var v = cljs.core.nth.call(null,vec__23280,(1),null);
var iterys__7027__auto__ = ((function (s__23272__$1,vec__23280,k,v,xs__5205__auto__,temp__4657__auto__){
return (function net$unit8$tower$utils$leaf_nodes_$_iter__23271_$_iter__23273(s__23274){
return (new cljs.core.LazySeq(null,((function (s__23272__$1,vec__23280,k,v,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__23274__$1 = s__23274;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__23274__$1);
if(temp__4657__auto____$1){
var s__23274__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23274__$2)){
var c__7029__auto__ = cljs.core.chunk_first.call(null,s__23274__$2);
var size__7030__auto__ = cljs.core.count.call(null,c__7029__auto__);
var b__23276 = cljs.core.chunk_buffer.call(null,size__7030__auto__);
if((function (){var i__23275 = (0);
while(true){
if((i__23275 < size__7030__auto__)){
var w = cljs.core._nth.call(null,c__7029__auto__,i__23275);
cljs.core.chunk_append.call(null,b__23276,cljs.core.cons.call(null,k,w));

var G__23283 = (i__23275 + (1));
i__23275 = G__23283;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23276),net$unit8$tower$utils$leaf_nodes_$_iter__23271_$_iter__23273.call(null,cljs.core.chunk_rest.call(null,s__23274__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23276),null);
}
} else {
var w = cljs.core.first.call(null,s__23274__$2);
return cljs.core.cons.call(null,cljs.core.cons.call(null,k,w),net$unit8$tower$utils$leaf_nodes_$_iter__23271_$_iter__23273.call(null,cljs.core.rest.call(null,s__23274__$2)));
}
} else {
return null;
}
break;
}
});})(s__23272__$1,vec__23280,k,v,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__23272__$1,vec__23280,k,v,xs__5205__auto__,temp__4657__auto__))
;
var fs__7028__auto__ = cljs.core.seq.call(null,iterys__7027__auto__.call(null,net$unit8$tower$utils$leaf_nodes.call(null,v)));
if(fs__7028__auto__){
return cljs.core.concat.call(null,fs__7028__auto__,net$unit8$tower$utils$leaf_nodes_$_iter__23271.call(null,cljs.core.rest.call(null,s__23272__$1)));
} else {
var G__23284 = cljs.core.rest.call(null,s__23272__$1);
s__23272__$1 = G__23284;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7031__auto__.call(null,m);
} else {
var x__7085__auto__ = (function (){var x__7085__auto__ = m;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7085__auto__);
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7085__auto__);
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
var args__7333__auto__ = [];
var len__7326__auto___23293 = arguments.length;
var i__7327__auto___23294 = (0);
while(true){
if((i__7327__auto___23294 < len__7326__auto___23293)){
args__7333__auto__.push((arguments[i__7327__auto___23294]));

var G__23295 = (i__7327__auto___23294 + (1));
i__7327__auto___23294 = G__23295;
continue;
} else {
}
break;
}

var argseq__7334__auto__ = ((((1) < args__7333__auto__.length))?(new cljs.core.IndexedSeq(args__7333__auto__.slice((1)),(0),null)):null);
return net.unit8.tower.utils.markdown.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7334__auto__);
});

net.unit8.tower.utils.markdown.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__23287){
var vec__23288 = p__23287;
var map__23291 = cljs.core.nth.call(null,vec__23288,(0),null);
var map__23291__$1 = ((((!((map__23291 == null)))?((((map__23291.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23291.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23291):map__23291);
var opts = map__23291__$1;
var inline_QMARK_ = cljs.core.get.call(null,map__23291__$1,new cljs.core.Keyword(null,"inline?","inline?",-1674483791));
var auto_links_QMARK_ = cljs.core.get.call(null,map__23291__$1,new cljs.core.Keyword(null,"auto-links?","auto-links?",-264376204));
var s__$1 = [cljs.core.str(s)].join('');
var s__$2 = ((cljs.core.not.call(null,auto_links_QMARK_))?s__$1:clojure.string.replace.call(null,s__$1,/https?:\/\/([\w\/\.-]+)/,"[$1]($0)"));
var s__$3 = ((cljs.core.not.call(null,inline_QMARK_))?s__$2:clojure.string.replace.call(null,s__$2,/(\r?\n|\r)+/," "));
var s__$4 = cljs.core.apply.call(null,net.unit8.tower.utils.md_to_html_string,s__$3,cljs.core.reduce.call(null,cljs.core.concat,opts));
var s__$5 = ((cljs.core.not.call(null,inline_QMARK_))?s__$4:clojure.string.replace.call(null,s__$4,/^<p>(.*?)<\/p>$/,"$1"));
return s__$5;
});

net.unit8.tower.utils.markdown.cljs$lang$maxFixedArity = (1);

net.unit8.tower.utils.markdown.cljs$lang$applyTo = (function (seq23285){
var G__23286 = cljs.core.first.call(null,seq23285);
var seq23285__$1 = cljs.core.next.call(null,seq23285);
return net.unit8.tower.utils.markdown.cljs$core$IFn$_invoke$arity$variadic(G__23286,seq23285__$1);
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
var args__7333__auto__ = [];
var len__7326__auto___23302 = arguments.length;
var i__7327__auto___23303 = (0);
while(true){
if((i__7327__auto___23303 < len__7326__auto___23302)){
args__7333__auto__.push((arguments[i__7327__auto___23303]));

var G__23304 = (i__7327__auto___23303 + (1));
i__7327__auto___23303 = G__23304;
continue;
} else {
}
break;
}

var argseq__7334__auto__ = ((((1) < args__7333__auto__.length))?(new cljs.core.IndexedSeq(args__7333__auto__.slice((1)),(0),null)):null);
return net.unit8.tower.utils.merge_keywords.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7334__auto__);
});

net.unit8.tower.utils.merge_keywords.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__23298){
var vec__23299 = p__23298;
var as_ns_QMARK_ = cljs.core.nth.call(null,vec__23299,(0),null);
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

net.unit8.tower.utils.merge_keywords.cljs$lang$applyTo = (function (seq23296){
var G__23297 = cljs.core.first.call(null,seq23296);
var seq23296__$1 = cljs.core.next.call(null,seq23296);
return net.unit8.tower.utils.merge_keywords.cljs$core$IFn$_invoke$arity$variadic(G__23297,seq23296__$1);
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
var args__7333__auto__ = [];
var len__7326__auto___23307 = arguments.length;
var i__7327__auto___23308 = (0);
while(true){
if((i__7327__auto___23308 < len__7326__auto___23307)){
args__7333__auto__.push((arguments[i__7327__auto___23308]));

var G__23309 = (i__7327__auto___23308 + (1));
i__7327__auto___23308 = G__23309;
continue;
} else {
}
break;
}

var argseq__7334__auto__ = ((((1) < args__7333__auto__.length))?(new cljs.core.IndexedSeq(args__7333__auto__.slice((1)),(0),null)):null);
return net.unit8.tower.utils.merge_deep_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7334__auto__);
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
var G__23310__i = 0, G__23310__a = new Array(arguments.length -  0);
while (G__23310__i < G__23310__a.length) {G__23310__a[G__23310__i] = arguments[G__23310__i + 0]; ++G__23310__i;}
  maps__$1 = new cljs.core.IndexedSeq(G__23310__a,0);
} 
return net$unit8$tower$utils$m__delegate.call(this,maps__$1);};
net$unit8$tower$utils$m.cljs$lang$maxFixedArity = 0;
net$unit8$tower$utils$m.cljs$lang$applyTo = (function (arglist__23311){
var maps__$1 = cljs.core.seq(arglist__23311);
return net$unit8$tower$utils$m__delegate(maps__$1);
});
net$unit8$tower$utils$m.cljs$core$IFn$_invoke$arity$variadic = net$unit8$tower$utils$m__delegate;
return net$unit8$tower$utils$m;
})()
,maps);
});

net.unit8.tower.utils.merge_deep_with.cljs$lang$maxFixedArity = (1);

net.unit8.tower.utils.merge_deep_with.cljs$lang$applyTo = (function (seq23305){
var G__23306 = cljs.core.first.call(null,seq23305);
var seq23305__$1 = cljs.core.next.call(null,seq23305);
return net.unit8.tower.utils.merge_deep_with.cljs$core$IFn$_invoke$arity$variadic(G__23306,seq23305__$1);
});

net.unit8.tower.utils.merge_deep = cljs.core.partial.call(null,net.unit8.tower.utils.merge_deep_with,(function (x,y){
return y;
}));

//# sourceMappingURL=utils.js.map?rel=1486035197826