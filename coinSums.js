const coinSums = (total) => {
 var coins = [1,2,5,10,20,50,100,200];
 var count = 0
 const  recurse = (i, val) => {
       var currCoin = coins[i];
       if (!i) return val%currCoin === 0 ? count++ : null;

       while (val >= 0) {
         recurse(i - 1, val);
         val -= currCoin;
       }
     }

 recurse(coins.length - 1, total)
 return count;
}
