import{_ as s,D as i,c as e,I as t,a4 as n,o as p}from"./chunks/framework.B2xMVIVo.js";const u=JSON.parse('{"title":"02-Git的使用","description":"","frontmatter":{"title":"02-Git的使用"},"headers":[],"relativePath":"tutorial/00-前端工具/02-Git的使用.md","filePath":"tutorial/00-前端工具/02-Git的使用.md","lastUpdated":1718865103000}'),l={name:"tutorial/00-前端工具/02-Git的使用.md"},h=n(`<h1 id="_02-git-的使用" tabindex="-1">02-Git 的使用 <a class="header-anchor" href="#_02-git-的使用" aria-label="Permalink to &quot;02-Git 的使用&quot;">​</a></h1><h2 id="常见操作" tabindex="-1">常见操作 <a class="header-anchor" href="#常见操作" aria-label="Permalink to &quot;常见操作&quot;">​</a></h2><h3 id="全局配置用户信息" tabindex="-1">全局配置用户信息 <a class="header-anchor" href="#全局配置用户信息" aria-label="Permalink to &quot;全局配置用户信息&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git config --global user.name &quot;smyhvae&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>git config --global user.email &quot;smyhvae@163.com&quot;</span></span></code></pre></div><h2 id="分支的合并" tabindex="-1">分支的合并 <a class="header-anchor" href="#分支的合并" aria-label="Permalink to &quot;分支的合并&quot;">​</a></h2><h3 id="场景-基于-master-分支的代码-开发一个新的特性" tabindex="-1">场景：基于 master 分支的代码，开发一个新的特性 <a class="header-anchor" href="#场景-基于-master-分支的代码-开发一个新的特性" aria-label="Permalink to &quot;场景：基于 master 分支的代码，开发一个新的特性&quot;">​</a></h3><p>如果你直接在 master 分支上开发这个新特性，是不好的，万一你在开发<code>特性1</code>的时候，领导突然又要叫你去开发<code>特性2</code>，就不好处理了。难道开发的两个特性都提交到 master？一会儿提交特性 1 的 commit，一会儿提交特性 2 的 commit？这会导致 commit 记录很混乱。</p><p>所以，我给你的建议做法是：给每个特性都单独建一个的新的分支。</p><p>比如说，我专门给<code>特性1</code>建一个分支<code>feature_item_recommend</code>。具体做法如下：</p><p>（1）基于 master 分支，创建一个新的分支，起名为<code>feature_item_recommend</code>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ git checkout -b feature_item_recommend</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Switched to a new branch &#39;feature_item_recommend&#39;</span></span></code></pre></div><p>上面这行命令，相当于：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> branch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> feature_item_recommend</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    //</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 创建新的分支</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkout</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> feature_item_recommend</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  //切换到新的分支</span></span></code></pre></div><p>（2）在新的分支<code>feature_item_recommend</code>上，完成开发工作，并 commit 、push。</p><p>（3）将分支<code>feature_item_recommend</code>上的开发进度<strong>合并</strong>到 master 分支：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkout</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> master</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  //切换到master分支</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> merge</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> feature_item_recommend</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    //将分支</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> feature_item_recommend</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 的开发进度合并到</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> master</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 分支</span></span></code></pre></div><p>合并之后，<code>master</code>分支和<code>feature_item_recommend</code>分支会指向同一个位置。</p><p>（3）删除分支<code>feature_item_recommend</code>：</p><blockquote><p>既然 特性 1 开发完了，也放心地提交到 master 了，那我们就可以将这个分支删除了。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git branch -d feature_item_recommend</span></span></code></pre></div><p>注意，我们当前是处于<code>master</code>分支的位置，来删除<code>feature_item_recommend</code>分支。如果当前是处于<code>feature_item_recommend</code>分支，是没办法删除它自己的。</p><p>同理，当我转身去开发<code>特性2</code>的时候，也是采用同样的步骤。</p><h3 id="合并分支时-如果存在分叉" tabindex="-1">合并分支时，如果存在分叉 <a class="header-anchor" href="#合并分支时-如果存在分叉" aria-label="Permalink to &quot;合并分支时，如果存在分叉&quot;">​</a></h3><p><img src="http://img.smyhvae.com/20180610_1650.png" alt="" loading="lazy"></p><p>比如说上面这张图中，最早的时候，master 分支是位于<code>C2</code>节点。我基于<code>C2</code>节点，new 出一个新的分支<code>iss53</code>，我在<code>iss53</code>上提交了好几个 commit。</p><p>现在，我准备把<code>iss53</code>上的几个 commit 合并到 master 上，此时发现，master 分支已经前进到 C4 了。那该怎么合并呢？</p><p>合并的命令仍然是：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkout</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> master</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> merge</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> iss53</span></span></code></pre></div><p><strong>解释</strong>：</p><p>这次合并的实现，并不同于简单的并入方式。这一次，我的开发历史是从更早的地方开始分叉的。</p><p>由于当前 master 分支所指向的 commit (C4)并非想要并入分支（iss53）的直接祖先，Git 不得不进行一些处理。就此例而言，Git 会用两个分支的末端（C4 和 C5）和它们的共同祖先（C2）进行一次简单的三方合并计算。</p><p>Git 没有简单地把分支指针右移，而是对三方合并的结果作一新的快照，并自动创建一个指向它的 commit（C6）（如下图所示）。我们把这个特殊的 commit 称作合并提交（mergecommit），因为它的祖先不止一个。</p><p>值得一提的是 Git 可以自己裁决哪个共同祖先才是最佳合并基础；这和 CVS 或 Subversion（1.5 以后的版本）不同，它们需要开发者手工指定合并基础。所以此特性让 Git 的合并操作比其他系统都要简单不少。</p><p><img src="http://img.smyhvae.com/20180610_1710.png" alt="" loading="lazy"></p><h3 id="解决合并时发生的冲突" tabindex="-1">解决合并时发生的冲突 <a class="header-anchor" href="#解决合并时发生的冲突" aria-label="Permalink to &quot;解决合并时发生的冲突&quot;">​</a></h3><p><img src="http://img.smyhvae.com/20180610_1740.png" alt="" loading="lazy"></p><p>如果 feature1 和 feature2 修改的是同一个文件中<strong>代码的同一个位置</strong>，那么，把 feature1 合并到 feature2 时，就会产生冲突。这个冲突需要人工解决。步骤如下：</p><p>（1）手动修改文件：手动修改冲突的那个文件，决定到底要用哪个分支的代码。</p><p>（2）git add：解决好冲突后，输入<code>git status</code>，会提示<code>Unmerged paths</code>。这个时候，输入<code>git add</code>即可，表示：<strong>修改冲突成功，加入暂存区</strong>。</p><p>（3）git commit 提交。</p><p>然后，我们可以继续把 feature1 分支合并到 master 分支，最后删除 feature1、feature2。</p><p><strong>注意</strong>：两个分支的同一个文件的不同地方合并时，git 会自动合并，不会产生冲突。</p><p>比如分支 feture1 对 index.html 原来的第二行之前加入了一段代码。 分支 feature2 对 index.html 在原来的最后一行的后面加入了一段代码。 这个时候在对两个分支合并，git 不会产生冲突，因为两个分支是修改同一文件的不同位置。 git 自动合并成功。不管是 git 自动合并成功，还是在人工解决冲突下合并成功，提交之前，都要对代码进行测试。</p><h2 id="日常操作积累" tabindex="-1">日常操作积累 <a class="header-anchor" href="#日常操作积累" aria-label="Permalink to &quot;日常操作积累&quot;">​</a></h2><h3 id="修改密码-曲线救国" tabindex="-1">修改密码（曲线救国） <a class="header-anchor" href="#修改密码-曲线救国" aria-label="Permalink to &quot;修改密码（曲线救国）&quot;">​</a></h3><blockquote><p>网上查了很久，没找到答案。最终，在 cld 童鞋的提示下，采取如下方式进行曲线救国。</p></blockquote><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置当前仓库的用户名为空</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  user.name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;</span></span></code></pre></div><p>然后，当我们再输入<code>git pull</code>等命令行时，就会被要求重新输入<em>新的</em>账号密码。此时，密码就可以修改成功了。最后，我们还要输入如下命令，还原当前仓库的用户名：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git config user.name &quot;smyhvae&quot;</span></span></code></pre></div><h3 id="修改已经-push-的某次-commit-的作者信息" tabindex="-1">修改已经 push 的某次 commit 的作者信息 <a class="header-anchor" href="#修改已经-push-的某次-commit-的作者信息" aria-label="Permalink to &quot;修改已经 push 的某次 commit 的作者信息&quot;">​</a></h3><p>已经 push 的记录，如果要修改作者信息的话，只能 通过--force 命令。我反正是查了很久，但最终还是不敢用公司的仓库尝试。</p><p>参考链接：</p><ul><li><a href="https://segmentfault.com/q/1010000006999861" target="_blank" rel="noreferrer">git 修改已提交的某一次的邮箱和用户信息</a></li></ul><p>看最后一条答案。</p><ul><li><a href="http://baurine.github.io/2015/08/22/git_update_author.html" target="_blank" rel="noreferrer">修改 git repo 历史提交的 author</a></li></ul><h3 id="将-branch1的某个commit1合并到branch2当中" tabindex="-1">将 <code>branch1</code>的某个<code>commit1</code>合并到<code>branch2</code>当中 <a class="header-anchor" href="#将-branch1的某个commit1合并到branch2当中" aria-label="Permalink to &quot;将 \`branch1\`的某个\`commit1\`合并到\`branch2\`当中&quot;">​</a></h3><p>切换到 branch2 中，然后执行如下命令：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git cherry-pick commit1</span></span></code></pre></div><h3 id="_20190118-修改-github-已提交的用户名和邮箱" tabindex="-1">20190118-修改 GitHub 已提交的用户名和邮箱 <a class="header-anchor" href="#_20190118-修改-github-已提交的用户名和邮箱" aria-label="Permalink to &quot;20190118-修改 GitHub 已提交的用户名和邮箱&quot;">​</a></h3><p>参考链接：（亲测有效）</p><ul><li><p><a href="https://cloud.tencent.com/developer/article/1352623" target="_blank" rel="noreferrer">修改 Git 全部 Commit 提交记录的用户名 Name 和邮箱 Email</a></p></li><li><p><a href="https://blog.csdn.net/yusufolu9/article/details/53706269" target="_blank" rel="noreferrer">Mac 运行 sh 文件，也就是传说中的 shell 脚本</a></p></li></ul><p>在执行<code>./email.sh</code>后，如果出现<code>permission denied</code>的错误，可以先执行<code>chmod 777 email.sh</code>，修改文件的权限。</p><h3 id="_20200520-将-git-项目迁移到另一个仓库" tabindex="-1">20200520-将 Git 项目迁移到另一个仓库 <a class="header-anchor" href="#_20200520-将-git-项目迁移到另一个仓库" aria-label="Permalink to &quot;20200520-将 Git 项目迁移到另一个仓库&quot;">​</a></h3><p>我们假设旧仓库的项目名称叫<code>old-repository</code>，新仓库的项目名称叫<code>new-repository</code>。操作如下：</p><p>（1）创建旧仓库的裸克隆：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --bare</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/exampleuser/old-repository.git</span></span></code></pre></div><p>执行上述命令后，会在本地生成一个名叫 <code>old-repository.git</code>的文件夹。</p><p>（2）迁移到新仓库：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> old-repository.git</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --mirror</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/exampleuser/new-repository.git</span></span></code></pre></div><p>这样的话，项目就已经迁移到新仓库了。</p><p>注意，我们<strong>不需要</strong>手动新建一个空的新仓库，当我们执行上述命令之后，新仓库就已经自动创建好了。</p><p>参考链接：</p><ul><li><p><a href="https://help.github.com/cn/github/creating-cloning-and-archiving-repositories/duplicating-a-repository" target="_blank" rel="noreferrer">复制仓库</a></p></li><li><p><a href="https://moelove.info/2016/12/04/Git-%E6%9C%AC%E5%9C%B0%E4%BB%93%E5%BA%93%E5%92%8C%E8%A3%B8%E4%BB%93%E5%BA%93/" target="_blank" rel="noreferrer">Git 本地仓库和裸仓库</a></p></li></ul><h3 id="_2021-11-10-提交代码时-绕过-eslint-检查" tabindex="-1">2021-11-10-提交代码时，绕过 eslint 检查 <a class="header-anchor" href="#_2021-11-10-提交代码时-绕过-eslint-检查" aria-label="Permalink to &quot;2021-11-10-提交代码时，绕过 eslint 检查&quot;">​</a></h3><p>需求：提交代码时，绕过 eslint 检查</p><p>解决办法：用命令行提交，末尾追加<code>--no-verify</code>。例如：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 提交代码</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;千古壹号的commit备注&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --no-verify</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 推送到远程时，也可以追加 --no-verify，以免远程仓库做了 eslint 限制。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --no-verify</span></span></code></pre></div><h3 id="_2021-12-29-切换仓库的源地址" tabindex="-1">2021-12-29-切换仓库的源地址 <a class="header-anchor" href="#_2021-12-29-切换仓库的源地址" aria-label="Permalink to &quot;2021-12-29-切换仓库的源地址&quot;">​</a></h3><p>查看源地址：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git remote -v</span></span></code></pre></div><p>切换源地址：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> remote</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> set-url</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://xxx.git</span></span></code></pre></div><h2 id="git-客户端推荐" tabindex="-1">git 客户端推荐 <a class="header-anchor" href="#git-客户端推荐" aria-label="Permalink to &quot;git 客户端推荐&quot;">​</a></h2><p>市面上的 Git 客户端我基本都用过了，我最推荐的一款 Git 客户端是：<a href="https://www.git-tower.com" target="_blank" rel="noreferrer">Tower</a> 或者 <a href="https://git-fork.com" target="_blank" rel="noreferrer">Fork</a>。</p><ul><li>GitUp：<a href="https://gitup.co/" target="_blank" rel="noreferrer">https://gitup.co/</a></li></ul><p>20180623 时，网上看了下 Git 客户端的推荐排名：</p><p><img src="http://img.smyhvae.com/20180623_1210.png" alt="" loading="lazy"></p><p><strong>SmartGit</strong>：</p><p>商业用途收费， 个人用户免费：</p><p><img src="http://img.smyhvae.com/20180623_1305.png" alt="" loading="lazy"></p><h2 id="推荐书籍" tabindex="-1">推荐书籍 <a class="header-anchor" href="#推荐书籍" aria-label="Permalink to &quot;推荐书籍&quot;">​</a></h2><ul><li>《pro.git 中文版》</li></ul><h2 id="推荐连接" tabindex="-1">推荐连接 <a class="header-anchor" href="#推荐连接" aria-label="Permalink to &quot;推荐连接&quot;">​</a></h2><h3 id="_2018-06" tabindex="-1">2018-06 <a class="header-anchor" href="#_2018-06" aria-label="Permalink to &quot;2018-06&quot;">​</a></h3><ul><li><a href="https://www.cnblogs.com/wangiqngpei557/p/6056624.html" target="_blank" rel="noreferrer">聊下 git pull --rebase</a></li></ul>`,95),b=s(l,[["render",function(r,o,d,c,k,g){const a=i("ArticleTopAd");return p(),e("div",null,[t(a),h])}]]);export{u as __pageData,b as default};
