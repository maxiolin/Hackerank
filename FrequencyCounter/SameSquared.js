// Write a function which accept two arrays, 
// the function should return true if every number in the first array
// has a correspondant value squared in the second.

// test cases
// same([1,2,3], [4,1,9]) true
// same([1,2,3], [1,9]) false
// same([1,2,1], [4,4,1]) false

const same = (arr1, arr2) => {
  if(arr1.length !== arr2.length)
    return false;

  let freq1 = {}, freq2 = {}, c = 0;

  for(let n of arr1) {
    freq1[n] = ++freq1[n] || 1;
    freq2[arr2[c]] = ++freq2[arr2[c]] || 1;
    c++;
  }

  for(let f in freq1) {
    if(freq1[f] !== freq2[f*f])
      return false;
  }

  return true;
}

console.log(same([1,2,3], [4,1,9])) // true
console.log(same([1,2,3], [1,9])) // false
console.log(same([1,2,1], [4,4,1])) // false