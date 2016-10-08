Tree
Someone wrote a tree implementation, but they forgot to finish writing the definitions for addChild and contains.

Help this person finish their tree by adding in the missing code for these methods.

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
var should = chai.should();

describe("treeMaker", function() {
  it('should exist', function(){
    should.exist(treeMaker);
  });

  it('should be a function', function(){
    treeMaker.should.be.a.Function;
  });

  it('should be implemented in the prototypal style', function(){
    //Are you using Object.create()..?
    var tree = treeMaker();
    treeMaker.methods.addChild.should.be.a.Function;
    treeMaker.methods.contains.should.be.a.Function;
    tree.addChild.should.be.a.Function;
    tree.contains.should.be.a.Function;
  });


  it("should add children to the tree", function() {
    var tree = treeMaker();
    tree.addChild(5);
    tree.children[0].value.should.equal(5);
  });

  it("should return true for a value that the tree contains", function(){
    var tree = treeMaker();
    tree.addChild(5);
    tree.contains(5).should.equal(true);
  });

  it("should return false for a value that was not added", function(){
    var tree = treeMaker();
    tree.addChild(5);
    tree.contains(6).should.equal(false);
  });

  it("should be able to add children to a tree's child", function() {
    //Each child should itself be an instance of a tree.
    var tree = treeMaker();
    tree.addChild(5);
    tree.children[0].addChild(6);
    tree.children[0].children[0].value.should.equal(6);
  });

  it("should correctly detect nested children", function(){
    var tree = treeMaker();
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    tree.contains(7).should.be.true;
    tree.contains(8).should.be.true;
  });
});
