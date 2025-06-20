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

### ✅ Exemplo 1 – 

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
