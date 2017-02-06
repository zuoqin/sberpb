// Compiled by ClojureScript 1.9.89 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__44862){
var map__44887 = p__44862;
var map__44887__$1 = ((((!((map__44887 == null)))?((((map__44887.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44887.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44887):map__44887);
var m = map__44887__$1;
var n = cljs.core.get.call(null,map__44887__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__44887__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__44889_44911 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__44890_44912 = null;
var count__44891_44913 = (0);
var i__44892_44914 = (0);
while(true){
if((i__44892_44914 < count__44891_44913)){
var f_44915 = cljs.core._nth.call(null,chunk__44890_44912,i__44892_44914);
cljs.core.println.call(null,"  ",f_44915);

var G__44916 = seq__44889_44911;
var G__44917 = chunk__44890_44912;
var G__44918 = count__44891_44913;
var G__44919 = (i__44892_44914 + (1));
seq__44889_44911 = G__44916;
chunk__44890_44912 = G__44917;
count__44891_44913 = G__44918;
i__44892_44914 = G__44919;
continue;
} else {
var temp__4657__auto___44920 = cljs.core.seq.call(null,seq__44889_44911);
if(temp__4657__auto___44920){
var seq__44889_44921__$1 = temp__4657__auto___44920;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44889_44921__$1)){
var c__25683__auto___44922 = cljs.core.chunk_first.call(null,seq__44889_44921__$1);
var G__44923 = cljs.core.chunk_rest.call(null,seq__44889_44921__$1);
var G__44924 = c__25683__auto___44922;
var G__44925 = cljs.core.count.call(null,c__25683__auto___44922);
var G__44926 = (0);
seq__44889_44911 = G__44923;
chunk__44890_44912 = G__44924;
count__44891_44913 = G__44925;
i__44892_44914 = G__44926;
continue;
} else {
var f_44927 = cljs.core.first.call(null,seq__44889_44921__$1);
cljs.core.println.call(null,"  ",f_44927);

var G__44928 = cljs.core.next.call(null,seq__44889_44921__$1);
var G__44929 = null;
var G__44930 = (0);
var G__44931 = (0);
seq__44889_44911 = G__44928;
chunk__44890_44912 = G__44929;
count__44891_44913 = G__44930;
i__44892_44914 = G__44931;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_44932 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24872__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_44932);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_44932)))?cljs.core.second.call(null,arglists_44932):arglists_44932));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__44893_44933 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__44894_44934 = null;
var count__44895_44935 = (0);
var i__44896_44936 = (0);
while(true){
if((i__44896_44936 < count__44895_44935)){
var vec__44897_44937 = cljs.core._nth.call(null,chunk__44894_44934,i__44896_44936);
var name_44938 = cljs.core.nth.call(null,vec__44897_44937,(0),null);
var map__44900_44939 = cljs.core.nth.call(null,vec__44897_44937,(1),null);
var map__44900_44940__$1 = ((((!((map__44900_44939 == null)))?((((map__44900_44939.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44900_44939.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44900_44939):map__44900_44939);
var doc_44941 = cljs.core.get.call(null,map__44900_44940__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_44942 = cljs.core.get.call(null,map__44900_44940__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_44938);

cljs.core.println.call(null," ",arglists_44942);

if(cljs.core.truth_(doc_44941)){
cljs.core.println.call(null," ",doc_44941);
} else {
}

var G__44943 = seq__44893_44933;
var G__44944 = chunk__44894_44934;
var G__44945 = count__44895_44935;
var G__44946 = (i__44896_44936 + (1));
seq__44893_44933 = G__44943;
chunk__44894_44934 = G__44944;
count__44895_44935 = G__44945;
i__44896_44936 = G__44946;
continue;
} else {
var temp__4657__auto___44947 = cljs.core.seq.call(null,seq__44893_44933);
if(temp__4657__auto___44947){
var seq__44893_44948__$1 = temp__4657__auto___44947;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44893_44948__$1)){
var c__25683__auto___44949 = cljs.core.chunk_first.call(null,seq__44893_44948__$1);
var G__44950 = cljs.core.chunk_rest.call(null,seq__44893_44948__$1);
var G__44951 = c__25683__auto___44949;
var G__44952 = cljs.core.count.call(null,c__25683__auto___44949);
var G__44953 = (0);
seq__44893_44933 = G__44950;
chunk__44894_44934 = G__44951;
count__44895_44935 = G__44952;
i__44896_44936 = G__44953;
continue;
} else {
var vec__44902_44954 = cljs.core.first.call(null,seq__44893_44948__$1);
var name_44955 = cljs.core.nth.call(null,vec__44902_44954,(0),null);
var map__44905_44956 = cljs.core.nth.call(null,vec__44902_44954,(1),null);
var map__44905_44957__$1 = ((((!((map__44905_44956 == null)))?((((map__44905_44956.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44905_44956.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44905_44956):map__44905_44956);
var doc_44958 = cljs.core.get.call(null,map__44905_44957__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_44959 = cljs.core.get.call(null,map__44905_44957__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_44955);

cljs.core.println.call(null," ",arglists_44959);

if(cljs.core.truth_(doc_44958)){
cljs.core.println.call(null," ",doc_44958);
} else {
}

var G__44960 = cljs.core.next.call(null,seq__44893_44948__$1);
var G__44961 = null;
var G__44962 = (0);
var G__44963 = (0);
seq__44893_44933 = G__44960;
chunk__44894_44934 = G__44961;
count__44895_44935 = G__44962;
i__44896_44936 = G__44963;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__44907 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__44908 = null;
var count__44909 = (0);
var i__44910 = (0);
while(true){
if((i__44910 < count__44909)){
var role = cljs.core._nth.call(null,chunk__44908,i__44910);
var temp__4657__auto___44964__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___44964__$1)){
var spec_44965 = temp__4657__auto___44964__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_44965));
} else {
}

var G__44966 = seq__44907;
var G__44967 = chunk__44908;
var G__44968 = count__44909;
var G__44969 = (i__44910 + (1));
seq__44907 = G__44966;
chunk__44908 = G__44967;
count__44909 = G__44968;
i__44910 = G__44969;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__44907);
if(temp__4657__auto____$1){
var seq__44907__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44907__$1)){
var c__25683__auto__ = cljs.core.chunk_first.call(null,seq__44907__$1);
var G__44970 = cljs.core.chunk_rest.call(null,seq__44907__$1);
var G__44971 = c__25683__auto__;
var G__44972 = cljs.core.count.call(null,c__25683__auto__);
var G__44973 = (0);
seq__44907 = G__44970;
chunk__44908 = G__44971;
count__44909 = G__44972;
i__44910 = G__44973;
continue;
} else {
var role = cljs.core.first.call(null,seq__44907__$1);
var temp__4657__auto___44974__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___44974__$2)){
var spec_44975 = temp__4657__auto___44974__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_44975));
} else {
}

var G__44976 = cljs.core.next.call(null,seq__44907__$1);
var G__44977 = null;
var G__44978 = (0);
var G__44979 = (0);
seq__44907 = G__44976;
chunk__44908 = G__44977;
count__44909 = G__44978;
i__44910 = G__44979;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1486291283807