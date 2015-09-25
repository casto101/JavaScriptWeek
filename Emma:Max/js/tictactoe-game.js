var f0, f1, f2, f3, f4, f5, f6, f7, f8;
var currentPlayer = "O";

$(document).ready(function(){


  //    var playerOName = prompt("What's your name, Player 2?");
//  });
  //var playerX = prompt("What's your name, Player 1?").text

  var ximage = "<img class='imgx' src='tic-tac-toe-X.png' data-value='X'/>";
  var oimage = "<img class='imgo' src='tic-tac-toe-O.png' data-value='O'/>";

  $(function(){
      playerXName = prompt("What's your name, Player 1?");
      //alert("Hi, " + playerXName + "!");
      playerOName = prompt("What's your name, Player 2?");
    //  alert("Hi, " + playerOName + "!");
      alert("It's your turn, " + playerXName);
    });

  var markerWins = function (id0, id1, id2){
    if(id0 == id1 && id1 == id2 && id2 == currentPlayer){
      return true;
    }
    else{
      return false;
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
    alert("It's your turn, " + playerOName);
  };

  function playerOClick (o) {
    o.append(oimage);
    o.off();
    o.removeClass("empty");
    alert("It's your turn, " + playerXName);
  };

  function checkEmpty(){
    var hasEmpty = $("table").find('.empty');
    if(hasEmpty.hasClass('empty') == false){ // .hasEmpty() returns BOOLEAN true/false
      alert("Stalemate! Everyone gets a trophy!");
    };
  };

  $("td").click(function(){
    var classBox = $(this);
      if (currentPlayer == "O"){
        playerXClick (classBox);
        currentPlayer = "X";
      }
      else{
        playerOClick (classBox);
        currentPlayer = "O";
      };
      loadBoxes();

     if (markerWins(f0, f1, f2, currentPlayer)
        || markerWins(f3, f4, f5, currentPlayer)
        || markerWins(f6, f7, f8, currentPlayer)
        || markerWins(f2, f4, f6, currentPlayer)
        || markerWins(f0, f4, f8, currentPlayer)
        || markerWins(f3, f0, f6, currentPlayer)
        || markerWins(f1, f4, f7, currentPlayer)
        || markerWins(f2, f8, f5, currentPlayer))
        {
        alert(currentPlayer + " wins!");
      }
    else{
      checkEmpty();
    };


  });
});
//winningArray = [(f0,f1,f2), (f3,f4,f5), (field6==field7==field8),(field2==field4==field6),(field0==field4==field8),(field0==field3==field6),(field1==field4==field7),(field2==field5==field8)]
