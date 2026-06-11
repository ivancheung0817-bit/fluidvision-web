goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16203 = (function (f,blockable,meta16204){
this.f = f;
this.blockable = blockable;
this.meta16204 = meta16204;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16203.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16205,meta16204__$1){
var self__ = this;
var _16205__$1 = this;
return (new cljs.core.async.t_cljs$core$async16203(self__.f,self__.blockable,meta16204__$1));
}));

(cljs.core.async.t_cljs$core$async16203.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16205){
var self__ = this;
var _16205__$1 = this;
return self__.meta16204;
}));

(cljs.core.async.t_cljs$core$async16203.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16203.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16203.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async16203.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async16203.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta16204","meta16204",459537759,null)], null);
}));

(cljs.core.async.t_cljs$core$async16203.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16203.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16203");

(cljs.core.async.t_cljs$core$async16203.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async16203");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16203.
 */
cljs.core.async.__GT_t_cljs$core$async16203 = (function cljs$core$async$__GT_t_cljs$core$async16203(f,blockable,meta16204){
return (new cljs.core.async.t_cljs$core$async16203(f,blockable,meta16204));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__16199 = arguments.length;
switch (G__16199) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async16203(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__16255 = arguments.length;
switch (G__16255) {
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
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error((""+"Assert failed: "+"buffer must be supplied when transducer is"+"\n"+"buf-or-n")));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed, then return the value (or nil) forever. See chan for the
 *   semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__16287 = arguments.length;
switch (G__16287) {
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
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var G__16323 = arguments.length;
switch (G__16323) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_19786 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19786) : fn1.call(null,val_19786));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19786) : fn1.call(null,val_19786));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__16381 = arguments.length;
switch (G__16381) {
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
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5823__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5823__auto__)){
var ret = temp__5823__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5823__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5823__auto__)){
var retb = temp__5823__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5762__auto___19798 = n;
var x_19799 = (0);
while(true){
if((x_19799 < n__5762__auto___19798)){
(a[x_19799] = x_19799);

var G__19800 = (x_19799 + (1));
x_19799 = G__19800;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16407 = (function (flag,meta16408){
this.flag = flag;
this.meta16408 = meta16408;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16407.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16409,meta16408__$1){
var self__ = this;
var _16409__$1 = this;
return (new cljs.core.async.t_cljs$core$async16407(self__.flag,meta16408__$1));
}));

(cljs.core.async.t_cljs$core$async16407.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16409){
var self__ = this;
var _16409__$1 = this;
return self__.meta16408;
}));

(cljs.core.async.t_cljs$core$async16407.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16407.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async16407.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16407.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async16407.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta16408","meta16408",-490837800,null)], null);
}));

(cljs.core.async.t_cljs$core$async16407.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16407.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16407");

(cljs.core.async.t_cljs$core$async16407.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async16407");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16407.
 */
cljs.core.async.__GT_t_cljs$core$async16407 = (function cljs$core$async$__GT_t_cljs$core$async16407(flag,meta16408){
return (new cljs.core.async.t_cljs$core$async16407(flag,meta16408));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async16407(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16450 = (function (flag,cb,meta16451){
this.flag = flag;
this.cb = cb;
this.meta16451 = meta16451;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16450.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16452,meta16451__$1){
var self__ = this;
var _16452__$1 = this;
return (new cljs.core.async.t_cljs$core$async16450(self__.flag,self__.cb,meta16451__$1));
}));

(cljs.core.async.t_cljs$core$async16450.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16452){
var self__ = this;
var _16452__$1 = this;
return self__.meta16451;
}));

(cljs.core.async.t_cljs$core$async16450.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16450.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async16450.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16450.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async16450.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta16451","meta16451",1911059044,null)], null);
}));

