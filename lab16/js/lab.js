// index.js - Get to discover API's with JSON formatting. Also fixing CORS issue once and for all.
// Author: Bruce Bai
// Date: June 5, 2023

function get_comic_data() {
  $.ajax({
    url: 'https://xkcd.com/info.0.json',
    method: 'GET',
    dataType: 'json',
    success: function(data) {
      var comicObj = data;
      
      // Process the data and add it to your webpage
      $('#output').append('<h1>' + comicObj.title + '</h1>');
      $('#output').append('<img src="' + comicObj.img + '" alt="' + comicObj.alt + '" title="' + comicObj.alt + '">');
    },
    error: function(xhr, status, error) {
      console.error('Error:', error);
    }
  });
}


function main() {
  console.log("Main function started.");
  // the code that makes everything happen
  get_comic_data();
}

  // let's get this party started
  main();