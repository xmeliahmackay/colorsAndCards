$(document).ready(function() {
    $(".clickable").click(function() {
      $("#walrus-showing").toggle();
      $("#walrus-hidden").toggle();
    });

    $(".know").click(function() {
      $("#opHide").toggle();
      $("#opShow").toggle();
    });
    $(".know2").click(function() {
      $("#varHide").toggle();
      $("#varShow").toggle();
    });

















  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });
  
  $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("darkMode");
  });











});