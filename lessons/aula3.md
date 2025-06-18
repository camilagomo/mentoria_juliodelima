# 💰 Aula 3 – Reforçando uso de funções, condicional e Objetos

📅 **Data:** 17/06/2025  
📚 **Mentoria:** [Mentoria 2.0 – Júlio de Lima](https://mentoria.juliodelima.com.br/)

---

## 🧠 Aprendizados

Nesta aula, colocamos em prática conceitos essenciais de **lógica de programação**, com foco em:

- Reforçando conceito de funções
- Uso de Strings para concatenar valores
- Condicional
- Objetos


---

## 📦 Exemplos práticos

### ✅ Exemplo 1 – Função utilizando o Return

```javascript
// Define função para calcular média
function calculaMedia(N1, N2, N3) {
  const mediaCalculada = (N1 + N2 + N3) / 3;
  return mediaCalculada;
}

// Realiza cálculo da Média chamando função calculaMedia e passa valores para parâmetros "N"
const media = calculaMedia(5, 10, 25);

// Exibe o resultado em tela
console.log(media); // Exibe: 13.333...
```
---

### ✅ Exemplo 2 – Função sem o return

```javascript
function calculaMedia(N1, N2, N3) {
  const mediaCalculada = (N1 + N2 + N3) / 3;
  console.log(mediaCalculada); // Mostra direto dentro da função
}

calculaMedia(5, 10, 25); // Aqui não salva o valor, só mostra
```
### ✅ Exemplo 3 – Concatenando valores usando Strings
```javascript

// Desenhando a Função!
function calcularMedia(primeiroNumero, segundoNumero, terceiroNumero) {
  const somaDosTresValores = primeiroNumero + segundoNumero + terceiroNumero
  const resultadoDaMedia = somaDosTresValores / 3
  return resultadoDaMedia
}

// Usar a Função!
const resultadoDaMediaDoMarcio = calcularMedia(5, 7, 9)
console.log('Média do Márcio: ' + resultadoDaMediaDoMarcio)

const resultadoDaMediaDaBea = calcularMedia(4, 8, 12)
console.log('Média da Bea: ' + resultadoDaMediaDaBea)

```
### ✅ Exemplo 4 – Estrutura Condicional

```javascript

function identificarMaioridade(nome, idade) {
  // Se a idade fornecida for maior ou igual a 18 retorne 'Maior' senão retorne 'Menor'
  if (idade >= 50) 
    return `Maioridade do ${nome}: Maduro`
  else if (idade >= 18)
    return `Maioridade do ${nome}: Adulto`
  else if (idade >= 12) 
    return `Maioridade do ${nome}: Adolescente`
  else
    return `Maioridade do ${nome}: Criança`
}

// >, >=, <, <=, ==, !=

const maioridadeDaCelina = identificarMaioridade('Celina', 51)
console.log(maioridadeDaCelina)

const maioridadeDoMarcos = identificarMaioridade('Marcos', 46)
console.log(maioridadeDoMarcos)

const maioridadeDoRonaldo = identificarMaioridade('Ronaldo', 9)
console.log(maioridadeDoRonaldo)

const maioridadeDoLucas = identificarMaioridade('Lucas', 14)
console.log(maioridadeDoLucas)
```
```javascript

function linguagemDosGatosECachorros(animal) {
  if (animal == 'cachorro')
    return 'au au'
  else if (animal == 'gato')
    return 'miau'
  else 
    return ''
}

const linguagemDoCachorro = linguagemDosGatosECachorros('cachorro')
console.log(linguagemDoCachorro)

const linguagemDoGato = linguagemDosGatosECachorros('gato')
console.log(linguagemDoGato)

const linguagemDoPapagaio = linguagemDosGatosECachorros('papagaio')
console.log(linguagemDoPapagaio)
```

```javascript


function identificarClienteVip(valorDoPedido, tipoCliente, descontoDoCliente) {
  // Converte para padrão (tudo maiúsculo) para evitar erro de digitação
  const tipoClienteFormatado = tipoCliente.trim().toUpperCase();

  // Condição de Desconto: Se cliente VIP, aplica 10% no valorDoPedido
  if (tipoClienteFormatado === 'VIP') {
    const valorComDesconto = valorDoPedido - (valorDoPedido * descontoDoCliente);
    return `Você cliente ${tipoClienteFormatado}: tem desconto de 10%. Valor final: R$ ${valorComDesconto.toFixed(2)}`;
  } 
  else if (tipoClienteFormatado === 'NÃO VIP') {
    return `Você cliente ${tipoClienteFormatado}: não tem desconto. Valor total da compra: R$ ${valorDoPedido.toFixed(2)}`;
  } 
  else {
    return `Tipo de cliente inválido.`;
  }
}

// Informe o valor do pedido
const valorDoPedido = 500.0;
// Informe o Desconto do Cliente
const descontoDoCliente = 0.1;
// Tipo do Cliente
const tipoCliente = 'vip';

const resultado = identificarClienteVip(valorDoPedido, tipoCliente, descontoDoCliente);
console.log(resultado);


//Retornos no código:
// const tipoCliente = 'salada' - Tipo de cliente inválido.
// const tipoCliente = 'vip';   - Você cliente VIP: tem desconto de 10%. Valor final: R$ 450.00
// const tipoCliente = 'não vip'- Você cliente NÃO VIP: não tem desconto. Valor total da compra: R$ 500.00

```

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
