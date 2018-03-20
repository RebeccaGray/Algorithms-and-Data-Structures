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



