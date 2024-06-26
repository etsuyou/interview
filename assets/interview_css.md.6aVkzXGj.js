import{_ as i,c as s,o as a,a4 as l}from"./chunks/framework.B2xMVIVo.js";const c=JSON.parse('{"title":"CSS 面试题","description":"","frontmatter":{},"headers":[],"relativePath":"interview/css.md","filePath":"interview/css.md","lastUpdated":1719234304000}'),t={name:"interview/css.md"},e=[l(`<h1 id="css-面试题" tabindex="-1">CSS 面试题 <a class="header-anchor" href="#css-面试题" aria-label="Permalink to &quot;CSS 面试题&quot;">​</a></h1><h2 id="_1、说说你对-盒子模型-的理解" tabindex="-1">1、说说你对 <code>盒子模型</code> 的理解? <a class="header-anchor" href="#_1、说说你对-盒子模型-的理解" aria-label="Permalink to &quot;1、说说你对 \`盒子模型\` 的理解?&quot;">​</a></h2><p>盒子模型指的是 <code>content</code>、<code>padding</code>、<code>border</code>、<code>margin</code> 四个部分。</p><p>盒子模型的总宽度和高度计算公式如下：</p><ul><li>总宽度 = 内容宽度 + 左内边距 + 右内边距 + 左边框 + 右边框 + 左外边距 + 右外边距 <ul><li>content+padding+border+margin</li></ul></li><li>总高度 = 内容高度 + 上内边距 + 下内边距 + 上边框 + 下边框 + 上外边距 + 下外边距 <ul><li>高度同理</li></ul></li></ul><h3 id="标准盒子模型-vs-ie-盒子模型-怪异盒模型" tabindex="-1">标准盒子模型 vs. IE 盒子模型( 怪异盒模型) <a class="header-anchor" href="#标准盒子模型-vs-ie-盒子模型-怪异盒模型" aria-label="Permalink to &quot;标准盒子模型 vs. IE 盒子模型( 怪异盒模型)&quot;">​</a></h3><p>CSS 中的盒子模型包括 <code>IE盒子模型(怪异盒)</code>和<code>标准的W3C盒子模型</code>。</p><ul><li><p>在标准盒子模型（W3C Box Model）中，元素的 <code>width</code> 和 <code>height</code> 只包括<strong>内容的宽度和高度</strong>，不包括内边距和边框。</p></li><li><p>在 IE 盒子模型（IE Box Model）中，元素的 <code>width</code> 和 <code>height</code> 包括<strong>内容、内边距和边框的总和</strong>。这种模型在老版本的 IE 浏览器中默认使用。</p></li></ul><p>也就是说：</p><p><strong>在标准的盒子模型中</strong>，width 指 <strong>content 部分的宽度</strong>。</p><p><strong>在 IE 盒子模型中</strong>，width 表示 <strong>content + padding + border</strong> 这三个部分的宽度。</p><h3 id="box-sizing-属性" tabindex="-1"><code>box-sizing</code> 属性 <a class="header-anchor" href="#box-sizing-属性" aria-label="Permalink to &quot;\`box-sizing\` 属性&quot;">​</a></h3><p>为了在不同的盒子模型之间切换，可以使用 CSS 的 <code>box-sizing</code> 属性：</p><ul><li><code>box-sizing: content-box;</code><ul><li>（默认）：使用标准盒子模型。</li></ul></li><li><code>box-sizing: border-box;</code>： <ul><li>（常用）：使用 IE 盒子模型。</li><li>可以简化布局计算，因为在这种模式下，设置的 <code>width</code> 和 <code>height</code> 包括内边距和边框。</li></ul></li></ul><h2 id="_2、box-sizing-属性" tabindex="-1">2、box-sizing 属性 <a class="header-anchor" href="#_2、box-sizing-属性" aria-label="Permalink to &quot;2、box-sizing 属性&quot;">​</a></h2><p>CSS 中的 box-sizing 属性定义了引擎应该如何计算一个元素的总宽度和总高度。</p><p><strong>box-sizing: content-box | border-box | inherit:</strong></p><ul><li>content-box：元素的 width/height 不包含 padding，border。【标准盒子模型】</li><li>border-box：元素的 width/height 包含 padding，border。【IE 盒子模型】</li><li>inherit：继承父元素的 box-sizing 值。</li></ul><h2 id="_3、css-选择器有哪些-优先级-哪些属性可以继承" tabindex="-1">3、CSS 选择器有哪些？优先级？哪些属性可以继承？ <a class="header-anchor" href="#_3、css-选择器有哪些-优先级-哪些属性可以继承" aria-label="Permalink to &quot;3、CSS 选择器有哪些？优先级？哪些属性可以继承？&quot;">​</a></h2><p><strong>常用的 CSS 选择器有：</strong></p><ul><li>id 选择器 (#myid)</li><li>类选择器 (.myclass)</li><li>属性选择器 (a[rel=&quot;external&quot;])</li><li>伪类选择器 (a:hover, li:nth-child)</li><li>标签选择器 (div, h1, p)</li><li>兄弟选择器 (h1 + p)</li><li>子选择器 (ul &gt; li)</li><li>后代选择器 (li a)</li><li>通配符选择器 (*)</li></ul><p><strong>优先级：</strong></p><ul><li>!important（无穷大）</li><li>内联样式（1000）</li><li>ID 选择器（0100）</li><li>类选择器/属性选择器/伪类选择器（0010）</li><li>元素选择器/伪元素选择器（0001）</li><li>关系选择器/通配符选择器（0000）</li></ul><p>带 !important 标记的样式属性优先级最高；样式表的来源相同时：!important &gt; 行内样式 &gt; ID 选择器 &gt; 类选择器 &gt; 标签 &gt; 通配符 &gt; 继承 &gt; 浏览器默认属性。</p><p><strong>继承属性：</strong></p><p>字体系列属性：</p><table tabindex="0"><thead><tr><th>font-family</th><th>font-weight</th><th>font-size</th><th>font-style</th></tr></thead><tbody><tr><td>字体</td><td>字体的粗细</td><td>字体的尺寸</td><td>字体的风格</td></tr></tbody></table><p>文本系列属性：</p><table tabindex="0"><thead><tr><th>text-indent</th><th>text-align</th><th>line-height</th><th>direction</th><th>color</th></tr></thead><tbody><tr><td>文本缩进</td><td>文本水平设置</td><td>行高</td><td>书写方向</td><td>文本颜色</td></tr></tbody></table><p>元素可见性 (visibility) 等。</p><p><strong>无继承的属性：</strong></p><ul><li>display</li><li>文本属性：vertical-align、text-decoration</li><li>背景属性、盒子模型的属性、定位属性等。</li></ul><h2 id="_4、em-px-rem-vh-vw-区别" tabindex="-1">4、em/px/rem/vh/vw 区别? <a class="header-anchor" href="#_4、em-px-rem-vh-vw-区别" aria-label="Permalink to &quot;4、em/px/rem/vh/vw 区别?&quot;">​</a></h2><ul><li>px：绝对单位，页面按<strong>精确像素</strong>展示。</li><li>em：相对单位，基准点为<strong>父节点字体的大小</strong>，如果自身定义了 font-size 按自身来计算，整个页面内 1em 不是一个固定的值。</li><li>rem：相对单位，相对的只是 <strong>HTML 根元素 font-size 的值</strong>。</li><li>vw：根据<strong>窗口的宽度</strong>，分成 100 等份，100vw 就表示满宽。</li><li>vh：根据<strong>窗口的高度</strong>，分成 100 等份，100vh 就表示满高。</li></ul><p>vh、vw 主要用于页面视口大小布局，在页面布局上更加方便简单。</p><h2 id="_5、css-中-有哪些方式可以隐藏页面元素-区别" tabindex="-1">5、CSS 中，有哪些方式可以隐藏页面元素？区别? <a class="header-anchor" href="#_5、css-中-有哪些方式可以隐藏页面元素-区别" aria-label="Permalink to &quot;5、CSS 中，有哪些方式可以隐藏页面元素？区别?&quot;">​</a></h2><p><strong>通过 CSS 实现隐藏元素的方法有如下：</strong></p><h3 id="不显示" tabindex="-1">不显示 <a class="header-anchor" href="#不显示" aria-label="Permalink to &quot;不显示&quot;">​</a></h3><ol><li>display: none：将元素设置为 display: none 后，元素在页面上将彻底消失，导致浏览器的重排和重绘，无法响应点击事件。 <ul><li>（不显示，所以看不到）</li></ul></li><li>visibility: hidden：仅仅是隐藏该元素，DOM 结果均会存在，只是当时在一个不可见的状态，不会触发重排，但是会触发重绘，无法响应点击事件。 <ul><li>（不可见隐藏，所以看不到）</li></ul></li><li>设置 height、width 模型属性为 0：将元素的 height 和 width 等影响元素盒模型的属性设置成 0，如果元素内有子元素或内容，还应该设置其 overflow: hidden 来隐藏其子元素，无法响应点击事件。 <ul><li>（没有长宽，所以不显示，所以看不到）</li></ul></li></ol><h3 id="显示了但是看不到" tabindex="-1">显示了但是看不到 <a class="header-anchor" href="#显示了但是看不到" aria-label="Permalink to &quot;显示了但是看不到&quot;">​</a></h3><ol><li>opacity: 0：将元素的透明度设置为 0 后，元素也是隐藏的，不会引发重排，一般情况下也会引发重绘，可以响应点击事件。 <ul><li>（透明的，看不见）</li></ul></li><li>position: absolute：将元素移出可视区域，使用 top: -9999px; left: -9999px; 特点：元素不可见，不影响页面布局。 <ul><li>（移出可视区，看不见）</li></ul></li></ol><h2 id="_6、谈谈你对-bfc-的理解" tabindex="-1">6、谈谈你对 BFC 的理解？ <a class="header-anchor" href="#_6、谈谈你对-bfc-的理解" aria-label="Permalink to &quot;6、谈谈你对 BFC 的理解？&quot;">​</a></h2><p>BFC（Block Formatting Context），即块级格式化上下文，它是页面中的一块渲染区域，并且有一套属于自己的渲染规则：</p><ol><li>内部的盒子会在垂直方向上一个接一个的放置。</li><li>对于同一个 BFC 的两个相邻的盒子的 margin 会发生<strong>重叠</strong>，与方向无关。</li><li>每个元素的左外边距与包含块的左边界相接触（从左到右），即使浮动元素也是如此。</li><li>BFC 的区域不会与 float 的元素区域重叠。</li><li>计算 BFC 的高度时，浮动子元素也参与计算。</li><li>BFC 就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之亦然。</li></ol><p><strong>如何创建 BFC？</strong></p><ol><li>根元素，即 HTML 元素。</li><li>float 的值不为 none。</li><li>position 为 absolute 或 fixed。</li><li>display 的值为 inline-block、table-cell、table-caption。</li><li>overflow 的值不为 visible。</li></ol><p><strong>BFC 应用场景</strong></p><ol><li>防止 margin 重叠（塌陷）。</li><li>清除内部浮动。</li><li>自适应多栏布局等。</li></ol><h2 id="_7、元素水平垂直居中的方法有哪些" tabindex="-1">7、元素水平垂直居中的方法有哪些？ <a class="header-anchor" href="#_7、元素水平垂直居中的方法有哪些" aria-label="Permalink to &quot;7、元素水平垂直居中的方法有哪些？&quot;">​</a></h2><p><strong>一、水平居中</strong></p><p><strong>对于行内元素</strong>（文字）:</p><ul><li>使用 <code>text-align: center;</code></li></ul><p><strong>对于确定宽度的块级元素：</strong></p><ol><li>使用 <code>margin: 0 auto;</code>。 <ul><li>上下无间距，左右居中</li></ul></li><li>绝对定位+计算 <ul><li><code>margin-left: (父 width - 子 width)/2</code>，前提是父元素 <code>position: relative</code>。</li></ul></li></ol><p><strong>对于宽度未知的块级元素：</strong></p><ol><li>inline-block 实现水平居中方法。子元素 <code>display: inline-block</code> 和父元素 <code>text-align: center</code> 实现水平居中。</li><li>绝对定位 + transform，<code>translateX</code> 可以移动本身元素的 50%。</li><li>flex 布局，父元素使用 <code>justify-content: center</code>。</li><li>table 标签配合 <code>margin</code> 左右 <code>auto</code> 实现水平居中。使用 table 标签，再通过给该标签添加左右 <code>margin</code> 为 <code>auto</code>。</li></ol><p><strong>二、垂直居中</strong></p><ol><li>利用 <code>line-height</code> 实现居中，这种方法适合纯文字类。</li><li>通过设置父容器相对定位，子级设置绝对定位，标签通过 <code>margin</code> 实现自适应居中。</li><li>弹性布局 flex：父级设置 <code>display: flex;</code> 子级设置 <code>margin</code> 为 <code>auto</code> 实现自适应居中。</li><li>父级设置相对定位，子级设置绝对定位，并且通过位移 <code>transform</code> 实现。</li><li>table 布局，父级通过转换成表格形式，然后子级设置 <code>vertical-align</code> 实现。</li></ol><h2 id="_8、如何实现两栏布局-右侧自适应-三栏布局中间自适应呢" tabindex="-1">8、如何实现两栏布局，右侧自适应？三栏布局中间自适应呢？ <a class="header-anchor" href="#_8、如何实现两栏布局-右侧自适应-三栏布局中间自适应呢" aria-label="Permalink to &quot;8、如何实现两栏布局，右侧自适应？三栏布局中间自适应呢？&quot;">​</a></h2><h3 id="两栏布局" tabindex="-1"><strong>两栏布局：</strong> <a class="header-anchor" href="#两栏布局" aria-label="Permalink to &quot;**两栏布局：**&quot;">​</a></h3><p>两栏布局实现效果就是将页面分割成左右宽度不等的两列，宽度较小的列设置为固定宽度，剩余宽度由另一列撑满。</p><p><strong>实现思路 1：</strong></p><ol><li>float 左浮左边栏。</li><li>使用 margin-left 撑出内容块做内容展示。</li><li>级元素添加 BFC，防止下方元素飞到上方内容，如 <code>overflow: hidden</code>。</li></ol><p><strong>实现思路 2：</strong></p><p>使用 flex 弹性布局。父盒子 <code>display: flex</code>，左侧盒子写入宽度，右侧盒子 <code>flex: 1</code> 占一份。</p><h3 id="三栏布局" tabindex="-1"><strong>三栏布局</strong> <a class="header-anchor" href="#三栏布局" aria-label="Permalink to &quot;**三栏布局**&quot;">​</a></h3><p>三栏布局按照左中右的顺序进行排列，通常中间列最宽，左右两列次之。</p><p><strong>实现思路：</strong></p><ol><li>两边使用 float，中间使用 margin。</li><li>使用 absolute，中间使用 margin。</li><li>圣杯布局，利用 margin 负值法。使用圣杯布局首先需要在 center 元素外部包含一个 div，包含 div 需要设置 float 属性使其形成一个 BFC，并设置宽度为百分之百，这样中间盒子独占一行，左右盒子被挤到下方。让左边的盒子上去要设置 <code>margin-left: -100%</code>，让右边的盒子上去要设置 <code>margin-left: 负自身宽度</code>。</li><li>使用 display: table 实现。</li><li>使用 flex 实现。将父级设置为 <code>display: flex; justify-content: space-between;</code> 即可。</li><li>使用 grid 网格布局。设置 <code>display: grid; width: 100%; grid-template-columns: 300px auto 300px;</code> 即可。</li></ol><h2 id="_9、说说-flexbox-弹性盒布局模型-以及适用场景" tabindex="-1">9、说说 flexbox（弹性盒布局模型），以及适用场景？ <a class="header-anchor" href="#_9、说说-flexbox-弹性盒布局模型-以及适用场景" aria-label="Permalink to &quot;9、说说 flexbox（弹性盒布局模型），以及适用场景？&quot;">​</a></h2><p>关于 flex 常用的属性，我们可以划分为容器属性和容器成员属性。</p><p><strong>一、容器属性</strong></p><ul><li>flex-direction：决定主轴的方向。<code>flex-direction: row | row-reverse | column | column-reverse;</code></li><li>flex-wrap：决定换行规则。<code>flex-wrap: nowrap | wrap | wrap-reverse;</code></li><li>flex-flow：<code>flex-direction</code> 属性和 <code>flex-wrap</code> 属性的简写形式。</li><li>justify-content：对齐方式，水平主轴对齐方式。 <ol><li>space-between：两端对齐，项目之间的间隔都相等。</li><li>space-around：两个项目两侧间隔相等。</li></ol></li><li>align-items：对齐方式，竖直轴线方向。</li><li>align-content：定义了多根轴线的对齐方式。</li></ul><p><strong>二、项目的属性（元素的属性）：</strong></p><ul><li>order 属性：定义项目的排列顺序，顺序越小，排列越靠前，默认为 0。</li><li>flex-grow 属性：定义项目的放大比例，默认为 0，即使存在空间，也不会放大。</li><li>flex-shrink 属性：定义了项目的缩小比例，当空间不足的情况下会等比例的缩小，如果定义个 item 的 flex-shrink 为 0，则为不缩小。</li><li>flex-basis 属性：定义了在分配多余的空间，项目占据的空间。</li><li>flex：是 <code>flex-grow</code> 和 <code>flex-shrink</code>、<code>flex-basis</code> 的简写，默认值为 <code>0 1 auto</code>。</li><li>align-self：允许单个项目与其他项目不一样的对齐方式，可以覆盖。</li></ul><h2 id="_10、flex-实现-div-左上角、中间、左下角布局-css" tabindex="-1">10、flex 实现 div 左上角、中间、左下角布局 CSS <a class="header-anchor" href="#_10、flex-实现-div-左上角、中间、左下角布局-css" aria-label="Permalink to &quot;10、flex 实现 div 左上角、中间、左下角布局 CSS&quot;">​</a></h2><p>父级设置，子级利用绝对定位，自由移动到页面的不同位置，例如左上角。</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.parent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  display</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">flex</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  position</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">relative</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  flex-direction</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">row</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  justify-content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">space-around</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  align-items</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">center</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="_11、清除浮动的方式有哪几种" tabindex="-1">11、清除浮动的方式有哪几种？ <a class="header-anchor" href="#_11、清除浮动的方式有哪几种" aria-label="Permalink to &quot;11、清除浮动的方式有哪几种？&quot;">​</a></h2><ol><li>添加额外标签：给父级添加 <code>&lt;div style=&quot;clear: both&quot;&gt;&lt;/div&gt;</code>。</li><li>父级添加 <code>overflow</code> 属性，或者设置高度。</li><li>建立伪类选择器清除浮动。</li><li>使用 <code>before</code> 和 <code>after</code> 双伪元素清除浮动。</li></ol><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.parent:after</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  display</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">block</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  visibility</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">hidden</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  clear</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">both</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="_12、css3-新增了哪些新特性" tabindex="-1">12、CSS3 新增了哪些新特性？ <a class="header-anchor" href="#_12、css3-新增了哪些新特性" aria-label="Permalink to &quot;12、CSS3 新增了哪些新特性？&quot;">​</a></h2><ul><li>一、选择器</li></ul><p>CSS3 中新增了一些选择器，主要包括属性选择器、结构伪类选择器、伪元素选择器等。</p><ul><li>二、新样式</li></ul><table tabindex="0"><thead><tr><th>属性</th><th>解释</th></tr></thead><tbody><tr><td>border-radius</td><td>创建圆角边框</td></tr><tr><td>box-shadow</td><td>为元素添加阴影</td></tr><tr><td>border-image</td><td>使用图片来绘制边框</td></tr><tr><td>box-shadow</td><td>设置元素阴影</td></tr><tr><td>background-clip</td><td>确定背景画区</td></tr><tr><td>background-origin</td><td>确定图片对齐点</td></tr><tr><td>background-size</td><td>调整背景图片大小</td></tr><tr><td>rgba</td><td>rgba 分为两部分，rgb 为颜色值，a 为透明度</td></tr><tr><td>word-wrap</td><td>允许在单词内换行</td></tr><tr><td>text-overflow</td><td>超过容器边界如何显示</td></tr><tr><td>text-shadow</td><td>向文本应用阴影</td></tr><tr><td>text-decoration</td><td>对文字更深层次的渲染</td></tr></tbody></table><ul><li>三、transition 过渡</li></ul><p><code>transition</code> 属性可以被指定为一个或多个 CSS 属性的过渡效果，多个属性之间用逗号进行分隔，语法如下：</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">transition: CSS属性 花费时间 效果曲线(默认 ease) 延迟时间(默认 0);</span></span></code></pre></div><ul><li>四、transform 转换</li></ul><p><code>transform</code> 属性允许你旋转，缩放，倾斜或平移给定元素。</p><ul><li><p>五、animation 动画</p></li><li><p>六、渐变</p></li></ul><p><code>linear-gradient</code>：线性渐变。</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">background-image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: linear-gradient(direction, </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">color-stop1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">color-stop2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, ...);</span></span></code></pre></div><ul><li>七、CSS3 其他的新特性还包括 flex 弹性布局、Grid 栅格布局。</li></ul><h2 id="_13、css3-动画有哪些" tabindex="-1">13、CSS3 动画有哪些？ <a class="header-anchor" href="#_13、css3-动画有哪些" aria-label="Permalink to &quot;13、CSS3 动画有哪些？&quot;">​</a></h2><p><strong>CSS 实现动画的方式，有如下几种：</strong></p><ol><li><code>transition</code> 实现渐变动画。过渡简写：<code>transition: all 2s ease-in 500ms;</code></li><li><code>transform</code> 转变动画。包含四个常用的功能：<code>translate</code>（位移）、<code>scale</code>（缩放）、<code>rotate</code>（旋转）、<code>skew</code>（倾斜）。</li><li><code>animation</code> 实现自定义动画。通过 <code>@keyframes</code> 来定义关键帧。</li></ol><h2 id="_14、css-提高性能的方法有哪些" tabindex="-1">14、CSS 提高性能的方法有哪些？ <a class="header-anchor" href="#_14、css-提高性能的方法有哪些" aria-label="Permalink to &quot;14、CSS 提高性能的方法有哪些？&quot;">​</a></h2><p><strong>实现方式有很多种，主要有如下：</strong></p><ol><li>内联首屏关键 CSS：通过内联 CSS 关键代码能够使浏览器在下载完 HTML 后就能立刻渲染。</li><li>异步加载 CSS。</li><li>资源压缩：利用 webpack 等模块化工具，将 CSS 代码进行压缩，使文件变小，大大降低了浏览器的加载时间。</li><li>合理使用选择器：不要嵌套使用过多复杂选择器。</li><li>减少使用昂贵的属性：在页面发生重绘的时候，昂贵属性如 <code>box-shadow</code>、<code>border-radius</code>、<code>filter</code>、透明度、<code>:nth-child</code> 等，会降低浏览器的渲染性能。</li><li>不要使用 <code>@import</code>：<code>@import</code> 会影响浏览器的并行下载，使得页面在加载时增加额外的延迟，增添了额外的往返耗时。</li></ol><h2 id="_15、浏览器重绘与重排的区别" tabindex="-1">15、浏览器重绘与重排的区别？ <a class="header-anchor" href="#_15、浏览器重绘与重排的区别" aria-label="Permalink to &quot;15、浏览器重绘与重排的区别？&quot;">​</a></h2><p><strong>重排/回流（Reflow）：</strong> 当 DOM 的变化影响了元素的几何信息，浏览器需要重新计算元素的几何属性，将其安放在界面中的正确位置，这个过程叫做重排。表现为重新生成布局，重新排列元素。</p><p><strong>重绘（Repaint）：</strong> 当一个元素的外观发生改变，但没有改变布局，重新把元素外观绘制出来的过程，叫做重绘。表现为某些元素的外观被改变。</p><p>当浏览器完成重排之后，将会重新绘制受到此次重排影响的部分。重排和重绘代价是高昂的，它们会破坏用户体验，并且让 UI 展示非常迟缓，而相比之下重排的性能影响更大，在两者无法避免的情况下，一般我们宁可选择代价更小的重绘。</p><p><strong>重绘不一定会出现重排，重排必然会出现重绘。</strong></p><h3 id="如何触发重排和重绘" tabindex="-1"><strong>如何触发重排和重绘？</strong> <a class="header-anchor" href="#如何触发重排和重绘" aria-label="Permalink to &quot;**如何触发重排和重绘？**&quot;">​</a></h3><p>任何改变用来构建渲染树的信息都会导致一次重排或重绘：</p><ol><li>添加、删除、更新 DOM 节点。</li><li>通过 <code>display: none</code> 隐藏一个 DOM 节点-触发重排和重绘。</li><li>通过 <code>visibility: hidden</code> 隐藏一个 DOM 节点-只触发重绘，因为没有几何变化。</li><li>移动或者给页面中的 DOM 节点添加动画。</li><li>添加一个样式表，调整样式属性。</li><li>用户行为，例如调整窗口大小，改变字号，或者滚动。</li></ol><h3 id="如何避免重绘或者重排" tabindex="-1"><strong>如何避免重绘或者重排？</strong> <a class="header-anchor" href="#如何避免重绘或者重排" aria-label="Permalink to &quot;**如何避免重绘或者重排？**&quot;">​</a></h3><ol><li>集中改变样式，不要一条一条地修改 DOM 的样式。</li><li>不要把 DOM 结点的属性值放在循环里当成循环里的变量。</li><li>为动画的 HTML 元件使用 fixed 或 absolute 的 position，那么修改它们的 CSS 是不会 reflow 的。</li><li>不使用 table 布局。因为可能很小的一个小改动会造成整个 table 的重新布局。</li><li>尽量只修改 <code>position: absolute</code> 或 <code>fixed</code> 元素，对其他元素影响不大。</li><li>动画开始 GPU 加速，translate 使用 3D 变化。</li><li>将元素提升为合成层。</li></ol><h2 id="_16-什么是响应式设计-响应式设计的基本原理是什么-如何做" tabindex="-1">16. 什么是响应式设计？响应式设计的基本原理是什么？如何做？ <a class="header-anchor" href="#_16-什么是响应式设计-响应式设计的基本原理是什么-如何做" aria-label="Permalink to &quot;16. 什么是响应式设计？响应式设计的基本原理是什么？如何做？&quot;">​</a></h2><p>响应式网站设计是一种网络页面设计布局，页面的设计与开发应当根据用户行为以及设备环境（系统平台、屏幕尺寸、屏幕定向等）进行相应的响应和调整。</p><h3 id="响应式设计的基本原理" tabindex="-1">响应式设计的基本原理 <a class="header-anchor" href="#响应式设计的基本原理" aria-label="Permalink to &quot;响应式设计的基本原理&quot;">​</a></h3><p>通过媒体查询检测不同的设备屏幕尺寸做处理。为了处理移动端，页面头部必须有 <code>meta</code> 声明 <code>viewport</code>。</p><h3 id="实现响应式布局的方式" tabindex="-1">实现响应式布局的方式 <a class="header-anchor" href="#实现响应式布局的方式" aria-label="Permalink to &quot;实现响应式布局的方式&quot;">​</a></h3><ol><li><strong>媒体查询</strong></li><li><strong>百分比</strong></li><li><strong>vw/vh</strong></li><li><strong>rem</strong></li></ol><h3 id="媒体查询语法" tabindex="-1">媒体查询语法 <a class="header-anchor" href="#媒体查询语法" aria-label="Permalink to &quot;媒体查询语法&quot;">​</a></h3><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@media</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> screen</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> and</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">min-width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">375</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">and</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">max-width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">600</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    font-size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">18</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="响应式布局优点" tabindex="-1">响应式布局优点 <a class="header-anchor" href="#响应式布局优点" aria-label="Permalink to &quot;响应式布局优点&quot;">​</a></h3><ol><li>面对不同分辨率设备灵活性强</li><li>能够快捷解决多设备显示适应问题</li></ol><h3 id="缺点" tabindex="-1">缺点 <a class="header-anchor" href="#缺点" aria-label="Permalink to &quot;缺点&quot;">​</a></h3><ol><li>仅适用布局、信息、框架并不复杂的部门类型网站</li><li>兼容各种设备工作量大，效率低下</li></ol><h2 id="_17-如何实现单行-多行文本溢出的省略样式" tabindex="-1">17. 如何实现单行/多行文本溢出的省略样式？ <a class="header-anchor" href="#_17-如何实现单行-多行文本溢出的省略样式" aria-label="Permalink to &quot;17. 如何实现单行/多行文本溢出的省略样式？&quot;">​</a></h2><h3 id="一、单行文本溢出省略" tabindex="-1">一、单行文本溢出省略 <a class="header-anchor" href="#一、单行文本溢出省略" aria-label="Permalink to &quot;一、单行文本溢出省略&quot;">​</a></h3><ol><li><code>text-overflow: ellipsis</code>：规定当文本溢出时，显示省略符号来代表被修剪的文本</li><li><code>white-space: nowrap</code>：设置文字在一行显示，不能换行</li><li><code>overflow: hidden</code>：文字长度超出限定宽度，则隐藏超出的内容</li></ol><h3 id="二、多行文本溢出省略" tabindex="-1">二、多行文本溢出省略 <a class="header-anchor" href="#二、多行文本溢出省略" aria-label="Permalink to &quot;二、多行文本溢出省略&quot;">​</a></h3><p>基于行数截断</p><ol><li><code>-webkit-line-clamp: 2</code>：用来限制在一个块元素显示的文本的行数，为了实现该效果，它需要组合其他的 WebKit 属性</li><li><code>display: -webkit-box</code>：和 1 结合使用，将对象作为弹性伸缩盒子模型显示</li><li><code>-webkit-box-orient: vertical</code>：和 1 结合使用，设置或检索伸缩盒对象的子元素的排列方式</li><li><code>overflow: hidden</code>：文本溢出限定的宽度就隐藏内容</li><li><code>text-overflow: ellipsis</code>：多行文本的情况下，用省略号“…”隐藏溢出范围的文本</li></ol><h2 id="_18-如何使用-css-完成视差滚动效果" tabindex="-1">18. 如何使用 CSS 完成视差滚动效果? <a class="header-anchor" href="#_18-如何使用-css-完成视差滚动效果" aria-label="Permalink to &quot;18. 如何使用 CSS 完成视差滚动效果?&quot;">​</a></h2><h3 id="实现视觉差动的原理" tabindex="-1">实现视觉差动的原理 <a class="header-anchor" href="#实现视觉差动的原理" aria-label="Permalink to &quot;实现视觉差动的原理&quot;">​</a></h3><p>视差滚动（Parallax Scrolling）是指多层背景以不同的速度移动，形成立体的运动效果，带来非常出色的视觉体验。</p><p>可以使用 <code>transform: translate3D</code> 来实现。</p><ol><li>容器设置上 <code>transform-style: preserve-3d</code> 和 <code>perspective: xpx</code>，那么处于这个容器的子元素就将位于 3D 空间中。</li><li>子元素设置不同的 <code>transform: translateZ()</code>，这个时候，不同元素在 3D Z 轴方向距离屏幕（我们的眼睛）的距离也就不一样。</li><li>滚动滚动条，由于子元素设置了不同的 <code>transform: translateZ()</code>，那么它们滚动的上下距离 <code>translateY</code> 相对屏幕（我们的眼睛），也是不一样的，这就达到了滚动视差的效果。</li></ol><h2 id="_19-如何画一条-0-5px-的线" tabindex="-1">19. 如何画一条 0.5px 的线 <a class="header-anchor" href="#_19-如何画一条-0-5px-的线" aria-label="Permalink to &quot;19. 如何画一条 0.5px 的线&quot;">​</a></h2><h3 id="方法一、移动端-采用-meta-viewport-的方式" tabindex="-1">方法一、移动端，采用 <code>meta viewport</code> 的方式 <a class="header-anchor" href="#方法一、移动端-采用-meta-viewport-的方式" aria-label="Permalink to &quot;方法一、移动端，采用 \`meta viewport\` 的方式&quot;">​</a></h3><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">meta</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;viewport&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;width=device-width, initial-scale=0.5, minimum-scale=0.5, maximum-scale=0.5&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span></code></pre></div><p>这样子就能缩放到原来的 0.5 倍，如果是 1px 那么就会变成 0.5px。</p><h3 id="方法二、采用-transform-scale-的方式" tabindex="-1">方法二、采用 <code>transform: scale()</code> 的方式 <a class="header-anchor" href="#方法二、采用-transform-scale-的方式" aria-label="Permalink to &quot;方法二、采用 \`transform: scale()\` 的方式&quot;">​</a></h3><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">transform: scale(0</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, 0</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h3 id="方法三、使用-box-shadow" tabindex="-1">方法三、使用 <code>box-shadow</code> <a class="header-anchor" href="#方法三、使用-box-shadow" aria-label="Permalink to &quot;方法三、使用 \`box-shadow\`&quot;">​</a></h3><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">height: 1px;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">box-shadow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: 0 0</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.5px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 0 </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>设置 <code>box-shadow</code> 的第二个参数为 0.5px，表示阴影垂直方向的偏移为 0.5px。</p><h2 id="_20-css-如何画一个三角形-原理是什么" tabindex="-1">20. CSS 如何画一个三角形？原理是什么？ <a class="header-anchor" href="#_20-css-如何画一个三角形-原理是什么" aria-label="Permalink to &quot;20. CSS 如何画一个三角形？原理是什么？&quot;">​</a></h2><p>利用<strong>宽边框</strong>画三角形</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 记忆口诀：盒子宽高均为零，三面边框皆透明 */</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:after</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  position</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">absolute</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot; &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  border-right</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> solid</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> transparent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  border-top</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> solid</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> #ff0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  border-left</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> solid</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> transparent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  border-bottom</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> solid</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> transparent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="_21-让-chrome-支持小于-12px-的文字方式有哪些-区别" tabindex="-1">21. 让 Chrome 支持小于 12px 的文字方式有哪些？区别？ <a class="header-anchor" href="#_21-让-chrome-支持小于-12px-的文字方式有哪些-区别" aria-label="Permalink to &quot;21. 让 Chrome 支持小于 12px 的文字方式有哪些？区别？&quot;">​</a></h2><p>常见的解决方案有：</p><ol><li><p><strong>zoom</strong></p><ul><li><code>zoom</code> 的字面意思是“变焦”，可以改变页面上元素的尺寸，属于真实尺寸。</li><li>其支持的类型有： <ul><li><code>zoom: 50%</code>，表示缩小到原来的一半</li><li><code>zoom: 0.5</code>，表示缩小到原来的一半</li></ul></li></ul></li><li><p><strong>-webkit-transform: scale()</strong></p><ul><li>针对 Chrome 浏览器，加 <code>-webkit</code> 前缀，用 <code>transform: scale()</code> 这个属性进行放缩。</li></ul></li><li><p><strong>-webkit-text-size-adjust: none</strong></p><ul><li>该属性用来设定文字大小是否根据设备（浏览器）来自动调整显示大小。</li></ul></li></ol><h2 id="_22-说说对-css-预编语言的理解-有哪些区别" tabindex="-1">22. 说说对 CSS 预编语言的理解？有哪些区别? <a class="header-anchor" href="#_22-说说对-css-预编语言的理解-有哪些区别" aria-label="Permalink to &quot;22. 说说对 CSS 预编语言的理解？有哪些区别?&quot;">​</a></h2><p>CSS 预编语言（CSS Preprocessors）是指在编写 CSS 样式时，使用的一种高级语言。这些语言通过增加<strong>变量、嵌套、函数</strong>等编程特性，使得 CSS 编写更加高效和模块化。常见的 CSS 预编语言有 Sass、Less 。</p><h3 id="常见的-css-预编语言" tabindex="-1">常见的 CSS 预编语言 <a class="header-anchor" href="#常见的-css-预编语言" aria-label="Permalink to &quot;常见的 CSS 预编语言&quot;">​</a></h3><ol><li><p><strong>Sass (Syntactically Awesome Stylesheets)</strong></p><ul><li><strong>语法</strong>：有两种语法，Sass（缩进语法，无需花括号和分号）和 SCSS（类似 CSS 的语法，使用花括号和分号）。</li><li><strong>特性</strong>： <ul><li>变量：使用 <code>$</code> 符号定义变量。</li><li>嵌套：允许选择器嵌套，类似 HTML 结构。</li><li>混入（Mixins）：定义可重用的代码块。</li><li>继承（Inheritance）：允许一个选择器继承另一个选择器的样式。</li><li>运算：支持数学运算和颜色运算。</li><li>函数：内置和自定义函数。</li></ul></li></ul></li><li><p><strong>Less (Leaner Style Sheets)</strong></p><ul><li><strong>语法</strong>：与 CSS 类似，使用花括号和分号。</li><li><strong>特性</strong>： <ul><li>变量：使用 <code>@</code> 符号定义变量。</li><li>嵌套：选择器嵌套。</li><li>混入（Mixins）：支持参数的混入。</li><li>运算：支持数学运算。</li><li>函数：内置函数和自定义函数。</li></ul></li></ul></li></ol><h3 id="区别" tabindex="-1">区别 <a class="header-anchor" href="#区别" aria-label="Permalink to &quot;区别&quot;">​</a></h3><ol><li><p><strong>语法风格</strong></p><ul><li><strong>Sass</strong> 提供两种语法（Sass 和 SCSS），其中 SCSS 与 CSS 更相似。</li><li><strong>Less</strong> 语法与 CSS 非常相似，学习曲线较低。</li></ul></li><li><p><strong>变量定义</strong></p><ul><li><strong>Sass</strong> 使用 <code>$</code> 符号。</li><li><strong>Less</strong> 使用 <code>@</code> 符号。</li></ul></li><li><p><strong>混入（Mixins）</strong></p><ul><li><strong>Sass</strong> 的混入功能更强大，支持更复杂的逻辑和参数。</li><li><strong>Less</strong> 的混入相对简单，但也支持参数。</li></ul></li><li><p><strong>函数和运算</strong></p><ul><li><strong>Sass</strong> 提供更丰富的内置函数和运算支持。</li><li><strong>Less</strong> 也有内置函数，但相对较少。</li></ul></li><li><p><strong>社区和生态系统</strong></p><ul><li><strong>Sass</strong> 拥有强大的社区支持和丰富的生态系统，广泛应用于大型项目。</li><li><strong>Less</strong> 也是早期流行的预处理器，但近年来使用率有所下降。</li></ul></li></ol><p>选择哪种 CSS 预编语言取决于团队的需求和偏好。Sass 通常是大多数项目的首选，因为其功能强大且社区支持广泛。Less 学习曲线低，适合新手或小型项目。</p>`,156)],g=i(t,[["render",function(n,o,h,r,d,p){return a(),s("div",null,e)}]]);export{c as __pageData,g as default};
