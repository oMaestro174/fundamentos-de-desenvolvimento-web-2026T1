# Aula 04: Introdução ao CSS3, Sintaxe e o Box Model
> **Disciplina:** Fundamentos de Desenvolvimento Web  
> **Carga Horária:** 4 Horas  
> **Instrutor:** Professor ITEAM

---

## 🎯 Objetivos da Aula
- Compreender a separação de responsabilidades entre HTML (conteúdo) e CSS (apresentação).
- Dominar as três formas de aplicar CSS e por que o CSS Externo via `<link>` é o padrão profissional.
- Aprender a anatomia de uma regra CSS: seletores, propriedades e valores.
- Entender a especificidade CSS (elementos, classes e IDs).
- Incorporar fontes modernas do Google Fonts e paletas harmoniosas.
- **Dominar o Box Model (Modelo de Caixa):** Margem, Borda, Padding e Conteúdo.
- Compreender a revolução do `box-sizing: border-box`.

---

## 📚 Conteúdo Teórico

### 1. A Anatomia de uma Regra CSS
O CSS funciona associando declarações de estilo a elementos selecionados na página:

```css
/* Seletor */
.card-titulo {
  /* Propriedade: Valor; */
  color: #1e293b;
  font-size: 1.5rem;
  margin-bottom: 8px;
}
```

### 2. O Modelo de Caixa (Box Model)
Cada elemento HTML renderizado pelo navegador é interpretado como uma caixa retangular:

```
+-------------------------------------------------------------+
| MARGIN (Espaçamento externo invisível entre elementos)      |
|  +-------------------------------------------------------+  |
|  | BORDER (Linha física desenhada ao redor da caixa)     |  |
|  |  +-------------------------------------------------+  |  |
|  |  | PADDING (Respiro interno entre borda e conteúdo)|  |  |
|  |  |  +-------------------------------------------+  |  |  |
|  |  |  | CONTENT (Texto, imagem, etc.)             |  |  |  |
|  |  |  +-------------------------------------------+  |  |  |
|  |  +-------------------------------------------------+  |  |
|  +-------------------------------------------------------+  |
+-------------------------------------------------------------+
```

### 3. A Regra de Ouro: `box-sizing: border-box`
No padrão antigo (`content-box`), adicionar padding e border aumentava a largura total do elemento, quebrando alinhamentos.  
Com `border-box`, a largura (`width`) declarada representa a dimensão final exata do componente na tela:

```css
/* Reset Padrão recomendado em todo projeto profissional */
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

### 4. Variáveis CSS (Custom Properties)
Facilitam a consistência visual e a manutenção:

```css
:root {
  --primary: #2563eb;
  --primary-hover: #1d4ed8;
  --bg-page: #f1f5f9;
  --text-main: #0f172a;
}
```

---

## 🛠️ Roteiro do Laboratório
Consulte o guia prático em:  
👉 **[Laboratório Prático da Aula 04](./laboratorio.md)**
