// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


// Questions:
// - are digits considered characters to consider in determination of anagram status?
// - what to return if both strings are empty (e.g., "")?

// Strategy: 
// - make all letters lowercase
// - remove all non-alphanumeric characters
// - for each string, create an object containing character counts
// - compare the two objects;
   // - if the contents are the same, then the two strings are anagrams of each other
   // - if not, they are NOT anagrams

// Edge cases:
// - anagrams('hello', 'hellos') --> don't just iterate over stringA's charMap and compare to stringB's charMap bc stringA might be a substring of stringB and that would yield an incorrect result THE FIX: do a check to compare string lengths early on; if different lengths, return false


// SOLUTION #1 - LESS efficient bc we are using .sort(), which is O(n log(n)) at best.
function anagrams(stringA, stringB) {
  // compare the two cleaned and sorted strings; if not equal, return false
  if (clean(stringA) !== clean(stringB)) return false;

  return true;
}
// helper function
function clean(str) {
  // remove all non-alphanumeric characters and make everything lowercase
  const regex = /[\W_]/g;
  str = str.replace(regex, "").toLowerCase().split('').sort().join('');

  return str;
}

// SOLUTION #2 - MORE efficient
// function anagrams(stringA, stringB) {
//   [stringA, charMapA] = makeCharMap(stringA);
//   [stringB, charMapB] = makeCharMap(stringB);

//   // if lengths of the adjusted strings are different, return false
//   if (stringA.length !== stringB.length) return false;

//   for (key in charMapA) {
//     console.log(charMapA, charMapB);
//     if (charMapA[key] !== charMapB[key]) return false;
//   }

//   return true;
// }

// // helper function
// function makeCharMap(str) {
//   // remove all non-alphanumeric characters and make everything lowercase
//   const regex = /[\W_]/g;
//   str = str.replace(regex, "").toLowerCase();

//   // - create an object containing character counts on the adjusted string
//   const charMap = {};
//   for (char of str) {
//     charMap[char] = (charMap[char] += 1) || 1;
//   }

//   return [str, charMap];
// }

console.log(anagrams('rail safety', 'fairy tales'));  // True
console.log(anagrams('RAIL! SAFETY!', 'fairy tales'));  // True
console.log(anagrams('Hi there', 'Bye there'));  // False

module.exports = anagrams;
