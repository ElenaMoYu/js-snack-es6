// Snack 1
// Crea un array composto da 10 automobili.
// Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
// Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
// Infine stampa separatamente i 3 array.

const cars = [
  { make: "Fiat", model: "Punto", alimentazione: "benzina" },
  { make: "Volkswagen", model: "Golf", alimentazione: "diesel" },
  { make: "Tesla", modello: "Boh", alimentazione: "elettrico" },
  { make: "Ford", modello: "Fiesta", alimentazione: "benzina" },
  { make: "BMW", modello: "X3", alimentazione: "diesel" },
  { make: "Toyota", modello: "Yaris", alimentazione: "gpl" },
  { make: "Opel", modello: "Corsa", alimentazione: "benzina" },
  { make: "Audi", modello: "A3", alimentazione: "diesel" },
  { make: "Renault", modello: "Clio", alimentazione: "metano" },
  { make: "Nissan", modello: "Leaf", alimentazione: "elettrico" },
];

const gasCars = cars.filter((auto) => auto.alimentazione === "benzina");
const dieselCars = cars.filter((auto) => auto.alimentazione === "diesel");
const otherCars = cars.filter(
  (auto) => auto.alimentazione !== "benzina" && auto.alimentazione !== "diesel"
);

console.log(gasCars);
console.log(dieselCars);
console.log(otherCars);

// Snack 2
// A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.
// Es: ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino']

const disney = ["scar", "MULAN", "jafar", "pIpPo", "Ajeje"];



function capitalLetter(word){
      const inizioLettera = disneyLowercase.at(0)
      const res {inizioLettera.}
}

// // Snack 3
// // Crea un array di oggetti che rappresentano degli animali.
// // Ogni animale ha un nome, una famiglia e una classe.
// // Es:
// // [
// //   { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
// //   { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
// //   { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
// // ]
// // Crea un nuovo array con la lista dei mammiferi.

// const animals = [
//   {
//     name: "lion",
//     family: "feline",
//     class: "mammals",
//   },
//   {
//     name: "dog",
//     family: "canines",
//     class: "mammals",
//   },
//   {
//     name: "hen",
//     family: "aves",
//     class: "birds",
//   },
// ];

// const mammals = [{
//       class: "mammals"
// }]
// console.log(

// // Snack 4
// // Crea un array di oggetti che rappresentano delle persone.
// // Ogni persona ha un nome, un cognome e un'età.

// // Partendo da questo, crea quindi un nuovo array inserendo, per ogni persona, una frase (stringa) con il nome e cognome
// //  e l'indicazione se può guidare, in base all'età.

// const people = [
//   {
//     name: "Lisa",
//     lastname: "Dummy",
//     age: "40",

//   }{
//     name: "Marie",
//     lastname: "Dummy",
//     age: "30",
//   },
//   {
//       name: "John",
//       lastname: "Dummy",
//       age: "16",
//   },
// ];
