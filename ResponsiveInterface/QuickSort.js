/**
 * Created by chiji on 2016/11/7.
 */


//self全局worker对象
self.onmessage = function (event) {

    //judge data
    if(!isArray(event.data)){
        self.postMessage({error: "传递一个数组参数"});
        close();
    }

    var sortedArr = quickSort(event.data);
    self.postMessage(sortedArr);
}

/*
* 判断是否是数组
* @param mixed
* @return bool
* */
function isArray(param){
    return ( Object.prototype.toString.call(param) === '[object Array]');
}

/*
* 快速排序
* @param array
* @return array
* */
function quickSort(arr){

    if(arr.length === 0){
        return [];
    }
    var left = [];
    var right = [];
    var pivot = arr[0];

    for(var i = 1; i < arr.length; i++){
        if(arr[i] < pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    return ( quickSort(left).concat(pivot, quickSort(right)) );
}