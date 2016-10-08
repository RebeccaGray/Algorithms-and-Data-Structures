
var permutations = (string) => {
  const res = {};
  const perms = (comb, copy) => {
    if (comb.length === string.length){
       res[comb] = true;
    }
    for (var i = 0 ; i < copy.length; i++) {
      perms(comb + copy[i], copy.slice(0, i) + copy.slice(i + 1));
    }
  }
  perms("", string);
  return Object.keys(res);
};
