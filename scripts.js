$(document).ready(function() {
  $("h1").dblclick(function(){
    alert("h1 clicked");
  });
  $("ul").click(function(){
    alert("ul clicked");
  });
  $("p").hover(function(){
    $(this).css("background-color", "red");},
    function(){ $(this).css("background-color", "white");
  });
  $(".btn1").click(function(){
    $("#fade").fadeOut(1000);
  });

  $(".btn2").click(function(){
    $("#fadein").fadeIn(1000);
  });
  
  $(".btn1").click(function(){
    $("#slide").slideToggle();
  });
});
