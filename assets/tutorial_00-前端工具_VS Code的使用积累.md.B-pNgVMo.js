import{_ as s,c as a,o as i,a4 as t}from"./chunks/framework.B2xMVIVo.js";const c=JSON.parse('{"title":"VS Code 的使用积累","description":"","frontmatter":{},"headers":[],"relativePath":"tutorial/00-前端工具/VS Code的使用积累.md","filePath":"tutorial/00-前端工具/VS Code的使用积累.md","lastUpdated":1718865103000}'),e={name:"tutorial/00-前端工具/VS Code的使用积累.md"},l=[t(`<h1 id="vs-code-的使用积累" tabindex="-1">VS Code 的使用积累 <a class="header-anchor" href="#vs-code-的使用积累" aria-label="Permalink to &quot;VS Code 的使用积累&quot;">​</a></h1><h2 id="常见配置" tabindex="-1">常见配置 <a class="header-anchor" href="#常见配置" aria-label="Permalink to &quot;常见配置&quot;">​</a></h2><p><strong>自动保存</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> &quot;files.autoSave&quot;: &quot;onFocusChange&quot;</span></span></code></pre></div><p>参考链接：<a href="https://blog.csdn.net/WestLonly/article/details/78048049" target="_blank" rel="noreferrer">https://blog.csdn.net/WestLonly/article/details/78048049</a></p><p><strong>在新的窗口中打开文件</strong>：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;workbench.editor.enablePreview&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span></code></pre></div><h2 id="常见操作" tabindex="-1">常见操作 <a class="header-anchor" href="#常见操作" aria-label="Permalink to &quot;常见操作&quot;">​</a></h2><h3 id="如何查看代码结构" tabindex="-1">如何查看代码结构 <a class="header-anchor" href="#如何查看代码结构" aria-label="Permalink to &quot;如何查看代码结构&quot;">​</a></h3><ul><li><p>方法一：「Cmd + Shift + O」</p></li><li><p>方法二：安装插件<code>Code Outline</code></p></li></ul><p>参考链接：<a href="https://www.zhihu.com/question/264045094" target="_blank" rel="noreferrer">https://www.zhihu.com/question/264045094</a></p><h3 id="在本地开启服务器" tabindex="-1">在本地开启服务器 <a class="header-anchor" href="#在本地开启服务器" aria-label="Permalink to &quot;在本地开启服务器&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> live-server</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 启动</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">live-server</span></span></code></pre></div><p>参考链接：<a href="http://www.cnblogs.com/1zhk/p/5699379.html" target="_blank" rel="noreferrer">Visual Studio Code + live-server 编辑和浏览 HTML 网页</a></p><h2 id="常用插件" tabindex="-1">常用插件 <a class="header-anchor" href="#常用插件" aria-label="Permalink to &quot;常用插件&quot;">​</a></h2><p>方式一：打开 VS Code，左侧有五个按钮，点击最下方的按钮，然后就可以开始安装相应的插件了。</p><p>方式二：在 vscode 中输入快捷键「ctrl+shift+P」，弹出指令窗口，输入<code>extension:install</code>，回车，左侧即打开扩展安装的界面。</p><h3 id="sftp-文件传输" tabindex="-1">sftp：文件传输 <a class="header-anchor" href="#sftp-文件传输" aria-label="Permalink to &quot;sftp：文件传输&quot;">​</a></h3><p>输入快捷键「ctrl+shift+P」，弹出指令窗口，输入<code>sftp:config</code>，回车，当前工作工程的<code>.vscode</code>文件夹下就会自动生成一个<code>sftp.json</code>文件，我们需要在这个文件里配置的是：</p><ul><li><p><code>host</code>：服务器的 IP 地址</p></li><li><p><code>username</code>：工作站自己的用户名</p></li><li><p><code>privateKeyPath</code>：存放在本地的已配置好的用于登录工作站的密钥文件（也可以是 ppk 文件）</p></li><li><p><code>remotePath</code>：工作站上与本地工程同步的文件夹路径，需要和本地工程文件根目录同名，且在使用 sftp 上传文件之前，要手动在工作站上 mkdir 生成这个根目录</p></li><li><p><code>ignore</code>：指定在使用 sftp: sync to remote 的时候忽略的文件及文件夹，注意每一行后面有逗号，最后一行没有逗号</p></li></ul><p>举例如下：(注意，其中的注释不能保留)</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;host&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//服务器ip</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;port&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">22</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//端口，sftp模式是22</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;username&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//用户名</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;password&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//密码</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;protocol&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;sftp&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//模式</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;agent&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;privateKeyPath&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;passphrase&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;passive&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;interactiveAuth&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;remotePath&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/root/node/build/&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//服务器上的文件地址</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;context&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./server/build&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//本地的文件地址</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;uploadOnSave&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//监听保存并上传</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;syncMode&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;update&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;watcher&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //监听外部文件</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;files&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//外部文件的绝对路径</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;autoUpload&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;autoDelete&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;ignore&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //忽略项</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;**/.vscode/**&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;**/.git/**&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;**/.DS_Store&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="sass-formatter" tabindex="-1">Sass Formatter <a class="header-anchor" href="#sass-formatter" aria-label="Permalink to &quot;Sass Formatter&quot;">​</a></h3><p>Sass 文件格式化。</p><h3 id="code-outline-显示代码结构" tabindex="-1">Code Outline：显示代码结构 <a class="header-anchor" href="#code-outline-显示代码结构" aria-label="Permalink to &quot;Code Outline：显示代码结构&quot;">​</a></h3><p>安装好插件「Code Outline」后，可以在左侧的资源管理器中，显示当前文件的代码结构：</p><p><img src="http://img.smyhvae.com/20180420_0925.png" alt="" loading="lazy"></p><p>参考链接：</p><ul><li><p><a href="https://www.zhihu.com/question/50273450" target="_blank" rel="noreferrer">https://www.zhihu.com/question/50273450</a></p></li><li><p><a href="http://itopic.org/vscode.html" target="_blank" rel="noreferrer">http://itopic.org/vscode.html</a></p></li><li><p><a href="https://github.com/varHarrie/varharrie.github.io/issues/10" target="_blank" rel="noreferrer">https://github.com/varHarrie/varharrie.github.io/issues/10</a></p></li></ul><h3 id="vscode-fileheader-添加顶部注释模板-签名" tabindex="-1">vscode-fileheader：添加顶部注释模板(签名) <a class="header-anchor" href="#vscode-fileheader-添加顶部注释模板-签名" aria-label="Permalink to &quot;vscode-fileheader：添加顶部注释模板(签名)&quot;">​</a></h3><p>（1）安装插件 vscode -fileheader，并重启。</p><p>（2）在首选项-》设置-》中搜索 fileheader，找到头部模板修改。</p><p>默认的快捷键是：「Ctrl + option + I」。</p><p>参考链接：</p><ul><li><a href="https://www.zhihu.com/question/62385647" target="_blank" rel="noreferrer">https://www.zhihu.com/question/62385647</a></li></ul><h3 id="express" tabindex="-1">Express <a class="header-anchor" href="#express" aria-label="Permalink to &quot;Express&quot;">​</a></h3><p>在本地开启 Node 服务器：</p><p><img src="http://img.smyhvae.com/20180611_2230.png" alt="" loading="lazy"></p><p>然后在浏览器的地址栏输入<code>http://localhost/</code> + 文件的相对路径，就可以通过服务器的形式打开这个文件。</p><h3 id="copy-relative-path" tabindex="-1">Copy Relative Path <a class="header-anchor" href="#copy-relative-path" aria-label="Permalink to &quot;Copy Relative Path&quot;">​</a></h3><blockquote><p>这个插件很有用，使用频率很高。</p></blockquote><p>复制文件的相对路径：（相对于根路径而言）</p><p><img src="http://img.smyhvae.com/20180611_2235.png" alt="" loading="lazy"></p><h3 id="open-in-browser" tabindex="-1">open in browser <a class="header-anchor" href="#open-in-browser" aria-label="Permalink to &quot;open in browser&quot;">​</a></h3><p>在浏览器中打开。</p><h3 id="auto-rename-tag" tabindex="-1">Auto Rename Tag <a class="header-anchor" href="#auto-rename-tag" aria-label="Permalink to &quot;Auto Rename Tag&quot;">​</a></h3><p>适用于 JSX、Vue、HTML。在修改标签名时，能在你修改开始（结束）标签的时候修改对应的结束（开始）标签，帮你减少 50% 的击键。</p><p>###Project Manager</p><p>项目管理，让我们方便的在命令面板中切换项目文件夹，当然，你也可以直接打开包含多个项目的父级文件夹，但这样可能会让 VSCode 变慢。</p><h3 id="highlight-icemode-选中相同的代码时-让高亮显示更加明显【荐】" tabindex="-1">highlight-icemode：选中相同的代码时，让高亮显示更加明显【荐】 <a class="header-anchor" href="#highlight-icemode-选中相同的代码时-让高亮显示更加明显【荐】" aria-label="Permalink to &quot;highlight-icemode：选中相同的代码时，让高亮显示更加明显【荐】&quot;">​</a></h3><p>VSCode 自带的高亮显示，实在是不够显眼。用插件支持一下吧。</p><p>所用了这个插件之后，VS Code 自带的高亮就可以关掉了：</p><p>在用户设置里添加<code>&quot;editor.selectionHighlight&quot;: false</code>即可。</p><p>参考链接：<a href="https://blog.csdn.net/palmer_kai/article/details/79548164" target="_blank" rel="noreferrer">vscode 选中后相同内容高亮插件推荐</a></p><h3 id="highlight-words-全局高亮-跨文件多色彩" tabindex="-1">highlight-words：全局高亮（跨文件多色彩） <a class="header-anchor" href="#highlight-words-全局高亮-跨文件多色彩" aria-label="Permalink to &quot;highlight-words：全局高亮（跨文件多色彩）&quot;">​</a></h3><p>参考链接：<a href="https://zhuanlan.zhihu.com/p/31163793" target="_blank" rel="noreferrer">Visual Studio Code 全局高亮着色插件(跨文件多色彩)经验纪要</a></p><h3 id="color-exchange-颜色格式转换【荐】" tabindex="-1">color-exchange：颜色格式转换【荐】 <a class="header-anchor" href="#color-exchange-颜色格式转换【荐】" aria-label="Permalink to &quot;color-exchange：颜色格式转换【荐】&quot;">​</a></h3><p>安装完插件后，在 css 中输入颜色，然后按<code>cmd + .</code>，就能进行颜色的格式转换。</p><p>20181013_1450.png</p><p>我在写这一段时，安装的人还不多，赶紧上车。</p><h2 id="vue-相关的插件" tabindex="-1">Vue 相关的插件 <a class="header-anchor" href="#vue-相关的插件" aria-label="Permalink to &quot;Vue 相关的插件&quot;">​</a></h2><h3 id="vetur-vue-文件的基本语法高亮" tabindex="-1">vetur：vue 文件的基本语法高亮 <a class="header-anchor" href="#vetur-vue-文件的基本语法高亮" aria-label="Permalink to &quot;vetur：vue 文件的基本语法高亮&quot;">​</a></h3><p>安装完 vetur 后还需要加上这样一段配置下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;emmet.syntaxProfiles&quot;: {</span></span>
<span class="line"><span>  &quot;vue-html&quot;: &quot;html&quot;,</span></span>
<span class="line"><span>  &quot;vue&quot;: &quot;html&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>参考链接：</p><ul><li><p><a href="https://www.clarencep.com/2017/03/18/edit-vue-file-via-vscode/" target="_blank" rel="noreferrer">https://www.clarencep.com/2017/03/18/edit-vue-file-via-vscode/</a></p></li><li><p><a href="https://github.com/varHarrie/varharrie.github.io/issues/10" target="_blank" rel="noreferrer">https://github.com/varHarrie/varharrie.github.io/issues/10</a></p></li></ul><h3 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h3><ul><li><p><a href="https://www.jianshu.com/p/0724921285d4" target="_blank" rel="noreferrer">https://www.jianshu.com/p/0724921285d4</a></p></li><li><p><a href="https://www.cnblogs.com/AmosLee94/p/8338013.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/AmosLee94/p/8338013.html</a></p></li></ul><h2 id="常用快捷键" tabindex="-1">常用快捷键 <a class="header-anchor" href="#常用快捷键" aria-label="Permalink to &quot;常用快捷键&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:left;">Win 快捷键</th><th style="text-align:left;">Mac 快捷键</th><th style="text-align:left;">作用</th><th style="text-align:left;">备注</th></tr></thead><tbody><tr><td style="text-align:left;">Shift + Alt + F</td><td style="text-align:left;">Shift + option + F</td><td style="text-align:left;">代码格式化</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">Ctrl + Shift + N</td><td style="text-align:left;"></td><td style="text-align:left;">在当前行上面增加一行并跳至该行</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"><strong>Ctrl + Shift + D</strong></td><td style="text-align:left;"></td><td style="text-align:left;">复制当前行到下一行</td><td style="text-align:left;"></td></tr></tbody></table><h3 id="如何同时打开多个窗口" tabindex="-1">如何同时打开多个窗口 <a class="header-anchor" href="#如何同时打开多个窗口" aria-label="Permalink to &quot;如何同时打开多个窗口&quot;">​</a></h3><h2 id="问题" tabindex="-1">问题 <a class="header-anchor" href="#问题" aria-label="Permalink to &quot;问题&quot;">​</a></h2><p>问题 1</p><p>解决；You can kill the Microsoft.VSCode.Cpp.IntelliSense.Msvc process to save the file successfully. 也就是 IntelliSense 这个进程。</p><h2 id="参考链接-1" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接-1" aria-label="Permalink to &quot;参考链接&quot;">​</a></h2><ul><li><a href="https://zhuanlan.zhihu.com/p/30976584" target="_blank" rel="noreferrer">能让你开发效率翻倍的 VSCode 插件配置（上）</a></li></ul><h3 id="某网友的-vs-code-插件截图" tabindex="-1">某网友的 VS Code 插件截图 <a class="header-anchor" href="#某网友的-vs-code-插件截图" aria-label="Permalink to &quot;某网友的 VS Code 插件截图&quot;">​</a></h3><p><img src="http://img.smyhvae.com/20180611_2255.png" alt="" loading="lazy"></p>`,78)],u=s(e,[["render",function(n,h,p,r,o,d){return i(),a("div",null,l)}]]);export{c as __pageData,u as default};
