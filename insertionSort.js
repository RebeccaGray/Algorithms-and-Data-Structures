function insertionSort (array) {
  for(let i = 1;i<array.length;i++){
    for(let j = 0; j<i;j++){
     if(array[i].value < array[j].value){
      var tmp = array.splice(i,1)
      array.splice(j,0,tmp[0])
     }
    }
  }
  return array
}
