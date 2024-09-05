
// circle
var countdown = $("#countdown").countdown360({
    radius: 60,
  
    seconds: 100,
  
    fontColor: "#FFFFFF",
  
    autostart: false,
  
    onComplete: function () {
      console.log("done");
    },
  });
  
  countdown.start();
  
  var countdown = $("#countdown").countdown360({
    radius: 15.5,
  
    strokeStyle: "#477050",
  
    strokeWidth: undefined,
  
    fillStyle: "#8ac575",
  
    fontColor: "#477050",
  
    fontFamily: "sans-serif",
  
    fontSize: undefined,
  
    fontWeight: 700,
  
    autostart: true,
  
    seconds: 10,
  
    label: ["second", "seconds"],
  
    startOverAfterAdding: true,
  
    smooth: false,
  
    onComplete: function () {},
  });
  
  /* ==============JQ============ */
  
  $(document).ready(function () {
    // count me plugin
    window.onload = () => {
      // $(selector).countMe(delay,speed)
      $("#num1").countMe(40, 65);
      $("#num2").countMe(30, 30);
      $("#num3").countMe(40, 50);
      $("#num4").countMe(100, 200);
    };
    // counter plugin
    $(".counter").counterUp({
      delay: 10,
      time: 2000,
    });
  });
  