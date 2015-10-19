$(document).ready(function(){



var cycle1 = document.getElementById("#dogpic")
var cycle2 = "What did I just tell you??";
var cycle3 = "You're actually the worst.";
var cycle4 = "Stop poking me!";
var cycle5 = "You're making me angry!";
var cycle6= "...";
var cycle7= " ";

var cycleIt = [cycle1, cycle2, cycle3, cycle4, cycle5, cycle6, cycle7];

var i = 0;

  $("button").click(function(){
    $("#headertext").text(cycleIt[i]);
     i =(i+1)%cycleIt.length;


  //  for (var i=0; i<cycleIt.length; i++) {
      //if (i<=6) {
  //      $("#headertext").text(cycleIt[i]);
    //  } else
      //  do some differnt stuff}

//    $("#headertext").text(cycleIt[i]);
  //  i =(i+1)%cycleIt.length;
    //if (i=7) append img tag  next time around remove it

    });
  });

//.prepend("<img src=\"https:\/\/www.petfinder.com\/wp-content\/uploads\/2012\/11/dog-how-to-select-your-new-best-friend-thinkstock99062463.jpg\" id=\"dogpic\"/>")
