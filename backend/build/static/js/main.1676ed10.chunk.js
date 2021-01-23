(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(0),s=n(20),a=n.n(s),o=n(22),u=n(13),i=n.n(u),p=function(e){e?i.a.defaults.headers.common.Authorization=e:delete i.a.defaults.headers.common.Authorization},l=n(5),j=n.n(l),b=n(7),d="RECEIVE_USER_SIGN_IN",f="RECEIVE_SESSION_ERROR",O="RECEIVE_USER_LOGOUT",m="RECEIVE_USER_SIGN_UP",h=function(e){return{type:f,error:e}},v=function(e){return function(t){return(n=e,i.a.post("/users/login",n)).then((function(e){var n=e.data.token;localStorage.setItem("jwtToken",n),p(n);var r=Object(o.a)(n);t({type:d,currentUser:r})})).catch((function(e){t(h(e.response.data))}));var n}},x=function(){return function(e){localStorage.removeItem("jwtToken"),p(!1),e({type:O})}},g=n(17),w=n(37),E=n(38),N=n.n(E),y=n(4),k={isAuthenticated:!1,user:{},error:{}},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(y.a)(Object(y.a)({},e),{},{isAuthenticated:!!t.currentUser,user:t.currentUser});case O:return Object(y.a)(Object(y.a)({},e),{},{isAuthenticated:!1,user:void 0});case m:return Object(y.a)({},e);case f:return Object(y.a)(Object(y.a)({},e),{},{error:t.error});default:return e}},C=function(){var e=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get("/posts");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:throw e.prev=7,e.t0=e.catch(0),new Error("Error retrieving feed posts",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(b.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get("/posts/user/".concat(t));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:throw e.prev=7,e.t0=e.catch(0),new Error("Error retrieving profile posts",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(b.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.post("/posts/",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.patch("/posts/".concat(t,"/like"));case 3:e.next=8;break;case 5:throw e.prev=5,e.t0=e.catch(0),new Error("Error liking post",e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(b.a)(j.a.mark((function e(t,n){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.patch("/posts/".concat(t,"/comment"),{text:n});case 3:return r=e.sent,e.abrupt("return",r.data);case 7:throw e.prev=7,e.t0=e.catch(0),new Error("Error commenting on post",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),U="RECEIVE_POSTS",T="RECEIVE_NEW_POST",V="RECEIVE_USER_POSTS",A="RECEIVE_POST_ERROR",L=function(e){return{type:T,post:e}},D=function(e){return{type:A,error:e}},G=function(e){return function(){var t=Object(b.a)(j.a.mark((function t(n){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,_(e);case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),n(D(t.t0.response.data));case 8:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(e){return t.apply(this,arguments)}}()},W=function(e,t){return function(){var n=Object(b.a)(j.a.mark((function n(r){return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,R(e,t);case 3:n.next=8;break;case 5:n.prev=5,n.t0=n.catch(0),r(D(n.t0.message));case 8:case"end":return n.stop()}}),n,null,[[0,5]])})));return function(e){return n.apply(this,arguments)}}()},z=function(){return function(e){return C().then((function(t){e(function(e){return{type:U,posts:e}}(t))})).catch((function(t){return e(D(t.response.data))}))}},F=function(e){return function(t){return P(e).then((function(e){return t(function(e){return{type:V,posts:e}}(e))})).catch((function(e){return t(D(e.response.data))}))}},J={all:[],userPosts:[],new:void 0,error:{}},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(Object.freeze(e),t.type){case U:return Object(y.a)(Object(y.a)({},e),{},{all:t.posts});case V:return Object(y.a)(Object(y.a)({},e),{},{userPosts:t.posts});case T:return Object(y.a)(Object(y.a)({},e),{},{new:t.post});case A:return Object(y.a)(Object(y.a)({},e),{},{error:t.error});default:return e}},M=Object(g.c)({session:S,posts:B}),Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(g.d)(M,e,Object(g.a)(w.a,N.a))},q=n(2),H=n(14),K=n(6),Q=n(41),X=function(e){return{loggedIn:e.session.isAuthenticated}},Z=Object(K.h)(Object(q.b)(X)((function(e){var t=e.component,n=e.path,c=e.loggedIn,s=e.exact;return Object(r.jsx)(K.b,{path:n,exact:s,render:function(e){return c?Object(r.jsx)(K.a,{to:"/feed"}):Object(r.jsx)(t,Object(y.a)({},e))}})}))),$=Object(K.h)(Object(q.b)(X)((function(e){var t=e.component,n=e.loggedIn,c=Object(Q.a)(e,["component","loggedIn"]);return Object(r.jsx)(K.b,Object(y.a)(Object(y.a)({},c),{},{render:function(e){return n?Object(r.jsx)(t,Object(y.a)({},e)):Object(r.jsx)(K.a,{to:"/login"})}}))}))),ee=n.p+"static/media/TinyPage.08ef7619.png";n(71);var te=function(){var e=Object(q.d)((function(e){return e.session.isAuthenticated})),t=Object(q.c)(),n=function(e){e.preventDefault(),t(x())};return Object(r.jsxs)("div",{className:"navbar",children:[Object(r.jsx)("img",{className:"logo",src:ee,alt:"logo",width:"100px"}),e?Object(r.jsxs)("div",{className:"nav-links",children:[Object(r.jsx)("button",{type:"submit",onClick:n,children:"Logout"}),Object(r.jsx)(H.b,{to:"/feed",children:"Feed"}),Object(r.jsx)(H.b,{to:"/profile",children:"Profile"})]}):Object(r.jsxs)("div",{className:"nav-links",children:[Object(r.jsx)(H.b,{to:"/signup",children:"Signup"}),Object(r.jsx)(H.b,{to:"/login",children:"Login"})]})]})},ne=n(15);n(72);var re=function(){var e=Object(q.d)((function(e){return e.posts.error})),t=Object(q.c)(),n=Object(c.useState)(""),s=Object(ne.a)(n,2),a=s[0],o=s[1];return Object(r.jsx)("div",{className:"post-compose-container",children:Object(r.jsx)("form",{onSubmit:function(e){var n;e.preventDefault(),t((n={text:a},function(){var e=Object(b.a)(j.a.mark((function e(t){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I(n);case 3:r=e.sent,t(L(r)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t(D(e.t0.response.data));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())),o("")},children:Object(r.jsxs)("div",{className:"post-compose-form",children:[Object(r.jsx)("h3",{children:"Create Post"}),Object(r.jsx)("textarea",{value:a,onChange:function(e){o(e.currentTarget.value)},placeholder:"Write your post...",className:"post-compose-text"}),Object(r.jsx)("input",{type:"submit",value:"Post",className:"post-compose-submit"}),e?Object(r.jsx)("div",{children:e.error}):null]})})})};n(73);var ce=function(e){var t=e.likes,n=e.handleLike;return Object(r.jsxs)("div",{className:"likes",children:[Object(r.jsx)("button",{className:"likes-submit",onClick:n,type:"submit",children:"\ud83e\udd0d"}),Object(r.jsx)("div",{className:"likes-count",children:t.length})]})},se=n(40),ae=n.n(se);n(74);var oe=function(e){var t=e.fetchPosts,n=e.post,s=e.comments,a=n._id,o=Object(c.useState)(""),u=Object(ne.a)(o,2),i=u[0],p=u[1],l=Object(q.c)(),d=Object(r.jsxs)("div",{className:"comments-trigger",children:[Object(r.jsx)("div",{className:"comments-trigger-icon",children:"\ud83d\udcac"}),Object(r.jsx)("div",{className:"comments-count",children:s.length})]}),f=function(){var e=Object(b.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,l(W(a,i));case 3:t();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)(ae.a,{className:"comments-collapsible",openedClassName:"comments-open-collapsible",triggerWhenOpen:"\u24e7",trigger:d,triggerOpenedClassName:"comments-open-trigger",children:[Object(r.jsxs)("form",{className:"comment-form",onSubmit:f,children:[Object(r.jsx)("input",{className:"comment-input",value:i,onChange:function(e){p(e.target.value)},placeholder:"Write your comment",type:"text"}),Object(r.jsx)("input",{className:"comment-submit",type:"submit",value:"Post"})]}),s.map((function(e){return Object(r.jsxs)("div",{className:"comment",children:[Object(r.jsx)("div",{className:"comment-user",children:e.username}),Object(r.jsx)("div",{className:"comment-text",children:e.text})]},e.text)}))]})};n(75);var ue=function(e){var t=e.post,n=e.fetchPosts,c=t.user.username,s=t._id,a=t.text,o=t.likes,u=t.comments,i=Object(q.c)(),p=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i(G(s));case 2:n();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.jsxs)("div",{className:"post",children:[Object(r.jsx)("h3",{children:c}),Object(r.jsx)("p",{className:"post-text",children:a}),Object(r.jsxs)("div",{className:"post-actions",children:[Object(r.jsx)(oe,{fetchPosts:n,post:t,comments:u}),Object(r.jsx)(ce,{likes:o,handleLike:p})]})]},s)};n(76);var ie=function(){var e=Object(q.d)((function(e){return e.posts.userPosts})),t=Object(q.d)((function(e){return e.posts.new})),n=Object(q.d)((function(e){return e.session.user})),s=Object(q.c)();Object(c.useEffect)((function(){s(F(n.id))}),[t]);var a=function(){return s(F(n.id))};return Object(r.jsxs)("div",{className:"profile",children:[Object(r.jsx)("h2",{className:"profile-header",children:"".concat(n.username,"'s Profile")}),Object(r.jsx)(re,{}),Object(r.jsx)("div",{className:"profile-posts",children:e.map((function(e){return Object(r.jsx)(ue,{fetchPosts:a,post:e},e.text)}))})]})},pe=n(18);n(77);var le=function(){var e=Object(q.d)((function(e){return e.session.error})),t=Object(q.c)(),n=Object(c.useState)({email:"",password:""}),s=Object(ne.a)(n,2),a=s[0],o=s[1],u=a.email,i=a.password,p=function(e){return function(t){o(Object(y.a)(Object(y.a)({},a),{},Object(pe.a)({},e,t.target.value)))}};return Object(r.jsx)("div",{className:"login-form-container",children:Object(r.jsx)("form",{onSubmit:function(e){e.preventDefault(),t(v(a))},children:Object(r.jsxs)("div",{className:"login-form",children:[Object(r.jsx)("input",{type:"text",value:u,onChange:p("email"),placeholder:"Email",autoComplete:"on"}),Object(r.jsx)("input",{type:"password",value:i,onChange:p("password"),placeholder:"Password",autoComplete:"on"}),Object(r.jsx)("input",{className:"login-submit",type:"submit",value:"Log In"}),e?Object(r.jsx)("div",{children:e.error}):null]})})})};n(78);var je=function(){var e=Object(q.d)((function(e){return e.session.error})),t=Object(q.c)(),n=Object(K.g)(),s=Object(c.useState)({email:"",username:"",password:"",password2:""}),a=Object(ne.a)(s,2),o=a[0],u=a[1],p=o.email,l=o.username,d=o.password,f=o.password2,O=function(e){return function(t){u(Object(y.a)(Object(y.a)({},o),{},Object(pe.a)({},e,t.target.value)))}};return Object(r.jsx)("div",{className:"signup-form-container",children:Object(r.jsx)("form",{onSubmit:function(e){var r;e.preventDefault(),t((r=o,function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n=r,i.a.post("/users/register",n);case 3:return e.abrupt("return",t({type:m}));case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",t(h(e.t0.response.data)));case 9:case"end":return e.stop()}var n}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}())).then((function(e){"RECEIVE_USER_SIGN_UP"===e.type&&n.push("/login")}))},children:Object(r.jsxs)("div",{className:"signup-form",children:[Object(r.jsx)("input",{type:"text",value:p,onChange:O("email"),placeholder:"Email",autoComplete:"on"}),Object(r.jsx)("input",{type:"text",value:l,onChange:O("username"),placeholder:"Username",autoComplete:"on"}),Object(r.jsx)("input",{type:"password",value:d,onChange:O("password"),placeholder:"Password",autoComplete:"on"}),Object(r.jsx)("input",{type:"password",value:f,onChange:O("password2"),placeholder:"Confirm Password",autoComplete:"on"}),Object(r.jsx)("input",{className:"signup-submit",type:"submit",value:"Sign Up"}),e?Object(r.jsx)("div",{children:e.error}):null]})})})};n(79);var be=function(){var e=Object(q.d)((function(e){return e.posts.all})),t=Object(q.d)((function(e){return e.posts.new})),n=Object(q.c)();Object(c.useEffect)((function(){n(z())}),[t]);var s=function(){return n(z())};return Object(r.jsxs)("div",{className:"feed",children:[Object(r.jsx)("h2",{className:"profile-header",children:"Your Feed"}),Object(r.jsx)(re,{}),Object(r.jsx)("div",{className:"feed-posts",children:e.map((function(e){return Object(r.jsx)(ue,{fetchPosts:s,post:e},e.text)}))})]})},de=(n(80),function(){return Object(r.jsxs)("div",{className:"app",children:[Object(r.jsx)(te,{}),Object(r.jsxs)(K.d,{children:[Object(r.jsx)(Z,{exact:!0,path:"/login",component:le}),Object(r.jsx)(Z,{exact:!0,path:"/signup",component:je}),Object(r.jsx)($,{exact:!0,path:"/profile",component:ie}),Object(r.jsx)($,{exact:!0,path:"/feed",component:be})]})]})}),fe=function(e){var t=e.store;return Object(r.jsx)(q.a,{store:t,children:Object(r.jsx)(H.a,{children:Object(r.jsx)(de,{})})})};document.addEventListener("DOMContentLoaded",(function(){var e;if(localStorage.jwtToken){p(localStorage.jwtToken);var t=Object(o.a)(localStorage.jwtToken);e=Y({session:{isAuthenticated:!0,user:t}});var n=Date.now()/1e3;t.exp<n&&(e.dispatch(x()),window.location.href="/login")}else e=Y({});var c=document.getElementById("root");a.a.render(Object(r.jsx)(fe,{store:e}),c)}))}},[[81,1,2]]]);
//# sourceMappingURL=main.1676ed10.chunk.js.map