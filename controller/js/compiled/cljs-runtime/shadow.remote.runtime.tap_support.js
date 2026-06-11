goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__22646,p__22647){
var map__22648 = p__22646;
var map__22648__$1 = cljs.core.__destructure_map(map__22648);
var svc = map__22648__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22648__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22648__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22648__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__22649 = p__22647;
var map__22649__$1 = cljs.core.__destructure_map(map__22649);
var msg = map__22649__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22649__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22649__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22649__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22649__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__22660,p__22661){
var map__22663 = p__22660;
var map__22663__$1 = cljs.core.__destructure_map(map__22663);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22663__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__22664 = p__22661;
var map__22664__$1 = cljs.core.__destructure_map(map__22664);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22664__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__22670,p__22671){
var map__22673 = p__22670;
var map__22673__$1 = cljs.core.__destructure_map(map__22673);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22673__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22673__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__22674 = p__22671;
var map__22674__$1 = cljs.core.__destructure_map(map__22674);
var msg = map__22674__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22674__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__22678,tid){
var map__22679 = p__22678;
var map__22679__$1 = cljs.core.__destructure_map(map__22679);
var svc = map__22679__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22679__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__22689 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__22690 = null;
var count__22691 = (0);
var i__22692 = (0);
while(true){
if((i__22692 < count__22691)){
var vec__22707 = chunk__22690.cljs$core$IIndexed$_nth$arity$2(null,i__22692);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22707,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22707,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__22719 = seq__22689;
var G__22720 = chunk__22690;
var G__22721 = count__22691;
var G__22722 = (i__22692 + (1));
seq__22689 = G__22719;
chunk__22690 = G__22720;
count__22691 = G__22721;
i__22692 = G__22722;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__22689);
if(temp__5825__auto__){
var seq__22689__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22689__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__22689__$1);
var G__22723 = cljs.core.chunk_rest(seq__22689__$1);
var G__22724 = c__5694__auto__;
var G__22725 = cljs.core.count(c__5694__auto__);
var G__22726 = (0);
seq__22689 = G__22723;
chunk__22690 = G__22724;
count__22691 = G__22725;
i__22692 = G__22726;
continue;
} else {
var vec__22710 = cljs.core.first(seq__22689__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22710,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22710,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__22727 = cljs.core.next(seq__22689__$1);
var G__22728 = null;
var G__22729 = (0);
var G__22730 = (0);
seq__22689 = G__22727;
chunk__22690 = G__22728;
count__22691 = G__22729;
i__22692 = G__22730;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__22682_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__22682_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__22684_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__22684_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__22685_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__22685_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__22687_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__22687_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__22714){
var map__22715 = p__22714;
var map__22715__$1 = cljs.core.__destructure_map(map__22715);
var svc = map__22715__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22715__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22715__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
