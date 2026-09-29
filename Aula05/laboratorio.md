# Laboratório 05: Interface Completa com Flexbox, Grid e Responsividade

## 🎯 Objetivo
Construir uma página institucional de uma agência de tecnologia contendo:
1. Barra de navegação responsiva com Flexbox.
2. Banner hero moderno.
3. Grade de serviços/cards com CSS Grid que se reorganiza automaticamente de 3 colunas (desktop) para 1 coluna (celular).

---

## 🛠️ Passo 1: O HTML (`index.html`)
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Agência Tech ITEAM — Layout Responsivo</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <!-- 1. NAVBAR COM FLEXBOX -->
    <header class="navbar">
        <div class="logo">ITEAM<span>.dev</span></div>
        <nav class="nav-links">
            <a href="#servicos">Serviços</a>
            <a href="#sobre">Sobre Nós</a>
            <a href="#contato" class="btn-contato">Fale Conosco</a>
        </nav>
    </header>

    <!-- 2. HERO SECTION -->
    <section class="hero">
        <h1>Transformamos Ideias em Experiências Digitais</h1>
        <p>Desenvolvimento web moderno, rápido, acessível e 100% responsivo para o seu negócio.</p>
    </section>

    <!-- 3. GRADE DE SERVIÇOS COM CSS GRID -->
    <main class="container" id="servicos">
        <h2 class="secao-titulo">Nossos Serviços</h2>
        
        <div class="grid-servicos">
            <article class="card-servico">
                <div class="icone">🌐</div>
                <h3>Desenvolvimento Front-end</h3>
                <p>Construção de interfaces modernas com HTML5, CSS3, Flexbox, Grid e acessibilidade total.</p>
            </article>

            <article class="card-servico">
                <div class="icone">⚙️</div>
                <h3>APIs e Back-end</h3>
                <p>Servidores escaláveis com Node.js, Express e integração com bancos de dados relacionais.</p>
            </article>

            <article class="card-servico">
                <div class="icone">📱</div>
                <h3>Design Responsivo</h3>
                <p>Garantia de usabilidade e performance impecável em smartphones, tablets e desktops.</p>
            </article>
        </div>
    </main>

    <!-- 4. RODAPÉ -->
    <footer class="footer">
        <p>© 2026 ITEAM Agência Tech. Todos os direitos reservados.</p>
    </footer>

</body>
</html>
```

---

## 🛠️ Passo 2: O CSS Responsivo (`style.css`)
```css
/* Reset Básico */
*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: system-ui, -apple-system, sans-serif;
    color: #1e293b;
    background-color: #f8fafc;
    line-height: 1.5;
}

/* ==========================================================================
   NAVBAR (FLEXBOX)
   ========================================================================== */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 40px;
    background-color: #ffffff;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.logo {
    font-size: 22px;
    font-weight: 800;
    color: #0f172a;
}

.logo span {
    color: #2563eb;
}

.nav-links {
    display: flex;
    align-items: center;
    gap: 24px;
}

.nav-links a {
    text-decoration: none;
    color: #475569;
    font-weight: 500;
    transition: color 0.2s;
}

.nav-links a:hover {
    color: #2563eb;
}

.btn-contato {
    background-color: #2563eb;
    color: #ffffff !important;
    padding: 8px 18px;
    border-radius: 6px;
    transition: background 0.2s;
}

.btn-contato:hover {
    background-color: #1d4ed8;
}

/* ==========================================================================
   HERO SECTION
   ========================================================================== */
.hero {
    text-align: center;
    padding: 80px 20px;
    background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
    color: #ffffff;
}

.hero h1 {
    font-size: 38px;
    font-weight: 800;
    max-width: 750px;
    margin: 0 auto 16px auto;
}

.hero p {
    font-size: 18px;
    color: #94a3b8;
    max-width: 600px;
    margin: 0 auto;
}

/* ==========================================================================
   GRID DE SERVIÇOS (CSS GRID)
   ========================================================================== */
.container {
    max-width: 1100px;
    margin: 60px auto;
    padding: 0 20px;
}

.secao-titulo {
    text-align: center;
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 40px;
}

.grid-servicos {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 colunas iguais no desktop */
    gap: 30px;
}

.card-servico {
    background-color: #ffffff;
    padding: 30px;
    border-radius: 12px;
    border: 1px solid #e2e8f0;
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
    transition: transform 0.2s ease;
}

.card-servico:hover {
    transform: translateY(-5px);
}

.icone {
    font-size: 40px;
    margin-bottom: 16px;
}

.card-servico h3 {
    font-size: 18px;
    margin-bottom: 12px;
}

.card-servico p {
    color: #64748b;
    font-size: 14px;
}

/* ==========================================================================
   RODAPÉ
   ========================================================================== */
.footer {
    text-align: center;
    padding: 30px;
    background-color: #ffffff;
    border-top: 1px solid #e2e8f0;
    color: #64748b;
    font-size: 14px;
}

/* ==========================================================================
   MEDIA QUERIES (RESPONSIVIDADE)
   ========================================================================== */
@media (max-width: 850px) {
    .grid-servicos {
        grid-template-columns: repeat(2, 1fr); /* 2 colunas no tablet */
    }
}

@media (max-width: 600px) {
    .navbar {
        flex-direction: column;
        gap: 16px;
        padding: 20px;
    }

    .nav-links {
        flex-direction: column;
        width: 100%;
        gap: 12px;
    }

    .btn-contato {
        text-align: center;
        width: 100%;
    }

    .hero h1 {
        font-size: 28px;
    }

    .grid-servicos {
        grid-template-columns: 1fr; /* 1 coluna no celular */
    }
}
```

---

## 🛠️ Passo 3: Testando a Responsividade no Chrome DevTools
1. Pressione `F12` para abrir o DevTools.
2. Pressione `Ctrl + Shift + M` para ligar o **Device Toolbar** (Modo Mobile).
3. Selecione modelos como **iPhone 14**, **Pixel 7** e **iPad Air**.
4. Observe o menu e a grade se rearranjando com fluidez, sem nenhuma barra de rolagem horizontal quebrada!
