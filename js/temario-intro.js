// Intro temario

function load(key, fallback){
    const raw = localStorage.getItem(key);
    if(!raw) return fallback;
    try { return JSON.parse(raw); } catch { return fallback; }
  }
  
  (() => {
    const domainKey = load("levup_selected_domain", "programacion");
    const domain = window.LEVUP_DATA.domains[domainKey];

    document.getElementById("temarioTitle").textContent = domain.name;
  
    document.getElementById("temarioDesc").textContent =
      domain.temarioIntro?.desc || "Breve introducción del contenido (demo).";
  })();
  
  