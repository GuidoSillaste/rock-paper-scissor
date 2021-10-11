let result = 'Pick One';
let yourScore = 0;
let aiScore = 0;
let game = "";
let options = ['Rock', 'Paper', 'Scissors'];

/* event listener for options and rules image was to big had to make it close other way */

document.getElementById('control1').addEventListener('click', buttonClicked);
document.getElementById('control2').addEventListener('click', buttonClicked);
document.getElementById('control3').addEventListener('click', buttonClicked);
document.getElementsByTagName('img')[0].addEventListener('click', () => document.getElementsByClassName('imagecontainer')[0].style.display = "none");

/* function for options giving diffrent result on diffrent buttons */

function buttonClicked() {
    document.getElementsByClassName("rules")[0].style.display = "none";
    document.getElementsByClassName("flexcon")[0].removeAttribute("id");
    document.getElementsByClassName('controls')[0].style.display = "none";
    game = this.getAttribute("data-type");
    result = 'Start';
    if (game === "threeCards") {
        playClassic();
        document.getElementsByClassName('flexcon')[0].style.display = "flex";
    } else if (game === "fiveCards") {
        playSpock();
        document.getElementsByClassName('flexcon')[0].style.display = "flex";
    } else if (game === "limitless" ) {
        playLimitless();
        document.getElementsByClassName('flexcon')[0].style.display = "flex";
    } else {
        alert(`Unknown game type: ${game}`);
    }
}

/* classic option */

function playClassic() {
    document.getElementsByClassName("choice")[0].removeAttribute("id");
    document.getElementsByClassName('diff')[0].style.display = "none";
    document.getElementsByClassName('diff')[1].style.display = "none";
    addAiChoices();
    showScore();
 }    
 
 /* spock option */

function playSpock() {
    document.getElementsByClassName("choice")[0].removeAttribute("id");
    addAiChoices();
    showScore();
}

/* last option made to have a lot more lives */

function playLimitless() {
    document.getElementsByClassName("choice")[0].removeAttribute("id");
    addAiChoices();
    showScore(); 
}

/* adds ai choices */

function addAiChoices() {
    if(game ==="threeCards") {
          if(options.includes('Lizard', 'Spock')) {
        options.splice(2, 2);
    }
    } else if (game === "fiveCards" || "limitless") {
        if(options.includes('Lizard', 'Spock') === false) {
            options.push('Lizard', 'Spock');
        } 
    } 
}

/* reveals the score on load */

function showScore() {
    for(let e = 0; e < document.getElementsByClassName('hidden').length; e++) {
        document.getElementsByClassName('hidden')[e].style.display = "block";
    }
    document.getElementById("playerscore").innerText = yourScore;
	document.getElementById("aiscore").innerText = aiScore;	
	document.getElementById("result").innerText = result;
    document.getElementById("result2").innerText = result;
}

/* gets your input via onclick */

function playGame(humanInput) {
    let yourChoice = humanInput.getAttribute("data-type");
    let aiSelection = getAiSelection();
    let result = calcResult(yourChoice, aiSelection);
    let showresult = document.getElementsByClassName('vstext');
    for (let i = 0; i < showresult.length; i++) {
        document.getElementsByClassName('vstext')[i].style.display = "flex";
    }
    document.getElementById("vstext2").innerText = yourChoice;
    document.getElementById("vstext3").innerText = aiSelection;
    document.getElementById("vstext1").innerText =' VS ';
    showScore();
}

/* caclulates ai choice */

function getAiSelection() {
    let aiSelector = options[Math.floor(Math.random()*options.length)];
    return aiSelector;
}

/* caclulates who wins */

function calcResult(you, ai) {
    let parameter = (you === 'Rock' && ai === 'Scissors') || (you === 'Paper' && ai === 'Rock') || (you === 'Scissors' && ai === 'Paper');
    let parameter2 =(you === 'Rock' && ai === 'Scissors') || (you === 'Paper' && ai === 'Rock') || (you === 'Scissors' && ai === 'Paper') || (you === 'Rock' && ai === 'Lizard') || (you === 'Paper' && ai === 'Spock') || (you === 'Scissors' && ai === 'Lizard') || (you === 'Spock' && ai === 'Scissors') || (you === 'Spock' && ai === 'Rock') || (you === 'Lizard' && ai === 'Paper') || (you === 'Lizard' && ai === 'Spock'); 
    let lives = 3;
    
    if(game === "threeCards"){
    if (you === ai) {
        result = 'Draw';
        return;
    } else if (parameter) {
        yourScore += 1;
        if (yourScore == lives) {
            result = "You Win";
            endgame();
        } else {
            result = "You Win";
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
        result = 'Draw';
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
} else {
    lives = 99;
    if (you === ai) {
        result = 'Draw';
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
}
}

/* hides the image when loaded and reveals or hides when clicked */
function hideimage() {
    let rules = document.getElementsByClassName('imagecontainer')[0].style.display;
    if(rules === "none") {
        document.getElementsByClassName('imagecontainer')[0].style.display = "block";
        console.log('1');
    } else {
        document.getElementsByClassName('imagecontainer')[0].style.display = "none";
        console.log('2');
    }
}

/* restarts the game from the options part */

function endgame() {
    let ele = document.getElementById('startgame');
    ele.remove();
    document.getElementsByClassName("hidden2")[0].remove();
    document.getElementById("hidden").style.display = "block";
    showScore();
}
