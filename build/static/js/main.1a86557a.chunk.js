(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},39:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var s=n(0),r=n.n(s),c=n(31),a=n.n(c),i=n(11),o=n(2),j=(n(39),n(1));var l=function(){return Object(j.jsx)("nav",{children:Object(j.jsxs)("ul",{className:"nav-bar",children:[Object(j.jsxs)("div",{className:"tabs",children:[Object(j.jsx)("li",{children:"HOME"}),Object(j.jsx)("a",{href:"https://astroneer.space/dedicatedserver/",children:Object(j.jsx)("li",{children:"OFFICIAL SITE"})}),Object(j.jsx)("li",{children:"MY SERVERS (COMING SOON)"})]}),Object(j.jsxs)("div",{className:"right-items",children:[Object(j.jsx)(i.b,{className:"nav-bar-button",to:"/log-in",children:"Log In"}),Object(j.jsx)(i.b,{className:"nav-bar-button",to:"/sign-up",children:"Sign Up"}),Object(j.jsx)("h1",{children:"ASTRONEER-SERVERS.com"})]})]})})};var u=function(e){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(l,{}),e.children]})},d=n(34),b=n(8),h=n(18),p=n.n(h);n(28);var v=function(e){var t=e.listing,n=Object(s.useState)(!1),r=Object(b.a)(n,2),c=r[0],a=r[1];return Object(j.jsxs)("div",{className:"server-listing",onMouseEnter:function(){a(!0)},onMouseLeave:function(){a(!1)},children:[Object(j.jsx)("div",{className:c?"popup-description-visible":"popup-description-hidden",children:Object(j.jsx)("p",{children:t.server_description})}),Object(j.jsxs)("div",{className:"server-heading",children:[Object(j.jsx)("span",{className:t.server_status?"dot-green":"dot-grey"}),Object(j.jsx)("h2",{children:t.server_name})]}),Object(j.jsxs)("h3",{children:["Owner: ",t.owner_name]}),Object(j.jsxs)("h3",{children:["IP Address: ",t.server_url]})]})};n(29);var O=function(e){var t=e.postServer,n=e.setServerName,s=e.setOwnerName,r=e.setServerUrl,c=e.setServerDescription;return Object(j.jsxs)("form",{onSubmit:t,children:[Object(j.jsx)("h1",{children:"Add a Server"}),Object(j.jsxs)("div",{className:"inputs",children:[Object(j.jsxs)("div",{className:"left-inputs",children:[Object(j.jsx)("input",{onChange:function(e){n(e.target.value)},placeholder:"server name",required:!0}),Object(j.jsx)("input",{onChange:function(e){s(e.target.value)},placeholder:"owner name",required:!0}),Object(j.jsx)("input",{onChange:function(e){r(e.target.value)},placeholder:"server url",required:!0})]}),Object(j.jsx)("div",{className:"right-inputs",children:Object(j.jsx)("textarea",{onChange:function(e){c(e.target.value)},placeholder:"server description...",required:!0})})]}),Object(j.jsx)("input",{type:"submit"})]})},x=n(33),m=n.n(x);n(30);var g=function(e){var t=e.changePage,n=e.pageCount;return Object(j.jsx)(m.a,{previousLabel:"\u2190",nextLabel:"\u2192",pageCount:n,onPageChange:t,containerClassName:"pagination-container",previousLinkClassName:"previous-link",nextLinkClassName:"next-link",disabledClassName:"pagination-disabled",activeClassName:"pagination-active",pageClassName:"pagination-page"})};n(66);var f=function(){var e=Object(s.useState)([]),t=Object(b.a)(e,2),n=t[0],r=t[1],c=Object(s.useState)(""),a=Object(b.a)(c,2),i=a[0],o=a[1],l=Object(s.useState)(""),u=Object(b.a)(l,2),h=u[0],x=u[1],m=Object(s.useState)(""),f=Object(b.a)(m,2),S=f[0],N=f[1],C=Object(s.useState)(""),E=Object(b.a)(C,2),_=E[0],k=E[1],w=Object(s.useState)(0),I=Object(b.a)(w,2),L=I[0],M=I[1],R=12*L,A=n.slice(R,R+12).map((function(e,t){return Object(j.jsx)(v,{listing:e},t)})),q=Math.ceil(n.length/12);return Object(s.useEffect)((function(){p.a.get("https://astroneer-servers.herokuapp.com/api/servers").then((function(e){r(e.data)})).catch((function(e){console.log(e)}))}),[]),Object(j.jsxs)("div",{className:"main-content",children:[Object(j.jsx)("h1",{children:"Joinable Servers"}),A,Object(j.jsx)(g,{pageCount:q,changePage:function(e){var t=e.selected;M(t)}}),Object(j.jsx)(O,{postServer:function(){var e={server_name:i,owner_name:h,server_url:S,server_description:_,server_status:!0};p.a.post("https://astroneer-servers.herokuapp.com/api/servers",e).then((function(t){r([].concat(Object(d.a)(n),[e])),console.log(t.data)})).catch((function(e){console.log(e)}))},setServerName:o,setOwnerName:x,setServerUrl:N,setServerDescription:k})]})};var S=function(){return Object(j.jsx)("div",{children:"This is the Sign Up Component"})};var N=function(){return Object(j.jsx)("div",{children:"This is the Log In Component"})};a.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(i.a,{children:Object(j.jsxs)(u,{children:[Object(j.jsx)(o.a,{exact:!0,path:"/",component:f}),Object(j.jsx)(o.a,{exact:!0,path:"/log-in",component:N}),Object(j.jsx)(o.a,{exact:!0,path:"/sign-up",component:S})]})})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.1a86557a.chunk.js.map