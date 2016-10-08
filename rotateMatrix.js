function rotateMatrix (matrix) {
  var res = [],col=[],i=matrix.length-1,j=0,k=0;
  while(j<matrix.length){ //col
   while(i>=0){ //row
        col.push (matrix[i][j])
        i--;
    }
    res.push(col);
    col = [];
    j++;
    i=matrix.length-1;
  }
  return res;
}
