# Laboratório 03: Criação de Formulário Completo de Inscrição

## 🎯 Objetivo
Construir um formulário completo e acessível de inscrição de alunos para o curso de tecnologia, contendo validações nativas e múltiplos tipos de entrada.

---

## 🛠️ Passo a Passo Prático

Crie o arquivo `index.html` com o formulário estruturado abaixo:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inscrição de Novos Alunos — ITEAM 2026</title>
</head>
<body>

    <header>
        <h1>Programa de Capacitação Tech ITEAM</h1>
        <p>Preencha o formulário abaixo para garantir sua vaga na turma de 2026.</p>
    </header>

    <hr>

    <main>
        <!-- Início do Formulário -->
        <form action="/processar-inscricao" method="POST">

            <!-- BLOCO 1: DADOS PESSOAIS -->
            <fieldset>
                <legend>1. Dados Pessoais do Candidato</legend>

                <p>
                    <label for="nome-completo">Nome Completo: *</label><br>
                    <input type="text" id="nome-completo" name="nome" placeholder="Digite seu nome completo" minlength="5" required size="40">
                </p>

                <p>
                    <label for="email-candidato">E-mail Corporativo/Pessoal: *</label><br>
                    <input type="email" id="email-candidato" name="email" placeholder="nome@exemplo.com" required size="40">
                </p>

                <p>
                    <label for="senha-acesso">Crie uma Senha de Acesso ao Portal: *</label><br>
                    <input type="password" id="senha-acesso" name="senha" minlength="8" required>
                    <small>(Mínimo de 8 caracteres)</small>
                </p>

                <p>
                    <label for="data-nascimento">Data de Nascimento: *</label><br>
                    <input type="date" id="data-nascimento" name="nascimento" required>
                </p>
            </fieldset>

            <br>

            <!-- BLOCO 2: PREFERÊNCIAS DE CURSO -->
            <fieldset>
                <legend>2. Escolha da Turma e Nível</legend>

                <p>
                    <label for="trilha-curso">Trilha de Interesse:</label><br>
                    <select id="trilha-curso" name="trilha" required>
                        <option value="">-- Selecione uma Trilha --</option>
                        <option value="frontend">Desenvolvimento Front-end (HTML, CSS, JS)</option>
                        <option value="backend">Desenvolvimento Back-end (Node.js e Express)</option>
                        <option value="fullstack">Formação Completa Full Stack</option>
                    </select>
                </p>

                <p>Turno de Preferência: *</p>
                <input type="radio" id="turno-vesp" name="turno" value="vespertino" checked>
                <label for="turno-vesp">Vespertino (14h às 18h)</label><br>

                <input type="radio" id="turno-not" name="turno" value="noturno">
                <label for="turno-not">Noturno (19h às 22h)</label>

                <p>
                    <label for="cep">CEP Residencial (Formato 00000-000):</label><br>
                    <input type="text" id="cep" name="cep" pattern="[0-9]{5}-[0-9]{3}" placeholder="69300-000">
                </p>
            </fieldset>

            <br>

            <!-- BLOCO 3: TERMOS E ENVIO -->
            <fieldset>
                <legend>3. Termos e Confirmação</legend>
                <p>
                    <input type="checkbox" id="concordo-termos" name="termos" required>
                    <label for="concordo-termos">Declaro que as informações acima são verdadeiras e aceito os termos do ITEAM.</label>
                </p>

                <p>
                    <button type="submit"><strong>Confirmar Inscrição</strong></button>
                    <button type="reset">Limpar Campos</button>
                </p>
            </fieldset>

        </form>
    </main>

    <hr>

    <footer>
        <p><small>© 2026 ITEAM - Todos os direitos reservados.</small></p>
    </footer>

</body>
</html>
```

---

## 🛠️ Teste das Validações:
1. Abra no navegador via Live Server.
2. Tente clicar em **Confirmar Inscrição** com os campos vazios. O navegador exibirá balões nativos bloqueando o envio!
3. Digite um e-mail sem `@` ou uma senha com menos de 8 dígitos para ver a rejeição automática.
4. Digite um CEP fora do formato `XXXXX-XXX` e note que a validação por `pattern` não deixa o formulário ser enviado.
