var Tree = function(value){
  this.value = value;
  this.children = [];
  this.depth = 0;
};

Tree.prototype.DFSelect = function(filter){
var results = [],stack=[], depth =0;

 var recurse =  function(child,depth){
   if(filter(child.value,child.depth)){
  	results.push(child.value)
  }
  for ( var i = 0; i < child.children.length; i++ ){
     recurse(child.children[i]);
  }
 }
  recurse(this,this.depth);
  return results;
};

Tree.prototype.addChild = function(child){
  if (!child || !(child instanceof Tree)){
    child = new Tree(child);
  }
  if(!this.isDescendant(child)){
    child.depth = this.depth + 1;
    this.children.push(child);
  }else {
    throw new Error("That child is already a child of this tree");
  }
  // return the new child node for convenience
  return child;
};

Tree.prototype.isDescendant = function(child){
  if(this.children.indexOf(child) !== -1){
    // `child` is an immediate child of this tree
    return true;
  }else{
    for(var i = 0; i < this.children.length; i++){
      if(this.children[i].isDescendant(child)){
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};



Tree.prototype.removeChild = function(child){
  var index = this.children.indexOf(child);
  if(index !== -1){
    // remove the child
    this.children.splice(index,1);
  }else{
    throw new Error("That node is not an immediate child of this tree");
  }
};
 
