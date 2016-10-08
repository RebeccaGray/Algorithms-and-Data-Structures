var asyncMap = (tasks, callback) => {
    var r = [],p,i=-1,s=[],t=[], f;
    for (f of tasks) {
        ++i;
       (function(j) {
            f.call(null, function(res) {
                r.push(res)
                s.push(j)
                if (r.length === tasks.length) {
                  for(var k=0;k<s.length;k++){
                    t.push(r[s.indexOf(k)]);
                  }
                    callback(t);
                }
            })
        })(i);
    }
};
