goog.provide('pumpctrl.style');
pumpctrl.style.cx = (function pumpctrl$style$cx(var_args){
var args__5903__auto__ = [];
var len__5897__auto___28280 = arguments.length;
var i__5898__auto___28281 = (0);
while(true){
if((i__5898__auto___28281 < len__5897__auto___28280)){
args__5903__auto__.push((arguments[i__5898__auto___28281]));

var G__28282 = (i__5898__auto___28281 + (1));
i__5898__auto___28281 = G__28282;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return pumpctrl.style.cx.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(pumpctrl.style.cx.cljs$core$IFn$_invoke$arity$variadic = (function (classes){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,classes)));
}));

(pumpctrl.style.cx.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(pumpctrl.style.cx.cljs$lang$applyTo = (function (seq28279){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28279));
}));

pumpctrl.style.app_container = "relative max-w-md mx-auto mt-10 p-8 bg-white dark:bg-slate-900 rounded-[2rem] shadow-2xl shadow-blue-900/5 dark:shadow-black/40 border border-slate-100 dark:border-slate-800 overflow-hidden transition-colors duration-300";
pumpctrl.style.header_container = "flex items-center justify-between mb-8";
pumpctrl.style.header_left_col = "flex items-center gap-3";
pumpctrl.style.header_icon_bg = "p-2.5 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-xl transition-colors duration-300";
pumpctrl.style.header_title = "text-2xl font-bold text-slate-800 dark:text-slate-100 tracking-tight transition-colors duration-300";
pumpctrl.style.status_container = "flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 transition-colors duration-300";
pumpctrl.style.status_dot_base = "w-2 h-2 rounded-full";
pumpctrl.style.status_dot_online = "bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]";
pumpctrl.style.status_dot_offline = "bg-red-500 dark:bg-red-400";
pumpctrl.style.status_text = "text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider";
pumpctrl.style.overlay_base = "absolute inset-0 z-50 bg-white/70 dark:bg-slate-900/80 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center rounded-[2rem] transition-colors duration-300";
pumpctrl.style.overlay_hidden = "hidden";
pumpctrl.style.overlay_icon_bg = "w-16 h-16 mb-4 rounded-full bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-blue-500 dark:text-blue-400 transition-colors duration-300";
pumpctrl.style.overlay_title = "text-lg font-bold text-slate-800 dark:text-slate-100 mb-1 transition-colors duration-300";
pumpctrl.style.overlay_desc = "text-sm text-slate-500 dark:text-slate-400 mb-6 max-w-[200px] transition-colors duration-300";
pumpctrl.style.connect_btn_base = "px-6 py-3 min-w-[160px] flex justify-center items-center text-white font-medium rounded-xl shadow-lg transition-all";
pumpctrl.style.connect_btn_active = "bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 shadow-blue-600/20 dark:shadow-blue-500/10 hover:-translate-y-0.5 active:translate-y-0";
pumpctrl.style.connect_btn_disabled = "bg-slate-300 dark:bg-slate-700 text-slate-500 dark:text-slate-400 cursor-not-allowed shadow-none";
pumpctrl.style.connect_spinner_container = "flex items-center gap-2";
pumpctrl.style.form_base = "transition-all duration-300";
pumpctrl.style.form_disabled = "opacity-40 grayscale pointer-events-none blur-[2px]";
pumpctrl.style.form_spacing = "space-y-8";
pumpctrl.style.card_base = "bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-5 border border-slate-100 dark:border-slate-700/50 transition-colors duration-300";
pumpctrl.style.card_header = "flex justify-between items-start mb-2";
pumpctrl.style.card_title = "text-sm font-medium text-slate-500 dark:text-slate-400";
pumpctrl.style.card_subtitle = "text-sm font-medium text-slate-400 dark:text-slate-500";
pumpctrl.style.card_subtitle_val = "text-slate-700 dark:text-slate-300";
pumpctrl.style.input_container = "flex items-end gap-2";
pumpctrl.style.target_input = "w-full bg-transparent text-4xl font-bold tracking-tighter text-slate-800 dark:text-slate-100 border-none p-0 focus:ring-0 focus:outline-none transition-colors duration-300";
pumpctrl.style.target_unit = "text-slate-400 dark:text-slate-500 font-medium pb-1.5 transition-colors duration-300";
pumpctrl.style.slider_section = "space-y-3";
pumpctrl.style.slider_base = "w-full h-2.5 rounded-full appearance-none transition-all";
pumpctrl.style.slider_disabled = "bg-slate-200 dark:bg-slate-800 cursor-not-allowed opacity-50";
pumpctrl.style.slider_active = "bg-slate-200 dark:bg-slate-700 cursor-pointer accent-blue-600 dark:accent-blue-500 hover:accent-blue-700 dark:hover:accent-blue-400";
pumpctrl.style.slider_labels = "flex justify-between text-xs font-semibold text-slate-400 dark:text-slate-500 transition-colors duration-300";
pumpctrl.style.toggle_section = "flex flex-col gap-4";
pumpctrl.style.toggle_row = "w-full flex items-center justify-between py-1";
pumpctrl.style.toggle_text_col = "flex flex-col transition-colors duration-300";
pumpctrl.style.toggle_title = "text-sm font-semibold text-slate-800 dark:text-slate-200";
pumpctrl.style.toggle_desc = "text-xs text-slate-500 dark:text-slate-400";
pumpctrl.style.toggle_label = "relative inline-flex items-center cursor-pointer";
pumpctrl.style.toggle_input = "sr-only peer";
pumpctrl.style.toggle_slider_base = "w-12 h-7 bg-slate-200 dark:bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white dark:peer-checked:after:border-slate-100 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white dark:after:bg-slate-300 after:border-slate-300 dark:after:border-slate-600 after:border after:rounded-full after:h-6 after:w-6 after:transition-all";
pumpctrl.style.toggle_slider_blue = "peer-checked:bg-blue-600 dark:peer-checked:bg-blue-500";
pumpctrl.style.toggle_slider_red = "peer-checked:bg-red-500";
pumpctrl.style.restriction_row_left = "flex items-center gap-2";
pumpctrl.style.warning_container = "relative group";
pumpctrl.style.warning_icon_base = "w-4 h-4 rounded-full border border-amber-400 text-amber-500 flex items-center justify-center text-[10px] font-bold cursor-help select-none";
pumpctrl.style.warning_tooltip = "pointer-events-none absolute left-1/2 top-full z-20 mt-2 w-64 -translate-x-1/2 rounded-lg bg-slate-900 px-3 py-2 text-xs font-medium text-white opacity-0 shadow-xl transition-opacity duration-200 group-hover:opacity-100 dark:bg-slate-700";
pumpctrl.style.action_grid = "grid grid-cols-1 gap-3";
pumpctrl.style.dispatch_btn = "flex w-full items-center justify-center gap-2 px-4 py-3.5 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-semibold rounded-xl hover:bg-slate-800 dark:hover:bg-white transition-colors shadow-lg shadow-slate-900/10 dark:shadow-slate-100/5";
pumpctrl.style.halt_btn = "flex w-full items-center justify-center gap-2 px-4 py-3.5 bg-red-500 dark:bg-red-500/20 text-white dark:text-red-500 border border-transparent dark:border-red-500/30 font-semibold rounded-xl hover:bg-red-600 dark:hover:bg-red-500/30 shadow-lg shadow-red-500/30 dark:shadow-none transition-all active:scale-95";

//# sourceMappingURL=pumpctrl.style.js.map
