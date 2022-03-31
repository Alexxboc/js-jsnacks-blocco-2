/* 
Snack5 (Bonus)
Crea due array che hanno un numero di elementi diversi. 
Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.
*/

// Creo un array più lungo
const longerList = ['gelato', 'farina', 'caffè', 'latte', 'prosciutto', 'merendine', 'cioccolata'];

// Creo un array più corto
const shorterList = ['zucchine', 'biscotti', 'patatine'];

// Dichiaro una variabile con l'indice 
let i = 0

// Creo un ciclo while
while (shorterList.length != longerList.length) {
    // Aggiungo alla lista più corta gli elementi presi da quella più lunga
    shorterList.push(longerList.pop());
    
i++    
}

console.log(shorterList);


