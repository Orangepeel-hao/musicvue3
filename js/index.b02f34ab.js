(function(){"use strict";var e={813:function(e,n,t){t.d(n,{$s:function(){return l},Eg:function(){return r},Hv:function(){return o},ao:function(){return d},bG:function(){return p},i9:function(){return c},nE:function(){return f},sO:function(){return u}});var a=t(669),s=t.n(a);let i="http://music.cpengx.cn";function r(e=1){return s().get(`${i}/banner?type=${e}`)}function c(e=10){return s().get(`${i}/personalized?limit=${e}`)}function o(e){return s().get(`${i}/playlist/detail?id=${e}`)}function l(e){return s().get(`${i}/song/url?id=${e}`)}function u(e){return s().get(`${i}/lyric?id=${e}`)}function d(e){return s().get(`${i}/search?keywords=${e}`)}function p(e){return s().get(`${i}/login/cellphone?phone=${e.phone}&password=${e.password}`)}function f(e){return s().get(`${i}/user/detail?uid=${e}`)}},988:function(e,n,t){var a=t(963),s=t(252);function i(e,n,t,a,i,r){const c=(0,s.up)("router-view"),o=(0,s.up)("playController");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.Wm)(c),e.$store.state.nowLogin?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(o,{key:0}))])}var r=t(577);const c=e=>((0,s.dD)("data-v-5b344e49"),e=e(),(0,s.Cn)(),e),o={class:"play"},l=["src"],u={key:1,class:"iconfont icon-heijiaochangpian"},d={class:"content"},p={class:"title"},f=c((()=>(0,s._)("div",{class:"tips"},"横滑可以切换上下首哦",-1))),v={class:"right"},y=c((()=>(0,s._)("span",{class:"iconfont icon-qita"},null,-1))),g=["src"];function m(e,n,t,i,c,m){const w=(0,s.up)("musicView");return(0,s.wg)(),(0,s.iD)("div",o,[(0,s._)("div",{onClick:n[0]||(n[0]=n=>e.show=!e.show),class:"left"},[e.playlist[e.playCurrentIndex].al.picUrl?((0,s.wg)(),(0,s.iD)("img",{key:0,src:e.playlist[e.playCurrentIndex].al.picUrl,alt:""},null,8,l)):((0,s.wg)(),(0,s.iD)("span",u)),(0,s._)("div",d,[(0,s._)("div",p,(0,r.zw)(e.playlist[e.playCurrentIndex].name||"title"),1),f])]),(0,s._)("div",v,[(0,s.wy)((0,s._)("span",{class:"iconfont icon-bofang",onClick:n[1]||(n[1]=(...e)=>i.playf&&i.playf(...e))},null,512),[[a.F8,e.paused]]),(0,s.wy)((0,s._)("span",{class:"iconfont icon-zanting",onClick:n[2]||(n[2]=(...e)=>i.playf&&i.playf(...e))},null,512),[[a.F8,!e.paused]]),y]),(0,s.wy)((0,s.Wm)(w,{onBack:n[3]||(n[3]=n=>e.show=!e.show),playDetail:e.playlist[e.playCurrentIndex],paused:e.paused,playf:i.playf,show:e.show},null,8,["playDetail","paused","playf","show"]),[[a.F8,e.show]]),e.music.data.data[0].url?((0,s.wg)(),(0,s.iD)("audio",{key:0,ref:"audio",src:e.music.data.data[0].url},null,8,g)):(0,s.kq)("",!0)])}var w=t(15),P=t(262),h=t(907),b={components:{musicView:w["default"]},computed:{...(0,h.rn)(["playlist","playCurrentIndex","music","InterValId","music"])},setup(){let e=(0,h.oR)(),{proxy:n}=(0,s.FN)(),t=(0,P.qj)({paused:!0,show:!1}),a=()=>{n.paused?(n.$refs.audio.play(),n.paused=!1,setTimeout((function(){n.updateTime()}),1e3)):(n.$refs.audio.pause(),n.paused=!0,clearInterval(e.state.InterValId))},i=()=>{n.$refs.audio.currentTime&&(e.state.InterValId=setInterval((()=>{console.log("",[n.$refs.audio][0].currentTime),e.commit("setCurrentTime",[n.$refs.audio][0].currentTime)}),500))},r=(0,s.YP)((()=>[t.paused,t.show,e.state.playCurrentIndex]),(n=>{!n[0]||n[1]?e.dispatch("reqMusic",e.state.playlist[e.state.playCurrentIndex]):r()})),c=(0,s.YP)((()=>e.state.playCurrentIndex),(()=>{setTimeout((()=>{n.$refs.audio.play()}),1e3)}));return{...(0,P.BK)(t),proxy:n,store:e,playf:a,updateTime:i,musicLoad:r,nextLyricAuto:c}}},A=t(744);const D=(0,A.Z)(b,[["render",m],["__scopeId","data-v-5b344e49"]]);var H=D,O={components:{playController:H}};const L=(0,A.Z)(O,[["render",i]]);var C=L,I=t(201);const k={class:"home"};function j(e,n,t,a,i,r){const c=(0,s.up)("top-nav"),o=(0,s.up)("banner"),l=(0,s.up)("ver-list"),u=(0,s.up)("music-list");return(0,s.wg)(),(0,s.iD)("div",k,[(0,s.Wm)(c),(0,s.Wm)(o),(0,s.Wm)(l),(0,s.Wm)(u)])}const z=e=>((0,s.dD)("data-v-6cc4d512"),e=e(),(0,s.Cn)(),e),T={class:"topNav"},x=z((()=>(0,s._)("div",{class:"topLeft"},[(0,s._)("span",{class:"iconfont icon-danlieliebiao"})],-1))),N={class:"topCenter"},X=z((()=>(0,s._)("span",{class:"navBtn active"},"发现",-1))),B=z((()=>(0,s._)("span",{class:"navBtn"},"云村",-1))),K=z((()=>(0,s._)("span",{class:"navBtn"},"视频",-1))),V=z((()=>(0,s._)("span",{class:"iconfont icon-sousuo"},null,-1))),U=[V];function Z(e,n){return(0,s.wg)(),(0,s.iD)("div",T,[x,(0,s._)("div",N,[(0,s._)("span",{class:"navBtn",onClick:n[0]||(n[0]=n=>e.$router.push("/my"))},"我的"),X,B,K]),(0,s._)("div",{class:"topRight",onClick:n[1]||(n[1]=n=>e.$router.push("/searchView"))},U)])}const R={},E=(0,A.Z)(R,[["render",Z],["__scopeId","data-v-6cc4d512"]]);var S=E;const W=["src"];function G(e,n,t,a,i,r){const c=(0,s.up)("swiper-slide"),o=(0,s.up)("swiper");return(0,s.wg)(),(0,s.j4)(o,{modules:a.modules,pagination:{clickable:!0}},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.res,((e,n)=>((0,s.wg)(),(0,s.j4)(c,{key:n},{default:(0,s.w5)((()=>[(0,s._)("img",{src:e.pic,alt:"test"},null,8,W)])),_:2},1024)))),128))])),_:1},8,["modules"])}var M=t(911),Y=t(691),F=t(813),q={components:{Swiper:Y.tq,SwiperSlide:Y.o5},setup(){var e=(0,P.iH)([{pic:t(182)},{pic:t(182)},{pic:t(182)},{pic:t(182)},{pic:t(182)},{pic:t(182)},{pic:t(182)}]);return(0,s.bv)((async()=>{let n={};n=await(0,F.Eg)(1),e.value=n.data.banners})),{res:e,modules:[M.tl]}}};const Q=(0,A.Z)(q,[["render",G],["__scopeId","data-v-c1a1ef94"]]);var J=Q;const _={class:"iconList"},$=(0,s.uE)('<div class="iconItem" data-v-6ac635ec><span class="iconfont icon-rili" data-v-6ac635ec></span><span class="char" data-v-6ac635ec>每日推荐</span></div><div class="iconItem" data-v-6ac635ec><span class="iconfont icon-shouyinji" data-v-6ac635ec></span><span class="char" data-v-6ac635ec>私人FM</span></div><div class="iconItem" data-v-6ac635ec><span class="iconfont icon-gedan" data-v-6ac635ec></span><span class="char" data-v-6ac635ec>歌单</span></div><div class="iconItem" data-v-6ac635ec><span class="iconfont icon-paixingbang" data-v-6ac635ec></span><span class="char" data-v-6ac635ec>排行榜</span></div><div class="iconItem" data-v-6ac635ec><span class="iconfont icon-danlieliebiao" data-v-6ac635ec></span><span class="char" data-v-6ac635ec>单列列表</span></div>',5),ee=[$];function ne(e,n){return(0,s.wg)(),(0,s.iD)("div",_,ee)}const te={},ae=(0,A.Z)(te,[["render",ne],["__scopeId","data-v-6ac635ec"]]);var se=ae;const ie=e=>((0,s.dD)("data-v-b1921a76"),e=e(),(0,s.Cn)(),e),re={class:"musicList"},ce=ie((()=>(0,s._)("div",{class:"listTop"},[(0,s._)("div",{class:"topTitle"},"发现好歌单"),(0,s._)("div",{class:"seeMore"},"查看更多")],-1))),oe={class:"listBody"},le=["src","alt"],ue=ie((()=>(0,s._)("br",null,null,-1))),de={class:"name"},pe={class:"playCount"},fe=ie((()=>(0,s._)("span",{class:"iconfont icon-bofang"},null,-1)));function ve(e,n,t,a,i,c){const o=(0,s.up)("router-link"),l=(0,s.up)("swiper-slide"),u=(0,s.up)("swiper");return(0,s.wg)(),(0,s.iD)("div",re,[ce,(0,s._)("div",oe,[(0,s.Wm)(u,{modules:a.modules,"slides-per-view":3},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.state.res2,((e,n)=>((0,s.wg)(),(0,s.j4)(l,{key:n},{default:(0,s.w5)((()=>[(0,s.Wm)(o,{to:{path:"/listview",query:{id:e.id}}},{default:(0,s.w5)((()=>[(0,s._)("img",{src:e.picUrl,alt:e.name},null,8,le),ue,(0,s._)("span",de,(0,r.zw)(e.name),1),(0,s._)("span",pe,[fe,(0,s.Uk)((0,r.zw)(a.changeCount(e.playCount)),1)])])),_:2},1032,["to"])])),_:2},1024)))),128))])),_:1},8,["modules"])])])}var ye={components:{Swiper:Y.tq,SwiperSlide:Y.o5},setup(){let e=(0,P.qj)({res2:[{id:""}]}),n=function(e){let n=e>1e8?(e/1e8).toFixed(1)+"亿":e>1e4?(e/1e4).toFixed(1)+"W":e;return n};return(0,s.bv)((async()=>{e.res2=await(await(0,F.i9)()).data.result})),{state:e,changeCount:n,modules:[M.tl]}}};const ge=(0,A.Z)(ye,[["render",ve],["__scopeId","data-v-b1921a76"]]);var me=ge,we={name:"HomeView",components:{topNav:S,banner:J,verList:se,musicList:me}};const Pe=(0,A.Z)(we,[["render",j]]);var he=Pe,be=(0,h.MT)({state:{playlist:[{al:{id:29597,name:"有点野",pic:74766790689775,picUrl:"http://p4.music.126.net/vu3Cdo_dPq8HKOPI6_YXfA==/74766790689775"},name:"屋顶",id:29803531}],playCurrentIndex:0,lyric:{data:{lrc:{lyric:""}}},music:{data:{data:[{url:"http://m801.music.126.net/20220921085447/1de6dc3483565c6f5a355e1f4c082698/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/14096603784/5c41/2d73/b063/8c4f510e1b47b022b7adbaebcec9014d.mp3"}]}},currentTime:0,InterValId:0,userInfo:(0,P.qj)({phone:"",password:"",account:{data:{level:0,listenSongs:0,peopleCanSeeMyPlayRecord:!0,createDays:0,profile:{nickname:"未登录"}}}}),result:(0,P.qj)({data:{account:{userName:"未登录"}}}),nowLogin:!1,isLogin:!1},getters:{lyricList(e){let n=e.lyric.data.lrc.lyric.split(/\n/gis).map(((e,n)=>{let t=e.split(/\]/gis),a=t[0].slice(1,3),s=t[0].slice(4,6),i=t[0].split(/\./gis)[1];return{min:a,sec:s,mill:i,msTime:60*parseInt(a)*1e3+1e3*parseInt(s)+parseInt(i),lyric:t[1]}}));return n.forEach(((e,t)=>{t==n.length-1?e.pre=0:e.pre=n[t+1].msTime})),n}},mutations:{setNowLogin(e,n){e.nowLogin=n},setPlayList(e,n){e.playlist=n},setPlayIndex(e,n){e.playCurrentIndex=n},setLyric(e,n){e.lyric=n},setMusic(e,n){e.music=n},setCurrentTime(e,n){e.currentTime=n},setUserInfo(e,n){e.userInfo.password=n[1].password,e.userInfo.phone=n[1].phone,e.result=n[0],e.isLogin=!0,e.nowLogin=!1},setUserAccount(e,n){e.userInfo.account=n}},actions:{async reqLyric(e,n){let t=await(0,F.sO)(n.id);e.commit("setLyric",t)},async reqMusic(e,n){let t=await(0,F.$s)(n.id);e.commit("setMusic",t)},async reqUserInfo(e,n){let t=await(0,F.bG)(n);if(200==t.data.code){e.commit("setUserInfo",[t,n]);let a=await(0,F.nE)(t.data.account.id);200==a.data.code&&(localStorage.userData=JSON.stringify(a),console.log("detail:",a),e.commit("setUserAccount",a))}}},modules:{}});const Ae=[{path:"/",name:"home",component:he},{path:"/listview",name:"listview",component:()=>t.e(534).then(t.bind(t,534))},{path:"/musicview",name:"musicview",component:()=>Promise.resolve().then(t.bind(t,15))},{path:"/searchView",name:"searchView",component:()=>t.e(540).then(t.bind(t,540))},{path:"/my",name:"my",beforeEnter:(e,n,t)=>{console.log("store.state.isLogin",be.state.isLogin),void 0==localStorage.userData?be.state.isLogin?t():t("/login"):(be.state.isLogin=!0,be.commit("setUserAccount",JSON.parse(localStorage.userData)),t())},component:()=>t.e(62).then(t.bind(t,62))},{path:"/login",name:"login",component:()=>t.e(575).then(t.bind(t,575))}],De=(0,I.p7)({history:createWebHashHistory("http://Orangepeel-hao.github.io/musicvue3/"),routes:Ae});var He=De;(0,a.ri)(C).use(be).use(He).mount("#app")},15:function(e,n,t){t.r(n),t.d(n,{default:function(){return I}});var a=t(252),s=t(577),i=t(963),r="data:image/png;base64,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",c=t.p+"img/d7e4e3a244701ee85fecb5d4f6b5bd57.44a282a2.png";const o=e=>((0,a.dD)("data-v-011fdeb0"),e=e(),(0,a.Cn)(),e),l={class:"musicBody"},u={class:"main"},d={class:"tops"},p={class:"title"},f=o((()=>(0,a._)("span",{class:"iconfont icon-fenxiang"},null,-1))),v=o((()=>(0,a._)("img",{class:"disc",src:c,alt:""},null,-1))),y=["src"],g=o((()=>(0,a._)("div",{class:"top"},null,-1))),m=o((()=>(0,a._)("div",{class:"foot"},null,-1))),w={class:"musicPanel"},P={class:"panelBtn"},h=o((()=>(0,a._)("span",{class:"iconfont icon-24gl-repeat2"},null,-1))),b=o((()=>(0,a._)("span",{class:"iconfont icon-danlieliebiao"},null,-1)));function A(e,n,t,c,o,A){return(0,a.wg)(),(0,a.iD)("div",l,[(0,a._)("div",{class:"bg",style:(0,s.j5)({backgroundImage:`url('${t.playDetail.al.picUrl}')`})},null,4),(0,a._)("div",u,[(0,a._)("div",d,[(0,a._)("span",{class:"iconfont icon-xitongfanhui",onClick:n[0]||(n[0]=n=>e.$emit("back"))}),(0,a._)("div",p,(0,s.zw)(t.playDetail.name),1),f]),e.ly?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",{key:0,class:"content",onClick:n[1]||(n[1]=n=>e.ly=!e.ly)},[(0,a._)("img",{class:(0,s.C_)(["needle",{active:t.paused}]),src:r,alt:""},null,2),v,(0,a._)("img",{class:"pic",src:t.playDetail.al.picUrl,alt:""},null,8,y)])),e.ly?((0,a.wg)(),(0,a.iD)("div",{key:1,ref:"lyric",class:"lyric",onClick:n[2]||(n[2]=n=>e.ly=!e.ly)},[g,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.lyricList,((n,t)=>((0,a.wg)(),(0,a.iD)("p",{class:(0,s.C_)({active:1e3*e.currentTime<n.pre&&1e3*e.currentTime>n.msTime}),key:t},(0,s.zw)(n.lyric),3)))),128)),m],512)):(0,a.kq)("",!0),(0,a._)("div",w,[(0,a._)("div",P,[h,(0,a._)("span",{class:"iconfont icon-24gl-previous",onClick:n[3]||(n[3]=e=>c.goplay(-1))}),(0,a.wy)((0,a._)("span",{class:"play iconfont icon-bofang",onClick:n[4]||(n[4]=(...e)=>t.playf&&t.playf(...e))},null,512),[[i.F8,t.paused]]),(0,a.wy)((0,a._)("span",{class:"play iconfont icon-zanting",onClick:n[5]||(n[5]=(...e)=>t.playf&&t.playf(...e))},null,512),[[i.F8,!t.paused]]),(0,a._)("span",{class:"iconfont icon-24gl-next",onClick:n[6]||(n[6]=e=>c.goplay(1))}),b])])])])}var D=t(262),H=t(907),O={props:["playDetail","playf","paused","show"],name:"musicview",computed:{...(0,H.rn)(["playlist","playCurrentIndex","lyric","InterValId","currentTime"]),...(0,H.Se)(["lyricList"]),...(0,H.OI)(["setCurrentTime"])},setup(){let e=(0,H.oR)(),n=(0,D.qj)({ly:!0}),{proxy:t}=(0,a.FN)(),s=n=>{console.log("切换歌曲");let a=t.playCurrentIndex+n;a=a<0?t.playlist.length-1:a,e.commit("setPlayIndex",a),e.dispatch("reqLyric",t.playlist[a]),e.dispatch("reqMusic",t.playlist[a])},i=(0,a.YP)((()=>[n.ly,t.show]),(n=>{console.log("获取歌词"),n[0]&&n[1]&&e.dispatch("reqLyric",t.playDetail),i()}));return(0,a.YP)((()=>e.state.currentTime),(()=>{if(console.log("歌词滚动"),t.show&&n.ly){let e=document.querySelector("p.active");if(null!==e){let n=[e][0].offsetTop,a=t.$refs.lyric.offsetHeight/2;t.$refs.lyric.scrollTop=n-a}}})),{...(0,D.BK)(n),proxy:t,goplay:s,lyricload:i}}},L=t(744);const C=(0,L.Z)(O,[["render",A],["__scopeId","data-v-011fdeb0"]]);var I=C},182:function(e,n,t){e.exports=t.p+"img/1.dbf5edab.jpg"}},n={};function t(a){var s=n[a];if(void 0!==s)return s.exports;var i=n[a]={exports:{}};return e[a](i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,a,s,i){if(!a){var r=1/0;for(u=0;u<e.length;u++){a=e[u][0],s=e[u][1],i=e[u][2];for(var c=!0,o=0;o<a.length;o++)(!1&i||r>=i)&&Object.keys(t.O).every((function(e){return t.O[e](a[o])}))?a.splice(o--,1):(c=!1,i<r&&(r=i));if(c){e.splice(u--,1);var l=s();void 0!==l&&(n=l)}}return n}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[a,s,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,a){return t.f[a](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{62:"af4fee46",534:"7fbe1aea",540:"e9a83b28",575:"89fe7106"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{62:"37a1fd80",534:"a60db99e",540:"cf020703",575:"bea2b003"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="musicapp:";t.l=function(a,s,i,r){if(e[a])e[a].push(s);else{var c,o;if(void 0!==i)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==n+i){c=d;break}}c||(o=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,t.nc&&c.setAttribute("nonce",t.nc),c.setAttribute("data-webpack",n+i),c.src=a),e[a]=[s];var p=function(n,t){c.onerror=c.onload=null,clearTimeout(f);var s=e[a];if(delete e[a],c.parentNode&&c.parentNode.removeChild(c),s&&s.forEach((function(e){return e(t)})),n)return n(t)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=p.bind(null,c.onerror),c.onload=p.bind(null,c.onload),o&&document.head.appendChild(c)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="http://Orangepeel-hao.github.io/musicvue3/"}(),function(){var e=function(e,n,t,a){var s=document.createElement("link");s.rel="stylesheet",s.type="text/css";var i=function(i){if(s.onerror=s.onload=null,"load"===i.type)t();else{var r=i&&("load"===i.type?"missing":i.type),c=i&&i.target&&i.target.href||n,o=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");o.code="CSS_CHUNK_LOAD_FAILED",o.type=r,o.request=c,s.parentNode.removeChild(s),a(o)}};return s.onerror=s.onload=i,s.href=n,document.head.appendChild(s),s},n=function(e,n){for(var t=document.getElementsByTagName("link"),a=0;a<t.length;a++){var s=t[a],i=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(i===e||i===n))return s}var r=document.getElementsByTagName("style");for(a=0;a<r.length;a++){s=r[a],i=s.getAttribute("data-href");if(i===e||i===n)return s}},a=function(a){return new Promise((function(s,i){var r=t.miniCssF(a),c=t.p+r;if(n(r,c))return s();e(a,c,s,i)}))},s={826:0};t.f.miniCss=function(e,n){var t={62:1,534:1,540:1,575:1};s[e]?n.push(s[e]):0!==s[e]&&t[e]&&n.push(s[e]=a(e).then((function(){s[e]=0}),(function(n){throw delete s[e],n})))}}(),function(){var e={826:0};t.f.j=function(n,a){var s=t.o(e,n)?e[n]:void 0;if(0!==s)if(s)a.push(s[2]);else{var i=new Promise((function(t,a){s=e[n]=[t,a]}));a.push(s[2]=i);var r=t.p+t.u(n),c=new Error,o=function(a){if(t.o(e,n)&&(s=e[n],0!==s&&(e[n]=void 0),s)){var i=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;c.message="Loading chunk "+n+" failed.\n("+i+": "+r+")",c.name="ChunkLoadError",c.type=i,c.request=r,s[1](c)}};t.l(r,o,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,a){var s,i,r=a[0],c=a[1],o=a[2],l=0;if(r.some((function(n){return 0!==e[n]}))){for(s in c)t.o(c,s)&&(t.m[s]=c[s]);if(o)var u=o(t)}for(n&&n(a);l<r.length;l++)i=r[l],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(u)},a=self["webpackChunkmusicapp"]=self["webpackChunkmusicapp"]||[];a.forEach(n.bind(null,0)),a.push=n.bind(null,a.push.bind(a))}();var a=t.O(void 0,[998],(function(){return t(988)}));a=t.O(a)})();
//# sourceMappingURL=index.b02f34ab.js.map