function largestProductOfThree (array) {
  array.sort((a, b) => b-a);
  let res1 = array[array.length -1] * array[array.length-2] * array[0];
  let res2 = array[array.length -1] * array[1] * array[0];
  let res3 = array[0]*array[1]*array[2]
  return Math.max(res1,res2,res3)
}
