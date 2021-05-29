// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'


// SOLUTION #1
// function pyramid(n) {
//   for (let i = 1; i <= n; i++) {
//     console.log(' '.repeat(n - i) + '#'.repeat(2 * i - 1) + ' '.repeat(n - i));
//   }
// }


// SOLUTION #2 (uses recursion)
function pyramid(n, idx = 1) {
  // BASE CASE:
  if (idx === n + 1) return;

  // RECURSIVE CASE:
  console.log(' '.repeat(n - idx) + '#'.repeat(2 * idx - 1) + ' '.repeat(n - idx));
  pyramid(n, idx + 1);
}


module.exports = pyramid;
