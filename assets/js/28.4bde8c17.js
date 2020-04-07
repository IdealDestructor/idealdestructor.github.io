(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{430:function(t,e,r){"use strict";r.r(e);var l=r(33),v=Object(l.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"flutter-基础篇"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#flutter-基础篇"}},[t._v("#")]),t._v(" Flutter 基础篇")]),t._v(" "),r("p",[t._v("在 Flutter 基础篇中，我们将了解到 Flutter 的发展历史，Flutter 的特性，以及 Flutter 的基础开发知识。")]),t._v(" "),r("h2",{attrs:{id:"flutter-是什么"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#flutter-是什么"}},[t._v("#")]),t._v(" Flutter 是什么?")]),t._v(" "),r("p",[t._v("Flutter 是 Google 开源的新一代跨平台 UI 框架。不同于其他我们熟知的移动端跨平台方案，Flutter 更像游戏引擎，因为 Flutter 有自己的渲染引擎：我们在 Flutter 上写了界面后，Flutter 会在自己的 canvas 上渲染，移动端不负责绘制。")]),t._v(" "),r("h2",{attrs:{id:"flutter-的历史"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#flutter-的历史"}},[t._v("#")]),t._v(" Flutter 的历史")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("前身（2015.4.28）")]),t._v(" "),r("p",[t._v("Flutter 的前身是 2015 年在 Dart Developer Summit（Dart开发者峰会）上发布的 Sky , Sky 使用 Dart 开发，可以在 Android 上开发高达 120FPS 的应用。")])]),t._v(" "),r("li",[r("p",[t._v("第一个版本（2017.5.12）")]),t._v(" "),r("p",[t._v("2017年5月12号，Flutter 发布了第一个版本 v0.0.6，在 GitHub 上可以看到发布的记录："),r("a",{attrs:{href:"https://github.com/flutter/flutter/releases/tag/v0.0.6",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/flutter/flutter/releases/tag/v0.0.6"),r("OutboundLink")],1)])]),t._v(" "),r("li",[r("p",[t._v("alpha 阶段（2017.5.17）")]),t._v(" "),r("p",[t._v("在 2017 Google I/O 上 Google 对外介绍了 Flutter 的存在，此后 Flutter 一直处在 alpha 阶段。")])]),t._v(" "),r("li",[r("p",[t._v("首个 beta 版本（2018.2.27）")]),t._v(" "),r("p",[t._v("2018 年 2 月 27 号的 MWC（Mobile World Congress，世界移动通信大会）上， Flutter 发布首个 beta 版本，Flutter 开始进入 beta 阶段，发布频率明显加快。")])]),t._v(" "),r("li",[r("p",[t._v("beta 阶段 （2018.5.8）")]),t._v(" "),r("p",[t._v("2018 Google I/O 大会上，Flutter 发布了 beta3。")])]),t._v(" "),r("li",[r("p",[t._v("首个发布预览版（2018.6.21）")]),t._v(" "),r("p",[t._v("2018 GMTC 大会上，Flutter 发布了首个发布预览版。")])]),t._v(" "),r("li",[r("p",[t._v("第二个发布预览版 （2018.9.19）")]),t._v(" "),r("p",[t._v("2018 年上海的 GDD（Google Developer Days）上，Flutter 发布了第二个发布预览版。")])]),t._v(" "),r("li",[r("p",[t._v("首个稳定版 1.0 （2018.12.4）")]),t._v(" "),r("p",[t._v("2018 年的 Flutter Live 上，Flutter 正式发布了 1.0 稳定版，标志着 Flutter 已经完善，完全可以投入生产环境，开始进入新的阶段。")])]),t._v(" "),r("li",[r("p",[t._v("第二个稳定版 1.2.1 （2019.2.26）")]),t._v(" "),r("p",[t._v("2019 年 2 月 26 号的 MWC 上，Flutter 发布第二个稳定版本 1.2.1。")])]),t._v(" "),r("li",[r("p",[t._v("截止目前最新的稳定版本 1.5.4-hotfix.2 （2019.5.7）")]),t._v(" "),r("p",[t._v("2019 年 5 月 7 号的 Google I/O 上，Flutter 发布了第三个稳定版本 1.5.4-hotfix.2。")])])]),t._v(" "),r("h2",{attrs:{id:"flutter-的特性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#flutter-的特性"}},[t._v("#")]),t._v(" Flutter 的特性")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("跨平台")]),t._v(" "),r("p",[t._v("Flutter 是 Google 新一代的跨平台 UI 框架，除了默认支持的 Android 和 iOS，经过扩展后还支持：")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("PC 端：Windows、Linux、MacOS。")])]),t._v(" "),r("li",[r("p",[t._v("WEB 端：WEB 端已经发布了技术预览版，GitHub 地址："),r("a",{attrs:{href:"https://github.com/flutter/flutter_web",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/flutter/flutter_web"),r("OutboundLink")],1),t._v("。")])])])]),t._v(" "),r("li",[r("p",[t._v("高性能")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("界面可以达到 60 FPS ，渲染效率和用户体验堪比 Native。")])]),t._v(" "),r("li",[r("p",[t._v("Flutter 应用在 Release 下会编译成 Native ARM code ，使得跨平台的代码运行效率很高。")])]),t._v(" "),r("li",[r("p",[t._v("Native 和 Flutter 之间是通过 JNI 桥接的，也使得 Native 和 Flutter 之间交互的损耗很低。")])])])]),t._v(" "),r("li",[r("p",[t._v("丰富的 UI 组件")]),t._v(" "),r("p",[t._v("Flutter 内置众多精美的 Material Design（Android风格）和  Cupertino（iOS风格）的小部件，而且 UI 样式高度还原 Native 的样式，可以让我们直接使用，而且这些组件都很方便组合，还有丰富的动画库。")])]),t._v(" "),r("li",[r("p",[t._v("学习成本低")]),t._v(" "),r("p",[t._v("Flutter 的学习成本很低，屏蔽了底层的很多实现，可以很快的入手。这也带来一个问题，就是没有办法深入 Flutter 的底层，这也是本教程的目的，除了 Flutter 的使用，也会深入分析 Flutter 的底层实现。")])]),t._v(" "),r("li",[r("p",[t._v("开发效率高")]),t._v(" "),r("p",[t._v("Flutter 拥有丰富的 UI 部件，而且支持 Hot Reload，同时 Flutter 使用 Dart 语言开发，Dart 具备很多新的语言特性，可以使得开发速度很快。")])]),t._v(" "),r("li",[r("p",[t._v("和任何平台的交互都很方便")]),t._v(" "),r("p",[t._v("由于 Flutter 的架构设计，使得 Flutter 可以在任何平台扩展，也可以和平台很方便的交互，从而可以让 Flutter 使用平台的功能。")])]),t._v(" "),r("li",[r("p",[t._v("Write once,Run everywhere")]),t._v(" "),r("p",[t._v("只要写一份代码，就可以构建出 Android 和 iOS 两个平台的 APP，体验能达到和原生应用一致，真正做到「Write once , Run everywhere.」")])])]),t._v(" "),r("h2",{attrs:{id:"flutter-的开发语言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#flutter-的开发语言"}},[t._v("#")]),t._v(" Flutter 的开发语言")]),t._v(" "),r("p",[t._v("Flutter 使用 Dart 语言开发。")]),t._v(" "),r("p",[t._v("Dart 语言对于大家来说都比较陌生，但是不要担心，Dart 语言功能强大而且很容易学会，本小册也有 Dart 语法的介绍。")]),t._v(" "),r("h2",{attrs:{id:"flutter-的四种版本"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#flutter-的四种版本"}},[t._v("#")]),t._v(" Flutter 的四种版本")]),t._v(" "),r("p",[t._v("Flutter 源代码在 git 上有四个分支，对应着 Flutter 的四种版本，这四种版本，稳定性依次提高，但新特性却依次减少：")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("master")]),t._v(" "),r("p",[t._v("master 分支上的代码是最新的，所以包含新的特性，但是 master 分支上的代码没有经过测试，很可能会出现各种各样的 bug。")])]),t._v(" "),r("li",[r("p",[t._v("dev")]),t._v(" "),r("p",[t._v("Google 工程师会定期将 master 分支的代码滚动到 dev 分支上，在执行滚动的过程中，会对代码进行 Google 的内部测试，所以 dev 渠道是通过测试的最新的构建。但并不意味着 dev 版本不会有 bug，因为这个测试只是最基础的测试，一旦发现有严重的阻塞性的 bug，就会把这个 dev版本列为"),r("a",{attrs:{href:"https://github.com/flutter/flutter/wiki/Bad-Builds",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bad Builds"),r("OutboundLink")],1),t._v(" ，而且这个版本也不会被选为 beta 版本。")])]),t._v(" "),r("li",[r("p",[t._v("beta")]),t._v(" "),r("p",[t._v("beta 渠道的更新频率是一个月，每个月初，Flutter 团队会从前一个月左右的 dev 版本中选取最佳版本作为 beta 版发布，这个版本最起码在 dev 分支上使用一周的时间，且没有新的严重的 bug。")])]),t._v(" "),r("li",[r("p",[t._v("stable")]),t._v(" "),r("p",[t._v("stable 渠道的更新频率是一个季度，每个季度发布一次或几次版本，但 stable 的发布频率是不确定的。stable 版本从 beta 分支中选出，只有当 Flutter 团队确定 beta 分支中有一个非常稳定非常好的构建时，而且通常 stable 版本的发布会在对外的公共活动中公布，例如 Flutter Live。")]),t._v(" "),r("p",[t._v("目前 stable 三个版本：1.0 、 1.2.1 和 。")])])]),t._v(" "),r("p",[t._v("当我们用于正式的生产环境时，一定要选择 stable 的版本。")]),t._v(" "),r("p",[t._v("具体版本信息请查看如下的页面："),r("a",{attrs:{href:"https://flutter.dev/docs/development/tools/sdk/archive",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://flutter.dev/docs/development/tools/sdk/archive"),r("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=v.exports}}]);