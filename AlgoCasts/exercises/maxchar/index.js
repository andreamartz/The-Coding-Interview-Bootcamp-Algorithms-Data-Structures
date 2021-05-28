// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// Questions to ask:
// - Are there any characters that should be ignored/no counted (e.g., punctuation, whitespace, etc.)?
// - Do capital letters and lowercase letters get counted the same or separately?
// - What should be returned if there is a tie?
// - What should be returned if ALL of the characters are unique?

// Edge cases:
// maxChar("        ") === " ";   ??????

// Strategy:
// - split the string into an array
// - iterate over the string to create an object containing character counts
// - keep track of the character with the nax count (and what the value of that count is) and compare each updated count to it
// - after every character has been counted, return the character with the max count

function maxChar(str) {
  const charMap = {};
  let max = 0;
  let mostUsedChar;
  
  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
    if (charMap[char] > max) {
      max = charMap[char];
      mostUsedChar = char;
    }
  }
  return mostUsedChar;
}

console.log(maxChar("apple 1231111"));

module.exports = maxChar;
