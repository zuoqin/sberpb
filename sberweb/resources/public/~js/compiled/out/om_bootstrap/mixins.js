// Compiled by ClojureScript 1.9.89 {}
goog.provide('om_bootstrap.mixins');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('om.core');
goog.require('om_tools.mixin');
goog.require('schema.core');
var ufv___39822 = schema.utils.use_fn_validation;
var output_schema39815_39823 = schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var input_schema39816_39824 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"target","target",1893533248,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null))),schema.core.one.call(null,schema.core.Str,cljs.core.with_meta(new cljs.core.Symbol(null,"event-type","event-type",1960254340,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null)], null))),schema.core.one.call(null,schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"callback","callback",935395299,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","=>","s/=>",-813269628,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null))], null)))], null);
var input_checker39817_39825 = schema.core.checker.call(null,input_schema39816_39824);
var output_checker39818_39826 = schema.core.checker.call(null,output_schema39815_39823);
/**
 * Inputs: [target :- s/Any event-type :- s/Str callback :- (s/=> s/Any s/Any)]
 *   Returns: (s/=> s/Any)
 * 
 *   Registers the callback on the supplied target for events of type
 * `event-type`. Returns a function of no arguments that, when called,
 * unregisters the callback.
 */
om_bootstrap.mixins.event_listener = ((function (ufv___39822,output_schema39815_39823,input_schema39816_39824,input_checker39817_39825,output_checker39818_39826){
return (function om_bootstrap$mixins$event_listener(G__39819,G__39820,G__39821){
var validate__29415__auto__ = ufv___39822.get_cell();
if(cljs.core.truth_(validate__29415__auto__)){
var args__29416__auto___39827 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__39819,G__39820,G__39821], null);
var temp__4657__auto___39828 = input_checker39817_39825.call(null,args__29416__auto___39827);
if(cljs.core.truth_(temp__4657__auto___39828)){
var error__29417__auto___39829 = temp__4657__auto___39828;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"event-listener","event-listener",809979412,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","=>","s/=>",-813269628,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Registers the callback on the supplied target for events of type\n   `event-type`. Returns a function of no arguments that, when called,\n   unregisters the callback."], null)),cljs.core.pr_str.call(null,error__29417__auto___39829)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39816_39824,new cljs.core.Keyword(null,"value","value",305978217),args__29416__auto___39827,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___39829], null));
} else {
}
} else {
}

var o__29418__auto__ = (function (){var target = G__39819;
var event_type = G__39820;
var callback = G__39821;
while(true){
if(cljs.core.truth_(target.addEventListener)){
target.addEventListener(event_type,callback,false);

return ((function (validate__29415__auto__,ufv___39822,output_schema39815_39823,input_schema39816_39824,input_checker39817_39825,output_checker39818_39826){
return (function (){
return target.removeEventListener(event_type,callback,false);
});
;})(validate__29415__auto__,ufv___39822,output_schema39815_39823,input_schema39816_39824,input_checker39817_39825,output_checker39818_39826))
} else {
if(cljs.core.truth_(target.attachEvent)){
var event_type__$1 = [cljs.core.str("on"),cljs.core.str(event_type)].join('');
target.attachEvent(event_type__$1,callback);

return ((function (event_type__$1,validate__29415__auto__,ufv___39822,output_schema39815_39823,input_schema39816_39824,input_checker39817_39825,output_checker39818_39826){
return (function (){
return target.detachEvent(event_type__$1,callback);
});
;})(event_type__$1,validate__29415__auto__,ufv___39822,output_schema39815_39823,input_schema39816_39824,input_checker39817_39825,output_checker39818_39826))
} else {
return ((function (validate__29415__auto__,ufv___39822,output_schema39815_39823,input_schema39816_39824,input_checker39817_39825,output_checker39818_39826){
return (function (){
return null;
});
;})(validate__29415__auto__,ufv___39822,output_schema39815_39823,input_schema39816_39824,input_checker39817_39825,output_checker39818_39826))

}
}
break;
}
})();
if(cljs.core.truth_(validate__29415__auto__)){
var temp__4657__auto___39830 = output_checker39818_39826.call(null,o__29418__auto__);
if(cljs.core.truth_(temp__4657__auto___39830)){
var error__29417__auto___39831 = temp__4657__auto___39830;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"event-listener","event-listener",809979412,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","=>","s/=>",-813269628,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Registers the callback on the supplied target for events of type\n   `event-type`. Returns a function of no arguments that, when called,\n   unregisters the callback."], null)),cljs.core.pr_str.call(null,error__29417__auto___39831)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39815_39823,new cljs.core.Keyword(null,"value","value",305978217),o__29418__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__29417__auto___39831], null));
} else {
}
} else {
}

