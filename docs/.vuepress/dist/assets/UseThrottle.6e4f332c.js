import{b as a}from"./index.es.d5086f52.js";import{_ as s,I as n,o as u,c as p,d,a as c,t as i,r as m}from"./app.9f1c550a.js";const _={name:"HelloWorld",props:{msg:String},setup(){const t=n(1),e=a(t,500);return{throttleCurrValue:t,throttleValue:e}}},h={style:{marginTop:"16"}};function V(t,e,f,o,v,T){const r=m("el-input");return u(),p("div",null,[d(r,{modelValue:o.throttleCurrValue,"onUpdate:modelValue":e[0]||(e[0]=l=>o.throttleCurrValue=l),placeholder:"Typed value",style:{width:"280"}},null,8,["modelValue"]),c("p",h,"throttleValue: "+i(o.throttleValue),1)])}var C=s(_,[["render",V],["__file","UseThrottle.vue"]]);export{C as default};
