// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


// SOLUTION #1 - probably the interviewer won't let you use .reverse(), though
// function reverse(str) {
//   return arr = str.split('').reverse().join('');
// }


// SOLUTION #2
// function reverse(str) {
//   let reversed = '';

//   for (let char of str) {
//     reversed = char + reversed;
//   }

//   return reversed;
// }


// SOLUTION #3 -- doesn't work!! because strings are immutable
// function reverse(str) {
//   let left = 0;
//   let right = str.length - 1;

//   while (left < right) {
//     let temp = str[left];
//     str[left] = str[right];
//     str[right] = temp;
//     console.log(str);
//     left++;
//     right--;
//   }
//   return str;
// }


// SOLUTION #4 - uses .reduce()!!!
function reverse(str) {
  const arr = str.split('');
  return arr.reduce(((reversed, char) => char + reversed), '');
}


console.log(reverse('apple')); // elppa

module.exports = reverse;
