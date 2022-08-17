import{_ as s,o as t,c as p,e as o,a as n,d as e,r as c}from"./app.9d916f81.js";const u={},l=n("h1",{id:"\u73AF\u72B6\u56FE",tabindex:"-1"},"\u73AF\u72B6\u56FE",-1),i=n("p",null,"\u73AF\u72B6\u56FE",-1),k=n("h2",{id:"\u57FA\u7840\u7528\u6CD5",tabindex:"-1"},"\u57FA\u7840\u7528\u6CD5",-1),r=e(`<div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dz-ring-chart</span> 
      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[
        { value: 50, name: <span class="token punctuation">&#39;</span>\u5EFA\u7B51\u7528\u77F3\u6599<span class="token punctuation">&#39;</span> },
        { value: 40, name: <span class="token punctuation">&#39;</span>\u5176\u5B83\u975E\u91D1\u5C5E\u77FF\u4EA7<span class="token punctuation">&#39;</span> },
        { value: 25, name: <span class="token punctuation">&#39;</span>\u91D1\u5C5E\u77FF\u4EA7<span class="token punctuation">&#39;</span> },
        { value: 40, name: <span class="token punctuation">&#39;</span>\u80FD\u6E90\u77FF\u4EA7<span class="token punctuation">&#39;</span> },
        { value: 25, name: <span class="token punctuation">&#39;</span>\u6C34\u6C14\u77FF\u4EA7<span class="token punctuation">&#39;</span> },
      ]<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:config</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
        radius: [<span class="token punctuation">&#39;</span>35%<span class="token punctuation">&#39;</span>, <span class="token punctuation">&#39;</span>50%<span class="token punctuation">&#39;</span>],
        center: [<span class="token punctuation">&#39;</span>35%<span class="token punctuation">&#39;</span>, <span class="token punctuation">&#39;</span>50%<span class="token punctuation">&#39;</span>],
        legendConfig: {
          show: true,
          icon: <span class="token punctuation">&#39;</span>circle<span class="token punctuation">&#39;</span>,
          orient: <span class="token punctuation">&#39;</span>vertical<span class="token punctuation">&#39;</span>,
          left: <span class="token punctuation">&#39;</span>65%<span class="token punctuation">&#39;</span>,
          top: <span class="token punctuation">&#39;</span>20%<span class="token punctuation">&#39;</span>,
          align: <span class="token punctuation">&#39;</span>left<span class="token punctuation">&#39;</span>,
          itemGap: 5,
          itemWidth: 6, // \u8BBE\u7F6E\u5BBD\u5EA6
          itemHeight: 6, // \u8BBE\u7F6E\u9AD8\u5EA6
          textStyle: {
            color: <span class="token punctuation">&#39;</span>#95BEF1<span class="token punctuation">&#39;</span>,
            fontWeight: 400,
            fontSize: 12,
          },
          height: 250,
        },
        title: [{
          text: <span class="token punctuation">&#39;</span>50<span class="token punctuation">&#39;</span>,
          left: 75,
          top: 115,
          textStyle: {
            color: <span class="token punctuation">&#39;</span>#fff<span class="token punctuation">&#39;</span>,
            fontSize: 25,
            fontWeight: <span class="token punctuation">&#39;</span>normal<span class="token punctuation">&#39;</span>,
          },
        },
        {
          text: <span class="token punctuation">&#39;</span>\u8D44\u6E90\u79CD\u7C7B<span class="token punctuation">&#39;</span>,
          left: 80,
          top: 165,
          textStyle: {
            color: <span class="token punctuation">&#39;</span>#D1F9FE<span class="token punctuation">&#39;</span>,
            fontSize: 10,
            fontWeight: 500,
          },
        },
        {
          text: <span class="token punctuation">&#39;</span>\u79CD<span class="token punctuation">&#39;</span>,
          left: 120,
          top: 125,
          textStyle: {
            color: <span class="token punctuation">&#39;</span>#95BEF1<span class="token punctuation">&#39;</span>,
            fontSize: 10,
            fontWeight: 500,
          },
        }],
      }<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>79<span class="token punctuation">,</span>135<span class="token punctuation">,</span>0.9<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="api" tabindex="-1">Api</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>data</td><td>\u56FE\u8868\u6570\u636E</td><td>object[]</td><td>-</td></tr><tr><td>config</td><td>\u56FE\u8868\u4E13\u5C5E\u914D\u7F6E</td><td>object</td><td>-</td></tr></tbody></table><p><strong>config\u914D\u7F6E\u9879\u53C2\u8003echarts\u5B98\u65B9\u6587\u6863</strong><br> \u5176\u4F59Api\u548C\u901A\u7528\u56FE\u8868\u76F8\u540C</p>`,4);function d(g,h){const a=c("RingChart");return t(),p("div",null,[l,i,k,o(a),r])}var m=s(u,[["render",d],["__file","RingChart.html.vue"]]);export{m as default};
