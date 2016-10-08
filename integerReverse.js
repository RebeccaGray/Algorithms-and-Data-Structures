function reverseInteger (n) {
 var m = 0;
 while(n > 0){
    m = m * 10 + n % 10
    n = parseInt(n/10)
 }
 return parseInt(m)
}
