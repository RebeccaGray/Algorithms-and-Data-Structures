function sumArray (array) {
  let x=0, greatest = array.reduce((a,b) =>{return a+b});
  array.forEach((item,x) =>{
    for(var i=0;i<array.length;i++){
      let sum = array.reduce((a,b)=>{ return a + b})
      if(sum > greatest) greatest = sum;
    }
  })
    return greatest
  }
