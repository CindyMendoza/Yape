'use strict'

const validNumber = (update) =>{
  // let   variableValidation = 0;
  const divValidNumber = $("<div></div>");
  const formValidNumber = $("<form></form>");
  const phoneNumber = $("<input type='text' placeholder='Ingrese numero celular'></input>");
  const termsCheckbox = $("<input type='checkbox'>Terminos y condiciones</input>");
  const btnContinue = $("<button type='submit'>Continuar</button>");
  const spanError = $("<span></span>");
  formValidNumber.append(phoneNumber);
  formValidNumber.append(termsCheckbox);
  formValidNumber.append(btnContinue);
  formValidNumber.append(spanError);
  divValidNumber.append(formValidNumber);
  // btnContinue.prop("disabled",true);
  btnContinue.on("click", function(event) {
    event.preventDefault();
    postRegisterNumber(phoneNumber.val(),termsCheckbox.is(':checked'));
    // postResendCode(phoneNumber.val());
    // postCreateUser();
    // postRegisterCard();
    // const dataRN = postRegisterNumber(phoneNumber.val(),termsCheckbox.is(':checked'));
    state.selectedYape = 2;
    update();
  })
  // phoneNumber.on("keyup", function(event) {
  //   // event.preventDefault();
  //   if(phoneNumber.val() !== "" && /[0-9]{9}/.test(phoneNumber.val())){
  //     variableValidation = 1;
  //     // btnContinue.prop("disabled",false);
  //     console.log("lleno");
  //     // postRegisterNumber(phoneNumber.val(),termsCheckbox.is(':checked'));
  //   }else{
  //     console.log("vacio");
  //     spanError.text("Ingrese numero celular valido");
  //   }
  //   // console.log(phoneNumber.val());
  //   // console.log(termsCheckbox.is(':checked') );
  //   // postRegisterNumber(phoneNumber.val(),termsCheckbox.is(':checked'));
  //
  // });
  // // if(termsCheckbox.is(':checked') && variableValidation == 1){
  // //   btnContinue.prop("disabled",false);
  // // } else {
  // //   spanError.text("Todos los campos son obligatorios");
  // // }

  return divValidNumber;
}
