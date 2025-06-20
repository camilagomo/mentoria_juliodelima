# 💰 Aula 4 – Reforçando uso de funções, condicionais e declaração de variáveis
📅 **Data:** 19/06/2025  
📚 **Mentoria:** [Mentoria 2.0 – Júlio de Lima](https://mentoria.juliodelima.com.br/)

---

## 🧠 Aprendizados

Nesta aula, colocamos em prática conceitos essenciais de **lógica de programação**, com foco em:

- Reforçando conceito de funções
- Condicional
- Declarando variáveis com let e const e principais diferenças
- Tipos de Dados: Int, String, Float, Boolean, Objeto


---

## 📦 Exemplos práticos

### ✅ Exemplo 1 – Exercício com tipo de dados

```javascript
// Desenhando função
function calcularEAplicarDesconto(valorDoPedido, tipoDoCliente) {
  let valorFinalDoPedido

  if (tipoDoCliente === 'vip' || tipoDoCliente === 'VIP') {
    valorFinalDoPedido = valorDoPedido - (valorDoPedido * 10 / 100)
  } else {
    valorFinalDoPedido = valorDoPedido
  }

  return valorFinalDoPedido
}

// Usar!
const resultadoComDesconto = calcularEAplicarDesconto(500.00, 'vip')
console.log(resultadoComDesconto)

const resultadoSemDesconto = calcularEAplicarDesconto(500.00, '')
console.log(resultadoSemDesconto)

```
### ✅ Exemplo 2 – Tipos de dados

```javascript

// Tipos que conhecemos em aulas passadas
const nome = 'Márcio'
const idade = 39
const salario = 36000.18

// Tipo de dado com verdadeiro (true) e falso (false)
const estouEmpregado = true

// Tipo de dado representado como objeto
const pessoa = {
  nome: 'Robinson',
  idade: 26,
  sexo: 'Masculino',
  salario: 78000,
  fezM2Ponto0: true
}

// Mudando o valor de uma das propriedades do objeto
pessoa.idade = 25

// Apresentando e calculando uma das propriedades de um objeto
console.log(pessoa.idade + 10)

// Oi, eu sou uma lista de valores
const ferramentasDeTeste = [ 'UFT One', 'WebDriver', 'Playwright' ]

// Como acessamos o primeiro elemento de uma lista de valores
console.log(ferramentasDeTeste[0])

// Oi, sou uma outra lista meio bagunçada, afinal, tenho números e strings, doido né!?
const numerosDaSorte = [ 7, 'três', 5 ]

// Uma função sendo atribuida a um objeto (estilo nutella)
const somar = (primeiroNumero, segundoNumero) => {
  return primeiroNumero + segundoNumero
}

// Uma função sendo atribuida a um objeto (estilo raiz)
const subtrair = function (primeiroNumero, segundoNumero) {
  return primeiroNumero - segundoNumero
}

// Isso é uma lista de objetos que magicamente ganhou também um elemento como fun';cão
const pessoas = [
  {
    nome: 'Robinson',
    idade: 35
  },
  {
    nome: 'Mariana',
    idade: 18
  },
  {
    nome: 'Isabelle',
    idade: 18
  },
  function somar(primeiroNumero, segundoNumero) {
    return primeiroNumero + segundoNumero
  }
]

// Apresentando alguns valores contidos na lista de objetos
console.log(pessoas[1].idade)
console.log(pessoas[2].nome)
console.log(pessoas[3](1, 2))

// Uma lista com listas dentro
const tabuadaDoUm = [
  [ 1, 1, 1],
  [ 1, 2, 2],
  [ 1, 3, 3]
]

console.log(tabuadaDoUm[2][2])
```
