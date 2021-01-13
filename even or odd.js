/*Create a function (or write a script in Shell) that takes
 an integer as an argument and returns "Even" 
 for even numbers or "Odd" for odd numbers.*/


/*set regular function to even or odd with a
parameter/argument of s*/
function even_or_odd(number) {
/*if number with modulus (devision remainder)
devided by 2 is equal 0*/
	if (number%2 == 0) {
/*it will return even cause the first line applied, if what
ever value number was, devided by 2 gave a value of 0
remainder*/
		return "Even";
/*if the previous did not return a zero, the next line will
apply, for example if we got a remainder of 1.. example
number = 3 devided by 2 would give r = 1 "not 0"*/
	} else {
		return "Odd";
	}
}

//sample test
/*Test.assertEquals(even_or_odd(2), "Even")
Test.assertEquals(even_or_odd(0), "Even")
Test.assertEquals(even_or_odd(7), "Odd")
Test.assertEquals(even_or_odd(1), "Odd")*/