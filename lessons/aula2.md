# 💰 Aula 2 – Estrutura Condicional e Cálculo de Descontos

📅 **Data:** 12/06/2025  
📚 **Mentoria:** [Mentoria 2.0 – Júlio de Lima](https://mentoria.juliodelima.com.br/)

---

## 🧠 Aprendizados

Nesta aula, colocamos em prática conceitos essenciais de **lógica de programação**, com foco em:

- Uso de variáveis com `const`
- Operações matemáticas: subtração e porcentagem
- `console.log()` com mensagens personalizadas
- Uso da função `.toFixed(2)` para formatação de valores
- Criação de **funções reutilizáveis** para cálculo de desconto de um produto

---

## 📦 Exemplos práticos

### ✅ Exemplo 1 – Desconto fixo em reais

```javascript
// Valor original do produto
const valorDoProduto = 55.00;

// Valor do desconto concedido
const valorDesconto = 10.00;

// Cálculo do valor final com desconto aplicado
const descontoProduto = valorDoProduto - valorDesconto;

// Exiba o resultado com Desconto
console.log(`Você pagará R$ ${descontoProduto.toFixed(2)}`);


### ✅ Exemplo 2 – Desconto aplicado em porcentagem
// Valor original do produto aplicando 10% de Desconto
const valorDoProduto = 55.0;

// Valor do desconto concedido
const percentualDoDesconto = 10.0;

// Cálculo do valor do desconto em reais
const valorDesconto = (percentualDoDesconto * valorDoProduto) / 100;

// Subtraia o valor do produto pelo valor do Desconto
const valorFinalDoProduto = valorDoProduto - valorDesconto;

// Exiba o resultado com Desconto
console.log(`Você pagará R$ ${valorFinalDoProduto.toFixed(2)}`);


### ✅ Exemplo 3 – Usando conceito de Função
function calculaDesconto(valorDoDesconto, valorDoProduto) {
  return valorDoProduto - valorDoDesconto;
}

const valorFinalDoProduto = calculaDesconto(10.0, 55.0);
console.log(valorFinalDoProduto);



## 🧪 Como executar o código no VS Code

### Passo a passo:

1. **Crie um arquivo chamado `script.js`**  
   Copie e cole o código acima dentro desse arquivo.

2. **Abra o terminal no Visual Studio Code**  
   - Vá no menu: `Terminal > Novo Terminal`  
   - Ou use o atalho de teclado: `Ctrl + aspas` (Ctrl + `)

3. **Execute o arquivo com Node.js**  
   No terminal, digite o seguinte comando e pressione Enter:

   ```bash
   node script.js

