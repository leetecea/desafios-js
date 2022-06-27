// Crie um objeto que receba ao menos três propriedades sobre você.

let sobreMim = [{ nome: "Letícia" }, { idade: 23 }, { temPet: true }];
console.log(sobreMim);

// Adicione uma nova propriedade sem alterar seu objeto inicial.

sobreMim.signo = "Escorpião";
console.log(sobreMim);

// Remova uma propriedade desse objeto.

delete sobreMim.idade;

//Mostre no console todas as propriedades desse objeto.

console.log(sobreMim);

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos.
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos.
//Na propriedade amigos, adicione ao menos 4 itens.

let cadastro = [
  {
    nome: "Luciana",
    idade: 28,
    telefone: 5555 - 5555,
    amigos: ["Fred", "Lindoval", "Marcos", "Tamires"],
  },
  {
    nome: "Fred",
    idade: 28,
    telefone: 5555 - 5555,
    amigos: ["Luciana", "Lindoval", "Marcos", "Tamires"],
  },
  {
    nome: "Lindoval",
    idade: 42,
    telefone: 5555 - 5555,
    amigos: ["Fred", "Luciana", "Marcos", "Tamires"],
  },
  {
    nome: "Marcos",
    idade: 25,
    telefone: 5555 - 5555,
    amigos: ["Fred", "Lindoval", "Luciana", "Tamires"],
  },
  {
    nome: "Tamires",
    idade: 18,
    telefone: 5555 - 5555,
    amigos: ["Fred", "Lindoval", "Marcos", "Luciana"],
  },
];
// Mostre no console o nome de um amigo de cada lista.

for (let contador = 0; contador < cadastro.length; contador++) {
  resultado = cadastro[contador].amigos[contador];
  console.log(resultado);
}
