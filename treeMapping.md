Tree Mapping
Implement a map method on this Tree class.

Map accepts a mapping function as its only argument. It traverses the tree, passing each node’s value into the mapping function, and generates a new tree containing the results.

So map should return a tree with the same structure, and different values, but it should NOT modify the tree that was passed in.

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
var should = chai.should();

describe('Tree', function (){
  it('should exist', function(){
    should.exist(Tree);
  });
  it('should be a function', function(){
    Tree.should.be.a.Function;
  });
  describe('map()', function() {
    it('should exist on the Tree prototype', function(){
      should.exist(Tree.prototype.map);
    });

    it('should be a function', function() {
      Tree.prototype.map.should.be.a.Function;
    });

    it('should return a Tree instance', function() {
      var root = new Tree('root');
      var identity = function (value) { return value; };
      var result = root.map(identity);
      should.exist(result);
      result.should.be.an.instanceOf(Tree);
    });

    it('should return an identical tree if the mapping function returns the value unaltered', function() {
      // this "identity" function returns the same value that was passed in
      var identity = function (value) { return value; };
      // create a tree with some values
      // depth: 0
      var input = new Tree(1);
      // depth: 1
      input.addChild(2);
      input.addChild(3);
      // depth: 2
      input.children[0].addChild(4);
      input.children[0].addChild(5);
      input.children[1].addChild(6);
      input.children[1].addChild(8);
      // depth: 3 (sparse)
      input.children[0].children[0].addChild(9);
      input.children[1].children[1].addChild(10);

      var verifyTree = function (result, expectation) {
        result.should.be.an.instanceOf(Tree);  // we expect a tree node
        result.value.should.equal(expectation.value); // with the same value
        result.should.not.equal(expectation); // but NOT the same node
        result.children.should.have.length(expectation.children.length); // with the same number of children
        for (var i = 0; i < result.children.length; i++) {
          verifyTree(result.children[i], expectation.children[i]); // and each child is also verified
        }
      }

      var result = input.map(identity);
      // the input and output trees should have identical values
      verifyTree(result, input);
    });

    it('should return a tree with doubled values if the function doubles the value', function() {
      // this function doubles the value that was passed in
      var double = function (value) { return value * 2; };
      // create a tree with some values, and a tree with our *expected* output
      // depth: 0
      var input = new Tree(1);
      var output = new Tree(2);
      // depth: 1
      input.addChild(2);
      input.addChild(3);
      // expected values
      output.addChild(4);
      output.addChild(6);
      // depth: 2
      input.children[0].addChild(4);
      input.children[0].addChild(5);
      input.children[1].addChild(6);
      input.children[1].addChild(8);
      // expected values
      output.children[0].addChild(8);
      output.children[0].addChild(10);
      output.children[1].addChild(12);
      output.children[1].addChild(16);
      // depth: 3 (sparse)
      input.children[0].children[0].addChild(9);
      input.children[1].children[1].addChild(10);
      // expected values
      output.children[0].children[0].addChild(18);
      output.children[1].children[1].addChild(20);

      var verifyTree = function (result, expectation) {
        result.should.be.an.instanceOf(Tree);  // we expect a tree node
        result.value.should.equal(expectation.value); // with the same value
        result.should.not.equal(expectation); // but NOT the same node
        result.children.should.have.length(expectation.children.length); // with the same number of children
        for (var i = 0; i < result.children.length; i++) {
          verifyTree(result.children[i], expectation.children[i]); // and each child is also verified
        }
      }

      var result = input.map(double);
      verifyTree(result, output);
    });
  });
/*
  describe('mapInPlace()', function() {
    xit('should exist on the Tree prototype', function(){
      should.exist(Tree.prototype.mapInPlace);
    });

    xit('should be a function', function() {
      Tree.prototype.mapInPlace.should.be.a.Function;
    });

    xit('should update the tree with doubled values if the function doubles the value', function() {
      // this function doubles the value that was passed in
      var double = function (value) { return value * 2; };
      // create a tree with some values, and a tree with our *expected* output
      // depth: 0
      var input = new Tree(1);
      var output = new Tree(2);
      // depth: 1
      input.addChild(2);
      input.addChild(3);
      // expected values
      output.addChild(4);
      output.addChild(6);
      // depth: 2
      input.children[0].addChild(4);
      input.children[0].addChild(5);
      input.children[1].addChild(6);
      input.children[1].addChild(8);
      // expected values
      output.children[0].addChild(8);
      output.children[0].addChild(10);
      output.children[1].addChild(12);
      output.children[1].addChild(16);
      // depth: 3 (sparse)
      input.children[0].children[0].addChild(9);
      input.children[1].children[1].addChild(10);
      // expected values
      output.children[0].children[0].addChild(18);
      output.children[1].children[1].addChild(20);

      var verifyTree = function (result, expectation) {
        result.should.be.an.instanceOf(Tree);  // we expect a tree node
        result.value.should.equal(expectation.value); // with the same value
        result.children.should.have.length(expectation.children.length); // with the same number of children
        for (var i = 0; i < result.children.length; i++) {
          verifyTree(result.children[i], expectation.children[i]); // and each child is also verified
        }
      }

      input.mapInPlace(double);
      verifyTree(input, output);
    });
  });
  */
});
