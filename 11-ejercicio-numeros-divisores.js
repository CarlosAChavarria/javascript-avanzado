const num = parseInt(prompt("Introduce un número"));

let contador = 0;
// const divisores = [];

while(contador <= num){
    divisible = num / contador;
    if((divisible%1) == 0){
        document.write(`<br>${contador}</br>`);
    }
    contador++;
}

