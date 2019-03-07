$(document).ready(function() {
  $("#injectHere")
    .hide()
    .load("../Pages/register.html")
    .fadeIn(1500);
  loginDisplay();
  displaySupport();
  displayHome();
});
// NEED TO CHANGE ADMIN.html TO HOME.html
function loginDisplay() {
  $("#loginBtn").click(function() {
    $("#injectHere")
      .hide()
      .load("../Pages/login.html")
      .fadeIn(500);
  });
}

function displaySupport() {
  $("#supportBtn").click(function() {
    $("#injectHere")
      .hide()
      .load("../Pages/support.html")
      .fadeIn(1500);
  });
}
function displayHome() {
  $("#homeBtn").click(function() {
    $("#injectHere")
      .hide()
      .load("../Pages/home.html")
      .fadeIn(1500);
  });
}

