import{_ as a,I as r,o,x as s,r as n}from"./app.9d916f81.js";const c={__name:"CustomChart",setup(i){const e=r({title:{text:"Traffic Sources",left:"center"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{orient:"vertical",left:"left",data:["Direct","Email","Ad Networks","Video Ads","Search Engines"]},series:[{name:"Traffic Sources",type:"pie",radius:"55%",center:["50%","60%"],data:[{value:335,name:"Direct"},{value:310,name:"Email"},{value:234,name:"Ad Networks"},{value:135,name:"Video Ads"},{value:1548,name:"Search Engines"}],emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]});return(l,_)=>{const t=n("dz-charts");return o(),s(t,{class:"container",option:e.value},null,8,["option"])}}};var m=a(c,[["__scopeId","data-v-0ba155c2"],["__file","CustomChart.vue"]]);export{m as default};
