window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var header = document.getElementById("header")
var headerInfo = document.getElementById("header__info")
var container = document.getElementById("container")
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")

  } else {
    navbar.classList.remove("sticky");
  }
}