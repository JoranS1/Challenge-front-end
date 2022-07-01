//playerdata
let playersArray = [{
	img:'images\players\Burger.jpg', 
	name:'Wouter Burger'
}, {
	img:'images\players\Katterbach.jpg', 
	name:'Noah Katterbach'
}, 
{
	img:'images\players\Lang.jpg', 
	name:'Michael Lang'
}, 
{
	img:'images\players\Lidner.jpg', 
	name:'Heinz Lindner'
}, 
{
	img:'images\players\Djiga.jpg', 
	name:'Yacouba Nasser Djiga'
}, 
{
	img: 'images\players\Kasami.jpg', 
	name:'Pajtim Kasami'
}, 
{
	img:'images\players\Fernandes.jpg', 
	name:'Joelson Fernandes'
}, 
{
	img:'images\players\gebhardt.jpg',
	name:'Felix Gebhardt'
}, 
{
	img:'images\players\nikolic.jpg', 
	name:'Djorde Nikolic'
}, 
{
	img:'images\players\Millar.jpg', 
	name:'Liam Millar'
}];
// global data for the game
var playerPic = document.getElementById('playerpic');
var startBtn = document.getElementById('startBtn');
var timeInput = document.getElementById('timeAmount');

var quit = document.getElementById('quitBtn');
var goodAnswers = document.getElementById('goodAnswers');
var wrongAnswers = document.getElementById('wrongAnswers');

var good = 0;
var wrong = 0;
var randomPlayers = [];
let minutes = 0;
let seconds = 0;
//starts the game with all the functions
startBtn.onclick() = function(){
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

		randomPlayers = randomPic(playerInput);
		checkAnswer(randomPlayers[good]);
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
	for(let i = 0; i<=playersArray.length; i++){
		playersRandomArray.push(playersArray[i]);
	}
	var playerArray = [];
	while(playerArray.length <= amount-1){
		let randomNumber = Math.floor(Math.random() * 9);
		if(playersRandomArray[randomNumber] != null){
			playerArray.push(playersRandomArray[randomNumber]);

		}
	}
	return playerArray;
}

for(let i = 0; i <= 2; i++){
	document.getElementById('answerBtn' + i).onclick = function(){
		if(document.getElementById('answerBtn' + i).innerText === randomPlayers[good]){
			good++;
			goodAnswers.innerText = good;
		
		}
	}
}

function makeGuess(checking){
	playerPic.src = "\images\players" + checking + ".jpg";
	buttonNames = [checking]
	
	
}

function quit(){

}



quit.onclick = function(){
	
}

