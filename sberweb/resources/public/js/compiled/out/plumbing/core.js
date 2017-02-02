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
var args11681 = [];
var len__7326__auto___11690 = arguments.length;
var i__7327__auto___11691 = (0);
while(true){
if((i__7327__auto___11691 < len__7326__auto___11690)){
args11681.push((arguments[i__7327__auto___11691]));

var G__11692 = (i__7327__auto___11691 + (1));
i__7327__auto___11691 = G__11692;
continue;
} else {
}
break;
}

var G__11689 = args11681.length;
switch (G__11689) {
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
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args11681.slice((5)),(0),null));
return plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__7345__auto__);

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

plumbing.core.update.cljs$lang$applyTo = (function (seq11682){
var G__11683 = cljs.core.first.call(null,seq11682);
var seq11682__$1 = cljs.core.next.call(null,seq11682);
var G__11684 = cljs.core.first.call(null,seq11682__$1);
var seq11682__$2 = cljs.core.next.call(null,seq11682__$1);
var G__11685 = cljs.core.first.call(null,seq11682__$2);
var seq11682__$3 = cljs.core.next.call(null,seq11682__$2);
var G__11686 = cljs.core.first.call(null,seq11682__$3);
var seq11682__$4 = cljs.core.next.call(null,seq11682__$3);
var G__11687 = cljs.core.first.call(null,seq11682__$4);
var seq11682__$5 = cljs.core.next.call(null,seq11682__$4);
return plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic(G__11683,G__11684,G__11685,G__11686,G__11687,seq11682__$5);
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
var m_atom__11419__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__11706_11716 = cljs.core.seq.call(null,m);
var chunk__11707_11717 = null;
var count__11708_11718 = (0);
var i__11709_11719 = (0);
while(true){
if((i__11709_11719 < count__11708_11718)){
var vec__11710_11720 = cljs.core._nth.call(null,chunk__11707_11717,i__11709_11719);
var k_11721 = cljs.core.nth.call(null,vec__11710_11720,(0),null);
var v_11722 = cljs.core.nth.call(null,vec__11710_11720,(1),null);
var m11705_11723 = cljs.core.deref.call(null,m_atom__11419__auto__);
cljs.core.reset_BANG_.call(null,m_atom__11419__auto__,cljs.core.assoc_BANG_.call(null,m11705_11723,k_11721,f.call(null,v_11722)));

var G__11724 = seq__11706_11716;
var G__11725 = chunk__11707_11717;
var G__11726 = count__11708_11718;
var G__11727 = (i__11709_11719 + (1));
seq__11706_11716 = G__11724;
chunk__11707_11717 = G__11725;
count__11708_11718 = G__11726;
i__11709_11719 = G__11727;
continue;
} else {
var temp__4657__auto___11728 = cljs.core.seq.call(null,seq__11706_11716);
if(temp__4657__auto___11728){
var seq__11706_11729__$1 = temp__4657__auto___11728;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11706_11729__$1)){
var c__7062__auto___11730 = cljs.core.chunk_first.call(null,seq__11706_11729__$1);
var G__11731 = cljs.core.chunk_rest.call(null,seq__11706_11729__$1);
var G__11732 = c__7062__auto___11730;
var G__11733 = cljs.core.count.call(null,c__7062__auto___11730);
var G__11734 = (0);
seq__11706_11716 = G__11731;
chunk__11707_11717 = G__11732;
count__11708_11718 = G__11733;
i__11709_11719 = G__11734;
continue;
} else {
var vec__11713_11735 = cljs.core.first.call(null,seq__11706_11729__$1);
var k_11736 = cljs.core.nth.call(null,vec__11713_11735,(0),null);
var v_11737 = cljs.core.nth.call(null,vec__11713_11735,(1),null);
var m11705_11738 = cljs.core.deref.call(null,m_atom__11419__auto__);
cljs.core.reset_BANG_.call(null,m_atom__11419__auto__,cljs.core.assoc_BANG_.call(null,m11705_11738,k_11736,f.call(null,v_11737)));

var G__11739 = cljs.core.next.call(null,seq__11706_11729__$1);
var G__11740 = null;
var G__11741 = (0);
var G__11742 = (0);
seq__11706_11716 = G__11739;
chunk__11707_11717 = G__11740;
count__11708_11718 = G__11741;
i__11709_11719 = G__11742;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__11419__auto__));

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
var m_atom__11419__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__11755_11765 = cljs.core.seq.call(null,m);
var chunk__11756_11766 = null;
var count__11757_11767 = (0);
var i__11758_11768 = (0);
while(true){
if((i__11758_11768 < count__11757_11767)){
var vec__11759_11769 = cljs.core._nth.call(null,chunk__11756_11766,i__11758_11768);
var k_11770 = cljs.core.nth.call(null,vec__11759_11769,(0),null);
var v_11771 = cljs.core.nth.call(null,vec__11759_11769,(1),null);
var m11754_11772 = cljs.core.deref.call(null,m_atom__11419__auto__);
cljs.core.reset_BANG_.call(null,m_atom__11419__auto__,cljs.core.assoc_BANG_.call(null,m11754_11772,f.call(null,k_11770),v_11771));

var G__11773 = seq__11755_11765;
var G__11774 = chunk__11756_11766;
var G__11775 = count__11757_11767;
var G__11776 = (i__11758_11768 + (1));
seq__11755_11765 = G__11773;
chunk__11756_11766 = G__11774;
count__11757_11767 = G__11775;
i__11758_11768 = G__11776;
continue;
} else {
var temp__4657__auto___11777 = cljs.core.seq.call(null,seq__11755_11765);
if(temp__4657__auto___11777){
var seq__11755_11778__$1 = temp__4657__auto___11777;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11755_11778__$1)){
var c__7062__auto___11779 = cljs.core.chunk_first.call(null,seq__11755_11778__$1);
var G__11780 = cljs.core.chunk_rest.call(null,seq__11755_11778__$1);
var G__11781 = c__7062__auto___11779;
var G__11782 = cljs.core.count.call(null,c__7062__auto___11779);
var G__11783 = (0);
seq__11755_11765 = G__11780;
chunk__11756_11766 = G__11781;
count__11757_11767 = G__11782;
i__11758_11768 = G__11783;
continue;
} else {
var vec__11762_11784 = cljs.core.first.call(null,seq__11755_11778__$1);
var k_11785 = cljs.core.nth.call(null,vec__11762_11784,(0),null);
var v_11786 = cljs.core.nth.call(null,vec__11762_11784,(1),null);
var m11754_11787 = cljs.core.deref.call(null,m_atom__11419__auto__);
cljs.core.reset_BANG_.call(null,m_atom__11419__auto__,cljs.core.assoc_BANG_.call(null,m11754_11787,f.call(null,k_11785),v_11786));

var G__11788 = cljs.core.next.call(null,seq__11755_11778__$1);
var G__11789 = null;
var G__11790 = (0);
var G__11791 = (0);
seq__11755_11765 = G__11788;
chunk__11756_11766 = G__11789;
count__11757_11767 = G__11790;
i__11758_11768 = G__11791;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__11419__auto__));
}
});
/**
 * Build map k -> (f k) for keys in ks
 */
