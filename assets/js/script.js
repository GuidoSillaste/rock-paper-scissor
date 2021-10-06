let result = 'Start';
let yourScore = 0;
let aiScore = 0;
let game = "threeCards";

function showScore() {
    document.getElementById("playerscore").innerText = yourScore;
	document.getElementById("aiscore").innerText = aiScore;	
	document.getElementById("result").innerText = result;
}

function playGame(humanInput) {
    let yourChoice = humanInput.textContent;
    let aiSelection = getAiSelection();
    let result = calcResult(yourChoice, aiSelection);
    document.getElementById("vstext").innerText = yourChoice + ' VS ' + aiSelection;
    showScore();
}

function getAiSelection() {
    let options = ['rock', 'paper', 'scissors'];
    let aiSelector = options[Math.floor(Math.random()*options.length)];
    return aiSelector;
}

function calcResult(you, ai) {
    let parameter = (you === 'Rock' && ai === 'Scissors') || (you === 'Paper' && ai === 'Rock') || (you === 'Scissors' && ai === 'Paper');
    let parameter2 =(you === 'Rock' && ai === 'Scissors') || (you === 'Paper' && ai === 'Rock') || (you === 'Scissors' && ai === 'Paper') || (you === 'Rock' && ai === 'Lizard') || (you === 'Paper' && ai === 'Spock') || (you === 'Scissors' && ai === 'Lizard') || (you === 'Spock' && ai === 'Scissors') || (you === 'Spock' && ai === 'Rock') || (you === 'Lizard' && ai === 'Paper') || (you === 'Lizard' && ai === 'Spock'); 
    let lives = 3;
    
    if(game === "threeCards"){
    if (you === ai) {
        result = 'Draw'
        return;
    } else if (parameter) {
        yourScore += 1;
        if (yourScore == lives) {
            result = "You Win";
            endgame();
        } else {
            result = "Wins";
            return;
        }
    } else {
        aiScore += 1;
        if(aiScore == lives) {
            result = "Ai Wins";
            endgame();
        } else {
            result = "Lose";
            return;
        }
    }
} else if(game === "fiveCards") {
    lives = 5;
    if (you === ai) {
        result = 'Draw'
        return;
    } else if (parameter2) {
        yourScore += 1;
        if (yourScore == lives) {
            result = "You Win";
            endgame();
        } else {
            result = "Wins";
            return;
        }
    } else {
        aiScore += 1;
        if(aiScore == lives) {
            result = "Ai Wins";
            endgame();
        } else {
            result = "Lose";
            return;
        }
    }
} else if(game === "limitless") {
    lives = 999;
    if (you === ai) {
        result = 'Draw'
        return;
    } else if (parameter) {
        yourScore += 1;
        if (yourScore == 3) {
            result = "You Win";
            endgame();
        } else {
            result = "Wins";
            return;
        }
    } else {
        aiScore += 1;
        if(aiScore == 3) {
            result = "Ai Wins";
            endgame();
        } else {
            result = "Lose";
            return;
        }
    }
}
}

function endgame() {
    let ele = document.getElementById('startgame');
    ele.remove();
    document.getElementById("hidden").style.display = "block";
    showScore();
}
function fiveCards() {
    document.getElementsByClassName("diff").style.display = "block";
}