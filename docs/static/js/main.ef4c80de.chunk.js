(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{10:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);n(10);var a=n(9),c=n(2),r=n(1),i=n(0),s=function(e){var t=e.setCategories,n=e.checkList,a=Object(r.useState)(""),s=Object(c.a)(a,2),o=s[0],u=s[1];return Object(i.jsx)("form",{onSubmit:function(e){e.preventDefault(),o.trim().length>3?n(o)?t(o):console.error("La categoria ya se encuentra en la lista"):console.error("La categoria debe tener al menos 3 cataracteres")},children:Object(i.jsxs)("label",{children:[" ","Ingrese nueva categoria:"," ",Object(i.jsx)("input",{type:"text",value:o,onChange:function(e){u(e.target.value)},placeholder:"Gordita"})]})})},o=n(6),u=n.n(o),j=n(7),l=function(){var e=Object(j.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="http://api.giphy.com/v1/gifs/search?api_key=HgIn1e8mcQ17yDMx3tOYIUwntGz8M45n&q=".concat(encodeURI(t)),e.next=3,fetch(n);case 3:return e.next=5,e.sent.json();case 5:return e.abrupt("return",e.sent.data.map((function(e){return{title:e.title,id:e.id,url:e.images.downsized.url}})));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(e){var t=e.category,n=function(e){var t=Object(r.useState)({data:[],loading:!0}),n=Object(c.a)(t,2),a=n[0],i=n[1];return Object(r.useEffect)((function(){l(e).then((function(e){i({data:e,loading:!1})}))}),[e]),a}(t),a=n.loading,s=n.data;return console.log(s),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h3",{children:t}),Object(i.jsx)("div",{className:"animate__animated animate__fadeIn",children:a&&"Cargando.."}),Object(i.jsx)("div",{className:"card-grid",children:s.map((function(e){return Object(i.jsxs)("div",{className:"card",children:[Object(i.jsx)("img",{src:e.url,alt:e.title}),Object(i.jsxs)("p",{children:[" ",e.title]})]},e.id)}))})]})},b=function(){var e=Object(r.useState)(["One Punch"]),t=Object(c.a)(e,2),n=t[0],o=t[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h2",{children:"GifExpertApp"}),Object(i.jsx)("hr",{}),Object(i.jsx)(s,{setCategories:function(e){o([e].concat(Object(a.a)(n)))},checkList:function(e){return!n.includes(e)}}),Object(i.jsx)("hr",{}),n.map((function(e){return Object(i.jsx)(d,{category:e},e)}))]})},p=n(8);n.n(p).a.render(Object(i.jsx)(b,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.ef4c80de.chunk.js.map