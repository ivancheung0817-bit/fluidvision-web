goog.provide('pumpctrl.bluetooth');
pumpctrl.bluetooth.service_uuid = "4fafc201-1fb5-459e-8fcc-c5c9c331914b";
pumpctrl.bluetooth.char_uuid = "beb5483e-36e1-4688-b7f5-ea07361b26a8";
pumpctrl.bluetooth.bluetooth_supported_QMARK_ = (function pumpctrl$bluetooth$bluetooth_supported_QMARK_(){
return cljs.core.boolean$(navigator.bluetooth);
});
pumpctrl.bluetooth.connect_BANG_ = (function pumpctrl$bluetooth$connect_BANG_(char_ref,on_connected){
if((!(pumpctrl.bluetooth.bluetooth_supported_QMARK_()))){
console.error("Web Bluetooth is not supported");

return (on_connected.cljs$core$IFn$_invoke$arity$1 ? on_connected.cljs$core$IFn$_invoke$arity$1(false) : on_connected.call(null,false));
} else {
return navigator.bluetooth.requestDevice(({"acceptAllDevices": true, "optionalServices": [pumpctrl.bluetooth.service_uuid]})).then((function (device){
return device.gatt.connect();
})).then((function (server){
return server.getPrimaryService(pumpctrl.bluetooth.service_uuid);
})).then((function (service){
return service.getCharacteristic(pumpctrl.bluetooth.char_uuid);
})).then((function (characteristic){
cljs.core.reset_BANG_(char_ref,characteristic);

return (on_connected.cljs$core$IFn$_invoke$arity$1 ? on_connected.cljs$core$IFn$_invoke$arity$1(true) : on_connected.call(null,true));
})).catch((function (error){
console.error("Bluetooth Connection Failed",error);

return (on_connected.cljs$core$IFn$_invoke$arity$1 ? on_connected.cljs$core$IFn$_invoke$arity$1(false) : on_connected.call(null,false));
}));
}
});
pumpctrl.bluetooth.send_command_BANG_ = (function pumpctrl$bluetooth$send_command_BANG_(char_ref,cmd,value){
var temp__5825__auto__ = cljs.core.deref(char_ref);
if(cljs.core.truth_(temp__5825__auto__)){
var characteristic = temp__5825__auto__;
var packet = (""+"!"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cmd)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)+"#");
var encoder = (new TextEncoder());
var encoded = encoder.encode(packet);
characteristic.writeValue(encoded);

return console.log("Sent:",packet);
} else {
return null;
}
});

//# sourceMappingURL=pumpctrl.bluetooth.js.map
