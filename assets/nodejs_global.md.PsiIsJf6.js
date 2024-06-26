import{_ as s,c as a,o as i,a4 as e}from"./chunks/framework.B2xMVIVo.js";const c=JSON.parse('{"title":"面试官：说说 Node. js 有哪些全局对象？","description":"","frontmatter":{},"headers":[],"relativePath":"nodejs/global.md","filePath":"nodejs/global.md","lastUpdated":1718865103000}'),l={name:"nodejs/global.md"},n=[e(`<h1 id="面试官-说说-node-js-有哪些全局对象" tabindex="-1">面试官：说说 Node. js 有哪些全局对象？ <a class="header-anchor" href="#面试官-说说-node-js-有哪些全局对象" aria-label="Permalink to &quot;面试官：说说 Node. js 有哪些全局对象？&quot;">​</a></h1><p><img src="https://static.vue-js.com/79c7b100-c2a3-11eb-85f6-6fac77c0c9b3.png" alt="" loading="lazy"></p><h2 id="一、是什么" tabindex="-1">一、是什么 <a class="header-anchor" href="#一、是什么" aria-label="Permalink to &quot;一、是什么&quot;">​</a></h2><p>在浏览器 <code>JavaScript</code> 中，通常<code> window</code> 是全局对象， 而 <code>Nodejs </code>中的全局对象是 <code>global</code></p><p>在<code>NodeJS</code>里，是不可能在最外层定义一个变量，因为所有的用户代码都是当前模块的，只在当前模块里可用，但可以通过<code>exports</code>对象的使用将其传递给模块外部</p><p>所以，在<code>NodeJS</code>中，用<code>var</code>声明的变量并不属于全局的变量，只在当前模块生效</p><p>像上述的<code>global</code>全局对象则在全局作用域中，任何全局变量、函数、对象都是该对象的一个属性值</p><h2 id="二、有哪些" tabindex="-1">二、有哪些 <a class="header-anchor" href="#二、有哪些" aria-label="Permalink to &quot;二、有哪些&quot;">​</a></h2><p>将全局对象分成两类：</p><ul><li><p>真正的全局对象</p></li><li><p>模块级别的全局变量</p></li></ul><h3 id="真正的全局对象" tabindex="-1">真正的全局对象 <a class="header-anchor" href="#真正的全局对象" aria-label="Permalink to &quot;真正的全局对象&quot;">​</a></h3><p>下面给出一些常见的全局对象：</p><ul><li><p>Class:Buffer</p></li><li><p>process</p></li><li><p>console</p></li><li><p>clearInterval、setInterval</p></li><li><p>clearTimeout、setTimeout</p></li><li><p>global</p></li></ul><h4 id="class-buffer" tabindex="-1">Class:Buffer <a class="header-anchor" href="#class-buffer" aria-label="Permalink to &quot;Class:Buffer&quot;">​</a></h4><p>可以处理二进制以及非<code>Unicode</code>编码的数据</p><p>在<code>Buffer</code>类实例化中存储了原始数据。<code>Buffer</code>类似于一个整数数组，在V8堆原始存储空间给它分配了内存</p><p>一旦创建了<code>Buffer</code>实例，则无法改变大小</p><h4 id="process" tabindex="-1">process <a class="header-anchor" href="#process" aria-label="Permalink to &quot;process&quot;">​</a></h4><p>进程对象，提供有关当前进程的信息和控制</p><p>包括在执行<code>node</code>程序进程时，如果需要传递参数，我们想要获取这个参数需要在<code>process</code>内置对象中</p><p>启动进程：</p><div class="language-cmd vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cmd</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> node index.js 参数1 参数2 参数3</span></span></code></pre></div><p>index.js文件如下：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">process.argv.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">forEach</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">val</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">index</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">index</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}: \${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">val</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><p>输出如下：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">usr</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">local</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">bin</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">node</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Users</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">mjr</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">work</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">node</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">process</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">args.js</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">参数1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">参数2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">参数3</span></span></code></pre></div><p>除此之外，还包括一些其他信息如版本、操作系统等</p><p><img src="https://static.vue-js.com/85f473a0-c2a3-11eb-ab90-d9ae814b240d.png" alt="" loading="lazy"></p><h4 id="console" tabindex="-1">console <a class="header-anchor" href="#console" aria-label="Permalink to &quot;console&quot;">​</a></h4><p>用来打印<code>stdout</code>和<code>stderr</code></p><p>最常用的输入内容的方式：console.log</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hello&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>清空控制台：console.clear</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.clear</span></span></code></pre></div><p>打印函数的调用栈：console.trace</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> test</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    demo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> demo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    foo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> foo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">trace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">test</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p><img src="https://static.vue-js.com/91b6dbb0-c2a3-11eb-85f6-6fac77c0c9b3.png" alt="" loading="lazy"></p><h4 id="clearinterval、setinterval" tabindex="-1">clearInterval、setInterval <a class="header-anchor" href="#clearinterval、setinterval" aria-label="Permalink to &quot;clearInterval、setInterval&quot;">​</a></h4><p>设置定时器与清除定时器</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setInterval</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(callback, delay[, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">args])</span></span></code></pre></div><p><code>callback</code>每<code>delay</code>毫秒重复执行一次</p><p><code>clearInterval</code>则为对应发取消定时器的方法</p><h4 id="cleartimeout、settimeout" tabindex="-1">clearTimeout、setTimeout <a class="header-anchor" href="#cleartimeout、settimeout" aria-label="Permalink to &quot;clearTimeout、setTimeout&quot;">​</a></h4><p>设置延时器与清除延时器</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setTimeout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(callback,delay[,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">args])</span></span></code></pre></div><p><code>callback</code>在<code>delay</code>毫秒后执行一次</p><p><code>clearTimeout</code>则为对应取消延时器的方法</p><h4 id="global" tabindex="-1">global <a class="header-anchor" href="#global" aria-label="Permalink to &quot;global&quot;">​</a></h4><p>全局命名空间对象，墙面讲到的<code>process</code>、<code>console</code>、<code>setTimeout</code>等都有放到<code>global</code>中</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(process </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> global.process) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// true</span></span></code></pre></div><h3 id="模块级别的全局对象" tabindex="-1">模块级别的全局对象 <a class="header-anchor" href="#模块级别的全局对象" aria-label="Permalink to &quot;模块级别的全局对象&quot;">​</a></h3><p>这些全局对象是模块中的变量，只是每个模块都有，看起来就像全局变量，像在命令交互中是不可以使用，包括：</p><ul><li>__dirname</li><li>__filename</li><li>exports</li><li>module</li><li>require</li></ul><h4 id="dirname" tabindex="-1">__dirname <a class="header-anchor" href="#dirname" aria-label="Permalink to &quot;__dirname&quot;">​</a></h4><p>获取当前文件所在的路径，不包括后面的文件名</p><p>从 <code>/Users/mjr</code> 运行 <code>node example.js</code>：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(__dirname);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 打印: /Users/mjr</span></span></code></pre></div><h4 id="filename" tabindex="-1">__filename <a class="header-anchor" href="#filename" aria-label="Permalink to &quot;__filename&quot;">​</a></h4><p>获取当前文件所在的路径和文件名称，包括后面的文件名称</p><p>从 <code>/Users/mjr</code> 运行 <code>node example.js</code>：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(__filename);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 打印: /Users/mjr/example.js</span></span></code></pre></div><h4 id="exports" tabindex="-1">exports <a class="header-anchor" href="#exports" aria-label="Permalink to &quot;exports&quot;">​</a></h4><p><code>module.exports</code> 用于指定一个模块所导出的内容，即可以通过 <code>require()</code> 访问的内容</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.age </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> age;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.sayHello </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> sayHello;</span></span></code></pre></div><h4 id="module" tabindex="-1">module <a class="header-anchor" href="#module" aria-label="Permalink to &quot;module&quot;">​</a></h4><p>对当前模块的引用，通过<code>module.exports</code> 用于指定一个模块所导出的内容，即可以通过 <code>require()</code> 访问的内容</p><h4 id="require" tabindex="-1">require <a class="header-anchor" href="#require" aria-label="Permalink to &quot;require&quot;">​</a></h4><p>用于引入模块、 <code>JSON</code>、或本地文件。 可以从 <code>node_modules</code> 引入模块。</p><p>可以使用相对路径引入本地模块或<code>JSON</code>文件，路径会根据<code>__dirname</code>定义的目录名或当前工作目录进行处理</p><h2 id="参考文献" tabindex="-1">参考文献 <a class="header-anchor" href="#参考文献" aria-label="Permalink to &quot;参考文献&quot;">​</a></h2><ul><li><a href="http://nodejs.cn/api/globals.html" target="_blank" rel="noreferrer">http://nodejs.cn/api/globals.html</a></li><li><a href="https://vue3js.cn/interview" target="_blank" rel="noreferrer">https://vue3js.cn/interview</a></li></ul>`,71)],E=s(l,[["render",function(t,p,h,d,o,k){return i(),a("div",null,n)}]]);export{c as __pageData,E as default};
