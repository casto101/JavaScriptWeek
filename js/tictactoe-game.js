$(document).ready(function(){

  var ximage = "<img class='imgx' src='tic-tac-toe-X.png'/>"
  var oimage = "<img class='imgo' src='tic-tac-toe-O.png'/>"

/*  var field0 = $("#field0");
  var field1 = $("#field1");
  var field2 = $("#field2");
  var field3 = $("#field3");
  var field4 = $("#field4");
  var field5 = $("#field5");
  var field6 = $("#field6");
  var field7 = $("#field7");
  var field8 = $("#field8");

  var fieldArray = [field0, field1, field2, field3, field4, field5, field6, field7, field8
  */
  var fieldArray = [
    $("#field0"),
    $("#field1"),
    $("#field2"),
    $("#field3"),
    $("#field4"),
    $("#field5"),
    $("#field6"),
    $("#field7"),
    $("#field8")
  ];

  function playerXClick (x) {
    x.append(ximage);
    x.off();
    x.removeClass("empty");
  };

  function playerOClick (o) {
    o.append(oimage);
    o.off();
    o.removeClass("empty");
  };

  function checkEmpty(){
    var hasEmpty = $("table").find('.empty');
    if(hasEmpty.hasClass('empty') == false){ // .hasEmpty() returns BOOLEAN true/false
      alert("The board is full!");
    };
  };

  var currentPlayer = "X";

  $("td").click(function(){
    var classBox = $(this);
      if (currentPlayer == "X"){
        playerXClick (classBox);
        currentPlayer = "O";
      }
      else{
        playerOClick (classBox);
        currentPlayer = "X";
      };
      checkEmpty();
  });

});
