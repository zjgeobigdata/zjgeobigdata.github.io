import{c as r}from"./index.es.d5086f52.js";import{_ as s,I as a,o as l,c,a as u,t as _,d as i,w as p,r as d,e as m}from"./app.9f1c550a.js";const f={name:"HelloWorld",props:{msg:String},setup(){const e=a(1),{run:t}=r(()=>{e.value++},500);return{throttleFnValue:e,run:t}}},h={style:{marginTop:"16"}},F=m(" useThrottleFn\u6D4B\u8BD5 ");function T(e,t,k,o,v,x){const n=d("el-button");return l(),c("div",null,[u("p",h," Clicked count: "+_(o.throttleFnValue),1),i(n,{type:"primary",onClick:o.run},{default:p(()=>[F]),_:1},8,["onClick"])])}var V=s(f,[["render",T],["__file","UseThrottleFn.vue"]]);export{V as default};
