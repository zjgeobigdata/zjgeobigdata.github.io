import{_ as s,o as t,c as p,e as o,a as n,d as c,r as e}from"./app.9d916f81.js";const u={},l=n("h1",{id:"\u70ED\u529B\u56FE",tabindex:"-1"},"\u70ED\u529B\u56FE",-1),i=n("p",null,"\u70ED\u529B\u56FE",-1),k=n("h2",{id:"\u57FA\u7840\u7528\u6CD5",tabindex:"-1"},"\u57FA\u7840\u7528\u6CD5",-1),r=c(`<div class="language-vue ext-vue"><pre class="language-vue"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dz-heat-map</span> 
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span> 
    <span class="token attr-name">:x-axis-data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xAxisData<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:y-axis-data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>yAxisData<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>chartData<span class="token punctuation">&quot;</span></span> 
    <span class="token attr-name">:config</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      label: {
        show: true,
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowColor: <span class="token punctuation">&#39;</span>rgba(0, 0, 0, 0.5)<span class="token punctuation">&#39;</span>,
        },
      },
      tooltipConfig: {
        position: <span class="token punctuation">&#39;</span>top<span class="token punctuation">&#39;</span>
      },
      gridConfig: {
        top: <span class="token punctuation">&#39;</span>10%<span class="token punctuation">&#39;</span>, left: <span class="token punctuation">&#39;</span>20%<span class="token punctuation">&#39;</span>, bottom: <span class="token punctuation">&#39;</span>32%<span class="token punctuation">&#39;</span>
      },
      xAxisConfig: {
        type: <span class="token punctuation">&#39;</span>category<span class="token punctuation">&#39;</span>,
        splitArea: {
          show: true,
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: <span class="token punctuation">&#39;</span>#fff<span class="token punctuation">&#39;</span>,
          },
        },
      },
      yAxisConfig: {
        type: <span class="token punctuation">&#39;</span>category<span class="token punctuation">&#39;</span>,
        splitArea: {
          show: true,
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: <span class="token punctuation">&#39;</span>#fff<span class="token punctuation">&#39;</span>,
          },
        },
      },
      visualMapConfig: {
        min: 0,
        max: 100,
        calculable: true,
        orient: <span class="token punctuation">&#39;</span>horizontal<span class="token punctuation">&#39;</span>,
        left: <span class="token punctuation">&#39;</span>36%<span class="token punctuation">&#39;</span>,
        bottom: <span class="token punctuation">&#39;</span>5%<span class="token punctuation">&#39;</span>,
        inRange: {
          color: [<span class="token punctuation">&#39;</span>#002A57<span class="token punctuation">&#39;</span>, <span class="token punctuation">&#39;</span>#1D88FF<span class="token punctuation">&#39;</span>],
        },
        textStyle: {
          color: <span class="token punctuation">&#39;</span>#fff<span class="token punctuation">&#39;</span>
        }
      }
    }<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">const</span> chartData <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>item<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> item<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> item<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> xAxisData <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;\u81EA\u7136\u4FEE\u590D\u7C7B&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u5DE5\u7A0B\u6CBB\u7406\u7C7B&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u518D\u8BBE\u77FF\u6743\u7C7B&#39;</span><span class="token punctuation">]</span>
  <span class="token keyword">const</span> yAxisData <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;\u975E\u5341\u56DB\u4E94&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u5341\u56DB\u4E94&#39;</span><span class="token punctuation">]</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- Add &quot;scoped&quot; attribute to limit CSS to this component only --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 79<span class="token punctuation">,</span> 135<span class="token punctuation">,</span> 0.9<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="api" tabindex="-1">Api</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>data</td><td>\u56FE\u8868\u6570\u636E</td><td>object[]</td><td>-</td></tr><tr><td>xAxisData</td><td>\u6A2A\u5750\u6807\u6570\u636E</td><td>number[]</td><td>-</td></tr><tr><td>yAxisData</td><td>\u7EB5\u5750\u6807\u6570\u636E</td><td>number[]</td><td>-</td></tr><tr><td>config</td><td>\u56FE\u8868\u4E13\u5C5E\u914D\u7F6E</td><td>object</td><td>-</td></tr></tbody></table><p><strong>config\u914D\u7F6E\u9879\u53C2\u8003echarts\u5B98\u65B9\u6587\u6863</strong><br> \u5176\u4F59Api\u548C\u901A\u7528\u56FE\u8868\u76F8\u540C</p>`,4);function d(m,g){const a=e("HeatMap");return t(),p("div",null,[l,i,k,o(a),r])}var h=s(u,[["render",d],["__file","HeatMap.html.vue"]]);export{h as default};
