
function verificarPar(numero){
if(numero % 2 === 0){
    return "El numero " + numero + " es par";
} else {
    return "El numero " + numero + " es impar";
}
}

console.log(verificarPar(3));

//Flecha

const verificarParFlecha = (NumeroFlecha)=>{
    let mensaje;
    (NumeroFlecha % 2 === 0 )? mensaje ="El numero " + NumeroFlecha + "es par ": mensaje ="el numero "+ NumeroFlecha + "Es inpar ";
    return mensaje;
}
console.log(verificarParFlecha(12))