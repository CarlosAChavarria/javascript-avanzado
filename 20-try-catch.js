
const gravedad = 9.8;
console.log(gravedad);

// gravedad = 10.1;
// console.log(gravedad);
// console.log('llego hasta aca');

// implementacion de try catch

try{
    gravedad = 10.1;
    // console.log(gravedad);
}catch(e){
    console.log(e)
}finally{
    console.log('llego hasta aca');
}