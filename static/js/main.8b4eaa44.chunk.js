(this["webpackJsonpdue-ozp"]=this["webpackJsonpdue-ozp"]||[]).push([[0],{44:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t),n.d(t,"store",(function(){return F}));var r=n(2),a=n(0),c=n.n(a),o=n(16),i=n.n(o),s=(n(44),n(10)),p=n(11),u=n(13),j=n(12),l=n(71),d=n(7),b=n(18),O=n(8),h=n(21),m=n.n(h),f=n(35),y=n(36),v=n.n(y),x="GET_COMPANIES_FETCH",g="GET_COMPANIES_ERROR",C="GET_COMPANIES_LOAD",k=function(){return function(){var e=Object(f.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:C,payload:!0}),e.next=4,v.a.get("https://jsonplaceholder.typicode.com/users");case 4:if(!(n=e.sent)){e.next=9;break}return t({type:x,payload:n.data}),t({type:C,payload:!1}),e.abrupt("return",Promise.resolve(n.data));case 9:e.next=16;break;case 11:return e.prev=11,e.t0=e.catch(0),t({type:g,payload:e.t0.message}),t({type:C,payload:!1}),e.abrupt("return",Promise.reject(e.t0));case 16:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()},P=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this;Promise.allSettled([setTimeout((function(){e.props.getCompaniesAPI()}),3e3)])}},{key:"render",value:function(){var e=this.props,t=e.companies,n=e.loading,a=e.error;return n?Object(r.jsx)("p",{children:"Loading..."}):a?Object(r.jsx)("p",{children:a}):Object(r.jsxs)("div",{children:[Object(r.jsxs)("h1",{children:["Companies - ",t.length]}),t.map((function(e,t){return Object(r.jsx)("div",{children:Object(r.jsx)("p",{onClick:function(){return A.push("/companies/".concat(e.company.name))},children:e.company.name})},t)}))]})}}]),n}(a.Component);var E=Object(b.b)((function(e){return{companies:e.companies,loading:e.loading,error:e.error}}),(function(e){return Object(O.bindActionCreators)({getCompaniesAPI:k},e)}))(P),T=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(r.jsx)("div",{children:Object(r.jsx)("p",{children:this.props.match.params.name})})}}]),n}(a.Component),A=Object(d.a)(),I=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return Object(r.jsx)(l.b,{history:A,children:Object(r.jsxs)(l.c,{children:[Object(r.jsx)(l.a,{exact:!0,path:"/",component:E}),Object(r.jsx)(l.a,{exact:!0,path:"/ozp-ui",component:E}),Object(r.jsx)(l.a,{path:"/companies/:name",component:T})]})})}}]),n}(a.Component),M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,72)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),c(e),o(e)}))},S=n(37),w=n(9),_={companies:[],loading:!0,error:null},D=n(38),F=Object(O.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(w.a)(Object(w.a)({},e),{},{companies:t.payload});case g:return Object(w.a)(Object(w.a)({},e),{},{error:t.payload});case C:return Object(w.a)(Object(w.a)({},e),{},{loading:t.payload});default:return e}}),Object(D.composeWithDevTools)(Object(O.applyMiddleware)(S.a)));i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(b.a,{store:F,children:Object(r.jsx)(I,{})})}),document.getElementById("root")),M()}},[[69,1,2]]]);
//# sourceMappingURL=main.8b4eaa44.chunk.js.map