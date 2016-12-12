var alphabet = "abcdefghijklmnopqrstuvwxyz";
var words = ['muhammet' ,'tim', 'tom', 'matt'];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var lettersGuessedCorrect = [];
var lettersGuessedInorrect = [];
var userGuessed;
var check = true;
var word = words[0];
var hangMan = [];
for(var i=0;i<word.length; i++){
	hangMan.push("_")
}
console.log(hangMan)


$(document).ready(function(){
	document.onkeydown = function(event){
		userGuessed = String.fromCharCode(event.keyCode).toLowerCase();
		var validation = alphabet.indexOf(userGuessed);
		console.log(validation);
		if(hangMan.includes("_")){
			
		}
		// Validate user input is letter

		if(validation != -1){
			// Make sure input hasn't been guessed already
			var validateWrongGuessedLetters = lettersGuessedCorrect.includes(userGuessed);
			var validateCorrectGuessedLetters = lettersGuessedInorrect.includes(userGuessed);
			// console.log(validateWrongGuessedLetters);
			// console.log(validateCorrectGuessedLetters);
			if ( validateWrongGuessedLetters == false && validateCorrectGuessedLetters == false){
				// Check if user input is within word for HangMan
				if (word.includes(userGuessed)){
					lettersGuessedCorrect.push(userGuessed)
					for (var i=0;i<word.length; i++){
						if(userGuessed == word[i]) {
							hangMan[i] = userGuessed;
							console.log(hangMan);
						}
					}
				}
				else{
					lettersGuessedInorrect.push(userGuessed);
					guessesLeft--;
				}
				
				// console.log(word.includes(userGuessed))
			}
		}
		 


	}
})


