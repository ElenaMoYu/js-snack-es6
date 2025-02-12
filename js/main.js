let persona = {
  nome: "Ajeje",
  eta: 30,
  indirizzo: {
    via: "A casa di tua madre",
  },
};

console.log(persona.indirizzo.via);

for (const key in persona) {
  console.log(key);
  console.log(persona[key]);
}
