# 🚀 Guia de Entrega de Atividades: Git/GitHub ou Arquivo ZIP
> **Instituto de Tecnologia e Aprendizado Moderno - ITEAM**  
> **Disciplina:** Fundamentos de Desenvolvimento Web (Turma 2026T1)

Este guia orienta passo a passo como você pode entregar seus laboratórios e avaliações práticas (A1, A2 e A3).  
Você pode escolher a **Opção 1 (via Git e GitHub)** para construir seu portfólio profissional, ou a **Opção 2 (via Arquivo ZIP)** para entregar presencialmente em sala de aula.

---

## 🌐 Opção 1: Publicando pelo Git e GitHub (Recomendado)

Publicar seus projetos no GitHub é a melhor maneira de construir seu portfólio de desenvolvedor e demonstrar seu aprendizado para o mercado de trabalho.

### Passo 1: Crie um Repositório no GitHub
1. Acesse sua conta no [GitHub](https://github.com/) e clique no botão **New** (Novo repositório).
2. Dê um nome simples para o repositório (exemplo: `avaliacao-a1-web` ou `portal-iteam`).
3. Deixe o repositório como **Public** (Público).
4. **Não marque** as opções de adicionar README ou .gitignore agora (já temos nossos arquivos locais).
5. Clique em **Create repository**.

### Passo 2: Inicialize o Git na Pasta do seu Projeto
Abra o **VS Code** na pasta onde estão seus arquivos (`index.html`, etc.) e abra o terminal integrado (`Ctrl + \`` ou menu *Terminal > New Terminal*):

```bash
# 1. Inicialize o controle de versão na sua pasta
git init

# 2. Defina o branch padrão como main
git branch -M main

# 3. Adicione todos os arquivos do projeto
git add .

# 4. Registre o seu commit com uma mensagem descritiva
git commit -m "feat: projeto da avaliação A1 finalizado"
```

### Passo 3: Conecte seu Computador ao GitHub
Copie o link do seu repositório criado no Passo 1 e execute os comandos abaixo no terminal do VS Code:

```bash
# 5. Conecte sua pasta local ao repositório remoto no GitHub
# (Substitua a URL abaixo pelo link real do seu repositório)
git remote add origin https://github.com/SEU_USUARIO/avaliacao-a1-web.git

# 6. Envie seus arquivos para a nuvem
git push -u origin main
```

---

### 🌟 Dica de Ouro: Como Colocar seu Site no Ar com o GitHub Pages
O GitHub oferece hospedagem gratuita para páginas web feitas com HTML, CSS e JavaScript:

1. No seu repositório no GitHub, clique na aba **Settings** (Configurações) no topo.
2. No menu lateral esquerdo, clique em **Pages**.
3. Na seção **Build and deployment > Branch**, selecione a branch `main` e a pasta `/ (root)`.
4. Clique em **Save** (Salvar).
5. Aguarde 1 a 2 minutos e atualize a página. O GitHub exibirá um link público (exemplo: `https://seu-usuario.github.io/avaliacao-a1-web/`).
6. Qualquer pessoa na internet poderá abrir e navegar no seu site!

---

## 📦 Opção 2: Entrega em Sala de Aula via Arquivo ZIP (Alternativa sem Git)

Se você estiver sem acesso à internet em casa, ainda não tiver configurado o Git ou preferir fazer a entrega presencialmente ao professor, você pode entregar um arquivo `.zip`:

### Passo 1: Organize a Pasta do Projeto
1. Crie uma pasta no seu computador com a seguinte nomenclatura padronizada:
   ```text
   A1_SeuNome_SeuSobrenome/
   ├── index.html
   ├── style.css (quando houver)
   └── img/ (se houver imagens locais)
   ```
2. Certifique-se de que o arquivo principal se chama exatamente `index.html`.

### Passo 2: Compactar a Pasta em Formato ZIP
- **No Windows:**
  1. Clique com o **botão direito** sobre a pasta do seu projeto (`A1_SeuNome_SeuSobrenome`).
  2. Selecione **Compactar para arquivo ZIP** (ou *Enviar para > Pasta compactada (zipada)*).
  3. Será gerado um arquivo com a extensão `.zip` (ex: `A1_LucasSilva.zip`).

### Passo 3: Entregar ao Professor
- Leve o arquivo `.zip` em um **pendrive** na aula do prazo de entrega para copiar no computador do professor; **OU**
- Envie como anexo para o canal oficial indicado pelo professor em sala (Google Classroom ou e-mail institucional).

---

## ❓ Dúvidas Frequentes

- **Posso alterar meu código depois de enviar o Git?**  
  Sim! Se encontrar algum detalhe para ajustar antes do prazo final, basta salvar, rodar `git add .`, `git commit -m "fix: ajuste no formulário"` e `git push origin main`. O GitHub e o Pages atualizarão automaticamente!
- **Minhas imagens locais não abriram no site publicado. O que aconteceu?**  
  Certifique-se de que os caminhos das imagens no `src=""` sejam relativos (ex: `src="img/foto.jpg"` e **NUNCA** `src="C:/Users/aluno/Desktop/foto.jpg"`). Caminhos absolutos do seu computador não funcionam na internet nem no computador do professor.
