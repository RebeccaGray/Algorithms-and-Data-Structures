var bubbleSort = (array) => {
   for(let j = array.length; j >= 0; j--) {
        for(let i=0;i<array.length;i++){
          if(array[i] > array[i+1]){
              array = swap(i,i+1,array);
          }
        }
   }
  return array
}
var swap = (i,j,array) =>{
    let temp = array[i]
    array[i] = array[j]
    array[j] = temp
    return array;
}
