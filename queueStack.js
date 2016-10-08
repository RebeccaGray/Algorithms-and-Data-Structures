var Stack = function() {
  var storage = [];

  this.push = function(value){
     storage.push(value)
  };

  this.pop = function(){
    return storage.shift()
  };

  this.size = function(){
    return storage.length
  };
};

var Queue = function() {

  var inbox = new Stack();
  var outbox = new Stack();

  this.enqueue = function(value){
    inbox.push(value)
  };

  this.dequeue = function(){
    var val = inbox.pop()
    return val
  };

  this.size = function(){
     return inbox.size() + outbox.size()
  };
};
