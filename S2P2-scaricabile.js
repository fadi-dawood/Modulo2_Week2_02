// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che
maneggerai saranno array di oggetti!!) quindi assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', 
scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione 
(anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per 
coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.


Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' 
un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"

Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
}

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
}

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
}


const prices = [34, 5, 2];
const shippingCost = 50;
let buyer = marco; //cambia il valore qui per provare se il tuo algoritmo funziona!


let discount = 0.7;
let totalInCart = 0;
let totalToPay = 0;

for (let i = 0; i < prices.length; i++) {
  totalInCart = totalInCart + prices[i];
}

if (buyer.isAmbassador === true) {
  totalToPay = totalInCart * discount;
} else {
  totalToPay = totalInCart;
}

if (totalInCart < 100) {
  totalToPay = totalToPay + shippingCost;
}

console.log(totalToPay)

let clients = [];
let ambassador = [];
clients.push(marco, paul, amy);


for (let i = 0; i < clients.length; i++) {
  if (clients[i].isAmbassador === true) {
    console.log(clients[i].name + " " + clients[i].lastName + " è un ambassador")
  } else {
    console.log(clients[i].name + " " + clients[i].lastName + " NON è un ambassador")
  }
}

for (let i = 0; i < clients.length; i++) {
  if (clients[i].isAmbassador === true) {
    ambassador.push(clients[i])
  }
}



// esercizio extra 1:
/*Scrivi un programma che dato un numero N, generi un array di N numeri casuali e stampi sia l'array ottenuto che quello invertito.
 Esempio:
Input: N = 5
Output: array ottenuto = [3, 5, 10, 2, 8], array invertito = [8, 2, 10, 5, 3] */

let arrayContent = 10;
let array = [];
let convertedArray = [];
let arrayNumber
for (let i = 0; i < arrayContent ; i++){
  arrayNumber = Math.floor(Math.random()*100)
  array.push(arrayNumber)
  convertedArray.unshift(arrayNumber)
}
console.log(array);
console.log(convertedArray);

// esercizio extra 2:
/*Metti un po' d'ordine
Scrivi un programma che dato un array di 10 numeri interi ordinati in modo casuale li riordini in modo decrescente.

Esempio:
Input: array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4]
Output: [8, 7, 6, 5, 5, 3, 2, 1, -4, -2]

Variante:
Prova ad ordinali in modo crescente.*/

//utilizzando l'array fatto nel esercizio 1:

//1- ordinr crescente:
let x 
for (let i=0; i< array.length; i++){
  for (let j=0; j< array.length; j++){
    if (array[i] < array[j]){
      x = array[i]
      array[i] = array[j]
      array[j] = x
    }
  }
}
console.log(array)

//2- ordinr decrescente:
let x1 
for (let i=0; i< array.length; i++){
  for (let j=0; j< array.length; j++){
    if (array[i] > array[j]){
      x1 = array[i]
      array[i] = array[j]
      array[j] = x1
    }
  }
}
console.log(array)




// esercizio extra 3:
/*Operazioni tra array
  Scrivi un programma che dati:
  
2 array di 10 elementi interi casuali compresi tra 1 e 10,
il tipo di operazione aritmetica da effettuare, una delle seguenti:
addizione
sottrazione
moltiplicazione
divisione
Esegua il calcolo tra ogni elemento dei due array, salvando ciascun risultato in un terzo array di appoggio.
Esempio:
Input: a = [3, 7, 2, 5, 8, 1, 2, 5, 6, 4], b = [9, 3, 1, 4, 7, 6, 5, 10, 1, 5], operazione = "addizione"
Output: c = [12, 10, 3, 9, 15, 7, 7, 15, 7, 9]*/

let array1 =[];
let array2 =[];
let finalArray =[];
let operation = "addizione";

for (let index = 0; index < 10 ; index++){
  array1.push(Math.floor(Math.random()*10))
  array2.push(Math.floor(Math.random()*10))
}

for (i = 0; i < array1.length; i++){
  if (operation === "addizione"){
    finalArray[i] = array1[i] + array2[i]
  } else if (operation === "sottrazione"){
    finalArray[i] = array1[i] - array2[i]
  } else if (operation === "moltiplicazione"){
    finalArray[i] = array1[i] * array2[i]
  } else if (operation === "divisione"){
    finalArray[i] = array1[i] / array2[i]
  }
}

console.log(array1)
console.log(array2)
console.log(finalArray)


// esercizio extra 4:
/*La tombola magica
  Scrivi un programma che dato:
  
un array di 10 elementi di numeri casuali interi (compresi tra 1 e 90 senza ripetizioni),
un array di 10 numeri interi a tuo piacimento (compresi tra 1 e 90 senza ripetizioni)
Verifichi quanti numeri scelti da te sono presenti nell'array principale e restituisca un risultato del tipo:
  2 numeri uguali => ambo
  3 numeri uguali => terna
  4 numeri uguali => quaterna
  5 numeri uguali => cinquina
  tutti i numeri uguali => tombola

  In caso di vittoria dovrà essere stampato un messaggio "Hai fatto X",
  in caso di perdita dovrà essere mostrato il messaggio "Mi dispiace, hai perso!".
*/

let randomArray =[];
let personalArray = [5, 40, 81, 16, 45, 65, 41, 37, 45, 80];
let randomNumber;

for (i = 0; i < 10; i++){                               //numeri compresi tra 1 e 90 senza ripetizioni
  randomNumber = Math.floor(Math.random()*90);
  for(j = 0; j < i; j++){
    if (randomNumber === randomArray[j]){
      randomNumber = Math.floor(Math.random()*90);
      j = 0;
    }
  }
  randomArray.push(randomNumber)
}

let y = 0;
for (i = 0; i < personalArray.length; i++){
  for(j = 0; j < randomArray.length; j++){
    if (personalArray[i] === randomArray[j]){
      y = y + 1;
    }
  }
}

if (y === 2){
  console.log("Hai fatto ambo")
} else if (y === 3){
  console.log("Hai fatto terna")
} else if (y === 4){
  console.log("Hai fatto quaterna")
} else if (y === 5){
  console.log("Hai fatto cinquina")
} else if (y === 10){
  console.log("Hai fatto tombola")
} else if (y === 0){
  console.log("Mi dispiace, hai perso!")
}


console.log(randomArray)
console.log(personalArray)
console.log(y)