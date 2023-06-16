//Crear una nueva clase llamada perrito que herede propiedades y métodos de la clase mascota con la palabra reservada extends

class Perrito extends Mascota{
    //Definir atributos propios de la clase hija
    id = "";
    raza = "";

    //Constructor con atributos de clase hija y clase padre
    constructor(id,raza, nombre, edad, especie){
        super(nombre,edad,especie);
        this.id = id;
        this.raza = raza;
    }

    propiedades(){
        console.log("Mi perrito número" + this.id);
        console.log("Nombre: " + this.nombre);
        console.log("Edad " + this.edad);
    }

    sonido(){
        console.log("grrr");
    }
}

//Instanciar objetos: perrillo y appa
let perrillo = new Perrito(1, 'husky', )