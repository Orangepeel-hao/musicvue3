"use strict";(self["webpackChunkmusicapp"]=self["webpackChunkmusicapp"]||[]).push([[233],{233:function(s,e,a){a.r(e),a.d(e,{default:function(){return q}});var o=a(252);function r(s,e,a,r,t,n){const l=(0,o.up)("search-Top");return(0,o.wg)(),(0,o.j4)(l)}var t=a(963),n=a(577);const l=s=>((0,o.dD)("data-v-72d9b92c"),s=s(),(0,o.Cn)(),s),c={class:"searchTop"},i={class:"searchNav"},d=["placeholder"],u={key:0,class:"history"},y=l((()=>(0,o._)("span",{class:"title"},"历史:",-1))),p=["onClick"],w={key:1,class:"listBody"},h={class:"album"},k={class:"listNum"},g={class:"songItem"},m={class:"listName"},v={class:"tags"},f={class:"albumName"},_={class:"con"},L=["onClick"],W=l((()=>(0,o._)("span",{class:"iconfont icon-qita"},null,-1)));function D(s,e,a,r,l,D){return(0,o.wg)(),(0,o.iD)("div",c,[(0,o._)("div",i,[(0,o._)("span",{class:"iconfont icon-xitongfanhui",onClick:e[0]||(e[0]=e=>s.$router.go(-1))}),(0,o.wy)((0,o._)("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=e=>s.searchWord=e),placeholder:s.placeholder,onKeydown:e[2]||(e[2]=(0,t.D2)(((...s)=>r.setKeyWord&&r.setKeyWord(...s)),["enter"]))},null,40,d),[[t.nr,s.searchWord]])]),s.searchWord?((0,o.wg)(),(0,o.iD)("div",w,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.result.data.result.songs,((e,a)=>((0,o.wg)(),(0,o.iD)("div",{class:"list",key:a},[(0,o._)("div",h,[(0,o._)("div",k,(0,n.zw)(a+1),1),(0,o._)("div",g,[(0,o._)("span",m,(0,n.zw)(e.name),1),(0,o._)("div",v,[(0,o._)("span",f,(0,n.zw)(e.al.name)+"-"+(0,n.zw)(e.ar[0].name),1)])])]),(0,o._)("div",_,[(0,o._)("span",{class:"iconfont icon-bofang",onClick:e=>s.setPlayIndex(a)},null,8,L),W])])))),128))])):((0,o.wg)(),(0,o.iD)("div",u,[y,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.keywordList,((s,e)=>((0,o.wg)(),(0,o.iD)("span",{class:"historyItem",key:e,onClick:e=>r.historySearch(s)},(0,n.zw)(s),9,p)))),128))]))])}var C=a(262),K=a(813),S=a(907),b={name:"searchTop",methods:{...(0,S.OI)(["setPlayIndex"])},setup(){let s=(0,S.oR)(),e=(0,C.qj)({searchWord:"",placeholder:"123",keywordList:[],result:{data:{result:{songs:[{name:"",ar:[{name:""}],al:{name:""}}]}}}}),{proxy:a}=(0,o.FN)();(0,o.wF)((()=>{e.keywordList=localStorage.keywordList?JSON.parse(localStorage.keywordList):[]}));let r=async()=>{if(console.log("data:",e),""===e.searchWord.trim())return;e.keywordList.push(e.searchWord),e.keywordList=Array.from(new Set(e.keywordList)),e.keywordList.length>10&&(e.keywordList=e.keywordList.slice(1,11)),localStorage.keywordList=JSON.stringify(e.keywordList);let a=await(0,K.ao)(e.searchWord);console.log("333",a),e.result=a,s.commit("setPlayList",a.data.result.songs),s.dispatch("reqMusic",a.data.result.songs[0])},t=s=>{e.searchWord=s,a.setKeyWord()};return{...(0,C.BK)(e),proxy:a,store:s,setKeyWord:r,historySearch:t}}},N=a(744);const x=(0,N.Z)(b,[["render",D],["__scopeId","data-v-72d9b92c"]]);var I=x,z={name:"searchView",components:{searchTop:I}};const T=(0,N.Z)(z,[["render",r]]);var q=T}}]);
//# sourceMappingURL=233.8496a0a2.js.map