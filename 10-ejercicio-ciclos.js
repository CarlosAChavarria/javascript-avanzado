// suma los numeros introducidos y obtiene el promedio de estos hasta que se introduce un número negativo

let num = parseInt(prompt("Ingresa un número"));
let suma = 0;
let promedio = 0;
let contador = 0;

console.log(typeof(suma));
while(num > 0){
    contador++;
    suma += num;
    // suma = num + suma;
    num = parseInt(prompt("Ingresa un número"));
}

promedio = suma/contador;
document.write(`<br>Cantidad de números introducidos: ${contador} </br>`);
document.write(`<br>La suma de los valores es ${suma} </br>`);
document.write(`El promedio de los valores es ${promedio} `);