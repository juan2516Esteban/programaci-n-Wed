function pares(arreglo){
    let arrayPares = [];
    if(arreglo.length === 0){
      return arreglo;
    }
    for(let numero of arreglo){
      if(numero % 2 === 0){
        arrayPares.push(numero)
      }
    }
    return arrayPares;
  }
  
  // escribe tu función acá
  
  // código de prueba
  console.log(pares([1, 2, 3, 4, 5, 6])) // [2, 4, 6]
  console.log(pares([])) // []
  