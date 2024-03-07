const averagePair = (array = [], average) => {
  let a = 0,
    z = array.length - 1;

  while (a < z && array.length) {
    const _average = (array[a] + array[z]) / 2;
    if(_average > average) {
      z--;
      continue;
    } else if(_average < average) {
      a++;
      continue;
    }

    return true;
  }

  return false;
};

console.log(averagePair([1,2,3],2.5)); // true
console.log(averagePair([1,3,3,5,6,7,10,12,19],8)); // true
console.log(averagePair([-1,0,3,4,5,6], 4.1)); // false
console.log(averagePair([],4)); // false