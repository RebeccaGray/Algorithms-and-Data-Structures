const consectuveSum = (N) => {
  let start = 1; end = 1; sum = 1; res = 0;
  while (start <= N/2) {
    if (sum < N) {
      end += 1;
      sum += end;
    } else if (sum > N) {
      sum -= start;
      start += 1;
    } else if (sum === N) {
        sum -= start;
        start += 1;
        res += 1;
    }
  }
  return res;
}

console.log(consectuveSum(10))
