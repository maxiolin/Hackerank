// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

const productOfArray = (array) => {
  if(array.length === 0)
    return 1;

  return array.pop() * productOfArray(array);
}

console.log(productOfArray([1,2,3])) // 6
console.log(productOfArray([1,2,3,10])) // 60