const formPomodoro = document.getElementById("form_pomodoro");
const configuracoes = [];

carregarConfigArmazenada();

// Evento que envia o formulario
formPomodoro.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const intervaloNormal = evt.target.elements["duracao-intervalo-normal"].value;
  const intervaloCurto = evt.target.elements["duracao-intervalo-curto"].value;
  const intervaloLongo = evt.target.elements["duracao-intervalo-longo"].value;
  const checkboxNavegador = evt.target.elements["notificacaoDoNaveg"].checked;
  const checkboxDesktop = evt.target.elements["notificacaoDoDesktop"].checked;
  const opcaoIntervalo = evt.target.elements["opcao-intervalo-longo"].value;

  checkbox(checkboxNavegador, checkboxDesktop);
  armazenarNoLocalStorage(
    intervaloNormal,
    intervaloCurto,
    intervaloLongo,
    checkboxNavegador,
    checkboxDesktop,
    opcaoIntervalo
  );
});

// função que verifica qual checkbox foi selecionado para emitir um alerta no desktop ou navegador
function checkbox(check1, check2) {
  const msg = check1 ? "Checkado 1" : check2 ? "Checkado 2" : "Nenhum";
  alert(msg);
}

// função que armazena as configurações do usuario no localStorage
function armazenarNoLocalStorage(
  normal,
  curto,
  longo,
  navegador,
  desktop,
  opcao
) {
  const configuracoesObject = {
    intervaloNormal: normal,
    intervaloCurto: curto,
    intervaloLongo: longo,
    navegador: navegador,
    desktop: desktop,
    opcaoIntervalo: opcao,
  };
  configuracoes.push(configuracoesObject);
  localStorage.setItem("configurações", JSON.stringify(configuracoes));
}

function carregarConfigArmazenada() {
  if (localStorage.getItem("configurações")) {
    const configuracoes = JSON.parse(localStorage.getItem("configurações"));

    // Preenche os campos do formulário com as configurações armazenadas
    const formPomodoro = document.getElementById("form_pomodoro");
    const duracaoIntervaloNormal =
      formPomodoro.elements["duracao-intervalo-normal"];
    const duracaoIntervaloCurto =
      formPomodoro.elements["duracao-intervalo-curto"];
    const duracaoIntervaloLongo =
      formPomodoro.elements["duracao-intervalo-longo"];
    const notificacaoDoNaveg = formPomodoro.elements["notificacaoDoNaveg"];
    const notificacaoDoDesktop = formPomodoro.elements["notificacaoDoDesktop"];
    const opcaoIntervaloLongo = formPomodoro.elements["opcao-intervalo-longo"];

    duracaoIntervaloNormal.value = configuracoes[0].intervaloNormal;
    duracaoIntervaloCurto.value = configuracoes[0].intervaloCurto;
    duracaoIntervaloLongo.value = configuracoes[0].intervaloLongo;
    notificacaoDoNaveg.checked = configuracoes[0].navegador;
    notificacaoDoDesktop.checked = configuracoes[0].desktop;
    opcaoIntervaloLongo.value = configuracoes[0].opcaoIntervalo;
  }
}
