/**Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di invitati.*/

function randomNumeroNome(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function randomNumeroCognome(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

const container = document.querySelector(".container");

const nomiFalsi = ["Antonio", "Giuseppe", "Francesco", "Giovanni", "Angelo", "Maria", "Giulia", "Sara", "Rebecca", "Carlo"];

const cognomiFalsi = ["Rossi", "Ferrari", "Russo", "Bianchi", "Esposito", "Bruno", "Greco", "Gallo", "Conti", "Marino"];

let i=0;
let invitatiFalsi = [];

for (i=0; i<10; i++) {
    let randomNome = randomNumeroNome (0, 9);
    let randomCognome = randomNumeroCognome (0, 9);
    invitatiFalsi[i] = i+1 +") " + nomiFalsi[randomNome] +  " " + cognomiFalsi[randomCognome] + " ";
    container.innerHTML += invitatiFalsi[i];
}

//console.log(InvitatiFalsi);