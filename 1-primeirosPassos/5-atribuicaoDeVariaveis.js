console.log("Trabalhando com atribuição de variáveis");
let idade = 34;
let nome = "Felipe";
const sobrenome = "Pereira";

// não fazer
// mes = "Janeiro";
console.log("Meu nome é " + nome + " " + sobrenome + ", e tenho " + idade + " anos.");
console.log(`Meu nome é ${nome} ${sobrenome}`);

nome = nome + ' ' + sobrenome;
console.log(nome);

idade = 34; //atribuindo valor
idade = idade + 1;

console.log(idade);