(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c,o=n(9),r=n.n(o),l=n(4),s=n(8),i=n(2),a=n(1),u=n.n(a),d=n(3),b=n.n(d),j=(n(14),[{id:1,title:"Apple",selected:!1,colorId:1},{id:2,title:"Orange",selected:!1,colorId:1},{id:3,title:"Steak",selected:!1,colorId:2},{id:4,title:"Potato",selected:!1,colorId:3},{id:5,title:"Stawberry",selected:!1,colorId:2}]),f=[{id:1,color:"red"},{id:2,color:"blue"},{id:3,color:"green"}],O=(n(15),n(16),Object(a.createContext)({product:{id:0,title:"",selected:!1,colorId:0,currentColor:{id:0,color:""}},colors:[]})),h=Object(a.createContext)({products:[],colors:[],onDelete:function(){},onRename:function(){},onSelect:function(){},changeAll:function(){},sortBySelect:function(){},showAll:function(){}}),m=n(0),x=u.a.memo((function(){var e=Object(a.useContext)(O),t=e.product,n=e.colors,c=t.id,o=t.title,r=t.selected,l=t.colorId,s=t.currentColor,u=Object(a.useContext)(h),d=u.onDelete,j=u.onRename,f=u.onSelect,x=Object(a.useState)(o),p=Object(i.a)(x,2),N=p[0],g=p[1],S=Object(a.useState)(l.toString()),_=Object(i.a)(S,2),v=_[0],C=_[1],T=Object(a.useState)(!1),I=Object(i.a)(T,2),y=I[0],E=I[1],k=Object(a.useState)(!1),A=Object(i.a)(k,2),w=A[0],B=A[1],D=Object(a.useState)(!1),L=Object(i.a)(D,2),F=L[0],P=L[1],R=w&&N.length<1,J=F&&v.length<1;return Object(a.useEffect)((function(){g(t.title),C(t.colorId.toString())}),[t]),Object(m.jsx)("article",{"data-id":c,className:"TodoInfo",children:y?Object(m.jsx)("form",{onSubmit:function(e){e.preventDefault(),N.length>0&&v.length>0?(j(c,N,Number(v)),E((function(e){return!e})),g(""),C(""),B(!1),P(!1)):(B(!0),P(!0))},method:"GET",action:"/api/users",className:"TodoInfo-submitForm",children:Object(m.jsxs)("article",{className:"TodoInfo-edit",children:[Object(m.jsxs)("section",{className:"TodoInfo-edit__section",children:[Object(m.jsx)("input",{className:b()("TodoInfo-edit__input","form-control",{"error-border":R}),type:"text",value:N,onChange:function(e){g(e.target.value)},onBlur:function(){return B(!0)},maxLength:15}),Object(m.jsxs)("select",{className:b()("TodoInfo-edit__select","form-control",{"error-border":J}),value:v,onChange:function(e){C(e.target.value)},onBlur:function(){return P(!0)},children:[Object(m.jsx)("option",{value:"",disabled:!0,children:"Choose a color"}),n.map((function(e){return Object(m.jsx)("option",{value:e.id,children:e.color},e.id)}))]})]}),Object(m.jsx)("button",{type:"submit",className:"btn btn-outline-success btn-success-submit",children:"\u2713"})]})}):Object(m.jsxs)("section",{className:"TodoInfo-section",children:[Object(m.jsxs)("section",{className:"TodoInfo__checkbox-section",children:[Object(m.jsx)("input",{type:"checkbox",className:"btn-check",id:"$btn-check-".concat(c,"-outlined"),onChange:function(){f(c,!r)},checked:r}),Object(m.jsx)("label",{className:"btn btn-outline-success btn-success-check",htmlFor:"$btn-check-".concat(c,"-outlined"),children:"\u2713"}),Object(m.jsx)("h2",{className:b()("TodoInfo__title",{"TodoInfo__title-selected":r}),style:s&&{color:s.color},children:o})]}),Object(m.jsxs)("section",{children:[Object(m.jsx)("button",{type:"button",className:"btn btn-outline-danger",onClick:function(){return d(c)},children:"\u2715"}),!r&&Object(m.jsx)("button",{type:"button",className:"btn btn-outline-warning",onClick:function(){return E((function(e){return!e}))},children:"\u270e"})]})]})},c)})),p=(n(18),n(19),function(){var e=Object(a.useContext)(h),t=e.products,n=e.sortBySelect,c=e.showAll,o=Object(a.useState)(!1),r=Object(i.a)(o,2),l=r[0],s=r[1],u=Object(a.useState)(!1),d=Object(i.a)(u,2),b=d[0],j=d[1],f=t.filter((function(e){return e.selected}));return Object(m.jsxs)("article",{className:"TodoFilter",children:[Object(m.jsx)("button",{type:"button",className:"TodoFilter__toggler",onClick:function(){return s((function(e){return!e}))},children:"filter settings \u2710"}),l&&Object(m.jsxs)("section",{className:"TodoFilter__sectionList",children:[Object(m.jsx)("button",{type:"button",className:"btn btn-outline-success TodoFilter__button",onClick:function(){n(),j(!0)},disabled:f.length<1||t.length===f.length,children:"Show selected"}),Object(m.jsx)("button",{type:"button",className:"btn btn-outline-success TodoFilter__button",onClick:function(){c(),j(!1)},disabled:!b,children:"Show All"})]})]})}),N=function(){var e=Object(a.useContext)(h),t=e.products,n=e.changeAll,c=Object(a.useState)(t),o=Object(i.a)(c,2),r=o[0],l=o[1],s=r.filter((function(e){return e.selected}));return Object(a.useEffect)((function(){l(t.filter((function(e){return!0===e.selected})))}),[t]),Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("article",{className:"TodoSelect",children:[Object(m.jsxs)("section",{className:"TodoSelect__section",children:[Object(m.jsxs)("section",{className:"TodoSelect__selectButtons",children:[Object(m.jsx)("button",{type:"button",className:"btn btn-outline-success",onClick:function(){return n(!0)},disabled:s.length===t.length,children:"Select All"}),Object(m.jsx)("button",{type:"button",className:"btn btn-outline-danger",onClick:function(){return n(!1)},disabled:s.length<1,children:"Remove select"})]}),Object(m.jsx)("p",{className:b()("TodoSelect__title",{"TodoSelect__title--selected":r.length}),children:"Selected items: ".concat(r.length)})]}),Object(m.jsx)(p,{})]})})},g=u.a.memo((function(){var e=Object(a.useContext)(h),t=e.products,n=e.colors;return Object(m.jsxs)("section",{className:"TodoList",children:[Object(m.jsx)(N,{}),t.map((function(e){return Object(m.jsx)(O.Provider,{value:{product:e,colors:n},children:Object(m.jsx)(x,{},e.id)})}))]})}));!function(e){e[e.SELECTED=0]="SELECTED",e[e.NONE=1]="NONE"}(c||(c={}));var S=function(){var e=Object(a.useState)(j),t=Object(i.a)(e,2),n=t[0],o=t[1],r=Object(a.useState)(""),u=Object(i.a)(r,2),d=u[0],O=u[1],x=Object(a.useState)(""),p=Object(i.a)(x,2),N=p[0],S=p[1],_=Object(a.useState)(!1),v=Object(i.a)(_,2),C=v[0],T=v[1],I=Object(a.useState)(!1),y=Object(i.a)(I,2),E=y[0],k=y[1],A=Object(a.useState)(c.NONE),w=Object(i.a)(A,2),B=w[0],D=w[1],L=C&&d.length<1,F=E&&N.length<1,P=function(e){return f.find((function(t){return t.id===e}))||void 0},R={products:function(e,t){var n=e.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{currentColor:P(e.colorId)})}));return t===c.SELECTED?n.filter((function(e){return e.selected})):n}(n,B),colors:f,onDelete:function(e){o((function(t){return t.filter((function(t){return t.id!==e}))}))},onRename:function(e,t,n){o((function(c){return c.map((function(c){return c.id!==e?c:Object(l.a)(Object(l.a)({},c),{},{title:t,colorId:n})}))}))},onSelect:function(e,t){o((function(n){return n.map((function(n){return n.id!==e?n:Object(l.a)(Object(l.a)({},n),{},{selected:t})}))}))},changeAll:function(e){o((function(t){return t.map((function(t){return t.selected===e?t:Object(l.a)(Object(l.a)({},t),{},{selected:e})}))}))},sortBySelect:function(){D(c.SELECTED)},showAll:function(){D(c.NONE)}};return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsxs)("form",{className:"App__form form",onSubmit:function(e){e.preventDefault();var t={id:Math.max.apply(Math,Object(s.a)(n.map((function(e){return e.id}))))+1,title:d,selected:!1,colorId:Number(N),color:P(Number(N))};d.length>0&&N.length>0?(o((function(e){return[].concat(Object(s.a)(e),[t])})),O(""),S(""),T(!1),k(!1)):(T(!0),k(!0))},action:"/api/users",method:"POST",children:[Object(m.jsx)("h1",{className:"App__title",children:"Product List"}),L&&Object(m.jsx)("span",{className:"error",children:"Please enter a title"}),Object(m.jsx)("div",{className:"field",children:Object(m.jsx)("input",{className:b()("form__textInput","form-control",{"error-border":L}),type:"text","data-cy":"titleInput",value:d,onChange:function(e){O(e.target.value)},onBlur:function(){return T(!0)},placeholder:"Enter a title",maxLength:15})}),F&&Object(m.jsx)("span",{className:"error",children:"Please choose a color"}),Object(m.jsx)("div",{className:"field",children:Object(m.jsxs)("select",{className:b()("form__selectColor","form-control",{"error-border":F}),"data-cy":"userSelect",value:N,onChange:function(e){S(e.target.value)},onBlur:function(){return k(!0)},children:[Object(m.jsx)("option",{value:"",disabled:!0,children:"Choose a color"}),f.map((function(e){return Object(m.jsx)("option",{value:e.id,children:e.color},e.id)}))]})}),Object(m.jsx)("button",{type:"submit","data-cy":"submitButton",className:"btn btn-warning btn-todoAdd",children:"Add"})]}),Object(m.jsx)(h.Provider,{value:R,children:Object(m.jsx)(g,{})})]})};r.a.render(Object(m.jsx)(S,{}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.bb9d7f55.chunk.js.map