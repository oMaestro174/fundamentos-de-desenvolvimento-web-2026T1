// ==========================================================================
// PORTAL ENCANTOS DE RORAIMA — SCRIPT PRINCIPAL INTEGRADO
// Disciplina: Fundamentos de Desenvolvimento Web (ITEAM)
// Arquitetura DOM Pura: Todo o conteúdo textual reside no HTML (SEO & a11y)
// O JavaScript atua EXCLUSIVAMENTE como orquestrador de eventos e estados!
// ==========================================================================

console.log("%c[ENCANTOS DE RORAIMA] Portal Cultural inicializado com Arquitetura DOM pura!", "color: #0284c7; font-weight: bold; font-size: 14px;");

// --------------------------------------------------------------------------
// 1. GERENCIADOR DE TEMA LIGHT (PADRÃO) / DARK COM LOCALSTORAGE
// --------------------------------------------------------------------------
const btnTema = document.querySelector("#btn-tema");
const iconeTema = document.querySelector("#icone-tema");
const CHAVE_TEMA_STORAGE = "encantos_roraima_tema";

function aplicarTema(tema) {
    document.body.setAttribute("data-theme", tema);
    if (tema === "dark") {
        iconeTema.textContent = "☀️";
        btnTema.setAttribute("aria-label", "Mudar para modo claro");
    } else {
        iconeTema.textContent = "🌙";
        btnTema.setAttribute("aria-label", "Mudar para modo escuro");
    }
    localStorage.setItem(CHAVE_TEMA_STORAGE, tema);
}

// Inicializa com Light Mode (Padrão luminoso e fresco)
const temaSalvo = localStorage.getItem(CHAVE_TEMA_STORAGE) || "light";
aplicarTema(temaSalvo);

btnTema.addEventListener("click", () => {
    const temaAtual = document.body.getAttribute("data-theme");
    const novoTema = temaAtual === "dark" ? "light" : "dark";
    aplicarTema(novoTema);
});


// --------------------------------------------------------------------------
// 2. MENU MOBILE HAMBÚRGUER RESPONSIVO (AULA 07)
// --------------------------------------------------------------------------
const btnHamburguer = document.querySelector("#btn-hamburguer");
const navMenu = document.querySelector("#nav-menu");

btnHamburguer.addEventListener("click", () => {
    const aberto = navMenu.classList.toggle("active");
    btnHamburguer.setAttribute("aria-expanded", aberto);
});

navMenu.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        btnHamburguer.setAttribute("aria-expanded", "false");
    });
});


// --------------------------------------------------------------------------
// 3. CARROSSEL ANCESTRAL HERO (SEGUINDO O GUIA DE ARQUITETURA DOM/SEO)
// Todo o conteúdo textual reside no HTML; o JS apenas alterna as classes!
// --------------------------------------------------------------------------
const slides = document.querySelectorAll(".carousel-slide");
const dots = document.querySelectorAll(".carousel-indicators .dot");
const btnPrev = document.querySelector("#carousel-prev");
const btnNext = document.querySelector("#carousel-next");
const carouselContainer = document.querySelector(".hero-carousel-section");

let slideAtual = 0;
let carouselTimer = null;
const TEMPO_CARROSSEL = 5500; // 5.5 segundos

function exibirSlide(indice) {
    if (indice >= slides.length) slideAtual = 0;
    else if (indice < 0) slideAtual = slides.length - 1;
    else slideAtual = indice;

    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    slides[slideAtual].classList.add("active");
    if (dots[slideAtual]) {
        dots[slideAtual].classList.add("active");
    }
}

function proximoSlide() {
    exibirSlide(slideAtual + 1);
}

function slideAnterior() {
    exibirSlide(slideAtual - 1);
}

function iniciarCarrosselTimer() {
    pararCarrosselTimer();
    carouselTimer = setInterval(proximoSlide, TEMPO_CARROSSEL);
}

function pararCarrosselTimer() {
    if (carouselTimer) {
        clearInterval(carouselTimer);
        carouselTimer = null;
    }
}

if (btnNext && btnPrev) {
    btnNext.addEventListener("click", () => {
        proximoSlide();
        iniciarCarrosselTimer();
    });

    btnPrev.addEventListener("click", () => {
        slideAnterior();
        iniciarCarrosselTimer();
    });
}

