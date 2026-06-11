goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__19024){
var map__19025 = p__19024;
var map__19025__$1 = cljs.core.__destructure_map(map__19025);
var m = map__19025__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19025__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19025__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5162__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5825__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5825__auto__)){
var ns = temp__5825__auto__;
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)+"/");
} else {
return null;
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m)));
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19026_19382 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19027_19383 = null;
var count__19028_19384 = (0);
var i__19029_19385 = (0);
while(true){
if((i__19029_19385 < count__19028_19384)){
var f_19386 = chunk__19027_19383.cljs$core$IIndexed$_nth$arity$2(null,i__19029_19385);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19386], 0));


var G__19388 = seq__19026_19382;
var G__19389 = chunk__19027_19383;
var G__19390 = count__19028_19384;
var G__19391 = (i__19029_19385 + (1));
seq__19026_19382 = G__19388;
chunk__19027_19383 = G__19389;
count__19028_19384 = G__19390;
i__19029_19385 = G__19391;
continue;
} else {
var temp__5825__auto___19392 = cljs.core.seq(seq__19026_19382);
if(temp__5825__auto___19392){
var seq__19026_19393__$1 = temp__5825__auto___19392;
if(cljs.core.chunked_seq_QMARK_(seq__19026_19393__$1)){
var c__5694__auto___19394 = cljs.core.chunk_first(seq__19026_19393__$1);
var G__19395 = cljs.core.chunk_rest(seq__19026_19393__$1);
var G__19396 = c__5694__auto___19394;
var G__19397 = cljs.core.count(c__5694__auto___19394);
var G__19398 = (0);
seq__19026_19382 = G__19395;
chunk__19027_19383 = G__19396;
count__19028_19384 = G__19397;
i__19029_19385 = G__19398;
continue;
} else {
var f_19399 = cljs.core.first(seq__19026_19393__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19399], 0));


var G__19402 = cljs.core.next(seq__19026_19393__$1);
var G__19403 = null;
var G__19404 = (0);
var G__19405 = (0);
seq__19026_19382 = G__19402;
chunk__19027_19383 = G__19403;
count__19028_19384 = G__19404;
i__19029_19385 = G__19405;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19406 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5162__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_19406], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_19406)))?cljs.core.second(arglists_19406):arglists_19406)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n  Please see http://clojure.org/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m)))], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n  Please see http://clojure.org/special_forms#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m)))], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19053_19411 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19054_19412 = null;
var count__19055_19413 = (0);
var i__19056_19414 = (0);
while(true){
if((i__19056_19414 < count__19055_19413)){
var vec__19100_19415 = chunk__19054_19412.cljs$core$IIndexed$_nth$arity$2(null,i__19056_19414);
var name_19416 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19100_19415,(0),null);
var map__19103_19417 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19100_19415,(1),null);
var map__19103_19418__$1 = cljs.core.__destructure_map(map__19103_19417);
var doc_19419 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19103_19418__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19420 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19103_19418__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19416], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19420], 0));

if(cljs.core.truth_(doc_19419)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19419], 0));
} else {
}


var G__19421 = seq__19053_19411;
var G__19422 = chunk__19054_19412;
var G__19423 = count__19055_19413;
var G__19424 = (i__19056_19414 + (1));
seq__19053_19411 = G__19421;
chunk__19054_19412 = G__19422;
count__19055_19413 = G__19423;
i__19056_19414 = G__19424;
continue;
} else {
var temp__5825__auto___19426 = cljs.core.seq(seq__19053_19411);
if(temp__5825__auto___19426){
var seq__19053_19427__$1 = temp__5825__auto___19426;
if(cljs.core.chunked_seq_QMARK_(seq__19053_19427__$1)){
var c__5694__auto___19428 = cljs.core.chunk_first(seq__19053_19427__$1);
var G__19430 = cljs.core.chunk_rest(seq__19053_19427__$1);
var G__19431 = c__5694__auto___19428;
var G__19432 = cljs.core.count(c__5694__auto___19428);
var G__19433 = (0);
seq__19053_19411 = G__19430;
chunk__19054_19412 = G__19431;
count__19055_19413 = G__19432;
i__19056_19414 = G__19433;
continue;
} else {
var vec__19133_19434 = cljs.core.first(seq__19053_19427__$1);
var name_19435 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19133_19434,(0),null);
var map__19137_19437 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19133_19434,(1),null);
var map__19137_19438__$1 = cljs.core.__destructure_map(map__19137_19437);
var doc_19439 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19137_19438__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19440 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19137_19438__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19435], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19440], 0));

