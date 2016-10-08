Hash Table
Finish this implementation of a Hash Table. It should have the methods insert(), retrieve(), and remove(). Your hash table need not resize itself, but shall handle collisions.

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
var should = chai.should();

describe('makeHashTable', function(){
  it('should exist', function(){
    should.exist(makeHashTable);
  });
  it('should be a function', function(){
    makeHashTable.should.be.a.Function;
  });
  it('should return a hash table', function(){
    var hashTable = makeHashTable();
    should.exist(hashTable);
    hashTable.should.be.an.Object;
  });
  it('should return different instances of hash tables each time', function(){
    var hashTable1 = makeHashTable();
    should.exist(hashTable1);

    var hashTable2 = makeHashTable();
    should.exist(hashTable2);
    hashTable1.should.not.be.equal(hashTable2);
    // `makehashTable()` should create a new hash table object instance
    // everytime but it's not!
  });
});

describe('hashTable', function(){
  describe('#insert', function(){
    it('should exist as a method of hashtable instances', function(){
      var hashTable = makeHashTable();
      should.exist(hashTable.insert);
    });
    it('should take exactly two arguments. a key and a value', function(){
      var hashTable = makeHashTable();
      hashTable.insert.length.should.equal(2);
      /**
        a hashtable gets its awesomeness from associating data. it wouldn't be
        very useful if you just gave it data without any association.
        ie, bad hash table:
        you: hey hashtable, can you please remember "sarah" (key)?
        hashtable: um... okay?
        ... sometime later...
        you: hey hastable, when's "sarah"'s (key) birthday?
        hashtable: "sarah"
        you: Um.. this is awkward...
        ie, good hashtable:
        you: hey hashtable, please remember that "sarah"s (key) birthday is
        "January 23rd" (value)
        hashtable: okay, friend. you got it!
        ... sometime later ...
        you: hey hashtable, when's "sarah"'s (key) birthday?
        hashtable: "January 23rd"
        you: thanks hashtable, you're awesome!
        hashtable: i know
      */
    });
    it('should not throw an error with valid input', function(){
      (function(){
        var hashTable = makeHashTable();
        hashTable.insert('keanu reeves best movie', 'The Matrix');
        // calling insert should not throw an error
      }).should.not.throw();
    });
    it('should allow keys to be reinserted with new values', function(){
      var hashTable = makeHashTable();
      (function(){
        hashTable.insert('keanu reeves best movie', 'Bill & Ted\'s Excellent Adventure');
        hashTable.insert('keanu reeves best movie', 'The Matrix');
      }).should.not.throw();
    });
  });

  describe('#retrieve', function(){
    it('should be a method of hashTable instances', function(){
      var hashTable = makeHashTable();
      should.exist(hashTable.retrieve);
    })
    it('should be a function', function(){
      var hashTable = makeHashTable();
      hashTable.retrieve.should.be.a.Function;
    });
    it('should take exactly one argument', function(){
      var hashTable = makeHashTable();
      // the retrieve function should only take a single `key` argument
      hashTable.retrieve.length.should.equal(1);
    })
    it('should return values previously inserted', function(){
      var hashTable = makeHashTable();
      hashTable.insert('William Shatner\'s most well known role', 'Captain Kirk');
      var value = hashTable.retrieve('William Shatner\'s most well known role');
      should.exist(value);
      value.should.be.equal('Captain Kirk');
    });
    it('should return undefined for unknown keys', function(){
      var hashTable = makeHashTable();
      should.not.exist(hashTable.retrieve('echo?'));
    });
  });

  describe('#insert', function(){
    it('should allow values to be updated', function(){
      var hashTable = makeHashTable();
      hashTable.insert('Tarantino\'s best movie', 'Jackie Brown');
      hashTable.insert('Tarantino\'s best movie', 'Pulp Fiction');
      var value = hashTable.retrieve('Tarantino\'s best movie');
      should.exist(value);
      value.should.be.equal('Pulp Fiction');
    });
  });

  describe('#remove', function(){
    it('should exist as a method of the hashTable instance', function(){
      var hashTable = makeHashTable();
      should.exist(hashTable.remove);
    });
    it('should be a function', function(){
      var hashTable = makeHashTable();
      hashTable.remove.should.be.a.Function;
    });
    it('should take exactly one argument', function(){
      var hashTable = makeHashTable();
      // the remove function should only take a single `key` argument
      hashTable.remove.length.should.equal(1);
    });
    it('should allow values to be removed', function(){
      var hashTable = makeHashTable();
      hashTable.insert('Spielberg\'s best movie', 'Jaws');
      hashTable.remove('Spielberg\'s best movie');
      var value = hashTable.retrieve('Spielberg\'s best movie');
      should.not.exist(value);
    });
  });

  describe('#insert', function(){
    it('should handle collisions', function(){
      var hashTable = makeHashTable();
      var n = 1010;
      for(var i = 0; i < n; i++){
        hashTable.insert('userid:' + i, 'Jamie Hyneman #' + i);
      }
      for (var i = 0; i < n; i++) {
        hashTable.retrieve('userid:' + i).should.equal('Jamie Hyneman #' + i);
      }
    });
  });
});
