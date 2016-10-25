## DOM编程

###Summary

<p>DOM 访问和操作是现代网页应用中很重要的一部分。但每次你通过桥梁从ECMAScript 岛到达DOM 岛
时，都会被收取“过桥费”</p>

>最小化DOM 访问，在JavaScript 端做尽可能多的事情。

>在反复访问的地方使用局部变量存放DOM 引用

>小心地处理HTML 集合，因为他们表现出“存在性”，总是对底层文档重新查询。将集合的length 属性缓
 存到一个变量中，在迭代中使用这个变量。如果经常操作这个集合，可以将集合拷贝到数组中。
 
>如果可能的话，使用速度更快的API，诸如querySelectorAll()和firstElementChild。
 
>注意重绘和重排版；批量修改风格，离线操作DOM 树，缓存并减少对布局信息的访问。
 
>动画中使用绝对坐标，使用拖放代理。
 
>使用事件托管技术最小化事件句柄数量。



###childNodes, children, nextSibling
>遍历children 比childNodes 更快，因为集合项更少。HTML 源码中的空格实际上是文本节点，它们不包括在children 集合中。

>childNodes, nextSibling 返回的是节点，不区分元素节点

###reflow 

<p> <small> 以下行为将会导致浏览器重绘 </small> </p>

>Visible DOM elements are added or removed

>Elements change position

>Elements change size (because of a change in margin, padding, border thickness, width, height, etc.)

>Content is changed, e.g., text changes or an image is replaced with one of a different size

>Page renders initially

>Browser window is resized

<p>因为计算量与每次重排版有关，大多数浏览器通过队列化修改和批量显示优化重排版过程。然而，你可
能（经常不由自主地）强迫队列刷新并要求所有计划改变的部分立刻应用。获取布局信息的操作将导致刷
新队列动作，这意味着使用了下面这些方法：</p>

>offsetTop, offsetLeft, offsetWidth, offsetHeight

>scrollTop, scrollLeft, scrollWidth, scrollHeight

>clientTop, clientLeft, clientWidth, clientHeight

>getComputedStyle() (currentStyle in IE)（在IE 中此函数称为currentStyle）

###减少动画的影响
>使用绝对坐标定位动画的元素，使其位于页面布局之外


