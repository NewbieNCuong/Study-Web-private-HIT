function isPalindrome(str) {
    let i = 0;
    let j = str.length - 1;
    while (i < j) {
      if (str.charAt(i) !== str.charAt(j)) {
        return false;
      }
      i++;
      j--;
    }
    return true;
  }
  
  const n = prompt("Enter the n: ")
  console.log(isPalindrome(n)); // true
  