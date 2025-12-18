// Progreso

function load(key, fallback){
    const raw = localStorage.getItem(key);
    if(!raw) return fallback;
    try { return JSON.parse(raw); } catch { return fallback; }
  }
  
  (() => {
    const stats = load("levup_stats", { studyMinutes: 45, modulesDone: 12, streakDays: 7 });
  
    const m = document.getElementById("studyMinutes");
    const d = document.getElementById("modulesDone");
    const s = document.getElementById("streakDays");
  
    if(m) m.textContent = stats.studyMinutes;
    if(d) d.textContent = stats.modulesDone;
    if(s) s.textContent = stats.streakDays;
  })();
  