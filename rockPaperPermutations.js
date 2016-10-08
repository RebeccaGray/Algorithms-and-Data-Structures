function rockPaperPermutation (rounds) {
  var r = [],plays = ["r", "p", "s"];

  var recurse = function(roundsLeft, result){
    if (roundsLeft === 0) {
      r.push(result);
      return;
    }
    plays.forEach(function(play){
      recurse(roundsLeft-1, result.concat(play))
    })
  }
  if (rounds){
    recurse(rounds, "");
  }
  return r;
}
