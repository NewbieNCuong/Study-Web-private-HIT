const a = prompt("Enter a = ")
const b = prompt("Enter b = ")
const c = prompt("Enter c = ")
const res = a 
console.log((a >= b && a >= c) ? a : (b >= a && b >= c) ? b : c)