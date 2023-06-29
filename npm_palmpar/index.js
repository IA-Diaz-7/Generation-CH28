/*Modulo de importacion. Puedo importar lo modulos externos mediante la palabra reservada

parImpar(456786621);

*/


const parImpar = require('./parimpar');

parImpar(1378649); //impar
parImpar(42848); //par
parImpar(9);


//Para publicar el package de manera publica 
//$ npm publish --access=public