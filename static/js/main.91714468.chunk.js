(this["webpackJsonpodin-memory-game"]=this["webpackJsonpodin-memory-game"]||[]).push([[0],{13:function(e,r,t){},14:function(e,r,t){"use strict";t.r(r);var c=t(0),o=t(1),a=t.n(o),i=t(7),n=t.n(i),s=(t(13),t(5)),d=t(2);var l=function(e){var r=e.card,t=r.src,o=r.title,a=r.backgroundColor,i=r.borderStyle,n=e.handleGameLogic,s={backgroundColor:a,border:i};return Object(c.jsx)("button",{className:"card",style:s,onClick:n.bind(this,o),children:Object(c.jsxs)("figure",{children:[Object(c.jsx)("img",{src:t,alt:o}),Object(c.jsx)("figcaption",{children:o})]})})},b=t.p+"static/media/jimmy.9de95edf.png",g=t.p+"static/media/chuck.8267f639.png",u=t.p+"static/media/tuco.d5a10618.png",j=t.p+"static/media/eladio.d9500e8b.png",p=t.p+"static/media/huell.3c5f8c8b.png",h=t.p+"static/media/bolsa.a0d54a13.png",m=t.p+"static/media/lalo.f3e60d6c.png",x=t.p+"static/media/mike.482a4347.png",O=t.p+"static/media/gustavo.72bc185a.png",f=t.p+"static/media/hector.e0b97c5a.png",S=t.p+"static/media/nacho.fe6bfc3d.png",k=t.p+"static/media/howard.0fe8b882.png";var y=function(e){var r=e.handleGameLogic,t=e.score,a=e.highScore,i=[{src:b,title:"Jimmy",backgroundColor:"rgb(52 52 60)",borderStyle:"1px solid rgb(52 52 60)"},{src:g,title:"Chuck",backgroundColor:"rgb(52 52 60)",borderStyle:"1px solid rgb(52 52 60)"},{src:k,title:"Howard",backgroundColor:"rgb(52 52 60)",borderStyle:"1px solid rgb(52 52 60)"},{src:m,title:"Lalo",backgroundColor:"rgb(52 52 60)",borderStyle:"1px solid rgb(52 52 60)"},{src:O,title:"Gustavo",backgroundColor:"rgb(52 52 60)",borderStyle:"1px solid rgb(52 52 60)"},{src:u,title:"Tuco",backgroundColor:"rgb(52 52 60)",borderStyle:"1px solid rgb(52 52 60)"},{src:S,title:"Nacho",backgroundColor:"rgb(52 52 60)",borderStyle:"1px solid rgb(52 52 60)"},{src:x,title:"Mike",backgroundColor:"rgb(52 52 60)",borderStyle:"1px solid rgb(52 52 60)"},{src:f,title:"Hector",backgroundColor:"rgb(52 52 60)",borderStyle:"1px solid rgb(52 52 60)"},{src:h,title:"Bolsa",backgroundColor:"rgb(52 52 60)",borderStyle:"1px solid rgb(52 52 60)"},{src:j,title:"Eladio",backgroundColor:"rgb(52 52 60)",borderStyle:"1px solid rgb(52 52 60)"},{src:p,title:"Huell",backgroundColor:"rgb(52 52 60)",borderStyle:"1px solid rgb(52 52 60)"}],n=Object(o.useState)(i),y=Object(d.a)(n,2),v=y[0],C=y[1];return Object(o.useEffect)((function(){var e=Object(s.a)(v);!function(e){for(var r=e.length-1;r>0;r--){var t=Math.floor(Math.random()*r),c=[e[r],e[t]];e[t]=c[0],e[r]=c[1]}}(e),C(e)}),[t,a]),Object(c.jsx)(c.Fragment,{children:v.map((function(e){return Object(c.jsx)(l,{card:e,handleGameLogic:r},e.title)}))})};var v=function(e){var r=e.score,t=e.highScore;return Object(c.jsxs)("header",{className:"header",children:[Object(c.jsx)("h1",{className:"main-title",children:"Memory Game"}),Object(c.jsx)("h3",{children:"By Rehan C"}),Object(c.jsxs)("div",{className:"score-board",children:[Object(c.jsxs)("p",{className:"current-score",children:["Score: ",r]}),Object(c.jsxs)("p",{className:"best-score",children:["High Score: ",t]})]})]})};var C=function(){var e=Object(o.useState)(0),r=Object(d.a)(e,2),t=r[0],a=r[1],i=Object(o.useState)(0),n=Object(d.a)(i,2),l=n[0],b=n[1],g=Object(o.useState)([]),u=Object(d.a)(g,2),j=u[0],p=u[1];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(v,{score:t,highScore:l}),Object(c.jsx)("div",{className:"card-container",id:"card-container",children:Object(c.jsx)(y,{handleGameLogic:function(e){j.includes(e)?(b(t),a(0),p([])):(!function(e){p((function(r){return[].concat(Object(s.a)(r),[e])}))}(e),a((function(e){return e+1})))},score:t,highScore:l})})]})};var N=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(C,{})})};n.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(N,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.91714468.chunk.js.map