function longestPalindrome (string) {
  var result = ''
  for(var i=0;i<string.length;i++){
    for(var j=0;j<string.length;j++){
      var isPal = isPalindrome(string.slice(i,j+1))
      if (isPal !== false && isPal.length > result.length){
        result = isPal;
      }
    }
  }
  return result
}

var isPalindrome = (string)=>{
  for(var i=0;i<string.length/2;i++){
    if (string[i] !== string[string.length -i-1]){
      return false;
    }
  }
   return string;
}
