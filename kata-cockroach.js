// Beginner Series #4 Cockroach
/* The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

For example:

cockroachSpeed(1.08) == 30
Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

function cockroachSpeed(s) {
  //Good Luck!
}

Test.describe("Basic Tests", function() {
  Test.assertEquals(cockroachSpeed(1.08), 30);
  Test.assertEquals(cockroachSpeed(1.09), 30);
  Test.assertEquals(cockroachSpeed(0), 0);
});

*/


function cockroachSpeed(s) {
    var answer = s / 0.036;
    return Math.floor(answer);
}

console.log(cockroachSpeed(1.09))