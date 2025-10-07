// Inicializar EmailJS
(function () {
  emailjs.init("oLK0st8tPM0jwlsmw"); // Reemplazar con tu clave pública de EmailJS
})();

// Manejo del formulario de contacto
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const formMessage = document.getElementById("form-message");
    const submitButton = this.querySelector("button");

    // Deshabilitar botón durante el envío
    submitButton.disabled = true;
    submitButton.textContent = "Enviando...";

    // Enviar formulario usando EmailJS
    emailjs
      .sendForm("service_zcxkhcv", "template_i8k1gbf", this)
      .then(
        function () {
          formMessage.textContent =
            "¡Solicitud enviada correctamente! Nos pondremos en contacto pronto.";
          formMessage.className = "success";
          document.getElementById("contact-form").reset();
        },
        function (error) {
          formMessage.textContent =
            "Error al enviar el formulario. Por favor, inténtelo de nuevo.";
          formMessage.className = "error";
          console.log("Error:", error);
        }
      )
      .finally(function () {
        submitButton.disabled = false;
        submitButton.textContent = "Enviar Solicitud";
      });
  });

// Smooth scroll para navegación
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Drawer móvil
const hamburger = document.querySelector(".hamburger");
const drawer = document.getElementById("mobile-drawer");
const closeBtn = document.querySelector(".drawer-close");
const backdrop = document.querySelector(".backdrop");
const drawerLinks = document.querySelectorAll(".drawer a");

function openDrawer() {
  drawer.classList.add("open");
  backdrop.hidden = false;
  hamburger.classList.add("is-active");
  hamburger.setAttribute("aria-expanded", "true");
  drawer.setAttribute("aria-hidden", "false");
  // Foco accesible
  closeBtn.focus();
  document.body.style.overflow = "hidden";
}

function closeDrawer() {
  drawer.classList.remove("open");
  backdrop.hidden = true;
  hamburger.classList.remove("is-active");
  hamburger.setAttribute("aria-expanded", "false");
  drawer.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

hamburger.addEventListener("click", openDrawer);
closeBtn.addEventListener("click", closeDrawer);
backdrop.addEventListener("click", closeDrawer);

// Cerrar al navegar a una sección
drawerLinks.forEach((a) => a.addEventListener("click", closeDrawer));

// Cerrar con tecla ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && drawer.classList.contains("open")) closeDrawer();
});
