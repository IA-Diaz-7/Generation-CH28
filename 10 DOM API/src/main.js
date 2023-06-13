// Obtener elementos /nodos

//.getElementById - Para seleccionar un objeto en especifico ID de html
const inputNombre = document.getElementById('nombre-input');


//Para una coleccion de elementos .getElementsByClassName
const parrafo = document.getElementById('texto');

//No especifico a clases #texto(ID) //  .texto(clase) Obtiene la primer coencidencia.
const parrafo2 = document.querySelector('.texto');

// Todos los que tienen texto // obtiene todos los nodos de coencidiencia.
const parrafos = document.querySelectorAll('.texto');


//Obtener atributos de nodo

//console.log(inputNombre.value); obttener valor
//console.log(inputNombre.getAtribute('id')); - Acceder al objeto
//console.log(inputNombre.id); ver elemento


//====================Modificacion o manipulación del DOM ==========

//dentro del input (recuadro), 
//inputNombre.value = 'Hola soy un input';


//Modificar lo que hay en el html (.innerHTML)
//document.getElementById('texto').innerHTML = 'Modificamos el texto'; 


//.addEventListener(); es una funcion se le agrega un escucha para clics, enter, espacios.

//ACtualizar el valor de texto

//inputNombre.addEventListener('input', actualizarTexto);


//Escuando un evento
//Modificando el valor de un nodo
inputNombre.addEventListener('input', e => {
    parrafo.textContent = e.target.value;
});

// inputNombre.addEventListener('input', e => parrafo.textContent = e.target.value);


//function actualizarTexto(e){
//    parrafo.textContent = e.target.value;
//}


//==========Agregar elementos============
//funcion appenChild

const divParrafo = document.getElementById('div-container');
const p = document.createElement('p');
p.textContent = 'Agregado desde JS';
// insertamos elemento
divParrafo.appendChild(p);



