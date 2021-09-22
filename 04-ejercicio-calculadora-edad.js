const dato = prompt("hola, ¿cuál es tu año de nacimiento?");

const fecha = new Date()
const anioActual = fecha.getFullYear();

if(dato.length == 0){
    document.write(`<h3>No ingresaste valor<h3>`);
}
else{
    anio = parseInt(dato);
    if(anio < anioActual){
        const edad = anioActual - anio;
        const resultado = `Tu edad actual es ${edad}`;
        document.write(`<h3>${resultado}<h3>`);
    }else{
        document.write(`<h3>Te equivocaste al ingresar tu edad. <br> Valor introducido: ${anio}<h3><br><br>Por favor ingresa de nuevo tu edad`);
    }
}