// index.js - purpose and description here
// Author: Bruce Bai
// Date: April 27, 2023

// Constants/Variables
myTransport = ["car", "bus"];

//was difficult to assign value to age
//solution: initialize age to null then reset value later
const myMainRide = {
  model: "Lamborghini",
  make: "Urus",
  color: "red",
  year: 2017,
  age: null
};

myMainRide.age = 2023 - myMainRide.year;

//output 
document.writeln("My Main Ride: <pre>", JSON.stringify(myMainRide, null, '\n'), "</pre>");

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
