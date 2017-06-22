'use strict'
const createYourUser = (update) => {
  const divUser = $("<div></div>");
  const formUser = $("<form></form>");
  const name = $("<input placeholder='Nombre'></input>");
  const mail = $("<input placeholder='Email'></input>");
  const pass = $("<input placeholder='Contraseña'></input>");
  const btnCreateU = $("<button type='submit'>Crear Usuario</button>");

  formUser.append(name);
  formUser.append(mail);
  formUser.append(pass);
  formUser.append(btnCreateU);
  divUser.append(formUser);

  btnCreateU.on("click", function(event) {
    state.selectedYape = 4;
    update();
  })
  return divUser;

}
