import{u as l}from"./index.es.d5086f52.js";import{_ as t,I as u,o as s,c,d,a as p,t as i,r as m}from"./app.9f1c550a.js";const _={name:"HelloWorld",props:{msg:String},setup(){const o=u(1),e=l(o,500);return{debounceCurrValue:o,debounceValue:e}}},V={style:{marginTop:"16"}};function b(o,e,f,n,v,D){const a=m("el-input");return s(),c("div",null,[d(a,{modelValue:n.debounceCurrValue,"onUpdate:modelValue":e[0]||(e[0]=r=>n.debounceCurrValue=r),placeholder:"Typed value",style:{width:"280"}},null,8,["modelValue"]),p("p",V,"DebouncedValue: "+i(n.debounceValue),1)])}var C=t(_,[["render",b],["__file","UseDebounce.vue"]]);export{C as default};
