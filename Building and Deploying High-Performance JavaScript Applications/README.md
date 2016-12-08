#Summary

##开发部署

> 合并JavaScript 文件，减少HTTP 请求的数量

> 压缩器紧凑处理JavaScript 文件 (webpack gulp grunt...)

> 以压缩形式提供JavaScript 文件（gzip 编码）

> 通过设置HTTP 响应报文头使JavaScript 文件可缓存，通过向文件名附加时间戳解决资源更新问题

>使用内容传递网络（CDN）提供JavaScript 文件，CDN 不仅可以提高性能，它还可以为你管理压缩和缓
 存


##缓存

###apache开启静态资源缓存

> sudo a2enmod expires

__.htaccess__

<IfModule mod_expires.c>
  <FilesMatch "\.(jpg|jpeg|png|gif|js|css|htm|html)$">
  ExpiresActive on
  ExpiresDefault "access plus 1 year"
  </FilesMatch>
</IfModule>

