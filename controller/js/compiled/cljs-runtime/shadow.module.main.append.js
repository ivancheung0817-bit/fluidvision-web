
shadow.cljs.devtools.client.env.module_loaded('main');

try { pumpctrl.app.init(); } catch (e) { console.error("An error occurred when calling (pumpctrl.app/init)"); console.error(e); }