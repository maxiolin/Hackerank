// Write a function called recursiveRange;
// which accepts a number and adds up all the numbers from 0 to the number passed to the function 

const recursiveRange = (factor) => {
  if(factor === 1)
    return 1;

  return factor + recursiveRange(factor-1);
}

console.log(recursiveRange(6)) // 21
console.log(recursiveRange(10)) // 55 