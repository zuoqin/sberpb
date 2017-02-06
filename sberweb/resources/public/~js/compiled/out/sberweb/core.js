// Compiled by ClojureScript 1.9.89 {}
goog.provide('sberweb.core');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('om_tools.dom');
goog.require('goog.history.EventType');
goog.require('om_tools.core');
goog.require('om.dom');
goog.require('sberweb.settings');
goog.require('goog.History');
goog.require('goog.events');
goog.require('om.core');
goog.require('secretary.core');
goog.require('om_bootstrap.button');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof sberweb.core.app_state !== 'undefined'){
} else {
sberweb.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selectedclient","selectedclient",1310372998),"KDBSF",new cljs.core.Keyword(null,"search","search",1564939822),"",new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"role","role",-736691072),"admin"], null)], null));
}
sberweb.core.jquery = $;
sberweb.core.doLogout = (function sberweb$core$doLogout(data){
return cljs.core.swap_BANG_.call(null,sberweb.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814)], null),(0));
});
sberweb.core.goUsers = (function sberweb$core$goUsers(data){
return cljs.core.swap_BANG_.call(null,sberweb.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814)], null),(1));
});

var ufv___46037 = schema.utils.use_fn_validation;
var output_schema46022_46038 = schema.core.Any;
var input_schema46023_46039 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker46024_46040 = schema.core.checker.call(null,input_schema46023_46039);
var output_checker46025_46041 = schema.core.checker.call(null,output_schema46022_46038);
/**
 * Inputs: [_ _]
 */
sberweb.core.logout_view = ((function (ufv___46037,output_schema46022_46038,input_schema46023_46039,input_checker46024_46040,output_checker46025_46041){
return (function sberweb$core$logout_view(G__46026,G__46027){
var validate__37909__auto__ = ufv___46037.get_cell();
if(cljs.core.truth_(validate__37909__auto__)){
var args__37910__auto___46042 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__46026,G__46027], null);
var temp__4657__auto___46043 = input_checker46024_46040.call(null,args__37910__auto___46042);
if(cljs.core.truth_(temp__4657__auto___46043)){
var error__37911__auto___46044 = temp__4657__auto___46043;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"logout-view","logout-view",-923812057,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__37911__auto___46044)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema46023_46039,new cljs.core.Keyword(null,"value","value",305978217),args__37910__auto___46042,new cljs.core.Keyword(null,"error","error",-978969032),error__37911__auto___46044], null));
} else {
}
} else {
}

var o__37912__auto__ = (function (){var _ = G__46026;
var ___$1 = G__46027;
while(true){
if(typeof sberweb.core.t_sberweb$core46031 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
sberweb.core.t_sberweb$core46031 = (function (input_checker46024,output_schema46022,logout_view,validate__37909__auto__,output_checker46025,_,G__46026,G__46027,input_schema46023,ufv__,meta46032){
this.input_checker46024 = input_checker46024;
this.output_schema46022 = output_schema46022;
this.logout_view = logout_view;
this.validate__37909__auto__ = validate__37909__auto__;
this.output_checker46025 = output_checker46025;
this._ = _;
this.G__46026 = G__46026;
this.G__46027 = G__46027;
this.input_schema46023 = input_schema46023;
this.ufv__ = ufv__;
this.meta46032 = meta46032;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
sberweb.core.t_sberweb$core46031.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__37909__auto__,ufv___46037,output_schema46022_46038,input_schema46023_46039,input_checker46024_46040,output_checker46025_46041){
return (function (_46033,meta46032__$1){
var self__ = this;
var _46033__$1 = this;
return (new sberweb.core.t_sberweb$core46031(self__.input_checker46024,self__.output_schema46022,self__.logout_view,self__.validate__37909__auto__,self__.output_checker46025,self__._,self__.G__46026,self__.G__46027,self__.input_schema46023,self__.ufv__,meta46032__$1));
});})(validate__37909__auto__,ufv___46037,output_schema46022_46038,input_schema46023_46039,input_checker46024_46040,output_checker46025_46041))
;

sberweb.core.t_sberweb$core46031.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__37909__auto__,ufv___46037,output_schema46022_46038,input_schema46023_46039,input_checker46024_46040,output_checker46025_46041){
return (function (_46033){
var self__ = this;
var _46033__$1 = this;
return self__.meta46032;
});})(validate__37909__auto__,ufv___46037,output_schema46022_46038,input_schema46023_46039,input_checker46024_46040,output_checker46025_46041))
;

sberweb.core.t_sberweb$core46031.prototype.om$core$IDisplayName$ = true;

sberweb.core.t_sberweb$core46031.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__37909__auto__,ufv___46037,output_schema46022_46038,input_schema46023_46039,input_checker46024_46040,output_checker46025_46041){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return "logout-view";
});})(validate__37909__auto__,ufv___46037,output_schema46022_46038,input_schema46023_46039,input_checker46024_46040,output_checker46025_46041))
;

sberweb.core.t_sberweb$core46031.prototype.om$core$IRender$ = true;

sberweb.core.t_sberweb$core46031.prototype.om$core$IRender$render$arity$1 = ((function (validate__37909__auto__,ufv___46037,output_schema46022_46038,input_schema46023_46039,input_checker46024_46040,output_checker46025_46041){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"10px"], null)], null);
return om_tools.dom.element.call(null,React.DOM.div,style,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.a,cljs.core.assoc.call(null,style,new cljs.core.Keyword(null,"href","href",-793805698),"#/login"),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,["Login"],null)))],null)));
});})(validate__37909__auto__,ufv___46037,output_schema46022_46038,input_schema46023_46039,input_checker46024_46040,output_checker46025_46041))
;

