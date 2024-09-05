/*===========JQuery===============*/
$(document).ready(function () {
  //  mixitup
  var mixer = mixitup("#hello", {
    animation: {
      duration: 300,
    },
  });
});

// light box

lightbox.option({
  resizeDuration: 300,
  wrapAround: true,
});
// paralux
$(".parallax-window").parallax({ imageSrc: "../images/web.png" });
