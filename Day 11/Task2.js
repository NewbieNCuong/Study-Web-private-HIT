const arr = [1, 2, 3, 4, 5]

function findmethod(arr, condition){
    for(let i = 0; i < arr.length; i++){
        if(condition(arr[i])){
            return arr[i];
        }
    }
    return undefined;
}


find = findmethod(arr, (element) => element % 2 == 0)
console.log(find);
