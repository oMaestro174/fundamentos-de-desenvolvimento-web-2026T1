# Laboratório 02: Construção de Portal Semântico com Mídia

## 🎯 Objetivo
Construir uma página web rica e estruturada de um portal de notícias de tecnologia, utilizando toda a estrutura semântica do HTML5, tabela informativa, links com âncoras e elementos multimídia.

---

## 🛠️ Passo 1: Estrutura de Arquivos
Crie a estrutura do projeto:
```text
portal-noticias/
├── index.html
└── assets/
    └── logo.png (ou imagem de teste)
```

---

## 🛠️ Passo 2: Construindo o Código Semântico
Crie o arquivo `index.html` com o código abaixo:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TechNews ITEAM — O Portal de Tecnologia</title>
</head>
<body>

    <!-- 1. CABEÇALHO E MENU PRINCIPAL -->
    <header>
        <h1>TechNews ITEAM</h1>
        <p>As novidades mais quentes do desenvolvimento web moderno</p>
        <nav>
            <ul>
                <li><a href="#artigos">Artigos Principais</a></li>
                <li><a href="#podcasts">Podcasts da Semana</a></li>
                <li><a href="#tabela-dados">Mercado e Salários</a></li>
            </ul>
        </nav>
    </header>

    <hr>

    <!-- 2. CONTEÚDO PRINCIPAL -->
    <main>

        <!-- Seção de Artigos com tag <article> -->
        <section id="artigos">
            <h2>Destaques de Tecnologia</h2>
            
            <article>
                <h3>Por que o HTML5 Semântico é Vital para o Seu Site?</h3>
                <p>Publicado por <strong>Janei Vieira</strong> em <em>24 de Setembro de 2026</em>.</p>
                <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=600" alt="Linhas de código HTML coloridas em um monitor de programador" width="600">
                <p>
                    A semântica não é mero capricho de escrita. Mecanismos de busca como o Google priorizam 
                    páginas que estruturam seu conteúdo com clareza. Além disso, milhões de usuários dependem 
                    de leitores de tela para navegar no dia a dia.
                </p>
                <a href="https://developer.mozilla.org/pt-BR/docs/Glossary/Semantics" target="_blank" rel="noopener noreferrer">Leia a documentação oficial na MDN</a>
            </article>

            <article>
                <h3>Web 3.0, IA e o Futuro do Front-end</h3>
                <p>O ecossistema dos navegadores está cada vez mais poderoso, suportando gráficos 3D e interfaces inteligentes.</p>
            </article>
        </section>

        <hr>

        <!-- Seção de Multimídia -->
        <section id="podcasts">
            <h2>Multimídia e Conteúdo em Áudio</h2>
            <p>Ouça o bate-papo de 1 minuto sobre carreira tech:</p>
            <audio controls>
                <source src="https://www.w3schools.com/html/horse.mp3" type="audio/mpeg">
                Seu navegador não suporta reprodução nativa de áudio.
            </audio>
        </section>

        <hr>

        <!-- Seção de Dados Tabulares -->
        <section id="tabela-dados">
            <h2>Média Salarial na Área de Tecnologia (2026)</h2>
            <table border="1" cellpadding="8">
                <caption>Tabela salarial média no mercado nacional para desenvolvedores</caption>
                <thead>
                    <tr>
                        <th>Nível</th>
                        <th>Cargo</th>
                        <th>Remuneração Média</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Júnior</td>
                        <td>Desenvolvedor Front-end</td>
                        <td>R$ 4.200,00</td>
                    </tr>
                    <tr>
                        <td>Pleno</td>
                        <td>Desenvolvedor Full Stack</td>
                        <td>R$ 8.500,00</td>
                    </tr>
                    <tr>
                        <td>Sênior</td>
                        <td>Arquiteto de Software</td>
                        <td>R$ 16.000,00</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="3"><small>Fonte: Pesquisa Salarial de Tecnologia ITEAM 2026.</small></td>
                    </tr>
                </tfoot>
            </table>
        </section>

    </main>

    <hr>

    <!-- 3. RODAPÉ INSTITUCIONAL -->
    <footer>
        <p>&copy; 2026 TechNews ITEAM. Todos os direitos reservados.</p>
        <p><a href="#artigos">Voltar ao topo</a></p>
    </footer>

</body>
</html>
```

---

## 🛠️ Passo 3: Validação da Entrega
1. Abra no navegador via Live Server.
2. Clique nos links do menu e teste se a página rola suavemente até o destino (âncoras).
3. Teste o play/pause do áudio nativo.
4. Desative as imagens no navegador ou use a ferramenta Inspecionar (F12) para verificar se o atributo `alt` está presente.
