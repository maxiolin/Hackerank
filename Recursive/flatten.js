// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

const flatten = (array) => {
  if(array.length === 0)
    return []

  const item = array.pop()

  if(item.length)
    return flatten(array).concat(flatten(item));

  return flatten(array).concat(item);
}

console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3]
console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
console.log(flatten([[1],[2],[3]])) // [1,2,3]