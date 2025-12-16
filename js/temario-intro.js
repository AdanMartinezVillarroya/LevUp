// ==================================
// LevUp - Temario intro
// ==================================

function load(key, fallback){
    const raw = localStorage.getItem(key);
    if(!raw) return fallback;
    try { return JSON.parse(raw); } catch { return fallback; }
  }
  
  (() => {
    const domainKey = load("levup_selected_domain", "programacion");
    const domain = window.LEVUP_DATA.domains[domainKey];
  
    // Evita duplicados: construimos el título aquí
    document.getElementById("temarioTitle").textContent = `${domain.name} · Temario`;
  
    // La descripción puede venir del data.js
    document.getElementById("temarioDesc").textContent = domain.temarioIntro?.desc || "Breve introducción del temario (demo).";
  })();
  