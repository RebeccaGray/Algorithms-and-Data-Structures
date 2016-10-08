function evenOccurrence (arr) {
  var tmp = {};
 for(var i=0;i<arr.length;i++){
  if(tmp[arr[i]] === undefined){
   tmp[arr[i]] = 0
  }else if(tmp[arr[i]] === 0){
   tmp[arr[i]] = 1
  }else if(tmp[arr[i]] === 1){
    tmp[arr[i]] = 0
  }
 }
 for(var item in tmp){
   if (tmp[item] === 1){
       if(isNumber(item)){
         return parseFloat(item);
       } else {
         return item
       }
   }
 }
 return null;
}

function isNumber(obj) { return !isNaN(parseFloat(obj)) }
