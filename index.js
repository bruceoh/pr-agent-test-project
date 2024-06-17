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


function testTraverseRowWise() {
  // Test case 1: 3x3 matrix
  let matrix1 = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
  ];
  console.log(traverseRowWise(matrix1));  // Expected output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

  // Test case 2: 2x2 matrix
  let matrix2 = [
      [1, 2],
      [3, 4]
  ];
  console.log(traverseRowWise(matrix2));  // Expected output: [1, 2, 3, 4]

  // Test case 3: 1x3 matrix
  let matrix3 = [
      [1, 2, 3]
  ];
  console.log(traverseRowWise(matrix3));  // Expected output: [1, 2, 3]

  // Test case 4: 3x1 matrix
  let matrix4 = [
      [1],
      [2],
      [3]
  ];
  console.log(traverseRowWise(matrix4));  // Expected output: [1, 2, 3]

  // Test case 5: Empty matrix
  let matrix5 = [];
  console.log(traverseRowWise(matrix5));  // Expected output: []

  // Test case 6: Matrix with different row lengths
  let matrix6 = [
      [1, 2, 3],
      [4, 5],
      [6]
  ];
  console.log(traverseRowWise(matrix6));  // Expected output: [1, 2, 3, 4, 5, 6]

  // Test case 7: Matrix with single element
  let matrix7 = [
      [1]
  ];
  console.log(traverseRowWise(matrix7));  // Expected output: [1]

  // Test case 8: Matrix with negative numbers
  let matrix8 = [
      [-1, -2, -3],
      [-4, -5, -6],
      [-7, -8, -9]
  ];
  console.log(traverseRowWise(matrix8));  // Expected output: [-1, -2, -3, -4, -5, -6, -7, -8, -9]
}

// Run the tests
testTraverseRowWise();
