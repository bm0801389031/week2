/*Description:

You get an array of numbers, 
return the sum of all of the 
positives ones.

Example [1,-4,7,12] => 
1 + 7 + 12 = 20

Note: if there is nothing to sum, 
the sum is default to 0.
FUNDAMENTALS, ARRAYS, NUMBERS */

/* set function to positiveSum with
argument/parameter of arr */

function positiveSum(arr) {
/*declare the sum value to zero, just
to start off*/
//this variable will incroment in value
//while the loop is being iterated
	let sum = 0;
/*declare the variable of i to zero,
pointing to the first value in the array
of numbers that need to be added. this 
number will incroment after every
loop, by one, pointing to every value
in the array starting at the first
value*/
	let i = 0;
/*loop of FOR, statement 1, i = 0 and is executed
(one time) before the execution of the code block.
Statement 1 sets a value to variable before the loop
starts (let i = 0). this points to the first value in the array.*/
/*Statement 2 defines the condition for the loop
to run or execute the code block (i must be less than
arr.length). i must be less, so that way it loops through
all the digits in the array, (1,2,3,4,5) and stops
at the last digit in the array*/
/*Statment 3 increases the value of i (i++) each time the
code block in the loop has been executed. it is incromented
after the code block is executed.... And in each incroment
pointing/looping through the next value in the array. in
this case it basically goes through each number of the array.
It increases in value so it will loop around the next number
in the array*/
	for(i = 0; i < arr.length; i++) {
/*if arr at the spot that i has landed is greater than 
zero. this line has to be true to execute the next line.
the line will execute*/
		if (arr[i] > 0) {
/*if arr at the spot that i has landed is greater than
zero. this line has to be true to execute the next line in
the loop, if it is not true, it will not add the value of 
that array point to the total sum*/
		sum += arr[i];
	    }
	}
//then return the total through the sum variable

	return sum;
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