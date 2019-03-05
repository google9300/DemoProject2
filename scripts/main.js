$(document).ready(function() {
  getData();
  loginDisplay();
  logIn();
  displayMain();
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
const injectObj = `       <div class='bg-light p-4 mainText'>
<button><img src='./images/computerIcon.png' id='computerSupport' alt=''> </button>
<button><img src='./images/tabletIcon.png' id='tabletSupport' alt=''></button>
<button><img src='./images/phoneIcon.png' id='phoneSupport' alt=''></button>
</div>

<form class='loginForm hidden bg-light' id='logInForm'>
  <div class='form-group'>
    <label for='exampleInputEmail1'>Email address</label>
    <input type='text' class='form-control' id='userId' aria-describedby='emailHelp' placeholder='Enter email'>
    <small id='emailHelp' class='form-text text-muted'>We'll never share your email with anyone else.</small>
  </div>
  <div class='form-group'>
    <label for='exampleInputPassword1'>Password</label>
    <input type='password' class='form-control' id='userPassword' placeholder='Password'>
  </div>
  <div class='form-group form-check'>
    <input type='checkbox' class='form-check-input' id='exampleCheck1'>
    <label class='form-check-label' for='exampleCheck1'>Check me out</label>
  </div>
  <button type='button' class='btn btn-primary' id='logIn'>Submit</button>
</form> `;

function displayMain() {
$("#homeDisplay").click(function(){
  $("#injectHere").empty();
$("#injectHere").append(injectObj);

console.log("CLICKED HOME");
});
}