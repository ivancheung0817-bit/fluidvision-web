goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__14840){
var map__14848 = p__14840;
var map__14848__$1 = cljs.core.__destructure_map(map__14848);
var runtime = map__14848__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14848__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5162__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_15266 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_15266)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__14850 = runtime;
var G__14851 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_15266);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__14850,G__14851) : shadow.remote.runtime.shared.process.call(null,G__14850,G__14851));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__14854,res){
var map__14859 = p__14854;
var map__14859__$1 = cljs.core.__destructure_map(map__14859);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14859__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14859__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__14908 = res;
var G__14908__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14908,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__14908);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14908__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__14908__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__14915 = arguments.length;
switch (G__14915) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__14920,msg,handlers,timeout_after_ms){
var map__14921 = p__14920;
var map__14921__$1 = cljs.core.__destructure_map(map__14921);
var runtime = map__14921__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14921__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5903__auto__ = [];
var len__5897__auto___15274 = arguments.length;
var i__5898__auto___15276 = (0);
while(true){
if((i__5898__auto___15276 < len__5897__auto___15274)){
args__5903__auto__.push((arguments[i__5898__auto___15276]));

var G__15278 = (i__5898__auto___15276 + (1));
i__5898__auto___15276 = G__15278;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((2) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5904__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__15015,ev,args){
var map__15016 = p__15015;
var map__15016__$1 = cljs.core.__destructure_map(map__15016);
var runtime = map__15016__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15016__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__15017 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__15020 = null;
var count__15021 = (0);
var i__15022 = (0);
while(true){
if((i__15022 < count__15021)){
var ext = chunk__15020.cljs$core$IIndexed$_nth$arity$2(null,i__15022);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__15284 = seq__15017;
var G__15285 = chunk__15020;
var G__15286 = count__15021;
var G__15287 = (i__15022 + (1));
seq__15017 = G__15284;
chunk__15020 = G__15285;
count__15021 = G__15286;
i__15022 = G__15287;
continue;
} else {
var G__15288 = seq__15017;
var G__15289 = chunk__15020;
var G__15290 = count__15021;
var G__15291 = (i__15022 + (1));
seq__15017 = G__15288;
chunk__15020 = G__15289;
count__15021 = G__15290;
i__15022 = G__15291;
continue;
}
} else {
var temp__5825__auto__ = cljs.core.seq(seq__15017);
if(temp__5825__auto__){
var seq__15017__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15017__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__15017__$1);
var G__15293 = cljs.core.chunk_rest(seq__15017__$1);
var G__15294 = c__5694__auto__;
var G__15295 = cljs.core.count(c__5694__auto__);
var G__15296 = (0);
seq__15017 = G__15293;
chunk__15020 = G__15294;
count__15021 = G__15295;
i__15022 = G__15296;
continue;
} else {
var ext = cljs.core.first(seq__15017__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__15297 = cljs.core.next(seq__15017__$1);
var G__15298 = null;
var G__15299 = (0);
var G__15300 = (0);
seq__15017 = G__15297;
chunk__15020 = G__15298;
count__15021 = G__15299;
i__15022 = G__15300;
continue;
} else {
var G__15301 = cljs.core.next(seq__15017__$1);
var G__15302 = null;
var G__15303 = (0);
var G__15304 = (0);
seq__15017 = G__15301;
chunk__15020 = G__15302;
count__15021 = G__15303;
i__15022 = G__15304;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq14986){
var G__14987 = cljs.core.first(seq14986);
var seq14986__$1 = cljs.core.next(seq14986);
var G__14988 = cljs.core.first(seq14986__$1);
var seq14986__$2 = cljs.core.next(seq14986__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14987,G__14988,seq14986__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__15085,p__15086){
var map__15087 = p__15085;
var map__15087__$1 = cljs.core.__destructure_map(map__15087);
var runtime = map__15087__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15087__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__15088 = p__15086;
var map__15088__$1 = cljs.core.__destructure_map(map__15088);
var msg = map__15088__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15088__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__15096 = cljs.core.deref(state_ref);
var map__15096__$1 = cljs.core.__destructure_map(map__15096);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15096__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15096__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__15115,msg){
var map__15117 = p__15115;
var map__15117__$1 = cljs.core.__destructure_map(map__15117);
var runtime = map__15117__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15117__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__15147,key,p__15148){
var map__15152 = p__15147;
var map__15152__$1 = cljs.core.__destructure_map(map__15152);
var state = map__15152__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15152__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__15153 = p__15148;
var map__15153__$1 = cljs.core.__destructure_map(map__15153);
var spec = map__15153__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15153__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15153__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__15167,key,spec){
var map__15169 = p__15167;
var map__15169__$1 = cljs.core.__destructure_map(map__15169);
var runtime = map__15169__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15169__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5829__auto___15321 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5829__auto___15321 == null)){
} else {
var on_welcome_15322 = temp__5829__auto___15321;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_15322.cljs$core$IFn$_invoke$arity$0 ? on_welcome_15322.cljs$core$IFn$_invoke$arity$0() : on_welcome_15322.call(null));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__15180_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__15180_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__15181_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__15181_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__15182_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__15182_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__15183_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__15183_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__15184_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__15184_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__15203,key){
var map__15204 = p__15203;
var map__15204__$1 = cljs.core.__destructure_map(map__15204);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15204__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__15208,msg){
var map__15209 = p__15208;
var map__15209__$1 = cljs.core.__destructure_map(map__15209);
var runtime = map__15209__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15209__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__15213,p__15214){
var map__15216 = p__15213;
var map__15216__$1 = cljs.core.__destructure_map(map__15216);
var runtime = map__15216__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15216__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__15217 = p__15214;
var map__15217__$1 = cljs.core.__destructure_map(map__15217);
var msg = map__15217__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15217__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15217__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__15229 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__15231 = null;
var count__15232 = (0);
var i__15233 = (0);
while(true){
if((i__15233 < count__15232)){
var map__15242 = chunk__15231.cljs$core$IIndexed$_nth$arity$2(null,i__15233);
var map__15242__$1 = cljs.core.__destructure_map(map__15242);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15242__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__15353 = seq__15229;
var G__15354 = chunk__15231;
var G__15355 = count__15232;
var G__15356 = (i__15233 + (1));
seq__15229 = G__15353;
chunk__15231 = G__15354;
count__15232 = G__15355;
i__15233 = G__15356;
continue;
} else {
var G__15357 = seq__15229;
var G__15358 = chunk__15231;
var G__15359 = count__15232;
var G__15360 = (i__15233 + (1));
seq__15229 = G__15357;
chunk__15231 = G__15358;
count__15232 = G__15359;
i__15233 = G__15360;
continue;
}
} else {
var temp__5825__auto__ = cljs.core.seq(seq__15229);
if(temp__5825__auto__){
var seq__15229__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15229__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__15229__$1);
var G__15365 = cljs.core.chunk_rest(seq__15229__$1);
var G__15366 = c__5694__auto__;
var G__15367 = cljs.core.count(c__5694__auto__);
var G__15368 = (0);
seq__15229 = G__15365;
chunk__15231 = G__15366;
count__15232 = G__15367;
i__15233 = G__15368;
continue;
} else {
var map__15256 = cljs.core.first(seq__15229__$1);
var map__15256__$1 = cljs.core.__destructure_map(map__15256);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15256__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__15372 = cljs.core.next(seq__15229__$1);
var G__15373 = null;
var G__15374 = (0);
var G__15375 = (0);
seq__15229 = G__15372;
chunk__15231 = G__15373;
count__15232 = G__15374;
i__15233 = G__15375;
continue;
} else {
var G__15376 = cljs.core.next(seq__15229__$1);
var G__15377 = null;
var G__15378 = (0);
var G__15379 = (0);
seq__15229 = G__15376;
chunk__15231 = G__15377;
count__15232 = G__15378;
i__15233 = G__15379;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
