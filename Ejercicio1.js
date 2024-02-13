function contrasenaValida(contrasena){
    if(contrasena === "2Fj(jjbFsuj" || contrasena === "eoZiugBf&g9"){
        return true;
    }else{
        return false;
    }
}

// escribe tu respuesta acá

// código de prueba
console.log(contrasenaValida("2Fj(jjbFsuj")) // true
console.log(contrasenaValida("eoZiugBf&g9")) // true
console.log(contrasenaValida("hola")) // false
//console.log(contrasenaValuda("")) // false


function calcularImpuestos(edad , ingresos){
    if(edad >= 18 && ingresos >= 1000){
      return ingresos * 0.4
    }else{
      return 0
    }
  }
  
  // escribe tu respuesta acá
  
  // código de prueba
  console.log(calcularImpuestos(18, 1000)) // 400
  console.log(calcularImpuestos(40, 10000)) // 4000
  console.log(calcularImpuestos(17, 5000)) // 0
  console.log(calcularImpuestos(30, 500)) // 0
  
  
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

 let array = [1,2,3,"perro","gato","yo123"]

let imprimirArreglo  = (...args) =>{
  for(let dato of args){
    console.log(dato)
  }
};

// escribe tu respuesta acá

// código de prueba
console.log(imprimirArreglo(1, "Hola", 2, "Mundo"))
// 1
// Hola
// 2
// Mundo

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

function fizzBuzz(numero){
    if(numero % 3 === 0 && numero % 5 === 0){
      return "fizzbuzz"
    }
    else if(numero % 3 === 0 ){
      return "fizz"
    }else if(numero % 5 === 0 ){
      return "buzz"
    }
    else{
      return numero;
    }
}

// escribe tu respuesta acá

// código de prueba
console.log(fizzBuzz(6)); // "fizz"
console.log(fizzBuzz(20)); // "buzz"
console.log(fizzBuzz(30)); // "fizzbuzz"
console.log(fizzBuzz(8)); // 8

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

function sumarRango(numeroInicio, numeroFinal){
  let contador = 0;
  if(numeroInicio === numeroFinal){
    return 0
  }else{
    for(numeroInicio;numeroInicio<=numeroFinal;numeroInicio++){
      contador += numeroInicio;
    }
    return contador;
  }
}

// escribe tu respuesta acá

// código de prueba
console.log(sumarRango(0, 10)) // 55
console.log(sumarRango(12, 14)) // 39
console.log(sumarRango(5, 5)) // 0

function numeroDeAes(palabra){
  let contadorDeLetraA = 0;
  for(let letra of palabra){
    if(letra === "a"){
      contadorDeLetraA++;
    }
  }
  return contadorDeLetraA;
}

// escribe tu respuesta acá

// código de prueba
console.log(numeroDeAes("abracadabra")) // 5
console.log(numeroDeAes("etinol")) // 0
console.log(numeroDeAes("")) // 0 

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

function multiplicarArreglo (arreglo){
  let multiplicarNumero = 1;

  for(let numero of arreglo){
    multiplicarNumero *= numero;
  }
  return multiplicarNumero;
}

// escribe tu respuesta acá

// código de prueba
console.log(multiplicarArreglo([4, 1, 2, 3])) // 24
console.log(multiplicarArreglo([1, 2, 3, 4, 5, 6, 7, 8])) // 40320
console.log(multiplicarArreglo([])) // 1

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

function sumarArreglo2(arreglo,posicionInicial,posicionFinal){
  let sumarArregloOperacion = 0;
  if(posicionFinal === posicionInicial){
    return 0;
  }else{
    for(posicionInicial;posicionInicial<=posicionFinal;posicionInicial++){
      sumarArregloOperacion += arreglo[posicionInicial];
    }
    return sumarArregloOperacion;
  }
}

// escribe tu respuesta acá

// código de prueba
console.log(sumarArreglo2([1, 2, 3], 1, 2)) // 5
console.log(sumarArreglo2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 6)) // 22
console.log(sumarArreglo2([7, 8, 9], 0, 0)) // 0

function transcribir(palabra){
  let newWord = "";
  for(let indice = 0;indice<=palabra.length-1;indice++){
    if(palabra[indice] === "G"){
      newWord += "C"
    }
    else if(palabra[indice] === "C"){
      newWord += "G"
    }else if(palabra[indice] === "T"){
      newWord += "A"
    }else if(palabra[indice] === "A"){
      newWord += "U"
    }else{
      newWord += palabra[indice];
    }
  }
  return newWord;
}

