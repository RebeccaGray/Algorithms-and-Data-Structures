Merge Sort
Implement a function that sorts an array of numbers using the “mergesort” algorithm.

Mergesort uses a divide-and-conquer strategy. It begins by treating the input list of length N as a set of N “sublists” of length 1, which are considered to be sorted. Adjacent sublists are then “merged” into sorted sublists of length 2, which are merged into sorted sublists of length 4, and so on, until only a single sorted list remains. (Note, if N is odd, an extra sublist of length 1 will be left
after the first merge, and so on.)

This can be implemented using either a recursive (“top-down”) or an iterative (“bottom-up”) approach.

Illustration of an iterative approach:

  1.Initial step: Input array is split into "sorted" sublists
     [4,7,4,3,9,1,2] -> [[4],[7],[4],[3],[9],[1],[2]]

  2.Merge step: Adjacent sublists are merged into sorted sublists
     [[4],[7],[4],[3],[9],[1],[2]] -> [[4,7],[3,4],[1,9],[2]]

  3.Repeat merge step:
     [[4,7],[3,4],[1,9],[2]] -> [[3,4,4,7], [1,2,9]]

  4.Repeat merge step:
     [[3,4,4,7], [1,2,9]] -> [[1,2,3,4,4,7,9]]

  5.Done! Return the sorted array:
     [1,2,3,4,4,7,9]
