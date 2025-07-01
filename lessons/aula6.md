# 💰 Aula 6 – Continuação sobre a estrutura do projeto e versionamento de Código usando GitHub
📅 **Data:** 30/06/2025  
📚 **Mentoria:** [Mentoria 2.0 – Júlio de Lima](https://mentoria.juliodelima.com.br/)

---

## 🧠 Aprendizados

Nesta aula, colocamos em prática conceitos essenciais de **lógica de programação**, com foco em:

- Estruturar o projeto com pastas organizadas (src e test)
- Aplicando conceitos de testes unitários, cobertura de sentença e cobertura de decisão
- Boas práticas de versionamento de código com GITHUB

---

## Estrutura do Projeto
![image](https://github.com/user-attachments/assets/39630559-1c5c-4d28-8547-abe279d1dbe1)

comunicacao.js
```javascript
function linguagemDosGatosECachorros(animal) {
  if (animal == 'cachorro')
    return 'woff woff'
  else if (animal == 'gato')
    return 'miau'
  else 
    return 'Informe gato ou cachorro'
}

module.exports = {
    linguagemDosGatosECachorros
}

```

comunicacao.test.js

![image](https://github.com/user-attachments/assets/74faa128-bd7f-41dd-975d-c774bead6668)

