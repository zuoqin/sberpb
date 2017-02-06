// Compiled by ClojureScript 1.9.89 {}
goog.provide('plumbing.core');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('plumbing.fnk.schema');
/**
 * A sentinel value representing missing portions of the input data.
 */
plumbing.core._PLUS_none_PLUS_ = new cljs.core.Keyword("plumbing.core","missing","plumbing.core/missing",1721767298);
/**
 * Updates the value in map m at k with the function f.
 * 
 *  Like update-in, but for updating a single top-level key.
 *  Any additional args will be passed to f after the value.
 * 
 *  WARNING As of Clojure 1.7 this function exists in clojure.core and
 *  will not be exported by this namespace.
 */
plumbing.core.update = (function plumbing$core$update(var_args){
var args32539 = [];
var len__25947__auto___32548 = arguments.length;
var i__25948__auto___32549 = (0);
while(true){
if((i__25948__auto___32549 < len__25947__auto___32548)){
args32539.push((arguments[i__25948__auto___32549]));

var G__32550 = (i__25948__auto___32549 + (1));
i__25948__auto___32549 = G__32550;
continue;
} else {
}
break;
}

var G__32547 = args32539.length;
switch (G__32547) {
case 3:
return plumbing.core.update.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return plumbing.core.update.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return plumbing.core.update.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args32539.slice((5)),(0),null));
return plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__25966__auto__);

}
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$3 = (function (m,k,f){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k)));
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$4 = (function (m,k,f,x1){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1));
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$5 = (function (m,k,f,x1,x2){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1,x2));
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,f,x1,x2,xs){
return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
});

plumbing.core.update.cljs$lang$applyTo = (function (seq32540){
var G__32541 = cljs.core.first.call(null,seq32540);
var seq32540__$1 = cljs.core.next.call(null,seq32540);
var G__32542 = cljs.core.first.call(null,seq32540__$1);
var seq32540__$2 = cljs.core.next.call(null,seq32540__$1);
var G__32543 = cljs.core.first.call(null,seq32540__$2);
var seq32540__$3 = cljs.core.next.call(null,seq32540__$2);
var G__32544 = cljs.core.first.call(null,seq32540__$3);
var seq32540__$4 = cljs.core.next.call(null,seq32540__$3);
var G__32545 = cljs.core.first.call(null,seq32540__$4);
var seq32540__$5 = cljs.core.next.call(null,seq32540__$4);
return plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic(G__32541,G__32542,G__32543,G__32544,G__32545,seq32540__$5);
});

plumbing.core.update.cljs$lang$maxFixedArity = (5);

/**
 * Build map k -> (f v) for [k v] in map, preserving the initial type
 */
plumbing.core.map_vals = (function plumbing$core$map_vals(f,m){
if(cljs.core.sorted_QMARK_.call(null,m)){
return cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc.call(null,out_m,k,f.call(null,v));
}),cljs.core.sorted_map.call(null),m);
} else {
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc_BANG_.call(null,out_m,k,f.call(null,v));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__32277__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__32564_32574 = cljs.core.seq.call(null,m);
var chunk__32565_32575 = null;
var count__32566_32576 = (0);
var i__32567_32577 = (0);
while(true){
if((i__32567_32577 < count__32566_32576)){
var vec__32568_32578 = cljs.core._nth.call(null,chunk__32565_32575,i__32567_32577);
var k_32579 = cljs.core.nth.call(null,vec__32568_32578,(0),null);
var v_32580 = cljs.core.nth.call(null,vec__32568_32578,(1),null);
var m32563_32581 = cljs.core.deref.call(null,m_atom__32277__auto__);
cljs.core.reset_BANG_.call(null,m_atom__32277__auto__,cljs.core.assoc_BANG_.call(null,m32563_32581,k_32579,f.call(null,v_32580)));

var G__32582 = seq__32564_32574;
var G__32583 = chunk__32565_32575;
var G__32584 = count__32566_32576;
var G__32585 = (i__32567_32577 + (1));
seq__32564_32574 = G__32582;
chunk__32565_32575 = G__32583;
count__32566_32576 = G__32584;
i__32567_32577 = G__32585;
continue;
} else {
var temp__4657__auto___32586 = cljs.core.seq.call(null,seq__32564_32574);
if(temp__4657__auto___32586){
var seq__32564_32587__$1 = temp__4657__auto___32586;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32564_32587__$1)){
var c__25683__auto___32588 = cljs.core.chunk_first.call(null,seq__32564_32587__$1);
var G__32589 = cljs.core.chunk_rest.call(null,seq__32564_32587__$1);
var G__32590 = c__25683__auto___32588;
var G__32591 = cljs.core.count.call(null,c__25683__auto___32588);
var G__32592 = (0);
seq__32564_32574 = G__32589;
chunk__32565_32575 = G__32590;
count__32566_32576 = G__32591;
i__32567_32577 = G__32592;
continue;
} else {
var vec__32571_32593 = cljs.core.first.call(null,seq__32564_32587__$1);
var k_32594 = cljs.core.nth.call(null,vec__32571_32593,(0),null);
var v_32595 = cljs.core.nth.call(null,vec__32571_32593,(1),null);
var m32563_32596 = cljs.core.deref.call(null,m_atom__32277__auto__);
cljs.core.reset_BANG_.call(null,m_atom__32277__auto__,cljs.core.assoc_BANG_.call(null,m32563_32596,k_32594,f.call(null,v_32595)));

var G__32597 = cljs.core.next.call(null,seq__32564_32587__$1);
var G__32598 = null;
var G__32599 = (0);
var G__32600 = (0);
seq__32564_32574 = G__32597;
chunk__32565_32575 = G__32598;
count__32566_32576 = G__32599;
i__32567_32577 = G__32600;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__32277__auto__));

}
}
});
/**
 * Build map (f k) -> v for [k v] in map m
 */
