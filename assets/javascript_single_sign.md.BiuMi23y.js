import{_ as s,c as i,o as a,a4 as e}from"./chunks/framework.B2xMVIVo.js";const r=JSON.parse('{"title":"面试官：什么是单点登录？如何实现？","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/single_sign.md","filePath":"javascript/single_sign.md","lastUpdated":1718865103000}'),n={name:"javascript/single_sign.md"},o=[e(`<h1 id="面试官-什么是单点登录-如何实现" tabindex="-1">面试官：什么是单点登录？如何实现？ <a class="header-anchor" href="#面试官-什么是单点登录-如何实现" aria-label="Permalink to &quot;面试官：什么是单点登录？如何实现？&quot;">​</a></h1><p><img src="https://static.vue-js.com/8a25a760-8c83-11eb-85f6-6fac77c0c9b3.png" alt="" loading="lazy"></p><h2 id="一、是什么" tabindex="-1">一、是什么 <a class="header-anchor" href="#一、是什么" aria-label="Permalink to &quot;一、是什么&quot;">​</a></h2><p>单点登录（Single Sign On），简称为 SSO，是目前比较流行的企业业务整合的解决方案之一</p><p>SSO的定义是在多个应用系统中，用户只需要登录一次就可以访问所有相互信任的应用系统</p><p>SSO 一般都需要一个独立的认证中心（passport），子系统的登录均得通过<code>passport</code>，子系统本身将不参与登录操作</p><p>当一个系统成功登录以后，<code>passport</code>将会颁发一个令牌给各个子系统，子系统可以拿着令牌会获取各自的受保护资源，为了减少频繁认证，各个子系统在被<code>passport</code>授权以后，会建立一个局部会话，在一定时间内可以无需再次向<code>passport</code>发起认证</p><p><img src="https://static.vue-js.com/2b9b0e70-8c4b-11eb-85f6-6fac77c0c9b3.png" alt="" loading="lazy"></p><p>上图有四个系统，分别是<code>Application1</code>、<code>Application2</code>、<code>Application3</code>、和<code>SSO</code>，当<code>Application1</code>、<code>Application2</code>、<code>Application3</code>需要登录时，将跳到<code>SSO</code>系统，<code>SSO</code>系统完成登录，其他的应用系统也就随之登录了</p><h4 id="举个例子" tabindex="-1">举个例子 <a class="header-anchor" href="#举个例子" aria-label="Permalink to &quot;举个例子&quot;">​</a></h4><p>淘宝、天猫都属于阿里旗下，当用户登录淘宝后，再打开天猫，系统便自动帮用户登录了天猫，这种现象就属于单点登录</p><h2 id="二、如何实现" tabindex="-1">二、如何实现 <a class="header-anchor" href="#二、如何实现" aria-label="Permalink to &quot;二、如何实现&quot;">​</a></h2><h3 id="同域名下的单点登录" tabindex="-1">同域名下的单点登录 <a class="header-anchor" href="#同域名下的单点登录" aria-label="Permalink to &quot;同域名下的单点登录&quot;">​</a></h3><p><code>cookie</code>的<code>domain</code>属性设置为当前域的父域，并且父域的<code>cookie</code>会被子域所共享。<code>path</code>属性默认为<code>web</code>应用的上下文路径</p><p>利用 <code>Cookie</code> 的这个特点，没错，我们只需要将<code>Cookie</code>的<code> domain</code>属性设置为父域的域名（主域名），同时将 <code>Cookie </code>的<code>path</code>属性设置为根路径，将 <code>Session ID</code>（或 <code>Token</code>）保存到父域中。这样所有的子域应用就都可以访问到这个<code>Cookie</code></p><p>不过这要求应用系统的域名需建立在一个共同的主域名之下，如 <code>tieba.baidu.com</code> 和 <code>map.baidu.com</code>，它们都建立在 <code>baidu.com </code>这个主域名之下，那么它们就可以通过这种方式来实现单点登录</p><h3 id="不同域名下的单点登录-一" tabindex="-1">不同域名下的单点登录(一) <a class="header-anchor" href="#不同域名下的单点登录-一" aria-label="Permalink to &quot;不同域名下的单点登录(一)&quot;">​</a></h3><p>如果是不同域的情况下，<code>Cookie</code>是不共享的，这里我们可以部署一个认证中心，用于专门处理登录请求的独立的 <code>Web </code>服务</p><p>用户统一在认证中心进行登录，登录成功后，认证中心记录用户的登录状态，并将 <code>token</code> 写入 <code>Cookie</code>（注意这个 <code>Cookie </code>是认证中心的，应用系统是访问不到的）</p><p>应用系统检查当前请求有没有 <code>Token</code>，如果没有，说明用户在当前系统中尚未登录，那么就将页面跳转至认证中心</p><p>由于这个操作会将认证中心的 <code>Cookie</code> 自动带过去，因此，认证中心能够根据 <code>Cookie</code> 知道用户是否已经登录过了</p><p>如果认证中心发现用户尚未登录，则返回登录页面，等待用户登录</p><p>如果发现用户已经登录过了，就不会让用户再次登录了，而是会跳转回目标 <code>URL </code>，并在跳转前生成一个 <code>Token</code>，拼接在目标<code> URL</code> 的后面，回传给目标应用系统</p><p>应用系统拿到 <code>Token </code>之后，还需要向认证中心确认下 <code>Token</code> 的合法性，防止用户伪造。确认无误后，应用系统记录用户的登录状态，并将 <code>Token </code>写入<code> Cookie</code>，然后给本次访问放行。（注意这个 <code>Cookie</code> 是当前应用系统的）当用户再次访问当前应用系统时，就会自动带上这个 <code>Token</code>，应用系统验证 Token 发现用户已登录，于是就不会有认证中心什么事了</p><p>此种实现方式相对复杂，支持跨域，扩展性好，是单点登录的标准做法</p><h3 id="不同域名下的单点登录-二" tabindex="-1">不同域名下的单点登录(二) <a class="header-anchor" href="#不同域名下的单点登录-二" aria-label="Permalink to &quot;不同域名下的单点登录(二)&quot;">​</a></h3><p>可以选择将 <code>Session ID</code> （或 <code>Token</code> ）保存到浏览器的 <code>LocalStorage</code> 中，让前端在每次向后端发送请求时，主动将<code>LocalStorage</code>的数据传递给服务端</p><p>这些都是由前端来控制的，后端需要做的仅仅是在用户登录成功后，将 <code>Session ID </code>（或 <code>Token </code>）放在响应体中传递给前端</p><p>单点登录完全可以在前端实现。前端拿到 <code>Session ID </code>（或 <code>Token</code> ）后，除了将它写入自己的 <code>LocalStorage</code> 中之外，还可以通过特殊手段将它写入多个其他域下的 <code>LocalStorage</code> 中</p><p>关键代码如下：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 获取 token</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> token </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> result.data.token;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 动态创建一个不可见的iframe，在iframe中加载一个跨域HTML</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> iframe </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createElement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;iframe&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">iframe.src </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;http://app1.com/localstorage.html&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">document.body.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">append</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(iframe);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 使用postMessage()方法将token传递给iframe</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setTimeout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    iframe.contentWindow.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">postMessage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(token, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http://app1.com&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setTimeout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    iframe.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">remove</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 在这个iframe所加载的HTML中绑定一个事件监听器，当事件被触发时，把接收到的token数据写入localStorage</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addEventListener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;message&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">event</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    localStorage.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;token&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, event.data)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>前端通过 <code>iframe</code>+<code>postMessage()</code> 方式，将同一份 <code>Token</code> 写入到了多个域下的 <code>LocalStorage</code> 中，前端每次在向后端发送请求之前，都会主动从 <code>LocalStorage</code> 中读取<code>Token</code>并在请求中携带，这样就实现了同一份<code> Token</code> 被多个域所共享</p><p>此种实现方式完全由前端控制，几乎不需要后端参与，同样支持跨域</p><h2 id="三、流程" tabindex="-1">三、流程 <a class="header-anchor" href="#三、流程" aria-label="Permalink to &quot;三、流程&quot;">​</a></h2><p>单点登录的流程图如下所示：</p><p><img src="https://static.vue-js.com/2422bc40-8c84-11eb-ab90-d9ae814b240d.png" alt="" loading="lazy"></p><ul><li><p>用户访问系统1的受保护资源，系统1发现用户未登录，跳转至sso认证中心，并将自己的地址作为参数</p></li><li><p>sso认证中心发现用户未登录，将用户引导至登录页面</p></li><li><p>用户输入用户名密码提交登录申请</p></li><li><p>sso认证中心校验用户信息，创建用户与sso认证中心之间的会话，称为全局会话，同时创建授权令牌</p></li><li><p>sso认证中心带着令牌跳转会最初的请求地址（系统1）</p></li><li><p>系统1拿到令牌，去sso认证中心校验令牌是否有效</p></li><li><p>sso认证中心校验令牌，返回有效，注册系统1</p></li><li><p>系统1使用该令牌创建与用户的会话，称为局部会话，返回受保护资源</p></li><li><p>用户访问系统2的受保护资源</p></li><li><p>系统2发现用户未登录，跳转至sso认证中心，并将自己的地址作为参数</p></li><li><p>sso认证中心发现用户已登录，跳转回系统2的地址，并附上令牌</p></li><li><p>系统2拿到令牌，去sso认证中心校验令牌是否有效</p></li><li><p>sso认证中心校验令牌，返回有效，注册系统2</p></li><li><p>系统2使用该令牌创建与用户的局部会话，返回受保护资源</p></li></ul><p>用户登录成功之后，会与<code>sso</code>认证中心及各个子系统建立会话，用户与<code>sso</code>认证中心建立的会话称为全局会话</p><p>用户与各个子系统建立的会话称为局部会话，局部会话建立之后，用户访问子系统受保护资源将不再通过<code>sso</code>认证中心</p><p>全局会话与局部会话有如下约束关系：</p><ul><li>局部会话存在，全局会话一定存在</li><li>全局会话存在，局部会话不一定存在</li><li>全局会话销毁，局部会话必须销毁</li></ul><h2 id="参考文献" tabindex="-1">参考文献 <a class="header-anchor" href="#参考文献" aria-label="Permalink to &quot;参考文献&quot;">​</a></h2><ul><li><a href="https://blog.csdn.net/weixin_36380516/article/details/109006828" target="_blank" rel="noreferrer">https://blog.csdn.net/weixin_36380516/article/details/109006828</a></li><li><a href="https://baike.baidu.com/item/%E5%8D%95%E7%82%B9%E7%99%BB%E5%BD%95" target="_blank" rel="noreferrer">https://baike.baidu.com/item/单点登录</a></li><li><a href="https://juejin.cn/post/6844903664985866253" target="_blank" rel="noreferrer">https://juejin.cn/post/6844903664985866253</a></li></ul>`,43)],E=s(n,[["render",function(p,l,t,d,h,k){return a(),i("div",null,o)}]]);export{r as __pageData,E as default};