plumbing.core.map_from_keys = (function plumbing$core$map_from_keys(f,ks){
var m_atom__11419__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__11798_11802 = cljs.core.seq.call(null,ks);
var chunk__11799_11803 = null;
var count__11800_11804 = (0);
var i__11801_11805 = (0);
while(true){
if((i__11801_11805 < count__11800_11804)){
var k_11806 = cljs.core._nth.call(null,chunk__11799_11803,i__11801_11805);
var m11797_11807 = cljs.core.deref.call(null,m_atom__11419__auto__);
cljs.core.reset_BANG_.call(null,m_atom__11419__auto__,cljs.core.assoc_BANG_.call(null,m11797_11807,k_11806,f.call(null,k_11806)));

var G__11808 = seq__11798_11802;
var G__11809 = chunk__11799_11803;
var G__11810 = count__11800_11804;
var G__11811 = (i__11801_11805 + (1));
seq__11798_11802 = G__11808;
chunk__11799_11803 = G__11809;
count__11800_11804 = G__11810;
i__11801_11805 = G__11811;
continue;
} else {
var temp__4657__auto___11812 = cljs.core.seq.call(null,seq__11798_11802);
if(temp__4657__auto___11812){
var seq__11798_11813__$1 = temp__4657__auto___11812;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11798_11813__$1)){
var c__7062__auto___11814 = cljs.core.chunk_first.call(null,seq__11798_11813__$1);
var G__11815 = cljs.core.chunk_rest.call(null,seq__11798_11813__$1);
var G__11816 = c__7062__auto___11814;
var G__11817 = cljs.core.count.call(null,c__7062__auto___11814);
var G__11818 = (0);
seq__11798_11802 = G__11815;
chunk__11799_11803 = G__11816;
count__11800_11804 = G__11817;
i__11801_11805 = G__11818;
continue;
} else {
var k_11819 = cljs.core.first.call(null,seq__11798_11813__$1);
var m11797_11820 = cljs.core.deref.call(null,m_atom__11419__auto__);
cljs.core.reset_BANG_.call(null,m_atom__11419__auto__,cljs.core.assoc_BANG_.call(null,m11797_11820,k_11819,f.call(null,k_11819)));

var G__11821 = cljs.core.next.call(null,seq__11798_11813__$1);
var G__11822 = null;
var G__11823 = (0);
var G__11824 = (0);
seq__11798_11802 = G__11821;
chunk__11799_11803 = G__11822;
count__11800_11804 = G__11823;
i__11801_11805 = G__11824;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__11419__auto__));
});
/**
 * Build map (f v) -> v for vals in vs
 */
