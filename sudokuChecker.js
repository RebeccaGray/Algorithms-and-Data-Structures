var sudoku = (arr) => arr.length != 9 ||
  arr.reduce((x,y) => +x + +y, 0) != 45 ||
  arr.indexOf('5') != arr.lastIndexOf('5');

const sudokuCheck  = (boardStr) => {
  const board = boardStr.split('\n').map((item)=>item.split(''))
  const squares = [[[],[],[]],[[],[],[]],[[],[],[]]]
  const columns = [[],[],[],[],[],[],[],[],[]]
  var result = 'solved';
  for(var j = 0;j < board.length;j++){
       if(sudoku(board[j])){
        result = 'invalid'
        return result
       }
    for(let i = 0 ; i < board[j].length;i++){
       squares[parseInt(j/3)][parseInt(i/3)].push(board[j][i])
       columns[i].push(board[j][i])
    }
  }
  if(result === 'invalid') return result
  columns.forEach((column)=>{
     if(sudoku(column)){
        result = 'invalid'
        return result
    }
 })
  if(result === 'invalid') return result
  squares.forEach((row)=>{
   row.forEach((grid)=>{
      if(sudoku(grid)){
        result = 'invalid'
        return result
      }
   })
 })
 return result
};
