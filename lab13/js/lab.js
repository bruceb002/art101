// index.js - Playing around with loops
// Author: Bruce Bai
// Date: May 24, 2023

function FizzBuzzBoom(maxNum, factors, factor_outs) {
  var res = "";
  var l = factors.length;
  if(l != factor_outs.length || maxNum == "") {
    $("#output").html("You did not fill in one or more of the forms!");
    return;
  }

  

  for(var i = 1; i <= maxNum; i++) {
    res += i.toString() + ": ";
    for(var j = 0; j < l; j++) {
      if(factors[j] == "") {
        $("#output").html("You did not fill in one or more of the forms!");
        return;
      }
      if(i % factors[j] == 0) {
        if(factor_outs[j] == "") {
          $("#output").html("You did not fill in one or more of the forms!");
          return;
        }
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