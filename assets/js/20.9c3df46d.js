(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{422:function(t,a,r){"use strict";r.r(a);var _=r(33),v=Object(_.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"frontmatter-title"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[t._v("#")]),t._v(" "+t._s(t.$frontmatter.title))]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#%E7%A3%81%E7%9B%98%E7%BB%93%E6%9E%84"}},[t._v("磁盘结构")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#%E7%A3%81%E7%9B%98%E8%B0%83%E5%BA%A6%E7%AE%97%E6%B3%95"}},[t._v("磁盘调度算法")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#1-%E5%85%88%E6%9D%A5%E5%85%88%E6%9C%8D%E5%8A%A1"}},[t._v("1. 先来先服务")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#2-%E6%9C%80%E7%9F%AD%E5%AF%BB%E9%81%93%E6%97%B6%E9%97%B4%E4%BC%98%E5%85%88"}},[t._v("2. 最短寻道时间优先")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#3-%E7%94%B5%E6%A2%AF%E7%AE%97%E6%B3%95"}},[t._v("3. 电梯算法")])])])])]),t._v(" "),r("h2",{attrs:{id:"磁盘结构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#磁盘结构"}},[t._v("#")]),t._v(" 磁盘结构")]),t._v(" "),r("ul",[r("li",[t._v("盘面（Platter）：一个磁盘有多个盘面；")]),t._v(" "),r("li",[t._v("磁道（Track）：盘面上的圆形带状区域，一个盘面可以有多个磁道；")]),t._v(" "),r("li",[t._v("扇区（Track Sector）：磁道上的一个弧段，一个磁道可以有多个扇区，它是最小的物理储存单位，目前主要有 512 bytes 与 4 K 两种大小；")]),t._v(" "),r("li",[t._v("磁头（Head）：与盘面非常接近，能够将盘面上的磁场转换为电信号（读），或者将电信号转换为盘面的磁场（写）；")]),t._v(" "),r("li",[t._v("制动手臂（Actuator arm）：用于在磁道之间移动磁头；")]),t._v(" "),r("li",[t._v("主轴（Spindle）：使整个盘面转动。")])]),t._v(" "),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/014fbc4d-d873-4a12-b160-867ddaed9807.jpg"}})]),r("br"),t._v(" "),r("h2",{attrs:{id:"磁盘调度算法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#磁盘调度算法"}},[t._v("#")]),t._v(" 磁盘调度算法")]),t._v(" "),r("p",[t._v("读写一个磁盘块的时间的影响因素有：")]),t._v(" "),r("ul",[r("li",[t._v("旋转时间（主轴转动盘面，使得磁头移动到适当的扇区上）")]),t._v(" "),r("li",[t._v("寻道时间（制动手臂移动，使得磁头移动到适当的磁道上）")]),t._v(" "),r("li",[t._v("实际的数据传输时间")])]),t._v(" "),r("p",[t._v("其中，寻道时间最长，因此磁盘调度的主要目标是使磁盘的平均寻道时间最短。")]),t._v(" "),r("h3",{attrs:{id:"_1-先来先服务"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-先来先服务"}},[t._v("#")]),t._v(" 1. 先来先服务")]),t._v(" "),r("blockquote",[r("p",[t._v("FCFS, First Come First Served")])]),t._v(" "),r("p",[t._v("按照磁盘请求的顺序进行调度。")]),t._v(" "),r("p",[t._v("优点是公平和简单。缺点也很明显，因为未对寻道做任何优化，使平均寻道时间可能较长。")]),t._v(" "),r("h3",{attrs:{id:"_2-最短寻道时间优先"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-最短寻道时间优先"}},[t._v("#")]),t._v(" 2. 最短寻道时间优先")]),t._v(" "),r("blockquote",[r("p",[t._v("SSTF, Shortest Seek Time First")])]),t._v(" "),r("p",[t._v("优先调度与当前磁头所在磁道距离最近的磁道。")]),t._v(" "),r("p",[t._v("虽然平均寻道时间比较低，但是不够公平。如果新到达的磁道请求总是比一个在等待的磁道请求近，那么在等待的磁道请求会一直等待下去，也就是出现饥饿现象。具体来说，两端的磁道请求更容易出现饥饿现象。")]),t._v(" "),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/4e2485e4-34bd-4967-9f02-0c093b797aaa.png"}})]),r("br"),t._v(" "),r("h3",{attrs:{id:"_3-电梯算法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-电梯算法"}},[t._v("#")]),t._v(" 3. 电梯算法")]),t._v(" "),r("blockquote",[r("p",[t._v("SCAN")])]),t._v(" "),r("p",[t._v("电梯总是保持一个方向运行，直到该方向没有请求为止，然后改变运行方向。")]),t._v(" "),r("p",[t._v("电梯算法（扫描算法）和电梯的运行过程类似，总是按一个方向来进行磁盘调度，直到该方向上没有未完成的磁盘请求，然后改变方向。")]),t._v(" "),r("p",[t._v("因为考虑了移动方向，因此所有的磁盘请求都会被满足，解决了 SSTF 的饥饿问题。")]),t._v(" "),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/271ce08f-c124-475f-b490-be44fedc6d2e.png"}})]),r("br"),t._v(" "),r("comment")],1)}),[],!1,null,null,null);a.default=v.exports}}]);