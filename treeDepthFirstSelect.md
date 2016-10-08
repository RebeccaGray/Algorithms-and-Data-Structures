Tree Depth-First Select
Implement a depth-first method on a tree class.

DFSelect accepts a filter function, calls that function on each of the nodes in Depth First order, and returns a flat array of node values of the tree for which the filter returns true.

Example:

var root1 = new Tree(1);
var branch2 = root1.addChild(2);
var branch3 = root1.addChild(3);
var leaf4 = branch2.addChild(4);
var leaf5 = branch2.addChild(5);
var leaf6 = branch3.addChild(6);
var leaf7 = branch3.addChild(7);

root1.DFSelect(function (value, depth) {
  return value % 2 === 1;
}) //=> [1, 5, 3, 7]

root1.DFSelect(function (value, depth) {
  return depth === 1;
}) //=> [2, 3]
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
111
112
113
114
115
116
117
118
119
120
121
122
123
var should = chai.should();

describe('Tree', function () {
  it('should exist', function(){
    // Oh no! the `Tree` class doesn't exist but it was provided for you. Maybe
    // you deleted the code that defines the class by mistake?
    should.exist(Tree);
  });
});

describe('DFSelect', function() {
  it('should exist on the Tree prototype', function(){
    should.exist(Tree.prototype.DFSelect);
  });

  it('should be a function', function() {
    Tree.prototype.DFSelect.should.be.a.Function;
  });

  it('should return an array', function() {
    var root = new Tree('root');
    var all = function () { return true; };
    Array.isArray(root.DFSelect(all)).should.equal(true);
  });

  it('should return all nodes in the tree if filter always returns true', function() {
    // this filter function should always return all of the nodes
    var all = function () { return true; };
    // keep a list of all nodes to compare
    // depth: 0
    var root = new Tree(1);
    // depth: 1
    root.addChild(2);
    root.addChild(3);
    // depth: 2
    root.children[0].addChild(4);
    root.children[0].addChild(5);
    root.children[1].addChild(6);
    root.children[1].addChild(7);
    // depth: 3 (sparse)
    root.children[0].children[0].addChild(8);
    root.children[1].children[1].addChild(9);
    var expected = [1, 2, 4, 8, 5, 3, 6, 7, 9];

    // we should expect back all the nodes we added
    var result = root.DFSelect(all);
    result.should.have.length(expected.length);
    result.should.deep.equal(expected);
  });

  it('should return all nodes passing the filter', function () {
    // this filter function should return all true nodes
    var trueFilter = function (value, depth) {
      return value === true;
    };
    // this filter function should return all false nodes
    var falseFilter = function (value, depth) {
      return value === false;
    };
    // keep a list of true and false nodes to compare
    var trueNodes = [], falseNodes = [], result = null;
    // depth: 0
    var root = new Tree(false);
    falseNodes.push(false);
    // depth: 1
    trueNodes.push(true), root.addChild(true);
    falseNodes.push(false), root.addChild(false);
    // depth: 2
    trueNodes.push(true), root.children[0].addChild(true);
    trueNodes.push(true), root.children[1].addChild(true);
    falseNodes.push(false), root.children[0].addChild(false);
    falseNodes.push(false), root.children[1].addChild(false);
    // depth: 3 (sparse)
    trueNodes.push(true), root.children[0].children[0].addChild(true);
    trueNodes.push(true), root.children[1].children[0].addChild(true);
    falseNodes.push(false), root.children[0].children[1].addChild(false);
    falseNodes.push(false), root.children[1].children[1].addChild(false);

    result = root.DFSelect(trueFilter);
    // we expect back all the `trueNodes` using the `trueFilter`
    result.should.deep.equal(trueNodes);

    result = root.DFSelect(falseFilter);
    // we expect back all the `falseNodes` using the `falseFilter`
    result.should.deep.equal(falseNodes);
  });

  it('should allow filtering by depth', function () {
    // this filter constructor produces a filter for the specified depth
    var depthFilter = function (filterDepth) {
      return function (node, nodeDepth) {
        return filterDepth == nodeDepth;
      };
    };
    // keep a list of nodes by depth to compare
    var nodeDepths = [], deepNodes = [];
    var root = new Tree(0);
    // depth: 0
    nodeDepths.push([0]);
    // depth: 1
    root.addChild(1);
    root.addChild(2);
    nodeDepths.push([1,2]);
    // depth: 2
    root.children[0].addChild(3);
    root.children[0].addChild(4);
    root.children[1].addChild(5);
    root.children[1].addChild(6);
    nodeDepths.push([3,4,5,6]);
    // depth: 3 (sparse)
    root.children[0].children[0].addChild(7);
    root.children[0].children[0].addChild(8);
    root.children[1].children[0].addChild(9);
    root.children[1].children[0].addChild(10);
    nodeDepths.push([7,8,9,10]);

    root.DFSelect(depthFilter(0)).should.deep.equal(nodeDepths[0]);
    root.DFSelect(depthFilter(1)).should.deep.equal(nodeDepths[1]);
    root.DFSelect(depthFilter(2)).should.deep.equal(nodeDepths[2]);
    root.DFSelect(depthFilter(3)).should.deep.equal(nodeDepths[3]);
  });
});
