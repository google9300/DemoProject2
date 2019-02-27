$(document).ready(function() {
  getData();
  loginDisplay();
  logIn();
});

let userName = "";
let userPassword = "";

function getData() {
  let URL = "https://my-json-server.typicode.com/google9300/demoJSON/db";
  console.log($.getJSON);
  $.getJSON(URL, function(data) {
    // console.log(data.loginDetails[0]);
    userName = data.loginDetails[0].userName;
    userPassword = data.loginDetails[0].password;
    // console.log(userName);
    // console.log(userPassword);
  });
}

function loginDisplay() {
  $("#loginBtn").click(function() {
    if ($(".mainText").hasClass("hidden")) {
      $(".mainText").removeClass("hidden");
      $(".loginForm").addClass("hidden");
    } else {
      $(".mainText").addClass("hidden");
      $(".loginForm").removeClass("hidden");
    }
  });
}
function logIn() {
  $("#logIn").click(function() {
    let userInputId = $("#logInForm input#userId").val();
    let userInputPassword = $("#logInForm input#userPassword").val();
    console.log(userInputId);
    console.log(userInputPassword);
    
    if (userInputId === userName && userInputPassword === userPassword) {
      console.log("Success");
      swal("Good job!", "You are logged in!", "success");
    } else {
      swal("Wrong Credentials!", "Try Again!", "error");
    }
  });
}
