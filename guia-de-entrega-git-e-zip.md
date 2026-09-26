# 🚀 Guia de Entrega de Atividades: Git/GitHub ou Arquivo ZIP
> **Instituto de Tecnologia e Aprendizado Moderno - ITEAM**  
> **Disciplina:** Fundamentos de Desenvolvimento Web  
> **Turma:** 2026T1 — Turno Vespertino

Este guia orienta passo a passo como você deve nomear e entregar seus laboratórios e avaliações práticas (A1, A2 e A3).  
Para facilitar a organização e correção do professor, **é fundamental seguir o padrão de identificação de turma e turno**.

---

## 🏷️ Padrão Oficial de Nomenclatura

Tanto para entregas em **Arquivo ZIP** quanto para **Repositórios no GitHub**, adote o padrão abaixo substituindo pelo seu nome e sobrenome:

- **Formato da Pasta e Arquivo ZIP:**  
  📁 `A1_fundamentos_web_vespertino_Nome_Sobrenome.zip`
- **Formato do Repositório no GitHub:**  
  🌐 `a1-fundamentos-web-vespertino-nome-sobrenome`

> 💡 **Exemplo Real:**  
> Para o aluno *Lucas Silva*, o arquivo deve se chamar:  
> `A1_fundamentos_web_vespertino_Lucas_Silva.zip`

---

## 🌐 Opção 1: Publicando pelo Git e GitHub (Recomendado para Portfólio)

Publicar seus projetos no GitHub é a melhor maneira de construir seu portfólio de desenvolvedor e demonstrar seu aprendizado para o mercado de trabalho.

### Passo 1: Crie o Repositório no GitHub
1. Acesse sua conta no [GitHub](https://github.com/) e clique em **New** (Novo repositório).
2. No campo **Repository name**, use o padrão:  
   `a1-fundamentos-web-vespertino-seu-nome`
3. Deixe o repositório como **Public** (Público).
4. **Não marque** as opções de adicionar README ou .gitignore automáticos.
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

### Passo 3: Conecte seu Computador ao GitHub e Envie
Copie o link do seu repositório criado no Passo 1 e execute os comandos abaixo no terminal do VS Code:

```bash
# 5. Conecte sua pasta local ao repositório remoto no GitHub
# (Substitua a URL abaixo pelo link real do seu repositório)
git remote add origin https://github.com/SEU_USUARIO/a1-fundamentos-web-vespertino-seu-nome.git

# 6. Envie seus arquivos para a nuvem
git push -u origin main
```

---

### 🌟 Dica de Ouro: Como Colocar seu Site no Ar com o GitHub Pages
O GitHub oferece hospedagem gratuita para páginas web feitas com HTML, CSS e JavaScript:

1. No seu repositório no GitHub, clique na aba **Settings** (Configurações) no menu superior.
2. No menu lateral esquerdo, clique em **Pages**.
3. Na seção **Build and deployment > Branch**, selecione a branch `main` e a pasta `/ (root)`.
4. Clique em **Save** (Salvar).
5. Aguarde 1 a 2 minutos e atualize a página. O GitHub exibirá um link público (exemplo: `https://seu-usuario.github.io/a1-fundamentos-web-vespertino-seu-nome/`).
6. Envie o link do repositório e o link público do site no ar para o professor!

---

## 📦 Opção 2: Entrega em Sala de Aula via Arquivo ZIP (Alternativa sem Git)

Se você preferir entregar presencialmente em sala ou não tiver configurado o Git:

### Passo 1: Crie e Nomeie a Pasta do Projeto
Crie uma pasta no seu computador com a nomenclatura oficial de disciplina, turno e nome:
```text
A1_fundamentos_web_vespertino_Nome_Sobrenome/
├── index.html
├── style.css (quando houver)
└── img/ (se houver imagens locais)
```

> **Atenção:** Dentro do seu arquivo `index.html`, insira um comentário no topo com seus dados:
> ```html
> <!-- 
>   Aluno: Seu Nome Completo
>   Disciplina: Fundamentos de Desenvolvimento Web
>   Turma: 2026T1 - Turno Vespertino
>   Avaliação: A1
> -->
> ```

### Passo 2: Compactar a Pasta em Formato ZIP
1. Clique com o **botão direito** sobre a pasta `A1_fundamentos_web_vespertino_Nome_Sobrenome`.
2. Selecione **Compactar para arquivo ZIP** (ou *Enviar para > Pasta compactada (zipada)*).
3. O arquivo gerado será:  
   `A1_fundamentos_web_vespertino_Nome_Sobrenome.zip`

### Passo 3: Entregar ao Professor
- Leve o arquivo `.zip` em um **pendrive** na aula do prazo para copiar diretamente no computador do professor; **OU**
- Envie como anexo pelo canal institucional oficial indicado em sala de aula.

---

## ⚠️ Dúvidas Frequentes e Cuidados

- **Imagens não abrem no computador do professor:**  
  Certifique-se de que os caminhos das imagens no `src=""` sejam relativos (ex: `src="img/foto.jpg"` ou links diretos da internet `src="https://..."`). **NUNCA** use caminhos absolutos locais como `src="C:/Users/aluno/Desktop/foto.jpg"`.
