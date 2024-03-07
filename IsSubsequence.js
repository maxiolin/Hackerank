const isSubsequence = (word1 = "", word2 = "") => {
  let i = 0,
    j = 0,
    subWord = "";

  while (i < word1.length && j < word2.length) {
    if (word1[i] === word2[j]) {
      i++;
      j++;
    }

    if (word1[i] !== word2[j]) {
      j++;
    }
  }

  return i === word1.length;
};

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)