plumbing.core.map_from_vals = (function plumbing$core$map_from_vals(f,vs){
var m_atom__11419__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__11831_11835 = cljs.core.seq.call(null,vs);
var chunk__11832_11836 = null;
var count__11833_11837 = (0);
var i__11834_11838 = (0);
while(true){
if((i__11834_11838 < count__11833_11837)){
var v_11839 = cljs.core._nth.call(null,chunk__11832_11836,i__11834_11838);
var m11830_11840 = cljs.core.deref.call(null,m_atom__11419__auto__);
cljs.core.reset_BANG_.call(null,m_atom__11419__auto__,cljs.core.assoc_BANG_.call(null,m11830_11840,f.call(null,v_11839),v_11839));

var G__11841 = seq__11831_11835;
var G__11842 = chunk__11832_11836;
var G__11843 = count__11833_11837;
var G__11844 = (i__11834_11838 + (1));
seq__11831_11835 = G__11841;
chunk__11832_11836 = G__11842;
count__11833_11837 = G__11843;
i__11834_11838 = G__11844;
continue;
} else {
var temp__4657__auto___11845 = cljs.core.seq.call(null,seq__11831_11835);
if(temp__4657__auto___11845){
var seq__11831_11846__$1 = temp__4657__auto___11845;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11831_11846__$1)){
var c__7062__auto___11847 = cljs.core.chunk_first.call(null,seq__11831_11846__$1);
var G__11848 = cljs.core.chunk_rest.call(null,seq__11831_11846__$1);
var G__11849 = c__7062__auto___11847;
var G__11850 = cljs.core.count.call(null,c__7062__auto___11847);
var G__11851 = (0);
seq__11831_11835 = G__11848;
chunk__11832_11836 = G__11849;
count__11833_11837 = G__11850;
i__11834_11838 = G__11851;
continue;
} else {
var v_11852 = cljs.core.first.call(null,seq__11831_11846__$1);
var m11830_11853 = cljs.core.deref.call(null,m_atom__11419__auto__);
cljs.core.reset_BANG_.call(null,m_atom__11419__auto__,cljs.core.assoc_BANG_.call(null,m11830_11853,f.call(null,v_11852),v_11852));

var G__11854 = cljs.core.next.call(null,seq__11831_11846__$1);
var G__11855 = null;
var G__11856 = (0);
var G__11857 = (0);
seq__11831_11835 = G__11854;
chunk__11832_11836 = G__11855;
count__11833_11837 = G__11856;
i__11834_11838 = G__11857;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__11419__auto__));
});
/**
 * Dissociate this keyseq from m, removing any empty maps created as a result
 * (including at the top-level).
 */
