// Compiled by ClojureScript 1.9.89 {}
goog.provide('om_bootstrap.mixins');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('om.core');
goog.require('om_tools.mixin');
goog.require('schema.core');
var ufv___21549 = schema.utils.use_fn_validation;
var output_schema21542_21550 = schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var input_schema21543_21551 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"target","target",1893533248,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null))),schema.core.one.call(null,schema.core.Str,cljs.core.with_meta(new cljs.core.Symbol(null,"event-type","event-type",1960254340,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null)], null))),schema.core.one.call(null,schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"callback","callback",935395299,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","=>","s/=>",-813269628,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null))], null)))], null);
var input_checker21544_21552 = schema.core.checker.call(null,input_schema21543_21551);
var output_checker21545_21553 = schema.core.checker.call(null,output_schema21542_21550);
/**
 * Inputs: [target :- s/Any event-type :- s/Str callback :- (s/=> s/Any s/Any)]
 *   Returns: (s/=> s/Any)
 * 
 *   Registers the callback on the supplied target for events of type
 * `event-type`. Returns a function of no arguments that, when called,
 * unregisters the callback.
 */
om_bootstrap.mixins.event_listener = ((function (ufv___21549,output_schema21542_21550,input_schema21543_21551,input_checker21544_21552,output_checker21545_21553){
return (function om_bootstrap$mixins$event_listener(G__21546,G__21547,G__21548){
var validate__7824__auto__ = ufv___21549.get_cell();
if(cljs.core.truth_(validate__7824__auto__)){
var args__7825__auto___21554 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21546,G__21547,G__21548], null);
var temp__4657__auto___21555 = input_checker21544_21552.call(null,args__7825__auto___21554);
if(cljs.core.truth_(temp__4657__auto___21555)){
var error__7826__auto___21556 = temp__4657__auto___21555;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"event-listener","event-listener",809979412,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","=>","s/=>",-813269628,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Registers the callback on the supplied target for events of type\n   `event-type`. Returns a function of no arguments that, when called,\n   unregisters the callback."], null)),cljs.core.pr_str.call(null,error__7826__auto___21556)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21543_21551,new cljs.core.Keyword(null,"value","value",305978217),args__7825__auto___21554,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___21556], null));
} else {
}
} else {
}

var o__7827__auto__ = (function (){var target = G__21546;
var event_type = G__21547;
var callback = G__21548;
while(true){
if(cljs.core.truth_(target.addEventListener)){
target.addEventListener(event_type,callback,false);

return ((function (validate__7824__auto__,ufv___21549,output_schema21542_21550,input_schema21543_21551,input_checker21544_21552,output_checker21545_21553){
return (function (){
return target.removeEventListener(event_type,callback,false);
});
;})(validate__7824__auto__,ufv___21549,output_schema21542_21550,input_schema21543_21551,input_checker21544_21552,output_checker21545_21553))
} else {
if(cljs.core.truth_(target.attachEvent)){
var event_type__$1 = [cljs.core.str("on"),cljs.core.str(event_type)].join('');
target.attachEvent(event_type__$1,callback);

return ((function (event_type__$1,validate__7824__auto__,ufv___21549,output_schema21542_21550,input_schema21543_21551,input_checker21544_21552,output_checker21545_21553){
return (function (){
return target.detachEvent(event_type__$1,callback);
});
;})(event_type__$1,validate__7824__auto__,ufv___21549,output_schema21542_21550,input_schema21543_21551,input_checker21544_21552,output_checker21545_21553))
} else {
return ((function (validate__7824__auto__,ufv___21549,output_schema21542_21550,input_schema21543_21551,input_checker21544_21552,output_checker21545_21553){
return (function (){
return null;
});
;})(validate__7824__auto__,ufv___21549,output_schema21542_21550,input_schema21543_21551,input_checker21544_21552,output_checker21545_21553))

}
}
break;
}
})();
if(cljs.core.truth_(validate__7824__auto__)){
var temp__4657__auto___21557 = output_checker21545_21553.call(null,o__7827__auto__);
if(cljs.core.truth_(temp__4657__auto___21557)){
var error__7826__auto___21558 = temp__4657__auto___21557;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"event-listener","event-listener",809979412,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","=>","s/=>",-813269628,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Registers the callback on the supplied target for events of type\n   `event-type`. Returns a function of no arguments that, when called,\n   unregisters the callback."], null)),cljs.core.pr_str.call(null,error__7826__auto___21558)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21542_21550,new cljs.core.Keyword(null,"value","value",305978217),o__7827__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7826__auto___21558], null));
} else {
}
} else {
}

return o__7827__auto__;
});})(ufv___21549,output_schema21542_21550,input_schema21543_21551,input_checker21544_21552,output_checker21545_21553))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.mixins.event_listener),schema.core.make_fn_schema.call(null,output_schema21542_21550,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21543_21551], null)));
/**
 * Handles a sequence of listeners for the component, and removes them
 * from the document when the component is unmounted.
 */
