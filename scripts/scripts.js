/*
if space between window and top is greater than 800: make nav change background and font-color
[from jsfiddle:
http://jsfiddle.net/onigetoc/1e8k9q8b/]
*/


var myNav = $("nav");

$(window).on("scroll", function() {
  "use strict";
  if ($(window).scrollTop() >= 800) {
    myNav.addClass("scroll");
  } else {
    myNav.removeClass("scroll");
  }
});