dots.forEach((dot, idx) => {
    dot.addEventListener("click", () => {
        exibirSlide(idx);
        iniciarCarrosselTimer();
    });
});

if (carouselContainer) {
    carouselContainer.addEventListener("mouseenter", pararCarrosselTimer);
    carouselContainer.addEventListener("mouseleave", iniciarCarrosselTimer);
}

window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") proximoSlide();
    if (e.key === "ArrowLeft") slideAnterior();
});

iniciarCarrosselTimer();


// --------------------------------------------------------------------------
// 4. FILTRAGEM DINÂMICA E BUSCA EM TEMPO REAL NO DOM (AULAS 06 E 07)
// --------------------------------------------------------------------------
const campoBusca = document.querySelector("#campo-busca");
const botoesFiltro = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".lenda-card");
const contadorResultados = document.querySelector("#contador-resultados");
const msgBuscaVazia = document.querySelector("#msg-busca-vazia");

let categoriaAtiva = "todos";

function aplicarFiltros() {
    const termo = campoBusca ? campoBusca.value.toLowerCase().trim() : "";
    let visiveis = 0;

    cards.forEach(card => {
        const categoriaCard = card.getAttribute("data-categoria");
        const tituloCard = card.querySelector(".card-title")?.textContent.toLowerCase() || "";
        const resumoCard = card.querySelector(".card-excerpt")?.textContent.toLowerCase() || "";

        const bateCategoria = (categoriaAtiva === "todos" || categoriaCard === categoriaAtiva);
        const bateBusca = (termo === "" || tituloCard.includes(termo) || resumoCard.includes(termo));

        if (bateCategoria && bateBusca) {
            card.style.display = "flex";
            visiveis++;
        } else {
            card.style.display = "none";
        }
    });

    if (contadorResultados) {
        contadorResultados.textContent = `Exibindo ${visiveis} de ${cards.length} histórias`;
    }

    if (msgBuscaVazia) {
        msgBuscaVazia.style.display = visiveis === 0 ? "block" : "none";
    }
}

if (campoBusca) {
    campoBusca.addEventListener("input", aplicarFiltros);
}

botoesFiltro.forEach(btn => {
    btn.addEventListener("click", () => {
        botoesFiltro.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        categoriaAtiva = btn.getAttribute("data-categoria");
        aplicarFiltros();
    });
});


// --------------------------------------------------------------------------
// 5. MODAL INTERATIVO — ARQUITETURA PURA VIA DOM (SEM STRINGS NO JS!)
// Toda a narrativa é lida diretamente do nó HTML <div class="lenda-narrativa-completa">
// --------------------------------------------------------------------------
const modal = document.querySelector("#modal-leitura");
const modalFechar = document.querySelector("#modal-fechar");
const modalOk = document.querySelector("#modal-btn-ok");
const modalFav = document.querySelector("#modal-btn-fav");

const modalImg = document.querySelector("#modal-img");
const modalBadge = document.querySelector("#modal-badge");
const modalTitulo = document.querySelector("#modal-titulo");
const modalLocal = document.querySelector("#modal-local");
const modalTempo = document.querySelector("#modal-tempo");
const modalConteudo = document.querySelector("#modal-conteudo");

let idLendaModalAberta = null;

