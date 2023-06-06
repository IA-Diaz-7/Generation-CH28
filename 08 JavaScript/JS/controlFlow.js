/*
EXPRESIONES CONDICIONALES

Con junto de instrucciones que se ejecutan si se cumple una condición

--- if
--- else
--- else if
--- switch

=====Declaración if

Sintaxis
    if(condición){
        //cloque de código que se ejecuta si la condicón es verdadera
    }   

*/

//Ejemplo para validar la mayoría de datos
let edadDaniel = 37;

if(edadDaniel >= 18){
    console.log ("Es mayor de edad");
}

/*==== Delcaración else

Se utiliza como intrucción para especificar un bloque de código que se ejecuta si la condición es falsa
Sintaxis

    if(condición){
        //cloque de código que se ejecuta si la condicón es verdadera
    }   
    if(condition){
        //bloque de código que se ejecuta si la condicón es falsa
    }

*/

if(edadDaniel >=18){
    console.log("Es mayor de edad");
} else {
    console.log("Es menor de edad");
}

//Ejemplo de declaración if-else entre dos variables
//console.log("El número " + num1 + "es mayor que " + num2);

let num1 = 845369;
let num2 = 546824;

if(num1 > num2){
    console.log(`El número ${num1} es mayor que ${num2}`);
}  else{
    console.log(`El número ${num2} es mayor que ${num1}`);
}

//Segunda forma

let resultado;

if(num1 > num2){
    resultado = ("El número " + num1 + " es mayor que " + num2);
} else{
    resultado = ("El número " + num2 + " es mayor que " + num1);
}

console.log(resultado);

//Determinar si un numero es para o inpar
let numerito = 18979;

if(numerito % 2 === 0){
    console.log("El numero " + numerito + " es par")
} else {
    console.log("El numero " + numerito + " es impar")
}


/*====================== Operador ternario ================
Son una forma concisa de escribir una expresión condicional en un lenguaje de programación. Se puede utilizar para realizar la misma tarea de una declaración if-else completa.

Sintaxis
(condición) ? expresión_true : expresion_false;

*/

//Determinar si un numero es para o inpar utilizando operado ternario
let numerito2 = 18978;
(numerito % 2 === 0) ? console.log("el numero " + numerito2 + " es par") :  console.log("el numero " + numerito2 + " es impar")

//Tercera forma
/*let resultadoOperadorTernario (numerito % 2 === 0) ? (" el numero " + numerito + " es par") :  ("el numero " + numerito + " es impar")

console.log(resultadoOperadorTernario); */

/* ===== Sentencia else if =====

Se utiliza para especificar una nueva condición si la primera condición es falsa.

Sintaxis
    if(condición){
        //Si se cumple, se ejecuta este bloque
    }else if(condicón2){
        //Si se cumple, se ejecuta este bloque
    }else if(condición3){
        //Si se cumple, se ejecuta este bloque
    }else{
        //Se ejecuta si no se cumplió ninguna de las condiciones
    }

*/

/*Determinar que día de la semana corresponde el número, según la siguiente tabla:
    - 1 = Lunes
    - 2 = Martes
    - 3 = Miércoles
    - 4 = Jueves
    - 5 = Viernes
    - 6 = Sabado

*/

let dia = 8;

if(dia === 1){
    console.log("Lunes");
}else if(dia === 2){
    console.log("Martes");
}else if(dia === 3){
    console.log("Miercoles");
}else if(dia === 4){
    console.log("Jueves");
}else if(dia === 5){
    console.log("Viernes");
}else if(dia === 6){
    console.log("Sabado");
}else if(dia === 7){
    console.log("Domingo");
}else{
    console.log("Número invalido, intente nuevamente");
}

/*Crea un programa en JavaScript en donde le muestres al usuario se es de mañana, de tarde, noche o madrugada.
Requerimientos:
    - La hora almacenada en una variable (let hora)
    - Establecer el formato de 24 hrs
    - Tablita para determinar los horarios corrspondientes a mañana, tarde y noche
    * 6 - 12 es de mañana (hora >= 6 && hora <= 12)
    * 13 - 18 es de tarde (hora >= 13 && hora <= 18)
    * 19 - 23 es de noche (hora >= 19 && hora <= 23)
    * 0 - 5 es de madrugada (hora >= 0 && hora <= 5)
    * Si la hora esta fuera de los valores de 0 a 23, es invalido
 */

let hora = 4;

if(hora >= 6 && hora <=12){
    console.log("Es de mañana")
}else if(hora >= 13 && hora <= 18){
    console.log("Es de tarde")
}else if(hora >= 19 && hora <= 23){
    console.log("Es de noche, ya que inicia a las 19 hrs según la mayoría de la CH28")
}else if(hora >= 0 && hora <= 5){
    console.log("Es de madrugada, aunque nadie da las buena madrugadas")
}else{
    console.log("Escribe una valida entre 0 y 23")
}


