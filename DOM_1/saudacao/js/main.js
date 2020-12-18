(function () {
  const nomeUsuario = null; //"Matheus Antonio da Silva"
  const elemento = document.querySelector(".top-bar p");

  if (nomeUsuario) {
    elemento.innerHTML += "<b>" + nomeUsuario + "</b>";
    //document.querySelector(".top-bar p").textContent = "Bem-Vindo(a) " + nomeUsuario
  } else{
    elemento.parentElement.remove();
  }

})();
