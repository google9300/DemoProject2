$(document).ready(function() {});
var userName = $("#username");
var email = $("#email");
var password = $("#password");

$("#registerBtn").click(function() {
  passwordValidation();

  var accountDetails = [{
      userName: userName.val(),
      password: password.val(),
      email: email.val()
  }];

  console.log(accountDetails);
  $.ajax({
      type: 'POST',
      url: 'https://my-json-server.typicode.com/google9300/demoJSON/db',
      data: accountDetails,
      success: function() {
          console.log("SUCCESS");
      },
      error: function() {
        alert("ERROR");
      }
  });

});
function passwordValidation() {
  if ($("#password").val().length >= 4) {
    if ($("#password").val() === $("#passwordConfirm").val()) {
      swal("Good job!", "You are logged in!", "success");
    } else {
      swal("Wrong Credentials!", "Passwords doesnt match!!!", "error");
      $("#password").val("");
      $("#passwordConfirm").val("");
    }
  } else {
    swal("Wrong Credentials!", "Password is too short !!!", "error");
  }
  nameValidation();
}
function nameValidation() {
var username =  $("#username").val();
    
    if (username.match(/\s/g)){
        swal("Wrong Credentials!", "Username contains space !!!", "error");

    }
console.log(username);
}
