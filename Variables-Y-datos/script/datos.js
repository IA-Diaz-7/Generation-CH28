//TIPOS DE DATOS Y VARIABLES EN JS

/* 

Declaración de variables

var: utilizamos esta palabra reservada para variables globales -que se pueden usar a lo largo de todo nuestro codigo


let: utilizamos esta palabra reservada para variables locales - que se pueden utilizar en unbloque específico de código

const: esta palabra reservada la utilizamos para datos o información que no pueden cambiar su valor

var nombreDeVariable = x; 

*/

// Tipos de Dato numérico (number)

/*
Los tipos de dato numérico se expresan sin comillas
Se pueden trabajar enteros, decimales, positivos, negativos

*/


var edad = 22; 
var altura = 1.72;
var añoDeNacimiento = 2001;
var diaDeLaSemana = 5;

var edadTexto = "22";

var nuevaEdad = Number(edadTexto)


// Tipo de Dato cadena de texto (string)

/*
Los tipos de datos string o cadenas de texto (string) utilizan comillas dobles o sencillas para asignar un valor.

son un tipo de dato sumamente flexible, sin embargo, hay que utilizarlos con cuidado./*
Los tipos de dato numérico se expresan sin comillas
Se pueden trabajar enteros, decimales, positivos, negativos

*/


var nombre = 'Iber';
var ciudad = 'CDMX';
var colorFav = "Blanco";

var edadString = String(edad);

// Tipo de Dato booleano (bollean)

var esRegio = false;
var escuchaMusica = true;

var condicion = Boolean(10 > 5); // True

var nuevaVariable = null;

// Reto 01 10*string

var apellido = 'Diaz';
var colorUva = 'morado';
var saborLimon = 'acido';
var concierto = 'EDC';
var consola = 'Playstation';
var diahoy = 'viernes';
var mes = 'junio';
var año = '2023';
var equipoFutbol = 'Liverpool';
var ligaFavorita = 'Premier League';

// Reto 01 10*boolean

var esMexicano = true;
var esLatino = true;
var esAnglosajon = false;
var estaVolando = false;
var gustoBabasonicos = true;
var esAmericano = false;
var esLiverpool = true;
var esChelsea = false;
var nadoMariposa = false;
var nadoCroll = true;
var condicion2 = Boolean(210 < 32);


// Reto 01 10*number

var año = 2023;
var mes = 06;
var seguidoresMaceo = 338006;
var juegosFisicos = 10;
var juegosDigitales = 40;
var leyendasApex = 20;
var hombresApex = 8;
var mujeresApex = 12;
var diasSemana = 7;
var diasMes = 30;


const pi = 3.14116;


///////////////////////////////////////////////////

// Arrays y objetos

/*

Array, también conocido como Arreglo, es un tipo de dato que pertenece a JS, en el cual almacena una colección de elementos de manera ordenada

Primer elemento = indice 0.
Hasta n cantidad de indices.

*/

var ejmploDeArray = ['Saludos', 'Que onda', 'Que hay', 'Que dice', 'Buenos días' ]

var otroArray = [31, 564, 117, 6, 321]


/*

Objetos, los encontramos como Object
Son tipos de dato similares a los Arrays, sin embargo
NO SON LO MISMO y su estructura y semántica indican al
motor de JS del navegador como trabajar con estos 
elementos

key = llave
value = valor
No tienen un orden
Formato JSON

*/

var ejemploDeObejeto = {
    nombre: 'Alejandro',
    apellido: 'Díaz',
    edad: 29,
    esestudiante: true,
};


















