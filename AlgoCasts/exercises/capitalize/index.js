// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// Questions:
// - how should I handle capital letters that appear in the middle of the word? Should I ignore those or lowercase them?
// - how should I handle non-string inputs?
// - how should I 

// Edge cases:
// - capitalize('1 (one) short phrase') --> what to return???
// - capitalize(`mcdonald's`);

// Strategy:
// - split the string on spaces
// - Iterate through the resulting array and capitalize each word
// - rejoin the string
// - return the capitalized string


// SOLUTION #1
// function capitalize(str) {
//   let capsArr = [];
//   for (word of str.split(' ')) {
//     capsArr.push(word[0].toUpperCase() + word.slice(1));
//   }
//   return capsArr.join(' ');
// }


// Strategy:
// - iterate through the string
   // - if a space precedes any character, capitalize that character

// Weakness with solution #2 is that it's a bit clumsy how we have to handle capitalizing the first character in the string

// SOLUTION #2
function capitalize(str) {
  let capitalized = str[0].toUpperCase();
  
  for (let i = 1; i < str.length; i++) {
    // if character is preceded by a space, capitalize it
    if (str[i - 1] === ' ') {
      capitalized += str[i].toUpperCase();
    } else {
      capitalized += str[i];
    }
  }
  // return the capitalized string
  return capitalized;
}

module.exports = capitalize;
