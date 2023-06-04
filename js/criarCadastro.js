const btn_gravar = document.querySelector("#btn_gravar");
const btn_cancelar = document.querySelector("#btn_cancelar");

const f_name = document.querySelector("#f_name");
const f_email = document.querySelector("#f_email");
const f_senha = document.querySelector("#f_senha");
const f_repetir_senha = document.querySelector("#f_repetir_senha");

// f_name.focus();

btn_gravar.addEventListener("click", (evt) => {
  const dados = {
    f_name: f_name.value,
    f_email: f_email.value,
    f_senha: f_senha.value,
    f_repetir_senha: f_repetir_senha.value,
  };

  const header = {
    method: "POST",
    body: JSON.stringify(dados),
  };

  const endpoint = "http://localhost:1880/addUsuario";

  fetch(endpoint, header).then((res) => {
    if (res.status == 200) {
      reset();
    } else {
      alert("Erro ao gravar novo contato");
    }
  });
});

btn_cancelar.addEventListener("click", (evt) => {
  reset();
});

const reset = () => {
  f_name.value = "";
  f_email.value = "";
  f_senha.value = "";
  f_repetir_senha.value = "";
  f_name.focus();
};
