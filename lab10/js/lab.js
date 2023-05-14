// index.js - Learning how to process a sumbission form with a button
// Author: Bruce Bai
// Date: May 14, 2023

//Functions

//sortString: sorts a string in ascending order (Borrowed from my Lab 7)
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

//obtains value from text field, processes value, then outputs processed result
function output_sorted() {
  var name = document.getElementById("user-input").value;
  var sorted_name = sortString(name);
  document.getElementById("output").innerHTML = sorted_name;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
  document.getElementById("my-button").addEventListener("click", output_sorted);
}

  // let's get this party started
  main();