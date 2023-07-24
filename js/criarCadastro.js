const btn_enviar = document.querySelector("#btn_enviar");
const btn_cancelar = document.querySelector("#btn_cancelar");
const f_name = document.querySelector("#f_name");
const f_email = document.querySelector("#f_email");
const f_senha = document.querySelector("#f_senha");
const f_repetir_senha = document.querySelector("#f_repetir_senha");
const f_genero = document.querySelectorAll("input[type=radio]");

let valorInputRadioGenero;

f_name.focus();

btn_enviar.addEventListener("click", (evt) => {
  // evt.preventDefault();
  inputRadioGenero();
  // Objeto para o armaenamento dos dados do formulário
  const dados = {
    f_name: f_name.value,
    f_email: f_email.value,
    f_senha: f_senha.value,
    f_repetir_senha: f_repetir_senha.value,
    f_genero: valorInputRadioGenero,
  };

  // Armazenamento dos dados do formulário no localStorage
  localStorage.removeItem("dados");

  const armazenaDadosLocalStorage =
    JSON.parse(localStorage.getItem("dados")) || [];

  if (
    f_name === "" &&
    f_email === "" &&
    f_senha === "" &&
    f_repetir_senha === "" &&
    f_genero === undefined
  ) {
    alertaDeCadastroRealizado();
  } else {
    armazenaDadosLocalStorage.push(dados);
    localStorage.setItem("dados", JSON.stringify(armazenaDadosLocalStorage));
    alertaDeCadastroRealizado();
    window.location.assign("telaUsuario.html");
  }

  // Header para o envio dos dados do formulário em formato JSON
  const header = {
    method: "POST",
    body: JSON.stringify(dados),
  };

  console.log(header);
  alertaDeCadastroRealizado();
  reset();
});

// Evento do btn_cancelar, para cancelar o envio dos dados do formulário
btn_cancelar.addEventListener("click", () => {
  reset();
});

// Função para resetar os campos do formulário
const reset = () => {
  document.reload = () => {
    f_name.value = "";
    f_email.value = "";
    f_senha.value = "";
    f_repetir_senha.value = "";
    f_genero.value = "";
    localStorage.removeItem("dados");
    localStorage.clear();
    window.location.reload();
  };
};
// Função para pegar o valor do input radio
function inputRadioGenero() {
  f_genero.forEach((genero) => {
    if (genero.checked) {
      valorInputRadioGenero = genero.value;
    }
  });
}
// Função para o alerta de cadastro realizado
function alertaDeCadastroRealizado() {
  if (
    f_name.value === "" &&
    f_email.value === "" &&
    f_senha.value === "" &&
    f_repetir_senha.value === "" &&
    f_genero.value === undefined
  ) {
    Swal.fire({
      icon: "error",
      title: "Preencha todos os campos!",
      text: "Por favor, preencha todos os campos para realizar o cadastro!",
      footer: "",
    });
  } else {
    Swal.fire({
      icon: "success",
      title: "Cadastro realizado com sucesso!",
      text: "Seu cadastro foi realizado com sucesso!",
      footer: "",
    });
  }
}
