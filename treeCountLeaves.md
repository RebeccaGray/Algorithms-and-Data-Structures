Tree Count Leaves
Implement the countLeaves function in this Tree class.

A leaf node is any node in the tree that has no children. countLeaves should
traverse the tree, and return the number of leaf nodes the tree contains.

Illustration of a tree with three leaves:

      * <- root
     / \
    *    * <- leaf
   / \
  *   * <- leaf
 /
* <- leaf
Example usage:

var root = new Tree();

root.countLeaves(); // 1

root.addChild(new Tree());

root.countLeaves(); // still 1

root.addChild(new Tree());

root.children[0].addChild(new Tree());

root.children[0].addChild(new Tree());

root.children[0].children[0].addChild(new Tree());

root.countLeaves(); // 3

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
var should = chai.should();

describe('Tree', function () {
  it('should exist', function(){
    should.exist(Tree);
  });
});

describe('collect', function() {
  it('should exist on the Tree prototype', function(){
    should.exist(Tree.prototype.countLeaves);
  });

  it('should be a function', function() {
    Tree.prototype.countLeaves.should.be.a.Function;
  });

  it('should return a number', function() {
    var root = new Tree('root');
    root.countLeaves().should.be.a.Number;
  });

  it('should return 1 if the tree root has no children', function() {
    // make a one-node tree
    var root = new Tree();
    // an empty root node is technically a leaf
    root.countLeaves().should.equal(1);
  });

  it('should return 2 if the root has two children', function() {
    var root = new Tree();
    // add two children
    root.addChild(new Tree());
    root.addChild(new Tree());
    // both children are now leaves
    root.countLeaves().should.equal(2);
  });

  it('should still return 2 if one branch has one leaf', function() {
    var root = new Tree();
    // add a leaf
    root.addChild(new Tree());
    // add a branch
    var branch = new Tree();
    root.addChild(branch);
    // add a leaf to the branch
    branch.addChild(new Tree());

    // still only two leaves
    root.countLeaves().should.equal(2);
  });

  it('should return 4 if both branches have two leaves', function() {
    var root = new Tree();
    // add a branch
    var branch1 = new Tree();
    root.addChild(branch1);
    // add two leaves to the branch
    branch1.addChild(new Tree());
    branch1.addChild(new Tree());
    // add another branch
    var branch2 = new Tree();
    root.addChild(branch2);
    // add two leaves to the branch
    branch2.addChild(new Tree());
    branch2.addChild(new Tree());

    // if you're counting, that's four leaves
    root.countLeaves().should.equal(4);
  });

  it('should count leaves on a big tree', function () {
    // keep a list of nodes by depth to compare
    var root = new Tree();
    // branches
    var branch1 = new Tree();
    var branch2 = new Tree();
    root.addChild(branch1);
    root.addChild(branch2);
    // branches
    var branch3 = new Tree();
    var branch4 = new Tree();
    branch1.addChild(branch2);
    branch1.addChild(branch3);
    // branches
    var branch5 = new Tree();
    var branch6 = new Tree();
    branch3.addChild(branch5);
    branch3.addChild(branch6);

    // leaves
    branch2.addChild(new Tree());
    branch2.addChild(new Tree());
    branch4.addChild(new Tree());
    branch4.addChild(new Tree());
    branch5.addChild(new Tree());
    branch5.addChild(new Tree());
    branch6.addChild(new Tree());
    branch6.addChild(new Tree());

    // so that's eight leaves
    root.countLeaves().should.equal(8);
  });

});
