var bind = (callback,then,...args)=>{
    return function () {
        return callback.apply(then, args.concat(...arguments));
    };
};


Function.prototype.bind = function(object,...args) {
    const then = this;
    return function () {
        return then.apply(object,args.concat(...arguments));
    };
};
