// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// SOLUTION #1
// function steps(n) {
//   for (let i = 1; i <= n; i++) {
//     console.log('#'.repeat(i) + ' '.repeat(n - i));
//   }
// }

// SOLUTION #2 (uses recursion)
function steps(n, idx = 1) {
  // BASE CASE:
  if (idx === n + 1) return;

  // RECURSIVE CASE:
  console.log('#'.repeat(idx) + ' '.repeat(n - idx));
  steps(n, idx + 1);
}

module.exports = steps;
