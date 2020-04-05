(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{419:function(t,a,_){"use strict";_.r(a);var r=_(33),v=Object(r.a)({},(function(){var t=this,a=t.$createElement,_=t._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"frontmatter-title"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[t._v("#")]),t._v(" "+t._s(t.$frontmatter.title))]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"#%E5%9F%BA%E6%9C%AC%E7%89%B9%E5%BE%81"}},[t._v("基本特征")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"#1-%E5%B9%B6%E5%8F%91"}},[t._v("1. 并发")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#2-%E5%85%B1%E4%BA%AB"}},[t._v("2. 共享")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#3-%E8%99%9A%E6%8B%9F"}},[t._v("3. 虚拟")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#4-%E5%BC%82%E6%AD%A5"}},[t._v("4. 异步")])])])]),t._v(" "),_("li",[_("a",{attrs:{href:"#%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD"}},[t._v("基本功能")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"#1-%E8%BF%9B%E7%A8%8B%E7%AE%A1%E7%90%86"}},[t._v("1. 进程管理")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#2-%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%86"}},[t._v("2. 内存管理")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#3-%E6%96%87%E4%BB%B6%E7%AE%A1%E7%90%86"}},[t._v("3. 文件管理")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#4-%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86"}},[t._v("4. 设备管理")])])])]),t._v(" "),_("li",[_("a",{attrs:{href:"#%E7%B3%BB%E7%BB%9F%E8%B0%83%E7%94%A8"}},[t._v("系统调用")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#%E5%A4%A7%E5%86%85%E6%A0%B8%E5%92%8C%E5%BE%AE%E5%86%85%E6%A0%B8"}},[t._v("大内核和微内核")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"#1-%E5%A4%A7%E5%86%85%E6%A0%B8"}},[t._v("1. 大内核")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#2-%E5%BE%AE%E5%86%85%E6%A0%B8"}},[t._v("2. 微内核")])])])]),t._v(" "),_("li",[_("a",{attrs:{href:"#%E4%B8%AD%E6%96%AD%E5%88%86%E7%B1%BB"}},[t._v("中断分类")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"#1-%E5%A4%96%E4%B8%AD%E6%96%AD"}},[t._v("1. 外中断")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#2-%E5%BC%82%E5%B8%B8"}},[t._v("2. 异常")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#3-%E9%99%B7%E5%85%A5"}},[t._v("3. 陷入")])])])])]),t._v(" "),_("h2",{attrs:{id:"基本特征"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#基本特征"}},[t._v("#")]),t._v(" 基本特征")]),t._v(" "),_("h3",{attrs:{id:"_1-并发"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-并发"}},[t._v("#")]),t._v(" 1. 并发")]),t._v(" "),_("p",[t._v("并发是指宏观上在一段时间内能同时运行多个程序，而并行则指同一时刻能运行多个指令。")]),t._v(" "),_("p",[t._v("并行需要硬件支持，如多流水线、多核处理器或者分布式计算系统。")]),t._v(" "),_("p",[t._v("操作系统通过引入进程和线程，使得程序能够并发运行。")]),t._v(" "),_("h3",{attrs:{id:"_2-共享"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-共享"}},[t._v("#")]),t._v(" 2. 共享")]),t._v(" "),_("p",[t._v("共享是指系统中的资源可以被多个并发进程共同使用。")]),t._v(" "),_("p",[t._v("有两种共享方式：互斥共享和同时共享。")]),t._v(" "),_("p",[t._v("互斥共享的资源称为临界资源，例如打印机等，在同一时刻只允许一个进程访问，需要用同步机制来实现互斥访问。")]),t._v(" "),_("h3",{attrs:{id:"_3-虚拟"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-虚拟"}},[t._v("#")]),t._v(" 3. 虚拟")]),t._v(" "),_("p",[t._v("虚拟技术把一个物理实体转换为多个逻辑实体。")]),t._v(" "),_("p",[t._v("主要有两种虚拟技术：时（时间）分复用技术和空（空间）分复用技术。")]),t._v(" "),_("p",[t._v("多个进程能在同一个处理器上并发执行使用了时分复用技术，让每个进程轮流占用处理器，每次只执行一小个时间片并快速切换。")]),t._v(" "),_("p",[t._v("虚拟内存使用了空分复用技术，它将物理内存抽象为地址空间，每个进程都有各自的地址空间。地址空间的页被映射到物理内存，地址空间的页并不需要全部在物理内存中，当使用到一个没有在物理内存的页时，执行页面置换算法，将该页置换到内存中。")]),t._v(" "),_("h3",{attrs:{id:"_4-异步"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-异步"}},[t._v("#")]),t._v(" 4. 异步")]),t._v(" "),_("p",[t._v("异步指进程不是一次性执行完毕，而是走走停停，以不可知的速度向前推进。")]),t._v(" "),_("h2",{attrs:{id:"基本功能"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#基本功能"}},[t._v("#")]),t._v(" 基本功能")]),t._v(" "),_("h3",{attrs:{id:"_1-进程管理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-进程管理"}},[t._v("#")]),t._v(" 1. 进程管理")]),t._v(" "),_("p",[t._v("进程控制、进程同步、进程通信、死锁处理、处理机调度等。")]),t._v(" "),_("h3",{attrs:{id:"_2-内存管理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-内存管理"}},[t._v("#")]),t._v(" 2. 内存管理")]),t._v(" "),_("p",[t._v("内存分配、地址映射、内存保护与共享、虚拟内存等。")]),t._v(" "),_("h3",{attrs:{id:"_3-文件管理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-文件管理"}},[t._v("#")]),t._v(" 3. 文件管理")]),t._v(" "),_("p",[t._v("文件存储空间的管理、目录管理、文件读写管理和保护等。")]),t._v(" "),_("h3",{attrs:{id:"_4-设备管理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-设备管理"}},[t._v("#")]),t._v(" 4. 设备管理")]),t._v(" "),_("p",[t._v("完成用户的 I/O 请求，方便用户使用各种设备，并提高设备的利用率。")]),t._v(" "),_("p",[t._v("主要包括缓冲管理、设备分配、设备处理、虛拟设备等。")]),t._v(" "),_("h2",{attrs:{id:"系统调用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#系统调用"}},[t._v("#")]),t._v(" 系统调用")]),t._v(" "),_("p",[t._v("如果一个进程在用户态需要使用内核态的功能，就进行系统调用从而陷入内核，由操作系统代为完成。")]),t._v(" "),_("div",{attrs:{align:"center"}},[_("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/tGPV0.png",width:"600"}})]),_("br"),t._v(" "),_("p",[t._v("Linux 的系统调用主要有以下这些：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"center"}},[t._v("Task")]),t._v(" "),_("th",[t._v("Commands")])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("进程控制")]),t._v(" "),_("td",[t._v("fork(); exit(); wait();")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("进程通信")]),t._v(" "),_("td",[t._v("pipe(); shmget(); mmap();")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("文件操作")]),t._v(" "),_("td",[t._v("open(); read(); write();")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("设备操作")]),t._v(" "),_("td",[t._v("ioctl(); read(); write();")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("信息维护")]),t._v(" "),_("td",[t._v("getpid(); alarm(); sleep();")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("安全")]),t._v(" "),_("td",[t._v("chmod(); umask(); chown();")])])])]),t._v(" "),_("h2",{attrs:{id:"大内核和微内核"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#大内核和微内核"}},[t._v("#")]),t._v(" 大内核和微内核")]),t._v(" "),_("h3",{attrs:{id:"_1-大内核"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-大内核"}},[t._v("#")]),t._v(" 1. 大内核")]),t._v(" "),_("p",[t._v("大内核是将操作系统功能作为一个紧密结合的整体放到内核。")]),t._v(" "),_("p",[t._v("由于各模块共享信息，因此有很高的性能。")]),t._v(" "),_("h3",{attrs:{id:"_2-微内核"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-微内核"}},[t._v("#")]),t._v(" 2. 微内核")]),t._v(" "),_("p",[t._v("由于操作系统不断复杂，因此将一部分操作系统功能移出内核，从而降低内核的复杂性。移出的部分根据分层的原则划分成若干服务，相互独立。")]),t._v(" "),_("p",[t._v("在微内核结构下，操作系统被划分成小的、定义良好的模块，只有微内核这一个模块运行在内核态，其余模块运行在用户态。")]),t._v(" "),_("p",[t._v("因为需要频繁地在用户态和核心态之间进行切换，所以会有一定的性能损失。")]),t._v(" "),_("div",{attrs:{align:"center"}},[_("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/2_14_microkernelArchitecture.jpg"}})]),_("br"),t._v(" "),_("h2",{attrs:{id:"中断分类"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#中断分类"}},[t._v("#")]),t._v(" 中断分类")]),t._v(" "),_("h3",{attrs:{id:"_1-外中断"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-外中断"}},[t._v("#")]),t._v(" 1. 外中断")]),t._v(" "),_("p",[t._v("由 CPU 执行指令以外的事件引起，如 I/O 完成中断，表示设备输入/输出处理已经完成，处理器能够发送下一个输入/输出请求。此外还有时钟中断、控制台中断等。")]),t._v(" "),_("h3",{attrs:{id:"_2-异常"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-异常"}},[t._v("#")]),t._v(" 2. 异常")]),t._v(" "),_("p",[t._v("由 CPU 执行指令的内部事件引起，如非法操作码、地址越界、算术溢出等。")]),t._v(" "),_("h3",{attrs:{id:"_3-陷入"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-陷入"}},[t._v("#")]),t._v(" 3. 陷入")]),t._v(" "),_("p",[t._v("在用户程序中使用系统调用。")]),t._v(" "),_("comment")],1)}),[],!1,null,null,null);a.default=v.exports}}]);