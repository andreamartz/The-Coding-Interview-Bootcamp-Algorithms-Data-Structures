// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// Questions:
// - should I return uppercase and lowercase vowels?
// - what if input is not a string?
// - how should I handle an empty string as input? should I return 0?
// - So, ONLY the characters a, e, i, o, and u are considered vowels? Not y?

// Test cases:
// vowels('') --> 0
// vowels('hgjfkl;h') --> 0


// Strategy:
// - create a counter variable and set count equal to 0
// - make all characters in the string lowercase
// - create an array containing only lowercase vowel character strings
   // - Note: Both arrays and strings have an .includes method that we could use. However, an array is better than a string for our purpose, because a string implies some order to the characters of interest (i.e., the vowels)
// - iterate through the string and add one to count if the character is a vowel


// SOLUTION #1 (iterative)
// function vowels(str) {
//   let count = 0;
//   const allVowels = ['a', 'e', 'i', 'o', 'u'];
//   for (let char of str.toLowerCase()) {
//     if (allVowels.includes(char)) count++;
//   }
//   return count;
// }

// Strategy:
// - create a regex to match vowels
// - test each character in the string with the regex to see if it is a vowel
// - 

// SOLUTION #2 (with regex)
function vowels(str) {
  const regex = /[aeiou]/gi;   // g flag so that the checks won't stop after the first match
  const onlyVowels = str.match(regex);  // array of matching characters OR null if no matches
  return onlyVowels ? onlyVowels.length : 0;
}

module.exports = vowels;
