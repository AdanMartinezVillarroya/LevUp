// Lógica General

document.addEventListener("DOMContentLoaded", () => {
  
    // 1. AÑO DINÁMICO 
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  
    // 2. ENLACES MUERTOS 
    const deadLinks = document.querySelectorAll('a[href="#"], a[href=""]');
    deadLinks.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
      });
    });
  
    // 3. SIMULACIÓN DE SUSCRIPCIÓN 
    const subForm = document.querySelector(".subscribe");
    if (subForm) {
      subForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const input = subForm.querySelector("input");
        if(input.value.trim() !== "") {
          alert(`¡Gracias! Hemos enviado una confirmación a ${input.value} (Simulación).`);
          input.value = ""; // Limpiar campo
        }
      });
    }
  
    // 4. LÓGICA DE LOGIN 
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
      loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const emailField = loginForm.querySelector('input[type="email"]');
        const passField = loginForm.querySelector('input[type="password"]');
  
        if (emailField.value && passField.value) {
          // Usuario en localStorage para simular sesión
          localStorage.setItem("levup_user", emailField.value);
          
          alert("Has iniciado sesión correctamente.");
          // Redirigir al dashboard
          window.location.href = "habilidades.html";
        } else {
          alert("Por favor, completa todos los campos.");
        }
      });
    }
  
    // 5. LÓGICA DE REGISTRO 
    const registerForm = document.getElementById("registerForm");
    if (registerForm) {
      registerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        // Simulación de validación simple
        const inputs = registerForm.querySelectorAll("input");
        let isValid = true;
        // Revisar que campos de texto no estén vacíos
        inputs.forEach(i => { 
            if(i.type !== "checkbox" && i.type !== "radio" && i.value.trim() === "") {
                isValid = false; 
            }
        });
  
        if (isValid) {
          localStorage.setItem("levup_user", "nuevo_usuario@demo.com");
          alert("Cuenta creada con éxito. ¡Bienvenido a LevUp!");
          window.location.href = "habilidades.html";
        } else {
          alert("Por favor, rellena los campos obligatorios para registrarte.");
        }
      });
    }
  
  });

// REGISTRO PWA (Service Worker)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./service-worker.js')
        .then(reg => console.log('SW registrado: ', reg.scope))
        .catch(err => console.log('SW falló: ', err));
    });
  }