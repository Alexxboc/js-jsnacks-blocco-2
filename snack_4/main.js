/* 

Snack4
Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

*/

// FOR LOOP

// // Creo una lista di numeri interi
// const numbers = [1, 57, 4, 6, 22, 10, 33, 18, 24];

// // Dichiaro una variabile per la somma
// let sum = 0;

// // Creo un ciclo for lungo quanto la stringa dell'array
// for (let position = 0; position < numbers.length; position++) {
//     if(position % 2 != 0){
//         sum += numbers[position]

//     }
// }

// console.log(sum)


//  WHILE LOOP 

// Creo una lista di numeri interi
const numbers = [1, 57, 4, 6, 22, 10, 33, 18, 24];

// Dichiaro una variabile per la somma
let sum = 0;

// Dichiaro una variabile per la posizione del numero nella lista
let position = 0;

// Creo un ciclo while 
while(position < numbers.length){
    if(position % 2 != 0){
        sum += numbers[position]
    }
position++    
}

console.log(sum);