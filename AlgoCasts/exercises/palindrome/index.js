// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Test cases:
// palindrome('abc!cba'); // true
// palindrome(' racecar'); // false
// palindrome(' '); // true

// Strategy:


// SOLUTION #1 - uses built-in reverse method for arrays
// function palindrome(str) {
//   const reversed = str.split('').reverse().join('');
//   return reversed === str;
// }


// SOLUTION #2 - uses .every, but does twice as much work as necessary
// function palindrome(str) {
//   return str.split('').every((char, i) => char === str[str.length - 1 - i]); 
// }

// SOLUTION #3
function palindrome(str) {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

module.exports = palindrome;
