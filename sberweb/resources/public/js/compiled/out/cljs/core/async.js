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
var args18709 = [];
var len__7326__auto___18715 = arguments.length;
var i__7327__auto___18716 = (0);
while(true){
if((i__7327__auto___18716 < len__7326__auto___18715)){
args18709.push((arguments[i__7327__auto___18716]));

var G__18717 = (i__7327__auto___18716 + (1));
i__7327__auto___18716 = G__18717;
continue;
} else {
}
break;
}

var G__18711 = args18709.length;
switch (G__18711) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18709.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async18712 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18712 = (function (f,blockable,meta18713){
this.f = f;
this.blockable = blockable;
this.meta18713 = meta18713;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18712.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18714,meta18713__$1){
var self__ = this;
var _18714__$1 = this;
return (new cljs.core.async.t_cljs$core$async18712(self__.f,self__.blockable,meta18713__$1));
});

cljs.core.async.t_cljs$core$async18712.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18714){
var self__ = this;
var _18714__$1 = this;
return self__.meta18713;
});

cljs.core.async.t_cljs$core$async18712.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async18712.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async18712.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async18712.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async18712.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta18713","meta18713",1950755779,null)], null);
});

cljs.core.async.t_cljs$core$async18712.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18712.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18712";

cljs.core.async.t_cljs$core$async18712.cljs$lang$ctorPrWriter = (function (this__6857__auto__,writer__6858__auto__,opt__6859__auto__){
return cljs.core._write.call(null,writer__6858__auto__,"cljs.core.async/t_cljs$core$async18712");
});

cljs.core.async.__GT_t_cljs$core$async18712 = (function cljs$core$async$__GT_t_cljs$core$async18712(f__$1,blockable__$1,meta18713){
return (new cljs.core.async.t_cljs$core$async18712(f__$1,blockable__$1,meta18713));
});

}

return (new cljs.core.async.t_cljs$core$async18712(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args18721 = [];
var len__7326__auto___18724 = arguments.length;
var i__7327__auto___18725 = (0);
while(true){
if((i__7327__auto___18725 < len__7326__auto___18724)){
args18721.push((arguments[i__7327__auto___18725]));

var G__18726 = (i__7327__auto___18725 + (1));
i__7327__auto___18725 = G__18726;
continue;
} else {
}
break;
}

var G__18723 = args18721.length;
switch (G__18723) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18721.length)].join('')));

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
var args18728 = [];
var len__7326__auto___18731 = arguments.length;
var i__7327__auto___18732 = (0);
while(true){
if((i__7327__auto___18732 < len__7326__auto___18731)){
args18728.push((arguments[i__7327__auto___18732]));

var G__18733 = (i__7327__auto___18732 + (1));
i__7327__auto___18732 = G__18733;
continue;
} else {
}
break;
}

var G__18730 = args18728.length;
switch (G__18730) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18728.length)].join('')));

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
var args18735 = [];
var len__7326__auto___18738 = arguments.length;
var i__7327__auto___18739 = (0);
while(true){
if((i__7327__auto___18739 < len__7326__auto___18738)){
args18735.push((arguments[i__7327__auto___18739]));

var G__18740 = (i__7327__auto___18739 + (1));
i__7327__auto___18739 = G__18740;
continue;
} else {
}
break;
}

var G__18737 = args18735.length;
switch (G__18737) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18735.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_18742 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_18742);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_18742,ret){
return (function (){
return fn1.call(null,val_18742);
});})(val_18742,ret))
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
var args18743 = [];
var len__7326__auto___18746 = arguments.length;
var i__7327__auto___18747 = (0);
while(true){
if((i__7327__auto___18747 < len__7326__auto___18746)){
args18743.push((arguments[i__7327__auto___18747]));

var G__18748 = (i__7327__auto___18747 + (1));
i__7327__auto___18747 = G__18748;
continue;
} else {
}
break;
}

var G__18745 = args18743.length;
switch (G__18745) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18743.length)].join('')));

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
var n__7166__auto___18750 = n;
var x_18751 = (0);
while(true){
if((x_18751 < n__7166__auto___18750)){
(a[x_18751] = (0));

var G__18752 = (x_18751 + (1));
x_18751 = G__18752;
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

var G__18753 = (i + (1));
i = G__18753;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async18757 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18757 = (function (alt_flag,flag,meta18758){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta18758 = meta18758;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18757.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_18759,meta18758__$1){
var self__ = this;
var _18759__$1 = this;
return (new cljs.core.async.t_cljs$core$async18757(self__.alt_flag,self__.flag,meta18758__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async18757.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_18759){
var self__ = this;
var _18759__$1 = this;
return self__.meta18758;
});})(flag))
;

cljs.core.async.t_cljs$core$async18757.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async18757.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async18757.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async18757.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async18757.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta18758","meta18758",1354231216,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async18757.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18757.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18757";

cljs.core.async.t_cljs$core$async18757.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__6857__auto__,writer__6858__auto__,opt__6859__auto__){
return cljs.core._write.call(null,writer__6858__auto__,"cljs.core.async/t_cljs$core$async18757");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async18757 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async18757(alt_flag__$1,flag__$1,meta18758){
return (new cljs.core.async.t_cljs$core$async18757(alt_flag__$1,flag__$1,meta18758));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async18757(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async18763 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18763 = (function (alt_handler,flag,cb,meta18764){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta18764 = meta18764;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18763.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18765,meta18764__$1){
var self__ = this;
var _18765__$1 = this;
return (new cljs.core.async.t_cljs$core$async18763(self__.alt_handler,self__.flag,self__.cb,meta18764__$1));
});

cljs.core.async.t_cljs$core$async18763.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18765){
var self__ = this;
var _18765__$1 = this;
return self__.meta18764;
});

cljs.core.async.t_cljs$core$async18763.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async18763.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async18763.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async18763.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async18763.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta18764","meta18764",-562915130,null)], null);
});

cljs.core.async.t_cljs$core$async18763.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18763.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18763";

cljs.core.async.t_cljs$core$async18763.cljs$lang$ctorPrWriter = (function (this__6857__auto__,writer__6858__auto__,opt__6859__auto__){
return cljs.core._write.call(null,writer__6858__auto__,"cljs.core.async/t_cljs$core$async18763");
});

cljs.core.async.__GT_t_cljs$core$async18763 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async18763(alt_handler__$1,flag__$1,cb__$1,meta18764){
return (new cljs.core.async.t_cljs$core$async18763(alt_handler__$1,flag__$1,cb__$1,meta18764));
});

}

