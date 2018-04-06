/*
if space between window and top is greater than 850: make nav change background and font-color
[from jsfiddle:
http://jsfiddle.net/onigetoc/1e8k9q8b/]

make house icon change color (change icon src)
[from https://codepen.io/fabuchao/pen/xwbRaa]
*/


var myNav = $("nav");


$(window).on("scroll", function() {
  "use strict";
  if ($(window).scrollTop() >= 850) {
    myNav.addClass("scroll");
  } else {
    myNav.removeClass("scroll");
  }
});
