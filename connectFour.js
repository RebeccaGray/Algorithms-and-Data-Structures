/* Have the function ConnectFourWinner(strArr) read the strArr parameter being passed which will represent a 6x7 Connect Four board. The rules of the game are: two players alternate turns and place a colored disc down into the grid from the top and the disc falls down the column until it hits the bottom or until it hits a piece beneath it. The object of the game is to connect four of one's own discs of the same color next to each other vertically, horizontally, or diagonally before your opponent. The input strArr will represent a Connect Four board and it will be structured in the following format: ["R/Y","(R,Y,x,x,x,x,x)","(...)","(...)",...)] where R represents the player using red discs, Y represents the player using yellow discs and x represents an empty space on the board. The first element of strArr will be either R or Y and it represents whose turn it is. Your program should determine, based on whose turn it is, whether a space exists that can give that player a win. If a space does exist your program should return the space in the following format: (RxC) where R=row and C=column. If no space exists, return the string none. The board will always be in a legal setup.

For example, if strArr is: ["R","(x,x,x,x,x,x,x)","(x,x,x,x,x,x,x)","(x,x,x,x,x,x,x)","(x,x,x,R,x,x,x)","(x,x,x,R,x,x,x)","(x,x,x,R,Y,Y,Y)"] then your program should return (3x4).

Another example, if strArr is: ["Y","(x,x,x,x,x,x,x)","(x,x,x,x,x,x,x)","(x,x,x,x,x,x,x)","(x,x,Y,Y,x,x,x)","(x,R,R,Y,Y,x,R)","(x,Y,R,R,R,Y,R)"] then your program should return (3x3). */


const connectFourWinner = (strArr) => {
  this.color = strArr.shift()
  this.regEx = new RegExp(this.color.repeat(4),'i')
  let prettyArr = prettify(strArr)

  for(let i=0;i<7;i++){
    let testArr = createTestArr(prettyArr,i)
    if(!testArr) continue
    if(isRow(testArr[0]) || isCol(testArr[0]) || isDiag(testArr[0])){
      return '('+ (testArr[1] + 1) + 'x' + (i+1) + ')'
    }
  }
  this.placeArr = placement(prettyArr)
  return 'none'
}

const prettify = (arr) =>{
  resArr = arr.map((val)=>{
    return val.replace (/[\(\)]/g,'').split(',')
  })
  return resArr
}

const createTestArr = (arr,col) =>{
  let copy
  let arrCopy = arrayCopier(arr)
  for(let row = 0;row < 6;row ++){
    if (arrCopy[row][col] !== 'x' && row !== 0){
      arrCopy[row-1][col] = this.color
      return [arrCopy,row-1]
    }
    if(row ===5 && arrCopy[row][col] === 'x') {
      arrCopy[row][col] = this.color
      return [arrCopy,row]
    }
  }
  return null
}

const isRow = (arr) => {
  let len = arr.length
  for(let i=0;i<len;i++){
    let valStr = arr[i].join('')
    if(this.regEx.test(valStr)) return true
  }
  return false
}

const isCol = (arr) => {
  let rowNum = arr.length
  let colNum = arr[0].length
  let flipArr = []
  for(let col=0;col < colNum;col++){
    let flipArrRow = []
    for(let row = 0;row < rowNum;row ++){
      flipArrRow.push(arr[row][col])
    }
    flipArr.push(flipArrRow)
  }
  let flipLen = flipArr.length
  for(let i=0;i<flipLen;i++){
    let valStr = flipArr[i].join('')
    if(this.regEx.test(valStr)) return true
  }
  return false
}

const isDiag = (arr) => {
  let places = placement(arr)
  let placesLen = places.length
  for(let i=0;i<placecLen;i++){
    let vert = places[i][0] <= 2? 'd' : 'u'
    let hor = places[i][1] <=2? 'r': (places[i][1] >= 4? 'l' : 'b')
    let type = vert + hor
    let counter = 0
    switch(type) {
      case 'dr':
        if(arr[places[i][0]+1][places[i][1]+1]===this.color &&
          arr[places[i][0]+2][places[i][1]+2]===this.color &&
          arr[places[i][0]+3][places[i][1]+3]===this.color){
          return true
        }
      break;
      case 'dl':
        if(arr[places[i][0]+1][places[i][1]-1]===this.color &&
          arr[places[i][0]+2][places[i][1]-2]===this.color &&
          arr[places[i][0]+3][places[i][1]-3]===this.color){
          return true
        }
      break;
      case 'ur':
        if(arr[places[i][0]-1][places[i][1]+1]===this.color &&
          arr[places[i][0]-2][places[i][1]+2]===this.color &&
          arr[places[i][0]-3][places[i][1]+3]===this.color){
          return true
        }
      break;
      case 'ul':
        if(arr[places[i][0]-1][places[i][1]-1]===this.color &&
          arr[places[i][0]-2][places[i][1]-2]===this.color &&
          arr[places[i][0]-3][places[i][1]-3]===this.color){
          return true
        }
      break;
      case 'db':
       if ((arr[places[i][0]+1][places[i][1]+1] === this.color &&
              arr[places[i][0]+2][places[i][1]+2] === this.color &&
              arr[places[i][0]+3][places[i][1]+3] === this.color) ||
              (arr[places[i][0]+1][places[i][1]-1] === this.color &&
              arr[places[i][0]+2][places[i][1]-2] === this.color &&
              arr[places[i][0]+3][places[i][1]-3]))
              return true
      break;
      case 'ub':
       if ((arr[places[i][0]-1][places[i][1]+1] === this.color &&
                arr[places[i][0]-2][places[i][1]+2] === this.color &&
                arr[places[i][0]-3][places[i][1]+3] === this.color) ||
                (arr[places[i][0]-1][places[i][1]-1] === this.color &&
                arr[places[i][0]-2][places[i][1]-2] === this.color &&
                arr[places[i][0]-3][places[i][1]-3] === this.color))
            return true;
      break;
    }
  }
  return false
}

const arrayCopier = (arr) =>{
  let outArr = []
  arr.forEach((val,ind) => {
    outArr[ind] = Array.isArray(val) ? arrayCopier(val) : val;
  })
  return outArr
}