return o__29418__auto__;
});})(ufv___39822,output_schema39815_39823,input_schema39816_39824,input_checker39817_39825,output_checker39818_39826))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.mixins.event_listener),schema.core.make_fn_schema.call(null,output_schema39815_39823,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39816_39824], null)));
/**
 * Handles a sequence of listeners for the component, and removes them
 * from the document when the component is unmounted.
 */
om_bootstrap.mixins.set_listener_mixin = {"componentWillMount": (function (){
var this39832 = this;
return ((function (this39832){
return (function (owner){
return owner.listeners = [];
});})(this39832))
.call(null,this39832);
}), "componentWillUnmount": (function (){
var this39833 = this;
return ((function (this39833){
return (function (owner){
var seq__39838 = cljs.core.seq.call(null,owner.listeners);
var chunk__39839 = null;
var count__39840 = (0);
var i__39841 = (0);
while(true){
if((i__39841 < count__39840)){
var l = cljs.core._nth.call(null,chunk__39839,i__39841);
l.call(null);

var G__39842 = seq__39838;
var G__39843 = chunk__39839;
var G__39844 = count__39840;
var G__39845 = (i__39841 + (1));
seq__39838 = G__39842;
chunk__39839 = G__39843;
count__39840 = G__39844;
i__39841 = G__39845;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39838);
if(temp__4657__auto__){
var seq__39838__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39838__$1)){
var c__25683__auto__ = cljs.core.chunk_first.call(null,seq__39838__$1);
var G__39846 = cljs.core.chunk_rest.call(null,seq__39838__$1);
var G__39847 = c__25683__auto__;
var G__39848 = cljs.core.count.call(null,c__25683__auto__);
var G__39849 = (0);
seq__39838 = G__39846;
chunk__39839 = G__39847;
count__39840 = G__39848;
i__39841 = G__39849;
continue;
} else {
var l = cljs.core.first.call(null,seq__39838__$1);
l.call(null);

var G__39850 = cljs.core.next.call(null,seq__39838__$1);
var G__39851 = null;
var G__39852 = (0);
var G__39853 = (0);
seq__39838 = G__39850;
chunk__39839 = G__39851;
count__39840 = G__39852;
i__39841 = G__39853;
continue;
}
} else {
return null;
}
}
break;
}
});})(this39833))
.call(null,this39833);
}), "set_listener": (function (target39835,event_type39836,callback39837){
var this39834 = this;
return ((function (this39834){
return (function (owner,target,event_type,callback){
var remove_fn = om_bootstrap.mixins.event_listener.call(null,target,event_type,callback);
return owner.listeners.push(remove_fn);
});})(this39834))
.call(null,this39834,target39835,event_type39836,callback39837);
})};
/**
 * Handles a sequence of timeouts for the component, and removes them
 * from the document when the component is unmounted.
 */
