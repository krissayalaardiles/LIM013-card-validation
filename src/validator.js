
const validator = {
  isValid:
  function(numeroDeTarjeta){

         //arreglo eslavones
         let arregloTarjeta = numeroDeTarjeta.split('');

         //reverso de tarjeta
         arregloTarjeta = arregloTarjeta.reverse();


    let suma = 0;
    for (let i = 0; i < arregloTarjeta.length; i++) {

      let parposition = parseInt(arregloTarjeta[i]);
      if ((i % 2) != 0) {
       parposition *= 2;
       if (parposition > 9) {
           parposition -= 9;
           }
          }
       suma += parposition;
     }

     if(suma!==0){
        if ((suma %10)==0){
           return true;
        }else{
          return false;
        }
    
      }
 },
 maskify: function(numeroDeTarjeta){
    let michi = numeroDeTarjeta.replace(/.(?=.{4,}$)/g, '#');
return michi;
 }
}

export default validator;
