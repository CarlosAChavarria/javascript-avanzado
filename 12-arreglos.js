let lenguajes = ['JavaScript', 'Java', 'PHP', 'Python', 'C#', 'C++', 'Scala', 'Rust', 'Ruby', 'Cobol'];

// forEach

// function(lenguajes) - funcion anonima
// lenguaje es una variable para manejar cada valor
// index sirve para imprimir el indice del arreglo

lenguajes.forEach(function(lenguaje, index){
    document.write(`<p>${index+1} - ${lenguaje}</p>`);
});

// map

// crea un nuevo arreglo con los resultados

let numeros = new Array(2,3,4,5,10,28,47);

let numeros2 = numeros.map(function(num){
    return num * 2;
});

console.log(numeros);
console.log(numeros2);

// include

console.log(lenguajes.includes('PHP'));
console.log(lenguajes.includes('HOLA'));

// filter
// crea un nuevo arreglo con todos los elementos que cumplan con la condicion

let arrayFiltrado = numeros.filter(function(num){
    if(num <= 10){
        return num;
    }
});

console.log(arrayFiltrado);