function abrirModalLenda(id) {
    // 🔍 BUSCA O ELEMENTO DIRETAMENTE NA ÁRVORE DO DOM:
    const card = document.querySelector(`.lenda-card[data-id="${id}"]`);
    if (!card) return;

    idLendaModalAberta = id;

    // Extrai os dados reais diretamente das tags HTML existentes:
    const titulo = card.querySelector(".card-title").textContent;
    const badge = card.querySelector(".card-badge").textContent;
    const img = card.querySelector(".card-media img");
    const local = card.querySelector(".card-meta-local")?.textContent || "📍 Roraima";
    const tempo = card.querySelector(".card-meta-tempo")?.textContent || "⏱️ Leitura rápida";
    
    // A narrativa completa já nasceu no HTML:
    const narrativaNode = card.querySelector(".lenda-narrativa-completa");
    const narrativaHTML = narrativaNode ? narrativaNode.innerHTML : `<p>${card.querySelector(".card-excerpt").textContent}</p>`;

    // Popula o Modal reutilizável:
    modalImg.src = img.src;
    modalImg.alt = img.alt;
    modalBadge.textContent = badge;
    modalTitulo.textContent = titulo;
    modalLocal.textContent = local;
    modalTempo.textContent = tempo;
    modalConteudo.innerHTML = narrativaHTML;

    atualizarBotaoModalFav(id);

    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

function fecharModal() {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    idLendaModalAberta = null;
}

// Binds dinâmicos em todos os botões que abrem o modal
document.querySelectorAll(".btn-abrir-modal").forEach(btn => {
    btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        if (id) abrirModalLenda(id);
    });
});

if (modalFechar) modalFechar.addEventListener("click", fecharModal);
if (modalOk) modalOk.addEventListener("click", fecharModal);

modal.addEventListener("click", (e) => {
    if (e.target === modal) fecharModal();
});

window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        fecharModal();
        fecharDrawer();
    }
});


// --------------------------------------------------------------------------
// 6. SISTEMA DE FAVORITOS PERSISTIDO COM LOCALSTORAGE (AULAS 07 E 08)
// --------------------------------------------------------------------------
const CHAVE_FAVORITOS_STORAGE = "encantos_roraima_favoritos";
const badgeFavoritos = document.querySelector("#badge-favoritos");
const btnAbrirFavoritos = document.querySelector("#btn-abrir-favoritos");
const drawerFavoritos = document.querySelector("#drawer-favoritos");
const drawerFechar = document.querySelector("#drawer-fechar");
const listaFavoritosEl = document.querySelector("#lista-favoritos");
const drawerVazioMsg = document.querySelector("#drawer-vazio");
const btnLimparFavoritos = document.querySelector("#btn-limpar-favoritos");

function obterFavoritos() {
    try {
        const raw = localStorage.getItem(CHAVE_FAVORITOS_STORAGE);
        return raw ? JSON.parse(raw) : [];
    } catch {
        return [];
    }
}

function salvarFavoritos(arrayIds) {
    localStorage.setItem(CHAVE_FAVORITOS_STORAGE, JSON.stringify(arrayIds));
    atualizarInterfaceFavoritos();
}

function alternarFavorito(id) {
    let favs = obterFavoritos();
    const index = favs.indexOf(id);

    if (index === -1) {
        favs.push(id);
    } else {
        favs.splice(index, 1);
    }

    salvarFavoritos(favs);
}

function atualizarBotaoModalFav(id) {
    const favs = obterFavoritos();
    if (favs.includes(id)) {
        modalFav.textContent = "♥ Salvo nos Meus Favoritos";
        modalFav.classList.add("btn-primary");
        modalFav.classList.remove("btn-secondary");
    } else {
        modalFav.textContent = "♡ Salvar nos Meus Favoritos";
        modalFav.classList.add("btn-secondary");
        modalFav.classList.remove("btn-primary");
    }
}

function atualizarInterfaceFavoritos() {
    const favs = obterFavoritos();

    if (badgeFavoritos) badgeFavoritos.textContent = favs.length;

    cards.forEach(card => {
        const id = card.getAttribute("data-id");
        const btnHeart = card.querySelector(".btn-favorito-card");
        if (btnHeart) {
            if (favs.includes(id)) {
                btnHeart.classList.add("favoritado");
                btnHeart.textContent = "♥";
                btnHeart.setAttribute("title", "Remover dos favoritos");
            } else {
                btnHeart.classList.remove("favoritado");
                btnHeart.textContent = "♡";
                btnHeart.setAttribute("title", "Favoritar lenda");
            }
        }
    });

    if (idLendaModalAberta) {
        atualizarBotaoModalFav(idLendaModalAberta);
    }

    renderizarDrawerFavoritos();
}

