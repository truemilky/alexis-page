var person = document.querySelector(".our-team__member__01")
var about = document.querySelector(".our-team__about")

person.addEventListener ("click", function(e) {
  about.classList.add("display-block");
});

$(document).ready(function() {
  $('.testimonials__slick').click(function(event) {
    $(this).toggleClass('active').next().slideToggle(300);
  });
}) ;

var person = document.querySelector(".our-team__member__02")
var about = document.querySelector(".our-team__about")

person.addEventListener ("click", function(e) {
  about.classList.add("display-block");
});

$(document).ready(function() {
  $('.testimonials__slick').click(function(event) {
    $(this).toggleClass('active').next().slideToggle(300);
  });
}) ;

var person = document.querySelector(".our-team__member__03")
var about = document.querySelector(".our-team__about")

person.addEventListener ("click", function(e) {
  about.classList.add("display-block");
});

$(document).ready(function() {
  $('.testimonials__slick').click(function(event) {
    $(this).toggleClass('active').next().slideToggle(300);
  });
}) ;

var person = document.querySelector(".our-team__member__04")
var about = document.querySelector(".our-team__about")

person.addEventListener ("click", function(e) {
  about.classList.add("display-block");
});

$(document).ready(function() {
  $('.testimonials__slick').click(function(event) {
    $(this).toggleClass('active').next().slideToggle(300);
  });
}) ;

$("#slick").slick({
  dots: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false
});