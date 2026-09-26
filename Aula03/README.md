# Aula 03: Formulários HTML5 Avançados, Validações Nativas e Entrega A1

## 🎯 Objetivos da Aula
- Dominar a tag `<form>` e compreender o ciclo de envio de dados: atributos `action` e métodos HTTP `GET` vs `POST`.
- Utilizar a gama completa de tipos de `<input>` modernos: `text`, `email`, `password`, `number`, `date`, `tel`, `checkbox`, `radio`, `file`, `color`.
- Integrar campos multilinhas (`<textarea>`) e seletores suspensos (`<select>` e `<option>`).
- Implementar **Acessibilidade Web (a11y)** obrigatória através da correlação rigorosa entre `<label for="...">` e `id="..."`.
- Utilizar validações declarativas nativas do HTML5: `required`, `minlength`, `maxlength`, `min`, `max`, `step` e `pattern` (Expressões Regulares).
- Preparar e desenvolver a **Avaliação Prática A1**.

---

## 🧭 Roteiro da Aula
1. **Teoria de Formulários:** Como os dados saem do navegador e chegam ao backend.
2. **GET vs POST:** Quando os dados viajam na URL e quando viajam no corpo seguro da requisição.
3. **Controles e Acessibilidade:** Labels, fieldsets e agrupamentos semânticos.
4. **Validações Nativas:** Garantindo consistência de dados antes mesmo de tocar no JavaScript.
5. **Laboratório e Avaliação A1:** Siga as orientações em [laboratorio.md](laboratorio.md) e o regulamento em [Avaliações A1](../Avaliacoes/A1/README.md).

---

## 📖 1. A Tag `<form>`: O Contrato de Envio

O elemento `<form>` é o envelope que empacota as respostas do usuário e as despacha para um servidor.

```html
<form action="/api/cadastro" method="POST">
    <!-- Campos de entrada aqui -->
    <button type="submit">Enviar Cadastro</button>
</form>
```

### Atributos Cruciais:
* **`action`**: A URL ou endpoint do backend para onde os dados serão despachados (ex: `https://meu-servidor.com/salvar` ou `/contato`).
* **`method`**: O verbo HTTP que define o transporte:
  * **`GET` (Padrão):** Anexa os dados digitados diretamente na URL (ex: `pesquisa.html?termo=javascript&categoria=web`).
    * *Quando usar:* Apenas em buscas, filtros e consultas públicas.
    * *Nunca use para:* Senhas, CPFs, cartões de crédito ou cadastros sensíveis!
  * **`POST`:** Empacota os dados de forma oculta dentro do corpo (*body*) da requisição HTTP.
    * *Quando usar:* Em cadastros, logins, pagamentos e qualquer envio de dados que altere o banco.

---

## 📖 2. Acessibilidade Obrigatória: O Par `<label>` e `id`

Em formulários profissionais, **NUNCA** deixe um campo de texto solto sem `<label>`.

```html
<!-- ❌ ERRADO E INACESSÍVEL: Leitores de tela não sabem o que digitar -->
Nome: <input type="text" name="nome">

<!-- ✅ CORRETO E PROFISSIONAL: 'for' do label deve ser IDÊNTICO ao 'id' do input -->
<label for="campo-nome">Nome Completo:</label>
<input type="text" id="campo-nome" name="nome" placeholder="Ex: Maria dos Santos" required>
```

### Por que isso é vital?
1. **Acessibilidade:** Pessoas cegas ouvindo leitores de tela saberão exatamente qual dado aquele campo exige ao focar nele.
2. **Usabilidade (Área de Clique):** Ao clicar com o mouse ou tocar na palavra do `<label>`, o cursor foca automaticamente dentro do campo de texto correspondente!

---

## 📖 3. Catálogo de Tipos de Entrada (`<input>`)

O HTML5 trouxe tipos específicos que ativam teclados inteligentes em smartphones e validam os formatos automaticamente:

```html
<!-- Texto padrão -->
<input type="text" id="usuario" name="usuario" minlength="3" maxlength="20" required>

<!-- E-mail: exige o caractere '@' e um domínio válido -->
<input type="email" id="email" name="email" placeholder="seuemail@provedor.com" required>

<!-- Senha: oculta os caracteres com bolinhas -->
<input type="password" id="senha" name="senha" minlength="8" required>

<!-- Numérico: limita valores e passos -->
<input type="number" id="idade" name="idade" min="18" max="120" step="1">

<!-- Data: abre um seletor visual nativo de calendário -->
<input type="date" id="nascimento" name="nascimento">

<!-- Caixa de Seleção Única (Checkbox) -->
<input type="checkbox" id="termos" name="termos" required>
<label for="termos">Aceito os termos de privacidade do ITEAM</label>

<!-- Botões de Opção Exclusiva (Radio): Devem ter o MESMO 'name' para alternar -->
<p>Turno Desejado:</p>
<input type="radio" id="turno-vesp" name="turno" value="vespertino" checked>
<label for="turno-vesp">Vespertino</label>

<input type="radio" id="turno-not" name="turno" value="noturno">
<label for="turno-not">Noturno</label>
```

---

## 📖 4. Seleção e Texto Multilinha

```html
<!-- Menu suspenso (Select) -->
<label for="estado">Estado:</label>
<select id="estado" name="estado" required>
    <option value="">-- Selecione seu Estado --</option>
    <option value="RR">Roraima</option>
    <option value="AM">Amazonas</option>
    <option value="SP">São Paulo</option>
</select>

<!-- Caixa de texto multilinha para mensagens grandes -->
<label for="biografia">Biografia ou Mensagem:</label>
<textarea id="biografia" name="biografia" rows="5" cols="40" placeholder="Conte um pouco sobre sua trajetória..."></textarea>
```

---

## 📖 5. Agrupamento Semântico com `<fieldset>` e `<legend>`

Quando o formulário tem muitos campos, dividimos as seções usando `<fieldset>`:

```html
<fieldset>
    <legend>Dados de Identificação Pessoal</legend>
    <!-- Campos de nome, CPF, nascimento -->
</fieldset>

<fieldset>
    <legend>Endereço e Contato</legend>
    <!-- Campos de CEP, rua, telefone -->
</fieldset>
```

---

## 📖 6. Validações Nativas Poderosas (Sem JavaScript!)

O HTML5 pode impedir o envio do formulário caso as regras não sejam atendidas:
* **`required`**: Torna o preenchimento obrigatório.
* **`minlength="5"` / `maxlength="100"`**: Controla a quantidade de caracteres.
* **`min="1"` / `max="10"`**: Controla valores numéricos ou datas.
* **`pattern="[0-9]{5}-[0-9]{3}"`**: Validação com Expressão Regular (Regex)! Exemplo de máscara de CEP brasileiro (`XXXXX-XXX`).

Pratique no laboratório em [laboratorio.md](laboratorio.md) e realize a entrega da **Avaliação A1**!
