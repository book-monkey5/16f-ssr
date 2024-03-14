import{a as f}from"./chunk-YKBDMDKI.js";import{$ as D,A as d,B as h,G as c,H as b,M as g,O as p,P as H,Q as r,R as n,S as x,V as v,W as _,X as L,Y as $,Z as a,_ as B,c as E,ca as O,da as P,ea as W,h as M,i as N,ia as G,j,ja as y,k as F,ka as U,m as w,na as z,oa as q,p as R,pa as J,q as S,qa as K,ra as Q,s as V,t as I,ta as X,ua as Y,v as l,va as u,w as k,wa as Z,xa as T,ya as tt}from"./chunk-WIMIHNTF.js";var lt=e=>["/books",e];function ut(e,t){if(e&1&&(r(0,"li")(1,"a",6),a(2),r(3,"p",7),a(4),n()()()),e&2){let s=t.$implicit;c(),p("routerLink",O(3,lt,s.isbn)),c(),D(" ",s.title," "),c(2),B(s.subtitle)}}function ft(e,t){e&1&&(r(0,"li"),a(1,"No results"),n())}function dt(e,t){if(e&1&&(r(0,"ul",3),g(1,ut,5,5,"li",4)(2,ft,2,0,"li",5),n()),e&2){let s=t.ngIf;c(),p("ngForOf",s),c(),p("ngIf",!s.length)}}var it=(()=>{let t=class t{constructor(o){this.service=o,this.input$=new E,this.isLoading=!1,this.results$=this.input$.pipe(M(i=>i.length>=3),N(500),j(),w(()=>this.isLoading=!0),F(i=>this.service.getAllSearch(i)),w(()=>this.isLoading=!1))}};t.\u0275fac=function(i){return new(i||t)(b(tt))},t.\u0275cmp=l({type:t,selectors:[["bm-search"]],decls:4,vars:5,consts:[["searchInput",""],["type","search","autocomplete","off","aria-label","Search",3,"input"],["class","search-results",4,"ngIf"],[1,"search-results"],[4,"ngFor","ngForOf"],[4,"ngIf"],[3,"routerLink"],["role","doc-subtitle"]],template:function(i,m){if(i&1){let A=v();r(0,"input",1,0),_("input",function(){d(A);let mt=$(1);return h(m.input$.next(mt.value))}),n(),g(2,dt,3,2,"ul",2),P(3,"async")}i&2&&(H("loading",m.isLoading),c(2),p("ngIf",W(3,3,m.results$)))},dependencies:[G,y,u,U]});let e=t;return e})();var ot=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=l({type:t,selectors:[["bm-home"]],decls:7,vars:0,consts:[["routerLink","/books",1,"button","red"]],template:function(i,m){i&1&&(r(0,"h1"),a(1,"Home"),n(),r(2,"a",0),a(3,` Show book list
`),n(),r(4,"h2"),a(5,"Search"),n(),x(6,"bm-search"))},dependencies:[u,it]});let e=t;return e})();var rt=()=>{let e=I(f),t=I(Y);return e.isAuthenticated?!0:(window.alert("Not logged in!"),t.parseUrl("/home"))};var gt=[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:ot},{path:"books",loadChildren:()=>import("./chunk-C6AYDFMO.js").then(e=>e.BooksModule)},{path:"admin",loadChildren:()=>import("./chunk-4LSKIQLC.js").then(e=>e.AdminModule),canActivate:[rt]}],nt=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=k({type:t}),t.\u0275inj=S({imports:[T.forRoot(gt),T]});let e=t;return e})();function _t(e,t){if(e&1){let s=v();r(0,"button",6),_("click",function(){d(s);let i=L();return h(i.auth.login())}),a(1,"Login"),n()}}function Ct(e,t){if(e&1){let s=v();r(0,"button",7),_("click",function(){d(s);let i=L();return h(i.auth.logout())}),a(1,"Logout"),n()}}var at=(()=>{let t=class t{constructor(o){this.auth=o}};t.\u0275fac=function(i){return new(i||t)(b(f))},t.\u0275cmp=l({type:t,selectors:[["bm-root"]],decls:12,vars:2,consts:[["routerLink","/home","routerLinkActive","active","ariaCurrentWhenActive","page"],["routerLink","/books","routerLinkActive","active","ariaCurrentWhenActive","page"],["routerLink","/admin","routerLinkActive","active","ariaCurrentWhenActive","page"],[1,"actions"],["class","green",3,"click",4,"ngIf"],["class","red",3,"click",4,"ngIf"],[1,"green",3,"click"],[1,"red",3,"click"]],template:function(i,m){i&1&&(r(0,"nav")(1,"a",0),a(2,"Home"),n(),r(3,"a",1),a(4,"Books"),n(),r(5,"a",2),a(6,"Administration"),n(),r(7,"div",3),g(8,_t,2,0,"button",4)(9,Ct,2,0,"button",5),n()(),r(10,"main"),x(11,"router-outlet"),n()),i&2&&(c(8),p("ngIf",!m.auth.isAuthenticated),c(),p("ngIf",m.auth.isAuthenticated))},dependencies:[y,X,u,Z]});let e=t;return e})();var st=(()=>{let t=class t{constructor(o){this.authService=o}intercept(o,i){let m="1234567890";if(this.authService.isAuthenticated){let A=o.clone({setHeaders:{Authorization:`Bearer ${m}`}});return i.handle(A)}else return i.handle(o)}};t.\u0275fac=function(i){return new(i||t)(V(f))},t.\u0275prov=R({token:t,factory:t.\u0275fac});let e=t;return e})();var ct=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=k({type:t,bootstrap:[at]}),t.\u0275inj=S({providers:[{provide:z,useClass:st,multi:!0},Q()],imports:[K,nt,q]});let e=t;return e})();J().bootstrapModule(ct).catch(e=>console.error(e));