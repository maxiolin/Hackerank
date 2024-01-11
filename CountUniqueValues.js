// Implement a function called countUniqueValues, which accepts a sorted array, 
// and counts the unique values in the array.
// There can be negative numbers in the arrat, but it will always be sorted.
// e.g.:

// countUniqueValues([1, 1, 1, 1, 1, 2]) // 2
// countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]) // 7
// countUniqueValues([ ]) // 0
// countUniqueValues([-2, -1, -1, 0, 1]) // 4

const countUniqueValues = (array) => {
  let p1 = 0, p2 = 1, count = array.length > 0 ? 1 : 0;

  while(p2 < array.length) {
    if(array[p1] === array[p2])
      p2++;

    if(array[p1] !== array[p2]) {
      count++;
      p1 = p2;
      p2++;
    }
  }

  console.log(count);
}

countUniqueValues([1, 1, 1, 1, 1, 2]) // 2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]) // 7
countUniqueValues([ ]) // 0
countUniqueValues([-2, -1, -1, 0, 1]) // 4
