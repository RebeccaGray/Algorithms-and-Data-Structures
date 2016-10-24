function spiralTraversal (matrix) {
 var result = []
  while(matrix.length  > 0 && matrix[0].length > 0){
   //go right
    let top = matrix.shift()
    result.push(...top)
    //go down
    if(matrix.length === 0 || matrix[0].length === 0) break;
    let down = getCol(matrix,(matrix[0].length)-1)
    matrix = down[1]
    down = down[0]
    result.push(...down)
    //go left
    if(matrix.length === 0 || matrix[0].length === 0) break;
    let left = matrix.pop().reverse()
    result.push(...left)
    //go up
    if(matrix.length === 0 || matrix[0].length === 0) break;
    let up = getCol(matrix,0)
    matrix = up[1]
    up = up[0].reverse()
    result.push(...up)
    if(matrix.length === 0 || matrix[0].length === 0) break;
   }
 return result
}

const getCol = (matrix,ind) => {
  let col = [], i=0
  let len = matrix.length -1
  while(i <= len) {
    if(ind === 0 ) col.push(matrix[i].shift())
    else col.push(matrix[i].pop())
    i++
  }
  return [col, matrix]
}
