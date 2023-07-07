//Montar o cálculo da fórmula anotada no caderno
alert ("Digite os números com '.' no lugar das vírgulas")
let taxaDoCartao = prompt("Digite a taxa do cartão");
let saldoRestante = prompt("Digite o saldo restante do pedido");

taxaDoCartao = parseFloat(taxaDoCartao);
saldoRestante = parseFloat(saldoRestante);

let valorDaTaxa = (saldoRestante * taxaDoCartao) / (taxaDoCartao - 1);
let valorPedido = saldoRestante + (-valorDaTaxa);

alert("O valor da taxa é:" + valorDaTaxa.toFixed(2));
alert("O valor do pedido é:" + valorPedido.toFixed(2));
