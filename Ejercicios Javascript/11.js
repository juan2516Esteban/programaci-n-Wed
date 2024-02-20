function sumarArreglo(arreglo){
    let sumaDeNumero = 0;
  
    for(let numero of arreglo){
      sumaDeNumero += numero;
    }
    return sumaDeNumero;
  }
  
  // escribe tu respuesta acá
  
  // código de prueba
  console.log(sumarArreglo([3, 1, 2])) // 6
  console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // 55
  console.log(sumarArreglo([])) // 0
  