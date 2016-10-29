
var str = "<p>firstParagraph</p>"
        + "<div>uselessDiv</div>"
        + "<p>another paragraph</p>";
var greedyPattern = /<p>.*<\/p>/;
var nonGreedyPattern = /<p>.*?<\/p>/;

//console.log( greedyPattern.exec(str)[0] );
//<p>firstParagraph</p><div>uselessDiv</div><p>another paragraph</p>

//*量词匹配尽可能多的字符

//console.log(nonGreedyPattern.exec(str)[0]);
//<p>firstParagraph</p>

//*? ?量词匹配0个或一个，但匹配尽可能少的字符，就只会匹配0个
// 于是直接匹配<p>之后的字符，不断不匹配然后backTrack，直到第一个</p>匹配成功，于是成功匹配较少的，不贪婪的