plumbing.core.map_keys = (function plumbing$core$map_keys(f,m){
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc_BANG_.call(null,out_m,f.call(null,k),v);
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__32277__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__32613_32623 = cljs.core.seq.call(null,m);
var chunk__32614_32624 = null;
var count__32615_32625 = (0);
var i__32616_32626 = (0);
while(true){
if((i__32616_32626 < count__32615_32625)){
var vec__32617_32627 = cljs.core._nth.call(null,chunk__32614_32624,i__32616_32626);
var k_32628 = cljs.core.nth.call(null,vec__32617_32627,(0),null);
var v_32629 = cljs.core.nth.call(null,vec__32617_32627,(1),null);
var m32612_32630 = cljs.core.deref.call(null,m_atom__32277__auto__);
cljs.core.reset_BANG_.call(null,m_atom__32277__auto__,cljs.core.assoc_BANG_.call(null,m32612_32630,f.call(null,k_32628),v_32629));

var G__32631 = seq__32613_32623;
var G__32632 = chunk__32614_32624;
var G__32633 = count__32615_32625;
var G__32634 = (i__32616_32626 + (1));
seq__32613_32623 = G__32631;
chunk__32614_32624 = G__32632;
count__32615_32625 = G__32633;
i__32616_32626 = G__32634;
continue;
} else {
var temp__4657__auto___32635 = cljs.core.seq.call(null,seq__32613_32623);
if(temp__4657__auto___32635){
var seq__32613_32636__$1 = temp__4657__auto___32635;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32613_32636__$1)){
var c__25683__auto___32637 = cljs.core.chunk_first.call(null,seq__32613_32636__$1);
var G__32638 = cljs.core.chunk_rest.call(null,seq__32613_32636__$1);
var G__32639 = c__25683__auto___32637;
var G__32640 = cljs.core.count.call(null,c__25683__auto___32637);
var G__32641 = (0);
seq__32613_32623 = G__32638;
chunk__32614_32624 = G__32639;
count__32615_32625 = G__32640;
i__32616_32626 = G__32641;
continue;
} else {
var vec__32620_32642 = cljs.core.first.call(null,seq__32613_32636__$1);
var k_32643 = cljs.core.nth.call(null,vec__32620_32642,(0),null);
var v_32644 = cljs.core.nth.call(null,vec__32620_32642,(1),null);
var m32612_32645 = cljs.core.deref.call(null,m_atom__32277__auto__);
cljs.core.reset_BANG_.call(null,m_atom__32277__auto__,cljs.core.assoc_BANG_.call(null,m32612_32645,f.call(null,k_32643),v_32644));

var G__32646 = cljs.core.next.call(null,seq__32613_32636__$1);
var G__32647 = null;
var G__32648 = (0);
var G__32649 = (0);
seq__32613_32623 = G__32646;
chunk__32614_32624 = G__32647;
count__32615_32625 = G__32648;
i__32616_32626 = G__32649;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__32277__auto__));
}
});
/**
 * Build map k -> (f k) for keys in ks
 */
