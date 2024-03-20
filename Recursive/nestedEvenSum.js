// Write a recursive function called nestedEvenSum. 
// Return the sum of all even numbers in an object which may contain nested objects.

const nestedEvenSum = (obj) => {
  const keys = Object.keys(obj)

  if(keys.length === 0)
    return 0

  const firstKey = obj[keys[0]];
  delete obj[keys[0]];

  if(typeof firstKey === 'object')
    return nestedEvenSum(obj) + nestedEvenSum(firstKey)

  if(typeof firstKey === 'number' && firstKey % 2 === 0)
    return firstKey + nestedEvenSum(obj)

  return nestedEvenSum(obj)
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10