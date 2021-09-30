// const $creaCartas = document.querySelector("#card");
// let carta = "";

// const cartas = (albumID, url, title) => {
//     carta = carta + `
//     <div class="card" style="width: 18rem;">
//     <img id="image" src="${url}" class="card-img-top" alt="...">
//         <div class="card-body">
//             <h5 id="title ${albumID}" class="card-title">${title}</h5>
//         </div>
//     </div>`
//     $creaCartas.innerHTML = carta;
// }

// for(let i = 0; i<1 ; i++){
//     fetch("https://jsonplaceholder.typicode.com/albums/1/photos").then(resp => resp.json()).then(data => {
//     console.log(data);
//     albumID = data[1].albumID;
//     url = data[2].url;
//     title = data[3].title;
//     cartas(albumID, url, title);
// });
// }

let $cartas = document.querySelector('#cartas');
let carta = "";

const creaCartas = (albumId, url, title) => {
  carta = carta + `
  <div class="card" style="width: 18rem;">
    <img src="${url}" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
    </div>
  </div>
`
  $cartas.innerHTML = carta;
};

for(let i = 0; i<1 ; i++){
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos").then(resp => resp.json()).then(data => {
    console.log(data);
    albumID = data[1].albumID;
    url = data[2].url;
    title = data[3].title;
    creaCartas(albumID, url, title);
});
}