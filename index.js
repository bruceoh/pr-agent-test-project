function runTests() {
    const testCases = [
      {
        input: [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
        expected: [1, 2, 3, 4, 5, 6, 7, 8, 9]
      },
      {
        input: [[1], [2], [3], [4]],
        expected: [1, 2, 3, 4]
      },
      {
        input: [[1, 2], [3, 4], [5, 6], [7, 8]],
        expected: [1, 2, 3, 4, 5, 6, 7, 8]
      },
      {
        input: [[]],
        expected: []
      },
      {
        input: [[], [], []],
        expected: []
      }
    ];
  
    testCases.forEach(({ input, expected }, index) => {
      const result = traverseRowWise(input);
      const passed = JSON.stringify(result) === JSON.stringify(expected);
      console.log(`Test Case ${index + 1}: ${passed ? 'Passed' : 'Failed'}`);
      if (!passed) {
        console.log(`  Input: ${JSON.stringify(input)}`);
        console.log(`  Expected: ${JSON.stringify(expected)}`);
        console.log(`  Got: ${JSON.stringify(result)}`);
      }
    });
  }
  
  runTests();
  