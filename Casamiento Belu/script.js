// 🔹 Inicializar EmailJS
(function () {
  emailjs.init("v4aHpY4EO7USMsxkX");
})();

document.addEventListener("DOMContentLoaded", function () {

  // ⏱️ CONTADOR
  const targetDate = new Date("2026-04-11T00:00:00").getTime();

  setInterval(() => {
    const now = new Date().getTime();
    const diff = targetDate - now;

    const days = document.getElementById("days");
    if (!days) return;

    days.innerText = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById("hours").innerText =
      Math.floor((diff / (1000 * 60 * 60)) % 24);
    document.getElementById("minutes").innerText =
      Math.floor((diff / (1000 * 60)) % 60);
    document.getElementById("seconds").innerText =
      Math.floor((diff / 1000) % 60);
  }, 1000);

  // 💌 RSVP
  const rsvpForm = document.getElementById("rsvpForm");
  if (rsvpForm) {
    rsvpForm.addEventListener("submit", function (e) {
      e.preventDefault();

      emailjs.sendForm(
        "service_ev4sklj",
        "template_fmxsl8c",
        this
      ).then(() => {
        alert("¡Gracias por confirmar tu asistencia!");
        rsvpForm.reset();
      }).catch(error => {
        console.error("RSVP ERROR:", error);
      });
    });
  }

  // 🎵 MÚSICA
  const musicForm = document.getElementById("musicForm");
  if (musicForm) {
    musicForm.addEventListener("submit", function (e) {
      e.preventDefault();

      emailjs.sendForm(
        "service_ev4sklj",
        "template_fmxsl8c",
        this
      ).then(() => {
        alert("¡Gracias por la sugerencia!");
        musicForm.reset();
        closeModal("musicModal");
      }).catch(error => {
        console.error("MUSIC ERROR:", error);
      });
    });
  }

  // 🥗 ALIMENTACIÓN
  const foodForm = document.getElementById("foodForm");
  if (foodForm) {
    foodForm.addEventListener("submit", function (e) {
      e.preventDefault();

      emailjs.sendForm(
        "service_ev4sklj",
        "template_fmxsl8c",
        this
      ).then(() => {
        alert("¡Gracias por informarnos!");
        foodForm.reset();
        closeModal("foodModal");
      }).catch(error => {
        console.error("FOOD ERROR:", error);
      });
    });
  }

});

// 🪟 MODALES
function openModal(id) {
  document.getElementById(id).style.display = "flex";
}
function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

