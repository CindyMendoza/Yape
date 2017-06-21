'use strict'

const validNumber = (update) =>{
  let v;
  const divValidNumber = $("<div></div>");
  const formValidNumber = $("<form></form>");
  const phoneNumber = $("<input type='text' placeholder='Ingrese numero celular'></input>");
  const termsCheckbox = $("<input type='checkbox'>Terminos y condiciones</input>");
  const btnContinue = $("<button type='submit'>Continuar</button>");
  const spanError = $("<span></span>");
  btnContinue.prop("disabled",true);
  formValidNumber.append(phoneNumber);
  formValidNumber.append(termsCheckbox);
  formValidNumber.append(btnContinue);
  formValidNumber.append(spanError);
  divValidNumber.append(formValidNumber);
  $("form [type='text'], form [type='checkbox']").on("keyup change", "input[type='checkbox']", function(event) {
    console.log("ok");
  });
  // phoneNumber.on("keyup", function(event) {
  //   if(phoneNumber.val().length == 9 && /[0-9]/.test(phoneNumber.val())){
  //     spanError.text("");
  //     return v = 0;
  //   }else{
  //     spanError.text("Ingrese número de celular valido");
  //     btnContinue.prop("disabled",true);
  //   }
  //
  //   termsCheckbox.on("change", function(event) {
  //     if (termsCheckbox.is(":checked") && v === 0 && spanError.text() === "") {
  //       btnContinue.prop("disabled",false);
  //       console.log(spanError.text());
  //       console.log("yei");
  //     }else {
  //       btnContinue.prop("disabled",true);
  //       console.log(spanError.text());
  //       console.log("bu");
  //     }
  //   });
  // });


  // btnContinue.on("click", function(event) {
  //   event.preventDefault();
  //   postRegisterNumber(phoneNumber.val(),termsCheckbox.is(':checked'));
  //   state.selectedYape = 2;
  //   update();
  // })

  return divValidNumber;
}
