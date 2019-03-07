$(document).ready(function() {
    computerSupport();
  });

function computerSupport() {
    $("#computerBtn,#phoneBtn,#tabletBtn").click(function() {
      $("#injectHere")
        .hide()
        .load("../Pages/supportForm.html")
        .fadeIn();
      console.log("CLICKED");
    });
  }
  