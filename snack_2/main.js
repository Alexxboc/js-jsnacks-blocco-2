/*

Snack2
Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo.

*/

// Inizializzo una variabile con un numero
let number = 3;

// Creo una condizione che stampi in console il numero se è pari o stampi il numero con incremento di 1 se il numero è dispari
if(number % 2 === 0){
    console.log(number)
} else {
    console.log(++number)
}
