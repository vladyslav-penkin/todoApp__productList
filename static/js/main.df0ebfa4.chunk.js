(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c,o=n(9),l=n.n(o),r=n(4),s=n(8),i=n(2),a=n(1),u=n.n(a),d=n(3),b=n.n(d),j=(n(14),[{id:1,title:"Apple",selected:!1,colorId:1},{id:2,title:"Orange",selected:!1,colorId:1},{id:3,title:"Steak",selected:!1,colorId:2},{id:4,title:"Potato",selected:!1,colorId:3},{id:5,title:"Stawberry",selected:!1,colorId:2}]),f=[{id:1,color:"red"},{id:2,color:"blue"},{id:3,color:"green"}],h=(n(15),n(16),n(0)),O=u.a.memo((function(e){var t=e.product,n=e.colors,c=e.onDelete,o=e.onRename,l=e.onSelect,r=t.currentColor,s=t.selected,u=Object(a.useState)(t.title),d=Object(i.a)(u,2),j=d[0],f=d[1],O=Object(a.useState)(t.colorId.toString()),m=Object(i.a)(O,2),p=m[0],x=m[1],N=Object(a.useState)(!1),S=Object(i.a)(N,2),g=S[0],_=S[1],v=Object(a.useState)(!1),T=Object(i.a)(v,2),y=T[0],I=T[1],C=Object(a.useState)(!1),E=Object(i.a)(C,2),A=E[0],k=E[1],w=y&&j.length<1,B=A&&p.length<1;return Object(a.useEffect)((function(){f(t.title),x(t.colorId.toString())}),[t]),Object(h.jsx)("article",{"data-id":t.id,className:"TodoInfo",children:g?Object(h.jsx)("form",{onSubmit:function(e){e.preventDefault(),j.length>0&&p.length>0?(o(t.id,j,Number(p)),_((function(e){return!e})),f(""),x(""),I(!1),k(!1)):(I(!0),k(!0))},method:"GET",action:"/api/users",className:"TodoInfo-submitForm",children:Object(h.jsxs)("article",{className:"TodoInfo-edit",children:[Object(h.jsxs)("section",{className:"TodoInfo-edit__section",children:[Object(h.jsx)("input",{className:b()("TodoInfo-edit__input","form-control",{"error-border":w}),type:"text",value:j,onChange:function(e){f(e.target.value)},onBlur:function(){return I(!0)},maxLength:15}),Object(h.jsxs)("select",{className:b()("TodoInfo-edit__select","form-control",{"error-border":B}),value:p,onChange:function(e){x(e.target.value)},onBlur:function(){return k(!0)},children:[Object(h.jsx)("option",{value:"",disabled:!0,children:"Choose a color"}),n.map((function(e){return Object(h.jsx)("option",{value:e.id,children:e.color},e.id)}))]})]}),Object(h.jsx)("button",{type:"submit",className:"btn btn-outline-success btn-success-submit",children:"\u2713"})]})}):Object(h.jsxs)("section",{className:"TodoInfo-section",children:[Object(h.jsxs)("section",{className:"TodoInfo__checkbox-section",children:[Object(h.jsx)("input",{type:"checkbox",className:"btn-check",id:"$btn-check-".concat(t.id,"-outlined"),onClick:function(){l(t.id,!s)},checked:s}),Object(h.jsx)("label",{className:"btn btn-outline-success btn-success-check",htmlFor:"$btn-check-".concat(t.id,"-outlined"),children:"\u2713"}),Object(h.jsx)("h2",{className:b()("TodoInfo__title",{"TodoInfo__title-selected":s}),style:r&&{color:r.color},children:t.title})]}),Object(h.jsxs)("section",{children:[Object(h.jsx)("button",{type:"button",className:"btn btn-outline-danger",onClick:function(){return c(t.id)},children:"\u2715"}),!s&&Object(h.jsx)("button",{type:"button",className:"btn btn-outline-warning",onClick:function(){return _((function(e){return!e}))},children:"\u270e"})]})]})},t.id)})),m=(n(18),n(19),function(e){var t=e.products,n=e.sortBySelect,c=e.showAll,o=Object(a.useState)(!1),l=Object(i.a)(o,2),r=l[0],s=l[1],u=Object(a.useState)(!1),d=Object(i.a)(u,2),b=d[0],j=d[1],f=t.filter((function(e){return e.selected}));return Object(h.jsxs)("article",{className:"TodoFilter",children:[Object(h.jsx)("button",{type:"button",className:"TodoFilter__toggler",onClick:function(){return s((function(e){return!e}))},children:"filter settings \u2710"}),r&&Object(h.jsxs)("section",{className:"TodoFilter__sectionList",children:[Object(h.jsx)("button",{type:"button",className:"btn btn-outline-success TodoFilter__button",onClick:function(){n(),j(!0)},disabled:f.length<1||t.length===f.length,children:"Show selected"}),Object(h.jsx)("button",{type:"button",className:"btn btn-outline-success TodoFilter__button",onClick:function(){c(),j(!1)},disabled:!b,children:"Show All"})]})]})}),p=function(e){var t=e.products,n=e.changeAll,c=e.sortBySelect,o=e.showAll,l=Object(a.useState)(t),r=Object(i.a)(l,2),s=r[0],u=r[1],d=s.filter((function(e){return e.selected}));return Object(a.useEffect)((function(){u(t.filter((function(e){return!0===e.selected})))}),[t]),Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("article",{className:"TodoSelect",children:[Object(h.jsxs)("section",{className:"TodoSelect__section",children:[Object(h.jsxs)("section",{className:"TodoSelect__selectButtons",children:[Object(h.jsx)("button",{type:"button",className:"btn btn-outline-success",onClick:function(){return n(!0)},disabled:d.length===t.length,children:"Select All"}),Object(h.jsx)("button",{type:"button",className:"btn btn-outline-danger",onClick:function(){return n(!1)},disabled:d.length<1,children:"Remove select"})]}),Object(h.jsx)("p",{className:b()("TodoSelect__title",{"TodoSelect__title--selected":s.length}),children:"Selected items: ".concat(s.length)})]}),Object(h.jsx)(m,{products:t,sortBySelect:c,showAll:o})]})})},x=u.a.memo((function(e){var t=e.products,n=e.colors,c=e.onDelete,o=e.onRename,l=e.onSelect,r=e.changeAll,s=e.sortBySelect,i=e.showAll;return Object(h.jsxs)("section",{className:"TodoList",children:[Object(h.jsx)(p,{products:t,changeAll:r,sortBySelect:s,showAll:i}),t.map((function(e){return Object(h.jsx)(O,{product:e,colors:n,onDelete:c,onRename:o,onSelect:l},e.id)}))]})}));!function(e){e[e.SELECTED=0]="SELECTED",e[e.NONE=1]="NONE"}(c||(c={}));var N=function(){var e=Object(a.useState)(j),t=Object(i.a)(e,2),n=t[0],o=t[1],l=Object(a.useState)(""),u=Object(i.a)(l,2),d=u[0],O=u[1],m=Object(a.useState)(""),p=Object(i.a)(m,2),N=p[0],S=p[1],g=Object(a.useState)(!1),_=Object(i.a)(g,2),v=_[0],T=_[1],y=Object(a.useState)(!1),I=Object(i.a)(y,2),C=I[0],E=I[1],A=Object(a.useState)(c.NONE),k=Object(i.a)(A,2),w=k[0],B=k[1],D=v&&d.length<1,F=C&&N.length<1,L=function(e){return f.find((function(t){return t.id===e}))||void 0},R=function(e,t){var n=e.map((function(e){return Object(r.a)(Object(r.a)({},e),{},{currentColor:L(e.colorId)})}));return t===c.SELECTED?n.filter((function(e){return e.selected})):n}(n,w);return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)("form",{className:"App__form form",onSubmit:function(e){e.preventDefault();var t={id:Math.max.apply(Math,Object(s.a)(n.map((function(e){return e.id}))))+1,title:d,selected:!1,colorId:Number(N),color:L(Number(N))};d.length>0&&N.length>0?(o((function(e){return[].concat(Object(s.a)(e),[t])})),O(""),S(""),T(!1),E(!1)):(T(!0),E(!0))},action:"/api/users",method:"POST",children:[Object(h.jsx)("h1",{className:"App__title",children:"Add todo form"}),D&&Object(h.jsx)("span",{className:"error",children:"Please enter a title"}),Object(h.jsx)("div",{className:"field",children:Object(h.jsx)("input",{className:b()("form__textInput","form-control",{"error-border":D}),type:"text","data-cy":"titleInput",value:d,onChange:function(e){O(e.target.value)},onBlur:function(){return T(!0)},placeholder:"Enter a title",maxLength:15})}),F&&Object(h.jsx)("span",{className:"error",children:"Please choose a color"}),Object(h.jsx)("div",{className:"field",children:Object(h.jsxs)("select",{className:b()("form__selectColor","form-control",{"error-border":F}),"data-cy":"userSelect",value:N,onChange:function(e){S(e.target.value)},onBlur:function(){return E(!0)},children:[Object(h.jsx)("option",{value:"",disabled:!0,children:"Choose a color"}),f.map((function(e){return Object(h.jsx)("option",{value:e.id,children:e.color},e.id)}))]})}),Object(h.jsx)("button",{type:"submit","data-cy":"submitButton",className:"btn btn-warning btn-todoAdd",children:"Add"})]}),Object(h.jsx)(x,{products:R,colors:f,onDelete:function(e){o((function(t){return t.filter((function(t){return t.id!==e}))}))},onRename:function(e,t,n){o((function(c){return c.map((function(c){return c.id!==e?c:Object(r.a)(Object(r.a)({},c),{},{title:t,colorId:n})}))}))},onSelect:function(e,t){o((function(n){return n.map((function(n){return n.id!==e?n:Object(r.a)(Object(r.a)({},n),{},{selected:t})}))}))},changeAll:function(e){o((function(t){return t.map((function(t){return Object(r.a)(Object(r.a)({},t),{},{selected:e})}))}))},sortBySelect:function(){B(c.SELECTED)},showAll:function(){B(c.NONE)}})]})};l.a.render(Object(h.jsx)(N,{}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.df0ebfa4.chunk.js.map