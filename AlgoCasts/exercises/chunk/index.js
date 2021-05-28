// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// Edge cases:
// [] --> []


// SOLUTION #1
// function chunk(array, size) {
//   // create an array `chunks` to contain the result to return
//   const chunked = [];
  
//   // iterate through the array and place subarrays
//   for (let el of array) {
//     const last = chunked[chunked.length - 1];
//     // if the last element in the array is full or doesn't exist
//     if (!last || last.length === size ) {
//       // push onto chunks a new subarray containing the current element from array
//       chunked.push([el]);
//     } else {
//       last.push(el);
//     }
//   }
//   return chunked;
// }


// SOLUTION #2 -- using splice
// function chunk(array, size) {
//   // create an array `chunks` to contain the result to return
//   const chunks = [];
  
//   while (array.length > 0) {
//     let subArray = array.splice(0, size);
//     chunks.push(subArray);
//   }
//   return chunks;
// }


// SOLUTION #3 -- using slice
// function chunk(array, size) {
//   const chunked = [];
//   let idx = 0;

//   while (idx < array.length) {
//     chunked.push(array.slice(idx, idx + size));
//     idx += size;
//   }
//   return chunked
// }

// SOLUION #4 (recursive, using splice)
function chunk(array, size) {
  // create an array `chunks` to contain the result to return
  const chunked = [];
  
  function chunkHelper() {
    if (array.length === 0) return chunked;

    chunked.push(array.splice(0, size));
    return chunkHelper();
  }
  return chunkHelper();
}


module.exports = chunk;
