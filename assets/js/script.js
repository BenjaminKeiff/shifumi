const ciseauxBtn = document.querySelector('#ciseaux-btn');
const pierreBtn = document.querySelector('#pierre-btn');
const feuilleBtn = document.querySelector('#feuille-btn');
const image = document.querySelector('#Pimg');
const computerImg=document.querySelector('#Cimg');
let choice = "";
let computerArray = ["pierre", "feuille", "ciseau"];
let playerScore = 0;
let computerScore = 0;
let computerChoice;
    // ____________________________________________________________
    // _______________________choix du joueur______________________
    // ____________________________________________________________


pierreBtn.addEventListener('click', () => {
    choice = "pierre";
    image.src = "pierre";
    startGame;
});

ciseauxBtn.addEventListener('click', () => {
    choice = "ciseaux";
    image.src = "ciseaux";
    startGame;
});

feuilleBtn.addEventListener('click', () => {
    choice = "ciseaux";
    image.src = "ciseaux";
    startGame;
});

function startGame() {
    // ____________________________________________________________
    // _________________________Décompte___________________________
    // ____________________________________________________________

    const classes = ["class1", "class2", "class3"]; // Changer avec le nom des classes du compte à rebours

    let count = 0;


    function changeClass() {
        if (count < classes.length) {
            const element = document.getElementById("votreElement"); // élément qui accueillera le compte à rebours
            element.className = classes[count];
            count++;
        } else {
            clearInterval(interval);
        }
    }

    changeClass();
    const interval = setInterval(changeClass, 1000);

    // ____________________________________________________________
    // __________________choix de l'ordinateur_____________________
    // ____________________________________________________________


    computerChoice = randomComputerChoice();
    if(computerChoice==="ciseaux"){
        computerImg="ciseaux.png";
    }else if(computerChoice==="pierre"){
        computerImg="pierre.png";
    }else if(computerChoice==="feuille"){
        computerImg="feuille.png";
    }
    // ____________________________________________________________
    // ________________Condition de victoire_______________________
    // ____________________________________________________________

    if(choice==="pierre"){
        if(computerChoice==="ciseaux"){
            playerScore+=1;
        }else if(computerChoice==="papier"){
            computerScore+=1;
        }
    }else if(choice==="papier"){
        if(computerChoice==="pierre"){
            playerScore+=1;
        }else if(computerChoice==="ciseaux"){
            computerScore+=1;
        }
    }else if(choice==="ciseaux"){
        if(computerChoice==="feuille"){
            playerScore+=1;
        }else if(computerChoice==="pierre"){
            computerScore+=1;
        }
    }
}

function randomComputerChoice() {
    computer[(Math.floor(Math.random() * computer.length))];
}