om_bootstrap.mixins.set_timeout_mixin = {"componentWillMount": (function (){
var this39855 = this;
return ((function (this39855){
return (function (owner){
return owner.timeouts = [];
});})(this39855))
.call(null,this39855);
}), "componentWillUnmount": (function (){
var this39856 = this;
return ((function (this39856){
return (function (owner){
return owner.timeouts.map(((function (this39856){
return (function (p1__39854_SHARP_){
return clearTimeout(p1__39854_SHARP_);
});})(this39856))
);
});})(this39856))
.call(null,this39856);
}), "set_timeout": (function (f39858,timeout39859){
var this39857 = this;
return ((function (this39857){
return (function (owner,f,timeout){
var timeout__$1 = setTimeout(f,timeout);
return owner.timeouts.push(timeout__$1);
});})(this39857))
.call(null,this39857,f39858,timeout39859);
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
var G__39860 = node__$1.parentNode;
node__$1 = G__39860;
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
var seq__39865_39869 = cljs.core.seq.call(null,listeners);
var chunk__39866_39870 = null;
var count__39867_39871 = (0);
var i__39868_39872 = (0);
while(true){
if((i__39868_39872 < count__39867_39871)){
var l_39873 = cljs.core._nth.call(null,chunk__39866_39870,i__39868_39872);
l_39873.call(null);

var G__39874 = seq__39865_39869;
var G__39875 = chunk__39866_39870;
var G__39876 = count__39867_39871;
var G__39877 = (i__39868_39872 + (1));
seq__39865_39869 = G__39874;
chunk__39866_39870 = G__39875;
count__39867_39871 = G__39876;
i__39868_39872 = G__39877;
continue;
} else {
var temp__4657__auto___39878__$1 = cljs.core.seq.call(null,seq__39865_39869);
if(temp__4657__auto___39878__$1){
var seq__39865_39879__$1 = temp__4657__auto___39878__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39865_39879__$1)){
var c__25683__auto___39880 = cljs.core.chunk_first.call(null,seq__39865_39879__$1);
var G__39881 = cljs.core.chunk_rest.call(null,seq__39865_39879__$1);
var G__39882 = c__25683__auto___39880;
var G__39883 = cljs.core.count.call(null,c__25683__auto___39880);
var G__39884 = (0);
seq__39865_39869 = G__39881;
chunk__39866_39870 = G__39882;
count__39867_39871 = G__39883;
i__39868_39872 = G__39884;
continue;
} else {
var l_39885 = cljs.core.first.call(null,seq__39865_39879__$1);
l_39885.call(null);

var G__39886 = cljs.core.next.call(null,seq__39865_39879__$1);
var G__39887 = null;
var G__39888 = (0);
var G__39889 = (0);
seq__39865_39869 = G__39886;
chunk__39866_39870 = G__39887;
count__39867_39871 = G__39888;
i__39868_39872 = G__39889;
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
var this39890 = this;
return ((function (this39890){
return (function (_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null);
});})(this39890))
.call(null,this39890);
}), "componentWillUnmount": (function (){
var this39891 = this;
return ((function (this39891){
return (function (owner){
return om_bootstrap.mixins.unbind_root_close_handlers_BANG_.call(null,owner);
});})(this39891))
.call(null,this39891);
}), "isDropdownOpen": (function (){
var this39892 = this;
return ((function (this39892){
return (function (owner){
return om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"open?","open?",1238443125));
});})(this39892))
.call(null,this39892);
}), "setDropdownState": (function (open_QMARK_39894){
var this39893 = this;
return ((function (this39893){
return (function (owner,open_QMARK_){
if(cljs.core.truth_(open_QMARK_)){
om_bootstrap.mixins.bind_root_close_handlers_BANG_.call(null,owner);
} else {
om_bootstrap.mixins.unbind_root_close_handlers_BANG_.call(null,owner);
}

return om.core.set_state_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open?","open?",1238443125)], null),open_QMARK_);
});})(this39893))
.call(null,this39893,open_QMARK_39894);
})};
/**
 * Mixin that enables collapsible Panels. Similar to the Dropdown
 * Mixin it only manages a single piece of state - :collapsed?. The Panel
 * is opened and closen by clicking on the header.
 */
om_bootstrap.mixins.collapsible_mixin = {"getInitialState": (function (){
var this39895 = this;
return ((function (this39895){
return (function (_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674),true], null);
});})(this39895))
.call(null,this39895);
}), "isPanelCollapsed": (function (){
var this39896 = this;
return ((function (this39896){
return (function (owner){
var collapsed_QMARK_ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674));
if((collapsed_QMARK_ == null)){
om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674),true);

return true;
} else {
return collapsed_QMARK_;
}
});})(this39896))
.call(null,this39896);
}), "toggleCollapsed": (function (){
var this39897 = this;
return ((function (this39897){
return (function (owner){
return om.core.update_state_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674)], null),cljs.core.not);
});})(this39897))
.call(null,this39897);
})};

//# sourceMappingURL=mixins.js.map?rel=1486291272468