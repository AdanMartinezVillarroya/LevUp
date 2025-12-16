// ==================================
// LevUp - Habilidades (dominio + carrusel)
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
  
  // Render carrusel en base a dominio
  function renderCarousel(domainKey){
    const track = document.getElementById("carouselTrack");
    const dots = document.getElementById("carouselDots");
    track.innerHTML = "";
    dots.innerHTML = "";
  
    const domain = window.LEVUP_DATA.domains[domainKey];
    const items = domain.capsules;
  
    items.forEach((c, idx) => {
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
        // Al elegir una cápsula, vamos a la intro del temario
        window.location.href = "temario-intro.html";
      });
      track.appendChild(card);
  
      const dot = document.createElement("span");
      dot.className = "dot" + (idx === 0 ? " is-active" : "");
      dots.appendChild(dot);
    });
  
    // Posición inicial
    track.dataset.index = "0";
    updateCarouselUI();
  }
  
  function updateCarouselUI(){
    const track = document.getElementById("carouselTrack");
    const idx = Number(track.dataset.index || "0");
    const slides = track.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
  
    slides.forEach((s, i) => {
      s.style.display = (i === idx) ? "block" : "none";
    });
  
    dots.forEach((d, i) => {
      d.classList.toggle("is-active", i === idx);
    });
  }
  
  function nextSlide(){
    const track = document.getElementById("carouselTrack");
    const domainKey = load(STORAGE_KEYS.domain, "programacion");
    const total = window.LEVUP_DATA.domains[domainKey].capsules.length;
  
    let idx = Number(track.dataset.index || "0");
    idx = (idx + 1) % total;
    track.dataset.index = String(idx);
    updateCarouselUI();
  }
  
  function prevSlide(){
    const track = document.getElementById("carouselTrack");
    const domainKey = load(STORAGE_KEYS.domain, "programacion");
    const total = window.LEVUP_DATA.domains[domainKey].capsules.length;
  
    let idx = Number(track.dataset.index || "0");
    idx = (idx - 1 + total) % total;
    track.dataset.index = String(idx);
    updateCarouselUI();
  }
  
  // Init
  (() => {
    const domainButtons = document.querySelectorAll(".domain-card");
    const selected = load(STORAGE_KEYS.domain, "programacion");
  
    // Guardar dominio al click
    domainButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const key = btn.dataset.domain;
        save(STORAGE_KEYS.domain, key);
        renderCarousel(key);
      });
    });
  
    // Botones del carrusel
    document.getElementById("nextSlide").addEventListener("click", nextSlide);
    document.getElementById("prevSlide").addEventListener("click", prevSlide);
  
    // Abandonar (demo)
    document.getElementById("btnAbandonar").addEventListener("click", (e) => {
      e.preventDefault();
      alert("Sesión cerrada (demo).");
      window.location.href = "index.html";
    });
  
    // Inicializa carrusel con el dominio actual
    renderCarousel(selected);
  })();
  