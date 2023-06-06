const hoy = new Date();
let year = hoy.getFullYear();
let month = hoy.getMonth();
function obtenerEdad(año){
    let Edad; 
    Edad=year-año;
    if(Edad >= 18){
        return "Es mayor de edad, tiene "+Edad+" años";
    }else {
        return "Es menor de edad, tiene"+Edad+" años";
    }
}
console.log(obtenerEdad(200));