om_bootstrap.mixins.set_listener_mixin = {"componentWillMount": (function (){
var this21559 = this;
return ((function (this21559){
return (function (owner){
return owner.listeners = [];
});})(this21559))
.call(null,this21559);
}), "componentWillUnmount": (function (){
var this21560 = this;
return ((function (this21560){
return (function (owner){
var seq__21565 = cljs.core.seq.call(null,owner.listeners);
var chunk__21566 = null;
var count__21567 = (0);
var i__21568 = (0);
while(true){
if((i__21568 < count__21567)){
var l = cljs.core._nth.call(null,chunk__21566,i__21568);
l.call(null);

var G__21569 = seq__21565;
var G__21570 = chunk__21566;
var G__21571 = count__21567;
var G__21572 = (i__21568 + (1));
seq__21565 = G__21569;
chunk__21566 = G__21570;
count__21567 = G__21571;
i__21568 = G__21572;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__21565);
if(temp__4657__auto__){
var seq__21565__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21565__$1)){
var c__7062__auto__ = cljs.core.chunk_first.call(null,seq__21565__$1);
var G__21573 = cljs.core.chunk_rest.call(null,seq__21565__$1);
var G__21574 = c__7062__auto__;
var G__21575 = cljs.core.count.call(null,c__7062__auto__);
var G__21576 = (0);
seq__21565 = G__21573;
chunk__21566 = G__21574;
count__21567 = G__21575;
i__21568 = G__21576;
continue;
} else {
var l = cljs.core.first.call(null,seq__21565__$1);
l.call(null);

var G__21577 = cljs.core.next.call(null,seq__21565__$1);
var G__21578 = null;
var G__21579 = (0);
var G__21580 = (0);
seq__21565 = G__21577;
chunk__21566 = G__21578;
count__21567 = G__21579;
i__21568 = G__21580;
continue;
}
} else {
return null;
}
}
break;
}
});})(this21560))
.call(null,this21560);
}), "set_listener": (function (target21562,event_type21563,callback21564){
var this21561 = this;
return ((function (this21561){
return (function (owner,target,event_type,callback){
var remove_fn = om_bootstrap.mixins.event_listener.call(null,target,event_type,callback);
return owner.listeners.push(remove_fn);
});})(this21561))
.call(null,this21561,target21562,event_type21563,callback21564);
})};
/**
 * Handles a sequence of timeouts for the component, and removes them
 * from the document when the component is unmounted.
 */
om_bootstrap.mixins.set_timeout_mixin = {"componentWillMount": (function (){
var this21582 = this;
return ((function (this21582){
return (function (owner){
return owner.timeouts = [];
});})(this21582))
.call(null,this21582);
}), "componentWillUnmount": (function (){
var this21583 = this;
return ((function (this21583){
return (function (owner){
return owner.timeouts.map(((function (this21583){
return (function (p1__21581_SHARP_){
return clearTimeout(p1__21581_SHARP_);
});})(this21583))
);
});})(this21583))
.call(null,this21583);
}), "set_timeout": (function (f21585,timeout21586){
var this21584 = this;
return ((function (this21584){
return (function (owner,f,timeout){
var timeout__$1 = setTimeout(f,timeout);
return owner.timeouts.push(timeout__$1);
});})(this21584))
.call(null,this21584,f21585,timeout21586);
})};
/**
 * Accepts two DOM elements; returns true if the supplied node is
 *   nested inside the supplied root, false otherwise.
 */
om_bootstrap.mixins.in_root_QMARK_ = (function om_bootstrap$mixins$in_root_QMARK_(node,root){
var node__$1 = node;
while(true){
if((node__$1 == null)){
return false;
} else {
if(cljs.core._EQ_.call(null,root,node__$1)){
return true;
} else {
var G__21587 = node__$1.parentNode;
node__$1 = G__21587;
continue;

}
}
break;
}
});
om_bootstrap.mixins.ESCAPE_KEY = (27);
/**
 * For dropdowns, binds a handler for that sets the dropdown-mixin's
 *   `:open?` state to false if the user clicks outside the owning
 *   component OR hits the escape key.
 */
om_bootstrap.mixins.bind_root_close_handlers_BANG_ = (function om_bootstrap$mixins$bind_root_close_handlers_BANG_(owner){
var set_state = (owner["setDropdownState"]);
return owner.dropdownListeners = [om_bootstrap.mixins.event_listener.call(null,document,"click",((function (set_state){
return (function (e){
if(cljs.core.truth_(om_bootstrap.mixins.in_root_QMARK_.call(null,e.target,om.core.get_node.call(null,owner)))){
return null;
} else {
return set_state.call(null,false);
}
});})(set_state))
),om_bootstrap.mixins.event_listener.call(null,document,"keyup",((function (set_state){
return (function (e){
if(cljs.core._EQ_.call(null,om_bootstrap.mixins.ESCAPE_KEY,e.keyCode)){
return set_state.call(null,false);
} else {
return null;
}
});})(set_state))
)];
});
/**
 * If they're present on the owning object, removes the listeners
 *   registered by the dropdown mixin.
 */
