// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  return nombre[0].toUpperCase() + nombre.slice(1);
}
mayuscula("mario");
// opcion 2
// console.log(mayuscula("mario"));

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  cb();

// opcion 2   
//  console.log(cb());
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  // function suma(n1, n2){ 
  //   return n1 + n2
  // }
  cb(n1, n2);

  // opcion 2
  // console.log(cb(n1, n2));
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  let totalDeSuma = numeros.reduce((acc, el) => acc + el, 0);
  cb(totalDeSuma);
  
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  const resForEach = [];
  resForEach = array.forEach(function(element){
  cb(element);
  })
   
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  // return array.map(function(element){
  //   return cb(element)
  // });

 // la forma definitiva:
  return array.map(element => cb(element));

}//igualmente lo mejor es crear una variable he igualarla a "array.map..." asi vamos a saber en donde se va a guardar nuestro nuevo array.

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  // 
  return array.filter(function(element){
    return element[0] === "a";
  })
  // la forma definitiva:
  // return array.filter(element => element[0] === "a");

}//igualmente lo mejor es crear una variable he igualarla a "array.filter..." asi vamos a saber en donde se va a guardar nuestro nuevo array.

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
