// index.js - purpose and description here
// Author: Your Name
// Date:

// Constants/variables
let slideIndex = 0;
let i = 0;
// Functions

// This function increments/resets the count of the images and dots as nessecary
//in order to transition between them
function img_slideShow() {
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
  setTimeout(img_slideShow, 3000); // Change image every 3 seconds
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
  img_slideShow();
}

// let's get this party started
main();