sberweb.core.t_sberweb$core46031.getBasis = ((function (validate__37909__auto__,ufv___46037,output_schema46022_46038,input_schema46023_46039,input_checker46024_46040,output_checker46025_46041){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"input-checker46024","input-checker46024",-1891559199,null),new cljs.core.Symbol(null,"output-schema46022","output-schema46022",1380057698,null),cljs.core.with_meta(new cljs.core.Symbol(null,"logout-view","logout-view",-923812057,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))], null))),new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("schema.core","make-fn-schema","schema.core/make-fn-schema",152735578,null),new cljs.core.Symbol(null,"output-schema46022","output-schema46022",1380057698,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"input-schema46023","input-schema46023",-438949546,null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Inputs: [_ _]",new cljs.core.Keyword(null,"raw-arglists","raw-arglists",-1511012109),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)))], null)),new cljs.core.Symbol(null,"validate__37909__auto__","validate__37909__auto__",-807220660,null),new cljs.core.Symbol(null,"output-checker46025","output-checker46025",890881676,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__46026","G__46026",963452081,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"G__46027","G__46027",1787366291,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"input-schema46023","input-schema46023",-438949546,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"meta46032","meta46032",-2052379529,null)], null);
});})(validate__37909__auto__,ufv___46037,output_schema46022_46038,input_schema46023_46039,input_checker46024_46040,output_checker46025_46041))
;

sberweb.core.t_sberweb$core46031.cljs$lang$type = true;

sberweb.core.t_sberweb$core46031.cljs$lang$ctorStr = "sberweb.core/t_sberweb$core46031";

sberweb.core.t_sberweb$core46031.cljs$lang$ctorPrWriter = ((function (validate__37909__auto__,ufv___46037,output_schema46022_46038,input_schema46023_46039,input_checker46024_46040,output_checker46025_46041){
return (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"sberweb.core/t_sberweb$core46031");
});})(validate__37909__auto__,ufv___46037,output_schema46022_46038,input_schema46023_46039,input_checker46024_46040,output_checker46025_46041))
;

sberweb.core.__GT_t_sberweb$core46031 = ((function (validate__37909__auto__,ufv___46037,output_schema46022_46038,input_schema46023_46039,input_checker46024_46040,output_checker46025_46041){
return (function sberweb$core$logout_view_$___GT_t_sberweb$core46031(input_checker46024__$1,output_schema46022__$1,logout_view__$1,validate__37909__auto____$1,output_checker46025__$1,___$2,G__46026__$1,G__46027__$1,input_schema46023__$1,ufv____$1,meta46032){
return (new sberweb.core.t_sberweb$core46031(input_checker46024__$1,output_schema46022__$1,logout_view__$1,validate__37909__auto____$1,output_checker46025__$1,___$2,G__46026__$1,G__46027__$1,input_schema46023__$1,ufv____$1,meta46032));
});})(validate__37909__auto__,ufv___46037,output_schema46022_46038,input_schema46023_46039,input_checker46024_46040,output_checker46025_46041))
;

}

return (new sberweb.core.t_sberweb$core46031(input_checker46024_46040,output_schema46022_46038,sberweb$core$logout_view,validate__37909__auto__,output_checker46025_46041,___$1,G__46026,G__46027,input_schema46023_46039,ufv___46037,null));
break;
}
})();
if(cljs.core.truth_(validate__37909__auto__)){
var temp__4657__auto___46045 = output_checker46025_46041.call(null,o__37912__auto__);
if(cljs.core.truth_(temp__4657__auto___46045)){
var error__37911__auto___46046 = temp__4657__auto___46045;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"logout-view","logout-view",-923812057,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__37911__auto___46046)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema46022_46038,new cljs.core.Keyword(null,"value","value",305978217),o__37912__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37911__auto___46046], null));
} else {
}
} else {
}

return o__37912__auto__;
});})(ufv___46037,output_schema46022_46038,input_schema46023_46039,input_checker46024_46040,output_checker46025_46041))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,sberweb.core.logout_view),schema.core.make_fn_schema.call(null,output_schema46022_46038,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema46023_46039], null)));

sberweb.core.__GT_logout_view = (function sberweb$core$__GT_logout_view(var_args){
var args46034 = [];
var len__25947__auto___46047 = arguments.length;
var i__25948__auto___46048 = (0);
while(true){
if((i__25948__auto___46048 < len__25947__auto___46047)){
args46034.push((arguments[i__25948__auto___46048]));

var G__46049 = (i__25948__auto___46048 + (1));
i__25948__auto___46048 = G__46049;
continue;
} else {
}
break;
}

var G__46036 = args46034.length;
switch (G__46036) {
case 1:
return sberweb.core.__GT_logout_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sberweb.core.__GT_logout_view.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46034.length)].join('')));

}
});

sberweb.core.__GT_logout_view.cljs$core$IFn$_invoke$arity$1 = (function (cursor__41613__auto__){
return om.core.build.call(null,sberweb.core.logout_view,cursor__41613__auto__);
});

sberweb.core.__GT_logout_view.cljs$core$IFn$_invoke$arity$2 = (function (cursor__41613__auto__,m46021){
return om.core.build.call(null,sberweb.core.logout_view,cursor__41613__auto__,m46021);
});

sberweb.core.__GT_logout_view.cljs$lang$maxFixedArity = 2;

