import{R as t}from"./index.e4f588ca.js";import{_ as r,f as i,I as d,o as _,c as p,a as n,t as f,e as a,w as o,a4 as m,r as v,a2 as C,a3 as g,b as c}from"./app.9d916f81.js";const h=i({name:"hello-world",setup(){const e=d(!1);return{loading:e,requestSuccess:async()=>{e.value=!0,await t.get("https://dzfront.usemock.com/user/list",null,{loading:!1}),e.value=!1},cancel:async()=>{await t.cancelRequest("https://dzfront.usemock.com/user/list"),e.value=!1,m.error("\u5DF2\u53D6\u6D88\u8BF7\u6C42")}}}}),q=e=>(C("data-v-42795958"),e=e(),g(),e),y={class:"container"},k=q(()=>n("p",null,"\u53D6\u6D88\u8BF7\u6C42\u793A\u4F8B",-1)),w=c("request"),S=c("cancel");function B(e,l,u,D,R,I){const s=v("el-button");return _(),p("div",y,[k,n("p",null,f(e.loading?"requesting...":"wait for request"),1),a(s,{loading:e.loading,type:"primary",onClick:e.requestSuccess},{default:o(()=>[w]),_:1},8,["loading","onClick"]),a(s,{type:"primary",onClick:e.cancel},{default:o(()=>[S]),_:1},8,["onClick"])])}var b=r(h,[["render",B],["__scopeId","data-v-42795958"],["__file","RequestCancel.vue"]]);export{b as default};
