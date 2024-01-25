// il me faut 3 fonctions: 1 qui démarre peu importe le chiffre
//1 qui fige le chiffre
//1 qui remet le chiffre à 0 et qui n'arrete pas le programme
const affichage = document.querySelector('#affichage');
const goBtn = document.querySelector('#go');
const stopBtn = document.querySelector('#stop');
const resetBtn = document.querySelector('#reset');


goBtn.addEventListener('click', start);

stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);


function compteur(){
    affichage.innerText++;
}

function start(){
    intervalId = setInterval(compteur, 1000)
}

function stop(){
    clearInterval(intervalId);
}

function reset(){
    clearInterval(intervalId);
    affichage.innerText = 0;
}