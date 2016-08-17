var words =["Ned Stark" , "John Snow" , "Arya Stark", "Sansa Stark", "Bran Stark", "Rickon Stark", "Robb Stark", "Khaleesi", "The Hound", "The Mountain",
	 "Cersei Lannister", "Jamie Lannister", "Tyrion Lannister", "Tywin Lannister", "Joffrey Baratheon", "Tommnen Baratheon", "Mycella Baratheon", "Stannis Baratheon",  
	 "The Red Lady", "Ramsay Bolton", , "Margaery Tyrell", "Lady Brienne", "Littlefinger", "The Spider"];

var winCount = 0;
$('#winCount').html("You have" + winCount + " wins!");

var lossCount = 0;
$('#lossCount').html("You have" + lossCount + " losses!");

function playGame() {
	
	var wordSelected = Math.random()*words.length;
	var newArray = [];
	var guesses = [];
	var maxGuesses = 10;
	
	$('#guessesLeft').html("Remaining Guesses: " + maxGuesses);
	
	$('#guessedLetters').html("");

	
	for (var i=0;i<wordSelected.length;i++){
		if (wordSelected[i] === ""){
			newArray[i] = "";
		}
		else{
			newArray[i] = ("_");
		}
	};

	$('#wordGuess').html(newArray.join(""));

	
	document.onkeyup = function (event) {
		var userInput= String.fromCharCode(event.keyCode).toLowerCase();
		var situation = true;
		for (i=0;i<guesses.length;i++){
			if (userInput == guesses[i]){
				situation == false;
				break;
			}
		};
		
		if (situation == true){
			guesses.push(userInput);
			$("#guessedLetters").append(situation);
			
			var guessMatch = false;
			for(i=0;i<wordSelected.length;i++){
				if(situation == wordSelected.charAt(i)){
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
				$('#winCount').html(winCount);
				playGame();
			}
			else {
				lossCount++;
				$('#lossCount').html(lossCount);
				playGame();
			}
		}
	}
}

playGame();

			








