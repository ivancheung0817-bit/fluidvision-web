goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5903__auto__ = [];
var len__5897__auto___23659 = arguments.length;
var i__5898__auto___23660 = (0);
while(true){
if((i__5898__auto___23660 < len__5897__auto___23659)){
args__5903__auto__.push((arguments[i__5898__auto___23660]));

var G__23661 = (i__5898__auto___23660 + (1));
i__5898__auto___23660 = G__23661;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+"%cshadow-cljs: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+"shadow-cljs: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg))], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq23369){
var G__23370 = cljs.core.first(seq23369);
var seq23369__$1 = cljs.core.next(seq23369);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23370,seq23369__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__23376 = cljs.core.seq(sources);
var chunk__23377 = null;
var count__23378 = (0);
var i__23379 = (0);
while(true){
if((i__23379 < count__23378)){
var map__23386 = chunk__23377.cljs$core$IIndexed$_nth$arity$2(null,i__23379);
var map__23386__$1 = cljs.core.__destructure_map(map__23386);
var src = map__23386__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23386__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23386__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23386__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23386__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js)+"\n//# sourceURL="+cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)));
}catch (e23387){var e_23662 = e23387;
if(shadow.cljs.devtools.client.env.log){
console.error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)),e_23662);
} else {
}

throw (new Error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_23662.message))));
}

var G__23663 = seq__23376;
var G__23664 = chunk__23377;
var G__23665 = count__23378;
var G__23666 = (i__23379 + (1));
seq__23376 = G__23663;
chunk__23377 = G__23664;
count__23378 = G__23665;
i__23379 = G__23666;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__23376);
if(temp__5825__auto__){
var seq__23376__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23376__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__23376__$1);
var G__23667 = cljs.core.chunk_rest(seq__23376__$1);
var G__23668 = c__5694__auto__;
var G__23669 = cljs.core.count(c__5694__auto__);
var G__23670 = (0);
seq__23376 = G__23667;
chunk__23377 = G__23668;
count__23378 = G__23669;
i__23379 = G__23670;
continue;
} else {
var map__23388 = cljs.core.first(seq__23376__$1);
var map__23388__$1 = cljs.core.__destructure_map(map__23388);
var src = map__23388__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23388__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23388__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23388__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23388__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js)+"\n//# sourceURL="+cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)));
}catch (e23389){var e_23671 = e23389;
if(shadow.cljs.devtools.client.env.log){
console.error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)),e_23671);
} else {
}

throw (new Error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_23671.message))));
}

