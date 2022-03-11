console.log("Welcome to My portfolio !");

$(document).ready(function () {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $("header").toggleClass("toggle");
  });
  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-times");
    $("header").removeClass("toggle");
  });
});

// validate form

const validateForm = () => {
  const fullname = document.forms["myform"]["name"].value;
  const email = document.forms["myform"]["email"].value;
  const textarea = document.forms["myform"]["textarea"].value;
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (fullname === "" || email === "") {
    alert("you must need to fill all the field !");
  } else {
    if (textarea.length < 5) {
      alert("message is to short !");
    }
  }
};
