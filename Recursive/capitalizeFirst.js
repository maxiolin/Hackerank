// Write a recursive function called capitalizeFirst. 
// Given an array of strings, capitalize the first letter of each string in the array.

const capitalizeFirst = (array) => {
  if(array.length === 0) 
    return [];

  const word = array.pop();

  const firstLetter = word.slice(0, 1).toUpperCase();

  const newWord = firstLetter + word.substring(1, word.length);

  return capitalizeFirst(array).concat(newWord)
}

console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']