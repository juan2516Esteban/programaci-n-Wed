function maxDistance(movements){
    let derecha = 0;
    let izquierda = 0;
    let asterisco = 0;
    for(let caracter of movements){
        if(caracter === '>'){
            derecha++;
        }
        else if(caracter === '<'){
            izquierda++;
        }else{
            asterisco++;
        }
    }

    Math.max(derecha, izquierda);
    let pasos =  Math.max(derecha, izquierda) - 
    Math.min(derecha, izquierda)+asterisco;
    return pasos;
}

// Caso base el resto lo puedes verificar en la aplicación  
const movements = '>>*<'
const result = maxDistance(movements)
console.log(result) // -> 2