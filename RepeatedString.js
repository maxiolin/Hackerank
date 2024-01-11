function countA(array) {
  let counter = 0;
  
  while(array.length > 0){
      if(array.shift() === 'a') {
          counter++;
      }
      
      if(array.pop() === 'a') {
          counter++;
      }
  }
  
  return counter;
}

function repeatedString(s, n) {
  
  const count = countA(Array.from(s));
  
  const multiply = Math.floor(n / Array.from(s).length);
  
  const residue = Array.from(s).slice(0, n % Array.from(s).length)
  
  return count * multiply + (countA(residue));

}

repeatedString('aba', 10);