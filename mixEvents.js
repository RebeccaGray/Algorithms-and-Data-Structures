var mixEvents = function(obj) {

  var events = {};

  obj.trigger = function (event,...args) {
    events[event] && events[event].forEach((e)=>{
       e(...args)
      })
  };

  obj.on = function (event, cb) {
   events[event] = events[event] || []
       events[event].push(cb)
  };
  return obj;
};
