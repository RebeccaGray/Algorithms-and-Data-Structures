var makeHashTable = function(){
    var table = {};
    var storage = [];
    var storageLimit = 1000;

    table.insert = function(key, value){
      var colision = false
      var index = getIndexBelowMaxForKey(key, storageLimit);
      storage[index] = storage[index] || [];
      for(var i=0;i<storage[index].length;i++){
        if (storage[index][i][0] === key){
          storage[index][i][1] = value
          colision = true
        }
      }
      if (!colision){
        storage[index].push([key,value])
      }
    };

    table.retrieve = function(key){
      var index = getIndexBelowMaxForKey(key, storageLimit);
      if(!storage[index]){return undefined}
      for(var i=0;i<storage[index].length;i++){
        if (storage[index][i][0] === key){
          return storage[index][i][1]
        }
      }
      return undefined
    };

    table.remove = function(key){
      var index = getIndexBelowMaxForKey(key, storageLimit);
      if(!storage[index]){return undefined}
      for(var i=0;i<storage[index].length;i++){
        if (storage[index][i][0] === key){
          storage[index].splice(i,1)
        }
      }
    }
    return table;
  };
 var getIndexBelowMaxForKey = function(str, max){
   var hash = 0;
   for (var i = 0; i < str.length; i++) {
     hash = (hash<<5) + hash + str.charCodeAt(i);
     hash = hash & hash; // Convert to 32bit integer
     hash = Math.abs(hash);
   }
   return hash % max;
 };
