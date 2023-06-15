//async vuelve sesion asincrona
//se agrega .then para que funcione
//simulacion asincrona

//const { reject } = require("async");

//async function f(){
 //   let promise = new Promise ((resolve, reject)  ) => {
    //    setTimeout(() => resolve('exito'), 3000);
//)}

//const result = await promise;

//alert(promise);


//}

/*
async function f() {
    let promise = new Promise((res, rej) => {
        setTimeout(() => res('done'), 3000)
    })
    
    let result = await promise;
    
    alert(result);
}

f();
*/


const btn = document.getElementById('btn-count');
const p = document.getElementById('contador');

let counter = 0;


btn.addEventListener('click', async () => {
    await setTimeout(() => {
        counter++;
        p.textContent = counter;
    }, 1000);
});



const btn2 = document.getElementById('btn-count2');
const p2 = document.getElementById('contador2')



btn2.addEventListener('click', async() =>{
    await setTimeout(()  => {
        counter--;
        p.textContent = counter;
    }, 1000);
} );




//1return 'hola';
//1f().then(alert);

