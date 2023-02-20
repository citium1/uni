/* jQuery ------------------------------------ */

$(function () {

/* HIDE EFFECT */
  $(".hide-btn").click(function () {
     $(".about-us").hide();
    });

  /* SHOW EFFECT */
  $(".show-btn").click(function () {
    // $(".about-us").show();
    $(".about-us").fadeIn(2000);
  });

  $("#hamburger").click(function () {
    $(".menu").slideToggle();
  });

});


