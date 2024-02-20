function distancia(string , string2){
    let contador = 0;
    let mayor = 0;
  
    if(string.length >= string2.length){
      mayor = string.length;
    }else{
      mayor = string2.length;
    }
  
    for(let indice = 0; indice<mayor;indice++){
      if(string[indice] != string2[indice]){
        contador++;
      }
    }
    return contador;
  }
  
  // escribe tu función acá
  
  // código de prueba
  
  console.log(distancia("hola", "hola")) // 0
  console.log(distancia("sol", "tol")) // 1
  console.log(distancia("carro", "correr")) // 3