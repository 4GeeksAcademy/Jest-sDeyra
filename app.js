const { log } = require("console")

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    // Convertimos el valor a dólares
    let valueInEuro = valueInDollar / 1.07;
    let valueInYen = valueInEuro * oneEuroIs.JPY 
    // Retornamos el valor en dólares
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    // Convertimos el valor a dólares
    let valueInEuro = valueInYen / oneEuroIs.JPY;
    let valueInPound = valueInEuro * oneEuroIs.GBP; 
    // Retornamos el valor en dólares
    return valueInPound;
}
 console.log(fromDollarToYen(3.5))
 console.log(fromYenToPound(3.5))
 

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };