//POO

//Gatito Michiberto. Propiedades (atributos)
// let nombre = "Michiberto";
// let edad = 5;
// let especie = "Michi";
// let raza = "Angora";
// let caracter = "Curioso";
// let color = "Blanco";

//Métodos
function comer() { }
function treparArboles() { }
function dormir() { }
function maullar() { }
function ronrronear() { }

//const object = {key1(property1): value, key2(property2):value2...}

//Michiberto ahora es un objeto
const gatito1 = {
    nombre: "Michiberto",
    edad: 5,
    especie: "Michi",
    raza: "Angora",
    caracter: "curioso",
    color: "Blanco"
};


//Michirilo
const gatito2 = {
    nombre: "Michirilo",
    edad: 2,
    especie: "Michi",
    raza: "Siames",
    caracter: "Arisco",
    color: "Gris"
};

//Michifredo
const gatito3 = {
    nombre: "Michifredo",
    edad: 8,
    especie: "Michi",
    raza: "Montes",
    caracter: "Flojisimo",
    color: "Naranja"
};
console.log(gatito1, gatito2, gatito3);

console.log(`El nombree de gatito 1 es: ${gatito1.nombre}`);
console.log(`${gatito2.nombre} tiene un caracter ${gatito2.caracter}`);
console.log(`Mis gatitos se llaman ${gatito1.nombre}, ${gatito2.nombre}, ${gatito3.nombre}`);


//Clases para agilizar el proceso de creación de código (funcionan como plantillas)

//1. Le decimos a JS que utilizaremos POO con la palabra reservada class, la cual define mi clase.

class Gatito {
    //2. Definir atributos (propiedades) como variables, para asignarles valores posteriormente.
    nombre = "";
    edad = 0;
    especie = "";
    raza = "";
    caracter = "";
    color = "";

    //3. Agregar constructores, nos permite construir los atributos de la clase, agregando valores o parámetros.
    constructor(nombre, edad, especie, raza, caracter, color) {
        this.nombre = nombre;
        this.edad = edad;
        this.especie = especie;
        this.raza = raza;
        this.caracter = caracter;
        this.color = color;
    }

    //4. Definir los métodos como funciones o acciones
    comer() {
        console.log("Comiendo pescadito");
    }
    treparArboles() {
        console.log("escandalo");
    }
    dormir() {
        console.log("Mimiendo... ZZZZ");
    }
    maullar() {
        console.log("miau");
    }
    ronrronear() {
        console.log("Prrrrr");
    }
    
}

//5. Crear objetos (gatitos),  con la palabra reservada new
let michiberto = new Gatito("Pelusa", 5, "Gato", "Angora", "Amoroso", "Blanco");

let michirilo = new Gatito("Michirilo", 2, "Michi", "Siames", "Arisco", "Gris");

let michifredo = new Gatito("Michifredo", 8, "Michi", "Montes", "Flojo", "Naranja");

console.log(michiberto);

michirilo.dormir();
michifredo.treparArboles();
michiberto.ronrronear();
michirilo.maullar();

/*Orden para instanciar objetos a partir de una clase
    Class
    Atributos como variables vacias
    Constructores (this)
    Métodos o acciones
    Fuera de la clase, se instancian (crean) objetos con new
*/