## DOM编程

###Summary

>Minimize DOM access, and try to work as much as possible in JavaScript.

>Use local variables to store DOM references you'll access repeatedly

>Be careful when dealing with HTML collections because they represent the live, underlying document. Cache
 the collection length into a variable and use it when iterating, and make a copy of the collection into an array for
 heavy work on collections.
 
>Use faster APIs when available, such as querySelectorAll() and firstElementChild ( ie9+ )
 
>Be mindful of repaints and reflows; batch style changes, manipulate the DOM tree "offline," and cache and
 minimize access to layout information.
 
>Position absolutely during animations, and use drag and drop proxies.
 
>Use event delegation to minimize the number of event handlers.



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


