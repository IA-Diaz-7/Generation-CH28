//encotnrar valores

const misToppings = document.getElementsByTagName('li');
console.log(misToppings);


const toppingMarron = document.getElementsByTagName('fondo-marron');
console.log(toppingMarron);

const aceitunas = document.querySelector('ul li:not(.not-marron)');
console.log(aceitunas);

///////////

//Modificar texto
const titulo = document.getElementById('titulo');
console.log(titulo);

titulo.innerText = 'Mis toppings favoritos';

//////cambiar colores styles CSS

const elementoU = document.getElementById('aceitunas');

elementoU.style.backgroundColor= 'blue';

//////modificar atributos de un elemento

const enlaces = document.getElementsByTagName('a');
console.log(enlaces);
//console(enlaces[0].removeAttribute('href'));
console.log(enlaces[0].setAttribute('href', 'https://www.twitch.tv'));
enlaces[0].innerText = 'Twitch';

//Agragar o eliminar clases 

const primerTopping = document.querySelector('.topping');

    //primerTopping.classList.add('miclase');

console.log(primerTopping.classList);

//confirmar si tiene clase


console.log(primerTopping.classList.contains('fondo-marron')); //Arroja true porque su clase es fondo marron

//Crear un elemento (.append) Nos permite agregar un nodo dentro de otro nodo // .innerText agrgar texto

const listadeToppings = document.getElementById('lista-toppings');
const toppingNuevo = document.createElement('li');

toppingNuevo.classList.add('topping', 'fondo-marron');
toppingNuevo.innerText='Peperoni';

listadeToppings.append(toppingNuevo);

// Rcorrer el DOM (.parentElement: solo abarca elementos html // .parentNose: abarca todo el nodo con su texto)
    //.children accede a elementos hijos

console.log(listadeToppings.parentElement);


///////////////////////////////////////////////Eventos = funcion 

//Elemento : Target o accion que desencadena el evento
//Trigger: accion que desencadena el evento 
//Event handler: funcionq ue va manejar lo que ocurre cuando se desencadena ele vento
//Event listener: coneexion entre el evento


/*function mostrarClic(topping){
    console.log('topping');
}
*/

////////////////////////////    .adEventListener

const toppings = document.getElementsByClassName('topping');

/* function mostrarClic(e){
    console.log(e.target.innerText);
}
*/

for(const topping of toppings){
    topping.addEventListener('click', (e) =>{
        console.log(e.target.innerText);
    });
}






