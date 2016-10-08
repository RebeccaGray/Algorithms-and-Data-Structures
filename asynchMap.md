Async Map
Implement the function asyncMap:

asyncMap has two parameters, an array of asynchronous functions (tasks) and a callback.
Each of the tasks takes a separate callback and invokes that callback when complete.

The callback passed to asyncMap is then performed once on the array of results of the callbacks of the tasks.

The order of these results should be the same as the order of the tasks.
It is important to note that this is not the order in which the tasks return,
but the order in which they are passed to asyncMap.

Once all the callbacks of the tasks are returned, asyncMap should invoke the callback
on the results array.

Example:

asyncMap([
  function(cb){
    setTimeout(function(){
      cb('one');
    }, 200);
  },
  function(cb){
    setTimeout(function(){
      cb('two');
    }, 100);
  }
 ],
  function(results){
    // the results array will equal ['one','two'] even though
    // the second function had a shorter timeout.
    console.log(results); // ['one', 'two']
 });
Your Code Should Pass:
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
100
101
102
103
104
105
106
107
108
109
110
chai.should();
P = Promise;
Array.prototype.m = Array.prototype.map;
describe('asyncMap', function() {

  it('should exist', function() {
    expect(asyncMap).toBeDefined();
  });

  it('should be a function', function() {
    asyncMap.should.be.a.Function;
  });

  it('should take two arguments', function() {
    asyncMap.length.should.equal(2);
  });

  it('should pass the completed tasks to its callback', function(done){

    // These functions aren't really asynchronous, but for the purposes of testing it works.
    function wait2For2(callback){
      Test.setTimeout(function () {
        callback(2);
      }, 200, done.fail);
    }

    function wait3For1(callback){
      Test.setTimeout(function() {
        callback(1);
      }, 300, done.fail);
    }

    var res;
    asyncMap([wait2For2, wait3For1], function(arr){
      res = arr;
      /* This should work regardless of order because of
       * the time it takes to execute these 2 functions
       */
      res.should.deep.equal([2,1]);
      res.length.should.equal(2);
      done();
    });

  });

  it('should pass the completed tasks to its callback in the correct order', function(done) {

    function wait2For2(callback){
      Test.setTimeout(function() {
        callback(2);
      }, 200, done.fail);
    }

    function wait3For1(callback){
      Test.setTimeout(function() {
        callback(1);
      }, 300, done.fail);
    }

    var res;
    asyncMap([wait3For1, wait2For2], function(arr){
      res = arr;
      res.should.deep.equal([1,2]);
      done();
    });

  });

  it('should handle more than two async functions in the correct order', function(done) {
    function wait2For2(callback){
      Test.setTimeout(function() {
        callback(2);
      }, 200, done.fail);
    }

    function wait5For4(callback){
      Test.setTimeout(function() {
        callback(4);
      }, 500, done.fail);
    }

    function wait1For3(callback){
      Test.setTimeout(function() {
        callback(3);
      }, 100, done.fail);
    }

    function wait3For1(callback){
      Test.setTimeout(function() {
        callback(1);
      }, 300, done.fail);
    }

    function wait1For5(callback){
      Test.setTimeout(function() {
        callback(5);
      }, 100, done.fail);
    }

    var res;
    asyncMap([wait3For1, wait2For2, wait1For3, wait5For4, wait1For5], function(arr){
      res = arr;
      res.should.deep.equal([1,2,3,4,5]);
      done();
    });

  });
