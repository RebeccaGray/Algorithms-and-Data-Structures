function binarySearch (array, target) {
 let result = -1, len = array.length-1;
  const recurse = (min,max)=>{
    let mid = Math.floor(max + min/2)
    if(array[mid] === target) result = mid;
    else if (target < array[mid]) recurse(0,mid-1)
    else if (target > array[mid]) recurse(mid + 1,len)
 }
 recurse(0,len)
 return result;
}
