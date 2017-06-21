'use strict'
const registerYourDebitCard = (update) => {
  $(document.body).removeClass("bg-gold");
  const divRegister = $("<div></div>");
  const formRegister = $("<form></form>");
  const txtRegister = $("<h4><strong>Registra tu tarjeta de debito BCP</strong></h4><p>Por ahora solo aceptamos cuentas de ahorro y/o corrientes</p>");
  const inputCard = $("<input></input>");
  const inputFV = $("<input></input>");
  const btnRegister = $("<button>Crear cuenta</button>");
  formRegister.append(txtRegister);
  formRegister.append(inputCard);
  formRegister.append(inputFV);
  formRegister.append(btnRegister);
  divRegister.append(formRegister);
  btnRegister.on("click", function(event) {
    state.selectedYape = 6;
    update();
  });

  return divRegister;
}
