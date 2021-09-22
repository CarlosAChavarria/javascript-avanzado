const nombre = prompt("Ingresa tu nombre");
const edad = prompt("¿Cuál es tu edad?");

console.log('hola ' + nombre + ' buenos días sigues teniendo ' + edad + ' años');

console.log(`hola ${nombre} buenos días sigues teniendo ${edad} años. Con template puedes colocar codigo de JavaScript en el texto como la siguiente sum (2 + 4 + ) = ${2+4+5}`);

document.write("Imprimiendo en pantalla con template string y codigo html")
const saludo = `<h1>hola ${nombre} buenos días sigues teniendo ${edad} años. Con template puedes colocar codigo de JavaScript en el texto como la siguiente sum (2 + 4 + ) = ${2+4+5}</h1>`;

document.write(saludo);