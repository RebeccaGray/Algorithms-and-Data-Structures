var DIGIT_VALUES = { I: 1, V: 5, X: 10, L: 50,C: 100,D: 500, M: 1000 }

const translateRomanNumeral = (rn) =>
rn ?  rn.split('').map(a => DIGIT_VALUES[a]).reduce((sum,val, i, arr) =>
   val<arr[i+1] ? sum - val : sum + val, 0) || "null" :0;