(cljs.core.async.t_cljs$core$async16450.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16450.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16450");

(cljs.core.async.t_cljs$core$async16450.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async16450");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16450.
 */
cljs.core.async.__GT_t_cljs$core$async16450 = (function cljs$core$async$__GT_t_cljs$core$async16450(flag,cb,meta16451){
return (new cljs.core.async.t_cljs$core$async16450(flag,cb,meta16451));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async16450(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error((""+"Assert failed: "+"alts must have at least one channel operation"+"\n"+"(pos? (count ports))")));
}

var flag = cljs.core.async.alt_flag();
var ports__$1 = cljs.core.vec(ports);
var n = cljs.core.count(ports__$1);
var _ = (function (){var i = (0);
while(true){
if((i < n)){
var port_19807 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_19807)){
if((!(((port_19807.cljs$core$IFn$_invoke$arity$1 ? port_19807.cljs$core$IFn$_invoke$arity$1((1)) : port_19807.call(null,(1))) == null)))){
} else {
throw (new Error((""+"Assert failed: "+"can't put nil on channel"+"\n"+"(some? (port 1))")));
}
} else {
}

var G__19809 = (i + (1));
i = G__19809;
continue;
} else {
return null;
}
break;
}
})();
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__16476_SHARP_){
var G__16500 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16476_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__16500) : fret.call(null,G__16500));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__16477_SHARP_){
var G__16504 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16477_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__16504) : fret.call(null,G__16504));
});})(i,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5162__auto__ = wport;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return port;
}
})()], null));
} else {
var G__19812 = (i + (1));
i = G__19812;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5162__auto__ = ret;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5825__auto__ = (function (){var and__5160__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5160__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5160__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var got = temp__5825__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__5903__auto__ = [];
var len__5897__auto___19815 = arguments.length;
var i__5898__auto___19816 = (0);
while(true){
if((i__5898__auto___19816 < len__5897__auto___19815)){
args__5903__auto__.push((arguments[i__5898__auto___19816]));

var G__19817 = (i__5898__auto___19816 + (1));
i__5898__auto___19816 = G__19817;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__16541){
var map__16543 = p__16541;
var map__16543__$1 = cljs.core.__destructure_map(map__16543);
var opts = map__16543__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq16521){
var G__16523 = cljs.core.first(seq16521);
var seq16521__$1 = cljs.core.next(seq16521);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16523,seq16521__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
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
var G__16580 = arguments.length;
switch (G__16580) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__16107__auto___19839 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16108__auto__ = (function (){var switch__14729__auto__ = (function (state_16666){
var state_val_16672 = (state_16666[(1)]);
if((state_val_16672 === (7))){
var inst_16626 = (state_16666[(2)]);
var state_16666__$1 = state_16666;
var statearr_16709_19841 = state_16666__$1;
(statearr_16709_19841[(2)] = inst_16626);

(statearr_16709_19841[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16672 === (1))){
var state_16666__$1 = state_16666;
var statearr_16718_19842 = state_16666__$1;
(statearr_16718_19842[(2)] = null);

(statearr_16718_19842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16672 === (4))){
var inst_16593 = (state_16666[(7)]);
var inst_16593__$1 = (state_16666[(2)]);
var inst_16594 = (inst_16593__$1 == null);
var state_16666__$1 = (function (){var statearr_16724 = state_16666;
(statearr_16724[(7)] = inst_16593__$1);

return statearr_16724;
})();
if(cljs.core.truth_(inst_16594)){
var statearr_16725_19843 = state_16666__$1;
(statearr_16725_19843[(1)] = (5));

} else {
var statearr_16729_19844 = state_16666__$1;
(statearr_16729_19844[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16672 === (13))){
var state_16666__$1 = state_16666;
var statearr_16735_19845 = state_16666__$1;
(statearr_16735_19845[(2)] = null);

(statearr_16735_19845[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16672 === (6))){
var inst_16593 = (state_16666[(7)]);
var state_16666__$1 = state_16666;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16666__$1,(11),to,inst_16593);
} else {
if((state_val_16672 === (3))){
var inst_16635 = (state_16666[(2)]);
var state_16666__$1 = state_16666;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16666__$1,inst_16635);
} else {
if((state_val_16672 === (12))){
var state_16666__$1 = state_16666;
var statearr_16741_19847 = state_16666__$1;
(statearr_16741_19847[(2)] = null);

(statearr_16741_19847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16672 === (2))){
var state_16666__$1 = state_16666;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16666__$1,(4),from);
} else {
if((state_val_16672 === (11))){
var inst_16610 = (state_16666[(2)]);
var state_16666__$1 = state_16666;
if(cljs.core.truth_(inst_16610)){
var statearr_16750_19849 = state_16666__$1;
(statearr_16750_19849[(1)] = (12));

} else {
var statearr_16759_19850 = state_16666__$1;
(statearr_16759_19850[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16672 === (9))){
var state_16666__$1 = state_16666;
var statearr_16767_19851 = state_16666__$1;
(statearr_16767_19851[(2)] = null);

(statearr_16767_19851[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16672 === (5))){
var state_16666__$1 = state_16666;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16776_19853 = state_16666__$1;
(statearr_16776_19853[(1)] = (8));

} else {
var statearr_16781_19854 = state_16666__$1;
(statearr_16781_19854[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16672 === (14))){
var inst_16624 = (state_16666[(2)]);
var state_16666__$1 = state_16666;
var statearr_16783_19855 = state_16666__$1;
(statearr_16783_19855[(2)] = inst_16624);

(statearr_16783_19855[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16672 === (10))){
var inst_16605 = (state_16666[(2)]);
var state_16666__$1 = state_16666;
var statearr_16793_19856 = state_16666__$1;
(statearr_16793_19856[(2)] = inst_16605);

(statearr_16793_19856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16672 === (8))){
var inst_16597 = cljs.core.async.close_BANG_(to);
var state_16666__$1 = state_16666;
var statearr_16804_19857 = state_16666__$1;
(statearr_16804_19857[(2)] = inst_16597);

(statearr_16804_19857[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__14730__auto__ = null;
var cljs$core$async$state_machine__14730__auto____0 = (function (){
var statearr_16822 = [null,null,null,null,null,null,null,null];
(statearr_16822[(0)] = cljs$core$async$state_machine__14730__auto__);

(statearr_16822[(1)] = (1));

return statearr_16822;
});
var cljs$core$async$state_machine__14730__auto____1 = (function (state_16666){
while(true){
var ret_value__14731__auto__ = (function (){try{while(true){
var result__14732__auto__ = switch__14729__auto__(state_16666);
if(cljs.core.keyword_identical_QMARK_(result__14732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14732__auto__;
}
break;
}
}catch (e16824){var ex__14733__auto__ = e16824;
var statearr_16825_19859 = state_16666;
(statearr_16825_19859[(2)] = ex__14733__auto__);


if(cljs.core.seq((state_16666[(4)]))){
var statearr_16826_19861 = state_16666;
(statearr_16826_19861[(1)] = cljs.core.first((state_16666[(4)])));

} else {
throw ex__14733__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19862 = state_16666;
state_16666 = G__19862;
continue;
} else {
return ret_value__14731__auto__;
}
break;
}
});
cljs$core$async$state_machine__14730__auto__ = function(state_16666){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14730__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14730__auto____1.call(this,state_16666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14730__auto____0;
cljs$core$async$state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14730__auto____1;
return cljs$core$async$state_machine__14730__auto__;
})()
})();
var state__16109__auto__ = (function (){var statearr_16839 = f__16108__auto__();
(statearr_16839[(6)] = c__16107__auto___19839);

return statearr_16839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16109__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__16865){
var vec__16866 = p__16865;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16866,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16866,(1),null);
var job = vec__16866;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__16107__auto___19884 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16108__auto__ = (function (){var switch__14729__auto__ = (function (state_16873){
var state_val_16874 = (state_16873[(1)]);
if((state_val_16874 === (1))){
var state_16873__$1 = state_16873;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16873__$1,(2),res,v);
} else {
if((state_val_16874 === (2))){
var inst_16870 = (state_16873[(2)]);
var inst_16871 = cljs.core.async.close_BANG_(res);
var state_16873__$1 = (function (){var statearr_16876 = state_16873;
(statearr_16876[(7)] = inst_16870);

return statearr_16876;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16873__$1,inst_16871);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14730__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14730__auto____0 = (function (){
var statearr_16884 = [null,null,null,null,null,null,null,null];
(statearr_16884[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14730__auto__);

(statearr_16884[(1)] = (1));

return statearr_16884;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14730__auto____1 = (function (state_16873){
while(true){
var ret_value__14731__auto__ = (function (){try{while(true){
var result__14732__auto__ = switch__14729__auto__(state_16873);
if(cljs.core.keyword_identical_QMARK_(result__14732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14732__auto__;
}
break;
}
}catch (e16888){var ex__14733__auto__ = e16888;
var statearr_16889_19887 = state_16873;
(statearr_16889_19887[(2)] = ex__14733__auto__);


if(cljs.core.seq((state_16873[(4)]))){
var statearr_16890_19888 = state_16873;
(statearr_16890_19888[(1)] = cljs.core.first((state_16873[(4)])));

} else {
throw ex__14733__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19889 = state_16873;
state_16873 = G__19889;
continue;
} else {
return ret_value__14731__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14730__auto__ = function(state_16873){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14730__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14730__auto____1.call(this,state_16873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14730__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14730__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14730__auto__;
})()
})();
var state__16109__auto__ = (function (){var statearr_16894 = f__16108__auto__();
(statearr_16894[(6)] = c__16107__auto___19884);

return statearr_16894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16109__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__16898){
var vec__16900 = p__16898;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16900,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16900,(1),null);
var job = vec__16900;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5762__auto___19891 = n;
var __19892 = (0);
while(true){
if((__19892 < n__5762__auto___19891)){
var G__16910_19893 = type;
var G__16910_19894__$1 = (((G__16910_19893 instanceof cljs.core.Keyword))?G__16910_19893.fqn:null);
switch (G__16910_19894__$1) {
case "compute":
var c__16107__auto___19896 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__19892,c__16107__auto___19896,G__16910_19893,G__16910_19894__$1,n__5762__auto___19891,jobs,results,process__$1,async){
return (function (){
var f__16108__auto__ = (function (){var switch__14729__auto__ = ((function (__19892,c__16107__auto___19896,G__16910_19893,G__16910_19894__$1,n__5762__auto___19891,jobs,results,process__$1,async){
return (function (state_16928){
var state_val_16929 = (state_16928[(1)]);
if((state_val_16929 === (1))){
var state_16928__$1 = state_16928;
var statearr_16931_19897 = state_16928__$1;
(statearr_16931_19897[(2)] = null);

(statearr_16931_19897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16929 === (2))){
var state_16928__$1 = state_16928;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16928__$1,(4),jobs);
} else {
if((state_val_16929 === (3))){
var inst_16925 = (state_16928[(2)]);
var state_16928__$1 = state_16928;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16928__$1,inst_16925);
} else {
if((state_val_16929 === (4))){
var inst_16917 = (state_16928[(2)]);
var inst_16918 = process__$1(inst_16917);
var state_16928__$1 = state_16928;
if(cljs.core.truth_(inst_16918)){
var statearr_16932_19898 = state_16928__$1;
(statearr_16932_19898[(1)] = (5));

} else {
var statearr_16933_19899 = state_16928__$1;
(statearr_16933_19899[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16929 === (5))){
var state_16928__$1 = state_16928;
var statearr_16938_19900 = state_16928__$1;
(statearr_16938_19900[(2)] = null);

(statearr_16938_19900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16929 === (6))){
var state_16928__$1 = state_16928;
var statearr_16940_19901 = state_16928__$1;
(statearr_16940_19901[(2)] = null);

(statearr_16940_19901[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16929 === (7))){
var inst_16923 = (state_16928[(2)]);
var state_16928__$1 = state_16928;
var statearr_16944_19904 = state_16928__$1;
(statearr_16944_19904[(2)] = inst_16923);

(statearr_16944_19904[(1)] = (3));


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
});})(__19892,c__16107__auto___19896,G__16910_19893,G__16910_19894__$1,n__5762__auto___19891,jobs,results,process__$1,async))
;
return ((function (__19892,switch__14729__auto__,c__16107__auto___19896,G__16910_19893,G__16910_19894__$1,n__5762__auto___19891,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14730__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14730__auto____0 = (function (){
var statearr_16946 = [null,null,null,null,null,null,null];
(statearr_16946[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14730__auto__);

(statearr_16946[(1)] = (1));

return statearr_16946;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14730__auto____1 = (function (state_16928){
while(true){
var ret_value__14731__auto__ = (function (){try{while(true){
var result__14732__auto__ = switch__14729__auto__(state_16928);
if(cljs.core.keyword_identical_QMARK_(result__14732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14732__auto__;
}
break;
}
}catch (e16947){var ex__14733__auto__ = e16947;
var statearr_16948_19912 = state_16928;
(statearr_16948_19912[(2)] = ex__14733__auto__);


if(cljs.core.seq((state_16928[(4)]))){
var statearr_16949_19913 = state_16928;
(statearr_16949_19913[(1)] = cljs.core.first((state_16928[(4)])));

} else {
throw ex__14733__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19916 = state_16928;
state_16928 = G__19916;
continue;
} else {
return ret_value__14731__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14730__auto__ = function(state_16928){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14730__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14730__auto____1.call(this,state_16928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14730__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14730__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14730__auto__;
})()
;})(__19892,switch__14729__auto__,c__16107__auto___19896,G__16910_19893,G__16910_19894__$1,n__5762__auto___19891,jobs,results,process__$1,async))
})();
var state__16109__auto__ = (function (){var statearr_16954 = f__16108__auto__();
(statearr_16954[(6)] = c__16107__auto___19896);

return statearr_16954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16109__auto__);
});})(__19892,c__16107__auto___19896,G__16910_19893,G__16910_19894__$1,n__5762__auto___19891,jobs,results,process__$1,async))
);


break;
case "async":
var c__16107__auto___19919 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__19892,c__16107__auto___19919,G__16910_19893,G__16910_19894__$1,n__5762__auto___19891,jobs,results,process__$1,async){
return (function (){
var f__16108__auto__ = (function (){var switch__14729__auto__ = ((function (__19892,c__16107__auto___19919,G__16910_19893,G__16910_19894__$1,n__5762__auto___19891,jobs,results,process__$1,async){
return (function (state_16974){
var state_val_16975 = (state_16974[(1)]);
if((state_val_16975 === (1))){
var state_16974__$1 = state_16974;
var statearr_16980_19920 = state_16974__$1;
(statearr_16980_19920[(2)] = null);

(statearr_16980_19920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16975 === (2))){
var state_16974__$1 = state_16974;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16974__$1,(4),jobs);
} else {
if((state_val_16975 === (3))){
var inst_16972 = (state_16974[(2)]);
var state_16974__$1 = state_16974;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16974__$1,inst_16972);
} else {
if((state_val_16975 === (4))){
var inst_16961 = (state_16974[(2)]);
var inst_16963 = async(inst_16961);
var state_16974__$1 = state_16974;
if(cljs.core.truth_(inst_16963)){
var statearr_16982_19921 = state_16974__$1;
(statearr_16982_19921[(1)] = (5));

} else {
var statearr_16983_19922 = state_16974__$1;
(statearr_16983_19922[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16975 === (5))){
var state_16974__$1 = state_16974;
var statearr_16987_19923 = state_16974__$1;
(statearr_16987_19923[(2)] = null);

(statearr_16987_19923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16975 === (6))){
var state_16974__$1 = state_16974;
var statearr_16990_19924 = state_16974__$1;
(statearr_16990_19924[(2)] = null);

(statearr_16990_19924[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16975 === (7))){
var inst_16970 = (state_16974[(2)]);
var state_16974__$1 = state_16974;
var statearr_16991_19925 = state_16974__$1;
(statearr_16991_19925[(2)] = inst_16970);

(statearr_16991_19925[(1)] = (3));


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
});})(__19892,c__16107__auto___19919,G__16910_19893,G__16910_19894__$1,n__5762__auto___19891,jobs,results,process__$1,async))
;
return ((function (__19892,switch__14729__auto__,c__16107__auto___19919,G__16910_19893,G__16910_19894__$1,n__5762__auto___19891,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14730__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14730__auto____0 = (function (){
var statearr_16993 = [null,null,null,null,null,null,null];
(statearr_16993[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14730__auto__);

(statearr_16993[(1)] = (1));

return statearr_16993;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14730__auto____1 = (function (state_16974){
while(true){
var ret_value__14731__auto__ = (function (){try{while(true){
var result__14732__auto__ = switch__14729__auto__(state_16974);
if(cljs.core.keyword_identical_QMARK_(result__14732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14732__auto__;
}
break;
}
}catch (e16998){var ex__14733__auto__ = e16998;
var statearr_17002_19926 = state_16974;
(statearr_17002_19926[(2)] = ex__14733__auto__);


if(cljs.core.seq((state_16974[(4)]))){
var statearr_17003_19928 = state_16974;
(statearr_17003_19928[(1)] = cljs.core.first((state_16974[(4)])));

} else {
throw ex__14733__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19929 = state_16974;
state_16974 = G__19929;
continue;
} else {
return ret_value__14731__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14730__auto__ = function(state_16974){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14730__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14730__auto____1.call(this,state_16974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14730__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14730__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14730__auto__;
})()
;})(__19892,switch__14729__auto__,c__16107__auto___19919,G__16910_19893,G__16910_19894__$1,n__5762__auto___19891,jobs,results,process__$1,async))
})();
var state__16109__auto__ = (function (){var statearr_17016 = f__16108__auto__();
(statearr_17016[(6)] = c__16107__auto___19919);

return statearr_17016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16109__auto__);
});})(__19892,c__16107__auto___19919,G__16910_19893,G__16910_19894__$1,n__5762__auto___19891,jobs,results,process__$1,async))
);


break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16910_19894__$1))));

}

var G__19933 = (__19892 + (1));
__19892 = G__19933;
continue;
} else {
}
break;
}

var c__16107__auto___19934 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16108__auto__ = (function (){var switch__14729__auto__ = (function (state_17081){
var state_val_17083 = (state_17081[(1)]);
if((state_val_17083 === (7))){
var inst_17068 = (state_17081[(2)]);
var state_17081__$1 = state_17081;
var statearr_17138_19935 = state_17081__$1;
(statearr_17138_19935[(2)] = inst_17068);

(statearr_17138_19935[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17083 === (1))){
var state_17081__$1 = state_17081;
var statearr_17145_19938 = state_17081__$1;
(statearr_17145_19938[(2)] = null);

(statearr_17145_19938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17083 === (4))){
var inst_17037 = (state_17081[(7)]);
var inst_17037__$1 = (state_17081[(2)]);
var inst_17038 = (inst_17037__$1 == null);
var state_17081__$1 = (function (){var statearr_17162 = state_17081;
(statearr_17162[(7)] = inst_17037__$1);

return statearr_17162;
})();
if(cljs.core.truth_(inst_17038)){
var statearr_17163_19939 = state_17081__$1;
(statearr_17163_19939[(1)] = (5));

} else {
var statearr_17164_19940 = state_17081__$1;
(statearr_17164_19940[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17083 === (6))){
var inst_17037 = (state_17081[(7)]);
var inst_17042 = (state_17081[(8)]);
var inst_17042__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_17054 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17059 = [inst_17037,inst_17042__$1];
var inst_17060 = (new cljs.core.PersistentVector(null,2,(5),inst_17054,inst_17059,null));
var state_17081__$1 = (function (){var statearr_17165 = state_17081;
(statearr_17165[(8)] = inst_17042__$1);

return statearr_17165;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17081__$1,(8),jobs,inst_17060);
} else {
if((state_val_17083 === (3))){
var inst_17074 = (state_17081[(2)]);
var state_17081__$1 = state_17081;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17081__$1,inst_17074);
} else {
if((state_val_17083 === (2))){
var state_17081__$1 = state_17081;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17081__$1,(4),from);
} else {
if((state_val_17083 === (9))){
var inst_17065 = (state_17081[(2)]);
var state_17081__$1 = (function (){var statearr_17173 = state_17081;
(statearr_17173[(9)] = inst_17065);

return statearr_17173;
})();
var statearr_17174_19941 = state_17081__$1;
(statearr_17174_19941[(2)] = null);

(statearr_17174_19941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17083 === (5))){
var inst_17040 = cljs.core.async.close_BANG_(jobs);
var state_17081__$1 = state_17081;
var statearr_17175_19942 = state_17081__$1;
(statearr_17175_19942[(2)] = inst_17040);

(statearr_17175_19942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17083 === (8))){
var inst_17042 = (state_17081[(8)]);
var inst_17062 = (state_17081[(2)]);
var state_17081__$1 = (function (){var statearr_17176 = state_17081;
(statearr_17176[(10)] = inst_17062);

return statearr_17176;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17081__$1,(9),results,inst_17042);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14730__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14730__auto____0 = (function (){
var statearr_17177 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17177[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14730__auto__);

(statearr_17177[(1)] = (1));

return statearr_17177;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14730__auto____1 = (function (state_17081){
while(true){
var ret_value__14731__auto__ = (function (){try{while(true){
var result__14732__auto__ = switch__14729__auto__(state_17081);
if(cljs.core.keyword_identical_QMARK_(result__14732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14732__auto__;
}
break;
}
}catch (e17179){var ex__14733__auto__ = e17179;
var statearr_17180_19945 = state_17081;
(statearr_17180_19945[(2)] = ex__14733__auto__);


if(cljs.core.seq((state_17081[(4)]))){
var statearr_17181_19946 = state_17081;
(statearr_17181_19946[(1)] = cljs.core.first((state_17081[(4)])));

} else {
throw ex__14733__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19947 = state_17081;
state_17081 = G__19947;
continue;
} else {
return ret_value__14731__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14730__auto__ = function(state_17081){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14730__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14730__auto____1.call(this,state_17081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14730__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14730__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14730__auto__;
})()
})();
var state__16109__auto__ = (function (){var statearr_17186 = f__16108__auto__();
(statearr_17186[(6)] = c__16107__auto___19934);

return statearr_17186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16109__auto__);
}));


var c__16107__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16108__auto__ = (function (){var switch__14729__auto__ = (function (state_17225){
var state_val_17227 = (state_17225[(1)]);
if((state_val_17227 === (7))){
var inst_17220 = (state_17225[(2)]);
var state_17225__$1 = state_17225;
var statearr_17229_19948 = state_17225__$1;
(statearr_17229_19948[(2)] = inst_17220);

(statearr_17229_19948[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17227 === (20))){
var state_17225__$1 = state_17225;
var statearr_17230_19949 = state_17225__$1;
(statearr_17230_19949[(2)] = null);

(statearr_17230_19949[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17227 === (1))){
var state_17225__$1 = state_17225;
var statearr_17231_19950 = state_17225__$1;
(statearr_17231_19950[(2)] = null);

(statearr_17231_19950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17227 === (4))){
var inst_17189 = (state_17225[(7)]);
var inst_17189__$1 = (state_17225[(2)]);
var inst_17190 = (inst_17189__$1 == null);
var state_17225__$1 = (function (){var statearr_17233 = state_17225;
(statearr_17233[(7)] = inst_17189__$1);

return statearr_17233;
})();
if(cljs.core.truth_(inst_17190)){
var statearr_17236_19951 = state_17225__$1;
(statearr_17236_19951[(1)] = (5));

} else {
var statearr_17237_19952 = state_17225__$1;
(statearr_17237_19952[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17227 === (15))){
var inst_17202 = (state_17225[(8)]);
var state_17225__$1 = state_17225;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17225__$1,(18),to,inst_17202);
} else {
if((state_val_17227 === (21))){
var inst_17215 = (state_17225[(2)]);
var state_17225__$1 = state_17225;
var statearr_17238_19953 = state_17225__$1;
(statearr_17238_19953[(2)] = inst_17215);

(statearr_17238_19953[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17227 === (13))){
var inst_17217 = (state_17225[(2)]);
var state_17225__$1 = (function (){var statearr_17239 = state_17225;
(statearr_17239[(9)] = inst_17217);

return statearr_17239;
})();
var statearr_17240_19955 = state_17225__$1;
(statearr_17240_19955[(2)] = null);

(statearr_17240_19955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17227 === (6))){
var inst_17189 = (state_17225[(7)]);
var state_17225__$1 = state_17225;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17225__$1,(11),inst_17189);
} else {
if((state_val_17227 === (17))){
var inst_17210 = (state_17225[(2)]);
var state_17225__$1 = state_17225;
if(cljs.core.truth_(inst_17210)){
var statearr_17241_19959 = state_17225__$1;
(statearr_17241_19959[(1)] = (19));

} else {
var statearr_17242_19960 = state_17225__$1;
(statearr_17242_19960[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17227 === (3))){
var inst_17222 = (state_17225[(2)]);
var state_17225__$1 = state_17225;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17225__$1,inst_17222);
} else {
if((state_val_17227 === (12))){
var inst_17199 = (state_17225[(10)]);
var state_17225__$1 = state_17225;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17225__$1,(14),inst_17199);
} else {
if((state_val_17227 === (2))){
var state_17225__$1 = state_17225;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17225__$1,(4),results);
} else {
if((state_val_17227 === (19))){
var state_17225__$1 = state_17225;
var statearr_17244_19961 = state_17225__$1;
(statearr_17244_19961[(2)] = null);

(statearr_17244_19961[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17227 === (11))){
var inst_17199 = (state_17225[(2)]);
var state_17225__$1 = (function (){var statearr_17246 = state_17225;
(statearr_17246[(10)] = inst_17199);

return statearr_17246;
})();
var statearr_17247_19962 = state_17225__$1;
(statearr_17247_19962[(2)] = null);

(statearr_17247_19962[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17227 === (9))){
var state_17225__$1 = state_17225;
var statearr_17248_19963 = state_17225__$1;
(statearr_17248_19963[(2)] = null);

(statearr_17248_19963[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17227 === (5))){
var state_17225__$1 = state_17225;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17249_19964 = state_17225__$1;
(statearr_17249_19964[(1)] = (8));

} else {
var statearr_17250_19968 = state_17225__$1;
(statearr_17250_19968[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17227 === (14))){
var inst_17202 = (state_17225[(8)]);
var inst_17204 = (state_17225[(11)]);
var inst_17202__$1 = (state_17225[(2)]);
var inst_17203 = (inst_17202__$1 == null);
var inst_17204__$1 = cljs.core.not(inst_17203);
var state_17225__$1 = (function (){var statearr_17251 = state_17225;
(statearr_17251[(8)] = inst_17202__$1);

(statearr_17251[(11)] = inst_17204__$1);

return statearr_17251;
})();
if(inst_17204__$1){
var statearr_17252_19979 = state_17225__$1;
(statearr_17252_19979[(1)] = (15));

} else {
var statearr_17253_19980 = state_17225__$1;
(statearr_17253_19980[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17227 === (16))){
var inst_17204 = (state_17225[(11)]);
var state_17225__$1 = state_17225;
var statearr_17254_19985 = state_17225__$1;
(statearr_17254_19985[(2)] = inst_17204);

(statearr_17254_19985[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17227 === (10))){
var inst_17196 = (state_17225[(2)]);
var state_17225__$1 = state_17225;
var statearr_17255_19986 = state_17225__$1;
(statearr_17255_19986[(2)] = inst_17196);

(statearr_17255_19986[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17227 === (18))){
var inst_17207 = (state_17225[(2)]);
var state_17225__$1 = state_17225;
var statearr_17256_19987 = state_17225__$1;
(statearr_17256_19987[(2)] = inst_17207);

(statearr_17256_19987[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17227 === (8))){
var inst_17193 = cljs.core.async.close_BANG_(to);
var state_17225__$1 = state_17225;
var statearr_17257_19988 = state_17225__$1;
(statearr_17257_19988[(2)] = inst_17193);

(statearr_17257_19988[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14730__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14730__auto____0 = (function (){
var statearr_17258 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17258[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14730__auto__);

(statearr_17258[(1)] = (1));

return statearr_17258;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14730__auto____1 = (function (state_17225){
while(true){
var ret_value__14731__auto__ = (function (){try{while(true){
var result__14732__auto__ = switch__14729__auto__(state_17225);
if(cljs.core.keyword_identical_QMARK_(result__14732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14732__auto__;
}
break;
}
}catch (e17259){var ex__14733__auto__ = e17259;
var statearr_17260_19989 = state_17225;
(statearr_17260_19989[(2)] = ex__14733__auto__);


if(cljs.core.seq((state_17225[(4)]))){
var statearr_17261_19990 = state_17225;
(statearr_17261_19990[(1)] = cljs.core.first((state_17225[(4)])));

} else {
throw ex__14733__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19991 = state_17225;
state_17225 = G__19991;
continue;
} else {
return ret_value__14731__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14730__auto__ = function(state_17225){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14730__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14730__auto____1.call(this,state_17225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14730__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14730__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14730__auto__;
})()
})();
var state__16109__auto__ = (function (){var statearr_17262 = f__16108__auto__();
(statearr_17262[(6)] = c__16107__auto__);

return statearr_17262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16109__auto__);
}));

return c__16107__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__17264 = arguments.length;
switch (G__17264) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

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
var G__17270 = arguments.length;
switch (G__17270) {
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
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

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
var G__17276 = arguments.length;
switch (G__17276) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__16107__auto___20000 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16108__auto__ = (function (){var switch__14729__auto__ = (function (state_17307){
var state_val_17308 = (state_17307[(1)]);
if((state_val_17308 === (7))){
var inst_17303 = (state_17307[(2)]);
var state_17307__$1 = state_17307;
var statearr_17309_20001 = state_17307__$1;
(statearr_17309_20001[(2)] = inst_17303);

(statearr_17309_20001[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17308 === (1))){
var state_17307__$1 = state_17307;
var statearr_17312_20002 = state_17307__$1;
(statearr_17312_20002[(2)] = null);

(statearr_17312_20002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17308 === (4))){
var inst_17284 = (state_17307[(7)]);
var inst_17284__$1 = (state_17307[(2)]);
var inst_17285 = (inst_17284__$1 == null);
var state_17307__$1 = (function (){var statearr_17313 = state_17307;
(statearr_17313[(7)] = inst_17284__$1);

return statearr_17313;
})();
if(cljs.core.truth_(inst_17285)){
var statearr_17314_20003 = state_17307__$1;
(statearr_17314_20003[(1)] = (5));

} else {
var statearr_17315_20004 = state_17307__$1;
(statearr_17315_20004[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17308 === (13))){
var state_17307__$1 = state_17307;
var statearr_17316_20006 = state_17307__$1;
(statearr_17316_20006[(2)] = null);

(statearr_17316_20006[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17308 === (6))){
var inst_17284 = (state_17307[(7)]);
var inst_17290 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17284) : p.call(null,inst_17284));
var state_17307__$1 = state_17307;
if(cljs.core.truth_(inst_17290)){
var statearr_17317_20007 = state_17307__$1;
(statearr_17317_20007[(1)] = (9));

} else {
var statearr_17319_20008 = state_17307__$1;
(statearr_17319_20008[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17308 === (3))){
var inst_17305 = (state_17307[(2)]);
var state_17307__$1 = state_17307;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17307__$1,inst_17305);
} else {
if((state_val_17308 === (12))){
var state_17307__$1 = state_17307;
var statearr_17322_20010 = state_17307__$1;
(statearr_17322_20010[(2)] = null);

(statearr_17322_20010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17308 === (2))){
var state_17307__$1 = state_17307;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17307__$1,(4),ch);
} else {
if((state_val_17308 === (11))){
var inst_17284 = (state_17307[(7)]);
var inst_17294 = (state_17307[(2)]);
var state_17307__$1 = state_17307;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17307__$1,(8),inst_17294,inst_17284);
} else {
if((state_val_17308 === (9))){
var state_17307__$1 = state_17307;
var statearr_17325_20012 = state_17307__$1;
(statearr_17325_20012[(2)] = tc);

(statearr_17325_20012[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17308 === (5))){
var inst_17287 = cljs.core.async.close_BANG_(tc);
var inst_17288 = cljs.core.async.close_BANG_(fc);
var state_17307__$1 = (function (){var statearr_17328 = state_17307;
(statearr_17328[(8)] = inst_17287);

return statearr_17328;
})();
var statearr_17329_20013 = state_17307__$1;
(statearr_17329_20013[(2)] = inst_17288);

(statearr_17329_20013[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17308 === (14))){
var inst_17301 = (state_17307[(2)]);
var state_17307__$1 = state_17307;
var statearr_17330_20014 = state_17307__$1;
(statearr_17330_20014[(2)] = inst_17301);

(statearr_17330_20014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17308 === (10))){
var state_17307__$1 = state_17307;
var statearr_17331_20015 = state_17307__$1;
(statearr_17331_20015[(2)] = fc);

(statearr_17331_20015[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17308 === (8))){
var inst_17296 = (state_17307[(2)]);
var state_17307__$1 = state_17307;
if(cljs.core.truth_(inst_17296)){
var statearr_17332_20016 = state_17307__$1;
(statearr_17332_20016[(1)] = (12));

} else {
var statearr_17334_20017 = state_17307__$1;
(statearr_17334_20017[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__14730__auto__ = null;
var cljs$core$async$state_machine__14730__auto____0 = (function (){
var statearr_17339 = [null,null,null,null,null,null,null,null,null];
(statearr_17339[(0)] = cljs$core$async$state_machine__14730__auto__);

(statearr_17339[(1)] = (1));

return statearr_17339;
});
var cljs$core$async$state_machine__14730__auto____1 = (function (state_17307){
while(true){
var ret_value__14731__auto__ = (function (){try{while(true){
var result__14732__auto__ = switch__14729__auto__(state_17307);
if(cljs.core.keyword_identical_QMARK_(result__14732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14732__auto__;
}
break;
}
}catch (e17340){var ex__14733__auto__ = e17340;
var statearr_17341_20018 = state_17307;
(statearr_17341_20018[(2)] = ex__14733__auto__);


if(cljs.core.seq((state_17307[(4)]))){
var statearr_17342_20019 = state_17307;
(statearr_17342_20019[(1)] = cljs.core.first((state_17307[(4)])));

} else {
throw ex__14733__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20024 = state_17307;
state_17307 = G__20024;
continue;
} else {
return ret_value__14731__auto__;
}
break;
}
});
cljs$core$async$state_machine__14730__auto__ = function(state_17307){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14730__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14730__auto____1.call(this,state_17307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14730__auto____0;
cljs$core$async$state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14730__auto____1;
return cljs$core$async$state_machine__14730__auto__;
})()
})();
var state__16109__auto__ = (function (){var statearr_17345 = f__16108__auto__();
(statearr_17345[(6)] = c__16107__auto___20000);

return statearr_17345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16109__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__16107__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16108__auto__ = (function (){var switch__14729__auto__ = (function (state_17375){
var state_val_17376 = (state_17375[(1)]);
if((state_val_17376 === (7))){
var inst_17371 = (state_17375[(2)]);
var state_17375__$1 = state_17375;
var statearr_17381_20025 = state_17375__$1;
(statearr_17381_20025[(2)] = inst_17371);

(statearr_17381_20025[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17376 === (1))){
var inst_17353 = init;
var inst_17354 = inst_17353;
var state_17375__$1 = (function (){var statearr_17382 = state_17375;
(statearr_17382[(7)] = inst_17354);

return statearr_17382;
})();
var statearr_17383_20027 = state_17375__$1;
(statearr_17383_20027[(2)] = null);

(statearr_17383_20027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17376 === (4))){
var inst_17357 = (state_17375[(8)]);
var inst_17357__$1 = (state_17375[(2)]);
var inst_17358 = (inst_17357__$1 == null);
var state_17375__$1 = (function (){var statearr_17384 = state_17375;
(statearr_17384[(8)] = inst_17357__$1);

return statearr_17384;
})();
if(cljs.core.truth_(inst_17358)){
var statearr_17386_20029 = state_17375__$1;
(statearr_17386_20029[(1)] = (5));

} else {
var statearr_17387_20030 = state_17375__$1;
(statearr_17387_20030[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17376 === (6))){
var inst_17354 = (state_17375[(7)]);
var inst_17357 = (state_17375[(8)]);
var inst_17361 = (state_17375[(9)]);
var inst_17361__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_17354,inst_17357) : f.call(null,inst_17354,inst_17357));
var inst_17362 = cljs.core.reduced_QMARK_(inst_17361__$1);
var state_17375__$1 = (function (){var statearr_17391 = state_17375;
(statearr_17391[(9)] = inst_17361__$1);

return statearr_17391;
})();
if(inst_17362){
var statearr_17392_20031 = state_17375__$1;
(statearr_17392_20031[(1)] = (8));

} else {
var statearr_17393_20032 = state_17375__$1;
(statearr_17393_20032[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17376 === (3))){
var inst_17373 = (state_17375[(2)]);
var state_17375__$1 = state_17375;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17375__$1,inst_17373);
} else {
if((state_val_17376 === (2))){
var state_17375__$1 = state_17375;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17375__$1,(4),ch);
} else {
if((state_val_17376 === (9))){
var inst_17361 = (state_17375[(9)]);
var inst_17354 = inst_17361;
var state_17375__$1 = (function (){var statearr_17394 = state_17375;
(statearr_17394[(7)] = inst_17354);

return statearr_17394;
})();
var statearr_17395_20033 = state_17375__$1;
(statearr_17395_20033[(2)] = null);

(statearr_17395_20033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17376 === (5))){
var inst_17354 = (state_17375[(7)]);
var state_17375__$1 = state_17375;
var statearr_17396_20034 = state_17375__$1;
(statearr_17396_20034[(2)] = inst_17354);

(statearr_17396_20034[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17376 === (10))){
var inst_17368 = (state_17375[(2)]);
var state_17375__$1 = state_17375;
var statearr_17397_20035 = state_17375__$1;
(statearr_17397_20035[(2)] = inst_17368);

(statearr_17397_20035[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17376 === (8))){
var inst_17361 = (state_17375[(9)]);
var inst_17364 = cljs.core.deref(inst_17361);
var state_17375__$1 = state_17375;
var statearr_17401_20036 = state_17375__$1;
(statearr_17401_20036[(2)] = inst_17364);

(statearr_17401_20036[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__14730__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14730__auto____0 = (function (){
var statearr_17418 = [null,null,null,null,null,null,null,null,null,null];
(statearr_17418[(0)] = cljs$core$async$reduce_$_state_machine__14730__auto__);

(statearr_17418[(1)] = (1));

return statearr_17418;
});
var cljs$core$async$reduce_$_state_machine__14730__auto____1 = (function (state_17375){
while(true){
var ret_value__14731__auto__ = (function (){try{while(true){
var result__14732__auto__ = switch__14729__auto__(state_17375);
if(cljs.core.keyword_identical_QMARK_(result__14732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14732__auto__;
}
break;
}
}catch (e17419){var ex__14733__auto__ = e17419;
var statearr_17420_20038 = state_17375;
(statearr_17420_20038[(2)] = ex__14733__auto__);


if(cljs.core.seq((state_17375[(4)]))){
var statearr_17427_20039 = state_17375;
(statearr_17427_20039[(1)] = cljs.core.first((state_17375[(4)])));

} else {
throw ex__14733__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20040 = state_17375;
state_17375 = G__20040;
continue;
} else {
return ret_value__14731__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14730__auto__ = function(state_17375){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14730__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14730__auto____1.call(this,state_17375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14730__auto____0;
cljs$core$async$reduce_$_state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14730__auto____1;
return cljs$core$async$reduce_$_state_machine__14730__auto__;
})()
})();
var state__16109__auto__ = (function (){var statearr_17430 = f__16108__auto__();
(statearr_17430[(6)] = c__16107__auto__);

return statearr_17430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16109__auto__);
}));

return c__16107__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__16107__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16108__auto__ = (function (){var switch__14729__auto__ = (function (state_17446){
var state_val_17447 = (state_17446[(1)]);
if((state_val_17447 === (1))){
var inst_17441 = cljs.core.async.reduce(f__$1,init,ch);
var state_17446__$1 = state_17446;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17446__$1,(2),inst_17441);
} else {
if((state_val_17447 === (2))){
var inst_17443 = (state_17446[(2)]);
var inst_17444 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_17443) : f__$1.call(null,inst_17443));
var state_17446__$1 = state_17446;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17446__$1,inst_17444);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__14730__auto__ = null;
var cljs$core$async$transduce_$_state_machine__14730__auto____0 = (function (){
var statearr_17453 = [null,null,null,null,null,null,null];
(statearr_17453[(0)] = cljs$core$async$transduce_$_state_machine__14730__auto__);

(statearr_17453[(1)] = (1));

return statearr_17453;
});
var cljs$core$async$transduce_$_state_machine__14730__auto____1 = (function (state_17446){
while(true){
var ret_value__14731__auto__ = (function (){try{while(true){
var result__14732__auto__ = switch__14729__auto__(state_17446);
if(cljs.core.keyword_identical_QMARK_(result__14732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14732__auto__;
}
break;
}
}catch (e17454){var ex__14733__auto__ = e17454;
var statearr_17455_20048 = state_17446;
(statearr_17455_20048[(2)] = ex__14733__auto__);


if(cljs.core.seq((state_17446[(4)]))){
var statearr_17456_20049 = state_17446;
(statearr_17456_20049[(1)] = cljs.core.first((state_17446[(4)])));

} else {
throw ex__14733__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20050 = state_17446;
state_17446 = G__20050;
continue;
} else {
return ret_value__14731__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__14730__auto__ = function(state_17446){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__14730__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__14730__auto____1.call(this,state_17446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__14730__auto____0;
cljs$core$async$transduce_$_state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__14730__auto____1;
return cljs$core$async$transduce_$_state_machine__14730__auto__;
})()
})();
var state__16109__auto__ = (function (){var statearr_17457 = f__16108__auto__();
(statearr_17457[(6)] = c__16107__auto__);

return statearr_17457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16109__auto__);
}));

return c__16107__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__17459 = arguments.length;
switch (G__17459) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__16107__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16108__auto__ = (function (){var switch__14729__auto__ = (function (state_17492){
var state_val_17493 = (state_17492[(1)]);
if((state_val_17493 === (7))){
var inst_17474 = (state_17492[(2)]);
var state_17492__$1 = state_17492;
var statearr_17502_20056 = state_17492__$1;
(statearr_17502_20056[(2)] = inst_17474);

(statearr_17502_20056[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17493 === (1))){
var inst_17468 = cljs.core.seq(coll);
var inst_17469 = inst_17468;
var state_17492__$1 = (function (){var statearr_17503 = state_17492;
(statearr_17503[(7)] = inst_17469);

return statearr_17503;
})();
var statearr_17504_20057 = state_17492__$1;
(statearr_17504_20057[(2)] = null);

(statearr_17504_20057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17493 === (4))){
var inst_17469 = (state_17492[(7)]);
var inst_17472 = cljs.core.first(inst_17469);
var state_17492__$1 = state_17492;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17492__$1,(7),ch,inst_17472);
} else {
if((state_val_17493 === (13))){
var inst_17486 = (state_17492[(2)]);
var state_17492__$1 = state_17492;
var statearr_17510_20058 = state_17492__$1;
(statearr_17510_20058[(2)] = inst_17486);

(statearr_17510_20058[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17493 === (6))){
var inst_17477 = (state_17492[(2)]);
var state_17492__$1 = state_17492;
if(cljs.core.truth_(inst_17477)){
var statearr_17513_20059 = state_17492__$1;
(statearr_17513_20059[(1)] = (8));

} else {
var statearr_17514_20060 = state_17492__$1;
(statearr_17514_20060[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17493 === (3))){
var inst_17490 = (state_17492[(2)]);
var state_17492__$1 = state_17492;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17492__$1,inst_17490);
} else {
if((state_val_17493 === (12))){
var state_17492__$1 = state_17492;
var statearr_17515_20061 = state_17492__$1;
(statearr_17515_20061[(2)] = null);

(statearr_17515_20061[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17493 === (2))){
var inst_17469 = (state_17492[(7)]);
var state_17492__$1 = state_17492;
if(cljs.core.truth_(inst_17469)){
var statearr_17517_20063 = state_17492__$1;
(statearr_17517_20063[(1)] = (4));

} else {
var statearr_17518_20064 = state_17492__$1;
(statearr_17518_20064[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17493 === (11))){
var inst_17483 = cljs.core.async.close_BANG_(ch);
var state_17492__$1 = state_17492;
var statearr_17520_20065 = state_17492__$1;
(statearr_17520_20065[(2)] = inst_17483);

(statearr_17520_20065[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17493 === (9))){
var state_17492__$1 = state_17492;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17522_20066 = state_17492__$1;
(statearr_17522_20066[(1)] = (11));

} else {
var statearr_17523_20067 = state_17492__$1;
(statearr_17523_20067[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17493 === (5))){
var inst_17469 = (state_17492[(7)]);
var state_17492__$1 = state_17492;
var statearr_17525_20068 = state_17492__$1;
(statearr_17525_20068[(2)] = inst_17469);

(statearr_17525_20068[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17493 === (10))){
var inst_17488 = (state_17492[(2)]);
var state_17492__$1 = state_17492;
var statearr_17526_20071 = state_17492__$1;
(statearr_17526_20071[(2)] = inst_17488);

(statearr_17526_20071[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17493 === (8))){
var inst_17469 = (state_17492[(7)]);
var inst_17479 = cljs.core.next(inst_17469);
var inst_17469__$1 = inst_17479;
var state_17492__$1 = (function (){var statearr_17527 = state_17492;
(statearr_17527[(7)] = inst_17469__$1);

return statearr_17527;
})();
var statearr_17529_20073 = state_17492__$1;
(statearr_17529_20073[(2)] = null);

(statearr_17529_20073[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__14730__auto__ = null;
var cljs$core$async$state_machine__14730__auto____0 = (function (){
var statearr_17531 = [null,null,null,null,null,null,null,null];
(statearr_17531[(0)] = cljs$core$async$state_machine__14730__auto__);

(statearr_17531[(1)] = (1));

return statearr_17531;
});
var cljs$core$async$state_machine__14730__auto____1 = (function (state_17492){
while(true){
var ret_value__14731__auto__ = (function (){try{while(true){
var result__14732__auto__ = switch__14729__auto__(state_17492);
if(cljs.core.keyword_identical_QMARK_(result__14732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14732__auto__;
}
break;
}
}catch (e17533){var ex__14733__auto__ = e17533;
var statearr_17534_20075 = state_17492;
(statearr_17534_20075[(2)] = ex__14733__auto__);


if(cljs.core.seq((state_17492[(4)]))){
var statearr_17535_20077 = state_17492;
(statearr_17535_20077[(1)] = cljs.core.first((state_17492[(4)])));

} else {
throw ex__14733__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20078 = state_17492;
state_17492 = G__20078;
continue;
} else {
return ret_value__14731__auto__;
}
break;
}
});
cljs$core$async$state_machine__14730__auto__ = function(state_17492){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14730__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14730__auto____1.call(this,state_17492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14730__auto____0;
cljs$core$async$state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14730__auto____1;
return cljs$core$async$state_machine__14730__auto__;
})()
})();
var state__16109__auto__ = (function (){var statearr_17538 = f__16108__auto__();
(statearr_17538[(6)] = c__16107__auto__);

return statearr_17538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16109__auto__);
}));

return c__16107__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__17543 = arguments.length;
switch (G__17543) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_20090 = (function (_){
var x__5519__auto__ = (((_ == null))?null:_);
var m__5520__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5520__auto__.call(null,_));
} else {
var m__5518__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5518__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_20090(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_20093 = (function (m,ch,close_QMARK_){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5520__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5518__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5518__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_20093(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_20095 = (function (m,ch){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5520__auto__.call(null,m,ch));
} else {
var m__5518__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5518__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_20095(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_20099 = (function (m){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5520__auto__.call(null,m));
} else {
var m__5518__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5518__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_20099(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17577 = (function (ch,cs,meta17578){
this.ch = ch;
this.cs = cs;
this.meta17578 = meta17578;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17577.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17579,meta17578__$1){
var self__ = this;
var _17579__$1 = this;
return (new cljs.core.async.t_cljs$core$async17577(self__.ch,self__.cs,meta17578__$1));
}));

(cljs.core.async.t_cljs$core$async17577.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17579){
var self__ = this;
var _17579__$1 = this;
return self__.meta17578;
}));

(cljs.core.async.t_cljs$core$async17577.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17577.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async17577.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17577.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async17577.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async17577.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async17577.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta17578","meta17578",1979425593,null)], null);
}));

(cljs.core.async.t_cljs$core$async17577.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17577.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17577");

(cljs.core.async.t_cljs$core$async17577.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async17577");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17577.
 */
cljs.core.async.__GT_t_cljs$core$async17577 = (function cljs$core$async$__GT_t_cljs$core$async17577(ch,cs,meta17578){
return (new cljs.core.async.t_cljs$core$async17577(ch,cs,meta17578));
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async17577(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__16107__auto___20120 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16108__auto__ = (function (){var switch__14729__auto__ = (function (state_17734){
var state_val_17735 = (state_17734[(1)]);
if((state_val_17735 === (7))){
var inst_17727 = (state_17734[(2)]);
var state_17734__$1 = state_17734;
var statearr_17736_20122 = state_17734__$1;
(statearr_17736_20122[(2)] = inst_17727);

(statearr_17736_20122[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17735 === (20))){
var inst_17627 = (state_17734[(7)]);
var inst_17639 = cljs.core.first(inst_17627);
var inst_17640 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17639,(0),null);
var inst_17641 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17639,(1),null);
var state_17734__$1 = (function (){var statearr_17738 = state_17734;
(statearr_17738[(8)] = inst_17640);

return statearr_17738;
})();
if(cljs.core.truth_(inst_17641)){
var statearr_17739_20123 = state_17734__$1;
(statearr_17739_20123[(1)] = (22));

} else {
var statearr_17740_20127 = state_17734__$1;
(statearr_17740_20127[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17735 === (27))){
var inst_17669 = (state_17734[(9)]);
var inst_17671 = (state_17734[(10)]);
var inst_17676 = (state_17734[(11)]);
var inst_17592 = (state_17734[(12)]);
var inst_17676__$1 = cljs.core._nth(inst_17669,inst_17671);
var inst_17677 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17676__$1,inst_17592,done);
var state_17734__$1 = (function (){var statearr_17742 = state_17734;
(statearr_17742[(11)] = inst_17676__$1);

return statearr_17742;
})();
if(cljs.core.truth_(inst_17677)){
var statearr_17743_20130 = state_17734__$1;
(statearr_17743_20130[(1)] = (30));

} else {
var statearr_17744_20131 = state_17734__$1;
(statearr_17744_20131[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17735 === (1))){
var state_17734__$1 = state_17734;
var statearr_17745_20139 = state_17734__$1;
(statearr_17745_20139[(2)] = null);

(statearr_17745_20139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17735 === (24))){
var inst_17627 = (state_17734[(7)]);
var inst_17646 = (state_17734[(2)]);
var inst_17647 = cljs.core.next(inst_17627);
var inst_17601 = inst_17647;
var inst_17602 = null;
var inst_17603 = (0);
var inst_17604 = (0);
var state_17734__$1 = (function (){var statearr_17746 = state_17734;
(statearr_17746[(13)] = inst_17646);

(statearr_17746[(14)] = inst_17601);

(statearr_17746[(15)] = inst_17602);

(statearr_17746[(16)] = inst_17603);

(statearr_17746[(17)] = inst_17604);

return statearr_17746;
})();
var statearr_17747_20142 = state_17734__$1;
(statearr_17747_20142[(2)] = null);

(statearr_17747_20142[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17735 === (39))){
var state_17734__$1 = state_17734;
var statearr_17752_20143 = state_17734__$1;
(statearr_17752_20143[(2)] = null);

(statearr_17752_20143[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17735 === (4))){
var inst_17592 = (state_17734[(12)]);
var inst_17592__$1 = (state_17734[(2)]);
var inst_17593 = (inst_17592__$1 == null);
var state_17734__$1 = (function (){var statearr_17753 = state_17734;
(statearr_17753[(12)] = inst_17592__$1);

return statearr_17753;
})();
if(cljs.core.truth_(inst_17593)){
var statearr_17754_20146 = state_17734__$1;
(statearr_17754_20146[(1)] = (5));

} else {
var statearr_17755_20147 = state_17734__$1;
(statearr_17755_20147[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17735 === (15))){
var inst_17604 = (state_17734[(17)]);
var inst_17601 = (state_17734[(14)]);
var inst_17602 = (state_17734[(15)]);
var inst_17603 = (state_17734[(16)]);
var inst_17623 = (state_17734[(2)]);
var inst_17624 = (inst_17604 + (1));
var tmp17749 = inst_17603;
var tmp17750 = inst_17602;
var tmp17751 = inst_17601;
var inst_17601__$1 = tmp17751;
var inst_17602__$1 = tmp17750;
var inst_17603__$1 = tmp17749;
var inst_17604__$1 = inst_17624;
var state_17734__$1 = (function (){var statearr_17760 = state_17734;
(statearr_17760[(18)] = inst_17623);

(statearr_17760[(14)] = inst_17601__$1);

(statearr_17760[(15)] = inst_17602__$1);

(statearr_17760[(16)] = inst_17603__$1);

(statearr_17760[(17)] = inst_17604__$1);

return statearr_17760;
})();
var statearr_17762_20148 = state_17734__$1;
(statearr_17762_20148[(2)] = null);

(statearr_17762_20148[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17735 === (21))){
var inst_17650 = (state_17734[(2)]);
var state_17734__$1 = state_17734;
var statearr_17766_20151 = state_17734__$1;
(statearr_17766_20151[(2)] = inst_17650);

(statearr_17766_20151[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17735 === (31))){
var inst_17676 = (state_17734[(11)]);
var inst_17680 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17676);
var state_17734__$1 = state_17734;
var statearr_17768_20157 = state_17734__$1;
(statearr_17768_20157[(2)] = inst_17680);

(statearr_17768_20157[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17735 === (32))){
var inst_17671 = (state_17734[(10)]);
var inst_17668 = (state_17734[(19)]);
var inst_17669 = (state_17734[(9)]);
var inst_17670 = (state_17734[(20)]);
var inst_17682 = (state_17734[(2)]);
var inst_17684 = (inst_17671 + (1));
var tmp17763 = inst_17670;
var tmp17764 = inst_17669;
var tmp17765 = inst_17668;
var inst_17668__$1 = tmp17765;
var inst_17669__$1 = tmp17764;
var inst_17670__$1 = tmp17763;
var inst_17671__$1 = inst_17684;
var state_17734__$1 = (function (){var statearr_17769 = state_17734;
(statearr_17769[(21)] = inst_17682);

(statearr_17769[(19)] = inst_17668__$1);

(statearr_17769[(9)] = inst_17669__$1);

(statearr_17769[(20)] = inst_17670__$1);

(statearr_17769[(10)] = inst_17671__$1);

return statearr_17769;
})();
var statearr_17770_20159 = state_17734__$1;
(statearr_17770_20159[(2)] = null);

(statearr_17770_20159[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17735 === (40))){
var inst_17700 = (state_17734[(22)]);
var inst_17704 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17700);
var state_17734__$1 = state_17734;
var statearr_17771_20161 = state_17734__$1;
(statearr_17771_20161[(2)] = inst_17704);

(statearr_17771_20161[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17735 === (33))){
var inst_17687 = (state_17734[(23)]);
var inst_17690 = cljs.core.chunked_seq_QMARK_(inst_17687);
var state_17734__$1 = state_17734;
if(inst_17690){
var statearr_17772_20162 = state_17734__$1;
(statearr_17772_20162[(1)] = (36));

} else {
var statearr_17773_20164 = state_17734__$1;
(statearr_17773_20164[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17735 === (13))){
var inst_17617 = (state_17734[(24)]);
var inst_17620 = cljs.core.async.close_BANG_(inst_17617);
var state_17734__$1 = state_17734;
var statearr_17774_20165 = state_17734__$1;
(statearr_17774_20165[(2)] = inst_17620);

(statearr_17774_20165[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17735 === (22))){
var inst_17640 = (state_17734[(8)]);
var inst_17643 = cljs.core.async.close_BANG_(inst_17640);
var state_17734__$1 = state_17734;
var statearr_17775_20166 = state_17734__$1;
(statearr_17775_20166[(2)] = inst_17643);

(statearr_17775_20166[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17735 === (36))){
var inst_17687 = (state_17734[(23)]);
var inst_17695 = cljs.core.chunk_first(inst_17687);
var inst_17696 = cljs.core.chunk_rest(inst_17687);
var inst_17697 = cljs.core.count(inst_17695);
var inst_17668 = inst_17696;
var inst_17669 = inst_17695;
var inst_17670 = inst_17697;
var inst_17671 = (0);
var state_17734__$1 = (function (){var statearr_17779 = state_17734;
(statearr_17779[(19)] = inst_17668);

(statearr_17779[(9)] = inst_17669);

(statearr_17779[(20)] = inst_17670);

(statearr_17779[(10)] = inst_17671);

return statearr_17779;
})();
var statearr_17780_20175 = state_17734__$1;
(statearr_17780_20175[(2)] = null);

(statearr_17780_20175[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17735 === (41))){
var inst_17687 = (state_17734[(23)]);
var inst_17706 = (state_17734[(2)]);
var inst_17707 = cljs.core.next(inst_17687);
var inst_17668 = inst_17707;
var inst_17669 = null;
var inst_17670 = (0);
var inst_17671 = (0);
var state_17734__$1 = (function (){var statearr_17781 = state_17734;
(statearr_17781[(25)] = inst_17706);

(statearr_17781[(19)] = inst_17668);

(statearr_17781[(9)] = inst_17669);

(statearr_17781[(20)] = inst_17670);

(statearr_17781[(10)] = inst_17671);

return statearr_17781;
})();
var statearr_17782_20182 = state_17734__$1;
(statearr_17782_20182[(2)] = null);

(statearr_17782_20182[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17735 === (43))){
var state_17734__$1 = state_17734;
var statearr_17784_20183 = state_17734__$1;
(statearr_17784_20183[(2)] = null);

(statearr_17784_20183[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17735 === (29))){
var inst_17715 = (state_17734[(2)]);
var state_17734__$1 = state_17734;
var statearr_17785_20185 = state_17734__$1;
(statearr_17785_20185[(2)] = inst_17715);

(statearr_17785_20185[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17735 === (44))){
var inst_17724 = (state_17734[(2)]);
var state_17734__$1 = (function (){var statearr_17788 = state_17734;
(statearr_17788[(26)] = inst_17724);

return statearr_17788;
})();
var statearr_17789_20186 = state_17734__$1;
(statearr_17789_20186[(2)] = null);

(statearr_17789_20186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17735 === (6))){
var inst_17660 = (state_17734[(27)]);
var inst_17659 = cljs.core.deref(cs);
var inst_17660__$1 = cljs.core.keys(inst_17659);
var inst_17661 = cljs.core.count(inst_17660__$1);
var inst_17662 = cljs.core.reset_BANG_(dctr,inst_17661);
var inst_17667 = cljs.core.seq(inst_17660__$1);
var inst_17668 = inst_17667;
var inst_17669 = null;
var inst_17670 = (0);
var inst_17671 = (0);
var state_17734__$1 = (function (){var statearr_17791 = state_17734;
(statearr_17791[(27)] = inst_17660__$1);

(statearr_17791[(28)] = inst_17662);

(statearr_17791[(19)] = inst_17668);

(statearr_17791[(9)] = inst_17669);

(statearr_17791[(20)] = inst_17670);

(statearr_17791[(10)] = inst_17671);

return statearr_17791;
})();
var statearr_17792_20191 = state_17734__$1;
(statearr_17792_20191[(2)] = null);

(statearr_17792_20191[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17735 === (28))){
var inst_17668 = (state_17734[(19)]);
var inst_17687 = (state_17734[(23)]);
var inst_17687__$1 = cljs.core.seq(inst_17668);
var state_17734__$1 = (function (){var statearr_17793 = state_17734;
(statearr_17793[(23)] = inst_17687__$1);

return statearr_17793;
})();
if(inst_17687__$1){
var statearr_17794_20194 = state_17734__$1;
(statearr_17794_20194[(1)] = (33));

} else {
var statearr_17795_20195 = state_17734__$1;
(statearr_17795_20195[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17735 === (25))){
var inst_17671 = (state_17734[(10)]);
var inst_17670 = (state_17734[(20)]);
var inst_17673 = (inst_17671 < inst_17670);
var inst_17674 = inst_17673;
var state_17734__$1 = state_17734;
if(cljs.core.truth_(inst_17674)){
var statearr_17796_20196 = state_17734__$1;
(statearr_17796_20196[(1)] = (27));

} else {
var statearr_17797_20197 = state_17734__$1;
(statearr_17797_20197[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17735 === (34))){
var state_17734__$1 = state_17734;
var statearr_17801_20200 = state_17734__$1;
(statearr_17801_20200[(2)] = null);

(statearr_17801_20200[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17735 === (17))){
var state_17734__$1 = state_17734;
var statearr_17826_20204 = state_17734__$1;
(statearr_17826_20204[(2)] = null);

(statearr_17826_20204[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17735 === (3))){
var inst_17729 = (state_17734[(2)]);
var state_17734__$1 = state_17734;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17734__$1,inst_17729);
} else {
if((state_val_17735 === (12))){
var inst_17655 = (state_17734[(2)]);
var state_17734__$1 = state_17734;
var statearr_17827_20207 = state_17734__$1;
(statearr_17827_20207[(2)] = inst_17655);

(statearr_17827_20207[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17735 === (2))){
var state_17734__$1 = state_17734;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17734__$1,(4),ch);
} else {
if((state_val_17735 === (23))){
var state_17734__$1 = state_17734;
var statearr_17828_20209 = state_17734__$1;
(statearr_17828_20209[(2)] = null);

(statearr_17828_20209[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17735 === (35))){
var inst_17713 = (state_17734[(2)]);
var state_17734__$1 = state_17734;
var statearr_17829_20210 = state_17734__$1;
(statearr_17829_20210[(2)] = inst_17713);

(statearr_17829_20210[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17735 === (19))){
var inst_17627 = (state_17734[(7)]);
var inst_17631 = cljs.core.chunk_first(inst_17627);
var inst_17632 = cljs.core.chunk_rest(inst_17627);
var inst_17633 = cljs.core.count(inst_17631);
var inst_17601 = inst_17632;
var inst_17602 = inst_17631;
var inst_17603 = inst_17633;
var inst_17604 = (0);
var state_17734__$1 = (function (){var statearr_17834 = state_17734;
(statearr_17834[(14)] = inst_17601);

(statearr_17834[(15)] = inst_17602);

(statearr_17834[(16)] = inst_17603);

(statearr_17834[(17)] = inst_17604);

return statearr_17834;
})();
var statearr_17835_20212 = state_17734__$1;
(statearr_17835_20212[(2)] = null);

(statearr_17835_20212[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17735 === (11))){
var inst_17601 = (state_17734[(14)]);
var inst_17627 = (state_17734[(7)]);
var inst_17627__$1 = cljs.core.seq(inst_17601);
var state_17734__$1 = (function (){var statearr_17836 = state_17734;
(statearr_17836[(7)] = inst_17627__$1);

return statearr_17836;
})();
if(inst_17627__$1){
var statearr_17837_20214 = state_17734__$1;
(statearr_17837_20214[(1)] = (16));

} else {
var statearr_17838_20216 = state_17734__$1;
(statearr_17838_20216[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17735 === (9))){
var inst_17657 = (state_17734[(2)]);
var state_17734__$1 = state_17734;
var statearr_17840_20217 = state_17734__$1;
(statearr_17840_20217[(2)] = inst_17657);

(statearr_17840_20217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17735 === (5))){
var inst_17599 = cljs.core.deref(cs);
var inst_17600 = cljs.core.seq(inst_17599);
var inst_17601 = inst_17600;
var inst_17602 = null;
var inst_17603 = (0);
var inst_17604 = (0);
var state_17734__$1 = (function (){var statearr_17844 = state_17734;
(statearr_17844[(14)] = inst_17601);

(statearr_17844[(15)] = inst_17602);

(statearr_17844[(16)] = inst_17603);

(statearr_17844[(17)] = inst_17604);

return statearr_17844;
})();
var statearr_17849_20218 = state_17734__$1;
(statearr_17849_20218[(2)] = null);

(statearr_17849_20218[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17735 === (14))){
var state_17734__$1 = state_17734;
var statearr_17851_20221 = state_17734__$1;
(statearr_17851_20221[(2)] = null);

(statearr_17851_20221[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17735 === (45))){
var inst_17721 = (state_17734[(2)]);
var state_17734__$1 = state_17734;
var statearr_17853_20225 = state_17734__$1;
(statearr_17853_20225[(2)] = inst_17721);

(statearr_17853_20225[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17735 === (26))){
var inst_17660 = (state_17734[(27)]);
var inst_17717 = (state_17734[(2)]);
var inst_17718 = cljs.core.seq(inst_17660);
var state_17734__$1 = (function (){var statearr_17859 = state_17734;
(statearr_17859[(29)] = inst_17717);

return statearr_17859;
})();
if(inst_17718){
var statearr_17860_20228 = state_17734__$1;
(statearr_17860_20228[(1)] = (42));

} else {
var statearr_17861_20229 = state_17734__$1;
(statearr_17861_20229[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17735 === (16))){
var inst_17627 = (state_17734[(7)]);
var inst_17629 = cljs.core.chunked_seq_QMARK_(inst_17627);
var state_17734__$1 = state_17734;
if(inst_17629){
var statearr_17862_20234 = state_17734__$1;
(statearr_17862_20234[(1)] = (19));

} else {
var statearr_17863_20235 = state_17734__$1;
(statearr_17863_20235[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17735 === (38))){
var inst_17710 = (state_17734[(2)]);
var state_17734__$1 = state_17734;
var statearr_17864_20236 = state_17734__$1;
(statearr_17864_20236[(2)] = inst_17710);

(statearr_17864_20236[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17735 === (30))){
var state_17734__$1 = state_17734;
var statearr_17865_20237 = state_17734__$1;
(statearr_17865_20237[(2)] = null);

(statearr_17865_20237[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17735 === (10))){
var inst_17602 = (state_17734[(15)]);
var inst_17604 = (state_17734[(17)]);
var inst_17616 = cljs.core._nth(inst_17602,inst_17604);
var inst_17617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17616,(0),null);
var inst_17618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17616,(1),null);
var state_17734__$1 = (function (){var statearr_17866 = state_17734;
(statearr_17866[(24)] = inst_17617);

return statearr_17866;
})();
if(cljs.core.truth_(inst_17618)){
var statearr_17867_20238 = state_17734__$1;
(statearr_17867_20238[(1)] = (13));

} else {
var statearr_17869_20239 = state_17734__$1;
(statearr_17869_20239[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17735 === (18))){
var inst_17653 = (state_17734[(2)]);
var state_17734__$1 = state_17734;
var statearr_17878_20241 = state_17734__$1;
(statearr_17878_20241[(2)] = inst_17653);

(statearr_17878_20241[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17735 === (42))){
var state_17734__$1 = state_17734;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17734__$1,(45),dchan);
} else {
if((state_val_17735 === (37))){
var inst_17687 = (state_17734[(23)]);
var inst_17700 = (state_17734[(22)]);
var inst_17592 = (state_17734[(12)]);
var inst_17700__$1 = cljs.core.first(inst_17687);
var inst_17701 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17700__$1,inst_17592,done);
var state_17734__$1 = (function (){var statearr_17892 = state_17734;
(statearr_17892[(22)] = inst_17700__$1);

return statearr_17892;
})();
if(cljs.core.truth_(inst_17701)){
var statearr_17893_20242 = state_17734__$1;
(statearr_17893_20242[(1)] = (39));

} else {
var statearr_17894_20243 = state_17734__$1;
(statearr_17894_20243[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17735 === (8))){
var inst_17604 = (state_17734[(17)]);
var inst_17603 = (state_17734[(16)]);
var inst_17606 = (inst_17604 < inst_17603);
var inst_17607 = inst_17606;
var state_17734__$1 = state_17734;
if(cljs.core.truth_(inst_17607)){
var statearr_17895_20249 = state_17734__$1;
(statearr_17895_20249[(1)] = (10));

} else {
var statearr_17897_20250 = state_17734__$1;
(statearr_17897_20250[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__14730__auto__ = null;
var cljs$core$async$mult_$_state_machine__14730__auto____0 = (function (){
var statearr_17908 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17908[(0)] = cljs$core$async$mult_$_state_machine__14730__auto__);

(statearr_17908[(1)] = (1));

return statearr_17908;
});
var cljs$core$async$mult_$_state_machine__14730__auto____1 = (function (state_17734){
while(true){
var ret_value__14731__auto__ = (function (){try{while(true){
var result__14732__auto__ = switch__14729__auto__(state_17734);
if(cljs.core.keyword_identical_QMARK_(result__14732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14732__auto__;
}
break;
}
}catch (e17915){var ex__14733__auto__ = e17915;
var statearr_17916_20253 = state_17734;
(statearr_17916_20253[(2)] = ex__14733__auto__);


if(cljs.core.seq((state_17734[(4)]))){
var statearr_17917_20254 = state_17734;
(statearr_17917_20254[(1)] = cljs.core.first((state_17734[(4)])));

} else {
throw ex__14733__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20258 = state_17734;
state_17734 = G__20258;
continue;
} else {
return ret_value__14731__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14730__auto__ = function(state_17734){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14730__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14730__auto____1.call(this,state_17734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14730__auto____0;
cljs$core$async$mult_$_state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14730__auto____1;
return cljs$core$async$mult_$_state_machine__14730__auto__;
})()
})();
var state__16109__auto__ = (function (){var statearr_17926 = f__16108__auto__();
(statearr_17926[(6)] = c__16107__auto___20120);

return statearr_17926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16109__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__17932 = arguments.length;
switch (G__17932) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_20264 = (function (m,ch){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5520__auto__.call(null,m,ch));
} else {
var m__5518__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5518__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_20264(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_20265 = (function (m,ch){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5520__auto__.call(null,m,ch));
} else {
var m__5518__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5518__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_20265(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_20268 = (function (m){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5520__auto__.call(null,m));
} else {
var m__5518__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5518__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_20268(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_20269 = (function (m,state_map){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5520__auto__.call(null,m,state_map));
} else {
var m__5518__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5518__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_20269(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_20270 = (function (m,mode){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5520__auto__.call(null,m,mode));
} else {
var m__5518__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5518__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_20270(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5903__auto__ = [];
var len__5897__auto___20278 = arguments.length;
var i__5898__auto___20279 = (0);
while(true){
if((i__5898__auto___20279 < len__5897__auto___20278)){
args__5903__auto__.push((arguments[i__5898__auto___20279]));

var G__20280 = (i__5898__auto___20279 + (1));
i__5898__auto___20279 = G__20280;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((3) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5904__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__17954){
var map__17955 = p__17954;
var map__17955__$1 = cljs.core.__destructure_map(map__17955);
var opts = map__17955__$1;
var statearr_17959_20284 = state;
(statearr_17959_20284[(1)] = cont_block);


var temp__5825__auto__ = cljs.core.async.do_alts((function (val){
var statearr_17966_20287 = state;
(statearr_17966_20287[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5825__auto__)){
var cb = temp__5825__auto__;
var statearr_17971_20291 = state;
(statearr_17971_20291[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq17943){
var G__17944 = cljs.core.first(seq17943);
var seq17943__$1 = cljs.core.next(seq17943);
var G__17945 = cljs.core.first(seq17943__$1);
var seq17943__$2 = cljs.core.next(seq17943__$1);
var G__17946 = cljs.core.first(seq17943__$2);
var seq17943__$3 = cljs.core.next(seq17943__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17944,G__17945,G__17946,seq17943__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17984 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17985){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta17985 = meta17985;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17984.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17986,meta17985__$1){
var self__ = this;
var _17986__$1 = this;
return (new cljs.core.async.t_cljs$core$async17984(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta17985__$1));
}));

(cljs.core.async.t_cljs$core$async17984.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17986){
var self__ = this;
var _17986__$1 = this;
return self__.meta17985;
}));

(cljs.core.async.t_cljs$core$async17984.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17984.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async17984.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17984.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17984.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17984.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17984.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17984.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+"(solo-modes mode)")));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17984.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta17985","meta17985",1448296213,null)], null);
}));

(cljs.core.async.t_cljs$core$async17984.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17984.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17984");

(cljs.core.async.t_cljs$core$async17984.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async17984");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17984.
 */
cljs.core.async.__GT_t_cljs$core$async17984 = (function cljs$core$async$__GT_t_cljs$core$async17984(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17985){
return (new cljs.core.async.t_cljs$core$async17984(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17985));
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async17984(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__16107__auto___20300 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16108__auto__ = (function (){var switch__14729__auto__ = (function (state_18100){
var state_val_18102 = (state_18100[(1)]);
if((state_val_18102 === (7))){
var inst_18053 = (state_18100[(2)]);
var state_18100__$1 = state_18100;
if(cljs.core.truth_(inst_18053)){
var statearr_18120_20306 = state_18100__$1;
(statearr_18120_20306[(1)] = (8));

} else {
var statearr_18121_20307 = state_18100__$1;
(statearr_18121_20307[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18102 === (20))){
var inst_18043 = (state_18100[(7)]);
var state_18100__$1 = state_18100;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18100__$1,(23),out,inst_18043);
} else {
if((state_val_18102 === (1))){
var inst_18026 = calc_state();
var inst_18027 = cljs.core.__destructure_map(inst_18026);
var inst_18028 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18027,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18029 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18027,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18030 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18027,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18031 = inst_18026;
var state_18100__$1 = (function (){var statearr_18133 = state_18100;
(statearr_18133[(8)] = inst_18028);

(statearr_18133[(9)] = inst_18029);

(statearr_18133[(10)] = inst_18030);

(statearr_18133[(11)] = inst_18031);

return statearr_18133;
})();
var statearr_18135_20313 = state_18100__$1;
(statearr_18135_20313[(2)] = null);

(statearr_18135_20313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18102 === (24))){
var inst_18034 = (state_18100[(12)]);
var inst_18031 = inst_18034;
var state_18100__$1 = (function (){var statearr_18138 = state_18100;
(statearr_18138[(11)] = inst_18031);

return statearr_18138;
})();
var statearr_18142_20314 = state_18100__$1;
(statearr_18142_20314[(2)] = null);

(statearr_18142_20314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18102 === (4))){
var inst_18043 = (state_18100[(7)]);
var inst_18048 = (state_18100[(13)]);
var inst_18042 = (state_18100[(2)]);
var inst_18043__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18042,(0),null);
var inst_18044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18042,(1),null);
var inst_18048__$1 = (inst_18043__$1 == null);
var state_18100__$1 = (function (){var statearr_18153 = state_18100;
(statearr_18153[(7)] = inst_18043__$1);

(statearr_18153[(14)] = inst_18044);

(statearr_18153[(13)] = inst_18048__$1);

return statearr_18153;
})();
if(cljs.core.truth_(inst_18048__$1)){
var statearr_18157_20318 = state_18100__$1;
(statearr_18157_20318[(1)] = (5));

} else {
var statearr_18162_20319 = state_18100__$1;
(statearr_18162_20319[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18102 === (15))){
var inst_18035 = (state_18100[(15)]);
var inst_18071 = (state_18100[(16)]);
var inst_18071__$1 = cljs.core.empty_QMARK_(inst_18035);
var state_18100__$1 = (function (){var statearr_18164 = state_18100;
(statearr_18164[(16)] = inst_18071__$1);

return statearr_18164;
})();
if(inst_18071__$1){
var statearr_18165_20321 = state_18100__$1;
(statearr_18165_20321[(1)] = (17));

} else {
var statearr_18166_20322 = state_18100__$1;
(statearr_18166_20322[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18102 === (21))){
var inst_18034 = (state_18100[(12)]);
var inst_18031 = inst_18034;
var state_18100__$1 = (function (){var statearr_18170 = state_18100;
(statearr_18170[(11)] = inst_18031);

return statearr_18170;
})();
var statearr_18174_20323 = state_18100__$1;
(statearr_18174_20323[(2)] = null);

(statearr_18174_20323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18102 === (13))){
var inst_18062 = (state_18100[(2)]);
var inst_18063 = calc_state();
var inst_18031 = inst_18063;
var state_18100__$1 = (function (){var statearr_18176 = state_18100;
(statearr_18176[(17)] = inst_18062);

(statearr_18176[(11)] = inst_18031);

return statearr_18176;
})();
var statearr_18177_20325 = state_18100__$1;
(statearr_18177_20325[(2)] = null);

(statearr_18177_20325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18102 === (22))){
var inst_18091 = (state_18100[(2)]);
var state_18100__$1 = state_18100;
var statearr_18179_20326 = state_18100__$1;
(statearr_18179_20326[(2)] = inst_18091);

(statearr_18179_20326[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18102 === (6))){
var inst_18044 = (state_18100[(14)]);
var inst_18051 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18044,change);
var state_18100__$1 = state_18100;
var statearr_18180_20327 = state_18100__$1;
(statearr_18180_20327[(2)] = inst_18051);

(statearr_18180_20327[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18102 === (25))){
var state_18100__$1 = state_18100;
var statearr_18181_20328 = state_18100__$1;
(statearr_18181_20328[(2)] = null);

(statearr_18181_20328[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18102 === (17))){
var inst_18036 = (state_18100[(18)]);
var inst_18044 = (state_18100[(14)]);
var inst_18073 = (inst_18036.cljs$core$IFn$_invoke$arity$1 ? inst_18036.cljs$core$IFn$_invoke$arity$1(inst_18044) : inst_18036.call(null,inst_18044));
var inst_18074 = cljs.core.not(inst_18073);
var state_18100__$1 = state_18100;
var statearr_18185_20335 = state_18100__$1;
(statearr_18185_20335[(2)] = inst_18074);

(statearr_18185_20335[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18102 === (3))){
var inst_18095 = (state_18100[(2)]);
var state_18100__$1 = state_18100;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18100__$1,inst_18095);
} else {
if((state_val_18102 === (12))){
var state_18100__$1 = state_18100;
var statearr_18193_20336 = state_18100__$1;
(statearr_18193_20336[(2)] = null);

(statearr_18193_20336[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18102 === (2))){
var inst_18031 = (state_18100[(11)]);
var inst_18034 = (state_18100[(12)]);
var inst_18034__$1 = cljs.core.__destructure_map(inst_18031);
var inst_18035 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18034__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18036 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18034__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18037 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18034__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_18100__$1 = (function (){var statearr_18206 = state_18100;
(statearr_18206[(12)] = inst_18034__$1);

(statearr_18206[(15)] = inst_18035);

(statearr_18206[(18)] = inst_18036);

return statearr_18206;
})();
return cljs.core.async.ioc_alts_BANG_(state_18100__$1,(4),inst_18037);
} else {
if((state_val_18102 === (23))){
var inst_18082 = (state_18100[(2)]);
var state_18100__$1 = state_18100;
if(cljs.core.truth_(inst_18082)){
var statearr_18207_20339 = state_18100__$1;
(statearr_18207_20339[(1)] = (24));

} else {
var statearr_18208_20341 = state_18100__$1;
(statearr_18208_20341[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18102 === (19))){
var inst_18077 = (state_18100[(2)]);
var state_18100__$1 = state_18100;
var statearr_18210_20342 = state_18100__$1;
(statearr_18210_20342[(2)] = inst_18077);

(statearr_18210_20342[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18102 === (11))){
var inst_18044 = (state_18100[(14)]);
var inst_18059 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_18044);
var state_18100__$1 = state_18100;
var statearr_18211_20343 = state_18100__$1;
(statearr_18211_20343[(2)] = inst_18059);

(statearr_18211_20343[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18102 === (9))){
var inst_18035 = (state_18100[(15)]);
var inst_18044 = (state_18100[(14)]);
var inst_18068 = (state_18100[(19)]);
var inst_18068__$1 = (inst_18035.cljs$core$IFn$_invoke$arity$1 ? inst_18035.cljs$core$IFn$_invoke$arity$1(inst_18044) : inst_18035.call(null,inst_18044));
var state_18100__$1 = (function (){var statearr_18214 = state_18100;
(statearr_18214[(19)] = inst_18068__$1);

return statearr_18214;
})();
if(cljs.core.truth_(inst_18068__$1)){
var statearr_18215_20345 = state_18100__$1;
(statearr_18215_20345[(1)] = (14));

} else {
var statearr_18217_20346 = state_18100__$1;
(statearr_18217_20346[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18102 === (5))){
var inst_18048 = (state_18100[(13)]);
var state_18100__$1 = state_18100;
var statearr_18218_20347 = state_18100__$1;
(statearr_18218_20347[(2)] = inst_18048);

(statearr_18218_20347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18102 === (14))){
var inst_18068 = (state_18100[(19)]);
var state_18100__$1 = state_18100;
var statearr_18219_20348 = state_18100__$1;
(statearr_18219_20348[(2)] = inst_18068);

(statearr_18219_20348[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18102 === (26))){
var inst_18087 = (state_18100[(2)]);
var state_18100__$1 = state_18100;
var statearr_18224_20353 = state_18100__$1;
(statearr_18224_20353[(2)] = inst_18087);

(statearr_18224_20353[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18102 === (16))){
var inst_18079 = (state_18100[(2)]);
var state_18100__$1 = state_18100;
if(cljs.core.truth_(inst_18079)){
var statearr_18225_20354 = state_18100__$1;
(statearr_18225_20354[(1)] = (20));

} else {
var statearr_18226_20355 = state_18100__$1;
(statearr_18226_20355[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18102 === (10))){
var inst_18093 = (state_18100[(2)]);
var state_18100__$1 = state_18100;
var statearr_18228_20356 = state_18100__$1;
(statearr_18228_20356[(2)] = inst_18093);

(statearr_18228_20356[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18102 === (18))){
var inst_18071 = (state_18100[(16)]);
var state_18100__$1 = state_18100;
var statearr_18229_20357 = state_18100__$1;
(statearr_18229_20357[(2)] = inst_18071);

(statearr_18229_20357[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18102 === (8))){
var inst_18043 = (state_18100[(7)]);
var inst_18055 = (inst_18043 == null);
var state_18100__$1 = state_18100;
if(cljs.core.truth_(inst_18055)){
var statearr_18230_20358 = state_18100__$1;
(statearr_18230_20358[(1)] = (11));

} else {
var statearr_18232_20359 = state_18100__$1;
(statearr_18232_20359[(1)] = (12));

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
});
return (function() {
var cljs$core$async$mix_$_state_machine__14730__auto__ = null;
var cljs$core$async$mix_$_state_machine__14730__auto____0 = (function (){
var statearr_18234 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18234[(0)] = cljs$core$async$mix_$_state_machine__14730__auto__);

(statearr_18234[(1)] = (1));

return statearr_18234;
});
var cljs$core$async$mix_$_state_machine__14730__auto____1 = (function (state_18100){
while(true){
var ret_value__14731__auto__ = (function (){try{while(true){
var result__14732__auto__ = switch__14729__auto__(state_18100);
if(cljs.core.keyword_identical_QMARK_(result__14732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14732__auto__;
}
break;
}
}catch (e18235){var ex__14733__auto__ = e18235;
var statearr_18236_20360 = state_18100;
(statearr_18236_20360[(2)] = ex__14733__auto__);


if(cljs.core.seq((state_18100[(4)]))){
var statearr_18237_20362 = state_18100;
(statearr_18237_20362[(1)] = cljs.core.first((state_18100[(4)])));

} else {
throw ex__14733__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20363 = state_18100;
state_18100 = G__20363;
continue;
} else {
return ret_value__14731__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14730__auto__ = function(state_18100){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14730__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14730__auto____1.call(this,state_18100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14730__auto____0;
cljs$core$async$mix_$_state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14730__auto____1;
return cljs$core$async$mix_$_state_machine__14730__auto__;
})()
})();
var state__16109__auto__ = (function (){var statearr_18238 = f__16108__auto__();
(statearr_18238[(6)] = c__16107__auto___20300);

return statearr_18238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16109__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_20365 = (function (p,v,ch,close_QMARK_){
var x__5519__auto__ = (((p == null))?null:p);
var m__5520__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5520__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5518__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5518__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_20365(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_20367 = (function (p,v,ch){
var x__5519__auto__ = (((p == null))?null:p);
var m__5520__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5520__auto__.call(null,p,v,ch));
} else {
var m__5518__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5518__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_20367(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_20371 = (function() {
var G__20372 = null;
var G__20372__1 = (function (p){
var x__5519__auto__ = (((p == null))?null:p);
var m__5520__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5520__auto__.call(null,p));
} else {
var m__5518__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5518__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__20372__2 = (function (p,v){
var x__5519__auto__ = (((p == null))?null:p);
var m__5520__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5520__auto__.call(null,p,v));
} else {
var m__5518__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5518__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__20372 = function(p,v){
switch(arguments.length){
case 1:
return G__20372__1.call(this,p);
case 2:
return G__20372__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20372.cljs$core$IFn$_invoke$arity$1 = G__20372__1;
G__20372.cljs$core$IFn$_invoke$arity$2 = G__20372__2;
return G__20372;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__18276 = arguments.length;
switch (G__18276) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_20371(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_20371(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18335 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta18336){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta18336 = meta18336;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18335.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18337,meta18336__$1){
var self__ = this;
var _18337__$1 = this;
return (new cljs.core.async.t_cljs$core$async18335(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta18336__$1));
}));

(cljs.core.async.t_cljs$core$async18335.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18337){
var self__ = this;
var _18337__$1 = this;
return self__.meta18336;
}));

(cljs.core.async.t_cljs$core$async18335.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18335.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async18335.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18335.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async18335.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5825__auto__)){
var m = temp__5825__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async18335.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async18335.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async18335.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta18336","meta18336",951971849,null)], null);
}));

(cljs.core.async.t_cljs$core$async18335.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18335.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18335");

(cljs.core.async.t_cljs$core$async18335.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async18335");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18335.
 */
cljs.core.async.__GT_t_cljs$core$async18335 = (function cljs$core$async$__GT_t_cljs$core$async18335(ch,topic_fn,buf_fn,mults,ensure_mult,meta18336){
return (new cljs.core.async.t_cljs$core$async18335(ch,topic_fn,buf_fn,mults,ensure_mult,meta18336));
});


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
var G__18307 = arguments.length;
switch (G__18307) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5162__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__18292_SHARP_){
if(cljs.core.truth_((p1__18292_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__18292_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__18292_SHARP_.call(null,topic)))){
return p1__18292_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18292_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async18335(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__16107__auto___20420 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16108__auto__ = (function (){var switch__14729__auto__ = (function (state_18448){
var state_val_18449 = (state_18448[(1)]);
if((state_val_18449 === (7))){
var inst_18444 = (state_18448[(2)]);
var state_18448__$1 = state_18448;
var statearr_18456_20424 = state_18448__$1;
(statearr_18456_20424[(2)] = inst_18444);

(statearr_18456_20424[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18449 === (20))){
var state_18448__$1 = state_18448;
var statearr_18459_20426 = state_18448__$1;
(statearr_18459_20426[(2)] = null);

(statearr_18459_20426[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18449 === (1))){
var state_18448__$1 = state_18448;
var statearr_18460_20427 = state_18448__$1;
(statearr_18460_20427[(2)] = null);

(statearr_18460_20427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18449 === (24))){
var inst_18427 = (state_18448[(7)]);
var inst_18436 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_18427);
var state_18448__$1 = state_18448;
var statearr_18461_20431 = state_18448__$1;
(statearr_18461_20431[(2)] = inst_18436);

(statearr_18461_20431[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18449 === (4))){
var inst_18368 = (state_18448[(8)]);
var inst_18368__$1 = (state_18448[(2)]);
var inst_18370 = (inst_18368__$1 == null);
var state_18448__$1 = (function (){var statearr_18462 = state_18448;
(statearr_18462[(8)] = inst_18368__$1);

return statearr_18462;
})();
if(cljs.core.truth_(inst_18370)){
var statearr_18464_20432 = state_18448__$1;
(statearr_18464_20432[(1)] = (5));

} else {
var statearr_18465_20436 = state_18448__$1;
(statearr_18465_20436[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18449 === (15))){
var inst_18421 = (state_18448[(2)]);
var state_18448__$1 = state_18448;
var statearr_18466_20437 = state_18448__$1;
(statearr_18466_20437[(2)] = inst_18421);

(statearr_18466_20437[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18449 === (21))){
var inst_18441 = (state_18448[(2)]);
var state_18448__$1 = (function (){var statearr_18468 = state_18448;
(statearr_18468[(9)] = inst_18441);

return statearr_18468;
})();
var statearr_18469_20438 = state_18448__$1;
(statearr_18469_20438[(2)] = null);

(statearr_18469_20438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18449 === (13))){
var inst_18401 = (state_18448[(10)]);
var inst_18404 = cljs.core.chunked_seq_QMARK_(inst_18401);
var state_18448__$1 = state_18448;
if(inst_18404){
var statearr_18470_20440 = state_18448__$1;
(statearr_18470_20440[(1)] = (16));

} else {
var statearr_18471_20441 = state_18448__$1;
(statearr_18471_20441[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18449 === (22))){
var inst_18433 = (state_18448[(2)]);
var state_18448__$1 = state_18448;
if(cljs.core.truth_(inst_18433)){
var statearr_18472_20442 = state_18448__$1;
(statearr_18472_20442[(1)] = (23));

} else {
var statearr_18473_20443 = state_18448__$1;
(statearr_18473_20443[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18449 === (6))){
var inst_18368 = (state_18448[(8)]);
var inst_18427 = (state_18448[(7)]);
var inst_18429 = (state_18448[(11)]);
var inst_18427__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_18368) : topic_fn.call(null,inst_18368));
var inst_18428 = cljs.core.deref(mults);
var inst_18429__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18428,inst_18427__$1);
var state_18448__$1 = (function (){var statearr_18475 = state_18448;
(statearr_18475[(7)] = inst_18427__$1);

(statearr_18475[(11)] = inst_18429__$1);

return statearr_18475;
})();
if(cljs.core.truth_(inst_18429__$1)){
var statearr_18476_20444 = state_18448__$1;
(statearr_18476_20444[(1)] = (19));

} else {
var statearr_18477_20445 = state_18448__$1;
(statearr_18477_20445[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18449 === (25))){
var inst_18438 = (state_18448[(2)]);
var state_18448__$1 = state_18448;
var statearr_18478_20446 = state_18448__$1;
(statearr_18478_20446[(2)] = inst_18438);

(statearr_18478_20446[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18449 === (17))){
var inst_18401 = (state_18448[(10)]);
var inst_18412 = cljs.core.first(inst_18401);
var inst_18413 = cljs.core.async.muxch_STAR_(inst_18412);
var inst_18414 = cljs.core.async.close_BANG_(inst_18413);
var inst_18415 = cljs.core.next(inst_18401);
var inst_18381 = inst_18415;
var inst_18382 = null;
var inst_18383 = (0);
var inst_18384 = (0);
var state_18448__$1 = (function (){var statearr_18480 = state_18448;
(statearr_18480[(12)] = inst_18414);

(statearr_18480[(13)] = inst_18381);

(statearr_18480[(14)] = inst_18382);

(statearr_18480[(15)] = inst_18383);

(statearr_18480[(16)] = inst_18384);

return statearr_18480;
})();
var statearr_18481_20447 = state_18448__$1;
(statearr_18481_20447[(2)] = null);

(statearr_18481_20447[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18449 === (3))){
var inst_18446 = (state_18448[(2)]);
var state_18448__$1 = state_18448;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18448__$1,inst_18446);
} else {
if((state_val_18449 === (12))){
var inst_18423 = (state_18448[(2)]);
var state_18448__$1 = state_18448;
var statearr_18486_20448 = state_18448__$1;
(statearr_18486_20448[(2)] = inst_18423);

(statearr_18486_20448[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18449 === (2))){
var state_18448__$1 = state_18448;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18448__$1,(4),ch);
} else {
if((state_val_18449 === (23))){
var state_18448__$1 = state_18448;
var statearr_18488_20449 = state_18448__$1;
(statearr_18488_20449[(2)] = null);

(statearr_18488_20449[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18449 === (19))){
var inst_18429 = (state_18448[(11)]);
var inst_18368 = (state_18448[(8)]);
var inst_18431 = cljs.core.async.muxch_STAR_(inst_18429);
var state_18448__$1 = state_18448;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18448__$1,(22),inst_18431,inst_18368);
} else {
if((state_val_18449 === (11))){
var inst_18381 = (state_18448[(13)]);
var inst_18401 = (state_18448[(10)]);
var inst_18401__$1 = cljs.core.seq(inst_18381);
var state_18448__$1 = (function (){var statearr_18491 = state_18448;
(statearr_18491[(10)] = inst_18401__$1);

return statearr_18491;
})();
if(inst_18401__$1){
var statearr_18492_20450 = state_18448__$1;
(statearr_18492_20450[(1)] = (13));

} else {
var statearr_18493_20451 = state_18448__$1;
(statearr_18493_20451[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18449 === (9))){
var inst_18425 = (state_18448[(2)]);
var state_18448__$1 = state_18448;
var statearr_18495_20452 = state_18448__$1;
(statearr_18495_20452[(2)] = inst_18425);

(statearr_18495_20452[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18449 === (5))){
var inst_18377 = cljs.core.deref(mults);
var inst_18378 = cljs.core.vals(inst_18377);
var inst_18379 = cljs.core.seq(inst_18378);
var inst_18381 = inst_18379;
var inst_18382 = null;
var inst_18383 = (0);
var inst_18384 = (0);
var state_18448__$1 = (function (){var statearr_18496 = state_18448;
(statearr_18496[(13)] = inst_18381);

(statearr_18496[(14)] = inst_18382);

(statearr_18496[(15)] = inst_18383);

(statearr_18496[(16)] = inst_18384);

return statearr_18496;
})();
var statearr_18503_20453 = state_18448__$1;
(statearr_18503_20453[(2)] = null);

(statearr_18503_20453[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18449 === (14))){
var state_18448__$1 = state_18448;
var statearr_18510_20454 = state_18448__$1;
(statearr_18510_20454[(2)] = null);

(statearr_18510_20454[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18449 === (16))){
var inst_18401 = (state_18448[(10)]);
var inst_18406 = cljs.core.chunk_first(inst_18401);
var inst_18407 = cljs.core.chunk_rest(inst_18401);
var inst_18408 = cljs.core.count(inst_18406);
var inst_18381 = inst_18407;
var inst_18382 = inst_18406;
var inst_18383 = inst_18408;
var inst_18384 = (0);
var state_18448__$1 = (function (){var statearr_18511 = state_18448;
(statearr_18511[(13)] = inst_18381);

(statearr_18511[(14)] = inst_18382);

(statearr_18511[(15)] = inst_18383);

(statearr_18511[(16)] = inst_18384);

return statearr_18511;
})();
var statearr_18512_20455 = state_18448__$1;
(statearr_18512_20455[(2)] = null);

(statearr_18512_20455[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18449 === (10))){
var inst_18382 = (state_18448[(14)]);
var inst_18384 = (state_18448[(16)]);
var inst_18381 = (state_18448[(13)]);
var inst_18383 = (state_18448[(15)]);
var inst_18395 = cljs.core._nth(inst_18382,inst_18384);
var inst_18396 = cljs.core.async.muxch_STAR_(inst_18395);
var inst_18397 = cljs.core.async.close_BANG_(inst_18396);
var inst_18398 = (inst_18384 + (1));
var tmp18504 = inst_18382;
var tmp18505 = inst_18383;
var tmp18506 = inst_18381;
var inst_18381__$1 = tmp18506;
var inst_18382__$1 = tmp18504;
var inst_18383__$1 = tmp18505;
var inst_18384__$1 = inst_18398;
var state_18448__$1 = (function (){var statearr_18517 = state_18448;
(statearr_18517[(17)] = inst_18397);

(statearr_18517[(13)] = inst_18381__$1);

(statearr_18517[(14)] = inst_18382__$1);

(statearr_18517[(15)] = inst_18383__$1);

(statearr_18517[(16)] = inst_18384__$1);

return statearr_18517;
})();
var statearr_18518_20457 = state_18448__$1;
(statearr_18518_20457[(2)] = null);

(statearr_18518_20457[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18449 === (18))){
var inst_18418 = (state_18448[(2)]);
var state_18448__$1 = state_18448;
var statearr_18521_20458 = state_18448__$1;
(statearr_18521_20458[(2)] = inst_18418);

(statearr_18521_20458[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18449 === (8))){
var inst_18384 = (state_18448[(16)]);
var inst_18383 = (state_18448[(15)]);
var inst_18392 = (inst_18384 < inst_18383);
var inst_18393 = inst_18392;
var state_18448__$1 = state_18448;
if(cljs.core.truth_(inst_18393)){
var statearr_18522_20460 = state_18448__$1;
(statearr_18522_20460[(1)] = (10));

} else {
var statearr_18523_20461 = state_18448__$1;
(statearr_18523_20461[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__14730__auto__ = null;
var cljs$core$async$state_machine__14730__auto____0 = (function (){
var statearr_18533 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18533[(0)] = cljs$core$async$state_machine__14730__auto__);

(statearr_18533[(1)] = (1));

return statearr_18533;
});
var cljs$core$async$state_machine__14730__auto____1 = (function (state_18448){
while(true){
var ret_value__14731__auto__ = (function (){try{while(true){
var result__14732__auto__ = switch__14729__auto__(state_18448);
if(cljs.core.keyword_identical_QMARK_(result__14732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14732__auto__;
}
break;
}
}catch (e18535){var ex__14733__auto__ = e18535;
var statearr_18536_20465 = state_18448;
(statearr_18536_20465[(2)] = ex__14733__auto__);


if(cljs.core.seq((state_18448[(4)]))){
var statearr_18543_20466 = state_18448;
(statearr_18543_20466[(1)] = cljs.core.first((state_18448[(4)])));

} else {
throw ex__14733__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20467 = state_18448;
state_18448 = G__20467;
continue;
} else {
return ret_value__14731__auto__;
}
break;
}
});
cljs$core$async$state_machine__14730__auto__ = function(state_18448){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14730__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14730__auto____1.call(this,state_18448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14730__auto____0;
cljs$core$async$state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14730__auto____1;
return cljs$core$async$state_machine__14730__auto__;
})()
})();
var state__16109__auto__ = (function (){var statearr_18544 = f__16108__auto__();
(statearr_18544[(6)] = c__16107__auto___20420);

return statearr_18544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16109__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__18548 = arguments.length;
switch (G__18548) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__18562 = arguments.length;
switch (G__18562) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

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
var G__18565 = arguments.length;
switch (G__18565) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__16107__auto___20477 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16108__auto__ = (function (){var switch__14729__auto__ = (function (state_18618){
var state_val_18619 = (state_18618[(1)]);
if((state_val_18619 === (7))){
var state_18618__$1 = state_18618;
var statearr_18627_20479 = state_18618__$1;
(statearr_18627_20479[(2)] = null);

(statearr_18627_20479[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18619 === (1))){
var state_18618__$1 = state_18618;
var statearr_18631_20480 = state_18618__$1;
(statearr_18631_20480[(2)] = null);

(statearr_18631_20480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18619 === (4))){
var inst_18575 = (state_18618[(7)]);
var inst_18574 = (state_18618[(8)]);
var inst_18577 = (inst_18575 < inst_18574);
var state_18618__$1 = state_18618;
if(cljs.core.truth_(inst_18577)){
var statearr_18632_20482 = state_18618__$1;
(statearr_18632_20482[(1)] = (6));

} else {
var statearr_18633_20483 = state_18618__$1;
(statearr_18633_20483[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18619 === (15))){
var inst_18604 = (state_18618[(9)]);
var inst_18609 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_18604);
var state_18618__$1 = state_18618;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18618__$1,(17),out,inst_18609);
} else {
if((state_val_18619 === (13))){
var inst_18604 = (state_18618[(9)]);
var inst_18604__$1 = (state_18618[(2)]);
var inst_18605 = cljs.core.some(cljs.core.nil_QMARK_,inst_18604__$1);
var state_18618__$1 = (function (){var statearr_18634 = state_18618;
(statearr_18634[(9)] = inst_18604__$1);

return statearr_18634;
})();
if(cljs.core.truth_(inst_18605)){
var statearr_18635_20484 = state_18618__$1;
(statearr_18635_20484[(1)] = (14));

} else {
var statearr_18636_20485 = state_18618__$1;
(statearr_18636_20485[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18619 === (6))){
var state_18618__$1 = state_18618;
var statearr_18637_20486 = state_18618__$1;
(statearr_18637_20486[(2)] = null);

(statearr_18637_20486[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18619 === (17))){
var inst_18611 = (state_18618[(2)]);
var state_18618__$1 = (function (){var statearr_18645 = state_18618;
(statearr_18645[(10)] = inst_18611);

return statearr_18645;
})();
var statearr_18646_20487 = state_18618__$1;
(statearr_18646_20487[(2)] = null);

(statearr_18646_20487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18619 === (3))){
var inst_18616 = (state_18618[(2)]);
var state_18618__$1 = state_18618;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18618__$1,inst_18616);
} else {
if((state_val_18619 === (12))){
var _ = (function (){var statearr_18647 = state_18618;
(statearr_18647[(4)] = cljs.core.rest((state_18618[(4)])));

return statearr_18647;
})();
var state_18618__$1 = state_18618;
var ex18644 = (state_18618__$1[(2)]);
var statearr_18648_20491 = state_18618__$1;
(statearr_18648_20491[(5)] = ex18644);


if((ex18644 instanceof Object)){
var statearr_18649_20493 = state_18618__$1;
(statearr_18649_20493[(1)] = (11));

(statearr_18649_20493[(5)] = null);

} else {
throw ex18644;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18619 === (2))){
var inst_18573 = cljs.core.reset_BANG_(dctr,cnt);
var inst_18574 = cnt;
var inst_18575 = (0);
var state_18618__$1 = (function (){var statearr_18650 = state_18618;
(statearr_18650[(11)] = inst_18573);

(statearr_18650[(8)] = inst_18574);

(statearr_18650[(7)] = inst_18575);

return statearr_18650;
})();
var statearr_18651_20494 = state_18618__$1;
(statearr_18651_20494[(2)] = null);

(statearr_18651_20494[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18619 === (11))){
var inst_18583 = (state_18618[(2)]);
var inst_18584 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_18618__$1 = (function (){var statearr_18652 = state_18618;
(statearr_18652[(12)] = inst_18583);

return statearr_18652;
})();
var statearr_18653_20495 = state_18618__$1;
(statearr_18653_20495[(2)] = inst_18584);

(statearr_18653_20495[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18619 === (9))){
var inst_18575 = (state_18618[(7)]);
var _ = (function (){var statearr_18654 = state_18618;
(statearr_18654[(4)] = cljs.core.cons((12),(state_18618[(4)])));

return statearr_18654;
})();
var inst_18590 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_18575) : chs__$1.call(null,inst_18575));
var inst_18591 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_18575) : done.call(null,inst_18575));
var inst_18592 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_18590,inst_18591);
var ___$1 = (function (){var statearr_18655 = state_18618;
(statearr_18655[(4)] = cljs.core.rest((state_18618[(4)])));

return statearr_18655;
})();
var state_18618__$1 = state_18618;
var statearr_18656_20497 = state_18618__$1;
(statearr_18656_20497[(2)] = inst_18592);

(statearr_18656_20497[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18619 === (5))){
var inst_18602 = (state_18618[(2)]);
var state_18618__$1 = (function (){var statearr_18657 = state_18618;
(statearr_18657[(13)] = inst_18602);

return statearr_18657;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18618__$1,(13),dchan);
} else {
if((state_val_18619 === (14))){
var inst_18607 = cljs.core.async.close_BANG_(out);
var state_18618__$1 = state_18618;
var statearr_18658_20498 = state_18618__$1;
(statearr_18658_20498[(2)] = inst_18607);

(statearr_18658_20498[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18619 === (16))){
var inst_18614 = (state_18618[(2)]);
var state_18618__$1 = state_18618;
var statearr_18659_20500 = state_18618__$1;
(statearr_18659_20500[(2)] = inst_18614);

(statearr_18659_20500[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18619 === (10))){
var inst_18575 = (state_18618[(7)]);
var inst_18595 = (state_18618[(2)]);
var inst_18596 = (inst_18575 + (1));
var inst_18575__$1 = inst_18596;
var state_18618__$1 = (function (){var statearr_18660 = state_18618;
(statearr_18660[(14)] = inst_18595);

(statearr_18660[(7)] = inst_18575__$1);

return statearr_18660;
})();
var statearr_18661_20501 = state_18618__$1;
(statearr_18661_20501[(2)] = null);

(statearr_18661_20501[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18619 === (8))){
var inst_18600 = (state_18618[(2)]);
var state_18618__$1 = state_18618;
var statearr_18662_20505 = state_18618__$1;
(statearr_18662_20505[(2)] = inst_18600);

(statearr_18662_20505[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__14730__auto__ = null;
var cljs$core$async$state_machine__14730__auto____0 = (function (){
var statearr_18666 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18666[(0)] = cljs$core$async$state_machine__14730__auto__);

(statearr_18666[(1)] = (1));

return statearr_18666;
});
var cljs$core$async$state_machine__14730__auto____1 = (function (state_18618){
while(true){
var ret_value__14731__auto__ = (function (){try{while(true){
var result__14732__auto__ = switch__14729__auto__(state_18618);
if(cljs.core.keyword_identical_QMARK_(result__14732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14732__auto__;
}
break;
}
}catch (e18668){var ex__14733__auto__ = e18668;
var statearr_18669_20506 = state_18618;
(statearr_18669_20506[(2)] = ex__14733__auto__);


if(cljs.core.seq((state_18618[(4)]))){
var statearr_18670_20507 = state_18618;
(statearr_18670_20507[(1)] = cljs.core.first((state_18618[(4)])));

} else {
throw ex__14733__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20509 = state_18618;
state_18618 = G__20509;
continue;
} else {
return ret_value__14731__auto__;
}
break;
}
});
cljs$core$async$state_machine__14730__auto__ = function(state_18618){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14730__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14730__auto____1.call(this,state_18618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14730__auto____0;
cljs$core$async$state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14730__auto____1;
return cljs$core$async$state_machine__14730__auto__;
})()
})();
var state__16109__auto__ = (function (){var statearr_18672 = f__16108__auto__();
(statearr_18672[(6)] = c__16107__auto___20477);

return statearr_18672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16109__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__18676 = arguments.length;
switch (G__18676) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16107__auto___20514 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16108__auto__ = (function (){var switch__14729__auto__ = (function (state_18730){
var state_val_18731 = (state_18730[(1)]);
if((state_val_18731 === (7))){
var inst_18697 = (state_18730[(7)]);
var inst_18698 = (state_18730[(8)]);
var inst_18697__$1 = (state_18730[(2)]);
var inst_18698__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18697__$1,(0),null);
var inst_18699 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18697__$1,(1),null);
var inst_18700 = (inst_18698__$1 == null);
var state_18730__$1 = (function (){var statearr_18736 = state_18730;
(statearr_18736[(7)] = inst_18697__$1);

(statearr_18736[(8)] = inst_18698__$1);

(statearr_18736[(9)] = inst_18699);

return statearr_18736;
})();
if(cljs.core.truth_(inst_18700)){
var statearr_18737_20516 = state_18730__$1;
(statearr_18737_20516[(1)] = (8));

} else {
var statearr_18738_20517 = state_18730__$1;
(statearr_18738_20517[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18731 === (1))){
var inst_18684 = cljs.core.vec(chs);
var inst_18685 = inst_18684;
var state_18730__$1 = (function (){var statearr_18739 = state_18730;
(statearr_18739[(10)] = inst_18685);

return statearr_18739;
})();
var statearr_18740_20518 = state_18730__$1;
(statearr_18740_20518[(2)] = null);

(statearr_18740_20518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18731 === (4))){
var inst_18685 = (state_18730[(10)]);
var state_18730__$1 = state_18730;
return cljs.core.async.ioc_alts_BANG_(state_18730__$1,(7),inst_18685);
} else {
if((state_val_18731 === (6))){
var inst_18720 = (state_18730[(2)]);
var state_18730__$1 = state_18730;
var statearr_18742_20519 = state_18730__$1;
(statearr_18742_20519[(2)] = inst_18720);

(statearr_18742_20519[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18731 === (3))){
var inst_18722 = (state_18730[(2)]);
var state_18730__$1 = state_18730;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18730__$1,inst_18722);
} else {
if((state_val_18731 === (2))){
var inst_18685 = (state_18730[(10)]);
var inst_18690 = cljs.core.count(inst_18685);
var inst_18691 = (inst_18690 > (0));
var state_18730__$1 = state_18730;
if(cljs.core.truth_(inst_18691)){
var statearr_18746_20520 = state_18730__$1;
(statearr_18746_20520[(1)] = (4));

} else {
var statearr_18747_20522 = state_18730__$1;
(statearr_18747_20522[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18731 === (11))){
var inst_18685 = (state_18730[(10)]);
var inst_18713 = (state_18730[(2)]);
var tmp18743 = inst_18685;
var inst_18685__$1 = tmp18743;
var state_18730__$1 = (function (){var statearr_18751 = state_18730;
(statearr_18751[(11)] = inst_18713);

(statearr_18751[(10)] = inst_18685__$1);

return statearr_18751;
})();
var statearr_18752_20523 = state_18730__$1;
(statearr_18752_20523[(2)] = null);

(statearr_18752_20523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18731 === (9))){
var inst_18698 = (state_18730[(8)]);
var state_18730__$1 = state_18730;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18730__$1,(11),out,inst_18698);
} else {
if((state_val_18731 === (5))){
var inst_18718 = cljs.core.async.close_BANG_(out);
var state_18730__$1 = state_18730;
var statearr_18754_20524 = state_18730__$1;
(statearr_18754_20524[(2)] = inst_18718);

(statearr_18754_20524[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18731 === (10))){
var inst_18716 = (state_18730[(2)]);
var state_18730__$1 = state_18730;
var statearr_18755_20525 = state_18730__$1;
(statearr_18755_20525[(2)] = inst_18716);

(statearr_18755_20525[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18731 === (8))){
var inst_18685 = (state_18730[(10)]);
var inst_18697 = (state_18730[(7)]);
var inst_18698 = (state_18730[(8)]);
var inst_18699 = (state_18730[(9)]);
var inst_18708 = (function (){var cs = inst_18685;
var vec__18693 = inst_18697;
var v = inst_18698;
var c = inst_18699;
return (function (p1__18673_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__18673_SHARP_);
});
})();
var inst_18709 = cljs.core.filterv(inst_18708,inst_18685);
var inst_18685__$1 = inst_18709;
var state_18730__$1 = (function (){var statearr_18760 = state_18730;
(statearr_18760[(10)] = inst_18685__$1);

return statearr_18760;
})();
var statearr_18761_20526 = state_18730__$1;
(statearr_18761_20526[(2)] = null);

(statearr_18761_20526[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__14730__auto__ = null;
var cljs$core$async$state_machine__14730__auto____0 = (function (){
var statearr_18765 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18765[(0)] = cljs$core$async$state_machine__14730__auto__);

(statearr_18765[(1)] = (1));

return statearr_18765;
});
var cljs$core$async$state_machine__14730__auto____1 = (function (state_18730){
while(true){
var ret_value__14731__auto__ = (function (){try{while(true){
var result__14732__auto__ = switch__14729__auto__(state_18730);
if(cljs.core.keyword_identical_QMARK_(result__14732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14732__auto__;
}
break;
}
}catch (e18766){var ex__14733__auto__ = e18766;
var statearr_18767_20527 = state_18730;
(statearr_18767_20527[(2)] = ex__14733__auto__);


if(cljs.core.seq((state_18730[(4)]))){
var statearr_18768_20528 = state_18730;
(statearr_18768_20528[(1)] = cljs.core.first((state_18730[(4)])));

} else {
throw ex__14733__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20529 = state_18730;
state_18730 = G__20529;
continue;
} else {
return ret_value__14731__auto__;
}
break;
}
});
cljs$core$async$state_machine__14730__auto__ = function(state_18730){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14730__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14730__auto____1.call(this,state_18730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14730__auto____0;
cljs$core$async$state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14730__auto____1;
return cljs$core$async$state_machine__14730__auto__;
})()
})();
var state__16109__auto__ = (function (){var statearr_18769 = f__16108__auto__();
(statearr_18769[(6)] = c__16107__auto___20514);

return statearr_18769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16109__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__18781 = arguments.length;
switch (G__18781) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16107__auto___20534 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16108__auto__ = (function (){var switch__14729__auto__ = (function (state_18815){
var state_val_18816 = (state_18815[(1)]);
if((state_val_18816 === (7))){
var inst_18794 = (state_18815[(7)]);
var inst_18794__$1 = (state_18815[(2)]);
var inst_18795 = (inst_18794__$1 == null);
var inst_18796 = cljs.core.not(inst_18795);
var state_18815__$1 = (function (){var statearr_18817 = state_18815;
(statearr_18817[(7)] = inst_18794__$1);

return statearr_18817;
})();
if(inst_18796){
var statearr_18818_20535 = state_18815__$1;
(statearr_18818_20535[(1)] = (8));

} else {
var statearr_18819_20536 = state_18815__$1;
(statearr_18819_20536[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18816 === (1))){
var inst_18789 = (0);
var state_18815__$1 = (function (){var statearr_18820 = state_18815;
(statearr_18820[(8)] = inst_18789);

return statearr_18820;
})();
var statearr_18821_20537 = state_18815__$1;
(statearr_18821_20537[(2)] = null);

(statearr_18821_20537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18816 === (4))){
var state_18815__$1 = state_18815;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18815__$1,(7),ch);
} else {
if((state_val_18816 === (6))){
var inst_18810 = (state_18815[(2)]);
var state_18815__$1 = state_18815;
var statearr_18822_20538 = state_18815__$1;
(statearr_18822_20538[(2)] = inst_18810);

(statearr_18822_20538[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18816 === (3))){
var inst_18812 = (state_18815[(2)]);
var inst_18813 = cljs.core.async.close_BANG_(out);
var state_18815__$1 = (function (){var statearr_18823 = state_18815;
(statearr_18823[(9)] = inst_18812);

return statearr_18823;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18815__$1,inst_18813);
} else {
if((state_val_18816 === (2))){
var inst_18789 = (state_18815[(8)]);
var inst_18791 = (inst_18789 < n);
var state_18815__$1 = state_18815;
if(cljs.core.truth_(inst_18791)){
var statearr_18830_20539 = state_18815__$1;
(statearr_18830_20539[(1)] = (4));

} else {
var statearr_18831_20540 = state_18815__$1;
(statearr_18831_20540[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18816 === (11))){
var inst_18789 = (state_18815[(8)]);
var inst_18802 = (state_18815[(2)]);
var inst_18803 = (inst_18789 + (1));
var inst_18789__$1 = inst_18803;
var state_18815__$1 = (function (){var statearr_18833 = state_18815;
(statearr_18833[(10)] = inst_18802);

(statearr_18833[(8)] = inst_18789__$1);

return statearr_18833;
})();
var statearr_18834_20541 = state_18815__$1;
(statearr_18834_20541[(2)] = null);

(statearr_18834_20541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18816 === (9))){
var state_18815__$1 = state_18815;
var statearr_18835_20543 = state_18815__$1;
(statearr_18835_20543[(2)] = null);

(statearr_18835_20543[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18816 === (5))){
var state_18815__$1 = state_18815;
var statearr_18836_20545 = state_18815__$1;
(statearr_18836_20545[(2)] = null);

(statearr_18836_20545[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18816 === (10))){
var inst_18807 = (state_18815[(2)]);
var state_18815__$1 = state_18815;
var statearr_18837_20546 = state_18815__$1;
(statearr_18837_20546[(2)] = inst_18807);

(statearr_18837_20546[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18816 === (8))){
var inst_18794 = (state_18815[(7)]);
var state_18815__$1 = state_18815;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18815__$1,(11),out,inst_18794);
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
});
return (function() {
var cljs$core$async$state_machine__14730__auto__ = null;
var cljs$core$async$state_machine__14730__auto____0 = (function (){
var statearr_18838 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18838[(0)] = cljs$core$async$state_machine__14730__auto__);

(statearr_18838[(1)] = (1));

return statearr_18838;
});
var cljs$core$async$state_machine__14730__auto____1 = (function (state_18815){
while(true){
var ret_value__14731__auto__ = (function (){try{while(true){
var result__14732__auto__ = switch__14729__auto__(state_18815);
if(cljs.core.keyword_identical_QMARK_(result__14732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14732__auto__;
}
break;
}
}catch (e18840){var ex__14733__auto__ = e18840;
var statearr_18841_20548 = state_18815;
(statearr_18841_20548[(2)] = ex__14733__auto__);


if(cljs.core.seq((state_18815[(4)]))){
var statearr_18842_20549 = state_18815;
(statearr_18842_20549[(1)] = cljs.core.first((state_18815[(4)])));

} else {
throw ex__14733__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20550 = state_18815;
state_18815 = G__20550;
continue;
} else {
return ret_value__14731__auto__;
}
break;
}
});
cljs$core$async$state_machine__14730__auto__ = function(state_18815){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14730__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14730__auto____1.call(this,state_18815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14730__auto____0;
cljs$core$async$state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14730__auto____1;
return cljs$core$async$state_machine__14730__auto__;
})()
})();
var state__16109__auto__ = (function (){var statearr_18843 = f__16108__auto__();
(statearr_18843[(6)] = c__16107__auto___20534);

return statearr_18843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16109__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18859 = (function (f,ch,meta18847,_,fn1,meta18860){
this.f = f;
this.ch = ch;
this.meta18847 = meta18847;
this._ = _;
this.fn1 = fn1;
this.meta18860 = meta18860;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18859.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18861,meta18860__$1){
var self__ = this;
var _18861__$1 = this;
return (new cljs.core.async.t_cljs$core$async18859(self__.f,self__.ch,self__.meta18847,self__._,self__.fn1,meta18860__$1));
}));

(cljs.core.async.t_cljs$core$async18859.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18861){
var self__ = this;
var _18861__$1 = this;
return self__.meta18860;
}));

(cljs.core.async.t_cljs$core$async18859.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18859.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async18859.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18859.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__18845_SHARP_){
var G__18863 = (((p1__18845_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__18845_SHARP_) : self__.f.call(null,p1__18845_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__18863) : f1.call(null,G__18863));
});
}));

(cljs.core.async.t_cljs$core$async18859.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18847","meta18847",31502751,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async18846","cljs.core.async/t_cljs$core$async18846",-2088582538,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta18860","meta18860",-2089489307,null)], null);
}));

(cljs.core.async.t_cljs$core$async18859.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18859.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18859");

(cljs.core.async.t_cljs$core$async18859.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async18859");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18859.
 */
cljs.core.async.__GT_t_cljs$core$async18859 = (function cljs$core$async$__GT_t_cljs$core$async18859(f,ch,meta18847,_,fn1,meta18860){
return (new cljs.core.async.t_cljs$core$async18859(f,ch,meta18847,_,fn1,meta18860));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18846 = (function (f,ch,meta18847){
this.f = f;
this.ch = ch;
this.meta18847 = meta18847;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18846.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18848,meta18847__$1){
var self__ = this;
var _18848__$1 = this;
return (new cljs.core.async.t_cljs$core$async18846(self__.f,self__.ch,meta18847__$1));
}));

(cljs.core.async.t_cljs$core$async18846.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18848){
var self__ = this;
var _18848__$1 = this;
return self__.meta18847;
}));

(cljs.core.async.t_cljs$core$async18846.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18846.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18846.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18846.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18846.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async18859(self__.f,self__.ch,self__.meta18847,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5160__auto__ = ret;
if(cljs.core.truth_(and__5160__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5160__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__18865 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__18865) : self__.f.call(null,G__18865));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async18846.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18846.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async18846.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18847","meta18847",31502751,null)], null);
}));

(cljs.core.async.t_cljs$core$async18846.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18846.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18846");

(cljs.core.async.t_cljs$core$async18846.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async18846");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18846.
 */
cljs.core.async.__GT_t_cljs$core$async18846 = (function cljs$core$async$__GT_t_cljs$core$async18846(f,ch,meta18847){
return (new cljs.core.async.t_cljs$core$async18846(f,ch,meta18847));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async18846(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18870 = (function (f,ch,meta18871){
this.f = f;
this.ch = ch;
this.meta18871 = meta18871;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18870.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18872,meta18871__$1){
var self__ = this;
var _18872__$1 = this;
return (new cljs.core.async.t_cljs$core$async18870(self__.f,self__.ch,meta18871__$1));
}));

(cljs.core.async.t_cljs$core$async18870.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18872){
var self__ = this;
var _18872__$1 = this;
return self__.meta18871;
}));

(cljs.core.async.t_cljs$core$async18870.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18870.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18870.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18870.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async18870.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18870.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async18870.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18871","meta18871",-1919806824,null)], null);
}));

(cljs.core.async.t_cljs$core$async18870.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18870.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18870");

(cljs.core.async.t_cljs$core$async18870.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async18870");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18870.
 */
cljs.core.async.__GT_t_cljs$core$async18870 = (function cljs$core$async$__GT_t_cljs$core$async18870(f,ch,meta18871){
return (new cljs.core.async.t_cljs$core$async18870(f,ch,meta18871));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async18870(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18876 = (function (p,ch,meta18877){
this.p = p;
this.ch = ch;
this.meta18877 = meta18877;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18876.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18878,meta18877__$1){
var self__ = this;
var _18878__$1 = this;
return (new cljs.core.async.t_cljs$core$async18876(self__.p,self__.ch,meta18877__$1));
}));

(cljs.core.async.t_cljs$core$async18876.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18878){
var self__ = this;
var _18878__$1 = this;
return self__.meta18877;
}));

(cljs.core.async.t_cljs$core$async18876.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18876.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18876.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18876.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18876.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async18876.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18876.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async18876.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18877","meta18877",-905771380,null)], null);
}));

(cljs.core.async.t_cljs$core$async18876.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18876.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18876");

(cljs.core.async.t_cljs$core$async18876.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async18876");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18876.
 */
cljs.core.async.__GT_t_cljs$core$async18876 = (function cljs$core$async$__GT_t_cljs$core$async18876(p,ch,meta18877){
return (new cljs.core.async.t_cljs$core$async18876(p,ch,meta18877));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async18876(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__18883 = arguments.length;
switch (G__18883) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16107__auto___20563 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16108__auto__ = (function (){var switch__14729__auto__ = (function (state_18904){
var state_val_18905 = (state_18904[(1)]);
if((state_val_18905 === (7))){
var inst_18900 = (state_18904[(2)]);
var state_18904__$1 = state_18904;
var statearr_18906_20567 = state_18904__$1;
(statearr_18906_20567[(2)] = inst_18900);

(statearr_18906_20567[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18905 === (1))){
var state_18904__$1 = state_18904;
var statearr_18907_20568 = state_18904__$1;
(statearr_18907_20568[(2)] = null);

(statearr_18907_20568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18905 === (4))){
var inst_18886 = (state_18904[(7)]);
var inst_18886__$1 = (state_18904[(2)]);
var inst_18887 = (inst_18886__$1 == null);
var state_18904__$1 = (function (){var statearr_18908 = state_18904;
(statearr_18908[(7)] = inst_18886__$1);

return statearr_18908;
})();
if(cljs.core.truth_(inst_18887)){
var statearr_18909_20570 = state_18904__$1;
(statearr_18909_20570[(1)] = (5));

} else {
var statearr_18910_20571 = state_18904__$1;
(statearr_18910_20571[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18905 === (6))){
var inst_18886 = (state_18904[(7)]);
var inst_18891 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18886) : p.call(null,inst_18886));
var state_18904__$1 = state_18904;
if(cljs.core.truth_(inst_18891)){
var statearr_18911_20578 = state_18904__$1;
(statearr_18911_20578[(1)] = (8));

} else {
var statearr_18912_20579 = state_18904__$1;
(statearr_18912_20579[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18905 === (3))){
var inst_18902 = (state_18904[(2)]);
var state_18904__$1 = state_18904;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18904__$1,inst_18902);
} else {
if((state_val_18905 === (2))){
var state_18904__$1 = state_18904;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18904__$1,(4),ch);
} else {
if((state_val_18905 === (11))){
var inst_18894 = (state_18904[(2)]);
var state_18904__$1 = state_18904;
var statearr_18913_20580 = state_18904__$1;
(statearr_18913_20580[(2)] = inst_18894);

(statearr_18913_20580[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18905 === (9))){
var state_18904__$1 = state_18904;
var statearr_18918_20581 = state_18904__$1;
(statearr_18918_20581[(2)] = null);

(statearr_18918_20581[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18905 === (5))){
var inst_18889 = cljs.core.async.close_BANG_(out);
var state_18904__$1 = state_18904;
var statearr_18919_20583 = state_18904__$1;
(statearr_18919_20583[(2)] = inst_18889);

(statearr_18919_20583[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18905 === (10))){
var inst_18897 = (state_18904[(2)]);
var state_18904__$1 = (function (){var statearr_18920 = state_18904;
(statearr_18920[(8)] = inst_18897);

return statearr_18920;
})();
var statearr_18921_20584 = state_18904__$1;
(statearr_18921_20584[(2)] = null);

(statearr_18921_20584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18905 === (8))){
var inst_18886 = (state_18904[(7)]);
var state_18904__$1 = state_18904;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18904__$1,(11),out,inst_18886);
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
});
return (function() {
var cljs$core$async$state_machine__14730__auto__ = null;
var cljs$core$async$state_machine__14730__auto____0 = (function (){
var statearr_18922 = [null,null,null,null,null,null,null,null,null];
(statearr_18922[(0)] = cljs$core$async$state_machine__14730__auto__);

(statearr_18922[(1)] = (1));

return statearr_18922;
});
var cljs$core$async$state_machine__14730__auto____1 = (function (state_18904){
while(true){
var ret_value__14731__auto__ = (function (){try{while(true){
var result__14732__auto__ = switch__14729__auto__(state_18904);
if(cljs.core.keyword_identical_QMARK_(result__14732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14732__auto__;
}
break;
}
}catch (e18923){var ex__14733__auto__ = e18923;
var statearr_18924_20585 = state_18904;
(statearr_18924_20585[(2)] = ex__14733__auto__);


if(cljs.core.seq((state_18904[(4)]))){
var statearr_18928_20586 = state_18904;
(statearr_18928_20586[(1)] = cljs.core.first((state_18904[(4)])));

} else {
throw ex__14733__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20587 = state_18904;
state_18904 = G__20587;
continue;
} else {
return ret_value__14731__auto__;
}
break;
}
});
cljs$core$async$state_machine__14730__auto__ = function(state_18904){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14730__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14730__auto____1.call(this,state_18904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14730__auto____0;
cljs$core$async$state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14730__auto____1;
return cljs$core$async$state_machine__14730__auto__;
})()
})();
var state__16109__auto__ = (function (){var statearr_18929 = f__16108__auto__();
(statearr_18929[(6)] = c__16107__auto___20563);

return statearr_18929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16109__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__18931 = arguments.length;
switch (G__18931) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__16107__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16108__auto__ = (function (){var switch__14729__auto__ = (function (state_19000){
var state_val_19002 = (state_19000[(1)]);
if((state_val_19002 === (7))){
var inst_18996 = (state_19000[(2)]);
var state_19000__$1 = state_19000;
var statearr_19015_20593 = state_19000__$1;
(statearr_19015_20593[(2)] = inst_18996);

(statearr_19015_20593[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19002 === (20))){
var inst_18964 = (state_19000[(7)]);
var inst_18976 = (state_19000[(2)]);
var inst_18978 = cljs.core.next(inst_18964);
var inst_18948 = inst_18978;
var inst_18949 = null;
var inst_18950 = (0);
var inst_18951 = (0);
var state_19000__$1 = (function (){var statearr_19019 = state_19000;
(statearr_19019[(8)] = inst_18976);

(statearr_19019[(9)] = inst_18948);

(statearr_19019[(10)] = inst_18949);

(statearr_19019[(11)] = inst_18950);

(statearr_19019[(12)] = inst_18951);

return statearr_19019;
})();
var statearr_19020_20595 = state_19000__$1;
(statearr_19020_20595[(2)] = null);

(statearr_19020_20595[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19002 === (1))){
var state_19000__$1 = state_19000;
var statearr_19021_20596 = state_19000__$1;
(statearr_19021_20596[(2)] = null);

(statearr_19021_20596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19002 === (4))){
var inst_18937 = (state_19000[(13)]);
var inst_18937__$1 = (state_19000[(2)]);
var inst_18938 = (inst_18937__$1 == null);
var state_19000__$1 = (function (){var statearr_19040 = state_19000;
(statearr_19040[(13)] = inst_18937__$1);

return statearr_19040;
})();
if(cljs.core.truth_(inst_18938)){
var statearr_19041_20597 = state_19000__$1;
(statearr_19041_20597[(1)] = (5));

} else {
var statearr_19042_20598 = state_19000__$1;
(statearr_19042_20598[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19002 === (15))){
var state_19000__$1 = state_19000;
var statearr_19047_20600 = state_19000__$1;
(statearr_19047_20600[(2)] = null);

(statearr_19047_20600[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19002 === (21))){
var state_19000__$1 = state_19000;
var statearr_19048_20601 = state_19000__$1;
(statearr_19048_20601[(2)] = null);

(statearr_19048_20601[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19002 === (13))){
var inst_18951 = (state_19000[(12)]);
var inst_18948 = (state_19000[(9)]);
var inst_18949 = (state_19000[(10)]);
var inst_18950 = (state_19000[(11)]);
var inst_18960 = (state_19000[(2)]);
var inst_18961 = (inst_18951 + (1));
var tmp19043 = inst_18948;
var tmp19044 = inst_18950;
var tmp19045 = inst_18949;
var inst_18948__$1 = tmp19043;
var inst_18949__$1 = tmp19045;
var inst_18950__$1 = tmp19044;
var inst_18951__$1 = inst_18961;
var state_19000__$1 = (function (){var statearr_19049 = state_19000;
(statearr_19049[(14)] = inst_18960);

(statearr_19049[(9)] = inst_18948__$1);

(statearr_19049[(10)] = inst_18949__$1);

(statearr_19049[(11)] = inst_18950__$1);

(statearr_19049[(12)] = inst_18951__$1);

return statearr_19049;
})();
var statearr_19050_20602 = state_19000__$1;
(statearr_19050_20602[(2)] = null);

(statearr_19050_20602[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19002 === (22))){
var state_19000__$1 = state_19000;
var statearr_19051_20603 = state_19000__$1;
(statearr_19051_20603[(2)] = null);

(statearr_19051_20603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19002 === (6))){
var inst_18937 = (state_19000[(13)]);
var inst_18946 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18937) : f.call(null,inst_18937));
var inst_18947 = cljs.core.seq(inst_18946);
var inst_18948 = inst_18947;
var inst_18949 = null;
var inst_18950 = (0);
var inst_18951 = (0);
var state_19000__$1 = (function (){var statearr_19068 = state_19000;
(statearr_19068[(9)] = inst_18948);

(statearr_19068[(10)] = inst_18949);

(statearr_19068[(11)] = inst_18950);

(statearr_19068[(12)] = inst_18951);

return statearr_19068;
})();
var statearr_19071_20605 = state_19000__$1;
(statearr_19071_20605[(2)] = null);

(statearr_19071_20605[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19002 === (17))){
var inst_18964 = (state_19000[(7)]);
var inst_18969 = cljs.core.chunk_first(inst_18964);
var inst_18970 = cljs.core.chunk_rest(inst_18964);
var inst_18971 = cljs.core.count(inst_18969);
var inst_18948 = inst_18970;
var inst_18949 = inst_18969;
var inst_18950 = inst_18971;
var inst_18951 = (0);
var state_19000__$1 = (function (){var statearr_19077 = state_19000;
(statearr_19077[(9)] = inst_18948);

(statearr_19077[(10)] = inst_18949);

(statearr_19077[(11)] = inst_18950);

(statearr_19077[(12)] = inst_18951);

return statearr_19077;
})();
var statearr_19091_20608 = state_19000__$1;
(statearr_19091_20608[(2)] = null);

(statearr_19091_20608[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19002 === (3))){
var inst_18998 = (state_19000[(2)]);
var state_19000__$1 = state_19000;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19000__$1,inst_18998);
} else {
if((state_val_19002 === (12))){
var inst_18986 = (state_19000[(2)]);
var state_19000__$1 = state_19000;
var statearr_19096_20610 = state_19000__$1;
(statearr_19096_20610[(2)] = inst_18986);

(statearr_19096_20610[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19002 === (2))){
var state_19000__$1 = state_19000;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19000__$1,(4),in$);
} else {
if((state_val_19002 === (23))){
var inst_18994 = (state_19000[(2)]);
var state_19000__$1 = state_19000;
var statearr_19108_20611 = state_19000__$1;
(statearr_19108_20611[(2)] = inst_18994);

(statearr_19108_20611[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19002 === (19))){
var inst_18981 = (state_19000[(2)]);
var state_19000__$1 = state_19000;
var statearr_19113_20612 = state_19000__$1;
(statearr_19113_20612[(2)] = inst_18981);

(statearr_19113_20612[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19002 === (11))){
var inst_18948 = (state_19000[(9)]);
var inst_18964 = (state_19000[(7)]);
var inst_18964__$1 = cljs.core.seq(inst_18948);
var state_19000__$1 = (function (){var statearr_19121 = state_19000;
(statearr_19121[(7)] = inst_18964__$1);

return statearr_19121;
})();
if(inst_18964__$1){
var statearr_19130_20614 = state_19000__$1;
(statearr_19130_20614[(1)] = (14));

} else {
var statearr_19132_20615 = state_19000__$1;
(statearr_19132_20615[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19002 === (9))){
var inst_18988 = (state_19000[(2)]);
var inst_18989 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_19000__$1 = (function (){var statearr_19152 = state_19000;
(statearr_19152[(15)] = inst_18988);

return statearr_19152;
})();
if(cljs.core.truth_(inst_18989)){
var statearr_19153_20616 = state_19000__$1;
(statearr_19153_20616[(1)] = (21));

} else {
var statearr_19154_20617 = state_19000__$1;
(statearr_19154_20617[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19002 === (5))){
var inst_18940 = cljs.core.async.close_BANG_(out);
var state_19000__$1 = state_19000;
var statearr_19162_20618 = state_19000__$1;
(statearr_19162_20618[(2)] = inst_18940);

(statearr_19162_20618[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19002 === (14))){
var inst_18964 = (state_19000[(7)]);
var inst_18967 = cljs.core.chunked_seq_QMARK_(inst_18964);
var state_19000__$1 = state_19000;
if(inst_18967){
var statearr_19174_20620 = state_19000__$1;
(statearr_19174_20620[(1)] = (17));

} else {
var statearr_19182_20621 = state_19000__$1;
(statearr_19182_20621[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19002 === (16))){
var inst_18984 = (state_19000[(2)]);
var state_19000__$1 = state_19000;
var statearr_19187_20622 = state_19000__$1;
(statearr_19187_20622[(2)] = inst_18984);

(statearr_19187_20622[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19002 === (10))){
var inst_18949 = (state_19000[(10)]);
var inst_18951 = (state_19000[(12)]);
var inst_18957 = cljs.core._nth(inst_18949,inst_18951);
var state_19000__$1 = state_19000;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19000__$1,(13),out,inst_18957);
} else {
if((state_val_19002 === (18))){
var inst_18964 = (state_19000[(7)]);
var inst_18974 = cljs.core.first(inst_18964);
var state_19000__$1 = state_19000;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19000__$1,(20),out,inst_18974);
} else {
if((state_val_19002 === (8))){
var inst_18951 = (state_19000[(12)]);
var inst_18950 = (state_19000[(11)]);
var inst_18953 = (inst_18951 < inst_18950);
var inst_18954 = inst_18953;
var state_19000__$1 = state_19000;
if(cljs.core.truth_(inst_18954)){
var statearr_19203_20623 = state_19000__$1;
(statearr_19203_20623[(1)] = (10));

} else {
var statearr_19205_20624 = state_19000__$1;
(statearr_19205_20624[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__14730__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14730__auto____0 = (function (){
var statearr_19206 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19206[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14730__auto__);

(statearr_19206[(1)] = (1));

return statearr_19206;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14730__auto____1 = (function (state_19000){
while(true){
var ret_value__14731__auto__ = (function (){try{while(true){
var result__14732__auto__ = switch__14729__auto__(state_19000);
if(cljs.core.keyword_identical_QMARK_(result__14732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14732__auto__;
}
break;
}
}catch (e19208){var ex__14733__auto__ = e19208;
var statearr_19209_20626 = state_19000;
(statearr_19209_20626[(2)] = ex__14733__auto__);


if(cljs.core.seq((state_19000[(4)]))){
var statearr_19210_20627 = state_19000;
(statearr_19210_20627[(1)] = cljs.core.first((state_19000[(4)])));

} else {
throw ex__14733__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20628 = state_19000;
state_19000 = G__20628;
continue;
} else {
return ret_value__14731__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14730__auto__ = function(state_19000){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14730__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14730__auto____1.call(this,state_19000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14730__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14730__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14730__auto__;
})()
})();
var state__16109__auto__ = (function (){var statearr_19211 = f__16108__auto__();
(statearr_19211[(6)] = c__16107__auto__);

return statearr_19211;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16109__auto__);
}));

return c__16107__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__19216 = arguments.length;
switch (G__19216) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__19243 = arguments.length;
switch (G__19243) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__19253 = arguments.length;
switch (G__19253) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16107__auto___20637 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16108__auto__ = (function (){var switch__14729__auto__ = (function (state_19295){
var state_val_19296 = (state_19295[(1)]);
if((state_val_19296 === (7))){
var inst_19289 = (state_19295[(2)]);
var state_19295__$1 = state_19295;
var statearr_19300_20638 = state_19295__$1;
(statearr_19300_20638[(2)] = inst_19289);

(statearr_19300_20638[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19296 === (1))){
var inst_19268 = null;
var state_19295__$1 = (function (){var statearr_19306 = state_19295;
(statearr_19306[(7)] = inst_19268);

return statearr_19306;
})();
var statearr_19307_20639 = state_19295__$1;
(statearr_19307_20639[(2)] = null);

(statearr_19307_20639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19296 === (4))){
var inst_19272 = (state_19295[(8)]);
var inst_19272__$1 = (state_19295[(2)]);
var inst_19273 = (inst_19272__$1 == null);
var inst_19274 = cljs.core.not(inst_19273);
var state_19295__$1 = (function (){var statearr_19313 = state_19295;
(statearr_19313[(8)] = inst_19272__$1);

return statearr_19313;
})();
if(inst_19274){
var statearr_19314_20643 = state_19295__$1;
(statearr_19314_20643[(1)] = (5));

} else {
var statearr_19315_20644 = state_19295__$1;
(statearr_19315_20644[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19296 === (6))){
var state_19295__$1 = state_19295;
var statearr_19316_20646 = state_19295__$1;
(statearr_19316_20646[(2)] = null);

(statearr_19316_20646[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19296 === (3))){
var inst_19291 = (state_19295[(2)]);
var inst_19293 = cljs.core.async.close_BANG_(out);
var state_19295__$1 = (function (){var statearr_19322 = state_19295;
(statearr_19322[(9)] = inst_19291);

return statearr_19322;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19295__$1,inst_19293);
} else {
if((state_val_19296 === (2))){
var state_19295__$1 = state_19295;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19295__$1,(4),ch);
} else {
if((state_val_19296 === (11))){
var inst_19272 = (state_19295[(8)]);
var inst_19283 = (state_19295[(2)]);
var inst_19268 = inst_19272;
var state_19295__$1 = (function (){var statearr_19328 = state_19295;
(statearr_19328[(10)] = inst_19283);

(statearr_19328[(7)] = inst_19268);

return statearr_19328;
})();
var statearr_19329_20647 = state_19295__$1;
(statearr_19329_20647[(2)] = null);

(statearr_19329_20647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19296 === (9))){
var inst_19272 = (state_19295[(8)]);
var state_19295__$1 = state_19295;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19295__$1,(11),out,inst_19272);
} else {
if((state_val_19296 === (5))){
var inst_19272 = (state_19295[(8)]);
var inst_19268 = (state_19295[(7)]);
var inst_19277 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19272,inst_19268);
var state_19295__$1 = state_19295;
if(inst_19277){
var statearr_19347_20653 = state_19295__$1;
(statearr_19347_20653[(1)] = (8));

} else {
var statearr_19349_20654 = state_19295__$1;
(statearr_19349_20654[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19296 === (10))){
var inst_19286 = (state_19295[(2)]);
var state_19295__$1 = state_19295;
var statearr_19351_20655 = state_19295__$1;
(statearr_19351_20655[(2)] = inst_19286);

(statearr_19351_20655[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19296 === (8))){
var inst_19268 = (state_19295[(7)]);
var tmp19342 = inst_19268;
var inst_19268__$1 = tmp19342;
var state_19295__$1 = (function (){var statearr_19352 = state_19295;
(statearr_19352[(7)] = inst_19268__$1);

return statearr_19352;
})();
var statearr_19353_20657 = state_19295__$1;
(statearr_19353_20657[(2)] = null);

(statearr_19353_20657[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__14730__auto__ = null;
var cljs$core$async$state_machine__14730__auto____0 = (function (){
var statearr_19364 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19364[(0)] = cljs$core$async$state_machine__14730__auto__);

(statearr_19364[(1)] = (1));

return statearr_19364;
});
var cljs$core$async$state_machine__14730__auto____1 = (function (state_19295){
while(true){
var ret_value__14731__auto__ = (function (){try{while(true){
var result__14732__auto__ = switch__14729__auto__(state_19295);
if(cljs.core.keyword_identical_QMARK_(result__14732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14732__auto__;
}
break;
}
}catch (e19370){var ex__14733__auto__ = e19370;
var statearr_19376_20660 = state_19295;
(statearr_19376_20660[(2)] = ex__14733__auto__);


if(cljs.core.seq((state_19295[(4)]))){
var statearr_19377_20661 = state_19295;
(statearr_19377_20661[(1)] = cljs.core.first((state_19295[(4)])));

} else {
throw ex__14733__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20662 = state_19295;
state_19295 = G__20662;
continue;
} else {
return ret_value__14731__auto__;
}
break;
}
});
cljs$core$async$state_machine__14730__auto__ = function(state_19295){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14730__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14730__auto____1.call(this,state_19295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14730__auto____0;
cljs$core$async$state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14730__auto____1;
return cljs$core$async$state_machine__14730__auto__;
})()
})();
var state__16109__auto__ = (function (){var statearr_19379 = f__16108__auto__();
(statearr_19379[(6)] = c__16107__auto___20637);

return statearr_19379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16109__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__19387 = arguments.length;
switch (G__19387) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16107__auto___20665 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16108__auto__ = (function (){var switch__14729__auto__ = (function (state_19498){
var state_val_19499 = (state_19498[(1)]);
if((state_val_19499 === (7))){
var inst_19491 = (state_19498[(2)]);
var state_19498__$1 = state_19498;
var statearr_19507_20666 = state_19498__$1;
(statearr_19507_20666[(2)] = inst_19491);

(statearr_19507_20666[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19499 === (1))){
var inst_19436 = (new Array(n));
var inst_19441 = inst_19436;
var inst_19442 = (0);
var state_19498__$1 = (function (){var statearr_19510 = state_19498;
(statearr_19510[(7)] = inst_19441);

(statearr_19510[(8)] = inst_19442);

return statearr_19510;
})();
var statearr_19511_20667 = state_19498__$1;
(statearr_19511_20667[(2)] = null);

(statearr_19511_20667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19499 === (4))){
var inst_19445 = (state_19498[(9)]);
var inst_19445__$1 = (state_19498[(2)]);
var inst_19450 = (inst_19445__$1 == null);
var inst_19451 = cljs.core.not(inst_19450);
var state_19498__$1 = (function (){var statearr_19513 = state_19498;
(statearr_19513[(9)] = inst_19445__$1);

return statearr_19513;
})();
if(inst_19451){
var statearr_19514_20670 = state_19498__$1;
(statearr_19514_20670[(1)] = (5));

} else {
var statearr_19515_20671 = state_19498__$1;
(statearr_19515_20671[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19499 === (15))){
var inst_19484 = (state_19498[(2)]);
var state_19498__$1 = state_19498;
var statearr_19516_20673 = state_19498__$1;
(statearr_19516_20673[(2)] = inst_19484);

(statearr_19516_20673[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19499 === (13))){
var state_19498__$1 = state_19498;
var statearr_19517_20674 = state_19498__$1;
(statearr_19517_20674[(2)] = null);

(statearr_19517_20674[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19499 === (6))){
var inst_19442 = (state_19498[(8)]);
var inst_19476 = (inst_19442 > (0));
var state_19498__$1 = state_19498;
if(cljs.core.truth_(inst_19476)){
var statearr_19519_20677 = state_19498__$1;
(statearr_19519_20677[(1)] = (12));

} else {
var statearr_19520_20679 = state_19498__$1;
(statearr_19520_20679[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19499 === (3))){
var inst_19496 = (state_19498[(2)]);
var state_19498__$1 = state_19498;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19498__$1,inst_19496);
} else {
if((state_val_19499 === (12))){
var inst_19441 = (state_19498[(7)]);
var inst_19482 = cljs.core.vec(inst_19441);
var state_19498__$1 = state_19498;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19498__$1,(15),out,inst_19482);
} else {
if((state_val_19499 === (2))){
var state_19498__$1 = state_19498;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19498__$1,(4),ch);
} else {
if((state_val_19499 === (11))){
var inst_19465 = (state_19498[(2)]);
var inst_19467 = (new Array(n));
var inst_19441 = inst_19467;
var inst_19442 = (0);
var state_19498__$1 = (function (){var statearr_19529 = state_19498;
(statearr_19529[(10)] = inst_19465);

(statearr_19529[(7)] = inst_19441);

(statearr_19529[(8)] = inst_19442);

return statearr_19529;
})();
var statearr_19530_20683 = state_19498__$1;
(statearr_19530_20683[(2)] = null);

(statearr_19530_20683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19499 === (9))){
var inst_19441 = (state_19498[(7)]);
var inst_19463 = cljs.core.vec(inst_19441);
var state_19498__$1 = state_19498;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19498__$1,(11),out,inst_19463);
} else {
if((state_val_19499 === (5))){
var inst_19441 = (state_19498[(7)]);
var inst_19442 = (state_19498[(8)]);
var inst_19445 = (state_19498[(9)]);
var inst_19455 = (state_19498[(11)]);
var inst_19454 = (inst_19441[inst_19442] = inst_19445);
var inst_19455__$1 = (inst_19442 + (1));
var inst_19457 = (inst_19455__$1 < n);
var state_19498__$1 = (function (){var statearr_19534 = state_19498;
(statearr_19534[(12)] = inst_19454);

(statearr_19534[(11)] = inst_19455__$1);

return statearr_19534;
})();
if(cljs.core.truth_(inst_19457)){
var statearr_19535_20684 = state_19498__$1;
(statearr_19535_20684[(1)] = (8));

} else {
var statearr_19540_20685 = state_19498__$1;
(statearr_19540_20685[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19499 === (14))){
var inst_19487 = (state_19498[(2)]);
var inst_19488 = cljs.core.async.close_BANG_(out);
var state_19498__$1 = (function (){var statearr_19545 = state_19498;
(statearr_19545[(13)] = inst_19487);

return statearr_19545;
})();
var statearr_19547_20686 = state_19498__$1;
(statearr_19547_20686[(2)] = inst_19488);

(statearr_19547_20686[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19499 === (10))){
var inst_19474 = (state_19498[(2)]);
var state_19498__$1 = state_19498;
var statearr_19548_20688 = state_19498__$1;
(statearr_19548_20688[(2)] = inst_19474);

(statearr_19548_20688[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19499 === (8))){
var inst_19441 = (state_19498[(7)]);
var inst_19455 = (state_19498[(11)]);
var tmp19542 = inst_19441;
var inst_19441__$1 = tmp19542;
var inst_19442 = inst_19455;
var state_19498__$1 = (function (){var statearr_19551 = state_19498;
(statearr_19551[(7)] = inst_19441__$1);

(statearr_19551[(8)] = inst_19442);

return statearr_19551;
})();
var statearr_19556_20689 = state_19498__$1;
(statearr_19556_20689[(2)] = null);

(statearr_19556_20689[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__14730__auto__ = null;
var cljs$core$async$state_machine__14730__auto____0 = (function (){
var statearr_19560 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19560[(0)] = cljs$core$async$state_machine__14730__auto__);

(statearr_19560[(1)] = (1));

return statearr_19560;
});
var cljs$core$async$state_machine__14730__auto____1 = (function (state_19498){
while(true){
var ret_value__14731__auto__ = (function (){try{while(true){
var result__14732__auto__ = switch__14729__auto__(state_19498);
if(cljs.core.keyword_identical_QMARK_(result__14732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14732__auto__;
}
break;
}
}catch (e19561){var ex__14733__auto__ = e19561;
var statearr_19562_20690 = state_19498;
(statearr_19562_20690[(2)] = ex__14733__auto__);


if(cljs.core.seq((state_19498[(4)]))){
var statearr_19564_20691 = state_19498;
(statearr_19564_20691[(1)] = cljs.core.first((state_19498[(4)])));

} else {
throw ex__14733__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20693 = state_19498;
state_19498 = G__20693;
continue;
} else {
return ret_value__14731__auto__;
}
break;
}
});
cljs$core$async$state_machine__14730__auto__ = function(state_19498){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14730__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14730__auto____1.call(this,state_19498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14730__auto____0;
cljs$core$async$state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14730__auto____1;
return cljs$core$async$state_machine__14730__auto__;
})()
})();
var state__16109__auto__ = (function (){var statearr_19567 = f__16108__auto__();
(statearr_19567[(6)] = c__16107__auto___20665);

return statearr_19567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16109__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__19575 = arguments.length;
switch (G__19575) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16107__auto___20695 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16108__auto__ = (function (){var switch__14729__auto__ = (function (state_19639){
var state_val_19641 = (state_19639[(1)]);
if((state_val_19641 === (7))){
var inst_19635 = (state_19639[(2)]);
var state_19639__$1 = state_19639;
var statearr_19644_20696 = state_19639__$1;
(statearr_19644_20696[(2)] = inst_19635);

(statearr_19644_20696[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19641 === (1))){
var inst_19586 = [];
var inst_19587 = inst_19586;
var inst_19588 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19639__$1 = (function (){var statearr_19648 = state_19639;
(statearr_19648[(7)] = inst_19587);

(statearr_19648[(8)] = inst_19588);

return statearr_19648;
})();
var statearr_19651_20699 = state_19639__$1;
(statearr_19651_20699[(2)] = null);

(statearr_19651_20699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19641 === (4))){
var inst_19591 = (state_19639[(9)]);
var inst_19591__$1 = (state_19639[(2)]);
var inst_19593 = (inst_19591__$1 == null);
var inst_19594 = cljs.core.not(inst_19593);
var state_19639__$1 = (function (){var statearr_19655 = state_19639;
(statearr_19655[(9)] = inst_19591__$1);

return statearr_19655;
})();
if(inst_19594){
var statearr_19656_20701 = state_19639__$1;
(statearr_19656_20701[(1)] = (5));

} else {
var statearr_19657_20705 = state_19639__$1;
(statearr_19657_20705[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19641 === (15))){
var inst_19587 = (state_19639[(7)]);
var inst_19627 = cljs.core.vec(inst_19587);
var state_19639__$1 = state_19639;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19639__$1,(18),out,inst_19627);
} else {
if((state_val_19641 === (13))){
var inst_19622 = (state_19639[(2)]);
var state_19639__$1 = state_19639;
var statearr_19661_20709 = state_19639__$1;
(statearr_19661_20709[(2)] = inst_19622);

(statearr_19661_20709[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19641 === (6))){
var inst_19587 = (state_19639[(7)]);
var inst_19624 = inst_19587.length;
var inst_19625 = (inst_19624 > (0));
var state_19639__$1 = state_19639;
if(cljs.core.truth_(inst_19625)){
var statearr_19662_20710 = state_19639__$1;
(statearr_19662_20710[(1)] = (15));

} else {
var statearr_19664_20711 = state_19639__$1;
(statearr_19664_20711[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19641 === (17))){
var inst_19632 = (state_19639[(2)]);
var inst_19633 = cljs.core.async.close_BANG_(out);
var state_19639__$1 = (function (){var statearr_19670 = state_19639;
(statearr_19670[(10)] = inst_19632);

return statearr_19670;
})();
var statearr_19671_20712 = state_19639__$1;
(statearr_19671_20712[(2)] = inst_19633);

(statearr_19671_20712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19641 === (3))){
var inst_19637 = (state_19639[(2)]);
var state_19639__$1 = state_19639;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19639__$1,inst_19637);
} else {
if((state_val_19641 === (12))){
var inst_19587 = (state_19639[(7)]);
var inst_19608 = cljs.core.vec(inst_19587);
var state_19639__$1 = state_19639;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19639__$1,(14),out,inst_19608);
} else {
if((state_val_19641 === (2))){
var state_19639__$1 = state_19639;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19639__$1,(4),ch);
} else {
if((state_val_19641 === (11))){
var inst_19587 = (state_19639[(7)]);
var inst_19591 = (state_19639[(9)]);
var inst_19597 = (state_19639[(11)]);
var inst_19605 = inst_19587.push(inst_19591);
var tmp19674 = inst_19587;
var inst_19587__$1 = tmp19674;
var inst_19588 = inst_19597;
var state_19639__$1 = (function (){var statearr_19678 = state_19639;
(statearr_19678[(12)] = inst_19605);

(statearr_19678[(7)] = inst_19587__$1);

(statearr_19678[(8)] = inst_19588);

return statearr_19678;
})();
var statearr_19681_20714 = state_19639__$1;
(statearr_19681_20714[(2)] = null);

(statearr_19681_20714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19641 === (9))){
var inst_19588 = (state_19639[(8)]);
var inst_19601 = cljs.core.keyword_identical_QMARK_(inst_19588,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_19639__$1 = state_19639;
var statearr_19684_20715 = state_19639__$1;
(statearr_19684_20715[(2)] = inst_19601);

(statearr_19684_20715[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19641 === (5))){
var inst_19591 = (state_19639[(9)]);
var inst_19597 = (state_19639[(11)]);
var inst_19588 = (state_19639[(8)]);
var inst_19598 = (state_19639[(13)]);
var inst_19597__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19591) : f.call(null,inst_19591));
var inst_19598__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19597__$1,inst_19588);
var state_19639__$1 = (function (){var statearr_19688 = state_19639;
(statearr_19688[(11)] = inst_19597__$1);

(statearr_19688[(13)] = inst_19598__$1);

return statearr_19688;
})();
if(inst_19598__$1){
var statearr_19690_20716 = state_19639__$1;
(statearr_19690_20716[(1)] = (8));

} else {
var statearr_19694_20717 = state_19639__$1;
(statearr_19694_20717[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19641 === (14))){
var inst_19591 = (state_19639[(9)]);
var inst_19597 = (state_19639[(11)]);
var inst_19610 = (state_19639[(2)]);
var inst_19618 = [];
var inst_19619 = inst_19618.push(inst_19591);
var inst_19587 = inst_19618;
var inst_19588 = inst_19597;
var state_19639__$1 = (function (){var statearr_19696 = state_19639;
(statearr_19696[(14)] = inst_19610);

(statearr_19696[(15)] = inst_19619);

(statearr_19696[(7)] = inst_19587);

(statearr_19696[(8)] = inst_19588);

return statearr_19696;
})();
var statearr_19697_20718 = state_19639__$1;
(statearr_19697_20718[(2)] = null);

(statearr_19697_20718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19641 === (16))){
var state_19639__$1 = state_19639;
var statearr_19707_20719 = state_19639__$1;
(statearr_19707_20719[(2)] = null);

(statearr_19707_20719[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19641 === (10))){
var inst_19603 = (state_19639[(2)]);
var state_19639__$1 = state_19639;
if(cljs.core.truth_(inst_19603)){
var statearr_19708_20720 = state_19639__$1;
(statearr_19708_20720[(1)] = (11));

} else {
var statearr_19709_20721 = state_19639__$1;
(statearr_19709_20721[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19641 === (18))){
var inst_19629 = (state_19639[(2)]);
var state_19639__$1 = state_19639;
var statearr_19713_20722 = state_19639__$1;
(statearr_19713_20722[(2)] = inst_19629);

(statearr_19713_20722[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19641 === (8))){
var inst_19598 = (state_19639[(13)]);
var state_19639__$1 = state_19639;
var statearr_19714_20723 = state_19639__$1;
(statearr_19714_20723[(2)] = inst_19598);

(statearr_19714_20723[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__14730__auto__ = null;
var cljs$core$async$state_machine__14730__auto____0 = (function (){
var statearr_19717 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19717[(0)] = cljs$core$async$state_machine__14730__auto__);

(statearr_19717[(1)] = (1));

return statearr_19717;
});
var cljs$core$async$state_machine__14730__auto____1 = (function (state_19639){
while(true){
var ret_value__14731__auto__ = (function (){try{while(true){
var result__14732__auto__ = switch__14729__auto__(state_19639);
if(cljs.core.keyword_identical_QMARK_(result__14732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14732__auto__;
}
break;
}
}catch (e19720){var ex__14733__auto__ = e19720;
var statearr_19722_20728 = state_19639;
(statearr_19722_20728[(2)] = ex__14733__auto__);


if(cljs.core.seq((state_19639[(4)]))){
var statearr_19724_20729 = state_19639;
(statearr_19724_20729[(1)] = cljs.core.first((state_19639[(4)])));

} else {
throw ex__14733__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20730 = state_19639;
state_19639 = G__20730;
continue;
} else {
return ret_value__14731__auto__;
}
break;
}
});
cljs$core$async$state_machine__14730__auto__ = function(state_19639){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14730__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14730__auto____1.call(this,state_19639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14730__auto____0;
cljs$core$async$state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14730__auto____1;
return cljs$core$async$state_machine__14730__auto__;
})()
})();
var state__16109__auto__ = (function (){var statearr_19730 = f__16108__auto__();
(statearr_19730[(6)] = c__16107__auto___20695);

return statearr_19730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16109__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
