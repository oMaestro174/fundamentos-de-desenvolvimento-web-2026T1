# ⛰️ Projeto Integrador: Portal Encantos de Roraima
> **Disciplina:** Fundamentos de Desenvolvimento Web  
> **Instituição:** Instituto de Tecnologia e Aprendizado Moderno — ITEAM  
> **Tema:** Mitos, Lendas e Tradições Culturais do Extremo Norte Brasileiro  
> **Papel do Projeto:** Projeto Modelo do Professor (Referência oficial para a Avaliação Final A3)

---

## 🌟 Visão Geral do Projeto
O **Portal Encantos de Roraima** é uma aplicação web front-end completa, responsiva, acessível e interativa, desenvolvida para demonstrar na prática como **integrar harmoniosamente todo o conteúdo ministrado nas 8 aulas da disciplina**.

Inspirado nas narrativas ancestrais dos povos originários de Roraima (*Macuxi, Taurepang, Ingarikó, Wapichana e Yanomami*), o portal resgata o patrimônio imaterial do Estado — desde o imponente Monte Roraima e o herói mítico Makunaima até a tradicional culinária da Damorida e os enigmas da Pedra Pintada.

---

## 🚀 Como Executar o Projeto
1. Abra a pasta `Projeto Integrador` no **VS Code**.
2. Clique com botão direito no arquivo **`index.html`** e selecione **Open with Live Server** (ou simplesmente dê duplo clique no arquivo para abrir no navegador Google Chrome ou Microsoft Edge).
3. Pressione **`F12`** para inspecionar os elementos, verificar o Console interativo e visualizar o comportamento responsivo no modo mobile (**Ctrl + Shift + M**).

---

## 🗺️ Mapa de Competências: Como as 8 Aulas Foram Integradas

