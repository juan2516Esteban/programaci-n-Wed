function contarRango(inicio,fin){
    let veces = 0;
    for(inicio+1;inicio+1<fin;inicio++){
      veces++;
    }
    return veces; 
  }
  
  // escribe tu respuesta acá
  
  // código de prueba
  console.log(contarRango(1, 9)) // 7
  console.log(contarRango(1332, 8743)) // 7410
  console.log(contarRango(5, 6)) // 0