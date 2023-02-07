(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{396:function(t,T,e){"use strict";e.r(T);var E=e(41),s=Object(E.a)({},(function(){var t=this,T=t.$createElement,e=t._self._c||T;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"附录b-http客户端兼容性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#附录b-http客户端兼容性"}},[t._v("#")]),t._v(" 附录B. HTTP客户端兼容性")]),t._v(" "),e("p",[t._v("WebDAV旨在且已经做到对HTTP 1.1向后兼容。PUT和DELETE方法是在HTTP中定义的，因此可以由HTTP客户端以及支持WebDAV的客户端使用，但是在本规范中对PUT和DELETE的响应已扩展为仅为WebDAV客户端完全准备。关于这些响应是否会导致仅支持HTTP的客户端的互操作性问题，引起了一些理论上的关注，本节将解决这些关注。")]),t._v(" "),e("p",[t._v("由于任何HTTP客户端都应将无法识别的400级和500级状态代码视为错误，因此以下新状态代码不应出现任何问题：422、423和507（424也是新状态代码，但它仅出现在207多状态响应的正文中）因此，例如，如果HTTP客户端尝试PUT或DELETE锁定的资源，则423（锁定）的响应应导致向用户呈现一般错误。")]),t._v(" "),e("p",[t._v("207 Multistatus响应很有趣，因为向客户端发出对集合的DELETE请求的HTTP客户端可能会将207响应解释为成功，即使它没有意识到资源是个集合并且无法理解DELETE操作可能已经完成或部分失败。这种解释并不完全合理，因为200级响应只是表明服务器“已接收，理解并接受”该请求，而非该请求已经完全成功。")]),t._v(" "),e("p",[t._v("一种选择是服务器可以将对集合的DELETE视为原子操作，并在成功的情况下使用204 No Content，或者对错误使用某种适当的错误响应（400或500级别）。实际上，这种方法将使向后兼容性最大化。但是，由于互操作性测试和工作组讨论尚未发现HTTP客户端针对WebDAV集合发出DELETE请求的任何实例，因此这种关注还是更多的停留在理论上。因此，即使服务器将任何集合DELETE请求视为WebDAV请求并发送207 Multi-Status响应，服务器也可能在与HTTP客户端进行互操作时完全成功。")]),t._v(" "),e("p",[t._v("通常来说，面对这种情况，我们鼓励服务器使用本文档中定义的详细响应和其他机制来应对，而不是为理论上的互操作性问题进行逻辑更改。")])])}),[],!1,null,null,null);T.default=s.exports}}]);