function renderizarDrawerFavoritos() {
    const favs = obterFavoritos();
    if (!listaFavoritosEl) return;

    listaFavoritosEl.innerHTML = "";

    if (favs.length === 0) {
        if (drawerVazioMsg) drawerVazioMsg.style.display = "block";
        if (btnLimparFavoritos) btnLimparFavoritos.style.display = "none";
        return;
    }

    if (drawerVazioMsg) drawerVazioMsg.style.display = "none";
    if (btnLimparFavoritos) btnLimparFavoritos.style.display = "block";

    // 🔍 Extrai as informações dos itens salvos DIRETO dos cards do DOM:
    favs.forEach(id => {
        const card = document.querySelector(`.lenda-card[data-id="${id}"]`);
        if (!card) return;

        const titulo = card.querySelector(".card-title").textContent;
        const local = card.querySelector(".card-meta-local")?.textContent || "Roraima";

        const li = document.createElement("li");
        li.className = "favorito-item";

        li.innerHTML = `
            <div>
                <span class="favorito-item-title">${titulo}</span>
                <div style="font-size: 11px; color: var(--text-muted);">${local}</div>
            </div>
            <button class="btn-remover-fav" data-id="${id}" title="Remover dos favoritos">&times;</button>
        `;

        li.querySelector(".btn-remover-fav").addEventListener("click", () => {
            alternarFavorito(id);
        });

        listaFavoritosEl.appendChild(li);
    });
}

cards.forEach(card => {
    const id = card.getAttribute("data-id");
    const btnHeart = card.querySelector(".btn-favorito-card");
    if (btnHeart && id) {
        btnHeart.addEventListener("click", () => {
            alternarFavorito(id);
        });
    }
});

if (modalFav) {
    modalFav.addEventListener("click", () => {
        if (idLendaModalAberta) {
            alternarFavorito(idLendaModalAberta);
        }
    });
}

