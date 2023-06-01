"use strict";

const app = document.querySelector('#app');
const Cookie = new Cookies();

const scoreSave = 10;
const cookieTime = 450;

let goodAnswers;
let wrongAnswers;


const scoreBoard = [];

const intialiseScoreboard = () => {
	if(Cookie.exists("scoreboard")){
		let scoreboard = Cookie.value("scoreboard").split("},");
		scoreboard.forEach((item) => {
			if(item !== ""){
				item += "}";
				console.log(item);
				let itemTest = JSON.parse(item);
				scoreBoard.push(itemTest);
			}
		})
	}
}

intialiseScoreboard();

const addScoreToBoard = ( goodAnswer, wrongAnswer, maxSeconds, SecondsLeft, totalPlayers ) => {
	if(scoreBoard.length === scoreSave) scoreBoard.remove(scoreSave-1);

	scoreBoard.push(
		{
			"index": scoreBoard.length + 1,
			"goodAnswer": goodAnswer,
			"wrongAnswer": wrongAnswer,
			"maxSeconds": maxSeconds,
			"secondsLeft": SecondsLeft,
			"totalPlayers": totalPlayers,
			"date": new Date(Date.now())
		}
	);
}

const saveBoard = () => {
	let item = "";

	scoreBoard.forEach((score) => {
		item += JSON.stringify(score);
		item += ",";
	});

	Cookie.create("scoreboard", item, cookieTime, "Strict");
}

const genSortedBoard = (sortBy) => {
	switch(sortBy){
		case "newest":
			app.innerHTML = head;
			app.innerHTML += genSortedBoard(sortBy);

			break;

			default:
				homeScreen();
	}
}

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
	app.innerHTML = item;
}

const showAllPlayers = () => {
	app.innerHTML = header;

}

const layoutTheme = ( color ) => {
	if(Theme.includes(color.toLowerCase())){
		Cookie.create("Theme", color, cookieTime, "Strict");
		window.location.href = "/";
	}
}

const themePicker = ( color ) => {
	if(Theme.includes(color.toLowerCase())){
		Cookie.create("Theme", color, cookieTime, "Strict");
		window.location.href = "/";
	}
}

var playerCount = 0;
var seconds = 0;
function startGame(){
	app.innerHTML = header;

	app.innerHTML += `
	<div class="game">
		Player you want to guess: <input type="number">
	`
}

app.innerHTML = head;