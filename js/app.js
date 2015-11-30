



$(document).ready(function(){
	DEBUG_MODE = false;

var numSecret = Math.floor((Math.random()*100)+1)
var guess = null;
var guessCount = 0;
var guessLog = [];

// function newGame(){
// 	numSecret = Math.floor((Math.random()*100)+1);
// 	$("#guessList li").replaceWith('');
// 	guessCount = 0;
// 	guessLog = [];
// 	$(".game p").replaceWith('<p> Guess #<span id="count">'+ guessCount + '</span>!</p>');
// 	console.log("new game click secret number: " + numSecret);
// 	// console.log(num)
// 	return num;
// }


function guessCountIncrement(guessCount){
	guessCount = guessCount+1;
	return guessCount;
}

function numGuess(){
	guess = $("#userGuess").val();
	

	if ($.isNumeric(guess)){
		if(DEBUG_MODE){
			alert("This is a number.");
		}
		if (guessLog.indexOf(guess) != -1){
			alert("you have already guessed this number");
			$("#userGuess").val('');
		}
		else{
			guessCount = guessCountIncrement(guessCount);
			if (Math.abs(numSecret-guess)>Math.abs(numSecret-guessLog[guessLog.length - 1])){
				$("#hotterColder").html('Getting Colder');
			} else {
				$("#hotterColder").html('Getting Hotter');
			}
			guessLog.push(guess);

			$("#guessList").prepend('<li>'+guess+'</li>');
			$("#userGuess").val('');
			if (guess==numSecret){
				$("h2#feedback").replaceWith('<h2 id="feedback">You Won!</h2>');
				$(".game h2#feedback").css("background-color", "#ed1e24");
			}else if (Math.abs(guess-numSecret)<5){
				$("h2#feedback").replaceWith('<h2 id="feedback">On Fire!</h2>');
				$(".game h2#feedback").css("background-color", "#ed1e24");
			}else if(Math.abs(guess-numSecret)<10){
				$("h2#feedback").replaceWith('<h2 id="feedback">Hot!</h2>');
				$(".game h2#feedback").css("background-color", "#ed1761");
			}else if(Math.abs(guess-numSecret)<20){
				$("h2#feedback").replaceWith('<h2 id="feedback">Warm!</h2>');
				$(".game h2#feedback").css("background-color", "#5752a4");
			}else if(Math.abs(guess-numSecret)<40){
				$("h2#feedback").replaceWith('<h2 id="feedback">Cold!</h2>');
				$(".game h2#feedback").css("background-color", "#4274b9");
			}else{
				$("h2#feedback").replaceWith('<h2 id="feedback">Ice Cold!</h2>');
				$(".game h2#feedback").css("background-color", "#29a6e9");
			}
		}



		$(".game p").replaceWith('<p> Guess #<span id="count">'+ guessCount + '</span>!</p>');


	}else{
		alert("Please enter a number between 1-100.");
		$("#userGuess").val('');
	}
	
	if (DEBUG_MODE){
			console.log("Guess Log: " + guessLog);
			console.log("Guess Count: " + guessCount);
		}	
}
if (DEBUG_MODE){
		console.log(numSecret);
		}

	$(".new").click(function()
		{
			location.reload();
			
		});

	$("#guessButton").on('click',numGuess);
	$(document).on('keypress',function(key){
		if (key.keyCode ==13){
			numGuess();
		}
	});

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});