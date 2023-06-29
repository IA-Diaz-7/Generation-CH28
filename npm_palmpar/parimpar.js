/* Modulo de exportacion 
module.exports ... es una propiedad especial de NodeJS que se utilia para exportar valores (funciones, variables) o modulos para que puedan ser utlizados en otros archivos o modulos de nodeJS.

*/




module.exports = function (numero){
    (numero %2 === 0) ? console.log(`El numero ${numero} es par`) : console.log(`El numero ${numero} en impar`);
}

