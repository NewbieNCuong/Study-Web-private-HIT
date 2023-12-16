const num = [3, 2, 4]
const target = 6
const res = []
for(let i = 0; i < num.length; i++){
    for(let j = i + 1; j < num.length; j++){
        if(num[i] + num[j] == target){
            res.push(i, j);
            break;
        }
    }
}
console.log(res);