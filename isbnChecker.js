function validateISBN (string) {
 for(let i=0;i<string.length;i++){
   if (string[i] === '-'){
     string = string.slice(0,i) + string.slice(i+1,string.length)
   }
   if(string[i] === 'X' && i !== 9){
     return false
   }
 }
 if (string.length !== 10){
   return false;
 }
 var sum = 0, j=10;
 for(let i=0;i<string.length;i++){
   let val = string[i]
   if(val === 'X' && i === 9){
     val = '10'
   }
    sum += parseInt(val) * j
    j--
 }
 return sum % 11 === 0
}
