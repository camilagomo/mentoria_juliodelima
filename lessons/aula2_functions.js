function calculaDesconto(valorDoDesconto, valorDoProduto) {
  return valorDoProduto - valorDoDesconto;
}

const valorFinalDoProduto = calculaDesconto(10.0, 55.0);
console.log(valorFinalDoProduto);
