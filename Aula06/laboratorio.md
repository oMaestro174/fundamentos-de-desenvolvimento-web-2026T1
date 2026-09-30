# Laboratório 06: Exercícios Práticos de Lógica no Console

## 🎯 Objetivo
Configurar o ambiente interativo de desenvolvimento JavaScript, exercitar operadores lógicos, estruturas de decisão e laços de repetição diretamente no console do navegador e através de script vinculado.

---

## 🛠️ Passo 1: Estrutura de Arquivos
```text
laboratorio-js/
├── index.html
└── app.js
```

---

## 🛠️ Passo 2: O HTML (`index.html`)
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Laboratório 06 — Lógica JS</title>
</head>
<body>
    <h1>Laboratório 06: Exercícios de JavaScript</h1>
    <p>Abra o console do desenvolvedor pressionando <strong>F12</strong> para ver a saída dos algoritmos.</p>

    <script src="app.js"></script>
</body>
</html>
```

---

## 🛠️ Passo 3: O Script (`app.js`)
Implemente o código abaixo contendo 3 algoritmos práticos:

```javascript
// ==========================================================================
// DESAFIO 1: CALCULADORA DE MÉDIA E SITUAÇÃO DO ALUNO
// ==========================================================================
console.log("=== DESAFIO 1: AVALIAÇÃO DE NOTAS ===");

const nota1 = 8.0;
const nota2 = 6.5;
const nota3 = 9.0;

const media = (nota1 + nota2 + nota3) / 3;
console.log(`Média calculada: ${media.toFixed(2)}`);

if (media >= 7.0) {
    console.log("Status: ✅ APROVADO COM SUCESSO!");
} else if (media >= 5.0) {
    console.log("Status: ⚠️ EM RECUPERAÇÃO.");
} else {
    console.log("Status: ❌ REPROVADO.");
}

// ==========================================================================
// DESAFIO 2: TABUADA DINÂMICA COM LAÇO FOR
// ==========================================================================
console.log("
=== DESAFIO 2: TABUADA DO 7 ===");
const numeroTabuada = 7;

for (let i = 1; i <= 10; i++) {
    const resultado = numeroTabuada * i;
    console.log(`${numeroTabuada} x ${i} = ${resultado}`);
}

// ==========================================================================
// DESAFIO 3: FILTRO DE IDADES E MAIORIDADE
// ==========================================================================
console.log("
=== DESAFIO 3: CLASSIFICAÇÃO ETÁRIA ===");
const idades = [12, 17, 18, 25, 33, 15, 60];

let maiores = 0;
let menores = 0;

for (const idade of idades) {
    if (idade >= 18) {
        console.log(`Idade ${idade} anos: Maior de idade`);
        maiores++;
    } else {
        console.log(`Idade ${idade} anos: Menor de idade`);
        menores++;
    }
}

console.log(`
Resumo: ${maiores} maiores de idade e ${menores} menores de idade.`);
```

---

## 🛠️ Passo 4: Execução e Teste no DevTools
1. Abra `index.html` via Live Server.
2. Pressione `F12` e vá para a aba **Console**.
3. Verifique as mensagens formatadas e faça modificações nos valores das notas para testar os outros caminhos do `if/else`.
