var treeMaker = function(value){
  var newTree = Object.create(treeMaker.methods);
  newTree.value = value;
  newTree.children = [];
  return newTree;
};

treeMaker.methods = {};

treeMaker.methods.addChild = function(value){
  var node = treeMaker(value);
  this.children.push(node)
}

treeMaker.methods.contains = function(value){
  var result=false;
  function recurse(node){
    if(node.value === value){result= true}
    if(node.children.length > 0){
      var child = node.children.shift()
      recurse(child)
    }
  }
  recurse(this)
  return result;
  }