plumbing.core.map_from_keys = (function plumbing$core$map_from_keys(f,ks){
var m_atom__32277__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__32656_32660 = cljs.core.seq.call(null,ks);
var chunk__32657_32661 = null;
var count__32658_32662 = (0);
var i__32659_32663 = (0);
while(true){
if((i__32659_32663 < count__32658_32662)){
var k_32664 = cljs.core._nth.call(null,chunk__32657_32661,i__32659_32663);
var m32655_32665 = cljs.core.deref.call(null,m_atom__32277__auto__);
cljs.core.reset_BANG_.call(null,m_atom__32277__auto__,cljs.core.assoc_BANG_.call(null,m32655_32665,k_32664,f.call(null,k_32664)));

var G__32666 = seq__32656_32660;
var G__32667 = chunk__32657_32661;
var G__32668 = count__32658_32662;
var G__32669 = (i__32659_32663 + (1));
seq__32656_32660 = G__32666;
chunk__32657_32661 = G__32667;
count__32658_32662 = G__32668;
i__32659_32663 = G__32669;
continue;
} else {
var temp__4657__auto___32670 = cljs.core.seq.call(null,seq__32656_32660);
if(temp__4657__auto___32670){
var seq__32656_32671__$1 = temp__4657__auto___32670;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32656_32671__$1)){
var c__25683__auto___32672 = cljs.core.chunk_first.call(null,seq__32656_32671__$1);
var G__32673 = cljs.core.chunk_rest.call(null,seq__32656_32671__$1);
var G__32674 = c__25683__auto___32672;
var G__32675 = cljs.core.count.call(null,c__25683__auto___32672);
var G__32676 = (0);
seq__32656_32660 = G__32673;
chunk__32657_32661 = G__32674;
count__32658_32662 = G__32675;
i__32659_32663 = G__32676;
continue;
} else {
var k_32677 = cljs.core.first.call(null,seq__32656_32671__$1);
var m32655_32678 = cljs.core.deref.call(null,m_atom__32277__auto__);
cljs.core.reset_BANG_.call(null,m_atom__32277__auto__,cljs.core.assoc_BANG_.call(null,m32655_32678,k_32677,f.call(null,k_32677)));

var G__32679 = cljs.core.next.call(null,seq__32656_32671__$1);
var G__32680 = null;
var G__32681 = (0);
var G__32682 = (0);
seq__32656_32660 = G__32679;
chunk__32657_32661 = G__32680;
count__32658_32662 = G__32681;
i__32659_32663 = G__32682;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__32277__auto__));
});
/**
 * Build map (f v) -> v for vals in vs
 */
plumbing.core.map_from_vals = (function plumbing$core$map_from_vals(f,vs){
var m_atom__32277__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__32689_32693 = cljs.core.seq.call(null,vs);
var chunk__32690_32694 = null;
var count__32691_32695 = (0);
var i__32692_32696 = (0);
while(true){
if((i__32692_32696 < count__32691_32695)){
var v_32697 = cljs.core._nth.call(null,chunk__32690_32694,i__32692_32696);
var m32688_32698 = cljs.core.deref.call(null,m_atom__32277__auto__);
cljs.core.reset_BANG_.call(null,m_atom__32277__auto__,cljs.core.assoc_BANG_.call(null,m32688_32698,f.call(null,v_32697),v_32697));

var G__32699 = seq__32689_32693;
var G__32700 = chunk__32690_32694;
var G__32701 = count__32691_32695;
var G__32702 = (i__32692_32696 + (1));
seq__32689_32693 = G__32699;
chunk__32690_32694 = G__32700;
count__32691_32695 = G__32701;
i__32692_32696 = G__32702;
continue;
} else {
var temp__4657__auto___32703 = cljs.core.seq.call(null,seq__32689_32693);
if(temp__4657__auto___32703){
var seq__32689_32704__$1 = temp__4657__auto___32703;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32689_32704__$1)){
var c__25683__auto___32705 = cljs.core.chunk_first.call(null,seq__32689_32704__$1);
var G__32706 = cljs.core.chunk_rest.call(null,seq__32689_32704__$1);
var G__32707 = c__25683__auto___32705;
var G__32708 = cljs.core.count.call(null,c__25683__auto___32705);
var G__32709 = (0);
seq__32689_32693 = G__32706;
chunk__32690_32694 = G__32707;
count__32691_32695 = G__32708;
i__32692_32696 = G__32709;
continue;
} else {
var v_32710 = cljs.core.first.call(null,seq__32689_32704__$1);
var m32688_32711 = cljs.core.deref.call(null,m_atom__32277__auto__);
cljs.core.reset_BANG_.call(null,m_atom__32277__auto__,cljs.core.assoc_BANG_.call(null,m32688_32711,f.call(null,v_32710),v_32710));

var G__32712 = cljs.core.next.call(null,seq__32689_32704__$1);
var G__32713 = null;
var G__32714 = (0);
var G__32715 = (0);
seq__32689_32693 = G__32712;
chunk__32690_32694 = G__32713;
count__32691_32695 = G__32714;
i__32692_32696 = G__32715;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__32277__auto__));
});
/**
 * Dissociate this keyseq from m, removing any empty maps created as a result
 * (including at the top-level).
 */