| Aula | Tema da Disciplina | Onde e Como Está Aplicado no Projeto |
|:---:|:---|:---|
| **01** | **Arquitetura Web & HTML5 Base** | Estruturação de `<!DOCTYPE html>`, `lang="pt-BR"`, metadados de SEO completos, tags Open Graph para redes sociais e hierarquia correta de cabeçalhos (`<h1>` único por página). |
| **02** | **Semântica HTML5 & Tabelas** | Emprego estrito de tags semânticas (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`), tabela comparativa de municípios com `<thead>`, `<tbody>`, `<th>` e `<td>`, além de imagens com descrições acessíveis (`alt`). |
| **03** | **Formulários & Validações** | Formulário do Mural Comunitário com pareamento obrigatório `<label for>`, atributos de restrição nativos (`required`, `minlength`, `type="email"`), campos de seleção `<select>` e caixas de checagem `<input type="checkbox">`. |
| **04** | **CSS3 Moderno & Box Model** | Reset universal com `box-sizing: border-box`, paleta de cores estruturada com variáveis CSS (`:root`), tipografia Google Fonts (*Cinzel* para títulos míticos e *Plus Jakarta Sans* para UI), sombras com elevação suave e micro-interações `:hover` e `:active`. |
| **05** | **Flexbox, CSS Grid & Responsividade** | Alinhamentos flexíveis na barra de navegação, cabeçalhos e botões com **Flexbox**; diagramação fluida e bidimensional do catálogo de lendas e do mural com **CSS Grid**; adaptação total para celular, tablet e desktop com Media Queries Mobile-First. |
| **06** | **JavaScript Essencial & Dados** | Estruturação da base de dados em memória (`ACERVO_LENDAS`), uso rigoroso de `const` e `let`, operadores estritos (`===`), template literals com interpolação `${...}`, laços iterativos e manipulação de arrays e objetos. |
| **07** | **Manipulação do DOM & Eventos** | Seletores modernos com `querySelector` e `querySelectorAll`, escuta de eventos com `addEventListener` (`click`, `input`, `keydown`, `submit`), manipulação dinâmica de classes com `classList.toggle/add/remove`, criação de novos nós na árvore com `document.createElement()` e interceptação com `event.preventDefault()`. |
| **08** | **DevTools, LocalStorage & SEO** | Persistência total no navegador com **`localStorage`** (tema Dark/Light, lendas favoritas salvas e histórias enviadas pela comunidade), fechamento de modais com tecla `Escape`, e conformidade estrita com o guia de arquitetura [dom-seo-e-boas-praticas.md](../docs/dom-seo-e-boas-praticas.md) (todo o conteúdo textual existe no HTML para indexação imediata do Googlebot). |

---

## 🎨 Funcionalidades em Destaque

1. **Carrossel Ancestral com SEO Total:**
   * Construído de acordo com as boas práticas de engenharia: todo o texto já nasce no HTML, permitindo busca via `Ctrl + F` e indexação imediata por motores de busca. O JavaScript atua apenas como o maestro que alterna classes e temporizadores.
2. **Filtro em Tempo Real e Busca Textual:**
   * Campo de busca reativo que filtra títulos e descrições conforme o usuário digita (`input` event), combinado com botões de categorias temáticas.
3. **Modal de Leitura Imersiva:**
   * Janela modal elegante que renderiza dinamicamente as narrativas mitológicas completas, com controle de foco e fechamento acessível por teclado (`Escape`) ou clique fora.
4. **Painel Lateral (Drawer) de Favoritos:**
   * Sistema que permite ao usuário favoritar lendas e acessá-las a qualquer momento em um painel retrátil, com persistência no `localStorage`.
5. **Mural Comunitário com Injeção Dinâmica:**
   * Permite que novos causos e histórias populares sejam submetidos pelo formulário, validados e injetados instantaneamente na interface via `document.createElement()`, permanecendo salvos após o recarregamento da página.
6. **Alternador de Tema (Dark Mode / Light Mode):**
   * Tema escuro inspirado no crepúsculo do lavrado e tema claro inspirado na aurora roraimense, com transição suave e salvamento da preferência no navegador.

---

## 📂 Estrutura de Arquivos
```text
Projeto Integrador/
├── index.html              # Estrutura semântica principal e acessibilidade
├── style.css               # Design system com variáveis CSS, Flexbox e Grid
├── app.js                  # Lógica de controle do DOM, eventos e localStorage
├── README.md               # Documentação técnica e pedagógica do projeto
└── assets/
    └── images/             # Fotografias e artes visuais de alta definição
        ├── monte-roraima.jpg
        ├── makunaima.jpg
        ├── pedra-pintada.jpg
        ├── serra-tepequem.jpg
        ├── damorida.jpg
        └── wei-kapei.jpg
```

---

## 👨‍🏫 Roteiro de Demonstração em Sala de Aula (Para o Professor)
1. **Abertura:** Projete a página inicial no modo noturno e mostre o carrossel dinâmico funcionando.
2. **Demonstração de SEO e DOM:** Pressione `Ctrl + F` e busque pelo nome "Makunaima" antes mesmo de o slide correspondente aparecer. Mostre para a turma que o navegador encontra o texto porque a arquitetura não trancou os dados dentro de arquivos JS.
3. **Demonstração de Responsividade:** Pressione `F12`, acione o modo de emulação de smartphone e demonstre o funcionamento fluido do menu hambúrguer.
4. **Demonstração do LocalStorage:** Favorite duas lendas, envie uma nova história no formulário e mude o tema para o modo claro. Dê um `F5` (recarregar) na frente dos alunos e mostre que todos os dados continuam intactos na tela!

---

## 🔀 Versão 2: Arquitetura Multi-Páginas (Blog & SEO Avançado)
Além da versão OnePage principal, criamos na pasta **[`V2/`](./V2/README.md)** uma versão que demonstra como converter uma seção em **páginas independentes de blog**:
- Cada história possui sua própria página física (`artigos/monte-roraima.html`, `artigos/makunaima.html`, `artigos/damorida.html`).
- **Poder de SEO:** URLs canônicas limpas, tags `<title>` exclusivas, metadados Open Graph independentes e migalhas de pão (*Breadcrumbs*).
- Excelente para demonstrar aos alunos a diferença de engenharia entre uma Landing Page e um Portal Editorial!
