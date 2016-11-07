
var htmlStr = "<html><header><title>high performance javascript<title></header>" +
    "<body><p>regular expression</p></body></html>";

//去匹配header body中的一切内容时
/*
var htmlPattern =
    /<html>[\s\S]*?<header>([\s\S]*)<\/header>[\s\S]*?<body>([\s\S]*)<\/body>[\s\S]*?<\/html>/;
*/

//如果字符串中最后少了</html>那么就会发生回溯的失控
//不断回溯匹配，直到第二个.*这是十分消耗性能的
//利用原子特性，解决回溯失控的问题

var htmlPattern =
    /<html>[\s\S]*?<header>([\s\S]*)(?=[\s\S]*?<\/header>)[\s\S]*?<\/header>[\s\S]*?<body>([\s\S]*)(?=[\s\S]*?<\/body>)[\s\S]*?<\/body>[\s\S]*?<\/html>/;

//以上方法可能有点蠢，但却是防止了匹配失败时回溯失控的现象
//对.*匹配设定了条件，就不会发生失控的回溯

console.log(htmlPattern.exec(htmlStr));

/*
@return
1:"<title>high performance javascript<title>"
2:"<p>regular expression</p>"
*/
