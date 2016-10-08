Tree Breadth-First Select
Implement a breadth-first method on a tree class.

BFSelect accepts a filter function, calls that function on each of the nodes in Breadth-First order, and returns a flat array of node values of the tree for which the filter returns true.

Example:

var root1 = new Tree(1);
var branch2 = root1.addChild(2);
var branch3 = root1.addChild(3);
var leaf4 = branch2.addChild(4);
var leaf5 = branch2.addChild(5);
var leaf6 = branch3.addChild(6);
var leaf7 = branch3.addChild(7);

root1.BFSelect(function (value, depth) {
  return value % 2;
}) //=> [1, 3, 5, 7]

root1.BFSelect(function (value, depth) {
  return depth === 1;
}) //=> [2, 3]
For more information on breadth-first traversal, visit this link: Breadth-First Traversal of a Tree.

.

You've got Helpers! (click to view code)
Queue Constructor
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
124
125
126
127
128
129
130
131
132
133
134
135
136
137
138
139
140
141
142
143
144
145
146
147
148
149
150
151
152
153
154
155
156
157
158
159
160
161
162
163
164
165
166
167
168
169
170
171
172
173
174
175
var should = chai.should();

describe('Tree', function () {
  it('should exist', function(){
    should.exist(Tree);
  });
})

describe('BFSelect', function() {
  it('should exist on the Tree prototype', function(){
    should.exist(Tree.prototype.BFSelect);
  });

  it('should be a function', function() {
    Tree.prototype.BFSelect.should.be.a.Function;
  });

  it('should return an array', function() {
    var root = new Tree('root');
    var all = function () { return true; };
    root.BFSelect(all).should.be.an.Array;
  });

  it('should return all nodes in the tree if filter always returns true', function() {
    // this filter function should always return all of the nodes
    var all = function () { return true; };
    var equal
    // keep a list of all nodes to compare
    // depth: 0
    var root = new Tree(1);
    var expected = [1];
    // depth: 1
    expected.push(2); root.addChild(2);
    expected.push(3); root.addChild(3);
    // depth: 2
    expected.push(4); root.children[0].addChild(4);
    expected.push(5); root.children[0].addChild(5);
    expected.push(6); root.children[1].addChild(6);
    expected.push(7); root.children[1].addChild(7);
    // depth: 3 (sparse)
    expected.push(8); root.children[0].children[0].addChild(8);
    expected.push(9); root.children[1].children[1].addChild(9);

    // we should expect back all the nodes we added
    var result = root.BFSelect(all);
    result.should.have.length(expected.length);

    // make sure the result array contains all the expected values
    for(var i = 0; i < expected.length; i++){
      // ie., `expected[i]` should be somewhere in `result`
      result.should.contain(expected[i]);
    }
  });

   it('should filter nodes in breadth-first order', function() {
    // this filter function should always return all of the nodes
    var all = function () { return true; };
    // keep a list of all nodes in breadth-first order to compare
    // depth: 0
    var root = new Tree(1);
    var expected = [1];
    // depth: 1
    expected.push(2); root.addChild(2);
    expected.push(3); root.addChild(3);
    // depth: 2
    expected.push(4); root.children[0].addChild(4);
    expected.push(5); root.children[0].addChild(5);
    expected.push(6); root.children[1].addChild(6);
    expected.push(7); root.children[1].addChild(7);
    // depth: 3 (sparse)
    expected.push(8); root.children[0].children[0].addChild(8);
    expected.push(9); root.children[1].children[1].addChild(9);

    var result = root.BFSelect(all);
    // make sure the result array is in breadth-first order
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
    trueNodes.push(true);   root.addChild(true);
    falseNodes.push(false); root.addChild(false);
    // depth: 2
    trueNodes.push(true);   root.children[0].addChild(true);
    trueNodes.push(true);   root.children[1].addChild(true);
    falseNodes.push(false); root.children[0].addChild(false);
    falseNodes.push(false); root.children[1].addChild(false);
    // depth: 3 (sparse)
    trueNodes.push(true);   root.children[0].children[0].addChild(true);
    trueNodes.push(true);   root.children[1].children[0].addChild(true);
    falseNodes.push(false); root.children[0].children[1].addChild(false);
    falseNodes.push(false); root.children[1].children[1].addChild(false);

    result = root.BFSelect(trueFilter);
    // we expect back all the `trueNodes` using the `trueFilter`
    result.length.should.equal(trueNodes.length);
    for(var i = 0; i < trueNodes.length; i++){
      // ie., `trueNodes[i]` should be somewhere in `result`
      result.should.contain(trueNodes[i]);
    }

    result = root.BFSelect(falseFilter);
    // we expect back all the `falseNodes` using the `falseFilter`
    result.length.should.equal(falseNodes.length);
    for(var i = 0; i < falseNodes.length; i++){
      result.should.contain(falseNodes[i]);
    }
  });

  it('should allow filtering by depth', function () {

    // keep a list of nodes by depth to compare
    var nodeDepths = [], deepNodes = [];
    var root = new Tree(0);
    // depth: 0
    nodeDepths.push([0]);
    // depth: 1
    deepNodes = [];
    deepNodes.push(1); root.addChild(1);
    deepNodes.push(2); root.addChild(2);
    nodeDepths.push(deepNodes);
    // depth: 2
    deepNodes = [];
    deepNodes.push(3); root.children[0].addChild(3);
    deepNodes.push(4); root.children[0].addChild(4);
    deepNodes.push(5); root.children[1].addChild(5);
    deepNodes.push(6); root.children[1].addChild(6);
    nodeDepths.push(deepNodes);
    // depth: 3 (sparse)
    deepNodes = [];
    deepNodes.push(3); root.children[0].children[0].addChild(3);
    deepNodes.push(4); root.children[0].children[0].addChild(4);
    deepNodes.push(5); root.children[1].children[0].addChild(5);
    deepNodes.push(6); root.children[1].children[0].addChild(6);
    nodeDepths.push(deepNodes);

    // helper functions for the tests

    // this filter constructor produces a filter for the specified depth
    var depthFilter = function (filterDepth) {
      return function (node, nodeDepth) {
        return filterDepth === nodeDepth;
      };
    };

    // so that `[1, 5, 2]`  and `[5, 2, 1]` are considered equal
    var shouldBeDeepEqualSorted = function(array1, array2){
      array1.sort(function(a, b){ return a - b});
      array2.sort(function(a, b){ return a - b});
      array1.should.eql(array2); // deep equality
    };

    // the actual tests

    shouldBeDeepEqualSorted(root.BFSelect(depthFilter(0)), nodeDepths[0]);
    shouldBeDeepEqualSorted(root.BFSelect(depthFilter(1)), nodeDepths[1]);
    shouldBeDeepEqualSorted(root.BFSelect(depthFilter(2)), nodeDepths[2]);
    shouldBeDeepEqualSorted(root.BFSelect(depthFilter(3)), nodeDepths[3]);
  });
});
