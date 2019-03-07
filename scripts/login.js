$(document).ready(function() {
  getData();
  logIn();
  register();
});

var userName = "";
var userPassword = "";

function getData() {
  let URL = "https://my-json-server.typicode.com/google9300/demoJSON/db";
  console.log($.getJSON);
  $.getJSON(URL, function(data) {
    // console.log(data.loginDetails[0]);
    userName = data.loginDetails[0].userName;
    userPassword = data.loginDetails[0].password;
  });
}

function logIn() {
  $("#logIn").click(function() {
    let userInputId = $("#logInForm input#userId").val();
    let userInputPassword = $("#logInForm input#userPassword").val();

    if (userInputId === userName && userInputPassword === userPassword) {
      console.log("Success");
      swal("Good job!", "You are logged in!", "success");
      $("#injectHere")
        .hide()
        .load("../Pages/logged.html")
        .fadeIn(1000);
    } else {
      swal("Wrong Credentials!", "Try Again!", "error");
    }
  });
}

function register() {
  $("#register").click(function() {
    $("#injectHere")
      .hide()
      .load("../Pages/register.html")
      .fadeIn(1500);
  });
}
