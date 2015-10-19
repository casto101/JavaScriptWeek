$(document).ready(function(){

$("h1").css("color","red");

function count(){
  var counter = 0;
  return {
    more: function(){
      counter +=1;
      return counter;
    },
    less: function(){
      counter -=1;
      return counter;
    }
  }
};

//start Row 1 functions
var row1 = count();
var row1add = $("#row1 > .increment");
var row1subtract = $("#row1 > .decrement");
var row1reset = $("#row1 > .reset");
var result1 = $("#row1 > .counter-output");


row1add.click(function(event){
 result1.html(row1.more());
});

row1subtract.click(function(event){
  result1.html(row1.less());
});

row1reset.click(function(event){
  row1 = count();
  result1.html(row1);
  result1.text("0");
});
//end Row 1 functions

//start Row 2 functions
var row2 = count();
var row2add = $("#row2 > .increment");
var row2subtract = $("#row2 > .decrement");
var row2reset = $("#row2 > .reset");
var result2 = $("#row2 > .counter-output");


row2add.click(function(event){
 result2.html(row2.more());
});

row2subtract.click(function(event){
  result2.html(row2.less());
});

row2reset.click(function(event){
  row2 = count();
  result2.html(row2);
  result2.text("0");
});
//end Row 2 functions
//start Row 3 functions
var row3 = count();
var row3add = $("#row3 > .increment");
var row3subtract = $("#row3 > .decrement");
var row3reset = $("#row3 > .reset");
var result3 = $("#row3 > .counter-output");


row3add.click(function(event){
 result3.html(row3.more());
});

row3subtract.click(function(event){
  result3.html(row3.less());
});

row3reset.click(function(event){
  row3 = count();
  result3.html(row3);
  result3.text("0");
});
//end Row 3 functions

//sum
var total = parseInt((result1).val() + (result2).val() + (result3).val());
$("#sumtotal").text(100);

});
