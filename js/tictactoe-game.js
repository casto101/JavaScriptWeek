var f0, f1, f2, f3, f4, f5, f6, f7, f8;

img1 = new Image();
img2 = new Image();
img1.src = "tic-tac-toe-X.png";
img2.src = "tic-tac-toe-O.png";

$(document).ready(function(){

  var nextPlayer = "X";
  var currentPlayer = "O";

  var ximage = "<img class='imgx' src='tic-tac-toe-X.png' data-value='X'/>";
  var oimage = "<img class='imgo' src='tic-tac-toe-O.png' data-value='O'/>";

  var initiate = function(){
      playerXName = prompt("What's your name, Player 1?");
      playerOName = prompt("What's your name, Player 2?");
      alert("It's your turn, " + playerXName);
    };
  initiate();

  var markerWins = function (id0, id1, id2, marker){
    if(id0 == id1 && id1 == id2 && id2 == marker){
      return true;
    };
  };

  var loadBoxes = function(){
    f0 = $("#field0").children("img").data("value"); //need to return "X" or "O"
    f1 = $("#field1").children("img").data("value");
    f2 = $("#field2").children("img").data("value");
    f3 = $("#field3").children("img").data("value");
    f4 = $("#field4").children("img").data("value");
    f5 = $("#field5").children("img").data("value");
    f6 = $("#field6").children("img").data("value");
    f7 = $("#field7").children("img").data("value");
    f8 = $("#field8").children("img").data("value");
  };

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
    var hasEmpty = $("table").find('.empty');// .hasEmpty() returns BOOLEAN true/false
    if(hasEmpty.hasClass('empty') == false){ //if there NO '.empty' values in the table
      alert("Stalemate! Everyone gets a trophy!");
    }
    else{
      alert("It's your turn, " + playerOName);
    };
  };

  $("td").click(function(){
    var classBox = $(this);
      if (currentPlayer == "O"){
        playerXClick (classBox);
        loadBoxes();


        if (markerWins(f0, f1, f2, nextPlayer)
           || markerWins(f3, f4, f5, nextPlayer)
           || markerWins(f6, f7, f8, nextPlayer)
           || markerWins(f2, f4, f6, nextPlayer)
           || markerWins(f0, f4, f8, nextPlayer)
           || markerWins(f3, f0, f6, nextPlayer)
           || markerWins(f1, f4, f7, nextPlayer)
           || markerWins(f2, f8, f5, nextPlayer)){
           alert(nextPlayer + " wins!");
         }
        else{
          checkEmpty();
        };
      currentPlayer = "X";
//      alert(currentPlayer + "currentPlayer");
      nextPlayer = "O";
      }
      else {
        playerOClick (classBox);
        loadBoxes();
        if (markerWins(f0, f1, f2, nextPlayer)
           || markerWins(f3, f4, f5, nextPlayer)
           || markerWins(f6, f7, f8, nextPlayer)
           || markerWins(f2, f4, f6, nextPlayer)
           || markerWins(f0, f4, f8, nextPlayer)
           || markerWins(f3, f0, f6, nextPlayer)
           || markerWins(f1, f4, f7, nextPlayer)
           || markerWins(f2, f8, f5, nextPlayer)){
           alert(nextPlayer + " wins!");
        }
        else{
          alert("It's your turn, " + playerXName);
        };

        currentPlayer = "O";
    //    alert("currentPlayer" + currentPlayer);
        nextPlayer = "X";
    };
  });
});
