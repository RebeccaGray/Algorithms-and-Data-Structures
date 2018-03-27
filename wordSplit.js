const wordSplit = (strArr) => {
  let word = strArr[0]
  let dictionary = strArr[1].split(',')
  let len = dictionary.length

  for(let i=0;i<len;i++){
    for(let j=0;j< len;j++){
      let forward = dictionary[i] + dictionary[j]
      let reverse = dictionary[j] + dictionary[i]
      if(forward === word) return dictionary[i] + ', ' + dictionary[j]
      if(reverse === word) return dictionary[j] + ',' + dictionary[i]
    }
  }
  return 'not possible'
}



 const wordSplit = (strArr, index = 1, solved = false) => {
    let firstWord = strArr[0].slice(0,index);
    let secondWord = strArr[0].slice(index, strArr[0].length);
    if (strArr[1].split(",").indexOf(firstWord) !== -1 &&
        strArr[1].split(",").indexOf(secondWord) !== -1
    ) {
        return `${firstWord},${secondWord}`;
    } else if (index < strArr[0].length){
        index ++;
        return wordSplit(strArr, index, false);
    } else {
        return "noresult";
    }
}
