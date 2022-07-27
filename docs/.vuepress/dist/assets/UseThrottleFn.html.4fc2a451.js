import{_ as a,o as t,c as p,d as o,a as n,b as e,r as c}from"./app.4e695221.js";const l={},u=n("h1",{id:"usethrottlefn",tabindex:"-1"},"useThrottleFn",-1),k=n("p",null,"\u7528\u6765\u5904\u7406\u8282\u6D41\u51FD\u6570\u7684 Hook\u3002",-1),r=n("h2",{id:"\u57FA\u7840\u7528\u6CD5",tabindex:"-1"},"\u57FA\u7840\u7528\u6CD5",-1),i=e(`<div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">marginTop</span><span class="token punctuation">:</span> 16</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span> Clicked count: {{ throttleFnValue }} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>run<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      useThrottleFn\u6D4B\u8BD5
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">

<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useThrottleFn <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;dz-hooks&#39;</span><span class="token punctuation">;</span>


<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;HelloWorld&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">msg</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> throttleFnValue <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> run <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useThrottleFn</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      throttleFnValue<span class="token punctuation">.</span>value<span class="token operator">++</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      throttleFnValue<span class="token punctuation">,</span>
      run<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="api" tabindex="-1">Api</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>fn</td><td>\u9700\u8981\u8282\u6D41\u7684\u51FD\u6570</td><td>() =&gt; void</td><td>-</td></tr><tr><td>wait</td><td>\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u4E3A\u6BEB\u79D2</td><td>number</td><td>1000</td></tr></tbody></table>`,3);function d(g,h){const s=c("useThrottleFn");return t(),p("div",null,[u,k,r,o(s),i])}var _=a(l,[["render",d],["__file","UseThrottleFn.html.vue"]]);export{_ as default};
