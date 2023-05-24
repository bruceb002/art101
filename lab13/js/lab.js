// index.js - Playing around with loops
// Author: Bruce Bai
// Date: May 24, 2023

function FizzBuzzBoom() {
  var res = "";

  for(var i = 1; i <= 200; i++) {
    res += i.toString() + ": ";
    if(i % 3 == 0) {
      res += "Fizz";
    }
    if(i % 5 == 0) {
      res += "Buzz";
    }
    if(i % 7 == 0) {
      res += "Boom";
    }
    res += "<br>";
  }
  $("#output").html(res); // fixed

}


function main() {
  console.log("Main function started.");
  // the code that makes everything happen
  FizzBuzzBoom();
}

  // let's get this party started
  main();