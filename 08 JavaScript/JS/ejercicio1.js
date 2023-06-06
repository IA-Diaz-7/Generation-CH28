/*Crear un programa para calcular la edad en un michi 
0-2 años gatunos = 24 años humanos.
1 año gatuno = 4 años humanos extras

*/

let catYear;
function edadDeMichi(catYear){
    let age;
    if(catYear <0){
        return "Edad no valida"
    }
    if(catYear >=0 && catYear <=2){
        return "Tiene 24 años humanos";
    }else{
        age=24 + ((catYear-2)*4);
        return "El michi tiene +age+ años humanos";
    }
}
console.log(edadDeMichi(-1))