if(cljs.core.truth_(doc_19439)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19439], 0));
} else {
}


var G__19446 = cljs.core.next(seq__19053_19427__$1);
var G__19447 = null;
var G__19448 = (0);
var G__19449 = (0);
seq__19053_19411 = G__19446;
chunk__19054_19412 = G__19447;
count__19055_19413 = G__19448;
i__19056_19414 = G__19449;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5825__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n))),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5825__auto__)){
var fnspec = temp__5825__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__19163 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__19164 = null;
var count__19165 = (0);
var i__19166 = (0);
while(true){
if((i__19166 < count__19165)){
var role = chunk__19164.cljs$core$IIndexed$_nth$arity$2(null,i__19166);
var temp__5825__auto___19458__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5825__auto___19458__$1)){
var spec_19462 = temp__5825__auto___19458__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role))+":"),cljs.spec.alpha.describe(spec_19462)], 0));
} else {
}


var G__19468 = seq__19163;
var G__19469 = chunk__19164;
var G__19470 = count__19165;
var G__19471 = (i__19166 + (1));
seq__19163 = G__19468;
chunk__19164 = G__19469;
count__19165 = G__19470;
i__19166 = G__19471;
continue;
} else {
var temp__5825__auto____$1 = cljs.core.seq(seq__19163);
if(temp__5825__auto____$1){
var seq__19163__$1 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__19163__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__19163__$1);
var G__19478 = cljs.core.chunk_rest(seq__19163__$1);
var G__19479 = c__5694__auto__;
var G__19480 = cljs.core.count(c__5694__auto__);
var G__19481 = (0);
seq__19163 = G__19478;
chunk__19164 = G__19479;
count__19165 = G__19480;
i__19166 = G__19481;
continue;
} else {
var role = cljs.core.first(seq__19163__$1);
var temp__5825__auto___19489__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5825__auto___19489__$2)){
var spec_19500 = temp__5825__auto___19489__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role))+":"),cljs.spec.alpha.describe(spec_19500)], 0));
} else {
}


