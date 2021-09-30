// API que carga imagenes aleatorias de gatos

const $btnGatos = document.querySelector('#btnGatos');
const $divcat = document.querySelector('#cats');

$btnGatos.addEventListener('click', () => {
    fetch('https://api.thecatapi.com/v1/images/search').then(resp => resp.json()).then(data => {
        console.log(data); 
        const imgCat = document.createElement('img');
        imgCat.src = data[0].url;
        $divcat.appendChild(imgCat);
    });
})

// desestructuracion 
// no siempre se ha de hacer desestructuracion, solo es una herramienta para un acceso a los datos 

// $btnGatos.addEventListener('click', () => {
//     fetch('https://api.thecatapi.com/v1/images/search').then(resp => resp.json()).then(data => {
//         console.log(data);
//         // desestructuración de arreglo para sacar el objeto gato
//         const [cat] = data;
//         console.log(cat); 
//         const imgCat = document.createElement('img');
//         // obtengo la url de la imagen que la contiene el arreglo
//         imgCat.src = cat.url;
//         // imgCat.src = data[0].url;
//         $divcat.appendChild(imgCat);
//     });
// })