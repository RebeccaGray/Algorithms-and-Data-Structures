/* Have the function ShortestPath(strArr) take strArr which will be an array of strings which models a non-looping Graph. The structure of the array will be as follows: The first element in the array will be the number of nodes N (points) in the array as a string. The next N elements will be the nodes which can be anything (A, B, C .. Brick Street, Main Street .. etc.). Then after the Nth element, the rest of the elements in the array will be the connections between all of the nodes. They will look like this: (A-B, B-C .. Brick Street-Main Street .. etc.). Although, there may exist no connections at all.

An example of strArr may be: ["4","A","B","C","D","A-B","B-D","B-C","C-D"]. Your program should return the shortest path from the first Node to the last Node in the array separated by dashes. So in the example above the output should be A-B-D. Here is another example with strArr being ["7","A","B","C","D","E","F","G","A-B","A-E","B-C","C-D","D-F","E-D","F-G"]. The output for this array should be A-E-D-F-G. There will only ever be one shortest path for the array. If no path between the first and last node exists, return -1. The array will at minimum have two nodes. Also, the connection A-B for example, means that A can get to B and B can get to A. */

const shortestPath = (strArr) =>{
  let nodeNum = parseInt(strArr.shift())
  let newArr = strArr.map((val) => return val)
  //convert names to letters
  let modArr = convertArr(newArr)
  //get an array containing object of nodes and an array of connections
  let connections = createObject(modArr)
  //convert to an object of key values (node: [connections])
  let connectionsObject = makeObject(connections)
  let fullPaths = paths(connectionObject)
  return fullPaths.length ? finalForm(fullPaths): 1
}

const convertArr = (arr) =>{
  arr = arr.map((val) => {return val.toLowerCase()})
  for(let i=0;i<nodeNum;i++){
    let hold = new RegExp(arr[i])
    arr = arr.map((val)=>{return val.replace(hold,String.fromCharCode( i+65))})
  }
  return arr
}

const createObject = (arr) => {
  let obj = {}
  arr.forEach((val) => {
    if(/^\w$/.test(val)){
      obj[val] = []
    }
  })
  arr.splice(0,nodeNum)
  return [obj,arr]
}

const makeObject = (arr) => {
  let connObj = arr[0]
  let connArr = arr[1]
  for(let char in connObj) {
    let patt = new RegExp('\(\?\:' + char + '-\(\\w\)|\(\?\:\(\\w\)-' + char + '\)')
    connArr.forEach ((val,ind) => {
      let res = patt.exec(val)
      if(res){
        resFiltered = res.filter((val)=>{return val})
        connObj[char].push(resFiltered[1])
      }
    })
  }
  return connObj
}

const paths = (pathObj) => {
  let endNode = String.fromCharCode(65 + nodeNum -1)
  //start at the beginning (node 'A');
  let resArr = ['A']
  //until all the paths are deadended or fully run
  while (resArr.some((val)=> {return val.slice(-1) !== endNode})){
     //hotChar is the current last item in the first path string in the paths array
     let hotchar = resArr[0].slice(-1)
     //if the end has already been reached, move from front to back.
     if(hotChar === endnode) {
       resArr.push(resArr.shift())
     }
     //if not reached
     else {
       //get the array of nodes connected to hotChar
       holdArr = pathObj[hotChar]
       //filter nodes visited
       holdArr = holdArr.filter((val) =>{
         return resArr[0].indexOf(val) === -1
       })
       //remove the pathstring from front of array
       let oldStr = resArr.splice(0,1)[0]
       //add to the read of the array each continuing path
       holdArr.forEach((val)=>{resArr.push(oldStr + val)})
     }
  }
  return resArr
}

const finalForm = (pathsArr) => {
  let truePath = pathsArr.sort((a,b) => return b.length - a.length})
  let truePathArr = truePath.split('')
  truePathArr = truePathArr.map((val)=>{return strArr[val.charCodeAt(0) -65]})
  return truePathArr.join('-')
}
