const formPomodoro = document.getElementById("form_pomodoro");
const configuracoes = JSON.parse(localStorage.getItem("configurações")) || [];
const existe = configuracoes;
const btn_cancelar = document.querySelector("#cancelar");
console.log(existe);

carregarConfigArmazenada();
// Evento formPomodoro para salvar as configurações do pomodoro
formPomodoro.addEventListener("submit", (evt) => {
  evt.preventDefault();
  // Pega os valores dos inputs do formulário e armazena em variáveis para serem usadas na função armazenarNoLocalStorage
  const intervaloNormal = evt.target.elements["duracao-intervalo-normal"].value;
  const intervaloCurto = evt.target.elements["duracao-intervalo-curto"].value;
  const intervaloLongo = evt.target.elements["duracao-intervalo-longo"].value;
  const checkboxNavegador = evt.target.elements["notificacaoDoNaveg"].checked;
  const checkboxDesktop = evt.target.elements["notificacaoDoDesktop"].checked;
  const opcaoIntervalo = evt.target.elements["opcao-intervalo"].value;
  // Chamada da função checkbox para verificar se o checkbox está marcado ou não
  checkbox(checkboxNavegador, checkboxDesktop);
  // Chamada da função armazenarNoLocalStorage para armazenar os dados do formulário no localStorage
  armazenarNoLocalStorage(
    intervaloNormal,
    intervaloCurto,
    intervaloLongo,
    checkboxNavegador,
    checkboxDesktop,
    opcaoIntervalo
  );
  notificacaoSalvoOuCancelado();
});
btn_cancelar.addEventListener("click", () => {
  btnCancelar();
});
// Função para exibir a mensagem de formulário salvo ou cancelado

function notificacaoSalvoOuCancelado() {
  Swal.fire({
    title: "Deseja salvar as configurações?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Salvar",
    denyButtonText: `Cancelar`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire("Salvo!", "", "success");
    } else if (result.isDenied) {
      Swal.fire("Cancelado!", "", "info");
      btnCancelar();
    }
  });
}

// Função para verificar se o checkbox está marcado ou não
function checkbox(check1, check2) {
  const msg = check1 ? "Checkado 1" : check2 ? "Checkado 2" : "Nenhum";
}

// Função para armazenar os dados do formulário no localStorage

function armazenarNoLocalStorage(
  normal,
  curto,
  longo,
  navegador,
  desktop,
  opcao
) {
  // Objeto para o armazenamento dos dados do formulário no localStorage
  const configuracoesObject = {
    intervaloNormal: normal,
    intervaloCurto: curto,
    intervaloLongo: longo,
    navegador: navegador,
    desktop: desktop,
    opcaoIntervalo: opcao,
  };
  // Armazena os dados do formulário no localStorage
  configuracoes[0] = configuracoesObject;
  localStorage.setItem("configurações", JSON.stringify(configuracoes));
}

// função para carregar as configurações armazenadas no localStorage

function carregarConfigArmazenada() {
  if (localStorage.getItem("configurações")) {
    const configuracoes = JSON.parse(localStorage.getItem("configurações"));

    // Pega os elementos do formulário e armazena em variáveis para serem usadas na função armazenarNoLocalStorage
    const formPomodoro = document.getElementById("form_pomodoro");
    const duracaoIntervaloNormal =
      formPomodoro.elements["duracao-intervalo-normal"];
    const duracaoIntervaloCurto =
      formPomodoro.elements["duracao-intervalo-curto"];
    const duracaoIntervaloLongo =
      formPomodoro.elements["duracao-intervalo-longo"];
    const notificacaoDoNaveg = formPomodoro.elements["notificacaoDoNaveg"];
    const notificacaoDoDesktop = formPomodoro.elements["notificacaoDoDesktop"];
    const opcaoIntervalo = formPomodoro.elements["opcao-intervalo"];
    // Pega os valores dos inputs do formulário e armazena em variáveis para serem usadas na função armazenarNoLocalStorage
    duracaoIntervaloNormal.value = configuracoes[0].intervaloNormal;
    duracaoIntervaloCurto.value = configuracoes[0].intervaloCurto;
    duracaoIntervaloLongo.value = configuracoes[0].intervaloLongo;
    notificacaoDoNaveg.checked = configuracoes[0].navegador;
    notificacaoDoDesktop.checked = configuracoes[0].desktop;
    opcaoIntervalo.value = configuracoes[0].opcaoIntervalo;
  }
}

// Função para limpar o localStorage e recarregar a página
function btnCancelar() {
  localStorage.removeItem("configurações");
  localStorage.clear();
  formPomodoro.reset();
  // window.location.reload();
}
