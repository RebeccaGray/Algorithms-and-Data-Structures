function primeTester (n) {
 if (n === 1){
   return false;
 } else if(n === 2){
   return true;
 }else if (n > 2){
  for (var i=2;i<=Math.sqrt(n);i++){
    if (n % i=== 0){
      return false
    }
  }
 }
return true
}
