import{_ as s,o as t,c as p,e as o,a as n,d as c,r as e}from"./app.9d916f81.js";const u={},l=n("h1",{id:"\u67F1\u72B6\u56FE",tabindex:"-1"},"\u67F1\u72B6\u56FE",-1),i=n("p",null,"\u67F1\u72B6\u56FE",-1),k=n("h2",{id:"\u57FA\u7840\u7528\u6CD5",tabindex:"-1"},"\u57FA\u7840\u7528\u6CD5",-1),r=c(`<div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dz-bar-chart</span> 
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        color: <span class="token punctuation">&#39;</span>#FFC95A<span class="token punctuation">&#39;</span>
      },
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        color: <span class="token punctuation">&#39;</span>#1D88FF<span class="token punctuation">&#39;</span>
      }
    ]<span class="token punctuation">&quot;</span></span> 
    <span class="token attr-name">:config</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      xAxisConfig: {
        type: <span class="token punctuation">&#39;</span>category<span class="token punctuation">&#39;</span>,
        data: [<span class="token punctuation">&#39;</span>\u8D8A\u5C42<span class="token punctuation">&#39;</span>, <span class="token punctuation">&#39;</span>\u8D85\u91CF<span class="token punctuation">&#39;</span>, <span class="token punctuation">&#39;</span>\u7C89\u5C18<span class="token punctuation">&#39;</span>, <span class="token punctuation">&#39;</span>\u566A\u58F0<span class="token punctuation">&#39;</span>, <span class="token punctuation">&#39;</span>\u5E9F\u6C34<span class="token punctuation">&#39;</span>, <span class="token punctuation">&#39;</span>\u5B89\u5168<span class="token punctuation">&#39;</span>, <span class="token punctuation">&#39;</span>\u6B20\u7F34<span class="token punctuation">&#39;</span>],
      },
      legendConfig: {
        show: false
      },
      aAxisLabelConfig: {
        color: <span class="token punctuation">&#39;</span>#D1F9FE<span class="token punctuation">&#39;</span>,
        textStyle: {
          fontSize: <span class="token punctuation">&#39;</span>10<span class="token punctuation">&#39;</span>,
        },
        interval: 0,
      },
      yAxisConfig: {
        type: <span class="token punctuation">&#39;</span>value<span class="token punctuation">&#39;</span>,
      },
      gridConfig: {
        left: 50,
        right: 30,
        top: 50,
        bottom: 50,
      },
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
</code></pre></div><h2 id="api" tabindex="-1">Api</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>data</td><td>\u56FE\u8868\u6570\u636E</td><td>object[]</td><td>-</td></tr><tr><td>config</td><td>\u56FE\u8868\u4E13\u5C5E\u914D\u7F6E</td><td>object</td><td>-</td></tr></tbody></table><p><strong>config\u914D\u7F6E\u9879\u53C2\u8003echarts\u5B98\u65B9\u6587\u6863</strong><br> \u5176\u4F59Api\u548C\u901A\u7528\u56FE\u8868\u76F8\u540C</p>`,4);function d(g,h){const a=e("BarChart");return t(),p("div",null,[l,i,k,o(a),r])}var f=s(u,[["render",d],["__file","BarChart.html.vue"]]);export{f as default};
