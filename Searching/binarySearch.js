const binarySearch = (collection, searchItem) => {
  let left = 0,
    right = collection.length - 1,
    halfPoint = 0;

  while (left < right) {
    console.log(left, halfPoint, right);
    if (collection[halfPoint] < searchItem) {
      left = halfPoint;
      halfPoint = Math.round((right - left) / 2) + left;
      continue;
    }

    if (collection[halfPoint] > searchItem) {
      right = halfPoint;
      halfPoint = Math.floor((right - left) / 2) + left;
      continue;
    }

    if (collection[halfPoint] === searchItem) return halfPoint;
  }

  return -1;
};

console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 2)); // 0
console.log(binarySearch([1, 2, 3, 4, 5], 0)); // -1
console.log(binarySearch([1, 2, 3, 4, 5], 1)); // 0
console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5], 4)); // 3
console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    10
  )
); // 2
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    95
  )
); // 16
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    100
  )
); // -1
