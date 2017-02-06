// Compiled by ClojureScript 1.9.89 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args36982 = [];
var len__25947__auto___36988 = arguments.length;
var i__25948__auto___36989 = (0);
while(true){
if((i__25948__auto___36989 < len__25947__auto___36988)){
args36982.push((arguments[i__25948__auto___36989]));

var G__36990 = (i__25948__auto___36989 + (1));
i__25948__auto___36989 = G__36990;
continue;
} else {
}
break;
}

var G__36984 = args36982.length;
switch (G__36984) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36982.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async36985 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36985 = (function (f,blockable,meta36986){
this.f = f;
this.blockable = blockable;
this.meta36986 = meta36986;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36985.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36987,meta36986__$1){
var self__ = this;
var _36987__$1 = this;
return (new cljs.core.async.t_cljs$core$async36985(self__.f,self__.blockable,meta36986__$1));
});

cljs.core.async.t_cljs$core$async36985.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36987){
var self__ = this;
var _36987__$1 = this;
return self__.meta36986;
});

cljs.core.async.t_cljs$core$async36985.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async36985.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async36985.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async36985.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async36985.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta36986","meta36986",299368686,null)], null);
});

cljs.core.async.t_cljs$core$async36985.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36985.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36985";

cljs.core.async.t_cljs$core$async36985.cljs$lang$ctorPrWriter = (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"cljs.core.async/t_cljs$core$async36985");
});

cljs.core.async.__GT_t_cljs$core$async36985 = (function cljs$core$async$__GT_t_cljs$core$async36985(f__$1,blockable__$1,meta36986){
return (new cljs.core.async.t_cljs$core$async36985(f__$1,blockable__$1,meta36986));
});

}

return (new cljs.core.async.t_cljs$core$async36985(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args36994 = [];
var len__25947__auto___36997 = arguments.length;
var i__25948__auto___36998 = (0);
while(true){
if((i__25948__auto___36998 < len__25947__auto___36997)){
args36994.push((arguments[i__25948__auto___36998]));

var G__36999 = (i__25948__auto___36998 + (1));
i__25948__auto___36998 = G__36999;
continue;
} else {
}
break;
}

var G__36996 = args36994.length;
switch (G__36996) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36994.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args37001 = [];
var len__25947__auto___37004 = arguments.length;
var i__25948__auto___37005 = (0);
while(true){
if((i__25948__auto___37005 < len__25947__auto___37004)){
args37001.push((arguments[i__25948__auto___37005]));

var G__37006 = (i__25948__auto___37005 + (1));
i__25948__auto___37005 = G__37006;
continue;
} else {
}
break;
}

var G__37003 = args37001.length;
switch (G__37003) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37001.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args37008 = [];
var len__25947__auto___37011 = arguments.length;
var i__25948__auto___37012 = (0);
while(true){
if((i__25948__auto___37012 < len__25947__auto___37011)){
args37008.push((arguments[i__25948__auto___37012]));

var G__37013 = (i__25948__auto___37012 + (1));
i__25948__auto___37012 = G__37013;
continue;
} else {
}
break;
}

var G__37010 = args37008.length;
switch (G__37010) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37008.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_37015 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_37015);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_37015,ret){
return (function (){
return fn1.call(null,val_37015);
});})(val_37015,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args37016 = [];
var len__25947__auto___37019 = arguments.length;
var i__25948__auto___37020 = (0);
while(true){
if((i__25948__auto___37020 < len__25947__auto___37019)){
args37016.push((arguments[i__25948__auto___37020]));

var G__37021 = (i__25948__auto___37020 + (1));
i__25948__auto___37020 = G__37021;
continue;
} else {
}
break;
}

var G__37018 = args37016.length;
switch (G__37018) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37016.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__25787__auto___37023 = n;
var x_37024 = (0);
while(true){
if((x_37024 < n__25787__auto___37023)){
(a[x_37024] = (0));

var G__37025 = (x_37024 + (1));
x_37024 = G__37025;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__37026 = (i + (1));
i = G__37026;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async37030 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37030 = (function (alt_flag,flag,meta37031){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta37031 = meta37031;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37030.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_37032,meta37031__$1){
var self__ = this;
var _37032__$1 = this;
return (new cljs.core.async.t_cljs$core$async37030(self__.alt_flag,self__.flag,meta37031__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async37030.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_37032){
var self__ = this;
var _37032__$1 = this;
return self__.meta37031;
});})(flag))
;

cljs.core.async.t_cljs$core$async37030.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async37030.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async37030.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async37030.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async37030.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta37031","meta37031",2123064991,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async37030.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37030.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37030";

cljs.core.async.t_cljs$core$async37030.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"cljs.core.async/t_cljs$core$async37030");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async37030 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async37030(alt_flag__$1,flag__$1,meta37031){
return (new cljs.core.async.t_cljs$core$async37030(alt_flag__$1,flag__$1,meta37031));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async37030(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async37036 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37036 = (function (alt_handler,flag,cb,meta37037){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta37037 = meta37037;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37036.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37038,meta37037__$1){
var self__ = this;
var _37038__$1 = this;
return (new cljs.core.async.t_cljs$core$async37036(self__.alt_handler,self__.flag,self__.cb,meta37037__$1));
});

cljs.core.async.t_cljs$core$async37036.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37038){
var self__ = this;
var _37038__$1 = this;
return self__.meta37037;
});

cljs.core.async.t_cljs$core$async37036.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async37036.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async37036.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async37036.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async37036.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta37037","meta37037",-1286781178,null)], null);
});

cljs.core.async.t_cljs$core$async37036.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37036.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37036";

cljs.core.async.t_cljs$core$async37036.cljs$lang$ctorPrWriter = (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"cljs.core.async/t_cljs$core$async37036");
});

cljs.core.async.__GT_t_cljs$core$async37036 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async37036(alt_handler__$1,flag__$1,cb__$1,meta37037){
return (new cljs.core.async.t_cljs$core$async37036(alt_handler__$1,flag__$1,cb__$1,meta37037));
});

}

