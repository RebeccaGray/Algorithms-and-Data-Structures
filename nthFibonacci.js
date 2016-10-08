var nthFibonacci = function(n) {
       if (n <2){
         return n;
       }
       var previous = [0,1];
       for (i=2;i<n;i++){
         previous.push(previous[i-1] + previous[i-2]);
       }
       return previous[n-1] + previous[n-2];
};
