function traverseRowWise(matrix) {
  let result = [];
  for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
          result.push(matrix[i][j]);
      }
  }
  return result;
}

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(traverseRowWise(matrix));  // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]


