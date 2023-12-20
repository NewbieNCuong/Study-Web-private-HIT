let nhap = prompt("Enter values separated by space: ")
let tmp = nhap.split(" ")
const cat = tmp.map(function(value){
    return +value
})
console.log(cat);
const sen = cat.map(function(value){
    if(value <= 2) return value * 2
    else return value * 4 + 16
})
console.log(sen);

const mature = sen.filter(function(value){
    return value >= 18
})
console.log(mature);
const mean = sen.reduce(function(preVal, curVal, curIndx){
    if(curIndx == sen.length - 1) return ((preVal + curVal) / (curIndx + 1))
    else return preVal + curVal
}, 0)

console.log(`Mean: ${mean}`);