var G__23672 = cljs.core.next(seq__23376__$1);
var G__23673 = null;
var G__23674 = (0);
var G__23675 = (0);
seq__23376 = G__23672;
chunk__23377 = G__23673;
count__23378 = G__23674;
i__23379 = G__23675;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg((""+"call async "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)));
})], 0)),(function (next){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__23390 = cljs.core.seq(js_requires);
var chunk__23391 = null;
var count__23392 = (0);
var i__23393 = (0);
while(true){
if((i__23393 < count__23392)){
var js_ns = chunk__23391.cljs$core$IIndexed$_nth$arity$2(null,i__23393);
var require_str_23676 = (""+"var "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+" = shadow.js.require(\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+"\");");
shadow.cljs.devtools.client.browser.script_eval(require_str_23676);


var G__23677 = seq__23390;
var G__23678 = chunk__23391;
var G__23679 = count__23392;
var G__23680 = (i__23393 + (1));
seq__23390 = G__23677;
chunk__23391 = G__23678;
count__23392 = G__23679;
i__23393 = G__23680;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__23390);
if(temp__5825__auto__){
var seq__23390__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23390__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__23390__$1);
var G__23681 = cljs.core.chunk_rest(seq__23390__$1);
var G__23682 = c__5694__auto__;
var G__23683 = cljs.core.count(c__5694__auto__);
var G__23684 = (0);
seq__23390 = G__23681;
chunk__23391 = G__23682;
count__23392 = G__23683;
i__23393 = G__23684;
continue;
} else {
var js_ns = cljs.core.first(seq__23390__$1);
var require_str_23685 = (""+"var "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+" = shadow.js.require(\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+"\");");
shadow.cljs.devtools.client.browser.script_eval(require_str_23685);


var G__23686 = cljs.core.next(seq__23390__$1);
var G__23687 = null;
var G__23688 = (0);
var G__23689 = (0);
seq__23390 = G__23686;
chunk__23391 = G__23687;
count__23392 = G__23688;
i__23393 = G__23689;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__23395){
var map__23396 = p__23395;
var map__23396__$1 = cljs.core.__destructure_map(map__23396);
var msg = map__23396__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23396__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23396__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5649__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__23397(s__23398){
return (new cljs.core.LazySeq(null,(function (){
var s__23398__$1 = s__23398;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__23398__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var map__23403 = cljs.core.first(xs__6385__auto__);
var map__23403__$1 = cljs.core.__destructure_map(map__23403);
var src = map__23403__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23403__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23403__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5645__auto__ = ((function (s__23398__$1,map__23403,map__23403__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__23396,map__23396__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__23397_$_iter__23399(s__23400){
return (new cljs.core.LazySeq(null,((function (s__23398__$1,map__23403,map__23403__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__23396,map__23396__$1,msg,info,reload_info){
return (function (){
var s__23400__$1 = s__23400;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__23400__$1);
if(temp__5825__auto____$1){
var s__23400__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__23400__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__23400__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__23402 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__23401 = (0);
while(true){
if((i__23401 < size__5648__auto__)){
var warning = cljs.core._nth(c__5647__auto__,i__23401);
cljs.core.chunk_append(b__23402,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__23690 = (i__23401 + (1));
i__23401 = G__23690;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23402),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__23397_$_iter__23399(cljs.core.chunk_rest(s__23400__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23402),null);
}
} else {
var warning = cljs.core.first(s__23400__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__23397_$_iter__23399(cljs.core.rest(s__23400__$2)));
}
} else {
return null;
}
break;
}
});})(s__23398__$1,map__23403,map__23403__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__23396,map__23396__$1,msg,info,reload_info))
,null,null));
});})(s__23398__$1,map__23403,map__23403__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__23396,map__23396__$1,msg,info,reload_info))
;
var fs__5646__auto__ = cljs.core.seq(iterys__5645__auto__(warnings));
if(fs__5646__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5646__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__23397(cljs.core.rest(s__23398__$1)));
} else {
var G__23691 = cljs.core.rest(s__23398__$1);
s__23398__$1 = G__23691;
continue;
}
} else {
var G__23692 = cljs.core.rest(s__23398__$1);
s__23398__$1 = G__23692;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__23404_23693 = cljs.core.seq(warnings);
var chunk__23405_23694 = null;
var count__23406_23695 = (0);
var i__23407_23696 = (0);
while(true){
if((i__23407_23696 < count__23406_23695)){
var map__23410_23697 = chunk__23405_23694.cljs$core$IIndexed$_nth$arity$2(null,i__23407_23696);
var map__23410_23698__$1 = cljs.core.__destructure_map(map__23410_23697);
var w_23699 = map__23410_23698__$1;
var msg_23700__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23410_23698__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_23701 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23410_23698__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_23702 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23410_23698__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_23703 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23410_23698__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn((""+"BUILD-WARNING in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_23703)+" at ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_23701)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_23702)+"]\n\t"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_23700__$1)));


var G__23704 = seq__23404_23693;
var G__23705 = chunk__23405_23694;
var G__23706 = count__23406_23695;
var G__23707 = (i__23407_23696 + (1));
seq__23404_23693 = G__23704;
chunk__23405_23694 = G__23705;
count__23406_23695 = G__23706;
i__23407_23696 = G__23707;
continue;
} else {
var temp__5825__auto___23708 = cljs.core.seq(seq__23404_23693);
if(temp__5825__auto___23708){
var seq__23404_23709__$1 = temp__5825__auto___23708;
if(cljs.core.chunked_seq_QMARK_(seq__23404_23709__$1)){
var c__5694__auto___23710 = cljs.core.chunk_first(seq__23404_23709__$1);
var G__23711 = cljs.core.chunk_rest(seq__23404_23709__$1);
var G__23712 = c__5694__auto___23710;
var G__23713 = cljs.core.count(c__5694__auto___23710);
var G__23714 = (0);
seq__23404_23693 = G__23711;
chunk__23405_23694 = G__23712;
count__23406_23695 = G__23713;
i__23407_23696 = G__23714;
continue;
} else {
var map__23411_23715 = cljs.core.first(seq__23404_23709__$1);
var map__23411_23716__$1 = cljs.core.__destructure_map(map__23411_23715);
var w_23717 = map__23411_23716__$1;
var msg_23718__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23411_23716__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_23719 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23411_23716__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_23720 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23411_23716__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_23721 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23411_23716__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn((""+"BUILD-WARNING in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_23721)+" at ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_23719)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_23720)+"]\n\t"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_23718__$1)));


var G__23722 = cljs.core.next(seq__23404_23709__$1);
var G__23723 = null;
var G__23724 = (0);
var G__23725 = (0);
seq__23404_23693 = G__23722;
chunk__23405_23694 = G__23723;
count__23406_23695 = G__23724;
i__23407_23696 = G__23725;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__23394_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__23394_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new)+"?"))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5160__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5160__auto__){
var and__5160__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5160__auto____$1){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__23412 = node_uri;
G__23412.setQuery(null);

G__23412.setPath(new$);

return G__23412;
})()));
} else {
return and__5160__auto____$1;
}
} else {
return and__5160__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__23413){
var map__23414 = p__23413;
var map__23414__$1 = cljs.core.__destructure_map(map__23414);
var msg = map__23414__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23414__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23414__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__23415 = cljs.core.seq(updates);
var chunk__23417 = null;
var count__23418 = (0);
var i__23419 = (0);
while(true){
if((i__23419 < count__23418)){
var path = chunk__23417.cljs$core$IIndexed$_nth$arity$2(null,i__23419);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__23529_23726 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__23533_23727 = null;
var count__23534_23728 = (0);
var i__23535_23729 = (0);
while(true){
if((i__23535_23729 < count__23534_23728)){
var node_23730 = chunk__23533_23727.cljs$core$IIndexed$_nth$arity$2(null,i__23535_23729);
if(cljs.core.not(node_23730.shadow$old)){
var path_match_23731 = shadow.cljs.devtools.client.browser.match_paths(node_23730.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23731)){
var new_link_23732 = (function (){var G__23561 = node_23730.cloneNode(true);
G__23561.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23731)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__23561;
})();
(node_23730.shadow$old = true);

(new_link_23732.onload = ((function (seq__23529_23726,chunk__23533_23727,count__23534_23728,i__23535_23729,seq__23415,chunk__23417,count__23418,i__23419,new_link_23732,path_match_23731,node_23730,path,map__23414,map__23414__$1,msg,updates,reload_info){
return (function (e){
var seq__23562_23733 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__23564_23734 = null;
var count__23565_23735 = (0);
var i__23566_23736 = (0);
while(true){
if((i__23566_23736 < count__23565_23735)){
var map__23570_23737 = chunk__23564_23734.cljs$core$IIndexed$_nth$arity$2(null,i__23566_23736);
var map__23570_23738__$1 = cljs.core.__destructure_map(map__23570_23737);
var task_23739 = map__23570_23738__$1;
var fn_str_23740 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23570_23738__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23741 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23570_23738__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23742 = goog.getObjectByName(fn_str_23740,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23741)));

(fn_obj_23742.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23742.cljs$core$IFn$_invoke$arity$2(path,new_link_23732) : fn_obj_23742.call(null,path,new_link_23732));


var G__23743 = seq__23562_23733;
var G__23744 = chunk__23564_23734;
var G__23745 = count__23565_23735;
var G__23746 = (i__23566_23736 + (1));
seq__23562_23733 = G__23743;
chunk__23564_23734 = G__23744;
count__23565_23735 = G__23745;
i__23566_23736 = G__23746;
continue;
} else {
var temp__5825__auto___23747 = cljs.core.seq(seq__23562_23733);
if(temp__5825__auto___23747){
var seq__23562_23748__$1 = temp__5825__auto___23747;
if(cljs.core.chunked_seq_QMARK_(seq__23562_23748__$1)){
var c__5694__auto___23749 = cljs.core.chunk_first(seq__23562_23748__$1);
var G__23750 = cljs.core.chunk_rest(seq__23562_23748__$1);
var G__23751 = c__5694__auto___23749;
var G__23752 = cljs.core.count(c__5694__auto___23749);
var G__23753 = (0);
seq__23562_23733 = G__23750;
chunk__23564_23734 = G__23751;
count__23565_23735 = G__23752;
i__23566_23736 = G__23753;
continue;
} else {
var map__23571_23754 = cljs.core.first(seq__23562_23748__$1);
var map__23571_23755__$1 = cljs.core.__destructure_map(map__23571_23754);
var task_23756 = map__23571_23755__$1;
var fn_str_23757 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23571_23755__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23758 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23571_23755__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23759 = goog.getObjectByName(fn_str_23757,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23758)));

(fn_obj_23759.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23759.cljs$core$IFn$_invoke$arity$2(path,new_link_23732) : fn_obj_23759.call(null,path,new_link_23732));


var G__23760 = cljs.core.next(seq__23562_23748__$1);
var G__23761 = null;
var G__23762 = (0);
var G__23763 = (0);
seq__23562_23733 = G__23760;
chunk__23564_23734 = G__23761;
count__23565_23735 = G__23762;
i__23566_23736 = G__23763;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23730);
});})(seq__23529_23726,chunk__23533_23727,count__23534_23728,i__23535_23729,seq__23415,chunk__23417,count__23418,i__23419,new_link_23732,path_match_23731,node_23730,path,map__23414,map__23414__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23731], 0));

goog.dom.insertSiblingAfter(new_link_23732,node_23730);


var G__23764 = seq__23529_23726;
var G__23765 = chunk__23533_23727;
var G__23766 = count__23534_23728;
var G__23767 = (i__23535_23729 + (1));
seq__23529_23726 = G__23764;
chunk__23533_23727 = G__23765;
count__23534_23728 = G__23766;
i__23535_23729 = G__23767;
continue;
} else {
var G__23768 = seq__23529_23726;
var G__23769 = chunk__23533_23727;
var G__23770 = count__23534_23728;
var G__23771 = (i__23535_23729 + (1));
seq__23529_23726 = G__23768;
chunk__23533_23727 = G__23769;
count__23534_23728 = G__23770;
i__23535_23729 = G__23771;
continue;
}
} else {
var G__23772 = seq__23529_23726;
var G__23773 = chunk__23533_23727;
var G__23774 = count__23534_23728;
var G__23775 = (i__23535_23729 + (1));
seq__23529_23726 = G__23772;
chunk__23533_23727 = G__23773;
count__23534_23728 = G__23774;
i__23535_23729 = G__23775;
continue;
}
} else {
var temp__5825__auto___23776 = cljs.core.seq(seq__23529_23726);
if(temp__5825__auto___23776){
var seq__23529_23777__$1 = temp__5825__auto___23776;
if(cljs.core.chunked_seq_QMARK_(seq__23529_23777__$1)){
var c__5694__auto___23778 = cljs.core.chunk_first(seq__23529_23777__$1);
var G__23779 = cljs.core.chunk_rest(seq__23529_23777__$1);
var G__23780 = c__5694__auto___23778;
var G__23781 = cljs.core.count(c__5694__auto___23778);
var G__23782 = (0);
seq__23529_23726 = G__23779;
chunk__23533_23727 = G__23780;
count__23534_23728 = G__23781;
i__23535_23729 = G__23782;
continue;
} else {
var node_23783 = cljs.core.first(seq__23529_23777__$1);
if(cljs.core.not(node_23783.shadow$old)){
var path_match_23784 = shadow.cljs.devtools.client.browser.match_paths(node_23783.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23784)){
var new_link_23785 = (function (){var G__23572 = node_23783.cloneNode(true);
G__23572.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23784)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__23572;
})();
(node_23783.shadow$old = true);

(new_link_23785.onload = ((function (seq__23529_23726,chunk__23533_23727,count__23534_23728,i__23535_23729,seq__23415,chunk__23417,count__23418,i__23419,new_link_23785,path_match_23784,node_23783,seq__23529_23777__$1,temp__5825__auto___23776,path,map__23414,map__23414__$1,msg,updates,reload_info){
return (function (e){
var seq__23573_23786 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__23575_23787 = null;
var count__23576_23788 = (0);
var i__23577_23789 = (0);
while(true){
if((i__23577_23789 < count__23576_23788)){
var map__23581_23790 = chunk__23575_23787.cljs$core$IIndexed$_nth$arity$2(null,i__23577_23789);
var map__23581_23791__$1 = cljs.core.__destructure_map(map__23581_23790);
var task_23792 = map__23581_23791__$1;
var fn_str_23793 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23581_23791__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23794 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23581_23791__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23795 = goog.getObjectByName(fn_str_23793,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23794)));

(fn_obj_23795.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23795.cljs$core$IFn$_invoke$arity$2(path,new_link_23785) : fn_obj_23795.call(null,path,new_link_23785));


var G__23796 = seq__23573_23786;
var G__23797 = chunk__23575_23787;
var G__23798 = count__23576_23788;
var G__23799 = (i__23577_23789 + (1));
seq__23573_23786 = G__23796;
chunk__23575_23787 = G__23797;
count__23576_23788 = G__23798;
i__23577_23789 = G__23799;
continue;
} else {
var temp__5825__auto___23800__$1 = cljs.core.seq(seq__23573_23786);
if(temp__5825__auto___23800__$1){
var seq__23573_23801__$1 = temp__5825__auto___23800__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23573_23801__$1)){
var c__5694__auto___23802 = cljs.core.chunk_first(seq__23573_23801__$1);
var G__23803 = cljs.core.chunk_rest(seq__23573_23801__$1);
var G__23804 = c__5694__auto___23802;
var G__23805 = cljs.core.count(c__5694__auto___23802);
var G__23806 = (0);
seq__23573_23786 = G__23803;
chunk__23575_23787 = G__23804;
count__23576_23788 = G__23805;
i__23577_23789 = G__23806;
continue;
} else {
var map__23582_23807 = cljs.core.first(seq__23573_23801__$1);
var map__23582_23808__$1 = cljs.core.__destructure_map(map__23582_23807);
var task_23809 = map__23582_23808__$1;
var fn_str_23810 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23582_23808__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23811 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23582_23808__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23812 = goog.getObjectByName(fn_str_23810,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23811)));

(fn_obj_23812.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23812.cljs$core$IFn$_invoke$arity$2(path,new_link_23785) : fn_obj_23812.call(null,path,new_link_23785));


var G__23813 = cljs.core.next(seq__23573_23801__$1);
var G__23814 = null;
var G__23815 = (0);
var G__23816 = (0);
seq__23573_23786 = G__23813;
chunk__23575_23787 = G__23814;
count__23576_23788 = G__23815;
i__23577_23789 = G__23816;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23783);
});})(seq__23529_23726,chunk__23533_23727,count__23534_23728,i__23535_23729,seq__23415,chunk__23417,count__23418,i__23419,new_link_23785,path_match_23784,node_23783,seq__23529_23777__$1,temp__5825__auto___23776,path,map__23414,map__23414__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23784], 0));

goog.dom.insertSiblingAfter(new_link_23785,node_23783);


var G__23817 = cljs.core.next(seq__23529_23777__$1);
var G__23818 = null;
var G__23819 = (0);
var G__23820 = (0);
seq__23529_23726 = G__23817;
chunk__23533_23727 = G__23818;
count__23534_23728 = G__23819;
i__23535_23729 = G__23820;
continue;
} else {
var G__23821 = cljs.core.next(seq__23529_23777__$1);
var G__23822 = null;
var G__23823 = (0);
var G__23824 = (0);
seq__23529_23726 = G__23821;
chunk__23533_23727 = G__23822;
count__23534_23728 = G__23823;
i__23535_23729 = G__23824;
continue;
}
} else {
var G__23825 = cljs.core.next(seq__23529_23777__$1);
var G__23826 = null;
var G__23827 = (0);
var G__23828 = (0);
seq__23529_23726 = G__23825;
chunk__23533_23727 = G__23826;
count__23534_23728 = G__23827;
i__23535_23729 = G__23828;
continue;
}
}
} else {
}
}
break;
}


