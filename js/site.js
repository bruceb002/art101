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

function link_color() {
  let links = document.getElementsByTagName("a");
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function(event) {
      links[i].classList.add("clicked");
    });
  }
}

function video_control() {
  var video = document.getElementById("myVideo");
  var but = document.getElementById("starter_button");

  video.volume = 0.2;

  but.addEventListener("click", function() {
    video.play();
    but.remove();
  }, { once: true });
}

function main() {
  console.log("Main function started.");
  video_control();
  img_slideShow();
  link_color();
}

// let's get this party started
main();

