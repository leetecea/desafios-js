//1 - Criar um loop que conte de 1 até 10 usando FOR
for(let numero = 1; numero <= 10; numero ++){
    console.log("Loop com For:",numero);
}

//2 - Criar um loop que conte de 10 até 1 usando WHILE
let contagem = 10;
while(contagem >= 1 ){
    console.log("Contagem com While:",contagem);
    contagem-- ;
}

//3 - Criar um loop que conte todos os números ímpares de 1 até 100
for(let impares = 1; impares <= 100; impares +=2){
    console.log("Números ímpares com For:", impares);
}

//4- Criar um loop que conte todos os números pares de 0 a 100
let pares = 0;
while(pares <= 100){
    console.log("Números pares com While:", pares);
    pares+=2;
}