// var p1Button = document.querySelector("#p1");
// var p2Button = document.querySelector("#p2");
// var resetButton = document.querySelector("#reset");
// var num1 = document.querySelector("#score1");
// var num2 = document.querySelector("#score2");

// var finalScore = document.querySelector("input");
// var winnerScore = document.querySelector("#winningScore2")

// var p1Score = 0;
// var p2Score = 0;
// var winningScore;
// var gameOver = false;

// p1Button.addEventListener("click", function(){ 
// 	if (!gameOver ) {
// 		p1Score += 1;
// 		//document.querySelector("h1").textContent = p1Score + " to " + p2Score;
// 		num1.textContent = p1Score;
// 			if (p1Score === winningScore) {
				
// 				num1.classList.add("firstPlayer");
// 				gameOver = true;
				
// 			}

// 	}

	 

// });

// p2Button.addEventListener("click", function(){ 
// 	if (!gameOver) {
// 		p2Score += 1;
// 		//document.querySelector("h1").textContent = p1Score + " to " + p2Score;
// 		num2.textContent = p2Score;
// 		   if (p2Score === winningScore) {
		   
// 		   	num2.classList.add("firstPlayer");
// 		   	gameOver = true;
			
			
// 			}
// 	}

	

// });

// resetButton.addEventListener("click", function(){ 
// 	gameOver = false;
// 	p1Score = 0;
// 	p2Score = 0;
// 	num1.textContent = p1Score;
// 	num2.textContent = p2Score;
// 	winnerScore.textContent = 0;

// 	num1.classList.remove("firstPlayer");
// 	num2.classList.remove("firstPlayer");

// });

// finalScore.addEventListener("change", function() {
// 	winnerScore.textContent = finalScore.value;
// 	winningScore = Number(finalScore.value);

// });


const player1 = document.querySelector(".is-primary");
const player2 = document.querySelector(".is-info");
const reset = document.querySelector(".is-danger");

const firstPlayer = document.querySelector("#first-player");
const secondPlayer = document.querySelector("#second-player");
const selector = document.querySelector("#playto");

let firstPlayerScore = Number(firstPlayer.innerText);
let secondPlayerScore = Number(secondPlayer.innerText);

let selectorValue = Number(selector.value)



player1.addEventListener('click', (e)=>{
	if (firstPlayerScore < selectorValue) {
		firstPlayerScore++;
		firstPlayer.innerText = firstPlayerScore.toString();

		if (firstPlayerScore === selectorValue) {
			firstPlayer.classList.add("winning");
			secondPlayer.classList.add("loser")
		}
	}	

});


player2.addEventListener('click', (e)=>{
	if (secondPlayerScore < selectorValue) {
		secondPlayerScore++;
		secondPlayer.innerText = secondPlayerScore.toString();

		if (secondPlayerScore === selectorValue) {
			secondPlayer.classList.add("winning");
			firstPlayer.classList.add("loser")
		}
	}
	

	
});



 const resetFunction = () => {
	firstPlayerScore = 0;
	secondPlayerScore = 0;
	firstPlayer.innerText = '0';
	secondPlayer.innerText = '0';
	secondPlayer.classList.remove("winning");
	secondPlayer.classList.remove("loser")
	firstPlayer.classList.remove("winning");
	firstPlayer.classList.remove("loser")
 };

 reset.addEventListener('click', resetFunction);

selector.addEventListener('change', ()=> {
 	
 	selectorValue = Number(selector.value)
	resetFunction();
 });