(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-common"],{0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var n=s("85ec"),a=s.n(n);a.a},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("a026"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"background-wrap"},[s("div",{staticClass:"background-box"}),s("router-view")],1)])},r=[],i={data:function(){return{}}},o=i,c=(s("034f"),s("2877")),l=Object(c["a"])(o,a,r,!1,null,null,null),u=l.exports,p=(s("d3b7"),s("8c4f")),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:s("cf05")}}),n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},v=[],m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("h1",[t._v(t._s(t.msg))]),t._m(0),s("h3",[t._v("Installed CLI Plugins")]),t._m(1),s("h3",[t._v("Essential Links")]),t._m(2),s("h3",[t._v("Ecosystem")]),t._m(3)])},h=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v(" For a guide and recipes on how to configure / customize this project,"),s("br"),t._v(" check out the "),s("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(". ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[t._v("babel")])]),s("li",[s("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[t._v("router")])]),s("li",[s("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex",target:"_blank",rel:"noopener"}},[t._v("vuex")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),s("li",[s("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),s("li",[s("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),s("li",[s("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),s("li",[s("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),s("li",[s("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),s("li",[s("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),s("li",[s("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),s("li",[s("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],f={name:"HelloWorld",props:{msg:String}},g=f,_=(s("7def"),Object(c["a"])(g,m,h,!1,null,"1935ec24",null)),b=_.exports,w={name:"home",components:{HelloWorld:b}},k=w,C=Object(c["a"])(k,d,v,!1,null,null,null),U=C.exports,j=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login-box"},[s("div",{staticClass:"login-background"}),s("div",{staticClass:"login-contents"},[s("div",{staticClass:"login-title"},[s("img",{staticClass:"client-icon",attrs:{src:t.client.icon}}),s("h1",[t._v(t._s(t.client.name))]),s("div",{staticClass:"login-desc"},[t._v(" "+t._s(t.client.desc)+" ")]),s("div",{staticClass:"login-authorization"},[t.client.authorization.length>0?s("span",[t._v("요청권한 : ")]):t._e(),t._l(t.client.authorization,(function(e,n){return s("span",{key:e.name},[s("span",n>0?[t._v(", "+t._s(e))]:[t._v(t._s(e))])])}))],2),t.isFailurePage?s("div",{staticClass:"login-failure"},[s("span",[t._v("Failure : ")]),s("span",[t._v(" 유효한 사용자를 찾을 수 없습니다. ")])]):t._e()]),s("div",{staticStyle:{position:"relative",height:"280px"}},[s("transition",{attrs:{name:"slide-fade"}},[t.showInputs?t._e():s("div",{staticClass:"login-form"},[t._l(t.users,(function(e,n){return[n<2&&e.userid&&""!=e.userid?s("div",{key:e.userid,staticClass:"user-element",on:{click:function(s){return t.showInputForm(e)}}},[e.icon&&""!=e.icon?s("img",{staticClass:"user-icon",attrs:{src:e.icon}}):s("img",{staticClass:"user-icon",attrs:{src:"https://cdn.patchcdn.com/assets/layout/contribute/user-default.png"}}),s("span",[t._v(t._s(e.name))])]):t._e()]})),s("div",{staticClass:"user-element unlisted",on:{click:function(e){return t.showInputForm(null)}}},[s("img",{staticClass:"user-icon",attrs:{src:"https://cdn.patchcdn.com/assets/layout/contribute/user-default.png"}}),t._v(" 다른 id 사용 ")]),s("div",{staticClass:"login-buttons"})],2)]),s("transition",{attrs:{name:"slide-fade"}},[t.showInputs?s("div",{staticClass:"login-inputs"},[s("form",{attrs:{action:"/login",method:"post"}},[null!=t.selectUser?s("div",[t.selectUser.icon&&""!=t.selectUser.icon?s("img",{staticClass:"user-icon big",attrs:{src:t.selectUser.icon}}):s("img",{staticClass:"user-icon big",attrs:{src:"https://cdn.patchcdn.com/assets/layout/contribute/user-default.png"}}),s("input",{attrs:{type:"hidden",name:"username"},domProps:{value:t.username}}),s("br"),t._v(" "+t._s(t.selectUser.name)+" "),s("label-input",{attrs:{type:"password",name:"password",icon:"unlock-alt",value:t.password},on:{"update:value":function(e){t.password=e}}},[t._v(" Password ")])],1):s("div",[s("label-input",{attrs:{type:"text",name:"username",icon:"user",value:t.username},on:{"update:value":function(e){t.username=e}}},[t._v(" User Id ")]),s("label-input",{attrs:{type:"password",name:"password",icon:"unlock-alt",value:t.password},on:{"update:value":function(e){t.password=e}}},[t._v(" Password ")])],1),s("div",{staticClass:"login-buttons"},[s("button",{staticClass:"button-action",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.hideInputForm()}}},[t._v("Back")]),s("button",{staticClass:"button-action",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.login()}}},[t._v("Login")])])])]):t._e()])],1),s("div",{staticClass:"login-link"},[s("div",{staticClass:"login-link-left"},[s("router-link",{attrs:{to:"/forgot"}},[t._v("Forgot password?")])],1),s("div",{staticClass:"login-link-right"},[s("router-link",{attrs:{to:"/signup"}},[t._v("Sign up")])],1)])])])},y=[],x=(s("c975"),s("b0c0"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"label-input"},[s("div",{staticClass:"label"},[s("font-awesome-icon",{attrs:{icon:t.icon}})],1),s("div",{staticClass:"input"},[s("input",{attrs:{type:t.type,name:t.name},domProps:{value:t.value},on:{input:function(e){return t.$emit("update:value",e.target.value)}}})])])}),F=[],E={name:"LabelInput",props:{icon:String,name:String,type:String,value:String}},I=E,$=(s("ed87"),Object(c["a"])(I,x,F,!1,null,"c0e7d5bc",null)),P=$.exports,S=s("bc3a"),L={name:"home",components:{HelloWorld:b,LabelInput:P},created:function(){var t=window.location.href;t.indexOf("?failure")>=0&&(this.isFailurePage=!0)},computed:{users:function(){return this.$store.getters.getUsers}},data:function(){return{username:"",password:"",client:{icon:"https://library.kissclipart.com/20191016/rqe/kissclipart-child-icon-happiness-icon-family-icon-4509ca3f41157322.png",name:"Client",desc:"Description...",authorization:["read_profile","write_article","read_username","read_email"]},showInputs:!1,selectUser:null,isFailurePage:!1}},methods:{addUser:function(t){var e=[{icon:"https://image.flaticon.com/icons/png/512/164/164846.png",userid:"user1",name:"User 1"},{icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTt8L_upvY7RsbvSkrP7suu8NycEv-Fx-Uqgjc7kCne4wkSC5F0",userid:"user2",name:"User 2"},{icon:"https://www.clipartwiki.com/clipimg/detail/247-2475923_child-icon-child-emoji.png",userid:"user3",name:"User 3"}];t>0&&this.$store.dispatch("addUser",e[t-1])},showInputForm:function(t){null!=t&&(this.selectUser=t,this.username=t.userid,this.password=""),this.showInputs=!0},hideInputForm:function(){this.showInputs=!1,this.selectUser=null,this.username="",this.password=""},load:function(){var t=this;S.get("/auth/client",{params:{},timeout:1e3}).then((function(e){if(e.data){var s=e.data;"200"==s.code?t.client=e.data:t.client={icon:"https://tistory4.daumcdn.net/tistory/3410306/attach/97e22f962436482399d633524b87a6a6",name:"Error",desc:s.message,authorization:[]}}})).catch((function(t){console.log("Error : "+t)}))},login:function(){var t=this;console.log(this.username+" : "+this.password);var e=new FormData;e.append("username",this.username),e.append("password",this.password),S.post("/login",e).then((function(e){if(console.log(e),console.log(e.data),e.data){var s=e.data;if(1==s.success)if(t.isFailurePage=!1,s.username&&s.name){var n={userid:s.username,name:s.name,icon:s.icon};t.$store.dispatch("addUser",n).then((function(){window.location.href=s.returnUrl}))}else window.location.href=s.returnUrl;else t.isFailurePage=!0}})).catch((function(t){console.log("Error : "+t)}))}},mounted:function(){this.load()}},O=L,z=(s("b778"),Object(c["a"])(O,j,y,!1,null,"33341190",null)),D=z.exports;n["a"].use(p["a"]);var W=[{path:"/",name:"login",meta:{title:"Login"},component:D},{path:"/home",name:"home",component:U},{path:"/about",name:"about",component:function(){return s.e("about").then(s.bind(null,"f820"))}}],H=new p["a"]({routes:W});H.beforeEach((function(t,e,s){document.title=t.meta.title,s()}));var q=H,A=(s("a434"),s("2f62")),N=s("0e44");n["a"].use(A["a"]);var T=new A["a"].Store({state:{users:[]},mutations:{addUser:function(t,e){return t.users.unshift(e)},removeUser:function(t,e){for(var s=-1,n=0;n<t.users.length;n++){var a=t.users[n];if(a.userid===e.userid){s=n;break}}return s>=0?t.users.splice(s,1):t.users}},actions:{addUser:function(t,e){this.commit("removeUser",e),this.commit("addUser",e)},removeUser:function(t,e){this.commit("removeUser",e)}},modules:{},getters:{getUsers:function(t){return t.users}},plugins:[Object(N["a"])()]}),J=s("ecee"),V=s("c074"),Y=s("ad3d");n["a"].config.productionTip=!1,J["c"].add(V["b"]),J["c"].add(V["a"]),n["a"].component("font-awesome-icon",Y["a"]),new n["a"]({router:q,store:T,render:function(t){return t(u)}}).$mount("#app")},"621c":function(t,e,s){},"7def":function(t,e,s){"use strict";var n=s("8e33"),a=s.n(n);a.a},"85ec":function(t,e,s){},"8e33":function(t,e,s){},b778:function(t,e,s){"use strict";var n=s("f738"),a=s.n(n);a.a},cf05:function(t,e,s){t.exports=s.p+"img/logo.82b9c7a5.png"},ed87:function(t,e,s){"use strict";var n=s("621c"),a=s.n(n);a.a},f738:function(t,e,s){}}]);
//# sourceMappingURL=chunk-common.1c8a5d1f.js.map