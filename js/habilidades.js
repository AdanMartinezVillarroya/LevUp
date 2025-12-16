// ==================================
// LevUp - Habilidades (dominio + carrusel por páginas)
// ==================================

const STORAGE_KEYS = {
    domain: "levup_selected_domain",
    capsule: "levup_selected_capsule",
    tema: "levup_selected_tema",
    stats: "levup_stats"
  };
  
  function save(key, value){
    localStorage.setItem(key, JSON.stringify(value));
  }
  
  function load(key, fallback){
    const raw = localStorage.getItem(key);
    if(!raw) return fallback;
    try { return JSON.parse(raw); } catch { return fallback; }
  }
  
  function cardsPerPage(){
    // Wireframe desktop = 4
    // Ajuste responsive simple
    const w = window.innerWidth;
    if (w < 560) return 1;
    if (w < 900) return 2;
    return 4;
  }
  
  function renderCarousel(domainKey){
    const track = document.getElementById("carouselTrack");
    track.innerHTML = "";
    track.dataset.page = "0";
  
    const domain = window.LEVUP_DATA.domains[domainKey];
    const items = domain.capsules;
  
    // Render cards (todas)
    items.forEach((c) => {
      const card = document.createElement("button");
      card.className = "slide";
      card.type = "button";
      card.innerHTML = `
        <div class="slide-media"></div>
        <div class="slide-text">
          <p class="slide-kicker">${c.title}</p>
          <p class="slide-info">${c.info}</p>
          <p class="slide-topic">${c.tema}</p>
        </div>
      `;
      card.addEventListener("click", () => {
        save(STORAGE_KEYS.capsule, c);
        window.location.href = "temario-intro.html";
      });
      track.appendChild(card);
    });
  
    renderDots();
    goToPage(0);
  }
  
  function totalPages(){
    const domainKey = load(STORAGE_KEYS.domain, "programacion");
    const totalCards = window.LEVUP_DATA.domains[domainKey].capsules.length;
    return Math.max(1, Math.ceil(totalCards / cardsPerPage()));
  }
  
  function renderDots(){
    const dots = document.getElementById("carouselDots");
    dots.innerHTML = "";
  
    const pages = totalPages();
    for(let i=0; i<pages; i++){
      const dot = document.createElement("span");
      dot.className = "dot" + (i === 0 ? " is-active" : "");
      dot.addEventListener("click", () => goToPage(i));
      dots.appendChild(dot);
    }
  }
  
  function goToPage(pageIndex){
    const track = document.getElementById("carouselTrack");
    const pageSize = cardsPerPage();
    const pages = totalPages();
  
    const clamped = Math.max(0, Math.min(pageIndex, pages - 1));
    track.dataset.page = String(clamped);
  
    // Mueve el track con translateX por páginas
    const gap = 24; // debe coincidir con CSS (ver abajo)
    const cardWidth = track.clientWidth / pageSize;
    const offset = clamped * (pageSize * (cardWidth + gap));
  
    track.style.transform = `translateX(-${offset}px)`;
  
    // Dots activos
    document.querySelectorAll(".dot").forEach((d, i) => {
      d.classList.toggle("is-active", i === clamped);
    });
  }
  
  function nextPage(){
    const track = document.getElementById("carouselTrack");
    const pages = totalPages();
    let p = Number(track.dataset.page || "0");
    p = (p + 1) % pages;
    goToPage(p);
  }
  
  function prevPage(){
    const track = document.getElementById("carouselTrack");
    const pages = totalPages();
    let p = Number(track.dataset.page || "0");
    p = (p - 1 + pages) % pages;
    goToPage(p);
  }
  
  // Init
  (() => {
    const domainButtons = document.querySelectorAll(".domain-card");
    const selected = load(STORAGE_KEYS.domain, "programacion");
  
    domainButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const key = btn.dataset.domain;
        save(STORAGE_KEYS.domain, key);
        renderCarousel(key);
      });
    });
  
    document.getElementById("nextSlide").addEventListener("click", nextPage);
    document.getElementById("prevSlide").addEventListener("click", prevPage);
  
    document.getElementById("btnAbandonar").addEventListener("click", (e) => {
      e.preventDefault();
      alert("Sesión cerrada (demo).");
      window.location.href = "index.html";
    });
  
    // Recalcular al redimensionar
    window.addEventListener("resize", () => {
      renderDots();
      goToPage(0);
    });
  
    renderCarousel(selected);
  })();
  