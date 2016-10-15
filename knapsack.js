const knapsack = (items, capacity) => {
//items parameter in a JSON format ([{w: num, v: num}])
  let item = 0,
      weight = 0,
      maxBefore = 0,
      maxAfter = 0,
      numOfItems = items.length,
      matrixWeight = new Array(numItems+1),
      matrixToKeep = new Array(numItems+1),
      solutionSet = []

  for(let i=0;i<numOfItems+1,i++){
    matrixWeight[i] = new Array(capacity+1)
    matrixToKeep[i] = new Array(capacity+1)
  }

  for(let item = 0; item <= numOfItems; item++){
    for(weight = 0; weight <= capacity;weight++){

      if(item === 0 || weight === 0){
        matrixWeight[item][weight] = 0
      }

      else if (items[item-1].w <=weight){
        maxAfter = items[item-1].v + matrixWeight[item-1][weight-items[item-1].w]
        maxBefore = matrixWeight[item-1][weight]

        //update the matrices
        if(maxAfter > maxBefore) {
          matrixWeight[item][weight] = maxAfter
          matrixToKeep[item][weight] = 1
        }
        else {
          matrixWeight[item][weight] = maxBefore
          matrixToKeep[item][weight] = 0
        }
      }
    }
    //traverse matrixToKeep([numItems][capacity] -> [1][?])
    //to create solutionSet
    weight = capacity
    item = numOfItems
    for(item; item > 0; item--){
      solutionSet.push(items[item-1])
      weight = weight - items[item-1].w
    }
  }
  return {'maxValue': matrixWeight[numOfItems][capacity], 'set': solutionSet}
}