var G__23829 = seq__23415;
var G__23830 = chunk__23417;
var G__23831 = count__23418;
var G__23832 = (i__23419 + (1));
seq__23415 = G__23829;
chunk__23417 = G__23830;
count__23418 = G__23831;
i__23419 = G__23832;
continue;
} else {
var G__23833 = seq__23415;
var G__23834 = chunk__23417;
var G__23835 = count__23418;
var G__23836 = (i__23419 + (1));
seq__23415 = G__23833;
chunk__23417 = G__23834;
count__23418 = G__23835;
i__23419 = G__23836;
continue;
}
} else {
var temp__5825__auto__ = cljs.core.seq(seq__23415);
if(temp__5825__auto__){
var seq__23415__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23415__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__23415__$1);
var G__23837 = cljs.core.chunk_rest(seq__23415__$1);
var G__23838 = c__5694__auto__;
var G__23839 = cljs.core.count(c__5694__auto__);
var G__23840 = (0);
seq__23415 = G__23837;
chunk__23417 = G__23838;
count__23418 = G__23839;
i__23419 = G__23840;
continue;
} else {
var path = cljs.core.first(seq__23415__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__23583_23841 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__23587_23842 = null;
var count__23588_23843 = (0);
var i__23589_23844 = (0);
while(true){
if((i__23589_23844 < count__23588_23843)){
var node_23845 = chunk__23587_23842.cljs$core$IIndexed$_nth$arity$2(null,i__23589_23844);
if(cljs.core.not(node_23845.shadow$old)){
var path_match_23846 = shadow.cljs.devtools.client.browser.match_paths(node_23845.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23846)){
var new_link_23847 = (function (){var G__23615 = node_23845.cloneNode(true);
G__23615.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23846)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__23615;
})();
(node_23845.shadow$old = true);

(new_link_23847.onload = ((function (seq__23583_23841,chunk__23587_23842,count__23588_23843,i__23589_23844,seq__23415,chunk__23417,count__23418,i__23419,new_link_23847,path_match_23846,node_23845,path,seq__23415__$1,temp__5825__auto__,map__23414,map__23414__$1,msg,updates,reload_info){
return (function (e){
var seq__23616_23848 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__23618_23849 = null;
var count__23619_23850 = (0);
var i__23620_23851 = (0);
while(true){
if((i__23620_23851 < count__23619_23850)){
var map__23624_23852 = chunk__23618_23849.cljs$core$IIndexed$_nth$arity$2(null,i__23620_23851);
var map__23624_23853__$1 = cljs.core.__destructure_map(map__23624_23852);
var task_23854 = map__23624_23853__$1;
var fn_str_23855 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23624_23853__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23856 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23624_23853__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23857 = goog.getObjectByName(fn_str_23855,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23856)));

(fn_obj_23857.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23857.cljs$core$IFn$_invoke$arity$2(path,new_link_23847) : fn_obj_23857.call(null,path,new_link_23847));


var G__23858 = seq__23616_23848;
var G__23859 = chunk__23618_23849;
var G__23860 = count__23619_23850;
var G__23861 = (i__23620_23851 + (1));
seq__23616_23848 = G__23858;
chunk__23618_23849 = G__23859;
count__23619_23850 = G__23860;
i__23620_23851 = G__23861;
continue;
} else {
var temp__5825__auto___23862__$1 = cljs.core.seq(seq__23616_23848);
if(temp__5825__auto___23862__$1){
var seq__23616_23863__$1 = temp__5825__auto___23862__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23616_23863__$1)){
var c__5694__auto___23864 = cljs.core.chunk_first(seq__23616_23863__$1);
var G__23865 = cljs.core.chunk_rest(seq__23616_23863__$1);
var G__23866 = c__5694__auto___23864;
var G__23867 = cljs.core.count(c__5694__auto___23864);
var G__23868 = (0);
seq__23616_23848 = G__23865;
chunk__23618_23849 = G__23866;
count__23619_23850 = G__23867;
i__23620_23851 = G__23868;
continue;
} else {
var map__23625_23869 = cljs.core.first(seq__23616_23863__$1);
var map__23625_23870__$1 = cljs.core.__destructure_map(map__23625_23869);
var task_23871 = map__23625_23870__$1;
var fn_str_23872 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23625_23870__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23873 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23625_23870__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23874 = goog.getObjectByName(fn_str_23872,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23873)));

(fn_obj_23874.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23874.cljs$core$IFn$_invoke$arity$2(path,new_link_23847) : fn_obj_23874.call(null,path,new_link_23847));


var G__23875 = cljs.core.next(seq__23616_23863__$1);
var G__23876 = null;
var G__23877 = (0);
var G__23878 = (0);
seq__23616_23848 = G__23875;
chunk__23618_23849 = G__23876;
count__23619_23850 = G__23877;
i__23620_23851 = G__23878;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23845);
});})(seq__23583_23841,chunk__23587_23842,count__23588_23843,i__23589_23844,seq__23415,chunk__23417,count__23418,i__23419,new_link_23847,path_match_23846,node_23845,path,seq__23415__$1,temp__5825__auto__,map__23414,map__23414__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23846], 0));

goog.dom.insertSiblingAfter(new_link_23847,node_23845);


var G__23879 = seq__23583_23841;
var G__23880 = chunk__23587_23842;
var G__23881 = count__23588_23843;
var G__23882 = (i__23589_23844 + (1));
seq__23583_23841 = G__23879;
chunk__23587_23842 = G__23880;
count__23588_23843 = G__23881;
i__23589_23844 = G__23882;
continue;
} else {
var G__23883 = seq__23583_23841;
var G__23884 = chunk__23587_23842;
var G__23885 = count__23588_23843;
var G__23886 = (i__23589_23844 + (1));
seq__23583_23841 = G__23883;
chunk__23587_23842 = G__23884;
count__23588_23843 = G__23885;
i__23589_23844 = G__23886;
continue;
}
} else {
var G__23887 = seq__23583_23841;
var G__23888 = chunk__23587_23842;
var G__23889 = count__23588_23843;
var G__23890 = (i__23589_23844 + (1));
seq__23583_23841 = G__23887;
chunk__23587_23842 = G__23888;
count__23588_23843 = G__23889;
i__23589_23844 = G__23890;
continue;
}
} else {
var temp__5825__auto___23891__$1 = cljs.core.seq(seq__23583_23841);
if(temp__5825__auto___23891__$1){
var seq__23583_23892__$1 = temp__5825__auto___23891__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23583_23892__$1)){
var c__5694__auto___23893 = cljs.core.chunk_first(seq__23583_23892__$1);
var G__23894 = cljs.core.chunk_rest(seq__23583_23892__$1);
var G__23895 = c__5694__auto___23893;
var G__23896 = cljs.core.count(c__5694__auto___23893);
var G__23897 = (0);
seq__23583_23841 = G__23894;
chunk__23587_23842 = G__23895;
count__23588_23843 = G__23896;
i__23589_23844 = G__23897;
continue;
} else {
var node_23898 = cljs.core.first(seq__23583_23892__$1);
if(cljs.core.not(node_23898.shadow$old)){
var path_match_23899 = shadow.cljs.devtools.client.browser.match_paths(node_23898.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23899)){
var new_link_23900 = (function (){var G__23626 = node_23898.cloneNode(true);
G__23626.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23899)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__23626;
})();
(node_23898.shadow$old = true);

(new_link_23900.onload = ((function (seq__23583_23841,chunk__23587_23842,count__23588_23843,i__23589_23844,seq__23415,chunk__23417,count__23418,i__23419,new_link_23900,path_match_23899,node_23898,seq__23583_23892__$1,temp__5825__auto___23891__$1,path,seq__23415__$1,temp__5825__auto__,map__23414,map__23414__$1,msg,updates,reload_info){
return (function (e){
var seq__23627_23901 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__23629_23902 = null;
var count__23630_23903 = (0);
var i__23631_23904 = (0);
while(true){
if((i__23631_23904 < count__23630_23903)){
var map__23635_23905 = chunk__23629_23902.cljs$core$IIndexed$_nth$arity$2(null,i__23631_23904);
var map__23635_23906__$1 = cljs.core.__destructure_map(map__23635_23905);
var task_23907 = map__23635_23906__$1;
var fn_str_23908 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23635_23906__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23909 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23635_23906__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23910 = goog.getObjectByName(fn_str_23908,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23909)));

(fn_obj_23910.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23910.cljs$core$IFn$_invoke$arity$2(path,new_link_23900) : fn_obj_23910.call(null,path,new_link_23900));


var G__23911 = seq__23627_23901;
var G__23912 = chunk__23629_23902;
var G__23913 = count__23630_23903;
var G__23914 = (i__23631_23904 + (1));
seq__23627_23901 = G__23911;
chunk__23629_23902 = G__23912;
count__23630_23903 = G__23913;
i__23631_23904 = G__23914;
continue;
} else {
var temp__5825__auto___23915__$2 = cljs.core.seq(seq__23627_23901);
if(temp__5825__auto___23915__$2){
var seq__23627_23916__$1 = temp__5825__auto___23915__$2;
if(cljs.core.chunked_seq_QMARK_(seq__23627_23916__$1)){
var c__5694__auto___23917 = cljs.core.chunk_first(seq__23627_23916__$1);
var G__23918 = cljs.core.chunk_rest(seq__23627_23916__$1);
var G__23919 = c__5694__auto___23917;
var G__23920 = cljs.core.count(c__5694__auto___23917);
var G__23921 = (0);
seq__23627_23901 = G__23918;
chunk__23629_23902 = G__23919;
count__23630_23903 = G__23920;
i__23631_23904 = G__23921;
continue;
} else {
var map__23636_23922 = cljs.core.first(seq__23627_23916__$1);
var map__23636_23923__$1 = cljs.core.__destructure_map(map__23636_23922);
var task_23924 = map__23636_23923__$1;
var fn_str_23925 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23636_23923__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23926 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23636_23923__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23927 = goog.getObjectByName(fn_str_23925,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23926)));

(fn_obj_23927.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23927.cljs$core$IFn$_invoke$arity$2(path,new_link_23900) : fn_obj_23927.call(null,path,new_link_23900));


var G__23928 = cljs.core.next(seq__23627_23916__$1);
var G__23929 = null;
var G__23930 = (0);
var G__23931 = (0);
seq__23627_23901 = G__23928;
chunk__23629_23902 = G__23929;
count__23630_23903 = G__23930;
i__23631_23904 = G__23931;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23898);
});})(seq__23583_23841,chunk__23587_23842,count__23588_23843,i__23589_23844,seq__23415,chunk__23417,count__23418,i__23419,new_link_23900,path_match_23899,node_23898,seq__23583_23892__$1,temp__5825__auto___23891__$1,path,seq__23415__$1,temp__5825__auto__,map__23414,map__23414__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23899], 0));

