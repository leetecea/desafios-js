// FUNÇÕES
//Bloco de Código que pode ser executada e utilizada.


// 1º Declarar a função; nome da função com parâmetro
function mensagem(){
  console.log("Primeira vez com Função!");
}

//Ativar a função
mensagem();

//======================================================================

// FUNÇÃO COM PARÂMETRO

// PARÂMETRO
function mostrarNome(nome){
  console.log("Seu nome é:", nome);
}

// ARGUMENTOS
mostrarNome("David");
mostrarNome("Leonardo");
mostrarNome("Mariana");
mostrarNome("Luan");


function soma(numero1, numero2){
  const soma = numero1 + numero2;
  return soma;
}

let resultado = soma(13, 20);
console.log(resultado);

resultado = soma(10, 2);
console.log(resultado);

//======================================================================

function double(numero){
  return numero * 2;
}

console.log(double(50));
console.log(double(120));

//======================================================================

function areaQuadrado(lado){
  return lado * lado;
}

let totalAreaQuadrado = areaQuadrado(20);

console.log("A sua área total é de:", totalAreaQuadrado);

//======================================================================

function pi(){
  return 3.14;
}

let seiLa = 5 * pi();
console.log(seiLa); 

//======================================================================