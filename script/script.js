let playerNamesArray = [
    'Burger',
    'Katterbach',
    'Lang',
    'Lindner',
    'Djiga',
    'Kasami',
    'Fernandes',
    'Gebhardt',
    'Nikolic',
    'Millar'
];
// global data for the game
let playerPic = document.getElementById('playerPic');
let startBtn = document.getElementById('startBtn');
let timer = document.getElementById('time');
var quitBtn = document.getElementById('quitBtn');
var goodAnswers = document.getElementById('goodAnswers');
var wrongAnswers = document.getElementById('wrongAnswers');

var good = 0;
var wrong = 0;
var randomPlayers = [];
let minutes = 0;
let seconds = 0;
//starts the game with all the functions
startBtn.onclick = function(){
	var playerInput = document.getElementById('playerAmount').value;
	var timeInput = document.getElementById('timeAmount').value;
	times = timeInput.split(':');
	if(isNaN(times[0]) === null || isNaN(playerInput) === true || playerInput <= 0 || playerInput >= 11 || times[0] <= 0 || times[0] >= 20 || times[1] >= 60|| times.length >= 3){
		alert('ERROR: You did not meet the requirements please fix it and try agian');
	} 
	else{
		minutes = times[0];
		if(times.length === 2){
			let second = Number(times[1]);
			seconds = second;
		}

		let randomPlayer = randomPic(playerInput);
		makeGuess(randomPlayer[good]);
		randomPlayers = randomPlayer;
		if(seconds <= 9){
			timer.innerText = minutes + ":0" + seconds;
		}
		else{
			timer.innerText = minutes + ":" + seconds;
		}
		timer = setInterval(function(){
			if(seconds === 0){
				minutes--;
				seconds = 59;
				timer.innerText = minutes + ":" + seconds;
			}
			else if(seconds <= 10){
				seconds--;
				timer.innerText = minutes + ":0" + seconds;
			}
			else{
				seconds--;
				timer.innerText = minutes + ":" + seconds
			}

			if(minutes === 0 && seconds === 0){
				alert("Time's up! Good answers: " + good + " Wrong Answers: " + wrong);
				quitGame();
			}
		}, 1000)
		
	}
}
function randomPic(amount){
	let playersRandomArray = [];
	for(let i = 0; i<=playerNamesArray.length; i++){
		playersRandomArray.push(playerNamesArray[i]);
	}
	var playerArray = [];
	while(playerArray.length <= amount-1){
		let randomNumber = Math.floor(Math.random() * 10);
		if(playersRandomArray[randomNumber] != null){
			playerArray.push(playersRandomArray[randomNumber]);
			playerArray[randomNumber] = null;
		}
	}
	return playerArray;
}

for(let i = 0; i <= 2; i++){
	document.getElementById("answerBtn" + i).onclick = function(){
		if(document.getElementById("answerBtn" + i).innerText === randomPlayers[good]){
			good++;
			goodAnswers.innerText = good;
			if(randomPlayers.length != good){
				makeGuess(randomPlayers[good]);
			}
			else{
				alert("Good answers: " + good + " Wrong Answers: " + wrong);
				quit();
			}
		}
		else{
			wrong++;
			wrongAnswers.innerText = wrong;
		}
	}
}

function makeGuess(checking){
	playerPic.src = "images/players" + checking + ".jpg";
	buttonNames = [checking];
	buttonPlacement = [];

	while(buttonNames <= 2){
		let name = Math.floor(Math.random() * 10);
		if(buttonNames.indexOf(playerNamesArray[name]) === -1){
			buttonNames.push(playerNamesArray[name]);
		}
	}
	while(buttonPlacement.length <= 2){
		let namePlace = Math.floor(Math.random() * 3);
		if(buttonPlacement.indexOf(namePlace) === -1){
			buttonPlacement.push(namePlace);
		}
	}
	for(let i = 0; i<=buttonPlacement.length-1; i++){
		document.getElementById('answerBtn' + buttonPlacement[i]).innerText = buttonNames[i];
	}
	quitBtn.onclick = function(){
		var quitConfirm = confirm("Are you sure you want to quit?");
		if(quitConfirm === true){
			quitGame()
		}
	}
	
	
}

function quitGame(){
	clearInterval(timer);
	minutes = 0;
	seconds = 0;
	good = 0;
	goodAnswers.innerText = good;
	wrong = 0;
	wrongAnswers.innerText = wrong;
	randomPlayers = []; 
}





