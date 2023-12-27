const arr = [1, 2, 3, 4, 5]
// ex initialization = 0
const initialization = 0
function reducemethod(arr, initialization, callbackfn){
    let preVal = initialization
    for(let i = 0; i < arr.length; i++){
        preVal = callbackfn(preVal, arr[i], i, arr) 
    }
    return preVal
}

reduce = reducemethod(arr, initialization, function(preVal, curVal, curIndx){
    return preVal + curVal
})


console.log(reduce);