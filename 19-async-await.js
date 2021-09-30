const $btnGatos = document.querySelector('#btnGatos');
const $divcat = document.querySelector('#cats');

// async y await

// asyn indica que es una funcion asincrona
// await detiene la ejecución hasta conseguir la respuesta

$btnGatos.addEventListener('click', async() => {
    // sustituye then de las promesas
    const resp = await fetch('https://api.thecatapi.com/v1/images/search')
    const data = await resp.json();

    const imgCat = document.createElement('img');
    imgCat.src = data[0].url;
    imgCat.width = '300'
    $divcat.appendChild(imgCat);

})


// $btnGatos.addEventListener('click', () => {
//     fetch('https://api.thecatapi.com/v1/images/search').then(resp => resp.json()).then(data => {
//         console.log(data); 
//         const imgCat = document.createElement('img');
//         imgCat.src = data[0].url;
//         $divcat.appendChild(imgCat);
//     });
// })
