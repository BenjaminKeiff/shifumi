const ciseauxBtn = document.querySelector('#ciseaux');
const pierreBtn = document.querySelector('#pierre');
const feuilleBtn = document.querySelector('#feuille');
const image = document.querySelector('#Pimg');
const computerImg = document.querySelector('#Cimg');
let choice = "";
let computerArray = ["pierre", "feuille", "ciseau"];
let playerScoreDisplay = document.querySelector('#Pscore');
let computerScoreDisplay = document.querySelector('#Cscore');
let playerScore = 0;
let computerScore = 0;
let computerChoice;
const replayBtn = document.querySelector('#reset');

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
    if (computerChoice === "ciseaux") {
        computerImg.src = "ciseaux.png";
    } else if (computerChoice === "pierre") {
        computerImg.src = "pierre.png";
    } else if (computerChoice === "feuille") {
        computerImg.src = "feuille.png";
    }
    // ____________________________________________________________
    // ________________Condition de victoire_______________________
    // ____________________________________________________________

    if (choice === "pierre") {
        if (computerChoice === "ciseaux") {
            playerScore += 1;
            updateScore();
        } else if (computerChoice === "papier") {
            computerScore += 1;
            updateScore();
        }
    } else if (choice === "papier") {
        if (computerChoice === "pierre") {
            playerScore += 1;
            updateScore();
        } else if (computerChoice === "ciseaux") {
            computerScore += 1;
            updateScore();
        }
    } else if (choice === "ciseaux") {
        if (computerChoice === "feuille") {
            playerScore += 1;
            updateScore();
        } else if (computerChoice === "pierre") {
            computerScore += 1;
            updateScore();
        }
    }
}

replayBtn.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    image = "";
    computerImg = "";
});

function updateScore() {
    playerScoreDisplay = playerScore;
    computerScoreDisplay = computerScore;
}

function randomComputerChoice() {
    computer[(Math.floor(Math.random() * computer.length))];
}

function soundgame() {
    // déclaration des varaibles
    var x = document.getElementById("myAudio");
    var play = document.querySelector("#play");
    var pause = document.querySelector("#pause");
    // cache le bouton pause
    pause.style.display = "none";
    // lors du clic sur le bouton play lance la fonction qui fait jouer l'audio
    play.addEventListener('click', function () {
        // fait play sur l'audio dans MyAudio 
        x.play();
        // cache le bouton play pour afficher le bouton pause
        play.style.display = "none";
        pause.style.display = "inline";
    })

    // même chose que pour play sauf pour mettre en pause la musique
    pause.addEventListener('click', function () {
        x.pause()
        play.style.display = "inline";
        pause.style.display = "none";
    })
}

soundgame();