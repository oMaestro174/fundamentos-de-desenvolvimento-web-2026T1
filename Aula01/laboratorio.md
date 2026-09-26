# Laboratório 01: Setup Profissional e Primeira Página Web

## 🎯 Objetivo
Configurar o ambiente no VS Code com a extensão Live Server, estruturar a árvore de arquivos de um projeto web e publicar sua primeira página HTML5 formatada.

---

## 🛠️ Passo 1: Configuração do VS Code
1. Abra o VS Code.
2. Acesse a aba **Extensions** (ícone de blocos no menu lateral esquerdo ou `Ctrl + Shift + X`).
3. Pesquise e instale as seguintes extensões:
   * **Live Server** (por Ritwick Dey): Permite abrir um servidor de teste local que recarrega a página automaticamente a cada salvamento (`Ctrl + S`).
   * **Prettier - Code Formatter**: Formata e indenta o código automaticamente.

---

## 🛠️ Passo 2: Criação da Estrutura de Pastas
Crie uma pasta de trabalho para o seu projeto:
```text
meu-primeiro-site/
└── index.html
```

---

## 🛠️ Passo 3: Escrevendo o Código
No arquivo `index.html`, gere o esqueleto com o atalho `!` + `Tab` e monte a página sobre uma apresentação pessoal profissional:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Perfil Profissional - Dev Web</title>
</head>
<body>
    <!-- Cabeçalho Principal -->
    <h1>Janei Vieira Pereira</h1>
    <p><strong>Desenvolvedor Full Stack & Instrutor de Tecnologia</strong></p>
    
    <hr>

    <!-- Seção de Biografia -->
    <h2>Sobre Mim</h2>
    <p>
        Olá! Sou estudante de tecnologia no programa ITEAM. Estou aprendendo os fundamentos do 
        desenvolvimento web moderno com foco em HTML5, CSS3 e JavaScript.
    </p>

    <!-- Seção de Objetivos -->
    <h2>Objetivos de Aprendizado</h2>
    <p>
        Dominar a construção de interfaces web acessíveis, semânticas e responsivas para o mercado de trabalho.
    </p>

    <hr>

    <p><small>© 2026 - Desenvolvido durante o curso de Fundamentos Web do ITEAM.</small></p>
</body>
</html>
```

---

## 🛠️ Passo 4: Executando com Live Server
1. Clique com o botão direito no arquivo `index.html` no explorador do VS Code.
2. Selecione **"Open with Live Server"** (ou clique no botão "Go Live" na barra inferior).
3. O navegador padrão será aberto automaticamente no endereço `http://127.0.0.1:5500/index.html`.
4. Faça uma alteração no texto, pressione `Ctrl + S` e observe a atualização imediata no navegador sem precisar recarregar manualmente!
