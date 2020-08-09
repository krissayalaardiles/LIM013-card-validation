import validator from './validator.js';

let num = document.getElementById('getData');

num.addEventListener("click", function(){
  let numero = document.getElementById('Numero').value;
  const resultado = validator.isValid(numero);
  let numTarjeta = validator.maskify(numero);
  

  let traerdiv = document.getElementById("mostrar");
    if (resultado === true) {
      const anuncio = "¡Gracias por su compra!";
      traerdiv.innerHTML = anuncio;
    }else{
      traerdiv.innerHTML = "Tarjeta Invalida";
  }

  let divmichi = document.getElementById("enmascarado");
    divmichi.innerHTML = numTarjeta;


});
