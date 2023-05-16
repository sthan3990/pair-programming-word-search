/* 

    Check to find the word horizontally and vertically
    Return true if the word is found OR return false if the word is not found

    PARTNER: Swathi Jayasree & Stephen Han 
*/

const transpose = (matrix) => {
  let results = [];

  for (let i = 0; i < matrix[0].length; i++) {
    // create empty arrow of columns 
    let arr = [];

    // transpose, m
    for (let j = 0; j < matrix.length; j++) {
      // Push the element at the current column and row to the array.
      arr.push(matrix[j][i]);
    }
    results.push(arr);
  }
  return results;
}

const wordSearch = (letters, word) => {

  const horizontalJoin = letters.map(ls => ls.join(''));

  // The transpose of a matrix is acquired by changing the rows to columns and the columns to rows for a given matrix.
  const verticalJoin = transpose(letters).map(ls => ls.join(''));

  // search horizontal 
  for (let ls of horizontalJoin) {
    if (ls.includes(word)) {
      return true;
    }
  }

  // search verical
  for (let line of verticalJoin) {
    if (line.includes(word)) {
      return true;
    }
  }

  return false;

};

module.exports = wordSearch


// const result2 = wordSearch([
//   ['A', 'F', 'C', 'F', 'Z', 'A', 'N', 'K'],
//   ['S', 'R', 'I', 'N', 'F', 'E', 'L', 'D'],
//   ['Y', 'N', 'C', 'F', 'Q', 'U', 'A', 'L'],
//   ['H', 'N', 'J', 'T', 'E', 'V', 'R', 'G'],
//   ['W', 'K', 'C', 'S', 'Y', 'E', 'R', 'L'],
//   ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
//   ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
//   ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
//   ['E', 'Z', 'K', 'F', 'R', 'A', 'N', 'K'],
// ], 'FRANK');

// console.log(result2);

// const result = wordSearch([
//   ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
//   ['S', 'E', 'A', 'N', 'F', 'E', 'L', 'D'],
//   ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
//   ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
//   ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
//   ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
//   ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
//   ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
//   ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
// ], 'SEINFELD');
// console.log(result);