function gcd(a, b) {
    if(b == 0) return a
    return gcd(b, a % b)
}

function BCNN(a, b) {
    return (a * b) / gcd(a, b)
}

let a = parseInt(prompt("Enter a = "), 10)
let b = parseInt(prompt("Enter a = "), 10)

console.log("UCLN is: ", gcd(a, b))
console.log("BCNN is: ", BCNN(a, b))