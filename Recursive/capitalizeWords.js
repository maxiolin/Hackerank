// Write a recursive function called capitalizeWords. 
// Given an array of words, return a new array containing each word capitalized.

const capitalizeWords = (array) => {
  if(array.length === 0) 
    return [];

  const word = array.pop();

  return capitalizeWords(array).concat(word.toUpperCase())
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']