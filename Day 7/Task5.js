function add(s1, s2, p) {
    if (p < 0) {
      return s1 + s2;
    } else if (p >= s1.length) {
      return s2 + s1;
    }
  
    const result = s1.slice(0, p) + s2 + s1.slice(p);
    return result;
  }
  
  
s1 = prompt("Enter s1: ")
s2 = prompt("Enter s2: ")
p = parseInt(prompt("Enter p: "), 10)
console.log(add(s1, s2, p))
