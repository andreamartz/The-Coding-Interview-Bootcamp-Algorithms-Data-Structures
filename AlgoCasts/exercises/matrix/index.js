// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  // create empty square array
  let spiral = [];
  for (row = 0; row < n; row++) {
    spiral.push(Array(n));
  }

  /** remaining:
  * 'rows' and 'cols' contain the min and max indices left to traverse in squareArray
  */
  let remaining = {
    rows: [0, n - 1], 
    cols: [0, n - 1],
    get numRows() {
      return this.rows[1] - (this.rows[0] - 1); 
    },
    get numCols() {
      return this.cols[1] - (this.cols[0] - 1);
    }
  };

  let num = 1;

  // while the remaining array is square and larger than 2 x 2
  while (remaining.numCols === remaining.numRows && remaining.numRows > 2) {
    [ spiral, num, remaining ] = traverseTopRow(spiral, num, remaining);
    [ spiral, num, remaining ] = traverseRightCol(spiral, num, remaining);
    [ spiral, num, remaining ] = traverseBottomRow(spiral, num, remaining);
    [ spiral, num, remaining ] = traverseLeftCol(spiral, num, remaining);
  }

  // 2 x 2 array is left to traverse
  if (remaining.numCols === 2 && remaining.numRows === 2) {
    [ spiral, num, remaining ] = traverseTopRow(spiral, num, remaining);
    [ spiral, num, remaining ] = traverseRightCol(spiral, num, remaining);
    [ spiral, num, remaining ] = traverseBottomRow(spiral, num, remaining);
    return spiral;
  }

  // 1 x 1 array is left to traverse
  if (remaining.numCols === 1 && remaining.numRows === 1) {
    [ spiral, num, remaining ] = traverseLeftCol(spiral, num, remaining);
    return spiral;
  }

  return spiral;
}

function traverseTopRow (sqrArray, num, remaining) {
  // traverse columns of top remaining row
  for (let c = remaining.cols[0]; c <= remaining.cols[1]; c++) {
    sqrArray[remaining.rows[0]][c] = num;
    num++;
  }
  remaining.rows[0]++;
  return [sqrArray, num, remaining];
}

function traverseRightCol (sqrArray, num, remaining) {
  // traverse rows of rightmost remaining column  
  for (let r = remaining.rows[0]; r <= remaining.rows[1]; r++) {
    sqrArray[r][remaining.cols[1]] = num;
    num++
  }
  remaining.cols[1]--;
  return [sqrArray, num, remaining];
}

function traverseBottomRow(sqrArray, num, remaining) {
  // traverse columns of bottom remaining row in reverse order
  for (let c = remaining.cols[1]; c >= remaining.cols[0]; c--) {
    sqrArray[remaining.rows[1]][c] = num;
    num++;
  }
  remaining.rows[1]--;
  return [sqrArray, num, remaining];
}

function traverseLeftCol (sqrArray, num, remaining) {
  // traverse rows of leftmost remaining column  
  for (let r = remaining.rows[1]; r >= remaining.rows[0]; r--) {
    sqrArray[r][remaining.cols[0]] = num;
    num++
  }
  remaining.cols[0]++;
  return [sqrArray, num, remaining];
}

module.exports = matrix;
