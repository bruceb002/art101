// index.js - Playing around with loops
// Author: Bruce Bai
// Date: May 24, 2023

function FizzBuzzBoom(maxNum, factors, factor_outs) {
  var l = factors.length;
  var empty = false;
  var nonNum = false;
  var regex=/^[0-9]+$/;

  if(maxNum == "") {
    empty = true;
  }
  if(maxNum.match(regex) == null && maxNum != "") {
    nonNum = true;
  }

  for(let i = 0; i < factors.length; i++) {
    if(factors[i] == "") {
      empty = true;
    }
    if(factors[i].match(regex) == null && factors[i] != "") {
      nonNum = true;
    }
  }

  for(let i = 0; i < factor_outs.length; i++) {
    if(factor_outs[i] == "") {
      empty = true;
    }
  }

  if(empty || nonNum) {
    $("#output").html("Error: <br>");
    if(empty) {
      $("#output").append("You did not fill in one or more of the forms! <br>");
    } 
    if(nonNum) {
      $("#output").append("One of the forms is not a valid number!");
    }
    return;
  }

  var res = "";
  for(var i = 1; i <= maxNum; i++) {
    res += i.toString() + ": ";
    for(var j = 0; j < l; j++) {
      if(i % factors[j] == 0) {
        res += factor_outs[j];
      }
    }
    res += "<br>";
  }
  $("#output").html(res); // fixed

}


function main() {
  console.log("Main function started.");
  // the code that makes everything happen
  var start = document.getElementById("submission");
  start.addEventListener("click", () => {
    var m = $("#maxNum").val();

    var factors = document.getElementsByClassName("factor");
    f = [];
    for(var i = 0; i < factors.length; i++) {
      f.push(factors[i].value);
    }

    f_o = [];
    var phrases = document.getElementsByClassName("phrase");
    for(var i = 0; i < factors.length; i++) {
      f_o.push(phrases[i].value);
    }

    FizzBuzzBoom(m, f, f_o);
  });
}

  // let's get this party started
  main();