const sameFrequency = (int1, int2) => {
  const string1 = `${int1}`,
    string2 = `${int2}`;

  const freq1 = {},
    freq2 = {};

  if (string1.length === string2.length) {
    for (let i = 0; i < string1.length; i++) {
      freq1[string1[i]] = ++freq1[string1[i]] || 1;
      freq2[string2[i]] = ++freq2[string2[i]] || 1;
    }

    const chars = Object.keys(freq1);

    while (chars.length) {
      const char = chars.pop();
      if (freq1[char] !== freq2[char]) {
        return false;
      }
    }
  } else {
    return false;
  }

  return true;
};

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
