function powerSet(string){
  let result = []
  string = string.split('').filter((x,i)=>  string.indexOf(x) === i)
  let n = Math.pow(2,string.length)
  for(let i=0;i<n;i++){
    let bin = i.toString(2)
    while(bin.length < string.length)bin = '0' + bin
    let tmp = []
    for(let j = 0;j<bin.length;j++)if(bin[j] === '1') tmp.unshift(string[j])
    let a = tmp.sort().join('')
    if(result.indexOf(a) === -1) result.push(a)
  }
  return result.sort()
}