// escribe tu función acá

// código de prueba
console.log(transcribir("ACGT")) // "UGCA"
console.log(transcribir("ACGTGGTCTTAA")) // "UGCACCAGAAUU"

function capitalizar(palabra) {
  if (palabra.length === 0) {
    return palabra;  
  }

  return palabra[0].toUpperCase() + palabra.slice(1); 
  /*slice sirve paar extraer una subcaneda en este caso desde 1 hasta 
  el final de la palabra*/ 
}

// escribe tu función acá

// código de prueba
console.log(capitalizar("pedro")) // "Pedro"
console.log(capitalizar("hola mundo")) // "Hola mundo"
console.log(capitalizar("")) // ""

function capitalizar2(palabra){
  let hayMayuscula = true;
  let newWord = "";
  
  if (palabra.length === 0) {
    return palabra;  
  }

  for(let indice=0; indice<=palabra.length -1; indice++){
    if(hayMayuscula === true){
      newWord += palabra[indice].toUpperCase();
      hayMayuscula = false;
    }else{
      if(palabra[indice] === " "){
        hayMayuscula = true;
      }
      newWord += palabra[indice];
    }
  }
  return newWord;
}

// escribe tu función acá

// código de prueba
console.log(capitalizar2("hola mundo")) // "Hola Mundo"
console.log(capitalizar2("make it real")) // "Make It Real"
console.log(capitalizar2("")) // ""

function max(arreglo){
  let numMax = 0;
  for(let indice=0;indice<=arreglo.length -1;indice++){
    if(numMax < arreglo[indice]){
      numMax = arreglo[indice];
    }
  }
  return numMax;
}

// escribe tu función acá

// código de prueba
console.log(max([3, 9, 6])) // 9
console.log(max([67, 35, 54, 26])) // 67
console.log(max([5, 9, 2, 4, 5, 7])) // 9

function min(arreglo){
  let numMax = arreglo[0];
  for(let indice=0;indice<=arreglo.length -1;indice++){
    if(numMax > arreglo[indice]){
      numMax = arreglo[indice];
    }
  }
  return numMax;
}

// escribe tu función acá

// código de prueba
console.log(min([3, 9, 6])) // 3
console.log(min([67, 35, 54, 26])) // 26
console.log(min([5, 9, 2, 4, 5, 7])) // 2

function password(contrasena){
  let newContrasena = "";
  for(let caracter of contrasena){
    if(caracter != " "){
      if(caracter === contrasena.toUpperCase()){
        newContrasena += contrasena.toLowerCase()
      }else if(caracter === "a"){
        newContrasena += "4";
      }else if(caracter === "e"){
        newContrasena += "3";
      }else if(caracter === "i"){
        newContrasena += "1";
      }else if(caracter === "o"){
        newContrasena += "0";
      }else{
        newContrasena += caracter;
      }
    }
  }
  return newContrasena;
}

// escribe tu función acá

// código de prueba
console.log(password("hola")) // "h0l4"
console.log(password("esta es una prueba")) // "3st43sun4pru3b4"
console.log(password("")) // ""

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

function posiciones(arreglo){
  let arrayPocisionPares = [];
  if(arreglo.length === 0){
    return arreglo;
  }

  for(let indice = 0;indice<=arreglo.length-1;indice++){
    if(arreglo[indice] %2 === 0){
      arrayPocisionPares.push(indice);
    }
  }
  return arrayPocisionPares;
}

// escribe tu función acá

// código de prueba
console.log(posiciones([1, 2, 3, 4, 5, 6])) // [1, 3, 5]
console.log(posiciones([])) // []

function duplicar(arreglo){
  let newArray = [];
  if(arreglo.length === 0){
    return arreglo;
  }
  for(let numero of arreglo){
    newArray.push(numero*2) 
  }
  return newArray;
}

// escribe tu función acá

// código de prueba
console.log(duplicar([1, 2, 3])) // [2, 4, 6]
console.log(duplicar([])) // []

function empiezanConA(arreglo){
  let newArray = [];
  if(arreglo.length === 0){
    return arreglo;
  }

  for(let palabra of arreglo){
    if(palabra[0] === "a" || palabra[0] === "A"){
      newArray.push(palabra);
    }
  }
  return newArray;
}

// escribe tu función acá

