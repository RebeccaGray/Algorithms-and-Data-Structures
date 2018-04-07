let _ = require('underscore');

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