plumbing.core.dissoc_in = (function plumbing$core$dissoc_in(m,p__32716){
var vec__32720 = p__32716;
var seq__32721 = cljs.core.seq.call(null,vec__32720);
var first__32722 = cljs.core.first.call(null,seq__32721);
var seq__32721__$1 = cljs.core.next.call(null,seq__32721);
var k = first__32722;
var ks = seq__32721__$1;
if(cljs.core.truth_(m)){
var temp__4655__auto__ = (function (){var and__24860__auto__ = ks;
if(and__24860__auto__){
return plumbing$core$dissoc_in.call(null,cljs.core.get.call(null,m,k),ks);
} else {
return and__24860__auto__;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var res = temp__4655__auto__;
return cljs.core.assoc.call(null,m,k,res);
} else {
var res = cljs.core.dissoc.call(null,m,k);
if(cljs.core.empty_QMARK_.call(null,res)){
return null;
} else {
return res;
}
}
} else {
return null;
}
});
/**
 * Recursively convert maps in m (including itself)
 * to have keyword keys instead of string
 */
plumbing.core.keywordize_map = (function plumbing$core$keywordize_map(x){
if(cljs.core.map_QMARK_.call(null,x)){
var m_atom__32277__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__32735_32745 = cljs.core.seq.call(null,x);
var chunk__32736_32746 = null;
var count__32737_32747 = (0);
var i__32738_32748 = (0);
while(true){
if((i__32738_32748 < count__32737_32747)){
var vec__32739_32749 = cljs.core._nth.call(null,chunk__32736_32746,i__32738_32748);
var k_32750 = cljs.core.nth.call(null,vec__32739_32749,(0),null);
var v_32751 = cljs.core.nth.call(null,vec__32739_32749,(1),null);
var m32734_32752 = cljs.core.deref.call(null,m_atom__32277__auto__);
cljs.core.reset_BANG_.call(null,m_atom__32277__auto__,cljs.core.assoc_BANG_.call(null,m32734_32752,((typeof k_32750 === 'string')?cljs.core.keyword.call(null,k_32750):k_32750),plumbing$core$keywordize_map.call(null,v_32751)));

var G__32753 = seq__32735_32745;
var G__32754 = chunk__32736_32746;
var G__32755 = count__32737_32747;
var G__32756 = (i__32738_32748 + (1));
seq__32735_32745 = G__32753;
chunk__32736_32746 = G__32754;
count__32737_32747 = G__32755;
i__32738_32748 = G__32756;
continue;
} else {
var temp__4657__auto___32757 = cljs.core.seq.call(null,seq__32735_32745);
if(temp__4657__auto___32757){
var seq__32735_32758__$1 = temp__4657__auto___32757;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32735_32758__$1)){
var c__25683__auto___32759 = cljs.core.chunk_first.call(null,seq__32735_32758__$1);
var G__32760 = cljs.core.chunk_rest.call(null,seq__32735_32758__$1);
var G__32761 = c__25683__auto___32759;
var G__32762 = cljs.core.count.call(null,c__25683__auto___32759);
var G__32763 = (0);
seq__32735_32745 = G__32760;
chunk__32736_32746 = G__32761;
count__32737_32747 = G__32762;
i__32738_32748 = G__32763;
continue;
} else {
var vec__32742_32764 = cljs.core.first.call(null,seq__32735_32758__$1);
var k_32765 = cljs.core.nth.call(null,vec__32742_32764,(0),null);
var v_32766 = cljs.core.nth.call(null,vec__32742_32764,(1),null);
var m32734_32767 = cljs.core.deref.call(null,m_atom__32277__auto__);
cljs.core.reset_BANG_.call(null,m_atom__32277__auto__,cljs.core.assoc_BANG_.call(null,m32734_32767,((typeof k_32765 === 'string')?cljs.core.keyword.call(null,k_32765):k_32765),plumbing$core$keywordize_map.call(null,v_32766)));

var G__32768 = cljs.core.next.call(null,seq__32735_32758__$1);
var G__32769 = null;
var G__32770 = (0);
var G__32771 = (0);
seq__32735_32745 = G__32768;
chunk__32736_32746 = G__32769;
count__32737_32747 = G__32770;
i__32738_32748 = G__32771;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__32277__auto__));
} else {
if(cljs.core.seq_QMARK_.call(null,x)){
return cljs.core.map.call(null,plumbing$core$keywordize_map,x);
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
return cljs.core.mapv.call(null,plumbing$core$keywordize_map,x);
} else {
return x;

}
}
}
});
/**
 * Like get but throw an exception if not found
 */
plumbing.core.safe_get = (function plumbing$core$safe_get(m,k){
var temp__4655__auto__ = cljs.core.find.call(null,m,k);
if(cljs.core.truth_(temp__4655__auto__)){
var pair__32353__auto__ = temp__4655__auto__;
return cljs.core.val.call(null,pair__32353__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.mapv.call(null,cljs.core.key,m))));

}
});
/**
 * Like get-in but throws exception if not found
 */
