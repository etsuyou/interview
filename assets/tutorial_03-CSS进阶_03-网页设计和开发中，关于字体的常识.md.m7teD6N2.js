import{_ as i,D as a,c as n,I as t,a4 as l,o as p}from"./chunks/framework.B2xMVIVo.js";const y=JSON.parse('{"title":"03-网页设计和开发中，关于字体的常识","description":"","frontmatter":{"title":"03-网页设计和开发中，关于字体的常识","publish":true},"headers":[],"relativePath":"tutorial/03-CSS进阶/03-网页设计和开发中，关于字体的常识.md","filePath":"tutorial/03-CSS进阶/03-网页设计和开发中，关于字体的常识.md","lastUpdated":1718865103000}'),e={name:"tutorial/03-CSS进阶/03-网页设计和开发中，关于字体的常识.md"},h=l(`<h1 id="_03-网页设计和开发中-关于字体的常识" tabindex="-1">03-网页设计和开发中，关于字体的常识 <a class="header-anchor" href="#_03-网页设计和开发中-关于字体的常识" aria-label="Permalink to &quot;03-网页设计和开发中，关于字体的常识&quot;">​</a></h1><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>我周围的码农当中，有很多是技术大神，却常常被字体这种简单的东西所困扰。</p><p>这篇文章，我们来讲一讲关于字体的常识。这些常识所涉及到的问题，有很强的可操作性，都是在实际业务中真实遇到的，都是需要开发同学和产品经理、设计师不断重复沟通的。</p><p>字体真的只是“<strong>系统默认，无从解释</strong>”这么简单吗？是产品被忽悠？还是开发在敷衍？二者之间的博弈究竟谁能胜出？学会本文，你就能胜出。</p><h2 id="字体分类" tabindex="-1">字体分类 <a class="header-anchor" href="#字体分类" aria-label="Permalink to &quot;字体分类&quot;">​</a></h2><p>常见的字体可以分为两类：<strong>衬线体、无衬线体</strong>。</p><p><img src="https://img.smyhvae.com/20191004_1101.png" alt="" loading="lazy"></p><p><strong>1、serif（衬线体）</strong>：在字的笔画开始、结束的地方有额外的装饰，而且笔画的粗细会有所不同。</p><p>常见的衬线体有：</p><ul><li><p>宋体、楷体</p></li><li><p>Times New Roman</p></li></ul><p><strong>2、sans-serif（无衬线体）</strong>：笔划粗细基本一致，只剩下主干，造型简明有力，起源也很晚。适用于标题、广告等，识别性高。</p><p>常见的无衬线体有：</p><ul><li>黑体</li><li>Windows 平台默认的中文字体：微软雅黑（Microsoft Yahei）</li><li>Windows 平台默认的英文字体：Arial</li><li>Mac &amp; iOS 平台默认的中文字体：苹方（PingFang SC）</li><li>Mac &amp; iOS 平台默认的英文字体：San Francisco</li><li>Android 平台默认字体：Droid Sans</li></ul><p><strong>补充</strong>：</p><p>衬线体如今已经很少使用了，你所熟悉的“宋体”，也基本只能在纸质出版物中见到。而<strong>非衬线体更符合现代审美</strong>。</p><p>所以，在这里温馨提示各位：<strong>做 PPT 不要用宋体</strong>。如果你不知道用什么字体，那就用系统的默认字体就好：Win 平台用微软雅黑、Mac 平台用苹方字体。</p><p>如果你发现一名设计师，在做海报设计、或者制图的时候，使用了宋体，说明她一定是个外行。</p><h2 id="字体族" tabindex="-1">字体族 <a class="header-anchor" href="#字体族" aria-label="Permalink to &quot;字体族&quot;">​</a></h2><p>CSS 中的字体族可以理解成是某一类字体。常见的字体族可以分为五类：</p><ul><li>serif：衬线体。</li><li>sans-serif：无衬线体。</li><li>monospace：等宽字体。每一个字母所占的宽度是相同的。写代码的字体尽量用等宽字体。</li><li>cursive：手写字体。比如徐静蕾手写体。</li><li>fantasy：梦幻字体。比如一些艺术字。</li></ul><p>这五类字体族不代表某一个具体的字体，而是当你在 CSS 中指定字体族的时候，系统就有可能在字体族中找出一种字体来显示。</p><p><img src="https://img.smyhvae.com/20191004_1130.png" alt="" loading="lazy"></p><p>参考链接：<a href="http://www.ayqy.net/blog/serif%EF%BC%8Csans-serif%EF%BC%8Cmonospace%EF%BC%8Ccursive%E5%92%8Cfantasy/" target="_blank" rel="noreferrer">serif，sans-serif，monospace，cursive 和 fantasy</a></p><h2 id="多字体-fallback-机制" tabindex="-1">多字体 fallback 机制 <a class="header-anchor" href="#多字体-fallback-机制" aria-label="Permalink to &quot;多字体 fallback 机制&quot;">​</a></h2><p>多字体 fallback 机制：当指定的字体找不到（或者某些文字不支持这个字体）时，那就接着往后找。比如：</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.div1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  font-family</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;PingFang SC&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Microsoft Yahei&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">monospace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>上方 CSS 代码的意思是：让指定标签元素中的文字，在 Mac &amp; iOS 平台用苹方字体，在 Win 平台用微软雅黑字体，如果这两个字体都没有，就随便找一个等宽的字体进行渲染。</p><p><strong>注意</strong>：</p><p>（1）写 CSS 代码时，字体族不需要带引号。</p><p>（2）有些 Mac 用户会安装 Office 等软件，安装这些软件后，系统会顺带安装微软雅黑字体。此时，写 CSS 代码时，如果写成 <code>&quot;Microsoft Yahei&quot;, &quot;PingFang SC&quot;</code>这种顺序，可能导致有些 Mac 用户用微软雅黑来显示字体。这么好看的苹方字体，你忍心割舍吗？</p><h2 id="font-weight-字体的加粗属性" tabindex="-1">font-weight：字体的加粗属性 <a class="header-anchor" href="#font-weight-字体的加粗属性" aria-label="Permalink to &quot;font-weight：字体的加粗属性&quot;">​</a></h2><p>font-weight 字体加粗属性，是让前端同学最迷茫的属性。当你把做好的网页拿给产品经理验收时，网页一打开，产品经理首先关注到的就是字体的加粗问题，你信不信？下面这些话都是产品经理的口头禅，想必早已让你产生了幻听：</p><ul><li><p>“这个字体怎么没有加粗？”</p></li><li><p>“这个字体是不是太粗了点？”</p></li><li><p>“为什么 iPhone 和 Android 手机上的文字粗细不一致？”</p></li></ul><p>想要明白这些疑惑，我们先来看看 <code>font-weight</code> 有哪些属性值。</p><p><strong>font-weight 属性</strong>：在设置字体是否加粗时，属性值既可以直接填写 100 至 900 这样的数字，也可以填写<code>normal</code>、<code>bold</code>这样的单词。<code>normal</code>的值相当于 400，<code>bold</code>的值相当于 700。如下：</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">font-weight</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: 100;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">font-weight</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: 200;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">font-weight</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: 300;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">font-weight</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: 400;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">font-weight</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: 500;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">font-weight</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: 600;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">font-weight</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: 700;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">font-weight</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: 800;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">font-weight</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: 900;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">font-weight</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: normal; // 相当于 400</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">font-weight</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: bold; // 相当于 700</span></span></code></pre></div><p>关键问题来了。很多人会发现，在 Windows 平台的浏览器中， font-weight 无论是设置 300、400，还是 500，文字的粗细都没有任何变化，只有到 600 的时候才会加粗一下，感觉浏览器好像不支持这些数值，那搞这么多档位不就是多余的吗？</p><p>这个时候，大家就开始吐槽 Windows 电脑太挫、Windows 浏览器太挫；同时还会感叹 Mac 真香，支持字体的各种粗细。</p><p><strong>实际上，所有这些数值关键字浏览器都是支持的，之所以没有看到任何粗细的变化，是因为你所使用的字体不支持</strong>。</p><p>就拿“微软雅黑”来举例，它只支持 400 和 700 这两种粗细，所以当你在代码里写成 500 的时候，也会被认为是 400。但是 Mac 上的“苹方”字体，就支持从 100 到 900 之间的各种粗细。</p><p>再比如，前段时间，阿里巴巴开源的普惠字体，也是支持多种粗细的：</p><p><img src="https://img.smyhvae.com/20191013_1100.png" alt="" loading="lazy"></p><h2 id="各大平台的默认字体加粗效果" tabindex="-1">各大平台的默认字体加粗效果 <a class="header-anchor" href="#各大平台的默认字体加粗效果" aria-label="Permalink to &quot;各大平台的默认字体加粗效果&quot;">​</a></h2><p>一张图，胜过千言万语。解释了这么多，我们来看看各大平台的字体加粗效果是什么样的。</p><p>以下截图，都是我亲测的结果，如果你打算让别人看效果，直接把下面的图丢给他即可。像我这样贴心的前端，不多见了。</p><p><strong>1、Mac 平台的默认字体加粗效果</strong>：（苹方字体）</p><p><img src="https://img.smyhvae.com/20191016_1205_mac.png" alt="" loading="lazy"></p><p><strong>2、Windows 平台的默认字体加粗效果</strong>：（微软雅黑字体）</p><p><img src="https://img.smyhvae.com/20191016_1205_windows2.png" alt="" loading="lazy"></p><p><strong>3、iOS 平台的默认字体加粗效果</strong>：（苹方字体）</p><p><img src="https://img.smyhvae.com/20191016_1205_ios.png" alt="" loading="lazy"></p><p><strong>4、Android 平台（华为 P30 Pro）的默认字体加粗效果</strong>：（Droid Sans 字体）</p><p><img src="https://img.smyhvae.com/20191016_1205_huawei_p30_pro.jpeg" alt="" loading="lazy"></p><h3 id="总结各大平台的默认字体加粗档位-字重" tabindex="-1">总结各大平台的默认字体加粗档位（字重） <a class="header-anchor" href="#总结各大平台的默认字体加粗档位-字重" aria-label="Permalink to &quot;总结各大平台的默认字体加粗档位（字重）&quot;">​</a></h3><blockquote><p>注意，系统默认的 normal 字重是 400；加粗的 bold 字重是 700。</p></blockquote><p>1、Mac &amp; iOS 平台的“苹方”字体的字重：（有 6 种粗细，<code>&gt;=600</code>的加粗效果是相同的）</p><ul><li>极细体：100</li><li>纤细体：200</li><li>细体：300</li><li>常规体：400</li><li>中黑体：500</li><li>中粗体：600、700、800、900</li></ul><p>2、Windows 平台的“微软雅黑”字体的字重：（只有两种粗细 ；<code>&gt;=600</code> 才会加粗，而且加粗效果相同）</p><ul><li><p>不加粗的默认字体：100、200、300、400、500</p></li><li><p>加粗字体：600、700、800</p></li></ul><p>3、Android 平台的 Droid Sans 字体的字重：（只有 <code>&gt;=700</code>才会加粗；而且加粗效果相同）</p><ul><li><p>不加粗的默认字体：100、200、300、400、500、600</p></li><li><p>加粗字体：700、800</p></li></ul><p><strong>实战中，系统默认字体的加粗总结</strong>：</p><ul><li>如果你做的软件产品只有苹果系统（比如 iOS 或 Mac），可以使用各种粗细和字重。</li><li>如果你做的软件产品包括了苹果系统（比如 iOS 或 Mac）和非苹果系统（比如 Android 或 Windows），建议直接使用 normal（系统默认） 和 bold 这两种粗细。</li></ul><h3 id="补充-苹方-字体的粗细效果-大图预览" tabindex="-1">补充：“苹方”字体的粗细效果，大图预览 <a class="header-anchor" href="#补充-苹方-字体的粗细效果-大图预览" aria-label="Permalink to &quot;补充：“苹方”字体的粗细效果，大图预览&quot;">​</a></h3><p>“苹方”字体包含了六种自重：常规体、中等、细体、特粗体、特细体、粗体。对应的 CSS 样式如下：</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 苹方-简 极细体：100 */</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">font-family</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: PingFangSC-Ultralight;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 苹方-简 纤细体：200*/</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">font-family</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: PingFangSC-Thin;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 苹方-简 细体：300 */</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">font-family</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: PingFangSC-Light;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 苹方-简 常规体：400 */</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">font-family</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: PingFangSC-Regular;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 苹方-简 中黑体：500 */</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">font-family</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: PingFangSC-Medium;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 苹方-简 中粗体：600、700、800、900 */</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">font-family</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: PingFangSC-Semibold;</span></span></code></pre></div><p>大图预览如下：</p><p><img src="https://img.smyhvae.com/20201028-1400.png" alt="" loading="lazy"></p><p>我还要多说一句：我实际测试发现，苹方字体的 200 字重和 300 字重，在 iOS 上的粗细是不同的（符合预期），但在 Mac 上的粗细效果是相同的（无论把字体放大多少倍，都是如此）。具体你可以看看我在上面的截图效果对比。我目测这应该是 Mac 系统的 bug。</p><h2 id="大部分字体不是免费的" tabindex="-1">大部分字体不是免费的 <a class="header-anchor" href="#大部分字体不是免费的" aria-label="Permalink to &quot;大部分字体不是免费的&quot;">​</a></h2><p>有一点你需要知道：你所见到的大部分字体，都不是免费的。换句话说，如果你想用第三方字体从事商业活动，要先交钱，获得授权后才可以使用。你在给公司做网页的时候，就是一种商业行为。</p><p>「微软雅黑」是免费字体吗？并不是。你可以将微软雅黑字体用在 office 软件中，但是一旦脱离了 office 软件或者脱离了 Windows 系统（比如说，你把做好的 PPT 打印出来拿去做商业宣传），你就不能使用该字体。</p><p>同理，苹果专属的「苹方字体」也只能在苹果系统的生态内使用。</p><p>免费字体当然有，比如<a href="https://baike.baidu.com/item/%E6%80%9D%E6%BA%90%E9%BB%91%E4%BD%93/14919098" target="_blank" rel="noreferrer">思源黑体</a>（Adobe 和 Google 在 2014 年 7 月联合推出的一款开源字体）、阿里巴巴普惠体等。但这些免费字体，我们平时基本用不到。</p><p>这也就是为什么，很多公司会专门购买一套商用字体库、甚至是自己开发一套字体出来，避免未来潜在的纠纷和麻烦。</p><p>给大家列举一个常见的场景。很多时候，前端同学拿到的视觉稿是 psd 稿，需要用 PS 软件打开源文件，才能看到里面的文字是什么字体。在 PS 软件里，当我们用光标选中字体的时候，出现了下面这种场景：</p><p><img src="https://img.smyhvae.com/20191010_1121.png" alt="" loading="lazy"></p><p>看到上面的<code>FZLTZCHK</code>，不要慌，马上去 Google 查一下，发现这个字体的全称是<code>方正兰亭</code>字体系列。恩，基本可以肯定， 这个字体也是要收费的。</p><p>这个时候，前端同学要马上告诉产品或者设计师，不要用这个字体，因为它是商用字体，是要收费的，小心吃官司。那我们该用什么字体呢？接着往下看。</p><h2 id="网页一般用什么字体" tabindex="-1">网页一般用什么字体 <a class="header-anchor" href="#网页一般用什么字体" aria-label="Permalink to &quot;网页一般用什么字体&quot;">​</a></h2><p>大多数情况下，网页使用系统默认的字体就足够了。如果要使用特殊字体，顶多只是让<strong>阿拉伯数字</strong>使用特殊字体。中文和英文，使用默认字体，完全足够。</p><p>如果确实要使用特殊字体，只有这几种办法：</p><ul><li>使用开源的免费字体（比如思源黑体、阿里巴巴普惠体等）。但这类字体，种类很少，而且大多不是很好看。网页开发中，基本没人用。</li><li>单独购买第三方的商用字体，获得授权。</li><li>自己公司（找人）开发一套字体，给自己人用。</li></ul><p>关于第三种办法，下面，我将以「京东朗正体」来举例。</p><h2 id="自主研发的字体举例-京东朗正体" tabindex="-1">自主研发的字体举例：京东朗正体 <a class="header-anchor" href="#自主研发的字体举例-京东朗正体" aria-label="Permalink to &quot;自主研发的字体举例：京东朗正体&quot;">​</a></h2><h3 id="使用举例" tabindex="-1">使用举例 <a class="header-anchor" href="#使用举例" aria-label="Permalink to &quot;使用举例&quot;">​</a></h3><p>比如 JD 公司就自主开发了一套商用字体<code>京东朗正体</code>，支持三种粗细。只允许 JD 公司自己用，别家公司不允许用。如下：</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * JD正黑体，提供三种字重，请严格按设计稿选择字体</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@font-face</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  font-family</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;JDZH-Light&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xxx.com/data/ppms/others/JDZH_Light.ttf&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;truetype&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@font-face</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  font-family</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;JDZH-Regular&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xxx.com/data/ppms/others/JDZH_Regular.ttf&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;truetype&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@font-face</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  font-family</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;JDZH-Bold&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xxx.com/data/ppms/others/JDZH_Bold.ttf&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;truetype&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@font-face</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  font-family</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;JDZhengHT-EN-Bold&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xxx.com/data/ppms/others/JDZhengHei_01_Bold.ttf&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;truetype&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>为了使用这个<code>京东朗正体</code>字体， JD 公司在实际开发网页时，是这样做的：</p><ul><li><p>步骤 1：在公共的 CSS 文件中引入上方的字体库代码。这样的话，当页面加载时，用户的终端就会去下载这个字体库。</p></li><li><p>步骤 2：在业务代码中，针对目标样式，直接使用 <code>font-family: &#39;JDZH-Regular&#39;;</code>这样的代码，即可生效。</p></li></ul><p>这个<code>JDZH</code>，我们一般也只使用在阿拉伯数字中；中文和英文，建议使用系统默认字体就行，否则会导致字体文件过大。</p><h3 id="使用规则" tabindex="-1">使用规则 <a class="header-anchor" href="#使用规则" aria-label="Permalink to &quot;使用规则&quot;">​</a></h3><p><img src="https://img.smyhvae.com/20201224_1916.png" alt="" loading="lazy"></p><p><img src="https://img.smyhvae.com/20201224_1921.png" alt="" loading="lazy"></p><p>从资料中可以看出，<strong>京东朗正体</strong>的版权属于方正公司，而京东具有永久使用权。</p><h2 id="最后一段" tabindex="-1">最后一段 <a class="header-anchor" href="#最后一段" aria-label="Permalink to &quot;最后一段&quot;">​</a></h2><p>所谓「见微知著」，一个再不起眼的知识点，也是有很多学问的。光是“字体”这一点，就足够成为一门学科。</p><p>2005 年，苹果公司创始人乔布斯（Steve Jobs）在斯坦福大学的毕业典礼演讲上，有过这样一段话：</p><blockquote><p>当时的我从来没有期盼过我所学的这些东西，能够在我的生活中有什么实际的用处。</p></blockquote><blockquote><p>但是到了十年之后，当我们在设计第一台 Macintosh 电脑时，这些所学都涌进了我的头脑。于是，我把这些设计融入到了 Mac 电脑之中，这也使这台 Mac 成为了第一台拥有漂亮字体的电脑。</p></blockquote><blockquote><p>可以说，如果我当时没有退学，就不会有机会去参加我感兴趣的美术字课程，Mac 也就不会拥有那些美妙的排版和字体。而当 Windows 系统借鉴了 Mac 之后，似乎所有的电脑都应该是这个样子。</p></blockquote><blockquote><p>当时的我没有办法把这些点点滴滴连接起来，但是，<strong>当我十年后回顾的时候，一切都变得豁然开朗</strong>。</p></blockquote><h2 id="字体相关的网站推荐" tabindex="-1">字体相关的网站推荐 <a class="header-anchor" href="#字体相关的网站推荐" aria-label="Permalink to &quot;字体相关的网站推荐&quot;">​</a></h2><ul><li><p>360 字体版权查询：<a href="https://fonts.safe.360.cn/" target="_blank" rel="noreferrer">https://fonts.safe.360.cn/</a></p></li><li><p>2020 年最全的免费可商用字体清单：<a href="https://github.com/wordshub/free-font" target="_blank" rel="noreferrer">https://github.com/wordshub/free-font</a></p></li><li><p>免费可商用字体-效果预览（跟上线的链接属于同一个项目）：<a href="https://wordshub.github.io/free-font/index.html" target="_blank" rel="noreferrer">https://wordshub.github.io/free-font/index.html</a></p></li><li><p>常见的免费字体：<a href="http://zenozeng.github.io/Free-Chinese-Fonts/" target="_blank" rel="noreferrer">http://zenozeng.github.io/Free-Chinese-Fonts/</a></p></li></ul><p>如果不花钱，免费可商用的字体挺少的，也才 100 多种。</p><h2 id="推荐阅读" tabindex="-1">推荐阅读 <a class="header-anchor" href="#推荐阅读" aria-label="Permalink to &quot;推荐阅读&quot;">​</a></h2><ul><li><p><a href="https://aotu.io/notes/2020/02/28/webfont-processing/index.html" target="_blank" rel="noreferrer">Web 中文字体处理总结</a></p></li><li><p>常见的免费字体：<a href="http://zenozeng.github.io/Free-Chinese-Fonts/" target="_blank" rel="noreferrer">http://zenozeng.github.io/Free-Chinese-Fonts/</a></p></li><li><p>如何优雅的选择字体(font-family)：<a href="https://segmentfault.com/a/1190000006110417" target="_blank" rel="noreferrer">https://segmentfault.com/a/1190000006110417</a></p></li><li><p>iconfont：<a href="https://www.iconfont.cn/" target="_blank" rel="noreferrer">https://www.iconfont.cn/</a></p></li><li><p><a href="https://zhuanlan.zhihu.com/p/24242767" target="_blank" rel="noreferrer">乔布斯斯坦福大学演讲-翻译</a></p></li><li><p><a href="https://www.douban.com/note/149058647/" target="_blank" rel="noreferrer">乔布斯斯坦福大学演讲-翻译</a></p></li><li><p>阿里巴巴官方发布免费商用字体：阿里巴巴普惠体：<a href="https://mp.weixin.qq.com/s/daKUNnF_Ste-O1l0sR89sQ" target="_blank" rel="noreferrer">https://mp.weixin.qq.com/s/daKUNnF_Ste-O1l0sR89sQ</a></p></li><li><p>得到 | 从甲骨文至得到今楷，造字的人都是神：<a href="https://mp.weixin.qq.com/s/ZnMxrhoH9piLf9EaSIwiGA" target="_blank" rel="noreferrer">https://mp.weixin.qq.com/s/ZnMxrhoH9piLf9EaSIwiGA</a></p></li><li><p><a href="https://www.shejidaren.com/app-she-ji-bi-bei-zi-ti.html" target="_blank" rel="noreferrer">APP 设计必备字体：San Francisco Pro、苹方、思源黑体和 Roboto 等</a></p></li><li><p><a href="https://mp.weixin.qq.com/s/i1qgUaSHrQlvqT-u3qJySw" target="_blank" rel="noreferrer">《独立宣言》使用了什么字体？</a></p></li><li><p><a href="https://mp.weixin.qq.com/s/4uEBoajTygSADslzem3yZA" target="_blank" rel="noreferrer">你的版权常识指南</a></p></li><li><p><a href="https://mp.weixin.qq.com/s/wPqd0H9125bK7775KGoFbg" target="_blank" rel="noreferrer">免费商用 | 这几款字体你值得拥有</a></p></li></ul><p><img src="https://img.smyhvae.com/20191016_2030.png" alt="" loading="lazy"></p>`,109),u=i(e,[["render",function(r,o,k,g,d,E){const s=a("ArticleTopAd");return p(),n("div",null,[t(s),h])}]]);export{y as __pageData,u as default};
