function solveNQueens(n) {
  let board = Array.from({ length: n }, () => Array(n).fill(0));

  function isSafe(board, row, col) {
      // Check this row on the left side
      for (let i = 0; i < col; i++) {
          if (board[row][i] === 1) {
              return false;
          }
      }

      // Check upper diagonal on the left side
      for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
          if (board[i][j] === 1) {
              return false;
          }
      }

      // Check lower diagonal on the left side
      for (let i = row, j = col; i < n && j >= 0; i++, j--) {
          if (board[i][j] === 1) {
              return false;
          }
      }

      return true;
  }

  function solve(board, col) {
      // Base case: If all queens are placed, return true
      if (col >= n) {
          return true;
      }

      // Consider this column and try placing this queen in all rows one by one
      for (let i = 0; i < n; i++) {
          if (isSafe(board, i, col)) {
              // Place this queen in board[i][col]
              board[i][col] = 1;

              // Recur to place the rest of the queens
              if (solve(board, col + 1)) {
                  return true;
              }

              // If placing queen in board[i][col] doesn't lead to a solution, then backtrack
              board[i][col] = 0;
          }
      }

      // If the queen can't be placed in any row in this column, return false
      return false;
  }

  if (solve(board, 0)) {
      return board;
  } else {
      return null;
  }
}

// Example usage and testing
const n = 4;
const solution = solveNQueens(n);
if (solution) {
  solution.forEach(row => {
      console.log(row.join(" "));
  });
} else {
  console.log("No solution exists");
}
