/*
input
[[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]], [1,5,3,5,1,2,1,4]
output
4
*/
const solution = (board, moves) => {
  let answer = 0;
  const stack = [];

  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      console.log(board);
      let target = board[j][moves[i] - 1];
      if (target !== 0) {
        if (stack[stack.length - 1] === target) {
          stack.pop();
          answer += 2;
          board[j][moves[i] - 1] = 0;
          // console.log(stack)
          break;
        }
        // console.log(stack, target)
        stack.push(target);
        board[j][moves[i] - 1] = 0;
        break;
      }
    }
  }

  // console.log(stack)

  return answer;
};