return (new cljs.core.async.t_cljs$core$async18763(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__18766_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18766_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18767_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18767_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__6251__auto__ = wport;
if(cljs.core.truth_(or__6251__auto__)){
return or__6251__auto__;
} else {
return port;
}
})()], null));
} else {
var G__18768 = (i + (1));
i = G__18768;
continue;
}
} else {
return null;
}
break;
}
})();
var or__6251__auto__ = ret;
if(cljs.core.truth_(or__6251__auto__)){
return or__6251__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__6239__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__6239__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__6239__auto__;
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
var args__7333__auto__ = [];
var len__7326__auto___18774 = arguments.length;
var i__7327__auto___18775 = (0);
while(true){
if((i__7327__auto___18775 < len__7326__auto___18774)){
args__7333__auto__.push((arguments[i__7327__auto___18775]));

var G__18776 = (i__7327__auto___18775 + (1));
i__7327__auto___18775 = G__18776;
continue;
} else {
}
break;
}

var argseq__7334__auto__ = ((((1) < args__7333__auto__.length))?(new cljs.core.IndexedSeq(args__7333__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7334__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__18771){
var map__18772 = p__18771;
var map__18772__$1 = ((((!((map__18772 == null)))?((((map__18772.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18772.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18772):map__18772);
var opts = map__18772__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq18769){
var G__18770 = cljs.core.first.call(null,seq18769);
var seq18769__$1 = cljs.core.next.call(null,seq18769);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18770,seq18769__$1);
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
var args18777 = [];
var len__7326__auto___18827 = arguments.length;
var i__7327__auto___18828 = (0);
while(true){
if((i__7327__auto___18828 < len__7326__auto___18827)){
args18777.push((arguments[i__7327__auto___18828]));

var G__18829 = (i__7327__auto___18828 + (1));
i__7327__auto___18828 = G__18829;
continue;
} else {
}
break;
}

var G__18779 = args18777.length;
switch (G__18779) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18777.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__18664__auto___18831 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18664__auto___18831){
return (function (){
var f__18665__auto__ = (function (){var switch__18552__auto__ = ((function (c__18664__auto___18831){
return (function (state_18803){
var state_val_18804 = (state_18803[(1)]);
if((state_val_18804 === (7))){
var inst_18799 = (state_18803[(2)]);
var state_18803__$1 = state_18803;
var statearr_18805_18832 = state_18803__$1;
(statearr_18805_18832[(2)] = inst_18799);

(statearr_18805_18832[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18804 === (1))){
var state_18803__$1 = state_18803;
var statearr_18806_18833 = state_18803__$1;
(statearr_18806_18833[(2)] = null);

(statearr_18806_18833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18804 === (4))){
var inst_18782 = (state_18803[(7)]);
var inst_18782__$1 = (state_18803[(2)]);
var inst_18783 = (inst_18782__$1 == null);
var state_18803__$1 = (function (){var statearr_18807 = state_18803;
(statearr_18807[(7)] = inst_18782__$1);

return statearr_18807;
})();
if(cljs.core.truth_(inst_18783)){
var statearr_18808_18834 = state_18803__$1;
(statearr_18808_18834[(1)] = (5));

} else {
var statearr_18809_18835 = state_18803__$1;
(statearr_18809_18835[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18804 === (13))){
var state_18803__$1 = state_18803;
var statearr_18810_18836 = state_18803__$1;
(statearr_18810_18836[(2)] = null);

(statearr_18810_18836[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18804 === (6))){
var inst_18782 = (state_18803[(7)]);
var state_18803__$1 = state_18803;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18803__$1,(11),to,inst_18782);
} else {
if((state_val_18804 === (3))){
var inst_18801 = (state_18803[(2)]);
var state_18803__$1 = state_18803;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18803__$1,inst_18801);
} else {
if((state_val_18804 === (12))){
var state_18803__$1 = state_18803;
var statearr_18811_18837 = state_18803__$1;
(statearr_18811_18837[(2)] = null);

(statearr_18811_18837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18804 === (2))){
var state_18803__$1 = state_18803;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18803__$1,(4),from);
} else {
if((state_val_18804 === (11))){
var inst_18792 = (state_18803[(2)]);
var state_18803__$1 = state_18803;
if(cljs.core.truth_(inst_18792)){
var statearr_18812_18838 = state_18803__$1;
(statearr_18812_18838[(1)] = (12));

} else {
var statearr_18813_18839 = state_18803__$1;
(statearr_18813_18839[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18804 === (9))){
var state_18803__$1 = state_18803;
var statearr_18814_18840 = state_18803__$1;
(statearr_18814_18840[(2)] = null);

(statearr_18814_18840[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18804 === (5))){
var state_18803__$1 = state_18803;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18815_18841 = state_18803__$1;
(statearr_18815_18841[(1)] = (8));

} else {
var statearr_18816_18842 = state_18803__$1;
(statearr_18816_18842[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18804 === (14))){
var inst_18797 = (state_18803[(2)]);
var state_18803__$1 = state_18803;
var statearr_18817_18843 = state_18803__$1;
(statearr_18817_18843[(2)] = inst_18797);

(statearr_18817_18843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18804 === (10))){
var inst_18789 = (state_18803[(2)]);
var state_18803__$1 = state_18803;
var statearr_18818_18844 = state_18803__$1;
(statearr_18818_18844[(2)] = inst_18789);

(statearr_18818_18844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18804 === (8))){
var inst_18786 = cljs.core.async.close_BANG_.call(null,to);
var state_18803__$1 = state_18803;
var statearr_18819_18845 = state_18803__$1;
(statearr_18819_18845[(2)] = inst_18786);

(statearr_18819_18845[(1)] = (10));


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
});})(c__18664__auto___18831))
;
return ((function (switch__18552__auto__,c__18664__auto___18831){
return (function() {
var cljs$core$async$state_machine__18553__auto__ = null;
var cljs$core$async$state_machine__18553__auto____0 = (function (){
var statearr_18823 = [null,null,null,null,null,null,null,null];
(statearr_18823[(0)] = cljs$core$async$state_machine__18553__auto__);

(statearr_18823[(1)] = (1));

return statearr_18823;
});
var cljs$core$async$state_machine__18553__auto____1 = (function (state_18803){
while(true){
var ret_value__18554__auto__ = (function (){try{while(true){
var result__18555__auto__ = switch__18552__auto__.call(null,state_18803);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18555__auto__;
}
break;
}
}catch (e18824){if((e18824 instanceof Object)){
var ex__18556__auto__ = e18824;
var statearr_18825_18846 = state_18803;
(statearr_18825_18846[(5)] = ex__18556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18803);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18824;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18847 = state_18803;
state_18803 = G__18847;
continue;
} else {
return ret_value__18554__auto__;
}
break;
}
});
cljs$core$async$state_machine__18553__auto__ = function(state_18803){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18553__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18553__auto____1.call(this,state_18803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18553__auto____0;
cljs$core$async$state_machine__18553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18553__auto____1;
return cljs$core$async$state_machine__18553__auto__;
})()
;})(switch__18552__auto__,c__18664__auto___18831))
})();
var state__18666__auto__ = (function (){var statearr_18826 = f__18665__auto__.call(null);
(statearr_18826[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18664__auto___18831);

return statearr_18826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18666__auto__);
});})(c__18664__auto___18831))
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
return (function (p__19035){
var vec__19036 = p__19035;
var v = cljs.core.nth.call(null,vec__19036,(0),null);
var p = cljs.core.nth.call(null,vec__19036,(1),null);
var job = vec__19036;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__18664__auto___19222 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18664__auto___19222,res,vec__19036,v,p,job,jobs,results){
return (function (){
var f__18665__auto__ = (function (){var switch__18552__auto__ = ((function (c__18664__auto___19222,res,vec__19036,v,p,job,jobs,results){
return (function (state_19043){
var state_val_19044 = (state_19043[(1)]);
if((state_val_19044 === (1))){
var state_19043__$1 = state_19043;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19043__$1,(2),res,v);
} else {
if((state_val_19044 === (2))){
var inst_19040 = (state_19043[(2)]);
var inst_19041 = cljs.core.async.close_BANG_.call(null,res);
var state_19043__$1 = (function (){var statearr_19045 = state_19043;
(statearr_19045[(7)] = inst_19040);

return statearr_19045;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19043__$1,inst_19041);
} else {
return null;
}
}
});})(c__18664__auto___19222,res,vec__19036,v,p,job,jobs,results))
;
return ((function (switch__18552__auto__,c__18664__auto___19222,res,vec__19036,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18553__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18553__auto____0 = (function (){
var statearr_19049 = [null,null,null,null,null,null,null,null];
(statearr_19049[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18553__auto__);

(statearr_19049[(1)] = (1));

return statearr_19049;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18553__auto____1 = (function (state_19043){
while(true){
var ret_value__18554__auto__ = (function (){try{while(true){
var result__18555__auto__ = switch__18552__auto__.call(null,state_19043);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18555__auto__;
}
break;
}
}catch (e19050){if((e19050 instanceof Object)){
var ex__18556__auto__ = e19050;
var statearr_19051_19223 = state_19043;
(statearr_19051_19223[(5)] = ex__18556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19043);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19050;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19224 = state_19043;
state_19043 = G__19224;
continue;
} else {
return ret_value__18554__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18553__auto__ = function(state_19043){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18553__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18553__auto____1.call(this,state_19043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18553__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18553__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18553__auto__;
})()
;})(switch__18552__auto__,c__18664__auto___19222,res,vec__19036,v,p,job,jobs,results))
})();
var state__18666__auto__ = (function (){var statearr_19052 = f__18665__auto__.call(null);
(statearr_19052[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18664__auto___19222);

return statearr_19052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18666__auto__);
});})(c__18664__auto___19222,res,vec__19036,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__19053){
var vec__19054 = p__19053;
var v = cljs.core.nth.call(null,vec__19054,(0),null);
var p = cljs.core.nth.call(null,vec__19054,(1),null);
var job = vec__19054;
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
var n__7166__auto___19225 = n;
var __19226 = (0);
while(true){
if((__19226 < n__7166__auto___19225)){
var G__19057_19227 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__19057_19227) {
case "compute":
var c__18664__auto___19229 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19226,c__18664__auto___19229,G__19057_19227,n__7166__auto___19225,jobs,results,process,async){
return (function (){
var f__18665__auto__ = (function (){var switch__18552__auto__ = ((function (__19226,c__18664__auto___19229,G__19057_19227,n__7166__auto___19225,jobs,results,process,async){
return (function (state_19070){
var state_val_19071 = (state_19070[(1)]);
if((state_val_19071 === (1))){
var state_19070__$1 = state_19070;
var statearr_19072_19230 = state_19070__$1;
(statearr_19072_19230[(2)] = null);

(statearr_19072_19230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19071 === (2))){
var state_19070__$1 = state_19070;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19070__$1,(4),jobs);
} else {
if((state_val_19071 === (3))){
var inst_19068 = (state_19070[(2)]);
var state_19070__$1 = state_19070;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19070__$1,inst_19068);
} else {
if((state_val_19071 === (4))){
var inst_19060 = (state_19070[(2)]);
var inst_19061 = process.call(null,inst_19060);
var state_19070__$1 = state_19070;
if(cljs.core.truth_(inst_19061)){
var statearr_19073_19231 = state_19070__$1;
(statearr_19073_19231[(1)] = (5));

} else {
var statearr_19074_19232 = state_19070__$1;
(statearr_19074_19232[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19071 === (5))){
var state_19070__$1 = state_19070;
var statearr_19075_19233 = state_19070__$1;
(statearr_19075_19233[(2)] = null);

(statearr_19075_19233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19071 === (6))){
var state_19070__$1 = state_19070;
var statearr_19076_19234 = state_19070__$1;
(statearr_19076_19234[(2)] = null);

(statearr_19076_19234[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19071 === (7))){
var inst_19066 = (state_19070[(2)]);
var state_19070__$1 = state_19070;
var statearr_19077_19235 = state_19070__$1;
(statearr_19077_19235[(2)] = inst_19066);

(statearr_19077_19235[(1)] = (3));


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
});})(__19226,c__18664__auto___19229,G__19057_19227,n__7166__auto___19225,jobs,results,process,async))
;
return ((function (__19226,switch__18552__auto__,c__18664__auto___19229,G__19057_19227,n__7166__auto___19225,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18553__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18553__auto____0 = (function (){
var statearr_19081 = [null,null,null,null,null,null,null];
(statearr_19081[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18553__auto__);

(statearr_19081[(1)] = (1));

return statearr_19081;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18553__auto____1 = (function (state_19070){
while(true){
var ret_value__18554__auto__ = (function (){try{while(true){
var result__18555__auto__ = switch__18552__auto__.call(null,state_19070);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18555__auto__;
}
break;
}
}catch (e19082){if((e19082 instanceof Object)){
var ex__18556__auto__ = e19082;
var statearr_19083_19236 = state_19070;
(statearr_19083_19236[(5)] = ex__18556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19070);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19082;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19237 = state_19070;
state_19070 = G__19237;
continue;
} else {
return ret_value__18554__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18553__auto__ = function(state_19070){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18553__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18553__auto____1.call(this,state_19070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18553__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18553__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18553__auto__;
})()
;})(__19226,switch__18552__auto__,c__18664__auto___19229,G__19057_19227,n__7166__auto___19225,jobs,results,process,async))
})();
var state__18666__auto__ = (function (){var statearr_19084 = f__18665__auto__.call(null);
(statearr_19084[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18664__auto___19229);

return statearr_19084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18666__auto__);
});})(__19226,c__18664__auto___19229,G__19057_19227,n__7166__auto___19225,jobs,results,process,async))
);


break;
case "async":
var c__18664__auto___19238 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19226,c__18664__auto___19238,G__19057_19227,n__7166__auto___19225,jobs,results,process,async){
return (function (){
var f__18665__auto__ = (function (){var switch__18552__auto__ = ((function (__19226,c__18664__auto___19238,G__19057_19227,n__7166__auto___19225,jobs,results,process,async){
return (function (state_19097){
var state_val_19098 = (state_19097[(1)]);
if((state_val_19098 === (1))){
var state_19097__$1 = state_19097;
var statearr_19099_19239 = state_19097__$1;
(statearr_19099_19239[(2)] = null);

(statearr_19099_19239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19098 === (2))){
var state_19097__$1 = state_19097;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19097__$1,(4),jobs);
} else {
if((state_val_19098 === (3))){
var inst_19095 = (state_19097[(2)]);
var state_19097__$1 = state_19097;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19097__$1,inst_19095);
} else {
if((state_val_19098 === (4))){
var inst_19087 = (state_19097[(2)]);
var inst_19088 = async.call(null,inst_19087);
var state_19097__$1 = state_19097;
if(cljs.core.truth_(inst_19088)){
var statearr_19100_19240 = state_19097__$1;
(statearr_19100_19240[(1)] = (5));

} else {
var statearr_19101_19241 = state_19097__$1;
(statearr_19101_19241[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19098 === (5))){
var state_19097__$1 = state_19097;
var statearr_19102_19242 = state_19097__$1;
(statearr_19102_19242[(2)] = null);

(statearr_19102_19242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19098 === (6))){
var state_19097__$1 = state_19097;
var statearr_19103_19243 = state_19097__$1;
(statearr_19103_19243[(2)] = null);

(statearr_19103_19243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19098 === (7))){
var inst_19093 = (state_19097[(2)]);
var state_19097__$1 = state_19097;
var statearr_19104_19244 = state_19097__$1;
(statearr_19104_19244[(2)] = inst_19093);

(statearr_19104_19244[(1)] = (3));


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
});})(__19226,c__18664__auto___19238,G__19057_19227,n__7166__auto___19225,jobs,results,process,async))
;
return ((function (__19226,switch__18552__auto__,c__18664__auto___19238,G__19057_19227,n__7166__auto___19225,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18553__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18553__auto____0 = (function (){
var statearr_19108 = [null,null,null,null,null,null,null];
(statearr_19108[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18553__auto__);

(statearr_19108[(1)] = (1));

return statearr_19108;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18553__auto____1 = (function (state_19097){
while(true){
var ret_value__18554__auto__ = (function (){try{while(true){
var result__18555__auto__ = switch__18552__auto__.call(null,state_19097);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18555__auto__;
}
break;
}
}catch (e19109){if((e19109 instanceof Object)){
var ex__18556__auto__ = e19109;
var statearr_19110_19245 = state_19097;
(statearr_19110_19245[(5)] = ex__18556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19097);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19109;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19246 = state_19097;
state_19097 = G__19246;
continue;
} else {
return ret_value__18554__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18553__auto__ = function(state_19097){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18553__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18553__auto____1.call(this,state_19097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18553__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18553__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18553__auto__;
})()
;})(__19226,switch__18552__auto__,c__18664__auto___19238,G__19057_19227,n__7166__auto___19225,jobs,results,process,async))
})();
var state__18666__auto__ = (function (){var statearr_19111 = f__18665__auto__.call(null);
(statearr_19111[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18664__auto___19238);

return statearr_19111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18666__auto__);
});})(__19226,c__18664__auto___19238,G__19057_19227,n__7166__auto___19225,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__19247 = (__19226 + (1));
__19226 = G__19247;
continue;
} else {
}
break;
}

var c__18664__auto___19248 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18664__auto___19248,jobs,results,process,async){
return (function (){
var f__18665__auto__ = (function (){var switch__18552__auto__ = ((function (c__18664__auto___19248,jobs,results,process,async){
return (function (state_19133){
var state_val_19134 = (state_19133[(1)]);
if((state_val_19134 === (1))){
var state_19133__$1 = state_19133;
var statearr_19135_19249 = state_19133__$1;
(statearr_19135_19249[(2)] = null);

(statearr_19135_19249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19134 === (2))){
var state_19133__$1 = state_19133;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19133__$1,(4),from);
} else {
if((state_val_19134 === (3))){
var inst_19131 = (state_19133[(2)]);
var state_19133__$1 = state_19133;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19133__$1,inst_19131);
} else {
if((state_val_19134 === (4))){
var inst_19114 = (state_19133[(7)]);
var inst_19114__$1 = (state_19133[(2)]);
var inst_19115 = (inst_19114__$1 == null);
var state_19133__$1 = (function (){var statearr_19136 = state_19133;
(statearr_19136[(7)] = inst_19114__$1);

return statearr_19136;
})();
if(cljs.core.truth_(inst_19115)){
var statearr_19137_19250 = state_19133__$1;
(statearr_19137_19250[(1)] = (5));

} else {
var statearr_19138_19251 = state_19133__$1;
(statearr_19138_19251[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19134 === (5))){
var inst_19117 = cljs.core.async.close_BANG_.call(null,jobs);
var state_19133__$1 = state_19133;
var statearr_19139_19252 = state_19133__$1;
(statearr_19139_19252[(2)] = inst_19117);

(statearr_19139_19252[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19134 === (6))){
var inst_19114 = (state_19133[(7)]);
var inst_19119 = (state_19133[(8)]);
var inst_19119__$1 = cljs.core.async.chan.call(null,(1));
var inst_19120 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19121 = [inst_19114,inst_19119__$1];
var inst_19122 = (new cljs.core.PersistentVector(null,2,(5),inst_19120,inst_19121,null));
var state_19133__$1 = (function (){var statearr_19140 = state_19133;
(statearr_19140[(8)] = inst_19119__$1);

return statearr_19140;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19133__$1,(8),jobs,inst_19122);
} else {
if((state_val_19134 === (7))){
var inst_19129 = (state_19133[(2)]);
var state_19133__$1 = state_19133;
var statearr_19141_19253 = state_19133__$1;
(statearr_19141_19253[(2)] = inst_19129);

(statearr_19141_19253[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19134 === (8))){
var inst_19119 = (state_19133[(8)]);
var inst_19124 = (state_19133[(2)]);
var state_19133__$1 = (function (){var statearr_19142 = state_19133;
(statearr_19142[(9)] = inst_19124);

return statearr_19142;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19133__$1,(9),results,inst_19119);
} else {
if((state_val_19134 === (9))){
var inst_19126 = (state_19133[(2)]);
var state_19133__$1 = (function (){var statearr_19143 = state_19133;
(statearr_19143[(10)] = inst_19126);

return statearr_19143;
})();
var statearr_19144_19254 = state_19133__$1;
(statearr_19144_19254[(2)] = null);

(statearr_19144_19254[(1)] = (2));


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
});})(c__18664__auto___19248,jobs,results,process,async))
;
return ((function (switch__18552__auto__,c__18664__auto___19248,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18553__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18553__auto____0 = (function (){
var statearr_19148 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19148[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18553__auto__);

(statearr_19148[(1)] = (1));

return statearr_19148;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18553__auto____1 = (function (state_19133){
while(true){
var ret_value__18554__auto__ = (function (){try{while(true){
var result__18555__auto__ = switch__18552__auto__.call(null,state_19133);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18555__auto__;
}
break;
}
}catch (e19149){if((e19149 instanceof Object)){
var ex__18556__auto__ = e19149;
var statearr_19150_19255 = state_19133;
(statearr_19150_19255[(5)] = ex__18556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19133);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19149;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19256 = state_19133;
state_19133 = G__19256;
continue;
} else {
return ret_value__18554__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18553__auto__ = function(state_19133){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18553__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18553__auto____1.call(this,state_19133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18553__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18553__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18553__auto__;
})()
;})(switch__18552__auto__,c__18664__auto___19248,jobs,results,process,async))
})();
var state__18666__auto__ = (function (){var statearr_19151 = f__18665__auto__.call(null);
(statearr_19151[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18664__auto___19248);

return statearr_19151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18666__auto__);
});})(c__18664__auto___19248,jobs,results,process,async))
);


var c__18664__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18664__auto__,jobs,results,process,async){
return (function (){
var f__18665__auto__ = (function (){var switch__18552__auto__ = ((function (c__18664__auto__,jobs,results,process,async){
return (function (state_19189){
var state_val_19190 = (state_19189[(1)]);
if((state_val_19190 === (7))){
var inst_19185 = (state_19189[(2)]);
var state_19189__$1 = state_19189;
var statearr_19191_19257 = state_19189__$1;
(statearr_19191_19257[(2)] = inst_19185);

(statearr_19191_19257[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19190 === (20))){
var state_19189__$1 = state_19189;
var statearr_19192_19258 = state_19189__$1;
(statearr_19192_19258[(2)] = null);

(statearr_19192_19258[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19190 === (1))){
var state_19189__$1 = state_19189;
var statearr_19193_19259 = state_19189__$1;
(statearr_19193_19259[(2)] = null);

(statearr_19193_19259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19190 === (4))){
var inst_19154 = (state_19189[(7)]);
var inst_19154__$1 = (state_19189[(2)]);
var inst_19155 = (inst_19154__$1 == null);
var state_19189__$1 = (function (){var statearr_19194 = state_19189;
(statearr_19194[(7)] = inst_19154__$1);

return statearr_19194;
})();
if(cljs.core.truth_(inst_19155)){
var statearr_19195_19260 = state_19189__$1;
(statearr_19195_19260[(1)] = (5));

} else {
var statearr_19196_19261 = state_19189__$1;
(statearr_19196_19261[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19190 === (15))){
var inst_19167 = (state_19189[(8)]);
var state_19189__$1 = state_19189;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19189__$1,(18),to,inst_19167);
} else {
if((state_val_19190 === (21))){
var inst_19180 = (state_19189[(2)]);
var state_19189__$1 = state_19189;
var statearr_19197_19262 = state_19189__$1;
(statearr_19197_19262[(2)] = inst_19180);

(statearr_19197_19262[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19190 === (13))){
var inst_19182 = (state_19189[(2)]);
var state_19189__$1 = (function (){var statearr_19198 = state_19189;
(statearr_19198[(9)] = inst_19182);

return statearr_19198;
})();
var statearr_19199_19263 = state_19189__$1;
(statearr_19199_19263[(2)] = null);

(statearr_19199_19263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19190 === (6))){
var inst_19154 = (state_19189[(7)]);
var state_19189__$1 = state_19189;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19189__$1,(11),inst_19154);
} else {
if((state_val_19190 === (17))){
var inst_19175 = (state_19189[(2)]);
var state_19189__$1 = state_19189;
if(cljs.core.truth_(inst_19175)){
var statearr_19200_19264 = state_19189__$1;
(statearr_19200_19264[(1)] = (19));

} else {
var statearr_19201_19265 = state_19189__$1;
(statearr_19201_19265[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19190 === (3))){
var inst_19187 = (state_19189[(2)]);
var state_19189__$1 = state_19189;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19189__$1,inst_19187);
} else {
if((state_val_19190 === (12))){
var inst_19164 = (state_19189[(10)]);
var state_19189__$1 = state_19189;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19189__$1,(14),inst_19164);
} else {
if((state_val_19190 === (2))){
var state_19189__$1 = state_19189;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19189__$1,(4),results);
} else {
if((state_val_19190 === (19))){
var state_19189__$1 = state_19189;
var statearr_19202_19266 = state_19189__$1;
(statearr_19202_19266[(2)] = null);

(statearr_19202_19266[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19190 === (11))){
var inst_19164 = (state_19189[(2)]);
var state_19189__$1 = (function (){var statearr_19203 = state_19189;
(statearr_19203[(10)] = inst_19164);

return statearr_19203;
})();
var statearr_19204_19267 = state_19189__$1;
(statearr_19204_19267[(2)] = null);

(statearr_19204_19267[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19190 === (9))){
var state_19189__$1 = state_19189;
var statearr_19205_19268 = state_19189__$1;
(statearr_19205_19268[(2)] = null);

(statearr_19205_19268[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19190 === (5))){
var state_19189__$1 = state_19189;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19206_19269 = state_19189__$1;
(statearr_19206_19269[(1)] = (8));

} else {
var statearr_19207_19270 = state_19189__$1;
(statearr_19207_19270[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19190 === (14))){
var inst_19167 = (state_19189[(8)]);
var inst_19169 = (state_19189[(11)]);
var inst_19167__$1 = (state_19189[(2)]);
var inst_19168 = (inst_19167__$1 == null);
var inst_19169__$1 = cljs.core.not.call(null,inst_19168);
var state_19189__$1 = (function (){var statearr_19208 = state_19189;
(statearr_19208[(8)] = inst_19167__$1);

(statearr_19208[(11)] = inst_19169__$1);

return statearr_19208;
})();
if(inst_19169__$1){
var statearr_19209_19271 = state_19189__$1;
(statearr_19209_19271[(1)] = (15));

} else {
var statearr_19210_19272 = state_19189__$1;
(statearr_19210_19272[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19190 === (16))){
var inst_19169 = (state_19189[(11)]);
var state_19189__$1 = state_19189;
var statearr_19211_19273 = state_19189__$1;
(statearr_19211_19273[(2)] = inst_19169);

(statearr_19211_19273[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19190 === (10))){
var inst_19161 = (state_19189[(2)]);
var state_19189__$1 = state_19189;
var statearr_19212_19274 = state_19189__$1;
(statearr_19212_19274[(2)] = inst_19161);

(statearr_19212_19274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19190 === (18))){
var inst_19172 = (state_19189[(2)]);
var state_19189__$1 = state_19189;
var statearr_19213_19275 = state_19189__$1;
(statearr_19213_19275[(2)] = inst_19172);

(statearr_19213_19275[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19190 === (8))){
var inst_19158 = cljs.core.async.close_BANG_.call(null,to);
var state_19189__$1 = state_19189;
var statearr_19214_19276 = state_19189__$1;
(statearr_19214_19276[(2)] = inst_19158);

(statearr_19214_19276[(1)] = (10));


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
});})(c__18664__auto__,jobs,results,process,async))
;
return ((function (switch__18552__auto__,c__18664__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18553__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18553__auto____0 = (function (){
var statearr_19218 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19218[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18553__auto__);

(statearr_19218[(1)] = (1));

return statearr_19218;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18553__auto____1 = (function (state_19189){
while(true){
var ret_value__18554__auto__ = (function (){try{while(true){
var result__18555__auto__ = switch__18552__auto__.call(null,state_19189);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18555__auto__;
}
break;
}
}catch (e19219){if((e19219 instanceof Object)){
var ex__18556__auto__ = e19219;
var statearr_19220_19277 = state_19189;
(statearr_19220_19277[(5)] = ex__18556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19189);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19219;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19278 = state_19189;
state_19189 = G__19278;
continue;
} else {
return ret_value__18554__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18553__auto__ = function(state_19189){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18553__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18553__auto____1.call(this,state_19189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18553__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18553__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18553__auto__;
})()
;})(switch__18552__auto__,c__18664__auto__,jobs,results,process,async))
})();
var state__18666__auto__ = (function (){var statearr_19221 = f__18665__auto__.call(null);
(statearr_19221[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18664__auto__);

return statearr_19221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18666__auto__);
});})(c__18664__auto__,jobs,results,process,async))
);

return c__18664__auto__;
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
var args19279 = [];
var len__7326__auto___19282 = arguments.length;
var i__7327__auto___19283 = (0);
while(true){
if((i__7327__auto___19283 < len__7326__auto___19282)){
args19279.push((arguments[i__7327__auto___19283]));

var G__19284 = (i__7327__auto___19283 + (1));
i__7327__auto___19283 = G__19284;
continue;
} else {
}
break;
}

var G__19281 = args19279.length;
switch (G__19281) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19279.length)].join('')));

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
var args19286 = [];
var len__7326__auto___19289 = arguments.length;
var i__7327__auto___19290 = (0);
while(true){
if((i__7327__auto___19290 < len__7326__auto___19289)){
args19286.push((arguments[i__7327__auto___19290]));

var G__19291 = (i__7327__auto___19290 + (1));
i__7327__auto___19290 = G__19291;
continue;
} else {
}
break;
}

var G__19288 = args19286.length;
switch (G__19288) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19286.length)].join('')));

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
var args19293 = [];
var len__7326__auto___19346 = arguments.length;
var i__7327__auto___19347 = (0);
while(true){
if((i__7327__auto___19347 < len__7326__auto___19346)){
args19293.push((arguments[i__7327__auto___19347]));

var G__19348 = (i__7327__auto___19347 + (1));
i__7327__auto___19347 = G__19348;
continue;
} else {
}
break;
}

var G__19295 = args19293.length;
switch (G__19295) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19293.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__18664__auto___19350 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18664__auto___19350,tc,fc){
return (function (){
var f__18665__auto__ = (function (){var switch__18552__auto__ = ((function (c__18664__auto___19350,tc,fc){
return (function (state_19321){
var state_val_19322 = (state_19321[(1)]);
if((state_val_19322 === (7))){
var inst_19317 = (state_19321[(2)]);
var state_19321__$1 = state_19321;
var statearr_19323_19351 = state_19321__$1;
(statearr_19323_19351[(2)] = inst_19317);

(statearr_19323_19351[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19322 === (1))){
var state_19321__$1 = state_19321;
var statearr_19324_19352 = state_19321__$1;
(statearr_19324_19352[(2)] = null);

(statearr_19324_19352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19322 === (4))){
var inst_19298 = (state_19321[(7)]);
var inst_19298__$1 = (state_19321[(2)]);
var inst_19299 = (inst_19298__$1 == null);
var state_19321__$1 = (function (){var statearr_19325 = state_19321;
(statearr_19325[(7)] = inst_19298__$1);

return statearr_19325;
})();
if(cljs.core.truth_(inst_19299)){
var statearr_19326_19353 = state_19321__$1;
(statearr_19326_19353[(1)] = (5));

} else {
var statearr_19327_19354 = state_19321__$1;
(statearr_19327_19354[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19322 === (13))){
var state_19321__$1 = state_19321;
var statearr_19328_19355 = state_19321__$1;
(statearr_19328_19355[(2)] = null);

(statearr_19328_19355[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19322 === (6))){
var inst_19298 = (state_19321[(7)]);
var inst_19304 = p.call(null,inst_19298);
var state_19321__$1 = state_19321;
if(cljs.core.truth_(inst_19304)){
var statearr_19329_19356 = state_19321__$1;
(statearr_19329_19356[(1)] = (9));

} else {
var statearr_19330_19357 = state_19321__$1;
(statearr_19330_19357[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19322 === (3))){
var inst_19319 = (state_19321[(2)]);
var state_19321__$1 = state_19321;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19321__$1,inst_19319);
} else {
if((state_val_19322 === (12))){
var state_19321__$1 = state_19321;
var statearr_19331_19358 = state_19321__$1;
(statearr_19331_19358[(2)] = null);

(statearr_19331_19358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19322 === (2))){
var state_19321__$1 = state_19321;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19321__$1,(4),ch);
} else {
if((state_val_19322 === (11))){
var inst_19298 = (state_19321[(7)]);
var inst_19308 = (state_19321[(2)]);
var state_19321__$1 = state_19321;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19321__$1,(8),inst_19308,inst_19298);
} else {
if((state_val_19322 === (9))){
var state_19321__$1 = state_19321;
var statearr_19332_19359 = state_19321__$1;
(statearr_19332_19359[(2)] = tc);

(statearr_19332_19359[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19322 === (5))){
var inst_19301 = cljs.core.async.close_BANG_.call(null,tc);
var inst_19302 = cljs.core.async.close_BANG_.call(null,fc);
var state_19321__$1 = (function (){var statearr_19333 = state_19321;
(statearr_19333[(8)] = inst_19301);

return statearr_19333;
})();
var statearr_19334_19360 = state_19321__$1;
(statearr_19334_19360[(2)] = inst_19302);

(statearr_19334_19360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19322 === (14))){
var inst_19315 = (state_19321[(2)]);
var state_19321__$1 = state_19321;
var statearr_19335_19361 = state_19321__$1;
(statearr_19335_19361[(2)] = inst_19315);

(statearr_19335_19361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19322 === (10))){
var state_19321__$1 = state_19321;
var statearr_19336_19362 = state_19321__$1;
(statearr_19336_19362[(2)] = fc);

(statearr_19336_19362[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19322 === (8))){
var inst_19310 = (state_19321[(2)]);
var state_19321__$1 = state_19321;
if(cljs.core.truth_(inst_19310)){
var statearr_19337_19363 = state_19321__$1;
(statearr_19337_19363[(1)] = (12));

} else {
var statearr_19338_19364 = state_19321__$1;
(statearr_19338_19364[(1)] = (13));

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
});})(c__18664__auto___19350,tc,fc))
;
return ((function (switch__18552__auto__,c__18664__auto___19350,tc,fc){
return (function() {
var cljs$core$async$state_machine__18553__auto__ = null;
var cljs$core$async$state_machine__18553__auto____0 = (function (){
var statearr_19342 = [null,null,null,null,null,null,null,null,null];
(statearr_19342[(0)] = cljs$core$async$state_machine__18553__auto__);

(statearr_19342[(1)] = (1));

return statearr_19342;
});
var cljs$core$async$state_machine__18553__auto____1 = (function (state_19321){
while(true){
var ret_value__18554__auto__ = (function (){try{while(true){
var result__18555__auto__ = switch__18552__auto__.call(null,state_19321);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18555__auto__;
}
break;
}
}catch (e19343){if((e19343 instanceof Object)){
var ex__18556__auto__ = e19343;
var statearr_19344_19365 = state_19321;
(statearr_19344_19365[(5)] = ex__18556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19321);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19343;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19366 = state_19321;
state_19321 = G__19366;
continue;
} else {
return ret_value__18554__auto__;
}
break;
}
});
cljs$core$async$state_machine__18553__auto__ = function(state_19321){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18553__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18553__auto____1.call(this,state_19321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18553__auto____0;
cljs$core$async$state_machine__18553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18553__auto____1;
return cljs$core$async$state_machine__18553__auto__;
})()
;})(switch__18552__auto__,c__18664__auto___19350,tc,fc))
})();
var state__18666__auto__ = (function (){var statearr_19345 = f__18665__auto__.call(null);
(statearr_19345[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18664__auto___19350);

return statearr_19345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18666__auto__);
});})(c__18664__auto___19350,tc,fc))
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
var c__18664__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18664__auto__){
return (function (){
var f__18665__auto__ = (function (){var switch__18552__auto__ = ((function (c__18664__auto__){
return (function (state_19430){
var state_val_19431 = (state_19430[(1)]);
if((state_val_19431 === (7))){
var inst_19426 = (state_19430[(2)]);
var state_19430__$1 = state_19430;
var statearr_19432_19453 = state_19430__$1;
(statearr_19432_19453[(2)] = inst_19426);

(statearr_19432_19453[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19431 === (1))){
var inst_19410 = init;
var state_19430__$1 = (function (){var statearr_19433 = state_19430;
(statearr_19433[(7)] = inst_19410);

return statearr_19433;
})();
var statearr_19434_19454 = state_19430__$1;
(statearr_19434_19454[(2)] = null);

(statearr_19434_19454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19431 === (4))){
var inst_19413 = (state_19430[(8)]);
var inst_19413__$1 = (state_19430[(2)]);
var inst_19414 = (inst_19413__$1 == null);
var state_19430__$1 = (function (){var statearr_19435 = state_19430;
(statearr_19435[(8)] = inst_19413__$1);

return statearr_19435;
})();
if(cljs.core.truth_(inst_19414)){
var statearr_19436_19455 = state_19430__$1;
(statearr_19436_19455[(1)] = (5));

} else {
var statearr_19437_19456 = state_19430__$1;
(statearr_19437_19456[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19431 === (6))){
var inst_19410 = (state_19430[(7)]);
var inst_19417 = (state_19430[(9)]);
var inst_19413 = (state_19430[(8)]);
var inst_19417__$1 = f.call(null,inst_19410,inst_19413);
var inst_19418 = cljs.core.reduced_QMARK_.call(null,inst_19417__$1);
var state_19430__$1 = (function (){var statearr_19438 = state_19430;
(statearr_19438[(9)] = inst_19417__$1);

return statearr_19438;
})();
if(inst_19418){
var statearr_19439_19457 = state_19430__$1;
(statearr_19439_19457[(1)] = (8));

} else {
var statearr_19440_19458 = state_19430__$1;
(statearr_19440_19458[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19431 === (3))){
var inst_19428 = (state_19430[(2)]);
var state_19430__$1 = state_19430;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19430__$1,inst_19428);
} else {
if((state_val_19431 === (2))){
var state_19430__$1 = state_19430;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19430__$1,(4),ch);
} else {
if((state_val_19431 === (9))){
var inst_19417 = (state_19430[(9)]);
var inst_19410 = inst_19417;
var state_19430__$1 = (function (){var statearr_19441 = state_19430;
(statearr_19441[(7)] = inst_19410);

return statearr_19441;
})();
var statearr_19442_19459 = state_19430__$1;
(statearr_19442_19459[(2)] = null);

(statearr_19442_19459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19431 === (5))){
var inst_19410 = (state_19430[(7)]);
var state_19430__$1 = state_19430;
var statearr_19443_19460 = state_19430__$1;
(statearr_19443_19460[(2)] = inst_19410);

(statearr_19443_19460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19431 === (10))){
var inst_19424 = (state_19430[(2)]);
var state_19430__$1 = state_19430;
var statearr_19444_19461 = state_19430__$1;
(statearr_19444_19461[(2)] = inst_19424);

(statearr_19444_19461[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19431 === (8))){
var inst_19417 = (state_19430[(9)]);
var inst_19420 = cljs.core.deref.call(null,inst_19417);
var state_19430__$1 = state_19430;
var statearr_19445_19462 = state_19430__$1;
(statearr_19445_19462[(2)] = inst_19420);

(statearr_19445_19462[(1)] = (10));


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
});})(c__18664__auto__))
;
return ((function (switch__18552__auto__,c__18664__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__18553__auto__ = null;
var cljs$core$async$reduce_$_state_machine__18553__auto____0 = (function (){
var statearr_19449 = [null,null,null,null,null,null,null,null,null,null];
(statearr_19449[(0)] = cljs$core$async$reduce_$_state_machine__18553__auto__);

(statearr_19449[(1)] = (1));

return statearr_19449;
});
var cljs$core$async$reduce_$_state_machine__18553__auto____1 = (function (state_19430){
while(true){
var ret_value__18554__auto__ = (function (){try{while(true){
var result__18555__auto__ = switch__18552__auto__.call(null,state_19430);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18555__auto__;
}
break;
}
}catch (e19450){if((e19450 instanceof Object)){
var ex__18556__auto__ = e19450;
var statearr_19451_19463 = state_19430;
(statearr_19451_19463[(5)] = ex__18556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19430);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19450;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19464 = state_19430;
state_19430 = G__19464;
continue;
} else {
return ret_value__18554__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__18553__auto__ = function(state_19430){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__18553__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__18553__auto____1.call(this,state_19430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__18553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__18553__auto____0;
cljs$core$async$reduce_$_state_machine__18553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__18553__auto____1;
return cljs$core$async$reduce_$_state_machine__18553__auto__;
})()
;})(switch__18552__auto__,c__18664__auto__))
})();
var state__18666__auto__ = (function (){var statearr_19452 = f__18665__auto__.call(null);
(statearr_19452[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18664__auto__);

return statearr_19452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18666__auto__);
});})(c__18664__auto__))
);

return c__18664__auto__;
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
var args19465 = [];
var len__7326__auto___19517 = arguments.length;
var i__7327__auto___19518 = (0);
while(true){
if((i__7327__auto___19518 < len__7326__auto___19517)){
args19465.push((arguments[i__7327__auto___19518]));

var G__19519 = (i__7327__auto___19518 + (1));
i__7327__auto___19518 = G__19519;
continue;
} else {
}
break;
}

var G__19467 = args19465.length;
switch (G__19467) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19465.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__18664__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18664__auto__){
return (function (){
var f__18665__auto__ = (function (){var switch__18552__auto__ = ((function (c__18664__auto__){
return (function (state_19492){
var state_val_19493 = (state_19492[(1)]);
if((state_val_19493 === (7))){
var inst_19474 = (state_19492[(2)]);
var state_19492__$1 = state_19492;
var statearr_19494_19521 = state_19492__$1;
(statearr_19494_19521[(2)] = inst_19474);

(statearr_19494_19521[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19493 === (1))){
var inst_19468 = cljs.core.seq.call(null,coll);
var inst_19469 = inst_19468;
var state_19492__$1 = (function (){var statearr_19495 = state_19492;
(statearr_19495[(7)] = inst_19469);

return statearr_19495;
})();
var statearr_19496_19522 = state_19492__$1;
(statearr_19496_19522[(2)] = null);

(statearr_19496_19522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19493 === (4))){
var inst_19469 = (state_19492[(7)]);
var inst_19472 = cljs.core.first.call(null,inst_19469);
var state_19492__$1 = state_19492;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19492__$1,(7),ch,inst_19472);
} else {
if((state_val_19493 === (13))){
var inst_19486 = (state_19492[(2)]);
var state_19492__$1 = state_19492;
var statearr_19497_19523 = state_19492__$1;
(statearr_19497_19523[(2)] = inst_19486);

(statearr_19497_19523[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19493 === (6))){
var inst_19477 = (state_19492[(2)]);
var state_19492__$1 = state_19492;
if(cljs.core.truth_(inst_19477)){
var statearr_19498_19524 = state_19492__$1;
(statearr_19498_19524[(1)] = (8));

} else {
var statearr_19499_19525 = state_19492__$1;
(statearr_19499_19525[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19493 === (3))){
var inst_19490 = (state_19492[(2)]);
var state_19492__$1 = state_19492;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19492__$1,inst_19490);
} else {
if((state_val_19493 === (12))){
var state_19492__$1 = state_19492;
var statearr_19500_19526 = state_19492__$1;
(statearr_19500_19526[(2)] = null);

(statearr_19500_19526[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19493 === (2))){
var inst_19469 = (state_19492[(7)]);
var state_19492__$1 = state_19492;
if(cljs.core.truth_(inst_19469)){
var statearr_19501_19527 = state_19492__$1;
(statearr_19501_19527[(1)] = (4));

} else {
var statearr_19502_19528 = state_19492__$1;
(statearr_19502_19528[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19493 === (11))){
var inst_19483 = cljs.core.async.close_BANG_.call(null,ch);
var state_19492__$1 = state_19492;
var statearr_19503_19529 = state_19492__$1;
(statearr_19503_19529[(2)] = inst_19483);

(statearr_19503_19529[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19493 === (9))){
var state_19492__$1 = state_19492;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19504_19530 = state_19492__$1;
(statearr_19504_19530[(1)] = (11));

} else {
var statearr_19505_19531 = state_19492__$1;
(statearr_19505_19531[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19493 === (5))){
var inst_19469 = (state_19492[(7)]);
var state_19492__$1 = state_19492;
var statearr_19506_19532 = state_19492__$1;
(statearr_19506_19532[(2)] = inst_19469);

(statearr_19506_19532[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19493 === (10))){
var inst_19488 = (state_19492[(2)]);
var state_19492__$1 = state_19492;
var statearr_19507_19533 = state_19492__$1;
(statearr_19507_19533[(2)] = inst_19488);

(statearr_19507_19533[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19493 === (8))){
var inst_19469 = (state_19492[(7)]);
var inst_19479 = cljs.core.next.call(null,inst_19469);
var inst_19469__$1 = inst_19479;
var state_19492__$1 = (function (){var statearr_19508 = state_19492;
(statearr_19508[(7)] = inst_19469__$1);

return statearr_19508;
})();
var statearr_19509_19534 = state_19492__$1;
(statearr_19509_19534[(2)] = null);

(statearr_19509_19534[(1)] = (2));


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
});})(c__18664__auto__))
;
return ((function (switch__18552__auto__,c__18664__auto__){
return (function() {
var cljs$core$async$state_machine__18553__auto__ = null;
var cljs$core$async$state_machine__18553__auto____0 = (function (){
var statearr_19513 = [null,null,null,null,null,null,null,null];
(statearr_19513[(0)] = cljs$core$async$state_machine__18553__auto__);

(statearr_19513[(1)] = (1));

return statearr_19513;
});
var cljs$core$async$state_machine__18553__auto____1 = (function (state_19492){
while(true){
var ret_value__18554__auto__ = (function (){try{while(true){
var result__18555__auto__ = switch__18552__auto__.call(null,state_19492);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18555__auto__;
}
break;
}
}catch (e19514){if((e19514 instanceof Object)){
var ex__18556__auto__ = e19514;
var statearr_19515_19535 = state_19492;
(statearr_19515_19535[(5)] = ex__18556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19492);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19514;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19536 = state_19492;
state_19492 = G__19536;
continue;
} else {
return ret_value__18554__auto__;
}
break;
}
});
cljs$core$async$state_machine__18553__auto__ = function(state_19492){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18553__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18553__auto____1.call(this,state_19492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18553__auto____0;
cljs$core$async$state_machine__18553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18553__auto____1;
return cljs$core$async$state_machine__18553__auto__;
})()
;})(switch__18552__auto__,c__18664__auto__))
})();
var state__18666__auto__ = (function (){var statearr_19516 = f__18665__auto__.call(null);
(statearr_19516[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18664__auto__);

return statearr_19516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18666__auto__);
});})(c__18664__auto__))
);

return c__18664__auto__;
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
var x__6914__auto__ = (((_ == null))?null:_);
var m__6915__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__6914__auto__)]);
if(!((m__6915__auto__ == null))){
return m__6915__auto__.call(null,_);
} else {
var m__6915__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__6915__auto____$1 == null))){
return m__6915__auto____$1.call(null,_);
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
var x__6914__auto__ = (((m == null))?null:m);
var m__6915__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__6914__auto__)]);
if(!((m__6915__auto__ == null))){
return m__6915__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__6915__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__6915__auto____$1 == null))){
return m__6915__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__6914__auto__ = (((m == null))?null:m);
var m__6915__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__6914__auto__)]);
if(!((m__6915__auto__ == null))){
return m__6915__auto__.call(null,m,ch);
} else {
var m__6915__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__6915__auto____$1 == null))){
return m__6915__auto____$1.call(null,m,ch);
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
var x__6914__auto__ = (((m == null))?null:m);
var m__6915__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__6914__auto__)]);
if(!((m__6915__auto__ == null))){
return m__6915__auto__.call(null,m);
} else {
var m__6915__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__6915__auto____$1 == null))){
return m__6915__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async19762 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19762 = (function (mult,ch,cs,meta19763){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta19763 = meta19763;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19762.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_19764,meta19763__$1){
var self__ = this;
var _19764__$1 = this;
return (new cljs.core.async.t_cljs$core$async19762(self__.mult,self__.ch,self__.cs,meta19763__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async19762.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_19764){
var self__ = this;
var _19764__$1 = this;
return self__.meta19763;
});})(cs))
;

cljs.core.async.t_cljs$core$async19762.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async19762.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async19762.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async19762.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async19762.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async19762.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async19762.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta19763","meta19763",1332212279,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async19762.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19762.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19762";

cljs.core.async.t_cljs$core$async19762.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6857__auto__,writer__6858__auto__,opt__6859__auto__){
return cljs.core._write.call(null,writer__6858__auto__,"cljs.core.async/t_cljs$core$async19762");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async19762 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async19762(mult__$1,ch__$1,cs__$1,meta19763){
return (new cljs.core.async.t_cljs$core$async19762(mult__$1,ch__$1,cs__$1,meta19763));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async19762(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__18664__auto___19987 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18664__auto___19987,cs,m,dchan,dctr,done){
return (function (){
var f__18665__auto__ = (function (){var switch__18552__auto__ = ((function (c__18664__auto___19987,cs,m,dchan,dctr,done){
return (function (state_19899){
var state_val_19900 = (state_19899[(1)]);
if((state_val_19900 === (7))){
var inst_19895 = (state_19899[(2)]);
var state_19899__$1 = state_19899;
var statearr_19901_19988 = state_19899__$1;
(statearr_19901_19988[(2)] = inst_19895);

(statearr_19901_19988[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19900 === (20))){
var inst_19798 = (state_19899[(7)]);
var inst_19810 = cljs.core.first.call(null,inst_19798);
var inst_19811 = cljs.core.nth.call(null,inst_19810,(0),null);
var inst_19812 = cljs.core.nth.call(null,inst_19810,(1),null);
var state_19899__$1 = (function (){var statearr_19902 = state_19899;
(statearr_19902[(8)] = inst_19811);

return statearr_19902;
})();
if(cljs.core.truth_(inst_19812)){
var statearr_19903_19989 = state_19899__$1;
(statearr_19903_19989[(1)] = (22));

} else {
var statearr_19904_19990 = state_19899__$1;
(statearr_19904_19990[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19900 === (27))){
var inst_19842 = (state_19899[(9)]);
var inst_19840 = (state_19899[(10)]);
var inst_19847 = (state_19899[(11)]);
var inst_19767 = (state_19899[(12)]);
var inst_19847__$1 = cljs.core._nth.call(null,inst_19840,inst_19842);
var inst_19848 = cljs.core.async.put_BANG_.call(null,inst_19847__$1,inst_19767,done);
var state_19899__$1 = (function (){var statearr_19905 = state_19899;
(statearr_19905[(11)] = inst_19847__$1);

return statearr_19905;
})();
if(cljs.core.truth_(inst_19848)){
var statearr_19906_19991 = state_19899__$1;
(statearr_19906_19991[(1)] = (30));

} else {
var statearr_19907_19992 = state_19899__$1;
(statearr_19907_19992[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19900 === (1))){
var state_19899__$1 = state_19899;
var statearr_19908_19993 = state_19899__$1;
(statearr_19908_19993[(2)] = null);

(statearr_19908_19993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19900 === (24))){
var inst_19798 = (state_19899[(7)]);
var inst_19817 = (state_19899[(2)]);
var inst_19818 = cljs.core.next.call(null,inst_19798);
var inst_19776 = inst_19818;
var inst_19777 = null;
var inst_19778 = (0);
var inst_19779 = (0);
var state_19899__$1 = (function (){var statearr_19909 = state_19899;
(statearr_19909[(13)] = inst_19778);

(statearr_19909[(14)] = inst_19779);

(statearr_19909[(15)] = inst_19776);

(statearr_19909[(16)] = inst_19777);

(statearr_19909[(17)] = inst_19817);

return statearr_19909;
})();
var statearr_19910_19994 = state_19899__$1;
(statearr_19910_19994[(2)] = null);

(statearr_19910_19994[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19900 === (39))){
var state_19899__$1 = state_19899;
var statearr_19914_19995 = state_19899__$1;
(statearr_19914_19995[(2)] = null);

(statearr_19914_19995[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19900 === (4))){
var inst_19767 = (state_19899[(12)]);
var inst_19767__$1 = (state_19899[(2)]);
var inst_19768 = (inst_19767__$1 == null);
var state_19899__$1 = (function (){var statearr_19915 = state_19899;
(statearr_19915[(12)] = inst_19767__$1);

return statearr_19915;
})();
if(cljs.core.truth_(inst_19768)){
var statearr_19916_19996 = state_19899__$1;
(statearr_19916_19996[(1)] = (5));

} else {
var statearr_19917_19997 = state_19899__$1;
(statearr_19917_19997[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19900 === (15))){
var inst_19778 = (state_19899[(13)]);
var inst_19779 = (state_19899[(14)]);
var inst_19776 = (state_19899[(15)]);
var inst_19777 = (state_19899[(16)]);
var inst_19794 = (state_19899[(2)]);
var inst_19795 = (inst_19779 + (1));
var tmp19911 = inst_19778;
var tmp19912 = inst_19776;
var tmp19913 = inst_19777;
var inst_19776__$1 = tmp19912;
var inst_19777__$1 = tmp19913;
var inst_19778__$1 = tmp19911;
var inst_19779__$1 = inst_19795;
var state_19899__$1 = (function (){var statearr_19918 = state_19899;
(statearr_19918[(13)] = inst_19778__$1);

(statearr_19918[(18)] = inst_19794);

(statearr_19918[(14)] = inst_19779__$1);

(statearr_19918[(15)] = inst_19776__$1);

(statearr_19918[(16)] = inst_19777__$1);

return statearr_19918;
})();
var statearr_19919_19998 = state_19899__$1;
(statearr_19919_19998[(2)] = null);

(statearr_19919_19998[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19900 === (21))){
var inst_19821 = (state_19899[(2)]);
var state_19899__$1 = state_19899;
var statearr_19923_19999 = state_19899__$1;
(statearr_19923_19999[(2)] = inst_19821);

(statearr_19923_19999[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19900 === (31))){
var inst_19847 = (state_19899[(11)]);
var inst_19851 = done.call(null,null);
var inst_19852 = cljs.core.async.untap_STAR_.call(null,m,inst_19847);
var state_19899__$1 = (function (){var statearr_19924 = state_19899;
(statearr_19924[(19)] = inst_19851);

return statearr_19924;
})();
var statearr_19925_20000 = state_19899__$1;
(statearr_19925_20000[(2)] = inst_19852);

(statearr_19925_20000[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19900 === (32))){
var inst_19842 = (state_19899[(9)]);
var inst_19840 = (state_19899[(10)]);
var inst_19841 = (state_19899[(20)]);
var inst_19839 = (state_19899[(21)]);
var inst_19854 = (state_19899[(2)]);
var inst_19855 = (inst_19842 + (1));
var tmp19920 = inst_19840;
var tmp19921 = inst_19841;
var tmp19922 = inst_19839;
var inst_19839__$1 = tmp19922;
var inst_19840__$1 = tmp19920;
var inst_19841__$1 = tmp19921;
var inst_19842__$1 = inst_19855;
var state_19899__$1 = (function (){var statearr_19926 = state_19899;
(statearr_19926[(9)] = inst_19842__$1);

(statearr_19926[(10)] = inst_19840__$1);

(statearr_19926[(22)] = inst_19854);

(statearr_19926[(20)] = inst_19841__$1);

(statearr_19926[(21)] = inst_19839__$1);

return statearr_19926;
})();
var statearr_19927_20001 = state_19899__$1;
(statearr_19927_20001[(2)] = null);

(statearr_19927_20001[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19900 === (40))){
var inst_19867 = (state_19899[(23)]);
var inst_19871 = done.call(null,null);
var inst_19872 = cljs.core.async.untap_STAR_.call(null,m,inst_19867);
var state_19899__$1 = (function (){var statearr_19928 = state_19899;
(statearr_19928[(24)] = inst_19871);

return statearr_19928;
})();
var statearr_19929_20002 = state_19899__$1;
(statearr_19929_20002[(2)] = inst_19872);

(statearr_19929_20002[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19900 === (33))){
var inst_19858 = (state_19899[(25)]);
var inst_19860 = cljs.core.chunked_seq_QMARK_.call(null,inst_19858);
var state_19899__$1 = state_19899;
if(inst_19860){
var statearr_19930_20003 = state_19899__$1;
(statearr_19930_20003[(1)] = (36));

} else {
var statearr_19931_20004 = state_19899__$1;
(statearr_19931_20004[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19900 === (13))){
var inst_19788 = (state_19899[(26)]);
var inst_19791 = cljs.core.async.close_BANG_.call(null,inst_19788);
var state_19899__$1 = state_19899;
var statearr_19932_20005 = state_19899__$1;
(statearr_19932_20005[(2)] = inst_19791);

(statearr_19932_20005[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19900 === (22))){
var inst_19811 = (state_19899[(8)]);
var inst_19814 = cljs.core.async.close_BANG_.call(null,inst_19811);
var state_19899__$1 = state_19899;
var statearr_19933_20006 = state_19899__$1;
(statearr_19933_20006[(2)] = inst_19814);

(statearr_19933_20006[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19900 === (36))){
var inst_19858 = (state_19899[(25)]);
var inst_19862 = cljs.core.chunk_first.call(null,inst_19858);
var inst_19863 = cljs.core.chunk_rest.call(null,inst_19858);
var inst_19864 = cljs.core.count.call(null,inst_19862);
var inst_19839 = inst_19863;
var inst_19840 = inst_19862;
var inst_19841 = inst_19864;
var inst_19842 = (0);
var state_19899__$1 = (function (){var statearr_19934 = state_19899;
(statearr_19934[(9)] = inst_19842);

(statearr_19934[(10)] = inst_19840);

(statearr_19934[(20)] = inst_19841);

(statearr_19934[(21)] = inst_19839);

return statearr_19934;
})();
var statearr_19935_20007 = state_19899__$1;
(statearr_19935_20007[(2)] = null);

(statearr_19935_20007[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19900 === (41))){
var inst_19858 = (state_19899[(25)]);
var inst_19874 = (state_19899[(2)]);
var inst_19875 = cljs.core.next.call(null,inst_19858);
var inst_19839 = inst_19875;
var inst_19840 = null;
var inst_19841 = (0);
var inst_19842 = (0);
var state_19899__$1 = (function (){var statearr_19936 = state_19899;
(statearr_19936[(9)] = inst_19842);

(statearr_19936[(10)] = inst_19840);

(statearr_19936[(20)] = inst_19841);

(statearr_19936[(27)] = inst_19874);

(statearr_19936[(21)] = inst_19839);

return statearr_19936;
})();
var statearr_19937_20008 = state_19899__$1;
(statearr_19937_20008[(2)] = null);

(statearr_19937_20008[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19900 === (43))){
var state_19899__$1 = state_19899;
var statearr_19938_20009 = state_19899__$1;
(statearr_19938_20009[(2)] = null);

(statearr_19938_20009[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19900 === (29))){
var inst_19883 = (state_19899[(2)]);
var state_19899__$1 = state_19899;
var statearr_19939_20010 = state_19899__$1;
(statearr_19939_20010[(2)] = inst_19883);

(statearr_19939_20010[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19900 === (44))){
var inst_19892 = (state_19899[(2)]);
var state_19899__$1 = (function (){var statearr_19940 = state_19899;
(statearr_19940[(28)] = inst_19892);

return statearr_19940;
})();
var statearr_19941_20011 = state_19899__$1;
(statearr_19941_20011[(2)] = null);

(statearr_19941_20011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19900 === (6))){
var inst_19831 = (state_19899[(29)]);
var inst_19830 = cljs.core.deref.call(null,cs);
var inst_19831__$1 = cljs.core.keys.call(null,inst_19830);
var inst_19832 = cljs.core.count.call(null,inst_19831__$1);
var inst_19833 = cljs.core.reset_BANG_.call(null,dctr,inst_19832);
var inst_19838 = cljs.core.seq.call(null,inst_19831__$1);
var inst_19839 = inst_19838;
var inst_19840 = null;
var inst_19841 = (0);
var inst_19842 = (0);
var state_19899__$1 = (function (){var statearr_19942 = state_19899;
(statearr_19942[(9)] = inst_19842);

(statearr_19942[(10)] = inst_19840);

(statearr_19942[(29)] = inst_19831__$1);

(statearr_19942[(30)] = inst_19833);

(statearr_19942[(20)] = inst_19841);

(statearr_19942[(21)] = inst_19839);

return statearr_19942;
})();
var statearr_19943_20012 = state_19899__$1;
(statearr_19943_20012[(2)] = null);

(statearr_19943_20012[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19900 === (28))){
var inst_19858 = (state_19899[(25)]);
var inst_19839 = (state_19899[(21)]);
var inst_19858__$1 = cljs.core.seq.call(null,inst_19839);
var state_19899__$1 = (function (){var statearr_19944 = state_19899;
(statearr_19944[(25)] = inst_19858__$1);

return statearr_19944;
})();
if(inst_19858__$1){
var statearr_19945_20013 = state_19899__$1;
(statearr_19945_20013[(1)] = (33));

} else {
var statearr_19946_20014 = state_19899__$1;
(statearr_19946_20014[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19900 === (25))){
var inst_19842 = (state_19899[(9)]);
var inst_19841 = (state_19899[(20)]);
var inst_19844 = (inst_19842 < inst_19841);
var inst_19845 = inst_19844;
var state_19899__$1 = state_19899;
if(cljs.core.truth_(inst_19845)){
var statearr_19947_20015 = state_19899__$1;
(statearr_19947_20015[(1)] = (27));

} else {
var statearr_19948_20016 = state_19899__$1;
(statearr_19948_20016[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19900 === (34))){
var state_19899__$1 = state_19899;
var statearr_19949_20017 = state_19899__$1;
(statearr_19949_20017[(2)] = null);

(statearr_19949_20017[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19900 === (17))){
var state_19899__$1 = state_19899;
var statearr_19950_20018 = state_19899__$1;
(statearr_19950_20018[(2)] = null);

(statearr_19950_20018[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19900 === (3))){
var inst_19897 = (state_19899[(2)]);
var state_19899__$1 = state_19899;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19899__$1,inst_19897);
} else {
if((state_val_19900 === (12))){
var inst_19826 = (state_19899[(2)]);
var state_19899__$1 = state_19899;
var statearr_19951_20019 = state_19899__$1;
(statearr_19951_20019[(2)] = inst_19826);

(statearr_19951_20019[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19900 === (2))){
var state_19899__$1 = state_19899;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19899__$1,(4),ch);
} else {
if((state_val_19900 === (23))){
var state_19899__$1 = state_19899;
var statearr_19952_20020 = state_19899__$1;
(statearr_19952_20020[(2)] = null);

(statearr_19952_20020[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19900 === (35))){
var inst_19881 = (state_19899[(2)]);
var state_19899__$1 = state_19899;
var statearr_19953_20021 = state_19899__$1;
(statearr_19953_20021[(2)] = inst_19881);

(statearr_19953_20021[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19900 === (19))){
var inst_19798 = (state_19899[(7)]);
var inst_19802 = cljs.core.chunk_first.call(null,inst_19798);
var inst_19803 = cljs.core.chunk_rest.call(null,inst_19798);
var inst_19804 = cljs.core.count.call(null,inst_19802);
var inst_19776 = inst_19803;
var inst_19777 = inst_19802;
var inst_19778 = inst_19804;
var inst_19779 = (0);
var state_19899__$1 = (function (){var statearr_19954 = state_19899;
(statearr_19954[(13)] = inst_19778);

(statearr_19954[(14)] = inst_19779);

(statearr_19954[(15)] = inst_19776);

(statearr_19954[(16)] = inst_19777);

return statearr_19954;
})();
var statearr_19955_20022 = state_19899__$1;
(statearr_19955_20022[(2)] = null);

(statearr_19955_20022[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19900 === (11))){
var inst_19776 = (state_19899[(15)]);
var inst_19798 = (state_19899[(7)]);
var inst_19798__$1 = cljs.core.seq.call(null,inst_19776);
var state_19899__$1 = (function (){var statearr_19956 = state_19899;
(statearr_19956[(7)] = inst_19798__$1);

return statearr_19956;
})();
if(inst_19798__$1){
var statearr_19957_20023 = state_19899__$1;
(statearr_19957_20023[(1)] = (16));

} else {
var statearr_19958_20024 = state_19899__$1;
(statearr_19958_20024[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19900 === (9))){
var inst_19828 = (state_19899[(2)]);
var state_19899__$1 = state_19899;
var statearr_19959_20025 = state_19899__$1;
(statearr_19959_20025[(2)] = inst_19828);

(statearr_19959_20025[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19900 === (5))){
var inst_19774 = cljs.core.deref.call(null,cs);
var inst_19775 = cljs.core.seq.call(null,inst_19774);
var inst_19776 = inst_19775;
var inst_19777 = null;
var inst_19778 = (0);
var inst_19779 = (0);
var state_19899__$1 = (function (){var statearr_19960 = state_19899;
(statearr_19960[(13)] = inst_19778);

(statearr_19960[(14)] = inst_19779);

(statearr_19960[(15)] = inst_19776);

(statearr_19960[(16)] = inst_19777);

return statearr_19960;
})();
var statearr_19961_20026 = state_19899__$1;
(statearr_19961_20026[(2)] = null);

(statearr_19961_20026[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19900 === (14))){
var state_19899__$1 = state_19899;
var statearr_19962_20027 = state_19899__$1;
(statearr_19962_20027[(2)] = null);

(statearr_19962_20027[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19900 === (45))){
var inst_19889 = (state_19899[(2)]);
var state_19899__$1 = state_19899;
var statearr_19963_20028 = state_19899__$1;
(statearr_19963_20028[(2)] = inst_19889);

(statearr_19963_20028[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19900 === (26))){
var inst_19831 = (state_19899[(29)]);
var inst_19885 = (state_19899[(2)]);
var inst_19886 = cljs.core.seq.call(null,inst_19831);
var state_19899__$1 = (function (){var statearr_19964 = state_19899;
(statearr_19964[(31)] = inst_19885);

return statearr_19964;
})();
if(inst_19886){
var statearr_19965_20029 = state_19899__$1;
(statearr_19965_20029[(1)] = (42));

} else {
var statearr_19966_20030 = state_19899__$1;
(statearr_19966_20030[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19900 === (16))){
var inst_19798 = (state_19899[(7)]);
var inst_19800 = cljs.core.chunked_seq_QMARK_.call(null,inst_19798);
var state_19899__$1 = state_19899;
if(inst_19800){
var statearr_19967_20031 = state_19899__$1;
(statearr_19967_20031[(1)] = (19));

} else {
var statearr_19968_20032 = state_19899__$1;
(statearr_19968_20032[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19900 === (38))){
var inst_19878 = (state_19899[(2)]);
var state_19899__$1 = state_19899;
var statearr_19969_20033 = state_19899__$1;
(statearr_19969_20033[(2)] = inst_19878);

(statearr_19969_20033[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19900 === (30))){
var state_19899__$1 = state_19899;
var statearr_19970_20034 = state_19899__$1;
(statearr_19970_20034[(2)] = null);

(statearr_19970_20034[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19900 === (10))){
var inst_19779 = (state_19899[(14)]);
var inst_19777 = (state_19899[(16)]);
var inst_19787 = cljs.core._nth.call(null,inst_19777,inst_19779);
var inst_19788 = cljs.core.nth.call(null,inst_19787,(0),null);
var inst_19789 = cljs.core.nth.call(null,inst_19787,(1),null);
var state_19899__$1 = (function (){var statearr_19971 = state_19899;
(statearr_19971[(26)] = inst_19788);

return statearr_19971;
})();
if(cljs.core.truth_(inst_19789)){
var statearr_19972_20035 = state_19899__$1;
(statearr_19972_20035[(1)] = (13));

} else {
var statearr_19973_20036 = state_19899__$1;
(statearr_19973_20036[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19900 === (18))){
var inst_19824 = (state_19899[(2)]);
var state_19899__$1 = state_19899;
var statearr_19974_20037 = state_19899__$1;
(statearr_19974_20037[(2)] = inst_19824);

(statearr_19974_20037[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19900 === (42))){
var state_19899__$1 = state_19899;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19899__$1,(45),dchan);
} else {
if((state_val_19900 === (37))){
var inst_19867 = (state_19899[(23)]);
var inst_19858 = (state_19899[(25)]);
var inst_19767 = (state_19899[(12)]);
var inst_19867__$1 = cljs.core.first.call(null,inst_19858);
var inst_19868 = cljs.core.async.put_BANG_.call(null,inst_19867__$1,inst_19767,done);
var state_19899__$1 = (function (){var statearr_19975 = state_19899;
(statearr_19975[(23)] = inst_19867__$1);

return statearr_19975;
})();
if(cljs.core.truth_(inst_19868)){
var statearr_19976_20038 = state_19899__$1;
(statearr_19976_20038[(1)] = (39));

} else {
var statearr_19977_20039 = state_19899__$1;
(statearr_19977_20039[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19900 === (8))){
var inst_19778 = (state_19899[(13)]);
var inst_19779 = (state_19899[(14)]);
var inst_19781 = (inst_19779 < inst_19778);
var inst_19782 = inst_19781;
var state_19899__$1 = state_19899;
if(cljs.core.truth_(inst_19782)){
var statearr_19978_20040 = state_19899__$1;
(statearr_19978_20040[(1)] = (10));

} else {
var statearr_19979_20041 = state_19899__$1;
(statearr_19979_20041[(1)] = (11));

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
});})(c__18664__auto___19987,cs,m,dchan,dctr,done))
;
return ((function (switch__18552__auto__,c__18664__auto___19987,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__18553__auto__ = null;
var cljs$core$async$mult_$_state_machine__18553__auto____0 = (function (){
var statearr_19983 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19983[(0)] = cljs$core$async$mult_$_state_machine__18553__auto__);

(statearr_19983[(1)] = (1));

return statearr_19983;
});
var cljs$core$async$mult_$_state_machine__18553__auto____1 = (function (state_19899){
while(true){
var ret_value__18554__auto__ = (function (){try{while(true){
var result__18555__auto__ = switch__18552__auto__.call(null,state_19899);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18555__auto__;
}
break;
}
}catch (e19984){if((e19984 instanceof Object)){
var ex__18556__auto__ = e19984;
var statearr_19985_20042 = state_19899;
(statearr_19985_20042[(5)] = ex__18556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19899);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19984;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20043 = state_19899;
state_19899 = G__20043;
continue;
} else {
return ret_value__18554__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__18553__auto__ = function(state_19899){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__18553__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__18553__auto____1.call(this,state_19899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__18553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__18553__auto____0;
cljs$core$async$mult_$_state_machine__18553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__18553__auto____1;
return cljs$core$async$mult_$_state_machine__18553__auto__;
})()
;})(switch__18552__auto__,c__18664__auto___19987,cs,m,dchan,dctr,done))
})();
var state__18666__auto__ = (function (){var statearr_19986 = f__18665__auto__.call(null);
(statearr_19986[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18664__auto___19987);

return statearr_19986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18666__auto__);
});})(c__18664__auto___19987,cs,m,dchan,dctr,done))
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
var args20044 = [];
var len__7326__auto___20047 = arguments.length;
var i__7327__auto___20048 = (0);
while(true){
if((i__7327__auto___20048 < len__7326__auto___20047)){
args20044.push((arguments[i__7327__auto___20048]));

var G__20049 = (i__7327__auto___20048 + (1));
i__7327__auto___20048 = G__20049;
continue;
} else {
}
break;
}

var G__20046 = args20044.length;
switch (G__20046) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20044.length)].join('')));

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
var x__6914__auto__ = (((m == null))?null:m);
var m__6915__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__6914__auto__)]);
if(!((m__6915__auto__ == null))){
return m__6915__auto__.call(null,m,ch);
} else {
var m__6915__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__6915__auto____$1 == null))){
return m__6915__auto____$1.call(null,m,ch);
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
var x__6914__auto__ = (((m == null))?null:m);
var m__6915__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__6914__auto__)]);
if(!((m__6915__auto__ == null))){
return m__6915__auto__.call(null,m,ch);
} else {
var m__6915__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__6915__auto____$1 == null))){
return m__6915__auto____$1.call(null,m,ch);
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
var x__6914__auto__ = (((m == null))?null:m);
var m__6915__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__6914__auto__)]);
if(!((m__6915__auto__ == null))){
return m__6915__auto__.call(null,m);
} else {
var m__6915__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__6915__auto____$1 == null))){
return m__6915__auto____$1.call(null,m);
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
var x__6914__auto__ = (((m == null))?null:m);
var m__6915__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__6914__auto__)]);
if(!((m__6915__auto__ == null))){
return m__6915__auto__.call(null,m,state_map);
} else {
var m__6915__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__6915__auto____$1 == null))){
return m__6915__auto____$1.call(null,m,state_map);
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
var x__6914__auto__ = (((m == null))?null:m);
var m__6915__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__6914__auto__)]);
if(!((m__6915__auto__ == null))){
return m__6915__auto__.call(null,m,mode);
} else {
var m__6915__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__6915__auto____$1 == null))){
return m__6915__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7333__auto__ = [];
var len__7326__auto___20061 = arguments.length;
var i__7327__auto___20062 = (0);
while(true){
if((i__7327__auto___20062 < len__7326__auto___20061)){
args__7333__auto__.push((arguments[i__7327__auto___20062]));

var G__20063 = (i__7327__auto___20062 + (1));
i__7327__auto___20062 = G__20063;
continue;
} else {
}
break;
}

var argseq__7334__auto__ = ((((3) < args__7333__auto__.length))?(new cljs.core.IndexedSeq(args__7333__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7334__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__20055){
var map__20056 = p__20055;
var map__20056__$1 = ((((!((map__20056 == null)))?((((map__20056.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20056.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20056):map__20056);
var opts = map__20056__$1;
var statearr_20058_20064 = state;
(statearr_20058_20064[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__20056,map__20056__$1,opts){
return (function (val){
var statearr_20059_20065 = state;
(statearr_20059_20065[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__20056,map__20056__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_20060_20066 = state;
(statearr_20060_20066[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq20051){
var G__20052 = cljs.core.first.call(null,seq20051);
var seq20051__$1 = cljs.core.next.call(null,seq20051);
var G__20053 = cljs.core.first.call(null,seq20051__$1);
var seq20051__$2 = cljs.core.next.call(null,seq20051__$1);
var G__20054 = cljs.core.first.call(null,seq20051__$2);
var seq20051__$3 = cljs.core.next.call(null,seq20051__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20052,G__20053,G__20054,seq20051__$3);
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
if(typeof cljs.core.async.t_cljs$core$async20232 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20232 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta20233){
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
this.meta20233 = meta20233;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20232.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20234,meta20233__$1){
var self__ = this;
var _20234__$1 = this;
return (new cljs.core.async.t_cljs$core$async20232(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta20233__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20232.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20234){
var self__ = this;
var _20234__$1 = this;
return self__.meta20233;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20232.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async20232.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20232.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async20232.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20232.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20232.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20232.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20232.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async20232.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta20233","meta20233",102201012,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20232.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20232.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20232";

cljs.core.async.t_cljs$core$async20232.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6857__auto__,writer__6858__auto__,opt__6859__auto__){
return cljs.core._write.call(null,writer__6858__auto__,"cljs.core.async/t_cljs$core$async20232");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async20232 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async20232(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20233){
return (new cljs.core.async.t_cljs$core$async20232(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20233));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async20232(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18664__auto___20397 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18664__auto___20397,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__18665__auto__ = (function (){var switch__18552__auto__ = ((function (c__18664__auto___20397,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_20334){
var state_val_20335 = (state_20334[(1)]);
if((state_val_20335 === (7))){
var inst_20250 = (state_20334[(2)]);
var state_20334__$1 = state_20334;
var statearr_20336_20398 = state_20334__$1;
(statearr_20336_20398[(2)] = inst_20250);

(statearr_20336_20398[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20335 === (20))){
var inst_20262 = (state_20334[(7)]);
var state_20334__$1 = state_20334;
var statearr_20337_20399 = state_20334__$1;
(statearr_20337_20399[(2)] = inst_20262);

(statearr_20337_20399[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20335 === (27))){
var state_20334__$1 = state_20334;
var statearr_20338_20400 = state_20334__$1;
(statearr_20338_20400[(2)] = null);

(statearr_20338_20400[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20335 === (1))){
var inst_20238 = (state_20334[(8)]);
var inst_20238__$1 = calc_state.call(null);
var inst_20240 = (inst_20238__$1 == null);
var inst_20241 = cljs.core.not.call(null,inst_20240);
var state_20334__$1 = (function (){var statearr_20339 = state_20334;
(statearr_20339[(8)] = inst_20238__$1);

return statearr_20339;
})();
if(inst_20241){
var statearr_20340_20401 = state_20334__$1;
(statearr_20340_20401[(1)] = (2));

} else {
var statearr_20341_20402 = state_20334__$1;
(statearr_20341_20402[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20335 === (24))){
var inst_20308 = (state_20334[(9)]);
var inst_20285 = (state_20334[(10)]);
var inst_20294 = (state_20334[(11)]);
var inst_20308__$1 = inst_20285.call(null,inst_20294);
var state_20334__$1 = (function (){var statearr_20342 = state_20334;
(statearr_20342[(9)] = inst_20308__$1);

return statearr_20342;
})();
if(cljs.core.truth_(inst_20308__$1)){
var statearr_20343_20403 = state_20334__$1;
(statearr_20343_20403[(1)] = (29));

} else {
var statearr_20344_20404 = state_20334__$1;
(statearr_20344_20404[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20335 === (4))){
var inst_20253 = (state_20334[(2)]);
var state_20334__$1 = state_20334;
if(cljs.core.truth_(inst_20253)){
var statearr_20345_20405 = state_20334__$1;
(statearr_20345_20405[(1)] = (8));

} else {
var statearr_20346_20406 = state_20334__$1;
(statearr_20346_20406[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20335 === (15))){
var inst_20279 = (state_20334[(2)]);
var state_20334__$1 = state_20334;
if(cljs.core.truth_(inst_20279)){
var statearr_20347_20407 = state_20334__$1;
(statearr_20347_20407[(1)] = (19));

} else {
var statearr_20348_20408 = state_20334__$1;
(statearr_20348_20408[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20335 === (21))){
var inst_20284 = (state_20334[(12)]);
var inst_20284__$1 = (state_20334[(2)]);
var inst_20285 = cljs.core.get.call(null,inst_20284__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_20286 = cljs.core.get.call(null,inst_20284__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20287 = cljs.core.get.call(null,inst_20284__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_20334__$1 = (function (){var statearr_20349 = state_20334;
(statearr_20349[(13)] = inst_20286);

(statearr_20349[(10)] = inst_20285);

(statearr_20349[(12)] = inst_20284__$1);

return statearr_20349;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_20334__$1,(22),inst_20287);
} else {
if((state_val_20335 === (31))){
var inst_20316 = (state_20334[(2)]);
var state_20334__$1 = state_20334;
if(cljs.core.truth_(inst_20316)){
var statearr_20350_20409 = state_20334__$1;
(statearr_20350_20409[(1)] = (32));

} else {
var statearr_20351_20410 = state_20334__$1;
(statearr_20351_20410[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20335 === (32))){
var inst_20293 = (state_20334[(14)]);
var state_20334__$1 = state_20334;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20334__$1,(35),out,inst_20293);
} else {
if((state_val_20335 === (33))){
var inst_20284 = (state_20334[(12)]);
var inst_20262 = inst_20284;
var state_20334__$1 = (function (){var statearr_20352 = state_20334;
(statearr_20352[(7)] = inst_20262);

return statearr_20352;
})();
var statearr_20353_20411 = state_20334__$1;
(statearr_20353_20411[(2)] = null);

(statearr_20353_20411[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20335 === (13))){
var inst_20262 = (state_20334[(7)]);
var inst_20269 = inst_20262.cljs$lang$protocol_mask$partition0$;
var inst_20270 = (inst_20269 & (64));
var inst_20271 = inst_20262.cljs$core$ISeq$;
var inst_20272 = (inst_20270) || (inst_20271);
var state_20334__$1 = state_20334;
if(cljs.core.truth_(inst_20272)){
var statearr_20354_20412 = state_20334__$1;
(statearr_20354_20412[(1)] = (16));

} else {
var statearr_20355_20413 = state_20334__$1;
(statearr_20355_20413[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20335 === (22))){
var inst_20293 = (state_20334[(14)]);
var inst_20294 = (state_20334[(11)]);
var inst_20292 = (state_20334[(2)]);
var inst_20293__$1 = cljs.core.nth.call(null,inst_20292,(0),null);
var inst_20294__$1 = cljs.core.nth.call(null,inst_20292,(1),null);
var inst_20295 = (inst_20293__$1 == null);
var inst_20296 = cljs.core._EQ_.call(null,inst_20294__$1,change);
var inst_20297 = (inst_20295) || (inst_20296);
var state_20334__$1 = (function (){var statearr_20356 = state_20334;
(statearr_20356[(14)] = inst_20293__$1);

(statearr_20356[(11)] = inst_20294__$1);

return statearr_20356;
})();
if(cljs.core.truth_(inst_20297)){
var statearr_20357_20414 = state_20334__$1;
(statearr_20357_20414[(1)] = (23));

} else {
var statearr_20358_20415 = state_20334__$1;
(statearr_20358_20415[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20335 === (36))){
var inst_20284 = (state_20334[(12)]);
var inst_20262 = inst_20284;
var state_20334__$1 = (function (){var statearr_20359 = state_20334;
(statearr_20359[(7)] = inst_20262);

return statearr_20359;
})();
var statearr_20360_20416 = state_20334__$1;
(statearr_20360_20416[(2)] = null);

(statearr_20360_20416[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20335 === (29))){
var inst_20308 = (state_20334[(9)]);
var state_20334__$1 = state_20334;
var statearr_20361_20417 = state_20334__$1;
(statearr_20361_20417[(2)] = inst_20308);

(statearr_20361_20417[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20335 === (6))){
var state_20334__$1 = state_20334;
var statearr_20362_20418 = state_20334__$1;
(statearr_20362_20418[(2)] = false);

(statearr_20362_20418[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20335 === (28))){
var inst_20304 = (state_20334[(2)]);
var inst_20305 = calc_state.call(null);
var inst_20262 = inst_20305;
var state_20334__$1 = (function (){var statearr_20363 = state_20334;
(statearr_20363[(7)] = inst_20262);

(statearr_20363[(15)] = inst_20304);

return statearr_20363;
})();
var statearr_20364_20419 = state_20334__$1;
(statearr_20364_20419[(2)] = null);

(statearr_20364_20419[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20335 === (25))){
var inst_20330 = (state_20334[(2)]);
var state_20334__$1 = state_20334;
var statearr_20365_20420 = state_20334__$1;
(statearr_20365_20420[(2)] = inst_20330);

(statearr_20365_20420[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20335 === (34))){
var inst_20328 = (state_20334[(2)]);
var state_20334__$1 = state_20334;
var statearr_20366_20421 = state_20334__$1;
(statearr_20366_20421[(2)] = inst_20328);

(statearr_20366_20421[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20335 === (17))){
var state_20334__$1 = state_20334;
var statearr_20367_20422 = state_20334__$1;
(statearr_20367_20422[(2)] = false);

(statearr_20367_20422[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20335 === (3))){
var state_20334__$1 = state_20334;
var statearr_20368_20423 = state_20334__$1;
(statearr_20368_20423[(2)] = false);

(statearr_20368_20423[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20335 === (12))){
var inst_20332 = (state_20334[(2)]);
var state_20334__$1 = state_20334;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20334__$1,inst_20332);
} else {
if((state_val_20335 === (2))){
var inst_20238 = (state_20334[(8)]);
var inst_20243 = inst_20238.cljs$lang$protocol_mask$partition0$;
var inst_20244 = (inst_20243 & (64));
var inst_20245 = inst_20238.cljs$core$ISeq$;
var inst_20246 = (inst_20244) || (inst_20245);
var state_20334__$1 = state_20334;
if(cljs.core.truth_(inst_20246)){
var statearr_20369_20424 = state_20334__$1;
(statearr_20369_20424[(1)] = (5));

} else {
var statearr_20370_20425 = state_20334__$1;
(statearr_20370_20425[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20335 === (23))){
var inst_20293 = (state_20334[(14)]);
var inst_20299 = (inst_20293 == null);
var state_20334__$1 = state_20334;
if(cljs.core.truth_(inst_20299)){
var statearr_20371_20426 = state_20334__$1;
(statearr_20371_20426[(1)] = (26));

} else {
var statearr_20372_20427 = state_20334__$1;
(statearr_20372_20427[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20335 === (35))){
var inst_20319 = (state_20334[(2)]);
var state_20334__$1 = state_20334;
if(cljs.core.truth_(inst_20319)){
var statearr_20373_20428 = state_20334__$1;
(statearr_20373_20428[(1)] = (36));

} else {
var statearr_20374_20429 = state_20334__$1;
(statearr_20374_20429[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20335 === (19))){
var inst_20262 = (state_20334[(7)]);
var inst_20281 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20262);
var state_20334__$1 = state_20334;
var statearr_20375_20430 = state_20334__$1;
(statearr_20375_20430[(2)] = inst_20281);

(statearr_20375_20430[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20335 === (11))){
var inst_20262 = (state_20334[(7)]);
var inst_20266 = (inst_20262 == null);
var inst_20267 = cljs.core.not.call(null,inst_20266);
var state_20334__$1 = state_20334;
if(inst_20267){
var statearr_20376_20431 = state_20334__$1;
(statearr_20376_20431[(1)] = (13));

} else {
var statearr_20377_20432 = state_20334__$1;
(statearr_20377_20432[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20335 === (9))){
var inst_20238 = (state_20334[(8)]);
var state_20334__$1 = state_20334;
var statearr_20378_20433 = state_20334__$1;
(statearr_20378_20433[(2)] = inst_20238);

(statearr_20378_20433[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20335 === (5))){
var state_20334__$1 = state_20334;
var statearr_20379_20434 = state_20334__$1;
(statearr_20379_20434[(2)] = true);

(statearr_20379_20434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20335 === (14))){
var state_20334__$1 = state_20334;
var statearr_20380_20435 = state_20334__$1;
(statearr_20380_20435[(2)] = false);

(statearr_20380_20435[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20335 === (26))){
var inst_20294 = (state_20334[(11)]);
var inst_20301 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_20294);
var state_20334__$1 = state_20334;
var statearr_20381_20436 = state_20334__$1;
(statearr_20381_20436[(2)] = inst_20301);

(statearr_20381_20436[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20335 === (16))){
var state_20334__$1 = state_20334;
var statearr_20382_20437 = state_20334__$1;
(statearr_20382_20437[(2)] = true);

(statearr_20382_20437[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20335 === (38))){
var inst_20324 = (state_20334[(2)]);
var state_20334__$1 = state_20334;
var statearr_20383_20438 = state_20334__$1;
(statearr_20383_20438[(2)] = inst_20324);

(statearr_20383_20438[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20335 === (30))){
var inst_20286 = (state_20334[(13)]);
var inst_20285 = (state_20334[(10)]);
var inst_20294 = (state_20334[(11)]);
var inst_20311 = cljs.core.empty_QMARK_.call(null,inst_20285);
var inst_20312 = inst_20286.call(null,inst_20294);
var inst_20313 = cljs.core.not.call(null,inst_20312);
var inst_20314 = (inst_20311) && (inst_20313);
var state_20334__$1 = state_20334;
var statearr_20384_20439 = state_20334__$1;
(statearr_20384_20439[(2)] = inst_20314);

(statearr_20384_20439[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20335 === (10))){
var inst_20238 = (state_20334[(8)]);
var inst_20258 = (state_20334[(2)]);
var inst_20259 = cljs.core.get.call(null,inst_20258,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_20260 = cljs.core.get.call(null,inst_20258,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20261 = cljs.core.get.call(null,inst_20258,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_20262 = inst_20238;
var state_20334__$1 = (function (){var statearr_20385 = state_20334;
(statearr_20385[(7)] = inst_20262);

(statearr_20385[(16)] = inst_20259);

(statearr_20385[(17)] = inst_20261);

(statearr_20385[(18)] = inst_20260);

return statearr_20385;
})();
var statearr_20386_20440 = state_20334__$1;
(statearr_20386_20440[(2)] = null);

(statearr_20386_20440[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20335 === (18))){
var inst_20276 = (state_20334[(2)]);
var state_20334__$1 = state_20334;
var statearr_20387_20441 = state_20334__$1;
(statearr_20387_20441[(2)] = inst_20276);

(statearr_20387_20441[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20335 === (37))){
var state_20334__$1 = state_20334;
var statearr_20388_20442 = state_20334__$1;
(statearr_20388_20442[(2)] = null);

(statearr_20388_20442[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20335 === (8))){
var inst_20238 = (state_20334[(8)]);
var inst_20255 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20238);
var state_20334__$1 = state_20334;
var statearr_20389_20443 = state_20334__$1;
(statearr_20389_20443[(2)] = inst_20255);

(statearr_20389_20443[(1)] = (10));


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
});})(c__18664__auto___20397,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__18552__auto__,c__18664__auto___20397,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__18553__auto__ = null;
var cljs$core$async$mix_$_state_machine__18553__auto____0 = (function (){
var statearr_20393 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20393[(0)] = cljs$core$async$mix_$_state_machine__18553__auto__);

(statearr_20393[(1)] = (1));

return statearr_20393;
});
var cljs$core$async$mix_$_state_machine__18553__auto____1 = (function (state_20334){
while(true){
var ret_value__18554__auto__ = (function (){try{while(true){
var result__18555__auto__ = switch__18552__auto__.call(null,state_20334);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18555__auto__;
}
break;
}
}catch (e20394){if((e20394 instanceof Object)){
var ex__18556__auto__ = e20394;
var statearr_20395_20444 = state_20334;
(statearr_20395_20444[(5)] = ex__18556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20334);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20394;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20445 = state_20334;
state_20334 = G__20445;
continue;
} else {
return ret_value__18554__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__18553__auto__ = function(state_20334){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__18553__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__18553__auto____1.call(this,state_20334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__18553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__18553__auto____0;
cljs$core$async$mix_$_state_machine__18553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__18553__auto____1;
return cljs$core$async$mix_$_state_machine__18553__auto__;
})()
;})(switch__18552__auto__,c__18664__auto___20397,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__18666__auto__ = (function (){var statearr_20396 = f__18665__auto__.call(null);
(statearr_20396[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18664__auto___20397);

return statearr_20396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18666__auto__);
});})(c__18664__auto___20397,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__6914__auto__ = (((p == null))?null:p);
var m__6915__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__6914__auto__)]);
if(!((m__6915__auto__ == null))){
return m__6915__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__6915__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__6915__auto____$1 == null))){
return m__6915__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__6914__auto__ = (((p == null))?null:p);
var m__6915__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__6914__auto__)]);
if(!((m__6915__auto__ == null))){
return m__6915__auto__.call(null,p,v,ch);
} else {
var m__6915__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__6915__auto____$1 == null))){
return m__6915__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args20446 = [];
var len__7326__auto___20449 = arguments.length;
var i__7327__auto___20450 = (0);
while(true){
if((i__7327__auto___20450 < len__7326__auto___20449)){
args20446.push((arguments[i__7327__auto___20450]));

var G__20451 = (i__7327__auto___20450 + (1));
i__7327__auto___20450 = G__20451;
continue;
} else {
}
break;
}

var G__20448 = args20446.length;
switch (G__20448) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20446.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__6914__auto__ = (((p == null))?null:p);
var m__6915__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6914__auto__)]);
if(!((m__6915__auto__ == null))){
return m__6915__auto__.call(null,p);
} else {
var m__6915__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__6915__auto____$1 == null))){
return m__6915__auto____$1.call(null,p);
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
var x__6914__auto__ = (((p == null))?null:p);
var m__6915__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6914__auto__)]);
if(!((m__6915__auto__ == null))){
return m__6915__auto__.call(null,p,v);
} else {
var m__6915__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__6915__auto____$1 == null))){
return m__6915__auto____$1.call(null,p,v);
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
var args20454 = [];
var len__7326__auto___20579 = arguments.length;
var i__7327__auto___20580 = (0);
while(true){
if((i__7327__auto___20580 < len__7326__auto___20579)){
args20454.push((arguments[i__7327__auto___20580]));

var G__20581 = (i__7327__auto___20580 + (1));
i__7327__auto___20580 = G__20581;
continue;
} else {
}
break;
}

var G__20456 = args20454.length;
switch (G__20456) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20454.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__6251__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__6251__auto__)){
return or__6251__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__6251__auto__,mults){
return (function (p1__20453_SHARP_){
if(cljs.core.truth_(p1__20453_SHARP_.call(null,topic))){
return p1__20453_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__20453_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6251__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async20457 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20457 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta20458){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta20458 = meta20458;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20457.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_20459,meta20458__$1){
var self__ = this;
var _20459__$1 = this;
return (new cljs.core.async.t_cljs$core$async20457(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta20458__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20457.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_20459){
var self__ = this;
var _20459__$1 = this;
return self__.meta20458;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20457.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async20457.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20457.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async20457.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20457.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async20457.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20457.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20457.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta20458","meta20458",-1964996708,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20457.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20457.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20457";

cljs.core.async.t_cljs$core$async20457.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6857__auto__,writer__6858__auto__,opt__6859__auto__){
return cljs.core._write.call(null,writer__6858__auto__,"cljs.core.async/t_cljs$core$async20457");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async20457 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async20457(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta20458){
return (new cljs.core.async.t_cljs$core$async20457(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta20458));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async20457(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18664__auto___20583 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18664__auto___20583,mults,ensure_mult,p){
return (function (){
var f__18665__auto__ = (function (){var switch__18552__auto__ = ((function (c__18664__auto___20583,mults,ensure_mult,p){
return (function (state_20531){
var state_val_20532 = (state_20531[(1)]);
if((state_val_20532 === (7))){
var inst_20527 = (state_20531[(2)]);
var state_20531__$1 = state_20531;
var statearr_20533_20584 = state_20531__$1;
(statearr_20533_20584[(2)] = inst_20527);

(statearr_20533_20584[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20532 === (20))){
var state_20531__$1 = state_20531;
var statearr_20534_20585 = state_20531__$1;
(statearr_20534_20585[(2)] = null);

(statearr_20534_20585[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20532 === (1))){
var state_20531__$1 = state_20531;
var statearr_20535_20586 = state_20531__$1;
(statearr_20535_20586[(2)] = null);

(statearr_20535_20586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20532 === (24))){
var inst_20510 = (state_20531[(7)]);
var inst_20519 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_20510);
var state_20531__$1 = state_20531;
var statearr_20536_20587 = state_20531__$1;
(statearr_20536_20587[(2)] = inst_20519);

(statearr_20536_20587[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20532 === (4))){
var inst_20462 = (state_20531[(8)]);
var inst_20462__$1 = (state_20531[(2)]);
var inst_20463 = (inst_20462__$1 == null);
var state_20531__$1 = (function (){var statearr_20537 = state_20531;
(statearr_20537[(8)] = inst_20462__$1);

return statearr_20537;
})();
if(cljs.core.truth_(inst_20463)){
var statearr_20538_20588 = state_20531__$1;
(statearr_20538_20588[(1)] = (5));

} else {
var statearr_20539_20589 = state_20531__$1;
(statearr_20539_20589[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20532 === (15))){
var inst_20504 = (state_20531[(2)]);
var state_20531__$1 = state_20531;
var statearr_20540_20590 = state_20531__$1;
(statearr_20540_20590[(2)] = inst_20504);

(statearr_20540_20590[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20532 === (21))){
var inst_20524 = (state_20531[(2)]);
var state_20531__$1 = (function (){var statearr_20541 = state_20531;
(statearr_20541[(9)] = inst_20524);

return statearr_20541;
})();
var statearr_20542_20591 = state_20531__$1;
(statearr_20542_20591[(2)] = null);

(statearr_20542_20591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20532 === (13))){
var inst_20486 = (state_20531[(10)]);
var inst_20488 = cljs.core.chunked_seq_QMARK_.call(null,inst_20486);
var state_20531__$1 = state_20531;
if(inst_20488){
var statearr_20543_20592 = state_20531__$1;
(statearr_20543_20592[(1)] = (16));

} else {
var statearr_20544_20593 = state_20531__$1;
(statearr_20544_20593[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20532 === (22))){
var inst_20516 = (state_20531[(2)]);
var state_20531__$1 = state_20531;
if(cljs.core.truth_(inst_20516)){
var statearr_20545_20594 = state_20531__$1;
(statearr_20545_20594[(1)] = (23));

} else {
var statearr_20546_20595 = state_20531__$1;
(statearr_20546_20595[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20532 === (6))){
var inst_20510 = (state_20531[(7)]);
var inst_20462 = (state_20531[(8)]);
var inst_20512 = (state_20531[(11)]);
var inst_20510__$1 = topic_fn.call(null,inst_20462);
var inst_20511 = cljs.core.deref.call(null,mults);
var inst_20512__$1 = cljs.core.get.call(null,inst_20511,inst_20510__$1);
var state_20531__$1 = (function (){var statearr_20547 = state_20531;
(statearr_20547[(7)] = inst_20510__$1);

(statearr_20547[(11)] = inst_20512__$1);

return statearr_20547;
})();
if(cljs.core.truth_(inst_20512__$1)){
var statearr_20548_20596 = state_20531__$1;
(statearr_20548_20596[(1)] = (19));

} else {
var statearr_20549_20597 = state_20531__$1;
(statearr_20549_20597[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20532 === (25))){
var inst_20521 = (state_20531[(2)]);
var state_20531__$1 = state_20531;
var statearr_20550_20598 = state_20531__$1;
(statearr_20550_20598[(2)] = inst_20521);

(statearr_20550_20598[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20532 === (17))){
var inst_20486 = (state_20531[(10)]);
var inst_20495 = cljs.core.first.call(null,inst_20486);
var inst_20496 = cljs.core.async.muxch_STAR_.call(null,inst_20495);
var inst_20497 = cljs.core.async.close_BANG_.call(null,inst_20496);
var inst_20498 = cljs.core.next.call(null,inst_20486);
var inst_20472 = inst_20498;
var inst_20473 = null;
var inst_20474 = (0);
var inst_20475 = (0);
var state_20531__$1 = (function (){var statearr_20551 = state_20531;
(statearr_20551[(12)] = inst_20497);

(statearr_20551[(13)] = inst_20474);

(statearr_20551[(14)] = inst_20472);

(statearr_20551[(15)] = inst_20473);

(statearr_20551[(16)] = inst_20475);

return statearr_20551;
})();
var statearr_20552_20599 = state_20531__$1;
(statearr_20552_20599[(2)] = null);

(statearr_20552_20599[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20532 === (3))){
var inst_20529 = (state_20531[(2)]);
var state_20531__$1 = state_20531;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20531__$1,inst_20529);
} else {
if((state_val_20532 === (12))){
var inst_20506 = (state_20531[(2)]);
var state_20531__$1 = state_20531;
var statearr_20553_20600 = state_20531__$1;
(statearr_20553_20600[(2)] = inst_20506);

(statearr_20553_20600[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20532 === (2))){
var state_20531__$1 = state_20531;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20531__$1,(4),ch);
} else {
if((state_val_20532 === (23))){
var state_20531__$1 = state_20531;
var statearr_20554_20601 = state_20531__$1;
(statearr_20554_20601[(2)] = null);

(statearr_20554_20601[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20532 === (19))){
var inst_20462 = (state_20531[(8)]);
var inst_20512 = (state_20531[(11)]);
var inst_20514 = cljs.core.async.muxch_STAR_.call(null,inst_20512);
var state_20531__$1 = state_20531;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20531__$1,(22),inst_20514,inst_20462);
} else {
if((state_val_20532 === (11))){
var inst_20472 = (state_20531[(14)]);
var inst_20486 = (state_20531[(10)]);
var inst_20486__$1 = cljs.core.seq.call(null,inst_20472);
var state_20531__$1 = (function (){var statearr_20555 = state_20531;
(statearr_20555[(10)] = inst_20486__$1);

return statearr_20555;
})();
if(inst_20486__$1){
var statearr_20556_20602 = state_20531__$1;
(statearr_20556_20602[(1)] = (13));

} else {
var statearr_20557_20603 = state_20531__$1;
(statearr_20557_20603[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20532 === (9))){
var inst_20508 = (state_20531[(2)]);
var state_20531__$1 = state_20531;
var statearr_20558_20604 = state_20531__$1;
(statearr_20558_20604[(2)] = inst_20508);

(statearr_20558_20604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20532 === (5))){
var inst_20469 = cljs.core.deref.call(null,mults);
var inst_20470 = cljs.core.vals.call(null,inst_20469);
var inst_20471 = cljs.core.seq.call(null,inst_20470);
var inst_20472 = inst_20471;
var inst_20473 = null;
var inst_20474 = (0);
var inst_20475 = (0);
var state_20531__$1 = (function (){var statearr_20559 = state_20531;
(statearr_20559[(13)] = inst_20474);

(statearr_20559[(14)] = inst_20472);

(statearr_20559[(15)] = inst_20473);

(statearr_20559[(16)] = inst_20475);

return statearr_20559;
})();
var statearr_20560_20605 = state_20531__$1;
(statearr_20560_20605[(2)] = null);

(statearr_20560_20605[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20532 === (14))){
var state_20531__$1 = state_20531;
var statearr_20564_20606 = state_20531__$1;
(statearr_20564_20606[(2)] = null);

(statearr_20564_20606[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20532 === (16))){
var inst_20486 = (state_20531[(10)]);
var inst_20490 = cljs.core.chunk_first.call(null,inst_20486);
var inst_20491 = cljs.core.chunk_rest.call(null,inst_20486);
var inst_20492 = cljs.core.count.call(null,inst_20490);
var inst_20472 = inst_20491;
var inst_20473 = inst_20490;
var inst_20474 = inst_20492;
var inst_20475 = (0);
var state_20531__$1 = (function (){var statearr_20565 = state_20531;
(statearr_20565[(13)] = inst_20474);

(statearr_20565[(14)] = inst_20472);

(statearr_20565[(15)] = inst_20473);

(statearr_20565[(16)] = inst_20475);

return statearr_20565;
})();
var statearr_20566_20607 = state_20531__$1;
(statearr_20566_20607[(2)] = null);

(statearr_20566_20607[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20532 === (10))){
var inst_20474 = (state_20531[(13)]);
var inst_20472 = (state_20531[(14)]);
var inst_20473 = (state_20531[(15)]);
var inst_20475 = (state_20531[(16)]);
var inst_20480 = cljs.core._nth.call(null,inst_20473,inst_20475);
var inst_20481 = cljs.core.async.muxch_STAR_.call(null,inst_20480);
var inst_20482 = cljs.core.async.close_BANG_.call(null,inst_20481);
var inst_20483 = (inst_20475 + (1));
var tmp20561 = inst_20474;
var tmp20562 = inst_20472;
var tmp20563 = inst_20473;
var inst_20472__$1 = tmp20562;
var inst_20473__$1 = tmp20563;
var inst_20474__$1 = tmp20561;
var inst_20475__$1 = inst_20483;
var state_20531__$1 = (function (){var statearr_20567 = state_20531;
(statearr_20567[(17)] = inst_20482);

(statearr_20567[(13)] = inst_20474__$1);

(statearr_20567[(14)] = inst_20472__$1);

(statearr_20567[(15)] = inst_20473__$1);

(statearr_20567[(16)] = inst_20475__$1);

return statearr_20567;
})();
var statearr_20568_20608 = state_20531__$1;
(statearr_20568_20608[(2)] = null);

(statearr_20568_20608[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20532 === (18))){
var inst_20501 = (state_20531[(2)]);
var state_20531__$1 = state_20531;
var statearr_20569_20609 = state_20531__$1;
(statearr_20569_20609[(2)] = inst_20501);

(statearr_20569_20609[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20532 === (8))){
var inst_20474 = (state_20531[(13)]);
var inst_20475 = (state_20531[(16)]);
var inst_20477 = (inst_20475 < inst_20474);
var inst_20478 = inst_20477;
var state_20531__$1 = state_20531;
if(cljs.core.truth_(inst_20478)){
var statearr_20570_20610 = state_20531__$1;
(statearr_20570_20610[(1)] = (10));

} else {
var statearr_20571_20611 = state_20531__$1;
(statearr_20571_20611[(1)] = (11));

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
});})(c__18664__auto___20583,mults,ensure_mult,p))
;
return ((function (switch__18552__auto__,c__18664__auto___20583,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__18553__auto__ = null;
var cljs$core$async$state_machine__18553__auto____0 = (function (){
var statearr_20575 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20575[(0)] = cljs$core$async$state_machine__18553__auto__);

(statearr_20575[(1)] = (1));

return statearr_20575;
});
var cljs$core$async$state_machine__18553__auto____1 = (function (state_20531){
while(true){
var ret_value__18554__auto__ = (function (){try{while(true){
var result__18555__auto__ = switch__18552__auto__.call(null,state_20531);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18555__auto__;
}
break;
}
}catch (e20576){if((e20576 instanceof Object)){
var ex__18556__auto__ = e20576;
var statearr_20577_20612 = state_20531;
(statearr_20577_20612[(5)] = ex__18556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20531);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20576;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20613 = state_20531;
state_20531 = G__20613;
continue;
} else {
return ret_value__18554__auto__;
}
break;
}
});
cljs$core$async$state_machine__18553__auto__ = function(state_20531){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18553__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18553__auto____1.call(this,state_20531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18553__auto____0;
cljs$core$async$state_machine__18553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18553__auto____1;
return cljs$core$async$state_machine__18553__auto__;
})()
;})(switch__18552__auto__,c__18664__auto___20583,mults,ensure_mult,p))
})();
var state__18666__auto__ = (function (){var statearr_20578 = f__18665__auto__.call(null);
(statearr_20578[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18664__auto___20583);

return statearr_20578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18666__auto__);
});})(c__18664__auto___20583,mults,ensure_mult,p))
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
var args20614 = [];
var len__7326__auto___20617 = arguments.length;
var i__7327__auto___20618 = (0);
while(true){
if((i__7327__auto___20618 < len__7326__auto___20617)){
args20614.push((arguments[i__7327__auto___20618]));

var G__20619 = (i__7327__auto___20618 + (1));
i__7327__auto___20618 = G__20619;
continue;
} else {
}
break;
}

var G__20616 = args20614.length;
switch (G__20616) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20614.length)].join('')));

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
var args20621 = [];
var len__7326__auto___20624 = arguments.length;
var i__7327__auto___20625 = (0);
while(true){
if((i__7327__auto___20625 < len__7326__auto___20624)){
args20621.push((arguments[i__7327__auto___20625]));

var G__20626 = (i__7327__auto___20625 + (1));
i__7327__auto___20625 = G__20626;
continue;
} else {
}
break;
}

var G__20623 = args20621.length;
switch (G__20623) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20621.length)].join('')));

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
var args20628 = [];
var len__7326__auto___20699 = arguments.length;
var i__7327__auto___20700 = (0);
while(true){
if((i__7327__auto___20700 < len__7326__auto___20699)){
args20628.push((arguments[i__7327__auto___20700]));

var G__20701 = (i__7327__auto___20700 + (1));
i__7327__auto___20700 = G__20701;
continue;
} else {
}
break;
}

var G__20630 = args20628.length;
switch (G__20630) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20628.length)].join('')));

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
var c__18664__auto___20703 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18664__auto___20703,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__18665__auto__ = (function (){var switch__18552__auto__ = ((function (c__18664__auto___20703,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_20669){
var state_val_20670 = (state_20669[(1)]);
if((state_val_20670 === (7))){
var state_20669__$1 = state_20669;
var statearr_20671_20704 = state_20669__$1;
(statearr_20671_20704[(2)] = null);

(statearr_20671_20704[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20670 === (1))){
var state_20669__$1 = state_20669;
var statearr_20672_20705 = state_20669__$1;
(statearr_20672_20705[(2)] = null);

(statearr_20672_20705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20670 === (4))){
var inst_20633 = (state_20669[(7)]);
var inst_20635 = (inst_20633 < cnt);
var state_20669__$1 = state_20669;
if(cljs.core.truth_(inst_20635)){
var statearr_20673_20706 = state_20669__$1;
(statearr_20673_20706[(1)] = (6));

} else {
var statearr_20674_20707 = state_20669__$1;
(statearr_20674_20707[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20670 === (15))){
var inst_20665 = (state_20669[(2)]);
var state_20669__$1 = state_20669;
var statearr_20675_20708 = state_20669__$1;
(statearr_20675_20708[(2)] = inst_20665);

(statearr_20675_20708[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20670 === (13))){
var inst_20658 = cljs.core.async.close_BANG_.call(null,out);
var state_20669__$1 = state_20669;
var statearr_20676_20709 = state_20669__$1;
(statearr_20676_20709[(2)] = inst_20658);

(statearr_20676_20709[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20670 === (6))){
var state_20669__$1 = state_20669;
var statearr_20677_20710 = state_20669__$1;
(statearr_20677_20710[(2)] = null);

(statearr_20677_20710[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20670 === (3))){
var inst_20667 = (state_20669[(2)]);
var state_20669__$1 = state_20669;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20669__$1,inst_20667);
} else {
if((state_val_20670 === (12))){
var inst_20655 = (state_20669[(8)]);
var inst_20655__$1 = (state_20669[(2)]);
var inst_20656 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_20655__$1);
var state_20669__$1 = (function (){var statearr_20678 = state_20669;
(statearr_20678[(8)] = inst_20655__$1);

return statearr_20678;
})();
if(cljs.core.truth_(inst_20656)){
var statearr_20679_20711 = state_20669__$1;
(statearr_20679_20711[(1)] = (13));

} else {
var statearr_20680_20712 = state_20669__$1;
(statearr_20680_20712[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20670 === (2))){
var inst_20632 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_20633 = (0);
var state_20669__$1 = (function (){var statearr_20681 = state_20669;
(statearr_20681[(9)] = inst_20632);

(statearr_20681[(7)] = inst_20633);

return statearr_20681;
})();
var statearr_20682_20713 = state_20669__$1;
(statearr_20682_20713[(2)] = null);

(statearr_20682_20713[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20670 === (11))){
var inst_20633 = (state_20669[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_20669,(10),Object,null,(9));
var inst_20642 = chs__$1.call(null,inst_20633);
var inst_20643 = done.call(null,inst_20633);
var inst_20644 = cljs.core.async.take_BANG_.call(null,inst_20642,inst_20643);
var state_20669__$1 = state_20669;
var statearr_20683_20714 = state_20669__$1;
(statearr_20683_20714[(2)] = inst_20644);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20669__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20670 === (9))){
var inst_20633 = (state_20669[(7)]);
var inst_20646 = (state_20669[(2)]);
var inst_20647 = (inst_20633 + (1));
var inst_20633__$1 = inst_20647;
var state_20669__$1 = (function (){var statearr_20684 = state_20669;
(statearr_20684[(10)] = inst_20646);

(statearr_20684[(7)] = inst_20633__$1);

return statearr_20684;
})();
var statearr_20685_20715 = state_20669__$1;
(statearr_20685_20715[(2)] = null);

(statearr_20685_20715[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20670 === (5))){
var inst_20653 = (state_20669[(2)]);
var state_20669__$1 = (function (){var statearr_20686 = state_20669;
(statearr_20686[(11)] = inst_20653);

return statearr_20686;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20669__$1,(12),dchan);
} else {
if((state_val_20670 === (14))){
var inst_20655 = (state_20669[(8)]);
var inst_20660 = cljs.core.apply.call(null,f,inst_20655);
var state_20669__$1 = state_20669;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20669__$1,(16),out,inst_20660);
} else {
if((state_val_20670 === (16))){
var inst_20662 = (state_20669[(2)]);
var state_20669__$1 = (function (){var statearr_20687 = state_20669;
(statearr_20687[(12)] = inst_20662);

return statearr_20687;
})();
var statearr_20688_20716 = state_20669__$1;
(statearr_20688_20716[(2)] = null);

(statearr_20688_20716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20670 === (10))){
var inst_20637 = (state_20669[(2)]);
var inst_20638 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_20669__$1 = (function (){var statearr_20689 = state_20669;
(statearr_20689[(13)] = inst_20637);

return statearr_20689;
})();
var statearr_20690_20717 = state_20669__$1;
(statearr_20690_20717[(2)] = inst_20638);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20669__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20670 === (8))){
var inst_20651 = (state_20669[(2)]);
var state_20669__$1 = state_20669;
var statearr_20691_20718 = state_20669__$1;
(statearr_20691_20718[(2)] = inst_20651);

(statearr_20691_20718[(1)] = (5));


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
});})(c__18664__auto___20703,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__18552__auto__,c__18664__auto___20703,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__18553__auto__ = null;
var cljs$core$async$state_machine__18553__auto____0 = (function (){
var statearr_20695 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20695[(0)] = cljs$core$async$state_machine__18553__auto__);

(statearr_20695[(1)] = (1));

return statearr_20695;
});
var cljs$core$async$state_machine__18553__auto____1 = (function (state_20669){
while(true){
var ret_value__18554__auto__ = (function (){try{while(true){
var result__18555__auto__ = switch__18552__auto__.call(null,state_20669);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18555__auto__;
}
break;
}
}catch (e20696){if((e20696 instanceof Object)){
var ex__18556__auto__ = e20696;
var statearr_20697_20719 = state_20669;
(statearr_20697_20719[(5)] = ex__18556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20669);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20696;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20720 = state_20669;
state_20669 = G__20720;
continue;
} else {
return ret_value__18554__auto__;
}
break;
}
});
cljs$core$async$state_machine__18553__auto__ = function(state_20669){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18553__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18553__auto____1.call(this,state_20669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18553__auto____0;
cljs$core$async$state_machine__18553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18553__auto____1;
return cljs$core$async$state_machine__18553__auto__;
})()
;})(switch__18552__auto__,c__18664__auto___20703,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__18666__auto__ = (function (){var statearr_20698 = f__18665__auto__.call(null);
(statearr_20698[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18664__auto___20703);

return statearr_20698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18666__auto__);
});})(c__18664__auto___20703,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args20722 = [];
var len__7326__auto___20780 = arguments.length;
var i__7327__auto___20781 = (0);
while(true){
if((i__7327__auto___20781 < len__7326__auto___20780)){
args20722.push((arguments[i__7327__auto___20781]));

var G__20782 = (i__7327__auto___20781 + (1));
i__7327__auto___20781 = G__20782;
continue;
} else {
}
break;
}

var G__20724 = args20722.length;
switch (G__20724) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20722.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18664__auto___20784 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18664__auto___20784,out){
return (function (){
var f__18665__auto__ = (function (){var switch__18552__auto__ = ((function (c__18664__auto___20784,out){
return (function (state_20756){
var state_val_20757 = (state_20756[(1)]);
if((state_val_20757 === (7))){
var inst_20736 = (state_20756[(7)]);
var inst_20735 = (state_20756[(8)]);
var inst_20735__$1 = (state_20756[(2)]);
var inst_20736__$1 = cljs.core.nth.call(null,inst_20735__$1,(0),null);
var inst_20737 = cljs.core.nth.call(null,inst_20735__$1,(1),null);
var inst_20738 = (inst_20736__$1 == null);
var state_20756__$1 = (function (){var statearr_20758 = state_20756;
(statearr_20758[(7)] = inst_20736__$1);

(statearr_20758[(8)] = inst_20735__$1);

(statearr_20758[(9)] = inst_20737);

return statearr_20758;
})();
if(cljs.core.truth_(inst_20738)){
var statearr_20759_20785 = state_20756__$1;
(statearr_20759_20785[(1)] = (8));

} else {
var statearr_20760_20786 = state_20756__$1;
(statearr_20760_20786[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20757 === (1))){
var inst_20725 = cljs.core.vec.call(null,chs);
var inst_20726 = inst_20725;
var state_20756__$1 = (function (){var statearr_20761 = state_20756;
(statearr_20761[(10)] = inst_20726);

return statearr_20761;
})();
var statearr_20762_20787 = state_20756__$1;
(statearr_20762_20787[(2)] = null);

(statearr_20762_20787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20757 === (4))){
var inst_20726 = (state_20756[(10)]);
var state_20756__$1 = state_20756;
return cljs.core.async.ioc_alts_BANG_.call(null,state_20756__$1,(7),inst_20726);
} else {
if((state_val_20757 === (6))){
var inst_20752 = (state_20756[(2)]);
var state_20756__$1 = state_20756;
var statearr_20763_20788 = state_20756__$1;
(statearr_20763_20788[(2)] = inst_20752);

(statearr_20763_20788[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20757 === (3))){
var inst_20754 = (state_20756[(2)]);
var state_20756__$1 = state_20756;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20756__$1,inst_20754);
} else {
if((state_val_20757 === (2))){
var inst_20726 = (state_20756[(10)]);
var inst_20728 = cljs.core.count.call(null,inst_20726);
var inst_20729 = (inst_20728 > (0));
var state_20756__$1 = state_20756;
if(cljs.core.truth_(inst_20729)){
var statearr_20765_20789 = state_20756__$1;
(statearr_20765_20789[(1)] = (4));

} else {
var statearr_20766_20790 = state_20756__$1;
(statearr_20766_20790[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20757 === (11))){
var inst_20726 = (state_20756[(10)]);
var inst_20745 = (state_20756[(2)]);
var tmp20764 = inst_20726;
var inst_20726__$1 = tmp20764;
var state_20756__$1 = (function (){var statearr_20767 = state_20756;
(statearr_20767[(10)] = inst_20726__$1);

(statearr_20767[(11)] = inst_20745);

return statearr_20767;
})();
var statearr_20768_20791 = state_20756__$1;
(statearr_20768_20791[(2)] = null);

(statearr_20768_20791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20757 === (9))){
var inst_20736 = (state_20756[(7)]);
var state_20756__$1 = state_20756;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20756__$1,(11),out,inst_20736);
} else {
if((state_val_20757 === (5))){
var inst_20750 = cljs.core.async.close_BANG_.call(null,out);
var state_20756__$1 = state_20756;
var statearr_20769_20792 = state_20756__$1;
(statearr_20769_20792[(2)] = inst_20750);

(statearr_20769_20792[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20757 === (10))){
var inst_20748 = (state_20756[(2)]);
var state_20756__$1 = state_20756;
var statearr_20770_20793 = state_20756__$1;
(statearr_20770_20793[(2)] = inst_20748);

(statearr_20770_20793[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20757 === (8))){
var inst_20726 = (state_20756[(10)]);
var inst_20736 = (state_20756[(7)]);
var inst_20735 = (state_20756[(8)]);
var inst_20737 = (state_20756[(9)]);
var inst_20740 = (function (){var cs = inst_20726;
var vec__20731 = inst_20735;
var v = inst_20736;
var c = inst_20737;
return ((function (cs,vec__20731,v,c,inst_20726,inst_20736,inst_20735,inst_20737,state_val_20757,c__18664__auto___20784,out){
return (function (p1__20721_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__20721_SHARP_);
});
;})(cs,vec__20731,v,c,inst_20726,inst_20736,inst_20735,inst_20737,state_val_20757,c__18664__auto___20784,out))
})();
var inst_20741 = cljs.core.filterv.call(null,inst_20740,inst_20726);
var inst_20726__$1 = inst_20741;
var state_20756__$1 = (function (){var statearr_20771 = state_20756;
(statearr_20771[(10)] = inst_20726__$1);

return statearr_20771;
})();
var statearr_20772_20794 = state_20756__$1;
(statearr_20772_20794[(2)] = null);

(statearr_20772_20794[(1)] = (2));


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
});})(c__18664__auto___20784,out))
;
return ((function (switch__18552__auto__,c__18664__auto___20784,out){
return (function() {
var cljs$core$async$state_machine__18553__auto__ = null;
var cljs$core$async$state_machine__18553__auto____0 = (function (){
var statearr_20776 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20776[(0)] = cljs$core$async$state_machine__18553__auto__);

(statearr_20776[(1)] = (1));

return statearr_20776;
});
var cljs$core$async$state_machine__18553__auto____1 = (function (state_20756){
while(true){
var ret_value__18554__auto__ = (function (){try{while(true){
var result__18555__auto__ = switch__18552__auto__.call(null,state_20756);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18555__auto__;
}
break;
}
}catch (e20777){if((e20777 instanceof Object)){
var ex__18556__auto__ = e20777;
var statearr_20778_20795 = state_20756;
(statearr_20778_20795[(5)] = ex__18556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20756);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20777;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20796 = state_20756;
state_20756 = G__20796;
continue;
} else {
return ret_value__18554__auto__;
}
break;
}
});
cljs$core$async$state_machine__18553__auto__ = function(state_20756){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18553__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18553__auto____1.call(this,state_20756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18553__auto____0;
cljs$core$async$state_machine__18553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18553__auto____1;
return cljs$core$async$state_machine__18553__auto__;
})()
;})(switch__18552__auto__,c__18664__auto___20784,out))
})();
var state__18666__auto__ = (function (){var statearr_20779 = f__18665__auto__.call(null);
(statearr_20779[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18664__auto___20784);

return statearr_20779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18666__auto__);
});})(c__18664__auto___20784,out))
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
var args20797 = [];
var len__7326__auto___20846 = arguments.length;
var i__7327__auto___20847 = (0);
while(true){
if((i__7327__auto___20847 < len__7326__auto___20846)){
args20797.push((arguments[i__7327__auto___20847]));

var G__20848 = (i__7327__auto___20847 + (1));
i__7327__auto___20847 = G__20848;
continue;
} else {
}
break;
}

var G__20799 = args20797.length;
switch (G__20799) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20797.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18664__auto___20850 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18664__auto___20850,out){
return (function (){
var f__18665__auto__ = (function (){var switch__18552__auto__ = ((function (c__18664__auto___20850,out){
return (function (state_20823){
var state_val_20824 = (state_20823[(1)]);
if((state_val_20824 === (7))){
var inst_20805 = (state_20823[(7)]);
var inst_20805__$1 = (state_20823[(2)]);
var inst_20806 = (inst_20805__$1 == null);
var inst_20807 = cljs.core.not.call(null,inst_20806);
var state_20823__$1 = (function (){var statearr_20825 = state_20823;
(statearr_20825[(7)] = inst_20805__$1);

return statearr_20825;
})();
if(inst_20807){
var statearr_20826_20851 = state_20823__$1;
(statearr_20826_20851[(1)] = (8));

} else {
var statearr_20827_20852 = state_20823__$1;
(statearr_20827_20852[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20824 === (1))){
var inst_20800 = (0);
var state_20823__$1 = (function (){var statearr_20828 = state_20823;
(statearr_20828[(8)] = inst_20800);

return statearr_20828;
})();
var statearr_20829_20853 = state_20823__$1;
(statearr_20829_20853[(2)] = null);

(statearr_20829_20853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20824 === (4))){
var state_20823__$1 = state_20823;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20823__$1,(7),ch);
} else {
if((state_val_20824 === (6))){
var inst_20818 = (state_20823[(2)]);
var state_20823__$1 = state_20823;
var statearr_20830_20854 = state_20823__$1;
(statearr_20830_20854[(2)] = inst_20818);

(statearr_20830_20854[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20824 === (3))){
var inst_20820 = (state_20823[(2)]);
var inst_20821 = cljs.core.async.close_BANG_.call(null,out);
var state_20823__$1 = (function (){var statearr_20831 = state_20823;
(statearr_20831[(9)] = inst_20820);

return statearr_20831;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20823__$1,inst_20821);
} else {
if((state_val_20824 === (2))){
var inst_20800 = (state_20823[(8)]);
var inst_20802 = (inst_20800 < n);
var state_20823__$1 = state_20823;
if(cljs.core.truth_(inst_20802)){
var statearr_20832_20855 = state_20823__$1;
(statearr_20832_20855[(1)] = (4));

} else {
var statearr_20833_20856 = state_20823__$1;
(statearr_20833_20856[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20824 === (11))){
var inst_20800 = (state_20823[(8)]);
var inst_20810 = (state_20823[(2)]);
var inst_20811 = (inst_20800 + (1));
var inst_20800__$1 = inst_20811;
var state_20823__$1 = (function (){var statearr_20834 = state_20823;
(statearr_20834[(8)] = inst_20800__$1);

(statearr_20834[(10)] = inst_20810);

return statearr_20834;
})();
var statearr_20835_20857 = state_20823__$1;
(statearr_20835_20857[(2)] = null);

(statearr_20835_20857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20824 === (9))){
var state_20823__$1 = state_20823;
var statearr_20836_20858 = state_20823__$1;
(statearr_20836_20858[(2)] = null);

(statearr_20836_20858[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20824 === (5))){
var state_20823__$1 = state_20823;
var statearr_20837_20859 = state_20823__$1;
(statearr_20837_20859[(2)] = null);

(statearr_20837_20859[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20824 === (10))){
var inst_20815 = (state_20823[(2)]);
var state_20823__$1 = state_20823;
var statearr_20838_20860 = state_20823__$1;
(statearr_20838_20860[(2)] = inst_20815);

(statearr_20838_20860[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20824 === (8))){
var inst_20805 = (state_20823[(7)]);
var state_20823__$1 = state_20823;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20823__$1,(11),out,inst_20805);
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
});})(c__18664__auto___20850,out))
;
return ((function (switch__18552__auto__,c__18664__auto___20850,out){
return (function() {
var cljs$core$async$state_machine__18553__auto__ = null;
var cljs$core$async$state_machine__18553__auto____0 = (function (){
var statearr_20842 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20842[(0)] = cljs$core$async$state_machine__18553__auto__);

(statearr_20842[(1)] = (1));

return statearr_20842;
});
var cljs$core$async$state_machine__18553__auto____1 = (function (state_20823){
while(true){
var ret_value__18554__auto__ = (function (){try{while(true){
var result__18555__auto__ = switch__18552__auto__.call(null,state_20823);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18555__auto__;
}
break;
}
}catch (e20843){if((e20843 instanceof Object)){
var ex__18556__auto__ = e20843;
var statearr_20844_20861 = state_20823;
(statearr_20844_20861[(5)] = ex__18556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20823);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20843;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20862 = state_20823;
state_20823 = G__20862;
continue;
} else {
return ret_value__18554__auto__;
}
break;
}
});
cljs$core$async$state_machine__18553__auto__ = function(state_20823){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18553__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18553__auto____1.call(this,state_20823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18553__auto____0;
cljs$core$async$state_machine__18553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18553__auto____1;
return cljs$core$async$state_machine__18553__auto__;
})()
;})(switch__18552__auto__,c__18664__auto___20850,out))
})();
var state__18666__auto__ = (function (){var statearr_20845 = f__18665__auto__.call(null);
(statearr_20845[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18664__auto___20850);

return statearr_20845;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18666__auto__);
});})(c__18664__auto___20850,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async20870 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20870 = (function (map_LT_,f,ch,meta20871){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta20871 = meta20871;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20870.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20872,meta20871__$1){
var self__ = this;
var _20872__$1 = this;
return (new cljs.core.async.t_cljs$core$async20870(self__.map_LT_,self__.f,self__.ch,meta20871__$1));
});

cljs.core.async.t_cljs$core$async20870.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20872){
var self__ = this;
var _20872__$1 = this;
return self__.meta20871;
});

cljs.core.async.t_cljs$core$async20870.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async20870.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20870.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20870.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async20870.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async20873 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20873 = (function (map_LT_,f,ch,meta20871,_,fn1,meta20874){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta20871 = meta20871;
this._ = _;
this.fn1 = fn1;
this.meta20874 = meta20874;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20873.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_20875,meta20874__$1){
var self__ = this;
var _20875__$1 = this;
return (new cljs.core.async.t_cljs$core$async20873(self__.map_LT_,self__.f,self__.ch,self__.meta20871,self__._,self__.fn1,meta20874__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async20873.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_20875){
var self__ = this;
var _20875__$1 = this;
return self__.meta20874;
});})(___$1))
;

cljs.core.async.t_cljs$core$async20873.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20873.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async20873.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async20873.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__20863_SHARP_){
return f1.call(null,(((p1__20863_SHARP_ == null))?null:self__.f.call(null,p1__20863_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async20873.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20871","meta20871",-2008233040,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async20870","cljs.core.async/t_cljs$core$async20870",-2025119770,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta20874","meta20874",-919325344,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async20873.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20873.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20873";

cljs.core.async.t_cljs$core$async20873.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__6857__auto__,writer__6858__auto__,opt__6859__auto__){
return cljs.core._write.call(null,writer__6858__auto__,"cljs.core.async/t_cljs$core$async20873");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async20873 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async20873(map_LT___$1,f__$1,ch__$1,meta20871__$1,___$2,fn1__$1,meta20874){
return (new cljs.core.async.t_cljs$core$async20873(map_LT___$1,f__$1,ch__$1,meta20871__$1,___$2,fn1__$1,meta20874));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async20873(self__.map_LT_,self__.f,self__.ch,self__.meta20871,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6239__auto__ = ret;
if(cljs.core.truth_(and__6239__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__6239__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async20870.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async20870.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async20870.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20871","meta20871",-2008233040,null)], null);
});

cljs.core.async.t_cljs$core$async20870.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20870.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20870";

cljs.core.async.t_cljs$core$async20870.cljs$lang$ctorPrWriter = (function (this__6857__auto__,writer__6858__auto__,opt__6859__auto__){
return cljs.core._write.call(null,writer__6858__auto__,"cljs.core.async/t_cljs$core$async20870");
});

cljs.core.async.__GT_t_cljs$core$async20870 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async20870(map_LT___$1,f__$1,ch__$1,meta20871){
return (new cljs.core.async.t_cljs$core$async20870(map_LT___$1,f__$1,ch__$1,meta20871));
});

}

return (new cljs.core.async.t_cljs$core$async20870(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async20879 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20879 = (function (map_GT_,f,ch,meta20880){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta20880 = meta20880;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20879.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20881,meta20880__$1){
var self__ = this;
var _20881__$1 = this;
return (new cljs.core.async.t_cljs$core$async20879(self__.map_GT_,self__.f,self__.ch,meta20880__$1));
});

cljs.core.async.t_cljs$core$async20879.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20881){
var self__ = this;
var _20881__$1 = this;
return self__.meta20880;
});

cljs.core.async.t_cljs$core$async20879.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async20879.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20879.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async20879.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async20879.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async20879.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async20879.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20880","meta20880",878620553,null)], null);
});

cljs.core.async.t_cljs$core$async20879.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20879.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20879";

cljs.core.async.t_cljs$core$async20879.cljs$lang$ctorPrWriter = (function (this__6857__auto__,writer__6858__auto__,opt__6859__auto__){
return cljs.core._write.call(null,writer__6858__auto__,"cljs.core.async/t_cljs$core$async20879");
});

cljs.core.async.__GT_t_cljs$core$async20879 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async20879(map_GT___$1,f__$1,ch__$1,meta20880){
return (new cljs.core.async.t_cljs$core$async20879(map_GT___$1,f__$1,ch__$1,meta20880));
});

}

return (new cljs.core.async.t_cljs$core$async20879(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async20885 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20885 = (function (filter_GT_,p,ch,meta20886){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta20886 = meta20886;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20885.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20887,meta20886__$1){
var self__ = this;
var _20887__$1 = this;
return (new cljs.core.async.t_cljs$core$async20885(self__.filter_GT_,self__.p,self__.ch,meta20886__$1));
});

cljs.core.async.t_cljs$core$async20885.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20887){
var self__ = this;
var _20887__$1 = this;
return self__.meta20886;
});

cljs.core.async.t_cljs$core$async20885.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async20885.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20885.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20885.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async20885.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async20885.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async20885.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async20885.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20886","meta20886",998622898,null)], null);
});

cljs.core.async.t_cljs$core$async20885.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20885.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20885";

cljs.core.async.t_cljs$core$async20885.cljs$lang$ctorPrWriter = (function (this__6857__auto__,writer__6858__auto__,opt__6859__auto__){
return cljs.core._write.call(null,writer__6858__auto__,"cljs.core.async/t_cljs$core$async20885");
});

cljs.core.async.__GT_t_cljs$core$async20885 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async20885(filter_GT___$1,p__$1,ch__$1,meta20886){
return (new cljs.core.async.t_cljs$core$async20885(filter_GT___$1,p__$1,ch__$1,meta20886));
});

}

return (new cljs.core.async.t_cljs$core$async20885(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args20888 = [];
var len__7326__auto___20932 = arguments.length;
var i__7327__auto___20933 = (0);
while(true){
if((i__7327__auto___20933 < len__7326__auto___20932)){
args20888.push((arguments[i__7327__auto___20933]));

var G__20934 = (i__7327__auto___20933 + (1));
i__7327__auto___20933 = G__20934;
continue;
} else {
}
break;
}

var G__20890 = args20888.length;
switch (G__20890) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20888.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18664__auto___20936 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18664__auto___20936,out){
return (function (){
var f__18665__auto__ = (function (){var switch__18552__auto__ = ((function (c__18664__auto___20936,out){
return (function (state_20911){
var state_val_20912 = (state_20911[(1)]);
if((state_val_20912 === (7))){
var inst_20907 = (state_20911[(2)]);
var state_20911__$1 = state_20911;
var statearr_20913_20937 = state_20911__$1;
(statearr_20913_20937[(2)] = inst_20907);

(statearr_20913_20937[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20912 === (1))){
var state_20911__$1 = state_20911;
var statearr_20914_20938 = state_20911__$1;
(statearr_20914_20938[(2)] = null);

(statearr_20914_20938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20912 === (4))){
var inst_20893 = (state_20911[(7)]);
var inst_20893__$1 = (state_20911[(2)]);
var inst_20894 = (inst_20893__$1 == null);
var state_20911__$1 = (function (){var statearr_20915 = state_20911;
(statearr_20915[(7)] = inst_20893__$1);

return statearr_20915;
})();
if(cljs.core.truth_(inst_20894)){
var statearr_20916_20939 = state_20911__$1;
(statearr_20916_20939[(1)] = (5));

} else {
var statearr_20917_20940 = state_20911__$1;
(statearr_20917_20940[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20912 === (6))){
var inst_20893 = (state_20911[(7)]);
var inst_20898 = p.call(null,inst_20893);
var state_20911__$1 = state_20911;
if(cljs.core.truth_(inst_20898)){
var statearr_20918_20941 = state_20911__$1;
(statearr_20918_20941[(1)] = (8));

} else {
var statearr_20919_20942 = state_20911__$1;
(statearr_20919_20942[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20912 === (3))){
var inst_20909 = (state_20911[(2)]);
var state_20911__$1 = state_20911;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20911__$1,inst_20909);
} else {
if((state_val_20912 === (2))){
var state_20911__$1 = state_20911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20911__$1,(4),ch);
} else {
if((state_val_20912 === (11))){
var inst_20901 = (state_20911[(2)]);
var state_20911__$1 = state_20911;
var statearr_20920_20943 = state_20911__$1;
(statearr_20920_20943[(2)] = inst_20901);

(statearr_20920_20943[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20912 === (9))){
var state_20911__$1 = state_20911;
var statearr_20921_20944 = state_20911__$1;
(statearr_20921_20944[(2)] = null);

(statearr_20921_20944[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20912 === (5))){
var inst_20896 = cljs.core.async.close_BANG_.call(null,out);
var state_20911__$1 = state_20911;
var statearr_20922_20945 = state_20911__$1;
(statearr_20922_20945[(2)] = inst_20896);

(statearr_20922_20945[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20912 === (10))){
var inst_20904 = (state_20911[(2)]);
var state_20911__$1 = (function (){var statearr_20923 = state_20911;
(statearr_20923[(8)] = inst_20904);

return statearr_20923;
})();
var statearr_20924_20946 = state_20911__$1;
(statearr_20924_20946[(2)] = null);

(statearr_20924_20946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20912 === (8))){
var inst_20893 = (state_20911[(7)]);
var state_20911__$1 = state_20911;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20911__$1,(11),out,inst_20893);
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
});})(c__18664__auto___20936,out))
;
return ((function (switch__18552__auto__,c__18664__auto___20936,out){
return (function() {
var cljs$core$async$state_machine__18553__auto__ = null;
var cljs$core$async$state_machine__18553__auto____0 = (function (){
var statearr_20928 = [null,null,null,null,null,null,null,null,null];
(statearr_20928[(0)] = cljs$core$async$state_machine__18553__auto__);

(statearr_20928[(1)] = (1));

return statearr_20928;
});
var cljs$core$async$state_machine__18553__auto____1 = (function (state_20911){
while(true){
var ret_value__18554__auto__ = (function (){try{while(true){
var result__18555__auto__ = switch__18552__auto__.call(null,state_20911);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18555__auto__;
}
break;
}
}catch (e20929){if((e20929 instanceof Object)){
var ex__18556__auto__ = e20929;
var statearr_20930_20947 = state_20911;
(statearr_20930_20947[(5)] = ex__18556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20911);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20929;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20948 = state_20911;
state_20911 = G__20948;
continue;
} else {
return ret_value__18554__auto__;
}
break;
}
});
cljs$core$async$state_machine__18553__auto__ = function(state_20911){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18553__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18553__auto____1.call(this,state_20911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18553__auto____0;
cljs$core$async$state_machine__18553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18553__auto____1;
return cljs$core$async$state_machine__18553__auto__;
})()
;})(switch__18552__auto__,c__18664__auto___20936,out))
})();
var state__18666__auto__ = (function (){var statearr_20931 = f__18665__auto__.call(null);
(statearr_20931[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18664__auto___20936);

return statearr_20931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18666__auto__);
});})(c__18664__auto___20936,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args20949 = [];
var len__7326__auto___20952 = arguments.length;
var i__7327__auto___20953 = (0);
while(true){
if((i__7327__auto___20953 < len__7326__auto___20952)){
args20949.push((arguments[i__7327__auto___20953]));

var G__20954 = (i__7327__auto___20953 + (1));
i__7327__auto___20953 = G__20954;
continue;
} else {
}
break;
}

var G__20951 = args20949.length;
switch (G__20951) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20949.length)].join('')));

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
var c__18664__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18664__auto__){
return (function (){
var f__18665__auto__ = (function (){var switch__18552__auto__ = ((function (c__18664__auto__){
return (function (state_21121){
var state_val_21122 = (state_21121[(1)]);
if((state_val_21122 === (7))){
var inst_21117 = (state_21121[(2)]);
var state_21121__$1 = state_21121;
var statearr_21123_21164 = state_21121__$1;
(statearr_21123_21164[(2)] = inst_21117);

(statearr_21123_21164[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21122 === (20))){
var inst_21087 = (state_21121[(7)]);
var inst_21098 = (state_21121[(2)]);
var inst_21099 = cljs.core.next.call(null,inst_21087);
var inst_21073 = inst_21099;
var inst_21074 = null;
var inst_21075 = (0);
var inst_21076 = (0);
var state_21121__$1 = (function (){var statearr_21124 = state_21121;
(statearr_21124[(8)] = inst_21073);

(statearr_21124[(9)] = inst_21076);

(statearr_21124[(10)] = inst_21074);

(statearr_21124[(11)] = inst_21098);

(statearr_21124[(12)] = inst_21075);

return statearr_21124;
})();
var statearr_21125_21165 = state_21121__$1;
(statearr_21125_21165[(2)] = null);

(statearr_21125_21165[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21122 === (1))){
var state_21121__$1 = state_21121;
var statearr_21126_21166 = state_21121__$1;
(statearr_21126_21166[(2)] = null);

(statearr_21126_21166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21122 === (4))){
var inst_21062 = (state_21121[(13)]);
var inst_21062__$1 = (state_21121[(2)]);
var inst_21063 = (inst_21062__$1 == null);
var state_21121__$1 = (function (){var statearr_21127 = state_21121;
(statearr_21127[(13)] = inst_21062__$1);

return statearr_21127;
})();
if(cljs.core.truth_(inst_21063)){
var statearr_21128_21167 = state_21121__$1;
(statearr_21128_21167[(1)] = (5));

} else {
var statearr_21129_21168 = state_21121__$1;
(statearr_21129_21168[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21122 === (15))){
var state_21121__$1 = state_21121;
var statearr_21133_21169 = state_21121__$1;
(statearr_21133_21169[(2)] = null);

(statearr_21133_21169[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21122 === (21))){
var state_21121__$1 = state_21121;
var statearr_21134_21170 = state_21121__$1;
(statearr_21134_21170[(2)] = null);

(statearr_21134_21170[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21122 === (13))){
var inst_21073 = (state_21121[(8)]);
var inst_21076 = (state_21121[(9)]);
var inst_21074 = (state_21121[(10)]);
var inst_21075 = (state_21121[(12)]);
var inst_21083 = (state_21121[(2)]);
var inst_21084 = (inst_21076 + (1));
var tmp21130 = inst_21073;
var tmp21131 = inst_21074;
var tmp21132 = inst_21075;
var inst_21073__$1 = tmp21130;
var inst_21074__$1 = tmp21131;
var inst_21075__$1 = tmp21132;
var inst_21076__$1 = inst_21084;
var state_21121__$1 = (function (){var statearr_21135 = state_21121;
(statearr_21135[(8)] = inst_21073__$1);

(statearr_21135[(9)] = inst_21076__$1);

(statearr_21135[(10)] = inst_21074__$1);

(statearr_21135[(12)] = inst_21075__$1);

(statearr_21135[(14)] = inst_21083);

return statearr_21135;
})();
var statearr_21136_21171 = state_21121__$1;
(statearr_21136_21171[(2)] = null);

(statearr_21136_21171[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21122 === (22))){
var state_21121__$1 = state_21121;
var statearr_21137_21172 = state_21121__$1;
(statearr_21137_21172[(2)] = null);

(statearr_21137_21172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21122 === (6))){
var inst_21062 = (state_21121[(13)]);
var inst_21071 = f.call(null,inst_21062);
var inst_21072 = cljs.core.seq.call(null,inst_21071);
var inst_21073 = inst_21072;
var inst_21074 = null;
var inst_21075 = (0);
var inst_21076 = (0);
var state_21121__$1 = (function (){var statearr_21138 = state_21121;
(statearr_21138[(8)] = inst_21073);

(statearr_21138[(9)] = inst_21076);

(statearr_21138[(10)] = inst_21074);

(statearr_21138[(12)] = inst_21075);

return statearr_21138;
})();
var statearr_21139_21173 = state_21121__$1;
(statearr_21139_21173[(2)] = null);

(statearr_21139_21173[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21122 === (17))){
var inst_21087 = (state_21121[(7)]);
var inst_21091 = cljs.core.chunk_first.call(null,inst_21087);
var inst_21092 = cljs.core.chunk_rest.call(null,inst_21087);
var inst_21093 = cljs.core.count.call(null,inst_21091);
var inst_21073 = inst_21092;
var inst_21074 = inst_21091;
var inst_21075 = inst_21093;
var inst_21076 = (0);
var state_21121__$1 = (function (){var statearr_21140 = state_21121;
(statearr_21140[(8)] = inst_21073);

(statearr_21140[(9)] = inst_21076);

(statearr_21140[(10)] = inst_21074);

(statearr_21140[(12)] = inst_21075);

return statearr_21140;
})();
var statearr_21141_21174 = state_21121__$1;
(statearr_21141_21174[(2)] = null);

(statearr_21141_21174[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21122 === (3))){
var inst_21119 = (state_21121[(2)]);
var state_21121__$1 = state_21121;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21121__$1,inst_21119);
} else {
if((state_val_21122 === (12))){
var inst_21107 = (state_21121[(2)]);
var state_21121__$1 = state_21121;
var statearr_21142_21175 = state_21121__$1;
(statearr_21142_21175[(2)] = inst_21107);

(statearr_21142_21175[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21122 === (2))){
var state_21121__$1 = state_21121;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21121__$1,(4),in$);
} else {
if((state_val_21122 === (23))){
var inst_21115 = (state_21121[(2)]);
var state_21121__$1 = state_21121;
var statearr_21143_21176 = state_21121__$1;
(statearr_21143_21176[(2)] = inst_21115);

(statearr_21143_21176[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21122 === (19))){
var inst_21102 = (state_21121[(2)]);
var state_21121__$1 = state_21121;
var statearr_21144_21177 = state_21121__$1;
(statearr_21144_21177[(2)] = inst_21102);

(statearr_21144_21177[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21122 === (11))){
var inst_21073 = (state_21121[(8)]);
var inst_21087 = (state_21121[(7)]);
var inst_21087__$1 = cljs.core.seq.call(null,inst_21073);
var state_21121__$1 = (function (){var statearr_21145 = state_21121;
(statearr_21145[(7)] = inst_21087__$1);

return statearr_21145;
})();
if(inst_21087__$1){
var statearr_21146_21178 = state_21121__$1;
(statearr_21146_21178[(1)] = (14));

} else {
var statearr_21147_21179 = state_21121__$1;
(statearr_21147_21179[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21122 === (9))){
var inst_21109 = (state_21121[(2)]);
var inst_21110 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_21121__$1 = (function (){var statearr_21148 = state_21121;
(statearr_21148[(15)] = inst_21109);

return statearr_21148;
})();
if(cljs.core.truth_(inst_21110)){
var statearr_21149_21180 = state_21121__$1;
(statearr_21149_21180[(1)] = (21));

} else {
var statearr_21150_21181 = state_21121__$1;
(statearr_21150_21181[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21122 === (5))){
var inst_21065 = cljs.core.async.close_BANG_.call(null,out);
var state_21121__$1 = state_21121;
var statearr_21151_21182 = state_21121__$1;
(statearr_21151_21182[(2)] = inst_21065);

(statearr_21151_21182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21122 === (14))){
var inst_21087 = (state_21121[(7)]);
var inst_21089 = cljs.core.chunked_seq_QMARK_.call(null,inst_21087);
var state_21121__$1 = state_21121;
if(inst_21089){
var statearr_21152_21183 = state_21121__$1;
(statearr_21152_21183[(1)] = (17));

} else {
var statearr_21153_21184 = state_21121__$1;
(statearr_21153_21184[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21122 === (16))){
var inst_21105 = (state_21121[(2)]);
var state_21121__$1 = state_21121;
var statearr_21154_21185 = state_21121__$1;
(statearr_21154_21185[(2)] = inst_21105);

(statearr_21154_21185[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21122 === (10))){
var inst_21076 = (state_21121[(9)]);
var inst_21074 = (state_21121[(10)]);
var inst_21081 = cljs.core._nth.call(null,inst_21074,inst_21076);
var state_21121__$1 = state_21121;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21121__$1,(13),out,inst_21081);
} else {
if((state_val_21122 === (18))){
var inst_21087 = (state_21121[(7)]);
var inst_21096 = cljs.core.first.call(null,inst_21087);
var state_21121__$1 = state_21121;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21121__$1,(20),out,inst_21096);
} else {
if((state_val_21122 === (8))){
var inst_21076 = (state_21121[(9)]);
var inst_21075 = (state_21121[(12)]);
var inst_21078 = (inst_21076 < inst_21075);
var inst_21079 = inst_21078;
var state_21121__$1 = state_21121;
if(cljs.core.truth_(inst_21079)){
var statearr_21155_21186 = state_21121__$1;
(statearr_21155_21186[(1)] = (10));

} else {
var statearr_21156_21187 = state_21121__$1;
(statearr_21156_21187[(1)] = (11));

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
});})(c__18664__auto__))
;
return ((function (switch__18552__auto__,c__18664__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__18553__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__18553__auto____0 = (function (){
var statearr_21160 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21160[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__18553__auto__);

(statearr_21160[(1)] = (1));

return statearr_21160;
});
var cljs$core$async$mapcat_STAR__$_state_machine__18553__auto____1 = (function (state_21121){
while(true){
var ret_value__18554__auto__ = (function (){try{while(true){
var result__18555__auto__ = switch__18552__auto__.call(null,state_21121);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18555__auto__;
}
break;
}
}catch (e21161){if((e21161 instanceof Object)){
var ex__18556__auto__ = e21161;
var statearr_21162_21188 = state_21121;
(statearr_21162_21188[(5)] = ex__18556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21121);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21161;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21189 = state_21121;
state_21121 = G__21189;
continue;
} else {
return ret_value__18554__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__18553__auto__ = function(state_21121){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__18553__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__18553__auto____1.call(this,state_21121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__18553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__18553__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__18553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__18553__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__18553__auto__;
})()
;})(switch__18552__auto__,c__18664__auto__))
})();
var state__18666__auto__ = (function (){var statearr_21163 = f__18665__auto__.call(null);
(statearr_21163[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18664__auto__);

return statearr_21163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18666__auto__);
});})(c__18664__auto__))
);

return c__18664__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args21190 = [];
var len__7326__auto___21193 = arguments.length;
var i__7327__auto___21194 = (0);
while(true){
if((i__7327__auto___21194 < len__7326__auto___21193)){
args21190.push((arguments[i__7327__auto___21194]));

var G__21195 = (i__7327__auto___21194 + (1));
i__7327__auto___21194 = G__21195;
continue;
} else {
}
break;
}

var G__21192 = args21190.length;
switch (G__21192) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21190.length)].join('')));

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
var args21197 = [];
var len__7326__auto___21200 = arguments.length;
var i__7327__auto___21201 = (0);
while(true){
if((i__7327__auto___21201 < len__7326__auto___21200)){
args21197.push((arguments[i__7327__auto___21201]));

var G__21202 = (i__7327__auto___21201 + (1));
i__7327__auto___21201 = G__21202;
continue;
} else {
}
break;
}

var G__21199 = args21197.length;
switch (G__21199) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21197.length)].join('')));

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
var args21204 = [];
var len__7326__auto___21255 = arguments.length;
var i__7327__auto___21256 = (0);
while(true){
if((i__7327__auto___21256 < len__7326__auto___21255)){
args21204.push((arguments[i__7327__auto___21256]));

var G__21257 = (i__7327__auto___21256 + (1));
i__7327__auto___21256 = G__21257;
continue;
} else {
}
break;
}

var G__21206 = args21204.length;
switch (G__21206) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21204.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18664__auto___21259 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18664__auto___21259,out){
return (function (){
var f__18665__auto__ = (function (){var switch__18552__auto__ = ((function (c__18664__auto___21259,out){
return (function (state_21230){
var state_val_21231 = (state_21230[(1)]);
if((state_val_21231 === (7))){
var inst_21225 = (state_21230[(2)]);
var state_21230__$1 = state_21230;
var statearr_21232_21260 = state_21230__$1;
(statearr_21232_21260[(2)] = inst_21225);

(statearr_21232_21260[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21231 === (1))){
var inst_21207 = null;
var state_21230__$1 = (function (){var statearr_21233 = state_21230;
(statearr_21233[(7)] = inst_21207);

return statearr_21233;
})();
var statearr_21234_21261 = state_21230__$1;
(statearr_21234_21261[(2)] = null);

(statearr_21234_21261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21231 === (4))){
var inst_21210 = (state_21230[(8)]);
var inst_21210__$1 = (state_21230[(2)]);
var inst_21211 = (inst_21210__$1 == null);
var inst_21212 = cljs.core.not.call(null,inst_21211);
var state_21230__$1 = (function (){var statearr_21235 = state_21230;
(statearr_21235[(8)] = inst_21210__$1);

return statearr_21235;
})();
if(inst_21212){
var statearr_21236_21262 = state_21230__$1;
(statearr_21236_21262[(1)] = (5));

} else {
var statearr_21237_21263 = state_21230__$1;
(statearr_21237_21263[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21231 === (6))){
var state_21230__$1 = state_21230;
var statearr_21238_21264 = state_21230__$1;
(statearr_21238_21264[(2)] = null);

(statearr_21238_21264[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21231 === (3))){
var inst_21227 = (state_21230[(2)]);
var inst_21228 = cljs.core.async.close_BANG_.call(null,out);
var state_21230__$1 = (function (){var statearr_21239 = state_21230;
(statearr_21239[(9)] = inst_21227);

return statearr_21239;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21230__$1,inst_21228);
} else {
if((state_val_21231 === (2))){
var state_21230__$1 = state_21230;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21230__$1,(4),ch);
} else {
if((state_val_21231 === (11))){
var inst_21210 = (state_21230[(8)]);
var inst_21219 = (state_21230[(2)]);
var inst_21207 = inst_21210;
var state_21230__$1 = (function (){var statearr_21240 = state_21230;
(statearr_21240[(7)] = inst_21207);

(statearr_21240[(10)] = inst_21219);

return statearr_21240;
})();
var statearr_21241_21265 = state_21230__$1;
(statearr_21241_21265[(2)] = null);

(statearr_21241_21265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21231 === (9))){
var inst_21210 = (state_21230[(8)]);
var state_21230__$1 = state_21230;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21230__$1,(11),out,inst_21210);
} else {
if((state_val_21231 === (5))){
var inst_21207 = (state_21230[(7)]);
var inst_21210 = (state_21230[(8)]);
var inst_21214 = cljs.core._EQ_.call(null,inst_21210,inst_21207);
var state_21230__$1 = state_21230;
if(inst_21214){
var statearr_21243_21266 = state_21230__$1;
(statearr_21243_21266[(1)] = (8));

} else {
var statearr_21244_21267 = state_21230__$1;
(statearr_21244_21267[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21231 === (10))){
var inst_21222 = (state_21230[(2)]);
var state_21230__$1 = state_21230;
var statearr_21245_21268 = state_21230__$1;
(statearr_21245_21268[(2)] = inst_21222);

(statearr_21245_21268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21231 === (8))){
var inst_21207 = (state_21230[(7)]);
var tmp21242 = inst_21207;
var inst_21207__$1 = tmp21242;
var state_21230__$1 = (function (){var statearr_21246 = state_21230;
(statearr_21246[(7)] = inst_21207__$1);

return statearr_21246;
})();
var statearr_21247_21269 = state_21230__$1;
(statearr_21247_21269[(2)] = null);

(statearr_21247_21269[(1)] = (2));


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
});})(c__18664__auto___21259,out))
;
return ((function (switch__18552__auto__,c__18664__auto___21259,out){
return (function() {
var cljs$core$async$state_machine__18553__auto__ = null;
var cljs$core$async$state_machine__18553__auto____0 = (function (){
var statearr_21251 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21251[(0)] = cljs$core$async$state_machine__18553__auto__);

(statearr_21251[(1)] = (1));

return statearr_21251;
});
var cljs$core$async$state_machine__18553__auto____1 = (function (state_21230){
while(true){
var ret_value__18554__auto__ = (function (){try{while(true){
var result__18555__auto__ = switch__18552__auto__.call(null,state_21230);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18555__auto__;
}
break;
}
}catch (e21252){if((e21252 instanceof Object)){
var ex__18556__auto__ = e21252;
var statearr_21253_21270 = state_21230;
(statearr_21253_21270[(5)] = ex__18556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21230);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21252;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21271 = state_21230;
state_21230 = G__21271;
continue;
} else {
return ret_value__18554__auto__;
}
break;
}
});
cljs$core$async$state_machine__18553__auto__ = function(state_21230){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18553__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18553__auto____1.call(this,state_21230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18553__auto____0;
cljs$core$async$state_machine__18553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18553__auto____1;
return cljs$core$async$state_machine__18553__auto__;
})()
;})(switch__18552__auto__,c__18664__auto___21259,out))
})();
var state__18666__auto__ = (function (){var statearr_21254 = f__18665__auto__.call(null);
(statearr_21254[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18664__auto___21259);

return statearr_21254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18666__auto__);
});})(c__18664__auto___21259,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args21272 = [];
var len__7326__auto___21342 = arguments.length;
var i__7327__auto___21343 = (0);
while(true){
if((i__7327__auto___21343 < len__7326__auto___21342)){
args21272.push((arguments[i__7327__auto___21343]));

var G__21344 = (i__7327__auto___21343 + (1));
i__7327__auto___21343 = G__21344;
continue;
} else {
}
break;
}

var G__21274 = args21272.length;
switch (G__21274) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21272.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18664__auto___21346 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18664__auto___21346,out){
return (function (){
var f__18665__auto__ = (function (){var switch__18552__auto__ = ((function (c__18664__auto___21346,out){
return (function (state_21312){
var state_val_21313 = (state_21312[(1)]);
if((state_val_21313 === (7))){
var inst_21308 = (state_21312[(2)]);
var state_21312__$1 = state_21312;
var statearr_21314_21347 = state_21312__$1;
(statearr_21314_21347[(2)] = inst_21308);

(statearr_21314_21347[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21313 === (1))){
var inst_21275 = (new Array(n));
var inst_21276 = inst_21275;
var inst_21277 = (0);
var state_21312__$1 = (function (){var statearr_21315 = state_21312;
(statearr_21315[(7)] = inst_21276);

(statearr_21315[(8)] = inst_21277);

return statearr_21315;
})();
var statearr_21316_21348 = state_21312__$1;
(statearr_21316_21348[(2)] = null);

(statearr_21316_21348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21313 === (4))){
var inst_21280 = (state_21312[(9)]);
var inst_21280__$1 = (state_21312[(2)]);
var inst_21281 = (inst_21280__$1 == null);
var inst_21282 = cljs.core.not.call(null,inst_21281);
var state_21312__$1 = (function (){var statearr_21317 = state_21312;
(statearr_21317[(9)] = inst_21280__$1);

return statearr_21317;
})();
if(inst_21282){
var statearr_21318_21349 = state_21312__$1;
(statearr_21318_21349[(1)] = (5));

} else {
var statearr_21319_21350 = state_21312__$1;
(statearr_21319_21350[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21313 === (15))){
var inst_21302 = (state_21312[(2)]);
var state_21312__$1 = state_21312;
var statearr_21320_21351 = state_21312__$1;
(statearr_21320_21351[(2)] = inst_21302);

(statearr_21320_21351[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21313 === (13))){
var state_21312__$1 = state_21312;
var statearr_21321_21352 = state_21312__$1;
(statearr_21321_21352[(2)] = null);

(statearr_21321_21352[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21313 === (6))){
var inst_21277 = (state_21312[(8)]);
var inst_21298 = (inst_21277 > (0));
var state_21312__$1 = state_21312;
if(cljs.core.truth_(inst_21298)){
var statearr_21322_21353 = state_21312__$1;
(statearr_21322_21353[(1)] = (12));

} else {
var statearr_21323_21354 = state_21312__$1;
(statearr_21323_21354[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21313 === (3))){
var inst_21310 = (state_21312[(2)]);
var state_21312__$1 = state_21312;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21312__$1,inst_21310);
} else {
if((state_val_21313 === (12))){
var inst_21276 = (state_21312[(7)]);
var inst_21300 = cljs.core.vec.call(null,inst_21276);
var state_21312__$1 = state_21312;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21312__$1,(15),out,inst_21300);
} else {
if((state_val_21313 === (2))){
var state_21312__$1 = state_21312;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21312__$1,(4),ch);
} else {
if((state_val_21313 === (11))){
var inst_21292 = (state_21312[(2)]);
var inst_21293 = (new Array(n));
var inst_21276 = inst_21293;
var inst_21277 = (0);
var state_21312__$1 = (function (){var statearr_21324 = state_21312;
(statearr_21324[(7)] = inst_21276);

(statearr_21324[(8)] = inst_21277);

(statearr_21324[(10)] = inst_21292);

return statearr_21324;
})();
var statearr_21325_21355 = state_21312__$1;
(statearr_21325_21355[(2)] = null);

(statearr_21325_21355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21313 === (9))){
var inst_21276 = (state_21312[(7)]);
var inst_21290 = cljs.core.vec.call(null,inst_21276);
var state_21312__$1 = state_21312;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21312__$1,(11),out,inst_21290);
} else {
if((state_val_21313 === (5))){
var inst_21276 = (state_21312[(7)]);
var inst_21277 = (state_21312[(8)]);
var inst_21285 = (state_21312[(11)]);
var inst_21280 = (state_21312[(9)]);
var inst_21284 = (inst_21276[inst_21277] = inst_21280);
var inst_21285__$1 = (inst_21277 + (1));
var inst_21286 = (inst_21285__$1 < n);
var state_21312__$1 = (function (){var statearr_21326 = state_21312;
(statearr_21326[(12)] = inst_21284);

(statearr_21326[(11)] = inst_21285__$1);

return statearr_21326;
})();
if(cljs.core.truth_(inst_21286)){
var statearr_21327_21356 = state_21312__$1;
(statearr_21327_21356[(1)] = (8));

} else {
var statearr_21328_21357 = state_21312__$1;
(statearr_21328_21357[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21313 === (14))){
var inst_21305 = (state_21312[(2)]);
var inst_21306 = cljs.core.async.close_BANG_.call(null,out);
var state_21312__$1 = (function (){var statearr_21330 = state_21312;
(statearr_21330[(13)] = inst_21305);

return statearr_21330;
})();
var statearr_21331_21358 = state_21312__$1;
(statearr_21331_21358[(2)] = inst_21306);

(statearr_21331_21358[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21313 === (10))){
var inst_21296 = (state_21312[(2)]);
var state_21312__$1 = state_21312;
var statearr_21332_21359 = state_21312__$1;
(statearr_21332_21359[(2)] = inst_21296);

(statearr_21332_21359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21313 === (8))){
var inst_21276 = (state_21312[(7)]);
var inst_21285 = (state_21312[(11)]);
var tmp21329 = inst_21276;
var inst_21276__$1 = tmp21329;
var inst_21277 = inst_21285;
var state_21312__$1 = (function (){var statearr_21333 = state_21312;
(statearr_21333[(7)] = inst_21276__$1);

(statearr_21333[(8)] = inst_21277);

return statearr_21333;
})();
var statearr_21334_21360 = state_21312__$1;
(statearr_21334_21360[(2)] = null);

(statearr_21334_21360[(1)] = (2));


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
});})(c__18664__auto___21346,out))
;
return ((function (switch__18552__auto__,c__18664__auto___21346,out){
return (function() {
var cljs$core$async$state_machine__18553__auto__ = null;
var cljs$core$async$state_machine__18553__auto____0 = (function (){
var statearr_21338 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21338[(0)] = cljs$core$async$state_machine__18553__auto__);

(statearr_21338[(1)] = (1));

return statearr_21338;
});
var cljs$core$async$state_machine__18553__auto____1 = (function (state_21312){
while(true){
var ret_value__18554__auto__ = (function (){try{while(true){
var result__18555__auto__ = switch__18552__auto__.call(null,state_21312);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18555__auto__;
}
break;
}
}catch (e21339){if((e21339 instanceof Object)){
var ex__18556__auto__ = e21339;
var statearr_21340_21361 = state_21312;
(statearr_21340_21361[(5)] = ex__18556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21312);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21339;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21362 = state_21312;
state_21312 = G__21362;
continue;
} else {
return ret_value__18554__auto__;
}
break;
}
});
cljs$core$async$state_machine__18553__auto__ = function(state_21312){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18553__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18553__auto____1.call(this,state_21312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18553__auto____0;
cljs$core$async$state_machine__18553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18553__auto____1;
return cljs$core$async$state_machine__18553__auto__;
})()
;})(switch__18552__auto__,c__18664__auto___21346,out))
})();
var state__18666__auto__ = (function (){var statearr_21341 = f__18665__auto__.call(null);
(statearr_21341[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18664__auto___21346);

return statearr_21341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18666__auto__);
});})(c__18664__auto___21346,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args21363 = [];
var len__7326__auto___21437 = arguments.length;
var i__7327__auto___21438 = (0);
while(true){
if((i__7327__auto___21438 < len__7326__auto___21437)){
args21363.push((arguments[i__7327__auto___21438]));

var G__21439 = (i__7327__auto___21438 + (1));
i__7327__auto___21438 = G__21439;
continue;
} else {
}
break;
}

var G__21365 = args21363.length;
switch (G__21365) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21363.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18664__auto___21441 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18664__auto___21441,out){
return (function (){
var f__18665__auto__ = (function (){var switch__18552__auto__ = ((function (c__18664__auto___21441,out){
return (function (state_21407){
var state_val_21408 = (state_21407[(1)]);
if((state_val_21408 === (7))){
var inst_21403 = (state_21407[(2)]);
var state_21407__$1 = state_21407;
var statearr_21409_21442 = state_21407__$1;
(statearr_21409_21442[(2)] = inst_21403);

(statearr_21409_21442[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21408 === (1))){
var inst_21366 = [];
var inst_21367 = inst_21366;
var inst_21368 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_21407__$1 = (function (){var statearr_21410 = state_21407;
(statearr_21410[(7)] = inst_21368);

(statearr_21410[(8)] = inst_21367);

return statearr_21410;
})();
var statearr_21411_21443 = state_21407__$1;
(statearr_21411_21443[(2)] = null);

(statearr_21411_21443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21408 === (4))){
var inst_21371 = (state_21407[(9)]);
var inst_21371__$1 = (state_21407[(2)]);
var inst_21372 = (inst_21371__$1 == null);
var inst_21373 = cljs.core.not.call(null,inst_21372);
var state_21407__$1 = (function (){var statearr_21412 = state_21407;
(statearr_21412[(9)] = inst_21371__$1);

return statearr_21412;
})();
if(inst_21373){
var statearr_21413_21444 = state_21407__$1;
(statearr_21413_21444[(1)] = (5));

} else {
var statearr_21414_21445 = state_21407__$1;
(statearr_21414_21445[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21408 === (15))){
var inst_21397 = (state_21407[(2)]);
var state_21407__$1 = state_21407;
var statearr_21415_21446 = state_21407__$1;
(statearr_21415_21446[(2)] = inst_21397);

(statearr_21415_21446[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21408 === (13))){
var state_21407__$1 = state_21407;
var statearr_21416_21447 = state_21407__$1;
(statearr_21416_21447[(2)] = null);

(statearr_21416_21447[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21408 === (6))){
var inst_21367 = (state_21407[(8)]);
var inst_21392 = inst_21367.length;
var inst_21393 = (inst_21392 > (0));
var state_21407__$1 = state_21407;
if(cljs.core.truth_(inst_21393)){
var statearr_21417_21448 = state_21407__$1;
(statearr_21417_21448[(1)] = (12));

} else {
var statearr_21418_21449 = state_21407__$1;
(statearr_21418_21449[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21408 === (3))){
var inst_21405 = (state_21407[(2)]);
var state_21407__$1 = state_21407;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21407__$1,inst_21405);
} else {
if((state_val_21408 === (12))){
var inst_21367 = (state_21407[(8)]);
var inst_21395 = cljs.core.vec.call(null,inst_21367);
var state_21407__$1 = state_21407;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21407__$1,(15),out,inst_21395);
} else {
if((state_val_21408 === (2))){
var state_21407__$1 = state_21407;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21407__$1,(4),ch);
} else {
if((state_val_21408 === (11))){
var inst_21371 = (state_21407[(9)]);
var inst_21375 = (state_21407[(10)]);
var inst_21385 = (state_21407[(2)]);
var inst_21386 = [];
var inst_21387 = inst_21386.push(inst_21371);
var inst_21367 = inst_21386;
var inst_21368 = inst_21375;
var state_21407__$1 = (function (){var statearr_21419 = state_21407;
(statearr_21419[(11)] = inst_21385);

(statearr_21419[(7)] = inst_21368);

(statearr_21419[(8)] = inst_21367);

(statearr_21419[(12)] = inst_21387);

return statearr_21419;
})();
var statearr_21420_21450 = state_21407__$1;
(statearr_21420_21450[(2)] = null);

(statearr_21420_21450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21408 === (9))){
var inst_21367 = (state_21407[(8)]);
var inst_21383 = cljs.core.vec.call(null,inst_21367);
var state_21407__$1 = state_21407;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21407__$1,(11),out,inst_21383);
} else {
if((state_val_21408 === (5))){
var inst_21371 = (state_21407[(9)]);
var inst_21368 = (state_21407[(7)]);
var inst_21375 = (state_21407[(10)]);
var inst_21375__$1 = f.call(null,inst_21371);
var inst_21376 = cljs.core._EQ_.call(null,inst_21375__$1,inst_21368);
var inst_21377 = cljs.core.keyword_identical_QMARK_.call(null,inst_21368,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_21378 = (inst_21376) || (inst_21377);
var state_21407__$1 = (function (){var statearr_21421 = state_21407;
(statearr_21421[(10)] = inst_21375__$1);

return statearr_21421;
})();
if(cljs.core.truth_(inst_21378)){
var statearr_21422_21451 = state_21407__$1;
(statearr_21422_21451[(1)] = (8));

} else {
var statearr_21423_21452 = state_21407__$1;
(statearr_21423_21452[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21408 === (14))){
var inst_21400 = (state_21407[(2)]);
var inst_21401 = cljs.core.async.close_BANG_.call(null,out);
var state_21407__$1 = (function (){var statearr_21425 = state_21407;
(statearr_21425[(13)] = inst_21400);

return statearr_21425;
})();
var statearr_21426_21453 = state_21407__$1;
(statearr_21426_21453[(2)] = inst_21401);

(statearr_21426_21453[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21408 === (10))){
var inst_21390 = (state_21407[(2)]);
var state_21407__$1 = state_21407;
var statearr_21427_21454 = state_21407__$1;
(statearr_21427_21454[(2)] = inst_21390);

(statearr_21427_21454[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21408 === (8))){
var inst_21371 = (state_21407[(9)]);
var inst_21375 = (state_21407[(10)]);
var inst_21367 = (state_21407[(8)]);
var inst_21380 = inst_21367.push(inst_21371);
var tmp21424 = inst_21367;
var inst_21367__$1 = tmp21424;
var inst_21368 = inst_21375;
var state_21407__$1 = (function (){var statearr_21428 = state_21407;
(statearr_21428[(14)] = inst_21380);

(statearr_21428[(7)] = inst_21368);

(statearr_21428[(8)] = inst_21367__$1);

return statearr_21428;
})();
var statearr_21429_21455 = state_21407__$1;
(statearr_21429_21455[(2)] = null);

(statearr_21429_21455[(1)] = (2));


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
});})(c__18664__auto___21441,out))
;
return ((function (switch__18552__auto__,c__18664__auto___21441,out){
return (function() {
var cljs$core$async$state_machine__18553__auto__ = null;
var cljs$core$async$state_machine__18553__auto____0 = (function (){
var statearr_21433 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21433[(0)] = cljs$core$async$state_machine__18553__auto__);

(statearr_21433[(1)] = (1));

return statearr_21433;
});
var cljs$core$async$state_machine__18553__auto____1 = (function (state_21407){
while(true){
var ret_value__18554__auto__ = (function (){try{while(true){
var result__18555__auto__ = switch__18552__auto__.call(null,state_21407);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18555__auto__;
}
break;
}
}catch (e21434){if((e21434 instanceof Object)){
var ex__18556__auto__ = e21434;
var statearr_21435_21456 = state_21407;
(statearr_21435_21456[(5)] = ex__18556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21407);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21434;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21457 = state_21407;
state_21407 = G__21457;
continue;
} else {
return ret_value__18554__auto__;
}
break;
}
});
cljs$core$async$state_machine__18553__auto__ = function(state_21407){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18553__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18553__auto____1.call(this,state_21407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18553__auto____0;
cljs$core$async$state_machine__18553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18553__auto____1;
return cljs$core$async$state_machine__18553__auto__;
})()
;})(switch__18552__auto__,c__18664__auto___21441,out))
})();
var state__18666__auto__ = (function (){var statearr_21436 = f__18665__auto__.call(null);
(statearr_21436[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18664__auto___21441);

return statearr_21436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18666__auto__);
});})(c__18664__auto___21441,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1486035195876