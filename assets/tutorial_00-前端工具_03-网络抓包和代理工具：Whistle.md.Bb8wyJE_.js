import{_ as s,D as t,c as i,I as e,a4 as l,o as h}from"./chunks/framework.B2xMVIVo.js";const b=JSON.parse('{"title":"03-网络抓包和代理工具：Whistle","description":"","frontmatter":{"title":"03-网络抓包和代理工具：Whistle"},"headers":[],"relativePath":"tutorial/00-前端工具/03-网络抓包和代理工具：Whistle.md","filePath":"tutorial/00-前端工具/03-网络抓包和代理工具：Whistle.md","lastUpdated":1718865103000}'),p={name:"tutorial/00-前端工具/03-网络抓包和代理工具：Whistle.md"},r=l(`<h1 id="_03-网络抓包和代理工具-whistle" tabindex="-1">03-网络抓包和代理工具：Whistle <a class="header-anchor" href="#_03-网络抓包和代理工具-whistle" aria-label="Permalink to &quot;03-网络抓包和代理工具：Whistle&quot;">​</a></h1><h2 id="whistle-官网" tabindex="-1">Whistle 官网 <a class="header-anchor" href="#whistle-官网" aria-label="Permalink to &quot;Whistle 官网&quot;">​</a></h2><ul><li><p>Whistle 官网：<a href="https://wproxy.org/whistle/" target="_blank" rel="noreferrer">https://wproxy.org/whistle/</a></p></li><li><p>Whistle 的 GitHub：<a href="https://github.com/avwo/whistle" target="_blank" rel="noreferrer">https://github.com/avwo/whistle</a></p></li></ul><h2 id="whistle-安装启动" tabindex="-1">Whistle 安装启动 <a class="header-anchor" href="#whistle-安装启动" aria-label="Permalink to &quot;Whistle 安装启动&quot;">​</a></h2><h3 id="_1、whistle-安装" tabindex="-1">1、Whistle 安装 <a class="header-anchor" href="#_1、whistle-安装" aria-label="Permalink to &quot;1、Whistle 安装&quot;">​</a></h3><p>（1）通过 npm 安装 Whistle</p><h3 id="_2、启动-whistle" tabindex="-1">2、启动 whistle <a class="header-anchor" href="#_2、启动-whistle" aria-label="Permalink to &quot;2、启动 whistle&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">w2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span></span></code></pre></div><p>然后在浏览器输入<code>http://127.0.0.1:8899/</code> 即可打开代理配置的页面。</p><h3 id="_3、配置代理" tabindex="-1">3、配置代理 <a class="header-anchor" href="#_3、配置代理" aria-label="Permalink to &quot;3、配置代理&quot;">​</a></h3><p><strong>chrome 浏览器配置代理</strong>：</p><p>可参考官方文档。</p><p><strong>Firefox 浏览器配置代理</strong>：</p><p><img src="https://img.smyhvae.com/20200420_1357.png" alt="" loading="lazy"></p><h3 id="_4、安装证书并添加信任" tabindex="-1">4、安装证书并添加信任： <a class="header-anchor" href="#_4、安装证书并添加信任" aria-label="Permalink to &quot;4、安装证书并添加信任：&quot;">​</a></h3><p><img src="https://img.smyhvae.com/20200420_0922.png" alt="" loading="lazy"></p><p>证书下载后，双击安装，安装目录选择“登录”这个 tab。安装完成后，记得执行 <code>w2 restart</code>重启 whistle。</p><h3 id="手机设置代理" tabindex="-1">手机设置代理 <a class="header-anchor" href="#手机设置代理" aria-label="Permalink to &quot;手机设置代理&quot;">​</a></h3><p>连接好指定的 wifi 后，点击那个 wifi 里的设置，将「代理」那一项，设置为手动，然后输入 ip（电脑上的 ip）、端口号（8899）。然后就可以通过电脑上的 whistle 工具，查看手机的网页请求。</p><p>注意，要保证手机和电脑在同一个网络下。</p><p>另外，还需要在手机的浏览器，地址栏输入<code>rootca.pro</code>，给手机安装证书。</p><h2 id="捕获和拦截-https-请求" tabindex="-1">捕获和拦截 https 请求 <a class="header-anchor" href="#捕获和拦截-https-请求" aria-label="Permalink to &quot;捕获和拦截 https 请求&quot;">​</a></h2><p>whistle 安装证书后，可以拦截 https 请求。但是，我现在又不想拦截 https 请求了，该怎么卸载证书呢？</p><p>我发现，证书无法卸载，正确的操作是：</p><p><img src="http://img.smyhvae.com/20180426_1621.png" alt="" loading="lazy"></p><p>上图中，把红框部分，去掉勾选，就不捕获 https 了。谢谢 azh 童鞋。</p><p>参考链接：</p><ul><li><p><a href="https://www.zhihu.com/question/21474174" target="_blank" rel="noreferrer">Android 手机如何设置 http 代理？</a></p></li><li><p><a href="http://zhuscat.com/2017/09/20/https-proxy-on-ios/" target="_blank" rel="noreferrer">使用 Whistle 对 iOS HTTPS 进行抓包</a></p></li></ul><h2 id="移动端调试神器-eruda" tabindex="-1">移动端调试神器:eruda <a class="header-anchor" href="#移动端调试神器-eruda" aria-label="Permalink to &quot;移动端调试神器:eruda&quot;">​</a></h2><blockquote><p>手机连接代理时，如何看 console.log 的日志信息?</p></blockquote><blockquote><p>现在，代码里有 console.log，如果是在电脑浏览器上看，可以直接在控制台查看 console.log 的内容。但是，如果手机连接代理，在手机上打开网页的话，要怎么查看 console.log 的内容呢？具体做法如下：</p></blockquote><p>（1）在 whistle 中，新建一个名叫<code>Eruda H5</code>的代理，代理中的内容是：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>http://xxx.com htmlAppend://{eruda.html}</span></span></code></pre></div><p>(2)新建一个 values，里面的内容是：</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;//cdn.bootcss.com/eruda/1.4.3/eruda.min.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  eruda.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">init</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>然后就 OK 了。</p>`,36),m=s(p,[["render",function(n,o,d,c,k,g){const a=t("ArticleTopAd");return h(),i("div",null,[e(a),r])}]]);export{b as __pageData,m as default};
