# Laboratório 08: Checklist Final e Preparação do Projeto Integrador A3

## 🎯 Objetivo
Realizar a auditoria técnica de qualidade, acessibilidade e responsividade da sua aplicação web antes da entrega final da **Avaliação A3**.

---

## 🛠️ Checklist de Auditoria Técnica

Antes de apresentar seu Projeto Integrador, execute os 5 testes de homologação abaixo:

### 1. Teste de Responsividade (Sem Rolagem Lateral)
- [ ] Abra o DevTools com `F12`.
- [ ] Ative a visualização móvel (`Ctrl + Shift + M`).
- [ ] Teste a largura em **360px** (telas pequenas), **768px** (tablets) e **1280px** (desktops).
- [ ] Certifique-se de que a barra de rolagem horizontal **não aparece em nenhuma resolução**.

### 2. Teste de Acessibilidade e Semântica
- [ ] O documento possui um único elemento `<main>`?
- [ ] Todos os títulos seguem hierarquia correta (`h1` -> `h2` -> `h3`) sem pular níveis?
- [ ] **Todas as imagens** possuem atributo `alt` preenchido?
- [ ] Todos os campos de formulário possuem `<label for="...">` pareados com `id="..."`?

### 3. Teste de Performance e Console Limpo
- [ ] Abra a aba **Console** do DevTools.
- [ ] A página carrega limpa, **sem nenhum erro em vermelho**?
- [ ] Remova todos os `console.log` de rascunho ou depuração antes de enviar.

### 4. Teste de Recursos Multimídia e Links
- [ ] Todos os links externos abrem em nova aba com `target="_blank"` e `rel="noopener noreferrer"`?
- [ ] Todos os botões possuem efeito visual de hover e active?

### 5. Teste da Interatividade JavaScript
- [ ] Os eventos de clique ou validação funcionam sem recarregar a página acidentalmente?
- [ ] As interações respondem de forma ágil e fluida.

---

Parabéns por concluir todas as etapas do curso! Prepare sua apresentação e envie a Avaliação A3!
