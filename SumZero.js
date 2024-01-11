// Given a sorted array of numbers find a pair which sum equals zero.

// e.g. [-6, -2, -1, 0, 3, 4, 5]

const sumzero = (array) => {
  let endPointer = array.length - 1, startPointer = 0, pairValue = null;

  while(!pairValue) {

    if(array[startPointer] >= 0 || array[endPointer] <= 0){
      pairValue = 'No pair found'
      break;
    } 

    const sum = array[startPointer] + array[endPointer];

    if(sum > 0) {
      endPointer--;
    } 

    if(sum < 0) {
      startPointer++;
    }

    if(sum === 0) {
      pairValue = [array[startPointer], array[endPointer]];
    }
  }

  console.log(pairValue);

}

sumzero([-6, -2, -1, 0, 3, 4, 5]);