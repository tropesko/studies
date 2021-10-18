console.log(`Trabalhando com condicionais`);
const idadeComprador = 17;
const estaAcompanhada = false;
const temPassagemComprada = true;

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`
);

listaDeDestinos.splice(1, 1); // removendo item

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade");
//     console.log(listaDeDestinos);
// } else if (estaAcompanhada) {
//     console.log("Comprador está acompanhado");
//     console.log(listaDeDestinos);
// } else {
//     console.log("Não é maior de idade, não podemos vender");
// }

console.log("Embarque: \n\n") // Alt 92
if(idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa viagem!");
}else{
    console.log("Você não pode embarcar.");
}

// if ((idadeComprador >= 18) || estaAcompanhada == true) { // Alt 124
//     // Comprador maior de idade
//     console.log("Boa viagem!");
//     console.log(listaDeDestinos);
// } else {
//     console.log("Não é maior de idade, não podemos vender");
// }