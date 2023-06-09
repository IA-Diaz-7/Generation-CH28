/*==============================BUCLES=================================

* Iteración. Proceso de repetir una secuencia de instrucciones o acciones en un programa. Es decir, ejecutar un bloque de código muchas veces, basado en una condición o en una colección de elementos.

-- Operadores de incremento (++) y operadores de decremento (--)

==================== CICLO FOR =========================

Un ciclo for, se repite hasta que la condición se evalúe como false. Crea 3 expresionales opcionales.

Sintaxis
    for(expresioniInicial; expresionCondicional; expresionActualizacion){
        //bloque de codigo a ejecutar
    }

    1. Inicialización. Se debe inicializar con una variable que será evaluada en la expresión a comparar. Variable global o local.
    2. Condición. Es una expresión que debe cumplir la variable inicial (true), si no se cumple (false) el bucle termina.
    3. Pasos a realizar. Son los intervalos que cambiarán la variable inicial mientras sea true

*/

//Programa para contar los boletos de un concierto con local

for(let boleto = 1; boleto <=50; boleto++){
    console.log(`Boleto ${boleto}`);
}

//Programa para contar los paletas con variable global

let paletas = 1;
for(paletas; paletas <= 20; paletas++){
    console.log(`Tengo ${paletas} paletas`);
}

//Cuenta regresiva
let cuentaRegresiva = 18;
for(cuentaRegresiva; cuentaRegresiva >= 0; cuentaRegresiva--){
    console.log(cuentaRegresiva);
}

/*¿Como recorremos arrays con el ciclo for?

Debemos usar indices del arreglo para poder usar el bucle, indices desde el 0 hasta n y vamos a utilizar la propiedad length


*/


const ch28 = ["Mari", "Andrea", "Pessy", "Ana Fer", "ingrid", "Blanca", "Pau", "Nancy", "Yare", "Magali"];

for(let i = 0; i < ch28.length; i++){
    console.log(ch28[i]);
}

/*======= Variaciones del ciclo for
-- for...of nos permite recorrer el objeto (array) y devuelve el valor
-- foor..in nos permite recorrer el objeto (arrar) y devuelve su posición

*/


//For..of
let animales = ["perro", "gato", "colibri", "pantera", "leon", "grillo"];
for(let animal of animales){
    console.log(animal + " Pertenece al array animales");
}

//For..in
for(let animal in animales){
    console.log(animal);
}


// Sumar los numeros del 1 a 20
let suma=0;
for(let i=1;i<=100;i++ ){
    //suma = suma + i
    suma += i;
}
console.log(suma);

//Imprima los numeros pares del 1 a 20
for(let i = 1; i <= 20; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}


//imprima la tabla de multiplicar del 5
const multiplicando = 5;
for(let i = 1; i <= 10; i++){
    let resultado = multiplicando * i;
    console.log(`${multiplicando} x ${i} = ${resultado}`);
}

/*=================== CICLO WHILE ===============

Recorre un bloque de código siempre que una condición especifica sea verdadera.
Sirve para realizar una tarea repetitiva MIENTRAS una condición sea verdadera.

Sintaxis
    while (condicion){
        //bloque de código a ejecutar
    }

***** CUIDADO CON DESCRIPCIÓN ****

*/

let productos = 5;
while (productos > 0){
    console.log(productos + " Productos vendidos");
    productos--;
}

//Imprimir los números del 1 al 10
let numero1 = 0;
while(numero1 < 10){
    numero1++
    console.log("El número es " + numero1);
}

//Imprimir los elementos de un array
const frutas = ["manzana", "platano", "naranja", "mandarina", "limon"];
let fruta = 0;

while(fruta < frutas.length){
    console.log(frutas[fruta]);
    fruta++;
}


//Hacer una secuencia de asteriscos
let totalAsteriscos = 5;
let iteracion = 0;
let texto = "";

while(iteracion < totalAsteriscos){
    texto = texto + "*";
    console.log(texto)
    iteracion++;
}


/*================== CICLO DO WHILE ==================

Hacer mientras, crea un bucle que ejecuta una sentencia especificada, hasta que la condición de comprobación se evalúa como false.

Sintaxis
    do{
        //Bloque de codigo a ejecutar
    }while (condicion);


*/

//Contar del 1 al 5
let numero2 = 1;
do{
    console.log(numero2);
    numero2++;
}while(numero2 < 6);

//Mostrar productos vendidos
let producto = 5;
do{
    console.log(producto + " productos vendidos");
    producto--;
}while(producto>=1)


/* ======== Control de ciclos ==========
--- Sentencia break: terminar el bucle actual. Permite al programa salir de una sentencia, para que se pueda ejecutar necesita estar anidado dentro de la sentencia.

--- Sentencia continue: No termina el bucle, sino que salta a la siguiente iteración.

*/

//Ejemplo de break
let numero3 = 0;

while(numero3 < 100){
    numero3++;
    console.log(numero3);

    if(numero3 === 10){
        //break;
    }
}

//Ejemplo de continue

for(let cliente= 1; cliente <= 10; cliente++){
    if(cliente === 5){
        console.log("!!! Eres el cliente número 5, GANASTE !!!")
        continue;
    }if(cliente === 9){
        console.log("!!! Eres el cliente número 9, GANASTE !!!")
        continue;
    }

    console.log("Eres el cliente número " + cliente);
}






