// Compiled by ClojureScript 1.9.89 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__8025_8029 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__8026_8030 = null;
var count__8027_8031 = (0);
var i__8028_8032 = (0);
while(true){
if((i__8028_8032 < count__8027_8031)){
var k_8033 = cljs.core._nth.call(null,chunk__8026_8030,i__8028_8032);
var v_8034 = (b[k_8033]);
(a[k_8033] = v_8034);

var G__8035 = seq__8025_8029;
var G__8036 = chunk__8026_8030;
var G__8037 = count__8027_8031;
var G__8038 = (i__8028_8032 + (1));
seq__8025_8029 = G__8035;
chunk__8026_8030 = G__8036;
count__8027_8031 = G__8037;
i__8028_8032 = G__8038;
continue;
} else {
var temp__4657__auto___8039 = cljs.core.seq.call(null,seq__8025_8029);
if(temp__4657__auto___8039){
var seq__8025_8040__$1 = temp__4657__auto___8039;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8025_8040__$1)){
var c__7062__auto___8041 = cljs.core.chunk_first.call(null,seq__8025_8040__$1);
var G__8042 = cljs.core.chunk_rest.call(null,seq__8025_8040__$1);
var G__8043 = c__7062__auto___8041;
var G__8044 = cljs.core.count.call(null,c__7062__auto___8041);
var G__8045 = (0);
seq__8025_8029 = G__8042;
chunk__8026_8030 = G__8043;
count__8027_8031 = G__8044;
i__8028_8032 = G__8045;
continue;
} else {
var k_8046 = cljs.core.first.call(null,seq__8025_8040__$1);
var v_8047 = (b[k_8046]);
(a[k_8046] = v_8047);

var G__8048 = cljs.core.next.call(null,seq__8025_8040__$1);
var G__8049 = null;
var G__8050 = (0);
var G__8051 = (0);
seq__8025_8029 = G__8048;
chunk__8026_8030 = G__8049;
count__8027_8031 = G__8050;
i__8028_8032 = G__8051;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__6857__auto__,writer__6858__auto__,opt__6859__auto__){
return cljs.core._write.call(null,writer__6858__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__6857__auto__,writer__6858__auto__,opt__6859__auto__){
return cljs.core._write.call(null,writer__6858__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args8052 = [];
var len__7326__auto___8055 = arguments.length;
var i__7327__auto___8056 = (0);
while(true){
if((i__7327__auto___8056 < len__7326__auto___8055)){
args8052.push((arguments[i__7327__auto___8056]));

var G__8057 = (i__7327__auto___8056 + (1));
i__7327__auto___8056 = G__8057;
continue;
} else {
}
break;
}

var G__8054 = args8052.length;
switch (G__8054) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8052.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__8059 = (i + (2));
var G__8060 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__8059;
ret = G__8060;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;

/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__6857__auto__,writer__6858__auto__,opt__6859__auto__){
return cljs.core._write.call(null,writer__6858__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__6857__auto__,writer__6858__auto__,opt__6859__auto__){
return cljs.core._write.call(null,writer__6858__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__8061_8065 = cljs.core.seq.call(null,v);
var chunk__8062_8066 = null;
var count__8063_8067 = (0);
var i__8064_8068 = (0);
while(true){
if((i__8064_8068 < count__8063_8067)){
var x_8069 = cljs.core._nth.call(null,chunk__8062_8066,i__8064_8068);
ret.push(x_8069);

var G__8070 = seq__8061_8065;
var G__8071 = chunk__8062_8066;
var G__8072 = count__8063_8067;
var G__8073 = (i__8064_8068 + (1));
seq__8061_8065 = G__8070;
chunk__8062_8066 = G__8071;
count__8063_8067 = G__8072;
i__8064_8068 = G__8073;
continue;
} else {
var temp__4657__auto___8074 = cljs.core.seq.call(null,seq__8061_8065);
if(temp__4657__auto___8074){
var seq__8061_8075__$1 = temp__4657__auto___8074;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8061_8075__$1)){
var c__7062__auto___8076 = cljs.core.chunk_first.call(null,seq__8061_8075__$1);
var G__8077 = cljs.core.chunk_rest.call(null,seq__8061_8075__$1);
var G__8078 = c__7062__auto___8076;
var G__8079 = cljs.core.count.call(null,c__7062__auto___8076);
var G__8080 = (0);
seq__8061_8065 = G__8077;
chunk__8062_8066 = G__8078;
count__8063_8067 = G__8079;
i__8064_8068 = G__8080;
continue;
} else {
var x_8081 = cljs.core.first.call(null,seq__8061_8075__$1);
ret.push(x_8081);

var G__8082 = cljs.core.next.call(null,seq__8061_8075__$1);
var G__8083 = null;
var G__8084 = (0);
var G__8085 = (0);
seq__8061_8065 = G__8082;
chunk__8062_8066 = G__8083;
count__8063_8067 = G__8084;
i__8064_8068 = G__8085;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__6857__auto__,writer__6858__auto__,opt__6859__auto__){
return cljs.core._write.call(null,writer__6858__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__6857__auto__,writer__6858__auto__,opt__6859__auto__){
return cljs.core._write.call(null,writer__6858__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__8086_8090 = cljs.core.seq.call(null,v);
var chunk__8087_8091 = null;
var count__8088_8092 = (0);
var i__8089_8093 = (0);
while(true){
if((i__8089_8093 < count__8088_8092)){
var x_8094 = cljs.core._nth.call(null,chunk__8087_8091,i__8089_8093);
ret.push(x_8094);

var G__8095 = seq__8086_8090;
var G__8096 = chunk__8087_8091;
var G__8097 = count__8088_8092;
var G__8098 = (i__8089_8093 + (1));
seq__8086_8090 = G__8095;
chunk__8087_8091 = G__8096;
count__8088_8092 = G__8097;
i__8089_8093 = G__8098;
continue;
} else {
var temp__4657__auto___8099 = cljs.core.seq.call(null,seq__8086_8090);
if(temp__4657__auto___8099){
var seq__8086_8100__$1 = temp__4657__auto___8099;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8086_8100__$1)){
var c__7062__auto___8101 = cljs.core.chunk_first.call(null,seq__8086_8100__$1);
var G__8102 = cljs.core.chunk_rest.call(null,seq__8086_8100__$1);
var G__8103 = c__7062__auto___8101;
var G__8104 = cljs.core.count.call(null,c__7062__auto___8101);
var G__8105 = (0);
seq__8086_8090 = G__8102;
chunk__8087_8091 = G__8103;
count__8088_8092 = G__8104;
i__8089_8093 = G__8105;
continue;
} else {
var x_8106 = cljs.core.first.call(null,seq__8086_8100__$1);
ret.push(x_8106);

var G__8107 = cljs.core.next.call(null,seq__8086_8100__$1);
var G__8108 = null;
var G__8109 = (0);
var G__8110 = (0);
seq__8086_8090 = G__8107;
chunk__8087_8091 = G__8108;
count__8088_8092 = G__8109;
i__8089_8093 = G__8110;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__6857__auto__,writer__6858__auto__,opt__6859__auto__){
return cljs.core._write.call(null,writer__6858__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__8111_8115 = cljs.core.seq.call(null,v);
var chunk__8112_8116 = null;
var count__8113_8117 = (0);
var i__8114_8118 = (0);
while(true){
if((i__8114_8118 < count__8113_8117)){
var x_8119 = cljs.core._nth.call(null,chunk__8112_8116,i__8114_8118);
ret.push(x_8119);

var G__8120 = seq__8111_8115;
var G__8121 = chunk__8112_8116;
var G__8122 = count__8113_8117;
var G__8123 = (i__8114_8118 + (1));
seq__8111_8115 = G__8120;
chunk__8112_8116 = G__8121;
count__8113_8117 = G__8122;
i__8114_8118 = G__8123;
continue;
} else {
var temp__4657__auto___8124 = cljs.core.seq.call(null,seq__8111_8115);
if(temp__4657__auto___8124){
var seq__8111_8125__$1 = temp__4657__auto___8124;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8111_8125__$1)){
var c__7062__auto___8126 = cljs.core.chunk_first.call(null,seq__8111_8125__$1);
var G__8127 = cljs.core.chunk_rest.call(null,seq__8111_8125__$1);
var G__8128 = c__7062__auto___8126;
var G__8129 = cljs.core.count.call(null,c__7062__auto___8126);
var G__8130 = (0);
seq__8111_8115 = G__8127;
chunk__8112_8116 = G__8128;
count__8113_8117 = G__8129;
i__8114_8118 = G__8130;
continue;
} else {
var x_8131 = cljs.core.first.call(null,seq__8111_8125__$1);
ret.push(x_8131);

var G__8132 = cljs.core.next.call(null,seq__8111_8125__$1);
var G__8133 = null;
var G__8134 = (0);
var G__8135 = (0);
seq__8111_8115 = G__8132;
chunk__8112_8116 = G__8133;
count__8113_8117 = G__8134;
i__8114_8118 = G__8135;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__6857__auto__,writer__6858__auto__,opt__6859__auto__){
return cljs.core._write.call(null,writer__6858__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__6857__auto__,writer__6858__auto__,opt__6859__auto__){
return cljs.core._write.call(null,writer__6858__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args8136 = [];
var len__7326__auto___8151 = arguments.length;
var i__7327__auto___8152 = (0);
while(true){
if((i__7327__auto___8152 < len__7326__auto___8151)){
args8136.push((arguments[i__7327__auto___8152]));

var G__8153 = (i__7327__auto___8152 + (1));
i__7327__auto___8152 = G__8153;
continue;
} else {
}
break;
}

var G__8138 = args8136.length;
switch (G__8138) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8136.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__8139 = obj;
G__8139.push(kfn.call(null,k),vfn.call(null,v));

return G__8139;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x8140 = cljs.core.clone.call(null,handlers);
x8140.forEach = ((function (x8140,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__8141 = cljs.core.seq.call(null,coll);
var chunk__8142 = null;
var count__8143 = (0);
var i__8144 = (0);
while(true){
if((i__8144 < count__8143)){
var vec__8145 = cljs.core._nth.call(null,chunk__8142,i__8144);
var k = cljs.core.nth.call(null,vec__8145,(0),null);
var v = cljs.core.nth.call(null,vec__8145,(1),null);
f.call(null,v,k);

var G__8155 = seq__8141;
var G__8156 = chunk__8142;
var G__8157 = count__8143;
var G__8158 = (i__8144 + (1));
seq__8141 = G__8155;
chunk__8142 = G__8156;
count__8143 = G__8157;
i__8144 = G__8158;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__8141);
if(temp__4657__auto__){
var seq__8141__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8141__$1)){
var c__7062__auto__ = cljs.core.chunk_first.call(null,seq__8141__$1);
var G__8159 = cljs.core.chunk_rest.call(null,seq__8141__$1);
var G__8160 = c__7062__auto__;
var G__8161 = cljs.core.count.call(null,c__7062__auto__);
var G__8162 = (0);
seq__8141 = G__8159;
chunk__8142 = G__8160;
count__8143 = G__8161;
i__8144 = G__8162;
continue;
} else {
var vec__8148 = cljs.core.first.call(null,seq__8141__$1);
var k = cljs.core.nth.call(null,vec__8148,(0),null);
var v = cljs.core.nth.call(null,vec__8148,(1),null);
f.call(null,v,k);

var G__8163 = cljs.core.next.call(null,seq__8141__$1);
var G__8164 = null;
var G__8165 = (0);
var G__8166 = (0);
seq__8141 = G__8163;
chunk__8142 = G__8164;
count__8143 = G__8165;
i__8144 = G__8166;
continue;
}
} else {
return null;
}
}
break;
}
});})(x8140,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x8140;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;

/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args8167 = [];
var len__7326__auto___8173 = arguments.length;
var i__7327__auto___8174 = (0);
while(true){
if((i__7327__auto___8174 < len__7326__auto___8173)){
args8167.push((arguments[i__7327__auto___8174]));

var G__8175 = (i__7327__auto___8174 + (1));
i__7327__auto___8174 = G__8175;
continue;
} else {
}
break;
}

var G__8169 = args8167.length;
switch (G__8169) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8167.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit8170 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit8170 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta8171){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta8171 = meta8171;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit8170.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8172,meta8171__$1){
var self__ = this;
var _8172__$1 = this;
return (new cognitect.transit.t_cognitect$transit8170(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta8171__$1));
});

cognitect.transit.t_cognitect$transit8170.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8172){
var self__ = this;
var _8172__$1 = this;
return self__.meta8171;
});

cognitect.transit.t_cognitect$transit8170.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit8170.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit8170.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit8170.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit8170.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta8171","meta8171",-369654523,null)], null);
});

cognitect.transit.t_cognitect$transit8170.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit8170.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit8170";

cognitect.transit.t_cognitect$transit8170.cljs$lang$ctorPrWriter = (function (this__6857__auto__,writer__6858__auto__,opt__6859__auto__){
return cljs.core._write.call(null,writer__6858__auto__,"cognitect.transit/t_cognitect$transit8170");
});

cognitect.transit.__GT_t_cognitect$transit8170 = (function cognitect$transit$__GT_t_cognitect$transit8170(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta8171){
return (new cognitect.transit.t_cognitect$transit8170(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta8171));
});

}

return (new cognitect.transit.t_cognitect$transit8170(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;

/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__6251__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__6251__auto__)){
return or__6251__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map?rel=1486035189730