import{_ as a,c as i,o as e,a4 as s}from"./chunks/framework.B2xMVIVo.js";const k=JSON.parse('{"title":"面试官：有使用过 vue 吗？说说你对 vue 的理解","description":"","frontmatter":{},"headers":[],"relativePath":"vue/vue.md","filePath":"vue/vue.md","lastUpdated":1718865103000}'),l={name:"vue/vue.md"},t=[s(`<h1 id="面试官-有使用过-vue-吗-说说你对-vue-的理解" tabindex="-1">面试官：有使用过 vue 吗？说说你对 vue 的理解 <a class="header-anchor" href="#面试官-有使用过-vue-吗-说说你对-vue-的理解" aria-label="Permalink to &quot;面试官：有使用过 vue 吗？说说你对 vue 的理解&quot;">​</a></h1><p><img src="https://static.vue-js.com/02ac1620-3ac6-11eb-85f6-6fac77c0c9b3.png" alt="Vue" loading="lazy"></p><h2 id="一、从历史说起" tabindex="-1">一、从历史说起 <a class="header-anchor" href="#一、从历史说起" aria-label="Permalink to &quot;一、从历史说起&quot;">​</a></h2><p>Web 是 World Wide Web 的简称，中文译为万维网我们可以将它规划成如下的几个时代来进行理解</p><ul><li>石器时代</li><li>文明时代</li><li>工业革命时代</li><li>百花齐放时代</li></ul><h3 id="石器时代" tabindex="-1">石器时代 <a class="header-anchor" href="#石器时代" aria-label="Permalink to &quot;石器时代&quot;">​</a></h3><p>石器时代指的就是我们的静态网页，可以欣赏一下 1997 的 Apple 官网</p><p><img src="https://static.vue-js.com/1734e450-3ac6-11eb-85f6-6fac77c0c9b3.png" alt="1997 Apple 官网" loading="lazy"></p><p>最早的网页是没有数据库的，可以理解成就是一张可以在网络上浏览的报纸，直到 CGI 技术的出现通过 CGI Perl 运行一小段代码与数据库或文件系统进行交互，如当时的 Google（1998 年）</p><p><img src="https://static.vue-js.com/23189000-3ac6-11eb-85f6-6fac77c0c9b3.png" alt="1998 Google" loading="lazy"></p><h3 id="文明时代" tabindex="-1">文明时代 <a class="header-anchor" href="#文明时代" aria-label="Permalink to &quot;文明时代&quot;">​</a></h3><p>ASP，JSP 大家应该都不会太陌生，最早出现于 2005 年左右，先后出现了微软的 ASP 和 Java Server Pages [JSP] 等技术,取代了 CGI ，增强了 WEB 与服务端的交互的安全性，类似于下面这样，其实就是 Java + HTML</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">%@ page language=&quot;java&quot; contentType=&quot;text/html; charset=utf-8&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pageEncoding=&quot;utf-8&quot;%&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;!</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">DOCTYPE</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">head</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">meta</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> charset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;utf-8&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;JSP demo&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">head</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">img</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http://localhost:8080/web05_session/1.jpg&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;200&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;100&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>JSP 有一个很大的缺点，就是不太灵活，因为 JSP 是在服务器端执行的，通常返回该客户端的就是一个 HTML 文本。我们每次的请求：获取的数据、内容的加载，都是服务器为我们返回渲染完成之后的 DOM，这也就使得我们开发网站的灵活度大打折扣在这种情况下，同年：Ajax 火了（小细节，这里为什么说火了，因为 Ajax 技术并不是 2005 年出现的，他的雏形是 1999 年），现在看来很常见的技术手段，在当时可是珍贵无比。</p><h3 id="工业革命时代" tabindex="-1">工业革命时代 <a class="header-anchor" href="#工业革命时代" aria-label="Permalink to &quot;工业革命时代&quot;">​</a></h3><p>到这里大家就更熟悉了，移动设备的普及，Jquery 的出现，以及 SPA（Single Page Application 单页面应用）的雏形，Backbone EmberJS AngularJS 这样一批前端框架随之出现，但当时 SPA 的路不好走，例如 SEO 问题，SPA 过多的页面、复杂场景下 View 的绑定等，都没有很好的处理经过这几年的飞速发展，节约了开发人员大量的精力、降低了开发者和开发过程的门槛，极大提升了开发效率和迭代速度，我们可以称之其为工业时代。</p><h3 id="百花齐放时代" tabindex="-1">百花齐放时代 <a class="header-anchor" href="#百花齐放时代" aria-label="Permalink to &quot;百花齐放时代&quot;">​</a></h3><p>这里没有文字，放一张图感受一下</p><p><img src="https://static.vue-js.com/32a6f430-3ac6-11eb-85f6-6fac77c0c9b3.png" alt="百花齐放时代" loading="lazy"></p><p>PS：这里为什么要说这么多 Web 的历史，我们可以看到 Web 技术的变化之大与快，每一种新的技术出现都是一些特定场景的解决方案，那我们今天的主角 Vue 又是为了解决什么呢？我们接着往下看。</p><h2 id="二、vue-是什么" tabindex="-1">二、vue 是什么 <a class="header-anchor" href="#二、vue-是什么" aria-label="Permalink to &quot;二、vue 是什么&quot;">​</a></h2><p>Vue.js（/vjuː/，或简称为 Vue）是一个用于创建用户界面的开源 JavaScript 框架，也是一个创建单页应用的 Web 应用框架。2016 年一项针对 JavaScript 的调查表明，Vue 有着 89%的开发者满意度。在 GitHub 上，该项目平均每天能收获 95 颗星，为 Github 有史以来星标数第 3 多的项目同时也是一款流行的 JavaScript 前端框架，旨在更好地组织与简化 Web 开发。Vue 所关注的核心是 MVC 模式中的视图层，同时，它也能方便地获取数据更新，并通过组件内部特定的方法实现视图与模型的交互。PS: Vue 作者尤雨溪是在为 AngularJS 工作之后开发出了这一框架。他声称自己的思路是提取 Angular 中为自己所喜欢的部分，构建出一款相当轻量的框架。最早发布于 2014 年 2 月。</p><h2 id="三、vue-核心特性" tabindex="-1">三、Vue 核心特性 <a class="header-anchor" href="#三、vue-核心特性" aria-label="Permalink to &quot;三、Vue 核心特性&quot;">​</a></h2><h3 id="数据驱动-mvvm" tabindex="-1">数据驱动（MVVM） <a class="header-anchor" href="#数据驱动-mvvm" aria-label="Permalink to &quot;数据驱动（MVVM）&quot;">​</a></h3><p><code>MVVM</code>表示的是 <code>Model-View-ViewModel</code></p><ul><li>Model：模型层，负责处理业务逻辑以及和服务器端进行交互</li><li>View：视图层：负责将数据模型转化为 UI 展示出来，可以简单的理解为 HTML 页面</li><li>ViewModel：视图模型层，用来连接 Model 和 View，是 Model 和 View 之间的通信桥梁</li></ul><p>这时候需要一张直观的关系图，如下：</p><p><img src="https://static.vue-js.com/4402c560-3ac6-11eb-85f6-6fac77c0c9b3.png" alt="MVVM" loading="lazy"></p><h3 id="组件化" tabindex="-1">组件化 <a class="header-anchor" href="#组件化" aria-label="Permalink to &quot;组件化&quot;">​</a></h3><ol><li><p>什么是组件化？一句话来说就是把图形、非图形的各种逻辑均抽象为一个统一的概念（组件）来实现开发的模式，在<code>Vue</code>中每一个<code>.vue</code>文件都可以视为一个组件。</p></li><li><p>组件化的优势：</p></li></ol><ul><li>降低整个系统的耦合度，在保持接口不变的情况下，我们可以替换不同的组件快速完成需求，例如输入框，可以替换为日历、时间、范围等组件作具体的实现。</li><li>调试方便，由于整个系统是通过组件组合起来的，在出现问题的时候，可以用排除法直接移除组件，或者根据报错的组件快速定位问题，之所以能够快速定位，是因为每个组件之间低耦合，职责单一，所以逻辑会比分析整个系统要简单。</li><li>提高可维护性，由于每个组件的职责单一，并且组件在系统中是被复用的，所以对代码进行优化可获得系统的整体升级。</li></ul><h3 id="指令系统" tabindex="-1">指令系统 <a class="header-anchor" href="#指令系统" aria-label="Permalink to &quot;指令系统&quot;">​</a></h3><p>解释：指令 (Directives) 是带有 v- 前缀的特殊属性。</p><p>作用：当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM。</p><ul><li>常用的指令： <ul><li>条件渲染指令 <code>v-if</code></li><li>列表渲染指令<code>v-for</code></li><li>属性绑定指令<code>v-bind</code></li><li>事件绑定指令<code>v-on</code></li><li>双向数据绑定指令<code>v-model</code></li></ul></li></ul><p>没有指令之前我们是怎么做的？是不是先要获取到 DOM 然后再....干点啥？</p><h2 id="四、vue-跟传统开发的区别" tabindex="-1">四、Vue 跟传统开发的区别 <a class="header-anchor" href="#四、vue-跟传统开发的区别" aria-label="Permalink to &quot;四、Vue 跟传统开发的区别&quot;">​</a></h2><p>没有落地使用场景的革命不是好革命，就以一个高频的应用场景来示意吧。注册账号这个需求大家应该很熟悉了，如下：</p><p><img src="https://static.vue-js.com/5ae84840-3ac6-11eb-ab90-d9ae814b240d.png" alt="注册账号" loading="lazy"></p><p>用<code>jquery</code>来实现大概的思路就是选择流程 dom 对象，点击按钮隐藏当前活动流程 dom 对象，显示下一流程 dom 对象。如下图（代码就不上了，上了就篇文章就没了..）：</p><p><img src="https://static.vue-js.com/65f89e60-3ac6-11eb-85f6-6fac77c0c9b3.png" alt="Jquery实现" loading="lazy"></p><p>用<code>vue</code>来实现，我们知道<code>vue</code>基本不操作<code>dom</code>节点，双向绑定使<code>dom</code>节点跟视图绑定后，通过修改变量的值控制<code>dom</code>节点的各类属性。所以其实现思路为：视图层使用一变量控制 dom 节点显示与否，点击按钮则改变该变量，如下图：</p><p><img src="https://static.vue-js.com/6f916fb0-3ac6-11eb-ab90-d9ae814b240d.png" alt="Vue实现" loading="lazy"></p><p>总结就是：</p><ul><li>Vue 所有的界面事件，都是只去操作数据的，Jquery 操作 DOM</li><li>Vue 所有界面的变动，都是根据数据自动绑定出来的，Jquery 操作 DOM</li></ul><h2 id="五、vue-和-react-对比" tabindex="-1">五、Vue 和 React 对比 <a class="header-anchor" href="#五、vue-和-react-对比" aria-label="Permalink to &quot;五、Vue 和 React 对比&quot;">​</a></h2><p>这里就做几个简单的类比吧，当然没有好坏之分，只是使用场景不同。</p><h3 id="相同点" tabindex="-1">相同点 <a class="header-anchor" href="#相同点" aria-label="Permalink to &quot;相同点&quot;">​</a></h3><ul><li>都有组件化思想</li><li>都支持服务器端渲染</li><li>都有 Virtual DOM（虚拟 dom）</li><li>数据驱动视图</li><li>都有支持 native 的方案：<code>Vue</code>的<code>weex</code>、<code>React</code>的<code>React native</code></li><li>都有自己的构建工具：<code>Vue</code>的<code>vue-cli</code>、<code>React</code>的<code>Create React App</code></li></ul><h3 id="区别" tabindex="-1">区别 <a class="header-anchor" href="#区别" aria-label="Permalink to &quot;区别&quot;">​</a></h3><ul><li>数据流向的不同。<code>react</code>从诞生开始就推崇单向数据流，而<code>Vue</code>是双向数据流</li><li>数据变化的实现原理不同。<code>react</code>使用的是不可变数据，而<code>Vue</code>使用的是可变的数据</li><li>组件化通信的不同。<code>react</code>中我们通过使用回调函数来进行通信的，而<code>Vue</code>中子组件向父组件传递消息有两种方式：事件和回调函数</li><li>diff 算法不同。<code>react</code>主要使用 diff 队列保存需要更新哪些 DOM，得到 patch 树，再统一操作批量更新 DOM。<code>Vue</code> 使用双向指针，边对比，边更新 DOM</li></ul><h2 id="参考文献" tabindex="-1">参考文献 <a class="header-anchor" href="#参考文献" aria-label="Permalink to &quot;参考文献&quot;">​</a></h2><ul><li><a href="https://segmentfault.com/a/1190000016269636" target="_blank" rel="noreferrer">https://segmentfault.com/a/1190000016269636</a></li><li><a href="https://zh.wikipedia.org/zh-cn/Vue.js" target="_blank" rel="noreferrer">https://zh.wikipedia.org/zh-cn/Vue.js</a></li><li><a href="https://zhuanlan.zhihu.com/p/20197803" target="_blank" rel="noreferrer">https://zhuanlan.zhihu.com/p/20197803</a></li><li><a href="https://zhuanlan.zhihu.com/p/38296857" target="_blank" rel="noreferrer">https://zhuanlan.zhihu.com/p/38296857</a></li></ul>`,53)],u=a(l,[["render",function(h,n,p,o,d,r){return e(),i("div",null,t)}]]);export{k as __pageData,u as default};