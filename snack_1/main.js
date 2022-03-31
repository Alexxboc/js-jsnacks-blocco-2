/* 
SNACK 1 
Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while.
*/

// let sum, userNumber;
// sum = 0;
// let i = 1;

// while(i <= 5){
//     userNumber = parseInt(prompt(`type a number`))
//     sum += userNumber;
//     i++
// }

// console.log(sum)

let sum, userNumber;
sum = 0;

for (let i = 1; i <= 5; i++){
    userNumber = parseInt(prompt(`type a number`))
    sum += userNumber;
}

console.log(sum)