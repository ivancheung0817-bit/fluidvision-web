goog.provide('pumpctrl.app');
pumpctrl.app.safe_max_volume = 10.0;
pumpctrl.app.clamp_target_volume = (function pumpctrl$app$clamp_target_volume(v,disable_restriction_QMARK_){
if(cljs.core.truth_(isNaN(v))){
return 0.0;
} else {
if((v < (0))){
return 0.0;
} else {
if(cljs.core.truth_(disable_restriction_QMARK_)){
return v;
} else {
return cljs.core.min.cljs$core$IFn$_invoke$arity$2(v,pumpctrl.app.safe_max_volume);

}
}
}
});
pumpctrl.app.app = (function pumpctrl$app$app(){
var f__22090__auto__ = (function (){
if(goog.DEBUG){
var temp__5825__auto___28307 = pumpctrl.app.app.fast_refresh_signature;
if(cljs.core.truth_(temp__5825__auto___28307)){
var f__22014__auto___28308 = temp__5825__auto___28307;
(f__22014__auto___28308.cljs$core$IFn$_invoke$arity$0 ? f__22014__auto___28308.cljs$core$IFn$_invoke$arity$0() : f__22014__auto___28308.call(null));
} else {
}
} else {
}

var char_ref = uix.core.use_ref.cljs$core$IFn$_invoke$arity$1(null);
var bluetooth_supported_QMARK_ = pumpctrl.bluetooth.bluetooth_supported_QMARK_();
var vec__28295 = uix.core.use_state(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"current-volume","current-volume",1797808115),0.0,new cljs.core.Keyword(null,"target-volume","target-volume",972327610),10.0,new cljs.core.Keyword(null,"connected?","connected?",-1197551387),false,new cljs.core.Keyword(null,"connecting?","connecting?",174124997),false,new cljs.core.Keyword(null,"instant-mode?","instant-mode?",83831061),false,new cljs.core.Keyword(null,"disable-restriction?","disable-restriction?",-1704408588),false], null));
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28295,(0),null);
var set_state_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28295,(1),null);
var map__28298 = state;
var map__28298__$1 = cljs.core.__destructure_map(map__28298);
var current_volume = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28298__$1,new cljs.core.Keyword(null,"current-volume","current-volume",1797808115));
var target_volume = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28298__$1,new cljs.core.Keyword(null,"target-volume","target-volume",972327610));
var connected_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28298__$1,new cljs.core.Keyword(null,"connected?","connected?",-1197551387));
var connecting_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28298__$1,new cljs.core.Keyword(null,"connecting?","connecting?",174124997));
var instant_mode_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28298__$1,new cljs.core.Keyword(null,"instant-mode?","instant-mode?",83831061));
var disable_restriction_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28298__$1,new cljs.core.Keyword(null,"disable-restriction?","disable-restriction?",-1704408588));
var dispatch_pump_BANG_ = (function (st){
var delta = (new cljs.core.Keyword(null,"target-volume","target-volume",972327610).cljs$core$IFn$_invoke$arity$1(st) - new cljs.core.Keyword(null,"current-volume","current-volume",1797808115).cljs$core$IFn$_invoke$arity$1(st));
if((delta === (0))){
return null;
} else {
var duration_ms = Math.round((Math.abs(delta) * (1000)));
var command = (((delta > (0)))?"P":"D");
pumpctrl.bluetooth.send_command_BANG_(char_ref,command,duration_ms);

var G__28299 = cljs.core.assoc;
var G__28300 = new cljs.core.Keyword(null,"current-volume","current-volume",1797808115);
var G__28301 = new cljs.core.Keyword(null,"target-volume","target-volume",972327610).cljs$core$IFn$_invoke$arity$1(st);
return (set_state_BANG_.cljs$core$IFn$_invoke$arity$3 ? set_state_BANG_.cljs$core$IFn$_invoke$arity$3(G__28299,G__28300,G__28301) : set_state_BANG_.call(null,G__28299,G__28300,G__28301));
}
});
var update_target_BANG_ = (function (e){
var raw_val = parseFloat(e.target.value);
var parsed_val = (cljs.core.truth_(isNaN(raw_val))?target_volume:raw_val);
var clamped_val = pumpctrl.app.clamp_target_volume(parsed_val,disable_restriction_QMARK_);
var new_state = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"target-volume","target-volume",972327610),clamped_val);
(set_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_state_BANG_.cljs$core$IFn$_invoke$arity$1(new_state) : set_state_BANG_.call(null,new_state));