sberweb.core.handle_change = (function sberweb$core$handle_change(e,owner){
return cljs.core.swap_BANG_.call(null,sberweb.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.keyword.call(null,e.target.id)], null),e.target.value);
});
sberweb.core.map_position = (function sberweb$core$map_position(position){
var result = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),parseInt(cljs.core.name.call(null,cljs.core.nth.call(null,position,(0)))),new cljs.core.Keyword(null,"amount","amount",364489504),cljs.core.nth.call(null,position,(1))], null);
return result;
});
sberweb.core.OnGetPositions = (function sberweb$core$OnGetPositions(response){
return cljs.core.swap_BANG_.call(null,sberweb.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,new cljs.core.Keyword(null,"selectedclient","selectedclient",1310372998).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.core.app_state))),new cljs.core.Keyword(null,"positions","positions",-1380538434)], null),cljs.core.map.call(null,(function (x){
return sberweb.core.map_position.call(null,x);
}),response));
});
sberweb.core.error_handler = (function sberweb$core$error_handler(p__46051){
var map__46054 = p__46051;
var map__46054__$1 = ((((!((map__46054 == null)))?((((map__46054.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46054.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46054):map__46054);
var status = cljs.core.get.call(null,map__46054__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__46054__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return console.log([cljs.core.str("something bad happened: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
sberweb.core.getPositions = (function sberweb$core$getPositions(){
return ajax.core.GET.call(null,[cljs.core.str(sberweb.settings.apipath),cljs.core.str("api/position?client="),cljs.core.str(new cljs.core.Keyword(null,"selectedclient","selectedclient",1310372998).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.core.app_state)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"handler","handler",-195596612),sberweb.core.OnGetPositions,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),sberweb.core.error_handler,new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json",new cljs.core.Keyword(null,"Authorization","Authorization",-1017527462),[cljs.core.str("Bearer "),cljs.core.str(new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.core.app_state))))].join('')], null)], null));
});
sberweb.core.onDropDownChange = (function sberweb$core$onDropDownChange(id,value){
var code = new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,(function (x){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(x),parseInt(value))){
return true;
} else {
return false;
}
}),new cljs.core.Keyword(null,"clients","clients",1436018090).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.core.app_state)))));
cljs.core.swap_BANG_.call(null,sberweb.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selectedclient","selectedclient",1310372998)], null),code);

if((new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(cljs.core.keyword.call(null,value).call(null,cljs.core.deref.call(null,sberweb.core.app_state))) == null)){
return sberweb.core.getPositions.call(null);
} else {
return null;
}
});
sberweb.core.comp_clients = (function sberweb$core$comp_clients(client1,client2){
if((cljs.core.compare.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(client1),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(client2)) > (0))){
return false;
} else {
return true;
}
});
sberweb.core.buildClientsList = (function sberweb$core$buildClientsList(data,owner){
return cljs.core.map.call(null,(function (text){
return cljs.core.apply.call(null,om.dom.option,{"key": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(text)), "value": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(text)), "onChange": om_tools.dom.format_opts.call(null,(function (p1__46056_SHARP_){
return sberweb.core.handle_change.call(null,p1__46056_SHARP_,owner);
}))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(text)],null))));
}),cljs.core.sort.call(null,cljs.core.comp.call(null,sberweb.core.comp_clients),new cljs.core.Keyword(null,"clients","clients",1436018090).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.core.app_state))));
});
sberweb.core.setClientsDropDown = (function sberweb$core$setClientsDropDown(){
sberweb.core.jquery.call(null,(function (){
return sberweb.core.jquery.call(null,"#clients").selectpicker(cljs.core.PersistentArrayMap.EMPTY);
}));

return sberweb.core.jquery.call(null,(function (){
return sberweb.core.jquery.call(null,"#clients").selectpicker("val",new cljs.core.Keyword(null,"selectedclient","selectedclient",1310372998).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.core.app_state))).on("change",(function (e){
return sberweb.core.onDropDownChange.call(null,e.target.id,e.target.value);
}));
}));
});
sberweb.core.onDidUpdate = (function sberweb$core$onDidUpdate(data){
console.log("Update Core happened");

return sberweb.core.setClientsDropDown.call(null);
});
sberweb.core.onMount = (function sberweb$core$onMount(data){
console.log("Mount core happened");

return sberweb.core.setClientsDropDown.call(null);
});

var ufv___46073 = schema.utils.use_fn_validation;
var output_schema46058_46074 = schema.core.Any;
var input_schema46059_46075 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker46060_46076 = schema.core.checker.call(null,input_schema46059_46075);
var output_checker46061_46077 = schema.core.checker.call(null,output_schema46058_46074);
/**
 * Inputs: [data owner]
 */
sberweb.core.users_navigation_view = ((function (ufv___46073,output_schema46058_46074,input_schema46059_46075,input_checker46060_46076,output_checker46061_46077){
return (function sberweb$core$users_navigation_view(G__46062,G__46063){
var validate__37909__auto__ = ufv___46073.get_cell();
if(cljs.core.truth_(validate__37909__auto__)){
var args__37910__auto___46078 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__46062,G__46063], null);
var temp__4657__auto___46079 = input_checker46060_46076.call(null,args__37910__auto___46078);
if(cljs.core.truth_(temp__4657__auto___46079)){
var error__37911__auto___46080 = temp__4657__auto___46079;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"users-navigation-view","users-navigation-view",-19184075,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__37911__auto___46080)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema46059_46075,new cljs.core.Keyword(null,"value","value",305978217),args__37910__auto___46078,new cljs.core.Keyword(null,"error","error",-978969032),error__37911__auto___46080], null));
} else {
}
} else {
}

