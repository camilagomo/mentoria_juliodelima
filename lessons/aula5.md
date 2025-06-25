# 💰 Aula 5 – Estruturando um projeto com VsCode e Node
📅 **Data:** 24/06/2025  
📚 **Mentoria:** [Mentoria 2.0 – Júlio de Lima](https://mentoria.juliodelima.com.br/)

---

## 🧠 Aprendizados

Nesta aula, colocamos em prática conceitos essenciais de **lógica de programação**, com foco em:

- Estruturar o projeto com pastas organizadas (src e test)
- Importar a função em um arquivo separado para testes
- Aplicando conceitos de testes unitários

---

✅ Organizar as pastas do projeto, onde dentro de um diretório devemos ter:
- A pasta src guarda o arquivo principal: comunicacao.js
- A pasta test guarda o arquivo de teste: comunicacao.test.js

✅ Inicializar o projeto Node.js
- npm init -y

✅ Executar arquivos .js no terminal
- node .\test\comunicacao.test.js 

## 📦 Exemplos práticos - Estruturando um projeto
Criar uma função JavaScript

A função comunicacaoDosAnimais foi criada para retornar um som diferente dependendo do animal informado:

```javascript
function comunicacaoDosAnimais (nomeDoAnimal){
  if(nomeDoAnimal == 'cachorro'){
    return 'au au'
  } else if (nomeDoAnimal == 'gato') {
    return 'miau'
  } else {
    return 'invalido'
  }
}

```

## 📦 Exportar e importar funções com module.exports e require

```javascript
module.exports = {
  comunicacaoDosAnimais
}

```

E importado no arquivo de teste comunicacao.test.js:

```javascript
const {comunicacaoDosAnimais} = require ('../src/comunicacao.js')

const comoCachorroSeComunica = comunicacaoDosAnimais('cachorro')
console.log(comoCachorroSeComunica)

```

## 📦 No terminal, ao chamar node .\test\comunicacao.test.js 
Função retorna valor "au au" no console


## 📦 Escrevendo testes com biblioteca mocha
```javascript
npm i mocha

```
Será criada algumas dependência no package.json com o Mocha*

```javascript
const {comunicacaoDosAnimais} = require ('../src/comunicacao.js')

describe('Comunicacao', function() {
    it('Validar que Cachorro se Comunica com auau', function(){
        //Teste
    })
})
```

