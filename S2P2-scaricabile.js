// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
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

const prices = [34, 5, 2]
const shippingCost = 50
let utenteCheEffettuaLAcquisto = amy

let costoTotale = 0;

// Somma dei prezzi
for (let i = 0; i < prices.length; i++) {
  costoTotale += prices[i];
}
console.log("Il costo totale dei prezzi è: ", costoTotale)

// Applica lo sconto del 30% se l'utente è un ambasciatore
if (utenteCheEffettuaLAcquisto.isAmbassador) {
  costoTotale *= 0.7;
}
console.log("Il costo totale del carrello sconto ambassador è: " + costoTotale)



// Aggiungi il costo di spedizione se l'utente non è un ambasciatore
if (!utenteCheEffettuaLAcquisto.isAmbassador) {
  costoTotale += shippingCost;
}

console.log("Il costo totale del carrello non scontato è: " + costoTotale);

// Verifica costo di spedizione se carrello supera i 100euro
if (costoTotale <= 100) {
  costoTotale += shippingCost; // Aggiungi il costo di spedizione se il costo totale è inferiore o uguale a 100
}

console.log("Il costo totale del carrello è: " + costoTotale);

const listaDegliUtenti = [];
listaDegliUtenti.push(marco, paul, amy);
console.log(listaDegliUtenti)

for (let i = 0; i < listaDegliUtenti.length; i++) {
  let frase = `${listaDegliUtenti[i].name} ${listaDegliUtenti[i].lastName} `
  if (listaDegliUtenti[i].isAmbassador) {
    frase += "è"
  } else {
    frase += "non è"
  }
  frase += " un ambassador"
  console.log(frase)
}


let utentiSoloAmbassador = [];
for (let i = 0; i < listaDegliUtenti.length; i++) {
  if (listaDegliUtenti[i].isAmbassador) {
    utentiSoloAmbassador.push(listaDegliUtenti[i]);
  }
}
console.log(utentiSoloAmbassador);