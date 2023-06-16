class serpiente extends Mascota{
    comportamiento = '';

    constructor(comportamiento, nombre, edad, especie){
        super(nombre, edad, especie);
        this.comportamiento = comportamiento;
    }
}

//Metodos
saludando(){
    console.log('Hola, soy '+ this.nombre + this.nombre + ' y me estoy arrastrando');
}


    