plumbing.core.safe_get_in = (function plumbing$core$safe_get_in(m,ks){
while(true){
if(cljs.core.seq.call(null,ks)){
var G__32772 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__32773 = cljs.core.next.call(null,ks);
m = G__32772;
ks = G__32773;
continue;
} else {
return m;
}
break;
}
});
/**
 * Like assoc but only assocs when value is truthy
 */
plumbing.core.assoc_when = (function plumbing$core$assoc_when(var_args){
var args__25954__auto__ = [];
var len__25947__auto___32792 = arguments.length;
var i__25948__auto___32793 = (0);
while(true){
if((i__25948__auto___32793 < len__25947__auto___32792)){
args__25954__auto__.push((arguments[i__25948__auto___32793]));

var G__32794 = (i__25948__auto___32793 + (1));
i__25948__auto___32793 = G__32794;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((1) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((1)),(0),null)):null);
return plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25955__auto__);
});

plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

return cljs.core.into.call(null,(function (){var or__24872__auto__ = m;
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__25652__auto__ = (function plumbing$core$iter__32776(s__32777){
return (new cljs.core.LazySeq(null,(function (){
var s__32777__$1 = s__32777;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32777__$1);
if(temp__4657__auto__){
var s__32777__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32777__$2)){
var c__25650__auto__ = cljs.core.chunk_first.call(null,s__32777__$2);
var size__25651__auto__ = cljs.core.count.call(null,c__25650__auto__);
var b__32779 = cljs.core.chunk_buffer.call(null,size__25651__auto__);
if((function (){var i__32778 = (0);
while(true){
if((i__32778 < size__25651__auto__)){
var vec__32786 = cljs.core._nth.call(null,c__25650__auto__,i__32778);
var k = cljs.core.nth.call(null,vec__32786,(0),null);
var v = cljs.core.nth.call(null,vec__32786,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__32779,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__32795 = (i__32778 + (1));
i__32778 = G__32795;
continue;
} else {
var G__32796 = (i__32778 + (1));
i__32778 = G__32796;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32779),plumbing$core$iter__32776.call(null,cljs.core.chunk_rest.call(null,s__32777__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32779),null);
}
} else {
var vec__32789 = cljs.core.first.call(null,s__32777__$2);
var k = cljs.core.nth.call(null,vec__32789,(0),null);
var v = cljs.core.nth.call(null,vec__32789,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$core$iter__32776.call(null,cljs.core.rest.call(null,s__32777__$2)));
} else {
var G__32797 = cljs.core.rest.call(null,s__32777__$2);
s__32777__$1 = G__32797;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25652__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
});

plumbing.core.assoc_when.cljs$lang$maxFixedArity = (1);

plumbing.core.assoc_when.cljs$lang$applyTo = (function (seq32774){
var G__32775 = cljs.core.first.call(null,seq32774);
var seq32774__$1 = cljs.core.next.call(null,seq32774);
return plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__32775,seq32774__$1);
});

/**
 * Like update-in but returns m unchanged if key-seq is not present.
 */
plumbing.core.update_in_when = (function plumbing$core$update_in_when(var_args){
var args__25954__auto__ = [];
var len__25947__auto___32802 = arguments.length;
var i__25948__auto___32803 = (0);
while(true){
if((i__25948__auto___32803 < len__25947__auto___32802)){
args__25954__auto__.push((arguments[i__25948__auto___32803]));

var G__32804 = (i__25948__auto___32803 + (1));
i__25948__auto___32803 = G__32804;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((3) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((3)),(0),null)):null);
return plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25955__auto__);
});

plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,key_seq,f,args){
var found = cljs.core.get_in.call(null,m,key_seq,plumbing.core._PLUS_none_PLUS_);
if(!((plumbing.core._PLUS_none_PLUS_ === found))){
return cljs.core.assoc_in.call(null,m,key_seq,cljs.core.apply.call(null,f,found,args));
} else {
return m;
}
});

plumbing.core.update_in_when.cljs$lang$maxFixedArity = (3);

plumbing.core.update_in_when.cljs$lang$applyTo = (function (seq32798){
var G__32799 = cljs.core.first.call(null,seq32798);
var seq32798__$1 = cljs.core.next.call(null,seq32798);
var G__32800 = cljs.core.first.call(null,seq32798__$1);
var seq32798__$2 = cljs.core.next.call(null,seq32798__$1);
var G__32801 = cljs.core.first.call(null,seq32798__$2);
var seq32798__$3 = cljs.core.next.call(null,seq32798__$2);
return plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic(G__32799,G__32800,G__32801,seq32798__$3);
});

/**
 * Like group-by, but accepts a map-fn that is applied to values before
 * collected.
 */
plumbing.core.grouped_map = (function plumbing$core$grouped_map(key_fn,map_fn,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (ret,x){
var k = key_fn.call(null,x);
return cljs.core.assoc_BANG_.call(null,ret,k,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k,cljs.core.PersistentVector.EMPTY),map_fn.call(null,x)));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
 * Like (apply concat s) but lazier (and shorter) 
 */
plumbing.core.aconcat = (function plumbing$core$aconcat(s){
return cljs.core.concat.call(null,(new cljs.core.LazySeq(null,(function (){
return cljs.core.first.call(null,s);
}),null,null)),(new cljs.core.LazySeq(null,(function (){
var temp__4657__auto__ = cljs.core.next.call(null,s);
if(temp__4657__auto__){
var n = temp__4657__auto__;
return plumbing$core$aconcat.call(null,n);
} else {
return null;
}
}),null,null)));
});
/**
 * Takes a seqable and returns a lazy sequence that
 * is maximally lazy and doesn't realize elements due to either
 * chunking or apply.
 * 
 * Useful when you don't want chunking, for instance,
 * (first awesome-website? (map slurp +a-bunch-of-urls+))
 * may slurp up to 31 unneed webpages, wherease
 * (first awesome-website? (map slurp (unchunk +a-bunch-of-urls+)))
 * is guaranteed to stop slurping after the first awesome website.
 * 
 *   Taken from http://stackoverflow.com/questions/3407876/how-do-i-avoid-clojures-chunking-behavior-for-lazy-seqs-that-i-want-to-short-ci
 */
plumbing.core.unchunk = (function plumbing$core$unchunk(s){
if(cljs.core.seq.call(null,s)){
return cljs.core.cons.call(null,cljs.core.first.call(null,s),(new cljs.core.LazySeq(null,(function (){
return plumbing$core$unchunk.call(null,cljs.core.rest.call(null,s));
}),null,null)));
} else {
return null;
}
});
/**
 * Return sum of (f x) for each x in xs
 */
plumbing.core.sum = (function plumbing$core$sum(var_args){
var args32805 = [];
var len__25947__auto___32808 = arguments.length;
var i__25948__auto___32809 = (0);
while(true){
if((i__25948__auto___32809 < len__25947__auto___32808)){
args32805.push((arguments[i__25948__auto___32809]));

var G__32810 = (i__25948__auto___32809 + (1));
i__25948__auto___32809 = G__32810;
continue;
} else {
}
break;
}

var G__32807 = args32805.length;
switch (G__32807) {
case 2:
return plumbing.core.sum.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return plumbing.core.sum.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32805.length)].join('')));

}
});

plumbing.core.sum.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,f,xs));
});

