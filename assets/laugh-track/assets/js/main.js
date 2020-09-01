$(function() {
  var audio = $("#laugh-1")[0];
  $(".item-1").mouseenter(function() {
    audio.play();
    $(this).addClass("listened");
  });
  $(".item-1").mouseout(function() {
    audio.pause();
  });

  var audio2 = $("#laugh-2")[0];
  $(".item-2").mouseenter(function() {
    audio2.play();
    $(this).addClass("listened");
  });
  $(".item-2").mouseout(function() {
    audio2.pause();
  });

  var audio3 = $("#laugh-3")[0];
  $(".item-3").mouseenter(function() {
    audio3.play();
    $(this).addClass("listened");
  });
  $(".item-3").mouseout(function() {
    audio3.pause();
  });

  var audio4 = $("#laugh-4")[0];
  $(".item-4").mouseenter(function() {
    audio4.play();
    $(this).addClass("listened");
  });
  $(".item-4").mouseout(function() {
    audio4.pause();
  });

  var audio5 = $("#laugh-5")[0];
  $(".item-5").mouseenter(function() {
    audio5.play();
    $(this).addClass("listened");
  });
  $(".item-5").mouseout(function() {
    audio5.pause();
  });
});
