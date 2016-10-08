var Range = function(start, end, step) {
  if (start === null || start ===){return null;}
   this.start = start;
  if (end === null || end === undefined){
    this.end = start;
  }else{
   this.end = end;
  }
  if(step){
    this.step = step;
  } else{
    if(start > end){
     this.step = -1;
    }else{
      this.step = 1;
    }
  }
  //Your code here
};

Range.prototype.size = function () {
    var size = (Math.abs(this.start) - Math.abs(this.end))/Math.abs(this.step);
    return Math.floor(Math.abs(size) + 1);
};

Range.prototype.each = function (callback) {
  var res = "";
  if (this.step > 0){
      for (var i=this.start;i<=this.end;i=i+this.step){
        res = res + callback(i);
      }
    }else {
      for (var i=this.start;i>=this.end;i=i+this.step){
        res = res + callback(i);
      }
    }
   return res;
};

Range.prototype.includes = function (val) {
   if (this.step > 0){
     var s = this.start, e = this.end
   }
   for (var i=s;i<=e;i=i+this.step){
     if (val === i){
       return true;
     }
   }
   return false;
};
