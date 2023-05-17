// index.js - Learning how to process a sumbission form with a button
// Author: Bruce Bai
// Date: May 14, 2023

//Functions
function create_buttons() {
  //  1) find section
  var sect = $("h2");

  //  2) create button
  var buttonEle = $("<button>");

  //  3) Give text label
  buttonEle.text("Press");

  //append/add appropriate things to section
  sect.append("<br>");
  sect.append(buttonEle);

  $("#one button").click(() => {
    $("#one .special").toggle();
    $("#two button").toggleClass('original changed');
  }); 

  $("#two button").click(() => {
    $("#two .special").toggle();
    $("#three button").toggleClass('original changed');
  }); 

  $("#three button").click(() => {
    $("#three .special").toggle();
    $("#four button").toggleClass('original changed');
  }); 

  $("#four button").click(() => {
    $("#four .special").toggle();
    $("#one button").toggleClass('original changed');
  }); 

}


function main() {
  console.log("Main function started.");
  $(document).ready(create_buttons);
  // the code that makes everything happen
}

  // let's get this party started
  main();