plumbing.core.sum.cljs$core$IFn$_invoke$arity$1 = (function (xs){
return cljs.core.reduce.call(null,cljs.core._PLUS_,xs);
});

plumbing.core.sum.cljs$lang$maxFixedArity = 2;

/**
 * returns (first xs) when xs has only 1 element
 */
plumbing.core.singleton = (function plumbing$core$singleton(xs){
var temp__4657__auto__ = cljs.core.seq.call(null,xs);
if(temp__4657__auto__){
var xs__$1 = temp__4657__auto__;
if(cljs.core.next.call(null,xs__$1)){
return null;
} else {
return cljs.core.first.call(null,xs__$1);
}
} else {
return null;
}
});
/**
 * Returns [idx x] for x in seqable s
 */
plumbing.core.indexed = (function plumbing$core$indexed(s){
return cljs.core.map_indexed.call(null,cljs.core.vector,s);
});
/**
 * Returns indices idx of sequence s where (f (nth s idx))
 */
plumbing.core.positions = (function plumbing$core$positions(f,s){
return cljs.core.keep_indexed.call(null,(function (i,x){
if(cljs.core.truth_(f.call(null,x))){
return i;
} else {
return null;
}
}),s);
});
/**
 * Returns elements of xs which return unique
 * values according to f. If multiple elements of xs return the same
 * value under f, the first is returned
 */