function abrirDrawer() {
    renderizarDrawerFavoritos();
    drawerFavoritos.classList.add("active");
    drawerFavoritos.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

function fecharDrawer() {
    drawerFavoritos.classList.remove("active");
    drawerFavoritos.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

if (btnAbrirFavoritos) btnAbrirFavoritos.addEventListener("click", abrirDrawer);
if (drawerFechar) drawerFechar.addEventListener("click", fecharDrawer);
if (drawerFavoritos) {
    drawerFavoritos.addEventListener("click", (e) => {
        if (e.target === drawerFavoritos) fecharDrawer();
    });
}

if (btnLimparFavoritos) {
    btnLimparFavoritos.addEventListener("click", () => {
        if (confirm("Deseja realmente limpar todas as lendas favoritas salvas?")) {
            salvarFavoritos([]);
        }
    });
}


// --------------------------------------------------------------------------
// 7. FORMULÁRIO DO MURAL COM VALIDAÇÃO E CRIAÇÃO DINÂMICA (DOM & STORAGE)
// --------------------------------------------------------------------------
const formHistoria = document.querySelector("#form-historia");
const listaMural = document.querySelector("#lista-mural");
const totalHistoriasBadge = document.querySelector("#total-historias");
const CHAVE_MURAL_STORAGE = "encantos_roraima_mural";

const HISTORIAS_INICIAIS = [
    {
        autor: "Dona Conceição Wapichana",
        municipio: "Bonfim",
        categoria: "Causo Popular",
        titulo: "O Canto da Mãe-da-Lua no Lavrado",
        texto: "Meus avós sempre me contavam que quando o Urutau (a Mãe-da-Lua) canta no topo de um tronco seco do lavrado em noite clara, é sinal de que um viajante perdido encontrou o caminho de volta guiado pela luz prateada de Kapei.",
        data: "28/09/2026"
    },
    {
        autor: "Carlos Silveira",
        municipio: "Boa Vista",
        categoria: "Lugar Místico",
        titulo: "O Sentinela da Praia Grande no Rio Branco",
        texto: "Durante o verão amazônico, quando as águas do Rio Branco baixam e revelam as ilhas de areia branca, os pescadores mais antigos dizem ver ao entardecer a silhueta de um boto dourado que nada ao lado das canoas para abençoar a pescaria.",
        data: "30/09/2026"
    }
];

function obterHistoriasMural() {
    try {
        const salvas = localStorage.getItem(CHAVE_MURAL_STORAGE);
        return salvas ? JSON.parse(salvas) : HISTORIAS_INICIAIS;
    } catch {
        return HISTORIAS_INICIAIS;
    }
}

function salvarHistoriasMural(historias) {
    localStorage.setItem(CHAVE_MURAL_STORAGE, JSON.stringify(historias));
    renderizarMural();
}

function renderizarMural() {
    const historias = obterHistoriasMural();
    if (!listaMural) return;

    listaMural.innerHTML = "";
    if (totalHistoriasBadge) totalHistoriasBadge.textContent = `${historias.length} histórias`;

    historias.forEach(h => {
        const item = document.createElement("div");
        item.className = "feed-item";

        item.innerHTML = `
            <div class="feed-item-header">
                <span class="feed-item-author">${h.autor} (${h.municipio})</span>
                <span class="feed-item-date">${h.data}</span>
            </div>
            <div style="margin-bottom: 6px;">
                <span class="badge-tag" style="font-size: 10px;">${h.categoria}</span>
            </div>
            <h4 class="feed-item-title">${h.titulo}</h4>
            <p class="feed-item-text">${h.texto}</p>
        `;

        listaMural.appendChild(item);
    });
}

if (formHistoria) {
    formHistoria.addEventListener("submit", (evento) => {
        // REGRA DE OURO: Intercepta o recarregamento indesejado da tela
        evento.preventDefault();

        let formularioValido = true;

        const campoNome = formHistoria.querySelector("#autor-nome");
        const campoEmail = formHistoria.querySelector("#autor-email");
        const campoMunicipio = formHistoria.querySelector("#municipio-origem");
        const campoTitulo = formHistoria.querySelector("#historia-titulo");
        const campoCategoria = formHistoria.querySelector("#historia-categoria");
        const campoTexto = formHistoria.querySelector("#historia-texto");
        const campoTermos = formHistoria.querySelector("#concordo-termos");

        function checarCampo(campo, condicaoValida) {
            const formGroup = campo?.closest(".form-group");
            if (formGroup) {
                if (!condicaoValida) {
                    formGroup.classList.add("has-error");
                    formularioValido = false;
                } else {
                    formGroup.classList.remove("has-error");
                }
            }
        }

        checarCampo(campoNome, campoNome.value.trim().length >= 3);
        checarCampo(campoEmail, campoEmail.value.includes("@") && campoEmail.value.includes("."));
        checarCampo(campoMunicipio, campoMunicipio.value !== "");
        checarCampo(campoTitulo, campoTitulo.value.trim().length >= 4);
        checarCampo(campoTexto, campoTexto.value.trim().length >= 20);

        if (!campoTermos.checked) {
            alert("Por favor, aceite a declaração de exibição pública para enviar sua história.");
            formularioValido = false;
        }

        if (!formularioValido) return;

        const hoje = new Date();
        const dataFormatada = hoje.toLocaleDateString("pt-BR");

        const novaHistoria = {
            autor: campoNome.value.trim(),
            municipio: campoMunicipio.value,
            categoria: campoCategoria.value,
            titulo: campoTitulo.value.trim(),
            texto: campoTexto.value.trim(),
            data: dataFormatada
        };

        const historias = obterHistoriasMural();
        historias.unshift(novaHistoria);
        salvarHistoriasMural(historias);

        formHistoria.reset();
        alert("🎉 Sua história foi publicada com sucesso no Mural de Encantos de Roraima!");
    });
}


// --------------------------------------------------------------------------
// 8. BOTÃO FLUTUANTE VOLTAR AO TOPO E ROLAGEM SUAVE (#TOPO)
// --------------------------------------------------------------------------
const btnVoltarTopo = document.querySelector("#btn-voltar-topo");

if (btnVoltarTopo) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 320) {
            btnVoltarTopo.classList.add("visible");
        } else {
            btnVoltarTopo.classList.remove("visible");
        }
    });

    btnVoltarTopo.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

document.querySelectorAll('a[href="#topo"]').forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});


// --------------------------------------------------------------------------
// 9. INICIALIZAÇÃO GERAL DA APLICAÇÃO
// --------------------------------------------------------------------------
atualizarInterfaceFavoritos();
renderizarMural();
aplicarFiltros();
