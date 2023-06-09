//Sesión de funciones

/* 

Hoisting:

Es fundamental en el entendimiento de la forma en que se ejecuta nuestro código de JS, esto aplica para variables como para funciones.

Como tal, la traducción de Hoisting es elevación, a partir de aquí, su entendimiento es mucho mas intuitivo, lo que hace a grandes rasgos es 'elevar' las funciones y variables declaradas dentro del código.

Yo puedo invocar una función antes de siquiera declararla.

Scope : 

El concepto scope hace referencia al alcance que tiene
una variable dentro de un código JS.

var, let y const.

var : global - quiere decir que se puede utilizar o
trabajar con esta variable dentro de cualquier
parte del código

let : porque además de funcionar de manera global
en caso de ser requerida, también puede solo ser
utilizada de manera local.

const : se refiere, por su nombre tan intuitivo,
a la palabra constante, esto quiere decir que su
valor no puede ser reasignado.

El uso de la palabra reservada 'var' no es tan recomendado
por el comportamiento y la poca adaptabilidad de una
variable.

Entonces, se implementan let y const como una 
alternativa mucho más eficiente para determinar el 
Scope o alcance que tiene una variable.


*/

//Funciones, invocación y declaración
// Declaración de una función

/*

palabra reservada - function

nombre de la funcion - nombreFuncion
establecer parametros -recibe de 0 a n parametros y se encasillan
dentro un paréntesis ()

establecer el bloque de código sobre el que vamos a trabajar
lo hacemos mediante llaves {
codigo a ejecutar
}

JS, cuando es ejecutado por el motor JS del navegador primeroo lee e interpreta las variables y las funciones declaradas


*/

// Ejemplo de función pero no retorna ningún valor
// No recibe ningún parámetro
function nuevaFuncion(){
    console.log("Buenos días CH28");
}

nuevaFuncion();

// Ejemplo de función que si retorna un valor
// Tamién recibe un parámetro
function holaMundo(nombre){
    return "Hola " + nombre; // Si retorna un valor
}

//holaMundo("Fernando");
//console.log(holaMundo("Fernando"));


/* 

Elaborar una funci´´on que calcule la velocidad de un objeto

- velocidad= distancia / tiempo

- function 
- calcularVelocidad
(distancia, tiempo)

- elaborar el bloque de código {}

*/

function calcularVelocidad(distancia = 30, tiempo = 5){ //inicio
    //let velocidad = distancia / tiempo;
    //return "La velocidad calculada es:" + velocidad + " m/s";

    return "La velocidad calculada es: " + distancia / tiempo + " m/s";

} //cierre


console.log(calcularVelocidad());


//Funciones dentro de JS
/*

Funciones flecha | Fat arrow | Funciones lamda

Funciones anonimas
Funciones callback - Que reciben otras funciones como parametros

Promesas

Funciones async - await


*/


/* 
===========Funciones flecha

Son una manera más compacta y sencilla de escribir una función normal

No son lo mismo que una función general, se utiliza en otro tipo de contexto.
Funciones Callback que requieren funciones anonimas

Su uso es limitado. 

Declaración de una función flecha

- var, let, const
const - buena practica utilizar const para declarar funciones flecha o lambda

- nombrefuncion

- Parámetro

- Establecer el bloque de códgo o proceso que va a ejecutar esta función

=> - Fat arrow

invocaión de una función flecha

nombreFuncionFlecha();

*/

//Función general
function funcionNormal (parametro) {
    return 'Hola ' + parametro;
}

//Función flecha - Arrow Function
const funcionFlecha = parametro => 'Hola ' + parametro;

//Funciones flecha con más parametros

const funcionVariosParametros = (datoA, datoB) => {
    let datoC = datoA + datoB;
    return "La suma de datoA + datoB = " + datoC;
}

//Funciones flecha sin recibir un parámetro

const funcionSinParametros = () => {
    return "funcion flecha que no recibe parametros";
}

/////////////////////////////////

//Función flecha para calcular la velocidad

const calcularVelocidadFlecha = (distanciaFlecha, tiempoFlecha) => {
    
    console.log("Distancia =  " + distanciaFlecha + " metros");
    console.log("Tiempo = " + tiempoFlecha + " segundos");
    return "La velocidad calculada es = " + distanciaFlecha / tiempoFlecha + " m/s";
}





/////////////////////////////////////////////Ejercicios Realizar en manera de función general y funcion flecha.

//1. Calcular el cuadrado de un número.

function calcularCuadrado (numero1) {
    return "El cuadrado de un numero: " + numero1 * numero1 ;
}

const calcularCuadradoFlecha = (cuadrado) => "El cuadrado de un numero: " + cuadrado * cuadrado ;




//2. Escribir un código que convierta de grados celsius a grados farenheit

function gradosCelcius (celcius) {
    return "Grados Fahrenheit: " + (celcius * 1.8) + 32 ;
}

const gradosCelciusFlecha = (celciusFlecha) =>  "Grados Fahrenheit: " (celciusFlecha * 1.8) + 32 ;




//3. Realizar una función que calcule el valor de Voltaje, recibiendo como entradas o parámetros Resistencia y Corriente.

function valorVoltaje (resistencia, corriente) {
    return "Valor voltaje : " + corriente * resistencia ;
}

const valorVoltajeFlecha = (resistenciaFlecha, corrienteFlecha) => "Valor voltaje: " + resistenciaFlecha * corrienteFlecha;




//4. Elaborar una función que calcule el volumen de un cubo, recibiendo como dato de entrada Lado.

function volumenCubo (ladoCubo, ladoCubo2, ladoCubo3) {
    return "Volumen Cubo: " + ladoCubo * ladoCubo2 * ladoCubo3;
}

const volumenCuboFlecha = (cuboFlecha, cuboFlecha2, cuboFlecha3) => "Valor voltaje: " + cuboFlecha * cuboFlecha2 * cuboFlecha3;




//5. Calcular el área de un triángulo

function areaTriangulo (base, altura) {
    return "Volumen triangulo: " + base * altura / 2;
}

const areaTrianguloFlecha = (baseFlecha, alturaFlecha) =>"Valor Area Triangulo: " + baseFlecha * alturaFlecha /2;



//6. Calcular el volumen de una esfera


function volumenEsfera (radio) {
    return "Volumen Esfera: " + 3/4 + 3.1416 + Math.pow(radio, 3);
}

const volumenEsferaFlecha = (radioFlecha) => "Valor Esfera: " + 3/4 + 3.1416 + Math.pow(radioFlecha, 3);


//7. Convertir una cadena de texto a mayúsculas, usando el método .toUpperCase()

function mayus(textoo) {
    var resultado = textoo.toUpperCase();
    return resultado;
}

const mayusFlecha = (texto) => texto.toUpperCase();














