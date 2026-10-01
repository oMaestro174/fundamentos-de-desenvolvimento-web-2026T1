# 🖥️ Slides de Apresentação — Aula 07: Manipulação do DOM e Eventos
> **Disciplina:** Fundamentos de Desenvolvimento Web  
> **Carga Horária:** 4 Horas  
> **Instituição:** Instituto de Tecnologia e Aprendizado Moderno (ITEAM)  
> **Tema:** O Objeto `document`, O Fim do `getElementById`, `querySelector`, `classList`, Modelo Ação & Reação, SEO no DOM e `preventDefault()`

---

## 📌 Slide 1: Abertura & Boas-Vindas
### ⚡ Aula 07 — Manipulação do DOM e Eventos do Usuário
**Dando Vida, Interatividade e Inteligência ao HTML e CSS**

- **Hoje vamos dominar:**
  - O que é o **DOM (Document Object Model)** na memória do navegador.
  - **O modo antigo já era:** Por que `getElementById` foi superado pelo `querySelector`.
  - Alteração dinâmica de texto com **`.textContent`** e valores com **`.value`**.
  - O poder do **`.classList`** (`add`, `remove`, `toggle`) para controlar o CSS.
  - **O Modelo Ação & Reação:** Conectando o clique do usuário (`addEventListener`) à mudança visual.
  - **DOM & SEO:** Por que robôs do Google não clicam em botões e como estruturar carrosséis do jeito certo.
  - A regra de ouro de formulários modernos: **`event.preventDefault()`**.
  - Criando elementos do zero com **`document.createElement()`** e **`appendChild()`**.

> 🗣️ **Roteiro de Fala do Professor:**  
> *"Boa tarde, turma! Até a aula passada, nós aprendemos a lógica pura do JavaScript no console preto. Hoje conectamos esse cérebro à tela! A partir de hoje, seus sites vão reagir a cliques, abrir menus, validar formulários e criar elementos na tela em tempo real sem precisar recarregar a página."*

---

## 📌 Slide 2: O Triângulo do Front-end (O Papel do JavaScript)
### Como as 3 tecnologias trabalham em harmonia

```
        HTML5 (Estrutura)
      "O que existe na tela"
              /        \
             /          \
            /            \
CSS3 (Apresentação) <----> JavaScript (Comportamento)
"Como se parece na tela"     "O que acontece quando o usuário interage"
```

| Tecnologia | Responsabilidade | Exemplo Prático |
|---|---|---|
| **HTML** | Cria os blocos | `<button id="btn-comprar">Comprar</button>` |
| **CSS** | Dá cor e estilo | `#btn-comprar { background: #10b981; color: #fff; }` |
| **JavaScript** | Dá vida e ação | *"Quando o usuário clicar, mude para 'Adicionado!', adicione +1 no carrinho e atualize o total."* |

> 🗣️ **Roteiro de Fala do Professor:**  
> *"Lembrem-se da regra de ouro: o HTML define o que está lá, o CSS define o visual, e o JavaScript define o comportamento. O JS não deve desenhar o que o CSS faz com maestria; ele deve coordenar os eventos e a reatividade."*

---

## 📌 Slide 3: O que é o DOM (Document Object Model)?
### A ponte entre o arquivo `.html` e a memória do navegador

Quando você abre um arquivo `index.html`, o navegador **lê o texto** e cria uma estrutura de dados viva na memória RAM chamada **árvore do DOM**:

```
                  window (A janela do navegador)
                    │
                 document (A página HTML carregada)
                    │
                  <html>
               ┌────┴────┐
            <head>     <body>
              │        ┌──┴──────────────────┐
           <title>    <h1>               <button>
                       │                     │
                 'Minha Página'        'Clique Aqui'
```

- Cada tag HTML vira um **Objeto (Nó)** na memória.
- O objeto global **`document`** é a nossa porta de entrada mágica para buscar, criar, alterar ou excluir qualquer nó da página sem precisar recarregá-la!

