var arrayception = (array, d,r)=> {
   let depth= d||0, res=r||0;
   if(!Array.isArray(array) && depth > res){
     return depth
   }
   for(let i=0;i<array.length;i++){
     depth++
     res = arrayception(array[i],depth,res)
     depth--
   }
   return res
}
