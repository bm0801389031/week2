/*Description:

You get an array of numbers, 
return the sum of all of the 
positives ones.

Example [1,-4,7,12] => 
1 + 7 + 12 = 20

Note: if there is nothing to sum, 
the sum is default to 0.
FUNDAMENTALS, ARRAYS, NUMBERS */

function positiveSum(arr) {
  
}


//test 

Test.assertEquals(positiveSum([1,2,3,4,5]),15);
Test.assertEquals(positiveSum([1,-2,3,4,5]),13);
Test.assertEquals(positiveSum([]),0);
Test.assertEquals(positiveSum([-1,-2,-3,-4,-5]),0);
Test.assertEquals(positiveSum([-1,2,3,4,-5]),9);
function rand(l) {
  var rand = [];
  while(rand.length < l) {
    rand.push((Math.round(Math.random()) * 2 - 1) * (Math.floor((Math.random() * 100) + 1)));
  }
  return rand;
}
var r = rand(8);
Test.assertEquals(positiveSum(r),(r.filter(function(e){return e>0;}).length > 0 ? r.filter(function(e){return e>0;}) : [0]).reduce(function(a,b) {return a+b;}));
r = rand(15);
Test.assertEquals(positiveSum(r),(r.filter(function(e){return e>0;}).length > 0 ? r.filter(function(e){return e>0;}) : [0]).reduce(function(a,b) {return a+b;}));
r = rand(60);
Test.assertEquals(positiveSum(r),(r.filter(function(e){return e>0;}).length > 0 ? r.filter(function(e){return e>0;}) : [0]).reduce(function(a,b) {return a+b;}));
r = rand(120);
Test.assertEquals(positiveSum(r),(r.filter(function(e){return e>0;}).length > 0 ? r.filter(function(e){return e>0;}) : [0]).reduce(function(a,b) {return a+b;}));