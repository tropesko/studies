console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

console.log("Destinos possíveis:");
// console.log(salvador, saoPaulo, rioDeJaneiro);


const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`
);

listaDeDestinos.push(`Porto Alegre`); // adicionando item
listaDeDestinos.splice(1,1); // removendo item

console.log(listaDeDestinos[1]);