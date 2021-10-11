let result = 'Start';
let yourScore = 0;
let aiScore = 0;
let game = "";
let options = ['Rock', 'Paper', 'Scissors'];
document.getElementById('control1').addEventListener('click', buttonClicked);
document.getElementById('control2').addEventListener('click', buttonClicked);
document.getElementById('control3').addEventListener('click', buttonClicked);

function buttonClicked() {
    document.getElementsByClassName("rules")[0].style.display = "none";
    document.getElementsByClassName("flexcon")[0].removeAttribute("id");
    document.getElementsByClassName('controls')[0].style.display = "none";
    game = this.getAttribute("data-type");
    result = 'Start';
    if (game === "threeCards") {
        playClassic();
    } else if (game === "fiveCards") {
        playSpock();
    } else if (game === "limitless" ) {
        playLimitless();
    } else {
        alert(`Unknown game type: ${game}`);
    }
}
function playClassic() {
    document.getElementsByClassName("choice")[0].removeAttribute("id");
    document.getElementsByTagName('button')[7].setAttribute("id", "hidden");
    document.getElementsByTagName('button')[8].setAttribute("id", "hidden");
    addAiChoices()
    resetscore();
    showScore();
 }    
 
function playSpock() {
    document.getElementsByClassName("choice")[0].removeAttribute("id");
    document.getElementsByTagName('button')[7].removeAttribute("id");
    document.getElementsByTagName('button')[8].removeAttribute("id");
    addAiChoices()
    resetscore();
    showScore();
    
}
function playLimitless() {
    document.getElementsByClassName("choice")[0].removeAttribute("id");
    document.getElementsByTagName('button')[7].removeAttribute("id");
    document.getElementsByTagName('button')[8].removeAttribute("id");
    addAiChoices()
    resetscore();
    showScore();
    
}
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
function resetscore() {
    document.getElementById("aiscore").innerText = aiScore;	
	document.getElementById("result").innerText = result;
     yourScore = 0;
     aiScore = 0;
}

function showScore() {
    for(let e = 0; e < document.getElementsByClassName('hidden').length; e++) {
        document.getElementsByClassName('hidden')[e].style.display = "block";
    }
    document.getElementById("playerscore").innerText = yourScore;
	document.getElementById("aiscore").innerText = aiScore;	
	document.getElementById("result").innerText = result;
}

function playGame(humanInput) {
    let yourChoice = humanInput.textContent;
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
    console.log(game);
    console.log(options)
}

function getAiSelection() {
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
} else {
    lives = 99;
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
}
}

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
function endgame() {
    let ele = document.getElementById('startgame');
    ele.remove();
    document.getElementsByClassName("hidden2")[0].remove();
    document.getElementById("hidden").style.display = "block";
    showScore();
}
