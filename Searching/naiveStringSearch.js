const naiveStringSearch = (longStr, searchTerm) => {
  let count = 0, j = 0;
  for (let i = 0; i < longStr.length; i++) {
    if(longStr[i] === searchTerm[j]) {
      j++;
    } else {
      j = 0;
    }

    if (j + 1 === searchTerm.length) {
      count++;
    }
  }

  return count;
};


console.log(naiveStringSearch('wowomgzomg', 'omg')) // 2