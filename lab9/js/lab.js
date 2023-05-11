// index.js - Playing around with JS
// Author: Bruce Bai
// Date: May 10, 2023

//Functions

//iterates through the colors of the rainbow upon every click and changes each box
//to that new color
function extra_credit() {
    var color_list = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
    var color_len = color_list.length;

    var every_box = document.getElementsByClassName("minor-section");
    for(let i = 0; i < every_box.length; i++) {
        var ind = color_list.indexOf(every_box[i].style.backgroundColor);
        every_box[i].style.backgroundColor = color_list[(ind + 1) % color_len];
    }
}

//creates two new elements and appends them to tag with ID = "output"
//also changes css of multiple different elements
function main() {
    console.log("Main function started.");
    var outputEl = document.getElementById("output");
    var new1El = document.createElement("p");
    new1El.innerHTML = "Hi, this is new1El text.\n";

    var new2El = document.createElement("p2");
    new2El.innerHTML = "Hi, this is new2El text.\n";

    outputEl.appendChild(new1El);
    outputEl.appendChild(new2El);

    document.getElementById("content").style.backgroundColor = "indigo";
    document.getElementById("challenges").style.backgroundColor = "red";
    document.getElementById("problems").style.backgroundColor = "orange";
    document.getElementById("reflections").style.backgroundColor = "yellow";
    document.getElementById("results").style.backgroundColor = "green";
    document.getElementById("output").style.backgroundColor = "cyan";
    document.getElementById("output").style.color = "black";

    var every_box = document.getElementsByClassName("minor-section");
    for(let i = 0; i < every_box.length; i++) {
        every_box[i].addEventListener("click", extra_credit);
    }

}
  
  // let's get this party started
  main();