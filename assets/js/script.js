const ciseauxBtn = document.querySelector('#ciseaux-btn');
const pierreBtn = document.querySelector('#pierre-btn');
const feuilleBtn = document.querySelector('#feuille-btn');
const image=document.querySelector('#player-choice')
let choice = "";

pierreBtn.addEventListener('click',()=>{
    choice = "pierre";
    image.src = "pierre";
    startGame;
});

ciseauxBtn.addEventListener('click',()=>{
    choice = "ciseaux";
    image.src = "ciseaux";
    startGame;
});

feuilleBtn.addEventListener('click',()=>{
    choice = "ciseaux";
    image.src = "ciseaux";
    startGame;
});

function startGame(){
    setInterval( function(){
        countdown.classList.add('3');
    },1000);
}