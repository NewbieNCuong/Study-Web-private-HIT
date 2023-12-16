const a = parseInt(prompt("Enter an integer: "), 10);
let c = a + 1;
let b = [];

while (c > 0) {
  let tmp = c % 10;
  c = Math.floor(c / 10); 
  b.push(tmp);
}

b.reverse();
console.log(b);
