// index.js - purpose and description here
// Author: Your Name
// Date:

// Constants/variables
let slideIndex = 0;
let i = 0;
// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction() {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }    
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(myFunction, 3000); // Change image every 3 seconds
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
  myFunction();
}

// let's get this party started
main();
