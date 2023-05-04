// index.js - Learn how to write a javascript function to sort strings
// Author: Bruce Bai
// Date: May 2, 2023


//sortString: sorts a string in ascending order
//param1: the string to be parsed and ordered
function sortString(param1) {
    result = "";
    container_arr = [];
    var l = param1.length;

    //parsing through each character in the string and adding character to array
    //omit spaces from the get-go
    for(var i = 0; i < l; i++) {
        container_arr.push(param1.charAt(i));
    }

    //sort array
    container_arr.sort();

    //add elements of array in order to resulting string then return result
    for(var j = 0; j < l; j++) {
        result += container_arr[j];
    }
    return result;

  }
  
  function main() {
    console.log("Main function started.");
    // the code that makes everything happen
    var userName = window.prompt("Hi. Please enter your name and we can fix it: ");
    document.writeln("\nHere is your fixed name:\"", sortString(userName), "\"\n");
  }
  
  // let's get this party started
  main();