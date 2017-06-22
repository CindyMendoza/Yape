'use strict'
const enterYourCode = (update)=>{
  const timer = setInterval(function(){
    postResendCode(state.reqRegisterNumber.data.phone);
    state.selectedYape = 2;
    update();}, 21000);
  let x=0;
  const divCode = $("<div></div>");
  const formCode = $("<form></form>");
  const h4 = $("<h4><strong>Ahora ingresa tu codigo<strong></h4>");
  const txt = $("<p>Enviamos un SMS con un codigo de validacion al numero:"+state.reqRegisterNumber.data.phone+"</p>");
  const inputCode = $("<input></input>");
  const message = $("<span>Tienes 21 segundos para ingresar tu clave, pasado ese tiempo volveremos a enviarte una nueva.</span>");
  formCode.append(h4);
  formCode.append(txt);
  formCode.append(inputCode);
  formCode.append(message);
  divCode.append(formCode);

  inputCode.on("keyup", function(event) {
    event.preventDefault();
    if(inputCode.val().length == 6 && /[0-9]/.test(inputCode.val())){
      // if(inputCode.val() == state.reqRegisterNumber.data.code){
      //   x=1;
      //   clearInterval(timer);
      //   message.text("");
      //   state.selectedYape = 3;
      //   update();
      // }
      console.log("primer filtro");
    }else{
      message.text("Ingrese datos correctos");
      // state.selectedYape = 2;
      // update();

    }


  });

  return divCode;

}
