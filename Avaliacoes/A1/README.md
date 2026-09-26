# 🎯 Avaliação A1: Estrutura Semântica e Formulário Web Acessível
> **Disciplina:** Fundamentos de Desenvolvimento Web  
> **Turno:** Vespertino (Turma 2026T1)  
> **Carga Horária Equivalente:** Avaliação prática do Módulo de HTML5 (Aulas 01 a 03)  
> **Pontuação:** Vale 30% da Média Final (**A1**).

---

## 🎯 Objetivo da Avaliação
Construir uma página web completa, profissional e semanticamente estruturada que resolva uma necessidade real (por exemplo: portal de matrícula estudantil, solicitação de serviços de TI, cadastro de currículo, agendamento de consultas ou cadastro comunitário), contendo toda a base estrutural do HTML5 e um formulário funcional com validações nativas.

---

## 📋 Requisitos Obrigatórios da Entrega

### 1. Estrutura e Semântica (Peso: 30%)
- [ ] Uso exclusivo de tags semânticas modernas (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`).
- [ ] Apenas um elemento `<main>` por página.
- [ ] Hierarquia tipográfica correta (uso de um único `<h1>`, seguido ordenadamente por `<h2>` e `<h3>`).
- [ ] Menu de navegação `<nav>` com links internos (âncoras `#`) e lista não ordenada `<ul>`.
- [ ] Uma tabela semântica (`<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>`) apresentando dados organizados.

### 2. Formulário e Controles (Peso: 40%)
- [ ] Uso da tag `<form>` com atributos `action="#"` e `method="POST"`.
- [ ] Separação lógica de blocos com `<fieldset>` e `<legend>`.
- [ ] Pelo menos 6 tipos diferentes de campos (`text`, `email`, `tel`, `date`, `number`, `select`, `textarea`, `checkbox`).
- [ ] Botão de envio explícito (`<button type="submit">`).

### 3. Acessibilidade e Validações Nativas (Peso: 30%)
- [ ] **100% dos campos de entrada** devem possuir `<label for="...">` pareado perfeitamente com o `id="..."` do campo.
- [ ] Uso dos atributos `required` nos campos obrigatórios.
- [ ] Uso de restrições de tamanho e limites (`minlength`, `maxlength`, `min`, `max`).
- [ ] Pelo menos um campo com validação avançada por Expressão Regular (`pattern`) e dica explicativa em `title`.
- [ ] Todas as imagens devem conter o atributo `alt` descritivo.

---

## 🚀 Como Desenvolver e Entregar
1. Crie um arquivo `index.html` na pasta do seu projeto.
2. Utilize a extensão **Live Server** no VS Code para validar a interface e o funcionamento das mensagens de validação.
3. Submeta sua entrega de acordo com as instruções do professor em sala de aula.
