let cnt = 0;
let arr = [0,1,0,3,12];
for(let i = 0; i < arr.length; i++){
    if(arr[i] == 0){
        cnt++;
        arr.splice(i, 1);
    }
}
for(let i = 0; i < cnt; i++){
    arr.push(0);
}
console.log(arr);