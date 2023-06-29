const calculator = require('../calculator.js');

test('Suma 2 numeros y regresa el valor resultante', () =>{
    expect(calculator.sum(10, 10)).toBe(20);
});

test('Calcula potencia de un numero A elevado a B', () =>{
    expect(calculator.power(2, 3)).toBe(8);
});