> 🗣️ **Roteiro de Fala do Professor:**  
> *"O DOM não é o seu arquivo `.html` salvo no disco. O seu arquivo é apenas um texto estático. O DOM é a representação viva da página que está na memória RAM. Se você alterar o DOM via JavaScript, o visual muda imediatamente para o usuário, mas o arquivo salvo no seu VS Code continua intacto."*

---

## 📌 Slide 4: O Modo Antigo Já Era!
### Por que `getElementById` ficou no passado e `querySelector` é o rei?

Antigamente (anos 2000), o JavaScript tinha métodos fragmentados e limitados:
* ❌ `document.getElementById('cabecalho')`
* ❌ `document.getElementsByClassName('item')`
* ❌ `document.getElementsByTagName('p')`

**Hoje, tudo isso foi substituído pelo padrão universal:**

```javascript
// ✅ Padrão Profissional Moderno:
const titulo     = document.querySelector("h1");             // Por tag
const botao      = document.querySelector("#btn-comprar");   // Por ID (#)
const linkAtivo  = document.querySelector("nav li.ativo > a"); // Seletor CSS Composto!

// ✅ Para buscar múltiplos elementos de uma só vez:
const todosCards = document.querySelectorAll(".card");       // Retorna uma NodeList moderna
todosCards.forEach(card => console.log(card));              // Suporta forEach nativamente!
```

### Por que abandonamos os métodos antigos?
1. **Sintaxe Unificada:** Você usa exatamente a **mesma sintaxe que já aprendeu no CSS**.
2. **Poder de Busca Composta:** O `getElementById` só busca um ID isolado; o `querySelector` permite seletores complexos como `div.card > button.btn-primario`.
3. **Coleções Modernas:** `querySelectorAll` retorna uma `NodeList` que tem `.forEach()` direto, enquanto os métodos antigos retornavam `HTMLCollection` que quebrava em loops!

> 🗣️ **Roteiro de Fala do Professor:**  
> *"Turma, vocês vão encontrar `getElementById` em tutoriais antigos da internet. Mas no mercado de trabalho atual, nós usamos `querySelector` e `querySelectorAll`. Por que decorar 5 métodos diferentes se o `querySelector` resolve tudo usando a sintaxe de CSS que vocês já dominam?"*

---

## 📌 Slide 5: Lendo e Alterando Conteúdo da Tela
### `textContent` vs. `innerHTML` vs. `value`

```
┌─────────────────┬──────────────────────────────────┬────────────────────────────┐
│ Propriedade     │ Para que serve?                  │ Exemplo de Código          │
├─────────────────┼──────────────────────────────────┼────────────────────────────┤
│ .textContent    │ Texto puro (Rápido e SEGURO)     │ titulo.textContent = 'Olá';│
│ .innerHTML      │ Interpreta tags HTML             │ div.innerHTML = '<b>A</b>';│
│ .value          │ Conteúdo de campos de formulário │ const nome = input.value;  │
└─────────────────┴──────────────────────────────────┴────────────────────────────┘
```

```javascript
const mensagem = document.querySelector("#aviso");
const campoNome = document.querySelector("#input-nome");

// Alterando texto de forma 100% segura:
mensagem.textContent = "Inscrição confirmada com sucesso!";

// Lendo o que o usuário digitou no input:
const textoDigitado = campoNome.value.trim();
```

> ⚠️ **Alerta de Segurança (Vulnerabilidade XSS):**  
> Nunca use `.innerHTML` para inserir dados digitados pelo usuário, pois um invasor pode injetar tags `<script>` maliciosas. Use sempre **`.textContent`**!

---

## 📌 Slide 6: Manipulando Estilos com `classList`
### Como o JavaScript fala com o CSS profissionalmente

**❌ Má Prática (Estilos inline no JS):**
```javascript
// Não faça isso! Mistura lógica com apresentação e tem baixa prioridade
card.style.backgroundColor = "red";
card.style.fontSize = "20px";
```

