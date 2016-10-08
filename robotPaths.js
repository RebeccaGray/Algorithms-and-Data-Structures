const robotPaths = (n,board,r,c)  => {
    board = board || makeBoard(n), r = r || 0, c = c || 0;
    if(r < 0 || r > n-1 || c < 0 || c > n-1 || board.hasBeenVisited(r, c)) return 0;
    if (r === (n - 1) && c === (n - 1)) return 1;
    board.togglePiece(r, c);
    var numPaths =
     robotPaths(n, board, r + 1, c)
     +robotPaths(n, board, r - 1, c)
     + robotPaths(n, board, r, c + 1)
     + robotPaths(n, board, r, c - 1);
    board.togglePiece(r, c);
    return numPaths;
}

function makeBoard(n) {
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  }
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  }
  return board;
}
