// estructura de control tipo switch

const edad = parseInt(prompt("Ingresa tu edad"));
let mensaje = "";

switch(edad){
    case 18: mensaje = "Ya eres mayor de edad"; 
        break;
    case 25: mensaje = "Ya eres adulto";
        break;
    case 40: mensaje = "Ya estas en el cuarto piso";
        break;
    case 60: mensaje = "ya estas chocho";
        break; 
    default: mensaje = "¿Tu que haces aquí?, tu aún no cuentas";
        break;
}

document.write(`<P> ${mensaje}</P>`);

// switch con strings

// Con .toLowerCase() aseguramos que el valor pueda ser evaluado en caso de que contenga mayusculas (VALIDACIÓN)
const nombre = prompt("Ingresa tu nombre").toLowerCase();

switch(nombre){
    case 'carlos': mensaje = "Eres admin"; 
        break;
    case 'roberto': mensaje = "Eres usuario";
        break;
    case 'Luis': mensaje = "Eres gerente";
        break;
    default: mensaje = "Ese nombre no existe";
        break;
}

document.write(mensaje);