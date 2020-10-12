const solution = (board, moves) => {
  let queue = [];
  let answer = 0;

  for (let i = 0; i < moves.length; i++) {
    let location = moves[i] - 1;

    for (let j = 0; j < board.length; j++) {
      if (board[j][location] !== 0) {
        queue.push(board[j][location]);
        board[j][location] = 0;
        break;
      }
    }

    if (
      queue.length >= 2 &&
      queue[queue.length - 1] === queue[queue.length - 2]
    ) {
      queue.splice(queue.length - 2, 2);
      answer += 2;
    }
  }
  return answer;
};
