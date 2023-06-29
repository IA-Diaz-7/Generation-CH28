/*

======== AXIOS ===========

Es una libreria de JS que se puede utilizar para realizar solicitudes HTTP que funcionen en el buscador y en NodeSJ.

Esta basado en promesas, y nos permite escribir codigo async/await para realizar solicitudes.

--async es una manera de trabajar con promesas, ya que asegura que una funcion devuelva una promesa. 

--await hace que JS espero hasta que la promesa se cumpla y devuelva su resultado.

//hasta que --await-- cumpla dicha promsa
*/

const axios = require('axios'); 

async function makeGetRequest(){
    const response = await axios.get('https://rickandmortyapi.com/api/character/1');

    let data = response.data;
    console.log(data);
}

makeGetRequest();


/*Para correr el package desde axios-get agrego las dependencias en el script de archivo package.json: "node simpleGet.js"

Posteriormente utilizo el comando para correlo en CLI: 
//$ npm run axios-get

//"axios-get": "node simpleGet.js" en el package para modificar el script

*/