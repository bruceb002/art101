// index.js - Introduction to objects and functions
// Author: Bruce Bai
// Date: April 27, 2023

// Constants/Variables
myTransport = ["car", "bus"];

const myMainRide = {
  model: "Lamborghini",
  make: "Urus",
  color: "red",
  year: 2017,
  age: function() {
    return 2023 - this.year;
  }
};

//Credit: ChatGPT
//Reasoning: 
//JSON.stringify() might serialize age's numerical value unpredictably,
//so we should explicitly convert the age to a string so it's predictable
const replacer = function(key, value) {
  if (key === "age") {
    return myMainRide.age().toString();
  } else {
    return value;
  }
};

//output 
//Needed to replace 'null' with 'replacer' to specify the serialization of all the values
//(which would be the same as initially for every other property other than age)
document.writeln("My Main Ride: <pre>", JSON.stringify(myMainRide, replacer, '\n'), "</pre>");

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