goog.dom.insertSiblingAfter(new_link_23900,node_23898);


var G__23932 = cljs.core.next(seq__23583_23892__$1);
var G__23933 = null;
var G__23934 = (0);
var G__23935 = (0);
seq__23583_23841 = G__23932;
chunk__23587_23842 = G__23933;
count__23588_23843 = G__23934;
i__23589_23844 = G__23935;
continue;
} else {
var G__23936 = cljs.core.next(seq__23583_23892__$1);
var G__23937 = null;
var G__23938 = (0);
var G__23939 = (0);
seq__23583_23841 = G__23936;
chunk__23587_23842 = G__23937;
count__23588_23843 = G__23938;
i__23589_23844 = G__23939;
continue;
}
} else {
var G__23940 = cljs.core.next(seq__23583_23892__$1);
var G__23941 = null;
var G__23942 = (0);
var G__23943 = (0);
seq__23583_23841 = G__23940;
chunk__23587_23842 = G__23941;
count__23588_23843 = G__23942;
i__23589_23844 = G__23943;
continue;
}
}
} else {
}
}
break;
}


var G__23944 = cljs.core.next(seq__23415__$1);
var G__23945 = null;
var G__23946 = (0);
var G__23947 = (0);
seq__23415 = G__23944;
chunk__23417 = G__23945;
count__23418 = G__23946;
i__23419 = G__23947;
continue;
} else {
var G__23948 = cljs.core.next(seq__23415__$1);
var G__23949 = null;
var G__23950 = (0);
var G__23951 = (0);
seq__23415 = G__23948;
chunk__23417 = G__23949;
count__23418 = G__23950;
i__23419 = G__23951;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null))))))))+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)+" ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM)+"]"),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$4 = (function (this$,code,success,fail){
var this$__$1 = this;
try{var G__23638 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__23638) : success.call(null,G__23638));
}catch (e23637){var e = e23637;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__23639,success,fail){
var map__23640 = p__23639;
var map__23640__$1 = cljs.core.__destructure_map(map__23640);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23640__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__23642 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__23642) : success.call(null,G__23642));
}catch (e23641){var e = e23641;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__23643,done,error){
var map__23644 = p__23643;
var map__23644__$1 = cljs.core.__destructure_map(map__23644);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23644__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__23645,done,error){
var map__23646 = p__23645;
var map__23646__$1 = cljs.core.__destructure_map(map__23646);
var msg = map__23646__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23646__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23646__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23646__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__23647){
var map__23648 = p__23647;
var map__23648__$1 = cljs.core.__destructure_map(map__23648);
var src = map__23648__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23648__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5160__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5160__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__23649 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__23649) : done.call(null,G__23649));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__23650){
var map__23651 = p__23650;
var map__23651__$1 = cljs.core.__destructure_map(map__23651);
var msg__$1 = map__23651__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23651__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e23652){var ex = e23652;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__23653){
var map__23654 = p__23653;
var map__23654__$1 = cljs.core.__destructure_map(map__23654);
var env = map__23654__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23654__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg((""+"#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))+" ready!"));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error((""+"Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."+" Is the watch for this build running?"));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__23655){
var map__23656 = p__23655;
var map__23656__$1 = cljs.core.__destructure_map(map__23656);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23656__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23656__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__23657){
var map__23658 = p__23657;
var map__23658__$1 = cljs.core.__destructure_map(map__23658);
var svc = map__23658__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23658__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
