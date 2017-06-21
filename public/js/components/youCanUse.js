'use strict'
const youCanUse = (update)=>{
  const divCheck = $("<div></div>");
  const txtCheck = $("<p>Bien!</p><p>Ahora puedes usar Yape</p>");
  // document.body.style.backgroundColor="rgb(251,212,59)";
  $(document.body).addClass("bg-gold");
  divCheck.append(txtCheck);
  setTimeout(function(){ state.selectedYape = 5; update(); }, 3000);

  return divCheck;
}
