function minimumSwaps(arr) {
  let swaps = 0;
  let index = 1;
  while(index - 1 < arr.length) {
      const value = arr[index - 1];
      if (value !== index) {
          swaps++;
          const swapValue = arr[value - 1];
          arr.splice(index - 1, 1, swapValue);
          arr.splice(value - 1, 1, value);
      } else {
          index++;
      }
  }

  return swaps;
}

minimumSwaps([4, 3, 1, 2]);