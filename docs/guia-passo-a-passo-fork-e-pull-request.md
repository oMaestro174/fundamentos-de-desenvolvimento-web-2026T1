# 🚀 Guia Prático: Como Enviar suas Atividades via Fork e Pull Request
> **Instituto de Tecnologia e Aprendizado Moderno — ITEAM**  
> **Curso:** Fundamentos de Desenvolvimento Web (Front-end) — Turma 2026T1  
> **Instrutor:** Professor ITEAM  
> **Repositório da Turma:** `https://github.com/oMaestro174/fundamentos-de-desenvolvimento-web-2026T1`

---

## 🎯 Por que usamos Fork e Pull Request no curso de Fundamentos Web?

No mercado profissional de desenvolvimento web front-end, desenvolvedores e designers **não enviam arquivos por e-mail, zip ou pendrive**, e nem alteram diretamente o código de produção em um repositório compartilhado.

Adotamos o fluxo de **Fork & Pull Request (PR)** porque:
1. 🌟 **Seu Portfólio Front-end Ganha Vida:** Seu perfil do GitHub e seus sites ficam registrados permanentemente na aba **Contributors** do repositório da turma.
2. 🛡️ **Autonomia para suas Páginas:** Você cria seus sites e estilos em uma cópia própria e segura do projeto, sem risco de sobrescrever páginas criadas por outros colegas.
3. 💬 **Code Review Profissional:** O professor revisa sua semântica HTML5, organização do CSS e manipulações do DOM diretamente no GitHub, deixando feedbacks linha por linha.

---

## 🗺️ O Mapa do Fluxo de Trabalho (Front-end)

```text
[Repositório da Turma (Fundamentos Web 2026T1)]
         │
         │  1. Clicar em "Fork" (Gera uma cópia na sua conta)
         ▼
[Seu Fork Pessoal no GitHub] (github.com/SEU-USUARIO/fundamentos-de-desenvolvimento-web-2026T1)
         │
         │  2. git clone (Baixa para seu computador)
         ▼
[Seu Computador / VS Code]
         │
         ├── 3. git checkout -b entrega-a1-seunome
         ├── 4. Criar sua pasta em Avaliacoes/A1/Turno/Seu-Nome/
         ├── 5. Desenvolver sua página (index.html, style.css, imagens)
         ├── 6. Testar com a extensão Live Server
         ├── 7. git add .
         └── 8. git commit -m "feat(site): entrega da avaliacao A1"
         │
         │  9. git push origin entrega-a1-seunome
         ▼
[Seu Fork Pessoal no GitHub]
         │
         │  10. "Compare & pull request" (Envia a entrega para o professor)
         ▼
[Repositório da Turma (Fundamentos Web 2026T1)] ➔ ✅ Projeto Entregue e Registrado!
```

---


---

## ⚙️ Pré-requisito Obrigatório: Ter o Git Instalado e Configurado

Antes de rodar qualquer comando no seu terminal, certifique-se de que você tem o **Git instalado** na sua máquina:

1. **Como verificar se já está instalado:**  
   Abra seu terminal (PowerShell, Prompt de Comando ou Git Bash) e digite:
   ```bash
   git --version
   ```
   *Se aparecer algo como `git version 2.x.x`, você já está pronto para continuar!*

