var words =["ned stark" , "john snow" , "arya stark", "sansa stark","bran stark", "rickon stark", "robb stark", "khaleesi", "the hound", "the mountain",
	 "cersei lannister", "jamie lannister", "tyrion lannister", "tywin lannister", "joffrey baratheon", "tommnen baratheon", "mycella baratheon", "stannis baratheon",  
	 "the red lady", "ramsay bolton",  "margaery tyrell", "lady brienne", "littlefinger", "the spider"];
var alphabet = "abcdefghijklmnopqrstuvwxyz"
var winCount = 0;
var lossCount = 0;
var lettersGuessed = [];
var lives = 10;
var messages = {
	win : 'Not today. The Faceless Man has other plans for you.',
	lose : 'You Dead!',
	guessed: 'You have already guessed that letter. Get your life together.',
	validLetter: 'Enter letter from a-z!',
}
var isLetter = false;
var userGuessed = false;
var guesses = 0; 
var wordSelected;
var newWord = [];
var correctLetter = false;
var winner = true;
var wordIndex;

function playGame() {
	wordInt = Math.floor((Math.random()*words.length))
	wordSelected = words [wordInt];
	console.log(wordSelected);

	if (wordSelected.length !== newWord.length){
		newWord = [];
	}

	for (var i=0;i<wordSelected.length;i++){
		if (wordSelected[i] === " "){
			newWord[i] = " ";
		}
		else {
			newWord[i] = ("_");
		}
	}
	$('#newWord').html(newWord);
};



document.onkeyup = function (event) {
	var userInput= String.fromCharCode(event.keyCode).toLowerCase();
	console.log(userInput);
	var enter = (event.keyCode);

	if (enter == 13) 
		playGame();
	}

	for (var i=0;i<alphabet.length;i++){
		if (userInput === alphabet.charAt(i)){
			isLetter = true;
		}
	}

	if( isLetter == false && enter!== 13){
		$('#messages').html(messages.validLetter);
	}


	for(var i = 0; i < lettersGuessed.length; i++){
		if(userInput === lettersGuessed[i]){
			userGuessed = true;
		}
	}

	for(var i = 0; i < newWord.length; i++){
		if (userInput == newWord[i]){
				userGuessed = true;
		}
	}

	if(userGuessed == true){
		$('#messages').html(messages.guessed);
	}

	
	for(var i = 0; i < wordSelected.length; i++){
		if (wordSelected[i] === userInput){
			newWord[i] = wordSelected[i];
			correctLetter = true;
		}
	}	

	if(isLetter == true && userGuessed == false && correctLetter == false){
		console.log('i should be subtracting lives here')
		lettersGuessed.push(userInput);
		lives--;
		$('#lives').html(lives);
	}

	$('#lettersGuessed').html(lettersGuessed);
	$('#newWord').html(newWord);

	if (lettersGuessed.length == 10){
		$('#messages').html(messages.lose);
		lettersGuessed = [];
		$('#messages').html(messages.lose);
		lossCount++;
		$('#lossCount').html(lossCount);
		lives = 10;
		playGame();
	}

	correctLetter = false;
	isLetter = false;
	userGuessed = false;

	if(enter !==13){
		win();

}

function win(){
	for (var i=0; i<wordSelected.length; i++){
		if (newWord[i] == ("_")){
			winner = false;
		}
	}

	if ( winner == true) {
		$('#messages').html(messages.win);
		winCount++;
		$('#lettersGuessed').html(lettersGuessed);
		lives = 10;
		$('#lives').html(lives);
		playGame();
	}
}











			








