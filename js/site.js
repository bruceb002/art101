// index.js - purpose and description here
// Author: Your Name
// Date:

// Constants/variables
let slideIndex = 0;
let i = 0;
// Functions

// Credits to W3School for entire code
// This function increments/resets the count of the images and dots as nessecary
//in order to transition between them

//search: trigger event onload pure javascipt
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

function startSlideshow() {
  console.log("Starting slideshow.");
  // the code that makes the slideshow happen
  img_slideShow();
}

function main() {
  console.log("Main function started.");
  document.addEventListener("DOMContentLoaded", startSlideshow);
}

// let's get this party started
main();

