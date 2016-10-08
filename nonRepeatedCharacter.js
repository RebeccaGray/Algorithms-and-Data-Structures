function firstNonRepeatedCharacter (string) {
  string = string.split("");
  var result = 'sorry';

  var recurse = function(char){
   var filtered = string.filter(function(value){
     return value === char;
   });
   if(filtered.length === 1){
     result = char;
     return;
   } else
   if(i < string.length-1){
     i++;
     char = string[i];
     recurse(char);
   } else{
     return result;
   }

  }
  var i = 0;
  recurse(string[i]);
  return result;

};
