import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Felipe", 05280250902);
const cliente2 = new Cliente("Alice", 11122233389);

cliente1.agencia = "1001";
cliente1.saldo = 0;

cliente2.saldo = 0;

const contaCorrenteFelipe = new ContaCorrente(cliente1, 1001);
contaCorrenteFelipe.depositar(500);

conta2.cliente = new Cliente("Alice", 88822233309);
const conta2 = new ContaCorrente(cliente2, 1001);
console.log(conta2);

conta2.agencia = 102;

let valor = 300;
contaCorrenteFelipe.transferir(valor, conta2);

// console.log("valor: ", valor);

