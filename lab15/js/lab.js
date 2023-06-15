// index.js - Learn how to use AJAX for API's while using Jquery as well
// Author: Bruce Bai
// Date: May 31, 2023

function do_API() {
  var types = ["boolean", "multiple"];
  var ind = Math.floor(Math.random() * 10) % 2;
  var chosen = types[ind];
  var link = "https://opentdb.com/api.php?amount=1&category=20&difficulty=medium&type=" + chosen;
  
  $.ajax({
    url: link,
    data: {},
    type: "GET",
    dataType : "json",
    success: function(data) {
      var quizData = data.results[0];
      var cat = quizData.category;
      var title = "<h2>" + "Category: " + cat + "</h2>\n";
      var quizHTML = "";
    
      quizHTML += title;
    
      var q = quizData.question + "<br>";
      quizHTML += q;
    
      var correct = quizData.correct_answer;
      var incorrect = quizData.incorrect_answers;
      var options = incorrect.concat(correct);
      
      var option_field = "";
      options.forEach(function(option) {
        option_field = "<button class=\"choices\">" + option + "</button>" + "<br>";
        quizHTML += option_field;
      });
      $("#quiz").html(quizHTML);
    
      var review_choices = document.getElementsByClassName("choices");
      for(var i = 0; i < review_choices.length; i++) {
        if(review_choices[i].textContent == correct) {
          review_choices[i].addEventListener("click", () => {
            $("#answer").html("You got the correct answer!");
          })
        } else {
          review_choices[i].addEventListener("click", () => {
            $("#answer").html("Wrong answer! The correct answer was: " + correct);
          })
        }
      }
    },
    error: function (jqXHR, textStatus, errorThrown) { 
        console.log("Error:", textStatus, errorThrown);
    }
  });
}

function extractVideoId(url) {
  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = url.match(regExp);
  return (match && match[7].length === 11) ? match[7] : '';
}

function do_spatial_API() {
  $("#activate_space").remove();
  $.ajax({
    url: 'https://api.nasa.gov/planetary/apod',
    type: 'GET',
    data: {
        api_key: "lChAgt2FdUEEGnqKMj9ivx5eUF8TuwUmetM9HEIC"
    },
    success: function(data) {
        var title = data.title;
        $("#apod-container").html(`<h3>${title}</h3>`);

        //get the visual to show on screen
        var Url = data.url;
        if(data.media_type == "video") {
           // Extract the video ID from the URL
          var videoId = extractVideoId(Url);

          // Construct the YouTube embedded URL
          var embedUrl = 'https://www.youtube.com/embed/' + videoId;

          // Create an iframe element
          var iframe = document.createElement('iframe');
          iframe.setAttribute('width', '560');
          iframe.setAttribute('height', '315');
          iframe.setAttribute('src', embedUrl);
          iframe.setAttribute('frameborder', '0');
          iframe.setAttribute('allowfullscreen', '');

          // Append the iframe to the video container
          var Container = document.getElementById('apod-container');
          Container.appendChild(iframe);
        } else {
          $('#apod-container').append(`<img src=\"${Url}\">`);
        }

        var explanation = data.explanation;
        $('#apod-container').append(`
            <p>${explanation}</p>
        `);
        
    },
    error: function() {
        console.log('Error occurred while fetching APOD data.');
    }
});
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen

  $("#activate").on("click", do_API);
  $("#activate_space").on("click", do_spatial_API);
}

  // let's get this party started
  main();