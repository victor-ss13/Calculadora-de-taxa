//Montar o cálculo da fórmula anotada no caderno

let taxaDoCartao = prompt("Digite a taxa do cartão em números DESCIMAIS");
let saldoRestante = prompt("Digite o saldo restante do pedido");
let valorDaTaxa = (saldoRestante * taxaDoCartao) / (taxaDoCartao - 1);
let valorPedido = saldoRestante + (-valorDaTaxa);

alert("O valor da taxa é:", valorDaTaxa);
alert("O valor do pedido é:", valorPedido);
