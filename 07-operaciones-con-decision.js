const val1 = parseInt(prompt("Ingresa el primer valor"));
const val2 = parseInt(prompt("Ingresa el segundo valor"));

if(val1 === val2){
    document.write(`Los numeros ${val1} y ${val2} son iguales`);
}else if(val1 > val2){
    const resultado1 = val1 + val2;
    const resultado2 = val1 - val2;
    document.write(`La suma de ${val1} + ${val2} = ${resultado1}<br>`);
    document.write(`La resta de ${val1} - ${val2} = ${resultado2}`);
}else{
    resultado1 = val1 * val2;
    resultado2 = val1 / val2;
    document.write(`El producto de ${val1} * ${val2} = ${resultado1}<br>`);
    document.write(`El cociente de ${val1} / ${val2} = ${resultado2}`);
}