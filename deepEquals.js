deepEquals = function(a, b){
  var globalResult = true;
   function recurse(x,y){
   	var result = false;
   	if (Array.isArray(x) !== Array.isArray(y)){
   		globalResult = false;
   	}
   	for(var key in x){
   		if(typeof x[key] === 'object' && 	y.hasOwnProperty(key) && typeof y[key] === 'object'){
   			recurse(x[key],y[key]);
   		}
   	   if (x[key] !== y[key] && typeof x[key] !== 'object' || Object.keys(x).length !== Object.keys(y).length){
       globalResult = false;
     }
   	}
  }
   recurse(a,b);
   return globalResult;
};
