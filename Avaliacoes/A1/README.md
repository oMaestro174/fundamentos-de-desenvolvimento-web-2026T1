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

## 🏷️ Padrão de Identificação da Entrega (Obrigatório)

Para que o professor identifique facilmente sua turma, turno e nome, utilize a nomenclatura padrão:

- **Se entregar via ZIP:**  
  `A1_fundamentos_web_vespertino_Nome_Sobrenome.zip`
- **Se entregar via Repositório no GitHub:**  
  `a1-fundamentos-web-vespertino-nome-sobrenome`

---

## 📤 Como Entregar sua Avaliação

Você pode escolher uma das duas formas de entrega abaixo:

### Opção 1: Via Git e GitHub (Recomendado para seu Portfólio)
1. Crie um repositório público no seu GitHub com o nome:  
   `a1-fundamentos-web-vespertino-seu-nome`
2. No terminal do VS Code na pasta do seu projeto:
   ```bash
   git init
   git branch -M main
   git add .
   git commit -m "feat: entrega da avaliacao A1"
   git remote add origin https://github.com/SEU_USUARIO/a1-fundamentos-web-vespertino-seu-nome.git
   git push -u origin main
   ```
3. *(Opcional / Bônus)* Ative o **GitHub Pages** nas configurações (*Settings > Pages > main*) para ver seu site publicado na web!
4. Envie o link do repositório para o professor.

👉 **Consulte o passo a passo detalhado em:** [Guia de Entrega Git e ZIP](../../guia-de-entrega-git-e-zip.md)

---

### Opção 2: Entrega em Sala de Aula via Arquivo ZIP
Se você preferir entregar presencialmente ou estiver sem acesso ao Git:
1. Coloque seus arquivos em uma pasta com o padrão:  
   `A1_fundamentos_web_vespertino_Nome_Sobrenome/`
2. Compacte a pasta em formato `.zip` gerando o arquivo:  
   `A1_fundamentos_web_vespertino_Nome_Sobrenome.zip`
3. Entregue o arquivo `.zip` diretamente ao professor em sala de aula (via pendrive ou canal institucional).
