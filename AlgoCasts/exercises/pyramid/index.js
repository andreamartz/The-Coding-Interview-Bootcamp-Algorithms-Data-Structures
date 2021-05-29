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


// SOLUTION #1 (nested loops)
// function pyramid(n) {
//   const midpoint = Math.floor((2 * n - 1) / 2);

//   for (let row = 0; row < n; row++) {
//     let level = '';

//     for (let col = 0; col < 2 * n - 1; col++) {
//       if (midpoint - row <= col && midpoint + row >= col) {
//         level += '#';
//       } else {
//         level += ' ';
//       }
//     }
//     console.log(level);
//   }
// }

// SOLUTION #2
// function pyramid(n) {
//   for (let i = 1; i <= n; i++) {
//     console.log(' '.repeat(n - i) + '#'.repeat(2 * i - 1) + ' '.repeat(n - i));
//   }
// }


// SOLUTION #3 (uses recursion)
function pyramid(n, idx = 1) {
  // BASE CASE:
  if (idx === n + 1) return;

  // RECURSIVE CASE:
  console.log(' '.repeat(n - idx) + '#'.repeat(2 * idx - 1) + ' '.repeat(n - idx));
  pyramid(n, idx + 1);
}


module.exports = pyramid;
