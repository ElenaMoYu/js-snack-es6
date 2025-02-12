// Snack 1
// Crea un array composto da 10 automobili.
// Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

// Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.

// Infine stampa separatamente i 3 array.

const cars = ["Toyota", "Mazda", "Renault", "Audi", ""];

// Snack 2
// A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.

// Es: ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino']

const disney = ["scar", "MULAN", "jafar"];

const disneyString = disney.toString;
const disneyLowercase = disneyString.to;

// Snack 3
// Crea un array di oggetti che rappresentano degli animali.
// Ogni animale ha un nome, una famiglia e una classe.
// Es:
// [
//   { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
//   { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
//   { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
// ]
// Crea un nuovo array con la lista dei mammiferi.

const animals = [
  {
    name: "lion",
    family: "feline",
    class: "mammals'",
  },
  {
    name: "dog",
    family: "canines",
    class: "mammals'",
  },
  {
    name: "hen",
    family: "aves",
    class: "birds'",
  },
];

console.log(Object.values("mammals"));

// Snack 4
// Crea un array di oggetti che rappresentano delle persone.
// Ogni persona ha un nome, un cognome e un'età.

// Partendo da questo, crea quindi un nuovo array inserendo, per ogni persona, una frase (stringa) con il nome e cognome
//  e l'indicazione se può guidare, in base all'età.
