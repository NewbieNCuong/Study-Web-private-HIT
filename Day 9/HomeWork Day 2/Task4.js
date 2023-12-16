const res = [];
const n = parseInt(prompt("Enter n: "), 10);
tmp = 1;
arrtmp = [1, 1];
for(let i = 1; i <= n; i++){
    arr = [];
    if(i == 1){
        res.push([1]);
        continue;
    }
    if(i == 2){
        res.push([1, 1]);
        continue;
    }
    else{
        arr.push(1);
        for(let j = 0; j < i - 2; j++){
            arr.push(arrtmp[j] + arrtmp[j + 1]);
        }
        arr.push(1);
        arrtmp = arr;
        res.push(arrtmp);
    }

}
console.log(res);