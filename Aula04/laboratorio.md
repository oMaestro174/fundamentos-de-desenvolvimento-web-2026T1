# Laboratório 04: Estilização Profissional e Domínio do Box Model
> **Disciplina:** Fundamentos de Desenvolvimento Web  
> **Carga Horária Equivalente:** Prática supervisionada da Aula 04

---

## 🎯 Objetivo
Transformar a estrutura semântica em uma interface visualmente atraente e moderna, criando um **Card de Produto Profissional** com tipografia Google Fonts, sombras suaves, botões com transições e o controle milimétrico do Box Model.

---

## 📂 Estrutura de Arquivos
Na pasta da aula, utilize os arquivos:
```text
Aula04/
├── README.md
├── laboratorio.md
└── src/
    ├── index.html
    └── style.css
```

---

## 💻 Passo 1: O HTML (`src/index.html`)

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Card de Produto | CSS Box Model</title>
  
  <!-- Importando a fonte Inter do Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
  
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <main class="container">
    <article class="card">
      <img class="card-img" src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600" alt="Smartwatch elegante prateado">
      
      <div class="card-body">
        <span class="badge">Tecnologia</span>
        <h2 class="card-title">Smartwatch Pro Series</h2>
        <p class="card-text">
          Monitore seus batimentos, treinos e receba notificações instantâneas com bateria de até 14 dias de duração.
        </p>

        <div class="card-footer">
          <span class="preco">R$ 599,00</span>
          <button class="btn">Comprar</button>
        </div>
      </div>
    </article>
  </main>

</body>
</html>
```

---

## 🎨 Passo 2: O CSS (`src/style.css`)

```css
/* 1. Design Tokens (Variáveis Globais) */
:root {
  --bg-body: #f1f5f9;
  --card-bg: #ffffff;
  --text-main: #0f172a;
  --text-muted: #64748b;
  --primary: #2563eb;
  --primary-hover: #1d4ed8;
  --border-color: #e2e8f0;
  --radius: 12px;
  --shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

/* 2. Reset Universal do Box Model */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background-color: var(--bg-body);
  color: var(--text-main);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

/* 3. Componente Card */
.card {
  background-color: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  max-width: 360px;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.card-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}

.card-body {
  padding: 24px;
}

.badge {
  display: inline-block;
  background-color: #dbeafe;
  color: var(--primary);
  font-size: 0.75rem;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 9999px;
  text-transform: uppercase;
  margin-bottom: 12px;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 8px;
}

.card-text {
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 20px;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--border-color);
  padding-top: 16px;
}

.preco {
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--primary);
}

.btn {
  background-color: var(--primary);
  color: #ffffff;
  border: none;
  padding: 10px 18px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.btn:hover {
  background-color: var(--primary-hover);
}
```

---

## 🔍 Passo 3: Inspeção com DevTools
1. Abra o arquivo no navegador via **Live Server**.
2. Pressione `F12` e selecione a aba **Elements**.
3. No painel lateral, localize o diagrama do **Box Model**:
   - Passe o mouse sobre a **Margem** (laranja).
   - Passe o mouse sobre a **Borda** (amarela).
   - Passe o mouse sobre o **Padding** (verde).
   - Passe o mouse sobre o **Conteúdo** (azul).