var o__37912__auto__ = (function (){var data = G__46062;
var owner = G__46063;
while(true){
if(typeof sberweb.core.t_sberweb$core46067 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {om.core.IDidUpdate}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IDidMount}
 * @implements {cljs.core.IWithMeta}
*/
sberweb.core.t_sberweb$core46067 = (function (input_checker46060,owner,data,validate__37909__auto__,G__46062,input_schema46059,G__46063,output_schema46058,users_navigation_view,output_checker46061,ufv__,meta46068){
this.input_checker46060 = input_checker46060;
this.owner = owner;
this.data = data;
this.validate__37909__auto__ = validate__37909__auto__;
this.G__46062 = G__46062;
this.input_schema46059 = input_schema46059;
this.G__46063 = G__46063;
this.output_schema46058 = output_schema46058;
this.users_navigation_view = users_navigation_view;
this.output_checker46061 = output_checker46061;
this.ufv__ = ufv__;
this.meta46068 = meta46068;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
sberweb.core.t_sberweb$core46067.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__37909__auto__,ufv___46073,output_schema46058_46074,input_schema46059_46075,input_checker46060_46076,output_checker46061_46077){
return (function (_46069,meta46068__$1){
var self__ = this;
var _46069__$1 = this;
return (new sberweb.core.t_sberweb$core46067(self__.input_checker46060,self__.owner,self__.data,self__.validate__37909__auto__,self__.G__46062,self__.input_schema46059,self__.G__46063,self__.output_schema46058,self__.users_navigation_view,self__.output_checker46061,self__.ufv__,meta46068__$1));
});})(validate__37909__auto__,ufv___46073,output_schema46058_46074,input_schema46059_46075,input_checker46060_46076,output_checker46061_46077))
;

sberweb.core.t_sberweb$core46067.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__37909__auto__,ufv___46073,output_schema46058_46074,input_schema46059_46075,input_checker46060_46076,output_checker46061_46077){
return (function (_46069){
var self__ = this;
var _46069__$1 = this;
return self__.meta46068;
});})(validate__37909__auto__,ufv___46073,output_schema46058_46074,input_schema46059_46075,input_checker46060_46076,output_checker46061_46077))
;

sberweb.core.t_sberweb$core46067.prototype.om$core$IDisplayName$ = true;

sberweb.core.t_sberweb$core46067.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__37909__auto__,ufv___46073,output_schema46058_46074,input_schema46059_46075,input_checker46060_46076,output_checker46061_46077){
return (function (_){
var self__ = this;
var ___$1 = this;
return "users-navigation-view";
});})(validate__37909__auto__,ufv___46073,output_schema46058_46074,input_schema46059_46075,input_checker46060_46076,output_checker46061_46077))
;

sberweb.core.t_sberweb$core46067.prototype.om$core$IDidMount$ = true;

sberweb.core.t_sberweb$core46067.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (validate__37909__auto__,ufv___46073,output_schema46058_46074,input_schema46059_46075,input_checker46060_46076,output_checker46061_46077){
return (function (_){
var self__ = this;
var ___$1 = this;
return sberweb.core.onMount.call(null,self__.data);
});})(validate__37909__auto__,ufv___46073,output_schema46058_46074,input_schema46059_46075,input_checker46060_46076,output_checker46061_46077))
;

sberweb.core.t_sberweb$core46067.prototype.om$core$IDidUpdate$ = true;

sberweb.core.t_sberweb$core46067.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (validate__37909__auto__,ufv___46073,output_schema46058_46074,input_schema46059_46075,input_checker46060_46076,output_checker46061_46077){
return (function (this$,prev_props,prev_state){
var self__ = this;
var this$__$1 = this;

return self__.data;
});})(validate__37909__auto__,ufv___46073,output_schema46058_46074,input_schema46059_46075,input_checker46060_46076,output_checker46061_46077))
;

sberweb.core.t_sberweb$core46067.prototype.om$core$IRender$ = true;

sberweb.core.t_sberweb$core46067.prototype.om$core$IRender$render$arity$1 = ((function (validate__37909__auto__,ufv___46073,output_schema46058_46074,input_schema46059_46075,input_checker46060_46076,output_checker46061_46077){
return (function (_){
var self__ = this;
var ___$1 = this;
var style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"10px",new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),"0px"], null)], null);
var stylehome = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"0px"], null)], null);
return cljs.core.apply.call(null,React.DOM.nav,{"className": "navbar navbar-default navbar-static-top", "role": "navigation"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "navbar-header"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.button,{"type": "button", "className": "navbar-toggle", "data-toggle": "collapse", "data-target": ".navbar-collapse"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.span({"className": "sr-only"},"Toggle navigation"),React.DOM.span({"className": "icon-bar"}),React.DOM.span({"className": "icon-bar"}),React.DOM.span({"className": "icon-bar"})],null)))),om_tools.dom.element.call(null,React.DOM.a,cljs.core.assoc.call(null,stylehome,new cljs.core.Keyword(null,"className","className",-1983287057),"navbar-brand"),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.span,{"id": "pageTitle"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.data))],null))))],null)))],null)))),React.DOM.ul({"className": "nav navbar-top-links navbar-right"})],null))));
});})(validate__37909__auto__,ufv___46073,output_schema46058_46074,input_schema46059_46075,input_checker46060_46076,output_checker46061_46077))
;

