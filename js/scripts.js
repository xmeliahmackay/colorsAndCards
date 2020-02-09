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
    $(".know3").click(function() {
      $("#metHide").toggle();
      $("#metShow").toggle();
    });
    $(".know4").click(function() {
      $("#arguHide").toggle();
      $("#arguShow").toggle();
    });
    $(".know5").click(function() {
      $("#paraHide").toggle();
      $("#paraShow").toggle();
    });
    $(".know6").click(function() {
      $("#retuHide").toggle();
      $("#retuShow").toggle();
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