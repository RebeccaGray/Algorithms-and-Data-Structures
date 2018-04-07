let _ = require('underscore');

// returns the high score for the board, and a bitwise list of which columns to flip to get that score. 
// it is worth noting that the inverse of the flip list will return the same score.
// so a returned value of { count: 2, [1,0,0,1] } indicates that the highest score for the given board is 2 
// and to get that score, either flip columns 1 & 4 or 2 & 3.

const board = [["x","o",'o',"x"],
               ["o","x","o","o"],
               ["o","x","o","o"]];

const getFrequentWins = (wins) => {
  let winner = { count: 0 };
  _.each(wins, (obj) => {
     if (obj.count > winner.count) {
       winner = obj;
     }
  })
  return winner;
}
  
const getFlipsToWin = ({ board, i = 0, wins = {}, memo = {}, highScoreFlips = {}}) => {
    if (i === board.length) return highScoreFlips;
    let res = [];
    if (memo[board[i]]) {
      res = memo[board[i]];
    } else {
      res[0] = board[i].map((val) => 
          val === "x" ? 1 : 0
      );
      res[1] = board[i].map((val) =>
          val === "o" ? 1 : 0
      )
      memo[board[i]] = res;
      wins[res[0]] = { count: 0, flips: res[0] }
      wins[res[1]] = { count: 0, flips: res[1] }
    }
    wins[res[0]].count = wins[res[0]].count + 1;
    wins[res[1]].count = wins[res[1]].count + 1;
    highScoreFlips = getFrequentWins(wins);
    i++;
    return getFlipsToWin({ board, i, wins, memo, highScoreFlips })
}

console.log(getFlipsToWin({ board }))
