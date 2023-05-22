// index.js - Implementing the sorting hats from Harry Potter
// Author: Bruce Bai
// Date: May 21, 2023

//sorts person based on name length
function sortingHat(name) {
  var length = name.length;
  var remainder = length % 4;
  var assignment = "";

  if(remainder == 0) {
    assignment = "Gryffindor";
  } else if(remainder == 1) {
    assignment = "Ravenclaw";
  }else if(remainder == 2) {
    assignment =  "Slytherin";
  } else {
    assignment = "Hufflepuff";
  }
  
  return assignment;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
  var field = document.getElementById("input");
  field.addEventListener("click", () => {
    field.value = "";
  }, { once: true });

  var button = document.getElementById("button");
  button.addEventListener("click", () => {
    var username = field.value;
    var house = sortingHat(username);
    let msg_sect = document.createElement("p");
    msg_sect.innerHTML = username + ", " + "the Sorting Hat has sorted you into " + house + ".";
    document.getElementById("output").append(msg_sect);
  });
}

  // let's get this party started
  main();