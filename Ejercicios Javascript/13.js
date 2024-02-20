function removerCeros(arreglo){
    for(let indice = arreglo.length - 1; indice >= 0; indice--){
      if(arreglo[indice] === 0){
        arreglo.splice(indice,1);
      }
    }
    return arreglo;
  }
  
  // escribe tu respuesta acá
  
  // código de prueba
  console.log(removerCeros([0, 1, 0, 2, 0, 3])) // [1, 2, 3]
  console.log(removerCeros([9, 3, 6, 4])) // [9, 3, 6, 4]
  console.log(removerCeros([0, 0, 0])) // []