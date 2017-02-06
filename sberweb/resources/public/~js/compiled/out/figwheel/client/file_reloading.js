// Compiled by ClojureScript 1.9.89 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__24872__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__24872__auto__){
return or__24872__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__24872__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__42498_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__42498_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__42503 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__42504 = null;
var count__42505 = (0);
var i__42506 = (0);
while(true){
if((i__42506 < count__42505)){
var n = cljs.core._nth.call(null,chunk__42504,i__42506);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__42507 = seq__42503;
var G__42508 = chunk__42504;
var G__42509 = count__42505;
var G__42510 = (i__42506 + (1));
seq__42503 = G__42507;
chunk__42504 = G__42508;
count__42505 = G__42509;
i__42506 = G__42510;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__42503);
if(temp__4657__auto__){
var seq__42503__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42503__$1)){
var c__25683__auto__ = cljs.core.chunk_first.call(null,seq__42503__$1);
var G__42511 = cljs.core.chunk_rest.call(null,seq__42503__$1);
var G__42512 = c__25683__auto__;
var G__42513 = cljs.core.count.call(null,c__25683__auto__);
var G__42514 = (0);
seq__42503 = G__42511;
chunk__42504 = G__42512;
count__42505 = G__42513;
i__42506 = G__42514;
continue;
} else {
var n = cljs.core.first.call(null,seq__42503__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__42515 = cljs.core.next.call(null,seq__42503__$1);
var G__42516 = null;
var G__42517 = (0);
var G__42518 = (0);
seq__42503 = G__42515;
chunk__42504 = G__42516;
count__42505 = G__42517;
i__42506 = G__42518;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__42569_42580 = cljs.core.seq.call(null,deps);
var chunk__42570_42581 = null;
var count__42571_42582 = (0);
var i__42572_42583 = (0);
while(true){
if((i__42572_42583 < count__42571_42582)){
var dep_42584 = cljs.core._nth.call(null,chunk__42570_42581,i__42572_42583);
topo_sort_helper_STAR_.call(null,dep_42584,(depth + (1)),state);

var G__42585 = seq__42569_42580;
var G__42586 = chunk__42570_42581;
var G__42587 = count__42571_42582;
var G__42588 = (i__42572_42583 + (1));
seq__42569_42580 = G__42585;
chunk__42570_42581 = G__42586;
count__42571_42582 = G__42587;
i__42572_42583 = G__42588;
continue;
} else {
var temp__4657__auto___42589 = cljs.core.seq.call(null,seq__42569_42580);
if(temp__4657__auto___42589){
var seq__42569_42590__$1 = temp__4657__auto___42589;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42569_42590__$1)){
var c__25683__auto___42591 = cljs.core.chunk_first.call(null,seq__42569_42590__$1);
var G__42592 = cljs.core.chunk_rest.call(null,seq__42569_42590__$1);
var G__42593 = c__25683__auto___42591;
var G__42594 = cljs.core.count.call(null,c__25683__auto___42591);
var G__42595 = (0);
seq__42569_42580 = G__42592;
chunk__42570_42581 = G__42593;
count__42571_42582 = G__42594;
i__42572_42583 = G__42595;
continue;
} else {
var dep_42596 = cljs.core.first.call(null,seq__42569_42590__$1);
topo_sort_helper_STAR_.call(null,dep_42596,(depth + (1)),state);

var G__42597 = cljs.core.next.call(null,seq__42569_42590__$1);
var G__42598 = null;
var G__42599 = (0);
var G__42600 = (0);
seq__42569_42580 = G__42597;
chunk__42570_42581 = G__42598;
count__42571_42582 = G__42599;
i__42572_42583 = G__42600;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__42573){
var vec__42577 = p__42573;
var seq__42578 = cljs.core.seq.call(null,vec__42577);
var first__42579 = cljs.core.first.call(null,seq__42578);
var seq__42578__$1 = cljs.core.next.call(null,seq__42578);
var x = first__42579;
var xs = seq__42578__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__42577,seq__42578,first__42579,seq__42578__$1,x,xs,get_deps__$1){
return (function (p1__42519_SHARP_){
return clojure.set.difference.call(null,p1__42519_SHARP_,x);
});})(vec__42577,seq__42578,first__42579,seq__42578__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__42613 = cljs.core.seq.call(null,provides);
var chunk__42614 = null;
var count__42615 = (0);
var i__42616 = (0);
while(true){
if((i__42616 < count__42615)){
var prov = cljs.core._nth.call(null,chunk__42614,i__42616);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__42617_42625 = cljs.core.seq.call(null,requires);
var chunk__42618_42626 = null;
var count__42619_42627 = (0);
var i__42620_42628 = (0);
while(true){
if((i__42620_42628 < count__42619_42627)){
var req_42629 = cljs.core._nth.call(null,chunk__42618_42626,i__42620_42628);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_42629,prov);

var G__42630 = seq__42617_42625;
var G__42631 = chunk__42618_42626;
var G__42632 = count__42619_42627;
var G__42633 = (i__42620_42628 + (1));
seq__42617_42625 = G__42630;
chunk__42618_42626 = G__42631;
count__42619_42627 = G__42632;
i__42620_42628 = G__42633;
continue;
} else {
var temp__4657__auto___42634 = cljs.core.seq.call(null,seq__42617_42625);
if(temp__4657__auto___42634){
var seq__42617_42635__$1 = temp__4657__auto___42634;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42617_42635__$1)){
var c__25683__auto___42636 = cljs.core.chunk_first.call(null,seq__42617_42635__$1);
var G__42637 = cljs.core.chunk_rest.call(null,seq__42617_42635__$1);
var G__42638 = c__25683__auto___42636;
var G__42639 = cljs.core.count.call(null,c__25683__auto___42636);
var G__42640 = (0);
seq__42617_42625 = G__42637;
chunk__42618_42626 = G__42638;
count__42619_42627 = G__42639;
i__42620_42628 = G__42640;
continue;
} else {
var req_42641 = cljs.core.first.call(null,seq__42617_42635__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_42641,prov);

var G__42642 = cljs.core.next.call(null,seq__42617_42635__$1);
var G__42643 = null;
var G__42644 = (0);
var G__42645 = (0);
seq__42617_42625 = G__42642;
chunk__42618_42626 = G__42643;
count__42619_42627 = G__42644;
i__42620_42628 = G__42645;
continue;
}
} else {
}
}
break;
}

var G__42646 = seq__42613;
var G__42647 = chunk__42614;
var G__42648 = count__42615;
var G__42649 = (i__42616 + (1));
seq__42613 = G__42646;
chunk__42614 = G__42647;
count__42615 = G__42648;
i__42616 = G__42649;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__42613);
if(temp__4657__auto__){
var seq__42613__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42613__$1)){
var c__25683__auto__ = cljs.core.chunk_first.call(null,seq__42613__$1);
var G__42650 = cljs.core.chunk_rest.call(null,seq__42613__$1);
var G__42651 = c__25683__auto__;
var G__42652 = cljs.core.count.call(null,c__25683__auto__);
var G__42653 = (0);
seq__42613 = G__42650;
chunk__42614 = G__42651;
count__42615 = G__42652;
i__42616 = G__42653;
continue;
} else {
var prov = cljs.core.first.call(null,seq__42613__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__42621_42654 = cljs.core.seq.call(null,requires);
var chunk__42622_42655 = null;
var count__42623_42656 = (0);
var i__42624_42657 = (0);
while(true){
if((i__42624_42657 < count__42623_42656)){
var req_42658 = cljs.core._nth.call(null,chunk__42622_42655,i__42624_42657);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_42658,prov);

var G__42659 = seq__42621_42654;
var G__42660 = chunk__42622_42655;
var G__42661 = count__42623_42656;
var G__42662 = (i__42624_42657 + (1));
seq__42621_42654 = G__42659;
chunk__42622_42655 = G__42660;
count__42623_42656 = G__42661;
i__42624_42657 = G__42662;
continue;
} else {
var temp__4657__auto___42663__$1 = cljs.core.seq.call(null,seq__42621_42654);
if(temp__4657__auto___42663__$1){
var seq__42621_42664__$1 = temp__4657__auto___42663__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42621_42664__$1)){
var c__25683__auto___42665 = cljs.core.chunk_first.call(null,seq__42621_42664__$1);
var G__42666 = cljs.core.chunk_rest.call(null,seq__42621_42664__$1);
var G__42667 = c__25683__auto___42665;
var G__42668 = cljs.core.count.call(null,c__25683__auto___42665);
var G__42669 = (0);
seq__42621_42654 = G__42666;
chunk__42622_42655 = G__42667;
count__42623_42656 = G__42668;
i__42624_42657 = G__42669;
continue;
} else {
var req_42670 = cljs.core.first.call(null,seq__42621_42664__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_42670,prov);

var G__42671 = cljs.core.next.call(null,seq__42621_42664__$1);
var G__42672 = null;
var G__42673 = (0);
var G__42674 = (0);
seq__42621_42654 = G__42671;
chunk__42622_42655 = G__42672;
count__42623_42656 = G__42673;
i__42624_42657 = G__42674;
continue;
}
} else {
}
}
break;
}

