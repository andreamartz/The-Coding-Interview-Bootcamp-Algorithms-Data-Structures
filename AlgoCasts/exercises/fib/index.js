// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// Questions:
// - so, n is the index that the result would be at if there were an array of all Fibonacci numbers?


// SOLUTION #1 (iterative) - O(n) runtime
function fib(n) {
  const fibNums = [0, 1];
  for (let idx = 2; idx <= n; idx++) {
    fibNums.push(fibNums[idx - 1] + fibNums[idx - 2]);
    console.log(fibNums);
  }
  return fibNums[n];
}


// SOLUTION #2 (recursive)
// function fib(n) {
//   if (n === 0) return 0;
//   if (n === 1) return 1;

//   return fib(n - 1) + fib(n - 2);
// }

console.log(fib(3));

module.exports = fib;
