********************************************************************
2018-8-1
view 相当 div  是个块级元素  块级元素会占一行
display：block 说明是块级元素

2018-8-5
自定义组件
W-like

2018-8-8
喜欢的设计

2018-8-11
git学习

2018-8-14 
自定义组件的学习和意义  视频看到第七章
从小程序基础库版本 1.6.3 开始，小程序支持简洁的组件化编程。所有自定义组件相关特性都需要基础库版本 1.6.3 或更高。
开发者可以将页面内的功能模块抽象成自定义组件，以便在不同的页面中重复使用；也可以将复杂的页面拆分成多个低耦合的模块，有助于代码维护。自定义组件在使用时与基础组件非常相似。
====================================
用request来网络请求  并在 调试中的 network 调试错误信息
===================================================
小程序里的ruquest 是异步的 没有同步选项
========================================
箭头函数 7-7

2018-8-17
组件可以使用绝对路径    import 不可以使用  只能用相对路径
==========================
添加错误信息

2018-9-3
关于setData的理解  
对data里的数据更新 要在setData里进行更新 (this.data.test=2 //对于data下的test数据更新不能这么用)
========================
完成8-4节 movie组件的实现

2018-9-4
完成8-5和8-6  粒度与自定义事件
看完8-7 遇到 POST http://bl.7yue.pro/v1/like 400 (BAD REQUEST)
 问题 有待解决

 2018-9-5
 解决8-7以上问题
 经过调试 通过打印
 //通过打印 id 值 和 category 值 来查看是否获取到  打印后发现无定义 知道了是值没获取到 通过对数组分析知道是 classic内还有一层
 //这里是this.data.classic.data.id;而不是视频中的this.data.classic.id;
===========================================
完成8-8有关组件生命周期函数 和 组件属性和data声明注意事项 在<!--components/epsoide/index-->

2018-9-6
完成8-9 data和properties差别区分
==============================
完成8-10章 在填入月份是出现了一点无法正确显示数据的情况 应该是没有对应好
最后调试成功 

2018-9-8
8-11 observer函数应用
在模板下properties下的值 用observer函数对数字进行实时处理
8-12 注意防范内存泄漏  RangeError: Maximum call stack size exceeded 这个错误是内存泄漏的错误 当接受到是数字 显示08 在前面补零但是格式改为String
注：不要再一个properties下的observer下修改一个属性的属性类型
8-13 千万不要在observer中修改自身属性值
8-14 epsoide组件和流行页面样式
注意：组件不允许用id

2018-9-9
9-1 完成navi 用户体验方面在用户点击按钮时为了增加用户体验可以适当增加图片面积 或者增加增加视图view面积
9-2 完成navi 样式等
9-3 https（上线必须转成https的） 和 http（提供开发调试）
完成9-3 关于在navi自定义事件   但不好用 需要调试
9-4 完成音乐句子界面框架搭建
9-5完成behavior组件提取工作