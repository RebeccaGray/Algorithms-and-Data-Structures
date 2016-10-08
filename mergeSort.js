function mergeSort(arr){
   if(arr.length <= 1)return arr;
   var a = mergeSort(arr.slice(0,Math.floor(arr.length/2)));
   var b = mergeSort(arr.slice(Math.floor(arr.length/2)));
   var res = [];
   while (a.length > 0 || b.length > 0) {
     !b[0] || a[0] < b[0] ? res.push(a.shift()) : res.push(b.shift());
   }
   return res;
}
