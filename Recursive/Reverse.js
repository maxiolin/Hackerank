// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

const reverse = (word) => {
  if(word.length === 1)
    return word;

  return word.slice(-1) + reverse(word.substring(0, word.length - 1))
}

console.log(reverse('awesome')) // 'emosewa'
console.log(reverse('rithmschool')) // 'loohcsmhtir'