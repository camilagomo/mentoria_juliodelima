//12-06-2025
//Valor original do produto aplicando 10% de Desconto

const valorDoProduto = 55.0;

//Valor do desconto concedido
const percentualDoDesconto = 10.0;

//Cálculo do valor final com desconto aplicado (em porcentagem)
const valorDesconto = (percentualDoDesconto * valorDoProduto) / 100;

//Subtraia o valor do produto pelo valor do Desconto
const valorFinalDoProduto = valorDoProduto - valorDesconto;

//Exiba o resultado com Desconto
//console.log(valorFinalDoProduto);
console.log(`Você pagará R$ ${valorFinalDoProduto.toFixed(2)}`);
