const arr = [8, 1, 9, 10, 4, 2, 3]

function sortmethod(arr, callbackfn){
    let arrtmp = [...arr]
    for(let i = 0; i < arrtmp.length; i++){
        for(let j = 0; j < arrtmp.length - i - 1; j++){
            if(callbackfn(arrtmp[j], arrtmp[j + 1]) > 0){
                let tmp = arrtmp[j];
                arrtmp[j] = arrtmp[j + 1];
                arrtmp[j + 1] = tmp;
            }
        }
    }
    return arrtmp;
}


sort = sortmethod(arr, (a, b) => a - b)
console.log(sort);