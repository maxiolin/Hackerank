// Write a function called maxSubarraySum which accepts and array of integers and a number called "n".
// The function should calculate the maximum sum of "n" consecutive elements in the array.
// e.g.

// maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2) // 10
// maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4) // 17
// maxSubarraySum([4, 2, 1, 6], 1) // 6
// maxSubarraySum([4, 2, 1, 6, 2], 4) // 13
// maxSubarraySum([], 4) // null

const maxSubarraySum = (array, windowLength) => {
  let maxSum = 0;

  if (array.length < windowLength) return null;

  // Initialize the window
  for (let i = 0; i < windowLength; i++) {
    maxSum += array[i];
  }

  // Slide the window over the rest of the array, substracting the first number on the window and addinf the next one.
  let tempSum = maxSum;
  for (let i = windowLength; i < array.length; i++) {
    tempSum = tempSum - array[i - windowLength] + array[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
};

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubarraySum([], 4)); // null
console.log(maxSubarraySum([100,200,300,400], 2)); // 700
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)); // 39 
console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)); // 5
console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)); // 5
console.log(maxSubarraySum([2,3], 3)); // null