sberweb.core.t_sberweb$core46067.getBasis = ((function (validate__37909__auto__,ufv___46073,output_schema46058_46074,input_schema46059_46075,input_checker46060_46076,output_checker46061_46077){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"input-checker46060","input-checker46060",2026574659,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"validate__37909__auto__","validate__37909__auto__",-807220660,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__46062","G__46062",-870697139,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"input-schema46059","input-schema46059",-413303983,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__46063","G__46063",-554264493,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"output-schema46058","output-schema46058",-1235306379,null),cljs.core.with_meta(new cljs.core.Symbol(null,"users-navigation-view","users-navigation-view",-19184075,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))], null))),new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("schema.core","make-fn-schema","schema.core/make-fn-schema",152735578,null),new cljs.core.Symbol(null,"output-schema46058","output-schema46058",-1235306379,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"input-schema46059","input-schema46059",-413303983,null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Inputs: [data owner]",new cljs.core.Keyword(null,"raw-arglists","raw-arglists",-1511012109),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"output-checker46061","output-checker46061",-1743970474,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"meta46068","meta46068",2078262497,null)], null);
});})(validate__37909__auto__,ufv___46073,output_schema46058_46074,input_schema46059_46075,input_checker46060_46076,output_checker46061_46077))
;

sberweb.core.t_sberweb$core46067.cljs$lang$type = true;

sberweb.core.t_sberweb$core46067.cljs$lang$ctorStr = "sberweb.core/t_sberweb$core46067";

sberweb.core.t_sberweb$core46067.cljs$lang$ctorPrWriter = ((function (validate__37909__auto__,ufv___46073,output_schema46058_46074,input_schema46059_46075,input_checker46060_46076,output_checker46061_46077){
return (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"sberweb.core/t_sberweb$core46067");
});})(validate__37909__auto__,ufv___46073,output_schema46058_46074,input_schema46059_46075,input_checker46060_46076,output_checker46061_46077))
;

sberweb.core.__GT_t_sberweb$core46067 = ((function (validate__37909__auto__,ufv___46073,output_schema46058_46074,input_schema46059_46075,input_checker46060_46076,output_checker46061_46077){
return (function sberweb$core$users_navigation_view_$___GT_t_sberweb$core46067(input_checker46060__$1,owner__$1,data__$1,validate__37909__auto____$1,G__46062__$1,input_schema46059__$1,G__46063__$1,output_schema46058__$1,users_navigation_view__$1,output_checker46061__$1,ufv____$1,meta46068){
return (new sberweb.core.t_sberweb$core46067(input_checker46060__$1,owner__$1,data__$1,validate__37909__auto____$1,G__46062__$1,input_schema46059__$1,G__46063__$1,output_schema46058__$1,users_navigation_view__$1,output_checker46061__$1,ufv____$1,meta46068));
});})(validate__37909__auto__,ufv___46073,output_schema46058_46074,input_schema46059_46075,input_checker46060_46076,output_checker46061_46077))
;

}

return (new sberweb.core.t_sberweb$core46067(input_checker46060_46076,owner,data,validate__37909__auto__,G__46062,input_schema46059_46075,G__46063,output_schema46058_46074,sberweb$core$users_navigation_view,output_checker46061_46077,ufv___46073,null));
break;
}
})();
if(cljs.core.truth_(validate__37909__auto__)){
var temp__4657__auto___46081 = output_checker46061_46077.call(null,o__37912__auto__);
if(cljs.core.truth_(temp__4657__auto___46081)){
var error__37911__auto___46082 = temp__4657__auto___46081;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"users-navigation-view","users-navigation-view",-19184075,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__37911__auto___46082)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema46058_46074,new cljs.core.Keyword(null,"value","value",305978217),o__37912__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37911__auto___46082], null));
} else {
}
} else {
}

return o__37912__auto__;
});})(ufv___46073,output_schema46058_46074,input_schema46059_46075,input_checker46060_46076,output_checker46061_46077))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,sberweb.core.users_navigation_view),schema.core.make_fn_schema.call(null,output_schema46058_46074,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema46059_46075], null)));

sberweb.core.__GT_users_navigation_view = (function sberweb$core$__GT_users_navigation_view(var_args){
var args46070 = [];
var len__25947__auto___46083 = arguments.length;
var i__25948__auto___46084 = (0);
while(true){
if((i__25948__auto___46084 < len__25947__auto___46083)){
args46070.push((arguments[i__25948__auto___46084]));

var G__46085 = (i__25948__auto___46084 + (1));
i__25948__auto___46084 = G__46085;
continue;
} else {
}
break;
}

var G__46072 = args46070.length;
switch (G__46072) {
case 1:
return sberweb.core.__GT_users_navigation_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sberweb.core.__GT_users_navigation_view.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46070.length)].join('')));

}
});

sberweb.core.__GT_users_navigation_view.cljs$core$IFn$_invoke$arity$1 = (function (cursor__41613__auto__){
return om.core.build.call(null,sberweb.core.users_navigation_view,cursor__41613__auto__);
});

sberweb.core.__GT_users_navigation_view.cljs$core$IFn$_invoke$arity$2 = (function (cursor__41613__auto__,m46057){
return om.core.build.call(null,sberweb.core.users_navigation_view,cursor__41613__auto__,m46057);
});

sberweb.core.__GT_users_navigation_view.cljs$lang$maxFixedArity = 2;

