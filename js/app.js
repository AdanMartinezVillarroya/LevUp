// Año dinámico en footer
(() => {
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  })();
  
  // Demo: suscripción sin envío real
  (() => {
    const form = document.querySelector(".subscribe");
    if (!form) return;
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Gracias. En esta demo la suscripción no se envía.");
    });
  })();
  