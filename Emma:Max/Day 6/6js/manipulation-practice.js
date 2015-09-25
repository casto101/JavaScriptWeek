$(document).ready(function(){
  $("ul").prepend("<li>the NEW list item 1</li>");
  $("p.end-sentence").append(" The NEW last sentence.");
  $("p.end-sentence").before("<h3>The TITLE for this paragraph</h3>");
  $("h1").after("<h2>New Subheading</h2>");
  $("#remove-me").remove();
  $(".p-container").children("p").css("background-color", "green"); //selects all children
  $('ul').children('li').first().css('color', 'red');
  $('ul').children('li').last().css('color', 'blue');
  $(".click-me").click(function(){
    $(this).css("background-color","blue");
    alert('I TOLD YOU NOT TO CLICK THIS BUTTON!!!!!!');
  });
});
