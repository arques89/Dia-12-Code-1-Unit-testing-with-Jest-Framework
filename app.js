// esta es mi función que suma dos números
const sum = (a , b) => {
    return a + b;
}

// solo un registro en consola para nosotros.
console.log(sum(7,3));
// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)



// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromDollarToYen =  (dolar) => {
    return dolar * oneEuroIs.JPY;
}

const fromEuroToDollar = (euro) => {
    return euro * oneEuroIs.USD;
}

const fromYanToPound = (yan) => {
    return yan * oneEuroIs.GBP;
}
module.exports = {sum, fromDollarToYen, fromEuroToDollar, fromYanToPound};
console.log (fromDollarToYen(1));
console.log (fromEuroToDollar(1));
console.log (fromYanToPound(1));

