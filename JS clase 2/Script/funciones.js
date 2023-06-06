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