sberweb.core.handleChange = (function sberweb$core$handleChange(e){
return cljs.core.swap_BANG_.call(null,sberweb.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,e.nativeEvent.target.id)], null),e.nativeEvent.target.value);
});
sberweb.core.handleCheck = (function sberweb$core$handleCheck(e){
e.stopPropagation();

e.nativeEvent.stopImmediatePropagation();

return cljs.core.swap_BANG_.call(null,sberweb.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,e.nativeEvent.target.id)], null),e.nativeEvent.target.checked);
});
sberweb.core.printMonth = (function sberweb$core$printMonth(){
return window.print();
});

var ufv___46104 = schema.utils.use_fn_validation;
var output_schema46089_46105 = schema.core.Any;
var input_schema46090_46106 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker46091_46107 = schema.core.checker.call(null,input_schema46090_46106);
var output_checker46092_46108 = schema.core.checker.call(null,output_schema46089_46105);
/**
 * Inputs: [data owner]
 */
sberweb.core.positions_navigation_view = ((function (ufv___46104,output_schema46089_46105,input_schema46090_46106,input_checker46091_46107,output_checker46092_46108){
return (function sberweb$core$positions_navigation_view(G__46093,G__46094){
var validate__37909__auto__ = ufv___46104.get_cell();
if(cljs.core.truth_(validate__37909__auto__)){
var args__37910__auto___46109 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__46093,G__46094], null);
var temp__4657__auto___46110 = input_checker46091_46107.call(null,args__37910__auto___46109);
if(cljs.core.truth_(temp__4657__auto___46110)){
var error__37911__auto___46111 = temp__4657__auto___46110;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"positions-navigation-view","positions-navigation-view",1029783951,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__37911__auto___46111)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema46090_46106,new cljs.core.Keyword(null,"value","value",305978217),args__37910__auto___46109,new cljs.core.Keyword(null,"error","error",-978969032),error__37911__auto___46111], null));
} else {
}
} else {
}

var o__37912__auto__ = (function (){var data = G__46093;
var owner = G__46094;
while(true){
if(typeof sberweb.core.t_sberweb$core46098 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
sberweb.core.t_sberweb$core46098 = (function (owner,G__46094,data,input_schema46090,G__46093,validate__37909__auto__,output_checker46092,positions_navigation_view,input_checker46091,ufv__,output_schema46089,meta46099){
this.owner = owner;
this.G__46094 = G__46094;
this.data = data;
this.input_schema46090 = input_schema46090;
this.G__46093 = G__46093;
this.validate__37909__auto__ = validate__37909__auto__;
this.output_checker46092 = output_checker46092;
this.positions_navigation_view = positions_navigation_view;
this.input_checker46091 = input_checker46091;
this.ufv__ = ufv__;
this.output_schema46089 = output_schema46089;
this.meta46099 = meta46099;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
sberweb.core.t_sberweb$core46098.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__37909__auto__,ufv___46104,output_schema46089_46105,input_schema46090_46106,input_checker46091_46107,output_checker46092_46108){
return (function (_46100,meta46099__$1){
var self__ = this;
var _46100__$1 = this;
return (new sberweb.core.t_sberweb$core46098(self__.owner,self__.G__46094,self__.data,self__.input_schema46090,self__.G__46093,self__.validate__37909__auto__,self__.output_checker46092,self__.positions_navigation_view,self__.input_checker46091,self__.ufv__,self__.output_schema46089,meta46099__$1));
});})(validate__37909__auto__,ufv___46104,output_schema46089_46105,input_schema46090_46106,input_checker46091_46107,output_checker46092_46108))
;

sberweb.core.t_sberweb$core46098.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__37909__auto__,ufv___46104,output_schema46089_46105,input_schema46090_46106,input_checker46091_46107,output_checker46092_46108){
return (function (_46100){
var self__ = this;
var _46100__$1 = this;
return self__.meta46099;
});})(validate__37909__auto__,ufv___46104,output_schema46089_46105,input_schema46090_46106,input_checker46091_46107,output_checker46092_46108))
;

sberweb.core.t_sberweb$core46098.prototype.om$core$IDisplayName$ = true;

sberweb.core.t_sberweb$core46098.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__37909__auto__,ufv___46104,output_schema46089_46105,input_schema46090_46106,input_checker46091_46107,output_checker46092_46108){
return (function (_){
var self__ = this;
var ___$1 = this;
return "positions-navigation-view";
});})(validate__37909__auto__,ufv___46104,output_schema46089_46105,input_schema46090_46106,input_checker46091_46107,output_checker46092_46108))
;

sberweb.core.t_sberweb$core46098.prototype.om$core$IRender$ = true;

