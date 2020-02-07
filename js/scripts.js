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


  $(".click4").click(function() {
    $("#fact4").toggle();
    });

  $(".click5").click(function() {
    $("#fact5").toggle();
    });

  $(".click6").click(function() {
    $("#fact6").toggle();
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