/* 
Snack3
Generatore di “nomi cognomi” casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi, 
e da queste vuole generare una falsa lista di invitati con nome e cognome.
*/

// Creo una lista di nomi
const names = ['alessandro','gioele','santiago','antonella'];

// Creo una lista di cognomi
const lastNames = ['boccardi', 'riccio','del piero','chiellini'];

// Creo una lista per i cogmoni random
const randomList = []

let randomName;
let randomLastName;

for(let i = 0; i < names.length; i++){
    // Creo una variabile per il nome casuale
    randomName = names[Math.floor(Math.random() * names.length)]; 
    // console.log(randomName)

    // Creo una variabile per il cognome casuale
    randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    // console.log(randomName)
    
    randomList.push(`${randomName} ${randomLastName}`)
    
}

    
    console.log(randomList);

  
// console.log(`${names[randomName]} ${lastNames[randomLastName]} può partecipare alla festa`);
