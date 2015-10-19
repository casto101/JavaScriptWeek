$(document).ready(function(){

  var computerChoice = Math.floor(Math.random()*100+1);

  var i = 0;

$("button").click(function(){
  var userChoice = parseInt($("#userInput").val());

         i+=1;
         if (userChoice > computerChoice) {
           $(".printto").append('<span class="red">' + userChoice + '</span> is too <span class="red">high</span>. Guess again! You have <span class="number">' + (7-i) + '</span> tries left. <br>');
         } else if (userChoice < computerChoice) {
           $(".printto").append('<span class="blue">' + userChoice + '</span> is too <span class="blue">low</span>. Guess again! You have <span class="number">' + (7-i) + '</span> tries left. <br>');
         }



       if (userChoice === computerChoice) {
         $(".printto").append('You win!');
       } else if (i > 6 && userChoice !== computerChoice) {
         $(".printto").append("You lose! Game Over. The answer was " + computerChoice + "!");
       };
});
});
/*
	do {
		if (userChoice < computerChoice) {
			alert("Too low.");
			userChoice = prompt("Guess again.");
		}
		else if (userChoice < computerChoice) {
			alert("Too high.");
			userChoice = prompt("Guess again.");
		}
	while (userChoice !== computerChoice);
	}
    if (userChoice === computerChoice) {
  		alert("You win!");
  };
*/
