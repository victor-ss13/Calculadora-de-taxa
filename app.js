//Montar o cálculo da fórmula anotada no caderno

let taxaDoCartao = 0.0261;
let saldoRestante = 1000;
let valorDaTaxa = (saldoRestante * taxaDoCartao) / (taxaDoCartao - 1);
let valorPedido = saldoRestante + (-valorDaTaxa);

console.log("O valor da taxa é:", valorDaTaxa);
console.log("O valor do pedido é:", valorPedido);
