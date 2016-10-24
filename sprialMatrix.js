/*The input for this problem will be a matrix, or multidimensional array, which will be represented by N arrays each of N length, and your goal is to print the matrix in a spiral order. For example, if the input is:

[[1, 2, 3],
 [4, 5, 6],
 [7, 8, 9]]

then this matrix should be printed out in a list like so:

[1, 2, 3, 6, 9, 8, 7, 4, 5]

The spiral begins at the top left of the matrix and loops around it towards the center in a clockwise pattern. Below is a clever algorithm that uses recursion to print a matrix in spiral order:
*/

const layerTopRight(matrix) => {
  let top = matrix.splice(0,1)
  let right = []
  for(let i =0;i< matrix.length;i++){
    let e = matrix[i].splice(-1,1)
    right.push(e)
  }
  return top.concat(right).toString().split()
}
const layerBottomLeft(matrix) =>{
  let bottom = matrix.splice(matrix.length-1,1)[0].reverse()
  let left = []
  for(let i=0;i<matrix.length;i++){
    let e = matrix[i].splice(0,1)
    left.push(e)
  }
  return bottom.concat(left.reverse()).toString().split()
}

const spiral => (matrix){
  let spiral = []
  while(matrix.length > 0){
    if(matrix.length === 1){
      spiral.push(matrix[0])
      break
    }
    let tr = layerTopright(matrix)
    spiral.push(tr)
    let b1 = layerBottomLeft(matrix)
    spiral.push(b1)
  }
  return spiral.toString().split()
}



let m = [[1,2,3],
          [4,5,6],
          [7,8,9]]
spiral(m)
