function bmi(peso, altura){
    const BMI = peso / altura**2;
    let palabra;
    if(BMI < 18.5){
        palabra = "Bajo de peso";
        return palabra;
    }else if(BMI >= 18.5 && BMI<=24.9){
        palabra = "Normal";
        return palabra;
    }
    else if(BMI >=25 && BMI <= 29.9){
        palabra = "Sobrepeso";
        return palabra;
  }else if(BMI >=30){
      palabra = "Obeso";
      return palabra;
  }
}
  
// escribe la función bmi acá

// código de prueba
console.log(bmi(65, 1.8)) // "Normal"
console.log(bmi(72, 1.6)) // "Sobrepeso"
console.log(bmi(52, 1.75)) //  "Bajo de peso"
console.log(bmi(135, 1.7)) // "Obeso"
