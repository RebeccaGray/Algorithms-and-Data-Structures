var compose = (...arg) =>
  (item)=>
    arg.reduceRight((total,f)=>{
      return f.call(null,total);
   }, item)

var pipe = (...arg) =>{
 return (item) => {
   return arg.reduce((total,f) => {
     return f.call(null,total);
   },item)
 }
};
