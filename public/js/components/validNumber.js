'use strict'

const validNumber = () =>{
  const divValidNumber = $("<div></div>");
  const phoneNumber = $("<input type='text' placeholder='Ingrese numero celular'></input>");
  const termsCheckbox = $("<input type='checkbox'>Terminos y condiciones</input>");
  divValidNumber.append(phoneNumber);
  divValidNumber.append(termsCheckbox);
  
  return divValidNumber;
}
