let num1 = parseInt(prompt("Ingresa un número"));

// NaN not a number
// con esto hago validar que la vriable sea un número
// el coclo se repite hasta que la condición se cumpla no importa el número de veces que lo haga

// while(isNaN(num1)){
//     num1 = parseInt(prompt("Ingresa un número"));
// }

// let intentos = 0;
// while(num1 !==23){
//     console.log("No adivinaste el número secreto");
//     num1 = parseInt(prompt("Ingresa un número"));
//     intentos++;
// }

// console.log(`Felicidades encontraste el numero secreto el en intento ${intentos}`);

// do-while

do{
    document.write(`<p>El numero introducido es ${num1}</p>`)
    num1 = parseInt(prompt("Ingresa un número"));
}while(num1 > 5);