// ================ Sentencias anidadas ==================
// Instrucciones: creas un programa para determinar si es mayor de edad o menor de edad. Si es mayor de edad, y tiene menos de 65 años, catalogarlo como adulto, si tiene
let edadGiovani = 30;

if(edadGiovani >=18 ){
    if(edadGiovani < 65){
        console.log("Es un adulto");
    }else{
        console.log("Es un adulto mayor");
    }
}else if(edadGiovani >= 12){
    console.log("Es un adolecente");
}else if(edadGiovani >=3){
    console.log("Es un niño");
}else{
    console.log("Es un bebe");
}


//Verificar la hora del día
const today = new Date(); //Nuevo obejeto con un constructor Date(). Sirve para traer la fecha y hora actual

//console.log(today);
let hour = today.getHours();//Metedo para invocar la hora del día en entero con formato de 24 horas.
//toLocaleTimeString Para horas y segundos.

function greenting(){
    if(hour >= 6 && hour <=12){
        console.log("Es de mañana")
    }else if(hour >= 13 && hour <= 18){
        console.log("Es de tarde")
    }else if(hour >= 19 && hour <= 23){
        console.log("Es de noche, ya que inicia a las 19 hrs según la mayoría de la CH28")
    }else if(hour >= 0 && hour <= 5){
        console.log("Es de madrugada, aunque nadie da las buena madrugadas")
    }else{
        console.log("Escribe una valida entre 0 y 23")
    }
}
greenting();


//Verificar la hora del día mediante una función pero de otra manera, guardando los bloques de ejecución en un nueva variable
function saludo(){
    let mensaje = "Error"

    if(hour >= 6 && hour <=12){
        mensaje = "Buenos días";
    }else if(hour >= 13 && hour <= 18){
        mensaje = "Beunas tardes";
    }else if(hour >= 19 && hour <= 23){
        mensaje = "Buenas noches";
    }else{
        mensaje ="buenas madrugadas";
    }
    return mensaje;
}
console.log(saludo());


//Crear un programa en JavaScript que evalue si un día corrsponde a día de la semana (L-V) o fin de semana (S y d).

const checarDia = (diaDeSemana) =>{
    let finDeSemana = diaDeSemana === "Sabado" || diaDeSemana === "Domingo";
    
    if(finDeSemana){
        return "Es fin de semana"
    }else{
        return "Es día de semanda (Lunes a viernes)"
    }
}
console.log(checarDia("Sabado"));


/* ======================= SWITCH ==========================

Permite evaluar la expresión haciendo coincidir el valor de la expresión con una etiqueta case. Si la encuentra, ejecuta la declaración.

Sintaxis

switch(expresion){
    case etiqueta1:
        declaración1
        break;
    case etiqueta2:
        declaración2;
        break;
        case etiqueta3:
        dec,aración3;
        break;
    case etiquetaN.................
        declaraciónN;
        break;
    default:
        declaraciónDesafult;
        break;
}


*/

/*Determinar qué día de la semana corresponde al número, según la siguiente tabla:
    - 1 = Lunes
    - 2 = Martes
    - 3 = Miércoles
    - 4 = Jueves
    - 5 = Viernes
    - 6 = Sábado
    - 7 = Domingo
*/

let diaSemana = 3;

switch(diaSemana){
    case 1 :
        console.log("Lunes");
        break;
    case 2 :
        console.log("Martes");
        break;
    case 3 :
        console.log("Miercoles");
        break;
    case 4 :
        console.log("Jueves");
        break;
    case 5 :
        console.log("Viernes");
        break;
    case 6 :
        console.log("Sabado");
        break;
    case 7 :
        console.log("Domingo");
        break;
    default: 
        console.log("Numero de la semana invalido");
        break;
}

//Crear un programa con un switch que muestre el precio del kilo de naranjas, manzanas, mandarinas, platanos, mangos.

let fruta = "Mandarinas";

switch(fruta.toLowerCase()){
    case "naranja":
        console.log("Las naranjas cuestan $30 el kilo");
        break;
    case "manzanas":
        console.log("Las manzanas cuestan $60 el kilo");
        break;
    case "mandarinas":
        console.log("Las mandarinas cuestan $25 el kilo");
        break;
    case "platanos":
        console.log("Las platanos cuestan 2 kilos por $25");
        break;
    case "mangos":
        console.log("Los mangos cuestan $22 el kilo");
        break;
    default:
        console.log("No tenemos esa fruta :c");
        break;
}

//Crear un programa con switch para evaluación de alumnos (Las calificaciones aprobatorias van de 5.5 a 10 y deben redondearse al numero superior inmediato).

let calificación = Math.ceil(9.2);

switch(calificación){
    case 10 :
        console.log("Aprobaste, tienes 10");
        break;
    case 9 :
        console.log("Aprobaste, tienes 9");
        break;
    case 8 :
        console.log("Aprobaste, tienes 8");
        break;
    case 7 :
        console.log("Aprobaste, tienes 7");
        break;
    case 6 :
        console.log("Aprobaste, tienes 6");
        break;
    default:
        console.log("Reprobaste");
        break;
}











