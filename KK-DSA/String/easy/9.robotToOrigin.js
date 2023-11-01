/**
 * There is a robot starting at the position (0, 0), the origin, on a 2D plane. Given a sequence of its moves, judge if this robot ends up at (0, 0) after it completes its moves.

You are given a string moves that represents the move sequence of the robot where moves[i] represents its ith move. Valid moves are 'R' (right), 'L' (left), 'U' (up), and 'D' (down).

Return true if the robot returns to the origin after it finishes all of its moves, or false otherwise.

Note: The way that the robot is "facing" is irrelevant. 'R' will always make the robot move to the right once, 'L' will always make it move left, etc. Also, assume that the magnitude of the robot's movement is the same for each move.
 */

const movesMagnitude = {
  U: 1,
  D: -1,
  R: 2,
  L: -2,
};
const judgeCircle = (moves) => {
  let magnitude = 0;
  for (const move of moves) {
    magnitude += movesMagnitude[move];
  }
  return magnitude === 0;
};
console.log(
  judgeCircle(
    "UDDUURLRLLRRUDUDLLRLURLRLRLUUDLULRULRLDDDUDDDDLRRDDRDRLRLURRLLRUDURULULRDRDLURLUDRRLRLDDLUUULUDUUUUL"
  )
);

const judgeCircle2 = (moves) => {
  let x = 0;
  let y = 0;

  for (let i = 0; i < moves.length; i++) {
    switch (moves[i]) {
      case "U":
        y++;
        break;
      case "D":
        y--;
        break;
      case "R":
        x++;
        break;
      case "L":
        x--;
        break;
    }
  }

  return x === 0 && y === 0;
};
