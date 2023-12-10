const a = parseInt(prompt("Enter a = "), 10)
const b = parseInt(prompt("Enter b = "), 10)
const c = parseInt(prompt("Enter c = "), 10)

const d = a + b
const e = b + c
const f = a + c

if(d > c && e > a && f > b){
    console.log("True")
}
else{
    console.log("False")
}