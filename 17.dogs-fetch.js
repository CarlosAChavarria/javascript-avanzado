const $btnDogs = document.querySelector('#btnDogs');
const $divDogs = document.querySelector('#dogs');
let imgDog = document.createElement('img');

$btnDogs.addEventListener('click', () => {
    fetch('https://dog.ceo/api/breeds/image/random').then(resp => resp.json()).then(data => {
        console.log(data); 
        // en este caso estoy extrayendo un mensaje
        // imgDog.src indica donde en donde quiero colocar el valor a extraer. En este caso .message indica que estoy extrayendo un dato contenido en una atributo del objeto que esta designado como 'message'.
        imgDog.src = data.message;
        imgDog.innerHTML = 
        $divDogs.appendChild(imgDog);
    });
})