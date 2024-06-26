import{_ as t,c as e,o as a,a4 as r}from"./chunks/framework.B2xMVIVo.js";const s=JSON.parse('{"title":"面试官：如何理解TCP/IP协议?","description":"","frontmatter":{},"headers":[],"relativePath":"http/TCP_IP.md","filePath":"http/TCP_IP.md","lastUpdated":1718865103000}'),o={name:"http/TCP_IP.md"},d=[r('<h1 id="面试官-如何理解tcp-ip协议" tabindex="-1">面试官：如何理解TCP/IP协议? <a class="header-anchor" href="#面试官-如何理解tcp-ip协议" aria-label="Permalink to &quot;面试官：如何理解TCP/IP协议?&quot;">​</a></h1><p><img src="https://static.vue-js.com/4f69a930-b647-11eb-85f6-6fac77c0c9b3.png" alt="" loading="lazy"></p><h2 id="一、是什么" tabindex="-1">一、是什么 <a class="header-anchor" href="#一、是什么" aria-label="Permalink to &quot;一、是什么&quot;">​</a></h2><p>TCP/IP，<strong>传输控制协议</strong>/<strong>网际协议</strong>，是指能够在多个不同网络间实现信息传输的协议簇</p><ul><li>TCP（传输控制协议）</li></ul><p>一种面向连接的、可靠的、基于字节流的传输层通信协议</p><ul><li>IP（网际协议）</li></ul><p>用于封包交换数据网络的协议</p><p>TCP/IP协议不仅仅指的是<code>TCP </code>和<code>IP</code>两个协议，而是指一个由<code>FTP</code>、<code>SMTP</code>、<code>TCP</code>、<code>UDP</code>、<code>IP</code>等协议构成的协议簇，</p><p>只是因为在<code>TCP/IP</code>协议中<code>TCP</code>协议和<code>IP</code>协议最具代表性，所以通称为TCP/IP协议族（英语：TCP/IP Protocol Suite，或TCP/IP Protocols）</p><h2 id="二、划分" tabindex="-1">二、划分 <a class="header-anchor" href="#二、划分" aria-label="Permalink to &quot;二、划分&quot;">​</a></h2><p>TCP/IP协议族按层次分别了五层体系或者四层体系</p><p>五层体系的协议结构是综合了 OSI 和 TCP/IP 优点的一种协议，包括应用层、传输层、网络层、数据链路层和物理层</p><p>五层协议的体系结构只是为介绍网络原理而设计的，实际应用还是 TCP/IP 四层体系结构，包括应用层、传输层、网络层（网际互联层）、网络接口层</p><p>如下图所示：</p><p><img src="https://static.vue-js.com/5bb93610-b647-11eb-85f6-6fac77c0c9b3.png" alt="" loading="lazy"></p><h3 id="五层体系" tabindex="-1">五层体系 <a class="header-anchor" href="#五层体系" aria-label="Permalink to &quot;五层体系&quot;">​</a></h3><h4 id="应用层" tabindex="-1">应用层 <a class="header-anchor" href="#应用层" aria-label="Permalink to &quot;应用层&quot;">​</a></h4><p><code>TCP/IP</code> 模型将 <code>OSI </code>参考模型中的会话层、表示层和应用层的功能合并到一个应用层实现，通过不同的应用层协议为不同的应用提供服务</p><p>如：<code>FTP</code>、<code>Telnet</code>、<code>DNS</code>、<code>SMTP</code> 等</p><h4 id="传输层" tabindex="-1">传输层 <a class="header-anchor" href="#传输层" aria-label="Permalink to &quot;传输层&quot;">​</a></h4><p>该层对应于 OSI 参考模型的传输层，为上层实体提供源端到对端主机的通信功能</p><p>传输层定义了两个主要协议：传输控制协议（TCP）和用户数据报协议（UDP）</p><p>其中面向连接的 TCP 协议保证了数据的传输可靠性，面向无连接的 UDP 协议能够实现数据包简单、快速地传输</p><h4 id="网络层" tabindex="-1">网络层 <a class="header-anchor" href="#网络层" aria-label="Permalink to &quot;网络层&quot;">​</a></h4><p>负责为分组网络中的不同主机提供通信服务，并通过选择合适的路由将数据传递到目标主机</p><p>在发送数据时，网络层把运输层产生的报文段或用户数据封装成分组或包进行传送</p><h4 id="数据链路层" tabindex="-1">数据链路层 <a class="header-anchor" href="#数据链路层" aria-label="Permalink to &quot;数据链路层&quot;">​</a></h4><p>数据链路层在两个相邻节点传输数据时，将网络层交下来的IP数据报组装成帧，在两个相邻节点之间的链路上传送帧</p><h4 id="物理层" tabindex="-1">物理层 <a class="header-anchor" href="#物理层" aria-label="Permalink to &quot;物理层&quot;">​</a></h4><p>保数据可以在各种物理媒介上进行传输，为数据的传输提供可靠的环境</p><h3 id="四层体系" tabindex="-1">四层体系 <a class="header-anchor" href="#四层体系" aria-label="Permalink to &quot;四层体系&quot;">​</a></h3><p>TCP/IP 的四层结构则如下表所示：</p><table tabindex="0"><thead><tr><th>层次名称</th><th>单位</th><th>功 能</th><th>协 议</th></tr></thead><tbody><tr><td>网络接口层</td><td>帧</td><td>负责实际数据的传输，对应OSI参考模型的下两层</td><td>HDLC（高级链路控制协议）PPP（点对点协议） SLIP（串行线路接口协议）</td></tr><tr><td>网络层</td><td>数据报</td><td>负责网络间的寻址数据传输，对应OSI参考模型的第三层</td><td>IP（网际协议） ICMP（网际控制消息协议）ARP（地址解析协议） RARP（反向地址解析协议）</td></tr><tr><td>传输层</td><td>报文段</td><td>负责提供可靠的传输服务，对应OSI参考模型的第四层</td><td>TCP（控制传输协议） UDP（用户数据报协议）</td></tr><tr><td>应用层</td><td></td><td>负责实现一切与应用程序相关的功能，对应OSI参考模型的上三层</td><td>FTP（文件传输协议） HTTP（超文本传输协议） DNS（域名服务器协议）SMTP（简单邮件传输协议）NFS（网络文件系统协议）</td></tr></tbody></table><h2 id="三、总结" tabindex="-1">三、总结 <a class="header-anchor" href="#三、总结" aria-label="Permalink to &quot;三、总结&quot;">​</a></h2><p>OSI 参考模型与 TCP/IP 参考模型区别如下：</p><p>相同点：</p><ul><li>OSI 参考模型与 TCP/IP 参考模型都采用了层次结构</li><li>都能够提供面向连接和无连接两种通信服务机制</li></ul><p>不同点：</p><ul><li><p>OSI 采用的七层模型； TCP/IP 是四层或五层结构</p></li><li><p>TCP/IP 参考模型没有对网络接口层进行细分，只是一些概念性的描述； OSI 参考模型对服务和协议做了明确的区分</p></li><li><p>OSI 参考模型虽然网络划分为七层，但实现起来较困难。TCP/IP 参考模型作为一种简化的分层结构是可以的</p></li><li><p>TCP/IP协议去掉表示层和会话层的原因在于会话层、表示层、应用层都是在应用程序内部实现的，最终产出的是一个应用数据包，而应用程序之间是几乎无法实现代码的抽象共享的，这也就造成 <code>OSI</code> 设想中的应用程序维度的分层是无法实现的</p></li></ul><p>三种模型对应关系如下图所示：</p><p><img src="https://static.vue-js.com/3fbff4d0-b647-11eb-ab90-d9ae814b240d.png" alt="" loading="lazy"></p><h2 id="参考文献" tabindex="-1">参考文献 <a class="header-anchor" href="#参考文献" aria-label="Permalink to &quot;参考文献&quot;">​</a></h2><ul><li><a href="https://zh.wikipedia.org/wiki/TCP/IP%E5%8D%8F%E8%AE%AE%E6%97%8F" target="_blank" rel="noreferrer">https://zh.wikipedia.org/wiki/TCP/IP协议族</a></li><li><a href="https://zhuanlan.zhihu.com/p/103162095" target="_blank" rel="noreferrer">https://zhuanlan.zhihu.com/p/103162095</a></li><li><a href="https://segmentfault.com/a/1190000039204681" target="_blank" rel="noreferrer">https://segmentfault.com/a/1190000039204681</a></li><li><a href="https://leetcode-cn.com/leetbook/detail/networks-interview-highlights/" target="_blank" rel="noreferrer">https://leetcode-cn.com/leetbook/detail/networks-interview-highlights/</a></li><li><a href="https://vue3js.cn/interview" target="_blank" rel="noreferrer">https://vue3js.cn/interview</a></li></ul>',44)],u=t(o,[["render",function(l,i,h,P,c,p){return a(),e("div",null,d)}]]);export{s as __pageData,u as default};
