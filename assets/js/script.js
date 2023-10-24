const ciseauxBtn = document.querySelector('#ciseaux');
const pierreBtn = document.querySelector('#pierre');
const feuilleBtn = document.querySelector('#feuille');
const image = document.querySelector('#Pimg');
const computerImg=document.querySelector('#Cimg');
let choice = "";
let computerArray = ["pierre", "feuille", "ciseau"];
let playerScoreDisplay=document.querySelector('#Pscore');
let computerScoreDisplay=document.querySelector('#Cscore');
let playerScore = 0;
let computerScore = 0;
let computerChoice;
    // ____________________________________________________________
    // _______________________choix du joueur______________________
    // ____________________________________________________________


pierreBtn.addEventListener('click', () => {
    choice = "pierre";
    image.src = "pierre.png";
    startGame;
});

ciseauxBtn.addEventListener('click', () => {
    choice = "ciseaux";
    image.src = "ciseaux.png";
    startGame;
});

feuilleBtn.addEventListener('click', () => {
    choice = "ciseaux";
    image.src = "ciseaux.png";
    startGame;
});

function startGame() {
    // ____________________________________________________________
    // __________________choix de l'ordinateur_____________________
    // ____________________________________________________________


    computerChoice = randomComputerChoice();
    if(computerChoice==="ciseaux"){
        computerImg.src="ciseaux.png";
    }else if(computerChoice==="pierre"){
        computerImg.src="pierre.png";
    }else if(computerChoice==="feuille"){
        computerImg.src="feuille.png";
    }
    // ____________________________________________________________
    // ________________Condition de victoire_______________________
    // ____________________________________________________________

    if(choice==="pierre"){
        if(computerChoice==="ciseaux"){
            playerScore+=1;
            updateScore();
        }else if(computerChoice==="papier"){
            computerScore+=1;
            updateScore();
        }
    }else if(choice==="papier"){
        if(computerChoice==="pierre"){
            playerScore+=1;
            updateScore();
        }else if(computerChoice==="ciseaux"){
            computerScore+=1;
            updateScore();
        }
    }else if(choice==="ciseaux"){
        if(computerChoice==="feuille"){
            playerScore+=1;
            updateScore();
        }else if(computerChoice==="pierre"){
            computerScore+=1;
            updateScore();
        }
    }

}

function updateScore(){
    playerScoreDisplay=playerScore;
    computerScoreDisplay=computerScore;
}

function randomComputerChoice() {
    computer[(Math.floor(Math.random() * computer.length))];
}