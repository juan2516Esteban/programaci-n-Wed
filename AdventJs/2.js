
function manufacture(gifts,materials){
    let validador = true;
    let newList = [];
    for(let indice = 0; indice<gifts.length;indice++){

        for(let caracter of gifts[indice]){
           
            if (validador == true){
                if(materials.includes(caracter)){
                    validador = true
                }else{
                    validador = false;
                }
            }
        }

        if(validador == true){
            newList.push(gifts[indice]);
            validador = true;
         }
    }
     return newList;
}

// Caso Base el resto lo puedes verificar en la aplicación 
const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

console.log(manufacture(gifts, materials)) // ["tren", "oso"]
// 'tren' SÍ porque sus letras están en 'tronesa'
// 'oso' SÍ porque sus letras están en 'tronesa'
// 'pelota' NO porque sus letras NO están en 'tronesa'
