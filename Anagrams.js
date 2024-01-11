// Given two strings, write a function that determine if the second string is an anagram of the first...
// E.g. validAnagram('texttwisttime', 'timetwisttext');

const validAnagram = (s1, s2) => {
  const sf1 = {}, sf2 = {};

  if(s1.length !== s2.length)
    return false;

  let index = 0;
  for(const char of s1) {
    sf1[char] = ++sf1[char] || 1;
    sf2[s2[index]] = ++sf2[s2[index]] || 1;
    index++;
  }

  for(const key in sf1) {
    if(sf1[key] !== sf2[key])
     return false;
  }

  return true;
}

console.log(validAnagram('', ''));