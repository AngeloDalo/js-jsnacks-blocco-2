/**
 * Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari
 */

function numeroCasuale (min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function sommaArray (somma, numero) {
    somma = somma + numero;
    return somma;
}

let container = document.querySelector(".container")
let array = [];
let somma = 0;
let i = 0;

for (i=0; i<10; i++) {
    let numero = numeroCasuale(1, 100);
    array.push(numero);
    if (i%2 != 0) {
        somma = sommaArray(somma, array[i]);
        container.innerHTML += numero + " ";
    }
    //console.log(numero);
}

alert (somma);