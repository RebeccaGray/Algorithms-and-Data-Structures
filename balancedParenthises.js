var isBalanced =(string) =>{
  var open=0;
  for(var i of string){
    if (i === '(') open ++
    if (i === ')')  open --
    if (open < 0) return false
  }
  return open === 0 ? true:false;
}
