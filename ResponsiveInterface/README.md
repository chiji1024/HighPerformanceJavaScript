
##Summary

> JavaScript 和用户界面更新在同一个进程内运行，同一时刻只有其中一个可以运行。这意味着当JavaScript
  代码正在运行时，用户界面不能响应输入，反之亦然。有效地管理UI 线程就是要确保JavaScript 不能运行
  太长时间，以免影响用户体验。最后，请牢记如下几点：
  
>JavaScript 运行时间不应该超过100 毫秒。过长的运行时间导致UI 更新出现可察觉的延迟，从而对整体
 用户体验产生负面影响。
 
>JavaScript 运行期间，浏览器响应用户交互的行为存在差异。无论如何，JavaScript 长时间运行将导致用
 户体验混乱和脱节。

>定时器可用于安排代码推迟执行，它使得你可以将长运行脚本分解成一系列较小的任务。

>网页应用程序越复杂，积极主动地管理UI 线程就越显得重要。没有什么JavaScript 代码可以重要到允
 许影响用户体验的程度。

>网页工人线程是新式浏览器才支持的特性，它允许你在UI 线程之外运行JavaScript 代码而避免锁定UI。


##浏览器UI线程

>JavaScript 和用户界面更新在同一个进程内运行，同一时刻只有其中一个可以运行。这意味着当JavaScript
 代码正在运行时，用户界面不能响应输入，反之亦然。有效地管理UI 线程就是要确保JavaScript 不能运行
 太长时间，以免影响用户体验

>setTimeout&setInterval是指设置时间后将javascript任务加入UI队列，而不是直接运行

>在Windows 系统上定时器分辨率为15 毫秒，也就是说一个值为15 的定时器延时将根据最后一次系统
 时间刷新而转换为0 或者15。设置定时器延时小于15 将在Internet Explorer 中导致浏览器锁定，所以最小
 值建议为<strong>25 毫秒</strong>（实际时间是15 或30）以确保至少15 毫秒延迟。
 

##worker线程

###工人线程的运行环境由下列部分组成：

>一个浏览器对象，只包含四个属性：appName, appVersion, userAgent, 和platform

>一个location 对象（和window 里的一样，只是所有属性都是只读的）

>一个self 对象指向全局工人线程对象

>一个importScripts()方法，使工人线程可以加载外部JavaScript 文件

>所有ECMAScript 对象，诸如Object，Array，Data，等等。

>XMLHttpRequest 构造器

>setTimeout()和setInterval()方法

>close()方法可立即停止工人线程

>当工人线程通过importScripts()方法加载外部JavaScript 文件，它接收一个或多个URL 参数，指出要加
 载的JavaScript 文件网址。工人线程以阻塞方式调用importScripts()，直到所有文件加载完成并执行之后，
 脚本才继续运行。




