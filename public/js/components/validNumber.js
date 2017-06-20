'use strict'

const validNumber = () =>{
  const divValidNumber = $("<div></div>");
  const formValidNumber = $("<form></form>");
  const phoneNumber = $("<input type='text' placeholder='Ingrese numero celular'></input>");
  const termsCheckbox = $("<input type='checkbox'>Terminos y condiciones</input>");
  const btnContinue = $("<button>Continuar</button>");
  formValidNumber.append(phoneNumber);
  formValidNumber.append(termsCheckbox);
  formValidNumber.append(btnContinue);
  divValidNumber.append(formValidNumber);
  btnContinue.on("click", function(event) {
    event.preventDefault();
    // console.log(phoneNumber.val());
    // console.log(termsCheckbox.is(':checked') );
    postRegisterNumber(phoneNumber.val(),termsCheckbox.is(':checked'));
    
  })

  return divValidNumber;
}