plumbing.core.dissoc_in = (function plumbing$core$dissoc_in(m,p__11858){
var vec__11862 = p__11858;
var seq__11863 = cljs.core.seq.call(null,vec__11862);
var first__11864 = cljs.core.first.call(null,seq__11863);
var seq__11863__$1 = cljs.core.next.call(null,seq__11863);
var k = first__11864;
var ks = seq__11863__$1;
if(cljs.core.truth_(m)){
var temp__4655__auto__ = (function (){var and__6239__auto__ = ks;
if(and__6239__auto__){
return plumbing$core$dissoc_in.call(null,cljs.core.get.call(null,m,k),ks);
} else {
return and__6239__auto__;
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
var m_atom__11419__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__11877_11887 = cljs.core.seq.call(null,x);
var chunk__11878_11888 = null;
var count__11879_11889 = (0);
var i__11880_11890 = (0);
while(true){
if((i__11880_11890 < count__11879_11889)){
var vec__11881_11891 = cljs.core._nth.call(null,chunk__11878_11888,i__11880_11890);
var k_11892 = cljs.core.nth.call(null,vec__11881_11891,(0),null);
var v_11893 = cljs.core.nth.call(null,vec__11881_11891,(1),null);
var m11876_11894 = cljs.core.deref.call(null,m_atom__11419__auto__);
cljs.core.reset_BANG_.call(null,m_atom__11419__auto__,cljs.core.assoc_BANG_.call(null,m11876_11894,((typeof k_11892 === 'string')?cljs.core.keyword.call(null,k_11892):k_11892),plumbing$core$keywordize_map.call(null,v_11893)));

var G__11895 = seq__11877_11887;
var G__11896 = chunk__11878_11888;
var G__11897 = count__11879_11889;
var G__11898 = (i__11880_11890 + (1));
seq__11877_11887 = G__11895;
chunk__11878_11888 = G__11896;
count__11879_11889 = G__11897;
i__11880_11890 = G__11898;
continue;
} else {
var temp__4657__auto___11899 = cljs.core.seq.call(null,seq__11877_11887);
if(temp__4657__auto___11899){
var seq__11877_11900__$1 = temp__4657__auto___11899;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11877_11900__$1)){
var c__7062__auto___11901 = cljs.core.chunk_first.call(null,seq__11877_11900__$1);
var G__11902 = cljs.core.chunk_rest.call(null,seq__11877_11900__$1);
var G__11903 = c__7062__auto___11901;
var G__11904 = cljs.core.count.call(null,c__7062__auto___11901);
var G__11905 = (0);
seq__11877_11887 = G__11902;
chunk__11878_11888 = G__11903;
count__11879_11889 = G__11904;
i__11880_11890 = G__11905;
continue;
} else {
var vec__11884_11906 = cljs.core.first.call(null,seq__11877_11900__$1);
var k_11907 = cljs.core.nth.call(null,vec__11884_11906,(0),null);
var v_11908 = cljs.core.nth.call(null,vec__11884_11906,(1),null);
var m11876_11909 = cljs.core.deref.call(null,m_atom__11419__auto__);
cljs.core.reset_BANG_.call(null,m_atom__11419__auto__,cljs.core.assoc_BANG_.call(null,m11876_11909,((typeof k_11907 === 'string')?cljs.core.keyword.call(null,k_11907):k_11907),plumbing$core$keywordize_map.call(null,v_11908)));

var G__11910 = cljs.core.next.call(null,seq__11877_11900__$1);
var G__11911 = null;
var G__11912 = (0);
var G__11913 = (0);
seq__11877_11887 = G__11910;
chunk__11878_11888 = G__11911;
count__11879_11889 = G__11912;
i__11880_11890 = G__11913;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__11419__auto__));
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
var pair__11495__auto__ = temp__4655__auto__;
return cljs.core.val.call(null,pair__11495__auto__);
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
var G__11914 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__11915 = cljs.core.next.call(null,ks);
m = G__11914;
ks = G__11915;
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
var args__7333__auto__ = [];
var len__7326__auto___11934 = arguments.length;
var i__7327__auto___11935 = (0);
while(true){
if((i__7327__auto___11935 < len__7326__auto___11934)){
args__7333__auto__.push((arguments[i__7327__auto___11935]));

var G__11936 = (i__7327__auto___11935 + (1));
i__7327__auto___11935 = G__11936;
continue;
} else {
}
break;
}

var argseq__7334__auto__ = ((((1) < args__7333__auto__.length))?(new cljs.core.IndexedSeq(args__7333__auto__.slice((1)),(0),null)):null);
return plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7334__auto__);
});

plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

return cljs.core.into.call(null,(function (){var or__6251__auto__ = m;
if(cljs.core.truth_(or__6251__auto__)){
return or__6251__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__7031__auto__ = (function plumbing$core$iter__11918(s__11919){
return (new cljs.core.LazySeq(null,(function (){
var s__11919__$1 = s__11919;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__11919__$1);
if(temp__4657__auto__){
var s__11919__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11919__$2)){
var c__7029__auto__ = cljs.core.chunk_first.call(null,s__11919__$2);
var size__7030__auto__ = cljs.core.count.call(null,c__7029__auto__);
var b__11921 = cljs.core.chunk_buffer.call(null,size__7030__auto__);
if((function (){var i__11920 = (0);
while(true){
if((i__11920 < size__7030__auto__)){
var vec__11928 = cljs.core._nth.call(null,c__7029__auto__,i__11920);
var k = cljs.core.nth.call(null,vec__11928,(0),null);
var v = cljs.core.nth.call(null,vec__11928,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__11921,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__11937 = (i__11920 + (1));
i__11920 = G__11937;
continue;
} else {
var G__11938 = (i__11920 + (1));
i__11920 = G__11938;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11921),plumbing$core$iter__11918.call(null,cljs.core.chunk_rest.call(null,s__11919__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11921),null);
}
} else {
var vec__11931 = cljs.core.first.call(null,s__11919__$2);
var k = cljs.core.nth.call(null,vec__11931,(0),null);
var v = cljs.core.nth.call(null,vec__11931,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$core$iter__11918.call(null,cljs.core.rest.call(null,s__11919__$2)));
} else {
var G__11939 = cljs.core.rest.call(null,s__11919__$2);
s__11919__$1 = G__11939;
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
return iter__7031__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
});

plumbing.core.assoc_when.cljs$lang$maxFixedArity = (1);

plumbing.core.assoc_when.cljs$lang$applyTo = (function (seq11916){
var G__11917 = cljs.core.first.call(null,seq11916);
var seq11916__$1 = cljs.core.next.call(null,seq11916);
return plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__11917,seq11916__$1);
});

/**
 * Like update-in but returns m unchanged if key-seq is not present.
 */
plumbing.core.update_in_when = (function plumbing$core$update_in_when(var_args){
var args__7333__auto__ = [];
var len__7326__auto___11944 = arguments.length;
var i__7327__auto___11945 = (0);
while(true){
if((i__7327__auto___11945 < len__7326__auto___11944)){
args__7333__auto__.push((arguments[i__7327__auto___11945]));

var G__11946 = (i__7327__auto___11945 + (1));
i__7327__auto___11945 = G__11946;
continue;
} else {
}
break;
}

var argseq__7334__auto__ = ((((3) < args__7333__auto__.length))?(new cljs.core.IndexedSeq(args__7333__auto__.slice((3)),(0),null)):null);
return plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7334__auto__);
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

plumbing.core.update_in_when.cljs$lang$applyTo = (function (seq11940){
var G__11941 = cljs.core.first.call(null,seq11940);
var seq11940__$1 = cljs.core.next.call(null,seq11940);
var G__11942 = cljs.core.first.call(null,seq11940__$1);
var seq11940__$2 = cljs.core.next.call(null,seq11940__$1);
var G__11943 = cljs.core.first.call(null,seq11940__$2);
var seq11940__$3 = cljs.core.next.call(null,seq11940__$2);
return plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic(G__11941,G__11942,G__11943,seq11940__$3);
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
var args11947 = [];
var len__7326__auto___11950 = arguments.length;
var i__7327__auto___11951 = (0);
while(true){
if((i__7327__auto___11951 < len__7326__auto___11950)){
args11947.push((arguments[i__7327__auto___11951]));

var G__11952 = (i__7327__auto___11951 + (1));
i__7327__auto___11951 = G__11952;
continue;
} else {
}
break;
}

var G__11949 = args11947.length;
switch (G__11949) {
case 2:
return plumbing.core.sum.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return plumbing.core.sum.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11947.length)].join('')));

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
var iter__7031__auto__ = ((function (s){
return (function plumbing$core$distinct_by_$_iter__11958(s__11959){
return (new cljs.core.LazySeq(null,((function (s){
return (function (){
var s__11959__$1 = s__11959;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__11959__$1);
if(temp__4657__auto__){
var s__11959__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11959__$2)){
var c__7029__auto__ = cljs.core.chunk_first.call(null,s__11959__$2);
var size__7030__auto__ = cljs.core.count.call(null,c__7029__auto__);
var b__11961 = cljs.core.chunk_buffer.call(null,size__7030__auto__);
if((function (){var i__11960 = (0);
while(true){
if((i__11960 < size__7030__auto__)){
var x = cljs.core._nth.call(null,c__7029__auto__,i__11960);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
cljs.core.chunk_append.call(null,b__11961,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
);

var G__11962 = (i__11960 + (1));
i__11960 = G__11962;
continue;
} else {
var G__11963 = (i__11960 + (1));
i__11960 = G__11963;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11961),plumbing$core$distinct_by_$_iter__11958.call(null,cljs.core.chunk_rest.call(null,s__11959__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11961),null);
}
} else {
var x = cljs.core.first.call(null,s__11959__$2);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
return cljs.core.cons.call(null,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
,plumbing$core$distinct_by_$_iter__11958.call(null,cljs.core.rest.call(null,s__11959__$2)));
} else {
var G__11964 = cljs.core.rest.call(null,s__11959__$2);
s__11959__$1 = G__11964;
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
return iter__7031__auto__.call(null,xs);
});
/**
 * Analogy: partition:partition-all :: interleave:interleave-all
 */
plumbing.core.interleave_all = (function plumbing$core$interleave_all(var_args){
var args__7333__auto__ = [];
var len__7326__auto___11966 = arguments.length;
var i__7327__auto___11967 = (0);
while(true){
if((i__7327__auto___11967 < len__7326__auto___11966)){
args__7333__auto__.push((arguments[i__7327__auto___11967]));

var G__11968 = (i__7327__auto___11967 + (1));
i__7327__auto___11967 = G__11968;
continue;
} else {
}
break;
}

var argseq__7334__auto__ = ((((0) < args__7333__auto__.length))?(new cljs.core.IndexedSeq(args__7333__auto__.slice((0)),(0),null)):null);
return plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic(argseq__7334__auto__);
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

plumbing.core.interleave_all.cljs$lang$applyTo = (function (seq11965){
return plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11965));
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
var args11969 = [];
var len__7326__auto___11975 = arguments.length;
var i__7327__auto___11976 = (0);
while(true){
if((i__7327__auto___11976 < len__7326__auto___11975)){
args11969.push((arguments[i__7327__auto___11976]));

var G__11977 = (i__7327__auto___11976 + (1));
i__7327__auto___11976 = G__11977;
continue;
} else {
}
break;
}

var G__11974 = args11969.length;
switch (G__11974) {
case 2:
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args11969.slice((2)),(0),null));
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7345__auto__);

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
var G__11979 = plumbing.core.conj_when.call(null,coll,x);
var G__11980 = cljs.core.first.call(null,xs);
var G__11981 = cljs.core.next.call(null,xs);
coll = G__11979;
x = G__11980;
xs = G__11981;
continue;
} else {
return plumbing.core.conj_when.call(null,coll,x);
}
break;
}
});

plumbing.core.conj_when.cljs$lang$applyTo = (function (seq11970){
var G__11971 = cljs.core.first.call(null,seq11970);
var seq11970__$1 = cljs.core.next.call(null,seq11970);
var G__11972 = cljs.core.first.call(null,seq11970__$1);
var seq11970__$2 = cljs.core.next.call(null,seq11970__$1);
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic(G__11971,G__11972,seq11970__$2);
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
var args11983 = [];
var len__7326__auto___11989 = arguments.length;
var i__7327__auto___11990 = (0);
while(true){
if((i__7327__auto___11990 < len__7326__auto___11989)){
args11983.push((arguments[i__7327__auto___11990]));

var G__11991 = (i__7327__auto___11990 + (1));
i__7327__auto___11990 = G__11991;
continue;
} else {
}
break;
}

var G__11988 = args11983.length;
switch (G__11988) {
case 2:
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args11983.slice((2)),(0),null));
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7345__auto__);

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
return plumbing.core.swap_pair_BANG_.call(null,a,(function (p1__11982_SHARP_){
return cljs.core.apply.call(null,f,p1__11982_SHARP_,args);
}));
});

plumbing.core.swap_pair_BANG_.cljs$lang$applyTo = (function (seq11984){
var G__11985 = cljs.core.first.call(null,seq11984);
var seq11984__$1 = cljs.core.next.call(null,seq11984);
var G__11986 = cljs.core.first.call(null,seq11984__$1);
var seq11984__$2 = cljs.core.next.call(null,seq11984__$1);
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11985,G__11986,seq11984__$2);
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
var args11993 = [];
var len__7326__auto___11999 = arguments.length;
var i__7327__auto___12000 = (0);
while(true){
if((i__7327__auto___12000 < len__7326__auto___11999)){
args11993.push((arguments[i__7327__auto___12000]));

var G__12001 = (i__7327__auto___12000 + (1));
i__7327__auto___12000 = G__12001;
continue;
} else {
}
break;
}

var G__11998 = args11993.length;
switch (G__11998) {
case 2:
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7345__auto__ = (new cljs.core.IndexedSeq(args11993.slice((2)),(0),null));
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7345__auto__);

}
});

plumbing.core.mapply.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,m));
});

plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,arg,args){
return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
});

plumbing.core.mapply.cljs$lang$applyTo = (function (seq11994){
var G__11995 = cljs.core.first.call(null,seq11994);
var seq11994__$1 = cljs.core.next.call(null,seq11994);
var G__11996 = cljs.core.first.call(null,seq11994__$1);
var seq11994__$2 = cljs.core.next.call(null,seq11994__$1);
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic(G__11995,G__11996,seq11994__$2);
});

plumbing.core.mapply.cljs$lang$maxFixedArity = (2);


//# sourceMappingURL=core.js.map?rel=1486035192208