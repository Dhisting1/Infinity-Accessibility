const header = document.querySelector("#header");
const menu = document.querySelector("#menu");
const btn_home = document.querySelector("#btn_home");
const btn_criarCadastro = document.querySelector("#btn_criarCadastro");
const btn_configDalto = document.querySelector("#btn_configDalto");
const btn_configFoco = document.querySelector("#btn_configFoco");
const btn_sobre = document.querySelector("#btn_sobre");
const main = document.querySelector("#main");

btn_home.addEventListener("click", (evt) => {
  abrirPaginas(evt.target, "./html/home.html");
});

btn_configDalto.addEventListener("click", (evt) => {
  abrirPaginas(evt.target, "./html/configDalto.html");
});

btn_configFoco.addEventListener("click", (evt) => {
  abrirPaginas(evt.target, "./html/configFoco.html");
});

btn_sobre.addEventListener("click", (evt) => {
  abrirPaginas(evt.target, "./html/sobre.html");
});

btn_criarCadastro.addEventListener("click", (evt) => {
  abrirPaginas(evt.target, "./html/criarCadastro.html");
});
/*Função para adicionar e remover as classes*/
const abrirPaginas = (el, url) => {
  const abas = [...document.querySelectorAll(".aba")];

  abas.forEach((e) => {
    e.classList.remove("aba-selecionada");
  });

  el.classList.add("aba-selecionada");
  window.open(url, "if_principal");
};
