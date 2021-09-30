// Fecth nos permite hacer peticiones http desde javascript. Es una forma de acceder un recurso

// solicitando datos a una página por el método get

// fectch es una petición asincrona, no tiene los datos al instante
// .jason transforma la peticion a un archivo .jason  para ser leida, a esto se le llama promesas

// const peticion = fetch('https://jsonplaceholder.typicode.com/todos/1').then(resp => resp.json()).then(data => {console.log(data);});

// me devuelve e inprimo un objeto json.
// esta es la estructura general para consumir APIs 
// el primer then es la respuesta que recibe, el segundo es una funcion anonima para tratar la data del objeto


// fallo en las promesas, uso de cath

const peticion = fetch('https://jsonplaceholder.typicode.com/todos/1').then(resp => resp.json()).then(data => {console.log(data);}).catch(e => {console.log(e);});
console.log(peticion);
// en este caso atrapa un error por url incorrecta