if(cljs.core.truth_(instant_mode_QMARK_)){
return dispatch_pump_BANG_(new_state);
} else {
return null;
}
});
var handle_submit_BANG_ = (function (e){
e.preventDefault();

return dispatch_pump_BANG_(state);
});
var toggle_disable_restriction_BANG_ = (function (e){
var enabled_QMARK_ = e.target.checked;
var adjusted_target = (cljs.core.truth_(enabled_QMARK_)?target_volume:cljs.core.min.cljs$core$IFn$_invoke$arity$2(target_volume,pumpctrl.app.safe_max_volume));
return (set_state_BANG_.cljs$core$IFn$_invoke$arity$5 ? set_state_BANG_.cljs$core$IFn$_invoke$arity$5(cljs.core.assoc,new cljs.core.Keyword(null,"disable-restriction","disable-restriction",-574331883),enabled_QMARK_,new cljs.core.Keyword(null,"target-volume","target-volume",972327610),adjusted_target) : set_state_BANG_.call(null,cljs.core.assoc,new cljs.core.Keyword(null,"disable-restriction","disable-restriction",-574331883),enabled_QMARK_,new cljs.core.Keyword(null,"target-volume","target-volume",972327610),adjusted_target));
});
return uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,pumpctrl.style.app_container)}],[uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,pumpctrl.style.header_container)}],[uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,pumpctrl.style.header_left_col)}],[uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,pumpctrl.style.header_icon_bg)}],[uix.compiler.alpha.component_element(pumpctrl.icons.header_icon,[null],[])]),uix.compiler.aot._GT_el("h2",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,pumpctrl.style.header_title)}],["Liquid Controller"])]),uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,pumpctrl.style.status_container)}],[uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,pumpctrl.style.cx.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pumpctrl.style.status_dot_base,(cljs.core.truth_(connected_QMARK_)?pumpctrl.style.status_dot_online:pumpctrl.style.status_dot_offline)], 0)))}],[]),uix.compiler.aot._GT_el("span",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,pumpctrl.style.status_text)}],[(cljs.core.truth_(connected_QMARK_)?"Online":"Offline")])])]),uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,(cljs.core.truth_(connected_QMARK_)?pumpctrl.style.overlay_hidden:pumpctrl.style.overlay_base))}],[uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,pumpctrl.style.overlay_icon_bg)}],[uix.compiler.alpha.component_element(pumpctrl.icons.bluetooth_icon,[null],[])]),uix.compiler.aot._GT_el("h3",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,pumpctrl.style.overlay_title)}],[((bluetooth_supported_QMARK_)?"Hardware Disconnected":"Bluetooth Unsupported")]),uix.compiler.aot._GT_el("p",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,pumpctrl.style.overlay_desc)}],[((bluetooth_supported_QMARK_)?"Please connect your Bluetooth Pump Hardware to continue.":"This browser does not support Web Bluetooth. Please use a compatible browser (for example: Google Chrome or Edge).")]),uix.compiler.aot._GT_el("button",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,pumpctrl.style.cx.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pumpctrl.style.connect_btn_base,((((bluetooth_supported_QMARK_) && (cljs.core.not(connecting_QMARK_))))?pumpctrl.style.connect_btn_active:pumpctrl.style.connect_btn_disabled)], 0))),'disabled':(function (){var or__5162__auto__ = (!(bluetooth_supported_QMARK_));
if(or__5162__auto__){
return or__5162__auto__;
} else {
return connecting_QMARK_;
}
})(),'onClick':(function (){
if(bluetooth_supported_QMARK_){
(set_state_BANG_.cljs$core$IFn$_invoke$arity$3 ? set_state_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,new cljs.core.Keyword(null,"connecting?","connecting?",174124997),true) : set_state_BANG_.call(null,cljs.core.assoc,new cljs.core.Keyword(null,"connecting?","connecting?",174124997),true));

return pumpctrl.bluetooth.connect_BANG_(char_ref,(function (status){
return (set_state_BANG_.cljs$core$IFn$_invoke$arity$5 ? set_state_BANG_.cljs$core$IFn$_invoke$arity$5(cljs.core.assoc,new cljs.core.Keyword(null,"connected?","connected?",-1197551387),status,new cljs.core.Keyword(null,"connecting?","connecting?",174124997),false) : set_state_BANG_.call(null,cljs.core.assoc,new cljs.core.Keyword(null,"connected?","connected?",-1197551387),status,new cljs.core.Keyword(null,"connecting?","connecting?",174124997),false));
}));
} else {
return null;
}
})}],[(cljs.core.truth_(connecting_QMARK_)?uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,pumpctrl.style.connect_spinner_container)}],[uix.compiler.alpha.component_element(pumpctrl.icons.spinner_icon,[null],[]),uix.compiler.alpha.create_element_STAR_("span", ...[null,"Connecting..."], ...[])]):((bluetooth_supported_QMARK_)?"Connect Device":"Bluetooth Not Supported"))])]),uix.compiler.aot._GT_el("form",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,pumpctrl.style.cx.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pumpctrl.style.form_base,(cljs.core.truth_(connected_QMARK_)?null:pumpctrl.style.form_disabled)], 0))),'onSubmit':handle_submit_BANG_}],[uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,pumpctrl.style.form_spacing)}],[uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,pumpctrl.style.card_base)}],[uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,pumpctrl.style.card_header)}],[uix.compiler.aot._GT_el("span",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,pumpctrl.style.card_title)}],["Target Volume"]),uix.compiler.aot._GT_el("span",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,pumpctrl.style.card_subtitle)}],["Current: ",uix.compiler.aot._GT_el("span",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,pumpctrl.style.card_subtitle_val)}],[current_volume])," units"])]),uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,pumpctrl.style.input_container)}],[uix.compiler.aot.create_uix_input("input",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,pumpctrl.style.target_input),'type':"number",'value':uix.compiler.attributes.keyword__GT_string(target_volume),'min':"0",'max':(cljs.core.truth_(disable_restriction_QMARK_)?null:pumpctrl.app.safe_max_volume),'step':"0.1",'onChange':update_target_BANG_,'style':{'MozAppearance':"textfield"}}],[]),uix.compiler.aot._GT_el("span",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,pumpctrl.style.target_unit)}],["units"])])]),uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,pumpctrl.style.slider_section)}],[uix.compiler.aot.create_uix_input("input",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,pumpctrl.style.cx.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pumpctrl.style.slider_base,(cljs.core.truth_(disable_restriction_QMARK_)?pumpctrl.style.slider_disabled:pumpctrl.style.slider_active)], 0))),'type':"range",'min':"0",'max':"10",'step':"0.1",'value':cljs.core.min.cljs$core$IFn$_invoke$arity$2(target_volume,pumpctrl.app.safe_max_volume),'disabled':uix.compiler.attributes.keyword__GT_string(disable_restriction_QMARK_),'onChange':update_target_BANG_}],[]),uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,pumpctrl.style.slider_labels)}],[uix.compiler.alpha.create_element_STAR_("span", ...[null,"0"], ...[]),uix.compiler.alpha.create_element_STAR_("span", ...[null,"10"], ...[])])]),uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,pumpctrl.style.toggle_section)}],[uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,pumpctrl.style.toggle_row)}],[uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,pumpctrl.style.toggle_text_col)}],[uix.compiler.aot._GT_el("span",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,pumpctrl.style.toggle_title)}],["Instant Dispatch"]),uix.compiler.aot._GT_el("span",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,pumpctrl.style.toggle_desc)}],["Apply changes immediately"])]),uix.compiler.aot._GT_el("label",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,pumpctrl.style.toggle_label)}],[uix.compiler.aot.create_uix_input("input",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,pumpctrl.style.toggle_input),'type':"checkbox",'checked':uix.compiler.attributes.keyword__GT_string(instant_mode_QMARK_),'onChange':(function (p1__28283_SHARP_){
var G__28302 = cljs.core.assoc;
var G__28303 = new cljs.core.Keyword(null,"instant-mode","instant-mode",1410513126);
var G__28304 = p1__28283_SHARP_.target.checked;
return (set_state_BANG_.cljs$core$IFn$_invoke$arity$3 ? set_state_BANG_.cljs$core$IFn$_invoke$arity$3(G__28302,G__28303,G__28304) : set_state_BANG_.call(null,G__28302,G__28303,G__28304));
})}],[]),uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,pumpctrl.style.cx.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pumpctrl.style.toggle_slider_base,pumpctrl.style.toggle_slider_blue], 0)))}],[])])]),uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,pumpctrl.style.toggle_row)}],[uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,pumpctrl.style.restriction_row_left)}],[uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,pumpctrl.style.toggle_text_col)}],[uix.compiler.aot._GT_el("span",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,pumpctrl.style.toggle_title)}],["Disable Restriction"]),uix.compiler.aot._GT_el("span",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,pumpctrl.style.toggle_desc)}],["Removes the 10-unit cap and disables the slider"])]),uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,pumpctrl.style.warning_container)}],[uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,pumpctrl.style.warning_icon_base)}],["!"]),uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,pumpctrl.style.warning_tooltip)}],["Warning: disabling the restriction allows unrestricted pump durations. Use only if you fully understand the risk of over-dispensing or hardware damage."])])]),uix.compiler.aot._GT_el("label",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,pumpctrl.style.toggle_label)}],[uix.compiler.aot.create_uix_input("input",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,pumpctrl.style.toggle_input),'type':"checkbox",'checked':uix.compiler.attributes.keyword__GT_string(disable_restriction_QMARK_),'onChange':toggle_disable_restriction_BANG_}],[]),uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,pumpctrl.style.cx.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pumpctrl.style.toggle_slider_base,pumpctrl.style.toggle_slider_red], 0)))}],[])])])]),uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,pumpctrl.style.card_base)}],[uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,pumpctrl.style.action_grid)}],[uix.compiler.aot._GT_el("button",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,pumpctrl.style.dispatch_btn),'type':"submit"}],[uix.compiler.alpha.component_element(pumpctrl.icons.dispatch_icon,[null],[]),uix.compiler.alpha.create_element_STAR_("span", ...[null,"Dispatch"], ...[])]),uix.compiler.aot._GT_el("button",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,pumpctrl.style.halt_btn),'type':"button",'onClick':(function (){
return pumpctrl.bluetooth.send_command_BANG_(char_ref,"H",(0));
})}],[uix.compiler.alpha.component_element(pumpctrl.icons.halt_icon,[null],[]),uix.compiler.alpha.create_element_STAR_("span", ...[null,"HALT"], ...[])])])])])])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__28305 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__28306 = pumpctrl.app.app;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__28306);

