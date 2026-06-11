goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_16458 = (function (this$){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5520__auto__.call(null,this$));
} else {
var m__5518__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5518__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_16458(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_16465 = (function (this$){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5520__auto__.call(null,this$));
} else {
var m__5518__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5518__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_16465(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__14783 = coll;
var G__14784 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__14783,G__14784) : shadow.dom.lazy_native_coll_seq.call(null,G__14783,G__14784));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5162__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(el)));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__14802 = arguments.length;
switch (G__14802) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__14845 = arguments.length;
switch (G__14845) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__14853 = arguments.length;
switch (G__14853) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__14901 = arguments.length;
switch (G__14901) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__14912 = arguments.length;
switch (G__14912) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__14997 = arguments.length;
switch (G__14997) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5162__auto__ = (!((typeof document !== 'undefined')));
if(or__5162__auto__){
return or__5162__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent((""+"on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e15065){if((e15065 instanceof Object)){
var e = e15065;
return console.log("didnt support attachEvent",el,e);
} else {
throw e15065;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5162__auto__ = (!((typeof document !== 'undefined')));
if(or__5162__auto__){
return or__5162__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent((""+"on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__15098 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__15099 = null;
var count__15100 = (0);
var i__15101 = (0);
while(true){
if((i__15101 < count__15100)){
var el = chunk__15099.cljs$core$IIndexed$_nth$arity$2(null,i__15101);
var handler_16524__$1 = ((function (seq__15098,chunk__15099,count__15100,i__15101,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__15098,chunk__15099,count__15100,i__15101,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_16524__$1);


var G__16525 = seq__15098;
var G__16526 = chunk__15099;
var G__16527 = count__15100;
var G__16528 = (i__15101 + (1));
seq__15098 = G__16525;
chunk__15099 = G__16526;
count__15100 = G__16527;
i__15101 = G__16528;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__15098);
if(temp__5825__auto__){
var seq__15098__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15098__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__15098__$1);
var G__16530 = cljs.core.chunk_rest(seq__15098__$1);
var G__16531 = c__5694__auto__;
var G__16532 = cljs.core.count(c__5694__auto__);
var G__16533 = (0);
seq__15098 = G__16530;
chunk__15099 = G__16531;
count__15100 = G__16532;
i__15101 = G__16533;
continue;
} else {
var el = cljs.core.first(seq__15098__$1);
var handler_16534__$1 = ((function (seq__15098,chunk__15099,count__15100,i__15101,el,seq__15098__$1,temp__5825__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__15098,chunk__15099,count__15100,i__15101,el,seq__15098__$1,temp__5825__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_16534__$1);


var G__16535 = cljs.core.next(seq__15098__$1);
var G__16536 = null;
var G__16537 = (0);
var G__16538 = (0);
seq__15098 = G__16535;
chunk__15099 = G__16536;
count__15100 = G__16537;
i__15101 = G__16538;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__15197 = arguments.length;
switch (G__15197) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__15245 = cljs.core.seq(events);
var chunk__15246 = null;
var count__15247 = (0);
var i__15248 = (0);
while(true){
if((i__15248 < count__15247)){
var vec__15307 = chunk__15246.cljs$core$IIndexed$_nth$arity$2(null,i__15248);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15307,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15307,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__16545 = seq__15245;
var G__16546 = chunk__15246;
var G__16547 = count__15247;
var G__16548 = (i__15248 + (1));
seq__15245 = G__16545;
chunk__15246 = G__16546;
count__15247 = G__16547;
i__15248 = G__16548;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__15245);
if(temp__5825__auto__){
var seq__15245__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15245__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__15245__$1);
var G__16553 = cljs.core.chunk_rest(seq__15245__$1);
var G__16554 = c__5694__auto__;
var G__16555 = cljs.core.count(c__5694__auto__);
var G__16556 = (0);
seq__15245 = G__16553;
chunk__15246 = G__16554;
count__15247 = G__16555;
i__15248 = G__16556;
continue;
} else {
var vec__15315 = cljs.core.first(seq__15245__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15315,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15315,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__16558 = cljs.core.next(seq__15245__$1);
var G__16559 = null;
var G__16560 = (0);
var G__16561 = (0);
seq__15245 = G__16558;
chunk__15246 = G__16559;
count__15247 = G__16560;
i__15248 = G__16561;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__15324 = cljs.core.seq(styles);
var chunk__15325 = null;
var count__15326 = (0);
var i__15327 = (0);
while(true){
if((i__15327 < count__15326)){
var vec__15343 = chunk__15325.cljs$core$IIndexed$_nth$arity$2(null,i__15327);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15343,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15343,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__16563 = seq__15324;
var G__16564 = chunk__15325;
var G__16565 = count__15326;
var G__16566 = (i__15327 + (1));
seq__15324 = G__16563;
chunk__15325 = G__16564;
count__15326 = G__16565;
i__15327 = G__16566;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__15324);
if(temp__5825__auto__){
var seq__15324__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15324__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__15324__$1);
var G__16567 = cljs.core.chunk_rest(seq__15324__$1);
var G__16568 = c__5694__auto__;
var G__16569 = cljs.core.count(c__5694__auto__);
var G__16570 = (0);
seq__15324 = G__16567;
chunk__15325 = G__16568;
count__15326 = G__16569;
i__15327 = G__16570;
continue;
} else {
var vec__15369 = cljs.core.first(seq__15324__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15369,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15369,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__16571 = cljs.core.next(seq__15324__$1);
var G__16572 = null;
var G__16573 = (0);
var G__16574 = (0);
seq__15324 = G__16571;
chunk__15325 = G__16572;
count__15326 = G__16573;
i__15327 = G__16574;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__15394_16575 = key;
var G__15394_16576__$1 = (((G__15394_16575 instanceof cljs.core.Keyword))?G__15394_16575.fqn:null);
switch (G__15394_16576__$1) {
case "id":
(el.id = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));

break;
case "class":
(el.className = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_16585 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5162__auto__ = goog.string.startsWith(ks_16585,"data-");
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return goog.string.startsWith(ks_16585,"aria-");
}
})())){
el.setAttribute(ks_16585,value);
} else {
(el[ks_16585] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class));
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw (""+"cant have id after class?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec__$1));
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__15441){
var map__15444 = p__15441;
var map__15444__$1 = cljs.core.__destructure_map(map__15444);
var props = map__15444__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15444__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__15450 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15450,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15450,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15450,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__15454 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__15454,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__15454;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__15460 = arguments.length;
switch (G__15460) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5825__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5825__auto__)){
var n = temp__5825__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5825__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5825__auto__)){
var n = temp__5825__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__15477){
var vec__15478 = p__15477;
var seq__15479 = cljs.core.seq(vec__15478);
var first__15480 = cljs.core.first(seq__15479);
var seq__15479__$1 = cljs.core.next(seq__15479);
var nn = first__15480;
var first__15480__$1 = cljs.core.first(seq__15479__$1);
var seq__15479__$2 = cljs.core.next(seq__15479__$1);
var np = first__15480__$1;
var nc = seq__15479__$2;
var node = vec__15478;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__15484 = nn;
var G__15485 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__15484,G__15485) : create_fn.call(null,G__15484,G__15485));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__15494 = nn;
var G__15495 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__15494,G__15495) : create_fn.call(null,G__15494,G__15495));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__15500 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15500,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15500,(1),null);
var seq__15503_16599 = cljs.core.seq(node_children);
var chunk__15504_16600 = null;
var count__15505_16601 = (0);
var i__15506_16602 = (0);
while(true){
if((i__15506_16602 < count__15505_16601)){
var child_struct_16607 = chunk__15504_16600.cljs$core$IIndexed$_nth$arity$2(null,i__15506_16602);
var children_16609 = shadow.dom.dom_node(child_struct_16607);
if(cljs.core.seq_QMARK_(children_16609)){
var seq__15545_16612 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_16609));
var chunk__15547_16613 = null;
var count__15548_16614 = (0);
var i__15549_16615 = (0);
while(true){
if((i__15549_16615 < count__15548_16614)){
var child_16616 = chunk__15547_16613.cljs$core$IIndexed$_nth$arity$2(null,i__15549_16615);
if(cljs.core.truth_(child_16616)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16616);


var G__16619 = seq__15545_16612;
var G__16620 = chunk__15547_16613;
var G__16621 = count__15548_16614;
var G__16622 = (i__15549_16615 + (1));
seq__15545_16612 = G__16619;
chunk__15547_16613 = G__16620;
count__15548_16614 = G__16621;
i__15549_16615 = G__16622;
continue;
} else {
var G__16627 = seq__15545_16612;
var G__16628 = chunk__15547_16613;
var G__16629 = count__15548_16614;
var G__16630 = (i__15549_16615 + (1));
seq__15545_16612 = G__16627;
chunk__15547_16613 = G__16628;
count__15548_16614 = G__16629;
i__15549_16615 = G__16630;
continue;
}
} else {
var temp__5825__auto___16631 = cljs.core.seq(seq__15545_16612);
if(temp__5825__auto___16631){
var seq__15545_16632__$1 = temp__5825__auto___16631;
if(cljs.core.chunked_seq_QMARK_(seq__15545_16632__$1)){
var c__5694__auto___16633 = cljs.core.chunk_first(seq__15545_16632__$1);
var G__16637 = cljs.core.chunk_rest(seq__15545_16632__$1);
var G__16638 = c__5694__auto___16633;
var G__16639 = cljs.core.count(c__5694__auto___16633);
var G__16640 = (0);
seq__15545_16612 = G__16637;
chunk__15547_16613 = G__16638;
count__15548_16614 = G__16639;
i__15549_16615 = G__16640;
continue;
} else {
var child_16641 = cljs.core.first(seq__15545_16632__$1);
if(cljs.core.truth_(child_16641)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16641);


var G__16642 = cljs.core.next(seq__15545_16632__$1);
var G__16643 = null;
var G__16644 = (0);
var G__16645 = (0);
seq__15545_16612 = G__16642;
chunk__15547_16613 = G__16643;
count__15548_16614 = G__16644;
i__15549_16615 = G__16645;
continue;
} else {
var G__16646 = cljs.core.next(seq__15545_16632__$1);
var G__16647 = null;
var G__16648 = (0);
var G__16649 = (0);
seq__15545_16612 = G__16646;
chunk__15547_16613 = G__16647;
count__15548_16614 = G__16648;
i__15549_16615 = G__16649;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_16609);
}


var G__16650 = seq__15503_16599;
var G__16651 = chunk__15504_16600;
var G__16652 = count__15505_16601;
var G__16653 = (i__15506_16602 + (1));
seq__15503_16599 = G__16650;
chunk__15504_16600 = G__16651;
count__15505_16601 = G__16652;
i__15506_16602 = G__16653;
continue;
} else {
var temp__5825__auto___16654 = cljs.core.seq(seq__15503_16599);
if(temp__5825__auto___16654){
var seq__15503_16657__$1 = temp__5825__auto___16654;
if(cljs.core.chunked_seq_QMARK_(seq__15503_16657__$1)){
var c__5694__auto___16658 = cljs.core.chunk_first(seq__15503_16657__$1);
var G__16660 = cljs.core.chunk_rest(seq__15503_16657__$1);
var G__16661 = c__5694__auto___16658;
var G__16662 = cljs.core.count(c__5694__auto___16658);
var G__16663 = (0);
seq__15503_16599 = G__16660;
chunk__15504_16600 = G__16661;
count__15505_16601 = G__16662;
i__15506_16602 = G__16663;
continue;
} else {
var child_struct_16664 = cljs.core.first(seq__15503_16657__$1);
var children_16665 = shadow.dom.dom_node(child_struct_16664);
if(cljs.core.seq_QMARK_(children_16665)){
var seq__15599_16667 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_16665));
var chunk__15601_16668 = null;
var count__15602_16669 = (0);
var i__15603_16670 = (0);
while(true){
if((i__15603_16670 < count__15602_16669)){
var child_16673 = chunk__15601_16668.cljs$core$IIndexed$_nth$arity$2(null,i__15603_16670);
if(cljs.core.truth_(child_16673)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16673);


var G__16675 = seq__15599_16667;
var G__16676 = chunk__15601_16668;
var G__16677 = count__15602_16669;
var G__16678 = (i__15603_16670 + (1));
seq__15599_16667 = G__16675;
chunk__15601_16668 = G__16676;
count__15602_16669 = G__16677;
i__15603_16670 = G__16678;
continue;
} else {
var G__16679 = seq__15599_16667;
var G__16680 = chunk__15601_16668;
var G__16681 = count__15602_16669;
var G__16682 = (i__15603_16670 + (1));
seq__15599_16667 = G__16679;
chunk__15601_16668 = G__16680;
count__15602_16669 = G__16681;
i__15603_16670 = G__16682;
continue;
}
} else {
var temp__5825__auto___16683__$1 = cljs.core.seq(seq__15599_16667);
if(temp__5825__auto___16683__$1){
var seq__15599_16684__$1 = temp__5825__auto___16683__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15599_16684__$1)){
var c__5694__auto___16685 = cljs.core.chunk_first(seq__15599_16684__$1);
var G__16686 = cljs.core.chunk_rest(seq__15599_16684__$1);
var G__16687 = c__5694__auto___16685;
var G__16688 = cljs.core.count(c__5694__auto___16685);
var G__16689 = (0);
seq__15599_16667 = G__16686;
chunk__15601_16668 = G__16687;
count__15602_16669 = G__16688;
i__15603_16670 = G__16689;
continue;
} else {
var child_16690 = cljs.core.first(seq__15599_16684__$1);
if(cljs.core.truth_(child_16690)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16690);


var G__16695 = cljs.core.next(seq__15599_16684__$1);
var G__16696 = null;
var G__16697 = (0);
var G__16699 = (0);
seq__15599_16667 = G__16695;
chunk__15601_16668 = G__16696;
count__15602_16669 = G__16697;
i__15603_16670 = G__16699;
continue;
} else {
var G__16700 = cljs.core.next(seq__15599_16684__$1);
var G__16701 = null;
var G__16702 = (0);
var G__16703 = (0);
seq__15599_16667 = G__16700;
chunk__15601_16668 = G__16701;
count__15602_16669 = G__16702;
i__15603_16670 = G__16703;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_16665);
}


var G__16704 = cljs.core.next(seq__15503_16657__$1);
var G__16705 = null;
var G__16706 = (0);
var G__16707 = (0);
seq__15503_16599 = G__16704;
chunk__15504_16600 = G__16705;
count__15505_16601 = G__16706;
i__15506_16602 = G__16707;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__15713 = cljs.core.seq(node);
var chunk__15714 = null;
var count__15715 = (0);
var i__15716 = (0);
while(true){
if((i__15716 < count__15715)){
var n = chunk__15714.cljs$core$IIndexed$_nth$arity$2(null,i__15716);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__16710 = seq__15713;
var G__16711 = chunk__15714;
var G__16712 = count__15715;
var G__16713 = (i__15716 + (1));
seq__15713 = G__16710;
chunk__15714 = G__16711;
count__15715 = G__16712;
i__15716 = G__16713;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__15713);
if(temp__5825__auto__){
var seq__15713__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15713__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__15713__$1);
var G__16714 = cljs.core.chunk_rest(seq__15713__$1);
var G__16715 = c__5694__auto__;
var G__16716 = cljs.core.count(c__5694__auto__);
var G__16717 = (0);
seq__15713 = G__16714;
chunk__15714 = G__16715;
count__15715 = G__16716;
i__15716 = G__16717;
continue;
} else {
var n = cljs.core.first(seq__15713__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__16719 = cljs.core.next(seq__15713__$1);
var G__16720 = null;
var G__16721 = (0);
var G__16722 = (0);
seq__15713 = G__16719;
chunk__15714 = G__16720;
count__15715 = G__16721;
i__15716 = G__16722;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__15745 = arguments.length;
switch (G__15745) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__15755 = arguments.length;
switch (G__15755) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__15765 = arguments.length;
switch (G__15765) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5162__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute((""+"data-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute((""+"data-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5903__auto__ = [];
var len__5897__auto___16743 = arguments.length;
var i__5898__auto___16744 = (0);
while(true){
if((i__5898__auto___16744 < len__5897__auto___16743)){
args__5903__auto__.push((arguments[i__5898__auto___16744]));

var G__16745 = (i__5898__auto___16744 + (1));
i__5898__auto___16744 = G__16745;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__15773_16751 = cljs.core.seq(nodes);
var chunk__15774_16752 = null;
var count__15775_16753 = (0);
var i__15776_16754 = (0);
while(true){
if((i__15776_16754 < count__15775_16753)){
var node_16761 = chunk__15774_16752.cljs$core$IIndexed$_nth$arity$2(null,i__15776_16754);
fragment.appendChild(shadow.dom._to_dom(node_16761));


var G__16762 = seq__15773_16751;
var G__16763 = chunk__15774_16752;
var G__16764 = count__15775_16753;
var G__16765 = (i__15776_16754 + (1));
seq__15773_16751 = G__16762;
chunk__15774_16752 = G__16763;
count__15775_16753 = G__16764;
i__15776_16754 = G__16765;
continue;
} else {
var temp__5825__auto___16766 = cljs.core.seq(seq__15773_16751);
if(temp__5825__auto___16766){
var seq__15773_16768__$1 = temp__5825__auto___16766;
if(cljs.core.chunked_seq_QMARK_(seq__15773_16768__$1)){
var c__5694__auto___16769 = cljs.core.chunk_first(seq__15773_16768__$1);
var G__16770 = cljs.core.chunk_rest(seq__15773_16768__$1);
var G__16771 = c__5694__auto___16769;
var G__16772 = cljs.core.count(c__5694__auto___16769);
var G__16773 = (0);
seq__15773_16751 = G__16770;
chunk__15774_16752 = G__16771;
count__15775_16753 = G__16772;
i__15776_16754 = G__16773;
continue;
} else {
var node_16775 = cljs.core.first(seq__15773_16768__$1);
fragment.appendChild(shadow.dom._to_dom(node_16775));


var G__16777 = cljs.core.next(seq__15773_16768__$1);
var G__16778 = null;
var G__16779 = (0);
var G__16780 = (0);
seq__15773_16751 = G__16777;
chunk__15774_16752 = G__16778;
count__15775_16753 = G__16779;
i__15776_16754 = G__16780;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq15770){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15770));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__15784_16784 = cljs.core.seq(scripts);
var chunk__15785_16785 = null;
var count__15786_16786 = (0);
var i__15787_16787 = (0);
while(true){
if((i__15787_16787 < count__15786_16786)){
var vec__15795_16790 = chunk__15785_16785.cljs$core$IIndexed$_nth$arity$2(null,i__15787_16787);
var script_tag_16791 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15795_16790,(0),null);
var script_body_16792 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15795_16790,(1),null);
eval(script_body_16792);


var G__16795 = seq__15784_16784;
var G__16797 = chunk__15785_16785;
var G__16798 = count__15786_16786;
var G__16799 = (i__15787_16787 + (1));
seq__15784_16784 = G__16795;
chunk__15785_16785 = G__16797;
count__15786_16786 = G__16798;
i__15787_16787 = G__16799;
continue;
} else {
var temp__5825__auto___16802 = cljs.core.seq(seq__15784_16784);
if(temp__5825__auto___16802){
var seq__15784_16803__$1 = temp__5825__auto___16802;
if(cljs.core.chunked_seq_QMARK_(seq__15784_16803__$1)){
var c__5694__auto___16805 = cljs.core.chunk_first(seq__15784_16803__$1);
var G__16806 = cljs.core.chunk_rest(seq__15784_16803__$1);
var G__16807 = c__5694__auto___16805;
var G__16808 = cljs.core.count(c__5694__auto___16805);
var G__16809 = (0);
seq__15784_16784 = G__16806;
chunk__15785_16785 = G__16807;
count__15786_16786 = G__16808;
i__15787_16787 = G__16809;
continue;
} else {
var vec__15801_16813 = cljs.core.first(seq__15784_16803__$1);
var script_tag_16814 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15801_16813,(0),null);
var script_body_16815 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15801_16813,(1),null);
eval(script_body_16815);


var G__16817 = cljs.core.next(seq__15784_16803__$1);
var G__16818 = null;
var G__16819 = (0);
var G__16820 = (0);
seq__15784_16784 = G__16817;
chunk__15785_16785 = G__16818;
count__15786_16786 = G__16819;
i__15787_16787 = G__16820;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__15804){
var vec__15805 = p__15804;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15805,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15805,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__15820 = arguments.length;
switch (G__15820) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | 0))+"px");
});
shadow.dom.pct = (function shadow$dom$pct(value){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)+"%");
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__15849 = cljs.core.seq(style_keys);
var chunk__15850 = null;
var count__15851 = (0);
var i__15852 = (0);
while(true){
if((i__15852 < count__15851)){
var it = chunk__15850.cljs$core$IIndexed$_nth$arity$2(null,i__15852);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__16847 = seq__15849;
var G__16848 = chunk__15850;
var G__16849 = count__15851;
var G__16850 = (i__15852 + (1));
seq__15849 = G__16847;
chunk__15850 = G__16848;
count__15851 = G__16849;
i__15852 = G__16850;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__15849);
if(temp__5825__auto__){
var seq__15849__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15849__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__15849__$1);
var G__16852 = cljs.core.chunk_rest(seq__15849__$1);
var G__16853 = c__5694__auto__;
var G__16854 = cljs.core.count(c__5694__auto__);
var G__16855 = (0);
seq__15849 = G__16852;
chunk__15850 = G__16853;
count__15851 = G__16854;
i__15852 = G__16855;
continue;
} else {
var it = cljs.core.first(seq__15849__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__16856 = cljs.core.next(seq__15849__$1);
var G__16857 = null;
var G__16858 = (0);
var G__16859 = (0);
seq__15849 = G__16856;
chunk__15850 = G__16857;
count__15851 = G__16858;
i__15852 = G__16859;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5469__auto__,k__5470__auto__){
var self__ = this;
var this__5469__auto____$1 = this;
return this__5469__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5470__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5471__auto__,k15897,else__5472__auto__){
var self__ = this;
var this__5471__auto____$1 = this;
var G__15967 = k15897;
var G__15967__$1 = (((G__15967 instanceof cljs.core.Keyword))?G__15967.fqn:null);
switch (G__15967__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15897,else__5472__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5489__auto__,f__5490__auto__,init__5491__auto__){
var self__ = this;
var this__5489__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5492__auto__,p__15973){
var vec__15974 = p__15973;
var k__5493__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15974,(0),null);
var v__5494__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15974,(1),null);
return (f__5490__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5490__auto__.cljs$core$IFn$_invoke$arity$3(ret__5492__auto__,k__5493__auto__,v__5494__auto__) : f__5490__auto__.call(null,ret__5492__auto__,k__5493__auto__,v__5494__auto__));
}),init__5491__auto__,this__5489__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer(writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});
return cljs.core.pr_sequential_writer(writer__5485__auto__,pr_pair__5487__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5486__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15896){
var self__ = this;
var G__15896__$1 = this;
return (new cljs.core.RecordIter((0),G__15896__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5467__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5473__auto__){
var self__ = this;
var this__5473__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5272__auto__ = self__.__hash;
if((!((h__5272__auto__ == null)))){
return h__5272__auto__;
} else {
var h__5272__auto____$1 = (function (coll__5466__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5466__auto__));
})(this__5465__auto____$1);
(self__.__hash = h__5272__auto____$1);

return h__5272__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15898,other15899){
var self__ = this;
var this15898__$1 = this;
return (((!((other15899 == null)))) && ((((this15898__$1.constructor === other15899.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15898__$1.x,other15899.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15898__$1.y,other15899.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15898__$1.__extmap,other15899.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5480__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5480__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5476__auto__,k15897){
var self__ = this;
var this__5476__auto____$1 = this;
var G__16001 = k15897;
var G__16001__$1 = (((G__16001 instanceof cljs.core.Keyword))?G__16001.fqn:null);
switch (G__16001__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k15897);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__15896){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__16003 = cljs.core.keyword_identical_QMARK_;
var expr__16004 = k__5478__auto__;
if(cljs.core.truth_((pred__16003.cljs$core$IFn$_invoke$arity$2 ? pred__16003.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__16004) : pred__16003.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__16004)))){
return (new shadow.dom.Coordinate(G__15896,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__16003.cljs$core$IFn$_invoke$arity$2 ? pred__16003.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__16004) : pred__16003.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__16004)))){
return (new shadow.dom.Coordinate(self__.x,G__15896,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5478__auto__,G__15896),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5468__auto__,G__15896){
var self__ = this;
var this__5468__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__15896,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5474__auto__,entry__5475__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5475__auto__)){
return this__5474__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5475__auto__,(0)),cljs.core._nth(entry__5475__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5474__auto____$1,entry__5475__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5515__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5515__auto__,writer__5516__auto__){
return cljs.core._write(writer__5516__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__15909){
var extmap__5511__auto__ = (function (){var G__16008 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15909,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__15909)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__16008);
} else {
return G__16008;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__15909),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__15909),null,cljs.core.not_empty(extmap__5511__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5469__auto__,k__5470__auto__){
var self__ = this;
var this__5469__auto____$1 = this;
return this__5469__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5470__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5471__auto__,k16013,else__5472__auto__){
var self__ = this;
var this__5471__auto____$1 = this;
var G__16022 = k16013;
var G__16022__$1 = (((G__16022 instanceof cljs.core.Keyword))?G__16022.fqn:null);
switch (G__16022__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16013,else__5472__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5489__auto__,f__5490__auto__,init__5491__auto__){
var self__ = this;
var this__5489__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5492__auto__,p__16025){
var vec__16026 = p__16025;
var k__5493__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16026,(0),null);
var v__5494__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16026,(1),null);
return (f__5490__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5490__auto__.cljs$core$IFn$_invoke$arity$3(ret__5492__auto__,k__5493__auto__,v__5494__auto__) : f__5490__auto__.call(null,ret__5492__auto__,k__5493__auto__,v__5494__auto__));
}),init__5491__auto__,this__5489__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer(writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});
return cljs.core.pr_sequential_writer(writer__5485__auto__,pr_pair__5487__auto__,"#shadow.dom.Size{",", ","}",opts__5486__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16012){
var self__ = this;
var G__16012__$1 = this;
return (new cljs.core.RecordIter((0),G__16012__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5467__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5473__auto__){
var self__ = this;
var this__5473__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5272__auto__ = self__.__hash;
if((!((h__5272__auto__ == null)))){
return h__5272__auto__;
} else {
var h__5272__auto____$1 = (function (coll__5466__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5466__auto__));
})(this__5465__auto____$1);
(self__.__hash = h__5272__auto____$1);

return h__5272__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16014,other16015){
var self__ = this;
var this16014__$1 = this;
return (((!((other16015 == null)))) && ((((this16014__$1.constructor === other16015.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16014__$1.w,other16015.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16014__$1.h,other16015.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16014__$1.__extmap,other16015.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5480__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5480__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5476__auto__,k16013){
var self__ = this;
var this__5476__auto____$1 = this;
var G__16042 = k16013;
var G__16042__$1 = (((G__16042 instanceof cljs.core.Keyword))?G__16042.fqn:null);
switch (G__16042__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k16013);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__16012){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__16045 = cljs.core.keyword_identical_QMARK_;
var expr__16046 = k__5478__auto__;
if(cljs.core.truth_((pred__16045.cljs$core$IFn$_invoke$arity$2 ? pred__16045.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__16046) : pred__16045.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__16046)))){
return (new shadow.dom.Size(G__16012,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__16045.cljs$core$IFn$_invoke$arity$2 ? pred__16045.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__16046) : pred__16045.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__16046)))){
return (new shadow.dom.Size(self__.w,G__16012,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5478__auto__,G__16012),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5468__auto__,G__16012){
var self__ = this;
var this__5468__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__16012,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5474__auto__,entry__5475__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5475__auto__)){
return this__5474__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5475__auto__,(0)),cljs.core._nth(entry__5475__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5474__auto____$1,entry__5475__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5515__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5515__auto__,writer__5516__auto__){
return cljs.core._write(writer__5516__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__16016){
var extmap__5511__auto__ = (function (){var G__16070 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16016,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__16016)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__16070);
} else {
return G__16070;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__16016),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__16016),null,cljs.core.not_empty(extmap__5511__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5759__auto__ = opts;
var l__5760__auto__ = a__5759__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5760__auto__)){
var G__16965 = (i + (1));
var G__16966 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__16965;
ret = G__16966;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__16102){
var vec__16104 = p__16102;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16104,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16104,(1),null);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))));
}),query_params))));
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__16111 = arguments.length;
switch (G__16111) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5823__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5823__auto__)){
var child = temp__5823__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__16988 = ps;
var G__16989 = (i + (1));
el__$1 = G__16988;
i = G__16989;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__16160 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16160,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16160,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16160,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__16163_17004 = cljs.core.seq(props);
var chunk__16164_17005 = null;
var count__16165_17006 = (0);
var i__16166_17007 = (0);
while(true){
if((i__16166_17007 < count__16165_17006)){
var vec__16182_17009 = chunk__16164_17005.cljs$core$IIndexed$_nth$arity$2(null,i__16166_17007);
var k_17010 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16182_17009,(0),null);
var v_17011 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16182_17009,(1),null);
el.setAttributeNS((function (){var temp__5825__auto__ = cljs.core.namespace(k_17010);
if(cljs.core.truth_(temp__5825__auto__)){
var ns = temp__5825__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_17010),v_17011);


var G__17012 = seq__16163_17004;
var G__17013 = chunk__16164_17005;
var G__17014 = count__16165_17006;
var G__17015 = (i__16166_17007 + (1));
seq__16163_17004 = G__17012;
chunk__16164_17005 = G__17013;
count__16165_17006 = G__17014;
i__16166_17007 = G__17015;
continue;
} else {
var temp__5825__auto___17017 = cljs.core.seq(seq__16163_17004);
if(temp__5825__auto___17017){
var seq__16163_17018__$1 = temp__5825__auto___17017;
if(cljs.core.chunked_seq_QMARK_(seq__16163_17018__$1)){
var c__5694__auto___17019 = cljs.core.chunk_first(seq__16163_17018__$1);
var G__17020 = cljs.core.chunk_rest(seq__16163_17018__$1);
var G__17021 = c__5694__auto___17019;
var G__17022 = cljs.core.count(c__5694__auto___17019);
var G__17023 = (0);
seq__16163_17004 = G__17020;
chunk__16164_17005 = G__17021;
count__16165_17006 = G__17022;
i__16166_17007 = G__17023;
continue;
} else {
var vec__16190_17024 = cljs.core.first(seq__16163_17018__$1);
var k_17025 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16190_17024,(0),null);
var v_17026 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16190_17024,(1),null);
el.setAttributeNS((function (){var temp__5825__auto____$1 = cljs.core.namespace(k_17025);
if(cljs.core.truth_(temp__5825__auto____$1)){
var ns = temp__5825__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_17025),v_17026);


var G__17030 = cljs.core.next(seq__16163_17018__$1);
var G__17031 = null;
var G__17032 = (0);
var G__17033 = (0);
seq__16163_17004 = G__17030;
chunk__16164_17005 = G__17031;
count__16165_17006 = G__17032;
i__16166_17007 = G__17033;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__16200 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16200,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16200,(1),null);
var seq__16206_17043 = cljs.core.seq(node_children);
var chunk__16208_17044 = null;
var count__16209_17045 = (0);
var i__16210_17046 = (0);
while(true){
if((i__16210_17046 < count__16209_17045)){
var child_struct_17050 = chunk__16208_17044.cljs$core$IIndexed$_nth$arity$2(null,i__16210_17046);
if((!((child_struct_17050 == null)))){
if(typeof child_struct_17050 === 'string'){
var text_17051 = (node["textContent"]);
(node["textContent"] = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_17051)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_17050)));
} else {
var children_17052 = shadow.dom.svg_node(child_struct_17050);
if(cljs.core.seq_QMARK_(children_17052)){
var seq__16288_17055 = cljs.core.seq(children_17052);
var chunk__16290_17056 = null;
var count__16291_17057 = (0);
var i__16292_17058 = (0);
while(true){
if((i__16292_17058 < count__16291_17057)){
var child_17063 = chunk__16290_17056.cljs$core$IIndexed$_nth$arity$2(null,i__16292_17058);
if(cljs.core.truth_(child_17063)){
node.appendChild(child_17063);


var G__17069 = seq__16288_17055;
var G__17070 = chunk__16290_17056;
var G__17071 = count__16291_17057;
var G__17072 = (i__16292_17058 + (1));
seq__16288_17055 = G__17069;
chunk__16290_17056 = G__17070;
count__16291_17057 = G__17071;
i__16292_17058 = G__17072;
continue;
} else {
var G__17076 = seq__16288_17055;
var G__17077 = chunk__16290_17056;
var G__17078 = count__16291_17057;
var G__17079 = (i__16292_17058 + (1));
seq__16288_17055 = G__17076;
chunk__16290_17056 = G__17077;
count__16291_17057 = G__17078;
i__16292_17058 = G__17079;
continue;
}
} else {
var temp__5825__auto___17080 = cljs.core.seq(seq__16288_17055);
if(temp__5825__auto___17080){
var seq__16288_17082__$1 = temp__5825__auto___17080;
if(cljs.core.chunked_seq_QMARK_(seq__16288_17082__$1)){
var c__5694__auto___17084 = cljs.core.chunk_first(seq__16288_17082__$1);
var G__17085 = cljs.core.chunk_rest(seq__16288_17082__$1);
var G__17086 = c__5694__auto___17084;
var G__17087 = cljs.core.count(c__5694__auto___17084);
var G__17088 = (0);
seq__16288_17055 = G__17085;
chunk__16290_17056 = G__17086;
count__16291_17057 = G__17087;
i__16292_17058 = G__17088;
continue;
} else {
var child_17089 = cljs.core.first(seq__16288_17082__$1);
if(cljs.core.truth_(child_17089)){
node.appendChild(child_17089);


var G__17090 = cljs.core.next(seq__16288_17082__$1);
var G__17091 = null;
var G__17092 = (0);
var G__17093 = (0);
seq__16288_17055 = G__17090;
chunk__16290_17056 = G__17091;
count__16291_17057 = G__17092;
i__16292_17058 = G__17093;
continue;
} else {
var G__17094 = cljs.core.next(seq__16288_17082__$1);
var G__17095 = null;
var G__17096 = (0);
var G__17097 = (0);
seq__16288_17055 = G__17094;
chunk__16290_17056 = G__17095;
count__16291_17057 = G__17096;
i__16292_17058 = G__17097;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_17052);
}
}


var G__17098 = seq__16206_17043;
var G__17099 = chunk__16208_17044;
var G__17100 = count__16209_17045;
var G__17101 = (i__16210_17046 + (1));
seq__16206_17043 = G__17098;
chunk__16208_17044 = G__17099;
count__16209_17045 = G__17100;
i__16210_17046 = G__17101;
continue;
} else {
var G__17105 = seq__16206_17043;
var G__17106 = chunk__16208_17044;
var G__17107 = count__16209_17045;
var G__17108 = (i__16210_17046 + (1));
seq__16206_17043 = G__17105;
chunk__16208_17044 = G__17106;
count__16209_17045 = G__17107;
i__16210_17046 = G__17108;
continue;
}
} else {
var temp__5825__auto___17109 = cljs.core.seq(seq__16206_17043);
if(temp__5825__auto___17109){
var seq__16206_17110__$1 = temp__5825__auto___17109;
if(cljs.core.chunked_seq_QMARK_(seq__16206_17110__$1)){
var c__5694__auto___17111 = cljs.core.chunk_first(seq__16206_17110__$1);
var G__17115 = cljs.core.chunk_rest(seq__16206_17110__$1);
var G__17116 = c__5694__auto___17111;
var G__17117 = cljs.core.count(c__5694__auto___17111);
var G__17118 = (0);
seq__16206_17043 = G__17115;
chunk__16208_17044 = G__17116;
count__16209_17045 = G__17117;
i__16210_17046 = G__17118;
continue;
} else {
var child_struct_17120 = cljs.core.first(seq__16206_17110__$1);
if((!((child_struct_17120 == null)))){
if(typeof child_struct_17120 === 'string'){
var text_17121 = (node["textContent"]);
(node["textContent"] = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_17121)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_17120)));
} else {
var children_17122 = shadow.dom.svg_node(child_struct_17120);
if(cljs.core.seq_QMARK_(children_17122)){
var seq__16347_17123 = cljs.core.seq(children_17122);
var chunk__16349_17124 = null;
var count__16350_17125 = (0);
var i__16351_17126 = (0);
while(true){
if((i__16351_17126 < count__16350_17125)){
var child_17127 = chunk__16349_17124.cljs$core$IIndexed$_nth$arity$2(null,i__16351_17126);
if(cljs.core.truth_(child_17127)){
node.appendChild(child_17127);


var G__17128 = seq__16347_17123;
var G__17129 = chunk__16349_17124;
var G__17130 = count__16350_17125;
var G__17131 = (i__16351_17126 + (1));
seq__16347_17123 = G__17128;
chunk__16349_17124 = G__17129;
count__16350_17125 = G__17130;
i__16351_17126 = G__17131;
continue;
} else {
var G__17132 = seq__16347_17123;
var G__17133 = chunk__16349_17124;
var G__17134 = count__16350_17125;
var G__17135 = (i__16351_17126 + (1));
seq__16347_17123 = G__17132;
chunk__16349_17124 = G__17133;
count__16350_17125 = G__17134;
i__16351_17126 = G__17135;
continue;
}
} else {
var temp__5825__auto___17136__$1 = cljs.core.seq(seq__16347_17123);
if(temp__5825__auto___17136__$1){
var seq__16347_17137__$1 = temp__5825__auto___17136__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16347_17137__$1)){
var c__5694__auto___17139 = cljs.core.chunk_first(seq__16347_17137__$1);
var G__17140 = cljs.core.chunk_rest(seq__16347_17137__$1);
var G__17141 = c__5694__auto___17139;
var G__17142 = cljs.core.count(c__5694__auto___17139);
var G__17143 = (0);
seq__16347_17123 = G__17140;
chunk__16349_17124 = G__17141;
count__16350_17125 = G__17142;
i__16351_17126 = G__17143;
continue;
} else {
var child_17144 = cljs.core.first(seq__16347_17137__$1);
if(cljs.core.truth_(child_17144)){
node.appendChild(child_17144);


var G__17146 = cljs.core.next(seq__16347_17137__$1);
var G__17147 = null;
var G__17148 = (0);
var G__17149 = (0);
seq__16347_17123 = G__17146;
chunk__16349_17124 = G__17147;
count__16350_17125 = G__17148;
i__16351_17126 = G__17149;
continue;
} else {
var G__17150 = cljs.core.next(seq__16347_17137__$1);
var G__17151 = null;
var G__17152 = (0);
var G__17153 = (0);
seq__16347_17123 = G__17150;
chunk__16349_17124 = G__17151;
count__16350_17125 = G__17152;
i__16351_17126 = G__17153;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_17122);
}
}


var G__17154 = cljs.core.next(seq__16206_17110__$1);
var G__17155 = null;
var G__17156 = (0);
var G__17157 = (0);
seq__16206_17043 = G__17154;
chunk__16208_17044 = G__17155;
count__16209_17045 = G__17156;
i__16210_17046 = G__17157;
continue;
} else {
var G__17158 = cljs.core.next(seq__16206_17110__$1);
var G__17159 = null;
var G__17160 = (0);
var G__17161 = (0);
seq__16206_17043 = G__17158;
chunk__16208_17044 = G__17159;
count__16209_17045 = G__17160;
i__16210_17046 = G__17161;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5903__auto__ = [];
var len__5897__auto___17166 = arguments.length;
var i__5898__auto___17167 = (0);
while(true){
if((i__5898__auto___17167 < len__5897__auto___17166)){
args__5903__auto__.push((arguments[i__5898__auto___17167]));

var G__17168 = (i__5898__auto___17167 + (1));
i__5898__auto___17167 = G__17168;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq16413){
var G__16414 = cljs.core.first(seq16413);
var seq16413__$1 = cljs.core.next(seq16413);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16414,seq16413__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
