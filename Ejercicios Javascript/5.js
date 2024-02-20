const likes = (cantidad) =>{

    let numeroComoString = cantidad.toString();
    let arrayDeDigitos = numeroComoString.split('');
    if(cantidad<1000){
      return numeroComoString;
    }
    else if(cantidad<1000000){
      if(arrayDeDigitos.length === 4){
        return arrayDeDigitos[0] + "k"
      }
      else if(arrayDeDigitos.length === 5){
        return arrayDeDigitos[0] + arrayDeDigitos[1] + "k"
      }
      else{
        return arrayDeDigitos[0] + arrayDeDigitos[1] + arrayDeDigitos[2] + "k"
      }
    }else if(cantidad < 1000000000){
      if(arrayDeDigitos.length === 7){
        return arrayDeDigitos[0] + "M"
      }else if(arrayDeDigitos.length === 8){
        return arrayDeDigitos[0] + arrayDeDigitos[1] + "M"
      }else{
        return arrayDeDigitos[0] + arrayDeDigitos[1] + arrayDeDigitos[2] + "M"
      }
    }
  }
  
  // escribe tu respuesta acá
  
  // código de prueba
  console.log(likes(983)) // "983"
  console.log(likes(1900)) // "1K"
  console.log(likes(54000)) // "54K"
  console.log(likes(120800)) // "120K"
  console.log(likes(25222444)) // "25M"