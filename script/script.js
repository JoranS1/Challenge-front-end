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
	
}

function answerRender(){
	
}

function setTimer