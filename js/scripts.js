$(document).ready(function() {
  $(".click1").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });
  $(".click2").click(function() {
    $("#walrus2").fadeToggle();
  });
  $(".click3").click(function() {
    $("#otter").slideToggle();
  });
});