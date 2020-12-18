const solution = (board) => {
  let edge = 0;
  const row = board.length;
  const col = board[0].length;

  if (row === 1 && col === 1) edge = 1;

  for (let row_i = 1; row_i < row; row_i++) {
    for (let col_i = 1; col_i < col; col_i++) {
      if (board[row_i][col_i] !== 0) {
        let min = Math.min(
          board[row_i - 1][col_i - 1],
          board[row_i - 1][col_i]
        );
        board[row_i][col_i] = Math.min(min, board[row_i][col_i - 1]) + 1;
        edge = Math.max(edge, board[row_i][col_i]);
      }
    }
  }

  return edge * edge;
};
