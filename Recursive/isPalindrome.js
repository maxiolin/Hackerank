// Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome,
// reads the same forward and backward. Otherwise it returns false.

const isPalindrome = (word) => {
  if(word.length <= 1)
    return true

  // Slice the beginning, the end and check if equal.
  if(word.slice(-1) !== word.slice(0, 1))
    return false

  return isPalindrome(word.substring(1, word.length - 1))
}

console.log(isPalindrome('awesome')) // false
console.log(isPalindrome('foobar')) // false
console.log(isPalindrome('tacocat')) // true
console.log(isPalindrome('leallael')) // true
console.log(isPalindrome('amanaplanacanalpanama')) // true
console.log(isPalindrome('amanaplanacanalpandemonium')) // false

