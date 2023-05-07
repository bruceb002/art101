// index.js - Playing around with math and printing out arrays in JS
// Author: Bruce Bai
// Date: May 7, 2023

//Simply adds one to element
function addit(x) {
    var results = x + 1;
    return results;
}

//Prints out array, altered array from callback funct, and altered array from anon funct
function main() {
    console.log("Main function started.");

    //takes care of normal array
    var nums = [1,57,298,40];
    const nums_out = JSON.stringify(nums, null, " ");
    
    //takes care of callback altered array
    var new_arr = nums.map(addit);
    const new_arr_out = JSON.stringify(new_arr, null, " ")

    //takes care of anon funct altered array
    var final_arr = nums.map(function(x) {
        var results = x * x;
        return results;
    });
    const final_arr_out = JSON.stringify(final_arr, null, " ");

    //newline constant
    document.getElementById("newline").innerHTML = "\n\n";

    //outputs
    document.getElementById("arr").innerHTML = nums_out;
    console.log("This is my array: ", nums_out);

    document.getElementById("arr2").innerHTML = new_arr_out;
    console.log("This is the altered array with callback: ", new_arr_out);


    document.getElementById("arr3").innerHTML = final_arr_out;
    console.log("This is the altered array with anon funct: ", final_arr_out);
}
  
  // let's get this party started
  main();