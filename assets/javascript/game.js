var words =["Ned Stark" , "John Snow" , "Arya Stark", "Sansa Stark", "Bran Stark", "Rickon Stark", "Robb Stark" "Khaleesi", "The Hound", "The Mountain",
	 "Cersei Lannister", "Jamie Lannister", "Tyrion Lannister", "Tywin Lannister", "Joffrey Baratheon", "Tommnen Baratheon", "Mycella Baratheon", "Stannis Baratheon",  
	 "The Red Lady", "Ramsay Bolton", , "Margaery Tyrell", "Lady Brienne", "Littlefinger", "The Spider"];

var winCount = 0;
$('#winCount').html("You have" + winCount + " wins!");

var lossCount = 0;
$('#lossCount').html("You have" + lossCount + " losses!");

function playGame() {
	
	var wordSelected = words [Math.floor(Math.random()*24)+1];
	var newArray = [];
	var guesses = [];
	var maxGuesses = 10;
	
	$('#guessesLeft').html("Remaining Guesses: " + maxGuesses);
	
	$('#guessedLetters').html("");

	for (var=i;i<wordSelected.length;i++){
		newArray.push('_')
	}

	$('#wordGuess').html(newArray.join(""));

	
	document.onkeyup = function (event) {
		var userInput= String.fromCharCode(even.keyCode).toLowerCase();
		var case = true;
		for (i=0;i<guesses.length;i++){
			if (userInput == guesses[i]){
				case == false;
				break;
			}
		}

		
		if (case == true){
			guesses.push(userInput);
			$("#guessedLetters").append(case);
			
			var guessMatch = false;
			for(i=0;i<wordSelected.length;i++){
				if(case == wordSelected.charAt(i)){
					newArray[i] = userInput;
					$('#wordGuess').html(newArray.join(""))
					guessMatch = true;
				}
			}
				if (guessMatch == false){
					maxGuesses--;
					$('guessesLeft').html("Remain Guesses: " + maxGuesses)
				}
		}

		if (maxGuesses == 0 || newArray.join("") == wordSelected){
			if (newArray.join("") == wordSelected){
				wincount++;
				$('#winCount').html("Wins: " + winCount);
				playGame();
			}
			else {
				lossCount++;
				$('#lossCount').html("Losses: " + lossCount);
				playGame();
			}
		}
	}
}

playGame();

			








