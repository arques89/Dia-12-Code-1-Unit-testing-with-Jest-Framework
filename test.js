// importar la función sum del archivo app.js
const { sum , fromDollarToYen , fromEuroToDollar , fromYanToPound} = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

// Test fromDollarToYen
test('DollarToYen' , () => {
    let r = fromDollarToYen(1);

    expect(r).toBe(127.9)
})

// Test fromEuroToDollar 
test('fromEuroToDollar' , () => {
    let s = fromEuroToDollar(1);

    expect(s).toBe(1.2)
})

// Test fromYanToPound 
test('fromYanToPound' , () => {
    let a = fromYanToPound(1);

    expect(a).toBe(0.8)
})