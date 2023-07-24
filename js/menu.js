let show = true;
const menuSection = document.querySelector(".menu-section");
const menuToggle = document.querySelector(".menu-toggle");

// Evento para o menu hamburguer
menuToggle.addEventListener("click", () => {
  // condição/logica para o menu hamburguer
  document.body.style.overflow = show ? "hidden" : "initial";
  menuSection.classList.toggle("on", show);
  show = !show;
});
