$(document).ready(function() {
  $("#picture_one").hide();
  $("#education").hide();
  $("#workout-preview").hide();
  $("#outfitter-preview").hide();
  $("#cycle-smart-preview").hide();
  $("#brain-image").on("click", function(){
    $("#education").fadeIn(2000);


  });

  $("#heart-image").on("click", function(){
    $("#workout-preview").fadeIn();
    $("#outfitter-preview").fadeIn();
    $("#cycle-smart-preview").fadeIn();

  })

  function pulse(image) {
    $(image).animate({
        width: 100, height: 100,
        opacity: 0.5
    }, 400, function() {
        $(image).animate({
            width: 110, height: 110,
            opacity: 1
        }, 400, function() {
            pulse(image);
        });
    });
};

pulse("#heart-image");
pulse("#brain-image");

});


// Slideshow


