// Temarios (lista y selección)

function save(key, value){ localStorage.setItem(key, JSON.stringify(value)); }
function load(key, fallback){
  const raw = localStorage.getItem(key);
  if(!raw) return fallback;
  try { return JSON.parse(raw); } catch { return fallback; }
}

(() => {
  const domainKey = load("levup_selected_domain", "programacion");
  const domain = window.LEVUP_DATA.domains[domainKey];

  const list = document.getElementById("temasList");
  const info = document.getElementById("temaInfo");
  const btn  = document.getElementById("btnComenzarTema");

  list.innerHTML = "";

  let selectedTema = domain.temas[0];
  info.textContent = selectedTema.desc;
  save("levup_selected_tema", selectedTema);

  domain.temas.forEach(t => {
    const item = document.createElement("button");
    item.type = "button";
    item.className = "tema-item";
    item.textContent = t.title;

    item.addEventListener("click", () => {
      selectedTema = t;
      info.textContent = t.desc;
      save("levup_selected_tema", selectedTema);
      document.querySelectorAll(".tema-item").forEach(x => x.classList.remove("is-active"));
      item.classList.add("is-active");
    });

    list.appendChild(item);
  });

  // Estado inicial
  list.querySelector(".tema-item")?.classList.add("is-active");

  // Comenzar actividad
  btn.addEventListener("click", (e) => {
    // enlace normal a actividad.html
  });
})();
