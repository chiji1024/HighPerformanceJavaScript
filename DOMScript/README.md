## DOM编程

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



