//Crear una clase llamada Mascota con la palabra reservada class

class Mascota{
    //Atributos
    nombre = "";
    edad = 0;
    especie = "";

    //Constructor
    constructor(nombre,edad,especie){
        this.nombre = nombre;
        this.edad = edad;
        this.especie = especie;
    }

    //Métodos
    love(){
        console.log(this.nombre + " te quiero mucho cosito");
    }

}

