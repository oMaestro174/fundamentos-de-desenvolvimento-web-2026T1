# Encantos de Roraima — Versão 2 (Multi-Páginas / Artigos de Blog)

Este diretório contém a **Versão 2 (V2)** do Projeto Integrador de **Fundamentos de Desenvolvimento Web**.

---

## 🧭 Proposta Pedagógica da V2: OnePage vs. Multi-Páginas (Artigos)

Na **Versão 1 (OnePage)**, todas as seções convivem em uma única URL, e os detalhes das histórias são abertos dinamicamente em um **Modal Popup** via DOM.

Na **Versão 2 (Multi-Páginas / Artigos)**:
* A **Home (`index.html`)** mantém **exatamente a mesma riqueza visual e temática da versão 1** (Carrossel Hero, vitrine de lendas, sítios sagrados, culinária regional, tabela dos municípios, mural colaborativo, rodapé e tema claro/escuro).
* **A Grande Mudança:** Ao clicar em qualquer card (*"Ler Lenda Completa"*, *"Explorar os Segredos"*, *"Ver Tradição Culinária"*), o usuário **não abre um popup**: ele é direcionado para uma **página de artigo dedicada** (`artigos/<nome-do-artigo>.html`).

---

## 🚀 Vantagens de SEO e Arquitetura Web da V2

1. **URLs Amigáveis e Canônicas:**
   - `/artigos/monte-roraima.html`
   - `/artigos/makunaima.html`
   - `/artigos/pedra-pintada.html`
   - `/artigos/serra-tepequem.html`
   - `/artigos/damorida.html`
   - `/artigos/wei-kapei.html`
   - `/artigos/pacoca.html`
   - `/artigos/beiju.html`

2. **Metatags Individuais por Artigo:**
   - Cada página possui seu próprio `<title>`, `<meta name="description">` e tags de Open Graph (`og:title`, `og:image`, `og:description`).
   - Ao compartilhar no WhatsApp ou redes sociais, o card exibido é específico daquela lenda/prato.

3. **Navegação Semântica com Breadcrumbs:**
   - Cada artigo possui trilha de navegação acessível:
     `Início > Categoria > Título do Artigo`
   - Facilita o rastreamento pelos robôs de busca (*Googlebot*) e a orientação do leitor.

4. **Experiência de Leitura Editorial:**
   - Tipografia refinada, citações destacadas (`<blockquote>`), boxes informativos, caixas de autor e artigos relacionados ao final de cada texto.
   - Botão e link direto *"❮ Voltar para a Página Inicial"* em todos os artigos.

---

## 📂 Estrutura de Arquivos da V2

```text
V2/
├── index.html                  # Home completa (idêntica à V1, com links para artigos)
├── style.css                   # Sistema de design (paleta de Roraima + estilos de blog)
├── app.js                      # Interatividade (carrossel, busca, mural, tema claro/escuro)
├── README.md                   # Este guia comparativo
├── assets/
│   └── images/                 # Imagens em alta definição das lendas e culinária
└── artigos/                    # Páginas individuais dos artigos de leitura profunda
    ├── monte-roraima.html
    ├── makunaima.html
    ├── pedra-pintada.html
    ├── serra-tepequem.html
    ├── damorida.html
    ├── wei-kapei.html
    ├── pacoca.html
    └── beiju.html
```
