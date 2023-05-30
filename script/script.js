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
		<button onclick="showAllThemes();" class="w3-button w3-yellow">All Themes</button>
		<button onclick="startGame();" class="w3-button w3-blue">Start Quiz</button>
	</div>

</div>
`;

function homeScreen(){
	document.location.href = "/";
}
const showAllThemes = () => {
	let item = `
	${header}
	<div class="w3-container">
		<h3>Color themes choose 1 you like!</h3>
		<button onclick="themePicker('red')>Red</button> 
		<button onclick="themePicker('blue')>blue</button>
		<button onclick="themePicker('white')>white</button>
		<button onclick="themePicker('black')>black</button>

	`;
}

function showAllPlayers(){
	
}
const themePicker = (color) => {

}
var playerCount = 0;
var seconds = 0;
function startGame(){
	
}