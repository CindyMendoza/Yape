'use strict'

const validNumber = (update) =>{
  let v = 0;
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
  phoneNumber.on("keyup",function (event){
    if(phoneNumber.val().length == 9 && /[0-9]/.test(phoneNumber.val())){
      spanError.text("");
      v = 1;
    }else{
      spanError.text("Ingrese número de celular valido");
      btnContinue.prop("disabled",true);
    }
  });

  termsCheckbox.on("change", function (event){

    if (termsCheckbox.prop("checked") === true && spanError.text() == "" && v == 1) {
      btnContinue.prop("disabled",false);
    }else {
      btnContinue.prop("disabled",true);
    }
  });

  btnContinue.on("click", function(event) {
    event.preventDefault();
    postRegisterNumber(phoneNumber.val(),termsCheckbox.prop("checked"));

    // console.log(getRegisterNumber());
    // dupli.filter(function(e){
    //   if (e !== pho) {
    //
    //   }
    //   return console.log(e !== phoneNumber.val());;
    // });
    // if(phoneNumber.val() !== state.resRegisterNumber.data.phone){
    //   console.log("pase");
    // }else {
    //   console.log("repite");
    // }
    // postRegisterNumber(phoneNumber.val(),termsCheckbox.prop("checked"));
    // if(state.resRegisterNumber){}
    // state.selectedYape = 2;
    // update();
  })

  return divValidNumber;
}
