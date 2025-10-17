// script.js
document.addEventListener("DOMContentLoaded", function () {
  // Mobile nav toggle
  const navToggle = document.querySelector(".nav-toggle");
  const mainNav = document.querySelector(".main-nav");
  navToggle && navToggle.addEventListener("click", () => {
    if (mainNav.style.display === "flex") {
      mainNav.style.display = "";
    } else {
      mainNav.style.display = "flex";
      mainNav.style.flexDirection = "column";
      mainNav.style.gap = "10px";
    }
  });

  // Form handling (client-side only)
  const form = document.getElementById("contactForm");
  const formMsg = document.getElementById("formMsg");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    formMsg.textContent = ""; // limpiar

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    // validación básica
    if (!name || !email || !message) {
      formMsg.style.color = "crimson";
      formMsg.textContent = "Por favor completa los campos requeridos.";
      return;
    }

    if (!validateEmail(email)) {
      formMsg.style.color = "crimson";
      formMsg.textContent = "Ingresa un correo válido.";
      return;
    }

    // Simular envío y mostrar éxito (sin backend)
    form.querySelector("button[type='submit']").disabled = true;
    form.querySelector("button[type='submit']").textContent = "Enviando...";

    // Simulación temporal (animación)
    setTimeout(() => {
      formMsg.style.color = "green";
      formMsg.textContent = "Formulario enviado con éxito. ¡Gracias! Nos pondremos en contacto pronto.";
      form.reset();
      form.querySelector("button[type='submit']").disabled = false;
      form.querySelector("button[type='submit']").textContent = "Enviar cotización";
    }, 900);
  });

  // small helper
  function validateEmail(email) {
    // validación razonable (no perfecta)
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // actualizar año en footer
  const yearSpan = document.getElementById("year");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
});
