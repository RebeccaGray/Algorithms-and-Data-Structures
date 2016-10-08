function longestRun (string) {
 var r=[],s=[],ch="",d=0;
 if(string === ""){return[0,0];}
 for(var i=0;i<string.length;i++){
  if(string[i] === ch){
    if(r.length === 1){
      r.push(i);
    }else if (r.length === 2){
      r[1] = i;
    }
  }else{
    ch = string[i];  s.push(r); r=[];r.push(i)
  }
 }
 for( i=0;i<s.length;i++){
  if((s[i][1] - s[i][0]) >d){
    r = s[i]; d =(s[i][1] - s[i][0])
   }
  }
if (r.length < 2)  r=[0,0];
  return r;
}
