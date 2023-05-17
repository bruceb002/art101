// index.js - Learning how to process a sumbission form with a button
// Author: Bruce Bai
// Date: May 14, 2023

//Functions
function create_buttons() {
  $("h2").append("<br>");
  $("h2").append("<button>");
  $("button").html("Press");

  $("#one button").click(() => {
    $("#one .special").toggle();
  }); 

  $("#two button").click(() => {
    $("#two .special").toggle();
  }); 

  $("#three button").click(() => {
    $("#three .special").toggle();
  }); 

  $("#four button").click(() => {
    $("#four .special").toggle();
  }); 

}


function main() {
  console.log("Main function started.");
  $(document).ready(create_buttons);
  // the code that makes everything happen
}

  // let's get this party started
  main();