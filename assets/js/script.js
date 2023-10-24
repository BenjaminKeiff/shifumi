const ciseauxBtn = document.querySelector('#ciseaux-btn');
const pierreBtn = document.querySelector('#pierre-btn');
const feuilleBtn = document.querySelector('#feuille-btn');
const image = document.querySelector('#player-choice')
let choice = "";
let computerArray = ["pierre", "feuille", "ciseau"];

    // ____________________________________________________________
    // _______________________choix du joueur______________________
    // ____________________________________________________________


pierreBtn.addEventListener('click', () => {
    choice = "pierre";
    image.src = "pierre";
    // startGame;
});

ciseauxBtn.addEventListener('click', () => {
    choice = "ciseaux";
    image.src = "ciseaux";
    // startGame;
});

feuilleBtn.addEventListener('click', () => {
    choice = "ciseaux";
    image.src = "ciseaux";
    // startGame;
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

    // ____________________________________________________________
    // ____________________________________________________________
    // ____________________________________________________________

}

function randomComputerChoice() {
    computer[(Math.floor(Math.random() * computer.length))];
}