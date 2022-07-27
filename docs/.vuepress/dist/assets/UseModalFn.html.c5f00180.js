import{_ as s,o as t,c as p,d as o,a as n,b as e,r as c}from"./app.4e695221.js";const l={},u=n("h1",{id:"usemodalfn",tabindex:"-1"},"useModalFn",-1),k=n("p",null,"\u4E00\u4E2A\u63A7\u5236Element Plus\u7684Modal\u5F39\u7A97\u72B6\u6001\u7684 Hook",-1),i=n("h2",{id:"\u57FA\u7840\u7528\u6CD5",tabindex:"-1"},"\u57FA\u7840\u7528\u6CD5",-1),r=e(`<div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>openModal<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">display</span><span class="token punctuation">:</span>block<span class="token punctuation">;</span><span class="token property">margin-top</span><span class="token punctuation">:</span>10px<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>click to open the Dialog<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dialog</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>visible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Tips<span class="token punctuation">&quot;</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>30%<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:before-close</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>closeModal<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>This is a Modal<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#footer</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dialog-footer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleCancel<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Cancel<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleOnOk<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Confirm<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dialog</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useModalFn <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;dz-hooks&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ElMessage <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;element-plus&#39;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span>
  visible<span class="token punctuation">,</span>
  editId<span class="token punctuation">,</span>
  openModal<span class="token punctuation">,</span>
  closeModal<span class="token punctuation">,</span>
  onCancel<span class="token punctuation">,</span>
  onOk
<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useModalFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleCancel</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">onCancel</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token function">ElMessage</span><span class="token punctuation">(</span><span class="token string">&#39;\u8C03\u7528\u4E86\u53D6\u6D88\u7684\u56DE\u8C03\u51FD\u6570&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleOnOk</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">onOk</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token function">ElMessage</span><span class="token punctuation">(</span><span class="token string">&#39;\u8C03\u7528\u4E86\u786E\u8BA4\u7684\u56DE\u8C03\u51FD\u6570&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.dialog-footer button:first-child</span> <span class="token punctuation">{</span>
  <span class="token property">margin-right</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="api" tabindex="-1">Api</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>visible</td><td>\u5F39\u7A97\u662F\u5426\u53EF\u89C1</td><td>boolean</td><td>-</td></tr><tr><td>editId</td><td>\u9700\u8981\u4F20\u5165\u5F39\u7A97\u7684id(\u901A\u5E38\u7528\u4E8E\u7F16\u8F91\u64CD\u4F5C)</td><td>any</td><td>-</td></tr><tr><td>openModal</td><td>\u6253\u5F00\u5F39\u7A97\u7684\u51FD\u6570</td><td>(editId:any)=&gt;void</td><td>-</td></tr><tr><td>closeModal</td><td>\u5173\u95ED\u5F39\u7A97\u7684\u51FD\u6570</td><td>()=&gt;void</td><td>-</td></tr><tr><td>onCancel</td><td>\u5F39\u7A97\u53D6\u6D88\u64CD\u4F5C\u7684\u56DE\u8C03\u51FD\u6570</td><td>(()=&gt;void)=&gt;void</td><td>-</td></tr><tr><td>onOk</td><td>\u5F39\u7A97\u786E\u8BA4\u64CD\u4F5C\u7684\u56DE\u8C03\u51FD\u6570</td><td>(()=&gt;void)=&gt;void</td><td>-</td></tr></tbody></table>`,3);function d(g,m){const a=c("UseModalFn");return t(),p("div",null,[u,k,i,o(a),r])}var q=s(l,[["render",d],["__file","UseModalFn.html.vue"]]);export{q as default};
