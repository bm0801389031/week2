/*Clock shows h hours, m minutes and s seconds after
 midnight. Your task is to write a function which returns
 the time since midnight in milliseconds.
 Note! The input is a Real number (actual type is
 language dependent) and is >= 0. The result should
 be an Integer.*/

/*set regular function to past with parameter/argument
of h, m, s*/
function past(h, m, s){
/*return h times 3600000 plus m times 60000 plus s times
1000*/
	return h * 3600000 + m * 60000 + s * 1000;
}



//######Security Tests######
if(Math.random == undefined)
  Test.assertEquals(false,true,'Math Object must contain random Method!')
if(Math.floor == undefined)
  Test.assertEquals(false,true,'Math Object must contain floor Method!')
if(Math.random.toString().indexOf('[native code]')==-1||Math.random.toString().length!=35)
  Test.assertEquals(false,true,'Math.random method must be Native!')
if(Math.floor.toString().indexOf('[native code]')==-1||Math.floor.toString().length!=34)
  Test.assertEquals(false,true,'Math.floor method must be Native!')
//######Security Tests######

Test.describe("Fixed Tests", _ => {
  Test.it("Tests", __ => {
    Test.assertEquals(past(0,1,1),61000)
    Test.assertEquals(past(1,1,1),3661000)
    Test.assertEquals(past(0,0,0),0)
    Test.assertEquals(past(1,0,1),3601000)
    Test.assertEquals(past(1,0,0),3600000)
  });
});

Test.describe("Random Tests", _ => {
  Test.it("Tests", __ => {
    var tests = genTests();
    for(var test of tests)
      Test.assertEquals(past(test.h,test.m,test.s),test.ans);
  });
});

function genTests(){
  var tests = [];
  
  let ans = (h,m,s) => 1000 * (h * 3600 + m * 60 + s);
  
  for(var i=0;i<100;i++){
    var test = {};
    
    test.h = Math.floor(Math.random()*24);
    test.m = Math.floor(Math.random()*60);
    test.s = Math.floor(Math.random()*60);
    
    test.ans = ans(test.h,test.m,test.s);
    
    tests.push(test);
  }
  
  
  return tests;
}