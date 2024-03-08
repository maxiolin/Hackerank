const areThereDuplicates = (...args) => {
  const freqCounter = {};
  while(args.length) {
    const arg =  args.pop();
    freqCounter[arg] = ++freqCounter[arg] || 1;
    if(freqCounter[arg] > 1)
      return true
  }

  return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true 
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true

