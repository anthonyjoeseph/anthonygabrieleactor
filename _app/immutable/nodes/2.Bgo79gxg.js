import{s as ne,c as oe,e as v,b as M,v as $,d as I,f as B,i as g,j as b,q as u,k as _,Q,u as ge,g as he,a as _e,C as de,R as pe,x as ve,B as Ie,H as Me,S as be,T as ue,l as P,z as je,U as j,p as Ge,n as ke}from"../chunks/scheduler.Cmz7dM4v.js";import{S as me,i as fe,t as U,a as F,c as x,b as ee,m as te,d as le}from"../chunks/index.D5kUCA4c.js";import{T as ye}from"../chunks/Top.CsIzS_-d.js";function R(a){return(a==null?void 0:a.length)!==void 0?a:Array.from(a)}function se(a,e,c){const n=a.slice();return n[16]=e[c],n}function ie(a,e,c){const n=a.slice();return n[19]=e[c],n}function ae(a){let e,c,n=R(a[4]),l=[];for(let s=0;s<n.length;s+=1)l[s]=ce(se(a,n,s));return{c(){e=v("div");for(let s=0;s<l.length;s+=1)l[s].c();this.h()},l(s){e=I(s,"DIV",{id:!0,style:!0,class:!0});var m=B(e);for(let t=0;t<l.length;t+=1)l[t].l(m);m.forEach(g),this.h()},h(){u(e,"id","gallery"),u(e,"style",a[5]),u(e,"class","svelte-1aiohow"),Me(()=>a[14].call(e))},m(s,m){_(s,e,m);for(let t=0;t<l.length;t+=1)l[t]&&l[t].m(e,null);c=be(e,a[14].bind(e))},p(s,m){if(m&83){n=R(s[4]);let t;for(t=0;t<n.length;t+=1){const o=se(s,n,t);l[t]?l[t].p(o,m):(l[t]=ce(o),l[t].c(),l[t].m(e,null))}for(;t<l.length;t+=1)l[t].d(1);l.length=n.length}m&32&&u(e,"style",s[5])},d(s){s&&g(e),ue(l,s),c()}}}function re(a){let e,c,n,l,s,m;return{c(){e=v("img"),this.h()},l(t){e=I(t,"IMG",{src:!0,alt:!0,class:!0,loading:!0}),this.h()},h(){j(e.src,c=a[19].src)||u(e,"src",c),u(e,"alt",n=a[19].alt),u(e,"class",l=(a[0]===!0?"img-hover":"")+" "+a[19].class+" svelte-1aiohow"),u(e,"loading",a[1])},m(t,o){_(t,e,o),s||(m=Q(e,"click",a[6]),s=!0)},p(t,o){o&16&&!j(e.src,c=t[19].src)&&u(e,"src",c),o&16&&n!==(n=t[19].alt)&&u(e,"alt",n),o&17&&l!==(l=(t[0]===!0?"img-hover":"")+" "+t[19].class+" svelte-1aiohow")&&u(e,"class",l),o&2&&u(e,"loading",t[1])},d(t){t&&g(e),s=!1,m()}}}function ce(a){let e,c,n=R(a[16]),l=[];for(let s=0;s<n.length;s+=1)l[s]=re(ie(a,n,s));return{c(){e=v("div");for(let s=0;s<l.length;s+=1)l[s].c();c=M(),this.h()},l(s){e=I(s,"DIV",{class:!0});var m=B(e);for(let t=0;t<l.length;t+=1)l[t].l(m);c=b(m),m.forEach(g),this.h()},h(){u(e,"class","column svelte-1aiohow")},m(s,m){_(s,e,m);for(let t=0;t<l.length;t+=1)l[t]&&l[t].m(e,null);P(e,c)},p(s,m){if(m&83){n=R(s[16]);let t;for(t=0;t<n.length;t+=1){const o=ie(s,n,t);l[t]?l[t].p(o,m):(l[t]=re(o),l[t].c(),l[t].m(e,c))}for(;t<l.length;t+=1)l[t].d(1);l.length=n.length}},d(s){s&&g(e),ue(l,s)}}}function we(a){let e,c,n,l,s,m;const t=a[12].default,o=oe(t,a,a[11],null);let f=a[4]&&ae(a);return{c(){e=v("div"),o&&o.c(),c=M(),f&&f.c(),n=$(),this.h()},l(r){e=I(r,"DIV",{id:!0,class:!0});var d=B(e);o&&o.l(d),d.forEach(g),c=b(r),f&&f.l(r),n=$(),this.h()},h(){u(e,"id","slotHolder"),u(e,"class","svelte-1aiohow")},m(r,d){_(r,e,d),o&&o.m(e,null),a[13](e),_(r,c,d),f&&f.m(r,d),_(r,n,d),l=!0,s||(m=[Q(e,"DOMNodeInserted",a[7]),Q(e,"DOMNodeRemoved",a[7])],s=!0)},p(r,[d]){o&&o.p&&(!l||d&2048)&&ge(o,t,r,r[11],l?_e(t,r[11],d,null):he(r[11]),null),r[4]?f?f.p(r,d):(f=ae(r),f.c(),f.m(n.parentNode,n)):f&&(f.d(1),f=null)},i(r){l||(U(o,r),l=!0)},o(r){F(o,r),l=!1},d(r){r&&(g(e),g(c),g(n)),o&&o.d(r),a[13](null),f&&f.d(r),s=!1,de(m)}}}function Ce(a,e,c){let n,{$$slots:l={},$$scope:s}=e,{gap:m=10}=e,{maxColumnWidth:t=250}=e,{hover:o=!1}=e,{loading:f}=e;const r=pe();let d=null,w=[],G=0,C=0;ve(k);function E(h){r("click",{src:h.target.src,alt:h.target.alt,loading:h.target.loading,class:h.target.className})}async function k(){if(await Ie(),!d)return;const h=Array.from(d.childNodes).filter(y=>y.tagName==="IMG");c(4,w=[]);for(let y=0;y<h.length;y++){const D=y%C;c(4,w[D]=[...w[D]||[],{src:h[y].src,alt:h[y].alt,class:h[y].className}],w)}}function T(h){je[h?"unshift":"push"](()=>{d=h,c(3,d)})}function S(){G=this.clientWidth,c(2,G)}return a.$$set=h=>{"gap"in h&&c(8,m=h.gap),"maxColumnWidth"in h&&c(9,t=h.maxColumnWidth),"hover"in h&&c(0,o=h.hover),"loading"in h&&c(1,f=h.loading),"$$scope"in h&&c(11,s=h.$$scope)},a.$$.update=()=>{a.$$.dirty&516&&c(10,C=parseInt(G/t)||1),a.$$.dirty&1024&&C&&k(),a.$$.dirty&1280&&c(5,n=`grid-template-columns: repeat(${C}, 1fr); --gap: ${m}px`)},[o,f,G,d,w,n,E,k,m,t,C,s,l,T,S]}class De extends me{constructor(e){super(),fe(this,e,Ce,we,ne,{gap:8,maxColumnWidth:9,hover:0,loading:1})}}function Ne(a){let e,c,n,l,s,m,t,o,f,r,d,w,G,C,E,k,T,S,h,y,D,N,J,V,H,K,A,W,X,L,q,Y,O,z,Z;return{c(){e=v("img"),n=M(),l=v("img"),m=M(),t=v("img"),f=M(),r=v("img"),w=M(),G=v("img"),E=M(),k=v("img"),S=M(),h=v("img"),D=M(),N=v("img"),V=M(),H=v("img"),A=M(),W=v("img"),L=M(),q=v("img"),O=M(),z=v("img"),this.h()},l(i){e=I(i,"IMG",{src:!0,alt:!0}),n=b(i),l=I(i,"IMG",{src:!0,alt:!0}),m=b(i),t=I(i,"IMG",{src:!0,alt:!0}),f=b(i),r=I(i,"IMG",{src:!0,alt:!0}),w=b(i),G=I(i,"IMG",{src:!0,alt:!0}),E=b(i),k=I(i,"IMG",{src:!0,alt:!0}),S=b(i),h=I(i,"IMG",{src:!0,alt:!0}),D=b(i),N=I(i,"IMG",{src:!0,alt:!0}),V=b(i),H=I(i,"IMG",{src:!0,alt:!0}),A=b(i),W=I(i,"IMG",{src:!0,alt:!0}),L=b(i),q=I(i,"IMG",{src:!0,alt:!0}),O=b(i),z=I(i,"IMG",{src:!0,alt:!0}),this.h()},h(){j(e.src,c="images/1.jpeg")||u(e,"src",c),u(e,"alt","headshot"),j(l.src,s="images/2.jpeg")||u(l,"src",s),u(l,"alt","headshot"),j(t.src,o="images/3.jpeg")||u(t,"src",o),u(t,"alt","headshot"),j(r.src,d="images/4.jpeg")||u(r,"src",d),u(r,"alt","headshot"),j(G.src,C="images/5.jpeg")||u(G,"src",C),u(G,"alt","headshot"),j(k.src,T="images/6.jpeg")||u(k,"src",T),u(k,"alt","headshot"),j(h.src,y="images/7.jpeg")||u(h,"src",y),u(h,"alt","headshot"),j(N.src,J="images/8.jpeg")||u(N,"src",J),u(N,"alt","headshot"),j(H.src,K="images/9.jpeg")||u(H,"src",K),u(H,"alt","headshot"),j(W.src,X="images/10.jpeg")||u(W,"src",X),u(W,"alt","headshot"),j(q.src,Y="images/11.jpeg")||u(q,"src",Y),u(q,"alt","headshot"),j(z.src,Z="images/12.jpeg")||u(z,"src",Z),u(z,"alt","headshot")},m(i,p){_(i,e,p),_(i,n,p),_(i,l,p),_(i,m,p),_(i,t,p),_(i,f,p),_(i,r,p),_(i,w,p),_(i,G,p),_(i,E,p),_(i,k,p),_(i,S,p),_(i,h,p),_(i,D,p),_(i,N,p),_(i,V,p),_(i,H,p),_(i,A,p),_(i,W,p),_(i,L,p),_(i,q,p),_(i,O,p),_(i,z,p)},p:ke,d(i){i&&(g(e),g(n),g(l),g(m),g(t),g(f),g(r),g(w),g(G),g(E),g(k),g(S),g(h),g(D),g(N),g(V),g(H),g(A),g(W),g(L),g(q),g(O),g(z))}}}function He(a){let e,c,n,l,s,m,t=`photos courtesy of
		<a href="https://headshots.shanihadjian.com/" target="_blank">Shani Hadjian Photography</a>`,o;return c=new ye({}),l=new De({props:{$$slots:{default:[Ne]},$$scope:{ctx:a}}}),{c(){e=v("main"),x(c.$$.fragment),n=M(),x(l.$$.fragment),s=M(),m=v("div"),m.innerHTML=t,this.h()},l(f){e=I(f,"MAIN",{class:!0});var r=B(e);ee(c.$$.fragment,r),n=b(r),ee(l.$$.fragment,r),s=b(r),m=I(r,"DIV",{"data-svelte-h":!0}),Ge(m)!=="svelte-z6109o"&&(m.innerHTML=t),r.forEach(g),this.h()},h(){u(e,"class","svelte-1qqv93n")},m(f,r){_(f,e,r),te(c,e,null),P(e,n),te(l,e,null),P(e,s),P(e,m),o=!0},p(f,[r]){const d={};r&1&&(d.$$scope={dirty:r,ctx:f}),l.$set(d)},i(f){o||(U(c.$$.fragment,f),U(l.$$.fragment,f),o=!0)},o(f){F(c.$$.fragment,f),F(l.$$.fragment,f),o=!1},d(f){f&&g(e),le(c),le(l)}}}class Ee extends me{constructor(e){super(),fe(this,e,null,He,ne,{})}}export{Ee as component};