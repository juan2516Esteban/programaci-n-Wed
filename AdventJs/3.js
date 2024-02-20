function findNaughtyStep(original, modified) {
    let CaracterFaltante = "";
    let letraFaltante = false;

    let mayor = Math.max(original.length,modified.length)

    for(let indice = 0; indice<mayor; indice++){

        if(original.length > modified.length){
            if(letraFaltante == false){
                if(original[indice] != modified[indice]){
                    CaracterFaltante = original[indice]
                    letraFaltante = true;
                }
            }
        }else{
            if(letraFaltante == false){
                if(original[indice] != modified[indice]){
                    CaracterFaltante = modified[indice]
                    letraFaltante = true;
                }
            }
        }
    }
    return CaracterFaltante;
}

// Caso base el resto lo puedes verificar en la aplicación 
const original = 'abcd'
const modified = 'abcde'
console.log(findNaughtyStep(original, modified)) // e