import{_ as a,c as e,o as i,a4 as l}from"./chunks/framework.B2xMVIVo.js";const u=JSON.parse('{"title":"面试官：说说对设计模式的理解？常见的设计模式有哪些？","description":"","frontmatter":{},"headers":[],"relativePath":"design/design.md","filePath":"design/design.md","lastUpdated":1718865103000}'),t={name:"design/design.md"},r=[l('<h1 id="面试官-说说对设计模式的理解-常见的设计模式有哪些" tabindex="-1">面试官：说说对设计模式的理解？常见的设计模式有哪些？ <a class="header-anchor" href="#面试官-说说对设计模式的理解-常见的设计模式有哪些" aria-label="Permalink to &quot;面试官：说说对设计模式的理解？常见的设计模式有哪些？&quot;">​</a></h1><p><img src="https://static.vue-js.com/065bc170-37ce-11ec-a752-75723a64e8f5.png" alt="" loading="lazy"></p><h2 id="一、是什么" tabindex="-1">一、是什么 <a class="header-anchor" href="#一、是什么" aria-label="Permalink to &quot;一、是什么&quot;">​</a></h2><p>在软件工程中，设计模式是对软件设计中普遍存在的各种问题所提出的解决方案</p><p>设计模式并不直接用来完成代码的编写，而是描述在各种不同情况下，要怎么解决问题的一种方案</p><p>设计模式能使不稳定依赖于相对稳定、具体依赖于相对抽象，避免会引起麻烦的紧耦合，以增强软件设计面对并适应变化的能力</p><p>因此，当我们遇到合适的场景时，我们可能会条件反射一样自然而然想到符合这种场景的设计模式</p><p>比如，当系统中某个接口的结构已经无法满足我们现在的业务需求，但又不能改动这个接口，因为可能原来的系统很多功能都依赖于这个接口，改动接口会牵扯到太多文件</p><p>因此应对这种场景，我们可以很快地想到可以用适配器模式来解决这个问题</p><h2 id="二、有哪些" tabindex="-1">二、有哪些 <a class="header-anchor" href="#二、有哪些" aria-label="Permalink to &quot;二、有哪些&quot;">​</a></h2><p>常见的设计模式有：</p><ul><li>单例模式</li><li>工厂模式</li><li>策略模式</li><li>代理模式</li><li>中介者模式</li><li>装饰者模式</li><li>......</li></ul><h3 id="单例模式" tabindex="-1">单例模式 <a class="header-anchor" href="#单例模式" aria-label="Permalink to &quot;单例模式&quot;">​</a></h3><p>保证一个类仅有一个实例，并提供一个访问它的全局访问点。实现的方法为先判断实例存在与否，如果存在则直接返回，如果不存在就创建了再返回，这就确保了一个类只有一个实例对象</p><p>如下图的车，只有一辆，一旦借出去则不能再借给别人：</p><p><img src="https://static.vue-js.com/ea527aa0-37cd-11ec-8e64-91fdec0f05a1.png" alt="" loading="lazy"></p><h3 id="工厂模式" tabindex="-1">工厂模式 <a class="header-anchor" href="#工厂模式" aria-label="Permalink to &quot;工厂模式&quot;">​</a></h3><p>工厂模式通常会分成3个角色：</p><ul><li>工厂角色-负责实现创建所有实例的内部逻辑.</li><li>抽象产品角色-是所创建的所有对象的父类，负责描述所有实例所共有的公共接口</li><li>具体产品角色-是创建目标，所有创建的对象都充当这个角色的某个具体类的实例</li></ul><p><img src="https://static.vue-js.com/fadd1920-37cd-11ec-8e64-91fdec0f05a1.png" alt="" loading="lazy"></p><h3 id="策略模式" tabindex="-1">策略模式 <a class="header-anchor" href="#策略模式" aria-label="Permalink to &quot;策略模式&quot;">​</a></h3><p>策略模式，就是定义一系列的算法，把他们一个个封装起来，并且使他们可以相互替换</p><p>至少分成两部分：</p><ul><li>策略类（可变），策略类封装了具体的算法，并负责具体的计算过程</li><li>环境类（不变），接受客户的请求，随后将请求委托给某一个策略类</li></ul><h3 id="代理模式" tabindex="-1">代理模式 <a class="header-anchor" href="#代理模式" aria-label="Permalink to &quot;代理模式&quot;">​</a></h3><p>代理模式：为对象提供一个代用品或占位符，以便控制对它的访问</p><p>例如实现图片懒加载的功能，先通过一张<code>loading</code>图占位，然后通过异步的方式加载图片，等图片加载好了再把完成的图片加载到<code>img</code>标签里面</p><h3 id="中介者模式" tabindex="-1">中介者模式 <a class="header-anchor" href="#中介者模式" aria-label="Permalink to &quot;中介者模式&quot;">​</a></h3><p>中介者模式的定义：通过一个中介者对象，其他所有的相关对象都通过该中介者对象来通信，而不是相互引用，当其中的一个对象发生改变时，只需要通知中介者对象即可</p><p>通过中介者模式可以解除对象与对象之间的紧耦合关系</p><h3 id="装饰者模式" tabindex="-1">装饰者模式 <a class="header-anchor" href="#装饰者模式" aria-label="Permalink to &quot;装饰者模式&quot;">​</a></h3><p>装饰者模式的定义：在不改变对象自身的基础上，在程序运行期间给对象动态地添加方法</p><p>通常运用在原有方法维持不变，在原有方法上再挂载其他方法来满足现有需求</p><h2 id="三、总结" tabindex="-1">三、总结 <a class="header-anchor" href="#三、总结" aria-label="Permalink to &quot;三、总结&quot;">​</a></h2><p>不断去学习设计模式，会对我们有着极大的帮助，主要如下：</p><ul><li><p>从许多优秀的软件系统中总结出的成功的、能够实现可维护性、复用的设计方案，使用这些方案将可以让我们避免做一些重复性的工作</p></li><li><p>设计模式提供了一套通用的设计词汇和一种通用的形式来方便开发人员之间沟通和交流，使得设计方案更加通俗易懂</p></li><li><p>大部分设计模式都兼顾了系统的可重用性和可扩展性，这使得我们可以更好地重用一些已有的设计方案、功能模块甚至一个完整的软件系统，避免我们经常做一些重复的设计、编写一些重复的代码</p></li><li><p>合理使用设计模式并对设计模式的使用情况进行文档化，将有助于别人更快地理解系统</p></li><li><p>学习设计模式将有助于初学者更加深入地理解面向对象思想</p></li></ul><h2 id="参考文献" tabindex="-1">参考文献 <a class="header-anchor" href="#参考文献" aria-label="Permalink to &quot;参考文献&quot;">​</a></h2><ul><li><a href="https://zh.wikipedia.org/wiki/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F_(%E8%AE%A1%E7%AE%97%E6%9C%BA)" target="_blank" rel="noreferrer">https://zh.wikipedia.org/wiki/设计模式_(计算机)</a></li><li><a href="https://juejin.cn/post/6844903795017646094" target="_blank" rel="noreferrer">https://juejin.cn/post/6844903795017646094</a></li><li><a href="https://segmentfault.com/a/1190000030850326" target="_blank" rel="noreferrer">https://segmentfault.com/a/1190000030850326</a></li></ul>',38)],f=a(t,[["render",function(p,h,o,n,d,s){return i(),e("div",null,r)}]]);export{u as __pageData,f as default};