return (new cljs.core.async.t_cljs$core$async37036(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37039_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37039_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37040_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37040_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__24872__auto__ = wport;
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return port;
}
})()], null));
} else {
var G__37041 = (i + (1));
i = G__37041;
continue;
}
} else {
return null;
}
break;
}
})();
var or__24872__auto__ = ret;
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__24860__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__24860__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__24860__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__25954__auto__ = [];
var len__25947__auto___37047 = arguments.length;
var i__25948__auto___37048 = (0);
while(true){
if((i__25948__auto___37048 < len__25947__auto___37047)){
args__25954__auto__.push((arguments[i__25948__auto___37048]));

var G__37049 = (i__25948__auto___37048 + (1));
i__25948__auto___37048 = G__37049;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((1) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25955__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__37044){
var map__37045 = p__37044;
var map__37045__$1 = ((((!((map__37045 == null)))?((((map__37045.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37045.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37045):map__37045);
var opts = map__37045__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq37042){
var G__37043 = cljs.core.first.call(null,seq37042);
var seq37042__$1 = cljs.core.next.call(null,seq37042);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37043,seq37042__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args37050 = [];
var len__25947__auto___37100 = arguments.length;
var i__25948__auto___37101 = (0);
while(true){
if((i__25948__auto___37101 < len__25947__auto___37100)){
args37050.push((arguments[i__25948__auto___37101]));

var G__37102 = (i__25948__auto___37101 + (1));
i__25948__auto___37101 = G__37102;
continue;
} else {
}
break;
}

var G__37052 = args37050.length;
switch (G__37052) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37050.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__36937__auto___37104 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36937__auto___37104){
return (function (){
var f__36938__auto__ = (function (){var switch__36825__auto__ = ((function (c__36937__auto___37104){
return (function (state_37076){
var state_val_37077 = (state_37076[(1)]);
if((state_val_37077 === (7))){
var inst_37072 = (state_37076[(2)]);
var state_37076__$1 = state_37076;
var statearr_37078_37105 = state_37076__$1;
(statearr_37078_37105[(2)] = inst_37072);

(statearr_37078_37105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37077 === (1))){
var state_37076__$1 = state_37076;
var statearr_37079_37106 = state_37076__$1;
(statearr_37079_37106[(2)] = null);

(statearr_37079_37106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37077 === (4))){
var inst_37055 = (state_37076[(7)]);
var inst_37055__$1 = (state_37076[(2)]);
var inst_37056 = (inst_37055__$1 == null);
var state_37076__$1 = (function (){var statearr_37080 = state_37076;
(statearr_37080[(7)] = inst_37055__$1);

return statearr_37080;
})();
if(cljs.core.truth_(inst_37056)){
var statearr_37081_37107 = state_37076__$1;
(statearr_37081_37107[(1)] = (5));

} else {
var statearr_37082_37108 = state_37076__$1;
(statearr_37082_37108[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37077 === (13))){
var state_37076__$1 = state_37076;
var statearr_37083_37109 = state_37076__$1;
(statearr_37083_37109[(2)] = null);

(statearr_37083_37109[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37077 === (6))){
var inst_37055 = (state_37076[(7)]);
var state_37076__$1 = state_37076;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37076__$1,(11),to,inst_37055);
} else {
if((state_val_37077 === (3))){
var inst_37074 = (state_37076[(2)]);
var state_37076__$1 = state_37076;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37076__$1,inst_37074);
} else {
if((state_val_37077 === (12))){
var state_37076__$1 = state_37076;
var statearr_37084_37110 = state_37076__$1;
(statearr_37084_37110[(2)] = null);

(statearr_37084_37110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37077 === (2))){
var state_37076__$1 = state_37076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37076__$1,(4),from);
} else {
if((state_val_37077 === (11))){
var inst_37065 = (state_37076[(2)]);
var state_37076__$1 = state_37076;
if(cljs.core.truth_(inst_37065)){
var statearr_37085_37111 = state_37076__$1;
(statearr_37085_37111[(1)] = (12));

} else {
var statearr_37086_37112 = state_37076__$1;
(statearr_37086_37112[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37077 === (9))){
var state_37076__$1 = state_37076;
var statearr_37087_37113 = state_37076__$1;
(statearr_37087_37113[(2)] = null);

(statearr_37087_37113[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37077 === (5))){
var state_37076__$1 = state_37076;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37088_37114 = state_37076__$1;
(statearr_37088_37114[(1)] = (8));

} else {
var statearr_37089_37115 = state_37076__$1;
(statearr_37089_37115[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37077 === (14))){
var inst_37070 = (state_37076[(2)]);
var state_37076__$1 = state_37076;
var statearr_37090_37116 = state_37076__$1;
(statearr_37090_37116[(2)] = inst_37070);

(statearr_37090_37116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37077 === (10))){
var inst_37062 = (state_37076[(2)]);
var state_37076__$1 = state_37076;
var statearr_37091_37117 = state_37076__$1;
(statearr_37091_37117[(2)] = inst_37062);

(statearr_37091_37117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37077 === (8))){
var inst_37059 = cljs.core.async.close_BANG_.call(null,to);
var state_37076__$1 = state_37076;
var statearr_37092_37118 = state_37076__$1;
(statearr_37092_37118[(2)] = inst_37059);

(statearr_37092_37118[(1)] = (10));


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
});})(c__36937__auto___37104))
;
return ((function (switch__36825__auto__,c__36937__auto___37104){
return (function() {
var cljs$core$async$state_machine__36826__auto__ = null;
var cljs$core$async$state_machine__36826__auto____0 = (function (){
var statearr_37096 = [null,null,null,null,null,null,null,null];
(statearr_37096[(0)] = cljs$core$async$state_machine__36826__auto__);

(statearr_37096[(1)] = (1));

return statearr_37096;
});
var cljs$core$async$state_machine__36826__auto____1 = (function (state_37076){
while(true){
var ret_value__36827__auto__ = (function (){try{while(true){
var result__36828__auto__ = switch__36825__auto__.call(null,state_37076);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36828__auto__;
}
break;
}
}catch (e37097){if((e37097 instanceof Object)){
var ex__36829__auto__ = e37097;
var statearr_37098_37119 = state_37076;
(statearr_37098_37119[(5)] = ex__36829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37076);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37097;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37120 = state_37076;
state_37076 = G__37120;
continue;
} else {
return ret_value__36827__auto__;
}
break;
}
});
cljs$core$async$state_machine__36826__auto__ = function(state_37076){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36826__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36826__auto____1.call(this,state_37076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36826__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36826__auto____0;
cljs$core$async$state_machine__36826__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36826__auto____1;
return cljs$core$async$state_machine__36826__auto__;
})()
;})(switch__36825__auto__,c__36937__auto___37104))
})();
var state__36939__auto__ = (function (){var statearr_37099 = f__36938__auto__.call(null);
(statearr_37099[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36937__auto___37104);

return statearr_37099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36939__auto__);
});})(c__36937__auto___37104))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__37308){
var vec__37309 = p__37308;
var v = cljs.core.nth.call(null,vec__37309,(0),null);
var p = cljs.core.nth.call(null,vec__37309,(1),null);
var job = vec__37309;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__36937__auto___37495 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36937__auto___37495,res,vec__37309,v,p,job,jobs,results){
return (function (){
var f__36938__auto__ = (function (){var switch__36825__auto__ = ((function (c__36937__auto___37495,res,vec__37309,v,p,job,jobs,results){
return (function (state_37316){
var state_val_37317 = (state_37316[(1)]);
if((state_val_37317 === (1))){
var state_37316__$1 = state_37316;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37316__$1,(2),res,v);
} else {
if((state_val_37317 === (2))){
var inst_37313 = (state_37316[(2)]);
var inst_37314 = cljs.core.async.close_BANG_.call(null,res);
var state_37316__$1 = (function (){var statearr_37318 = state_37316;
(statearr_37318[(7)] = inst_37313);

return statearr_37318;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37316__$1,inst_37314);
} else {
return null;
}
}
});})(c__36937__auto___37495,res,vec__37309,v,p,job,jobs,results))
;
return ((function (switch__36825__auto__,c__36937__auto___37495,res,vec__37309,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36826__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36826__auto____0 = (function (){
var statearr_37322 = [null,null,null,null,null,null,null,null];
(statearr_37322[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36826__auto__);

(statearr_37322[(1)] = (1));

return statearr_37322;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36826__auto____1 = (function (state_37316){
while(true){
var ret_value__36827__auto__ = (function (){try{while(true){
var result__36828__auto__ = switch__36825__auto__.call(null,state_37316);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36828__auto__;
}
break;
}
}catch (e37323){if((e37323 instanceof Object)){
var ex__36829__auto__ = e37323;
var statearr_37324_37496 = state_37316;
(statearr_37324_37496[(5)] = ex__36829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37316);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37323;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37497 = state_37316;
state_37316 = G__37497;
continue;
} else {
return ret_value__36827__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36826__auto__ = function(state_37316){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36826__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36826__auto____1.call(this,state_37316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36826__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36826__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36826__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36826__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36826__auto__;
})()
;})(switch__36825__auto__,c__36937__auto___37495,res,vec__37309,v,p,job,jobs,results))
})();
var state__36939__auto__ = (function (){var statearr_37325 = f__36938__auto__.call(null);
(statearr_37325[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36937__auto___37495);

return statearr_37325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36939__auto__);
});})(c__36937__auto___37495,res,vec__37309,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__37326){
var vec__37327 = p__37326;
var v = cljs.core.nth.call(null,vec__37327,(0),null);
var p = cljs.core.nth.call(null,vec__37327,(1),null);
var job = vec__37327;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__25787__auto___37498 = n;
var __37499 = (0);
while(true){
if((__37499 < n__25787__auto___37498)){
var G__37330_37500 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__37330_37500) {
case "compute":
var c__36937__auto___37502 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__37499,c__36937__auto___37502,G__37330_37500,n__25787__auto___37498,jobs,results,process,async){
return (function (){
var f__36938__auto__ = (function (){var switch__36825__auto__ = ((function (__37499,c__36937__auto___37502,G__37330_37500,n__25787__auto___37498,jobs,results,process,async){
return (function (state_37343){
var state_val_37344 = (state_37343[(1)]);
if((state_val_37344 === (1))){
var state_37343__$1 = state_37343;
var statearr_37345_37503 = state_37343__$1;
(statearr_37345_37503[(2)] = null);

(statearr_37345_37503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37344 === (2))){
var state_37343__$1 = state_37343;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37343__$1,(4),jobs);
} else {
if((state_val_37344 === (3))){
var inst_37341 = (state_37343[(2)]);
var state_37343__$1 = state_37343;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37343__$1,inst_37341);
} else {
if((state_val_37344 === (4))){
var inst_37333 = (state_37343[(2)]);
var inst_37334 = process.call(null,inst_37333);
var state_37343__$1 = state_37343;
if(cljs.core.truth_(inst_37334)){
var statearr_37346_37504 = state_37343__$1;
(statearr_37346_37504[(1)] = (5));

} else {
var statearr_37347_37505 = state_37343__$1;
(statearr_37347_37505[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37344 === (5))){
var state_37343__$1 = state_37343;
var statearr_37348_37506 = state_37343__$1;
(statearr_37348_37506[(2)] = null);

(statearr_37348_37506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37344 === (6))){
var state_37343__$1 = state_37343;
var statearr_37349_37507 = state_37343__$1;
(statearr_37349_37507[(2)] = null);

(statearr_37349_37507[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37344 === (7))){
var inst_37339 = (state_37343[(2)]);
var state_37343__$1 = state_37343;
var statearr_37350_37508 = state_37343__$1;
(statearr_37350_37508[(2)] = inst_37339);

(statearr_37350_37508[(1)] = (3));


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
});})(__37499,c__36937__auto___37502,G__37330_37500,n__25787__auto___37498,jobs,results,process,async))
;
return ((function (__37499,switch__36825__auto__,c__36937__auto___37502,G__37330_37500,n__25787__auto___37498,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36826__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36826__auto____0 = (function (){
var statearr_37354 = [null,null,null,null,null,null,null];
(statearr_37354[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36826__auto__);

(statearr_37354[(1)] = (1));

return statearr_37354;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36826__auto____1 = (function (state_37343){
while(true){
var ret_value__36827__auto__ = (function (){try{while(true){
var result__36828__auto__ = switch__36825__auto__.call(null,state_37343);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36828__auto__;
}
break;
}
}catch (e37355){if((e37355 instanceof Object)){
var ex__36829__auto__ = e37355;
var statearr_37356_37509 = state_37343;
(statearr_37356_37509[(5)] = ex__36829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37343);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37355;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37510 = state_37343;
state_37343 = G__37510;
continue;
} else {
return ret_value__36827__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36826__auto__ = function(state_37343){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36826__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36826__auto____1.call(this,state_37343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36826__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36826__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36826__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36826__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36826__auto__;
})()
;})(__37499,switch__36825__auto__,c__36937__auto___37502,G__37330_37500,n__25787__auto___37498,jobs,results,process,async))
})();
var state__36939__auto__ = (function (){var statearr_37357 = f__36938__auto__.call(null);
(statearr_37357[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36937__auto___37502);

return statearr_37357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36939__auto__);
});})(__37499,c__36937__auto___37502,G__37330_37500,n__25787__auto___37498,jobs,results,process,async))
);


break;
case "async":
var c__36937__auto___37511 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__37499,c__36937__auto___37511,G__37330_37500,n__25787__auto___37498,jobs,results,process,async){
return (function (){
var f__36938__auto__ = (function (){var switch__36825__auto__ = ((function (__37499,c__36937__auto___37511,G__37330_37500,n__25787__auto___37498,jobs,results,process,async){
return (function (state_37370){
var state_val_37371 = (state_37370[(1)]);
if((state_val_37371 === (1))){
var state_37370__$1 = state_37370;
var statearr_37372_37512 = state_37370__$1;
(statearr_37372_37512[(2)] = null);

(statearr_37372_37512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37371 === (2))){
var state_37370__$1 = state_37370;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37370__$1,(4),jobs);
} else {
if((state_val_37371 === (3))){
var inst_37368 = (state_37370[(2)]);
var state_37370__$1 = state_37370;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37370__$1,inst_37368);
} else {
if((state_val_37371 === (4))){
var inst_37360 = (state_37370[(2)]);
var inst_37361 = async.call(null,inst_37360);
var state_37370__$1 = state_37370;
if(cljs.core.truth_(inst_37361)){
var statearr_37373_37513 = state_37370__$1;
(statearr_37373_37513[(1)] = (5));

} else {
var statearr_37374_37514 = state_37370__$1;
(statearr_37374_37514[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37371 === (5))){
var state_37370__$1 = state_37370;
var statearr_37375_37515 = state_37370__$1;
(statearr_37375_37515[(2)] = null);

(statearr_37375_37515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37371 === (6))){
var state_37370__$1 = state_37370;
var statearr_37376_37516 = state_37370__$1;
(statearr_37376_37516[(2)] = null);

(statearr_37376_37516[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37371 === (7))){
var inst_37366 = (state_37370[(2)]);
var state_37370__$1 = state_37370;
var statearr_37377_37517 = state_37370__$1;
(statearr_37377_37517[(2)] = inst_37366);

(statearr_37377_37517[(1)] = (3));


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
});})(__37499,c__36937__auto___37511,G__37330_37500,n__25787__auto___37498,jobs,results,process,async))
;
return ((function (__37499,switch__36825__auto__,c__36937__auto___37511,G__37330_37500,n__25787__auto___37498,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36826__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36826__auto____0 = (function (){
var statearr_37381 = [null,null,null,null,null,null,null];
(statearr_37381[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36826__auto__);

(statearr_37381[(1)] = (1));

return statearr_37381;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36826__auto____1 = (function (state_37370){
while(true){
var ret_value__36827__auto__ = (function (){try{while(true){
var result__36828__auto__ = switch__36825__auto__.call(null,state_37370);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36828__auto__;
}
break;
}
}catch (e37382){if((e37382 instanceof Object)){
var ex__36829__auto__ = e37382;
var statearr_37383_37518 = state_37370;
(statearr_37383_37518[(5)] = ex__36829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37370);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37382;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37519 = state_37370;
state_37370 = G__37519;
continue;
} else {
return ret_value__36827__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36826__auto__ = function(state_37370){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36826__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36826__auto____1.call(this,state_37370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36826__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36826__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36826__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36826__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36826__auto__;
})()
;})(__37499,switch__36825__auto__,c__36937__auto___37511,G__37330_37500,n__25787__auto___37498,jobs,results,process,async))
})();
var state__36939__auto__ = (function (){var statearr_37384 = f__36938__auto__.call(null);
(statearr_37384[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36937__auto___37511);

return statearr_37384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36939__auto__);
});})(__37499,c__36937__auto___37511,G__37330_37500,n__25787__auto___37498,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__37520 = (__37499 + (1));
__37499 = G__37520;
continue;
} else {
}
break;
}

var c__36937__auto___37521 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36937__auto___37521,jobs,results,process,async){
return (function (){
var f__36938__auto__ = (function (){var switch__36825__auto__ = ((function (c__36937__auto___37521,jobs,results,process,async){
return (function (state_37406){
var state_val_37407 = (state_37406[(1)]);
if((state_val_37407 === (1))){
var state_37406__$1 = state_37406;
var statearr_37408_37522 = state_37406__$1;
(statearr_37408_37522[(2)] = null);

(statearr_37408_37522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37407 === (2))){
var state_37406__$1 = state_37406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37406__$1,(4),from);
} else {
if((state_val_37407 === (3))){
var inst_37404 = (state_37406[(2)]);
var state_37406__$1 = state_37406;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37406__$1,inst_37404);
} else {
if((state_val_37407 === (4))){
var inst_37387 = (state_37406[(7)]);
var inst_37387__$1 = (state_37406[(2)]);
var inst_37388 = (inst_37387__$1 == null);
var state_37406__$1 = (function (){var statearr_37409 = state_37406;
(statearr_37409[(7)] = inst_37387__$1);

return statearr_37409;
})();
if(cljs.core.truth_(inst_37388)){
var statearr_37410_37523 = state_37406__$1;
(statearr_37410_37523[(1)] = (5));

} else {
var statearr_37411_37524 = state_37406__$1;
(statearr_37411_37524[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37407 === (5))){
var inst_37390 = cljs.core.async.close_BANG_.call(null,jobs);
var state_37406__$1 = state_37406;
var statearr_37412_37525 = state_37406__$1;
(statearr_37412_37525[(2)] = inst_37390);

(statearr_37412_37525[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37407 === (6))){
var inst_37387 = (state_37406[(7)]);
var inst_37392 = (state_37406[(8)]);
var inst_37392__$1 = cljs.core.async.chan.call(null,(1));
var inst_37393 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37394 = [inst_37387,inst_37392__$1];
var inst_37395 = (new cljs.core.PersistentVector(null,2,(5),inst_37393,inst_37394,null));
var state_37406__$1 = (function (){var statearr_37413 = state_37406;
(statearr_37413[(8)] = inst_37392__$1);

return statearr_37413;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37406__$1,(8),jobs,inst_37395);
} else {
if((state_val_37407 === (7))){
var inst_37402 = (state_37406[(2)]);
var state_37406__$1 = state_37406;
var statearr_37414_37526 = state_37406__$1;
(statearr_37414_37526[(2)] = inst_37402);

(statearr_37414_37526[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37407 === (8))){
var inst_37392 = (state_37406[(8)]);
var inst_37397 = (state_37406[(2)]);
var state_37406__$1 = (function (){var statearr_37415 = state_37406;
(statearr_37415[(9)] = inst_37397);

return statearr_37415;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37406__$1,(9),results,inst_37392);
} else {
if((state_val_37407 === (9))){
var inst_37399 = (state_37406[(2)]);
var state_37406__$1 = (function (){var statearr_37416 = state_37406;
(statearr_37416[(10)] = inst_37399);

return statearr_37416;
})();
var statearr_37417_37527 = state_37406__$1;
(statearr_37417_37527[(2)] = null);

(statearr_37417_37527[(1)] = (2));


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
});})(c__36937__auto___37521,jobs,results,process,async))
;
return ((function (switch__36825__auto__,c__36937__auto___37521,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36826__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36826__auto____0 = (function (){
var statearr_37421 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37421[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36826__auto__);

(statearr_37421[(1)] = (1));

return statearr_37421;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36826__auto____1 = (function (state_37406){
while(true){
var ret_value__36827__auto__ = (function (){try{while(true){
var result__36828__auto__ = switch__36825__auto__.call(null,state_37406);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36828__auto__;
}
break;
}
}catch (e37422){if((e37422 instanceof Object)){
var ex__36829__auto__ = e37422;
var statearr_37423_37528 = state_37406;
(statearr_37423_37528[(5)] = ex__36829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37406);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37422;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37529 = state_37406;
state_37406 = G__37529;
continue;
} else {
return ret_value__36827__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36826__auto__ = function(state_37406){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36826__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36826__auto____1.call(this,state_37406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36826__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36826__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36826__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36826__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36826__auto__;
})()
;})(switch__36825__auto__,c__36937__auto___37521,jobs,results,process,async))
})();
var state__36939__auto__ = (function (){var statearr_37424 = f__36938__auto__.call(null);
(statearr_37424[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36937__auto___37521);

return statearr_37424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36939__auto__);
});})(c__36937__auto___37521,jobs,results,process,async))
);


var c__36937__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36937__auto__,jobs,results,process,async){
return (function (){
var f__36938__auto__ = (function (){var switch__36825__auto__ = ((function (c__36937__auto__,jobs,results,process,async){
return (function (state_37462){
var state_val_37463 = (state_37462[(1)]);
if((state_val_37463 === (7))){
var inst_37458 = (state_37462[(2)]);
var state_37462__$1 = state_37462;
var statearr_37464_37530 = state_37462__$1;
(statearr_37464_37530[(2)] = inst_37458);

(statearr_37464_37530[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37463 === (20))){
var state_37462__$1 = state_37462;
var statearr_37465_37531 = state_37462__$1;
(statearr_37465_37531[(2)] = null);

(statearr_37465_37531[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37463 === (1))){
var state_37462__$1 = state_37462;
var statearr_37466_37532 = state_37462__$1;
(statearr_37466_37532[(2)] = null);

(statearr_37466_37532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37463 === (4))){
var inst_37427 = (state_37462[(7)]);
var inst_37427__$1 = (state_37462[(2)]);
var inst_37428 = (inst_37427__$1 == null);
var state_37462__$1 = (function (){var statearr_37467 = state_37462;
(statearr_37467[(7)] = inst_37427__$1);

return statearr_37467;
})();
if(cljs.core.truth_(inst_37428)){
var statearr_37468_37533 = state_37462__$1;
(statearr_37468_37533[(1)] = (5));

} else {
var statearr_37469_37534 = state_37462__$1;
(statearr_37469_37534[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37463 === (15))){
var inst_37440 = (state_37462[(8)]);
var state_37462__$1 = state_37462;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37462__$1,(18),to,inst_37440);
} else {
if((state_val_37463 === (21))){
var inst_37453 = (state_37462[(2)]);
var state_37462__$1 = state_37462;
var statearr_37470_37535 = state_37462__$1;
(statearr_37470_37535[(2)] = inst_37453);

(statearr_37470_37535[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37463 === (13))){
var inst_37455 = (state_37462[(2)]);
var state_37462__$1 = (function (){var statearr_37471 = state_37462;
(statearr_37471[(9)] = inst_37455);

return statearr_37471;
})();
var statearr_37472_37536 = state_37462__$1;
(statearr_37472_37536[(2)] = null);

(statearr_37472_37536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37463 === (6))){
var inst_37427 = (state_37462[(7)]);
var state_37462__$1 = state_37462;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37462__$1,(11),inst_37427);
} else {
if((state_val_37463 === (17))){
var inst_37448 = (state_37462[(2)]);
var state_37462__$1 = state_37462;
if(cljs.core.truth_(inst_37448)){
var statearr_37473_37537 = state_37462__$1;
(statearr_37473_37537[(1)] = (19));

} else {
var statearr_37474_37538 = state_37462__$1;
(statearr_37474_37538[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37463 === (3))){
var inst_37460 = (state_37462[(2)]);
var state_37462__$1 = state_37462;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37462__$1,inst_37460);
} else {
if((state_val_37463 === (12))){
var inst_37437 = (state_37462[(10)]);
var state_37462__$1 = state_37462;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37462__$1,(14),inst_37437);
} else {
if((state_val_37463 === (2))){
var state_37462__$1 = state_37462;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37462__$1,(4),results);
} else {
if((state_val_37463 === (19))){
var state_37462__$1 = state_37462;
var statearr_37475_37539 = state_37462__$1;
(statearr_37475_37539[(2)] = null);

(statearr_37475_37539[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37463 === (11))){
var inst_37437 = (state_37462[(2)]);
var state_37462__$1 = (function (){var statearr_37476 = state_37462;
(statearr_37476[(10)] = inst_37437);

return statearr_37476;
})();
var statearr_37477_37540 = state_37462__$1;
(statearr_37477_37540[(2)] = null);

(statearr_37477_37540[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37463 === (9))){
var state_37462__$1 = state_37462;
var statearr_37478_37541 = state_37462__$1;
(statearr_37478_37541[(2)] = null);

(statearr_37478_37541[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37463 === (5))){
var state_37462__$1 = state_37462;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37479_37542 = state_37462__$1;
(statearr_37479_37542[(1)] = (8));

} else {
var statearr_37480_37543 = state_37462__$1;
(statearr_37480_37543[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37463 === (14))){
var inst_37442 = (state_37462[(11)]);
var inst_37440 = (state_37462[(8)]);
var inst_37440__$1 = (state_37462[(2)]);
var inst_37441 = (inst_37440__$1 == null);
var inst_37442__$1 = cljs.core.not.call(null,inst_37441);
var state_37462__$1 = (function (){var statearr_37481 = state_37462;
(statearr_37481[(11)] = inst_37442__$1);

(statearr_37481[(8)] = inst_37440__$1);

return statearr_37481;
})();
if(inst_37442__$1){
var statearr_37482_37544 = state_37462__$1;
(statearr_37482_37544[(1)] = (15));

} else {
var statearr_37483_37545 = state_37462__$1;
(statearr_37483_37545[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37463 === (16))){
var inst_37442 = (state_37462[(11)]);
var state_37462__$1 = state_37462;
var statearr_37484_37546 = state_37462__$1;
(statearr_37484_37546[(2)] = inst_37442);

(statearr_37484_37546[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37463 === (10))){
var inst_37434 = (state_37462[(2)]);
var state_37462__$1 = state_37462;
var statearr_37485_37547 = state_37462__$1;
(statearr_37485_37547[(2)] = inst_37434);

(statearr_37485_37547[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37463 === (18))){
var inst_37445 = (state_37462[(2)]);
var state_37462__$1 = state_37462;
var statearr_37486_37548 = state_37462__$1;
(statearr_37486_37548[(2)] = inst_37445);

(statearr_37486_37548[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37463 === (8))){
var inst_37431 = cljs.core.async.close_BANG_.call(null,to);
var state_37462__$1 = state_37462;
var statearr_37487_37549 = state_37462__$1;
(statearr_37487_37549[(2)] = inst_37431);

(statearr_37487_37549[(1)] = (10));


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
}
}
}
}
});})(c__36937__auto__,jobs,results,process,async))
;
return ((function (switch__36825__auto__,c__36937__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36826__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36826__auto____0 = (function (){
var statearr_37491 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37491[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36826__auto__);

(statearr_37491[(1)] = (1));

return statearr_37491;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36826__auto____1 = (function (state_37462){
while(true){
var ret_value__36827__auto__ = (function (){try{while(true){
var result__36828__auto__ = switch__36825__auto__.call(null,state_37462);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36828__auto__;
}
break;
}
}catch (e37492){if((e37492 instanceof Object)){
var ex__36829__auto__ = e37492;
var statearr_37493_37550 = state_37462;
(statearr_37493_37550[(5)] = ex__36829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37462);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37492;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37551 = state_37462;
state_37462 = G__37551;
continue;
} else {
return ret_value__36827__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36826__auto__ = function(state_37462){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36826__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36826__auto____1.call(this,state_37462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36826__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36826__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36826__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36826__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36826__auto__;
})()
;})(switch__36825__auto__,c__36937__auto__,jobs,results,process,async))
})();
var state__36939__auto__ = (function (){var statearr_37494 = f__36938__auto__.call(null);
(statearr_37494[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36937__auto__);

return statearr_37494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36939__auto__);
});})(c__36937__auto__,jobs,results,process,async))
);

return c__36937__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args37552 = [];
var len__25947__auto___37555 = arguments.length;
var i__25948__auto___37556 = (0);
while(true){
if((i__25948__auto___37556 < len__25947__auto___37555)){
args37552.push((arguments[i__25948__auto___37556]));

var G__37557 = (i__25948__auto___37556 + (1));
i__25948__auto___37556 = G__37557;
continue;
} else {
}
break;
}

var G__37554 = args37552.length;
switch (G__37554) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37552.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args37559 = [];
var len__25947__auto___37562 = arguments.length;
var i__25948__auto___37563 = (0);
while(true){
if((i__25948__auto___37563 < len__25947__auto___37562)){
args37559.push((arguments[i__25948__auto___37563]));

var G__37564 = (i__25948__auto___37563 + (1));
i__25948__auto___37563 = G__37564;
continue;
} else {
}
break;
}

var G__37561 = args37559.length;
switch (G__37561) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37559.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args37566 = [];
var len__25947__auto___37619 = arguments.length;
var i__25948__auto___37620 = (0);
while(true){
if((i__25948__auto___37620 < len__25947__auto___37619)){
args37566.push((arguments[i__25948__auto___37620]));

var G__37621 = (i__25948__auto___37620 + (1));
i__25948__auto___37620 = G__37621;
continue;
} else {
}
break;
}

var G__37568 = args37566.length;
switch (G__37568) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37566.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__36937__auto___37623 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36937__auto___37623,tc,fc){
return (function (){
var f__36938__auto__ = (function (){var switch__36825__auto__ = ((function (c__36937__auto___37623,tc,fc){
return (function (state_37594){
var state_val_37595 = (state_37594[(1)]);
if((state_val_37595 === (7))){
var inst_37590 = (state_37594[(2)]);
var state_37594__$1 = state_37594;
var statearr_37596_37624 = state_37594__$1;
(statearr_37596_37624[(2)] = inst_37590);

(statearr_37596_37624[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (1))){
var state_37594__$1 = state_37594;
var statearr_37597_37625 = state_37594__$1;
(statearr_37597_37625[(2)] = null);

(statearr_37597_37625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (4))){
var inst_37571 = (state_37594[(7)]);
var inst_37571__$1 = (state_37594[(2)]);
var inst_37572 = (inst_37571__$1 == null);
var state_37594__$1 = (function (){var statearr_37598 = state_37594;
(statearr_37598[(7)] = inst_37571__$1);

return statearr_37598;
})();
if(cljs.core.truth_(inst_37572)){
var statearr_37599_37626 = state_37594__$1;
(statearr_37599_37626[(1)] = (5));

} else {
var statearr_37600_37627 = state_37594__$1;
(statearr_37600_37627[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (13))){
var state_37594__$1 = state_37594;
var statearr_37601_37628 = state_37594__$1;
(statearr_37601_37628[(2)] = null);

(statearr_37601_37628[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (6))){
var inst_37571 = (state_37594[(7)]);
var inst_37577 = p.call(null,inst_37571);
var state_37594__$1 = state_37594;
if(cljs.core.truth_(inst_37577)){
var statearr_37602_37629 = state_37594__$1;
(statearr_37602_37629[(1)] = (9));

} else {
var statearr_37603_37630 = state_37594__$1;
(statearr_37603_37630[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (3))){
var inst_37592 = (state_37594[(2)]);
var state_37594__$1 = state_37594;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37594__$1,inst_37592);
} else {
if((state_val_37595 === (12))){
var state_37594__$1 = state_37594;
var statearr_37604_37631 = state_37594__$1;
(statearr_37604_37631[(2)] = null);

(statearr_37604_37631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (2))){
var state_37594__$1 = state_37594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37594__$1,(4),ch);
} else {
if((state_val_37595 === (11))){
var inst_37571 = (state_37594[(7)]);
var inst_37581 = (state_37594[(2)]);
var state_37594__$1 = state_37594;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37594__$1,(8),inst_37581,inst_37571);
} else {
if((state_val_37595 === (9))){
var state_37594__$1 = state_37594;
var statearr_37605_37632 = state_37594__$1;
(statearr_37605_37632[(2)] = tc);

(statearr_37605_37632[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (5))){
var inst_37574 = cljs.core.async.close_BANG_.call(null,tc);
var inst_37575 = cljs.core.async.close_BANG_.call(null,fc);
var state_37594__$1 = (function (){var statearr_37606 = state_37594;
(statearr_37606[(8)] = inst_37574);

return statearr_37606;
})();
var statearr_37607_37633 = state_37594__$1;
(statearr_37607_37633[(2)] = inst_37575);

(statearr_37607_37633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (14))){
var inst_37588 = (state_37594[(2)]);
var state_37594__$1 = state_37594;
var statearr_37608_37634 = state_37594__$1;
(statearr_37608_37634[(2)] = inst_37588);

(statearr_37608_37634[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (10))){
var state_37594__$1 = state_37594;
var statearr_37609_37635 = state_37594__$1;
(statearr_37609_37635[(2)] = fc);

(statearr_37609_37635[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37595 === (8))){
var inst_37583 = (state_37594[(2)]);
var state_37594__$1 = state_37594;
if(cljs.core.truth_(inst_37583)){
var statearr_37610_37636 = state_37594__$1;
(statearr_37610_37636[(1)] = (12));

} else {
var statearr_37611_37637 = state_37594__$1;
(statearr_37611_37637[(1)] = (13));

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
});})(c__36937__auto___37623,tc,fc))
;
return ((function (switch__36825__auto__,c__36937__auto___37623,tc,fc){
return (function() {
var cljs$core$async$state_machine__36826__auto__ = null;
var cljs$core$async$state_machine__36826__auto____0 = (function (){
var statearr_37615 = [null,null,null,null,null,null,null,null,null];
(statearr_37615[(0)] = cljs$core$async$state_machine__36826__auto__);

(statearr_37615[(1)] = (1));

return statearr_37615;
});
var cljs$core$async$state_machine__36826__auto____1 = (function (state_37594){
while(true){
var ret_value__36827__auto__ = (function (){try{while(true){
var result__36828__auto__ = switch__36825__auto__.call(null,state_37594);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36828__auto__;
}
break;
}
}catch (e37616){if((e37616 instanceof Object)){
var ex__36829__auto__ = e37616;
var statearr_37617_37638 = state_37594;
(statearr_37617_37638[(5)] = ex__36829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37594);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37616;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37639 = state_37594;
state_37594 = G__37639;
continue;
} else {
return ret_value__36827__auto__;
}
break;
}
});
cljs$core$async$state_machine__36826__auto__ = function(state_37594){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36826__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36826__auto____1.call(this,state_37594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36826__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36826__auto____0;
cljs$core$async$state_machine__36826__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36826__auto____1;
return cljs$core$async$state_machine__36826__auto__;
})()
;})(switch__36825__auto__,c__36937__auto___37623,tc,fc))
})();
var state__36939__auto__ = (function (){var statearr_37618 = f__36938__auto__.call(null);
(statearr_37618[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36937__auto___37623);

return statearr_37618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36939__auto__);
});})(c__36937__auto___37623,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__36937__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36937__auto__){
return (function (){
var f__36938__auto__ = (function (){var switch__36825__auto__ = ((function (c__36937__auto__){
return (function (state_37703){
var state_val_37704 = (state_37703[(1)]);
if((state_val_37704 === (7))){
var inst_37699 = (state_37703[(2)]);
var state_37703__$1 = state_37703;
var statearr_37705_37726 = state_37703__$1;
(statearr_37705_37726[(2)] = inst_37699);

(statearr_37705_37726[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37704 === (1))){
var inst_37683 = init;
var state_37703__$1 = (function (){var statearr_37706 = state_37703;
(statearr_37706[(7)] = inst_37683);

return statearr_37706;
})();
var statearr_37707_37727 = state_37703__$1;
(statearr_37707_37727[(2)] = null);

(statearr_37707_37727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37704 === (4))){
var inst_37686 = (state_37703[(8)]);
var inst_37686__$1 = (state_37703[(2)]);
var inst_37687 = (inst_37686__$1 == null);
var state_37703__$1 = (function (){var statearr_37708 = state_37703;
(statearr_37708[(8)] = inst_37686__$1);

return statearr_37708;
})();
if(cljs.core.truth_(inst_37687)){
var statearr_37709_37728 = state_37703__$1;
(statearr_37709_37728[(1)] = (5));

} else {
var statearr_37710_37729 = state_37703__$1;
(statearr_37710_37729[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37704 === (6))){
var inst_37690 = (state_37703[(9)]);
var inst_37686 = (state_37703[(8)]);
var inst_37683 = (state_37703[(7)]);
var inst_37690__$1 = f.call(null,inst_37683,inst_37686);
var inst_37691 = cljs.core.reduced_QMARK_.call(null,inst_37690__$1);
var state_37703__$1 = (function (){var statearr_37711 = state_37703;
(statearr_37711[(9)] = inst_37690__$1);

return statearr_37711;
})();
if(inst_37691){
var statearr_37712_37730 = state_37703__$1;
(statearr_37712_37730[(1)] = (8));

} else {
var statearr_37713_37731 = state_37703__$1;
(statearr_37713_37731[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37704 === (3))){
var inst_37701 = (state_37703[(2)]);
var state_37703__$1 = state_37703;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37703__$1,inst_37701);
} else {
if((state_val_37704 === (2))){
var state_37703__$1 = state_37703;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37703__$1,(4),ch);
} else {
if((state_val_37704 === (9))){
var inst_37690 = (state_37703[(9)]);
var inst_37683 = inst_37690;
var state_37703__$1 = (function (){var statearr_37714 = state_37703;
(statearr_37714[(7)] = inst_37683);

return statearr_37714;
})();
var statearr_37715_37732 = state_37703__$1;
(statearr_37715_37732[(2)] = null);

(statearr_37715_37732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37704 === (5))){
var inst_37683 = (state_37703[(7)]);
var state_37703__$1 = state_37703;
var statearr_37716_37733 = state_37703__$1;
(statearr_37716_37733[(2)] = inst_37683);

(statearr_37716_37733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37704 === (10))){
var inst_37697 = (state_37703[(2)]);
var state_37703__$1 = state_37703;
var statearr_37717_37734 = state_37703__$1;
(statearr_37717_37734[(2)] = inst_37697);

(statearr_37717_37734[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37704 === (8))){
var inst_37690 = (state_37703[(9)]);
var inst_37693 = cljs.core.deref.call(null,inst_37690);
var state_37703__$1 = state_37703;
var statearr_37718_37735 = state_37703__$1;
(statearr_37718_37735[(2)] = inst_37693);

(statearr_37718_37735[(1)] = (10));


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
});})(c__36937__auto__))
;
return ((function (switch__36825__auto__,c__36937__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__36826__auto__ = null;
var cljs$core$async$reduce_$_state_machine__36826__auto____0 = (function (){
var statearr_37722 = [null,null,null,null,null,null,null,null,null,null];
(statearr_37722[(0)] = cljs$core$async$reduce_$_state_machine__36826__auto__);

(statearr_37722[(1)] = (1));

return statearr_37722;
});
var cljs$core$async$reduce_$_state_machine__36826__auto____1 = (function (state_37703){
while(true){
var ret_value__36827__auto__ = (function (){try{while(true){
var result__36828__auto__ = switch__36825__auto__.call(null,state_37703);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36828__auto__;
}
break;
}
}catch (e37723){if((e37723 instanceof Object)){
var ex__36829__auto__ = e37723;
var statearr_37724_37736 = state_37703;
(statearr_37724_37736[(5)] = ex__36829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37703);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37723;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37737 = state_37703;
state_37703 = G__37737;
continue;
} else {
return ret_value__36827__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__36826__auto__ = function(state_37703){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__36826__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__36826__auto____1.call(this,state_37703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__36826__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__36826__auto____0;
cljs$core$async$reduce_$_state_machine__36826__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__36826__auto____1;
return cljs$core$async$reduce_$_state_machine__36826__auto__;
})()
;})(switch__36825__auto__,c__36937__auto__))
})();
var state__36939__auto__ = (function (){var statearr_37725 = f__36938__auto__.call(null);
(statearr_37725[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36937__auto__);

return statearr_37725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36939__auto__);
});})(c__36937__auto__))
);

return c__36937__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args37738 = [];
var len__25947__auto___37790 = arguments.length;
var i__25948__auto___37791 = (0);
while(true){
if((i__25948__auto___37791 < len__25947__auto___37790)){
args37738.push((arguments[i__25948__auto___37791]));

var G__37792 = (i__25948__auto___37791 + (1));
i__25948__auto___37791 = G__37792;
continue;
} else {
}
break;
}

var G__37740 = args37738.length;
switch (G__37740) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37738.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__36937__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36937__auto__){
return (function (){
var f__36938__auto__ = (function (){var switch__36825__auto__ = ((function (c__36937__auto__){
return (function (state_37765){
var state_val_37766 = (state_37765[(1)]);
if((state_val_37766 === (7))){
var inst_37747 = (state_37765[(2)]);
var state_37765__$1 = state_37765;
var statearr_37767_37794 = state_37765__$1;
(statearr_37767_37794[(2)] = inst_37747);

(statearr_37767_37794[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37766 === (1))){
var inst_37741 = cljs.core.seq.call(null,coll);
var inst_37742 = inst_37741;
var state_37765__$1 = (function (){var statearr_37768 = state_37765;
(statearr_37768[(7)] = inst_37742);

return statearr_37768;
})();
var statearr_37769_37795 = state_37765__$1;
(statearr_37769_37795[(2)] = null);

(statearr_37769_37795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37766 === (4))){
var inst_37742 = (state_37765[(7)]);
var inst_37745 = cljs.core.first.call(null,inst_37742);
var state_37765__$1 = state_37765;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37765__$1,(7),ch,inst_37745);
} else {
if((state_val_37766 === (13))){
var inst_37759 = (state_37765[(2)]);
var state_37765__$1 = state_37765;
var statearr_37770_37796 = state_37765__$1;
(statearr_37770_37796[(2)] = inst_37759);

(statearr_37770_37796[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37766 === (6))){
var inst_37750 = (state_37765[(2)]);
var state_37765__$1 = state_37765;
if(cljs.core.truth_(inst_37750)){
var statearr_37771_37797 = state_37765__$1;
(statearr_37771_37797[(1)] = (8));

} else {
var statearr_37772_37798 = state_37765__$1;
(statearr_37772_37798[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37766 === (3))){
var inst_37763 = (state_37765[(2)]);
var state_37765__$1 = state_37765;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37765__$1,inst_37763);
} else {
if((state_val_37766 === (12))){
var state_37765__$1 = state_37765;
var statearr_37773_37799 = state_37765__$1;
(statearr_37773_37799[(2)] = null);

(statearr_37773_37799[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37766 === (2))){
var inst_37742 = (state_37765[(7)]);
var state_37765__$1 = state_37765;
if(cljs.core.truth_(inst_37742)){
var statearr_37774_37800 = state_37765__$1;
(statearr_37774_37800[(1)] = (4));

} else {
var statearr_37775_37801 = state_37765__$1;
(statearr_37775_37801[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37766 === (11))){
var inst_37756 = cljs.core.async.close_BANG_.call(null,ch);
var state_37765__$1 = state_37765;
var statearr_37776_37802 = state_37765__$1;
(statearr_37776_37802[(2)] = inst_37756);

(statearr_37776_37802[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37766 === (9))){
var state_37765__$1 = state_37765;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37777_37803 = state_37765__$1;
(statearr_37777_37803[(1)] = (11));

} else {
var statearr_37778_37804 = state_37765__$1;
(statearr_37778_37804[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37766 === (5))){
var inst_37742 = (state_37765[(7)]);
var state_37765__$1 = state_37765;
var statearr_37779_37805 = state_37765__$1;
(statearr_37779_37805[(2)] = inst_37742);

(statearr_37779_37805[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37766 === (10))){
var inst_37761 = (state_37765[(2)]);
var state_37765__$1 = state_37765;
var statearr_37780_37806 = state_37765__$1;
(statearr_37780_37806[(2)] = inst_37761);

(statearr_37780_37806[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37766 === (8))){
var inst_37742 = (state_37765[(7)]);
var inst_37752 = cljs.core.next.call(null,inst_37742);
var inst_37742__$1 = inst_37752;
var state_37765__$1 = (function (){var statearr_37781 = state_37765;
(statearr_37781[(7)] = inst_37742__$1);

return statearr_37781;
})();
var statearr_37782_37807 = state_37765__$1;
(statearr_37782_37807[(2)] = null);

(statearr_37782_37807[(1)] = (2));


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
});})(c__36937__auto__))
;
return ((function (switch__36825__auto__,c__36937__auto__){
return (function() {
var cljs$core$async$state_machine__36826__auto__ = null;
var cljs$core$async$state_machine__36826__auto____0 = (function (){
var statearr_37786 = [null,null,null,null,null,null,null,null];
(statearr_37786[(0)] = cljs$core$async$state_machine__36826__auto__);

(statearr_37786[(1)] = (1));

return statearr_37786;
});
var cljs$core$async$state_machine__36826__auto____1 = (function (state_37765){
while(true){
var ret_value__36827__auto__ = (function (){try{while(true){
var result__36828__auto__ = switch__36825__auto__.call(null,state_37765);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36828__auto__;
}
break;
}
}catch (e37787){if((e37787 instanceof Object)){
var ex__36829__auto__ = e37787;
var statearr_37788_37808 = state_37765;
(statearr_37788_37808[(5)] = ex__36829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37765);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37787;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37809 = state_37765;
state_37765 = G__37809;
continue;
} else {
return ret_value__36827__auto__;
}
break;
}
});
cljs$core$async$state_machine__36826__auto__ = function(state_37765){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36826__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36826__auto____1.call(this,state_37765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36826__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36826__auto____0;
cljs$core$async$state_machine__36826__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36826__auto____1;
return cljs$core$async$state_machine__36826__auto__;
})()
;})(switch__36825__auto__,c__36937__auto__))
})();
var state__36939__auto__ = (function (){var statearr_37789 = f__36938__auto__.call(null);
(statearr_37789[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36937__auto__);

return statearr_37789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36939__auto__);
});})(c__36937__auto__))
);

return c__36937__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__25535__auto__ = (((_ == null))?null:_);
var m__25536__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,_);
} else {
var m__25536__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__25535__auto__ = (((m == null))?null:m);
var m__25536__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__25536__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__25535__auto__ = (((m == null))?null:m);
var m__25536__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,m,ch);
} else {
var m__25536__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__25535__auto__ = (((m == null))?null:m);
var m__25536__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,m);
} else {
var m__25536__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async38035 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38035 = (function (mult,ch,cs,meta38036){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta38036 = meta38036;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38035.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_38037,meta38036__$1){
var self__ = this;
var _38037__$1 = this;
return (new cljs.core.async.t_cljs$core$async38035(self__.mult,self__.ch,self__.cs,meta38036__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async38035.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_38037){
var self__ = this;
var _38037__$1 = this;
return self__.meta38036;
});})(cs))
;

cljs.core.async.t_cljs$core$async38035.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async38035.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async38035.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async38035.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38035.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38035.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38035.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta38036","meta38036",1206123511,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async38035.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38035.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38035";

cljs.core.async.t_cljs$core$async38035.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"cljs.core.async/t_cljs$core$async38035");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async38035 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async38035(mult__$1,ch__$1,cs__$1,meta38036){
return (new cljs.core.async.t_cljs$core$async38035(mult__$1,ch__$1,cs__$1,meta38036));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async38035(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__36937__auto___38260 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36937__auto___38260,cs,m,dchan,dctr,done){
return (function (){
var f__36938__auto__ = (function (){var switch__36825__auto__ = ((function (c__36937__auto___38260,cs,m,dchan,dctr,done){
return (function (state_38172){
var state_val_38173 = (state_38172[(1)]);
if((state_val_38173 === (7))){
var inst_38168 = (state_38172[(2)]);
var state_38172__$1 = state_38172;
var statearr_38174_38261 = state_38172__$1;
(statearr_38174_38261[(2)] = inst_38168);

(statearr_38174_38261[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38173 === (20))){
var inst_38071 = (state_38172[(7)]);
var inst_38083 = cljs.core.first.call(null,inst_38071);
var inst_38084 = cljs.core.nth.call(null,inst_38083,(0),null);
var inst_38085 = cljs.core.nth.call(null,inst_38083,(1),null);
var state_38172__$1 = (function (){var statearr_38175 = state_38172;
(statearr_38175[(8)] = inst_38084);

return statearr_38175;
})();
if(cljs.core.truth_(inst_38085)){
var statearr_38176_38262 = state_38172__$1;
(statearr_38176_38262[(1)] = (22));

} else {
var statearr_38177_38263 = state_38172__$1;
(statearr_38177_38263[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38173 === (27))){
var inst_38115 = (state_38172[(9)]);
var inst_38113 = (state_38172[(10)]);
var inst_38040 = (state_38172[(11)]);
var inst_38120 = (state_38172[(12)]);
var inst_38120__$1 = cljs.core._nth.call(null,inst_38113,inst_38115);
var inst_38121 = cljs.core.async.put_BANG_.call(null,inst_38120__$1,inst_38040,done);
var state_38172__$1 = (function (){var statearr_38178 = state_38172;
(statearr_38178[(12)] = inst_38120__$1);

return statearr_38178;
})();
if(cljs.core.truth_(inst_38121)){
var statearr_38179_38264 = state_38172__$1;
(statearr_38179_38264[(1)] = (30));

} else {
var statearr_38180_38265 = state_38172__$1;
(statearr_38180_38265[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38173 === (1))){
var state_38172__$1 = state_38172;
var statearr_38181_38266 = state_38172__$1;
(statearr_38181_38266[(2)] = null);

(statearr_38181_38266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38173 === (24))){
var inst_38071 = (state_38172[(7)]);
var inst_38090 = (state_38172[(2)]);
var inst_38091 = cljs.core.next.call(null,inst_38071);
var inst_38049 = inst_38091;
var inst_38050 = null;
var inst_38051 = (0);
var inst_38052 = (0);
var state_38172__$1 = (function (){var statearr_38182 = state_38172;
(statearr_38182[(13)] = inst_38052);

(statearr_38182[(14)] = inst_38090);

(statearr_38182[(15)] = inst_38049);

(statearr_38182[(16)] = inst_38050);

(statearr_38182[(17)] = inst_38051);

return statearr_38182;
})();
var statearr_38183_38267 = state_38172__$1;
(statearr_38183_38267[(2)] = null);

(statearr_38183_38267[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38173 === (39))){
var state_38172__$1 = state_38172;
var statearr_38187_38268 = state_38172__$1;
(statearr_38187_38268[(2)] = null);

(statearr_38187_38268[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38173 === (4))){
var inst_38040 = (state_38172[(11)]);
var inst_38040__$1 = (state_38172[(2)]);
var inst_38041 = (inst_38040__$1 == null);
var state_38172__$1 = (function (){var statearr_38188 = state_38172;
(statearr_38188[(11)] = inst_38040__$1);

return statearr_38188;
})();
if(cljs.core.truth_(inst_38041)){
var statearr_38189_38269 = state_38172__$1;
(statearr_38189_38269[(1)] = (5));

} else {
var statearr_38190_38270 = state_38172__$1;
(statearr_38190_38270[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38173 === (15))){
var inst_38052 = (state_38172[(13)]);
var inst_38049 = (state_38172[(15)]);
var inst_38050 = (state_38172[(16)]);
var inst_38051 = (state_38172[(17)]);
var inst_38067 = (state_38172[(2)]);
var inst_38068 = (inst_38052 + (1));
var tmp38184 = inst_38049;
var tmp38185 = inst_38050;
var tmp38186 = inst_38051;
var inst_38049__$1 = tmp38184;
var inst_38050__$1 = tmp38185;
var inst_38051__$1 = tmp38186;
var inst_38052__$1 = inst_38068;
var state_38172__$1 = (function (){var statearr_38191 = state_38172;
(statearr_38191[(13)] = inst_38052__$1);

(statearr_38191[(18)] = inst_38067);

(statearr_38191[(15)] = inst_38049__$1);

(statearr_38191[(16)] = inst_38050__$1);

(statearr_38191[(17)] = inst_38051__$1);

return statearr_38191;
})();
var statearr_38192_38271 = state_38172__$1;
(statearr_38192_38271[(2)] = null);

(statearr_38192_38271[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38173 === (21))){
var inst_38094 = (state_38172[(2)]);
var state_38172__$1 = state_38172;
var statearr_38196_38272 = state_38172__$1;
(statearr_38196_38272[(2)] = inst_38094);

(statearr_38196_38272[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38173 === (31))){
var inst_38120 = (state_38172[(12)]);
var inst_38124 = done.call(null,null);
var inst_38125 = cljs.core.async.untap_STAR_.call(null,m,inst_38120);
var state_38172__$1 = (function (){var statearr_38197 = state_38172;
(statearr_38197[(19)] = inst_38124);

return statearr_38197;
})();
var statearr_38198_38273 = state_38172__$1;
(statearr_38198_38273[(2)] = inst_38125);

(statearr_38198_38273[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38173 === (32))){
var inst_38115 = (state_38172[(9)]);
var inst_38113 = (state_38172[(10)]);
var inst_38112 = (state_38172[(20)]);
var inst_38114 = (state_38172[(21)]);
var inst_38127 = (state_38172[(2)]);
var inst_38128 = (inst_38115 + (1));
var tmp38193 = inst_38113;
var tmp38194 = inst_38112;
var tmp38195 = inst_38114;
var inst_38112__$1 = tmp38194;
var inst_38113__$1 = tmp38193;
var inst_38114__$1 = tmp38195;
var inst_38115__$1 = inst_38128;
var state_38172__$1 = (function (){var statearr_38199 = state_38172;
(statearr_38199[(9)] = inst_38115__$1);

(statearr_38199[(22)] = inst_38127);

(statearr_38199[(10)] = inst_38113__$1);

(statearr_38199[(20)] = inst_38112__$1);

(statearr_38199[(21)] = inst_38114__$1);

return statearr_38199;
})();
var statearr_38200_38274 = state_38172__$1;
(statearr_38200_38274[(2)] = null);

(statearr_38200_38274[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38173 === (40))){
var inst_38140 = (state_38172[(23)]);
var inst_38144 = done.call(null,null);
var inst_38145 = cljs.core.async.untap_STAR_.call(null,m,inst_38140);
var state_38172__$1 = (function (){var statearr_38201 = state_38172;
(statearr_38201[(24)] = inst_38144);

return statearr_38201;
})();
var statearr_38202_38275 = state_38172__$1;
(statearr_38202_38275[(2)] = inst_38145);

(statearr_38202_38275[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38173 === (33))){
var inst_38131 = (state_38172[(25)]);
var inst_38133 = cljs.core.chunked_seq_QMARK_.call(null,inst_38131);
var state_38172__$1 = state_38172;
if(inst_38133){
var statearr_38203_38276 = state_38172__$1;
(statearr_38203_38276[(1)] = (36));

} else {
var statearr_38204_38277 = state_38172__$1;
(statearr_38204_38277[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38173 === (13))){
var inst_38061 = (state_38172[(26)]);
var inst_38064 = cljs.core.async.close_BANG_.call(null,inst_38061);
var state_38172__$1 = state_38172;
var statearr_38205_38278 = state_38172__$1;
(statearr_38205_38278[(2)] = inst_38064);

(statearr_38205_38278[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38173 === (22))){
var inst_38084 = (state_38172[(8)]);
var inst_38087 = cljs.core.async.close_BANG_.call(null,inst_38084);
var state_38172__$1 = state_38172;
var statearr_38206_38279 = state_38172__$1;
(statearr_38206_38279[(2)] = inst_38087);

(statearr_38206_38279[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38173 === (36))){
var inst_38131 = (state_38172[(25)]);
var inst_38135 = cljs.core.chunk_first.call(null,inst_38131);
var inst_38136 = cljs.core.chunk_rest.call(null,inst_38131);
var inst_38137 = cljs.core.count.call(null,inst_38135);
var inst_38112 = inst_38136;
var inst_38113 = inst_38135;
var inst_38114 = inst_38137;
var inst_38115 = (0);
var state_38172__$1 = (function (){var statearr_38207 = state_38172;
(statearr_38207[(9)] = inst_38115);

(statearr_38207[(10)] = inst_38113);

(statearr_38207[(20)] = inst_38112);

(statearr_38207[(21)] = inst_38114);

return statearr_38207;
})();
var statearr_38208_38280 = state_38172__$1;
(statearr_38208_38280[(2)] = null);

(statearr_38208_38280[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38173 === (41))){
var inst_38131 = (state_38172[(25)]);
var inst_38147 = (state_38172[(2)]);
var inst_38148 = cljs.core.next.call(null,inst_38131);
var inst_38112 = inst_38148;
var inst_38113 = null;
var inst_38114 = (0);
var inst_38115 = (0);
var state_38172__$1 = (function (){var statearr_38209 = state_38172;
(statearr_38209[(9)] = inst_38115);

(statearr_38209[(10)] = inst_38113);

(statearr_38209[(20)] = inst_38112);

(statearr_38209[(21)] = inst_38114);

(statearr_38209[(27)] = inst_38147);

return statearr_38209;
})();
var statearr_38210_38281 = state_38172__$1;
(statearr_38210_38281[(2)] = null);

(statearr_38210_38281[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38173 === (43))){
var state_38172__$1 = state_38172;
var statearr_38211_38282 = state_38172__$1;
(statearr_38211_38282[(2)] = null);

(statearr_38211_38282[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38173 === (29))){
var inst_38156 = (state_38172[(2)]);
var state_38172__$1 = state_38172;
var statearr_38212_38283 = state_38172__$1;
(statearr_38212_38283[(2)] = inst_38156);

(statearr_38212_38283[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38173 === (44))){
var inst_38165 = (state_38172[(2)]);
var state_38172__$1 = (function (){var statearr_38213 = state_38172;
(statearr_38213[(28)] = inst_38165);

return statearr_38213;
})();
var statearr_38214_38284 = state_38172__$1;
(statearr_38214_38284[(2)] = null);

(statearr_38214_38284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38173 === (6))){
var inst_38104 = (state_38172[(29)]);
var inst_38103 = cljs.core.deref.call(null,cs);
var inst_38104__$1 = cljs.core.keys.call(null,inst_38103);
var inst_38105 = cljs.core.count.call(null,inst_38104__$1);
var inst_38106 = cljs.core.reset_BANG_.call(null,dctr,inst_38105);
var inst_38111 = cljs.core.seq.call(null,inst_38104__$1);
var inst_38112 = inst_38111;
var inst_38113 = null;
var inst_38114 = (0);
var inst_38115 = (0);
var state_38172__$1 = (function (){var statearr_38215 = state_38172;
(statearr_38215[(9)] = inst_38115);

(statearr_38215[(10)] = inst_38113);

(statearr_38215[(20)] = inst_38112);

(statearr_38215[(29)] = inst_38104__$1);

(statearr_38215[(21)] = inst_38114);

(statearr_38215[(30)] = inst_38106);

return statearr_38215;
})();
var statearr_38216_38285 = state_38172__$1;
(statearr_38216_38285[(2)] = null);

(statearr_38216_38285[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38173 === (28))){
var inst_38131 = (state_38172[(25)]);
var inst_38112 = (state_38172[(20)]);
var inst_38131__$1 = cljs.core.seq.call(null,inst_38112);
var state_38172__$1 = (function (){var statearr_38217 = state_38172;
(statearr_38217[(25)] = inst_38131__$1);

return statearr_38217;
})();
if(inst_38131__$1){
var statearr_38218_38286 = state_38172__$1;
(statearr_38218_38286[(1)] = (33));

} else {
var statearr_38219_38287 = state_38172__$1;
(statearr_38219_38287[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38173 === (25))){
var inst_38115 = (state_38172[(9)]);
var inst_38114 = (state_38172[(21)]);
var inst_38117 = (inst_38115 < inst_38114);
var inst_38118 = inst_38117;
var state_38172__$1 = state_38172;
if(cljs.core.truth_(inst_38118)){
var statearr_38220_38288 = state_38172__$1;
(statearr_38220_38288[(1)] = (27));

} else {
var statearr_38221_38289 = state_38172__$1;
(statearr_38221_38289[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38173 === (34))){
var state_38172__$1 = state_38172;
var statearr_38222_38290 = state_38172__$1;
(statearr_38222_38290[(2)] = null);

(statearr_38222_38290[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38173 === (17))){
var state_38172__$1 = state_38172;
var statearr_38223_38291 = state_38172__$1;
(statearr_38223_38291[(2)] = null);

(statearr_38223_38291[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38173 === (3))){
var inst_38170 = (state_38172[(2)]);
var state_38172__$1 = state_38172;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38172__$1,inst_38170);
} else {
if((state_val_38173 === (12))){
var inst_38099 = (state_38172[(2)]);
var state_38172__$1 = state_38172;
var statearr_38224_38292 = state_38172__$1;
(statearr_38224_38292[(2)] = inst_38099);

(statearr_38224_38292[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38173 === (2))){
var state_38172__$1 = state_38172;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38172__$1,(4),ch);
} else {
if((state_val_38173 === (23))){
var state_38172__$1 = state_38172;
var statearr_38225_38293 = state_38172__$1;
(statearr_38225_38293[(2)] = null);

(statearr_38225_38293[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38173 === (35))){
var inst_38154 = (state_38172[(2)]);
var state_38172__$1 = state_38172;
var statearr_38226_38294 = state_38172__$1;
(statearr_38226_38294[(2)] = inst_38154);

(statearr_38226_38294[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38173 === (19))){
var inst_38071 = (state_38172[(7)]);
var inst_38075 = cljs.core.chunk_first.call(null,inst_38071);
var inst_38076 = cljs.core.chunk_rest.call(null,inst_38071);
var inst_38077 = cljs.core.count.call(null,inst_38075);
var inst_38049 = inst_38076;
var inst_38050 = inst_38075;
var inst_38051 = inst_38077;
var inst_38052 = (0);
var state_38172__$1 = (function (){var statearr_38227 = state_38172;
(statearr_38227[(13)] = inst_38052);

(statearr_38227[(15)] = inst_38049);

(statearr_38227[(16)] = inst_38050);

(statearr_38227[(17)] = inst_38051);

return statearr_38227;
})();
var statearr_38228_38295 = state_38172__$1;
(statearr_38228_38295[(2)] = null);

(statearr_38228_38295[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38173 === (11))){
var inst_38071 = (state_38172[(7)]);
var inst_38049 = (state_38172[(15)]);
var inst_38071__$1 = cljs.core.seq.call(null,inst_38049);
var state_38172__$1 = (function (){var statearr_38229 = state_38172;
(statearr_38229[(7)] = inst_38071__$1);

return statearr_38229;
})();
if(inst_38071__$1){
var statearr_38230_38296 = state_38172__$1;
(statearr_38230_38296[(1)] = (16));

} else {
var statearr_38231_38297 = state_38172__$1;
(statearr_38231_38297[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38173 === (9))){
var inst_38101 = (state_38172[(2)]);
var state_38172__$1 = state_38172;
var statearr_38232_38298 = state_38172__$1;
(statearr_38232_38298[(2)] = inst_38101);

(statearr_38232_38298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38173 === (5))){
var inst_38047 = cljs.core.deref.call(null,cs);
var inst_38048 = cljs.core.seq.call(null,inst_38047);
var inst_38049 = inst_38048;
var inst_38050 = null;
var inst_38051 = (0);
var inst_38052 = (0);
var state_38172__$1 = (function (){var statearr_38233 = state_38172;
(statearr_38233[(13)] = inst_38052);

(statearr_38233[(15)] = inst_38049);

(statearr_38233[(16)] = inst_38050);

(statearr_38233[(17)] = inst_38051);

return statearr_38233;
})();
var statearr_38234_38299 = state_38172__$1;
(statearr_38234_38299[(2)] = null);

(statearr_38234_38299[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38173 === (14))){
var state_38172__$1 = state_38172;
var statearr_38235_38300 = state_38172__$1;
(statearr_38235_38300[(2)] = null);

(statearr_38235_38300[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38173 === (45))){
var inst_38162 = (state_38172[(2)]);
var state_38172__$1 = state_38172;
var statearr_38236_38301 = state_38172__$1;
(statearr_38236_38301[(2)] = inst_38162);

(statearr_38236_38301[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38173 === (26))){
var inst_38104 = (state_38172[(29)]);
var inst_38158 = (state_38172[(2)]);
var inst_38159 = cljs.core.seq.call(null,inst_38104);
var state_38172__$1 = (function (){var statearr_38237 = state_38172;
(statearr_38237[(31)] = inst_38158);

return statearr_38237;
})();
if(inst_38159){
var statearr_38238_38302 = state_38172__$1;
(statearr_38238_38302[(1)] = (42));

} else {
var statearr_38239_38303 = state_38172__$1;
(statearr_38239_38303[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38173 === (16))){
var inst_38071 = (state_38172[(7)]);
var inst_38073 = cljs.core.chunked_seq_QMARK_.call(null,inst_38071);
var state_38172__$1 = state_38172;
if(inst_38073){
var statearr_38240_38304 = state_38172__$1;
(statearr_38240_38304[(1)] = (19));

} else {
var statearr_38241_38305 = state_38172__$1;
(statearr_38241_38305[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38173 === (38))){
var inst_38151 = (state_38172[(2)]);
var state_38172__$1 = state_38172;
var statearr_38242_38306 = state_38172__$1;
(statearr_38242_38306[(2)] = inst_38151);

(statearr_38242_38306[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38173 === (30))){
var state_38172__$1 = state_38172;
var statearr_38243_38307 = state_38172__$1;
(statearr_38243_38307[(2)] = null);

(statearr_38243_38307[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38173 === (10))){
var inst_38052 = (state_38172[(13)]);
var inst_38050 = (state_38172[(16)]);
var inst_38060 = cljs.core._nth.call(null,inst_38050,inst_38052);
var inst_38061 = cljs.core.nth.call(null,inst_38060,(0),null);
var inst_38062 = cljs.core.nth.call(null,inst_38060,(1),null);
var state_38172__$1 = (function (){var statearr_38244 = state_38172;
(statearr_38244[(26)] = inst_38061);

return statearr_38244;
})();
if(cljs.core.truth_(inst_38062)){
var statearr_38245_38308 = state_38172__$1;
(statearr_38245_38308[(1)] = (13));

} else {
var statearr_38246_38309 = state_38172__$1;
(statearr_38246_38309[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38173 === (18))){
var inst_38097 = (state_38172[(2)]);
var state_38172__$1 = state_38172;
var statearr_38247_38310 = state_38172__$1;
(statearr_38247_38310[(2)] = inst_38097);

(statearr_38247_38310[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38173 === (42))){
var state_38172__$1 = state_38172;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38172__$1,(45),dchan);
} else {
if((state_val_38173 === (37))){
var inst_38131 = (state_38172[(25)]);
var inst_38040 = (state_38172[(11)]);
var inst_38140 = (state_38172[(23)]);
var inst_38140__$1 = cljs.core.first.call(null,inst_38131);
var inst_38141 = cljs.core.async.put_BANG_.call(null,inst_38140__$1,inst_38040,done);
var state_38172__$1 = (function (){var statearr_38248 = state_38172;
(statearr_38248[(23)] = inst_38140__$1);

return statearr_38248;
})();
if(cljs.core.truth_(inst_38141)){
var statearr_38249_38311 = state_38172__$1;
(statearr_38249_38311[(1)] = (39));

} else {
var statearr_38250_38312 = state_38172__$1;
(statearr_38250_38312[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38173 === (8))){
var inst_38052 = (state_38172[(13)]);
var inst_38051 = (state_38172[(17)]);
var inst_38054 = (inst_38052 < inst_38051);
var inst_38055 = inst_38054;
var state_38172__$1 = state_38172;
if(cljs.core.truth_(inst_38055)){
var statearr_38251_38313 = state_38172__$1;
(statearr_38251_38313[(1)] = (10));

} else {
var statearr_38252_38314 = state_38172__$1;
(statearr_38252_38314[(1)] = (11));

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
});})(c__36937__auto___38260,cs,m,dchan,dctr,done))
;
return ((function (switch__36825__auto__,c__36937__auto___38260,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__36826__auto__ = null;
var cljs$core$async$mult_$_state_machine__36826__auto____0 = (function (){
var statearr_38256 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38256[(0)] = cljs$core$async$mult_$_state_machine__36826__auto__);

(statearr_38256[(1)] = (1));

return statearr_38256;
});
var cljs$core$async$mult_$_state_machine__36826__auto____1 = (function (state_38172){
while(true){
var ret_value__36827__auto__ = (function (){try{while(true){
var result__36828__auto__ = switch__36825__auto__.call(null,state_38172);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36828__auto__;
}
break;
}
}catch (e38257){if((e38257 instanceof Object)){
var ex__36829__auto__ = e38257;
var statearr_38258_38315 = state_38172;
(statearr_38258_38315[(5)] = ex__36829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38172);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38257;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38316 = state_38172;
state_38172 = G__38316;
continue;
} else {
return ret_value__36827__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__36826__auto__ = function(state_38172){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__36826__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__36826__auto____1.call(this,state_38172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__36826__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__36826__auto____0;
cljs$core$async$mult_$_state_machine__36826__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__36826__auto____1;
return cljs$core$async$mult_$_state_machine__36826__auto__;
})()
;})(switch__36825__auto__,c__36937__auto___38260,cs,m,dchan,dctr,done))
})();
var state__36939__auto__ = (function (){var statearr_38259 = f__36938__auto__.call(null);
(statearr_38259[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36937__auto___38260);

return statearr_38259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36939__auto__);
});})(c__36937__auto___38260,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args38317 = [];
var len__25947__auto___38320 = arguments.length;
var i__25948__auto___38321 = (0);
while(true){
if((i__25948__auto___38321 < len__25947__auto___38320)){
args38317.push((arguments[i__25948__auto___38321]));

var G__38322 = (i__25948__auto___38321 + (1));
i__25948__auto___38321 = G__38322;
continue;
} else {
}
break;
}

var G__38319 = args38317.length;
switch (G__38319) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38317.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__25535__auto__ = (((m == null))?null:m);
var m__25536__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,m,ch);
} else {
var m__25536__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__25535__auto__ = (((m == null))?null:m);
var m__25536__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,m,ch);
} else {
var m__25536__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__25535__auto__ = (((m == null))?null:m);
var m__25536__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,m);
} else {
var m__25536__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__25535__auto__ = (((m == null))?null:m);
var m__25536__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,m,state_map);
} else {
var m__25536__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__25535__auto__ = (((m == null))?null:m);
var m__25536__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,m,mode);
} else {
var m__25536__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__25954__auto__ = [];
var len__25947__auto___38334 = arguments.length;
var i__25948__auto___38335 = (0);
while(true){
if((i__25948__auto___38335 < len__25947__auto___38334)){
args__25954__auto__.push((arguments[i__25948__auto___38335]));

var G__38336 = (i__25948__auto___38335 + (1));
i__25948__auto___38335 = G__38336;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((3) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25955__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__38328){
var map__38329 = p__38328;
var map__38329__$1 = ((((!((map__38329 == null)))?((((map__38329.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38329.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38329):map__38329);
var opts = map__38329__$1;
var statearr_38331_38337 = state;
(statearr_38331_38337[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__38329,map__38329__$1,opts){
return (function (val){
var statearr_38332_38338 = state;
(statearr_38332_38338[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__38329,map__38329__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_38333_38339 = state;
(statearr_38333_38339[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq38324){
var G__38325 = cljs.core.first.call(null,seq38324);
var seq38324__$1 = cljs.core.next.call(null,seq38324);
var G__38326 = cljs.core.first.call(null,seq38324__$1);
var seq38324__$2 = cljs.core.next.call(null,seq38324__$1);
var G__38327 = cljs.core.first.call(null,seq38324__$2);
var seq38324__$3 = cljs.core.next.call(null,seq38324__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__38325,G__38326,G__38327,seq38324__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async38505 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38505 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta38506){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta38506 = meta38506;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38505.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_38507,meta38506__$1){
var self__ = this;
var _38507__$1 = this;
return (new cljs.core.async.t_cljs$core$async38505(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta38506__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38505.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_38507){
var self__ = this;
var _38507__$1 = this;
return self__.meta38506;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38505.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async38505.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38505.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async38505.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38505.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38505.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38505.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38505.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38505.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta38506","meta38506",-1372075866,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38505.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38505.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38505";

cljs.core.async.t_cljs$core$async38505.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"cljs.core.async/t_cljs$core$async38505");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async38505 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async38505(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta38506){
return (new cljs.core.async.t_cljs$core$async38505(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta38506));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async38505(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__36937__auto___38670 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36937__auto___38670,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__36938__auto__ = (function (){var switch__36825__auto__ = ((function (c__36937__auto___38670,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_38607){
var state_val_38608 = (state_38607[(1)]);
if((state_val_38608 === (7))){
var inst_38523 = (state_38607[(2)]);
var state_38607__$1 = state_38607;
var statearr_38609_38671 = state_38607__$1;
(statearr_38609_38671[(2)] = inst_38523);

(statearr_38609_38671[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38608 === (20))){
var inst_38535 = (state_38607[(7)]);
var state_38607__$1 = state_38607;
var statearr_38610_38672 = state_38607__$1;
(statearr_38610_38672[(2)] = inst_38535);

(statearr_38610_38672[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38608 === (27))){
var state_38607__$1 = state_38607;
var statearr_38611_38673 = state_38607__$1;
(statearr_38611_38673[(2)] = null);

(statearr_38611_38673[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38608 === (1))){
var inst_38511 = (state_38607[(8)]);
var inst_38511__$1 = calc_state.call(null);
var inst_38513 = (inst_38511__$1 == null);
var inst_38514 = cljs.core.not.call(null,inst_38513);
var state_38607__$1 = (function (){var statearr_38612 = state_38607;
(statearr_38612[(8)] = inst_38511__$1);

return statearr_38612;
})();
if(inst_38514){
var statearr_38613_38674 = state_38607__$1;
(statearr_38613_38674[(1)] = (2));

} else {
var statearr_38614_38675 = state_38607__$1;
(statearr_38614_38675[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38608 === (24))){
var inst_38581 = (state_38607[(9)]);
var inst_38558 = (state_38607[(10)]);
var inst_38567 = (state_38607[(11)]);
var inst_38581__$1 = inst_38558.call(null,inst_38567);
var state_38607__$1 = (function (){var statearr_38615 = state_38607;
(statearr_38615[(9)] = inst_38581__$1);

return statearr_38615;
})();
if(cljs.core.truth_(inst_38581__$1)){
var statearr_38616_38676 = state_38607__$1;
(statearr_38616_38676[(1)] = (29));

} else {
var statearr_38617_38677 = state_38607__$1;
(statearr_38617_38677[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38608 === (4))){
var inst_38526 = (state_38607[(2)]);
var state_38607__$1 = state_38607;
if(cljs.core.truth_(inst_38526)){
var statearr_38618_38678 = state_38607__$1;
(statearr_38618_38678[(1)] = (8));

} else {
var statearr_38619_38679 = state_38607__$1;
(statearr_38619_38679[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38608 === (15))){
var inst_38552 = (state_38607[(2)]);
var state_38607__$1 = state_38607;
if(cljs.core.truth_(inst_38552)){
var statearr_38620_38680 = state_38607__$1;
(statearr_38620_38680[(1)] = (19));

} else {
var statearr_38621_38681 = state_38607__$1;
(statearr_38621_38681[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38608 === (21))){
var inst_38557 = (state_38607[(12)]);
var inst_38557__$1 = (state_38607[(2)]);
var inst_38558 = cljs.core.get.call(null,inst_38557__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38559 = cljs.core.get.call(null,inst_38557__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38560 = cljs.core.get.call(null,inst_38557__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_38607__$1 = (function (){var statearr_38622 = state_38607;
(statearr_38622[(12)] = inst_38557__$1);

(statearr_38622[(10)] = inst_38558);

(statearr_38622[(13)] = inst_38559);

return statearr_38622;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_38607__$1,(22),inst_38560);
} else {
if((state_val_38608 === (31))){
var inst_38589 = (state_38607[(2)]);
var state_38607__$1 = state_38607;
if(cljs.core.truth_(inst_38589)){
var statearr_38623_38682 = state_38607__$1;
(statearr_38623_38682[(1)] = (32));

} else {
var statearr_38624_38683 = state_38607__$1;
(statearr_38624_38683[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38608 === (32))){
var inst_38566 = (state_38607[(14)]);
var state_38607__$1 = state_38607;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38607__$1,(35),out,inst_38566);
} else {
if((state_val_38608 === (33))){
var inst_38557 = (state_38607[(12)]);
var inst_38535 = inst_38557;
var state_38607__$1 = (function (){var statearr_38625 = state_38607;
(statearr_38625[(7)] = inst_38535);

return statearr_38625;
})();
var statearr_38626_38684 = state_38607__$1;
(statearr_38626_38684[(2)] = null);

(statearr_38626_38684[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38608 === (13))){
var inst_38535 = (state_38607[(7)]);
var inst_38542 = inst_38535.cljs$lang$protocol_mask$partition0$;
var inst_38543 = (inst_38542 & (64));
var inst_38544 = inst_38535.cljs$core$ISeq$;
var inst_38545 = (inst_38543) || (inst_38544);
var state_38607__$1 = state_38607;
if(cljs.core.truth_(inst_38545)){
var statearr_38627_38685 = state_38607__$1;
(statearr_38627_38685[(1)] = (16));

} else {
var statearr_38628_38686 = state_38607__$1;
(statearr_38628_38686[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38608 === (22))){
var inst_38567 = (state_38607[(11)]);
var inst_38566 = (state_38607[(14)]);
var inst_38565 = (state_38607[(2)]);
var inst_38566__$1 = cljs.core.nth.call(null,inst_38565,(0),null);
var inst_38567__$1 = cljs.core.nth.call(null,inst_38565,(1),null);
var inst_38568 = (inst_38566__$1 == null);
var inst_38569 = cljs.core._EQ_.call(null,inst_38567__$1,change);
var inst_38570 = (inst_38568) || (inst_38569);
var state_38607__$1 = (function (){var statearr_38629 = state_38607;
(statearr_38629[(11)] = inst_38567__$1);

(statearr_38629[(14)] = inst_38566__$1);

return statearr_38629;
})();
if(cljs.core.truth_(inst_38570)){
var statearr_38630_38687 = state_38607__$1;
(statearr_38630_38687[(1)] = (23));

} else {
var statearr_38631_38688 = state_38607__$1;
(statearr_38631_38688[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38608 === (36))){
var inst_38557 = (state_38607[(12)]);
var inst_38535 = inst_38557;
var state_38607__$1 = (function (){var statearr_38632 = state_38607;
(statearr_38632[(7)] = inst_38535);

return statearr_38632;
})();
var statearr_38633_38689 = state_38607__$1;
(statearr_38633_38689[(2)] = null);

(statearr_38633_38689[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38608 === (29))){
var inst_38581 = (state_38607[(9)]);
var state_38607__$1 = state_38607;
var statearr_38634_38690 = state_38607__$1;
(statearr_38634_38690[(2)] = inst_38581);

(statearr_38634_38690[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38608 === (6))){
var state_38607__$1 = state_38607;
var statearr_38635_38691 = state_38607__$1;
(statearr_38635_38691[(2)] = false);

(statearr_38635_38691[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38608 === (28))){
var inst_38577 = (state_38607[(2)]);
var inst_38578 = calc_state.call(null);
var inst_38535 = inst_38578;
var state_38607__$1 = (function (){var statearr_38636 = state_38607;
(statearr_38636[(15)] = inst_38577);

(statearr_38636[(7)] = inst_38535);

return statearr_38636;
})();
var statearr_38637_38692 = state_38607__$1;
(statearr_38637_38692[(2)] = null);

(statearr_38637_38692[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38608 === (25))){
var inst_38603 = (state_38607[(2)]);
var state_38607__$1 = state_38607;
var statearr_38638_38693 = state_38607__$1;
(statearr_38638_38693[(2)] = inst_38603);

(statearr_38638_38693[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38608 === (34))){
var inst_38601 = (state_38607[(2)]);
var state_38607__$1 = state_38607;
var statearr_38639_38694 = state_38607__$1;
(statearr_38639_38694[(2)] = inst_38601);

(statearr_38639_38694[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38608 === (17))){
var state_38607__$1 = state_38607;
var statearr_38640_38695 = state_38607__$1;
(statearr_38640_38695[(2)] = false);

(statearr_38640_38695[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38608 === (3))){
var state_38607__$1 = state_38607;
var statearr_38641_38696 = state_38607__$1;
(statearr_38641_38696[(2)] = false);

(statearr_38641_38696[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38608 === (12))){
var inst_38605 = (state_38607[(2)]);
var state_38607__$1 = state_38607;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38607__$1,inst_38605);
} else {
if((state_val_38608 === (2))){
var inst_38511 = (state_38607[(8)]);
var inst_38516 = inst_38511.cljs$lang$protocol_mask$partition0$;
var inst_38517 = (inst_38516 & (64));
var inst_38518 = inst_38511.cljs$core$ISeq$;
var inst_38519 = (inst_38517) || (inst_38518);
var state_38607__$1 = state_38607;
if(cljs.core.truth_(inst_38519)){
var statearr_38642_38697 = state_38607__$1;
(statearr_38642_38697[(1)] = (5));

} else {
var statearr_38643_38698 = state_38607__$1;
(statearr_38643_38698[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38608 === (23))){
var inst_38566 = (state_38607[(14)]);
var inst_38572 = (inst_38566 == null);
var state_38607__$1 = state_38607;
if(cljs.core.truth_(inst_38572)){
var statearr_38644_38699 = state_38607__$1;
(statearr_38644_38699[(1)] = (26));

} else {
var statearr_38645_38700 = state_38607__$1;
(statearr_38645_38700[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38608 === (35))){
var inst_38592 = (state_38607[(2)]);
var state_38607__$1 = state_38607;
if(cljs.core.truth_(inst_38592)){
var statearr_38646_38701 = state_38607__$1;
(statearr_38646_38701[(1)] = (36));

} else {
var statearr_38647_38702 = state_38607__$1;
(statearr_38647_38702[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38608 === (19))){
var inst_38535 = (state_38607[(7)]);
var inst_38554 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38535);
var state_38607__$1 = state_38607;
var statearr_38648_38703 = state_38607__$1;
(statearr_38648_38703[(2)] = inst_38554);

(statearr_38648_38703[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38608 === (11))){
var inst_38535 = (state_38607[(7)]);
var inst_38539 = (inst_38535 == null);
var inst_38540 = cljs.core.not.call(null,inst_38539);
var state_38607__$1 = state_38607;
if(inst_38540){
var statearr_38649_38704 = state_38607__$1;
(statearr_38649_38704[(1)] = (13));

} else {
var statearr_38650_38705 = state_38607__$1;
(statearr_38650_38705[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38608 === (9))){
var inst_38511 = (state_38607[(8)]);
var state_38607__$1 = state_38607;
var statearr_38651_38706 = state_38607__$1;
(statearr_38651_38706[(2)] = inst_38511);

(statearr_38651_38706[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38608 === (5))){
var state_38607__$1 = state_38607;
var statearr_38652_38707 = state_38607__$1;
(statearr_38652_38707[(2)] = true);

(statearr_38652_38707[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38608 === (14))){
var state_38607__$1 = state_38607;
var statearr_38653_38708 = state_38607__$1;
(statearr_38653_38708[(2)] = false);

(statearr_38653_38708[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38608 === (26))){
var inst_38567 = (state_38607[(11)]);
var inst_38574 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_38567);
var state_38607__$1 = state_38607;
var statearr_38654_38709 = state_38607__$1;
(statearr_38654_38709[(2)] = inst_38574);

(statearr_38654_38709[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38608 === (16))){
var state_38607__$1 = state_38607;
var statearr_38655_38710 = state_38607__$1;
(statearr_38655_38710[(2)] = true);

(statearr_38655_38710[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38608 === (38))){
var inst_38597 = (state_38607[(2)]);
var state_38607__$1 = state_38607;
var statearr_38656_38711 = state_38607__$1;
(statearr_38656_38711[(2)] = inst_38597);

(statearr_38656_38711[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38608 === (30))){
var inst_38558 = (state_38607[(10)]);
var inst_38559 = (state_38607[(13)]);
var inst_38567 = (state_38607[(11)]);
var inst_38584 = cljs.core.empty_QMARK_.call(null,inst_38558);
var inst_38585 = inst_38559.call(null,inst_38567);
var inst_38586 = cljs.core.not.call(null,inst_38585);
var inst_38587 = (inst_38584) && (inst_38586);
var state_38607__$1 = state_38607;
var statearr_38657_38712 = state_38607__$1;
(statearr_38657_38712[(2)] = inst_38587);

(statearr_38657_38712[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38608 === (10))){
var inst_38511 = (state_38607[(8)]);
var inst_38531 = (state_38607[(2)]);
var inst_38532 = cljs.core.get.call(null,inst_38531,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38533 = cljs.core.get.call(null,inst_38531,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38534 = cljs.core.get.call(null,inst_38531,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_38535 = inst_38511;
var state_38607__$1 = (function (){var statearr_38658 = state_38607;
(statearr_38658[(7)] = inst_38535);

(statearr_38658[(16)] = inst_38532);

(statearr_38658[(17)] = inst_38533);

(statearr_38658[(18)] = inst_38534);

return statearr_38658;
})();
var statearr_38659_38713 = state_38607__$1;
(statearr_38659_38713[(2)] = null);

(statearr_38659_38713[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38608 === (18))){
var inst_38549 = (state_38607[(2)]);
var state_38607__$1 = state_38607;
var statearr_38660_38714 = state_38607__$1;
(statearr_38660_38714[(2)] = inst_38549);

(statearr_38660_38714[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38608 === (37))){
var state_38607__$1 = state_38607;
var statearr_38661_38715 = state_38607__$1;
(statearr_38661_38715[(2)] = null);

(statearr_38661_38715[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38608 === (8))){
var inst_38511 = (state_38607[(8)]);
var inst_38528 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38511);
var state_38607__$1 = state_38607;
var statearr_38662_38716 = state_38607__$1;
(statearr_38662_38716[(2)] = inst_38528);

(statearr_38662_38716[(1)] = (10));


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
});})(c__36937__auto___38670,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__36825__auto__,c__36937__auto___38670,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__36826__auto__ = null;
var cljs$core$async$mix_$_state_machine__36826__auto____0 = (function (){
var statearr_38666 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38666[(0)] = cljs$core$async$mix_$_state_machine__36826__auto__);

(statearr_38666[(1)] = (1));

return statearr_38666;
});
var cljs$core$async$mix_$_state_machine__36826__auto____1 = (function (state_38607){
while(true){
var ret_value__36827__auto__ = (function (){try{while(true){
var result__36828__auto__ = switch__36825__auto__.call(null,state_38607);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36828__auto__;
}
break;
}
}catch (e38667){if((e38667 instanceof Object)){
var ex__36829__auto__ = e38667;
var statearr_38668_38717 = state_38607;
(statearr_38668_38717[(5)] = ex__36829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38607);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38667;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38718 = state_38607;
state_38607 = G__38718;
continue;
} else {
return ret_value__36827__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__36826__auto__ = function(state_38607){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__36826__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__36826__auto____1.call(this,state_38607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__36826__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__36826__auto____0;
cljs$core$async$mix_$_state_machine__36826__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__36826__auto____1;
return cljs$core$async$mix_$_state_machine__36826__auto__;
})()
;})(switch__36825__auto__,c__36937__auto___38670,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__36939__auto__ = (function (){var statearr_38669 = f__36938__auto__.call(null);
(statearr_38669[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36937__auto___38670);

return statearr_38669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36939__auto__);
});})(c__36937__auto___38670,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__25535__auto__ = (((p == null))?null:p);
var m__25536__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__25536__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__25535__auto__ = (((p == null))?null:p);
var m__25536__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,p,v,ch);
} else {
var m__25536__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args38719 = [];
var len__25947__auto___38722 = arguments.length;
var i__25948__auto___38723 = (0);
while(true){
if((i__25948__auto___38723 < len__25947__auto___38722)){
args38719.push((arguments[i__25948__auto___38723]));

var G__38724 = (i__25948__auto___38723 + (1));
i__25948__auto___38723 = G__38724;
continue;
} else {
}
break;
}

var G__38721 = args38719.length;
switch (G__38721) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38719.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25535__auto__ = (((p == null))?null:p);
var m__25536__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,p);
} else {
var m__25536__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__25535__auto__ = (((p == null))?null:p);
var m__25536__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,p,v);
} else {
var m__25536__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args38727 = [];
var len__25947__auto___38852 = arguments.length;
var i__25948__auto___38853 = (0);
while(true){
if((i__25948__auto___38853 < len__25947__auto___38852)){
args38727.push((arguments[i__25948__auto___38853]));

var G__38854 = (i__25948__auto___38853 + (1));
i__25948__auto___38853 = G__38854;
continue;
} else {
}
break;
}

var G__38729 = args38727.length;
switch (G__38729) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38727.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__24872__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__24872__auto__,mults){
return (function (p1__38726_SHARP_){
if(cljs.core.truth_(p1__38726_SHARP_.call(null,topic))){
return p1__38726_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__38726_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24872__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async38730 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38730 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta38731){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta38731 = meta38731;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38730.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_38732,meta38731__$1){
var self__ = this;
var _38732__$1 = this;
return (new cljs.core.async.t_cljs$core$async38730(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta38731__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38730.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_38732){
var self__ = this;
var _38732__$1 = this;
return self__.meta38731;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38730.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async38730.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38730.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async38730.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38730.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38730.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38730.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38730.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta38731","meta38731",-1530068160,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38730.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38730.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38730";

cljs.core.async.t_cljs$core$async38730.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"cljs.core.async/t_cljs$core$async38730");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async38730 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async38730(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta38731){
return (new cljs.core.async.t_cljs$core$async38730(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta38731));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async38730(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__36937__auto___38856 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36937__auto___38856,mults,ensure_mult,p){
return (function (){
var f__36938__auto__ = (function (){var switch__36825__auto__ = ((function (c__36937__auto___38856,mults,ensure_mult,p){
return (function (state_38804){
var state_val_38805 = (state_38804[(1)]);
if((state_val_38805 === (7))){
var inst_38800 = (state_38804[(2)]);
var state_38804__$1 = state_38804;
var statearr_38806_38857 = state_38804__$1;
(statearr_38806_38857[(2)] = inst_38800);

(statearr_38806_38857[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38805 === (20))){
var state_38804__$1 = state_38804;
var statearr_38807_38858 = state_38804__$1;
(statearr_38807_38858[(2)] = null);

(statearr_38807_38858[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38805 === (1))){
var state_38804__$1 = state_38804;
var statearr_38808_38859 = state_38804__$1;
(statearr_38808_38859[(2)] = null);

(statearr_38808_38859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38805 === (24))){
var inst_38783 = (state_38804[(7)]);
var inst_38792 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_38783);
var state_38804__$1 = state_38804;
var statearr_38809_38860 = state_38804__$1;
(statearr_38809_38860[(2)] = inst_38792);

(statearr_38809_38860[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38805 === (4))){
var inst_38735 = (state_38804[(8)]);
var inst_38735__$1 = (state_38804[(2)]);
var inst_38736 = (inst_38735__$1 == null);
var state_38804__$1 = (function (){var statearr_38810 = state_38804;
(statearr_38810[(8)] = inst_38735__$1);

return statearr_38810;
})();
if(cljs.core.truth_(inst_38736)){
var statearr_38811_38861 = state_38804__$1;
(statearr_38811_38861[(1)] = (5));

} else {
var statearr_38812_38862 = state_38804__$1;
(statearr_38812_38862[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38805 === (15))){
var inst_38777 = (state_38804[(2)]);
var state_38804__$1 = state_38804;
var statearr_38813_38863 = state_38804__$1;
(statearr_38813_38863[(2)] = inst_38777);

(statearr_38813_38863[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38805 === (21))){
var inst_38797 = (state_38804[(2)]);
var state_38804__$1 = (function (){var statearr_38814 = state_38804;
(statearr_38814[(9)] = inst_38797);

return statearr_38814;
})();
var statearr_38815_38864 = state_38804__$1;
(statearr_38815_38864[(2)] = null);

(statearr_38815_38864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38805 === (13))){
var inst_38759 = (state_38804[(10)]);
var inst_38761 = cljs.core.chunked_seq_QMARK_.call(null,inst_38759);
var state_38804__$1 = state_38804;
if(inst_38761){
var statearr_38816_38865 = state_38804__$1;
(statearr_38816_38865[(1)] = (16));

} else {
var statearr_38817_38866 = state_38804__$1;
(statearr_38817_38866[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38805 === (22))){
var inst_38789 = (state_38804[(2)]);
var state_38804__$1 = state_38804;
if(cljs.core.truth_(inst_38789)){
var statearr_38818_38867 = state_38804__$1;
(statearr_38818_38867[(1)] = (23));

} else {
var statearr_38819_38868 = state_38804__$1;
(statearr_38819_38868[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38805 === (6))){
var inst_38785 = (state_38804[(11)]);
var inst_38735 = (state_38804[(8)]);
var inst_38783 = (state_38804[(7)]);
var inst_38783__$1 = topic_fn.call(null,inst_38735);
var inst_38784 = cljs.core.deref.call(null,mults);
var inst_38785__$1 = cljs.core.get.call(null,inst_38784,inst_38783__$1);
var state_38804__$1 = (function (){var statearr_38820 = state_38804;
(statearr_38820[(11)] = inst_38785__$1);

(statearr_38820[(7)] = inst_38783__$1);

return statearr_38820;
})();
if(cljs.core.truth_(inst_38785__$1)){
var statearr_38821_38869 = state_38804__$1;
(statearr_38821_38869[(1)] = (19));

} else {
var statearr_38822_38870 = state_38804__$1;
(statearr_38822_38870[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38805 === (25))){
var inst_38794 = (state_38804[(2)]);
var state_38804__$1 = state_38804;
var statearr_38823_38871 = state_38804__$1;
(statearr_38823_38871[(2)] = inst_38794);

(statearr_38823_38871[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38805 === (17))){
var inst_38759 = (state_38804[(10)]);
var inst_38768 = cljs.core.first.call(null,inst_38759);
var inst_38769 = cljs.core.async.muxch_STAR_.call(null,inst_38768);
var inst_38770 = cljs.core.async.close_BANG_.call(null,inst_38769);
var inst_38771 = cljs.core.next.call(null,inst_38759);
var inst_38745 = inst_38771;
var inst_38746 = null;
var inst_38747 = (0);
var inst_38748 = (0);
var state_38804__$1 = (function (){var statearr_38824 = state_38804;
(statearr_38824[(12)] = inst_38770);

(statearr_38824[(13)] = inst_38746);

(statearr_38824[(14)] = inst_38745);

(statearr_38824[(15)] = inst_38747);

(statearr_38824[(16)] = inst_38748);

return statearr_38824;
})();
var statearr_38825_38872 = state_38804__$1;
(statearr_38825_38872[(2)] = null);

(statearr_38825_38872[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38805 === (3))){
var inst_38802 = (state_38804[(2)]);
var state_38804__$1 = state_38804;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38804__$1,inst_38802);
} else {
if((state_val_38805 === (12))){
var inst_38779 = (state_38804[(2)]);
var state_38804__$1 = state_38804;
var statearr_38826_38873 = state_38804__$1;
(statearr_38826_38873[(2)] = inst_38779);

(statearr_38826_38873[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38805 === (2))){
var state_38804__$1 = state_38804;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38804__$1,(4),ch);
} else {
if((state_val_38805 === (23))){
var state_38804__$1 = state_38804;
var statearr_38827_38874 = state_38804__$1;
(statearr_38827_38874[(2)] = null);

(statearr_38827_38874[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38805 === (19))){
var inst_38785 = (state_38804[(11)]);
var inst_38735 = (state_38804[(8)]);
var inst_38787 = cljs.core.async.muxch_STAR_.call(null,inst_38785);
var state_38804__$1 = state_38804;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38804__$1,(22),inst_38787,inst_38735);
} else {
if((state_val_38805 === (11))){
var inst_38759 = (state_38804[(10)]);
var inst_38745 = (state_38804[(14)]);
var inst_38759__$1 = cljs.core.seq.call(null,inst_38745);
var state_38804__$1 = (function (){var statearr_38828 = state_38804;
(statearr_38828[(10)] = inst_38759__$1);

return statearr_38828;
})();
if(inst_38759__$1){
var statearr_38829_38875 = state_38804__$1;
(statearr_38829_38875[(1)] = (13));

} else {
var statearr_38830_38876 = state_38804__$1;
(statearr_38830_38876[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38805 === (9))){
var inst_38781 = (state_38804[(2)]);
var state_38804__$1 = state_38804;
var statearr_38831_38877 = state_38804__$1;
(statearr_38831_38877[(2)] = inst_38781);

(statearr_38831_38877[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38805 === (5))){
var inst_38742 = cljs.core.deref.call(null,mults);
var inst_38743 = cljs.core.vals.call(null,inst_38742);
var inst_38744 = cljs.core.seq.call(null,inst_38743);
var inst_38745 = inst_38744;
var inst_38746 = null;
var inst_38747 = (0);
var inst_38748 = (0);
var state_38804__$1 = (function (){var statearr_38832 = state_38804;
(statearr_38832[(13)] = inst_38746);

(statearr_38832[(14)] = inst_38745);

(statearr_38832[(15)] = inst_38747);

(statearr_38832[(16)] = inst_38748);

return statearr_38832;
})();
var statearr_38833_38878 = state_38804__$1;
(statearr_38833_38878[(2)] = null);

(statearr_38833_38878[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38805 === (14))){
var state_38804__$1 = state_38804;
var statearr_38837_38879 = state_38804__$1;
(statearr_38837_38879[(2)] = null);

(statearr_38837_38879[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38805 === (16))){
var inst_38759 = (state_38804[(10)]);
var inst_38763 = cljs.core.chunk_first.call(null,inst_38759);
var inst_38764 = cljs.core.chunk_rest.call(null,inst_38759);
var inst_38765 = cljs.core.count.call(null,inst_38763);
var inst_38745 = inst_38764;
var inst_38746 = inst_38763;
var inst_38747 = inst_38765;
var inst_38748 = (0);
var state_38804__$1 = (function (){var statearr_38838 = state_38804;
(statearr_38838[(13)] = inst_38746);

(statearr_38838[(14)] = inst_38745);

(statearr_38838[(15)] = inst_38747);

(statearr_38838[(16)] = inst_38748);

return statearr_38838;
})();
var statearr_38839_38880 = state_38804__$1;
(statearr_38839_38880[(2)] = null);

(statearr_38839_38880[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38805 === (10))){
var inst_38746 = (state_38804[(13)]);
var inst_38745 = (state_38804[(14)]);
var inst_38747 = (state_38804[(15)]);
var inst_38748 = (state_38804[(16)]);
var inst_38753 = cljs.core._nth.call(null,inst_38746,inst_38748);
var inst_38754 = cljs.core.async.muxch_STAR_.call(null,inst_38753);
var inst_38755 = cljs.core.async.close_BANG_.call(null,inst_38754);
var inst_38756 = (inst_38748 + (1));
var tmp38834 = inst_38746;
var tmp38835 = inst_38745;
var tmp38836 = inst_38747;
var inst_38745__$1 = tmp38835;
var inst_38746__$1 = tmp38834;
var inst_38747__$1 = tmp38836;
var inst_38748__$1 = inst_38756;
var state_38804__$1 = (function (){var statearr_38840 = state_38804;
(statearr_38840[(17)] = inst_38755);

(statearr_38840[(13)] = inst_38746__$1);

(statearr_38840[(14)] = inst_38745__$1);

(statearr_38840[(15)] = inst_38747__$1);

(statearr_38840[(16)] = inst_38748__$1);

return statearr_38840;
})();
var statearr_38841_38881 = state_38804__$1;
(statearr_38841_38881[(2)] = null);

(statearr_38841_38881[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38805 === (18))){
var inst_38774 = (state_38804[(2)]);
var state_38804__$1 = state_38804;
var statearr_38842_38882 = state_38804__$1;
(statearr_38842_38882[(2)] = inst_38774);

(statearr_38842_38882[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38805 === (8))){
var inst_38747 = (state_38804[(15)]);
var inst_38748 = (state_38804[(16)]);
var inst_38750 = (inst_38748 < inst_38747);
var inst_38751 = inst_38750;
var state_38804__$1 = state_38804;
if(cljs.core.truth_(inst_38751)){
var statearr_38843_38883 = state_38804__$1;
(statearr_38843_38883[(1)] = (10));

} else {
var statearr_38844_38884 = state_38804__$1;
(statearr_38844_38884[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__36937__auto___38856,mults,ensure_mult,p))
;
return ((function (switch__36825__auto__,c__36937__auto___38856,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__36826__auto__ = null;
var cljs$core$async$state_machine__36826__auto____0 = (function (){
var statearr_38848 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38848[(0)] = cljs$core$async$state_machine__36826__auto__);

(statearr_38848[(1)] = (1));

return statearr_38848;
});
var cljs$core$async$state_machine__36826__auto____1 = (function (state_38804){
while(true){
var ret_value__36827__auto__ = (function (){try{while(true){
var result__36828__auto__ = switch__36825__auto__.call(null,state_38804);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36828__auto__;
}
break;
}
}catch (e38849){if((e38849 instanceof Object)){
var ex__36829__auto__ = e38849;
var statearr_38850_38885 = state_38804;
(statearr_38850_38885[(5)] = ex__36829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38804);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38849;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38886 = state_38804;
state_38804 = G__38886;
continue;
} else {
return ret_value__36827__auto__;
}
break;
}
});
cljs$core$async$state_machine__36826__auto__ = function(state_38804){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36826__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36826__auto____1.call(this,state_38804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36826__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36826__auto____0;
cljs$core$async$state_machine__36826__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36826__auto____1;
return cljs$core$async$state_machine__36826__auto__;
})()
;})(switch__36825__auto__,c__36937__auto___38856,mults,ensure_mult,p))
})();
var state__36939__auto__ = (function (){var statearr_38851 = f__36938__auto__.call(null);
(statearr_38851[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36937__auto___38856);

return statearr_38851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36939__auto__);
});})(c__36937__auto___38856,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args38887 = [];
var len__25947__auto___38890 = arguments.length;
var i__25948__auto___38891 = (0);
while(true){
if((i__25948__auto___38891 < len__25947__auto___38890)){
args38887.push((arguments[i__25948__auto___38891]));

var G__38892 = (i__25948__auto___38891 + (1));
i__25948__auto___38891 = G__38892;
continue;
} else {
}
break;
}

var G__38889 = args38887.length;
switch (G__38889) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38887.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args38894 = [];
var len__25947__auto___38897 = arguments.length;
var i__25948__auto___38898 = (0);
while(true){
if((i__25948__auto___38898 < len__25947__auto___38897)){
args38894.push((arguments[i__25948__auto___38898]));

var G__38899 = (i__25948__auto___38898 + (1));
i__25948__auto___38898 = G__38899;
continue;
} else {
}
break;
}

var G__38896 = args38894.length;
switch (G__38896) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38894.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args38901 = [];
var len__25947__auto___38972 = arguments.length;
var i__25948__auto___38973 = (0);
while(true){
if((i__25948__auto___38973 < len__25947__auto___38972)){
args38901.push((arguments[i__25948__auto___38973]));

var G__38974 = (i__25948__auto___38973 + (1));
i__25948__auto___38973 = G__38974;
continue;
} else {
}
break;
}

var G__38903 = args38901.length;
switch (G__38903) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38901.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__36937__auto___38976 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36937__auto___38976,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__36938__auto__ = (function (){var switch__36825__auto__ = ((function (c__36937__auto___38976,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_38942){
var state_val_38943 = (state_38942[(1)]);
if((state_val_38943 === (7))){
var state_38942__$1 = state_38942;
var statearr_38944_38977 = state_38942__$1;
(statearr_38944_38977[(2)] = null);

(statearr_38944_38977[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38943 === (1))){
var state_38942__$1 = state_38942;
var statearr_38945_38978 = state_38942__$1;
(statearr_38945_38978[(2)] = null);

(statearr_38945_38978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38943 === (4))){
var inst_38906 = (state_38942[(7)]);
var inst_38908 = (inst_38906 < cnt);
var state_38942__$1 = state_38942;
if(cljs.core.truth_(inst_38908)){
var statearr_38946_38979 = state_38942__$1;
(statearr_38946_38979[(1)] = (6));

} else {
var statearr_38947_38980 = state_38942__$1;
(statearr_38947_38980[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38943 === (15))){
var inst_38938 = (state_38942[(2)]);
var state_38942__$1 = state_38942;
var statearr_38948_38981 = state_38942__$1;
(statearr_38948_38981[(2)] = inst_38938);

(statearr_38948_38981[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38943 === (13))){
var inst_38931 = cljs.core.async.close_BANG_.call(null,out);
var state_38942__$1 = state_38942;
var statearr_38949_38982 = state_38942__$1;
(statearr_38949_38982[(2)] = inst_38931);

(statearr_38949_38982[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38943 === (6))){
var state_38942__$1 = state_38942;
var statearr_38950_38983 = state_38942__$1;
(statearr_38950_38983[(2)] = null);

(statearr_38950_38983[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38943 === (3))){
var inst_38940 = (state_38942[(2)]);
var state_38942__$1 = state_38942;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38942__$1,inst_38940);
} else {
if((state_val_38943 === (12))){
var inst_38928 = (state_38942[(8)]);
var inst_38928__$1 = (state_38942[(2)]);
var inst_38929 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_38928__$1);
var state_38942__$1 = (function (){var statearr_38951 = state_38942;
(statearr_38951[(8)] = inst_38928__$1);

return statearr_38951;
})();
if(cljs.core.truth_(inst_38929)){
var statearr_38952_38984 = state_38942__$1;
(statearr_38952_38984[(1)] = (13));

} else {
var statearr_38953_38985 = state_38942__$1;
(statearr_38953_38985[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38943 === (2))){
var inst_38905 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_38906 = (0);
var state_38942__$1 = (function (){var statearr_38954 = state_38942;
(statearr_38954[(7)] = inst_38906);

(statearr_38954[(9)] = inst_38905);

return statearr_38954;
})();
var statearr_38955_38986 = state_38942__$1;
(statearr_38955_38986[(2)] = null);

(statearr_38955_38986[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38943 === (11))){
var inst_38906 = (state_38942[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_38942,(10),Object,null,(9));
var inst_38915 = chs__$1.call(null,inst_38906);
var inst_38916 = done.call(null,inst_38906);
var inst_38917 = cljs.core.async.take_BANG_.call(null,inst_38915,inst_38916);
var state_38942__$1 = state_38942;
var statearr_38956_38987 = state_38942__$1;
(statearr_38956_38987[(2)] = inst_38917);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38942__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38943 === (9))){
var inst_38906 = (state_38942[(7)]);
var inst_38919 = (state_38942[(2)]);
var inst_38920 = (inst_38906 + (1));
var inst_38906__$1 = inst_38920;
var state_38942__$1 = (function (){var statearr_38957 = state_38942;
(statearr_38957[(10)] = inst_38919);

(statearr_38957[(7)] = inst_38906__$1);

return statearr_38957;
})();
var statearr_38958_38988 = state_38942__$1;
(statearr_38958_38988[(2)] = null);

(statearr_38958_38988[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38943 === (5))){
var inst_38926 = (state_38942[(2)]);
var state_38942__$1 = (function (){var statearr_38959 = state_38942;
(statearr_38959[(11)] = inst_38926);

return statearr_38959;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38942__$1,(12),dchan);
} else {
if((state_val_38943 === (14))){
var inst_38928 = (state_38942[(8)]);
var inst_38933 = cljs.core.apply.call(null,f,inst_38928);
var state_38942__$1 = state_38942;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38942__$1,(16),out,inst_38933);
} else {
if((state_val_38943 === (16))){
var inst_38935 = (state_38942[(2)]);
var state_38942__$1 = (function (){var statearr_38960 = state_38942;
(statearr_38960[(12)] = inst_38935);

return statearr_38960;
})();
var statearr_38961_38989 = state_38942__$1;
(statearr_38961_38989[(2)] = null);

(statearr_38961_38989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38943 === (10))){
var inst_38910 = (state_38942[(2)]);
var inst_38911 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_38942__$1 = (function (){var statearr_38962 = state_38942;
(statearr_38962[(13)] = inst_38910);

return statearr_38962;
})();
var statearr_38963_38990 = state_38942__$1;
(statearr_38963_38990[(2)] = inst_38911);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38942__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38943 === (8))){
var inst_38924 = (state_38942[(2)]);
var state_38942__$1 = state_38942;
var statearr_38964_38991 = state_38942__$1;
(statearr_38964_38991[(2)] = inst_38924);

(statearr_38964_38991[(1)] = (5));


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
});})(c__36937__auto___38976,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__36825__auto__,c__36937__auto___38976,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__36826__auto__ = null;
var cljs$core$async$state_machine__36826__auto____0 = (function (){
var statearr_38968 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38968[(0)] = cljs$core$async$state_machine__36826__auto__);

(statearr_38968[(1)] = (1));

return statearr_38968;
});
var cljs$core$async$state_machine__36826__auto____1 = (function (state_38942){
while(true){
var ret_value__36827__auto__ = (function (){try{while(true){
var result__36828__auto__ = switch__36825__auto__.call(null,state_38942);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36828__auto__;
}
break;
}
}catch (e38969){if((e38969 instanceof Object)){
var ex__36829__auto__ = e38969;
var statearr_38970_38992 = state_38942;
(statearr_38970_38992[(5)] = ex__36829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38942);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38969;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38993 = state_38942;
state_38942 = G__38993;
continue;
} else {
return ret_value__36827__auto__;
}
break;
}
});
cljs$core$async$state_machine__36826__auto__ = function(state_38942){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36826__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36826__auto____1.call(this,state_38942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36826__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36826__auto____0;
cljs$core$async$state_machine__36826__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36826__auto____1;
return cljs$core$async$state_machine__36826__auto__;
})()
;})(switch__36825__auto__,c__36937__auto___38976,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__36939__auto__ = (function (){var statearr_38971 = f__36938__auto__.call(null);
(statearr_38971[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36937__auto___38976);

return statearr_38971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36939__auto__);
});})(c__36937__auto___38976,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args38995 = [];
var len__25947__auto___39053 = arguments.length;
var i__25948__auto___39054 = (0);
while(true){
if((i__25948__auto___39054 < len__25947__auto___39053)){
args38995.push((arguments[i__25948__auto___39054]));

var G__39055 = (i__25948__auto___39054 + (1));
i__25948__auto___39054 = G__39055;
continue;
} else {
}
break;
}

var G__38997 = args38995.length;
switch (G__38997) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38995.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__36937__auto___39057 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36937__auto___39057,out){
return (function (){
var f__36938__auto__ = (function (){var switch__36825__auto__ = ((function (c__36937__auto___39057,out){
return (function (state_39029){
var state_val_39030 = (state_39029[(1)]);
if((state_val_39030 === (7))){
var inst_39008 = (state_39029[(7)]);
var inst_39009 = (state_39029[(8)]);
var inst_39008__$1 = (state_39029[(2)]);
var inst_39009__$1 = cljs.core.nth.call(null,inst_39008__$1,(0),null);
var inst_39010 = cljs.core.nth.call(null,inst_39008__$1,(1),null);
var inst_39011 = (inst_39009__$1 == null);
var state_39029__$1 = (function (){var statearr_39031 = state_39029;
(statearr_39031[(7)] = inst_39008__$1);

(statearr_39031[(9)] = inst_39010);

(statearr_39031[(8)] = inst_39009__$1);

return statearr_39031;
})();
if(cljs.core.truth_(inst_39011)){
var statearr_39032_39058 = state_39029__$1;
(statearr_39032_39058[(1)] = (8));

} else {
var statearr_39033_39059 = state_39029__$1;
(statearr_39033_39059[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39030 === (1))){
var inst_38998 = cljs.core.vec.call(null,chs);
var inst_38999 = inst_38998;
var state_39029__$1 = (function (){var statearr_39034 = state_39029;
(statearr_39034[(10)] = inst_38999);

return statearr_39034;
})();
var statearr_39035_39060 = state_39029__$1;
(statearr_39035_39060[(2)] = null);

(statearr_39035_39060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39030 === (4))){
var inst_38999 = (state_39029[(10)]);
var state_39029__$1 = state_39029;
return cljs.core.async.ioc_alts_BANG_.call(null,state_39029__$1,(7),inst_38999);
} else {
if((state_val_39030 === (6))){
var inst_39025 = (state_39029[(2)]);
var state_39029__$1 = state_39029;
var statearr_39036_39061 = state_39029__$1;
(statearr_39036_39061[(2)] = inst_39025);

(statearr_39036_39061[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39030 === (3))){
var inst_39027 = (state_39029[(2)]);
var state_39029__$1 = state_39029;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39029__$1,inst_39027);
} else {
if((state_val_39030 === (2))){
var inst_38999 = (state_39029[(10)]);
var inst_39001 = cljs.core.count.call(null,inst_38999);
var inst_39002 = (inst_39001 > (0));
var state_39029__$1 = state_39029;
if(cljs.core.truth_(inst_39002)){
var statearr_39038_39062 = state_39029__$1;
(statearr_39038_39062[(1)] = (4));

} else {
var statearr_39039_39063 = state_39029__$1;
(statearr_39039_39063[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39030 === (11))){
var inst_38999 = (state_39029[(10)]);
var inst_39018 = (state_39029[(2)]);
var tmp39037 = inst_38999;
var inst_38999__$1 = tmp39037;
var state_39029__$1 = (function (){var statearr_39040 = state_39029;
(statearr_39040[(10)] = inst_38999__$1);

(statearr_39040[(11)] = inst_39018);

return statearr_39040;
})();
var statearr_39041_39064 = state_39029__$1;
(statearr_39041_39064[(2)] = null);

(statearr_39041_39064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39030 === (9))){
var inst_39009 = (state_39029[(8)]);
var state_39029__$1 = state_39029;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39029__$1,(11),out,inst_39009);
} else {
if((state_val_39030 === (5))){
var inst_39023 = cljs.core.async.close_BANG_.call(null,out);
var state_39029__$1 = state_39029;
var statearr_39042_39065 = state_39029__$1;
(statearr_39042_39065[(2)] = inst_39023);

(statearr_39042_39065[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39030 === (10))){
var inst_39021 = (state_39029[(2)]);
var state_39029__$1 = state_39029;
var statearr_39043_39066 = state_39029__$1;
(statearr_39043_39066[(2)] = inst_39021);

(statearr_39043_39066[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39030 === (8))){
var inst_39008 = (state_39029[(7)]);
var inst_38999 = (state_39029[(10)]);
var inst_39010 = (state_39029[(9)]);
var inst_39009 = (state_39029[(8)]);
var inst_39013 = (function (){var cs = inst_38999;
var vec__39004 = inst_39008;
var v = inst_39009;
var c = inst_39010;
return ((function (cs,vec__39004,v,c,inst_39008,inst_38999,inst_39010,inst_39009,state_val_39030,c__36937__auto___39057,out){
return (function (p1__38994_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__38994_SHARP_);
});
;})(cs,vec__39004,v,c,inst_39008,inst_38999,inst_39010,inst_39009,state_val_39030,c__36937__auto___39057,out))
})();
var inst_39014 = cljs.core.filterv.call(null,inst_39013,inst_38999);
var inst_38999__$1 = inst_39014;
var state_39029__$1 = (function (){var statearr_39044 = state_39029;
(statearr_39044[(10)] = inst_38999__$1);

return statearr_39044;
})();
var statearr_39045_39067 = state_39029__$1;
(statearr_39045_39067[(2)] = null);

(statearr_39045_39067[(1)] = (2));


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
});})(c__36937__auto___39057,out))
;
return ((function (switch__36825__auto__,c__36937__auto___39057,out){
return (function() {
var cljs$core$async$state_machine__36826__auto__ = null;
var cljs$core$async$state_machine__36826__auto____0 = (function (){
var statearr_39049 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39049[(0)] = cljs$core$async$state_machine__36826__auto__);

(statearr_39049[(1)] = (1));

return statearr_39049;
});
var cljs$core$async$state_machine__36826__auto____1 = (function (state_39029){
while(true){
var ret_value__36827__auto__ = (function (){try{while(true){
var result__36828__auto__ = switch__36825__auto__.call(null,state_39029);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36828__auto__;
}
break;
}
}catch (e39050){if((e39050 instanceof Object)){
var ex__36829__auto__ = e39050;
var statearr_39051_39068 = state_39029;
(statearr_39051_39068[(5)] = ex__36829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39029);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39050;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39069 = state_39029;
state_39029 = G__39069;
continue;
} else {
return ret_value__36827__auto__;
}
break;
}
});
cljs$core$async$state_machine__36826__auto__ = function(state_39029){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36826__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36826__auto____1.call(this,state_39029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36826__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36826__auto____0;
cljs$core$async$state_machine__36826__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36826__auto____1;
return cljs$core$async$state_machine__36826__auto__;
})()
;})(switch__36825__auto__,c__36937__auto___39057,out))
})();
var state__36939__auto__ = (function (){var statearr_39052 = f__36938__auto__.call(null);
(statearr_39052[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36937__auto___39057);

return statearr_39052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36939__auto__);
});})(c__36937__auto___39057,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args39070 = [];
var len__25947__auto___39119 = arguments.length;
var i__25948__auto___39120 = (0);
while(true){
if((i__25948__auto___39120 < len__25947__auto___39119)){
args39070.push((arguments[i__25948__auto___39120]));

var G__39121 = (i__25948__auto___39120 + (1));
i__25948__auto___39120 = G__39121;
continue;
} else {
}
break;
}

var G__39072 = args39070.length;
switch (G__39072) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39070.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__36937__auto___39123 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36937__auto___39123,out){
return (function (){
var f__36938__auto__ = (function (){var switch__36825__auto__ = ((function (c__36937__auto___39123,out){
return (function (state_39096){
var state_val_39097 = (state_39096[(1)]);
if((state_val_39097 === (7))){
var inst_39078 = (state_39096[(7)]);
var inst_39078__$1 = (state_39096[(2)]);
var inst_39079 = (inst_39078__$1 == null);
var inst_39080 = cljs.core.not.call(null,inst_39079);
var state_39096__$1 = (function (){var statearr_39098 = state_39096;
(statearr_39098[(7)] = inst_39078__$1);

return statearr_39098;
})();
if(inst_39080){
var statearr_39099_39124 = state_39096__$1;
(statearr_39099_39124[(1)] = (8));

} else {
var statearr_39100_39125 = state_39096__$1;
(statearr_39100_39125[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39097 === (1))){
var inst_39073 = (0);
var state_39096__$1 = (function (){var statearr_39101 = state_39096;
(statearr_39101[(8)] = inst_39073);

return statearr_39101;
})();
var statearr_39102_39126 = state_39096__$1;
(statearr_39102_39126[(2)] = null);

(statearr_39102_39126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39097 === (4))){
var state_39096__$1 = state_39096;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39096__$1,(7),ch);
} else {
if((state_val_39097 === (6))){
var inst_39091 = (state_39096[(2)]);
var state_39096__$1 = state_39096;
var statearr_39103_39127 = state_39096__$1;
(statearr_39103_39127[(2)] = inst_39091);

(statearr_39103_39127[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39097 === (3))){
var inst_39093 = (state_39096[(2)]);
var inst_39094 = cljs.core.async.close_BANG_.call(null,out);
var state_39096__$1 = (function (){var statearr_39104 = state_39096;
(statearr_39104[(9)] = inst_39093);

return statearr_39104;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39096__$1,inst_39094);
} else {
if((state_val_39097 === (2))){
var inst_39073 = (state_39096[(8)]);
var inst_39075 = (inst_39073 < n);
var state_39096__$1 = state_39096;
if(cljs.core.truth_(inst_39075)){
var statearr_39105_39128 = state_39096__$1;
(statearr_39105_39128[(1)] = (4));

} else {
var statearr_39106_39129 = state_39096__$1;
(statearr_39106_39129[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39097 === (11))){
var inst_39073 = (state_39096[(8)]);
var inst_39083 = (state_39096[(2)]);
var inst_39084 = (inst_39073 + (1));
var inst_39073__$1 = inst_39084;
var state_39096__$1 = (function (){var statearr_39107 = state_39096;
(statearr_39107[(10)] = inst_39083);

(statearr_39107[(8)] = inst_39073__$1);

return statearr_39107;
})();
var statearr_39108_39130 = state_39096__$1;
(statearr_39108_39130[(2)] = null);

(statearr_39108_39130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39097 === (9))){
var state_39096__$1 = state_39096;
var statearr_39109_39131 = state_39096__$1;
(statearr_39109_39131[(2)] = null);

(statearr_39109_39131[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39097 === (5))){
var state_39096__$1 = state_39096;
var statearr_39110_39132 = state_39096__$1;
(statearr_39110_39132[(2)] = null);

(statearr_39110_39132[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39097 === (10))){
var inst_39088 = (state_39096[(2)]);
var state_39096__$1 = state_39096;
var statearr_39111_39133 = state_39096__$1;
(statearr_39111_39133[(2)] = inst_39088);

(statearr_39111_39133[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39097 === (8))){
var inst_39078 = (state_39096[(7)]);
var state_39096__$1 = state_39096;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39096__$1,(11),out,inst_39078);
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
});})(c__36937__auto___39123,out))
;
return ((function (switch__36825__auto__,c__36937__auto___39123,out){
return (function() {
var cljs$core$async$state_machine__36826__auto__ = null;
var cljs$core$async$state_machine__36826__auto____0 = (function (){
var statearr_39115 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39115[(0)] = cljs$core$async$state_machine__36826__auto__);

(statearr_39115[(1)] = (1));

return statearr_39115;
});
var cljs$core$async$state_machine__36826__auto____1 = (function (state_39096){
while(true){
var ret_value__36827__auto__ = (function (){try{while(true){
var result__36828__auto__ = switch__36825__auto__.call(null,state_39096);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36828__auto__;
}
break;
}
}catch (e39116){if((e39116 instanceof Object)){
var ex__36829__auto__ = e39116;
var statearr_39117_39134 = state_39096;
(statearr_39117_39134[(5)] = ex__36829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39096);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39116;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39135 = state_39096;
state_39096 = G__39135;
continue;
} else {
return ret_value__36827__auto__;
}
break;
}
});
cljs$core$async$state_machine__36826__auto__ = function(state_39096){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36826__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36826__auto____1.call(this,state_39096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36826__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36826__auto____0;
cljs$core$async$state_machine__36826__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36826__auto____1;
return cljs$core$async$state_machine__36826__auto__;
})()
;})(switch__36825__auto__,c__36937__auto___39123,out))
})();
var state__36939__auto__ = (function (){var statearr_39118 = f__36938__auto__.call(null);
(statearr_39118[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36937__auto___39123);

return statearr_39118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36939__auto__);
});})(c__36937__auto___39123,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async39143 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39143 = (function (map_LT_,f,ch,meta39144){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta39144 = meta39144;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39143.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39145,meta39144__$1){
var self__ = this;
var _39145__$1 = this;
return (new cljs.core.async.t_cljs$core$async39143(self__.map_LT_,self__.f,self__.ch,meta39144__$1));
});

cljs.core.async.t_cljs$core$async39143.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39145){
var self__ = this;
var _39145__$1 = this;
return self__.meta39144;
});

cljs.core.async.t_cljs$core$async39143.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async39143.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39143.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39143.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async39143.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async39146 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39146 = (function (map_LT_,f,ch,meta39144,_,fn1,meta39147){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta39144 = meta39144;
this._ = _;
this.fn1 = fn1;
this.meta39147 = meta39147;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39146.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_39148,meta39147__$1){
var self__ = this;
var _39148__$1 = this;
return (new cljs.core.async.t_cljs$core$async39146(self__.map_LT_,self__.f,self__.ch,self__.meta39144,self__._,self__.fn1,meta39147__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async39146.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_39148){
var self__ = this;
var _39148__$1 = this;
return self__.meta39147;
});})(___$1))
;

cljs.core.async.t_cljs$core$async39146.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async39146.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async39146.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async39146.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__39136_SHARP_){
return f1.call(null,(((p1__39136_SHARP_ == null))?null:self__.f.call(null,p1__39136_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async39146.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39144","meta39144",-1492334655,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async39143","cljs.core.async/t_cljs$core$async39143",1684902703,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta39147","meta39147",1701468437,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async39146.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39146.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39146";

cljs.core.async.t_cljs$core$async39146.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"cljs.core.async/t_cljs$core$async39146");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async39146 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async39146(map_LT___$1,f__$1,ch__$1,meta39144__$1,___$2,fn1__$1,meta39147){
return (new cljs.core.async.t_cljs$core$async39146(map_LT___$1,f__$1,ch__$1,meta39144__$1,___$2,fn1__$1,meta39147));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async39146(self__.map_LT_,self__.f,self__.ch,self__.meta39144,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__24860__auto__ = ret;
if(cljs.core.truth_(and__24860__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__24860__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async39143.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async39143.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async39143.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39144","meta39144",-1492334655,null)], null);
});

cljs.core.async.t_cljs$core$async39143.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39143.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39143";

cljs.core.async.t_cljs$core$async39143.cljs$lang$ctorPrWriter = (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"cljs.core.async/t_cljs$core$async39143");
});

cljs.core.async.__GT_t_cljs$core$async39143 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async39143(map_LT___$1,f__$1,ch__$1,meta39144){
return (new cljs.core.async.t_cljs$core$async39143(map_LT___$1,f__$1,ch__$1,meta39144));
});

}

return (new cljs.core.async.t_cljs$core$async39143(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async39152 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39152 = (function (map_GT_,f,ch,meta39153){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta39153 = meta39153;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39152.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39154,meta39153__$1){
var self__ = this;
var _39154__$1 = this;
return (new cljs.core.async.t_cljs$core$async39152(self__.map_GT_,self__.f,self__.ch,meta39153__$1));
});

cljs.core.async.t_cljs$core$async39152.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39154){
var self__ = this;
var _39154__$1 = this;
return self__.meta39153;
});

cljs.core.async.t_cljs$core$async39152.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async39152.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39152.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async39152.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async39152.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async39152.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async39152.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39153","meta39153",-1937499708,null)], null);
});

cljs.core.async.t_cljs$core$async39152.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39152.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39152";

cljs.core.async.t_cljs$core$async39152.cljs$lang$ctorPrWriter = (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"cljs.core.async/t_cljs$core$async39152");
});

cljs.core.async.__GT_t_cljs$core$async39152 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async39152(map_GT___$1,f__$1,ch__$1,meta39153){
return (new cljs.core.async.t_cljs$core$async39152(map_GT___$1,f__$1,ch__$1,meta39153));
});

}

return (new cljs.core.async.t_cljs$core$async39152(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async39158 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39158 = (function (filter_GT_,p,ch,meta39159){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta39159 = meta39159;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39158.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39160,meta39159__$1){
var self__ = this;
var _39160__$1 = this;
return (new cljs.core.async.t_cljs$core$async39158(self__.filter_GT_,self__.p,self__.ch,meta39159__$1));
});

cljs.core.async.t_cljs$core$async39158.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39160){
var self__ = this;
var _39160__$1 = this;
return self__.meta39159;
});

cljs.core.async.t_cljs$core$async39158.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async39158.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39158.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39158.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async39158.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async39158.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async39158.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async39158.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39159","meta39159",933664454,null)], null);
});

cljs.core.async.t_cljs$core$async39158.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39158.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39158";

cljs.core.async.t_cljs$core$async39158.cljs$lang$ctorPrWriter = (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"cljs.core.async/t_cljs$core$async39158");
});

cljs.core.async.__GT_t_cljs$core$async39158 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async39158(filter_GT___$1,p__$1,ch__$1,meta39159){
return (new cljs.core.async.t_cljs$core$async39158(filter_GT___$1,p__$1,ch__$1,meta39159));
});

}

return (new cljs.core.async.t_cljs$core$async39158(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args39161 = [];
var len__25947__auto___39205 = arguments.length;
var i__25948__auto___39206 = (0);
while(true){
if((i__25948__auto___39206 < len__25947__auto___39205)){
args39161.push((arguments[i__25948__auto___39206]));

var G__39207 = (i__25948__auto___39206 + (1));
i__25948__auto___39206 = G__39207;
continue;
} else {
}
break;
}

var G__39163 = args39161.length;
switch (G__39163) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39161.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__36937__auto___39209 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36937__auto___39209,out){
return (function (){
var f__36938__auto__ = (function (){var switch__36825__auto__ = ((function (c__36937__auto___39209,out){
return (function (state_39184){
var state_val_39185 = (state_39184[(1)]);
if((state_val_39185 === (7))){
var inst_39180 = (state_39184[(2)]);
var state_39184__$1 = state_39184;
var statearr_39186_39210 = state_39184__$1;
(statearr_39186_39210[(2)] = inst_39180);

(statearr_39186_39210[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39185 === (1))){
var state_39184__$1 = state_39184;
var statearr_39187_39211 = state_39184__$1;
(statearr_39187_39211[(2)] = null);

(statearr_39187_39211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39185 === (4))){
var inst_39166 = (state_39184[(7)]);
var inst_39166__$1 = (state_39184[(2)]);
var inst_39167 = (inst_39166__$1 == null);
var state_39184__$1 = (function (){var statearr_39188 = state_39184;
(statearr_39188[(7)] = inst_39166__$1);

return statearr_39188;
})();
if(cljs.core.truth_(inst_39167)){
var statearr_39189_39212 = state_39184__$1;
(statearr_39189_39212[(1)] = (5));

} else {
var statearr_39190_39213 = state_39184__$1;
(statearr_39190_39213[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39185 === (6))){
var inst_39166 = (state_39184[(7)]);
var inst_39171 = p.call(null,inst_39166);
var state_39184__$1 = state_39184;
if(cljs.core.truth_(inst_39171)){
var statearr_39191_39214 = state_39184__$1;
(statearr_39191_39214[(1)] = (8));

} else {
var statearr_39192_39215 = state_39184__$1;
(statearr_39192_39215[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39185 === (3))){
var inst_39182 = (state_39184[(2)]);
var state_39184__$1 = state_39184;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39184__$1,inst_39182);
} else {
if((state_val_39185 === (2))){
var state_39184__$1 = state_39184;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39184__$1,(4),ch);
} else {
if((state_val_39185 === (11))){
var inst_39174 = (state_39184[(2)]);
var state_39184__$1 = state_39184;
var statearr_39193_39216 = state_39184__$1;
(statearr_39193_39216[(2)] = inst_39174);

(statearr_39193_39216[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39185 === (9))){
var state_39184__$1 = state_39184;
var statearr_39194_39217 = state_39184__$1;
(statearr_39194_39217[(2)] = null);

(statearr_39194_39217[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39185 === (5))){
var inst_39169 = cljs.core.async.close_BANG_.call(null,out);
var state_39184__$1 = state_39184;
var statearr_39195_39218 = state_39184__$1;
(statearr_39195_39218[(2)] = inst_39169);

(statearr_39195_39218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39185 === (10))){
var inst_39177 = (state_39184[(2)]);
var state_39184__$1 = (function (){var statearr_39196 = state_39184;
(statearr_39196[(8)] = inst_39177);

return statearr_39196;
})();
var statearr_39197_39219 = state_39184__$1;
(statearr_39197_39219[(2)] = null);

(statearr_39197_39219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39185 === (8))){
var inst_39166 = (state_39184[(7)]);
var state_39184__$1 = state_39184;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39184__$1,(11),out,inst_39166);
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
});})(c__36937__auto___39209,out))
;
return ((function (switch__36825__auto__,c__36937__auto___39209,out){
return (function() {
var cljs$core$async$state_machine__36826__auto__ = null;
var cljs$core$async$state_machine__36826__auto____0 = (function (){
var statearr_39201 = [null,null,null,null,null,null,null,null,null];
(statearr_39201[(0)] = cljs$core$async$state_machine__36826__auto__);

(statearr_39201[(1)] = (1));

return statearr_39201;
});
var cljs$core$async$state_machine__36826__auto____1 = (function (state_39184){
while(true){
var ret_value__36827__auto__ = (function (){try{while(true){
var result__36828__auto__ = switch__36825__auto__.call(null,state_39184);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36828__auto__;
}
break;
}
}catch (e39202){if((e39202 instanceof Object)){
var ex__36829__auto__ = e39202;
var statearr_39203_39220 = state_39184;
(statearr_39203_39220[(5)] = ex__36829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39184);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39202;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39221 = state_39184;
state_39184 = G__39221;
continue;
} else {
return ret_value__36827__auto__;
}
break;
}
});
cljs$core$async$state_machine__36826__auto__ = function(state_39184){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36826__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36826__auto____1.call(this,state_39184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36826__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36826__auto____0;
cljs$core$async$state_machine__36826__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36826__auto____1;
return cljs$core$async$state_machine__36826__auto__;
})()
;})(switch__36825__auto__,c__36937__auto___39209,out))
})();
var state__36939__auto__ = (function (){var statearr_39204 = f__36938__auto__.call(null);
(statearr_39204[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36937__auto___39209);

return statearr_39204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36939__auto__);
});})(c__36937__auto___39209,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args39222 = [];
var len__25947__auto___39225 = arguments.length;
var i__25948__auto___39226 = (0);
while(true){
if((i__25948__auto___39226 < len__25947__auto___39225)){
args39222.push((arguments[i__25948__auto___39226]));

var G__39227 = (i__25948__auto___39226 + (1));
i__25948__auto___39226 = G__39227;
continue;
} else {
}
break;
}

var G__39224 = args39222.length;
switch (G__39224) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39222.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__36937__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36937__auto__){
return (function (){
var f__36938__auto__ = (function (){var switch__36825__auto__ = ((function (c__36937__auto__){
return (function (state_39394){
var state_val_39395 = (state_39394[(1)]);
if((state_val_39395 === (7))){
var inst_39390 = (state_39394[(2)]);
var state_39394__$1 = state_39394;
var statearr_39396_39437 = state_39394__$1;
(statearr_39396_39437[(2)] = inst_39390);

(statearr_39396_39437[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39395 === (20))){
var inst_39360 = (state_39394[(7)]);
var inst_39371 = (state_39394[(2)]);
var inst_39372 = cljs.core.next.call(null,inst_39360);
var inst_39346 = inst_39372;
var inst_39347 = null;
var inst_39348 = (0);
var inst_39349 = (0);
var state_39394__$1 = (function (){var statearr_39397 = state_39394;
(statearr_39397[(8)] = inst_39347);

(statearr_39397[(9)] = inst_39348);

(statearr_39397[(10)] = inst_39346);

(statearr_39397[(11)] = inst_39371);

(statearr_39397[(12)] = inst_39349);

return statearr_39397;
})();
var statearr_39398_39438 = state_39394__$1;
(statearr_39398_39438[(2)] = null);

(statearr_39398_39438[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39395 === (1))){
var state_39394__$1 = state_39394;
var statearr_39399_39439 = state_39394__$1;
(statearr_39399_39439[(2)] = null);

(statearr_39399_39439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39395 === (4))){
var inst_39335 = (state_39394[(13)]);
var inst_39335__$1 = (state_39394[(2)]);
var inst_39336 = (inst_39335__$1 == null);
var state_39394__$1 = (function (){var statearr_39400 = state_39394;
(statearr_39400[(13)] = inst_39335__$1);

return statearr_39400;
})();
if(cljs.core.truth_(inst_39336)){
var statearr_39401_39440 = state_39394__$1;
(statearr_39401_39440[(1)] = (5));

} else {
var statearr_39402_39441 = state_39394__$1;
(statearr_39402_39441[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39395 === (15))){
var state_39394__$1 = state_39394;
var statearr_39406_39442 = state_39394__$1;
(statearr_39406_39442[(2)] = null);

(statearr_39406_39442[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39395 === (21))){
var state_39394__$1 = state_39394;
var statearr_39407_39443 = state_39394__$1;
(statearr_39407_39443[(2)] = null);

(statearr_39407_39443[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39395 === (13))){
var inst_39347 = (state_39394[(8)]);
var inst_39348 = (state_39394[(9)]);
var inst_39346 = (state_39394[(10)]);
var inst_39349 = (state_39394[(12)]);
var inst_39356 = (state_39394[(2)]);
var inst_39357 = (inst_39349 + (1));
var tmp39403 = inst_39347;
var tmp39404 = inst_39348;
var tmp39405 = inst_39346;
var inst_39346__$1 = tmp39405;
var inst_39347__$1 = tmp39403;
var inst_39348__$1 = tmp39404;
var inst_39349__$1 = inst_39357;
var state_39394__$1 = (function (){var statearr_39408 = state_39394;
(statearr_39408[(8)] = inst_39347__$1);

(statearr_39408[(9)] = inst_39348__$1);

(statearr_39408[(10)] = inst_39346__$1);

(statearr_39408[(14)] = inst_39356);

(statearr_39408[(12)] = inst_39349__$1);

return statearr_39408;
})();
var statearr_39409_39444 = state_39394__$1;
(statearr_39409_39444[(2)] = null);

(statearr_39409_39444[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39395 === (22))){
var state_39394__$1 = state_39394;
var statearr_39410_39445 = state_39394__$1;
(statearr_39410_39445[(2)] = null);

(statearr_39410_39445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39395 === (6))){
var inst_39335 = (state_39394[(13)]);
var inst_39344 = f.call(null,inst_39335);
var inst_39345 = cljs.core.seq.call(null,inst_39344);
var inst_39346 = inst_39345;
var inst_39347 = null;
var inst_39348 = (0);
var inst_39349 = (0);
var state_39394__$1 = (function (){var statearr_39411 = state_39394;
(statearr_39411[(8)] = inst_39347);

(statearr_39411[(9)] = inst_39348);

(statearr_39411[(10)] = inst_39346);

(statearr_39411[(12)] = inst_39349);

return statearr_39411;
})();
var statearr_39412_39446 = state_39394__$1;
(statearr_39412_39446[(2)] = null);

(statearr_39412_39446[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39395 === (17))){
var inst_39360 = (state_39394[(7)]);
var inst_39364 = cljs.core.chunk_first.call(null,inst_39360);
var inst_39365 = cljs.core.chunk_rest.call(null,inst_39360);
var inst_39366 = cljs.core.count.call(null,inst_39364);
var inst_39346 = inst_39365;
var inst_39347 = inst_39364;
var inst_39348 = inst_39366;
var inst_39349 = (0);
var state_39394__$1 = (function (){var statearr_39413 = state_39394;
(statearr_39413[(8)] = inst_39347);

(statearr_39413[(9)] = inst_39348);

(statearr_39413[(10)] = inst_39346);

(statearr_39413[(12)] = inst_39349);

return statearr_39413;
})();
var statearr_39414_39447 = state_39394__$1;
(statearr_39414_39447[(2)] = null);

(statearr_39414_39447[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39395 === (3))){
var inst_39392 = (state_39394[(2)]);
var state_39394__$1 = state_39394;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39394__$1,inst_39392);
} else {
if((state_val_39395 === (12))){
var inst_39380 = (state_39394[(2)]);
var state_39394__$1 = state_39394;
var statearr_39415_39448 = state_39394__$1;
(statearr_39415_39448[(2)] = inst_39380);

(statearr_39415_39448[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39395 === (2))){
var state_39394__$1 = state_39394;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39394__$1,(4),in$);
} else {
if((state_val_39395 === (23))){
var inst_39388 = (state_39394[(2)]);
var state_39394__$1 = state_39394;
var statearr_39416_39449 = state_39394__$1;
(statearr_39416_39449[(2)] = inst_39388);

(statearr_39416_39449[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39395 === (19))){
var inst_39375 = (state_39394[(2)]);
var state_39394__$1 = state_39394;
var statearr_39417_39450 = state_39394__$1;
(statearr_39417_39450[(2)] = inst_39375);

(statearr_39417_39450[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39395 === (11))){
var inst_39346 = (state_39394[(10)]);
var inst_39360 = (state_39394[(7)]);
var inst_39360__$1 = cljs.core.seq.call(null,inst_39346);
var state_39394__$1 = (function (){var statearr_39418 = state_39394;
(statearr_39418[(7)] = inst_39360__$1);

return statearr_39418;
})();
if(inst_39360__$1){
var statearr_39419_39451 = state_39394__$1;
(statearr_39419_39451[(1)] = (14));

} else {
var statearr_39420_39452 = state_39394__$1;
(statearr_39420_39452[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39395 === (9))){
var inst_39382 = (state_39394[(2)]);
var inst_39383 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_39394__$1 = (function (){var statearr_39421 = state_39394;
(statearr_39421[(15)] = inst_39382);

return statearr_39421;
})();
if(cljs.core.truth_(inst_39383)){
var statearr_39422_39453 = state_39394__$1;
(statearr_39422_39453[(1)] = (21));

} else {
var statearr_39423_39454 = state_39394__$1;
(statearr_39423_39454[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39395 === (5))){
var inst_39338 = cljs.core.async.close_BANG_.call(null,out);
var state_39394__$1 = state_39394;
var statearr_39424_39455 = state_39394__$1;
(statearr_39424_39455[(2)] = inst_39338);

(statearr_39424_39455[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39395 === (14))){
var inst_39360 = (state_39394[(7)]);
var inst_39362 = cljs.core.chunked_seq_QMARK_.call(null,inst_39360);
var state_39394__$1 = state_39394;
if(inst_39362){
var statearr_39425_39456 = state_39394__$1;
(statearr_39425_39456[(1)] = (17));

} else {
var statearr_39426_39457 = state_39394__$1;
(statearr_39426_39457[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39395 === (16))){
var inst_39378 = (state_39394[(2)]);
var state_39394__$1 = state_39394;
var statearr_39427_39458 = state_39394__$1;
(statearr_39427_39458[(2)] = inst_39378);

(statearr_39427_39458[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39395 === (10))){
var inst_39347 = (state_39394[(8)]);
var inst_39349 = (state_39394[(12)]);
var inst_39354 = cljs.core._nth.call(null,inst_39347,inst_39349);
var state_39394__$1 = state_39394;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39394__$1,(13),out,inst_39354);
} else {
if((state_val_39395 === (18))){
var inst_39360 = (state_39394[(7)]);
var inst_39369 = cljs.core.first.call(null,inst_39360);
var state_39394__$1 = state_39394;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39394__$1,(20),out,inst_39369);
} else {
if((state_val_39395 === (8))){
var inst_39348 = (state_39394[(9)]);
var inst_39349 = (state_39394[(12)]);
var inst_39351 = (inst_39349 < inst_39348);
var inst_39352 = inst_39351;
var state_39394__$1 = state_39394;
if(cljs.core.truth_(inst_39352)){
var statearr_39428_39459 = state_39394__$1;
(statearr_39428_39459[(1)] = (10));

} else {
var statearr_39429_39460 = state_39394__$1;
(statearr_39429_39460[(1)] = (11));

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
}
}
}
}
}
}
});})(c__36937__auto__))
;
return ((function (switch__36825__auto__,c__36937__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__36826__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__36826__auto____0 = (function (){
var statearr_39433 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39433[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__36826__auto__);

(statearr_39433[(1)] = (1));

return statearr_39433;
});
var cljs$core$async$mapcat_STAR__$_state_machine__36826__auto____1 = (function (state_39394){
while(true){
var ret_value__36827__auto__ = (function (){try{while(true){
var result__36828__auto__ = switch__36825__auto__.call(null,state_39394);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36828__auto__;
}
break;
}
}catch (e39434){if((e39434 instanceof Object)){
var ex__36829__auto__ = e39434;
var statearr_39435_39461 = state_39394;
(statearr_39435_39461[(5)] = ex__36829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39394);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39434;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39462 = state_39394;
state_39394 = G__39462;
continue;
} else {
return ret_value__36827__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__36826__auto__ = function(state_39394){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__36826__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__36826__auto____1.call(this,state_39394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__36826__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__36826__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__36826__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__36826__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__36826__auto__;
})()
;})(switch__36825__auto__,c__36937__auto__))
})();
var state__36939__auto__ = (function (){var statearr_39436 = f__36938__auto__.call(null);
(statearr_39436[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36937__auto__);

return statearr_39436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36939__auto__);
});})(c__36937__auto__))
);

return c__36937__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args39463 = [];
var len__25947__auto___39466 = arguments.length;
var i__25948__auto___39467 = (0);
while(true){
if((i__25948__auto___39467 < len__25947__auto___39466)){
args39463.push((arguments[i__25948__auto___39467]));

var G__39468 = (i__25948__auto___39467 + (1));
i__25948__auto___39467 = G__39468;
continue;
} else {
}
break;
}

var G__39465 = args39463.length;
switch (G__39465) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39463.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args39470 = [];
var len__25947__auto___39473 = arguments.length;
var i__25948__auto___39474 = (0);
while(true){
if((i__25948__auto___39474 < len__25947__auto___39473)){
args39470.push((arguments[i__25948__auto___39474]));

var G__39475 = (i__25948__auto___39474 + (1));
i__25948__auto___39474 = G__39475;
continue;
} else {
}
break;
}

var G__39472 = args39470.length;
switch (G__39472) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39470.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args39477 = [];
var len__25947__auto___39528 = arguments.length;
var i__25948__auto___39529 = (0);
while(true){
if((i__25948__auto___39529 < len__25947__auto___39528)){
args39477.push((arguments[i__25948__auto___39529]));

var G__39530 = (i__25948__auto___39529 + (1));
i__25948__auto___39529 = G__39530;
continue;
} else {
}
break;
}

var G__39479 = args39477.length;
switch (G__39479) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39477.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__36937__auto___39532 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36937__auto___39532,out){
return (function (){
var f__36938__auto__ = (function (){var switch__36825__auto__ = ((function (c__36937__auto___39532,out){
return (function (state_39503){
var state_val_39504 = (state_39503[(1)]);
if((state_val_39504 === (7))){
var inst_39498 = (state_39503[(2)]);
var state_39503__$1 = state_39503;
var statearr_39505_39533 = state_39503__$1;
(statearr_39505_39533[(2)] = inst_39498);

(statearr_39505_39533[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39504 === (1))){
var inst_39480 = null;
var state_39503__$1 = (function (){var statearr_39506 = state_39503;
(statearr_39506[(7)] = inst_39480);

return statearr_39506;
})();
var statearr_39507_39534 = state_39503__$1;
(statearr_39507_39534[(2)] = null);

(statearr_39507_39534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39504 === (4))){
var inst_39483 = (state_39503[(8)]);
var inst_39483__$1 = (state_39503[(2)]);
var inst_39484 = (inst_39483__$1 == null);
var inst_39485 = cljs.core.not.call(null,inst_39484);
var state_39503__$1 = (function (){var statearr_39508 = state_39503;
(statearr_39508[(8)] = inst_39483__$1);

return statearr_39508;
})();
if(inst_39485){
var statearr_39509_39535 = state_39503__$1;
(statearr_39509_39535[(1)] = (5));

} else {
var statearr_39510_39536 = state_39503__$1;
(statearr_39510_39536[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39504 === (6))){
var state_39503__$1 = state_39503;
var statearr_39511_39537 = state_39503__$1;
(statearr_39511_39537[(2)] = null);

(statearr_39511_39537[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39504 === (3))){
var inst_39500 = (state_39503[(2)]);
var inst_39501 = cljs.core.async.close_BANG_.call(null,out);
var state_39503__$1 = (function (){var statearr_39512 = state_39503;
(statearr_39512[(9)] = inst_39500);

return statearr_39512;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39503__$1,inst_39501);
} else {
if((state_val_39504 === (2))){
var state_39503__$1 = state_39503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39503__$1,(4),ch);
} else {
if((state_val_39504 === (11))){
var inst_39483 = (state_39503[(8)]);
var inst_39492 = (state_39503[(2)]);
var inst_39480 = inst_39483;
var state_39503__$1 = (function (){var statearr_39513 = state_39503;
(statearr_39513[(10)] = inst_39492);

(statearr_39513[(7)] = inst_39480);

return statearr_39513;
})();
var statearr_39514_39538 = state_39503__$1;
(statearr_39514_39538[(2)] = null);

(statearr_39514_39538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39504 === (9))){
var inst_39483 = (state_39503[(8)]);
var state_39503__$1 = state_39503;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39503__$1,(11),out,inst_39483);
} else {
if((state_val_39504 === (5))){
var inst_39480 = (state_39503[(7)]);
var inst_39483 = (state_39503[(8)]);
var inst_39487 = cljs.core._EQ_.call(null,inst_39483,inst_39480);
var state_39503__$1 = state_39503;
if(inst_39487){
var statearr_39516_39539 = state_39503__$1;
(statearr_39516_39539[(1)] = (8));

} else {
var statearr_39517_39540 = state_39503__$1;
(statearr_39517_39540[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39504 === (10))){
var inst_39495 = (state_39503[(2)]);
var state_39503__$1 = state_39503;
var statearr_39518_39541 = state_39503__$1;
(statearr_39518_39541[(2)] = inst_39495);

(statearr_39518_39541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39504 === (8))){
var inst_39480 = (state_39503[(7)]);
var tmp39515 = inst_39480;
var inst_39480__$1 = tmp39515;
var state_39503__$1 = (function (){var statearr_39519 = state_39503;
(statearr_39519[(7)] = inst_39480__$1);

return statearr_39519;
})();
var statearr_39520_39542 = state_39503__$1;
(statearr_39520_39542[(2)] = null);

(statearr_39520_39542[(1)] = (2));


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
});})(c__36937__auto___39532,out))
;
return ((function (switch__36825__auto__,c__36937__auto___39532,out){
return (function() {
var cljs$core$async$state_machine__36826__auto__ = null;
var cljs$core$async$state_machine__36826__auto____0 = (function (){
var statearr_39524 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39524[(0)] = cljs$core$async$state_machine__36826__auto__);

(statearr_39524[(1)] = (1));

return statearr_39524;
});
var cljs$core$async$state_machine__36826__auto____1 = (function (state_39503){
while(true){
var ret_value__36827__auto__ = (function (){try{while(true){
var result__36828__auto__ = switch__36825__auto__.call(null,state_39503);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36828__auto__;
}
break;
}
}catch (e39525){if((e39525 instanceof Object)){
var ex__36829__auto__ = e39525;
var statearr_39526_39543 = state_39503;
(statearr_39526_39543[(5)] = ex__36829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39525;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39544 = state_39503;
state_39503 = G__39544;
continue;
} else {
return ret_value__36827__auto__;
}
break;
}
});
cljs$core$async$state_machine__36826__auto__ = function(state_39503){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36826__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36826__auto____1.call(this,state_39503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36826__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36826__auto____0;
cljs$core$async$state_machine__36826__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36826__auto____1;
return cljs$core$async$state_machine__36826__auto__;
})()
;})(switch__36825__auto__,c__36937__auto___39532,out))
})();
var state__36939__auto__ = (function (){var statearr_39527 = f__36938__auto__.call(null);
(statearr_39527[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36937__auto___39532);

return statearr_39527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36939__auto__);
});})(c__36937__auto___39532,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args39545 = [];
var len__25947__auto___39615 = arguments.length;
var i__25948__auto___39616 = (0);
while(true){
if((i__25948__auto___39616 < len__25947__auto___39615)){
args39545.push((arguments[i__25948__auto___39616]));

var G__39617 = (i__25948__auto___39616 + (1));
i__25948__auto___39616 = G__39617;
continue;
} else {
}
break;
}

var G__39547 = args39545.length;
switch (G__39547) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39545.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__36937__auto___39619 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36937__auto___39619,out){
return (function (){
var f__36938__auto__ = (function (){var switch__36825__auto__ = ((function (c__36937__auto___39619,out){
return (function (state_39585){
var state_val_39586 = (state_39585[(1)]);
if((state_val_39586 === (7))){
var inst_39581 = (state_39585[(2)]);
var state_39585__$1 = state_39585;
var statearr_39587_39620 = state_39585__$1;
(statearr_39587_39620[(2)] = inst_39581);

(statearr_39587_39620[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39586 === (1))){
var inst_39548 = (new Array(n));
var inst_39549 = inst_39548;
var inst_39550 = (0);
var state_39585__$1 = (function (){var statearr_39588 = state_39585;
(statearr_39588[(7)] = inst_39550);

(statearr_39588[(8)] = inst_39549);

return statearr_39588;
})();
var statearr_39589_39621 = state_39585__$1;
(statearr_39589_39621[(2)] = null);

(statearr_39589_39621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39586 === (4))){
var inst_39553 = (state_39585[(9)]);
var inst_39553__$1 = (state_39585[(2)]);
var inst_39554 = (inst_39553__$1 == null);
var inst_39555 = cljs.core.not.call(null,inst_39554);
var state_39585__$1 = (function (){var statearr_39590 = state_39585;
(statearr_39590[(9)] = inst_39553__$1);

return statearr_39590;
})();
if(inst_39555){
var statearr_39591_39622 = state_39585__$1;
(statearr_39591_39622[(1)] = (5));

} else {
var statearr_39592_39623 = state_39585__$1;
(statearr_39592_39623[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39586 === (15))){
var inst_39575 = (state_39585[(2)]);
var state_39585__$1 = state_39585;
var statearr_39593_39624 = state_39585__$1;
(statearr_39593_39624[(2)] = inst_39575);

(statearr_39593_39624[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39586 === (13))){
var state_39585__$1 = state_39585;
var statearr_39594_39625 = state_39585__$1;
(statearr_39594_39625[(2)] = null);

(statearr_39594_39625[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39586 === (6))){
var inst_39550 = (state_39585[(7)]);
var inst_39571 = (inst_39550 > (0));
var state_39585__$1 = state_39585;
if(cljs.core.truth_(inst_39571)){
var statearr_39595_39626 = state_39585__$1;
(statearr_39595_39626[(1)] = (12));

} else {
var statearr_39596_39627 = state_39585__$1;
(statearr_39596_39627[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39586 === (3))){
var inst_39583 = (state_39585[(2)]);
var state_39585__$1 = state_39585;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39585__$1,inst_39583);
} else {
if((state_val_39586 === (12))){
var inst_39549 = (state_39585[(8)]);
var inst_39573 = cljs.core.vec.call(null,inst_39549);
var state_39585__$1 = state_39585;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39585__$1,(15),out,inst_39573);
} else {
if((state_val_39586 === (2))){
var state_39585__$1 = state_39585;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39585__$1,(4),ch);
} else {
if((state_val_39586 === (11))){
var inst_39565 = (state_39585[(2)]);
var inst_39566 = (new Array(n));
var inst_39549 = inst_39566;
var inst_39550 = (0);
var state_39585__$1 = (function (){var statearr_39597 = state_39585;
(statearr_39597[(7)] = inst_39550);

(statearr_39597[(10)] = inst_39565);

(statearr_39597[(8)] = inst_39549);

return statearr_39597;
})();
var statearr_39598_39628 = state_39585__$1;
(statearr_39598_39628[(2)] = null);

(statearr_39598_39628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39586 === (9))){
var inst_39549 = (state_39585[(8)]);
var inst_39563 = cljs.core.vec.call(null,inst_39549);
var state_39585__$1 = state_39585;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39585__$1,(11),out,inst_39563);
} else {
if((state_val_39586 === (5))){
var inst_39550 = (state_39585[(7)]);
var inst_39553 = (state_39585[(9)]);
var inst_39558 = (state_39585[(11)]);
var inst_39549 = (state_39585[(8)]);
var inst_39557 = (inst_39549[inst_39550] = inst_39553);
var inst_39558__$1 = (inst_39550 + (1));
var inst_39559 = (inst_39558__$1 < n);
var state_39585__$1 = (function (){var statearr_39599 = state_39585;
(statearr_39599[(12)] = inst_39557);

(statearr_39599[(11)] = inst_39558__$1);

return statearr_39599;
})();
if(cljs.core.truth_(inst_39559)){
var statearr_39600_39629 = state_39585__$1;
(statearr_39600_39629[(1)] = (8));

} else {
var statearr_39601_39630 = state_39585__$1;
(statearr_39601_39630[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39586 === (14))){
var inst_39578 = (state_39585[(2)]);
var inst_39579 = cljs.core.async.close_BANG_.call(null,out);
var state_39585__$1 = (function (){var statearr_39603 = state_39585;
(statearr_39603[(13)] = inst_39578);

return statearr_39603;
})();
var statearr_39604_39631 = state_39585__$1;
(statearr_39604_39631[(2)] = inst_39579);

(statearr_39604_39631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39586 === (10))){
var inst_39569 = (state_39585[(2)]);
var state_39585__$1 = state_39585;
var statearr_39605_39632 = state_39585__$1;
(statearr_39605_39632[(2)] = inst_39569);

(statearr_39605_39632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39586 === (8))){
var inst_39558 = (state_39585[(11)]);
var inst_39549 = (state_39585[(8)]);
var tmp39602 = inst_39549;
var inst_39549__$1 = tmp39602;
var inst_39550 = inst_39558;
var state_39585__$1 = (function (){var statearr_39606 = state_39585;
(statearr_39606[(7)] = inst_39550);

(statearr_39606[(8)] = inst_39549__$1);

return statearr_39606;
})();
var statearr_39607_39633 = state_39585__$1;
(statearr_39607_39633[(2)] = null);

(statearr_39607_39633[(1)] = (2));


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
});})(c__36937__auto___39619,out))
;
return ((function (switch__36825__auto__,c__36937__auto___39619,out){
return (function() {
var cljs$core$async$state_machine__36826__auto__ = null;
var cljs$core$async$state_machine__36826__auto____0 = (function (){
var statearr_39611 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39611[(0)] = cljs$core$async$state_machine__36826__auto__);

(statearr_39611[(1)] = (1));

return statearr_39611;
});
var cljs$core$async$state_machine__36826__auto____1 = (function (state_39585){
while(true){
var ret_value__36827__auto__ = (function (){try{while(true){
var result__36828__auto__ = switch__36825__auto__.call(null,state_39585);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36828__auto__;
}
break;
}
}catch (e39612){if((e39612 instanceof Object)){
var ex__36829__auto__ = e39612;
var statearr_39613_39634 = state_39585;
(statearr_39613_39634[(5)] = ex__36829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39585);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39612;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39635 = state_39585;
state_39585 = G__39635;
continue;
} else {
return ret_value__36827__auto__;
}
break;
}
});
cljs$core$async$state_machine__36826__auto__ = function(state_39585){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36826__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36826__auto____1.call(this,state_39585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36826__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36826__auto____0;
cljs$core$async$state_machine__36826__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36826__auto____1;
return cljs$core$async$state_machine__36826__auto__;
})()
;})(switch__36825__auto__,c__36937__auto___39619,out))
})();
var state__36939__auto__ = (function (){var statearr_39614 = f__36938__auto__.call(null);
(statearr_39614[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36937__auto___39619);

return statearr_39614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36939__auto__);
});})(c__36937__auto___39619,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args39636 = [];
var len__25947__auto___39710 = arguments.length;
var i__25948__auto___39711 = (0);
while(true){
if((i__25948__auto___39711 < len__25947__auto___39710)){
args39636.push((arguments[i__25948__auto___39711]));

var G__39712 = (i__25948__auto___39711 + (1));
i__25948__auto___39711 = G__39712;
continue;
} else {
}
break;
}

var G__39638 = args39636.length;
switch (G__39638) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39636.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__36937__auto___39714 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36937__auto___39714,out){
return (function (){
var f__36938__auto__ = (function (){var switch__36825__auto__ = ((function (c__36937__auto___39714,out){
return (function (state_39680){
var state_val_39681 = (state_39680[(1)]);
if((state_val_39681 === (7))){
var inst_39676 = (state_39680[(2)]);
var state_39680__$1 = state_39680;
var statearr_39682_39715 = state_39680__$1;
(statearr_39682_39715[(2)] = inst_39676);

(statearr_39682_39715[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39681 === (1))){
var inst_39639 = [];
var inst_39640 = inst_39639;
var inst_39641 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_39680__$1 = (function (){var statearr_39683 = state_39680;
(statearr_39683[(7)] = inst_39641);

(statearr_39683[(8)] = inst_39640);

return statearr_39683;
})();
var statearr_39684_39716 = state_39680__$1;
(statearr_39684_39716[(2)] = null);

(statearr_39684_39716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39681 === (4))){
var inst_39644 = (state_39680[(9)]);
var inst_39644__$1 = (state_39680[(2)]);
var inst_39645 = (inst_39644__$1 == null);
var inst_39646 = cljs.core.not.call(null,inst_39645);
var state_39680__$1 = (function (){var statearr_39685 = state_39680;
(statearr_39685[(9)] = inst_39644__$1);

return statearr_39685;
})();
if(inst_39646){
var statearr_39686_39717 = state_39680__$1;
(statearr_39686_39717[(1)] = (5));

} else {
var statearr_39687_39718 = state_39680__$1;
(statearr_39687_39718[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39681 === (15))){
var inst_39670 = (state_39680[(2)]);
var state_39680__$1 = state_39680;
var statearr_39688_39719 = state_39680__$1;
(statearr_39688_39719[(2)] = inst_39670);

(statearr_39688_39719[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39681 === (13))){
var state_39680__$1 = state_39680;
var statearr_39689_39720 = state_39680__$1;
(statearr_39689_39720[(2)] = null);

(statearr_39689_39720[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39681 === (6))){
var inst_39640 = (state_39680[(8)]);
var inst_39665 = inst_39640.length;
var inst_39666 = (inst_39665 > (0));
var state_39680__$1 = state_39680;
if(cljs.core.truth_(inst_39666)){
var statearr_39690_39721 = state_39680__$1;
(statearr_39690_39721[(1)] = (12));

} else {
var statearr_39691_39722 = state_39680__$1;
(statearr_39691_39722[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39681 === (3))){
var inst_39678 = (state_39680[(2)]);
var state_39680__$1 = state_39680;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39680__$1,inst_39678);
} else {
if((state_val_39681 === (12))){
var inst_39640 = (state_39680[(8)]);
var inst_39668 = cljs.core.vec.call(null,inst_39640);
var state_39680__$1 = state_39680;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39680__$1,(15),out,inst_39668);
} else {
if((state_val_39681 === (2))){
var state_39680__$1 = state_39680;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39680__$1,(4),ch);
} else {
if((state_val_39681 === (11))){
var inst_39644 = (state_39680[(9)]);
var inst_39648 = (state_39680[(10)]);
var inst_39658 = (state_39680[(2)]);
var inst_39659 = [];
var inst_39660 = inst_39659.push(inst_39644);
var inst_39640 = inst_39659;
var inst_39641 = inst_39648;
var state_39680__$1 = (function (){var statearr_39692 = state_39680;
(statearr_39692[(11)] = inst_39658);

(statearr_39692[(7)] = inst_39641);

(statearr_39692[(8)] = inst_39640);

(statearr_39692[(12)] = inst_39660);

return statearr_39692;
})();
var statearr_39693_39723 = state_39680__$1;
(statearr_39693_39723[(2)] = null);

(statearr_39693_39723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39681 === (9))){
var inst_39640 = (state_39680[(8)]);
var inst_39656 = cljs.core.vec.call(null,inst_39640);
var state_39680__$1 = state_39680;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39680__$1,(11),out,inst_39656);
} else {
if((state_val_39681 === (5))){
var inst_39641 = (state_39680[(7)]);
var inst_39644 = (state_39680[(9)]);
var inst_39648 = (state_39680[(10)]);
var inst_39648__$1 = f.call(null,inst_39644);
var inst_39649 = cljs.core._EQ_.call(null,inst_39648__$1,inst_39641);
var inst_39650 = cljs.core.keyword_identical_QMARK_.call(null,inst_39641,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_39651 = (inst_39649) || (inst_39650);
var state_39680__$1 = (function (){var statearr_39694 = state_39680;
(statearr_39694[(10)] = inst_39648__$1);

return statearr_39694;
})();
if(cljs.core.truth_(inst_39651)){
var statearr_39695_39724 = state_39680__$1;
(statearr_39695_39724[(1)] = (8));

} else {
var statearr_39696_39725 = state_39680__$1;
(statearr_39696_39725[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39681 === (14))){
var inst_39673 = (state_39680[(2)]);
var inst_39674 = cljs.core.async.close_BANG_.call(null,out);
var state_39680__$1 = (function (){var statearr_39698 = state_39680;
(statearr_39698[(13)] = inst_39673);

return statearr_39698;
})();
var statearr_39699_39726 = state_39680__$1;
(statearr_39699_39726[(2)] = inst_39674);

(statearr_39699_39726[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39681 === (10))){
var inst_39663 = (state_39680[(2)]);
var state_39680__$1 = state_39680;
var statearr_39700_39727 = state_39680__$1;
(statearr_39700_39727[(2)] = inst_39663);

(statearr_39700_39727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39681 === (8))){
var inst_39640 = (state_39680[(8)]);
var inst_39644 = (state_39680[(9)]);
var inst_39648 = (state_39680[(10)]);
var inst_39653 = inst_39640.push(inst_39644);
var tmp39697 = inst_39640;
var inst_39640__$1 = tmp39697;
var inst_39641 = inst_39648;
var state_39680__$1 = (function (){var statearr_39701 = state_39680;
(statearr_39701[(14)] = inst_39653);

(statearr_39701[(7)] = inst_39641);

(statearr_39701[(8)] = inst_39640__$1);

return statearr_39701;
})();
var statearr_39702_39728 = state_39680__$1;
(statearr_39702_39728[(2)] = null);

(statearr_39702_39728[(1)] = (2));


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
});})(c__36937__auto___39714,out))
;
return ((function (switch__36825__auto__,c__36937__auto___39714,out){
return (function() {
var cljs$core$async$state_machine__36826__auto__ = null;
var cljs$core$async$state_machine__36826__auto____0 = (function (){
var statearr_39706 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39706[(0)] = cljs$core$async$state_machine__36826__auto__);

(statearr_39706[(1)] = (1));

return statearr_39706;
});
var cljs$core$async$state_machine__36826__auto____1 = (function (state_39680){
while(true){
var ret_value__36827__auto__ = (function (){try{while(true){
var result__36828__auto__ = switch__36825__auto__.call(null,state_39680);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36828__auto__;
}
break;
}
}catch (e39707){if((e39707 instanceof Object)){
var ex__36829__auto__ = e39707;
var statearr_39708_39729 = state_39680;
(statearr_39708_39729[(5)] = ex__36829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39680);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39707;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39730 = state_39680;
state_39680 = G__39730;
continue;
} else {
return ret_value__36827__auto__;
}
break;
}
});
cljs$core$async$state_machine__36826__auto__ = function(state_39680){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36826__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36826__auto____1.call(this,state_39680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36826__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36826__auto____0;
cljs$core$async$state_machine__36826__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36826__auto____1;
return cljs$core$async$state_machine__36826__auto__;
})()
;})(switch__36825__auto__,c__36937__auto___39714,out))
})();
var state__36939__auto__ = (function (){var statearr_39709 = f__36938__auto__.call(null);
(statearr_39709[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36937__auto___39714);

return statearr_39709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36939__auto__);
});})(c__36937__auto___39714,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1486291272010