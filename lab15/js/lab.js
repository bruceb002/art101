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

function do_spatial_API() {
  $.ajax({
    url: 'https://api.nasa.gov/planetary/apod',
    method: 'GET',
    data: {
        api_key: "lChAgt2FdUEEGnqKMj9ivx5eUF8TuwUmetM9HEIC"
    },
    success: function(data) {
        // Process the response and display the APOD image
        var title = data.title;
        var Url = data.url;
        console.log(data);
        var explanation = data.explanation;
        
        $('#apod-container').html(`
            <h3>${title}</h3>
            <p>${explanation}</p>
        `);
        
        if(data.media_type == "video") {
          $('#apod-container').append(`
            <video> 
              <source src=${Url}>
            </video>
          `);
        } else {
          $('#apod-container').append(`<img src=${Url}>`);
        }
        
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