**✅ Boa Prática (Controlar via Classes CSS):**
```css
/* No seu arquivo style.css */
.card.ativo {
    background-color: #10b981;
    transform: scale(1.05);
}
```

```javascript
/* No seu arquivo script.js */
const card = document.querySelector(".card");

card.classList.add("ativo");      // Adiciona a classe
card.classList.remove("ativo");   // Remove a classe
card.classList.toggle("ativo");   // Se tem, tira; se não tem, põe! (Perfeito para menus e temas!)
card.classList.contains("ativo"); // Retorna true ou false
```

> 🗣️ **Roteiro de Fala do Professor:**  
> *"O JavaScript não deve ser estilista, ele deve ser apenas o porteiro. O CSS cria a roupa (`.ativo`, `.aberto`, `.erro`) e o JavaScript apenas decide quando o elemento deve vestir ou tirar essa roupa usando `classList`!"*

---

## 📌 Slide 7: O Modelo Mental de Interatividade: Gatilho ➔ Ouvinte ➔ Reação
### Como conectar o clique do usuário à mudança na tela

> ❓ **Dúvida clássica:** *"Professor, se eu escrever `card.classList.toggle('ativo')`, quando isso acontece?"*

Para acontecer em resposta ao usuário, precisamos de **3 atores**:

```
┌─────────────────────────┐      ┌─────────────────────────┐      ┌─────────────────────────┐
│       1. GATILHO        │      │       2. OUVINTE        │      │       3. REAÇÃO         │
│  Elemento que sofre a   │ ───> │   Escuta a ação com     │ ───> │  Código que altera o    │
│    ação (ex: Botão)     │      │   addEventListener()    │      │  elemento alvo no DOM   │
└─────────────────────────┘      └─────────────────────────┘      └─────────────────────────┘
```

```javascript
// 1. GATILHO: Quem o usuário clica
const botao = document.querySelector("#btn-alerta");

// 2. ALVO: Quem vai sofrer a mudança visual
const aviso = document.querySelector("#box-aviso");

// 3. OUVINTE + REAÇÃO: Conecta a ação à mudança em tempo real
botao.addEventListener("click", () => {
    // É AQUI DENTRO que a mágica acontece quando o clique ocorre!
    aviso.classList.toggle("destaque");
    
    if (aviso.classList.contains("destaque")) {
        aviso.textContent = "⚠️ Alerta ATIVADO pelo clique!";
    } else {
        aviso.textContent = "Sistema normal.";
    }
});
```

---

## 📌 Slide 8: DOM, SEO e o Googlebot — Por que a Informação DEVE Estar no HTML?
### Robôs de busca NÃO clicam em botões! O caso do Carrossel de Imagens

```
  [ 1ª ONDA: Leitura do HTML Puro ]             [ 2ª ONDA: Execução do JS ]
  O Googlebot baixa o HTML da página.        O robô tenta rodar o JavaScript na nuvem.
  Indexa títulos, textos e links.            ⚠️ Lento, demorado e...
  ⚡ IMEDIATO E GARANTIDO!                   🚫 O ROBÔ NÃO CLICA EM NADA!
```

#### ❌ O Erro Crítico do Carrossel Dinâmico:
Se você guarda o texto dos slides dentro de um array no JavaScript e só injeta o slide 2 e 3 quando o usuário clica na seta `❯`, **o Google NUNCA vai ler esses produtos**, porque robôs não clicam em setas!

#### ✅ A Arquitetura Profissional (*Progressive Enhancement*):
1. **No HTML:** Todos os slides já nascem escritos no HTML (o Google lê 100% no milésimo zero).
2. **No CSS:** O CSS oculta os slides que não estão com a classe `.ativo` (`display: none` ou `opacity: 0`).
3. **No JavaScript:** O JS apenas usa `classList.toggle('ativo')` quando o usuário clica para avançar!

