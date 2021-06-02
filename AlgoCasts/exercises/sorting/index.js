// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    // set/reset swapped to be false;
    let swapped = false;
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap the current and next elements
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    // assume the index of smallest value is i
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] <= arr[minIdx]) {
        minIdx = j;
      }
    }
    // swap elements if necessary
    if (i !== minIdx) [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }
  return arr;
}


function mergeSort(arr) {

}

function merge(left, right) {

}

// sorting algorithms solutions from Springboard:
/** BUBBLE SORT */
// function bubbleSortOptimized(arr) {
//   const swap = (arr, idx1, idx2) => {
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//   };

//   for (let i = arr.length; i > 0; i--) {
//     let swapped = false;
//     for (let j = 0; j < i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         swap(arr, j, j + 1);
//         swapped = true;
//       }
//     }
//     if (!swapped) break;
//   }
//   return arr;
// }

// console.log("BUBBLESORT: ", bubbleSort([99,44,6,2,1,5,63,87,283,4,0]));


/** INSERTION SORT */
// General strategy:
// - The sorted portion of the array will be on the left (lower numbers). The INNER LOOP will iterate here, right to left.
// - The unsorted portion will be on the right.
// - The OUTER LOOP will iterate over the whole array, left to right.
// 1. Assume the first item is sorted.
// 2. Find the next value to compare to the sorted value.
// 3. Shift over any necessary elements to make space for the fvalue being added.
// 4. Insert the value into the sorted subset and repeat steps 1-3.

function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    // keep track of the current value; we may temporarily overwrite it in the array,
       // so we need to keep track of its value here.
    let currentValue = arr[i];
    // loop (i.e., move left through the sorted part of the array) while 
    //   -> j >= 0 AND 
    //   -> the value at idx j is greater than currentValue
    for (var j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      // copy value at jth index one slot to the right
      // this will overwrite what is already there temporarily.
      // That's OK; we have a plan to fix it later!
      arr[j + 1] = arr[j];
    }
    // Either j has gone below 0 OR the value at jth index is less than or equal to currentValue.
    // Move the current value to the proper place in the sorted part of the array.
    // Remember that j has been decremented by 1, so put currentValue at idx j + 1, NOT at idx j
    arr[j + 1] = currentValue;
  }

  return arr;
}


/** SELECTION SORT */
// function selectionSort(arr) {
//   const swap = (arr, idx1, idx2) =>
//     ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

//   for (let i = 0; i < arr.length; i++) {
//     let lowest = i;

//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[lowest] > arr[j]) {
//         lowest = j;
//       }
//     }

//     if (i !== lowest) swap(arr, i, lowest);
//   }

//   return arr;
// }


/** MERGE */
// function merge(arr1, arr2) {
//   let results = [];
//   let i = 0;
//   let j = 0;

//   while (i < arr1.length && j < arr2.length) {
//     if (arr2[j] > arr1[i]) {
//       results.push(arr1[i]);
//       i++;
//     } else {
//       results.push(arr2[j]);
//       j++;
//     }
//   }

//   while (i < arr1.length) {
//     results.push(arr1[i]);
//     i++;
//   }

//   while (j < arr2.length) {
//     results.push(arr2[j]);
//     j++;
//   }

//   return results;
// }

/** MERGE SORT */
// function mergeSort(arr) {
//   if (arr.length <= 1) return arr;
//   const mid = Math.floor(arr.length / 2);
//   const left = mergeSort(arr.slice(0, mid));
//   const right = mergeSort(arr.slice(mid));

//   return merge(left, right);
// }




module.exports = { bubbleSort, selectionSort, mergeSort, merge };
