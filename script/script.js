"use strict";

const app = document.querySelector('#app');
const Cookie = new Cookies();

const scoreSave = 10;
const cookieTime = 450;

let goodAnswers;
let wrongAnswers;

const startUpTheme = () => {
	if(Cookie.exists("Theme")){
		const ThemeVal = Cookie.value("Themes");
		if(Theme.includes(ThemeVal)){
			document.querySelector("html").classList.add(ThemeVal);
		}
	}
}

const startLayout = () =>{
	if(!Cookie.exists("layout")) layoutName("horizontal");

	const layoutVal = Cookie.value("layout");
	const layoutChoices = ["horizontal", "vertical"];

	if(!layoutChoices.includes(layoutVal)) layoutName("horizontal");

	document.querySelector("html").classList.add(layoutVal);
}

window.addEventListener('DOMContentLoaded', () => {
	startUpTheme();
	startLayout();
})

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

const addScoreToBoard = ( goodAnswer, wrongAnswer, MaxSeconds, SecondsLeft, totalPlayers ) => {
	if(scoreBoard.length === scoreSave) scoreBoard.remove(scoreSave-1);

	scoreBoard.push(
		{
			"index": scoreBoard.length + 1,
			"goodAnswer": goodAnswer,
			"wrongAnswer": wrongAnswer,
			"MaxSeconds": MaxSeconds,
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

const genLastGameBoard = ( sortBy = null ) => {
	let items = `
	<div class="scoreboard w3-margin-left">
	<div class = "sortControl">
	<h4>Sort by</h4>
	<button onclick="genSortedBoard('oldest')" class="w3-button w3-black">Oldest</button> 
	<button onclick="genSortedBoard('newest')" class="w3-button w3-pink">newest</button> 
	</div>
	<h3>Scoreboard</h3>
	`;

	let dates = scoreBoard;
	if(sortBy === "newest"){
		dates.sort((a, b) => a.date - b.date);

		dates.reverse();
	}
	dates.forEach(( item ) => {
		items+=`<div class="item">
		<p>Game: ${item.index}</p>
		<p>Amount of players left to guess: ${item.totalPlayers}</p>
		<p>Good Answers: ${item.goodAnswer}</p>
		<p>Wrong Answers: ${item.wrongAnswer}</p>
		<p>Maximum Time: ${item.MaxSeconds}</p>
		<p>Seconds Left: ${item.SecondsLeft}</p>
		<p>Date of today: ${item.date}</p>
		</div>
		`
	});

	items+="</div>";

	return items;
}

const header = `
<div class="w3-container">
<img src="images/logo-fc-basel.png" class="h-[100px]" id=logo>
<h1 class="w3-large">The official FC Basel player quiz</h1>
<div>
	<button onclick=homeScreen(); class="w3-button w3-red w3-margin-left-32">Home</button>
</div>
</div>
`;

const head = `
${header}
<div class="w3-container">
	<div class="w3-margin-top">
		<button onclick="showAllPlayers();" class="w3-button w3-red">All players</button>
		<button onclick="showAllThemes();" class="w3-button w3-yellow w3-margin-left">All Themes</button>
		<button onclick="startGame();" class="w3-button w3-blue w3-margin-left">Start Quiz</button>
	</div>

</div>
`;

function homeScreen(){
	document.location.href = "./index.html";
}
const showAllThemes = () => {
	let item = `
	${header}
	<div class="w3-container">
		<h3>Color themes choose 1 you like!</h3>
		<label for="white">White:</label>
		<input type="radio" id="white" name="colors" value="white" checked>
		<label for="dark">Dark:</label>
		<input type="radio" id="dark" name="colors" value="dark">
		
		<br>
		
		<h3>Layout themes</h3>
		<button onclick=layoutName("horizontal")>Horizontal</button>
		<button onclick=layoutName("vertical")>Vertical</button>
		</div>
	`;
	app.innerHTML = item;
}

const showAllPlayers = () => {
	app.innerHTML = header;

	let item = "";
	playerArray.forEach((player, number) => {
		item += `<li>${number + 1}: ${player} <img src="./images/players/${player}.jpg" alt="image for ${player}" class="allPlayerImg"></li>`
	});

	app.innerHTML += `<ul class="list--all-players">${item}</ul>`

}

const layoutTheme = ( Color ) => {
	if(Theme.includes(Color.toLowerCase())){
		Cookie.create("layout", Color, cookieTime, "Strict");
		window.location.href = "/";
	}
}

const layoutName = ( Layout ) => {
	if(Layout === "horizontal" || Layout === "vertical"){
		Cookie.create("Theme", Layout, cookieTime, "Strict");
		window.location.href = "/";
	}
}
const themePicker = ( Color ) => {
	if(Theme.includes(Color.toLowerCase())){
		Cookie.create("Theme", Color, cookieTime, "Strict");
		window.location.href = "/";
	}
}

var playerCount = 0;
var SecondsMax = 0;
function startGame(){
	app.innerHTML = header;

	app.innerHTML += `
	<div class="game w3-padding-top-32 w3-margin-left">
		Player you want to guess: <input type="number" id="playerAmount" value="${playerCount}" max="${playerArray.length}" min="0"></input>
		<br>
		Time in seconds: <input type="number" min="0" max=${SecondsMax} id="playerSeconds"></input>
		<br>
		<button onclick="randomPlayer();" class="w3-button w3-red w3-margin-top">Start</button>
		</div>
	`
}
//Randomize the player images 
const randomPlayer = () => {
	let playerAmount = document.querySelector("input#playerAmount").value;
	let playerSeconds = document.querySelector("input#playerSeconds").value;

	SecondsMax = playerSeconds;
	playerCount = playerAmount;
	if(playerAmount != 0){
		gameFun();
	}
	else{
		alert("You can't guess 0 players")
	}
}

const genPlayerName = () => {
	let number = Math.floor(Math.random() * playerArray.length);
	return playerArray[number];
}

var curPlayerAmount;
var currentPlayer;
var remainingPlayer;
//Checks if the name selected is correct to the image selected
const valueCheck = (namePlayer) => {
	if(remainingPlayer != 0){
		let checkbox = document.querySelector(`#` + namePlayer);
		if(checkbox !== null && checkbox !== undefined){
			if(checkbox.checked){
				goodAnswers++;
				let correctAnw = document.getElementsByClassName(namePlayer);
				correctAnw[0].remove();
				correctAnw[0].remove();
				console.log(remainingPlayer);
				remainingPlayer--;
			}
			else{
				wrongAnswers++;
				let item = document.querySelectorAll('input[type=checkbox]');
				for(let i = 0; i < item.length; i++){
					item[i].checked = false;
				}
			}
		}
	}
	else{
		goodAnswers++;
		finishedGame(interval, seconds)
	}
}

var interval;
var seconds = 0;

const gameFun = () => {
	seconds = parseInt(SecondsMax);
	let playerArr = [];

	for(let i = 0; i < parseInt(playerCount); i++){
		let playerName = genPlayerName();
		if(!playerArr.includes(playerName)) playerArr.push(playerName);
	}

	remainingPlayer = parseInt(playerCount) - 1;

	let names = "<div class='namesHolder w3-margin-left'>";
	let images = "<div class='imageHolder'>";

	playerArr.forEach((val) => {
		images += `<div class="${val}">
		<img src="./images/players/${val}.jpg" onclick="valueCheck('${val}')"> 
		</div>
		`
	})

	playerArr.sort().forEach((val) => {
		names += `<div class="${val}">
		<input class="hidden" id="${val}" type="checkbox"></input>
		<label for="${val}">${val}</label>
		</div>
		`
	});
	names+="</div>";
	images+="</div>";

	app.innerHTML = `<div class="timer w3-padding-bottom-16" style = "--max-time: ${SecondsMax}; --current-time-left:${SecondsMax};"><span>${SecondsMax}</span></div>`

	app.innerHTML += `<div class="topContainer">
	${names}
	${images}
	</div>
	`;

	if(curPlayerAmount === undefined){
		curPlayerAmount = 0;
		wrongAnswers = 0;
		goodAnswers = 0;
	}

	interval = setInterval(() => {
			if(document.querySelector(".timer") !== undefined || document.querySelector(".timer") !== null){
				let timer = document.querySelector(".timer");
				timer.innerHTML = `<span>${seconds}</span>`;

				timer.style.setProperty("--current-time-left", seconds);
			}

			if(seconds === 0 ){
				finishedGame(interval, seconds);
				alert("time is up!");
			}
			seconds--;
	}, 1000);
}

const finishedGame = ( interval, secondsLeft) => {
	clearInterval(interval);
	app.innerHTML = header;
	app.innerHTML += `
	<ul>
		<li>Amount of questions: ${playerCount}</li>
		<li>Starting seconds: ${SecondsMax}</li>
		<li>Remaining seconds: ${secondsLeft}</li>
		<li>Questions answered right: ${goodAnswers}</li>
		<li>Questions answered wrong: ${wrongAnswers}</li>
	</ul>
	`;

	addScoreToBoard(goodAnswers, wrongAnswers, SecondsMax, secondsLeft, playerCount);
	console.log(genLastGameBoard());
	goodAnswers = 0;
	wrongAnswers = 0;
}

app.innerHTML = head;
app.innerHTML += genLastGameBoard();