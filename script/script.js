"use strict";

let app = document.querySelector('#app');
const Cookie = new Cookies();

const scoreSave = 10;
const cookieTime = 450;

let goodAnswers;
let wrongAnswers;

const header = `
<div class="w3-container">
<img src="images/logo-fc-basel.png" id=logo>
<h1 class=w3-large>The official FC Basel player quiz</h1>
<div>
	<button onclick=homeScreen(); class="w3-button w3-red">Home</button>
</div>
</div>
`;

const head = `
${header}
<div class="w3-container">
	<div class="w3-margin">
		<button onclick="showAllPlayers();" class="w3-button w3-red">All players</button>
		<button onclick="startGame();" class="w3-button w3-blue">Start Quiz</button>
	</div>

</div>
`;


app.innerHTML = head;

function homeScreen(){
	document.location.href = "/";
}

function showAllPlayers(){
	app.innerHTML = header;

	app.innerHTML +=`<ul class="w3-ul w3-border">`;
	playerNamesArray.forEach(function(player,number){
		app.innerHTML += `<li>${number + 1}: ${player} <img src="./images/players/${player}.jpg" alt="jpg images for ${player}">`; 
	});
	app.innerHTML = `</ul>`;
}

var playerCount = 0;
var seconds = 0;
function startGame(){
	
}