2. **Se não tiver instalado:**  
   Acesse o site oficial [git-scm.com](https://git-scm.com/downloads) e baixe a versão para o seu sistema operacional (Windows, macOS ou Linux). Durante a instalação, pode manter as opções padrão recomendadas.

3. **Configuração Inicial do Git (apenas na primeira vez):**  
   Configure seu nome e o **mesmo e-mail que você usa na sua conta do GitHub**, para que suas entregas fiquem corretamente associadas ao seu perfil:
   ```bash
   git config --global user.name "Seu Nome Completo"
   git config --global user.email "seu-email-cadastrado-no-github@exemplo.com"
   ```

---

## 📋 Passo a Passo Detalhado

### Passo 1: Criar o seu Fork no GitHub
1. Acesse o repositório oficial da nossa turma:  
   👉 `https://github.com/oMaestro174/fundamentos-de-desenvolvimento-web-2026T1`
2. No canto superior direito da página, clique no botão **Fork** (ícone de bifurcação):
   > ![Botão Fork](https://docs.github.com/assets/cb-32435/images/help/repository/fork-button.png)
3. Na tela de confirmação:
   * **Owner:** Selecione sua conta pessoal do GitHub.
   * **Repository name:** Mantenha `fundamentos-de-desenvolvimento-web-2026T1`.
   * **Copy the main branch only:** Mantenha marcado.
4. Clique no botão verde **Create fork**.
5. *Pronto!* Agora você está na sua cópia pessoal do repositório (repare que a URL agora é `github.com/SEU-USUARIO/fundamentos-de-desenvolvimento-web-2026T1`).

---

### Passo 2: Clonar o seu Fork para o seu Computador
> ⚠️ **Atenção Máxima:** Não clone o repositório do professor! Clone a URL do **seu fork** (onde aparece o seu nome de usuário).

1. Na página do seu fork, clique no botão verde **<> Code**.
2. Copie a URL HTTPS (exemplo: `https://github.com/SEU-USUARIO/fundamentos-de-desenvolvimento-web-2026T1.git`).
3. Abra o terminal (PowerShell, Git Bash ou terminal do VS Code) na sua pasta de projetos e digite:
   ```bash
   git clone https://github.com/SEU-USUARIO/fundamentos-de-desenvolvimento-web-2026T1.git
   ```
4. Entre na pasta clonada:
   ```bash
   cd fundamentos-de-desenvolvimento-web-2026T1
   ```
5. Abra no VS Code:
   ```bash
   code .
   ```

---

### Passo 3: Criar uma Branch com o seu Nome
Nunca faça alterações diretamente na branch `main`. Crie uma branch de trabalho para a sua entrega:

```bash
git checkout -b entrega-a1-seu-nome-sobrenome
```
*Exemplo real:* `git checkout -b entrega-a1-lucas-silva`

---

### Passo 4: Adicionar o seu Trabalho na Estrutura Correta
Para mantermos o repositório limpo e organizado entre todos os colegas:

1. Acesse a pasta da avaliação correspondente:
   * **Avaliação A1:** `Avaliacoes/A1/`
   * **Avaliação A2:** `Avaliacoes/A2/`
   * **Avaliação A3:** `Avaliacoes/A3/`
2. Entre na pasta do seu turno (ex: `Vespertino/` ou crie caso não exista).
3. Crie uma subpasta com o seu **Nome Completo** (ex: `Avaliacoes/A1/Vespertino/Lucas-Silva/`).
4. Coloque seus arquivos front-end dentro dessa pasta:
   * `index.html` (com estrutura semântica HTML5 bem formada)
   * `style.css` (estilização com Flexbox e CSS Grid)
   * Pasta `assets/` ou `images/` (com as imagens do seu site)
   * `app.js` (caso a avaliação envolva JavaScript/DOM)
5. **Teste com o Live Server:** Clique com o botão direito no `index.html` e selecione **Open with Live Server** para checar se todos os links e imagens carregam perfeitamente.

---

### Passo 5: Salvar, Commitar e Enviar para o GitHub
Depois de validar o visual e o funcionamento da sua página:

1. Verifique os arquivos modificados no terminal:
   ```bash
   git status
   ```
2. Adicione os arquivos:
   ```bash
   git add .
   ```
3. Grave o seu commit:
   ```bash
   git commit -m "feat(a1): entrega do portal semantico do aluno Lucas Silva"
   ```
4. Envie sua branch para o seu Fork:
   ```bash
   git push origin entrega-a1-seu-nome-sobrenome
   ```

---

### Passo 6: Abrir o Pull Request (A Entrega Oficial!)
1. Volte ao seu navegador na página do seu fork no GitHub.
2. Você verá um banner amarelo no topo com o botão verde: **Compare & pull request**. Clique nele!
3. Na tela de abertura do Pull Request:
   * **Base repository:** `oMaestro174/fundamentos-de-desenvolvimento-web-2026T1` | **base:** `main`.
   * **Head repository:** `SEU-USUARIO/fundamentos-de-desenvolvimento-web-2026T1` | **compare:** `entrega-a1-seu-nome-sobrenome`.
4. **Título do PR:** Preencha no padrão oficial da turma:
   * `[Entrega A1] - Nome Completo - Turno`  
   * *Exemplo:* `[Entrega A1] - Lucas Silva - Vespertino`
5. **Descrição do PR:** Escreva um resumo do seu site:
   ```markdown
   ### Entrega da Avaliação A1 (Fundamentos Web)
   - **Aluno:** Lucas Silva
   - **Turno:** Vespertino
   - **Tema do Site:** Portal Turístico e Cultural de Roraima
   - **Estrutura HTML5 Utilizada:**
     - `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.
     - Formulário de contato com validações nativas e acessibilidade.
     - Tabela organizada com rotas e horários.
     - Imagens com textos alternativos (`alt`).
   ```
6. Clique no botão verde **Create pull request**!

🎉 **Pronto! Seu projeto front-end está oficialmente entregue!**  
O professor receberá a notificação, avaliará seu site no GitHub e fará o merge para registrar sua nota.

---

## 🔄 Como Atualizar seu Fork com Novas Aulas do Curso

Conforme o professor for adicionando novos laboratórios e materiais:

1. Acesse a página do **seu fork** no GitHub.
2. Clique no botão **Sync fork** (abaixo dos botões verdes).
3. Clique em **Update branch**.
4. No seu computador, volte para a `main` e puxe as atualizações:
   ```bash
   git checkout main
   git pull origin main
   ```
