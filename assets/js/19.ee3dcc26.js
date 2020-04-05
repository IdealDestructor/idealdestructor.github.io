(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{421:function(t,a,_){"use strict";_.r(a);var v=_(33),s=Object(v.a)({},(function(){var t=this,a=t.$createElement,_=t._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"frontmatter-title"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[t._v("#")]),t._v(" "+t._s(t.$frontmatter.title))]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"#%E8%99%9A%E6%8B%9F%E5%86%85%E5%AD%98"}},[t._v("虚拟内存")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#%E5%88%86%E9%A1%B5%E7%B3%BB%E7%BB%9F%E5%9C%B0%E5%9D%80%E6%98%A0%E5%B0%84"}},[t._v("分页系统地址映射")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#%E9%A1%B5%E9%9D%A2%E7%BD%AE%E6%8D%A2%E7%AE%97%E6%B3%95"}},[t._v("页面置换算法")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"#1-%E6%9C%80%E4%BD%B3"}},[t._v("1. 最佳")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#2-%E6%9C%80%E8%BF%91%E6%9C%80%E4%B9%85%E6%9C%AA%E4%BD%BF%E7%94%A8"}},[t._v("2. 最近最久未使用")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#3-%E6%9C%80%E8%BF%91%E6%9C%AA%E4%BD%BF%E7%94%A8"}},[t._v("3. 最近未使用")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#4-%E5%85%88%E8%BF%9B%E5%85%88%E5%87%BA"}},[t._v("4. 先进先出")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#5-%E7%AC%AC%E4%BA%8C%E6%AC%A1%E6%9C%BA%E4%BC%9A%E7%AE%97%E6%B3%95"}},[t._v("5. 第二次机会算法")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#6-%E6%97%B6%E9%92%9F"}},[t._v("6. 时钟")])])])]),t._v(" "),_("li",[_("a",{attrs:{href:"#%E5%88%86%E6%AE%B5"}},[t._v("分段")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#%E6%AE%B5%E9%A1%B5%E5%BC%8F"}},[t._v("段页式")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#%E5%88%86%E9%A1%B5%E4%B8%8E%E5%88%86%E6%AE%B5%E7%9A%84%E6%AF%94%E8%BE%83"}},[t._v("分页与分段的比较")])])]),t._v(" "),_("h2",{attrs:{id:"虚拟内存"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#虚拟内存"}},[t._v("#")]),t._v(" 虚拟内存")]),t._v(" "),_("p",[t._v("虚拟内存的目的是为了让物理内存扩充成更大的逻辑内存，从而让程序获得更多的可用内存。")]),t._v(" "),_("p",[t._v("为了更好的管理内存，操作系统将内存抽象成地址空间。每个程序拥有自己的地址空间，这个地址空间被分割成多个块，每一块称为一页。这些页被映射到物理内存，但不需要映射到连续的物理内存，也不需要所有页都必须在物理内存中。当程序引用到不在物理内存中的页时，由硬件执行必要的映射，将缺失的部分装入物理内存并重新执行失败的指令。")]),t._v(" "),_("p",[t._v("从上面的描述中可以看出，虚拟内存允许程序不用将地址空间中的每一页都映射到物理内存，也就是说一个程序不需要全部调入内存就可以运行，这使得有限的内存运行大程序成为可能。例如有一台计算机可以产生 16 位地址，那么一个程序的地址空间范围是 0~64K。该计算机只有 32KB 的物理内存，虚拟内存技术允许该计算机运行一个 64K 大小的程序。")]),t._v(" "),_("div",{attrs:{align:"center"}},[_("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/7b281b1e-0595-402b-ae35-8c91084c33c1.png"}})]),_("br"),t._v(" "),_("h2",{attrs:{id:"分页系统地址映射"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#分页系统地址映射"}},[t._v("#")]),t._v(" 分页系统地址映射")]),t._v(" "),_("p",[t._v("内存管理单元（MMU）管理着地址空间和物理内存的转换，其中的页表（Page table）存储着页（程序地址空间）和页框（物理内存空间）的映射表。")]),t._v(" "),_("p",[t._v("一个虚拟地址分成两个部分，一部分存储页面号，一部分存储偏移量。")]),t._v(" "),_("p",[t._v("下图的页表存放着 16 个页，这 16 个页需要用 4 个比特位来进行索引定位。例如对于虚拟地址（0010 000000000100），前 4 位是存储页面号 2，读取表项内容为（110 1），页表项最后一位表示是否存在于内存中，1 表示存在。后 12 位存储偏移量。这个页对应的页框的地址为 （110 000000000100）。")]),t._v(" "),_("div",{attrs:{align:"center"}},[_("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/cf4386a1-58c9-4eca-a17f-e12b1e9770eb.png",width:"500"}})]),_("br"),t._v(" "),_("h2",{attrs:{id:"页面置换算法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#页面置换算法"}},[t._v("#")]),t._v(" 页面置换算法")]),t._v(" "),_("p",[t._v("在程序运行过程中，如果要访问的页面不在内存中，就发生缺页中断从而将该页调入内存中。此时如果内存已无空闲空间，系统必须从内存中调出一个页面到磁盘对换区中来腾出空间。")]),t._v(" "),_("p",[t._v("页面置换算法和缓存淘汰策略类似，可以将内存看成磁盘的缓存。在缓存系统中，缓存的大小有限，当有新的缓存到达时，需要淘汰一部分已经存在的缓存，这样才有空间存放新的缓存数据。")]),t._v(" "),_("p",[t._v("页面置换算法的主要目标是使页面置换频率最低（也可以说缺页率最低）。")]),t._v(" "),_("h3",{attrs:{id:"_1-最佳"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-最佳"}},[t._v("#")]),t._v(" 1. 最佳")]),t._v(" "),_("blockquote",[_("p",[t._v("OPT, Optimal replacement algorithm")])]),t._v(" "),_("p",[t._v("所选择的被换出的页面将是最长时间内不再被访问，通常可以保证获得最低的缺页率。")]),t._v(" "),_("p",[t._v("是一种理论上的算法，因为无法知道一个页面多长时间不再被访问。")]),t._v(" "),_("p",[t._v("举例：一个系统为某进程分配了三个物理块，并有如下页面引用序列：")]),t._v(" "),_("div",{staticClass:"language-html extra-class"},[_("pre",{pre:!0,attrs:{class:"language-html"}},[_("code",[t._v("7，0，1，2，0，3，0，4，2，3，0，3，2，1，2，0，1，7，0，1\n")])])]),_("p",[t._v("开始运行时，先将 7, 0, 1 三个页面装入内存。当进程要访问页面 2 时，产生缺页中断，会将页面 7 换出，因为页面 7 再次被访问的时间最长。")]),t._v(" "),_("h3",{attrs:{id:"_2-最近最久未使用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-最近最久未使用"}},[t._v("#")]),t._v(" 2. 最近最久未使用")]),t._v(" "),_("blockquote",[_("p",[t._v("LRU, Least Recently Used")])]),t._v(" "),_("p",[t._v("虽然无法知道将来要使用的页面情况，但是可以知道过去使用页面的情况。LRU 将最近最久未使用的页面换出。")]),t._v(" "),_("p",[t._v("为了实现 LRU，需要在内存中维护一个所有页面的链表。当一个页面被访问时，将这个页面移到链表表头。这样就能保证链表表尾的页面是最近最久未访问的。")]),t._v(" "),_("p",[t._v("因为每次访问都需要更新链表，因此这种方式实现的 LRU 代价很高。")]),t._v(" "),_("div",{staticClass:"language-html extra-class"},[_("pre",{pre:!0,attrs:{class:"language-html"}},[_("code",[t._v("4，7，0，7，1，0，1，2，1，2，6\n")])])]),_("div",{attrs:{align:"center"}},[_("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/eb859228-c0f2-4bce-910d-d9f76929352b.png"}})]),_("br"),t._v(" "),_("h3",{attrs:{id:"_3-最近未使用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-最近未使用"}},[t._v("#")]),t._v(" 3. 最近未使用")]),t._v(" "),_("blockquote",[_("p",[t._v("NRU, Not Recently Used")])]),t._v(" "),_("p",[t._v("每个页面都有两个状态位：R 与 M，当页面被访问时设置页面的 R=1，当页面被修改时设置 M=1。其中 R 位会定时被清零。可以将页面分成以下四类：")]),t._v(" "),_("ul",[_("li",[t._v("R=0，M=0")]),t._v(" "),_("li",[t._v("R=0，M=1")]),t._v(" "),_("li",[t._v("R=1，M=0")]),t._v(" "),_("li",[t._v("R=1，M=1")])]),t._v(" "),_("p",[t._v("当发生缺页中断时，NRU 算法随机地从类编号最小的非空类中挑选一个页面将它换出。")]),t._v(" "),_("p",[t._v("NRU 优先换出已经被修改的脏页面（R=0，M=1），而不是被频繁使用的干净页面（R=1，M=0）。")]),t._v(" "),_("h3",{attrs:{id:"_4-先进先出"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-先进先出"}},[t._v("#")]),t._v(" 4. 先进先出")]),t._v(" "),_("blockquote",[_("p",[t._v("FIFO, First In First Out")])]),t._v(" "),_("p",[t._v("选择换出的页面是最先进入的页面。")]),t._v(" "),_("p",[t._v("该算法会将那些经常被访问的页面也被换出，从而使缺页率升高。")]),t._v(" "),_("h3",{attrs:{id:"_5-第二次机会算法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-第二次机会算法"}},[t._v("#")]),t._v(" 5. 第二次机会算法")]),t._v(" "),_("p",[t._v("FIFO 算法可能会把经常使用的页面置换出去，为了避免这一问题，对该算法做一个简单的修改：")]),t._v(" "),_("p",[t._v("当页面被访问 (读或写) 时设置该页面的 R 位为 1。需要替换的时候，检查最老页面的 R 位。如果 R 位是 0，那么这个页面既老又没有被使用，可以立刻置换掉；如果是 1，就将 R 位清 0，并把该页面放到链表的尾端，修改它的装入时间使它就像刚装入的一样，然后继续从链表的头部开始搜索。")]),t._v(" "),_("div",{attrs:{align:"center"}},[_("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/ecf8ad5d-5403-48b9-b6e7-f2e20ffe8fca.png"}})]),_("br"),t._v(" "),_("h3",{attrs:{id:"_6-时钟"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-时钟"}},[t._v("#")]),t._v(" 6. 时钟")]),t._v(" "),_("blockquote",[_("p",[t._v("Clock")])]),t._v(" "),_("p",[t._v("第二次机会算法需要在链表中移动页面，降低了效率。时钟算法使用环形链表将页面连接起来，再使用一个指针指向最老的页面。")]),t._v(" "),_("div",{attrs:{align:"center"}},[_("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/5f5ef0b6-98ea-497c-a007-f6c55288eab1.png"}})]),_("br"),t._v(" "),_("h2",{attrs:{id:"分段"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#分段"}},[t._v("#")]),t._v(" 分段")]),t._v(" "),_("p",[t._v("虚拟内存采用的是分页技术，也就是将地址空间划分成固定大小的页，每一页再与内存进行映射。")]),t._v(" "),_("p",[t._v("下图为一个编译器在编译过程中建立的多个表，有 4 个表是动态增长的，如果使用分页系统的一维地址空间，动态增长的特点会导致覆盖问题的出现。")]),t._v(" "),_("div",{attrs:{align:"center"}},[_("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/22de0538-7c6e-4365-bd3b-8ce3c5900216.png"}})]),_("br"),t._v(" "),_("p",[t._v("分段的做法是把每个表分成段，一个段构成一个独立的地址空间。每个段的长度可以不同，并且可以动态增长。")]),t._v(" "),_("div",{attrs:{align:"center"}},[_("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/e0900bb2-220a-43b7-9aa9-1d5cd55ff56e.png"}})]),_("br"),t._v(" "),_("h2",{attrs:{id:"段页式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#段页式"}},[t._v("#")]),t._v(" 段页式")]),t._v(" "),_("p",[t._v("程序的地址空间划分成多个拥有独立地址空间的段，每个段上的地址空间划分成大小相同的页。这样既拥有分段系统的共享和保护，又拥有分页系统的虚拟内存功能。")]),t._v(" "),_("h2",{attrs:{id:"分页与分段的比较"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#分页与分段的比较"}},[t._v("#")]),t._v(" 分页与分段的比较")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("对程序员的透明性：分页透明，但是分段需要程序员显式划分每个段。")])]),t._v(" "),_("li",[_("p",[t._v("地址空间的维度：分页是一维地址空间，分段是二维的。")])]),t._v(" "),_("li",[_("p",[t._v("大小是否可以改变：页的大小不可变，段的大小可以动态改变。")])]),t._v(" "),_("li",[_("p",[t._v("出现的原因：分页主要用于实现虚拟内存，从而获得更大的地址空间；分段主要是为了使程序和数据可以被划分为逻辑上独立的地址空间并且有助于共享和保护。")])])]),t._v(" "),_("comment")],1)}),[],!1,null,null,null);a.default=s.exports}}]);