var G__19501 = cljs.core.next(seq__19163__$1);
var G__19502 = null;
var G__19503 = (0);
var G__19504 = (0);
seq__19163 = G__19501;
chunk__19164 = G__19502;
count__19165 = G__19503;
i__19166 = G__19504;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__19217 = datafied_throwable;
var map__19217__$1 = cljs.core.__destructure_map(map__19217);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19217__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19217__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19217__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__19218 = cljs.core.last(via);
var map__19218__$1 = cljs.core.__destructure_map(map__19218);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19218__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19218__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19218__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__19219 = data;
var map__19219__$1 = cljs.core.__destructure_map(map__19219);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19219__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19219__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19219__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__19220 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__19220__$1 = cljs.core.__destructure_map(map__19220);
var top_data = map__19220__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19220__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__19226 = phase;
var G__19226__$1 = (((G__19226 instanceof cljs.core.Keyword))?G__19226.fqn:null);
switch (G__19226__$1) {
case "read-source":
var map__19227 = data;
var map__19227__$1 = cljs.core.__destructure_map(map__19227);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19227__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19227__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__19231 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__19231__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19231,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19231);
var G__19231__$2 = (cljs.core.truth_((function (){var fexpr__19235 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19235.cljs$core$IFn$_invoke$arity$1 ? fexpr__19235.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19235.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19231__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19231__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19231__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19231__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__19237 = top_data;
var G__19237__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19237,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19237);
var G__19237__$2 = (cljs.core.truth_((function (){var fexpr__19238 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19238.cljs$core$IFn$_invoke$arity$1 ? fexpr__19238.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19238.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19237__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19237__$1);
var G__19237__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19237__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19237__$2);
var G__19237__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19237__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19237__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19237__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19237__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__19240 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19240,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19240,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19240,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19240,(3),null);
var G__19244 = top_data;
var G__19244__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19244,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__19244);
var G__19244__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19244__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__19244__$1);
var G__19244__$3 = (cljs.core.truth_((function (){var and__5160__auto__ = source__$1;
if(cljs.core.truth_(and__5160__auto__)){
return method;
} else {
return and__5160__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19244__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__19244__$2);
var G__19244__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19244__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19244__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19244__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19244__$4;
}

break;
case "execution":
var vec__19246 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19246,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19246,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19246,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19246,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__19213_SHARP_){
var or__5162__auto__ = (p1__19213_SHARP_ == null);
if(or__5162__auto__){
return or__5162__auto__;
} else {
var fexpr__19249 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19249.cljs$core$IFn$_invoke$arity$1 ? fexpr__19249.cljs$core$IFn$_invoke$arity$1(p1__19213_SHARP_) : fexpr__19249.call(null,p1__19213_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return line;
}
})();
var G__19250 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__19250__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19250,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__19250);
var G__19250__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19250__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19250__$1);
var G__19250__$3 = (cljs.core.truth_((function (){var or__5162__auto__ = fn;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var and__5160__auto__ = source__$1;
if(cljs.core.truth_(and__5160__auto__)){
return method;
} else {
return and__5160__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19250__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5162__auto__ = fn;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__19250__$2);
var G__19250__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19250__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__19250__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19250__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19250__$4;
}

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19226__$1))));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__19270){
var map__19275 = p__19270;
var map__19275__$1 = cljs.core.__destructure_map(map__19275);
var triage_data = map__19275__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19275__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19275__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19275__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19275__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19275__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19275__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19275__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19275__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5162__auto__ = source;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "<cljs repl>";
}
})())+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5162__auto__ = line;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (1);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(column)?(""+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)):"")));
var class_name = cljs.core.name((function (){var or__5162__auto__ = class$;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":(""+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(simple_class)+")"));
var format = goog.string.format;
var G__19298 = phase;
var G__19298__$1 = (((G__19298 instanceof cljs.core.Keyword))?G__19298.fqn:null);
switch (G__19298__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__19301 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__19302 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__19303 = loc;
var G__19304 = (cljs.core.truth_(spec)?(function (){var sb__5816__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19308_19536 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19309_19537 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19310_19538 = true;
var _STAR_print_fn_STAR__temp_val__19311_19539 = (function (x__5817__auto__){
return sb__5816__auto__.append(x__5817__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19310_19538);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19311_19539);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19266_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19266_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19309_19537);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19308_19536);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5816__auto__));
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19301,G__19302,G__19303,G__19304) : format.call(null,G__19301,G__19302,G__19303,G__19304));

break;
case "macroexpansion":
var G__19317 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__19318 = cause_type;
var G__19319 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__19320 = loc;
var G__19321 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19317,G__19318,G__19319,G__19320,G__19321) : format.call(null,G__19317,G__19318,G__19319,G__19320,G__19321));

break;
case "compile-syntax-check":
var G__19323 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__19324 = cause_type;
var G__19325 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__19326 = loc;
var G__19327 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19323,G__19324,G__19325,G__19326,G__19327) : format.call(null,G__19323,G__19324,G__19325,G__19326,G__19327));

break;
case "compilation":
var G__19330 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__19331 = cause_type;
var G__19332 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__19333 = loc;
var G__19334 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19330,G__19331,G__19332,G__19333,G__19334) : format.call(null,G__19330,G__19331,G__19332,G__19333,G__19334));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__19338 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__19339 = symbol;
var G__19340 = loc;
var G__19341 = (function (){var sb__5816__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19343_19552 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19344_19553 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19345_19554 = true;
var _STAR_print_fn_STAR__temp_val__19346_19555 = (function (x__5817__auto__){
return sb__5816__auto__.append(x__5817__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19345_19554);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19346_19555);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19267_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19267_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19344_19553);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19343_19552);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5816__auto__));
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19338,G__19339,G__19340,G__19341) : format.call(null,G__19338,G__19339,G__19340,G__19341));
} else {
var G__19354 = "Execution error%s at %s(%s).\n%s\n";
var G__19356 = cause_type;
var G__19358 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__19359 = loc;
var G__19361 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19354,G__19356,G__19358,G__19359,G__19361) : format.call(null,G__19354,G__19356,G__19358,G__19359,G__19361));
}

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19298__$1))));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
