// ==================================
// LevUp - Actividad (validación + progreso)
// ==================================
function save(key, value){ localStorage.setItem(key, JSON.stringify(value)); }
function load(key, fallback){
  const raw = localStorage.getItem(key);
  if(!raw) return fallback;
  try { return JSON.parse(raw); } catch { return fallback; }
}

const STATS_KEY = "levup_stats";

function getStats(){
  return load(STATS_KEY, { studyMinutes: 0, modulesDone: 0, streakDays: 0 });
}

function setStats(s){
  save(STATS_KEY, s);
}

(() => {
  const domainKey = load("levup_selected_domain", "programacion");
  const domain = window.LEVUP_DATA.domains[domainKey];
  const activity = domain.actividad;

  // Pinta actividad
  document.getElementById("actTitle").textContent = activity.title;
  document.getElementById("actEnunciado").textContent = activity.enunciado;

  const answersEl = document.getElementById("answers");
  const feedbackEl = document.getElementById("feedback");

  let selectedId = null;

  answersEl.innerHTML = "";
  activity.answers.forEach(a => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "answer-card";
    card.innerHTML = `<h3>${a.id.toUpperCase().replace("A","Respuesta ")}</h3><p>${a.text}</p>`;
    card.addEventListener("click", () => {
      selectedId = a.id;
      document.querySelectorAll(".answer-card").forEach(x => x.classList.remove("is-active"));
      card.classList.add("is-active");
      feedbackEl.textContent = "";
      feedbackEl.className = "feedback";
    });
    answersEl.appendChild(card);
  });

  // Validación
  document.getElementById("btnValidar").addEventListener("click", () => {
    if(!selectedId){
      feedbackEl.textContent = "Selecciona una respuesta para continuar.";
      feedbackEl.className = "feedback is-warn";
      return;
    }

    const picked = activity.answers.find(x => x.id === selectedId);
    const correct = picked.correct;

    if(correct){
      feedbackEl.textContent = "Correcto. " + picked.why;
      feedbackEl.className = "feedback is-ok";

      // Actualiza progreso (demo)
      const stats = getStats();
      stats.studyMinutes += 5;
      stats.modulesDone += 1;
      stats.streakDays = Math.max(stats.streakDays, 1);
      setStats(stats);

    } else {
      feedbackEl.textContent = "Incorrecto. " + picked.why;
      feedbackEl.className = "feedback is-bad";
    }
  });
})();
