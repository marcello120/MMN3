(this.webpackJsonpMMN3=this.webpackJsonpMMN3||[]).push([[0],{104:function(e,t,n){},105:function(e,t,n){},139:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(25),s=n.n(r),o=(n(104),n(105),n(62)),i=n(20),l=n(6),u=n(22),j=n(1),b=n.n(j),d=n(7),f=n(12),O=n(98),h=n(146),m=n(153),x=n(147),v=n(99),p=n(149),g=n(2),y=function(e){var t=Object(c.useState)(e.votes),n=Object(f.a)(t,2),a=n[0],r=n[1];Object(c.useEffect)((function(){r(e.votes)}),[e.votes]);var s=function(){return a.includes(e.username)},o=Object(g.jsx)(O.a,{id:"popover-basic",children:Object(g.jsx)(O.a.Body,{children:Object(g.jsx)("label",{children:a.map((function(e,t){return Object(g.jsxs)("div",{children:[" ",e," "]},t)}))})})});return Object(g.jsx)(h.a,{className:"d-flex justify-content-center",children:Object(g.jsx)(m.a,{className:"m-1 ",style:s()?{width:"18rem",backgroundColor:"rgba(63, 127, 191, 0.3)"}:{width:"18rem"},children:Object(g.jsxs)(m.a.Body,{children:[Object(g.jsxs)(m.a.Title,{style:{width:"12rem"},children:["  ",e.title]}),Object(g.jsx)(x.a,{className:"m-3 position-absolute top-0 end-0",type:"checkbox",id:"button"+e.index,value:e.index,variant:"outline-primary",checked:s(),onChange:function(t){e.onVote(a,e.title)},children:"I'm in"},e.index),Object(g.jsx)(m.a.Subtitle,{className:"mb-2",children:e.recBy}),(e.recBy===e.username||"Admin"===e.username)&&Object(g.jsx)(v.a,{onClick:function(){return e.onDelete(e.title)},variant:"danger",children:" Delete "}),Object(g.jsx)(p.a,{placement:"right",trigger:"click",overlay:o,children:Object(g.jsxs)(v.a,{className:"float-end",variant:"success",children:[a.length," Votes "]})})]})})})};y.defaultProps={title:"Film_Title",recBy:"person",votes:["unos","dos","tres"]};var k=y,N=n(152),w=function(e){return console.log(e.scroll),Object(g.jsx)(N.a,{bg:"dark",variant:"dark",className:"mb-3",children:Object(g.jsxs)(h.a,{children:[Object(g.jsxs)(N.a.Brand,{children:[Object(g.jsxs)("div",{className:"m-2",children:[e.username," egy buzi!"]}),Object(g.jsx)(N.a.Toggle,{})]}),Object(g.jsx)(N.a.Collapse,{className:"justify-content-end",children:Object(g.jsxs)(N.a.Text,{children:[Object(g.jsx)(x.a,{style:{color:"white"},className:"me-3",type:"checkbox",id:"scroll1",value:e.scroll,variant:"outline-primary",checked:e.scroll,onChange:function(){return e.setScroll()},children:"Scroll"},"scroll"),Object(g.jsx)(v.a,{className:"justify-content-end",variant:"danger",onClick:function(){return e.logOut()},children:"Log out"})]})})]})})},S=n(148),M=n(95),B=n(150),C=n(151),D=n(91),I=n(18),A=(Object(D.a)({apiKey:"AIzaSyAyYG92saRTL1omZpd7sq9i405fjaGzfn0",authDomain:"mulatosmovienight.firebaseapp.com",projectId:"mulatosmovienight",storageBucket:"mulatosmovienight.appspot.com",messagingSenderId:"1021226279349",appId:"1:1021226279349:web:1a7d5ac7c13d382b52b9fc"}),Object(I.f)()),F=function(e){var t=Object(c.useState)(e.votes),n=Object(f.a)(t,2),a=n[0],r=n[1];Object(c.useEffect)((function(){r(e.votes)}),[e.votes]);var s=Object(g.jsx)(O.a,{id:"popover-basic",children:Object(g.jsx)(O.a.Body,{children:Object(g.jsx)("label",{children:a.map((function(e,t){return Object(g.jsxs)("div",{children:[" ",e," "]},t)}))})})}),o=function(){return a.includes(e.username)};return Object(g.jsx)(h.a,{className:"d-flex justify-content-center",children:Object(g.jsx)(m.a,{style:o()?{width:"18rem",backgroundColor:"rgba(63, 127, 191, 0.3)"}:{width:"18rem"},className:"m-1 ",children:Object(g.jsxs)(m.a.Body,{children:[Object(g.jsxs)(m.a.Title,{children:[e.title,"                     ",Object(g.jsx)(x.a,{className:"mb-6 float-end",type:"checkbox",id:"button"+e.index,value:e.index,variant:"outline-primary",checked:o(),onChange:function(t){e.onVote(a,e.title)},children:"I'm in"},e.index)]}),Object(g.jsx)(m.a.Subtitle,{className:"mb-2",children:e.recBy}),(e.recBy===e.username||"Admin"===e.username)&&Object(g.jsx)(v.a,{onClick:function(){return e.onDelete(e.title)},variant:"danger",children:" Delete "}),Object(g.jsx)(p.a,{placement:"right",trigger:"click",overlay:s,children:Object(g.jsxs)(v.a,{className:"float-end",variant:"success",children:[a.length," Votes "]})})]})})})};F.defaultProps={title:"Date_Title",date:new Date,recBy:"person",votes:["unos","dos","tres"]};var T=F,E=n(92),H=n.n(E),L=function(){var e=Object(c.useState)(!1),t=Object(f.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),s=Object(f.a)(r,2),o=s[0],j=s[1],O=Object(c.useState)(""),m=Object(f.a)(O,2),x=m[0],p=m[1],y=Object(c.useState)((function(){var e=new Date;return e.setHours(19),e.setMinutes(0),console.log(e),e})),N=Object(f.a)(y,2),D=N[0],F=N[1],E=Object(c.useState)(localStorage.getItem("MMNusername")),L=Object(f.a)(E,2),G=L[0],P=(L[1],Object(c.useState)([])),V=Object(f.a)(P,2),z=V[0],J=V[1],W=Object(c.useState)([]),_=Object(f.a)(W,2),q=_[0],K=_[1],R=Object(c.useState)([]),Y=Object(f.a)(R,2),Z=Y[0],Q=Y[1],U=Object(c.useState)([]),X=Object(f.a)(U,2),$=X[0],ee=X[1],te=Object(c.useState)(!1),ne=Object(f.a)(te,2),ce=ne[0],ae=ne[1],re=Object(c.useState)((function(){var e=new Date;return e.setHours(19),e.setMinutes(0),console.log(e),e})),se=Object(f.a)(re,2),oe=se[0],ie=se[1],le=function(){p(""),a(!1)},ue=function(){var e=new Date;return e.setHours(19),e.setMinutes(0),e.setMilliseconds(0),console.log(e),e},je=function(){var e=Object(d.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!x||void 0===x||" "===x){e.next=13;break}if(!z.some((function(e){return e.title===x}))){e.next=5;break}alert("Film already on list"),e.next=11;break;case 5:return t=Object(I.d)(A,"films",x),n={recBy:G,votes:[G]},e.next=9,Object(I.j)(t,n);case 9:p(""),a(!1);case 11:e.next=14;break;case 13:alert("enter film name or cancel");case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),be=function(){var e=Object(d.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!x||void 0===x||" "===x){e.next=11;break}if(!z.some((function(e){return e.title===x}))){e.next=5;break}alert("Film already on list"),e.next=9;break;case 5:return t=Object(I.d)(A,"films",x),n={recBy:G,votes:[G]},e.next=9,Object(I.j)(t,n);case 9:e.next=12;break;case 11:alert("enter film name or cancel");case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),de=function(){F(ue()),ie(ue()),j(!1)},fe=function(){var e=Object(d.a)(b.a.mark((function e(){var t,n,c,a,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!D||void 0===D){e.next=18;break}if(t=D.toLocaleString("default",{month:"short"}),n=D.toLocaleString("default",{weekday:"short"}),c=t+" "+D.getDate()+" ("+n+") "+D.getHours()+":"+(D.getMinutes()<10?"0":"")+D.getMinutes(),console.log(c),!Z.some((function(e){return e.title===c}))){e.next=9;break}alert("Date already on list"),e.next=16;break;case 9:return a=Object(I.d)(A,"dates",c),r={recBy:G,votes:[G],date:D},e.next=13,Object(I.j)(a,r);case 13:F(ue()),ie(ue()),j(!1);case 16:e.next=19;break;case 18:alert("enter correct Date or cancel");case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Oe=function(){var e=Object(d.a)(b.a.mark((function e(){var t,n,c,a,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!D||void 0===D){e.next=15;break}if(t=D.toLocaleString("default",{month:"short"}),n=D.toLocaleString("default",{weekday:"short"}),c=t+" "+D.getDate()+" ("+n+") "+D.getHours()+":"+(D.getMinutes()<10?"0":"")+D.getMinutes(),console.log(c),!Z.some((function(e){return e.title===c}))){e.next=9;break}alert("Date already on list"),e.next=13;break;case 9:return a=Object(I.d)(A,"dates",c),r={recBy:G,votes:[G],date:D},e.next=13,Object(I.j)(a,r);case 13:e.next=16;break;case 15:alert("enter correct Date or cancel");case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),he=function(){var e=Object(d.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t||void 0===t||" "===t){e.next=6;break}return n=Object(I.d)(A,"films",t),e.next=4,Object(I.c)(n);case 4:e.next=7;break;case 6:alert("Problem deleting");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),me=function(){var e=Object(d.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t||void 0===t||" "===t){e.next=6;break}return n=Object(I.d)(A,"dates",t),e.next=4,Object(I.c)(n);case 4:e.next=7;break;case 6:alert("Problem deleting");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),xe=function(){var e=Object(d.a)(b.a.mark((function e(t,n){var c,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.includes(G)){e.next=6;break}return c=Object(I.d)(A,"films",n),e.next=4,Object(I.k)(c,{votes:Object(I.a)(G)});case 4:e.next=9;break;case 6:return a=Object(I.d)(A,"films",n),e.next=9,Object(I.k)(a,{votes:[].concat(Object(u.a)(t),[G])});case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),ve=function(){var e=Object(d.a)(b.a.mark((function e(t,n){var c,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.includes(G)){e.next=6;break}return c=Object(I.d)(A,"dates",n),e.next=4,Object(I.k)(c,{votes:Object(I.a)(G)});case 4:e.next=9;break;case 6:return a=Object(I.d)(A,"dates",n),e.next=9,Object(I.k)(a,{votes:[].concat(Object(u.a)(t),[G])});case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),pe=Object(i.e)(),ge=Object(c.useCallback)((function(){return pe.push("/")}),[pe]);Object(c.useEffect)((function(){var e=function(){var e=Object(d.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=localStorage.getItem("MMNusername"),console.log(t),t?console.log("Auth success"):(console.log("Auth fail"),ge());case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(c.useEffect)((function(){return Object(I.g)(Object(I.b)(A,"films"),(function(e){var t=e.docs.map((function(e){return Object(l.a)(Object(l.a)({},e.data()),{},{title:e.id})}));J(t);var n=Object(u.a)(t),c=Math.max.apply(Math,n.map((function(e){return e.votes.length}))),a=n.filter((function(e){return e.votes.length===c}));K(a)}))}),[]),Object(c.useEffect)((function(){var e=Object(I.i)(Object(I.b)(A,"dates"),Object(I.h)("date"));return Object(I.g)(e,(function(e){var t=e.docs.map((function(e){return Object(l.a)(Object(l.a)({},e.data()),{},{title:e.id})}));if(Q(t),t){var n=Object(u.a)(t),c=Math.max.apply(Math,n.map((function(e){return e.votes.length}))),a=n.filter((function(e){return e.votes.length===c}));ee(a)}}))}),[]);var ye=function(){return ce?{maxHeight:"70vh"}:{}};return Object(g.jsxs)(h.a,{children:[Object(g.jsx)(w,{username:G,setScroll:function(){return ae(!ce)},scroll:ce,logOut:function(){localStorage.removeItem("MMNusername"),ge()}}),Object(g.jsxs)(S.a,{children:[Object(g.jsxs)(M.a,{children:[Object(g.jsx)("div",{className:"text-center mb-2",children:Object(g.jsx)(v.a,{className:" btn-lg btn-block",variant:"success",onClick:function(){return j(!0)},children:" Add Time"})}),Object(g.jsx)("div",{className:"text-center mb-1",children:Object(g.jsx)("div",{className:"border border-success",style:{display:"inline-block"},children:$.slice(0,3).map((function(e,t){return Object(g.jsxs)("h4",{children:[e.title," "]},e.title)}))})}),Object(g.jsx)(h.a,{className:"overflow-auto",style:ye(),children:Z.map((function(e,t){return Object(g.jsx)(T,{className:"border border-primary",onVote:ve,onDelete:me,index:e.title,title:e.title,recBy:e.recBy,votes:e.votes,username:G},t)}))})]}),Object(g.jsxs)(M.a,{children:[Object(g.jsx)("div",{className:"text-center mb-2",children:Object(g.jsx)(v.a,{className:" btn-lg btn-block",variant:"success",onClick:function(){return a(!0)},children:" Add Film"})}),Object(g.jsx)("div",{className:"text-center mb-1",children:Object(g.jsx)("div",{className:"border border-success",style:{display:"inline-block"},children:q.slice(0,3).map((function(e,t){return Object(g.jsxs)("h4",{children:[e.title," "]},e.title)}))})}),Object(g.jsx)(h.a,{className:"overflow-auto",style:ye(),children:z.map((function(e,t){return Object(g.jsx)(k,{className:"border border-primary",onVote:xe,onDelete:he,index:e.title,title:e.title,recBy:e.recBy,votes:e.votes,username:G},t)}))})]})]}),Object(g.jsxs)(B.a,{show:n,onHide:le,children:[Object(g.jsx)(B.a.Header,{closeButton:!0,children:Object(g.jsx)(B.a.Title,{children:"Add Film"})}),Object(g.jsx)(B.a.Body,{children:Object(g.jsx)(C.a,{children:Object(g.jsxs)(C.a.Group,{className:"mb-3",controlId:"formGroupFilm",children:[Object(g.jsx)(C.a.Label,{children:"Enter Film Name:"}),Object(g.jsx)(C.a.Control,{autoComplete:"off",onChange:function(e){return p(e.target.value)},type:"text",placeholder:"What are we watching?"})]})})}),Object(g.jsx)(B.a.Footer,{children:Object(g.jsxs)(h.a,{children:[Object(g.jsx)(v.a,{className:"float-start ",variant:"light",onClick:be,children:"Add Another"}),Object(g.jsx)(v.a,{variant:"primary",className:"float-end ms-3",onClick:je,children:"Slap it on!"}),Object(g.jsx)(v.a,{variant:"secondary",className:"float-end ",onClick:le,children:"Back"})]})})]}),Object(g.jsxs)(B.a,{show:o,onHide:de,children:[Object(g.jsx)(B.a.Header,{closeButton:!0,children:Object(g.jsx)(B.a.Title,{children:"Add Date"})}),Object(g.jsx)(B.a.Body,{children:Object(g.jsx)(C.a,{children:Object(g.jsxs)(C.a.Group,{className:"mb-3",controlId:"formGroupDate",children:[Object(g.jsx)(C.a.Label,{children:"Enter New Date:"}),Object(g.jsx)(h.a,{children:Object(g.jsx)(H.a,{style:{color:"red"},onChange:function(e){return function(e){console.log(e),e&&e.type||(console.log("hello"),ie(e),F(e))}(e)},value:oe})})]})})}),Object(g.jsx)(B.a.Footer,{children:Object(g.jsxs)(h.a,{children:[Object(g.jsx)(v.a,{className:"float-start ",variant:"light",onClick:Oe,children:"Add Another"}),Object(g.jsx)(v.a,{variant:"primary",className:"float-end ms-3",onClick:fe,children:"Slap it on!"}),Object(g.jsx)(v.a,{variant:"secondary",className:"float-end ",onClick:de,children:"Back"})]})})]})]})},G=n(97),P=function(e){var t=Object(c.useState)([]),n=Object(f.a)(t,2),a=n[0],r=n[1],s=Object(i.e)(),o=Object(c.useCallback)((function(){return s.push("/page")}),[s]);Object(c.useEffect)((function(){var e=function(){var e=Object(d.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=localStorage.getItem("MMNusername"),console.log(t),t&&void 0!==t&&""!==t?(console.log("Auth success"),o()):console.log("Auth fail");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return e()}),[]),Object(c.useEffect)((function(){return l()}),[]);var l=function(){var e=Object(d.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(I.d)(A,"users","users"),e.next=3,Object(I.e)(t);case 3:(n=e.sent).exists()&&(console.log(n.data().users),r(n.data().users));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=Object(c.useState)(localStorage.getItem("username")),j=Object(f.a)(u,2),O=(j[0],j[1],Object(c.useState)("")),m=Object(f.a)(O,2),x=m[0],p=m[1];return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(h.a,{children:Object(g.jsxs)(C.a,{onSubmit:function(e){x&&""!==x&&void 0!==x?(localStorage.setItem("MMNusername",x),p(localStorage.getItem("MMNusername")),o()):(e.preventDefault(),alert("Who are you?"))},children:[Object(g.jsx)("div",{className:"m-3",children:Object(g.jsx)(G.a,{controlId:"floatingSelect",label:"Choose your fighter!",children:Object(g.jsxs)(C.a.Select,{"aria-label":"Floating label select example",onChange:function(e){return p(e.target.value)},children:[Object(g.jsx)("option",{}),a.map((function(e,t){return Object(g.jsxs)("option",{value:e,children:[" ",e," "]},t)}))]})})}),Object(g.jsx)(v.a,{className:"m-3",variant:"success",type:"submit",children:"Give me the blood!"})," "]})})})};n(137);var V=function(){return Object(g.jsxs)(o.a,{children:[Object(g.jsx)(i.a,{path:"/",exact:!0,render:function(e){return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(P,{})})}}),Object(g.jsx)(i.a,{path:"/page",component:L})]})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,154)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(V,{})}),document.getElementById("root")),z()}},[[139,1,2]]]);
//# sourceMappingURL=main.7e193ca2.chunk.js.map