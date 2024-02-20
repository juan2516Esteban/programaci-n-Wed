function numeroDeCaracteres(palabra,caracter){
    let contadorDeCracter = 0;
  
    for(let letra of palabra){
      if(letra === caracter){
        contadorDeCracter++;
      }
    }
  
    return contadorDeCracter;
  }
  
  // escribe tu respuesta acá
  
  // código de prueba
  console.log(numeroDeCaracteres("Hola Mundo", "o")) // 2
  console.log(numeroDeCaracteres("MMMMM", "m")) // 0
  console.log(numeroDeCaracteres("eeee", "e")) // 4
  