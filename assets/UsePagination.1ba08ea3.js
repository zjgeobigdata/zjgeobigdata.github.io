import{g as h}from"./index.es.0d176e7d.js";import{R as f}from"./index.e4f588ca.js";import{_ as C,f as v,o as i,c as z,K as b,h as e,x,w as y,e as a,F as w,r as n,ac as D}from"./app.9d916f81.js";const P=v({__name:"UsePagination",setup(S){const l=s=>f.get("https://dzfront.usemock.com/user/list",s,{loading:!1}),{pageNum:r,pageSize:p,total:c,onCurrentChange:g,onSizeChange:u,fetchData:k,pageDatas:o}=h({pageNum:1,pageSize:10,requestList:l,listKey:"records",pageSizeKey:"size",totalKey:"totalElements"});return(s,K)=>{const t=n("el-table-column"),_=n("el-table"),m=n("el-pagination"),d=D("loading");return i(),z(w,null,[b((i(),x(_,{data:e(o).data,style:{width:"100%"}},{default:y(()=>[a(t,{prop:"name",label:"\u65E5\u671F",width:"180"}),a(t,{prop:"date",label:"\u59D3\u540D",width:"180"}),a(t,{prop:"Address",label:"\u5730\u5740"})]),_:1},8,["data"])),[[d,e(o).loading]]),a(m,{class:"pagination",small:"",background:"",onSizeChange:e(u),onCurrentChange:e(g),layout:"total, sizes, prev, pager, next, jumper","current-page":e(r),"page-size":e(p),total:e(c)},null,8,["onSizeChange","onCurrentChange","current-page","page-size","total"])],64)}}});var F=C(P,[["__file","UsePagination.vue"]]);export{F as default};
