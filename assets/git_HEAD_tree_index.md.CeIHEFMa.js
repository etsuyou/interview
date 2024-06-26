import{_ as e,c as a,o as t,a4 as i}from"./chunks/framework.B2xMVIVo.js";const g=JSON.parse('{"title":"面试官：说说Git 中 HEAD、工作树和索引之间的区别？","description":"","frontmatter":{},"headers":[],"relativePath":"git/HEAD_tree_index.md","filePath":"git/HEAD_tree_index.md","lastUpdated":1718865103000}'),s={name:"git/HEAD_tree_index.md"},d=[i(`<h1 id="面试官-说说git-中-head、工作树和索引之间的区别" tabindex="-1">面试官：说说Git 中 HEAD、工作树和索引之间的区别？ <a class="header-anchor" href="#面试官-说说git-中-head、工作树和索引之间的区别" aria-label="Permalink to &quot;面试官：说说Git 中 HEAD、工作树和索引之间的区别？&quot;">​</a></h1><p><img src="https://static.vue-js.com/2de056a0-fa40-11eb-991d-334fd31f0201.png" alt="" loading="lazy"></p><h2 id="一、head" tabindex="-1">一、HEAD <a class="header-anchor" href="#一、head" aria-label="Permalink to &quot;一、HEAD&quot;">​</a></h2><p>在<code>git</code>中，可以存在很多分支，其本质上是一个指向<code>commit</code>对象的可变指针，而<code>Head</code>是一个特别的指针，是一个指向你正在工作中的本地分支的指针</p><p>简单来讲，就是你现在在哪儿，HEAD 就指向哪儿</p><p>例如当前我们处于<code>master</code>分支，所以<code>HEAD</code>这个指针指向了<code>master</code>分支指针</p><p><img src="https://static.vue-js.com/36cb0da0-fa40-11eb-991d-334fd31f0201.png" alt="" loading="lazy"></p><p>然后通过调用<code>git checkout test</code>切换到<code>test</code>分支，那么<code>HEAD</code>则指向<code>test</code>分支，如下图：</p><p><img src="https://static.vue-js.com/3e86ba80-fa40-11eb-991d-334fd31f0201.png" alt="" loading="lazy"></p><p>但我们在<code>test</code>分支再一次<code>commit</code>信息的时候，<code>HEAD</code>指针仍然指向了<code>test</code>分支指针，而<code>test</code>分支指针已经指向了最新创建的提交，如下图：</p><p><img src="https://static.vue-js.com/439839b0-fa66-11eb-991d-334fd31f0201.png" alt="" loading="lazy"></p><p>这个<code>HEAD</code>存储的位置就在<code>.git/HEAD</code>目录中，查看信息可以看到<code>HEAD</code>指向了另一个文件</p><div class="language-cmd vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cmd</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cat .git/HEAD</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ref: refs/heads/master</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cat .git/refs/heads/master</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">7406a10efcc169bbab17827aeda189aa20376f7f</span></span></code></pre></div><p>这个文件的内容是一串哈希码，而这个哈希码正是<code>master</code>分支上最新的提交所对应的哈希码</p><p>所以，当我们切换分支的时候，<code>HEAD</code>指针通常指向我们所在的分支，当我们在某个分支上创建新的提交时，分支指针总是会指向当前分支的最新提交</p><p>所以，HEAD指针 ——–&gt; 分支指针 ——–&gt; 最新提交</p><h2 id="二、工作树和索引" tabindex="-1">二、工作树和索引 <a class="header-anchor" href="#二、工作树和索引" aria-label="Permalink to &quot;二、工作树和索引&quot;">​</a></h2><p>在<code>Git</code>管理下，大家实际操作的目录被称为工作树，也就是工作区域</p><p>在数据库和工作树之间有索引，索引是为了向数据库提交作准备的区域，也被称为暂存区域</p><p><img src="https://static.vue-js.com/46e5ac40-fa40-11eb-bc6f-3f06e1491664.png" alt="" loading="lazy"></p><p><code>Git</code>在执行提交的时候，不是直接将工作树的状态保存到数据库，而是将设置在中间索引区域的状态保存到数据库</p><p>因此，要提交文件，首先需要把文件加入到索引区域中。</p><p>所以，凭借中间的索引，可以避免工作树中不必要的文件提交，还可以将文件修改内容的一部分加入索引区域并提交</p><h2 id="三、区别" tabindex="-1">三、区别 <a class="header-anchor" href="#三、区别" aria-label="Permalink to &quot;三、区别&quot;">​</a></h2><p>从所在的位置来看：</p><ul><li><p>HEAD 指针通常指向我们所在的分支，当我们在某个分支上创建新的提交时，分支指针总是会指向当前分支的最新提交</p></li><li><p>工作树是查看和编辑的（源）文件的实际内容</p></li><li><p>索引是放置你想要提交给 git仓库文件的地方，如工作树的代码通过 git add 则添加到 git 索引中，通过git commit 则将索引区域的文件提交到 git 仓库中</p></li></ul><h2 id="参考文献" tabindex="-1">参考文献 <a class="header-anchor" href="#参考文献" aria-label="Permalink to &quot;参考文献&quot;">​</a></h2><ul><li><a href="https://backlog.com/git-tutorial/cn/intro/intro1_4.html" target="_blank" rel="noreferrer">https://backlog.com/git-tutorial/cn/intro/intro1_4.html</a></li><li><a href="https://juejin.cn/post/6844903598522908686" target="_blank" rel="noreferrer">https://juejin.cn/post/6844903598522908686</a></li><li><a href="https://www.zsythink.net/archives/3412" target="_blank" rel="noreferrer">https://www.zsythink.net/archives/3412</a></li></ul>`,28)],m=e(s,[["render",function(c,o,l,p,n,r){return t(),a("div",null,d)}]]);export{g as __pageData,m as default};