> 🗣️ **Roteiro de Fala do Professor:**  
> *"Gravem esta lição: o HTML é a informação, o CSS é o vestuário e o JS é a coreografia. Nunca usem JavaScript para esconder conteúdo do Google ou de pessoas cegas que usam leitores de tela. Deixem a informação no HTML e usem o JS apenas para movimentar o show!"*

---

## 📌 Slide 9: O Campeão dos Erros em Sala — `event.preventDefault()`
### Por que o botão do formulário faz a página piscar e sumir com tudo?

```
             Fluxo Histórico dos Navegadores (Anos 90)
[ Clicar em Submit ] ──> [ Navegador recarrega a página ] ──> [ Limpa a memória RAM ]
                                    │
                         ❌ SEU CÓDIGO JS SUMIU!
```

Para criar aplicações interativas modernas (SPAs) onde a página **nunca recarrega**:

```javascript
const formulario = document.querySelector("#form-cadastro");

formulario.addEventListener("submit", (evento) => {
    // 🛑 REGRA DE OURO: Bloqueia o recarregamento automático da página!
    evento.preventDefault();

    console.log("Agora sim! O formulário foi capturado sem recarregar a tela.");
    // Processar dados, validar, enviar via AJAX/Fetch...
});
```

> 🗣️ **Roteiro de Fala do Professor:**  
> *"Se um dia vocês criarem um formulário e, ao clicar no botão, a tela piscar rápido e o `console.log` sumir... 99,9% de chance de vocês terem esquecido o `evento.preventDefault()`!"*

---

## 📌 Slide 10: Criando Elementos Dinamicamente do Zero
### `document.createElement()` e `elementoPai.appendChild()`

Imagine uma lista de tarefas ou feed de posts: novos blocos podem ser criados dinamicamente!

```javascript
const lista = document.querySelector("#lista-tarefas");

function adicionarNovaTarefa(textoDaTarefa) {
    // 1. Fabrica a tag <li> na memória
    const novoItem = document.createElement("li");
    novoItem.className = "item-tarefa";
    novoItem.textContent = textoDaTarefa;

    // 2. Fabrica o botão de remover
    const btnExcluir = document.createElement("button");
    btnExcluir.textContent = "🗑️";
    btnExcluir.addEventListener("click", () => {
        novoItem.remove(); // Remove o nó do DOM!
    });

    // 3. Monta o botão dentro do <li>
    novoItem.appendChild(btnExcluir);

    // 4. Injeta o <li> dentro da <ul> na página
    lista.appendChild(novoItem);
}
```

---

## 📌 Slide 11: Roteiro do Laboratório Prático de Hoje
### Mão na massa com o Laboratório 07!

Vocês vão construir 2 componentes indispensáveis para o portfólio:

```
┌──────────────────────────────────┐   ┌──────────────────────────────────┐
│  📱 1. Menu Mobile Hambúrguer    │   │  🔢 2. Contador de Inscrições    │
│  - Aparece apenas em celulares   │   │  - Botões [+1], [-1] e [Zerar]   │
│  - Abre e fecha com classList    │   │  - Troca de cores automática     │
│  - Ícone alterna de ☰ para ✕     │   │  - Verde (Positivo) / Vermelho   │
└──────────────────────────────────┘   └──────────────────────────────────┘
```

- **Passo a passo completo:** Abra o arquivo **`Aula07/laboratorio.md`**.
- **Material de Aprofundamento:** Consulte o novo guia em **`docs/dom-seo-e-boas-praticas.md`**.
- **Desafio Bônus:** Implementar a lista de tarefas dinâmica com remoção de itens (gabarito completo no repositório mestre).

> 🗣️ **Roteiro de Fala do Professor:**  
> *"Abram o VS Code, criem a pasta `laboratorio-07` e sigam o roteiro do `laboratorio.md`. Estarei passando de mesa em mesa para tirar dúvidas. Bom código a todos!"*
