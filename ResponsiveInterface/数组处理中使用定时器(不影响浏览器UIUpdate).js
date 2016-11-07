/**
 * Created by chiji on 2016/10/31.
 */

//逐步将对一个数组内的数据的处理放入任务队列，不长时间阻塞浏览器的UI线程

function processArray(items, process, callback){
    var todo = items.concat(); //create a clone of the original
    setTimeout(function(){
        process(todo.shift());
        if (todo.length > 0){
            setTimeout(arguments.callee, 25);
        } else {
            callback(items);
        }
    }, 25);
}

/*
var items = [123, 789, 323, 778, 232, 654, 219, 543, 321, 160];
function outputValue(value){
    console.log(value);
}
processArray(items, outputValue, function(){
    console.log("Done!");
});*/


//任务分组
//items是多个任务的数组，好事的任务分割执行，不至于影响浏览器的UI进程
function timedProcessArray(items, process, callback){
    var todo = items.concat();
    setTimeout(function(){
        var start = new Date();
        while(todo.length >0 && ( (new Date()) - start ) < 50){
            process(todo.shift());
        }
        if(todo.length > 0){
            setTimeout(arguments.callee, 25);
        }else{
            callback(items);
        }

    }, 25); //end setTimeout
}


/*var items = [];
for(var i = 0; i<2000; i++){
    items.push(function () {
        console.log('hello world!');
    })
}
timedProcessArray(items, function(item){
    if(Object.prototype.toString.call(item) == '[object Function]') {
        item();
    }else{
        console.log(item);
    }
}, function (items) {
    console.log("end");
})*/


