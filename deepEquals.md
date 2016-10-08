Deep Equality
Write a function that, given two objects, returns whether or not the two are deeply equivalent–meaning the structure of the two objects is the same, and so is the structure of each of their corresponding descendants.

DO NOT use JSON.stringify.

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
var should = chai.should();

describe('deepEquals()', function(){

  it('should exist', function(){
    should.exist(deepEquals);
  });
  it('should be a function', function(){
    deepEquals.should.be.a.Function;
  });
  it('should take at least two arguments', function(){
    deepEquals.length.should.be.above(1);
  });
  it('should return a result', function(){
    var result = deepEquals({}, {});
    should.exist(result);
  });
  it('should return a boolean', function(){
    deepEquals({}, {}).should.be.a.Boolean;
  });
  it('should return true for two empty objects', function(){
    deepEquals({}, {}).should.be.true;
  });
  it('distinguishes between objects and arrays', function() {
    var a = { foo: [2, { bar: {}}]}
    var b = { foo: [2, { bar: []}]}
    deepEquals(a,b).should.be.false;
  });
  it('should use deep equality', function(){
    var a = { foo: 1 };
    var b = { foo: '1' };
    deepEquals(a,b).should.be.false;
  });
  it('should return true for two objects with the same keys and values', function(){
    var a = { foo: 'bar' };
    var b = { foo: 'bar' };
    deepEquals(a, b).should.be.true;
  });
  it('should return false for two objects with the same keys and but different values', function(){
    var a = { foo: 'bar' };
    var b = { foo: 'pow' };
    deepEquals(a, b).should.be.false;
  });
  it('should return false for two objects with different number of keys', function(){
    var a = { foo: 'bar' };
    var b = { foo: 'bar', biz: 'baz' };
    deepEquals(a, b).should.be.false;
  });
  it('should return false for two objects with different number of keys', function(){
    var a = { foo: 'bar', biz: 'baz' };
    var b = { foo:'bar' };
    deepEquals(a, b).should.be.false;
  });
  it('should return true for similar nested object properties', function(){
    var a = { foo: 1, b: { c: 3 } };
    var b = { foo: 1, b: { c: 3 } };
    deepEquals(a,b).should.be.true;
  });
  it('should return false for dissimilar nested object properties', function(){
    var a = { foo: 1, b: { c: 3 } };
    var b = { foo: 1, b: { c:'potato' } };
    deepEquals(a,b).should.be.false;
  });
  it('should return false for dissimilar nested object properties', function(){
    var a = { foo: 1, b: { c: 'potato'} };
    var b = { foo: 1, b: { c: 3 } };
    deepEquals(a,b).should.be.false;
  });
  it('should return true for similar excessively nested object properties', function(){
    var a = { foo: 1, b: { c: { d: { e: 'potato' } } } };
    var b = { foo: 1, b: { c: { d: { e: 'potato' } } } };
    deepEquals(a,b).should.be.true;
  });
  it('should return true for similar excessively nested object properties', function(){
    var a = { b: { c: { d: { e: 'potato' } } }, foo: 1 };
    var b = { foo: 1, b: { c: { d: { e: 'potato' } } } };
    deepEquals(a,b).should.be.true;
  });
});
