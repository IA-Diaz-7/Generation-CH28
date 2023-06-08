//Seleccion 1 para consultar saldo, 2 para donar 10 pesitos o 3 para covertir dolares a pesos


function cajeroAutomatico(seleccion){
    if(seleccion === 1){
        return "Su saldo es de $xxxx";
    }else if (seleccion === 2){
        return "Gracias por su donación de $10";
    }else if (Selección === 3){
        let pesos;
        pesos = convertirDivisas();
        return "El quivalente es $ " + pesos ;
    }else{
        return"Seleccion invalida"
    }
}

function convertirDivisas(dolares){
    return dolares*18;
}
console.log(cajeroAutomatico());