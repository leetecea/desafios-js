//1 - crie uma função que exiba uma mensagem no console

function mensagem() {
  console.log("Isso é uma mensagem importante!");
}

mensagem();

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
function exibirNome(nome) {
  console.log(`Exibindo o meu nome: ${nome}`);
}

exibirNome("Letícia");

//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console
function sobreMim(nome, idade, estiloMusical) {
  console.log(
    `Meu nome é ${nome}, tenho ${idade} e meu estilo musical favorito é ${estiloMusical}.`
  );
}

sobreMim("Letícia", "23 anos", "MPB");

//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console
function outros(filme, musica) {
  console.log(`Um filme: ${filme}`, `e uma música: ${musica}`);
}

outros("Um amor para recordar", "Cheira bem");

//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função
function triplo(numero) {
  let resultado = `${numero}` * 3;
  console.log(resultado);
}

triplo(3);
