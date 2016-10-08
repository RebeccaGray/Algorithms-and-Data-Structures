var commonCharacters = function(string1, string2){
  var results = "";
    for(var i=0;i< string1.length;i++){
      if (string2.indexOf(string1[i]) !== -1){
        if (string1[i] !== ' ' && results.indexOf(string1[i]) === -1){
           results = results + string1[i];
        }
      }
    }
    return results;
};
