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
  
    document.getElementById("temarioTitle").textContent = domain.temarioIntro.title;
    document.getElementById("temarioDesc").textContent  = domain.temarioIntro.desc;
  })();
  