(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[5],{230:function(t,e,r){t.exports={formControl:"FormsControl_formControl__1Di2Y",error:"FormsControl_error__fDZcL",formSummaryError:"FormsControl_formSummaryError__km0ML",errorMsg:"FormsControl_errorMsg__Pt-Lf"}},231:function(t,e,r){"use strict";r.d(e,"b",(function(){return n})),r.d(e,"a",(function(){return a}));var n=function(t){return t?void 0:"required"},a=function(t){return function(e){return e&&e.length>t?"max length is ".concat(t," symbols"):void 0}}},232:function(t,e,r){"use strict";r.d(e,"b",(function(){return f})),r.d(e,"a",(function(){return d})),r.d(e,"c",(function(){return h}));var n=r(27),a=r(239),o=r(0),s=r.n(o),u=r(230),i=r.n(u),c=r(60),l=r.n(c),m=r(113),p=function(t){return function(e){var r=e.input,o=e.meta,u=Object(a.a)(e,["input","meta"]),c=o.touched&&o.error;return s.a.createElement("div",{className:function(t){var e;return l()((e={},Object(n.a)(e,i.a.formControl,!0),Object(n.a)(e,i.a.error,t),e))}(c)},s.a.createElement(t,Object.assign({},r,u)),c&&s.a.createElement("div",{className:i.a.errorMsg},o.error))}},f=p("textarea"),d=p("input"),h=function(t,e,r,n,a,o){return s.a.createElement("div",null,s.a.createElement(m.a,{component:t,type:e,placeholder:r,name:n,validate:a}),o)}},252:function(t,e,r){t.exports={coverDiv:"ProfileInfo_coverDiv__1z4YC",desctiptionBlock:"ProfileInfo_desctiptionBlock__24OvD"}},254:function(t,e,r){t.exports={myPosts:"MyPosts_myPosts__1Utv7",sendBar:"MyPosts_sendBar__3M0sS"}},255:function(t,e,r){t.exports={item:"Post_item___M8oJ"}},300:function(t,e,r){"use strict";r.r(e);var n=r(24),a=r(25),o=r(30),s=r(29),u=r(0),i=r.n(u),c=r(23),l=r(62),m=r(254),p=r.n(m),f=r(255),d=r.n(f),h=function(t){var e="";return t.name&&(e=t.name),i.a.createElement("div",{className:d.a.item,key:t.id},i.a.createElement("img",{src:"https://shapka-youtube.ru/wp-content/uploads/2020/02/skull.jpg",alt:"1"}),t.message,i.a.createElement("div",null,e),i.a.createElement("div",null,i.a.createElement("span",null,"like ",t.likes)))},v=r(113),b=r(114),E=r(231),g=r(232),y=Object(E.a)(50),_=i.a.memo((function(t){var e=t.posts?t.posts.map((function(t){var e=t.message,r=t.likes,n=t.id;return i.a.createElement(h,{message:e,likes:r,key:n})})):[],r=i.a.createRef();return i.a.createElement("div",{className:p.a.myPosts},i.a.createElement("h4",null,"My Posts"),i.a.createElement(j,{ref:r,onSubmit:function(e){var n=e.newPostBody;t.addPost(n),r.current.value=""}}),i.a.createElement("div",{className:p.a.posts},e))})),j=Object(b.a)({form:"dialogAddMesageForm"})((function(t){return i.a.createElement("form",{className:p.a.sendBar,onSubmit:t.handleSubmit},i.a.createElement(v.a,{component:g.b,name:"newPostBody",placeholder:"Enter your message",validate:[E.b,y]}),i.a.createElement("button",null,"Send"))})),P=_,S=Object(c.b)((function(t){return{posts:t.profilePage.posts}}),(function(t){return{addPost:function(e){t(Object(l.a)(e))}}}))(P),O=r(252),k=r.n(O),I=r(39);var C=r(77);function A(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,a=!1,o=void 0;try{for(var s,u=t[Symbol.iterator]();!(n=(s=u.next()).done)&&(r.push(s.value),!e||r.length!==e);n=!0);}catch(i){a=!0,o=i}finally{try{n||null==u.return||u.return()}finally{if(a)throw o}}return r}}(t,e)||Object(C.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var M=function(t){var e=A(Object(u.useState)(!1),2),r=e[0],n=e[1],a=A(Object(u.useState)(t.status),2),o=a[0],s=a[1];Object(u.useEffect)((function(){s(t.status)}),[t.status]);return i.a.createElement("div",{className:k.a.statusContainer},r?i.a.createElement("div",{className:k.a.statusEdit},i.a.createElement("input",{onBlur:function(){n(!1),t.updateStatus(o)},autoFocus:!0,onChange:function(t){s(t.currentTarget.value)},value:o})):i.a.createElement("div",{onDoubleClick:function(){n(!0)}},t.status&&t.status.length?t.status:"\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u0441\u0442\u0430\u0442\u0443\u0441"))},N=function(t){var e=t.profile,r=t.status,n=t.updateStatus;if(!e)return i.a.createElement(I.a,{color:"blue"});var a=e.lookingForAJobDescription,o="Looking for a job: ";return a?a="".concat(e.lookingForAJobDescription):(a="",o=""),i.a.createElement("div",null,i.a.createElement("div",{className:k.a.desctiptionBlock},i.a.createElement("img",{src:e.photos&&e.photos.small,alt:""}),i.a.createElement("h3",null,e.fullName),i.a.createElement(M,{status:r,updateStatus:n}),i.a.createElement("div",null,i.a.createElement("b",null,o),a)))},B=function(t){return i.a.createElement("div",null,i.a.createElement(N,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),i.a.createElement(S,null))},D=r(5),w=r(17),F=function(t){Object(o.a)(r,t);var e=Object(s.a)(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return Object(a.a)(r,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;this.props.isAuthingInProgress||t||(t=this.props.authorizedUserId),t||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return this.props.authorizedUserId&&this.props.isAuthingInProgress&&!this.props.match.params.userId?i.a.createElement(I.a,{color:"blue"}):i.a.createElement(B,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),r}(i.a.Component);e.default=Object(w.d)(Object(c.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.id,isAuth:t.auth.isAuth,isAuthingInProgress:t.auth.isAuthingInProgress}}),{getUserProfile:l.d,getStatus:l.c,updateStatus:l.e}),D.f)(F)}}]);
//# sourceMappingURL=5.84d1b109.chunk.js.map