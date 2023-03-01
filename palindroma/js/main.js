'use strict';

/************
 * functions
 */

// Definisco una funzione che chieda un input all'utente
function askInput(input) {
    //let input;
    do {
        input = prompt('Inserisci una parola');
    } while (input.length <= 1);

    console.log(`input: ${input}`);
    return input;
}

// Definisco una funzione per trasformare una stringa in array
function arrayfy(string) {
    let array = [];
    for (let i = 0; i < string.length; i++) {
        array.push(string[i]);
    }
    
    console.log(`array: ${array}`); 
    return array;
}

// Definisco una funzione per trasformare una stringa in array reverse
function arrayfyReverse(string) {
    let arrayReverse = [];
    for (let i = string.length - 1; i >= 0; i--) {
        arrayReverse.push(string[i]);
    }
    
    console.log(`array in reverse: ${arrayReverse}`);
    return arrayReverse;
}

// Definisco una funzione per comparare due array
function compareArrays(array1, array2) {
    let result;
    for (let i = 0; i < array1.length; i++) {
    
        if (array1[i] === array2[i]) {
            result = 'è palindroma';
        } else {
            result = 'non è palindroma';
        }
    }
    return result
}

/************
 * main
 */

// Salvo h2 in una variabile
const header = document.querySelector('h2');
// Chiedo input all'utente
const word = askInput();
// Trasformo la parola di input in array
const wordArray = arrayfy(word);
// Trasformo la parola di input in array reverse
const wordArrayReverse = arrayfyReverse(word);
// Comparo gli array
const wordCompared = compareArrays(wordArray, wordArrayReverse);
// Stampo il risultato in console
console.log(`La parola '${word}' ${wordCompared}`);
// Stampo il risultato in pagina
header.innerText = `La parola '${word}' ${wordCompared}`;