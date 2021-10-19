import { Cliente } from "./Cliente.js"
import { Gerente } from "./Funcionario/Gerente.js"
import { Diretor } from "./Funcionario/Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Felipe", 10000, 12345678999);
diretor.cadastrarSenha("123456789");

const gerente = new Gerente("Ricardo", 5000, 12345678900);
gerente.cadastrarSenha("1234");

const diretorLogado = SistemaAutenticacao.login(diretor, "123456789");
const gerenteLogado = SistemaAutenticacao.login(gerente, "1234");
const cliente = new Cliente("Felipe", 12345678999, "123456");

const clienteLogado = SistemaAutenticacao.login(cliente, "1234");
console.log(diretorLogado, gerenteLogado, clienteLogado);





// import { ContaCorrente } from "./Conta/ContaCorrente.js";
// import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
// import { ContaSalario } from "./Conta/ContaSalario.js";

// // criação do cliente
// const cliente1 = new Cliente("Felipe", 12345678999);

// // criação da conta corrente
// const contaCorrente = new ContaCorrente(0, cliente1, 1001);
// // contaCorrente.depositar(500);
// // contaCorrente.sacar(10);

// // criação da conta poupança
// const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
// // contaPoupanca.sacar(10);

// // criação da conta salário
// const contaSalario = new ContaSalario(cliente1);
// contaSalario.depositar(100);
// contaSalario.sacar(10);

// console.log(contaSalario);
// // console.log(contaPoupanca);
// // console.log(contaCorrente);

