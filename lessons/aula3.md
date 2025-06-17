# 💰 Aula 3 – Reforçando uso de funções, conceito de Strings e concatenar valores

📅 **Data:** 17/06/2025  
📚 **Mentoria:** [Mentoria 2.0 – Júlio de Lima](https://mentoria.juliodelima.com.br/)

---

## 🧠 Aprendizados

Nesta aula, colocamos em prática conceitos essenciais de **lógica de programação**, com foco em:

- Reforçando conceito de funções
- Uso de Strings para concatenar valores
- 


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
### ✅ Exemplo 3 – Concatenando valores
```javascript
//Crie a função que calcula a média
function...

//Usar a função
const resultadoDaMediaDaCamila = calculaMedia(5,8,9)
console.log('Media da Camila: ' + resultadoDaMediaDaCamila)

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
