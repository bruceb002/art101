// index.js - Learn how to write a javascript function to sort strings
// Author: Bruce Bai
// Date: May 2, 2023

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function sortString(param1) {
    // some code here
    result = "";
    container_arr = [];
    var l = param1.length;
    for(var i = 0; i < l; i++) {
        container_arr.push(param1.charAt(i));
        console.log(param1.charAt(i));
    }
    container_arr.sort();
    for(var j = 0; j < l; j++) {
        result += container_arr[j];
    }
    return result;

  }
  
  function main() {
    console.log("Main function started.");
    // the code that makes everything happen
    var userName = window.prompt("Hi. Please enter your name and we can fix it: ");
    document.writeln("\nHere is your fixed name:|", sortString(userName), "|\n");
  }
  
  // let's get this party started
  main();