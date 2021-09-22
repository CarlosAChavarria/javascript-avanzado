const valor1 = parseInt(prompt("Ingresa el primer valor"));
const valor2 = parseInt(prompt("Ingresa el segundo valor"));

document.write(`<h3>Números impares<h3>`);

if(valor1 < valor2){
    for(let i = valor1; i <= valor2; i++){
        if(i%2 != 0){
            document.write(`<strong>${i},<strong>`);
        }
    }
}else{
    for(let i = valor1; valor2 <= i; i--){
        if(i%2 != 0){
            document.write(`<strong>${i},<strong>`);
        }
    }
}


// let impares = [];
// for(let i = valor1; i <= valor2; i++){
//     if(i%2 != 0){
//         impares.push(i);
//     }
// }

// console.table(impares);