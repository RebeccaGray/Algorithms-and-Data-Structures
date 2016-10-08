Linked List Cycles
Write a function that returns true if a linked list contains a cycle, or false if it terminates somewhere.

Explanation:

Generally, we assume that a linked list will terminate in a null next pointer, as follows:

 A -> B -> C -> D -> E -> null
A ‘cycle’ in a linked list is when traversing the list would result in visiting the same nodes over and over.

This is caused by pointing a node in the list to another node that already appeared earlier in the list. Example:

 A -> B -> C
      ^    |
      |    v
      E <- D
'Constraint 1: Do this in linear time'

'Constraint 2: Do this in constant space'

'Constraint 3: Do not mutate the original nodes in any way'

You've got Helpers! (click to view code)
Node(val)
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
var should = chai.should();

describe('hasCycle', function(){
  it('should be exist', function(){
    should.exist(hasCycle);
  });

  it('should be a function', function(){
    hasCycle.should.be.a.Function;
  });

  it('should take at least one argument', function(){
    hasCycle.length.should.be.above(0);
  });

  it('should return something', function() {
    var result = hasCycle(Node('A'));
    should.exist(result);
  });

  it('should return a boolean', function() {
    var result = hasCycle(Node('A'));
    result.should.be.a.Boolean;
  });

  it('should return false for a linked list with only 1 node that points to null', function(){
    // aka, A -> null
    var nodeA = Node('A');
    hasCycle(nodeA).should.be.false;
  });

  it('should return true for a linked list with only 1 node that points to itself', function(){
    // aka, A -> A -> A -> etc...
    var nodeA = Node('A');
    nodeA.next = nodeA;
    hasCycle(nodeA).should.be.true;
  });

  it('should return false for a non-cyclical linked list of size 2', function(){
    // aka, A -> B -> null
    var nodeA = Node('A');
    var nodeB = nodeA.next = Node('B');
    hasCycle(nodeA).should.be.false;
  });

  it('should return true for a cyclical linked list of size 2', function(){
    // aka, A -> B -> A -> B -> etc...
    var nodeA = Node('A');
    var nodeB = nodeA.next = Node('B');
    nodeB.next = nodeA;
    hasCycle(nodeA).should.be.true;
  });

  it('should return false for a non-cyclical linked list of size 3', function(){
    // aka, A -> B -> C -> null
    var nodeA = Node('A');
    var nodeB = nodeA.next = Node('B');
    var nodeC = nodeB.next = Node('C');
    hasCycle(nodeA).should.be.false;
  });

  it('should return true for a cyclical linked list of size 3', function(){
    // aka, A -> B -> C -> A -> B -> etc...
    var nodeA = Node('A');
    var nodeB = nodeA.next = Node('B');
    var nodeC = nodeB.next = Node('C');
    nodeC.next = nodeA;
    hasCycle(nodeA).should.be.true;
  });

  it('should return false for a medium sized non-cyclical linked list', function(){
    // aka, start -> tail0 -> tail1 -> ... -> tail8 -> null
    var startNode = Node('start');
    var currentNode = startNode;
    for(var i = 0; i < 9; i++){
      currentNode.next = Node('tail' + i);
      currentNode = currentNode.next;
    }
    hasCycle(startNode).should.be.false;
  });

  it('should return true for a medium sized cyclical linked list', function(){
    // aka, start -> tail0 -> tail1 -> ... -> tail8 -> start
    var startNode = Node('start');
    var currentNode = startNode;
    for(var i = 0; i < 9; i++){
      currentNode.next = Node('tail' + i);
      currentNode = currentNode.next;
    }
    // have the tail of the linked list point to the start
    currentNode.next = startNode;
    hasCycle(startNode).should.be.true;
  });

  it('should return false for a large sized non-cyclical linked list', function(){
    // aka, start -> tail0 -> tail1 -> ... -> tail99998 -> tail99999 -> null
    var startNode = Node('start');
    var currentNode = startNode;
    // one. million nodes!! wahahahaha
    for(var i = 0; i < 999999; i++){
      currentNode.next = Node('tail' + i);
      currentNode = currentNode.next;
    }
    hasCycle(startNode).should.be.false;
  });

  it('should return true for a large sized cyclical linked list', function(){
    // aka, start -> tail0 -> tail1 -> ... -> tail99998 -> tail99999 -> start
    var startNode = Node('start');
    var currentNode = startNode;
    // one. million nodes!! wahahahaha
    for(var i = 0; i < 999999; i++){
      currentNode.next = Node('tail' + i);
      currentNode = currentNode.next;
    }
    // have the tail of the linked list point to the start
    currentNode.next = startNode;
    hasCycle(startNode).should.be.true;
  });

  it('should do this in linear time', function(){
    var startTime, endTime, randoPointer;
    var startNode = Node('start');
    var currentNode = startNode;

    for(var i = 0; i < 999999; i++){
      currentNode.next = Node('tail' + i);
      currentNode = currentNode.next;
      //grab random node to later point the back to
      if(i == 54643){randoPointer = currentNode;}
    }

    currentNode.next = randoPointer;

    startTime = new Date();
    hasCycle(startNode).should.be.true;
    endTime = new Date();

    (endTime - startTime).should.be.below(50);
  });

});