var G__42675 = cljs.core.next.call(null,seq__42613__$1);
var G__42676 = null;
var G__42677 = (0);
var G__42678 = (0);
seq__42613 = G__42675;
chunk__42614 = G__42676;
count__42615 = G__42677;
i__42616 = G__42678;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__42683_42687 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__42684_42688 = null;
var count__42685_42689 = (0);
var i__42686_42690 = (0);
while(true){
if((i__42686_42690 < count__42685_42689)){
var ns_42691 = cljs.core._nth.call(null,chunk__42684_42688,i__42686_42690);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_42691);

var G__42692 = seq__42683_42687;
var G__42693 = chunk__42684_42688;
var G__42694 = count__42685_42689;
var G__42695 = (i__42686_42690 + (1));
seq__42683_42687 = G__42692;
chunk__42684_42688 = G__42693;
count__42685_42689 = G__42694;
i__42686_42690 = G__42695;
continue;
} else {
var temp__4657__auto___42696 = cljs.core.seq.call(null,seq__42683_42687);
if(temp__4657__auto___42696){
var seq__42683_42697__$1 = temp__4657__auto___42696;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42683_42697__$1)){
var c__25683__auto___42698 = cljs.core.chunk_first.call(null,seq__42683_42697__$1);
var G__42699 = cljs.core.chunk_rest.call(null,seq__42683_42697__$1);
var G__42700 = c__25683__auto___42698;
var G__42701 = cljs.core.count.call(null,c__25683__auto___42698);
var G__42702 = (0);
seq__42683_42687 = G__42699;
chunk__42684_42688 = G__42700;
count__42685_42689 = G__42701;
i__42686_42690 = G__42702;
continue;
} else {
var ns_42703 = cljs.core.first.call(null,seq__42683_42697__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_42703);

var G__42704 = cljs.core.next.call(null,seq__42683_42697__$1);
var G__42705 = null;
var G__42706 = (0);
var G__42707 = (0);
seq__42683_42687 = G__42704;
chunk__42684_42688 = G__42705;
count__42685_42689 = G__42706;
i__42686_42690 = G__42707;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__24872__auto__ = goog.require__;
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__42708__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__42708 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42709__i = 0, G__42709__a = new Array(arguments.length -  0);
while (G__42709__i < G__42709__a.length) {G__42709__a[G__42709__i] = arguments[G__42709__i + 0]; ++G__42709__i;}
  args = new cljs.core.IndexedSeq(G__42709__a,0);
} 
return G__42708__delegate.call(this,args);};
G__42708.cljs$lang$maxFixedArity = 0;
G__42708.cljs$lang$applyTo = (function (arglist__42710){
var args = cljs.core.seq(arglist__42710);
return G__42708__delegate(args);
});
G__42708.cljs$core$IFn$_invoke$arity$variadic = G__42708__delegate;
return G__42708;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__42712 = cljs.core._EQ_;
var expr__42713 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__42712.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__42713))){
var path_parts = ((function (pred__42712,expr__42713){
return (function (p1__42711_SHARP_){
return clojure.string.split.call(null,p1__42711_SHARP_,/[\/\\]/);
});})(pred__42712,expr__42713))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__42712,expr__42713){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e42715){if((e42715 instanceof Error)){
var e = e42715;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e42715;

}
}})());
});
;})(path_parts,sep,root,pred__42712,expr__42713))
} else {
if(cljs.core.truth_(pred__42712.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__42713))){
return ((function (pred__42712,expr__42713){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__42712,expr__42713){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__42712,expr__42713))
);

return deferred.addErrback(((function (deferred,pred__42712,expr__42713){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__42712,expr__42713))
);
});
;})(pred__42712,expr__42713))
} else {
return ((function (pred__42712,expr__42713){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__42712,expr__42713))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__42716,callback){
var map__42719 = p__42716;
var map__42719__$1 = ((((!((map__42719 == null)))?((((map__42719.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42719.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42719):map__42719);
var file_msg = map__42719__$1;
var request_url = cljs.core.get.call(null,map__42719__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__42719,map__42719__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__42719,map__42719__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__36937__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36937__auto__){
return (function (){
var f__36938__auto__ = (function (){var switch__36825__auto__ = ((function (c__36937__auto__){
return (function (state_42743){
var state_val_42744 = (state_42743[(1)]);
if((state_val_42744 === (7))){
var inst_42739 = (state_42743[(2)]);
var state_42743__$1 = state_42743;
var statearr_42745_42765 = state_42743__$1;
(statearr_42745_42765[(2)] = inst_42739);

(statearr_42745_42765[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42744 === (1))){
var state_42743__$1 = state_42743;
var statearr_42746_42766 = state_42743__$1;
(statearr_42746_42766[(2)] = null);

(statearr_42746_42766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42744 === (4))){
var inst_42723 = (state_42743[(7)]);
var inst_42723__$1 = (state_42743[(2)]);
var state_42743__$1 = (function (){var statearr_42747 = state_42743;
(statearr_42747[(7)] = inst_42723__$1);

return statearr_42747;
})();
if(cljs.core.truth_(inst_42723__$1)){
var statearr_42748_42767 = state_42743__$1;
(statearr_42748_42767[(1)] = (5));

} else {
var statearr_42749_42768 = state_42743__$1;
(statearr_42749_42768[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42744 === (6))){
var state_42743__$1 = state_42743;
var statearr_42750_42769 = state_42743__$1;
(statearr_42750_42769[(2)] = null);

(statearr_42750_42769[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42744 === (3))){
var inst_42741 = (state_42743[(2)]);
var state_42743__$1 = state_42743;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42743__$1,inst_42741);
} else {
if((state_val_42744 === (2))){
var state_42743__$1 = state_42743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42743__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_42744 === (11))){
var inst_42735 = (state_42743[(2)]);
var state_42743__$1 = (function (){var statearr_42751 = state_42743;
(statearr_42751[(8)] = inst_42735);

return statearr_42751;
})();
var statearr_42752_42770 = state_42743__$1;
(statearr_42752_42770[(2)] = null);

(statearr_42752_42770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42744 === (9))){
var inst_42729 = (state_42743[(9)]);
var inst_42727 = (state_42743[(10)]);
var inst_42731 = inst_42729.call(null,inst_42727);
var state_42743__$1 = state_42743;
var statearr_42753_42771 = state_42743__$1;
(statearr_42753_42771[(2)] = inst_42731);

(statearr_42753_42771[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42744 === (5))){
var inst_42723 = (state_42743[(7)]);
var inst_42725 = figwheel.client.file_reloading.blocking_load.call(null,inst_42723);
var state_42743__$1 = state_42743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42743__$1,(8),inst_42725);
} else {
if((state_val_42744 === (10))){
var inst_42727 = (state_42743[(10)]);
var inst_42733 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_42727);
var state_42743__$1 = state_42743;
var statearr_42754_42772 = state_42743__$1;
(statearr_42754_42772[(2)] = inst_42733);

(statearr_42754_42772[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42744 === (8))){
var inst_42723 = (state_42743[(7)]);
var inst_42729 = (state_42743[(9)]);
var inst_42727 = (state_42743[(2)]);
var inst_42728 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_42729__$1 = cljs.core.get.call(null,inst_42728,inst_42723);
var state_42743__$1 = (function (){var statearr_42755 = state_42743;
(statearr_42755[(9)] = inst_42729__$1);

(statearr_42755[(10)] = inst_42727);

return statearr_42755;
})();
if(cljs.core.truth_(inst_42729__$1)){
var statearr_42756_42773 = state_42743__$1;
(statearr_42756_42773[(1)] = (9));

} else {
var statearr_42757_42774 = state_42743__$1;
(statearr_42757_42774[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__36937__auto__))
;
return ((function (switch__36825__auto__,c__36937__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__36826__auto__ = null;
var figwheel$client$file_reloading$state_machine__36826__auto____0 = (function (){
var statearr_42761 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42761[(0)] = figwheel$client$file_reloading$state_machine__36826__auto__);

(statearr_42761[(1)] = (1));

return statearr_42761;
});
var figwheel$client$file_reloading$state_machine__36826__auto____1 = (function (state_42743){
while(true){
var ret_value__36827__auto__ = (function (){try{while(true){
var result__36828__auto__ = switch__36825__auto__.call(null,state_42743);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36828__auto__;
}
break;
}
}catch (e42762){if((e42762 instanceof Object)){
var ex__36829__auto__ = e42762;
var statearr_42763_42775 = state_42743;
(statearr_42763_42775[(5)] = ex__36829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42762;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42776 = state_42743;
state_42743 = G__42776;
continue;
} else {
return ret_value__36827__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__36826__auto__ = function(state_42743){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__36826__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__36826__auto____1.call(this,state_42743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__36826__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__36826__auto____0;
figwheel$client$file_reloading$state_machine__36826__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__36826__auto____1;
return figwheel$client$file_reloading$state_machine__36826__auto__;
})()
;})(switch__36825__auto__,c__36937__auto__))
})();
var state__36939__auto__ = (function (){var statearr_42764 = f__36938__auto__.call(null);
(statearr_42764[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36937__auto__);

return statearr_42764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36939__auto__);
});})(c__36937__auto__))
);

return c__36937__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__42777,callback){
var map__42780 = p__42777;
var map__42780__$1 = ((((!((map__42780 == null)))?((((map__42780.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42780.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42780):map__42780);
var file_msg = map__42780__$1;
var namespace = cljs.core.get.call(null,map__42780__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__42780,map__42780__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__42780,map__42780__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__42782){
var map__42785 = p__42782;
var map__42785__$1 = ((((!((map__42785 == null)))?((((map__42785.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42785.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42785):map__42785);
var file_msg = map__42785__$1;
var namespace = cljs.core.get.call(null,map__42785__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__24860__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__24860__auto__){
var or__24872__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
var or__24872__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24872__auto____$1)){
return or__24872__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__24860__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__42787,callback){
var map__42790 = p__42787;
var map__42790__$1 = ((((!((map__42790 == null)))?((((map__42790.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42790.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42790):map__42790);
var file_msg = map__42790__$1;
var request_url = cljs.core.get.call(null,map__42790__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__42790__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__36937__auto___42894 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36937__auto___42894,out){
return (function (){
var f__36938__auto__ = (function (){var switch__36825__auto__ = ((function (c__36937__auto___42894,out){
return (function (state_42876){
var state_val_42877 = (state_42876[(1)]);
if((state_val_42877 === (1))){
var inst_42850 = cljs.core.seq.call(null,files);
var inst_42851 = cljs.core.first.call(null,inst_42850);
var inst_42852 = cljs.core.next.call(null,inst_42850);
var inst_42853 = files;
var state_42876__$1 = (function (){var statearr_42878 = state_42876;
(statearr_42878[(7)] = inst_42851);

(statearr_42878[(8)] = inst_42853);

(statearr_42878[(9)] = inst_42852);

return statearr_42878;
})();
var statearr_42879_42895 = state_42876__$1;
(statearr_42879_42895[(2)] = null);

(statearr_42879_42895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42877 === (2))){
var inst_42859 = (state_42876[(10)]);
var inst_42853 = (state_42876[(8)]);
var inst_42858 = cljs.core.seq.call(null,inst_42853);
var inst_42859__$1 = cljs.core.first.call(null,inst_42858);
var inst_42860 = cljs.core.next.call(null,inst_42858);
var inst_42861 = (inst_42859__$1 == null);
var inst_42862 = cljs.core.not.call(null,inst_42861);
var state_42876__$1 = (function (){var statearr_42880 = state_42876;
(statearr_42880[(11)] = inst_42860);

(statearr_42880[(10)] = inst_42859__$1);

return statearr_42880;
})();
if(inst_42862){
var statearr_42881_42896 = state_42876__$1;
(statearr_42881_42896[(1)] = (4));

} else {
var statearr_42882_42897 = state_42876__$1;
(statearr_42882_42897[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42877 === (3))){
var inst_42874 = (state_42876[(2)]);
var state_42876__$1 = state_42876;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42876__$1,inst_42874);
} else {
if((state_val_42877 === (4))){
var inst_42859 = (state_42876[(10)]);
var inst_42864 = figwheel.client.file_reloading.reload_js_file.call(null,inst_42859);
var state_42876__$1 = state_42876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42876__$1,(7),inst_42864);
} else {
if((state_val_42877 === (5))){
var inst_42870 = cljs.core.async.close_BANG_.call(null,out);
var state_42876__$1 = state_42876;
var statearr_42883_42898 = state_42876__$1;
(statearr_42883_42898[(2)] = inst_42870);

(statearr_42883_42898[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42877 === (6))){
var inst_42872 = (state_42876[(2)]);
var state_42876__$1 = state_42876;
var statearr_42884_42899 = state_42876__$1;
(statearr_42884_42899[(2)] = inst_42872);

(statearr_42884_42899[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42877 === (7))){
var inst_42860 = (state_42876[(11)]);
var inst_42866 = (state_42876[(2)]);
var inst_42867 = cljs.core.async.put_BANG_.call(null,out,inst_42866);
var inst_42853 = inst_42860;
var state_42876__$1 = (function (){var statearr_42885 = state_42876;
(statearr_42885[(8)] = inst_42853);

(statearr_42885[(12)] = inst_42867);

return statearr_42885;
})();
var statearr_42886_42900 = state_42876__$1;
(statearr_42886_42900[(2)] = null);

(statearr_42886_42900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__36937__auto___42894,out))
;
return ((function (switch__36825__auto__,c__36937__auto___42894,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__36826__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__36826__auto____0 = (function (){
var statearr_42890 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42890[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__36826__auto__);

(statearr_42890[(1)] = (1));

return statearr_42890;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__36826__auto____1 = (function (state_42876){
while(true){
var ret_value__36827__auto__ = (function (){try{while(true){
var result__36828__auto__ = switch__36825__auto__.call(null,state_42876);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36828__auto__;
}
break;
}
}catch (e42891){if((e42891 instanceof Object)){
var ex__36829__auto__ = e42891;
var statearr_42892_42901 = state_42876;
(statearr_42892_42901[(5)] = ex__36829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42876);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42891;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42902 = state_42876;
state_42876 = G__42902;
continue;
} else {
return ret_value__36827__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__36826__auto__ = function(state_42876){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__36826__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__36826__auto____1.call(this,state_42876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__36826__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__36826__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__36826__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__36826__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__36826__auto__;
})()
;})(switch__36825__auto__,c__36937__auto___42894,out))
})();
var state__36939__auto__ = (function (){var statearr_42893 = f__36938__auto__.call(null);
(statearr_42893[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36937__auto___42894);

return statearr_42893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36939__auto__);
});})(c__36937__auto___42894,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__42903,opts){
var map__42907 = p__42903;
var map__42907__$1 = ((((!((map__42907 == null)))?((((map__42907.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42907.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42907):map__42907);
var eval_body__$1 = cljs.core.get.call(null,map__42907__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__42907__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__24860__auto__ = eval_body__$1;
if(cljs.core.truth_(and__24860__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__24860__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e42909){var e = e42909;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__42910_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__42910_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__42919){
var vec__42920 = p__42919;
var k = cljs.core.nth.call(null,vec__42920,(0),null);
var v = cljs.core.nth.call(null,vec__42920,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__42923){
var vec__42924 = p__42923;
var k = cljs.core.nth.call(null,vec__42924,(0),null);
var v = cljs.core.nth.call(null,vec__42924,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__42930,p__42931){
var map__43178 = p__42930;
var map__43178__$1 = ((((!((map__43178 == null)))?((((map__43178.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43178.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43178):map__43178);
var opts = map__43178__$1;
var before_jsload = cljs.core.get.call(null,map__43178__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__43178__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__43178__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__43179 = p__42931;
var map__43179__$1 = ((((!((map__43179 == null)))?((((map__43179.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43179.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43179):map__43179);
var msg = map__43179__$1;
var files = cljs.core.get.call(null,map__43179__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__43179__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__43179__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__36937__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36937__auto__,map__43178,map__43178__$1,opts,before_jsload,on_jsload,reload_dependents,map__43179,map__43179__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__36938__auto__ = (function (){var switch__36825__auto__ = ((function (c__36937__auto__,map__43178,map__43178__$1,opts,before_jsload,on_jsload,reload_dependents,map__43179,map__43179__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_43332){
var state_val_43333 = (state_43332[(1)]);
if((state_val_43333 === (7))){
var inst_43194 = (state_43332[(7)]);
var inst_43193 = (state_43332[(8)]);
var inst_43195 = (state_43332[(9)]);
var inst_43196 = (state_43332[(10)]);
var inst_43201 = cljs.core._nth.call(null,inst_43194,inst_43196);
var inst_43202 = figwheel.client.file_reloading.eval_body.call(null,inst_43201,opts);
var inst_43203 = (inst_43196 + (1));
var tmp43334 = inst_43194;
var tmp43335 = inst_43193;
var tmp43336 = inst_43195;
var inst_43193__$1 = tmp43335;
var inst_43194__$1 = tmp43334;
var inst_43195__$1 = tmp43336;
var inst_43196__$1 = inst_43203;
var state_43332__$1 = (function (){var statearr_43337 = state_43332;
(statearr_43337[(7)] = inst_43194__$1);

(statearr_43337[(8)] = inst_43193__$1);

(statearr_43337[(9)] = inst_43195__$1);

(statearr_43337[(11)] = inst_43202);

(statearr_43337[(10)] = inst_43196__$1);

return statearr_43337;
})();
var statearr_43338_43424 = state_43332__$1;
(statearr_43338_43424[(2)] = null);

(statearr_43338_43424[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43333 === (20))){
var inst_43236 = (state_43332[(12)]);
var inst_43244 = figwheel.client.file_reloading.sort_files.call(null,inst_43236);
var state_43332__$1 = state_43332;
var statearr_43339_43425 = state_43332__$1;
(statearr_43339_43425[(2)] = inst_43244);

(statearr_43339_43425[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43333 === (27))){
var state_43332__$1 = state_43332;
var statearr_43340_43426 = state_43332__$1;
(statearr_43340_43426[(2)] = null);

(statearr_43340_43426[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43333 === (1))){
var inst_43185 = (state_43332[(13)]);
var inst_43182 = before_jsload.call(null,files);
var inst_43183 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_43184 = (function (){return ((function (inst_43185,inst_43182,inst_43183,state_val_43333,c__36937__auto__,map__43178,map__43178__$1,opts,before_jsload,on_jsload,reload_dependents,map__43179,map__43179__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__42927_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__42927_SHARP_);
});
;})(inst_43185,inst_43182,inst_43183,state_val_43333,c__36937__auto__,map__43178,map__43178__$1,opts,before_jsload,on_jsload,reload_dependents,map__43179,map__43179__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43185__$1 = cljs.core.filter.call(null,inst_43184,files);
var inst_43186 = cljs.core.not_empty.call(null,inst_43185__$1);
var state_43332__$1 = (function (){var statearr_43341 = state_43332;
(statearr_43341[(14)] = inst_43182);

(statearr_43341[(15)] = inst_43183);

(statearr_43341[(13)] = inst_43185__$1);

return statearr_43341;
})();
if(cljs.core.truth_(inst_43186)){
var statearr_43342_43427 = state_43332__$1;
(statearr_43342_43427[(1)] = (2));

} else {
var statearr_43343_43428 = state_43332__$1;
(statearr_43343_43428[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43333 === (24))){
var state_43332__$1 = state_43332;
var statearr_43344_43429 = state_43332__$1;
(statearr_43344_43429[(2)] = null);

(statearr_43344_43429[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43333 === (39))){
var inst_43286 = (state_43332[(16)]);
var state_43332__$1 = state_43332;
var statearr_43345_43430 = state_43332__$1;
(statearr_43345_43430[(2)] = inst_43286);

(statearr_43345_43430[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43333 === (46))){
var inst_43327 = (state_43332[(2)]);
var state_43332__$1 = state_43332;
var statearr_43346_43431 = state_43332__$1;
(statearr_43346_43431[(2)] = inst_43327);

(statearr_43346_43431[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43333 === (4))){
var inst_43230 = (state_43332[(2)]);
var inst_43231 = cljs.core.List.EMPTY;
var inst_43232 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_43231);
var inst_43233 = (function (){return ((function (inst_43230,inst_43231,inst_43232,state_val_43333,c__36937__auto__,map__43178,map__43178__$1,opts,before_jsload,on_jsload,reload_dependents,map__43179,map__43179__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__42928_SHARP_){
var and__24860__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__42928_SHARP_);
if(cljs.core.truth_(and__24860__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__42928_SHARP_));
} else {
return and__24860__auto__;
}
});
;})(inst_43230,inst_43231,inst_43232,state_val_43333,c__36937__auto__,map__43178,map__43178__$1,opts,before_jsload,on_jsload,reload_dependents,map__43179,map__43179__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43234 = cljs.core.filter.call(null,inst_43233,files);
var inst_43235 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_43236 = cljs.core.concat.call(null,inst_43234,inst_43235);
var state_43332__$1 = (function (){var statearr_43347 = state_43332;
(statearr_43347[(17)] = inst_43232);

(statearr_43347[(12)] = inst_43236);

(statearr_43347[(18)] = inst_43230);

return statearr_43347;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_43348_43432 = state_43332__$1;
(statearr_43348_43432[(1)] = (16));

} else {
var statearr_43349_43433 = state_43332__$1;
(statearr_43349_43433[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43333 === (15))){
var inst_43220 = (state_43332[(2)]);
var state_43332__$1 = state_43332;
var statearr_43350_43434 = state_43332__$1;
(statearr_43350_43434[(2)] = inst_43220);

(statearr_43350_43434[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43333 === (21))){
var inst_43246 = (state_43332[(19)]);
var inst_43246__$1 = (state_43332[(2)]);
var inst_43247 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_43246__$1);
var state_43332__$1 = (function (){var statearr_43351 = state_43332;
(statearr_43351[(19)] = inst_43246__$1);

return statearr_43351;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43332__$1,(22),inst_43247);
} else {
if((state_val_43333 === (31))){
var inst_43330 = (state_43332[(2)]);
var state_43332__$1 = state_43332;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43332__$1,inst_43330);
} else {
if((state_val_43333 === (32))){
var inst_43286 = (state_43332[(16)]);
var inst_43291 = inst_43286.cljs$lang$protocol_mask$partition0$;
var inst_43292 = (inst_43291 & (64));
var inst_43293 = inst_43286.cljs$core$ISeq$;
var inst_43294 = (inst_43292) || (inst_43293);
var state_43332__$1 = state_43332;
if(cljs.core.truth_(inst_43294)){
var statearr_43352_43435 = state_43332__$1;
(statearr_43352_43435[(1)] = (35));

} else {
var statearr_43353_43436 = state_43332__$1;
(statearr_43353_43436[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43333 === (40))){
var inst_43307 = (state_43332[(20)]);
var inst_43306 = (state_43332[(2)]);
var inst_43307__$1 = cljs.core.get.call(null,inst_43306,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_43308 = cljs.core.get.call(null,inst_43306,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_43309 = cljs.core.not_empty.call(null,inst_43307__$1);
var state_43332__$1 = (function (){var statearr_43354 = state_43332;
(statearr_43354[(21)] = inst_43308);

(statearr_43354[(20)] = inst_43307__$1);

return statearr_43354;
})();
if(cljs.core.truth_(inst_43309)){
var statearr_43355_43437 = state_43332__$1;
(statearr_43355_43437[(1)] = (41));

} else {
var statearr_43356_43438 = state_43332__$1;
(statearr_43356_43438[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43333 === (33))){
var state_43332__$1 = state_43332;
var statearr_43357_43439 = state_43332__$1;
(statearr_43357_43439[(2)] = false);

(statearr_43357_43439[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43333 === (13))){
var inst_43206 = (state_43332[(22)]);
var inst_43210 = cljs.core.chunk_first.call(null,inst_43206);
var inst_43211 = cljs.core.chunk_rest.call(null,inst_43206);
var inst_43212 = cljs.core.count.call(null,inst_43210);
var inst_43193 = inst_43211;
var inst_43194 = inst_43210;
var inst_43195 = inst_43212;
var inst_43196 = (0);
var state_43332__$1 = (function (){var statearr_43358 = state_43332;
(statearr_43358[(7)] = inst_43194);

(statearr_43358[(8)] = inst_43193);

(statearr_43358[(9)] = inst_43195);

(statearr_43358[(10)] = inst_43196);

return statearr_43358;
})();
var statearr_43359_43440 = state_43332__$1;
(statearr_43359_43440[(2)] = null);

(statearr_43359_43440[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43333 === (22))){
var inst_43249 = (state_43332[(23)]);
var inst_43254 = (state_43332[(24)]);
var inst_43246 = (state_43332[(19)]);
var inst_43250 = (state_43332[(25)]);
var inst_43249__$1 = (state_43332[(2)]);
var inst_43250__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_43249__$1);
var inst_43251 = (function (){var all_files = inst_43246;
var res_SINGLEQUOTE_ = inst_43249__$1;
var res = inst_43250__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_43249,inst_43254,inst_43246,inst_43250,inst_43249__$1,inst_43250__$1,state_val_43333,c__36937__auto__,map__43178,map__43178__$1,opts,before_jsload,on_jsload,reload_dependents,map__43179,map__43179__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__42929_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__42929_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_43249,inst_43254,inst_43246,inst_43250,inst_43249__$1,inst_43250__$1,state_val_43333,c__36937__auto__,map__43178,map__43178__$1,opts,before_jsload,on_jsload,reload_dependents,map__43179,map__43179__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43252 = cljs.core.filter.call(null,inst_43251,inst_43249__$1);
var inst_43253 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_43254__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_43253);
var inst_43255 = cljs.core.not_empty.call(null,inst_43254__$1);
var state_43332__$1 = (function (){var statearr_43360 = state_43332;
(statearr_43360[(23)] = inst_43249__$1);

(statearr_43360[(24)] = inst_43254__$1);

(statearr_43360[(25)] = inst_43250__$1);

(statearr_43360[(26)] = inst_43252);

return statearr_43360;
})();
if(cljs.core.truth_(inst_43255)){
var statearr_43361_43441 = state_43332__$1;
(statearr_43361_43441[(1)] = (23));

} else {
var statearr_43362_43442 = state_43332__$1;
(statearr_43362_43442[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43333 === (36))){
var state_43332__$1 = state_43332;
var statearr_43363_43443 = state_43332__$1;
(statearr_43363_43443[(2)] = false);

(statearr_43363_43443[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43333 === (41))){
var inst_43307 = (state_43332[(20)]);
var inst_43311 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_43312 = cljs.core.map.call(null,inst_43311,inst_43307);
var inst_43313 = cljs.core.pr_str.call(null,inst_43312);
var inst_43314 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_43313)].join('');
var inst_43315 = figwheel.client.utils.log.call(null,inst_43314);
var state_43332__$1 = state_43332;
var statearr_43364_43444 = state_43332__$1;
(statearr_43364_43444[(2)] = inst_43315);

(statearr_43364_43444[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43333 === (43))){
var inst_43308 = (state_43332[(21)]);
var inst_43318 = (state_43332[(2)]);
var inst_43319 = cljs.core.not_empty.call(null,inst_43308);
var state_43332__$1 = (function (){var statearr_43365 = state_43332;
(statearr_43365[(27)] = inst_43318);

return statearr_43365;
})();
if(cljs.core.truth_(inst_43319)){
var statearr_43366_43445 = state_43332__$1;
(statearr_43366_43445[(1)] = (44));

} else {
var statearr_43367_43446 = state_43332__$1;
(statearr_43367_43446[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43333 === (29))){
var inst_43249 = (state_43332[(23)]);
var inst_43254 = (state_43332[(24)]);
var inst_43246 = (state_43332[(19)]);
var inst_43250 = (state_43332[(25)]);
var inst_43286 = (state_43332[(16)]);
var inst_43252 = (state_43332[(26)]);
var inst_43282 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_43285 = (function (){var all_files = inst_43246;
var res_SINGLEQUOTE_ = inst_43249;
var res = inst_43250;
var files_not_loaded = inst_43252;
var dependencies_that_loaded = inst_43254;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43249,inst_43254,inst_43246,inst_43250,inst_43286,inst_43252,inst_43282,state_val_43333,c__36937__auto__,map__43178,map__43178__$1,opts,before_jsload,on_jsload,reload_dependents,map__43179,map__43179__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__43284){
var map__43368 = p__43284;
var map__43368__$1 = ((((!((map__43368 == null)))?((((map__43368.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43368.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43368):map__43368);
var namespace = cljs.core.get.call(null,map__43368__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43249,inst_43254,inst_43246,inst_43250,inst_43286,inst_43252,inst_43282,state_val_43333,c__36937__auto__,map__43178,map__43178__$1,opts,before_jsload,on_jsload,reload_dependents,map__43179,map__43179__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43286__$1 = cljs.core.group_by.call(null,inst_43285,inst_43252);
var inst_43288 = (inst_43286__$1 == null);
var inst_43289 = cljs.core.not.call(null,inst_43288);
var state_43332__$1 = (function (){var statearr_43370 = state_43332;
(statearr_43370[(28)] = inst_43282);

(statearr_43370[(16)] = inst_43286__$1);

return statearr_43370;
})();
if(inst_43289){
var statearr_43371_43447 = state_43332__$1;
(statearr_43371_43447[(1)] = (32));

} else {
var statearr_43372_43448 = state_43332__$1;
(statearr_43372_43448[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43333 === (44))){
var inst_43308 = (state_43332[(21)]);
var inst_43321 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_43308);
var inst_43322 = cljs.core.pr_str.call(null,inst_43321);
var inst_43323 = [cljs.core.str("not required: "),cljs.core.str(inst_43322)].join('');
var inst_43324 = figwheel.client.utils.log.call(null,inst_43323);
var state_43332__$1 = state_43332;
var statearr_43373_43449 = state_43332__$1;
(statearr_43373_43449[(2)] = inst_43324);

(statearr_43373_43449[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43333 === (6))){
var inst_43227 = (state_43332[(2)]);
var state_43332__$1 = state_43332;
var statearr_43374_43450 = state_43332__$1;
(statearr_43374_43450[(2)] = inst_43227);

(statearr_43374_43450[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43333 === (28))){
var inst_43252 = (state_43332[(26)]);
var inst_43279 = (state_43332[(2)]);
var inst_43280 = cljs.core.not_empty.call(null,inst_43252);
var state_43332__$1 = (function (){var statearr_43375 = state_43332;
(statearr_43375[(29)] = inst_43279);

return statearr_43375;
})();
if(cljs.core.truth_(inst_43280)){
var statearr_43376_43451 = state_43332__$1;
(statearr_43376_43451[(1)] = (29));

} else {
var statearr_43377_43452 = state_43332__$1;
(statearr_43377_43452[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43333 === (25))){
var inst_43250 = (state_43332[(25)]);
var inst_43266 = (state_43332[(2)]);
var inst_43267 = cljs.core.not_empty.call(null,inst_43250);
var state_43332__$1 = (function (){var statearr_43378 = state_43332;
(statearr_43378[(30)] = inst_43266);

return statearr_43378;
})();
if(cljs.core.truth_(inst_43267)){
var statearr_43379_43453 = state_43332__$1;
(statearr_43379_43453[(1)] = (26));

} else {
var statearr_43380_43454 = state_43332__$1;
(statearr_43380_43454[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43333 === (34))){
var inst_43301 = (state_43332[(2)]);
var state_43332__$1 = state_43332;
if(cljs.core.truth_(inst_43301)){
var statearr_43381_43455 = state_43332__$1;
(statearr_43381_43455[(1)] = (38));

} else {
var statearr_43382_43456 = state_43332__$1;
(statearr_43382_43456[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43333 === (17))){
var state_43332__$1 = state_43332;
var statearr_43383_43457 = state_43332__$1;
(statearr_43383_43457[(2)] = recompile_dependents);

(statearr_43383_43457[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43333 === (3))){
var state_43332__$1 = state_43332;
var statearr_43384_43458 = state_43332__$1;
(statearr_43384_43458[(2)] = null);

(statearr_43384_43458[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43333 === (12))){
var inst_43223 = (state_43332[(2)]);
var state_43332__$1 = state_43332;
var statearr_43385_43459 = state_43332__$1;
(statearr_43385_43459[(2)] = inst_43223);

(statearr_43385_43459[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43333 === (2))){
var inst_43185 = (state_43332[(13)]);
var inst_43192 = cljs.core.seq.call(null,inst_43185);
var inst_43193 = inst_43192;
var inst_43194 = null;
var inst_43195 = (0);
var inst_43196 = (0);
var state_43332__$1 = (function (){var statearr_43386 = state_43332;
(statearr_43386[(7)] = inst_43194);

(statearr_43386[(8)] = inst_43193);

(statearr_43386[(9)] = inst_43195);

(statearr_43386[(10)] = inst_43196);

return statearr_43386;
})();
var statearr_43387_43460 = state_43332__$1;
(statearr_43387_43460[(2)] = null);

(statearr_43387_43460[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43333 === (23))){
var inst_43249 = (state_43332[(23)]);
var inst_43254 = (state_43332[(24)]);
var inst_43246 = (state_43332[(19)]);
var inst_43250 = (state_43332[(25)]);
var inst_43252 = (state_43332[(26)]);
var inst_43257 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_43259 = (function (){var all_files = inst_43246;
var res_SINGLEQUOTE_ = inst_43249;
var res = inst_43250;
var files_not_loaded = inst_43252;
var dependencies_that_loaded = inst_43254;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43249,inst_43254,inst_43246,inst_43250,inst_43252,inst_43257,state_val_43333,c__36937__auto__,map__43178,map__43178__$1,opts,before_jsload,on_jsload,reload_dependents,map__43179,map__43179__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__43258){
var map__43388 = p__43258;
var map__43388__$1 = ((((!((map__43388 == null)))?((((map__43388.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43388.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43388):map__43388);
var request_url = cljs.core.get.call(null,map__43388__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43249,inst_43254,inst_43246,inst_43250,inst_43252,inst_43257,state_val_43333,c__36937__auto__,map__43178,map__43178__$1,opts,before_jsload,on_jsload,reload_dependents,map__43179,map__43179__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43260 = cljs.core.reverse.call(null,inst_43254);
var inst_43261 = cljs.core.map.call(null,inst_43259,inst_43260);
var inst_43262 = cljs.core.pr_str.call(null,inst_43261);
var inst_43263 = figwheel.client.utils.log.call(null,inst_43262);
var state_43332__$1 = (function (){var statearr_43390 = state_43332;
(statearr_43390[(31)] = inst_43257);

return statearr_43390;
})();
var statearr_43391_43461 = state_43332__$1;
(statearr_43391_43461[(2)] = inst_43263);

(statearr_43391_43461[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43333 === (35))){
var state_43332__$1 = state_43332;
var statearr_43392_43462 = state_43332__$1;
(statearr_43392_43462[(2)] = true);

(statearr_43392_43462[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43333 === (19))){
var inst_43236 = (state_43332[(12)]);
var inst_43242 = figwheel.client.file_reloading.expand_files.call(null,inst_43236);
var state_43332__$1 = state_43332;
var statearr_43393_43463 = state_43332__$1;
(statearr_43393_43463[(2)] = inst_43242);

(statearr_43393_43463[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43333 === (11))){
var state_43332__$1 = state_43332;
var statearr_43394_43464 = state_43332__$1;
(statearr_43394_43464[(2)] = null);

(statearr_43394_43464[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43333 === (9))){
var inst_43225 = (state_43332[(2)]);
var state_43332__$1 = state_43332;
var statearr_43395_43465 = state_43332__$1;
(statearr_43395_43465[(2)] = inst_43225);

(statearr_43395_43465[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43333 === (5))){
var inst_43195 = (state_43332[(9)]);
var inst_43196 = (state_43332[(10)]);
var inst_43198 = (inst_43196 < inst_43195);
var inst_43199 = inst_43198;
var state_43332__$1 = state_43332;
if(cljs.core.truth_(inst_43199)){
var statearr_43396_43466 = state_43332__$1;
(statearr_43396_43466[(1)] = (7));

} else {
var statearr_43397_43467 = state_43332__$1;
(statearr_43397_43467[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43333 === (14))){
var inst_43206 = (state_43332[(22)]);
var inst_43215 = cljs.core.first.call(null,inst_43206);
var inst_43216 = figwheel.client.file_reloading.eval_body.call(null,inst_43215,opts);
var inst_43217 = cljs.core.next.call(null,inst_43206);
var inst_43193 = inst_43217;
var inst_43194 = null;
var inst_43195 = (0);
var inst_43196 = (0);
var state_43332__$1 = (function (){var statearr_43398 = state_43332;
(statearr_43398[(32)] = inst_43216);

(statearr_43398[(7)] = inst_43194);

(statearr_43398[(8)] = inst_43193);

(statearr_43398[(9)] = inst_43195);

(statearr_43398[(10)] = inst_43196);

return statearr_43398;
})();
var statearr_43399_43468 = state_43332__$1;
(statearr_43399_43468[(2)] = null);

(statearr_43399_43468[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43333 === (45))){
var state_43332__$1 = state_43332;
var statearr_43400_43469 = state_43332__$1;
(statearr_43400_43469[(2)] = null);

(statearr_43400_43469[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43333 === (26))){
var inst_43249 = (state_43332[(23)]);
var inst_43254 = (state_43332[(24)]);
var inst_43246 = (state_43332[(19)]);
var inst_43250 = (state_43332[(25)]);
var inst_43252 = (state_43332[(26)]);
var inst_43269 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_43271 = (function (){var all_files = inst_43246;
var res_SINGLEQUOTE_ = inst_43249;
var res = inst_43250;
var files_not_loaded = inst_43252;
var dependencies_that_loaded = inst_43254;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43249,inst_43254,inst_43246,inst_43250,inst_43252,inst_43269,state_val_43333,c__36937__auto__,map__43178,map__43178__$1,opts,before_jsload,on_jsload,reload_dependents,map__43179,map__43179__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__43270){
var map__43401 = p__43270;
var map__43401__$1 = ((((!((map__43401 == null)))?((((map__43401.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43401.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43401):map__43401);
var namespace = cljs.core.get.call(null,map__43401__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__43401__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43249,inst_43254,inst_43246,inst_43250,inst_43252,inst_43269,state_val_43333,c__36937__auto__,map__43178,map__43178__$1,opts,before_jsload,on_jsload,reload_dependents,map__43179,map__43179__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43272 = cljs.core.map.call(null,inst_43271,inst_43250);
var inst_43273 = cljs.core.pr_str.call(null,inst_43272);
var inst_43274 = figwheel.client.utils.log.call(null,inst_43273);
var inst_43275 = (function (){var all_files = inst_43246;
var res_SINGLEQUOTE_ = inst_43249;
var res = inst_43250;
var files_not_loaded = inst_43252;
var dependencies_that_loaded = inst_43254;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43249,inst_43254,inst_43246,inst_43250,inst_43252,inst_43269,inst_43271,inst_43272,inst_43273,inst_43274,state_val_43333,c__36937__auto__,map__43178,map__43178__$1,opts,before_jsload,on_jsload,reload_dependents,map__43179,map__43179__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43249,inst_43254,inst_43246,inst_43250,inst_43252,inst_43269,inst_43271,inst_43272,inst_43273,inst_43274,state_val_43333,c__36937__auto__,map__43178,map__43178__$1,opts,before_jsload,on_jsload,reload_dependents,map__43179,map__43179__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43276 = setTimeout(inst_43275,(10));
var state_43332__$1 = (function (){var statearr_43403 = state_43332;
(statearr_43403[(33)] = inst_43269);

(statearr_43403[(34)] = inst_43274);

return statearr_43403;
})();
var statearr_43404_43470 = state_43332__$1;
(statearr_43404_43470[(2)] = inst_43276);

(statearr_43404_43470[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43333 === (16))){
var state_43332__$1 = state_43332;
var statearr_43405_43471 = state_43332__$1;
(statearr_43405_43471[(2)] = reload_dependents);

(statearr_43405_43471[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43333 === (38))){
var inst_43286 = (state_43332[(16)]);
var inst_43303 = cljs.core.apply.call(null,cljs.core.hash_map,inst_43286);
var state_43332__$1 = state_43332;
var statearr_43406_43472 = state_43332__$1;
(statearr_43406_43472[(2)] = inst_43303);

(statearr_43406_43472[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43333 === (30))){
var state_43332__$1 = state_43332;
var statearr_43407_43473 = state_43332__$1;
(statearr_43407_43473[(2)] = null);

(statearr_43407_43473[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43333 === (10))){
var inst_43206 = (state_43332[(22)]);
var inst_43208 = cljs.core.chunked_seq_QMARK_.call(null,inst_43206);
var state_43332__$1 = state_43332;
if(inst_43208){
var statearr_43408_43474 = state_43332__$1;
(statearr_43408_43474[(1)] = (13));

} else {
var statearr_43409_43475 = state_43332__$1;
(statearr_43409_43475[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43333 === (18))){
var inst_43240 = (state_43332[(2)]);
var state_43332__$1 = state_43332;
if(cljs.core.truth_(inst_43240)){
var statearr_43410_43476 = state_43332__$1;
(statearr_43410_43476[(1)] = (19));

} else {
var statearr_43411_43477 = state_43332__$1;
(statearr_43411_43477[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43333 === (42))){
var state_43332__$1 = state_43332;
var statearr_43412_43478 = state_43332__$1;
(statearr_43412_43478[(2)] = null);

(statearr_43412_43478[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43333 === (37))){
var inst_43298 = (state_43332[(2)]);
var state_43332__$1 = state_43332;
var statearr_43413_43479 = state_43332__$1;
(statearr_43413_43479[(2)] = inst_43298);

(statearr_43413_43479[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43333 === (8))){
var inst_43193 = (state_43332[(8)]);
var inst_43206 = (state_43332[(22)]);
var inst_43206__$1 = cljs.core.seq.call(null,inst_43193);
var state_43332__$1 = (function (){var statearr_43414 = state_43332;
(statearr_43414[(22)] = inst_43206__$1);

return statearr_43414;
})();
if(inst_43206__$1){
var statearr_43415_43480 = state_43332__$1;
(statearr_43415_43480[(1)] = (10));

} else {
var statearr_43416_43481 = state_43332__$1;
(statearr_43416_43481[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__36937__auto__,map__43178,map__43178__$1,opts,before_jsload,on_jsload,reload_dependents,map__43179,map__43179__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__36825__auto__,c__36937__auto__,map__43178,map__43178__$1,opts,before_jsload,on_jsload,reload_dependents,map__43179,map__43179__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__36826__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__36826__auto____0 = (function (){
var statearr_43420 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43420[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__36826__auto__);

(statearr_43420[(1)] = (1));

return statearr_43420;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__36826__auto____1 = (function (state_43332){
while(true){
var ret_value__36827__auto__ = (function (){try{while(true){
var result__36828__auto__ = switch__36825__auto__.call(null,state_43332);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36828__auto__;
}
break;
}
}catch (e43421){if((e43421 instanceof Object)){
var ex__36829__auto__ = e43421;
var statearr_43422_43482 = state_43332;
(statearr_43422_43482[(5)] = ex__36829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43332);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43421;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43483 = state_43332;
state_43332 = G__43483;
continue;
} else {
return ret_value__36827__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__36826__auto__ = function(state_43332){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__36826__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__36826__auto____1.call(this,state_43332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__36826__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__36826__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__36826__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__36826__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__36826__auto__;
})()
;})(switch__36825__auto__,c__36937__auto__,map__43178,map__43178__$1,opts,before_jsload,on_jsload,reload_dependents,map__43179,map__43179__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__36939__auto__ = (function (){var statearr_43423 = f__36938__auto__.call(null);
(statearr_43423[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36937__auto__);

return statearr_43423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36939__auto__);
});})(c__36937__auto__,map__43178,map__43178__$1,opts,before_jsload,on_jsload,reload_dependents,map__43179,map__43179__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__36937__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__43486,link){
var map__43489 = p__43486;
var map__43489__$1 = ((((!((map__43489 == null)))?((((map__43489.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43489.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43489):map__43489);
var file = cljs.core.get.call(null,map__43489__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__43489,map__43489__$1,file){
return (function (p1__43484_SHARP_,p2__43485_SHARP_){
if(cljs.core._EQ_.call(null,p1__43484_SHARP_,p2__43485_SHARP_)){
return p1__43484_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__43489,map__43489__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__43495){
var map__43496 = p__43495;
var map__43496__$1 = ((((!((map__43496 == null)))?((((map__43496.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43496.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43496):map__43496);
var match_length = cljs.core.get.call(null,map__43496__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__43496__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__43491_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__43491_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args43498 = [];
var len__25947__auto___43501 = arguments.length;
var i__25948__auto___43502 = (0);
while(true){
if((i__25948__auto___43502 < len__25947__auto___43501)){
args43498.push((arguments[i__25948__auto___43502]));

var G__43503 = (i__25948__auto___43502 + (1));
i__25948__auto___43502 = G__43503;
continue;
} else {
}
break;
}

var G__43500 = args43498.length;
switch (G__43500) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43498.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__43505_SHARP_,p2__43506_SHARP_){
return cljs.core.assoc.call(null,p1__43505_SHARP_,cljs.core.get.call(null,p2__43506_SHARP_,key),p2__43506_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__43507){
var map__43510 = p__43507;
var map__43510__$1 = ((((!((map__43510 == null)))?((((map__43510.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43510.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43510):map__43510);
var f_data = map__43510__$1;
var file = cljs.core.get.call(null,map__43510__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__43512,files_msg){
var map__43519 = p__43512;
var map__43519__$1 = ((((!((map__43519 == null)))?((((map__43519.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43519.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43519):map__43519);
var opts = map__43519__$1;
var on_cssload = cljs.core.get.call(null,map__43519__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__43521_43525 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__43522_43526 = null;
var count__43523_43527 = (0);
var i__43524_43528 = (0);
while(true){
if((i__43524_43528 < count__43523_43527)){
var f_43529 = cljs.core._nth.call(null,chunk__43522_43526,i__43524_43528);
figwheel.client.file_reloading.reload_css_file.call(null,f_43529);

var G__43530 = seq__43521_43525;
var G__43531 = chunk__43522_43526;
var G__43532 = count__43523_43527;
var G__43533 = (i__43524_43528 + (1));
seq__43521_43525 = G__43530;
chunk__43522_43526 = G__43531;
count__43523_43527 = G__43532;
i__43524_43528 = G__43533;
continue;
} else {
var temp__4657__auto___43534 = cljs.core.seq.call(null,seq__43521_43525);
if(temp__4657__auto___43534){
var seq__43521_43535__$1 = temp__4657__auto___43534;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43521_43535__$1)){
var c__25683__auto___43536 = cljs.core.chunk_first.call(null,seq__43521_43535__$1);
var G__43537 = cljs.core.chunk_rest.call(null,seq__43521_43535__$1);
var G__43538 = c__25683__auto___43536;
var G__43539 = cljs.core.count.call(null,c__25683__auto___43536);
var G__43540 = (0);
seq__43521_43525 = G__43537;
chunk__43522_43526 = G__43538;
count__43523_43527 = G__43539;
i__43524_43528 = G__43540;
continue;
} else {
var f_43541 = cljs.core.first.call(null,seq__43521_43535__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_43541);

var G__43542 = cljs.core.next.call(null,seq__43521_43535__$1);
var G__43543 = null;
var G__43544 = (0);
var G__43545 = (0);
seq__43521_43525 = G__43542;
chunk__43522_43526 = G__43543;
count__43523_43527 = G__43544;
i__43524_43528 = G__43545;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__43519,map__43519__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__43519,map__43519__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1486291280225