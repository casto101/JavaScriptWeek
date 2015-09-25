$(document).ready(function(){

multiplyArray = [2,3,4,5,6,7];
var accumulator= 1
for(var i = 0; i<multiplyArray.length; i++) {
  console.log(accumulator *=multiplyArray[i]);
};


var faveFlavors = ["vanilla swiss almond", "pistachio","chocolate"];


faveFlavors.forEach(function(flavor){
  $("#icecream").append("<li>"+flavor+"</li>");
});

  var accumulator = 1;
  multiplyArray = [2,3,4,5,6,7];
  multiplyArray.forEach(function(multiple) {
    accumulator *= multiple;
  });

  console.log(accumulator);

$(".Turtle-btn").click(function(){
  $(".turtle").children("img").fadeToggle();
  $(".turtle").children("p").delay(800).fadeToggle();

});

$(".Snake-btn").click(function(){
  $(".snake").children("img").fadeToggle();
  $(".snake").children("p").delay(800).fadeToggle();

});

$(".Insect-btn").click(function(){
  $(".insect").children("img").fadeToggle();
  $(".insect").children("p").delay(800).fadeToggle();});
});
