'use strict'
const enterYourPasswordCard = (update)=>{
  const divPassCard = $("<div></div>");
  const formPassCard = $("<form></form>");
  const txtPassCard = $("<h4><strong>Ingresa la clave de tu tajeta</strong></h4><p>Tarjeta *******x </p>");
  const inputPassCard = $("<input></input>");
  const btnPassCard = $("<button>Registrar</button>");
  formPassCard.append(txtPassCard);
  formPassCard.append(inputPassCard);
  formPassCard.append(btnPassCard);
  divPassCard.append(formPassCard);

  btnPassCard.on("click", function(event) {
    state.selectedYape = 7;
    update();

  });
  return divPassCard;
}