// código de prueba
console.log(empiezanConA(["beta", "alfa", "Arbol", "gama"])) // ["alfa", "Arbol"]
console.log(empiezanConA(["beta", "delta", "gama"])) // []
console.log(empiezanConA([])) // []

function terminanConS(arreglo){
  let newArreglo = [];
  if(arreglo.length === 0){
    return arreglo;
  }

  for(let palabra of arreglo){
    if(palabra[palabra.length -1] === "s" || palabra[palabra.length -1] === "S" ){
      newArreglo.push(palabra);
    }
  }
  return newArreglo;
}

// escribe tu función acá

// código de prueba
console.log(terminanConS(["pruebas", "arroz", "árbol", "tokens"])) // ["pruebas", "tokens"]
console.log(terminanConS(["beta", "delta", "gama"])) // []
console.log(terminanConS([])) // []

function imprimirMatriz (matriz){
  for(let indiceA = 0;indiceA<matriz.length;indiceA++){
    for(let indiceB = 0; indiceB<matriz[indiceA].length;indiceB++){
      console.log(matriz[indiceA][indiceB]);
    }
  }
}

// escribe tu función acá

// código de prueba
console.log(imprimirMatriz([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]))

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9

function numerosAPalabras(arreglo){
  let newArray = [];
  for(let num of arreglo){
    if(num === 0){
      newArray.push("cero")
    }else if(num === 1){
      newArray.push("uno");
    }else if(num === 2){
      newArray.push("dos");
    }else if(num === 3){
      newArray.push("tres");
    }else if(num === 4){
      newArray.push("cuatro");
    }else if(num === 5){
      newArray.push("cinco");
    }else if(num === 6){
      newArray.push("seis");
    }else if(num === 7){
      newArray.push("siete");
    }else if(num === 8){
      newArray.push("ocho");
    }else if(num === 9){
      newArray.push("nueve");
    }else if(num === 10){
      newArray.push("diez");
    }else{
      newArray.push("numero fuera de rango o equivocado")
    }
  }
  return newArray;
} 

// escribe tu función acá

// código de prueba
console.log(numerosAPalabras([0, 1, 2, 3, 4])) // ["cero", "uno", "dos", "tres", "cuatro"]
console.log(numerosAPalabras([5, 6, 7, 8, 9])) // ["cinco", "seis", "siete", "ocho", "nueve"]

function palabrasANumeros(arrayPalabras){
  let newArray = [];
  for(let palabra of arrayPalabras){
    if(palabra === "cero"){
      newArray.push(0)
    }else if(palabra === "uno"){
      newArray.push(1);
    }else if(palabra === "dos"){
      newArray.push(2);
    }else if(palabra === "tres"){
      newArray.push(3);
    }else if(palabra === "cuatro"){
      newArray.push(4);
    }else if(palabra === "cinco"){
      newArray.push(5);
    }else if(palabra === "seis"){
      newArray.push(6);
    }else if(palabra === "siete"){
      newArray.push(7);
    }else if(palabra === "ocho"){
      newArray.push(8);
    }else if(palabra === "nueve"){
      newArray.push(9);
    }else if(palabra === "diez"){
      newArray.push(10);
    }else{
      newArray.push(-1);
    }    
  }
  return newArray;
}

// escribe tu función acá

// código de prueba
console.log(palabrasANumeros(["cero", "uno", "dos", "tres", "what?", "cuatro"])) // [0, 1, 2, 3, -1, 4]
console.log(palabrasANumeros(["cinco", "seis", "siete", "ocho", "nueve"])) // [5, 6, 7, 8, 9]

function numAsteriscos(arreglo){
  let contador = 0;
  for(let simbolo of arreglo){
    if(simbolo === "*"){
      contador++;
    }
  }
  return contador;
} 

// escribe tu función acá

// código de prueba
console.log(numAsteriscos(['', '*', '', '*'])) // 2
console.log(numAsteriscos(['*', '*', '*'])) // 3
console.log(numAsteriscos([])) // 0

function numAsteriscos(arreglo){
  let contador = 0;

  for(let filas = 0;filas<arreglo.length;filas++){
    for(let columnas = 0; columnas<arreglo[filas].length;columnas++){
      if(arreglo[filas][columnas] === "*"){
        contador++;
      }
    }
  }
  return contador;
}

// escribe tu función acá

// código de prueba
console.log(numAsteriscos([
  ['*', '', '*'],
  ['', '*', ''],
  ['*', '', '*']
]))
// 5

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