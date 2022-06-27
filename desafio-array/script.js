// Crie um array que receba 5 itens e exiba no console.

let itensDoQuarto = [
  " Bancada",
  " Guarda-roupa",
  " Cama",
  " Perfumes",
  " Computador",
];
console.log(itensDoQuarto);

// Utilize um método para adicionar um nome ao inicio do array.

itensDoQuarto.unshift(" Canetas");
console.log(
  `Novo item adicionado no INÍCIO (usando UNSHIFT): ${itensDoQuarto}`
);

// Utilize um método para remover o último nome do array.

itensDoQuarto.pop();
console.log(`Item removido do FIM da lista (usando POP). ${itensDoQuarto}`);

// Utilize um método para adicionar dois nomes ao fim do array.

itensDoQuarto.push(" Papel", " Luminária");
console.log(
  `Dois itens adicionados no fim da lisa (usando PUSH) ${itensDoQuarto}`
);

// Utilize um método para remover o primeiro nome do array.

itensDoQuarto.shift();
console.log(`Primeiro item da lista removido (usando SHIFT) ${itensDoQuarto}`);

// Utilize um método para organizar em ordem crescente o seguinte array:
// let numbers = [7,5,6,3,8,9,2,1,4]

let numbers = [7, 5, 6, 3, 8, 9, 2, 1, 4];
numbers.sort(function (a, b) {
  return a - b;
});
console.log(`Números em ordem crescente (utilizando SORT) ${numbers}`);
