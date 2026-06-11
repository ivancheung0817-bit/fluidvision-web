goog.provide('uix.compiler.aot');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
uix.compiler.aot.react_19_PLUS__QMARK_ = (parseInt(cljs.core.first(module$node_modules$react$index.version.split("."))) >= (19));
uix.compiler.aot.hiccup_QMARK_ = (function uix$compiler$aot$hiccup_QMARK_(el){
if(cljs.core.vector_QMARK_(el)){
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(el,(0),null);
return (((tag instanceof cljs.core.Keyword)) || ((((tag instanceof cljs.core.Symbol)) || (((cljs.core.fn_QMARK_(tag)) || ((tag instanceof cljs.core.MultiFn)))))));
} else {
return null;
}
});
uix.compiler.aot.validate_children = (function uix$compiler$aot$validate_children(children){
var v__17989__auto___18243 = children;
if(cljs.core.seq(v__17989__auto___18243)){
var x__17990__auto___18244 = cljs.core.first(v__17989__auto___18243);
var xs__17991__auto___18245 = cljs.core.next(v__17989__auto___18243);
while(true){
var child_18246 = x__17990__auto___18244;
if(cljs.core.truth_(uix.compiler.aot.hiccup_QMARK_(child_18246))){
throw (new Error((""+"Hiccup is not valid as UIx child (found: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_18246)+").\n"+"If you meant to render UIx element, use `$` macro, i.e. ($ "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",child_18246))+")\n"+"If you meant to render Reagent element, wrap it with r/as-element, i.e. (r/as-element "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_18246)+")")));
} else {
if(cljs.core.sequential_QMARK_(child_18246)){
(uix.compiler.aot.validate_children.cljs$core$IFn$_invoke$arity$1 ? uix.compiler.aot.validate_children.cljs$core$IFn$_invoke$arity$1(child_18246) : uix.compiler.aot.validate_children.call(null,child_18246));
} else {
}
}

if(cljs.core.seq(xs__17991__auto___18245)){
var G__18247 = cljs.core.first(xs__17991__auto___18245);
var G__18248 = cljs.core.next(xs__17991__auto___18245);
x__17990__auto___18244 = G__18247;
xs__17991__auto___18245 = G__18248;
continue;
} else {
}
break;
}
} else {
}

return true;
});
uix.compiler.aot._GT_el = (function uix$compiler$aot$_GT_el(tag,attrs_children,children){
var args = [tag].concat(attrs_children);
if(goog.DEBUG){
uix.compiler.aot.validate_children(args);
} else {
}

return uix.compiler.alpha.create_element(args,children);
});
uix.compiler.aot.create_uix_input = (function uix$compiler$aot$create_uix_input(tag,attrs_children,children){
if(uix.compiler.input.should_use_reagent_input_QMARK_()){
var props = (attrs_children[(0)]);
var children__$1 = [(attrs_children[(1)])].concat(children);
return uix.compiler.alpha.create_element([uix.compiler.input.reagent_input,({"props": props, "tag": tag})],children__$1);
} else {
return uix.compiler.aot._GT_el(tag,attrs_children,children);
}
});
uix.compiler.aot.fragment = module$node_modules$react$index.Fragment;
uix.compiler.aot.merge_props = (function uix$compiler$aot$merge_props(static_class,props){
var props__$1 = Object.assign(...props);
var class_name = props__$1.className;
if(cljs.core.truth_((function (){var and__5160__auto__ = class_name;
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core.not(class_name.includes(static_class));
} else {
return and__5160__auto__;
}
})())){
(props__$1.className = uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(static_class,class_name));
} else {
}

return props__$1;
});

//# sourceMappingURL=uix.compiler.aot.js.map
