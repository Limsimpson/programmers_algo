const solution = (board) => {
  let edge = 0;
  let row = board.length;
  let col = board[0].length;

  if (row === 1 && col === 1) edge = 1;

  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      if (board[i][j] !== 0) {
        let min = Math.min(board[i - 1][j - 1], board[i - 1][j]);
        board[i][j] = Math.min(min, board[i][j - 1]) + 1;
        edge = Math.max(edge, board[i][j]);
      }
    }
  }

  return edge * edge;
};
