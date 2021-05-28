// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// Questions:
// 1. Should I account for leading zeroes on the input? That is, would n ever have leading zeroes like 007?
// 2. Should I account for a + sign to indicate a positive number?
// 3. Can I assume there will be no decimal points since these are all integers?
// 4.

// Strategy:
// - turn n into a string
// - if there is a sign in front, remove it before reversing the string (but keep track of the fact that it's there)
// - reverse the string using pointers - scratch that; strings are immutable so we can't do this with pointers!!
// - turn the string back into an integer
// - return the reversed integer


// SOLUTION #1
// function reverseInt(n) {
//   const reversed = n.toString().split('').reverse().join('');

//   return parseInt(reversed, 10) * Math.sign(n);
// }


// SOLUTION #2
// function reverseInt(n) {
//   let intStr = n.toString();

//   // assign a '-' sign to negative numbers and no sign ('') to positive numbers
//   let sign = '';
//   if (intStr[0] === '-') {
//     sign = '-';
//     intStr = intStr.slice(1);
//   }
  
//   // reversed will contain the string with digits in reverse order
//   let reversed = '';
//   for (let char of intStr) {
//     reversed = char + reversed;
//   }
//   reversed = sign + reversed;

//   // turn the reversed string into a number and return it
//   return parseInt(reversed, 10);
// }


// SOLUTION #3  - SOLUTION #2 but using Math.sign
function reverseInt(n) {
  let intStr = n.toString();

  // reversed will contain the string with digits in reverse order
  let reversed = '';
  for (let char of intStr) {
    reversed = char + reversed;
  }

  // turn the reversed string into a number and return it
  return parseInt(reversed, 10) * Math.sign(n);
}


module.exports = reverseInt;