sberweb.core.t_sberweb$core46098.prototype.om$core$IRender$render$arity$1 = ((function (validate__37909__auto__,ufv___46104,output_schema46089_46105,input_schema46090_46106,input_checker46091_46107,output_checker46092_46108){
return (function (_){
var self__ = this;
var ___$1 = this;
var style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"10px",new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),"0px"], null)], null);
var stylehome = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"10px"], null)], null);
return cljs.core.apply.call(null,React.DOM.nav,{"className": "navbar navbar-default navbar-fixed-top", "role": "navigation"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "navbar-header"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.button,{"type": "button", "className": "navbar-toggle", "data-toggle": "collapse", "data-target": ".navbar-ex1-collapse"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.span({"className": "sr-only"},"Toggle navigation"),React.DOM.span({"className": "icon-bar"}),React.DOM.span({"className": "icon-bar"}),React.DOM.span({"className": "icon-bar"})],null)))),om_tools.dom.element.call(null,React.DOM.a,cljs.core.assoc.call(null,stylehome,new cljs.core.Keyword(null,"className","className",-1983287057),"navbar-brand"),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.span,{"id": "pageTitle"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.data))],null))))],null)))],null)))),cljs.core.apply.call(null,React.DOM.div,{"className": "collapse navbar-collapse navbar-ex1-collapse", "id": "menu"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.ul,{"className": "nav navbar-nav", "style": {"paddingTop": "17px", "visibility": om_tools.dom.format_opts.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.core.app_state)),"Positions"))?"visible":"hidden"))}},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.li,cljs.core.apply.call(null,React.DOM.div,{"style": {"marginRight": "10px", "visibility": om_tools.dom.format_opts.call(null,(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.core.app_state)),"Positions")) && ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"role","role",-736691072).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.core.app_state))),"admin")) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"role","role",-736691072).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.core.app_state))),"admin"))))?"visible":"hidden"))}},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.dom.select.call(null,{"id": "clients", "className": "selectpicker", "data-show-subtext": "true", "data-live-search": "true", "onChange": ((function (style,stylehome,___$1,validate__37909__auto__,ufv___46104,output_schema46089_46105,input_schema46090_46106,input_checker46091_46107,output_checker46092_46108){
return (function (p1__46087_SHARP_){
return sberweb.core.handle_change.call(null,p1__46087_SHARP_,self__.owner);
});})(style,stylehome,___$1,validate__37909__auto__,ufv___46104,output_schema46089_46105,input_schema46090_46106,input_checker46091_46107,output_checker46092_46108))
},sberweb.core.buildClientsList.call(null,self__.data,self__.owner))],null)))),cljs.core.PersistentVector.EMPTY),om_tools.dom.element.call(null,React.DOM.li,cljs.core.apply.call(null,React.DOM.h5,{"style": {"marginLeft": "5px", "marginRight": "5px", "height": "32px", "marginTop": "1px"}},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[" ",om.dom.input.call(null,{"id": "search", "type": "text", "placeholder": "Search", "style": {"height": "32px", "marginTop": "1px"}, "value": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"search","search",1564939822).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sberweb.core.app_state))), "onChange": om_tools.dom.format_opts.call(null,((function (style,stylehome,___$1,validate__37909__auto__,ufv___46104,output_schema46089_46105,input_schema46090_46106,input_checker46091_46107,output_checker46092_46108){
return (function (e){
return sberweb.core.handleChange.call(null,e);
});})(style,stylehome,___$1,validate__37909__auto__,ufv___46104,output_schema46089_46105,input_schema46090_46106,input_checker46091_46107,output_checker46092_46108))
)})],null)))),cljs.core.PersistentVector.EMPTY),om_tools.dom.element.call(null,React.DOM.li,cljs.core.apply.call(null,React.DOM.label,{"style": {"fontWeight": (100), "marginTop": "7px"}},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.dom.input.call(null,{"id": "ismonthly", "type": "checkbox", "defaultChecked": false, "onChange": om_tools.dom.format_opts.call(null,((function (style,stylehome,___$1,validate__37909__auto__,ufv___46104,output_schema46089_46105,input_schema46090_46106,input_checker46091_46107,output_checker46092_46108){
return (function (e){
return sberweb.core.handleCheck.call(null,e);
});})(style,stylehome,___$1,validate__37909__auto__,ufv___46104,output_schema46089_46105,input_schema46090_46106,input_checker46091_46107,output_checker46092_46108))
)}),"Select this month"],null)))),cljs.core.PersistentVector.EMPTY),cljs.core.apply.call(null,React.DOM.li,{"style": {"marginLeft": "5px"}},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_bootstrap.button.button.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"btn btn-info",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (style,stylehome,___$1,validate__37909__auto__,ufv___46104,output_schema46089_46105,input_schema46090_46106,input_checker46091_46107,output_checker46092_46108){
return (function (e){
return sberweb.core.printMonth.call(null);
});})(style,stylehome,___$1,validate__37909__auto__,ufv___46104,output_schema46089_46105,input_schema46090_46106,input_checker46091_46107,output_checker46092_46108))
], null),"Print positions")],null))))],null))))],null))))],null))));
});})(validate__37909__auto__,ufv___46104,output_schema46089_46105,input_schema46090_46106,input_checker46091_46107,output_checker46092_46108))
;

sberweb.core.t_sberweb$core46098.getBasis = ((function (validate__37909__auto__,ufv___46104,output_schema46089_46105,input_schema46090_46106,input_checker46091_46107,output_checker46092_46108){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"owner","owner",1247919588,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__46094","G__46094",-996933819,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"input-schema46090","input-schema46090",-683369432,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__46093","G__46093",-169773783,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"validate__37909__auto__","validate__37909__auto__",-807220660,null),new cljs.core.Symbol(null,"output-checker46092","output-checker46092",1754107597,null),cljs.core.with_meta(new cljs.core.Symbol(null,"positions-navigation-view","positions-navigation-view",1029783951,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))], null))),new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("schema.core","make-fn-schema","schema.core/make-fn-schema",152735578,null),new cljs.core.Symbol(null,"output-schema46089","output-schema46089",1487610494,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"input-schema46090","input-schema46090",-683369432,null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Inputs: [data owner]",new cljs.core.Keyword(null,"raw-arglists","raw-arglists",-1511012109),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"input-checker46091","input-checker46091",465701371,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"output-schema46089","output-schema46089",1487610494,null),new cljs.core.Symbol(null,"meta46099","meta46099",-962235964,null)], null);
});})(validate__37909__auto__,ufv___46104,output_schema46089_46105,input_schema46090_46106,input_checker46091_46107,output_checker46092_46108))
;

