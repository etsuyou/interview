import{_ as a,c as e,o as t,a4 as s}from"./chunks/framework.B2xMVIVo.js";const c=JSON.parse('{"title":"Atom 在前端的使用","description":"","frontmatter":{},"headers":[],"relativePath":"tutorial/00-前端工具/Atom在前端的使用.md","filePath":"tutorial/00-前端工具/Atom在前端的使用.md","lastUpdated":1718865103000}'),i={name:"tutorial/00-前端工具/Atom在前端的使用.md"},l=[s(`<h1 id="atom-在前端的使用" tabindex="-1">Atom 在前端的使用 <a class="header-anchor" href="#atom-在前端的使用" aria-label="Permalink to &quot;Atom 在前端的使用&quot;">​</a></h1><h2 id="常用插件" tabindex="-1">常用插件 <a class="header-anchor" href="#常用插件" aria-label="Permalink to &quot;常用插件&quot;">​</a></h2><ul><li><code>Emmet</code>：快速生成 HTML 片段，比如输入 ul&gt;li*3 可以快速生成：</li></ul><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">ul</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">ul</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p><a href="https://atom.io/packages/emmet" target="_blank" rel="noreferrer">详细地址</a>，<a href="https://docs.emmet.io/cheat-sheet/" target="_blank" rel="noreferrer">Emmet 教程</a></p><ul><li><p><code>Snippets</code>：快速生成 js 代码片段（用来处理代码片段的模板输出），<a href="https://atom.io/packages/snippets" target="_blank" rel="noreferrer">详细地址</a></p></li><li><p><code>Tree View</code>：文件浏览器，<a href="https://atom.io/packages/tree-view" target="_blank" rel="noreferrer">详细地址</a></p></li><li><p><code>file icons</code>：文件识别图标，使用这个插件会让你的编辑器显示对应的图标，<a href="https://atom.io/packages/file-icons" target="_blank" rel="noreferrer">详细地址</a></p></li><li><p><code>language-javascript-jsx</code>：jsx 语法高亮 ，<a href="https://atom.io/packages/language-javascript-jsx" target="_blank" rel="noreferrer">详细地址</a></p></li><li><p><code>language-vue</code>：vue 语法高亮，<a href="https://atom.io/packages/language-vue" target="_blank" rel="noreferrer">详细地址</a></p></li><li><p><code>linter-eslint</code>：eslint 插件，<a href="https://atom.io/packages/linter-eslint" target="_blank" rel="noreferrer">详细地址</a></p></li><li><p><code>vue-snippets</code>：vue 代码片段，<a href="https://atom.io/packages/vue-snippets" target="_blank" rel="noreferrer">详细地址</a></p></li><li><p><code>pigments</code>：颜色显示器，<a href="https://atom.io/packages/pigments" target="_blank" rel="noreferrer">详细地址</a></p></li><li><p><code>linter-eslint</code>：语法检查</p></li><li><p><code>Atom-Beautify</code>：代码格式化</p></li></ul><p>参考链接：<a href="https://github.com/cucygh/JDFinance/blob/master/issue.md" target="_blank" rel="noreferrer">https://github.com/cucygh/JDFinance/blob/master/issue.md</a></p><h2 id="插件无法安装的问题" tabindex="-1">插件无法安装的问题 <a class="header-anchor" href="#插件无法安装的问题" aria-label="Permalink to &quot;插件无法安装的问题&quot;">​</a></h2><h3 id="方法一-设置代理" tabindex="-1">方法一：设置代理 <a class="header-anchor" href="#方法一-设置代理" aria-label="Permalink to &quot;方法一：设置代理&quot;">​</a></h3><p><code>C:\\Users\\smyhvae\\.atom\\.apm</code>目录下的.apmrc 配置文件（没有就新建一个）,然后添加代理信息：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>strict-ssl=false</span></span>
<span class="line"><span>https-proxy=http://127.0.0.1:1080/</span></span>
<span class="line"><span>http-proxy =http://127.0.0.1:1080/</span></span></code></pre></div><p>这里的 <a href="http://127.0.0.1:1080" target="_blank" rel="noreferrer">http://127.0.0.1:1080</a>，是我自己的 Shadowsocks 代理，你需要设置成自己的可用代理。 然后再执行：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>apm install --check</span></span></code></pre></div><p>应该可以测试成功，祝好运~~</p><p>参考链接：</p><ul><li><p><a href="https://atom-china.org/t/atom/984" target="_blank" rel="noreferrer">https://atom-china.org/t/atom/984</a></p></li><li><p><a href="https://zhenyong.github.io/2016/08/03/starting-atom/" target="_blank" rel="noreferrer">https://zhenyong.github.io/2016/08/03/starting-atom/</a></p></li></ul><h2 id="markdown-相关" tabindex="-1">Markdown 相关 <a class="header-anchor" href="#markdown-相关" aria-label="Permalink to &quot;Markdown 相关&quot;">​</a></h2><h3 id="在编辑器中预览" tabindex="-1">在编辑器中预览 <a class="header-anchor" href="#在编辑器中预览" aria-label="Permalink to &quot;在编辑器中预览&quot;">​</a></h3><p>2018-06-JD 日记.md</p><p>Packages -&gt; Markdown Preview -&gt; Toggle Preview</p><p>快捷键：Shift + Ctrl + M</p><h3 id="参考链接" tabindex="-1">参考链接： <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接：&quot;">​</a></h3><ul><li><a href="http://www.cnblogs.com/fanzhidongyzby/p/6637084.html" target="_blank" rel="noreferrer">使用 Atom 打造无懈可击的 Markdown 编辑器</a></li></ul><h2 id="相关设置" tabindex="-1">相关设置 <a class="header-anchor" href="#相关设置" aria-label="Permalink to &quot;相关设置&quot;">​</a></h2><h3 id="显示缩进线" tabindex="-1">显示缩进线 <a class="header-anchor" href="#显示缩进线" aria-label="Permalink to &quot;显示缩进线&quot;">​</a></h3><p>settings --&gt;Editor --&gt; Show Indent Guide</p>`,26)],g=a(i,[["render",function(r,n,p,h,o,d){return t(),e("div",null,l)}]]);export{c as __pageData,g as default};
