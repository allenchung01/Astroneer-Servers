(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},55:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(21),r=n.n(s),i=n(13),o=n(4),u=n(23),l=n(26),j=n(16),d="UPDATE_USER",h={user:null},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(j.a)(Object(j.a)({},e),{},{user:t.payload.user});default:return e}},b=Object(l.a)(p),O=(n(55),n(1));var v=Object(u.b)((function(e){return{user:e.user}}))((function(e){var t=e.user;return console.log(e),Object(O.jsx)("nav",{children:Object(O.jsxs)("ul",{className:"nav-bar",children:[Object(O.jsxs)("div",{className:"tabs",children:[Object(O.jsx)(i.b,{to:"/",children:Object(O.jsx)("li",{children:"HOME"})}),Object(O.jsx)("a",{href:"https://astroneer.space/dedicatedserver/",children:Object(O.jsx)("li",{children:"OFFICIAL SITE"})}),Object(O.jsx)(i.b,{to:"/servers",user:t,children:Object(O.jsx)("li",{children:"MY SERVERS"})})]}),Object(O.jsxs)("div",{className:"right-items",children:[t?Object(O.jsx)("h3",{children:t.email}):null,t?null:Object(O.jsx)(i.b,{className:"nav-bar-button",to:"/log-in",children:"Log In"}),t?null:Object(O.jsx)(i.b,{className:"nav-bar-button",to:"/sign-up",children:"Sign Up"}),Object(O.jsx)(i.b,{className:"nav-bar-title",to:"/",children:"ASTRONEER SERVERS"})]})]})})})),g=n(17),f=(n(60),n(14)),m=n.n(f),x=function(e){return{type:d,payload:e}};if(!g.a.apps.length)try{g.a.initializeApp({apiKey:"AIzaSyDdkkN7jp8H_P2fPLffNRxC3nLnmgYkbwE",authDomain:"astroneer-servers.firebaseapp.com",projectId:"astroneer-servers",storageBucket:"astroneer-servers.appspot.com",messagingSenderId:"1073001617795",appId:"1:1073001617795:web:2e49b84a7d64255d603eb6",measurementId:"G-5P60X3125R"})}catch(D){console.log(D)}g.a.auth().onAuthStateChanged((function(e){console.log("auth state did change"),console.log(e),e?(g.a.auth().currentUser.getIdToken().then((function(e){m.a.defaults.headers.common.Authorization=e})).catch(),b.dispatch(x({user:e}))):(m.a.defaults.headers.common.Authorization=null,b.dispatch(x({user:null})))}));var S=g.a.auth();var C=function(e){return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(v,{}),e.children]})},N=n(5);n(38);var w=function(e){var t=e.listing,n=Object(a.useState)(!1),c=Object(N.a)(n,2),s=c[0],r=c[1];return Object(O.jsxs)("div",{className:"server-listing",onMouseEnter:function(){r(!0)},onMouseLeave:function(){r(!1)},children:[Object(O.jsx)("div",{className:s?"popup-description-visible":"popup-description-hidden",children:Object(O.jsx)("p",{children:t.server_description})}),Object(O.jsxs)("div",{className:"server-heading",children:[Object(O.jsx)("span",{className:t.server_status?"dot-green":"dot-grey"}),Object(O.jsx)("h2",{children:t.server_name})]}),Object(O.jsxs)("h3",{children:["Owner: ",t.owner_name]}),Object(O.jsxs)("h3",{children:["Server URL: ",t.server_url]})]})},k=n(45),y=n(29),E=n.n(y),L=n(43),I=function(){var e=Object(L.a)(E.a.mark((function e(t,n){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:m.a.post("https://astroneer-servers.herokuapp.com/api/servers",t).then((function(e){n(),console.log(e.data)})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();n(39);var A=function(e){var t=e.serverListings,n=e.setServerListings,c=Object(a.useState)(""),s=Object(N.a)(c,2),r=s[0],i=s[1],o=Object(a.useState)(""),u=Object(N.a)(o,2),l=u[0],j=u[1],d=Object(a.useState)(""),h=Object(N.a)(d,2),p=h[0],b=h[1],v=Object(a.useState)(""),g=Object(N.a)(v,2),f=g[0],m=g[1];return Object(O.jsxs)("form",{children:[Object(O.jsx)("h1",{children:"Add a Server"}),Object(O.jsxs)("div",{className:"inputs",children:[Object(O.jsxs)("div",{className:"left-inputs",children:[Object(O.jsx)("input",{onChange:function(e){i(e.target.value)},placeholder:"server name",required:!0}),Object(O.jsx)("input",{onChange:function(e){j(e.target.value)},placeholder:"owner name",required:!0}),Object(O.jsx)("input",{onChange:function(e){b(e.target.value)},placeholder:"server url",required:!0})]}),Object(O.jsx)("div",{className:"right-inputs",children:Object(O.jsx)("textarea",{onChange:function(e){m(e.target.value)},placeholder:"server description...",required:!0})})]}),Object(O.jsx)("input",{type:"button",onClick:function(){var e={server_name:r,owner_name:l,server_url:p,server_description:f,server_status:!0};I(e,(function(){n([].concat(Object(k.a)(t),[e]))}))},value:"Add Server"})]})},_=n(44),P=n.n(_);n(40);var R=function(e){var t=e.changePage,n=e.pageCount;return Object(O.jsx)(P.a,{previousLabel:"\u2190",nextLabel:"\u2192",pageCount:n,onPageChange:t,containerClassName:"pagination-container",previousLinkClassName:"previous-link",nextLinkClassName:"next-link",disabledClassName:"pagination-disabled",activeClassName:"pagination-active",pageClassName:"pagination-page"})},U=(n(81),function(){S.signOut().then((function(){console.log("Signed Out")})).catch((function(e){console.log(e)}))});var M=function(){var e=Object(a.useState)([]),t=Object(N.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(0),r=Object(N.a)(s,2),i=r[0],o=r[1],u=12*i,l=n.slice(u,u+12).map((function(e,t){return Object(O.jsx)(w,{listing:e},t)})),j=Math.ceil(n.length/12);return Object(a.useEffect)((function(){!function(e){m.a.get("https://astroneer-servers.herokuapp.com/api/servers").then((function(t){e(t.data)})).catch((function(e){console.log(e)}))}(c)}),[]),Object(O.jsxs)("div",{className:"main-content",children:[Object(O.jsx)("h1",{children:"Joinable Servers"}),l,Object(O.jsx)(R,{pageCount:j,changePage:function(e){var t=e.selected;o(t)}}),Object(O.jsx)(A,{serverListings:n,setServerListings:c}),Object(O.jsx)("h1",{children:"Log Out"}),Object(O.jsx)("input",{type:"button",onClick:U,value:"Sign Out"})]})};n(41);var q=function(){var e=Object(a.useState)(""),t=Object(N.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),r=Object(N.a)(s,2),i=r[0],u=r[1],l=Object(a.useState)(""),j=Object(N.a)(l,2),d=j[0],h=j[1],p=Object(a.useState)(""),b=Object(N.a)(p,2),v=b[0],g=b[1],f=Object(o.e)();return Object(O.jsx)("div",{className:"log-in-page",children:Object(O.jsxs)("form",{children:[Object(O.jsx)("h1",{children:"Sign Up"}),Object(O.jsx)("input",{type:"email",placeholder:"email",onChange:function(e){c(e.target.value)},autoComplete:"email"}),Object(O.jsx)("input",{type:"password",placeholder:"password",onChange:function(e){u(e.target.value)},autoComplete:"new-password"}),Object(O.jsx)("input",{type:"password",placeholder:"confirm password",onChange:function(e){h(e.target.value)},autoComplete:"new-password"}),v?Object(O.jsx)("h3",{className:"error-message",children:v}):null,Object(O.jsx)("input",{type:"button",onClick:function(){i===d?function(e,t,n){S.createUserWithEmailAndPassword(e,t).then((function(e){n()})).catch((function(e){n(e)}))}(n,i,(function(e){e?g(e.message):f.push("/")})):g("Passwords do not match.")},value:"Sign Up"})]})})};var z=function(){var e=Object(a.useState)(""),t=Object(N.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),r=Object(N.a)(s,2),i=r[0],u=r[1],l=Object(a.useState)(""),j=Object(N.a)(l,2),d=j[0],h=j[1],p=Object(o.e)();return Object(O.jsx)("div",{className:"log-in-page",children:Object(O.jsxs)("form",{children:[Object(O.jsx)("h1",{children:"Log In"}),Object(O.jsx)("input",{placeholder:"email",onChange:function(e){c(e.target.value)},autoComplete:"email"}),Object(O.jsx)("input",{type:"password",placeholder:"password",onChange:function(e){u(e.target.value)},autoComplete:"current-password"}),d?Object(O.jsx)("h3",{className:"error-message",children:d}):null,Object(O.jsx)("input",{type:"button",onClick:function(){!function(e,t,n){S.signInWithEmailAndPassword(e,t).then((function(e){n()})).catch((function(e){n(e)}))}(n,i,(function(e){e?h(e.message):p.push("/")}))},value:"Log In"})]})})};var T=function(e){var t,n,c=e.user,s=Object(a.useState)([]),r=Object(N.a)(s,2),i=r[0],o=r[1];return Object(a.useEffect)((t=c,n=function(e){o(e)},void m.a.get("https://astroneer-servers.herokuapp.com/api/servers".concat(t)).then((function(e){n(e.data)})).catch((function(e){console.log(e)}))),[]),Object(O.jsx)("div",{children:i.map((function(e){}))})};r.a.render(Object(O.jsx)(u.a,{store:b,children:Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(i.a,{children:Object(O.jsxs)(C,{children:[Object(O.jsx)(o.a,{exact:!0,path:"/",component:M}),Object(O.jsx)(o.a,{exact:!0,path:"/log-in",component:z}),Object(O.jsx)(o.a,{exact:!0,path:"/sign-up",component:q}),Object(O.jsx)(o.a,{exact:!0,path:"/servers",component:T})]})})})}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.675fbc32.chunk.js.map