plumbing.core.distinct_by = (function plumbing$core$distinct_by(f,xs){
var s = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var iter__25652__auto__ = ((function (s){
return (function plumbing$core$distinct_by_$_iter__32816(s__32817){
return (new cljs.core.LazySeq(null,((function (s){
return (function (){
var s__32817__$1 = s__32817;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32817__$1);
if(temp__4657__auto__){
var s__32817__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32817__$2)){
var c__25650__auto__ = cljs.core.chunk_first.call(null,s__32817__$2);
var size__25651__auto__ = cljs.core.count.call(null,c__25650__auto__);
var b__32819 = cljs.core.chunk_buffer.call(null,size__25651__auto__);
if((function (){var i__32818 = (0);
while(true){
if((i__32818 < size__25651__auto__)){
var x = cljs.core._nth.call(null,c__25650__auto__,i__32818);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
cljs.core.chunk_append.call(null,b__32819,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
);

var G__32820 = (i__32818 + (1));
i__32818 = G__32820;
continue;
} else {
var G__32821 = (i__32818 + (1));
i__32818 = G__32821;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32819),plumbing$core$distinct_by_$_iter__32816.call(null,cljs.core.chunk_rest.call(null,s__32817__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32819),null);
}
} else {
var x = cljs.core.first.call(null,s__32817__$2);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
return cljs.core.cons.call(null,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
,plumbing$core$distinct_by_$_iter__32816.call(null,cljs.core.rest.call(null,s__32817__$2)));
} else {
var G__32822 = cljs.core.rest.call(null,s__32817__$2);
s__32817__$1 = G__32822;
continue;
}
}
} else {
return null;
}
break;
}
});})(s))
,null,null));
});})(s))
;
return iter__25652__auto__.call(null,xs);
});
/**
 * Analogy: partition:partition-all :: interleave:interleave-all
 */
plumbing.core.interleave_all = (function plumbing$core$interleave_all(var_args){
var args__25954__auto__ = [];
var len__25947__auto___32824 = arguments.length;
var i__25948__auto___32825 = (0);
while(true){
if((i__25948__auto___32825 < len__25947__auto___32824)){
args__25954__auto__.push((arguments[i__25948__auto___32825]));

var G__32826 = (i__25948__auto___32825 + (1));
i__25948__auto___32825 = G__32826;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});

plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (colls){
return (new cljs.core.LazySeq(null,(function (){
return (function plumbing$core$helper(seqs){
if(cljs.core.seq.call(null,seqs)){
return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,seqs),(new cljs.core.LazySeq(null,(function (){
return plumbing$core$helper.call(null,cljs.core.keep.call(null,cljs.core.next,seqs));
}),null,null)));
} else {
return null;
}
}).call(null,cljs.core.keep.call(null,cljs.core.seq,colls));
}),null,null));
});

plumbing.core.interleave_all.cljs$lang$maxFixedArity = (0);

plumbing.core.interleave_all.cljs$lang$applyTo = (function (seq32823){
return plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32823));
});

/**
 * Returns # of elements of xs where pred holds
 */
plumbing.core.count_when = (function plumbing$core$count_when(pred,xs){
return cljs.core.count.call(null,cljs.core.filter.call(null,pred,xs));
});
/**
 * Like conj but ignores non-truthy values
 */
plumbing.core.conj_when = (function plumbing$core$conj_when(var_args){
var args32827 = [];
var len__25947__auto___32833 = arguments.length;
var i__25948__auto___32834 = (0);
while(true){
if((i__25948__auto___32834 < len__25947__auto___32833)){
args32827.push((arguments[i__25948__auto___32834]));

var G__32835 = (i__25948__auto___32834 + (1));
i__25948__auto___32834 = G__32835;
continue;
} else {
}
break;
}

var G__32832 = args32827.length;
switch (G__32832) {
case 2:
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args32827.slice((2)),(0),null));
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25966__auto__);

}
});

plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$2 = (function (coll,x){
if(cljs.core.truth_(x)){
return cljs.core.conj.call(null,coll,x);
} else {
return coll;
}
});

plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic = (function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs)){
var G__32837 = plumbing.core.conj_when.call(null,coll,x);
var G__32838 = cljs.core.first.call(null,xs);
var G__32839 = cljs.core.next.call(null,xs);
coll = G__32837;
x = G__32838;
xs = G__32839;
continue;
} else {
return plumbing.core.conj_when.call(null,coll,x);
}
break;
}
});

plumbing.core.conj_when.cljs$lang$applyTo = (function (seq32828){
var G__32829 = cljs.core.first.call(null,seq32828);
var seq32828__$1 = cljs.core.next.call(null,seq32828);
var G__32830 = cljs.core.first.call(null,seq32828__$1);
var seq32828__$2 = cljs.core.next.call(null,seq32828__$1);
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic(G__32829,G__32830,seq32828__$2);
});

plumbing.core.conj_when.cljs$lang$maxFixedArity = (2);

/**
 * Like cons but does nothing if x is non-truthy.
 */
plumbing.core.cons_when = (function plumbing$core$cons_when(x,s){
if(cljs.core.truth_(x)){
return cljs.core.cons.call(null,x,s);
} else {
return s;
}
});
/**
 * Like sort-by, but prefers higher values rather than lower ones.
 */
plumbing.core.rsort_by = cljs.core.comp.call(null,cljs.core.reverse,cljs.core.sort_by);
/**
 * Like swap! but returns a pair [old-val new-val]
 */
plumbing.core.swap_pair_BANG_ = (function plumbing$core$swap_pair_BANG_(var_args){
var args32841 = [];
var len__25947__auto___32847 = arguments.length;
var i__25948__auto___32848 = (0);
while(true){
if((i__25948__auto___32848 < len__25947__auto___32847)){
args32841.push((arguments[i__25948__auto___32848]));

var G__32849 = (i__25948__auto___32848 + (1));
i__25948__auto___32848 = G__32849;
continue;
} else {
}
break;
}

var G__32846 = args32841.length;
switch (G__32846) {
case 2:
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args32841.slice((2)),(0),null));
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25966__auto__);

}
});

plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (a,f){
while(true){
var old_val = cljs.core.deref.call(null,a);
var new_val = f.call(null,old_val);
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_.call(null,a,old_val,new_val))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val], null);
} else {
continue;
}
break;
}
});

plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,f,args){
return plumbing.core.swap_pair_BANG_.call(null,a,(function (p1__32840_SHARP_){
return cljs.core.apply.call(null,f,p1__32840_SHARP_,args);
}));
});

plumbing.core.swap_pair_BANG_.cljs$lang$applyTo = (function (seq32842){
var G__32843 = cljs.core.first.call(null,seq32842);
var seq32842__$1 = cljs.core.next.call(null,seq32842);
var G__32844 = cljs.core.first.call(null,seq32842__$1);
var seq32842__$2 = cljs.core.next.call(null,seq32842__$1);
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32843,G__32844,seq32842__$2);
});

plumbing.core.swap_pair_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Like reset! but returns old-val
 */
plumbing.core.get_and_set_BANG_ = (function plumbing$core$get_and_set_BANG_(a,new_val){
return cljs.core.first.call(null,plumbing.core.swap_pair_BANG_.call(null,a,cljs.core.constantly.call(null,new_val)));
});
plumbing.core.millis = (function plumbing$core$millis(){
return (new Date()).getTime();
});
/**
 * Like apply, but applies a map to a function with positional map
 *   arguments. Can take optional initial args just like apply.
 */
plumbing.core.mapply = (function plumbing$core$mapply(var_args){
var args32851 = [];
var len__25947__auto___32857 = arguments.length;
var i__25948__auto___32858 = (0);
while(true){
if((i__25948__auto___32858 < len__25947__auto___32857)){
args32851.push((arguments[i__25948__auto___32858]));

var G__32859 = (i__25948__auto___32858 + (1));
i__25948__auto___32858 = G__32859;
continue;
} else {
}
break;
}

var G__32856 = args32851.length;
switch (G__32856) {
case 2:
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args32851.slice((2)),(0),null));
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25966__auto__);

}
});

plumbing.core.mapply.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,m));
});

plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,arg,args){
return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
});

plumbing.core.mapply.cljs$lang$applyTo = (function (seq32852){
var G__32853 = cljs.core.first.call(null,seq32852);
var seq32852__$1 = cljs.core.next.call(null,seq32852);
var G__32854 = cljs.core.first.call(null,seq32852__$1);
var seq32852__$2 = cljs.core.next.call(null,seq32852__$1);
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic(G__32853,G__32854,seq32852__$2);
});

plumbing.core.mapply.cljs$lang$maxFixedArity = (2);


//# sourceMappingURL=core.js.map?rel=1486291266516