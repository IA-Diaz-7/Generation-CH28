/* 
Tutorial para instalar un paquete de NPM
1. Crar una carpeta con un archivo .js
2. Abrir la ubiccaion de nustra carpeta en la termianl
3. Ejectuar algunos de los comando siguientes:
    $ npm init ---> package propio
    $ npm init -y ---> package de npm existente

4. Instalar el paquete desde la linea de comandos por ejemplo con el package colors seria:
5. Impotar el paquete desde el archivo main/index.js
6. Ejecutar el paquete mediante la terminal utilizando nodeJS
    $ node archivo.js

*/

const colors = require('colors');

console.log(colors.green('hola'));
console.log(colors.red.underline('i like cake and pies'));
console.log(colors.inverse('inverse the color'));
console.log(colors.rainbow('diomio como e posible!'));

colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
  });

  console.log("this is an error".error);