try{return f__22090__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__28305);
}} else {
return f__22090__auto__();
}
});

(pumpctrl.app.app.uix_component_QMARK_ = true);

uix.core.set_display_name(pumpctrl.app.app,"pumpctrl.app/app");

if(goog.DEBUG){
if((typeof globalThis !== 'undefined') && (typeof globalThis.uix !== 'undefined') && (typeof globalThis.uix.dev !== 'undefined')){
var sig__22023__auto___28309 = globalThis.uix.dev.signature_BANG_();
(sig__22023__auto___28309.cljs$core$IFn$_invoke$arity$4 ? sig__22023__auto___28309.cljs$core$IFn$_invoke$arity$4(pumpctrl.app.app,"(uix/use-ref nil)(uix/use-state {:current-volume 0.0, :target-volume 10.0, :connected? false, :connecting? false, :instant-mode? false, :disable-restriction? false})",null,null) : sig__22023__auto___28309.call(null,pumpctrl.app.app,"(uix/use-ref nil)(uix/use-state {:current-volume 0.0, :target-volume 10.0, :connected? false, :connecting? false, :instant-mode? false, :disable-restriction? false})",null,null));

globalThis.uix.dev.register_BANG_(pumpctrl.app.app,pumpctrl.app.app.displayName);

(pumpctrl.app.app.fast_refresh_signature = sig__22023__auto___28309);
} else {
}
} else {
}

if((typeof pumpctrl !== 'undefined') && (typeof pumpctrl.app !== 'undefined') && (typeof pumpctrl.app.root !== 'undefined')){
} else {
pumpctrl.app.root = uix.dom.create_root.cljs$core$IFn$_invoke$arity$1(document.getElementById("root"));
}
pumpctrl.app.init = (function pumpctrl$app$init(){
return uix.dom.render_root(uix.compiler.alpha.component_element(pumpctrl.app.app,[null],[]),pumpctrl.app.root);
});
goog.exportSymbol('pumpctrl.app.init', pumpctrl.app.init);

//# sourceMappingURL=pumpctrl.app.js.map