om_bootstrap.mixins.unbind_root_close_handlers_BANG_ = (function om_bootstrap$mixins$unbind_root_close_handlers_BANG_(owner){
var temp__4657__auto__ = owner.dropdownListeners;
if(cljs.core.truth_(temp__4657__auto__)){
var listeners = temp__4657__auto__;
var seq__21592_21596 = cljs.core.seq.call(null,listeners);
var chunk__21593_21597 = null;
var count__21594_21598 = (0);
var i__21595_21599 = (0);
while(true){
if((i__21595_21599 < count__21594_21598)){
var l_21600 = cljs.core._nth.call(null,chunk__21593_21597,i__21595_21599);
l_21600.call(null);

var G__21601 = seq__21592_21596;
var G__21602 = chunk__21593_21597;
var G__21603 = count__21594_21598;
var G__21604 = (i__21595_21599 + (1));
seq__21592_21596 = G__21601;
chunk__21593_21597 = G__21602;
count__21594_21598 = G__21603;
i__21595_21599 = G__21604;
continue;
} else {
var temp__4657__auto___21605__$1 = cljs.core.seq.call(null,seq__21592_21596);
if(temp__4657__auto___21605__$1){
var seq__21592_21606__$1 = temp__4657__auto___21605__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21592_21606__$1)){
var c__7062__auto___21607 = cljs.core.chunk_first.call(null,seq__21592_21606__$1);
var G__21608 = cljs.core.chunk_rest.call(null,seq__21592_21606__$1);
var G__21609 = c__7062__auto___21607;
var G__21610 = cljs.core.count.call(null,c__7062__auto___21607);
var G__21611 = (0);
seq__21592_21596 = G__21608;
chunk__21593_21597 = G__21609;
count__21594_21598 = G__21610;
i__21595_21599 = G__21611;
continue;
} else {
var l_21612 = cljs.core.first.call(null,seq__21592_21606__$1);
l_21612.call(null);

var G__21613 = cljs.core.next.call(null,seq__21592_21606__$1);
var G__21614 = null;
var G__21615 = (0);
var G__21616 = (0);
seq__21592_21596 = G__21613;
chunk__21593_21597 = G__21614;
count__21594_21598 = G__21615;
i__21595_21599 = G__21616;
continue;
}
} else {
}
}
break;
}

return owner.dropdownListeners = null;
} else {
return null;
}
});
/**
 * Mixin that manages a single piece of state - :open?. If a user
 *   clicks outside the component's owning dom element OR hits the escape
 *   key, the state will jump back to false.
 * 
 *   Down the road this may need to register a callback when the state
 *   changes.
 */
om_bootstrap.mixins.dropdown_mixin = {"getInitialState": (function (){
var this21617 = this;
return ((function (this21617){
return (function (_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null);
});})(this21617))
.call(null,this21617);
}), "componentWillUnmount": (function (){
var this21618 = this;
return ((function (this21618){
return (function (owner){
return om_bootstrap.mixins.unbind_root_close_handlers_BANG_.call(null,owner);
});})(this21618))
.call(null,this21618);
}), "isDropdownOpen": (function (){
var this21619 = this;
return ((function (this21619){
return (function (owner){
return om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"open?","open?",1238443125));
});})(this21619))
.call(null,this21619);
}), "setDropdownState": (function (open_QMARK_21621){
var this21620 = this;
return ((function (this21620){
return (function (owner,open_QMARK_){
if(cljs.core.truth_(open_QMARK_)){
om_bootstrap.mixins.bind_root_close_handlers_BANG_.call(null,owner);
} else {
om_bootstrap.mixins.unbind_root_close_handlers_BANG_.call(null,owner);
}

return om.core.set_state_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open?","open?",1238443125)], null),open_QMARK_);
});})(this21620))
.call(null,this21620,open_QMARK_21621);
})};
/**
 * Mixin that enables collapsible Panels. Similar to the Dropdown
 * Mixin it only manages a single piece of state - :collapsed?. The Panel
 * is opened and closen by clicking on the header.
 */
om_bootstrap.mixins.collapsible_mixin = {"getInitialState": (function (){
var this21622 = this;
return ((function (this21622){
return (function (_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674),true], null);
});})(this21622))
.call(null,this21622);
}), "isPanelCollapsed": (function (){
var this21623 = this;
return ((function (this21623){
return (function (owner){
var collapsed_QMARK_ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674));
if((collapsed_QMARK_ == null)){
om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674),true);

return true;
} else {
return collapsed_QMARK_;
}
});})(this21623))
.call(null,this21623);
}), "toggleCollapsed": (function (){
var this21624 = this;
return ((function (this21624){
return (function (owner){
return om.core.update_state_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674)], null),cljs.core.not);
});})(this21624))
.call(null,this21624);
})};

//# sourceMappingURL=mixins.js.map?rel=1486035196172