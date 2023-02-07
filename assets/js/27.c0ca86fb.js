(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{380:function(t,e,n){"use strict";n.r(e);var a=n(41),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"_19-国际化注意事项"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_19-国际化注意事项"}},[t._v("#")]),t._v(" 19. 国际化注意事项")]),t._v(" "),n("p",[t._v("在国际化领域，此规范符合IETF字符集策略[RFC2277]。在本规范中，可以在属性的值中或在响应主体返回的错误消息中找到人类可读的字段。在这两种情况下，人类可读的内容都使用XML进行编码，其中对字符集标记和编码有明确规定，并且要求XML处理器至少可以使用ISO10646多语言标准中的UTF-8编码[RFC3629]和UTF-16编码[RFC2781]来处理XML内容。本规范中的XML示例演示了Content-Type标头（在[RFC3023]中定义）的charset参数的使用以及XML charset声明。")]),t._v(" "),n("p",[t._v("XML还提供了用于指定特定XML元素内容语言的语言标记功能。“xml:lang”属性出现在XML元素上，以标识其内容和属性的语言。有关值和作用域的定义，请参见[REC-XML]。")]),t._v(" "),n("p",[t._v("WebDAV应用程序必须支持XML规范的字符集标记、字符集编码和语言标记功能。强烈建议WebDAV应用程序的实现者阅读“XML媒体类型”[RFC3023]，以获取有关用于XML传输的MIME媒体类型以及使用Content-Type标头的charset参数的说明。")]),t._v(" "),n("p",[t._v("本规范中使用的名称分为四类：协议元素的名称（例如method和header），XML元素的名称，属性的名称和条件的名称。协议元素的命名遵循HTTP的先例，使用以US-ASCII编码的英文名称作为方法和标头。由于这些协议元素对用户不可见，并且仅仅是简单的长令牌标识符，因此它们不需要支持多种语言。同样，该规范中使用的XML元素的名称对用户也不可见，因此不需要支持多种语言。")]),t._v(" "),n("p",[t._v("WebDAV属性名称是合格的XML名称（XML命名空间和本地名称组成的对）。尽管某些应用程序（例如，通用属性查看器）将直接向其用户显示属性名称，但可以预期，典型的应用程序将使用一组固定的属性，并将提供从属性名称和名称空间到人类可读字段的映射。仅在事先不知道会得到什么样的属性集的情况下，应用程序才需要向用户直接显示属性名称给用户。我们建议应用程序在可能的情况下尽量提供提供易于理解的属性名称。")]),t._v(" "),n("p",[t._v("对于错误报告，我们遵循HTTP/1.1状态代码的约定，包括每个状态代码的简短英文说明（例如423（Locked））。尽管存在质量不佳的用户代理可能向用户显示此消息的可能性，但是国际化的应用程序将忽略此消息，并以用户可以读懂的语言和字符集显示适当的消息。")]),t._v(" "),n("p",[t._v("由于客户端和服务器的互操作不需要语言环境信息，因此本规范未指定用于传输此信息的任何机制。")])])}),[],!1,null,null,null);e.default=r.exports}}]);