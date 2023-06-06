// index.js - Get to discover API's with JSON formatting. Also fixing CORS issue once and for all.
// Author: Bruce Bai
// Date: June 5, 2023

function get_comic_data(link) {
  $.ajax({
    url: link,
    method: 'GET',
    dataType: 'json',
    success: function(data) {

      //1 --> 2785 (inclusive)
      comicObj = data;
      
      // Process the data and add it to your webpage
      $('#output').html('<h3>' + comicObj.title + '</h3>');
      $('#output').append('<img src="' + comicObj.img + '" alt="' + comicObj.alt + '" title="' + comicObj.alt + '">');
    },
    error: function(xhr, status, error) {
      console.error('Error:', error);
    }
  });
}


function main() {
  console.log("Main function started.");
  // initialize variables
  var num = 1;
  var link = "";

  //deal with previous button
  var prev_button = document.getElementsByClassName("myButton")[0];
  prev_button.addEventListener("click", function() {
    if(num == 1) {
      $("#special").html("There is no previous comic.");
      return;
    }
    $("#special").html("");
    num -= 1;
    link = "https://xkcd.com/" + JSON.stringify(num) + '/info.0.json';
    get_comic_data(link);
    
  })

  //deal with next button
  var next_button = document.getElementsByClassName("myButton")[1];
  next_button.addEventListener("click", function() {
    if(num == 2785) {
      $("#special").html("There is no next comic.");
      return;
    }
    $("#special").html("");
    num += 1;
    link = "https://xkcd.com/" + JSON.stringify(num) + '/info.0.json';
    get_comic_data(link);
  })
  
}

  // let's get this party started
  main();