Illustration of a recursive approach:

  1.Split the input array in half
   [4, 7, 4, 3, 9, 1, 2] -> [4, 7, 4], [3, 9, 1, 2

  2.Both sides are sorted recursively:
   [4, 7, 4] -> [4, 4, 7]
   [3, 9, 1, 2] -> [1, 2, 3, 9]

  3.Both halves are merged:
   [4, 7, 4], [3, 9, 1, 2] -> [1, 2, 3, 4, 4, 7, 9]
Step 2 might seem a bit mystical - how do we sort both sides? The
simple answer is that we use mergesort! After all, mergesort sorts
arrays, right? We can test this on [4, 7, 4] by just following the
steps above but imagining that [4, 7, 4] is the whole array, which
is what happens when you call mergesort on it.

   1.Split the input array in half
     [4, 7, 4] -> [4], [7, 4]

   2.Both sides are sorted recursively:
    [4] -> [4]
    [7, 4] -> [4, 7]

   3.Both halves are merged:
   [4], [4, 7] -> [4, 4, 7]
I cheated again by going directly from [7, 4] to [4, 7], but that’s
really just:

  1.Split the input array in half
    [7, 4] -> [7], [4]

  2.Both sides are sorted recursively:
    [7] -> [7]
    [4] -> [4]

  3.Both halves are merged:
    [7], [4] -> [4, 7]
As you can see, all the work actually gets done in step 3, the merge
step. Everything else is just splitting and recursing.

Mergesort is an optimized sorting algorithm which is a common choice to implement sort
methods in standard libraries as an alternative to quicksort or heapsort. (For example,
Firefox’s Array.sort method uses a tuned mergesort; the WebKit engine used by Chrome and
Safari uses quicksort for numeric arrays, and mergesort for arrays of strings.)

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
var should = chai.should();

describe('mergeSort', function() {
  it('should exist', function(){
    should.exist(mergeSort);
  });

  it('should be a function', function() {
    mergeSort.should.be.a.Function;
  });

  it('should return an array', function() {
    var result = mergeSort([1]);
    should.exist(result);
    result.should.be.an.instanceof(Array);
  });

  it('should return an array with a single number', function(){
    var result = mergeSort([1]);
    result.should.be.eql([1]);
  });

  it('should sort a short array of integers', function(){
    var result = mergeSort([Number.MAX_SAFE_INTEGER,8,7,3,6,9,2,4,5,1]);
    result.should.be.eql([1,2,3,4,5,6,7,8,9,Number.MAX_SAFE_INTEGER]);
  });

  it('should handle repeated elements', function(){
    var result = mergeSort([8,7,3,3,9,2,4,5,1]);
    result.should.be.eql([1,2,3,3,4,5,7,8,9]);
  });

  it('should not use Array.sort', function(){
    var _sort = Array.prototype.sort;
    Object.defineProperty(Array.prototype, 'sort', {enumerable: false,
      value: function () {
        should.fail(null, null, 'Array.sort called! That\'s cheating.',null);
      }
    });
    var result = mergeSort([8,7,3,6,9,2,4,5,1]);
    Object.defineProperty(Array.prototype, 'sort', {enumerable: false,
      value: _sort
    });
  });

  it('should sort an enormous array of random integers', function(){
    var input = [];
    var sorted;
    var n = 100000;
    for (var i = 0; i < n; i++) {
      var number = Math.floor(Math.random() * n);
      input.push(number);
    }
    sorted = input.sort(function (a,b) {return a - b;}); // sort numerically, not lexicographically
    var result = mergeSort(input);

    // using .eql can cause an n-line error message to print, so we do it by hand
    for (var i = 0; i < n; i++) {
      result[i].should.equal(sorted[i]);
    }
  });
});Merge Sort
Implement a function that sorts an array of numbers using the “mergesort” algorithm.

Mergesort uses a divide-and-conquer strategy. It begins by treating the input list of length N as a set of N “sublists” of length 1, which are considered to be sorted. Adjacent sublists are then “merged” into sorted sublists of length 2, which are merged into sorted sublists of length 4, and so on, until only a single sorted list remains. (Note, if N is odd, an extra sublist of length 1 will be left
after the first merge, and so on.)

This can be implemented using either a recursive (“top-down”) or an iterative (“bottom-up”) approach.

Illustration of an iterative approach:

  1.Initial step: Input array is split into "sorted" sublists
     [4,7,4,3,9,1,2] -> [[4],[7],[4],[3],[9],[1],[2]]

  2.Merge step: Adjacent sublists are merged into sorted sublists
     [[4],[7],[4],[3],[9],[1],[2]] -> [[4,7],[3,4],[1,9],[2]]

  3.Repeat merge step:
     [[4,7],[3,4],[1,9],[2]] -> [[3,4,4,7], [1,2,9]]

  4.Repeat merge step:
     [[3,4,4,7], [1,2,9]] -> [[1,2,3,4,4,7,9]]

  5.Done! Return the sorted array:
     [1,2,3,4,4,7,9]
Illustration of a recursive approach:

  1.Split the input array in half
   [4, 7, 4, 3, 9, 1, 2] -> [4, 7, 4], [3, 9, 1, 2

  2.Both sides are sorted recursively:
   [4, 7, 4] -> [4, 4, 7]
   [3, 9, 1, 2] -> [1, 2, 3, 9]

  3.Both halves are merged:
   [4, 7, 4], [3, 9, 1, 2] -> [1, 2, 3, 4, 4, 7, 9]
Step 2 might seem a bit mystical - how do we sort both sides? The
simple answer is that we use mergesort! After all, mergesort sorts
arrays, right? We can test this on [4, 7, 4] by just following the
steps above but imagining that [4, 7, 4] is the whole array, which
is what happens when you call mergesort on it.

   1.Split the input array in half
     [4, 7, 4] -> [4], [7, 4]

   2.Both sides are sorted recursively:
    [4] -> [4]
    [7, 4] -> [4, 7]

   3.Both halves are merged:
   [4], [4, 7] -> [4, 4, 7]
I cheated again by going directly from [7, 4] to [4, 7], but that’s
really just:

  1.Split the input array in half
    [7, 4] -> [7], [4]

  2.Both sides are sorted recursively:
    [7] -> [7]
    [4] -> [4]

  3.Both halves are merged:
    [7], [4] -> [4, 7]
As you can see, all the work actually gets done in step 3, the merge
step. Everything else is just splitting and recursing.

Mergesort is an optimized sorting algorithm which is a common choice to implement sort
methods in standard libraries as an alternative to quicksort or heapsort. (For example,
Firefox’s Array.sort method uses a tuned mergesort; the WebKit engine used by Chrome and
Safari uses quicksort for numeric arrays, and mergesort for arrays of strings.)

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
var should = chai.should();

describe('mergeSort', function() {
  it('should exist', function(){
    should.exist(mergeSort);
  });

  it('should be a function', function() {
    mergeSort.should.be.a.Function;
  });

  it('should return an array', function() {
    var result = mergeSort([1]);
    should.exist(result);
    result.should.be.an.instanceof(Array);
  });

  it('should return an array with a single number', function(){
    var result = mergeSort([1]);
    result.should.be.eql([1]);
  });

  it('should sort a short array of integers', function(){
    var result = mergeSort([Number.MAX_SAFE_INTEGER,8,7,3,6,9,2,4,5,1]);
    result.should.be.eql([1,2,3,4,5,6,7,8,9,Number.MAX_SAFE_INTEGER]);
  });

  it('should handle repeated elements', function(){
    var result = mergeSort([8,7,3,3,9,2,4,5,1]);
    result.should.be.eql([1,2,3,3,4,5,7,8,9]);
  });

  it('should not use Array.sort', function(){
    var _sort = Array.prototype.sort;
    Object.defineProperty(Array.prototype, 'sort', {enumerable: false,
      value: function () {
        should.fail(null, null, 'Array.sort called! That\'s cheating.',null);
      }
    });
    var result = mergeSort([8,7,3,6,9,2,4,5,1]);
    Object.defineProperty(Array.prototype, 'sort', {enumerable: false,
      value: _sort
    });
  });

  it('should sort an enormous array of random integers', function(){
    var input = [];
    var sorted;
    var n = 100000;
    for (var i = 0; i < n; i++) {
      var number = Math.floor(Math.random() * n);
      input.push(number);
    }
    sorted = input.sort(function (a,b) {return a - b;}); // sort numerically, not lexicographically
    var result = mergeSort(input);

    // using .eql can cause an n-line error message to print, so we do it by hand
    for (var i = 0; i < n; i++) {
      result[i].should.equal(sorted[i]);
    }
  });
});
