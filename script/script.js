let playersArray = [{
	img:'images/Burger.jpg', 
	name:'Wouter Burger'
}, {
	img:'images/Katterbach.jpg', 
	name:'Noah Katterbach'
}, 
{
	img:'images/Lang.jpg', 
	name:'Michael Lang'
}, 
{
	img:'images/Lidner.jpg', 
	name:'Heinz Lindner'
}, 
{
	img:'images/Djiga.jpg', 
	name:'Yacouba Nasser Djiga'
}, 
{
	img: 'images/Kasami.jpg', 
	name:'Pajtim Kasami'
}, 
{
	img:'images/Fernandes.jpg', 
	name:'Joelson Fernandes'
}, 
{
	img:'images/gebhardt.jpg',
	name:'Felix Gebhardt'
}, 
{
	img:'images/nikolic.jpg', 
	name:'Djorde Nikolic'
}, 
{
	img:'images/Millar.jpg', 
	name:'Liam Millar'
}];

var playerPic = document.getElementById('playerpic');
var startBtn = document.getElementById('startBtn');
var answer1 = document.getElementById('answer1');
var answer2 = document.getElementById('answer2');
var answer3 = document.getElementById('answer3');



//randomizes the players

let randomizedArray = [];

while(playersArray.length !== 0){
	let randomizedIndex = Math.floor(Math.random()* playersArray);
	randomizedArray.push(playersArray[randomizedIndex]);
	playersArray.splice(randomizedArray, 1);
}
function randomPic(){
	let playersRandomArray = [];
	for(let i = 0; i<=playersArray.length; i++){
		playersRandomArray.push(playersArray[i]);
	}
	var playerArray = [];
	while(playerArray.length <= )
}

function checkAnswer(checking){
	
}

let totalTimer = 40;
let currentTime = totalTimer - 1;
let timer;
function startTimer() {
	currentTime--
	var timePrecent = currentTime/totalTimer * 100;
	document.getElementById('timeline').style.width = timePrecent + '%';
	if (currentTime === 0) {
		clearInterval(timer);
	}
}

function startGame() {
	timer = setInterval(startTimer, 600);
	document.getElementById('timeline').style.display = "inline-block";
	document.getElementById('timeText').innerHTML = "";

}

startBtn.onclick