sberweb.core.t_sberweb$core46098.cljs$lang$type = true;

sberweb.core.t_sberweb$core46098.cljs$lang$ctorStr = "sberweb.core/t_sberweb$core46098";

sberweb.core.t_sberweb$core46098.cljs$lang$ctorPrWriter = ((function (validate__37909__auto__,ufv___46104,output_schema46089_46105,input_schema46090_46106,input_checker46091_46107,output_checker46092_46108){
return (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"sberweb.core/t_sberweb$core46098");
});})(validate__37909__auto__,ufv___46104,output_schema46089_46105,input_schema46090_46106,input_checker46091_46107,output_checker46092_46108))
;

sberweb.core.__GT_t_sberweb$core46098 = ((function (validate__37909__auto__,ufv___46104,output_schema46089_46105,input_schema46090_46106,input_checker46091_46107,output_checker46092_46108){
return (function sberweb$core$positions_navigation_view_$___GT_t_sberweb$core46098(owner__$1,G__46094__$1,data__$1,input_schema46090__$1,G__46093__$1,validate__37909__auto____$1,output_checker46092__$1,positions_navigation_view__$1,input_checker46091__$1,ufv____$1,output_schema46089__$1,meta46099){
return (new sberweb.core.t_sberweb$core46098(owner__$1,G__46094__$1,data__$1,input_schema46090__$1,G__46093__$1,validate__37909__auto____$1,output_checker46092__$1,positions_navigation_view__$1,input_checker46091__$1,ufv____$1,output_schema46089__$1,meta46099));
});})(validate__37909__auto__,ufv___46104,output_schema46089_46105,input_schema46090_46106,input_checker46091_46107,output_checker46092_46108))
;

}

return (new sberweb.core.t_sberweb$core46098(owner,G__46094,data,input_schema46090_46106,G__46093,validate__37909__auto__,output_checker46092_46108,sberweb$core$positions_navigation_view,input_checker46091_46107,ufv___46104,output_schema46089_46105,null));
break;
}
})();
if(cljs.core.truth_(validate__37909__auto__)){
var temp__4657__auto___46112 = output_checker46092_46108.call(null,o__37912__auto__);
if(cljs.core.truth_(temp__4657__auto___46112)){
var error__37911__auto___46113 = temp__4657__auto___46112;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"positions-navigation-view","positions-navigation-view",1029783951,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__37911__auto___46113)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema46089_46105,new cljs.core.Keyword(null,"value","value",305978217),o__37912__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__37911__auto___46113], null));
} else {
}
} else {
}

return o__37912__auto__;
});})(ufv___46104,output_schema46089_46105,input_schema46090_46106,input_checker46091_46107,output_checker46092_46108))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,sberweb.core.positions_navigation_view),schema.core.make_fn_schema.call(null,output_schema46089_46105,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema46090_46106], null)));

sberweb.core.__GT_positions_navigation_view = (function sberweb$core$__GT_positions_navigation_view(var_args){
var args46101 = [];
var len__25947__auto___46114 = arguments.length;
var i__25948__auto___46115 = (0);
while(true){
if((i__25948__auto___46115 < len__25947__auto___46114)){
args46101.push((arguments[i__25948__auto___46115]));

var G__46116 = (i__25948__auto___46115 + (1));
i__25948__auto___46115 = G__46116;
continue;
} else {
}
break;
}

var G__46103 = args46101.length;
switch (G__46103) {
case 1:
return sberweb.core.__GT_positions_navigation_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sberweb.core.__GT_positions_navigation_view.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46101.length)].join('')));

}
});

sberweb.core.__GT_positions_navigation_view.cljs$core$IFn$_invoke$arity$1 = (function (cursor__41613__auto__){
return om.core.build.call(null,sberweb.core.positions_navigation_view,cursor__41613__auto__);
});

sberweb.core.__GT_positions_navigation_view.cljs$core$IFn$_invoke$arity$2 = (function (cursor__41613__auto__,m46088){
return om.core.build.call(null,sberweb.core.positions_navigation_view,cursor__41613__auto__,m46088);
});

sberweb.core.__GT_positions_navigation_view.cljs$lang$maxFixedArity = 2;

if(typeof sberweb.core.website_view !== 'undefined'){
} else {
sberweb.core.website_view = (function (){var method_table__25797__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25798__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25799__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25800__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25801__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"sberweb.core","website-view"),((function (method_table__25797__auto__,prefer_table__25798__auto__,method_cache__25799__auto__,cached_hierarchy__25800__auto__,hierarchy__25801__auto__){
return (function (data,_){
return new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,data,null))?cljs.core.deref.call(null,sberweb.core.app_state):cljs.core.deref.call(null,data)));
});})(method_table__25797__auto__,prefer_table__25798__auto__,method_cache__25799__auto__,cached_hierarchy__25800__auto__,hierarchy__25801__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25801__auto__,method_table__25797__auto__,prefer_table__25798__auto__,method_cache__25799__auto__,cached_hierarchy__25800__auto__));
})();
}
cljs.core._add_method.call(null,sberweb.core.website_view,(0),(function (data,owner){
return sberweb.core.logout_view.call(null,data,owner);
}));
cljs.core._add_method.call(null,sberweb.core.website_view,(1),(function (data,owner){
return sberweb.core.positions_navigation_view.call(null,data,owner);
}));
cljs.core._add_method.call(null,sberweb.core.website_view,(2),(function (data,owner){
return sberweb.core.users_navigation_view.call(null,data,owner);
}));

//# sourceMappingURL=core.js.map?rel=1486364643054