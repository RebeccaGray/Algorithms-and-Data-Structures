function characterFrequency (string) {
  var s = {},r = [];
  //objectify
  for(var i = 0;i<string.length;i++){
    s[string[i]] ?  s[string[i]] += 1 : s[string[i]] = 1
  }
  //make tuples
   for (var key in s){
      r.push([key, s[key]])
   }
   //sort by number then by Alphabet
  r.sort((a, b) => {
   return b[1] === a[1] ? a[0] > b[0] ? 1: -1 : b[1] - a[1]
    })
  return r;
}
