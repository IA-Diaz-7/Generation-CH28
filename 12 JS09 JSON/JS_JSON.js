/* Hoisting. Es un comportamiento especial en el cual las declaraciones de variables y funciones se mueven al principio de ambito, es decir, antes de que se ejecute el codigo.

*/

//Ejemplo de hoisting en funciones

saludoGatito();

function saludoGatito(){
    console.log('Hola soy un gatito');
}

// ==== JSON (JavaScript Objecto Notion), Notacion de objetos de JS.
//  Es un formato estandar ligero basado en texto y que nos sirve para representar datos estructurados basados en la sintaxis de JS.

// Es utilizado para transmitir datos en aplicaiones web, desde el usuario al servidor y viceversa. =======


//Objeto comun JS
let laika = {
    nombre: 'Laika',
    edad: 5,
    color: 'Cafe'
}

console.log(laika);
console.log(typeof (laika));

//Objeto JSON 

let laikaJSON = `{
    'nombre': ' Laika',
    'edad': 5,
    'color': 'cafe'
}`;

console.log(laikaJSON);
console.log(typeof(laikaJSON));

// Los JSON son utiles para transmitir datos a travez de la red, pero deben ser convertido a objetos nativos de JS para acceder a sus datos.

// -- Serializacion. Proceso para convertir un objeto en un secuencia de bytes o en una cadena de carecteres que puede ser almacenada o transmitida.

// -- Deserealizacion. Proceso de tomar una secuencia de byte o una cadena de carecteres serializados y convertirlos en un objeto en la memoria.

let sultan = `{
    "nombre":"Sultan",
    "edad": 4,
    "color":"crema"
}`;

let milaneso = {
    'nombre':'Milaneso',
    'edad': 7,
    'color':'blanco'
};

// Para convertir (serializacion y desarealizacion) los diferentes tipos de objetos (nativos y JSON), recurrimos a dos metodos de JS:
// -JSON.parse() analiza una cadena de texto como JSON, transformandolo.
// -JSON.stringgify() convierte un objeto de JS en una cadena de texto tipo JSON.



//Metodo parse(). De JSON a Object

    let sultanTransformado = JSON.parse(sultan);
    console.log(sultanTransformado);

//Metodo stringify()

    let milanesoTransformado = JSON.stringify(milaneso);
    console.log(milanesoTransformado);


//Anidacion de objetos en objetos 

const employees = { employes : [
    {firtsName: 'Carlos', lastname: 'Navarro', age: 29},
    {firstName: 'Jonathan', lastname: 'Mendoza', age: 25},
    {firstName: 'Nancy', lastname: 'Perez', age: 24},
    ]
}
console.log(typeof(employees));
console.log(employees)

let employeesTrasnform = JSON.stringify(employees);
    console.log(employeesTrasnform);
    console.log(typeof(employeesTrasnform));

let rickSanchez = `{
    "id": 1,
    "name": "Rick Sanchez",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
    "origin": {
        "name": "Earth (C-137)",
        "url": "https://rickandmortyapi.com/api/location/1"
    },
    "location": {
        "name": "Citadel of Ricks",
        "url": "https://rickandmortyapi.com/api/location/3"
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    "episode": [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/2",
        "https://rickandmortyapi.com/api/episode/3",
        "https://rickandmortyapi.com/api/episode/4",
        "https://rickandmortyapi.com/api/episode/5",
        "https://rickandmortyapi.com/api/episode/6",
        "https://rickandmortyapi.com/api/episode/7",
        "https://rickandmortyapi.com/api/episode/8",
        "https://rickandmortyapi.com/api/episode/9",
        "https://rickandmortyapi.com/api/episode/10",
        "https://rickandmortyapi.com/api/episode/11",
        "https://rickandmortyapi.com/api/episode/12",
        "https://rickandmortyapi.com/api/episode/13",
        "https://rickandmortyapi.com/api/episode/14",
        "https://rickandmortyapi.com/api/episode/15",
        "https://rickandmortyapi.com/api/episode/16",
        "https://rickandmortyapi.com/api/episode/17",
        "https://rickandmortyapi.com/api/episode/18",
        "https://rickandmortyapi.com/api/episode/19",
        "https://rickandmortyapi.com/api/episode/20",
        "https://rickandmortyapi.com/api/episode/21",
        "https://rickandmortyapi.com/api/episode/22",
        "https://rickandmortyapi.com/api/episode/23",
        "https://rickandmortyapi.com/api/episode/24",
        "https://rickandmortyapi.com/api/episode/25",
        "https://rickandmortyapi.com/api/episode/26",
        "https://rickandmortyapi.com/api/episode/27",
        "https://rickandmortyapi.com/api/episode/28",
        "https://rickandmortyapi.com/api/episode/29",
        "https://rickandmortyapi.com/api/episode/30",
        "https://rickandmortyapi.com/api/episode/31",
        "https://rickandmortyapi.com/api/episode/32",
        "https://rickandmortyapi.com/api/episode/33",
        "https://rickandmortyapi.com/api/episode/34",
        "https://rickandmortyapi.com/api/episode/35",
        "https://rickandmortyapi.com/api/episode/36",
        "https://rickandmortyapi.com/api/episode/37",
        "https://rickandmortyapi.com/api/episode/38",
        "https://rickandmortyapi.com/api/episode/39",
        "https://rickandmortyapi.com/api/episode/40",
        "https://rickandmortyapi.com/api/episode/41",
        "https://rickandmortyapi.com/api/episode/42",
        "https://rickandmortyapi.com/api/episode/43",
        "https://rickandmortyapi.com/api/episode/44",
        "https://rickandmortyapi.com/api/episode/45",
        "https://rickandmortyapi.com/api/episode/46",
        "https://rickandmortyapi.com/api/episode/47",
        "https://rickandmortyapi.com/api/episode/48",
        "https://rickandmortyapi.com/api/episode/49",
        "https://rickandmortyapi.com/api/episode/50",
        "https://rickandmortyapi.com/api/episode/51"
    ],
    "url": "https://rickandmortyapi.com/api/character/1",
    "created": "2017-11-04T18:48:46.250Z"
}`;

console.log(rickSanchez);
console.log(typeof(rickSanchez));
let rickSanchezObject = JSON.parse(rickSanchez);
console.log(rickSanchezObject);

//console.log(rickSanchezObject.gender);
//consooe.log(rickSanchezObject.origin);S