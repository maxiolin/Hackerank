// Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence.
// Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ...
// which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

const fib = (it) => {
  const calculate = (it, start, next) => {
    if (it === 0) return start;

    return calculate(it - 1, next, start + next);
  };

  return calculate(it - 1, 1, 1);
};

console.log(fib(4)) // 3
console.log(fib(10)) // 55
console.log(fib(28)) // 317811
console.log(fib(35)) // 9227465