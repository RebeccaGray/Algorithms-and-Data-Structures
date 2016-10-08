var LinkedList = function (initialValue) {
  this.head = {'value':initialValue, 'next':null}
  if(!this.tail){
    this.tail = this.head
  }
};

LinkedList.prototype.addToTail = function(value){
  var newNode = {'value':value,'next':null}
  if(!this.head.value){
    this.head.value = value
    this.tail = this.head
    this.head.next = this.tail
  } else{
  this.tail.next = newNode
  this.tail = newNode
  }
}

 LinkedList.prototype.removeHead = function(){
  if(this.head.next === null){
    this.head = undefined
    this.tail = undefined
  }else{
    this.head = this.head.next
  }
}

 LinkedList.prototype.contains = function(value){
       var current = this.head, contains = false
       while(current){
         if(current.value === value){
           contains = true;
         }
           current = current.next

       }
       return contains;
}
